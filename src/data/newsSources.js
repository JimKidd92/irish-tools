// Mirrors the CATALOG in worker/news-worker.js (keep ids in sync). Used by the
// source-selection UI. The Worker is the source of truth for the feed URLs.
export const NEWS_SOURCES = [
  { id: 'rte-news', name: 'RTÉ News', category: 'National' },
  { id: 'journal', name: 'The Journal', category: 'National' },
  { id: 'independent', name: 'Irish Independent', category: 'National' },
  { id: 'mirror', name: 'Irish Mirror', category: 'National' },
  { id: 'extra', name: 'Extra.ie', category: 'National' },
  { id: 'gript', name: 'Gript', category: 'National' },
  { id: 'rte-sport', name: 'RTÉ Sport', category: 'Sport' },
  { id: 'the42', name: 'The42', category: 'Sport' },
  { id: 'balls', name: 'Balls.ie', category: 'Sport' },
  { id: 'corkbeo', name: 'Cork Beo', category: 'Regional' },
  { id: 'dublinlive', name: 'Dublin Live', category: 'Regional' },
  { id: 'galwaybeo', name: 'Galway Beo', category: 'Regional' },
  { id: 'belfastlive', name: 'Belfast Live', category: 'Regional' },
  { id: 'donegaldaily', name: 'Donegal Daily', category: 'Regional' },
  { id: 'highlandradio', name: 'Highland Radio', category: 'Regional' },
  { id: 'clareecho', name: 'The Clare Echo', category: 'Regional' },
  { id: 'siliconrepublic', name: 'Silicon Republic', category: 'Business & Tech' },
  { id: 'rte-ents', name: 'RTÉ Entertainment', category: 'Entertainment' },
  { id: 'irishstar', name: 'Irish Star', category: 'Irish Abroad' },
]

export const NEWS_CATEGORIES = [
  'National',
  'Sport',
  'Regional',
  'Business & Tech',
  'Entertainment',
  'Irish Abroad',
]

// A neutral, broad default mix until the visitor picks their own.
export const DEFAULT_SOURCES = ['rte-news', 'journal', 'rte-sport', 'the42', 'corkbeo', 'irishstar']

const KEY = 'irish-tools.news-sources'
const VALID = new Set(NEWS_SOURCES.map((s) => s.id))

export function getSelectedSources() {
  try {
    const raw = JSON.parse(localStorage.getItem(KEY))
    if (Array.isArray(raw)) {
      const valid = raw.filter((id) => VALID.has(id))
      if (valid.length) return valid
    }
  } catch {
    /* ignore */
  }
  return DEFAULT_SOURCES
}

export function setSelectedSources(ids) {
  try {
    localStorage.setItem(KEY, JSON.stringify(ids))
  } catch {
    /* ignore */
  }
}
