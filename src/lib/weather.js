// Reusable weather layer built on Open-Meteo (free, no API key required).
// Shared by the weather-based tools: "Is There Good Drying Out?",
// "Is It a Soft Day?", "Is It Time to Foot the Turf?".

const GEOCODE_URL = 'https://geocoding-api.open-meteo.com/v1/search'
const FORECAST_URL = 'https://api.open-meteo.com/v1/forecast'

// Look up a place by name. Biased towards Ireland but works anywhere.
export async function geocode(name) {
  const url = `${GEOCODE_URL}?name=${encodeURIComponent(name)}&count=5&language=en&format=json`
  const res = await fetch(url)
  if (!res.ok) throw new Error('Could not look up that place.')
  const data = await res.json()
  const results = data.results ?? []
  // Prefer Irish results when the search is ambiguous.
  results.sort((a, b) => (b.country_code === 'IE') - (a.country_code === 'IE'))
  return results.map((r) => ({
    name: r.name,
    admin1: r.admin1,
    country: r.country,
    countryCode: r.country_code,
    latitude: r.latitude,
    longitude: r.longitude,
  }))
}

// Fetch today's forecast for a lat/lon.
export async function getForecast(latitude, longitude) {
  const params = new URLSearchParams({
    latitude,
    longitude,
    current: 'temperature_2m,relative_humidity_2m,precipitation,weather_code,wind_speed_10m,is_day',
    hourly: 'precipitation_probability,relative_humidity_2m,wind_speed_10m,temperature_2m',
    timezone: 'auto',
    forecast_days: '1',
    wind_speed_unit: 'kmh',
  })
  const res = await fetch(`${FORECAST_URL}?${params}`)
  if (!res.ok) throw new Error('Could not fetch the weather.')
  return res.json()
}

// Human-readable label for an Open-Meteo WMO weather code.
export function describeWeather(code) {
  if (code === 0) return { text: 'Clear', emoji: '☀️' }
  if (code <= 2) return { text: 'Bit of cloud', emoji: '🌤️' }
  if (code === 3) return { text: 'Overcast', emoji: '☁️' }
  if (code <= 48) return { text: 'Foggy', emoji: '🌫️' }
  if (code <= 57) return { text: 'Drizzle', emoji: '🌦️' }
  if (code <= 67) return { text: 'Rain', emoji: '🌧️' }
  if (code <= 77) return { text: 'Snow', emoji: '🌨️' }
  if (code <= 82) return { text: 'Showers', emoji: '🌧️' }
  if (code <= 86) return { text: 'Snow showers', emoji: '🌨️' }
  return { text: 'Thundery', emoji: '⛈️' }
}

// --- Drying score ----------------------------------------------------------
// Score 0–100 for how good "the drying" is, the way an Irish mammy judges it:
// wind is king, rain is the enemy, then humidity, then a bit of warmth/sun.

function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n))
}

// Daytime hours only — no one's drying clothes at 3am.
function daytimeHourly(forecast) {
  const { time = [], precipitation_probability = [], relative_humidity_2m = [], wind_speed_10m = [] } =
    forecast.hourly ?? {}
  const out = []
  for (let i = 0; i < time.length; i++) {
    const hour = new Date(time[i]).getHours()
    if (hour >= 8 && hour <= 20) {
      out.push({
        rainProb: precipitation_probability[i] ?? 0,
        humidity: relative_humidity_2m[i] ?? 0,
        wind: wind_speed_10m[i] ?? 0,
      })
    }
  }
  return out
}

export function dryingScore(forecast) {
  const current = forecast.current ?? {}
  const hours = daytimeHourly(forecast)

  const wind = current.wind_speed_10m ?? 0
  const humidity = current.relative_humidity_2m ?? 80
  const temp = current.temperature_2m ?? 10
  const code = current.weather_code ?? 3

  // Worst-case rain risk across the drying day.
  const maxRain = hours.length ? Math.max(...hours.map((h) => h.rainProb)) : (current.precipitation > 0 ? 100 : 30)

  // Wind (0–35): sweet spot ~20–40 km/h. Too little = slow, gale = blown away.
  let windPts
  if (wind < 5) windPts = wind * 2
  else if (wind <= 40) windPts = 10 + ((wind - 5) / 35) * 25
  else windPts = clamp(35 - (wind - 40) * 0.8, 8, 35)

  // Rain (0–30): inverse of the day's peak rain chance.
  const rainPts = clamp(30 - (maxRain / 100) * 30, 0, 30)

  // Humidity (0–20): drier air dries clothes.
  const humidityPts = clamp(20 - ((humidity - 40) / 60) * 20, 0, 20)

  // Warmth (0–15): a bit of heat helps.
  const tempPts = clamp(((temp - 2) / 20) * 15, 0, 15)

  let score = Math.round(windPts + rainPts + humidityPts + tempPts)

  // Hard cap: if rain is basically certain, the drying is ruined no matter what.
  if (maxRain >= 80) score = Math.min(score, 30)
  score = clamp(score, 0, 100)

  return { score, wind, humidity, temp, maxRain, code }
}

