import { SUPPORT_URL } from '../config.js'

// "Buy me a pint" tip-jar button. Renders only when a SUPPORT_URL is configured.
export default function BuyMeAPint({ className = '', label = 'Buy me a pint' }) {
  if (!SUPPORT_URL) return null
  return (
    <a
      className={`pint-btn ${className}`}
      href={SUPPORT_URL}
      target="_blank"
      rel="noopener noreferrer"
    >
      🍺 <span className="pint-btn__label">{label}</span>
    </a>
  )
}
