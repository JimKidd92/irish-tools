// Merges agent-generated question files (worker/quiz/_gen/*.json) into the
// server bank (worker/quiz/questions.js): validates structure, de-dupes against
// the existing bank and each other, and rewrites questions.js.
// Run: node scripts/assemble-quiz-bank.mjs
import { readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { QUESTIONS as EXISTING } from '../worker/quiz/questions.js'

const GEN_DIR = 'worker/quiz/_gen'
const norm = (q) => String(q).toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim()

function valid(item) {
  if (!item || typeof item.q !== 'string' || !item.q.trim()) return false
  if (!Array.isArray(item.options) || item.options.length !== 4) return false
  if (item.options.some((o) => typeof o !== 'string' || !o.trim())) return false
  if (!Number.isInteger(item.answer) || item.answer < 0 || item.answer > 3) return false
  // reject duplicate option texts within a question
  if (new Set(item.options.map((o) => o.trim().toLowerCase())).size !== 4) return false
  return true
}

const seen = new Set(EXISTING.map((q) => norm(q.q)))
const out = [...EXISTING]
const stats = { files: 0, raw: 0, invalid: 0, dupe: 0, added: 0, badFiles: [] }

for (const file of readdirSync(GEN_DIR).filter((f) => f.endsWith('.json')).sort()) {
  let arr
  try {
    arr = JSON.parse(readFileSync(`${GEN_DIR}/${file}`, 'utf8'))
  } catch (e) {
    stats.badFiles.push(`${file} (${e.message})`)
    continue
  }
  if (!Array.isArray(arr)) {
    stats.badFiles.push(`${file} (not an array)`)
    continue
  }
  stats.files++
  let fileAdded = 0
  for (const item of arr) {
    stats.raw++
    if (!valid(item)) {
      stats.invalid++
      continue
    }
    const key = norm(item.q)
    if (seen.has(key)) {
      stats.dupe++
      continue
    }
    seen.add(key)
    out.push({ q: item.q.trim(), options: item.options.map((o) => o.trim()), answer: item.answer })
    stats.added++
    fileAdded++
  }
  console.log(`  ${file}: +${fileAdded}`)
}

const header =
  '// Irish Tools — Daily Quiz question bank (SERVER-SIDE, with answers).\n' +
  '// This lives in the Worker only and is never sent to the browser. The client\n' +
  '// receives questions without the answer key. Add new questions weekly and\n' +
  '// redeploy the Worker. Each: { q, options:[...], answer:<index> }.\n\n'
writeFileSync('worker/quiz/questions.js', header + 'export const QUESTIONS = ' + JSON.stringify(out, null, 2) + '\n')

console.log('\n--- assembly ---')
console.log('existing:', EXISTING.length)
console.log('raw new:', stats.raw, '| invalid:', stats.invalid, '| dupes:', stats.dupe, '| added:', stats.added)
console.log('TOTAL bank:', out.length, `(~${Math.floor(out.length / 10)} days at 10/day = ~${(out.length / 10 / 30).toFixed(1)} months)`)
if (stats.badFiles.length) console.log('UNPARSEABLE FILES:', stats.badFiles.join('; '))
