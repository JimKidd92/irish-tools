import { useEffect, useState } from 'react'
import { getConsent, setConsent } from '../lib/consent.js'
import { navigate } from '../hooks/useHashRoute.js'

// GDPR-style consent banner. Shows until the user makes a choice. The "Cookie
// settings" footer link dispatches 'reopen-consent' to bring it back.
export default function ConsentBanner() {
  const [visible, setVisible] = useState(() => getConsent() === null)

  useEffect(() => {
    const reopen = () => setVisible(true)
    window.addEventListener('reopen-consent', reopen)
    return () => window.removeEventListener('reopen-consent', reopen)
  }, [])

  if (!visible) return null

  function choose(value) {
    setConsent(value)
    setVisible(false)
  }

  return (
    <div className="consent" role="dialog" aria-label="Cookie consent">
      <p className="consent__text">
        🍪 We use local storage to remember your settings, and we’d like to use cookies for
        ads to keep Irish Tools free. Essential bits work either way.{' '}
        <button
          className="consent__link"
          onClick={() => {
            setVisible(false)
            navigate('privacy')
          }}
        >
          Privacy policy
        </button>
      </p>
      <div className="consent__actions">
        <button className="btn btn--ghost" onClick={() => choose('rejected')}>
          Reject ads
        </button>
        <button className="btn btn--primary" onClick={() => choose('accepted')}>
          Accept
        </button>
      </div>
    </div>
  )
}
