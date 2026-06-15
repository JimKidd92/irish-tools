// Post-build prerender for GitHub Pages SEO.
//
// GitHub Pages can't rewrite URLs, so we generate a static HTML file per route
// AND per data entry (every surname, county and slang term). Each gets its own
// title/description/canonical/OG, and entry/hub pages get the real content
// baked into #root so Google indexes actual text — not an empty shell. React
// takes over on load. Also emits sitemap.xml, robots-friendly 404.html.
//
// Runs automatically after `vite build` (see package.json "build").
import { readFile, writeFile, mkdir } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { dirname, resolve, join } from 'node:path'
import { ROUTE_META, SITE_URL, pathFor } from '../src/data/seo.js'
import { SURNAMES } from '../src/data/surnames.js'
import { COUNTIES } from '../src/data/counties.js'
import { SLANG } from '../src/data/slang.js'
import { slugify } from '../src/lib/slug.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const dist = resolve(__dirname, '../dist')
const countyInfo = JSON.parse(await readFile(resolve(__dirname, '../src/data/counties.generated.json'), 'utf-8'))
const template = await readFile(join(dist, 'index.html'), 'utf-8')

function esc(s) {
  return String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')
}

// Produce a full HTML document with metadata (and optionally baked content).
function render({ title, description, url, content = '' }) {
  let html = template
    .replace(/<title>[^<]*<\/title>/, `<title>${esc(title)}</title>`)
    .replace(/(<meta\s+name="description"\s+content=")[^"]*(")/, `$1${esc(description)}$2`)
    .replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`)
    .replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${esc(title)}$2`)
    .replace(/(<meta\s+property="og:description"\s+content=")[^"]*(")/, `$1${esc(description)}$2`)
    .replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${url}$2`)
    .replace(/(<meta name="twitter:title" content=")[^"]*(")/, `$1${esc(title)}$2`)
    .replace(/(<meta\s+name="twitter:description"\s+content=")[^"]*(")/, `$1${esc(description)}$2`)
  if (content) {
    html = html.replace('<div id="root"></div>', `<div id="root">${content}</div>`)
  }
  return html
}

async function writePage(path, html) {
  const dir = join(dist, path)
  await mkdir(dir, { recursive: true })
  await writeFile(join(dir, 'index.html'), html)
}

// --- content builders (crawlable HTML; React replaces it on load) -----------
function countiesInRegion(region) {
  return COUNTIES.filter((c) => region.includes(c.name))
}

function surnameContent(s) {
  const counties = countiesInRegion(s.region)
  const region = counties.length
    ? counties.map((c) => `<a href="/counties/${slugify(c.name)}/">${esc(c.name)}</a>`).join(', ')
    : esc(s.region)
  const related = SURNAMES.filter(
    (o) => o.name !== s.name && counties.some((c) => o.region.includes(c.name)),
  ).slice(0, 8)
  const rel = related.map((o) => `<a href="/surnames/${slugify(o.name)}/">${esc(o.name)}</a>`).join(' · ')
  return `<main class="prerender"><article>
    <h1>${esc(s.name)} — Irish Surname Origin &amp; Meaning</h1>
    <p><strong>Irish form:</strong> <span lang="ga">${esc(s.irish)}</span></p>
    <p><strong>Meaning:</strong> ${esc(s.meaning)}</p>
    <p><strong>Traditional stronghold:</strong> ${region}</p>
    ${s.note ? `<p>${esc(s.note)}</p>` : ''}
    ${rel ? `<p><strong>Related names from the same part of Ireland:</strong> ${rel}</p>` : ''}
    <p><a href="/surnames/">Browse all Irish surnames</a> · <a href="/">Irish Tools</a></p>
  </article></main>`
}

function countyContent(c) {
  const info = countyInfo[c.name] || {}
  const surnames = SURNAMES.filter((s) => s.region.includes(c.name)).slice(0, 12)
  const sur = surnames.map((s) => `<a href="/surnames/${slugify(s.name)}/">${esc(s.name)}</a>`).join(' · ')
  return `<main class="prerender"><article>
    <h1>County ${esc(c.name)} (${esc(c.irish)})</h1>
    <p>“${esc(c.nickname)}” — in the province of ${esc(c.province)}. County town: ${esc(c.town)}.</p>
    <p>${esc(c.blurb)}</p>
    ${info.extract ? `<p>${esc(info.extract)}</p>` : ''}
    ${sur ? `<p><strong>Surnames from ${esc(c.name)}:</strong> ${sur}</p>` : ''}
    <p><a href="/counties/">All 32 counties</a> · <a href="/places/">Places to visit</a> · <a href="/">Irish Tools</a></p>
  </article></main>`
}

function slangContent(s) {
  const more = SLANG.filter((o) => o.term !== s.term).slice(0, 8)
  const rel = more.map((o) => `<a href="/slang/${slugify(o.term)}/">${esc(o.term)}</a>`).join(' · ')
  return `<main class="prerender"><article>
    <h1>What does “${esc(s.term)}” mean?</h1>
    <p><strong>Meaning:</strong> ${esc(s.meaning)}</p>
    <p><strong>Example:</strong> “${esc(s.example)}”</p>
    <p><strong>More Irish slang:</strong> ${rel}</p>
    <p><a href="/slang/">The full Irish slang dictionary</a> · <a href="/">Irish Tools</a></p>
  </article></main>`
}

// Hub pages get a crawlable list of links to every entry.
function hubContent(heading, items, route, key) {
  const links = items
    .map((i) => `<a href="/${route}/${slugify(i[key])}/">${esc(i[key])}</a>`)
    .join(' · ')
  return `<nav class="prerender"><h1>${esc(heading)}</h1><p>${links}</p></nav>`
}

// --- generate ---------------------------------------------------------------
const sitemap = []
const today = new Date().toISOString().slice(0, 10)
function addToSitemap(path) {
  sitemap.push(`  <url><loc>${SITE_URL}${path}</loc><lastmod>${today}</lastmod></url>`)
}

// Route pages.
const HUB_CONTENT = {
  surnames: () => hubContent('Irish Surname Origins', SURNAMES, 'surnames', 'name'),
  counties: () => hubContent('Irish County Guide', COUNTIES, 'counties', 'name'),
  slang: () => hubContent('Irish Slang Dictionary', SLANG, 'slang', 'term'),
}

let routeCount = 0
for (const route of Object.keys(ROUTE_META)) {
  const meta = ROUTE_META[route]
  const url = SITE_URL + pathFor(route)
  const content = HUB_CONTENT[route] ? HUB_CONTENT[route]() : ''
  const html = render({ ...meta, url, content })
  if (route === 'home') {
    await writeFile(join(dist, 'index.html'), html)
  } else {
    await writePage(route, html)
  }
  if (route !== 'privacy') addToSitemap(pathFor(route))
  routeCount++
}

// Entry pages.
let entryCount = 0
for (const s of SURNAMES) {
  const slug = slugify(s.name)
  await writePage(`surnames/${slug}`, render({
    title: `${s.name} — Irish Surname Origin & Meaning · Irish Tools`,
    description: `The Irish surname ${s.name} (${s.irish}) means ${s.meaning}. Its traditional stronghold is ${s.region}.`,
    url: `${SITE_URL}/surnames/${slug}/`,
    content: surnameContent(s),
  }))
  addToSitemap(`/surnames/${slug}/`)
  entryCount++
}
for (const c of COUNTIES) {
  const slug = slugify(c.name)
  await writePage(`counties/${slug}`, render({
    title: `County ${c.name} Guide — ${c.nickname} · Irish Tools`,
    description: `${c.name} (${c.irish}), “${c.nickname}”, in ${c.province}. ${c.blurb}`,
    url: `${SITE_URL}/counties/${slug}/`,
    content: countyContent(c),
  }))
  addToSitemap(`/counties/${slug}/`)
  entryCount++
}
for (const s of SLANG) {
  const slug = slugify(s.term)
  await writePage(`slang/${slug}`, render({
    title: `What does “${s.term}” mean? · Irish Slang · Irish Tools`,
    description: `${s.term}: ${s.meaning}. Example — ${s.example}`,
    url: `${SITE_URL}/slang/${slug}/`,
    content: slangContent(s),
  }))
  addToSitemap(`/slang/${slug}/`)
  entryCount++
}

// Unknown paths get the SPA shell (with default metadata) and a true 404 status.
await writeFile(join(dist, '404.html'), render({ ...ROUTE_META.home, url: SITE_URL + '/' }))

await writeFile(
  join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemap.join('\n')}\n</urlset>\n`,
)

console.log(`Prerendered ${routeCount} routes + ${entryCount} entry pages + 404.html + sitemap (${sitemap.length} urls)`)
