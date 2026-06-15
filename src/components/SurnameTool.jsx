import { useEffect, useState } from 'react'
import { SURNAMES, findSurname } from '../data/surnames.js'
import { COUNTIES } from '../data/counties.js'
import { slugify, findBySlug } from '../lib/slug.js'
import { setHead } from '../lib/head.js'
import { navigate } from '../hooks/useHashRoute.js'
import ShareButton from './ShareButton.jsx'

const EXAMPLES = ['Murphy', "O'Sullivan", 'Walsh', 'Kennedy']

// Which counties (by name) appear in a surname's "region" text.
function countiesIn(region) {
  return COUNTIES.filter((c) => region.includes(c.name))
}

// A few other surnames that share a county with this one.
function relatedTo(result, counties) {
  const names = counties.map((c) => c.name)
  return SURNAMES.filter(
    (s) => s.name !== result.name && names.some((n) => s.region.includes(n)),
  ).slice(0, 8)
}

export default function SurnameTool({ slug }) {
  const [input, setInput] = useState('')
  const [result, setResult] = useState(() => (slug ? findBySlug(SURNAMES, slug, 'name') : undefined))

  // When arriving on /surnames/<slug>/, show that surname and set the page head.
  useEffect(() => {
    const entry = slug ? findBySlug(SURNAMES, slug, 'name') : undefined
    setResult(entry ?? (slug ? null : undefined))
    if (entry) {
      setHead({
        title: `${entry.name} — Irish Surname Origin & Meaning · Irish Tools`,
        description: `The Irish surname ${entry.name} (${entry.irish}) means ${entry.meaning}. Its traditional stronghold is ${entry.region}.`,
        canonical: `https://irishtools.ie/surnames/${slugify(entry.name)}/`,
      })
    }
  }, [slug])

  function show(entry) {
    setResult(entry)
    if (entry) navigate('surnames', slugify(entry.name))
  }

  function search(value) {
    const v = value ?? input
    if (!v.trim()) return
    show(findSurname(v))
  }

  const counties = result ? countiesIn(result.region) : []
  const related = result ? relatedTo(result, counties) : []

  return (
    <section className="panel surname">
      <form
        className="loc-search"
        onSubmit={(e) => {
          e.preventDefault()
          search()
        }}
      >
        <input
          type="text"
          className="loc-search__input"
          placeholder="Enter your surname… (e.g. Murphy)"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          aria-label="Surname"
        />
        <button type="submit" className="btn btn--primary">
          Look it up
        </button>
      </form>

      <div className="reg__examples">
        <span>Try:</span>
        {EXAMPLES.map((ex) => (
          <button key={ex} className="reg__example" onClick={() => search(ex)}>
            {ex}
          </button>
        ))}
      </div>

      {result === null && (
        <p className="weather-status weather-status--error">
          Ah, we haven’t got that one yet — we’re adding more all the time. Try another?
        </p>
      )}

      {result && (
        <div className="surname__result" aria-live="polite">
          <h2 className="surname__name">{result.name}</h2>
          <p className="surname__irish" lang="ga">{result.irish}</p>
          <p className="surname__meaning">{result.meaning}</p>
          <p className="surname__region">
            <strong>Stronghold:</strong>{' '}
            {counties.length > 0
              ? counties.map((c, i) => (
                  <span key={c.name}>
                    {i > 0 && ', '}
                    <button className="linklike" onClick={() => navigate('counties', slugify(c.name))}>
                      {c.name}
                    </button>
                  </span>
                ))
              : result.region}
          </p>
          {result.note && <p className="surname__note">{result.note}</p>}
          <ShareButton
            url={`https://irishtools.ie/surnames/${slugify(result.name)}/`}
            text={`🧬 The Irish surname ${result.name} (${result.irish}) means ${result.meaning} — from ${result.region}.`}
          />

          {related.length > 0 && (
            <div className="related">
              <h3 className="related__title">Other names from the same part of Ireland</h3>
              <div className="related__chips">
                {related.map((s) => (
                  <button key={s.name} className="related__chip" onClick={() => show(s)}>
                    {s.name}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {result === undefined && (
        <p className="weather-hint">
          Curious where your family name comes from? Look up its Irish form, meaning, and
          the part of Ireland it hails from.
        </p>
      )}
    </section>
  )
}
