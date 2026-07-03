import { useMemo, useState } from 'react'
import mapData from '../data/countyMap.generated.json'
import { COUNTIES } from '../data/counties.js'
import { navigate } from '../hooks/useHashRoute.js'

// Interactive 32-county map (real GADM/OSM boundaries baked to SVG paths by
// scripts/make-county-map.mjs). Counties are tinted by province with name
// labels. Desktop: hover to preview, click to open. Touch: first tap selects
// and shows the county in the bar below, second tap (or the bar) opens it.
const PROVINCE = Object.fromEntries(COUNTIES.map((c) => [c.name, c.province.toLowerCase()]))

export default function CountyMap({ visited = [] }) {
  const [hover, setHover] = useState(null)
  const [selected, setSelected] = useState(null)
  const coarse = useMemo(
    () => typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches,
    [],
  )

  function open(c) {
    navigate('counties', c.slug)
  }

  function onTap(c) {
    if (coarse && selected !== c.name) {
      setSelected(c.name)
      return
    }
    open(c)
  }

  const active = hover || selected
  const activeCounty = active ? mapData.counties.find((c) => c.name === active) : null

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
          const cls = [
            'county-map__shape',
            `county-map__shape--${PROVINCE[c.name]}`,
            been ? 'is-visited' : '',
            active === c.name ? 'is-active' : '',
          ].join(' ')
          return (
            <path
              key={c.slug}
              d={c.d}
              className={cls}
              role="button"
              tabIndex={0}
              aria-label={`County ${c.name}${been ? ' (visited)' : ''}`}
              onClick={() => onTap(c)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  open(c)
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
        {/* labels on top so borders never cut through them */}
        {mapData.counties.map((c) => (
          <text
            key={`t-${c.slug}`}
            x={c.lx}
            y={c.ly}
            className={`county-map__name ${active === c.name ? 'is-active' : ''}`}
            fontSize={c.name.length > 8 ? 16 : 21}
          >
            {c.name}
          </text>
        ))}
      </svg>

      {coarse ? (
        <button
          className={`county-map__go ${activeCounty ? 'is-ready' : ''}`}
          disabled={!activeCounty}
          onClick={() => activeCounty && open(activeCounty)}
        >
          {activeCounty ? `Open County ${activeCounty.name} →` : 'Tap a county'}
        </button>
      ) : (
        <p className="county-map__label" aria-hidden="true">
          {active ? `County ${active}` : 'Click a county'}
        </p>
      )}
    </div>
  )
}
