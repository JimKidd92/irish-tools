import { useEffect, useRef } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { PLACES } from '../data/places.js'

export default function PlacesTool() {
  const mapEl = useRef(null)
  const mapObj = useRef(null)
  const markers = useRef([])

  useEffect(() => {
    if (mapObj.current || !mapEl.current) return

    const map = L.map(mapEl.current, { scrollWheelZoom: false }).setView([53.4, -8], 6)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
      maxZoom: 18,
    }).addTo(map)

    const icon = L.divIcon({
      className: 'map-pin',
      html: '📍',
      iconSize: [28, 28],
      iconAnchor: [14, 26],
      popupAnchor: [0, -24],
    })

    markers.current = PLACES.map((p) => {
      const m = L.marker([p.lat, p.lng], { icon }).addTo(map)
      m.bindPopup(`<strong>${p.name}</strong><br>${p.county}<br>${p.blurb}`)
      return m
    })

    mapObj.current = map
    // Make sure tiles lay out correctly once the container is sized.
    setTimeout(() => map.invalidateSize(), 120)

    return () => {
      map.remove()
      mapObj.current = null
      markers.current = []
    }
  }, [])

  function focusPlace(i) {
    const p = PLACES[i]
    const map = mapObj.current
    if (!map) return
    map.flyTo([p.lat, p.lng], 9, { duration: 0.8 })
    markers.current[i]?.openPopup()
  }

  return (
    <section className="panel places">
      <div ref={mapEl} className="places__map" />
      <ul className="places__list">
        {PLACES.map((p, i) => (
          <li key={p.name}>
            <button className="places__item" onClick={() => focusPlace(i)}>
              <span className="places__pin" aria-hidden="true">📍</span>
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
