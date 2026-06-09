// Lightweight, privacy-friendly pageview counting via GoatCounter.
// No cookies, no personal data — so no consent banner needed for it.
//
// To enable: create a free site at goatcounter.com and put its code in
// GOATCOUNTER_CODE in src/config.js (e.g. 'irishtools' for
// irishtools.goatcounter.com). Empty string = analytics fully disabled.
import { GOATCOUNTER_CODE } from '../config.js'

const endpoint = GOATCOUNTER_CODE
  ? `https://${GOATCOUNTER_CODE}.goatcounter.com/count`
  : null

export function trackPageview(path) {
  if (!endpoint || navigator.doNotTrack === '1') return
  // GoatCounter's pixel API: a simple GET with the path; no script needed.
  const params = new URLSearchParams({
    p: path,
    r: document.referrer,
    rnd: String(Date.now()),
  })
  new Image().src = `${endpoint}?${params}`
}
