// Client-side <head> updates for entry pages (per-surname/county/slang), so the
// browser tab and any client-side share-scrape reflect the specific entry.
function set(selector, attr, value) {
  const el = document.querySelector(selector)
  if (el && value) el.setAttribute(attr, value)
}

export function setHead({ title, description, canonical }) {
  if (title) document.title = title
  if (description) set('meta[name="description"]', 'content', description)
  if (description) set('meta[property="og:description"]', 'content', description)
  if (description) set('meta[name="twitter:description"]', 'content', description)
  if (title) set('meta[property="og:title"]', 'content', title)
  if (title) set('meta[name="twitter:title"]', 'content', title)
  if (canonical) set('link[rel="canonical"]', 'href', canonical)
  if (canonical) set('meta[property="og:url"]', 'content', canonical)
}
