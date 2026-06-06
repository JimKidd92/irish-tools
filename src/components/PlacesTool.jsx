import { useEffect, useRef } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet.markercluster/dist/MarkerCluster.css'
import 'leaflet.markercluster/dist/MarkerCluster.Default.css'
import 'leaflet.markercluster'
import { PLACES } from '../data/places.js'
import generated from '../data/places.generated.json'

// Curated highlights first, then everything from Wikidata (de-duplicated).
function allPlaces() {
  const seen = new Set(PLACES.map((p) => p.name.toLowerCase()))
  const extra = generated.filter((p) => !seen.has(p.name.toLowerCase()))
  return [...PLACES.map((p) => ({ ...p, highlight: true })), ...extra]
}

function popupHtml(p) {
  const img = p.image
    ? `<img src="${p.image}" alt="" style="width:100%;height:90px;object-fit:cover;border-radius:6px;margin-bottom:6px"/>`
    : ''
  return `${img}<strong>${p.name}</strong>${p.county ? `<br>${p.county}` : ''}<br>${p.blurb}`
}

export default function PlacesTool() {
  const mapEl = useRef(null)
  const mapObj = useRef(null)
  const highlightMarkers = useRef([])

  useEffect(() => {
    if (mapObj.current || !mapEl.current) return

    const map = L.map(mapEl.current, { scrollWheelZoom: false }).setView([53.4, -8], 6)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
      maxZoom: 18,
    }).addTo(map)

    const star = L.divIcon({ className: 'map-pin map-pin--star', html: '⭐', iconSize: [28, 28], iconAnchor: [14, 26], popupAnchor: [0, -24] })
    const pin = L.divIcon({ className: 'map-pin', html: '📍', iconSize: [24, 24], iconAnchor: [12, 22], popupAnchor: [0, -20] })

    const cluster = L.markerClusterGroup({ maxClusterRadius: 50, showCoverageOnHover: false })
    const places = allPlaces()
    highlightMarkers.current = []

    places.forEach((p) => {
      const m = L.marker([p.lat, p.lng], { icon: p.highlight ? star : pin })
      m.bindPopup(popupHtml(p))
      cluster.addLayer(m)
      if (p.highlight) highlightMarkers.current.push(m)
    })

    map.addLayer(cluster)
    mapObj.current = map
    setTimeout(() => map.invalidateSize(), 120)

    return () => {
      map.remove()
      mapObj.current = null
      highlightMarkers.current = []
    }
  }, [])

  function focusPlace(i) {
    const p = PLACES[i]
    const map = mapObj.current
    if (!map) return
    map.flyTo([p.lat, p.lng], 11, { duration: 0.8 })
    const m = highlightMarkers.current[i]
    if (m) setTimeout(() => m.openPopup(), 850)
  }

  return (
    <section className="panel places">
      <div ref={mapEl} className="places__map" />
      <p className="places__count">
        ⭐ {PLACES.length} hand-picked highlights · 📍 {generated.length}+ more heritage sites
        across the island. Zoom in to explore.
      </p>
      <h3 className="places__list-title">Highlights</h3>
      <ul className="places__list">
        {PLACES.map((p, i) => (
          <li key={p.name}>
            <button className="places__item" onClick={() => focusPlace(i)}>
              <span className="places__pin" aria-hidden="true">⭐</span>
              <span className="places__info">
                <span className="places__name">{p.name}</span>
                <span className="places__county">{p.county}</span>
              </span>
            </button>
          </li>
        ))}
      </ul>
    </section>
  )
}
