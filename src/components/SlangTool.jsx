import { useMemo, useState } from 'react'
import { SLANG } from '../data/slang.js'
import ShareButton from './ShareButton.jsx'

export default function SlangTool() {
  const [query, setQuery] = useState('')

  const shown = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return SLANG
    return SLANG.filter(
      (s) => s.term.toLowerCase().includes(q) || s.meaning.toLowerCase().includes(q),
    )
  }, [query])

  // A different "word of the day" each day, for the craic.
  const wotd = useMemo(() => {
    const day = Math.floor(Date.now() / 86400000)
    return SLANG[day % SLANG.length]
  }, [])

  return (
    <section className="panel slang">
      <div className="slang__wotd">
        <span className="focal__label">Today’s word</span>
        <strong className="slang__wotd-term">{wotd.term}</strong>
        <span className="slang__wotd-meaning">{wotd.meaning}</span>
        <ShareButton
          url="https://irishtools.ie/slang/"
          label="Share"
          text={`🗣️ Irish slang of the day: “${wotd.term}” — ${wotd.meaning}. E.g. ${wotd.example}`}
        />
      </div>

      <input
        type="text"
        className="loc-search__input names__search"
        placeholder="Search the slang… (e.g. yoke, craic, banjaxed)"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        aria-label="Search slang"
      />

      <p className="places__count">{shown.length} of {SLANG.length} entries</p>

      {shown.length === 0 ? (
        <p className="weather-status">Nothing for that — sure maybe you’ve invented a new one.</p>
      ) : (
        <ul className="slang__list">
          {shown.map((s) => (
            <li key={s.term} className="slang__entry">
              <strong className="slang__term">{s.term}</strong>
              <span className="slang__meaning">{s.meaning}</span>
              <em className="slang__example">“{s.example}”</em>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
