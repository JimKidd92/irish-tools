import { useState } from 'react'
import { shareResult } from '../lib/share.js'

// Small share button for tool results. Native share sheet on mobile, clipboard
// on desktop, with a transient confirmation message.
export default function ShareButton({ text, url = 'https://irishtools.ie/', label = 'Share result' }) {
  const [msg, setMsg] = useState('')

  async function onClick() {
    const res = await shareResult({ title: 'Irish Tools', text, url })
    if (res === 'copied') setMsg('Copied!')
    else if (res === 'shared') setMsg('Shared!')
    else if (res === 'failed') setMsg('Couldn’t share')
    if (res && res !== 'cancelled') setTimeout(() => setMsg(''), 2500)
  }

  return (
    <div className="share">
      <button type="button" className="btn btn--ghost share__btn" onClick={onClick}>
        🔗 {label}
      </button>
      {msg && <span className="share__msg">{msg}</span>}
    </div>
  )
}
