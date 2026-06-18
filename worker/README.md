# Irish Tools — News Worker

A tiny stateless Cloudflare Worker that fetches Irish RSS feeds, merges them, and
returns clean JSON. No database, no accounts, no user data — read-only. Free tier
(100k requests/day) is far more than enough since upstream feeds are edge-cached.

## One-time deploy (~5 minutes)

1. **Create a free Cloudflare account** at https://dash.cloudflare.com/sign-up
2. Install the CLI and log in:
   ```bash
   npm install -g wrangler
   wrangler login          # opens a browser to authorise
   ```
3. From this `worker/` folder, deploy:
   ```bash
   cd worker
   wrangler deploy
   ```
4. Wrangler prints your Worker URL, e.g.
   `https://irish-tools-news.YOURNAME.workers.dev`
5. Put that URL in **`src/config.js`** as `NEWS_API`, then commit & push the site:
   ```js
   export const NEWS_API = 'https://irish-tools-news.YOURNAME.workers.dev'
   ```

That's it. The site's news automatically switches from the basic 2-source strip
to the full personalised aggregator once `NEWS_API` is set.

## Test it
```
https://irish-tools-news.YOURNAME.workers.dev/?catalog=1
https://irish-tools-news.YOURNAME.workers.dev/?sources=rte-news,the42,corkbeo
```

## Editing sources
Add/remove feeds in the `CATALOG` object in `news-worker.js`, then `wrangler deploy`
again. Keep the same source `id`s in sync with `src/data/newsSources.js` on the site.
