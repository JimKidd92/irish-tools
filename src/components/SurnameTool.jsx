import { useEffect, useRef, useState } from 'react'
import { SURNAMES, findSurname, searchSurnames } from '../data/surnames.js'
import { SURNAME_RICH } from '../data/surnamesRich.generated.js'
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

function SurnameRich({ rich, name }) {
  return (
    <div className="surname__rich">
      {rich.pronunciation && (
        <p className="surname__pron">
          <strong>Say it:</strong> {rich.pronunciation}
        </p>
      )}
      {rich.history.map((p, i) => (
        <p key={i} className="surname__history">{p}</p>
      ))}
      {rich.variants.length > 0 && (
        <p className="surname__variants">
          <strong>Also spelled:</strong> {rich.variants.join(' · ')}
        </p>
      )}
      {rich.bearers.length > 0 && (
        <div className="surname__bearers">
          <h3 className="county-rich__title">Famous {name}s</h3>
          <ul className="county-rich__list">
            {rich.bearers.map((b) => (
              <li key={b.name}>
                <strong>{b.name}</strong> — {b.note}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
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

  const [suggestions, setSuggestions] = useState([])
  const [open, setOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(-1)
  const boxRef = useRef(null)

  useEffect(() => {
    function onOutside(e) {
      if (boxRef.current && !boxRef.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('pointerdown', onOutside)
    return () => document.removeEventListener('pointerdown', onOutside)
  }, [])

  function show(entry) {
    setResult(entry)
    setOpen(false)
    if (entry) {
      setInput(entry.name)
      navigate('surnames', slugify(entry.name))
    }
  }

  function search(value) {
    const v = value ?? input
    if (!v.trim()) return
    show(findSurname(v))
  }

  function onInputChange(value) {
    setInput(value)
    setActiveIndex(-1)
    const matches = searchSurnames(value)
    setSuggestions(matches)
    setOpen(matches.length > 0)
  }

  function onKeyDown(e) {
    if (!open || suggestions.length === 0) return
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setActiveIndex((i) => (i + 1) % suggestions.length)
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setActiveIndex((i) => (i <= 0 ? suggestions.length - 1 : i - 1))
    } else if (e.key === 'Enter' && activeIndex >= 0) {
      e.preventDefault()
      show(suggestions[activeIndex])
    } else if (e.key === 'Escape') {
      setOpen(false)
    }
  }

  const counties = result ? countiesIn(result.region) : []
  const related = result ? relatedTo(result, counties) : []

  return (
    <section className="panel surname">
      <form
        className="loc-search surname__search"
        ref={boxRef}
        onSubmit={(e) => {
          e.preventDefault()
          if (activeIndex >= 0 && suggestions[activeIndex]) show(suggestions[activeIndex])
          else search()
        }}
      >
        <div className="surname__search-box">
          <input
            type="text"
            className="loc-search__input"
            placeholder="Enter your surname… (e.g. Murphy)"
            value={input}
            onChange={(e) => onInputChange(e.target.value)}
            onFocus={() => suggestions.length > 0 && setOpen(true)}
            onKeyDown={onKeyDown}
            aria-label="Surname"
            aria-autocomplete="list"
            aria-expanded={open}
            role="combobox"
            autoComplete="off"
          />
          {open && (
            <ul className="surname__suggestions" role="listbox">
              {suggestions.map((s, i) => (
                <li key={s.name} role="option" aria-selected={i === activeIndex}>
                  <button
                    type="button"
                    className={`surname__suggestion ${i === activeIndex ? 'is-active' : ''}`}
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => show(s)}
                  >
                    <span className="surname__suggestion-name">{s.name}</span>
                    <span className="surname__suggestion-meaning">{s.meaning}</span>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
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

          {SURNAME_RICH[result.name] && <SurnameRich rich={SURNAME_RICH[result.name]} name={result.name} />}

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
