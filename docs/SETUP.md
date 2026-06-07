# Irish Tools — Setup & Go-Live Runbook

Everything needed to get the site on its custom domain, earning from ads, and
taking tips. Work top to bottom: **Domain → HTTPS → Ads → Buy me a pint.**

- **Live (temp) URL:** https://jimkidd92.github.io/irish-tools/ *(redirects to the custom domain once that's set)*
- **Custom domain:** `irishtools.ie` (GoDaddy)
- **Repo:** https://github.com/JimKidd92/irish-tools
- **Host:** GitHub Pages, auto-deploys on every push to `main`
- **GoDaddy customer #:** 608089876

---

## 1. Domain (`irishtools.ie` → GitHub Pages)

### Status / the current blocker
As of go-live prep the domain was **NXDOMAIN** — registered with GoDaddy but not
yet published in the `.ie` DNS zone, so GoDaddy wouldn't let us change
nameservers ("unavailable because of its status"). This is a registry-side
provisioning delay. **Support ticket raised** to get it unstuck.

Check status any time:
```bash
curl -s "https://dns.google/resolve?name=irishtools.ie&type=NS"
# "Status":3 = NXDOMAIN (not live yet)   "Status":0 = live
```

### Once the domain is active, do these in GoDaddy
GoDaddy → **My Products → irishtools.ie → DNS**.

1. **Use GoDaddy default nameservers** (Nameservers → Change → "GoDaddy default").
   This unlocks DNS record editing. Turn **off** any Domain Forwarding.
2. Add **four A records** on host `@` (the apex/bare domain):

   | Type | Name | Value             | TTL |
   |------|------|-------------------|-----|
   | A    | `@`  | `185.199.108.153` | 600 |
   | A    | `@`  | `185.199.109.153` | 600 |
   | A    | `@`  | `185.199.110.153` | 600 |
   | A    | `@`  | `185.199.111.153` | 600 |

3. Add **one CNAME** for `www`:

   | Type  | Name  | Value                  | TTL |
   |-------|-------|------------------------|-----|
   | CNAME | `www` | `jimkidd92.github.io`  | 600 |

4. *(Optional, IPv6)* four AAAA records on `@`:
   `2606:50c0:8000::153`, `…8001::153`, `…8002::153`, `…8003::153`

### GitHub side — already done (no action needed)
- `public/CNAME` contains `irishtools.ie` (ships in every build).
- Pages custom domain set to `irishtools.ie` (`gh api repos/JimKidd92/irish-tools/pages`).
- `vite.config.js` `base: '/'` (serves from the domain root).

### Verify + enable HTTPS (after DNS propagates, ~10–60 min)
```bash
curl -s "https://dns.google/resolve?name=irishtools.ie&type=A"   # expect the 185.199.x IPs
curl -sI https://irishtools.ie/ | head -1                        # expect HTTP/2 200
```
Then GitHub → repo **Settings → Pages → Enforce HTTPS** (tick once the cert is
issued; can take a few hours after DNS resolves).

### Troubleshooting
- **NXDOMAIN for >48h:** registry hasn't published it — GoDaddy support only.
- **"Nameserver change unavailable because of its status":** domain still pending; wait or chase support.
- **Site loads but CSS/JS 404 after switching domain:** confirm `vite.config.js` `base` is `'/'`.

---

## 2. Ads (Google AdSense)

### Prerequisites (status)
- [x] Real content (18+ tools + daily quiz)
- [x] Privacy policy page (`/privacy`)
- [x] Cookie consent banner
- [ ] **Live custom domain** ← apply only after this is up
- [ ] Google Consent Mode v2 wired in (see below — needed for EU traffic)

### Apply
1. Go to https://adsense.google.com → sign up with the site **`irishtools.ie`**
   (use the custom domain, not the github.io URL).
2. AdSense gives you a `<script>` snippet with your **publisher ID**
   (`ca-pub-XXXXXXXXXXXXXXXX`). Paste it into **`index.html`** — there's a
   commented placeholder block at the top of `<head>`.
3. Submit for review (typically a few days to ~2 weeks). Keep the site live and
   unchanged in structure during review.

### Turn ads on (after approval)
1. In `index.html`, uncomment the AdSense `<script>` and set your real publisher ID.
2. In **`src/components/AdSpace.jsx`**: set the real `slot` IDs, pass `live`, and
   uncomment the `<ins class="adsbygoogle">` block. Ad units already have
   placements (banner + sidebar) — see `<AdSpace />` usages in `src/App.jsx`.

### EU / GDPR — Consent Mode v2 (do before EU ads serve)
- We already store a consent choice (`src/lib/consent.js`, `hasAdConsent()`), but
  AdSense in the EEA/UK needs a **Google-certified CMP + Consent Mode v2**.
- When ready: load the AdSense/gtag consent defaults as `denied`, then update to
  `granted` only when `hasAdConsent()` is true. (Ask Claude to wire this once you
  have the publisher ID — it's a small change.)

---

## 3. Buy me a pint (tip jar)

1. Create a free page at **https://ko-fi.com** (0% fees) or
   **https://buymeacoffee.com** (~5%). Name it e.g. *Irish Tools*.
2. Copy your page URL (e.g. `https://ko-fi.com/irishtools`).
3. Paste it into **`src/config.js`**:
   ```js
   export const SUPPORT_URL = 'https://ko-fi.com/irishtools'
   ```
4. Commit & push — the 🍺 **Buy me a pint** button (footer) goes live automatically.
   Set `SUPPORT_URL = ''` to hide it again. Component: `src/components/BuyMeAPint.jsx`.

---

## 4. Maintenance — refreshing baked data

These scripts fetch external data **once** into static JSON (run manually, not
part of the build):

```bash
node scripts/fetch-counties.mjs   # county photos + descriptions  -> src/data/counties.generated.json
node scripts/fetch-places.mjs     # 550+ heritage sites (Wikidata) -> src/data/places.generated.json
node scripts/make-og.mjs          # regenerates the social card     -> public/og-image.png
```
Re-run, then `npm run build` and push. Data sources: Wikidata (CC0),
Wikipedia/Wikimedia (CC BY-SA — credited in the County Guide), OpenStreetMap (map tiles).

## Deploy
Just push to `main` — GitHub Actions builds and deploys (`.github/workflows/deploy.yml`).
```bash
npm run dev      # local preview
npm run build    # production build to ./dist
```
