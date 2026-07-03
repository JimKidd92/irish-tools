// Merges agent-written county content (src/data/_gen/counties-*.json) into
// src/data/countiesRich.generated.json, validating shape and county names.
// Idempotent — rerun after any file lands. Run: node scripts/assemble-county-rich.mjs
import { readdirSync, readFileSync, writeFileSync, existsSync } from 'node:fs'
import { COUNTIES } from '../src/data/counties.js'

const GEN = 'src/data/_gen'
const OUT = 'src/data/countiesRich.generated.json'
const valid = new Set(COUNTIES.map((c) => c.name))

const merged = existsSync(OUT) ? JSON.parse(readFileSync(OUT, 'utf8')) : {}
const problems = []

for (const file of readdirSync(GEN).filter((f) => /^counties-\d+\.json$/.test(f)).sort()) {
  let data
  try {
    data = JSON.parse(readFileSync(`${GEN}/${file}`, 'utf8'))
  } catch (e) {
    problems.push(`${file}: unparseable (${e.message})`)
    continue
  }
  for (const [name, entry] of Object.entries(data)) {
    if (!valid.has(name)) {
      problems.push(`${file}: unknown county "${name}"`)
      continue
    }
    const ok =
      Array.isArray(entry.intro) && entry.intro.length >= 1 && entry.intro.every((p) => typeof p === 'string' && p.length > 50) &&
      Array.isArray(entry.towns) && entry.towns.length >= 5 && entry.towns.every((t) => t.name && t.note) &&
      Array.isArray(entry.people) && entry.people.length >= 5 && entry.people.every((p) => p.name && p.note) &&
      Array.isArray(entry.facts) && entry.facts.length >= 4 && entry.facts.every((f) => typeof f === 'string')
    if (!ok) {
      problems.push(`${file}: ${name} failed shape validation`)
      continue
    }
    merged[name] = { intro: entry.intro, towns: entry.towns, people: entry.people, facts: entry.facts }
  }
}

writeFileSync(OUT, JSON.stringify(merged, null, 1))
const missing = COUNTIES.filter((c) => !merged[c.name]).map((c) => c.name)
console.log(`counties with rich content: ${Object.keys(merged).length}/32`)
if (missing.length) console.log('MISSING:', missing.join(', '))
if (problems.length) console.log('PROBLEMS:\n  ' + problems.join('\n  '))
