import { useEffect, useState } from 'react'
import {
  geocode,
  getForecast,
  describeWeather,
  dryingScore,
  dryingVerdict,
} from '../lib/weather.js'

const STORAGE_KEY = 'irish-tools.drying-location'

function loadLocation() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

export default function DryingTool() {
  const [query, setQuery] = useState('')
  const [location, setLocation] = useState(loadLocation)
  const [result, setResult] = useState(null)
  const [status, setStatus] = useState('idle') // idle | loading | error
  const [error, setError] = useState('')

  // Auto-load the weather for the last saved location on first visit.
  useEffect(() => {
    if (location) fetchFor(location)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  async function fetchFor(loc) {
    setStatus('loading')
    setError('')
    try {
      const forecast = await getForecast(loc.latitude, loc.longitude)
      const scored = dryingScore(forecast)
      setResult({ ...scored, weather: describeWeather(scored.code) })
      setLocation(loc)
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(loc))
      } catch {
        /* storage unavailable — grand, just won't remember */
      }
      setStatus('idle')
    } catch (err) {
      setStatus('error')
      setError(err.message || 'Something went wrong fetching the weather.')
    }
  }

  async function onSearch(e) {
    e.preventDefault()
    if (!query.trim()) return
    setStatus('loading')
    setError('')
    try {
      const places = await geocode(query.trim())
      if (!places.length) {
        setStatus('error')
        setError('Couldn’t find that place. Try a nearby town?')
        return
      }
      await fetchFor(places[0])
    } catch (err) {
      setStatus('error')
      setError(err.message || 'Something went wrong.')
    }
  }

  function useMyLocation() {
    if (!navigator.geolocation) {
      setError('Your browser won’t share your location. Type a town instead.')
      setStatus('error')
      return
    }
    setStatus('loading')
    setError('')
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        fetchFor({
          name: 'Your location',
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
        })
      },
      () => {
        setStatus('error')
        setError('Couldn’t get your location. Type a town instead.')
      },
    )
  }

  const verdict = result ? dryingVerdict(result.score) : null

  return (
    <section className="drying">
      <form className="drying__search" onSubmit={onSearch}>
        <input
          type="text"
          className="drying__input"
          placeholder="Enter your town… (e.g. Galway)"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Town or place name"
        />
        <button type="submit" className="btn btn--primary">
          Check
        </button>
        <button type="button" className="btn btn--ghost" onClick={useMyLocation}>
          📍 Use my location
        </button>
      </form>

      {status === 'loading' && <p className="drying__status">Checking the sky…</p>}
      {status === 'error' && <p className="drying__status drying__status--error">{error}</p>}

      {verdict && status !== 'loading' && (
        <div className={`drying__result drying__result--${verdict.level}`} aria-live="polite">
          <div className="drying__verdict">
            <span className="drying__verdict-emoji" aria-hidden="true">
              {verdict.emoji}
            </span>
            <h2 className="drying__verdict-title">{verdict.title}</h2>
            <p className="drying__verdict-place">
              {location?.name}
              {location?.admin1 ? `, ${location.admin1}` : ''} ·{' '}
              {result.weather.emoji} {result.weather.text}
            </p>
            <p className="drying__verdict-blurb">{verdict.blurb}</p>
          </div>

          <div className="drying__meter" role="img" aria-label={`Drying score ${result.score} out of 100`}>
            <div className="drying__meter-bar">
              <div className="drying__meter-fill" style={{ width: `${result.score}%` }} />
            </div>
            <span className="drying__meter-label">{result.score}/100 drying</span>
          </div>

          <ul className="drying__stats">
            <li>
              <span className="drying__stat-val">{Math.round(result.wind)}</span>
              <span className="drying__stat-key">km/h wind</span>
            </li>
            <li>
              <span className="drying__stat-val">{Math.round(result.maxRain)}%</span>
              <span className="drying__stat-key">rain chance</span>
            </li>
            <li>
              <span className="drying__stat-val">{Math.round(result.humidity)}%</span>
              <span className="drying__stat-key">humidity</span>
            </li>
            <li>
              <span className="drying__stat-val">{Math.round(result.temp)}°</span>
              <span className="drying__stat-key">temp</span>
            </li>
          </ul>
        </div>
      )}

      {!result && status === 'idle' && (
        <p className="drying__hint">
          Pop in your town (or use your location) and we’ll tell you whether it’s worth
          hanging the washing out.
        </p>
      )}
    </section>
  )
}
