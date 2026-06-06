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

// Prefer a wide image; the summary's originalimage is full-res, thumbnail ~320px.
function pickImage(data) {
  if (!data) return null
  if (data.thumbnail?.source) return data.thumbnail.source.replace(/\/\d+px-/, '/640px-')
  return data.originalimage?.source || null
}

async function fetchCounty(name) {
  const county = await summary(TITLE[name] || `County ${name}`)
  let image = null
  if (LANDMARK[name]) {
    const lm = await summary(LANDMARK[name])
    image = pickImage(lm)
  }
  if (!image) image = pickImage(county)
  return {
    extract: EXTRACT_OVERRIDE[name] || county?.extract || '',
    image,
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
