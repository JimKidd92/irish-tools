import { useEffect, useMemo, useState } from 'react'
import { SLANG } from '../data/slang.js'
import { slugify, findBySlug } from '../lib/slug.js'
import { setHead } from '../lib/head.js'
import { navigate } from '../hooks/useHashRoute.js'
import ShareButton from './ShareButton.jsx'

export default function SlangTool({ slug }) {
  const [query, setQuery] = useState('')
  const entry = slug ? findBySlug(SLANG, slug, 'term') : null

  useEffect(() => {
    if (entry) {
      setHead({
        title: `What does “${entry.term}” mean? · Irish Slang · Irish Tools`,
        description: `${entry.term}: ${entry.meaning}. Example — ${entry.example}`,
        canonical: `https://irishtools.ie/slang/${slugify(entry.term)}/`,
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug])

  const shown = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return SLANG
    return SLANG.filter(
      (s) => s.term.toLowerCase().includes(q) || s.meaning.toLowerCase().includes(q),
    )
  }, [query])

  // Featured term: the slug entry if we're on one, else a word of the day.
  const featured = useMemo(() => {
    if (entry) return entry
    const day = Math.floor(Date.now() / 86400000)
    return SLANG[day % SLANG.length]
  }, [entry])

  // A few other terms to keep browsing.
  const more = useMemo(
    () => SLANG.filter((s) => s.term !== featured.term).sort(() => 0.5 - Math.random()).slice(0, 6),
    [featured],
  )

  return (
    <section className="panel slang">
      <div className="slang__wotd">
        <span className="focal__label">{entry ? 'Irish slang' : 'Today’s word'}</span>
        <strong className="slang__wotd-term">{featured.term}</strong>
        <span className="slang__wotd-meaning">{featured.meaning}</span>
        <em className="slang__example">“{featured.example}”</em>
        <ShareButton
          url={`https://irishtools.ie/slang/${slugify(featured.term)}/`}
          label="Share"
          text={`🗣️ Irish slang: “${featured.term}” — ${featured.meaning}. E.g. ${featured.example}`}
        />
        {entry && (
          <div className="related__chips" style={{ marginTop: '14px' }}>
            {more.map((s) => (
              <button
                key={s.term}
                className="related__chip"
                onClick={() => navigate('slang', slugify(s.term))}
              >
                {s.term}
              </button>
            ))}
          </div>
        )}
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
              <button className="slang__term linklike" onClick={() => navigate('slang', slugify(s.term))}>
                {s.term}
              </button>
              <span className="slang__meaning">{s.meaning}</span>
              <em className="slang__example">“{s.example}”</em>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
