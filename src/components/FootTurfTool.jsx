import { getOutlook, footTurfAssessment, footTurfVerdict } from '../lib/weather.js'
import { useWeatherTool } from '../hooks/useWeatherTool.js'
import LocationSearch from './LocationSearch.jsx'
import ShareButton from './ShareButton.jsx'

const fetchOutlook = (lat, lon) => getOutlook(lat, lon)

export default function FootTurfTool() {
  const { query, setQuery, location, result, status, error, onSearch, useMyLocation } =
    useWeatherTool('irish-tools.turf-location', footTurfAssessment, fetchOutlook)

  const verdict = result ? footTurfVerdict(result.score) : null

  return (
    <section className="weather-tool turf">
      <LocationSearch
        query={query}
        setQuery={setQuery}
        onSearch={onSearch}
        useMyLocation={useMyLocation}
        placeholder="Enter the bog’s nearest town…"
      />

      {status === 'loading' && <p className="weather-status">Checking the drying…</p>}
      {status === 'error' && <p className="weather-status weather-status--error">{error}</p>}

      {verdict && status !== 'loading' && (
        <div className={`drying__result drying__result--${verdict.level}`} aria-live="polite">
          <span className="drying__verdict-emoji" aria-hidden="true">
            {verdict.emoji}
          </span>
          <h2 className="drying__verdict-title">{verdict.title}</h2>
          <p className="drying__verdict-place">
            {location?.name}
            {location?.admin1 ? `, ${location.admin1}` : ''}
          </p>
          <p className="drying__verdict-blurb">{verdict.blurb}</p>

          <div
            className="drying__meter"
            role="img"
            aria-label={`Footing score ${result.score} out of 100`}
          >
            <div className="drying__meter-bar">
              <div className="drying__meter-fill" style={{ width: `${result.score}%` }} />
            </div>
            <span className="drying__meter-label">{result.score}/100 footing weather</span>
          </div>

          <ul className="turf__days">
            {result.days.map((d, i) => (
              <li key={i} className={`turf__day ${d.dry ? 'is-dry' : 'is-wet'}`}>
                <span className="turf__day-label">{d.label}</span>
                <span className="turf__day-icon" aria-hidden="true">
                  {d.dry ? '🌤️' : '🌧️'}
                </span>
                <span className="turf__day-rain">{Math.round(d.rainProb)}%</span>
              </li>
            ))}
          </ul>

          <ShareButton
            url="https://irishtools.ie/turf/"
            text={`🔥 Time to foot the turf near ${location?.name}? ${verdict.title} - ${result.score}/100 footing weather.`}
          />
        </div>
      )}

      {!result && status === 'idle' && (
        <p className="weather-hint">
          Tell us where the bog is and we’ll check whether there’s a dry enough stretch to
          get the turf footed.
        </p>
      )}
    </section>
  )
}
