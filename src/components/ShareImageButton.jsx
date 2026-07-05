import { useState } from 'react'
import { shareResultImage } from '../lib/shareImage.js'

// Shares a generated branded result image (native share on mobile, download on
// desktop). `image` = { kicker, big, sub, accent }.
export default function ShareImageButton({ image, text, url, label = 'Share as image' }) {
  const [msg, setMsg] = useState('')
  const [busy, setBusy] = useState(false)

  async function onClick() {
    setBusy(true)
    const res = await shareResultImage(image, { text, url })
    setBusy(false)
    if (res === 'shared') setMsg('Shared!')
    else if (res === 'downloaded') setMsg('Image saved - share it anywhere!')
    else if (res === 'failed') setMsg('Couldn’t make the image')
    if (res && res !== 'cancelled') setTimeout(() => setMsg(''), 3000)
  }

  return (
    <div className="share">
      <button type="button" className="btn btn--primary share__btn" onClick={onClick} disabled={busy}>
        🖼️ {busy ? 'Creating…' : label}
      </button>
      {msg && <span className="share__msg">{msg}</span>}
    </div>
  )
}
