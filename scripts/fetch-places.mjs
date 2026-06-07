// Pulls heritage sites across the island of Ireland from Wikidata (once) and
// bakes them into a static JSON the map merges under our curated highlights.
// Run: node scripts/fetch-places.mjs
import { writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const out = resolve(__dirname, '../src/data/places.generated.json')
const UA = 'IrishTools/0.1 (https://irishtools.ie; jameskidd61@gmail.com)'

// Site types: castles & tower houses, abbeys/monasteries/round towers, and
// ancient/megalithic sites.
const TYPES = [
  'wd:Q23413', // castle
  'wd:Q1785071', // tower house
  'wd:Q160742', // abbey
  'wd:Q44613', // monastery
  'wd:Q1543615', // Irish round tower
  'wd:Q170980', // stone circle
  'wd:Q1132392', // dolmen
  'wd:Q1499747', // passage grave
  'wd:Q744099', // hillfort
  'wd:Q1779653', // ringfort
]

// Wrong/irrelevant type labels that occasionally slip through.
const DROP_TYPES = new Set(['stairs', 'obelisk'])

const query = `SELECT DISTINCT ?item ?itemLabel ?itemDescription ?coord ?image ?typeLabel WHERE {
  VALUES ?type { ${TYPES.join(' ')} }
  ?item wdt:P31 ?type .
  SERVICE wikibase:box {
    ?item wdt:P625 ?coord .
    bd:serviceParam wikibase:cornerSouthWest "Point(-10.8 51.3)"^^geo:wktLiteral .
    bd:serviceParam wikibase:cornerNorthEast "Point(-5.3 55.6)"^^geo:wktLiteral .
  }
  OPTIONAL { ?item wdt:P18 ?image . }
  SERVICE wikibase:label {
    bd:serviceParam wikibase:language "en" .
    ?item rdfs:label ?itemLabel . ?item schema:description ?itemDescription . ?type rdfs:label ?typeLabel .
  }
}`

function parseCoord(s) {
  const m = s.match(/Point\(([-\d.]+) ([-\d.]+)\)/)
  return m ? { lng: parseFloat(m[1]), lat: parseFloat(m[2]) } : null
}

const res = await fetch('https://query.wikidata.org/sparql?' + new URLSearchParams({ query, format: 'json' }), {
  headers: { 'User-Agent': UA, Accept: 'application/sparql-results+json' },
})
if (!res.ok) throw new Error(`Wikidata HTTP ${res.status}`)
const data = await res.json()

const seen = new Set()
const places = []
for (const b of data.results.bindings) {
  const name = b.itemLabel?.value
  const desc = b.itemDescription?.value
  const coord = b.coord ? parseCoord(b.coord.value) : null
  // Skip the unnamed (Q-id labels), the undescribed, and anything off-grid.
  if (!name || /^Q\d+$/.test(name) || !desc || !coord) continue
  if (DROP_TYPES.has(b.typeLabel?.value)) continue
  const key = name.toLowerCase()
  if (seen.has(key)) continue
  seen.add(key)
  places.push({
    name,
    blurb: desc.charAt(0).toUpperCase() + desc.slice(1),
    type: b.typeLabel?.value || '',
    lat: coord.lat,
    lng: coord.lng,
    // Force https (Wikidata returns http, which is blocked as mixed content).
    image: b.image?.value ? `${b.image.value.replace(/^http:/, 'https:')}?width=400` : null,
  })
}

places.sort((a, b) => a.name.localeCompare(b.name))
await writeFile(out, JSON.stringify(places, null, 2))
console.log(`Wrote ${places.length} places to ${out}`)
