// Cookie/consent state for non-essential (advertising/analytics) cookies.
// Stored locally. Ads/analytics scripts should check `hasAdConsent()` before
// loading anything that sets non-essential cookies.
const KEY = 'irish-tools.consent'

export function getConsent() {
  try {
    return localStorage.getItem(KEY) // 'accepted' | 'rejected' | null
  } catch {
    return null
  }
}

export function setConsent(value) {
  try {
    localStorage.setItem(KEY, value)
  } catch {
    /* storage unavailable - grand */
  }
  // Let listeners (e.g. the banner) react without a full reload.
  window.dispatchEvent(new Event('consentchange'))
}

export function hasAdConsent() {
  return getConsent() === 'accepted'
}
