import { useState } from 'react'
import { navigate } from '../hooks/useHashRoute.js'
import { slugify } from '../lib/slug.js'
import ToolIcon from './ToolIcon.jsx'

const LINKS = [
  { icon: 'ScrollText', label: 'Surname Origins', route: 'surnames' },
  { icon: 'Baby', label: 'Irish Names', route: 'names' },
  { icon: 'Castle', label: 'County Guide', route: 'counties' },
  { icon: 'HeartHandshake', label: 'Blessings', route: 'blessings' },
  { icon: 'MessageSquare', label: 'Slang', route: 'slang' },
]

// Heritage hook on the homepage — a surname lookup (the diaspora draw) plus
// quick links into the rest of the heritage tools.
export default function HomeHeritage() {
  const [name, setName] = useState('')

  function submit(e) {
    e.preventDefault()
    const v = name.trim()
    if (v) navigate('surnames', slugify(v))
  }

  return (
    <section className="heritage-home" aria-label="Irish heritage">
      <h2 className="section-title">Discover your Irish roots</h2>
      <div className="heritage-home__panel">
        <p className="heritage-home__lead">
          Where does your family name come from? Look up its Irish form, its meaning, and the
          part of Ireland it hails from.
        </p>
        <form className="heritage-home__search" onSubmit={submit}>
          <input
            className="loc-search__input"
            placeholder="Enter your surname… (e.g. Murphy)"
            value={name}
            onChange={(e) => setName(e.target.value)}
            aria-label="Surname"
          />
          <button type="submit" className="btn btn--primary">
            Look it up
          </button>
        </form>
        <div className="heritage-home__links">
          {LINKS.map((l) => (
            <button key={l.route} className="heritage-home__link" onClick={() => navigate(l.route)}>
              <ToolIcon name={l.icon} size={17} /> {l.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
