import { useMemo, useState } from 'react'
import { NAMES } from '../data/names.js'

const FILTERS = [
  { key: 'all', label: 'All' },
  { key: 'girl', label: 'Girls' },
  { key: 'boy', label: 'Boys' },
]

export default function NamesTool() {
  const [filter, setFilter] = useState('all')
  const [query, setQuery] = useState('')

  const shown = useMemo(() => {
    const q = query.trim().toLowerCase()
    return NAMES.filter(
      (n) =>
        (filter === 'all' || n.gender === filter) &&
        (!q || n.name.toLowerCase().includes(q) || n.meaning.toLowerCase().includes(q)),
    )
  }, [filter, query])

  return (
    <section className="panel names">
      <input
        type="text"
        className="loc-search__input names__search"
        placeholder="Search names or meanings…"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        aria-label="Search names"
      />

      <div className="names__filters">
        {FILTERS.map((f) => (
          <button
            key={f.key}
            className={`spuds__chip ${filter === f.key ? 'is-active' : ''}`}
            onClick={() => setFilter(f.key)}
          >
            {f.label}
          </button>
        ))}
      </div>

      {shown.length === 0 ? (
        <p className="weather-status">No names match that — try another search.</p>
      ) : (
        <ul className="names__list">
          {shown.map((n) => (
            <li key={n.name} className={`names__card names__card--${n.gender}`}>
              <div className="names__top">
                <span className="names__name" lang="ga">{n.name}</span>
                <span className="names__pron">{n.pron}</span>
              </div>
              <span className="names__meaning">{n.meaning}</span>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
