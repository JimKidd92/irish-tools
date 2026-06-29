import { useEffect, useRef, useState } from 'react'
import { GOOGLE_CLIENT_ID } from '../config.js'

// Loads Google Identity Services once and renders the official "Sign in with
// Google" button. Calls onCredential(jwt) when the user signs in.
let gsiPromise = null
function loadGsi() {
  if (gsiPromise) return gsiPromise
  gsiPromise = new Promise((resolve, reject) => {
    if (window.google?.accounts?.id) return resolve()
    const s = document.createElement('script')
    s.src = 'https://accounts.google.com/gsi/client'
    s.async = true
    s.defer = true
    s.onload = () => resolve()
    s.onerror = () => reject(new Error('Could not load Google sign-in'))
    document.head.appendChild(s)
  })
  return gsiPromise
}

export default function GoogleSignInButton({ onCredential }) {
  const ref = useRef(null)
  const [error, setError] = useState('')

  useEffect(() => {
    let cancelled = false
    loadGsi()
      .then(() => {
        if (cancelled || !ref.current) return
        window.google.accounts.id.initialize({
          client_id: GOOGLE_CLIENT_ID,
          callback: (resp) => onCredential(resp.credential),
        })
        window.google.accounts.id.renderButton(ref.current, {
          theme: 'filled_blue',
          size: 'large',
          shape: 'pill',
          text: 'signin_with',
          logo_alignment: 'left',
        })
      })
      .catch((e) => !cancelled && setError(e.message))
    return () => {
      cancelled = true
    }
  }, [onCredential])

  if (error) return <p className="quiz-auth__error">{error}</p>
  return <div ref={ref} className="gsi-button" />
}
