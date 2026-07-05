// Irish Tools - News aggregator Worker.
//
// A tiny, stateless Cloudflare Worker that fetches Irish RSS feeds server-side
// (no CORS, no third-party like rss2json), parses them, merges + sorts + dedupes,
// and returns clean JSON. Upstream feeds are edge-cached (cf.cacheTtl) so each
// feed is fetched at most once per cache window and shared across all visitors.
//
// No database, no accounts, no user data - read-only.
//
// Endpoints:
//   GET /?sources=rte-news,the42,corkbeo   -> merged headlines from those sources
//   GET /?catalog=1                          -> the source catalogue (for the UI)
//
// Deploy: see worker/README.md.

const CATALOG = {
  // National
  'rte-news':      { name: 'RTÉ News',          category: 'National',      url: 'https://www.rte.ie/feeds/rss/?index=/news/' },
  'journal':       { name: 'The Journal',       category: 'National',      url: 'https://www.thejournal.ie/feed/' },
  'independent':   { name: 'Irish Independent',  category: 'National',      url: 'https://www.independent.ie/rss/' },
  'mirror':        { name: 'Irish Mirror',       category: 'National',      url: 'https://www.irishmirror.ie/?service=rss' },
  'extra':         { name: 'Extra.ie',           category: 'National',      url: 'https://extra.ie/feed' },
  'gript':         { name: 'Gript',              category: 'National',      url: 'https://gript.ie/feed/' },
  // Sport
  'rte-sport':     { name: 'RTÉ Sport',          category: 'Sport',         url: 'https://www.rte.ie/feeds/rss/?index=/sport/' },
  'the42':         { name: 'The42',              category: 'Sport',         url: 'https://www.the42.ie/feed/' },
  'balls':         { name: 'Balls.ie',           category: 'Sport',         url: 'https://www.balls.ie/feed' },
  // Regional & local
  'corkbeo':       { name: 'Cork Beo',           category: 'Regional',      url: 'https://www.corkbeo.ie/?service=rss' },
  'dublinlive':    { name: 'Dublin Live',        category: 'Regional',      url: 'https://www.dublinlive.ie/?service=rss' },
  'galwaybeo':     { name: 'Galway Beo',         category: 'Regional',      url: 'https://www.galwaybeo.ie/?service=rss' },
  'belfastlive':   { name: 'Belfast Live',       category: 'Regional',      url: 'https://www.belfastlive.co.uk/?service=rss' },
  'donegaldaily':  { name: 'Donegal Daily',      category: 'Regional',      url: 'https://www.donegaldaily.com/feed/' },
  'highlandradio': { name: 'Highland Radio',     category: 'Regional',      url: 'https://highlandradio.com/feed/' },
  'clareecho':     { name: 'The Clare Echo',     category: 'Regional',      url: 'https://www.clareecho.ie/feed/' },
  // Business & tech
  'siliconrepublic': { name: 'Silicon Republic', category: 'Business & Tech', url: 'https://www.siliconrepublic.com/feed' },
  // Entertainment
  'rte-ents':      { name: 'RTÉ Entertainment',  category: 'Entertainment', url: 'https://www.rte.ie/feeds/rss/?index=/entertainment/' },
  // Irish abroad
  'irishstar':     { name: 'Irish Star',         category: 'Irish Abroad',  url: 'https://www.irishstar.com/?service=rss' },
}

const PER_SOURCE = 8
const TOTAL = 45
const CACHE_TTL = 900 // 15 min edge cache per feed

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Cache-Control': 'public, max-age=300',
}

function decode(s) {
  return (s || '')
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
    .replace(/<[^>]+>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#0?39;|&apos;|&rsquo;/g, '’')
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(+n))
    .replace(/\s+/g, ' ')
    .trim()
}

function tag(block, name) {
  const m = block.match(new RegExp(`<${name}[^>]*>([\\s\\S]*?)<\\/${name}>`, 'i'))
  return m ? decode(m[1]) : ''
}

function attr(block, name, a) {
  const m = block.match(new RegExp(`<${name}\\b[^>]*\\b${a}=["']([^"']+)["']`, 'i'))
  return m ? m[1] : ''
}

function parseFeed(xml, src) {
  const isAtom = /<feed[\s>]/.test(xml) && !/<rss[\s>]/.test(xml)
  const splitter = isAtom ? /<entry[\s>]/ : /<item[\s>]/
  const blocks = xml.split(splitter).slice(1)
  const out = []
  for (const b of blocks.slice(0, PER_SOURCE)) {
    const title = tag(b, 'title')
    let link = isAtom ? attr(b, 'link', 'href') : tag(b, 'link')
    if (!link) link = attr(b, 'link', 'href')
    const date = tag(b, 'pubDate') || tag(b, 'published') || tag(b, 'updated') || tag(b, 'dc:date')
    let image =
      attr(b, 'media:content', 'url') ||
      attr(b, 'media:thumbnail', 'url') ||
      attr(b, 'enclosure', 'url')
    if (!image) {
      const body = (b.match(/<description[^>]*>([\s\S]*?)<\/description>/i)?.[1] || '') +
        (b.match(/<content:encoded[^>]*>([\s\S]*?)<\/content:encoded>/i)?.[1] || '')
      const im = body.match(/<img[^>]+src=["']([^"']+)["']/i)
      if (im) image = im[1]
    }
    if (title && link) {
      out.push({
        title,
        link: link.trim(),
        date,
        ts: Date.parse(date) || 0,
        image: image || null,
        source: src.name,
        sourceId: src.id,
        category: src.category,
      })
    }
  }
  return out
}

async function fetchSource(id) {
  const src = CATALOG[id]
  if (!src) return []
  try {
    const res = await fetch(src.url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; IrishToolsBot/1.0; +https://irishtools.ie)',
        Accept: 'application/rss+xml, application/atom+xml, application/xml, text/xml, */*',
      },
      cf: { cacheTtl: CACHE_TTL, cacheEverything: true },
    })
    if (!res.ok) return []
    const xml = await res.text()
    return parseFeed(xml, { id, ...src })
  } catch {
    return []
  }
}

export default {
  async fetch(request) {
    if (request.method === 'OPTIONS') return new Response(null, { headers: CORS })
    const url = new URL(request.url)

    if (url.searchParams.get('catalog')) {
      const sources = Object.entries(CATALOG).map(([id, s]) => ({
        id,
        name: s.name,
        category: s.category,
      }))
      return json({ sources })
    }

    const requested = (url.searchParams.get('sources') || '')
      .split(',')
      .map((s) => s.trim())
      .filter((s) => CATALOG[s])
    const ids = requested.length ? requested.slice(0, 12) : Object.keys(CATALOG).slice(0, 6)

    const results = await Promise.all(ids.map(fetchSource))
    const seen = new Set()
    const items = results
      .flat()
      .filter((it) => {
        const key = it.link.split('?')[0]
        if (seen.has(key)) return false
        seen.add(key)
        return true
      })
      .sort((a, b) => b.ts - a.ts)
      .slice(0, TOTAL)
      .map(({ ts, ...rest }) => rest) // drop internal ts

    return json({ items })
  },
}

function json(obj) {
  return new Response(JSON.stringify(obj), {
    headers: { 'content-type': 'application/json; charset=utf-8', ...CORS },
  })
}
