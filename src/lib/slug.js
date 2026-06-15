// URL slug helpers. Must produce identical output in the browser and the build
// script, so each entry's page resolves the same both ways.
const ACCENTS = /[̀-ͯ]/g

export function slugify(s) {
  return (s || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(ACCENTS, '') // strip accents (é -> e)
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

// Find an item in a list whose `key` field slugifies to `slug`.
export function findBySlug(list, slug, key) {
  if (!slug) return null
  return list.find((item) => slugify(item[key]) === slug) || null
}
