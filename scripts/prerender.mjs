// Post-build prerender for GitHub Pages SEO.
//
// GitHub Pages can't rewrite URLs, so for each route we copy dist/index.html
// to dist/<route>/index.html with that route's title/description/canonical/OG
// baked in. Google then sees a real 200 page with unique metadata per tool.
// Also emits sitemap.xml and a 404.html (the SPA, for unknown paths).
//
// Runs automatically after `vite build` (see package.json "build").
import { readFile, writeFile, mkdir } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { dirname, resolve, join } from 'node:path'
import { ROUTE_META, SITE_URL, pathFor } from '../src/data/seo.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const dist = resolve(__dirname, '../dist')

const template = await readFile(join(dist, 'index.html'), 'utf-8')

function esc(s) {
  return s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')
}

function htmlFor(route) {
  const meta = ROUTE_META[route]
  const url = SITE_URL + pathFor(route)
  return template
    .replace(/<title>[^<]*<\/title>/, `<title>${esc(meta.title)}</title>`)
    .replace(
      /(<meta\s+name="description"\s+content=")[^"]*(")/,
      `$1${esc(meta.description)}$2`,
    )
    .replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`)
    .replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${esc(meta.title)}$2`)
    .replace(
      /(<meta\s+property="og:description"\s+content=")[^"]*(")/,
      `$1${esc(meta.description)}$2`,
    )
    .replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${url}$2`)
    .replace(/(<meta name="twitter:title" content=")[^"]*(")/, `$1${esc(meta.title)}$2`)
    .replace(
      /(<meta\s+name="twitter:description"\s+content=")[^"]*(")/,
      `$1${esc(meta.description)}$2`,
    )
}

let count = 0
for (const route of Object.keys(ROUTE_META)) {
  if (route === 'home') {
    await writeFile(join(dist, 'index.html'), htmlFor('home'))
    continue
  }
  const dir = join(dist, route)
  await mkdir(dir, { recursive: true })
  await writeFile(join(dir, 'index.html'), htmlFor(route))
  count++
}

// Unknown paths get the SPA shell (with default metadata) and a true 404 status.
await writeFile(join(dist, '404.html'), htmlFor('home'))

// sitemap.xml
const today = new Date().toISOString().slice(0, 10)
const urls = Object.keys(ROUTE_META)
  .filter((r) => r !== 'privacy')
  .map(
    (r) =>
      `  <url><loc>${SITE_URL}${pathFor(r)}</loc><lastmod>${today}</lastmod></url>`,
  )
  .join('\n')
await writeFile(
  join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
)

console.log(`Prerendered ${count} routes + 404.html + sitemap.xml`)
