import { useEffect, useRef, useState } from 'react'
import { Zap, X, Pencil, Check } from 'lucide-react'
import { tools } from '../data/tools.js'
import { navigate } from '../hooks/useHashRoute.js'

const FAVS_KEY = 'irish-tools.favorites'
const DEFAULT_FAVS = ['immersion', 'quiz', 'soft-day']

// The quiz lives on a special route, not in tools.js — give it a FAB entry.
const QUIZ_ENTRY = { id: 'quiz', emoji: '🍀', name: 'Daily Quiz', path: 'quiz', live: true }
const ALL = [QUIZ_ENTRY, ...tools.filter((t) => t.live)]

function loadFavs() {
  try {
    const raw = JSON.parse(localStorage.getItem(FAVS_KEY))
    if (Array.isArray(raw) && raw.length) return raw.filter((id) => ALL.some((t) => t.id === id))
  } catch {
    /* ignore */
  }
  return DEFAULT_FAVS
}

export default function Fab() {
  const [open, setOpen] = useState(false)
  const [editing, setEditing] = useState(false)
  const [favs, setFavs] = useState(loadFavs)
  const ref = useRef(null)

  useEffect(() => {
    try {
      localStorage.setItem(FAVS_KEY, JSON.stringify(favs))
    } catch {
      /* ignore */
    }
  }, [favs])

  useEffect(() => {
    if (!open) return
    function onDown(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    function onKey(e) {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('pointerdown', onDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('pointerdown', onDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  function go(path) {
    setOpen(false)
    setEditing(false)
    navigate(path)
  }

  function toggleFav(id) {
    setFavs((f) => (f.includes(id) ? f.filter((x) => x !== id) : [...f, id]))
  }

  const favTools = favs.map((id) => ALL.find((t) => t.id === id)).filter(Boolean)

  return (
    <div className="fab" ref={ref}>
      {open && (
        <div className="fab__tray" role="menu" aria-label="Quick tools">
          {!editing ? (
            <>
              {favTools.map((t) => (
                <button key={t.id} className="fab__item" role="menuitem" onClick={() => go(t.path)}>
                  <span className="fab__item-emoji" aria-hidden="true">{t.emoji}</span>
                  <span className="fab__item-name">{t.name}</span>
                </button>
              ))}
              <button className="fab__item fab__item--edit" onClick={() => setEditing(true)}>
                <Pencil size={15} aria-hidden="true" />
                <span className="fab__item-name">Edit favourites</span>
              </button>
            </>
          ) : (
            <>
              <p className="fab__edit-title">Tap to add or remove</p>
              <div className="fab__edit-list">
                {ALL.map((t) => {
                  const on = favs.includes(t.id)
                  return (
                    <button
                      key={t.id}
                      className={`fab__item ${on ? 'is-fav' : ''}`}
                      aria-pressed={on}
                      onClick={() => toggleFav(t.id)}
                    >
                      <span className="fab__item-emoji" aria-hidden="true">{t.emoji}</span>
                      <span className="fab__item-name">{t.name}</span>
                      {on && <Check size={15} className="fab__item-check" aria-hidden="true" />}
                    </button>
                  )
                })}
              </div>
              <button className="fab__item fab__item--edit" onClick={() => setEditing(false)}>
                <Check size={15} aria-hidden="true" />
                <span className="fab__item-name">Done</span>
              </button>
            </>
          )}
        </div>
      )}
      <button
        className={`fab__btn ${open ? 'is-open' : ''}`}
        aria-label={open ? 'Close quick tools' : 'Open quick tools'}
        aria-expanded={open}
        onClick={() => {
          setOpen((o) => !o)
          setEditing(false)
        }}
      >
        {open ? <X size={22} aria-hidden="true" /> : <Zap size={22} aria-hidden="true" />}
      </button>
    </div>
  )
}
