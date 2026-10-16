import { useEffect, useRef } from 'react'
import { ADSENSE } from '../config.js'

// One AdSense ad unit for a named placement. Renders nothing until that
// placement has a slot ID in config.js - no empty "ad goes here" boxes.
export default function AdSpace({ slot, format = 'auto' }) {
  const id = ADSENSE.slots[slot]
  const ref = useRef(null)

  useEffect(() => {
    // React never runs a <script> tag in JSX, so each unit has to ask AdSense to
    // fill it once it's in the DOM. AdSense marks a filled <ins> with
    // data-adsbygoogle-status; skip those so StrictMode's double effect in dev
    // doesn't push twice.
    const el = ref.current
    if (!id || !el || el.dataset.adsbygoogleStatus) return
    try {
      ;(window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch {
      /* ad blocker, or not approved yet - leave the slot empty */
    }
  }, [id])

  if (!id) return null
  return (
    <div className="ad-slot" aria-label="Advertisement">
      <ins
        ref={ref}
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={ADSENSE.client}
        data-ad-slot={id}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  )
}
