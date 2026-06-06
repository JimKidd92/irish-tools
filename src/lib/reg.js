// Irish vehicle registration plate decoder.
// Modern format (since 2013): YYP-CC-NNNNN  e.g. 231-G-12345
//   YY = year, P = period (1 = Jan–Jun, 2 = Jul–Dec)
// Older format (1987–2012):  YY-CC-NNNNN    e.g. 99-D-1234

const COUNTIES = {
  C: 'Cork',
  CE: 'Clare',
  CN: 'Cavan',
  CW: 'Carlow',
  D: 'Dublin',
  DL: 'Donegal',
  G: 'Galway',
  KE: 'Kildare',
  KK: 'Kilkenny',
  KY: 'Kerry',
  L: 'Limerick',
  LD: 'Longford',
  LH: 'Louth',
  LK: 'Limerick',
  LM: 'Leitrim',
  LS: 'Laois',
  MH: 'Meath',
  MN: 'Monaghan',
  MO: 'Mayo',
  OY: 'Offaly',
  RN: 'Roscommon',
  SO: 'Sligo',
  T: 'Tipperary',
  TN: 'Tipperary (North Riding)',
  TS: 'Tipperary (South Riding)',
  W: 'Waterford',
  WD: 'Waterford',
  WH: 'Westmeath',
  WW: 'Wicklow',
  WX: 'Wexford',
}

export function decodeReg(input) {
  const cleaned = (input || '').toUpperCase().trim()
  const m = cleaned.match(/^(\d{2,3})[\s-]*([A-Z]{1,2})[\s-]*(\d{1,6})$/)
  if (!m) {
    return { valid: false, error: 'Try something like 231-G-12345 or 99-D-1234.' }
  }

  const [, yearPart, code, seq] = m
  const county = COUNTIES[code]
  if (!county) {
    return { valid: false, error: `“${code}” isn’t an Irish county code we recognise.` }
  }

  let year
  let period = null
  if (yearPart.length === 3) {
    const yy = parseInt(yearPart.slice(0, 2), 10)
    const p = yearPart[2]
    year = 2000 + yy
    if (p === '1') period = 'First half (Jan–Jun)'
    else if (p === '2') period = 'Second half (Jul–Dec)'
    else return { valid: false, error: 'The period digit should be 1 or 2.' }
  } else {
    const yy = parseInt(yearPart, 10)
    year = yy <= 12 ? 2000 + yy : 1900 + yy
  }

  return {
    valid: true,
    year,
    period,
    county,
    countyCode: code,
    sequence: parseInt(seq, 10),
    sequenceRaw: seq,
  }
}
