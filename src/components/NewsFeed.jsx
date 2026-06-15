import { useEffect, useState } from 'react'
import { Newspaper } from 'lucide-react'

// Live Irish headlines via rss2json (free, CORS-enabled, no key). Headlines
// only — links open on the source site. Cached locally for 30 min so we don't
// refetch on every visit.
const FEEDS = [
  { src: 'RTÉ News', url: 'https://www.rte.ie/feeds/rss/?index=/news/', take: 3 },
  { src: 'The42', url: 'https://www.the42.ie/feed/', take: 2 },
]
const CACHE_KEY = 'irish-tools.news'
const TTL = 30 * 60 * 1000

function loadCache() {
  try {
    const raw = JSON.parse(localStorage.getItem(CACHE_KEY))
    if (raw && Date.now() - raw.t < TTL && raw.items?.length) return raw.items
  } catch {
    /* ignore */
  }
  return null
}

function timeAgo(dateStr) {
  const d = new Date(dateStr)
  if (isNaN(d)) return ''
  const mins = Math.round((Date.now() - d) / 60000)
  if (mins < 60) return `${Math.max(1, mins)}m ago`
  const hrs = Math.round(mins / 60)
  if (hrs < 24) return `${hrs}h ago`
  return `${Math.round(hrs / 24)}d ago`
}

export default function NewsFeed() {
  const [items, setItems] = useState(() => loadCache())

  useEffect(() => {
    if (items) return // fresh cache
    let cancelled = false
    Promise.all(
      FEEDS.map((f) =>
        fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(f.url)}`)
          .then((r) => (r.ok ? r.json() : null))
          .then((d) =>
            (d?.items || []).slice(0, f.take).map((it) => ({
              title: it.title,
              link: it.link,
              source: f.src,
              date: it.pubDate,
            })),
          )
          .catch(() => []),
      ),
    ).then((results) => {
      if (cancelled) return
      const merged = results.flat()
      if (merged.length) {
        setItems(merged)
        try {
          localStorage.setItem(CACHE_KEY, JSON.stringify({ t: Date.now(), items: merged }))
        } catch {
          /* ignore */
        }
      }
    })
    return () => {
      cancelled = true
    }
  }, [items])

  // If it never loads (offline / service down), render nothing rather than a broken box.
  if (!items || !items.length) return null

  return (
    <section className="news" aria-label="Latest Irish headlines">
      <h2 className="section-title">
        <Newspaper size={20} strokeWidth={1.75} aria-hidden="true" /> Latest from Ireland
      </h2>
      <ul className="news__list">
        {items.map((it, i) => (
          <li key={i}>
            <a className="news__item" href={it.link} target="_blank" rel="noopener noreferrer">
              <span className="news__source">{it.source}</span>
              <span className="news__title">{it.title}</span>
              <span className="news__time">{timeAgo(it.date)}</span>
            </a>
          </li>
        ))}
      </ul>
      <p className="news__note">Headlines via RTÉ &amp; The42. Tap to read on the source site.</p>
    </section>
  )
}