// Map a score to a verdict with proper Irish-mammy commentary.
export function dryingVerdict(score) {
  if (score >= 80)
    return {
      level: 'top',
      emoji: '☀️💨',
      title: 'Top class drying!',
      blurb: 'Get every stitch in the house out on that line. You’d be mad to waste it.',
    }
  if (score >= 62)
    return {
      level: 'good',
      emoji: '👕',
      title: 'Grand drying',
      blurb: 'A good day for it. Hang them out and they’ll be dry by teatime.',
    }
  if (score >= 42)
    return {
      level: 'middling',
      emoji: '🤔',
      title: 'Ah, middling',
      blurb: 'You’d chance it, but keep half an eye on the sky and bring them in quick if it turns.',
    }
  if (score >= 22)
    return {
      level: 'poor',
      emoji: '🌥️',
      title: 'Poor enough',
      blurb: 'They’ll only get damp again. Stick on the clothes horse instead, you’d be safer.',
    }
  return {
    level: 'desperate',
    emoji: '🌧️',
    title: 'Not a hope',
    blurb: 'Leave them inside, sure you’d be wasting your time. Desperate altogether.',
  }
}

// --- Soft day --------------------------------------------------------------
// A "soft day, thank God" is the classic Irish mild, grey, damp, drizzly/misty
// day — not cold, not lashing, just a gentle persistent mizzle under low cloud.

export function softDayAssessment(forecast) {
  const c = forecast.current ?? {}
  const temp = c.temperature_2m ?? 10
  const humidity = c.relative_humidity_2m ?? 85
  const wind = c.wind_speed_10m ?? 10
  const code = c.weather_code ?? 3
  const precip = c.precipitation ?? 0

  // Each ingredient of "softness" scored 0–1, then combined.
  // Mild temperature (sweet spot ~7–14°C).
  const mild = temp >= 6 && temp <= 15 ? 1 - Math.abs(temp - 10.5) / 6 : 0
  // Damp air.
  const damp = clamp((humidity - 80) / 18, 0, 1)
  // Grey/misty/drizzly skies: overcast (3), fog (45–48), drizzle (51–57),
  // light rain (61), light showers (80).
  const greyCodes = [3, 45, 48, 51, 53, 55, 56, 57, 61, 80]
  const grey = greyCodes.includes(code) ? 1 : code <= 2 ? 0 : 0.4
  // Gentle, not blowing a gale.
  const gentle = clamp(1 - Math.max(0, wind - 25) / 30, 0, 1)
  // Not lashing — a soft day is a light mizzle, not heavy rain.
  const notLashing = precip <= 2.5 ? 1 : clamp(1 - (precip - 2.5) / 5, 0, 1)

  const score = Math.round(
    (mild * 0.3 + damp * 0.2 + grey * 0.25 + gentle * 0.1 + notLashing * 0.15) * 100,
  )

  // It only counts as a genuine soft day if it's mild, gentle and not lashing.
  const isSoftDay = score >= 60 && temp >= 5 && temp <= 16 && precip <= 4 && wind < 35

  return { score, isSoftDay, temp, humidity, wind, precip, code }
}

// Translate the raw weather into proper Irish vernacular — the fun bit.
export function irishWeather({ temp, wind, humidity, code, precip }) {
  if (code >= 95) return { phrase: 'Wild out altogether', note: 'Thunder and all — stay in by the fire.' }
  if (code >= 71 && code <= 77) return { phrase: 'Baltic — snow and all', note: 'Perishing. Wrap up well.' }
  if (precip >= 5 || (code >= 63 && code <= 67) || code === 82)
    return { phrase: 'It’s lashing', note: 'Bucketing down out there. You’d be drownded.' }
  if (temp <= 3) return { phrase: 'Perishing', note: 'Baltic out. Bitter cold.' }
  if (temp >= 23 && code <= 1) return { phrase: 'Splitting the stones', note: 'Roasting! A rare oul scorcher.' }
  if (code === 45 || code === 48) return { phrase: 'A soft, misty oul day', note: 'Fog down low, can’t see a thing.' }
  if ([51, 53, 55, 56, 57, 61].includes(code))
    return { phrase: 'Soft day, thank God', note: 'Gentle mizzle, mild and grey. Classic.' }
  if (wind >= 45) return { phrase: 'Blowing a hooley', note: 'Mind your washing — it’d take the head off ya.' }
  if (temp >= 18 && humidity >= 75) return { phrase: 'Awful close', note: 'Muggy and warm. You’d be stuck to yourself.' }
  if (code <= 1 && temp >= 14) return { phrase: 'Grand day altogether', note: 'Dry and bright. Make the most of it.' }
  if (code === 3) return { phrase: 'Bit grey but grand', note: 'Dry enough, just a blanket of cloud.' }
  return { phrase: 'Middlin’', note: 'Neither one thing nor the other, sure.' }
}
