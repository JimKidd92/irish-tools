import { useState } from 'react'
import { decodeReg } from '../lib/reg.js'
import ShareButton from './ShareButton.jsx'

const EXAMPLES = ['231-G-12345', '12-D-34567', '99-C-1234']

export default function RegDecoderTool() {
  const [input, setInput] = useState('')
  const [result, setResult] = useState(null)

  function decode(value) {
    const v = value ?? input
    setResult(decodeReg(v))
  }

  function tryExample(ex) {
    setInput(ex)
    decode(ex)
  }

  return (
    <section className="panel reg">
      <form
        className="loc-search"
        onSubmit={(e) => {
          e.preventDefault()
          decode()
        }}
      >
        <input
          type="text"
          className="loc-search__input"
          placeholder="231-G-12345"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          aria-label="Registration number"
          autoCapitalize="characters"
        />
        <button type="submit" className="btn btn--primary">
          Decode
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

      {result && !result.valid && <p className="weather-status weather-status--error">{result.error}</p>}

      {result && result.valid && (
        <div className="reg__result" aria-live="polite">
          <ul className="reg__grid">
            <li>
              <span className="reg__val">{result.year}</span>
              <span className="reg__key">Year</span>
            </li>
            <li>
              <span className="reg__val">{result.countyCode}</span>
              <span className="reg__key">{result.county}</span>
            </li>
            <li>
              <span className="reg__val">#{result.sequenceRaw}</span>
              <span className="reg__key">Sequence</span>
            </li>
          </ul>
          <p className="reg__sentence">
            Registered in <strong>{result.county}</strong> in <strong>{result.year}</strong>
            {result.period ? `, ${result.period.toLowerCase()}` : ''}.
          </p>
          <ShareButton
            url="https://irishtools.ie/#/reg"
            text={`🚗 ${input.toUpperCase()} → ${result.county}, ${result.year}${result.period ? ` (${result.period})` : ''}.`}
          />
        </div>
      )}

      {!result && (
        <p className="weather-hint">
          Enter any Irish reg and we’ll tell you the year and county it was registered in.
        </p>
      )}
    </section>
  )
}
