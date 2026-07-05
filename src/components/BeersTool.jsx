import { useMemo, useState } from 'react'
import { Beer } from 'lucide-react'
import { BEERS } from '../data/beers.js'

const FAMILIES = ['All', 'Stout & Porter', 'Red & Cream', 'Pale & Golden', 'IPA', 'Lager', 'Other']

function family(style) {
  const s = style.toLowerCase()
  if (s.includes('stout') || s.includes('porter')) return 'Stout & Porter'
  if (s.includes('red') || s.includes('cream')) return 'Red & Cream'
  if (s.includes('ipa')) return 'IPA'
  if (s.includes('lager')) return 'Lager'
  if (s.includes('pale') || s.includes('golden') || s.includes('blonde')) return 'Pale & Golden'
  return 'Other'
}

function BeerCard({ beer, featured }) {
  return (
    <li className={`beer-card ${featured ? 'beer-card--featured' : ''}`}>
      {featured && <span className="beer-card__kicker">🍺 Beer of the day</span>}
      <span className="beer-card__name">{beer.name}</span>
      <span className="beer-card__brewery">
        {beer.brewery} · Co. {beer.county}
      </span>
      <span className="beer-card__meta">
        <span className="beer-card__style">{beer.style}</span>
        {beer.abv && <span className="beer-card__abv">{beer.abv}</span>}
      </span>
      <span className="beer-card__note">{beer.note}</span>
    </li>
  )
}

export default function BeersTool() {
  const [query, setQuery] = useState('')
  const [fam, setFam] = useState('All')

  const beerOfDay = BEERS[Math.floor(Date.now() / 86400000 + 17) % BEERS.length]

  const shown = useMemo(() => {
    const q = query.trim().toLowerCase()
    return BEERS.filter((b) => {
      if (fam !== 'All' && family(b.style) !== fam) return false
      if (!q) return true
      return (
        b.name.toLowerCase().includes(q) ||
        b.brewery.toLowerCase().includes(q) ||
        b.county.toLowerCase().includes(q) ||
        b.style.toLowerCase().includes(q)
      )
    })
  }, [query, fam])

  return (
    <section className="beers">
      <ul className="beer-grid beer-grid--feature">
        <BeerCard beer={beerOfDay} featured />
      </ul>

      <div className="beers__controls">
        <input
          className="loc-search__input"
          placeholder="Search beers, breweries or counties…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Search beers"
        />
        <div className="beers__chips">
          {FAMILIES.map((f) => (
            <button
              key={f}
              className={`news-chip ${fam === f ? 'is-active' : ''}`}
              onClick={() => setFam(f)}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <p className="places__count">
        <Beer size={15} strokeWidth={1.75} aria-hidden="true" /> {shown.length} of {BEERS.length} Irish beers
      </p>

      {shown.length === 0 ? (
        <p className="weather-status">No beers match that - try another search.</p>
      ) : (
        <ul className="beer-grid">
          {shown.map((b) => (
            <BeerCard key={b.name} beer={b} />
          ))}
        </ul>
      )}

      <p className="news__note">
        Sláinte! Drink responsibly. A celebration of Irish brewing, big and small.
      </p>
    </section>
  )
}
