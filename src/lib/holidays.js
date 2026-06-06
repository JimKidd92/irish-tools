// Irish public (bank) holidays, computed for any year.

// Easter Sunday via the Anonymous Gregorian algorithm (Meeus/Jones/Butcher).
function easterSunday(year) {
  const a = year % 19
  const b = Math.floor(year / 100)
  const c = year % 100
  const d = Math.floor(b / 4)
  const e = b % 4
  const f = Math.floor((b + 8) / 25)
  const g = Math.floor((b - f + 1) / 3)
  const h = (19 * a + b - d - g + 15) % 30
  const i = Math.floor(c / 4)
  const k = c % 4
  const l = (32 + 2 * e + 2 * i - h - k) % 7
  const m = Math.floor((a + 11 * h + 22 * l) / 451)
  const month = Math.floor((h + l - 7 * m + 114) / 31) // 3 = March, 4 = April
  const day = ((h + l - 7 * m + 114) % 31) + 1
  return new Date(year, month - 1, day)
}

function addDays(date, n) {
  const d = new Date(date)
  d.setDate(d.getDate() + n)
  return d
}

// n-th given weekday of a month. weekday: 0=Sun … 1=Mon. month: 0-based.
function nthWeekday(year, month, weekday, n) {
  const first = new Date(year, month, 1)
  const offset = (weekday - first.getDay() + 7) % 7
  return new Date(year, month, 1 + offset + (n - 1) * 7)
}

function lastWeekday(year, month, weekday) {
  const last = new Date(year, month + 1, 0)
  const offset = (last.getDay() - weekday + 7) % 7
  return new Date(year, month, last.getDate() - offset)
}

export function irishHolidays(year) {
  // St Brigid's Day (since 2023): first Monday in February, unless 1 Feb is a
  // Friday, in which case the Friday is the holiday.
  const feb1 = new Date(year, 1, 1)
  const stBrigid = feb1.getDay() === 5 ? feb1 : nthWeekday(year, 1, 1, 1)

  return [
    { name: 'New Year’s Day', emoji: '🎉', date: new Date(year, 0, 1) },
    { name: 'St Brigid’s Day', emoji: '🕯️', date: stBrigid },
    { name: 'St Patrick’s Day', emoji: '☘️', date: new Date(year, 2, 17) },
    { name: 'Easter Monday', emoji: '🐣', date: addDays(easterSunday(year), 1) },
    { name: 'May Bank Holiday', emoji: '🌼', date: nthWeekday(year, 4, 1, 1) },
    { name: 'June Bank Holiday', emoji: '☀️', date: nthWeekday(year, 5, 1, 1) },
    { name: 'August Bank Holiday', emoji: '🏖️', date: nthWeekday(year, 7, 1, 1) },
    { name: 'October Bank Holiday', emoji: '🍂', date: lastWeekday(year, 9, 1) },
    { name: 'Christmas Day', emoji: '🎄', date: new Date(year, 11, 25) },
    { name: 'St Stephen’s Day', emoji: '🦃', date: new Date(year, 11, 26) },
  ]
}

// Upcoming holidays (this year + next), each with whole-days-until from today.
export function upcomingHolidays(from = new Date()) {
  const today = new Date(from.getFullYear(), from.getMonth(), from.getDate())
  const y = today.getFullYear()
  const all = [...irishHolidays(y), ...irishHolidays(y + 1)]
  return all
    .filter((h) => h.date >= today)
    .sort((a, b) => a.date - b.date)
    .map((h) => ({
      ...h,
      daysUntil: Math.round((h.date - today) / 86400000),
    }))
}

export function formatHolidayDate(date) {
  return date.toLocaleDateString('en-IE', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}
