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
