import { tools } from '../data/tools.js'
import { SURNAMES } from '../data/surnames.js'
import { SLANG } from '../data/slang.js'
import { NAMES } from '../data/names.js'
import { COUNTIES } from '../data/counties.js'
import { PLACES } from '../data/places.js'
import { slugify } from './slug.js'

// Global search across everything on the site. Returns grouped results, each
// with a navigation target { route, slug }.
export function search(raw) {
  const q = raw.trim().toLowerCase()
  if (q.length < 2) return []
  const has = (s) => s && s.toLowerCase().includes(q)
  const groups = []

  const t = tools
    .filter((x) => x.live && (has(x.name) || has(x.tagline)))
    .slice(0, 5)
    .map((x) => ({ label: x.name, sub: x.tagline, route: x.path }))
  if (t.length) groups.push({ type: 'Tools', items: t })

  const sur = SURNAMES.filter((s) => has(s.name))
    .slice(0, 6)
    .map((s) => ({ label: s.name, sub: `${s.irish} — ${s.meaning}`, route: 'surnames', slug: slugify(s.name) }))
  if (sur.length) groups.push({ type: 'Surnames', items: sur })

  const nm = NAMES.filter((n) => has(n.name) || has(n.meaning))
    .slice(0, 6)
    .map((n) => ({ label: n.name, sub: `${n.meaning} · ${n.pron}`, route: 'names' }))
  if (nm.length) groups.push({ type: 'Irish names', items: nm })

  const sl = SLANG.filter((s) => has(s.term) || has(s.meaning))
    .slice(0, 6)
    .map((s) => ({ label: s.term, sub: s.meaning, route: 'slang', slug: slugify(s.term) }))
  if (sl.length) groups.push({ type: 'Slang', items: sl })

  const co = COUNTIES.filter((c) => has(c.name) || has(c.nickname))
    .slice(0, 5)
    .map((c) => ({ label: c.name, sub: `“${c.nickname}” · ${c.province}`, route: 'counties', slug: slugify(c.name) }))
  if (co.length) groups.push({ type: 'Counties', items: co })

  const pl = PLACES.filter((p) => has(p.name))
    .slice(0, 5)
    .map((p) => ({ label: p.name, sub: p.county || 'Places to visit', route: 'places' }))
  if (pl.length) groups.push({ type: 'Places', items: pl })

  return groups
}
