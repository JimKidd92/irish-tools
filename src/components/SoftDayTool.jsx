import { softDayAssessment, irishWeather, describeWeather } from '../lib/weather.js'
import { useWeatherTool } from '../hooks/useWeatherTool.js'
import LocationSearch from './LocationSearch.jsx'
import ShareButton from './ShareButton.jsx'
import WeatherFX from './WeatherFX.jsx'

function fxFor(r) {
  if (r.isSoftDay) return 'mist'
  if (r.precip >= 1.5) return 'rain'
  if (r.code <= 1) return 'sun'
  return null
}

function compute(forecast) {
  const assessment = softDayAssessment(forecast)
  return {
    ...assessment,
    irish: irishWeather(assessment),
    weather: describeWeather(assessment.code),
  }
}

export default function SoftDayTool() {
  const { query, setQuery, location, result, status, error, onSearch, useMyLocation } =
    useWeatherTool('irish-tools.softday-location', compute)

  return (
    <section className="softday weather-tool">
      <LocationSearch
        query={query}
        setQuery={setQuery}
        onSearch={onSearch}
        useMyLocation={useMyLocation}
      />

      {status === 'loading' && <p className="weather-status">Looking up at the sky…</p>}
      {status === 'error' && <p className="weather-status weather-status--error">{error}</p>}

      {result && status !== 'loading' && (
        <div
          className={`softday__result fx-host ${result.isSoftDay ? 'is-soft' : 'is-not-soft'}`}
          aria-live="polite"
        >
          <WeatherFX type={fxFor(result)} />
          <span className="softday__big" aria-hidden="true">
            {result.isSoftDay ? '🌧️🙏' : result.weather.emoji}
          </span>
          <h2 className="softday__answer">
            {result.isSoftDay ? 'Soft day, thank God.' : 'Ah no, not a soft day.'}
          </h2>
          <p className="softday__place">
            {location?.name}
            {location?.admin1 ? `, ${location.admin1}` : ''}
          </p>

          <div className="softday__phrase">
            <span className="softday__phrase-label">As they’d say:</span>
            <strong className="softday__phrase-text">“{result.irish.phrase}”</strong>
            <span className="softday__phrase-note">{result.irish.note}</span>
          </div>

          <ul className="drying__stats">
            <li>
              <span className="drying__stat-val">{Math.round(result.temp)}°</span>
              <span className="drying__stat-key">temp</span>
            </li>
            <li>
              <span className="drying__stat-val">{Math.round(result.wind)}</span>
              <span className="drying__stat-key">km/h wind</span>
            </li>
            <li>
              <span className="drying__stat-val">{Math.round(result.humidity)}%</span>
              <span className="drying__stat-key">humidity</span>
            </li>
            <li>
              <span className="drying__stat-val">{result.weather.emoji}</span>
              <span className="drying__stat-key">{result.weather.text}</span>
            </li>
          </ul>

          <ShareButton
            url="https://irishtools.ie/soft-day/"
            text={`🌧️ Is it a soft day in ${location?.name}? ${result.isSoftDay ? 'Soft day, thank God.' : 'Not a soft day.'} “${result.irish.phrase}”`}
          />
        </div>
      )}

      {!result && status === 'idle' && (
        <p className="weather-hint">
          Where are you? We’ll tell you if it’s a soft oul day - and translate the
          forecast into proper Irish.
        </p>
      )}
    </section>
  )
}
