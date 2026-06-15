// Enriches the County Guide with a description paragraph and a photo for each
// county, pulled once from Wikipedia's REST API and baked into a static JSON.
// Run: node scripts/fetch-counties.mjs
import { writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'
import { COUNTIES } from '../src/data/counties.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const out = resolve(__dirname, '../src/data/counties.generated.json')

// Wikipedia article titles (mostly "County X"; Derry's article is under a
// different name, but we never display that name — it's Derry, full stop).
const TITLE = {
  Derry: 'County Londonderry',
}

// Custom extracts where we don't want to use Wikipedia's wording verbatim.
const EXTRACT_OVERRIDE = {
  Derry:
    'Derry is a county in the north-west of Ulster, one of the six counties of Northern Ireland. It’s known for the historic walled city of Derry on the River Foyle, the rolling Sperrin Mountains, and the dramatic north coast at Mussenden Temple and Downhill.',
}

// A scenic landmark per county — its Wikipedia photo is far nicer than the
// county article's location-map thumbnail.
const LANDMARK = {
  Carlow: 'Brownshill Dolmen',
  Dublin: "Ha'penny Bridge",
  Kildare: 'Castletown House',
  Kilkenny: 'Kilkenny Castle',
  Laois: 'Rock of Dunamase',
  Longford: 'Corlea Trackway',
  Louth: 'Mellifont Abbey',
  Meath: 'Newgrange',
  Offaly: 'Clonmacnoise',
  Westmeath: 'Athlone Castle',
  Wexford: 'Hook Lighthouse',
  Wicklow: 'Glendalough',
  Clare: 'Cliffs of Moher',
  Cork: 'Blarney Castle',
  Kerry: 'Ross Castle',
  Limerick: "King John's Castle, Limerick",
  Tipperary: 'Rock of Cashel',
  Waterford: 'Dunmore East',
  Galway: 'Kylemore Abbey',
  Leitrim: "Parke's Castle",
  Mayo: 'Croagh Patrick',
  Roscommon: 'Boyle Abbey',
  Sligo: 'Benbulbin',
  Antrim: "Giant's Causeway",
  Armagh: 'Navan Fort',
  Cavan: 'Lough Oughter',
  Derry: 'Mussenden Temple',
  Donegal: 'Slieve League',
  Down: 'Mourne Mountains',
  Fermanagh: 'Devenish Island',
  Monaghan: 'Castle Leslie',
  Tyrone: 'Beaghmore',
}

const UA = 'IrishTools/0.1 (https://irishtools.ie; jameskidd61@gmail.com)'

async function summary(title) {
  const t = encodeURIComponent(title.replace(/ /g, '_'))
  const res = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${t}`, {
    headers: { 'User-Agent': UA },
  })
  if (!res.ok) return null
  return res.json()
}

// Extract the Commons filename from an upload.wikimedia.org URL (thumb or full).
function fileFromUpload(url) {
  if (!url) return null
  const m = url.match(/\/commons\/(?:thumb\/)?[0-9a-f]\/[0-9a-f]{2}\/([^/]+?)(?:\/\d+px-[^/]+)?$/)
  return m ? m[1] : null
}

// Use Special:FilePath (https) so Wikimedia generates a valid, correctly-sized
// thumbnail — rewriting the thumb width by hand gets a 400.
function pickImage(data) {
  if (!data) return null
  const file = fileFromUpload(data.thumbnail?.source || data.originalimage?.source)
  return file ? `https://commons.wikimedia.org/wiki/Special:FilePath/${file}?width=800` : null
}

const SKIP_IMG = /(?:\.svg|flag|coat[\s_-]*of|locator|location|map|logo|icon|seal|crest|emblem)/i

// A few extra photos from the county's own Wikipedia page (for the carousel).
async function pageImages(title) {
  try {
    const t = encodeURIComponent(title.replace(/ /g, '_'))
    const res = await fetch(`https://en.wikipedia.org/api/rest_v1/page/media-list/${t}`, {
      headers: { 'User-Agent': UA },
    })
    if (!res.ok) return []
    const data = await res.json()
    return (data.items || [])
      .filter((i) => i.type === 'image' && i.title && !SKIP_IMG.test(i.title))
      .map((i) => {
        const file = i.title.replace(/^File:/, '')
        return `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(file)}?width=800`
      })
  } catch {
    return []
  }
}

async function fetchCounty(name) {
  const county = await summary(TITLE[name] || `County ${name}`)
  const landmarkImg = LANDMARK[name] ? pickImage(await summary(LANDMARK[name])) : null
  const extra = await pageImages(TITLE[name] || `County ${name}`)

  // Landmark photo first (nicest), then a couple from the county page. De-duped.
  const images = [...new Set([landmarkImg, ...extra].filter(Boolean))].slice(0, 4)
  if (!images.length) {
    const fb = pickImage(county)
    if (fb) images.push(fb)
  }

  return {
    extract: EXTRACT_OVERRIDE[name] || county?.extract || '',
    image: images[0] || null,
    images,
    // Omit the source link where we've written our own copy (e.g. Derry).
    wikiUrl: EXTRACT_OVERRIDE[name] ? null : county?.content_urls?.desktop?.page || null,
  }
}

const result = {}
for (const county of COUNTIES) {
  try {
    result[county.name] = await fetchCounty(county.name)
    console.log('✓', county.name)
  } catch (err) {
    console.warn('✗', county.name, err.message)
    result[county.name] = { extract: '', image: null, wikiUrl: null }
  }
  await new Promise((r) => setTimeout(r, 200)) // be polite to the API
}

await writeFile(out, JSON.stringify(result, null, 2))
console.log('Wrote', out)
