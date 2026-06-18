import { NEWS_API } from '../config.js'

// Fetch merged headlines. Uses the Cloudflare Worker when NEWS_API is set
// (full aggregator), otherwise falls back to a basic rss2json strip so the site
// still shows news before the Worker is deployed. Results cached ~12 min.
const TTL = 12 * 60 * 1000

function cacheKey(ids) {
  return `irish-tools.news:${[...ids].sort().join(',')}`
}

function readCache(ids) {
  try {
    const raw = JSON.parse(sessionStorage.getItem(cacheKey(ids)))
    if (raw && Date.now() - raw.t < TTL && raw.items?.length) return raw.items
  } catch {
    /* ignore */
  }
  return null
}

function writeCache(ids, items) {
  try {
    sessionStorage.setItem(cacheKey(ids), JSON.stringify({ t: Date.now(), items }))
  } catch {
    /* ignore */
  }
}

export async function fetchNews(ids) {
  const cached = readCache(ids)
  if (cached) return cached

  const items = NEWS_API ? await fromWorker(ids) : await fromRss2json()
  if (items.length) writeCache(ids, items)
  return items
}

async function fromWorker(ids) {
  try {
    const res = await fetch(`${NEWS_API}/?sources=${ids.join(',')}`)
    if (!res.ok) return []
    const data = await res.json()
    return data.items || []
  } catch {
    return []
  }
}

// Fallback: two reliable feeds via rss2json (no Worker needed).
const FALLBACK = [
  { src: 'RTÉ News', cat: 'National', url: 'https://www.rte.ie/feeds/rss/?index=/news/', take: 4 },
  { src: 'The42', cat: 'Sport', url: 'https://www.the42.ie/feed/', take: 3 },
]

async function fromRss2json() {
  try {
    const results = await Promise.all(
      FALLBACK.map((f) =>
        fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(f.url)}`)
          .then((r) => (r.ok ? r.json() : null))
          .then((d) =>
            (d?.items || []).slice(0, f.take).map((it) => ({
              title: it.title,
              link: it.link,
              date: it.pubDate,
              image: it.thumbnail || it.enclosure?.link || null,
              source: f.src,
              category: f.cat,
            })),
          )
          .catch(() => []),
      ),
    )
    return results.flat()
  } catch {
    return []
  }
}

export function timeAgo(dateStr) {
  const d = new Date(dateStr)
  if (isNaN(d)) return ''
  const mins = Math.round((Date.now() - d) / 60000)
  if (mins < 1) return 'just now'
  if (mins < 60) return `${mins}m ago`
  const hrs = Math.round(mins / 60)
  if (hrs < 24) return `${hrs}h ago`
  return `${Math.round(hrs / 24)}d ago`
}
