// Builds src/data/countyMap.generated.json — one clickable SVG path per
// traditional county (all 32).
//
// Sources:
//  - Republic (26): GADM level-1 GeoJSON (downloaded once to the path passed as
//    argv[2]; see docs in repo history / gist vool/969e3be0…)
//  - Northern Ireland (6): OpenStreetMap traditional-county relations via the
//    Overpass API (fetched live by this script).
//
// The geometries are simplified (Douglas-Peucker), small islands dropped, and
// projected into a compact viewBox. Run:
//   node scripts/make-county-map.mjs <path-to-gadm-ireland.geojson>
import { readFileSync, writeFileSync } from 'node:fs'
import { COUNTIES } from '../src/data/counties.js'
import { slugify } from '../src/lib/slug.js'

const GADM_PATH = process.argv[2]
if (!GADM_PATH) throw new Error('usage: node scripts/make-county-map.mjs <gadm-ireland.geojson>')

const NAME_FIX = { Laoighis: 'Laois' }
const NI = ['Antrim', 'Armagh', 'Down', 'Fermanagh', 'Tyrone', 'Londonderry']
const OSM_TO_OURS = { Londonderry: 'Derry' }

// ---------- geometry helpers ----------
// Douglas-Peucker on [x,y] rings (degrees). tolerance in degrees.
function simplify(points, tol) {
  if (points.length <= 4) return points
  const keep = new Uint8Array(points.length)
  keep[0] = keep[points.length - 1] = 1
  const stack = [[0, points.length - 1]]
  while (stack.length) {
    const [a, b] = stack.pop()
    const [ax, ay] = points[a]
    const [bx, by] = points[b]
    const dx = bx - ax
    const dy = by - ay
    const len2 = dx * dx + dy * dy || 1e-12
    let maxD = -1
    let maxI = -1
    for (let i = a + 1; i < b; i++) {
      const [px, py] = points[i]
      let t = ((px - ax) * dx + (py - ay) * dy) / len2
      t = Math.max(0, Math.min(1, t))
      const ex = ax + t * dx - px
      const ey = ay + t * dy - py
      const d = ex * ex + ey * ey
      if (d > maxD) {
        maxD = d
        maxI = i
      }
    }
    if (maxD > tol * tol) {
      keep[maxI] = 1
      stack.push([a, maxI], [maxI, b])
    }
  }
  return points.filter((_, i) => keep[i])
}

function ringAreaDeg(ring) {
  let s = 0
  for (let i = 0; i < ring.length - 1; i++) s += ring[i][0] * ring[i + 1][1] - ring[i + 1][0] * ring[i][1]
  return Math.abs(s / 2)
}

const TOL = 0.006 // ~600 m — keeps shapes crisp at panel size, file small
const MIN_ISLAND = 0.004 // drop islets below this (deg²-ish) — keeps Achill etc.

function cleanPolygons(rings) {
  // rings: array of outer rings [[lng,lat],…]; simplify + drop tiny islands.
  const out = []
  for (const ring of rings) {
    if (ringAreaDeg(ring) < MIN_ISLAND) continue
    const s = simplify(ring, TOL)
    if (s.length >= 4) out.push(s)
  }
  // Never drop a county entirely: keep the biggest raw ring if all were culled.
  if (!out.length && rings.length) {
    const biggest = rings.reduce((a, b) => (ringAreaDeg(a) > ringAreaDeg(b) ? a : b))
    out.push(simplify(biggest, TOL))
  }
  return out
}

// ---------- 1. Republic counties from GADM ----------
const gadm = JSON.parse(readFileSync(GADM_PATH, 'utf8'))
const byCounty = {}
for (const f of gadm.features) {
  let name = f.properties.NAME_1
  if (!name || name === 'Northern Ireland') continue
  name = NAME_FIX[name] || name
  // MultiPolygon → outer ring of each polygon
  const rings = f.geometry.coordinates.map((poly) => poly[0])
  byCounty[name] = cleanPolygons(rings)
}
console.log('GADM counties:', Object.keys(byCounty).length)

// ---------- 2. NI counties from OSM (Overpass) ----------
const query = `[out:json][timeout:180];(${NI.map((n) => `relation["name"="County ${n}"]["type"="boundary"];`).join('')});out geom;`
const res = await fetch('https://overpass-api.de/api/interpreter', {
  method: 'POST',
  headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'User-Agent': 'IrishTools/0.1 (https://irishtools.ie)' },
  body: 'data=' + encodeURIComponent(query),
})
if (!res.ok) throw new Error(`Overpass HTTP ${res.status}`)
const osm = await res.json()
console.log('OSM relations:', osm.elements.length)

