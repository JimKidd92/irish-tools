import { useEffect, useState } from 'react'
import { geocode, getForecast } from '../lib/weather.js'

// Shared logic for any location-based weather tool: holds the chosen location,
// handles search + geolocation, fetches weather (via `fetcher`), and runs a
// `compute` function over it to produce the tool-specific result. Remembers the
// last location per tool via `storageKey`.
export function useWeatherTool(storageKey, compute, fetcher = getForecast) {
  const [query, setQuery] = useState('')
  const [location, setLocation] = useState(() => load(storageKey))
  const [result, setResult] = useState(null)
  const [status, setStatus] = useState('idle') // idle | loading | error
  const [error, setError] = useState('')

  // Auto-load weather for the last saved location on first visit.
  useEffect(() => {
    if (location) fetchFor(location)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  async function fetchFor(loc) {
    setStatus('loading')
    setError('')
    try {
      const data = await fetcher(loc.latitude, loc.longitude)
      setResult(compute(data))
      setLocation(loc)
      try {
        localStorage.setItem(storageKey, JSON.stringify(loc))
      } catch {
        /* storage unavailable - grand, just won't remember */
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
      (pos) =>
        fetchFor({
          name: 'Your location',
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
        }),
      () => {
        setStatus('error')
        setError('Couldn’t get your location. Type a town instead.')
      },
    )
  }

  return { query, setQuery, location, result, status, error, onSearch, useMyLocation }
}

function load(storageKey) {
  try {
    const raw = localStorage.getItem(storageKey)
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}
