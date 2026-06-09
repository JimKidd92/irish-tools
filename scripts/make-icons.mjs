// Generates PNG app icons from the shamrock favicon SVG.
// Run: node scripts/make-icons.mjs
import sharp from 'sharp'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const pub = resolve(__dirname, '../public')
const src = resolve(pub, 'favicon.svg')

const sizes = [
  { file: 'apple-touch-icon.png', size: 180 },
  { file: 'icon-192.png', size: 192 },
  { file: 'icon-512.png', size: 512 },
]

for (const { file, size } of sizes) {
  await sharp(src, { density: 300 }).resize(size, size).png().toFile(resolve(pub, file))
  console.log('✓', file)
}