// Stitch each relation's outer ways into closed rings by matching endpoints.
function stitchRings(ways) {
  const segs = ways.map((w) => w.geometry.map((p) => [p.lon, p.lat]))
  const rings = []
  while (segs.length) {
    let ring = segs.shift()
    let closed = false
    let guard = 0
    while (!closed && guard++ < 5000) {
      const end = ring[ring.length - 1]
      if (Math.abs(end[0] - ring[0][0]) < 1e-7 && Math.abs(end[1] - ring[0][1]) < 1e-7) {
        closed = true
        break
      }
      let found = -1
      let reversed = false
      for (let i = 0; i < segs.length; i++) {
        const s = segs[i]
        if (Math.abs(s[0][0] - end[0]) < 1e-7 && Math.abs(s[0][1] - end[1]) < 1e-7) {
          found = i
          break
        }
        if (Math.abs(s[s.length - 1][0] - end[0]) < 1e-7 && Math.abs(s[s.length - 1][1] - end[1]) < 1e-7) {
          found = i
          reversed = true
          break
        }
      }
      if (found === -1) break // open chain — discard
      const next = segs.splice(found, 1)[0]
      ring = ring.concat(reversed ? next.slice(0, -1).reverse() : next.slice(1))
    }
    if (closed && ring.length >= 4) rings.push(ring)
  }
  return rings
}

for (const rel of osm.elements) {
  const osmName = rel.tags.name.replace(/^County\s+/, '')
  const name = OSM_TO_OURS[osmName] || osmName
  const outers = (rel.members || []).filter((m) => m.type === 'way' && m.role === 'outer' && m.geometry)
  const rings = stitchRings(outers)
  if (!rings.length) {
    console.log('WARN: no closed rings for', name)
    continue
  }
  byCounty[name] = cleanPolygons(rings)
}

// ---------- 3. verify + project + emit ----------
const missing = COUNTIES.filter((c) => !byCounty[c.name]).map((c) => c.name)
if (missing.length) throw new Error('missing counties: ' + missing.join(', '))

let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity
const KX = Math.cos((53.5 * Math.PI) / 180) // flatten longitude at Ireland's latitude
for (const rings of Object.values(byCounty)) {
  for (const ring of rings) {
    for (const [lng, lat] of ring) {
      const x = lng * KX
      minX = Math.min(minX, x); maxX = Math.max(maxX, x)
      minY = Math.min(minY, lat); maxY = Math.max(maxY, lat)
    }
  }
}
const H = 1000
const scale = H / (maxY - minY)
const W = Math.round((maxX - minX) * scale)
const px = (lng) => +((lng * KX - minX) * scale).toFixed(1)
const py = (lat) => +((maxY - lat) * scale).toFixed(1)

// Label anchor = area centroid of the county's largest ring, with hand nudges
// (in output px) where the centroid sits awkwardly for the printed name.
const NUDGE = {
  Roscommon: [-10, 0],
  Longford: [6, 2],
  Dublin: [10, 0],
  Louth: [0, -4],
  Cavan: [-6, 4],
  Leitrim: [-2, 8],
  Waterford: [0, -4],
  Kerry: [10, -10],
  Galway: [18, -6],
  Mayo: [6, 6],
  Cork: [10, -10],
  Donegal: [-8, 10],
  Antrim: [-4, 8],
  Derry: [2, 8],
}

function centroid(ring) {
  let a = 0
  let cx = 0
  let cy = 0
  for (let i = 0; i < ring.length - 1; i++) {
    const cross = ring[i][0] * ring[i + 1][1] - ring[i + 1][0] * ring[i][1]
    a += cross
    cx += (ring[i][0] + ring[i + 1][0]) * cross
    cy += (ring[i][1] + ring[i + 1][1]) * cross
  }
  a /= 2
  return [cx / (6 * a), cy / (6 * a)]
}

const counties = COUNTIES.map((c) => {
  const rings = byCounty[c.name]
  const ds = rings.map((ring) => {
    let d = `M${px(ring[0][0])} ${py(ring[0][1])}`
    for (let i = 1; i < ring.length; i++) d += `L${px(ring[i][0])} ${py(ring[i][1])}`
    return d + 'Z'
  })
  const main = rings.reduce((a, b) => (ringAreaDeg(a) > ringAreaDeg(b) ? a : b))
  const [clng, clat] = centroid(main)
  const [nx, ny] = NUDGE[c.name] || [0, 0]
  return {
    name: c.name,
    slug: slugify(c.name),
    d: ds.join(''),
    lx: +(px(clng) + nx).toFixed(0),
    ly: +(py(clat) + ny).toFixed(0),
  }
})

const out = { viewBox: `0 0 ${W} ${H}`, counties }
writeFileSync('src/data/countyMap.generated.json', JSON.stringify(out))
const kb = Math.round(JSON.stringify(out).length / 1024)
console.log(`OK: ${counties.length}/32 counties, viewBox 0 0 ${W} ${H}, ${kb} KB`)
