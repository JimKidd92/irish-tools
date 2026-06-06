// Common Irish surnames with origins. Meanings are the generally accepted
// etymologies — grand for a bit of heritage craic, not a genealogy service.
export const SURNAMES = [
  { name: 'Murphy', irish: 'Ó Murchadha', meaning: '“sea warrior”', region: 'Cork, Wexford & Armagh', note: 'The most common surname in Ireland.' },
  { name: 'Kelly', irish: 'Ó Ceallaigh', meaning: '“bright-headed” or “strife”', region: 'Galway, Roscommon & Meath', note: 'The second most common Irish surname.' },
  { name: "O'Brien", irish: 'Ó Briain', meaning: 'descendant of Brian (Boru) — “noble, high”', region: 'Clare, Limerick & Tipperary' },
  { name: 'Ryan', irish: 'Ó Riain', meaning: '“little king”', region: 'Tipperary & Limerick' },
  { name: "O'Sullivan", irish: 'Ó Súilleabháin', meaning: '“dark-eyed one”', region: 'Cork & Kerry' },
  { name: 'Walsh', irish: 'Breathnach', meaning: '“Welshman / Briton”', region: 'Mayo, Waterford & Kilkenny', note: 'Brought by Cambro-Norman settlers.' },
  { name: "O'Connor", irish: 'Ó Conchobhair', meaning: '“lover of hounds”', region: 'Roscommon, Kerry & Derry', note: 'A line of High Kings of Ireland.' },
  { name: 'Byrne', irish: 'Ó Broin', meaning: 'descendant of Bran — “raven”', region: 'Wicklow & Dublin' },
  { name: "O'Neill", irish: 'Ó Néill', meaning: 'descendant of Niall', region: 'Tyrone & Ulster', note: 'One of Ireland’s great royal dynasties.' },
  { name: 'McCarthy', irish: 'Mac Cárthaigh', meaning: '“loving”', region: 'Cork & Kerry' },
  { name: 'Gallagher', irish: 'Ó Gallchobhair', meaning: '“lover of foreigners / foreign help”', region: 'Donegal' },
  { name: 'Doyle', irish: 'Ó Dubhghaill', meaning: '“dark foreigner” (a Viking)', region: 'Wexford & Wicklow' },
  { name: 'Kennedy', irish: 'Ó Cinnéide', meaning: '“helmeted head”', region: 'Tipperary & Clare' },
  { name: 'Lynch', irish: 'Ó Loingsigh / de Linche', meaning: '“mariner” (or Norman origin)', region: 'Galway', note: 'One of the Tribes of Galway.' },
  { name: 'Murray', irish: 'Ó Muireadhaigh', meaning: '“lord of the sea”', region: 'Roscommon & Down' },
  { name: 'Quinn', irish: 'Ó Cuinn', meaning: 'descendant of Conn — “chief”', region: 'Tyrone, Clare & Antrim' },
  { name: 'Moore', irish: 'Ó Mórdha', meaning: '“stately, proud”', region: 'Laois' },
  { name: 'Connolly', irish: 'Ó Conghalaigh', meaning: '“valiant, brave”', region: 'Monaghan & Galway' },
  { name: 'Daly', irish: 'Ó Dálaigh', meaning: '“assembly, gathering”', region: 'Westmeath & Cork', note: 'A famous family of bards.' },
  { name: "O'Connell", irish: 'Ó Conaill', meaning: '“strong as a wolf”', region: 'Kerry' },
  { name: 'Dunne', irish: 'Ó Duinn', meaning: '“brown, dark”', region: 'Laois & Offaly' },
  { name: 'Brennan', irish: 'Ó Braonáin', meaning: '“sorrow / moisture”', region: 'Kilkenny & Roscommon' },
  { name: 'Burke', irish: 'de Búrca', meaning: 'Norman, from “de Burgh”', region: 'Galway & Mayo' },
  { name: 'Collins', irish: 'Ó Coileáin', meaning: '“young hound / whelp”', region: 'Cork & Limerick' },
  { name: 'Fitzgerald', irish: 'Mac Gearailt', meaning: 'Norman — “son of Gerald”', region: 'Kerry & Limerick' },
  { name: 'Brady', irish: 'Mac Brádaigh', meaning: '“spirited, broad”', region: 'Cavan' },
  { name: 'Maguire', irish: 'Mag Uidhir', meaning: '“pale / dun-coloured”', region: 'Fermanagh' },
  { name: 'Flynn', irish: 'Ó Floinn', meaning: '“ruddy, red-complexioned”', region: 'Cork & Roscommon' },
  { name: 'Boyle', irish: 'Ó Baoighill', meaning: '“having pledges”', region: 'Donegal' },
  { name: 'Healy', irish: 'Ó hÉalaighthe', meaning: '“ingenious, claimant”', region: 'Cork' },
  { name: "O'Reilly", irish: 'Ó Raghallaigh', meaning: '“sociable / gregarious”', region: 'Cavan' },
  { name: 'Doherty', irish: 'Ó Dochartaigh', meaning: '“obstructive, hurtful”', region: 'Donegal & Derry' },
  { name: 'Sweeney', irish: 'Mac Suibhne', meaning: '“pleasant”', region: 'Donegal', note: 'Descended from gallowglass warriors.' },
  { name: 'Power', irish: 'de Paor', meaning: 'Norman — “the poor (one)”', region: 'Waterford' },
  { name: 'Kavanagh', irish: 'Caomhánach', meaning: '“follower of St Caomhán”', region: 'Wexford & Carlow' },
  { name: 'Nolan', irish: 'Ó Nualláin', meaning: '“noble, famous”', region: 'Carlow' },
  { name: 'Whelan', irish: 'Ó Faoláin', meaning: '“wolf”', region: 'Waterford & Carlow' },
  { name: 'Fitzpatrick', irish: 'Mac Giolla Phádraig', meaning: '“son of the devotee of St Patrick”', region: 'Laois & Kilkenny' },
]

function normalise(s) {
  return (s || '').toLowerCase().replace(/[^a-z]/g, '')
}

// Drop a leading Mac/Mc/O so "Sullivan" finds "O'Sullivan", etc.
function stem(s) {
  return normalise(s).replace(/^mac/, '').replace(/^mc/, '').replace(/^o/, '')
}

export function findSurname(query) {
  const q = normalise(query)
  const qs = stem(query)
  if (!q) return null
  return (
    SURNAMES.find((s) => {
      const keys = new Set([normalise(s.name), stem(s.name)])
      return keys.has(q) || keys.has(qs)
    }) || null
  )
}
