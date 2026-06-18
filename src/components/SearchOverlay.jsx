import { useEffect, useMemo, useRef, useState } from 'react'
import { Search, X } from 'lucide-react'
import { search } from '../lib/search.js'
import { navigate } from '../hooks/useHashRoute.js'

const SUGGESTIONS = ['Murphy', 'Kerry', 'craic', 'immersion', 'Saoirse', 'pints']

export default function SearchOverlay({ onClose }) {
  const [query, setQuery] = useState('')
  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current?.focus()
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  const groups = useMemo(() => search(query), [query])

  function go(item) {
    navigate(item.route, item.slug)
    onClose()
  }

  return (
    <div className="search-overlay" onClick={onClose}>
      <div className="search-box" onClick={(e) => e.stopPropagation()}>
        <div className="search-box__head">
          <Search size={20} strokeWidth={1.75} aria-hidden="true" />
          <input
            ref={inputRef}
            className="search-box__input"
            placeholder="Search tools, surnames, slang, places…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="search-box__close" onClick={onClose} aria-label="Close search">
            <X size={18} aria-hidden="true" />
          </button>
        </div>

        <div className="search-box__body">
          {query.trim().length < 2 && (
            <div className="search-box__hint">
              <span className="search-box__hint-label">Try:</span>
              {SUGGESTIONS.map((s) => (
                <button key={s} className="search-box__chip" onClick={() => setQuery(s)}>
                  {s}
                </button>
              ))}
            </div>
          )}

          {query.trim().length >= 2 && groups.length === 0 && (
            <p className="search-box__empty">Nothing found for “{query.trim()}”.</p>
          )}

          {groups.map((g) => (
            <div key={g.type} className="search-group">
              <p className="search-group__type">{g.type}</p>
              {g.items.map((item, i) => (
                <button key={i} className="search-result" onClick={() => go(item)}>
                  <span className="search-result__label">{item.label}</span>
                  <span className="search-result__sub">{item.sub}</span>
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
