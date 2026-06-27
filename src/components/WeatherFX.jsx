// A subtle animated weather layer for tool results: 'mist' | 'rain' | 'sun'.
// Purely decorative, sits behind the content, respects reduced-motion via CSS.
export default function WeatherFX({ type }) {
  if (!type) return null
  return <span className={`weather-fx weather-fx--${type}`} aria-hidden="true" />
}
