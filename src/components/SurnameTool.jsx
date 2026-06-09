import { useState } from 'react'
import { findSurname } from '../data/surnames.js'
import ShareButton from './ShareButton.jsx'

const EXAMPLES = ['Murphy', "O'Sullivan", 'Walsh', 'Kennedy']

export default function SurnameTool() {
  const [input, setInput] = useState('')
  const [result, setResult] = useState(undefined) // undefined = nothing searched yet

  function search(value) {
    const v = value ?? input
    if (!v.trim()) return
    setResult(findSurname(v))
  }

  function tryExample(ex) {
    setInput(ex)
    search(ex)
  }

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
          <button key={ex} className="reg__example" onClick={() => tryExample(ex)}>
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
            <strong>Stronghold:</strong> {result.region}
          </p>
          {result.note && <p className="surname__note">{result.note}</p>}
          <ShareButton
            url="https://irishtools.ie/surnames/"
            text={`🧬 The Irish surname ${result.name} (${result.irish}) means ${result.meaning} — from ${result.region}.`}
          />
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
