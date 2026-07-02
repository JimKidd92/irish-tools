import { useState } from 'react'
import mapData from '../data/countyMap.generated.json'
import { navigate } from '../hooks/useHashRoute.js'

// Interactive 32-county map. Real boundaries (GADM + OSM), baked to SVG paths
// by scripts/make-county-map.mjs. Visited counties are filled in — the map
// doubles as the scratch map.
export default function CountyMap({ visited = [] }) {
  const [hover, setHover] = useState(null)

  function go(c) {
    navigate('counties', c.slug)
  }

  return (
    <div className="county-map">
      <svg
        viewBox={mapData.viewBox}
        className="county-map__svg"
        role="group"
        aria-label="Map of Ireland's 32 counties — select one"
      >
        {mapData.counties.map((c) => {
          const been = visited.includes(c.name)
          return (
            <path
              key={c.slug}
              d={c.d}
              className={`county-map__shape ${been ? 'is-visited' : ''} ${hover === c.name ? 'is-hover' : ''}`}
              role="button"
              tabIndex={0}
              aria-label={`County ${c.name}${been ? ' (visited)' : ''}`}
              onClick={() => go(c)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  go(c)
                }
              }}
              onMouseEnter={() => setHover(c.name)}
              onMouseLeave={() => setHover((h) => (h === c.name ? null : h))}
              onFocus={() => setHover(c.name)}
              onBlur={() => setHover((h) => (h === c.name ? null : h))}
            >
              <title>{c.name}</title>
            </path>
          )
        })}
      </svg>
      <p className="county-map__label" aria-hidden="true">
        {hover ? `County ${hover}` : 'Tap a county'}
      </p>
    </div>
  )
}
