import { useEffect, useMemo, useState } from 'react'
import { SlidersHorizontal, Check } from 'lucide-react'
import { fetchNews } from '../lib/news.js'
import {
  NEWS_SOURCES,
  NEWS_CATEGORIES,
  getSelectedSources,
  setSelectedSources,
} from '../data/newsSources.js'
import { NewsRow } from './NewsCards.jsx'

export default function NewsPage() {
  const [selected, setSelected] = useState(getSelectedSources)
  const [items, setItems] = useState(null)
  const [activeCat, setActiveCat] = useState('All')
  const [showSources, setShowSources] = useState(false)

  const key = selected.join(',')

  useEffect(() => {
    let cancelled = false
    setItems(null)
    fetchNews(selected).then((news) => {
      if (!cancelled) setItems(news)
    })
    return () => {
      cancelled = true
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key])

  function toggleSource(id) {
    setSelected((prev) => {
      const next = prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
      const safe = next.length ? next : prev // never allow zero sources
      setSelectedSources(safe)
      return safe
    })
  }

  // Categories that actually have headlines right now, in canonical order.
  const presentCats = useMemo(() => {
    if (!items) return []
    const set = new Set(items.map((i) => i.category))
    return NEWS_CATEGORIES.filter((c) => set.has(c))
  }, [items])

  const shownCats = activeCat === 'All' ? presentCats : presentCats.filter((c) => c === activeCat)

  return (
    <section className="newspage">
      <div className="newspage__bar">
        <button
          className={`btn ${showSources ? 'btn--primary' : 'btn--ghost'}`}
          onClick={() => setShowSources((v) => !v)}
        >
          <SlidersHorizontal size={16} strokeWidth={1.75} aria-hidden="true" /> Your sources ({selected.length})
        </button>
        <div className="newspage__chips">
          <Chip label="All" active={activeCat === 'All'} onClick={() => setActiveCat('All')} />
          {presentCats.map((c) => (
            <Chip key={c} label={c} active={activeCat === c} onClick={() => setActiveCat(c)} />
          ))}
        </div>
      </div>

      {showSources && (
        <div className="sources-panel">
          <p className="sources-panel__note">
            Pick the sources you want - your choice is saved on this device.
          </p>
          {NEWS_CATEGORIES.map((cat) => {
            const inCat = NEWS_SOURCES.filter((s) => s.category === cat)
            if (!inCat.length) return null
            return (
              <div key={cat} className="sources-panel__group">
                <span className="sources-panel__cat">{cat}</span>
                <div className="sources-panel__items">
                  {inCat.map((s) => {
                    const on = selected.includes(s.id)
                    return (
                      <button
                        key={s.id}
                        className={`source-pill ${on ? 'is-on' : ''}`}
                        onClick={() => toggleSource(s.id)}
                      >
                        {on && <Check size={14} strokeWidth={2.5} aria-hidden="true" />} {s.name}
                      </button>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      )}

      {items === null && <p className="weather-status">Gathering the headlines…</p>}
      {items && items.length === 0 && (
        <p className="weather-status weather-status--error">
          Couldn’t load any headlines just now - try again shortly.
        </p>
      )}

      {items &&
        shownCats.map((cat) => {
          const catItems = items.filter((i) => i.category === cat)
          if (!catItems.length) return null
          return (
            <div key={cat} className="newspage__section">
              <h2 className="section-title newspage__section-title">{cat}</h2>
              <NewsRow items={catItems} />
            </div>
          )
        })}

      <p className="news__note">
        Headlines link out to the source. Choose your own mix above - it’s remembered on this device.
      </p>
    </section>
  )
}

function Chip({ label, active, onClick }) {
  return (
    <button className={`news-chip ${active ? 'is-active' : ''}`} onClick={onClick}>
      {label}
    </button>
  )
}
