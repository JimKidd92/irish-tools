import { getDaylight, formAssessment, formVerdict } from '../lib/weather.js'
import { useWeatherTool } from '../hooks/useWeatherTool.js'
import LocationSearch from './LocationSearch.jsx'
import ShareButton from './ShareButton.jsx'

const fetchDaylight = (lat, lon) => getDaylight(lat, lon)

export default function HowsTheFormTool() {
  const { query, setQuery, location, result, status, error, onSearch, useMyLocation } =
    useWeatherTool('irish-tools.form-location', formAssessment, fetchDaylight)

  const verdict = result ? formVerdict(result) : null

  return (
    <section className="weather-tool form">
      <LocationSearch
        query={query}
        setQuery={setQuery}
        onSearch={onSearch}
        useMyLocation={useMyLocation}
      />

      {status === 'loading' && <p className="weather-status">Checking the evenings…</p>}
      {status === 'error' && <p className="weather-status weather-status--error">{error}</p>}

      {verdict && status !== 'loading' && (
        <div className={`form__result form__result--${verdict.level}`} aria-live="polite">
          <span className="form__emoji" aria-hidden="true">{verdict.emoji}</span>
          <h2 className="form__title">{verdict.title}</h2>
          <p className="form__place">
            {location?.name}
            {location?.admin1 ? `, ${location.admin1}` : ''}
          </p>
          <p className="form__blurb">{verdict.blurb}</p>

          <ul className="drying__stats">
            <li>
              <span className="drying__stat-val">{result.sunrise}</span>
              <span className="drying__stat-key">sunrise</span>
            </li>
            <li>
              <span className="drying__stat-val">{result.sunset}</span>
              <span className="drying__stat-key">sunset</span>
            </li>
            <li>
              <span className="drying__stat-val">{result.dayLength}</span>
              <span className="drying__stat-key">daylight</span>
            </li>
            <li>
              <span className="drying__stat-val">
                {result.weeklyDeltaMin >= 0 ? '+' : ''}
                {result.weeklyDeltaMin}
              </span>
              <span className="drying__stat-key">min vs last wk</span>
            </li>
          </ul>

          <ShareButton
            url="https://irishtools.ie/form/"
            text={`🌅 ${verdict.title} (${location?.name}) — sunset ${result.sunset}, ${result.dayLength} of daylight.`}
          />
        </div>
      )}

      {!result && status === 'idle' && (
        <p className="weather-hint">
          Where are you? We’ll check if there’s a grand stretch in the evenings — or if
          they’re drawing in on ya.
        </p>
      )}
    </section>
  )
}
