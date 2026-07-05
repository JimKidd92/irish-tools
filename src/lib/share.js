// Reusable share helper. Uses the native share sheet on mobile, falls back to
// copying to the clipboard on desktop. Returns 'shared' | 'copied' | 'failed'.
export async function shareResult({ title, text, url }) {
  const shareData = { title, text, url }
  if (navigator.share) {
    try {
      await navigator.share(shareData)
      return 'shared'
    } catch (err) {
      // User cancelled the share sheet - not an error worth reporting.
      if (err && err.name === 'AbortError') return 'cancelled'
      // Otherwise fall through to clipboard.
    }
  }
  try {
    await navigator.clipboard.writeText(`${text}\n${url}`)
    return 'copied'
  } catch {
    return 'failed'
  }
}
