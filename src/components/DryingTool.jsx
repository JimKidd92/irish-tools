import { describeWeather, dryingScore, dryingVerdict } from '../lib/weather.js'
import { useWeatherTool } from '../hooks/useWeatherTool.js'
import LocationSearch from './LocationSearch.jsx'
import ShareButton from './ShareButton.jsx'
import WeatherFX from './WeatherFX.jsx'

const FX_BY_LEVEL = { top: 'sun', good: 'sun', middling: 'mist', poor: 'rain', desperate: 'rain' }

// Turn a raw forecast into this tool's result.
function compute(forecast) {
  const scored = dryingScore(forecast)
  return { ...scored, weather: describeWeather(scored.code) }
}

export default function DryingTool() {
  const { query, setQuery, location, result, status, error, onSearch, useMyLocation } =
    useWeatherTool('irish-tools.drying-location', compute)

  const verdict = result ? dryingVerdict(result.score) : null

  return (
    <section className="drying weather-tool">
      <LocationSearch
        query={query}
        setQuery={setQuery}
        onSearch={onSearch}
        useMyLocation={useMyLocation}
      />

      {status === 'loading' && <p className="weather-status">Checking the sky…</p>}
      {status === 'error' && <p className="weather-status weather-status--error">{error}</p>}

      {verdict && status !== 'loading' && (
        <div className={`drying__result drying__result--${verdict.level} fx-host`} aria-live="polite">
          <WeatherFX type={FX_BY_LEVEL[verdict.level]} />
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

          <div
            className="drying__meter"
            role="img"
            aria-label={`Drying score ${result.score} out of 100`}
          >
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

          <ShareButton
            url="https://irishtools.ie/drying/"
            text={`🧺 Is there good drying out in ${location?.name}? ${verdict.title} - ${result.score}/100 drying.`}
          />
        </div>
      )}

      {!result && status === 'idle' && (
        <p className="weather-hint">
          Pop in your town (or use your location) and we’ll tell you whether it’s worth
          hanging the washing out.
        </p>
      )}
    </section>
  )
}
