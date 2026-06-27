// Generates a branded square result image on a canvas and shares it — the
// native share sheet with the image file where supported (mobile), otherwise
// downloads it. Fully client-side, no backend.
const SIZE = 1080

const ACCENTS = {
  green: ['#1aa86a', '#0d6e45'],
  orange: ['#ff8a2b', '#d35400'],
  blue: ['#3f7fbf', '#274d75'],
}

async function ensureFonts() {
  try {
    if (document.fonts?.load) {
      await Promise.all([
        document.fonts.load('700 120px "Fraunces Variable"'),
        document.fonts.load('700 44px "Mulish Variable"'),
      ])
    }
  } catch {
    /* fall back to system fonts */
  }
}

function wrap(ctx, text, maxWidth) {
  const words = String(text).split(' ')
  const lines = []
  let line = ''
  for (const w of words) {
    const test = line ? `${line} ${w}` : w
    if (ctx.measureText(test).width > maxWidth && line) {
      lines.push(line)
      line = w
    } else {
      line = test
    }
  }
  if (line) lines.push(line)
  return lines
}

export async function buildResultImage({ kicker, big, sub, accent = 'green' }) {
  await ensureFonts()
  const canvas = document.createElement('canvas')
  canvas.width = SIZE
  canvas.height = SIZE
  const ctx = canvas.getContext('2d')
  const [c1, c2] = ACCENTS[accent] || ACCENTS.green

  const grad = ctx.createLinearGradient(0, 0, SIZE, SIZE)
  grad.addColorStop(0, c1)
  grad.addColorStop(1, c2)
  ctx.fillStyle = grad
  ctx.fillRect(0, 0, SIZE, SIZE)

  // soft glow accent
  const glow = ctx.createRadialGradient(SIZE * 0.8, SIZE * 0.15, 0, SIZE * 0.8, SIZE * 0.15, SIZE * 0.7)
  glow.addColorStop(0, 'rgba(255,255,255,0.16)')
  glow.addColorStop(1, 'rgba(255,255,255,0)')
  ctx.fillStyle = glow
  ctx.fillRect(0, 0, SIZE, SIZE)

  ctx.textAlign = 'center'

  // brand (top)
  ctx.fillStyle = 'rgba(255,255,255,0.92)'
  ctx.font = '700 46px "Mulish Variable", system-ui, sans-serif'
  ctx.fillText('🍀  Irish Tools', SIZE / 2, 120)

  // measure the centred block
  ctx.font = '700 130px "Fraunces Variable", Georgia, serif'
  const bigLines = wrap(ctx, big, SIZE - 150)
  ctx.font = '500 48px "Mulish Variable", system-ui, sans-serif'
  const subLines = sub ? wrap(ctx, sub, SIZE - 200) : []
  const kickerH = kicker ? 70 : 0
  const total = kickerH + bigLines.length * 138 + (subLines.length ? 24 + subLines.length * 62 : 0)
  let y = (SIZE - total) / 2 + 80

  if (kicker) {
    ctx.font = '800 36px "Mulish Variable", system-ui, sans-serif'
    ctx.fillStyle = 'rgba(255,255,255,0.82)'
    ctx.fillText(kicker.toUpperCase(), SIZE / 2, y)
    y += kickerH
  }

  ctx.font = '700 130px "Fraunces Variable", Georgia, serif'
  ctx.fillStyle = '#ffffff'
  for (const ln of bigLines) {
    ctx.fillText(ln, SIZE / 2, y + 100)
    y += 138
  }

  if (subLines.length) {
    y += 24
    ctx.font = '500 48px "Mulish Variable", system-ui, sans-serif'
    ctx.fillStyle = 'rgba(255,255,255,0.95)'
    for (const ln of subLines) {
      ctx.fillText(ln, SIZE / 2, y + 36)
      y += 62
    }
  }

  // footer
  ctx.font = '700 40px "Mulish Variable", system-ui, sans-serif'
  ctx.fillStyle = 'rgba(255,255,255,0.88)'
  ctx.fillText('irishtools.ie', SIZE / 2, SIZE - 76)

  return new Promise((resolve) => canvas.toBlob((b) => resolve(b), 'image/png'))
}

export async function shareResultImage(image, { text, url }) {
  let blob
  try {
    blob = await buildResultImage(image)
  } catch {
    return 'failed'
  }
  if (!blob) return 'failed'

  const file = new File([blob], 'irish-tools.png', { type: 'image/png' })
  if (navigator.canShare && navigator.canShare({ files: [file] })) {
    try {
      await navigator.share({ files: [file], text, url })
      return 'shared'
    } catch (e) {
      if (e && e.name === 'AbortError') return 'cancelled'
      // otherwise fall through to download
    }
  }

  const a = document.createElement('a')
  a.href = URL.createObjectURL(blob)
  a.download = 'irish-tools.png'
  document.body.appendChild(a)
  a.click()
  a.remove()
  setTimeout(() => URL.revokeObjectURL(a.href), 3000)
  return 'downloaded'
}
