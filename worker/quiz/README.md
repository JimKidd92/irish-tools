# Irish Tools — Daily Quiz + Leaderboard Worker

A Cloudflare Worker + D1 database that powers the **ranked** Daily Quiz:
server-authoritative scoring (answers never reach the browser), "Sign in with
Google" accounts, and daily / weekly / monthly / all-time leaderboards.

Until this is deployed and the two values are set in `src/config.js`, the site
automatically falls back to the original local 5-question quiz, so nothing
breaks in the meantime.

---

## One-time setup

You'll need the Cloudflare CLI (`npm i -g wrangler`) and to be logged in
(`wrangler login`).

### 1. Create a Google OAuth client ID (for "Sign in with Google")

1. Go to <https://console.cloud.google.com/> → create/select a project.
2. **APIs & Services → OAuth consent screen** → set it up (External, add an app
   name, your email). You can leave it in "Testing" while you trial it, or
   "Publish" it for everyone.
3. **APIs & Services → Credentials → Create credentials → OAuth client ID**.
   - Application type: **Web application**.
   - **Authorised JavaScript origins**: add
     - `https://irishtools.ie`
     - `https://www.irishtools.ie`
     - `http://localhost:5173` (for local dev)
   - Create, then copy the **Client ID** (looks like
     `1234567890-abc.apps.googleusercontent.com`).

### 2. Create the D1 database

```bash
cd worker/quiz
wrangler d1 create irish-tools-quiz
```

Copy the printed `database_id` into `wrangler.toml` (replace
`REPLACE_WITH_D1_DATABASE_ID`).

### 3. Create the tables

```bash
wrangler d1 execute irish-tools-quiz --file=./schema.sql --remote
```

### 4. Set the config values in `wrangler.toml`

- `GOOGLE_CLIENT_ID` → the client ID from step 1.

### 5. Set the session secret (a long random string)

```bash
# generate one, e.g.: openssl rand -base64 32
wrangler secret put SESSION_SECRET
```

### 6. Deploy

```bash
wrangler deploy
```

It deploys to `https://irish-tools-quiz.<your-subdomain>.workers.dev`.

### 7. Wire the front-end

In `src/config.js` set:

```js
export const QUIZ_API = 'https://irish-tools-quiz.<your-subdomain>.workers.dev'
export const GOOGLE_CLIENT_ID = '1234567890-abc.apps.googleusercontent.com'
```

Commit + push — the ranked quiz and leaderboard go live.

---

## Adding questions (weekly)

Edit `worker/quiz/questions.js` (add `{ q, options: [...], answer: <index> }`
entries) and run `wrangler deploy` again. The bank is shared with the daily
selection — 10 questions a day, the same for everyone, cycling through the bank
before any repeat. Answers live here only and are never sent to the browser.

## How fairness works

- The browser fetches the day's 10 questions **without** the answer key.
- The Worker records the start time, scores the submitted answers itself, and
  measures elapsed time server-side.
- One game per account per day; ranking is **most correct, then fastest time**.

## Endpoints

| Method | Path | Auth | Purpose |
| --- | --- | --- | --- |
| POST | `/auth/google` | – | Verify a Google ID token, upsert the user, return a session token |
| POST | `/auth/name` | ✓ | Claim a unique public nickname |
| GET | `/quiz/today` | ✓ | Today's 10 questions (no answers) or your result |
| POST | `/quiz/submit` | ✓ | Score + time + rank + answer review |
| GET | `/leaderboard?period=daily\|weekly\|monthly\|all` | optional | Rankings (+ your row) |

## Reset / moderation

- Wipe a bad nickname:
  `wrangler d1 execute irish-tools-quiz --remote --command "UPDATE users SET display_name=NULL, display_name_lower=NULL WHERE display_name_lower='badname'"`
- Clear today's board (testing):
  `wrangler d1 execute irish-tools-quiz --remote --command "DELETE FROM games WHERE date='YYYY-MM-DD'"`
