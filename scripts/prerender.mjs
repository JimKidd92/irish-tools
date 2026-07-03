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
import { COUNTY_ABOUT } from '../src/data/countiesAbout.js'
import { PLACES } from '../src/data/places.js'
import { SLANG } from '../src/data/slang.js'
import { publishedGuides } from '../src/data/guides.js'

const GUIDES = publishedGuides()
import { slugify } from '../src/lib/slug.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const dist = resolve(__dirname, '../dist')
const countyInfo = JSON.parse(await readFile(resolve(__dirname, '../src/data/counties.generated.json'), 'utf-8'))
const COUNTY_RICH = JSON.parse(await readFile(resolve(__dirname, '../src/data/countiesRich.generated.json'), 'utf-8'))
const template = await readFile(join(dist, 'index.html'), 'utf-8')

function esc(s) {
  return String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')
}

// Produce a full HTML document with metadata (and optionally baked content).
function render({ title, description, url, content = '', noindex = false }) {
  let html = template
    .replace(/<title>[^<]*<\/title>/, `<title>${esc(title)}</title>`)
    .replace(/(<meta\s+name="description"\s+content=")[^"]*(")/, `$1${esc(description)}$2`)
    .replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`)
    .replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${esc(title)}$2`)
    .replace(/(<meta\s+property="og:description"\s+content=")[^"]*(")/, `$1${esc(description)}$2`)
    .replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${url}$2`)
    .replace(/(<meta name="twitter:title" content=")[^"]*(")/, `$1${esc(title)}$2`)
    .replace(/(<meta\s+name="twitter:description"\s+content=")[^"]*(")/, `$1${esc(description)}$2`)
  if (noindex) {
    html = html.replace('</head>', '    <meta name="robots" content="noindex, follow" />\n  </head>')
  }
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
  const about = COUNTY_ABOUT[c.name] || ''
  const rich = COUNTY_RICH[c.name]
  const places = PLACES.filter((p) => p.county === c.name)
  const surnames = SURNAMES.filter((s) => s.region.includes(c.name)).slice(0, 12)
  const sur = surnames.map((s) => `<a href="/surnames/${slugify(s.name)}/">${esc(s.name)}</a>`).join(' · ')
  const placeList = places.length
    ? `<h2>Places to visit in ${esc(c.name)}</h2><ul>${places
        .map((p) => `<li><strong>${esc(p.name)}</strong> — ${esc(p.blurb)}</li>`)
        .join('')}</ul>`
    : ''
  const richHtml = rich
    ? `${rich.intro.map((p) => `<p>${esc(p)}</p>`).join('')}
    <h2>Cities, towns and villages in ${esc(c.name)}</h2>
    <ul>${rich.towns.map((t) => `<li><strong>${esc(t.name)}</strong> — ${esc(t.note)}</li>`).join('')}</ul>
    <h2>Famous people from ${esc(c.name)}</h2>
    <ul>${rich.people.map((p) => `<li><strong>${esc(p.name)}</strong> — ${esc(p.note)}</li>`).join('')}</ul>
    <h2>Did you know?</h2>
    <ul>${rich.facts.map((f) => `<li>${esc(f)}</li>`).join('')}</ul>`
    : ''
  return `<main class="prerender"><article>
    <h1>County ${esc(c.name)} Guide (${esc(c.irish)})</h1>
    <p>“${esc(c.nickname)}” — in the province of ${esc(c.province)}. County town: ${esc(c.town)}.</p>
    <p>${esc(c.blurb)}</p>
    ${about ? `<p>${esc(about)}</p>` : ''}
    ${richHtml}
    ${placeList}
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

function guideContent(g) {
  const body = g.body
    .map((b) => (b.h ? `<h2>${esc(b.h)}</h2>` : `<p>${esc(b.p)}</p>`))
    .join('\n')
  const others = GUIDES.filter((o) => o.slug !== g.slug)
    .slice(0, 3)
    .map((o) => `<a href="/guides/${o.slug}/">${esc(o.title)}</a>`)
    .join(' · ')
  return `<main class="prerender"><article>
    <h1>${esc(g.title)}</h1>
    <p>${esc(g.readMins)} min read</p>
    ${body}
    <p><strong>More guides:</strong> ${others}</p>
    <p><a href="/guides/">All guides</a> · <a href="/">Irish Tools</a></p>
  </article></main>`
}

function guidesHubContent() {
  const list = GUIDES.map(
    (g) => `<li><a href="/guides/${g.slug}/">${esc(g.title)}</a> — ${esc(g.description)}</li>`,
  ).join('\n')
  return `<main class="prerender"><h1>Guides</h1>
    <p>Longer reads on Irish life, heritage and travel.</p><ul>${list}</ul></main>`
}

function aboutContent() {
  return `<main class="prerender"><article>
    <h1>About Irish Tools</h1>
    <p>Irish Tools is a growing collection of small, useful and occasionally daft tools, guides and news for Ireland and the Irish abroad. It started with one tongue-in-cheek question — “is the immersion on?” — and grew into a little corner of the web that tries to capture the everyday texture of Irish life.</p>
    <p>There are three sides to the site: practical and craic-filled <a href="/">tools</a>; heritage material like <a href="/surnames/">surname origins</a>, the <a href="/counties/">county guide</a> and the <a href="/slang/">slang dictionary</a>; and a personalised <a href="/news/">Irish news</a> aggregator plus longer <a href="/guides/">guides</a>.</p>
    <p>It’s an independent project, built and maintained by one person in Ireland, free to use, and kept that way by unobtrusive advertising. Questions or ideas? See our <a href="/contact/">contact page</a>.</p>
  </article></main>`
}

function contactContent() {
  return `<main class="prerender"><article>
    <h1>Contact Irish Tools</h1>
    <p>Irish Tools is run by one person in Ireland and we like hearing from people who use the site — feedback, corrections, tool ideas or just to say hello.</p>
    <p>Email us at <a href="mailto:hello@irishtools.ie">hello@irishtools.ie</a>. For details on how we handle data, see our <a href="/privacy/">privacy policy</a>.</p>
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
  guides: guidesHubContent,
  about: aboutContent,
  contact: contactContent,
}

// The aggregator just re-lists other people's headlines — keep it out of the index.
const NOINDEX_ROUTES = new Set(['news'])
const NOSITEMAP_ROUTES = new Set(['privacy', 'news'])

let routeCount = 0
for (const route of Object.keys(ROUTE_META)) {
  const meta = ROUTE_META[route]
  const url = SITE_URL + pathFor(route)
  const content = HUB_CONTENT[route] ? HUB_CONTENT[route]() : ''
  const html = render({ ...meta, url, content, noindex: NOINDEX_ROUTES.has(route) })
  if (route === 'home') {
    await writeFile(join(dist, 'index.html'), html)
  } else {
    await writePage(route, html)
  }
  if (!NOSITEMAP_ROUTES.has(route)) addToSitemap(pathFor(route))
  routeCount++
}

// Guide articles — full original content, indexed.
for (const g of GUIDES) {
  await writePage(`guides/${g.slug}`, render({
    title: `${g.title} · Irish Tools`,
    description: g.description,
    url: `${SITE_URL}/guides/${g.slug}/`,
    content: guideContent(g),
  }))
  addToSitemap(`/guides/${g.slug}/`)
  routeCount++
}

// Entry pages.
let entryCount = 0
// Surname & slang entry pages are kept for visitors who land on them directly,
// but noindexed for now (thin/templated) and left out of the sitemap. They’ll be
// re-indexed once each carries more substantial content.
for (const s of SURNAMES) {
  const slug = slugify(s.name)
  await writePage(`surnames/${slug}`, render({
    title: `${s.name} — Irish Surname Origin & Meaning · Irish Tools`,
    description: `The Irish surname ${s.name} (${s.irish}) means ${s.meaning}. Its traditional stronghold is ${s.region}.`,
    url: `${SITE_URL}/surnames/${slug}/`,
    content: surnameContent(s),
    noindex: true,
  }))
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
    noindex: true,
  }))
  entryCount++
}

// Unknown paths get the SPA shell (with default metadata) and a true 404 status.
await writeFile(join(dist, '404.html'), render({ ...ROUTE_META.home, url: SITE_URL + '/' }))

await writeFile(
  join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemap.join('\n')}\n</urlset>\n`,
)

console.log(`Prerendered ${routeCount} routes + ${entryCount} entry pages + 404.html + sitemap (${sitemap.length} urls)`)
