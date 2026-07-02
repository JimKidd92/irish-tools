# Irish Tools — Heavy-Load Scaling Architecture

Status: **planning / reference** · Preference: **GCP, serverless** · Last updated: 1 Jul 2026

This document is a forward plan for *if the site takes off* (a viral quiz day, a
big diaspora share, a press mention). It describes: what actually breaks first,
a GCP-serverless target architecture, and — importantly — a **phased plan so we
don't rebuild anything until a real trigger is hit.** Most of the site already
scales for free; the one thing that needs thought is the **leaderboard**.

---

## 1. Where we are today

| Concern | Today |
| --- | --- |
| Static site (tools, guides, county pages) | Vite build → GitHub Pages (global CDN) |
| Quiz + leaderboard + leagues API | Cloudflare Worker (`worker/quiz`) + **D1** (edge SQLite) |
| News proxy | Cloudflare Worker (`worker/news`) |
| Auth | Google Identity Services (client) + RS256 verify in the Worker; our own HS256 session |
| Client state | `localStorage` (immersion, saved locations, streak) |
| Analytics / ads | GoatCounter (cookieless) · AdSense |
| External data | Open-Meteo, Wikidata/Wikipedia, Frankfurter (all read-only, cacheable) |

**Key point:** the *static* site is already effectively infinitely scalable and
near-free (it's just files on a CDN). Anything with `?join=`, weather, news, or
guides scales without us doing anything. **The only stateful, write-taking,
aggregation-heavy component is the quiz backend** — so that is the entire subject
of this document.

---

## 2. Load model — what "blows up" actually means

The quiz has a very specific traffic shape:

- **Read-dominant, spiky.** Most requests are *leaderboard reads* and *"today's
  questions"* fetches. Both peak hard right after the **00:00 Europe/Dublin daily
  reset** and around evening prime time.
- **Bounded writes.** One `submit` per user per day, plus one `start` row. So
  writes ≈ **daily active users (DAU)**, concentrated in bursts but never more
  than a few per user per day. This is friendly.
- **Aggregation cost grows with history.** Weekly/monthly/**all-time** boards
  `GROUP BY user` over the whole `games` table. That query gets more expensive
  every day even if traffic is flat.
- **"My rank"** is a `COUNT(better)` per requesting user — the sneaky-expensive
  one at scale.
- **Private leagues are small** (families, friend groups — tens of people). They
  never need heavy machinery; they can always be computed on demand from the
  member set.

Rough targets to design against: **100k DAU**, **~5–10k req/s** at the post-reset
peak, leaderboard reads outnumbering writes ~50:1.

---

## 3. What breaks first (in priority order)

1. **All-time / monthly leaderboard aggregation** — full-table `GROUP BY` grows
   unboundedly. *First and worst.*
2. **"My rank" counts** — one scan-ish query per user per view.
3. **D1 write ceiling** — a single SQLite database has finite write throughput;
   a daily submission burst at 100k DAU may throttle.
4. **Thundering herd at reset** — everyone pulling "today's questions" at once.
5. **Cost of uncached reads** — every leaderboard view hitting the DB.

Note none of these is the static site, auth (JWKS is cached), or private leagues.

---

## 4. The one idea that fixes 80%: **cache + precompute the leaderboard**

Leaderboards do **not** need to be correct to the millisecond. If the global
board refreshes every **30–60 seconds**, nobody notices. That single relaxation
lets us collapse "N reads per second hitting the DB" into "one recompute per
minute," and it's the highest-leverage move at any scale:

- **Global boards** (large, hot): maintained in a **Redis sorted set** (the
  canonical leaderboard structure — O(log n) insert, O(log n) rank, ranked reads)
  *or* precomputed to a cached JSON blob on a timer. Reads never touch the
  relational store.
- **"My rank"**: `ZREVRANK` on the sorted set — O(log n), exact, cheap. (This is
  the thing SQL is worst at and Redis is best at.)
- **Private leagues** (small): computed **on demand** filtered by the member set.
  No caching needed; a league of 40 people is a trivial query forever.
- **"Today's questions" payload**: immutable for the day and identical for
  everyone → cache at the **CDN edge** with a long TTL keyed by date. The reset
  spike is absorbed by the CDN, never reaching compute. (Answers still never ship
  to the client — only the question/option text is cached.)

Everything below is in service of this idea.

---

## 5. Target GCP serverless architecture

```
                         ┌────────────────────────────┐
        Browsers ───────▶│  Cloud CDN + Cloud Armor     │  (DDoS / WAF / rate-limit)
                         └───────────────┬──────────────┘
             static assets │             │ /api/*   │ cached JSON (short TTL)
        ┌──────────────────▼──┐   ┌───────▼───────────▼──────┐
        │ Firebase Hosting     │   │  Cloud Run (API service) │  scale-to-zero,
        │ (Vite build, global) │   │  Node/Hono, autoscaled   │  autoscaling, concurrency
        └──────────────────────┘   └───┬───────────┬──────────┘
                                       │           │
                       ┌───────────────▼──┐   ┌────▼───────────────┐
                       │ Firebase Auth     │   │ Memorystore Redis   │  ← global leaderboards
                       │ (Google sign-in)  │   │ (sorted sets)       │    (ZADD/ZREVRANGE/ZREVRANK)
                       └───────────────────┘   └────┬───────────────┘
                                                    │ durable writes
                       ┌────────────────────────────▼───────────────┐
                       │ Firestore (users, games, leagues, reports)  │  serverless, autoscaling
                       └────────────────────┬───────────────────────┘
                                            │ (optional, extreme scale)
        Cloud Scheduler ──▶ Cloud Run Jobs  │  BigQuery (analytics / batch leaderboard recompute)
        (daily rotation,   (snapshots,      ▼
         report digests)    aggregation)   Pub/Sub (decouple submit → aggregate, if needed)

        Secret Manager (SESSION_SECRET, keys) · Cloud Logging/Monitoring · Cloud Build (CI/CD)
```

### Component mapping (Cloudflare today → GCP target)

| Role | Today | GCP target | Why |
| --- | --- | --- | --- |
| Static hosting + CDN | GitHub Pages | **Firebase Hosting** (or Cloud Storage + Cloud CDN) | Global edge, atomic deploys, scales free |
| API compute | Cloudflare Worker | **Cloud Run** | Serverless containers, scale-to-zero, autoscaling, no code-size/runtime limits |
| Auth | Hand-rolled GIS verify | **Firebase Authentication** | Managed Google (and more) sign-in, sessions, no JWKS code to maintain |
| Transactional data | D1 (SQLite) | **Firestore** | Serverless, autoscaling writes, no single-DB write ceiling |
| Leaderboards | SQL aggregation | **Memorystore Redis** sorted sets | Purpose-built ranking; kills the aggregation + my-rank cost |
| Scheduled jobs | GitHub Actions cron / Cloudflare cron | **Cloud Scheduler → Cloud Run Jobs** | Daily rotation, snapshots, report digests |
| Secrets | `wrangler secret` | **Secret Manager** | Managed, rotated, IAM-scoped |
| Edge cache | `cf.cacheTtl` | **Cloud CDN** cache rules | Absorbs read spikes for cacheable JSON |
| DDoS / WAF / rate-limit | Cloudflare (built-in) | **Cloud Armor** | Protect Cloud Run from abuse and floods |
| Observability | — | **Cloud Logging / Monitoring / Error Reporting** | SLOs, alerts, tracing |
| CI/CD | GitHub Actions | **Cloud Build + Artifact Registry** (or keep Actions) | Build container, deploy Cloud Run/Hosting |

---

## 6. Data + leaderboard design at scale

**Firestore collections**
- `users/{uid}` — displayName, createdAt (Firebase Auth owns identity).
- `games/{uid}_{date}` — date, startedAt, submittedAt, correct, timeMs, qids,
  answers. One doc per user per day (natural, contention-free key).
- `leagues/{code}` and `leagues/{code}/members/{uid}`.
- `reports/{qid}_{uid}`.

**Global leaderboard (Redis sorted sets)** — one key per period:
- `lb:daily:2026-07-01`, `lb:weekly:2026-W27`, `lb:monthly:2026-07`, `lb:all`.
- **Score encoding** so "most correct, then fastest" is a single sortable number.
  For daily: `score = correct * 1e10 - timeMs` (fits a float64 with room to
  spare). For aggregate periods, keep a **secondary tie-break set** or store
  `correct` and `timeMs` separately and rank in two steps — the sums can exceed
  float precision, so *do not* naively pack them. (Design detail — validate the
  encoding with the real number ranges before shipping.)
- **Write path:** on `submit`, Cloud Run (a) writes the durable `games` doc, then
  (b) `ZADD`s the four period keys. If we want the write to return instantly and
  never block on Redis, push the ZADD via **Pub/Sub** to an async consumer.
- **Read path:** `ZREVRANGE key 0 99 WITHSCORES` for the top 100; `ZREVRANK` +
  `ZSCORE` for the signed-in user's row. No relational query at all.
- **Expiry:** set TTLs on daily/weekly/monthly keys; `lb:all` persists.

**Private leagues** — no Redis. Filter `games` for the day/period **by the
league's member list** (tens of ids) and rank in memory. Cheap forever.

**Serverless-Redis note:** Memorystore is *provisioned* (hourly cost, not
scale-to-zero), which slightly breaks the "everything serverless" goal. If
scale-to-zero economics matter more than latency, alternatives are **Upstash
Redis** (serverless, pay-per-request, works fine from Cloud Run) or
**precomputed snapshots**: a Cloud Scheduler job every 30–60s recomputes top-100
per period into a Firestore doc / Cloud Storage JSON served via CDN (drops the
exact "my rank" to an approximate one). Pick based on whether exact live rank is
worth a standing Redis cost.

---

## 7. Scaling, resilience, cost

- **Autoscaling:** Cloud Run scales on concurrency; set `max-instances` high
  enough for peak, `min-instances` ≥ 1 during prime time to avoid cold starts
  (a small standing cost; scale-to-zero overnight).
- **Thundering herd:** the daily payload is CDN-cached (immutable per day), so the
  reset spike hits the edge, not Cloud Run. Submissions are naturally spread and
  bounded by DAU.
- **Backpressure:** Pub/Sub between `submit` and leaderboard aggregation lets the
  durable write succeed instantly and absorbs bursts.
- **Anti-cheat preserved:** scoring/timing stays **server-side in Cloud Run** —
  identical to today's server-authoritative model. Firebase Auth replaces our
  token plumbing but the guarantee is unchanged.
- **Abuse:** Cloud Armor rate-limits per IP; keep the one-play-per-day and
  one-report-per-user-per-question constraints.
- **Cost posture:** static + Cloud Run + Firestore are pay-per-use and scale to
  ~zero when idle. The only standing cost is Redis (if chosen) and any
  `min-instances`. **Watch Firestore read costs** — which is exactly why the
  leaderboard is cached and never read per-request from Firestore.

---

## 8. Phased plan — do NOT build this yet

The current Cloudflare + D1 stack is genuinely good and scales reads globally at
the edge for pennies. **Migrating to GCP is a large lift we should not start
until a real trigger fires.** Recommended order:

**Phase 0 — harden what we have (cheap, hours of work). Do this first if a spike looms.**
- Edge-cache the **leaderboard JSON** on the existing Worker (`cf.cacheTtl` ~30–60s).
- Edge-cache the **"today's questions"** payload (immutable per day).
- Add a Cloudflare **KV** or cached snapshot for weekly/monthly/all-time so those
  aggregations run on a timer, not per request.
- This alone likely carries us through the first viral event.

**Phase 1 — relieve the relational store (still on Cloudflare).**
- Move global-leaderboard ranking to a sorted-set store (Upstash Redis works from
  Workers) and keep D1 for durable rows. Triggered by: D1 write throttling, or
  aggregation latency creeping up.

**Phase 2 — GCP serverless target (this document's architecture).**
- Adopt when we've outgrown Cloudflare's model, want the GCP ecosystem
  (Firebase Auth, Firestore, BigQuery analytics), or need multi-region write
  scaling. Migrate in this order: static hosting → Cloud Run API (port the
  Worker; it's plain JS/Web APIs) → Firebase Auth → Firestore → Redis/leaderboard.

### Triggers (when to advance a phase)

| Signal | Action |
| --- | --- |
| Post-reset leaderboard latency > ~300 ms sustained | Phase 0 caching |
| D1 write errors / throttling during submit bursts | Phase 1 (offload writes/ranking) |
| All-time aggregation > ~1 s, or D1 near size limits | Phase 1 → 2 |
| Need BigQuery analytics, multi-region, or > Cloudflare limits | Phase 2 |

---

## 9. Open questions / risks

- **Redis score encoding** for aggregate periods needs validating against real
  number ranges (float64 precision) before relying on packed scores.
- **Vendor split:** GCP for the API while the static site could stay on
  Cloudflare/GitHub Pages — fine, but decide auth domain + CORS accordingly.
- **Migration data move:** exporting D1 → Firestore is a one-off script; plan a
  read-only cutover window.
- **Cost of `min-instances` and Redis** vs. the pure scale-to-zero ideal — a
  conscious trade of a little standing cost for latency.
- **Do we even need GCP?** Honestly, maybe not for a long time. This doc exists so
  that *if* we do, the path is mapped — not as a signal to migrate now.
