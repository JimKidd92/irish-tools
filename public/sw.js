// Irish Tools service worker — deliberately minimal.
// Caches only the hashed, immutable build assets (/assets/*) so repeat visits
// and the installed app open fast; HTML and API calls always go to the network,
// so a deploy is picked up on the next load with no stale-content headaches.
const CACHE = 'irish-tools-assets-v1'

self.addEventListener('install', () => self.skipWaiting())

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim()),
  )
})

self.addEventListener('fetch', (e) => {
  const url = new URL(e.request.url)
  if (e.request.method !== 'GET' || url.origin !== location.origin) return
  if (!url.pathname.startsWith('/assets/')) return
  e.respondWith(
    caches.open(CACHE).then(async (cache) => {
      const hit = await cache.match(e.request)
      if (hit) return hit
      const res = await fetch(e.request)
      if (res.ok) cache.put(e.request, res.clone())
      return res
    }),
  )
})
