import { useEffect, useState } from 'react'
import { X } from 'lucide-react'

// "Get the app" banner. On Chrome/Android we capture beforeinstallprompt and
// trigger the real install dialog; on iOS Safari (which has no prompt API) we
// show add-to-home-screen instructions instead. Mobile only, snoozes when
// dismissed, never shows inside the installed app.
const SNOOZE_KEY = 'irish-tools.install-dismissed'
const SNOOZE_DAYS = 30
const SHOW_AFTER_MS = 14000

// Capture the event at module load — Chrome may fire it before React mounts.
let deferredPrompt = null
if (typeof window !== 'undefined') {
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault()
    deferredPrompt = e
  })
}

const isStandalone = () =>
  window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true

const isIos = () => /iphone|ipad|ipod/i.test(navigator.userAgent)

const snoozed = () => {
  try {
    const t = Number(localStorage.getItem(SNOOZE_KEY) || 0)
    return Date.now() - t < SNOOZE_DAYS * 86400000
  } catch {
    return false
  }
}

export default function InstallPrompt() {
  const [mode, setMode] = useState(null) // 'android' | 'ios' | null

  useEffect(() => {
    if (isStandalone() || snoozed()) return
    if (!window.matchMedia('(max-width: 820px)').matches) return
    const t = setTimeout(() => {
      if (deferredPrompt) setMode('android')
      else if (isIos()) setMode('ios')
    }, SHOW_AFTER_MS)
    return () => clearTimeout(t)
  }, [])

  if (!mode) return null

  function dismiss() {
    try {
      localStorage.setItem(SNOOZE_KEY, String(Date.now()))
    } catch {
      /* ignore */
    }
    setMode(null)
  }

  async function install() {
    if (!deferredPrompt) return dismiss()
    deferredPrompt.prompt()
    try {
      await deferredPrompt.userChoice
    } finally {
      deferredPrompt = null
      dismiss()
    }
  }

  return (
    <div className="install" role="dialog" aria-label="Install Irish Tools">
      <img className="install__icon" src="/icon-192.png" alt="" width="44" height="44" />
      <div className="install__body">
        <p className="install__title">Get the Irish Tools app</p>
        {mode === 'android' ? (
          <p className="install__text">Quick access from your home screen — no app store needed.</p>
        ) : (
          <p className="install__text">
            Tap <strong>Share</strong> <span aria-hidden="true">⎋</span> then{' '}
            <strong>“Add to Home Screen”</strong>.
          </p>
        )}
      </div>
      {mode === 'android' && (
        <button className="btn btn--primary install__btn" onClick={install}>
          Install
        </button>
      )}
      <button className="install__close" onClick={dismiss} aria-label="Not now">
        <X size={18} aria-hidden="true" />
      </button>
    </div>
  )
}
