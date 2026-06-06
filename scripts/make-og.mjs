// Generates public/og-image.png (1200×630) — the social preview card.
// Run with: node scripts/make-og.mjs   (requires the `sharp` dev dependency)
import sharp from 'sharp'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const out = resolve(__dirname, '../public/og-image.png')

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#169b62"/>
      <stop offset="1" stop-color="#0f7a4d"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <text x="80" y="250" font-family="Segoe UI, Helvetica, Arial, sans-serif" font-size="120" font-weight="800" fill="#ffffff">🍀 Irish Tools</text>
  <text x="84" y="330" font-family="Segoe UI, Helvetica, Arial, sans-serif" font-size="44" fill="#eafff4">Grand little tools for grand little problems.</text>
  <text x="84" y="460" font-family="Segoe UI, Helvetica, Arial, sans-serif" font-size="40" fill="#ffffff" opacity="0.95">Is the immersion on? · Good drying out? · Daily Irish Quiz</text>
  <text x="84" y="540" font-family="Segoe UI, Helvetica, Arial, sans-serif" font-size="36" font-weight="700" fill="#d8ffe9" opacity="0.9">irishtools.ie</text>
</svg>`

await sharp(Buffer.from(svg)).png().toFile(out)
console.log('Wrote', out)
