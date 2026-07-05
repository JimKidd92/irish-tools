// All 32 counties of Ireland, by province. A grand starting point for the
// diaspora to find their roots.
export const COUNTIES = [
  // Leinster
  { name: 'Carlow', irish: 'Ceatharlach', province: 'Leinster', town: 'Carlow', nickname: 'The Barrowsiders', blurb: 'Ireland’s second-smallest county, on the River Barrow, with a 5,000-year-old dolmen at Brownshill.' },
  { name: 'Dublin', irish: 'Baile Átha Cliath', province: 'Leinster', town: 'Dublin', nickname: 'The Dubs', blurb: 'The capital - Trinity College, the Guinness Storehouse, Georgian squares and the Liffey.' },
  { name: 'Kildare', irish: 'Cill Dara', province: 'Leinster', town: 'Naas', nickname: 'The Lilywhites', blurb: 'Horse country - home of the Curragh and the National Stud.' },
  { name: 'Kilkenny', irish: 'Cill Chainnigh', province: 'Leinster', town: 'Kilkenny', nickname: 'The Cats', blurb: 'A beautifully preserved medieval city with a mighty castle and hurling heritage.' },
  { name: 'Laois', irish: 'Laois', province: 'Leinster', town: 'Portlaoise', nickname: 'The O’Moore County', blurb: 'Heart of the midlands, with the Slieve Bloom Mountains and Rock of Dunamase.' },
  { name: 'Longford', irish: 'An Longfort', province: 'Leinster', town: 'Longford', nickname: 'The Slashers', blurb: 'Quiet midlands county on the Royal Canal, Goldsmith country.' },
  { name: 'Louth', irish: 'Lú', province: 'Leinster', town: 'Dundalk', nickname: 'The Wee County', blurb: 'Ireland’s smallest county, steeped in the legends of Cú Chulainn.' },
  { name: 'Meath', irish: 'An Mhí', province: 'Leinster', town: 'Navan', nickname: 'The Royal County', blurb: 'Ancient seat of the High Kings at Tara, and the tombs of Brú na Bóinne.' },
  { name: 'Offaly', irish: 'Uíbh Fhailí', province: 'Leinster', town: 'Tullamore', nickname: 'The Faithful County', blurb: 'Home of Clonmacnoise monastery and the Tullamore Dew distillery.' },
  { name: 'Westmeath', irish: 'An Iarmhí', province: 'Leinster', town: 'Mullingar', nickname: 'The Lake County', blurb: 'Lakeland county dotted with Lough Ree and Lough Owel.' },
  { name: 'Wexford', irish: 'Loch Garman', province: 'Leinster', town: 'Wexford', nickname: 'The Model County', blurb: 'Sunny south-east - sandy beaches, Viking roots and the 1798 Rebellion.' },
  { name: 'Wicklow', irish: 'Cill Mhantáin', province: 'Leinster', town: 'Wicklow', nickname: 'The Garden of Ireland', blurb: 'Mountains and glens, with Glendalough and Powerscourt Gardens.' },
  // Munster
  { name: 'Clare', irish: 'An Clár', province: 'Munster', town: 'Ennis', nickname: 'The Banner County', blurb: 'The Cliffs of Moher, the lunar Burren, and a hotbed of traditional music.' },
  { name: 'Cork', irish: 'Corcaigh', province: 'Munster', town: 'Cork', nickname: 'The Rebel County', blurb: 'Ireland’s largest county - Blarney Castle, Kinsale and the “real capital”.' },
  { name: 'Kerry', irish: 'Ciarraí', province: 'Munster', town: 'Tralee', nickname: 'The Kingdom', blurb: 'The Ring of Kerry, Dingle, Killarney’s lakes and Skellig Michael.' },
  { name: 'Limerick', irish: 'Luimneach', province: 'Munster', town: 'Limerick', nickname: 'The Treaty County', blurb: 'King John’s Castle on the Shannon and a fierce hurling tradition.' },
  { name: 'Tipperary', irish: 'Tiobraid Árann', province: 'Munster', town: 'Clonmel', nickname: 'The Premier County', blurb: 'The Rock of Cashel and the Glen of Aherlow - it’s a long way to here.' },
  { name: 'Waterford', irish: 'Port Láirge', province: 'Munster', town: 'Waterford', nickname: 'The Déise', blurb: 'Ireland’s oldest city, famed for crystal and the blaa.' },
  // Connacht
  { name: 'Galway', irish: 'Gaillimh', province: 'Connacht', town: 'Galway', nickname: 'The Tribesmen', blurb: 'A vibrant arts city, Connemara, the Aran Islands and the Gaeltacht.' },
  { name: 'Leitrim', irish: 'Liatroim', province: 'Connacht', town: 'Carrick-on-Shannon', nickname: 'The Ridge County', blurb: 'Lakes, drumlins and the Shannon–Erne Waterway in Ireland’s least-populated county.' },
  { name: 'Mayo', irish: 'Maigh Eo', province: 'Connacht', town: 'Castlebar', nickname: 'The Heather County', blurb: 'Croagh Patrick, Achill Island and the wild Atlantic coast.' },
  { name: 'Roscommon', irish: 'Ros Comáin', province: 'Connacht', town: 'Roscommon', nickname: 'The Rossies', blurb: 'Rolling pastoral county and ancestral home of the O’Conor kings.' },
  { name: 'Sligo', irish: 'Sligeach', province: 'Connacht', town: 'Sligo', nickname: 'The Yeats County', blurb: 'Benbulben, surf beaches and the landscape that inspired W.B. Yeats.' },
  // Ulster
  { name: 'Antrim', irish: 'Aontroim', province: 'Ulster', town: 'Antrim', nickname: 'The Glensmen', blurb: 'The Giant’s Causeway, the Glens, and the Carrick-a-Rede rope bridge.' },
  { name: 'Armagh', irish: 'Ard Mhacha', province: 'Ulster', town: 'Armagh', nickname: 'The Orchard County', blurb: 'Ireland’s ecclesiastical capital, surrounded by apple orchards.' },
  { name: 'Cavan', irish: 'An Cabhán', province: 'Ulster', town: 'Cavan', nickname: 'The Breffni County', blurb: 'A county of a lake for every day of the year, where the Shannon rises.' },
  { name: 'Derry', irish: 'Doire', province: 'Ulster', town: 'Derry', nickname: 'The Oak Leaf County', blurb: 'The only fully walled city in Ireland, on the banks of the Foyle.' },
  { name: 'Donegal', irish: 'Dún na nGall', province: 'Ulster', town: 'Lifford', nickname: 'Tír Chonaill', blurb: 'Rugged, remote and wildly beautiful - Slieve League and a strong Gaeltacht.' },
  { name: 'Down', irish: 'An Dún', province: 'Ulster', town: 'Downpatrick', nickname: 'The Mournemen', blurb: 'The Mountains of Mourne and the burial place of St Patrick.' },
  { name: 'Fermanagh', irish: 'Fear Manach', province: 'Ulster', town: 'Enniskillen', nickname: 'The Erne County', blurb: 'Lakeland county built around the islands of Lough Erne.' },
  { name: 'Monaghan', irish: 'Muineachán', province: 'Ulster', town: 'Monaghan', nickname: 'The Farney County', blurb: 'Drumlin country, home of the poet Patrick Kavanagh.' },
  { name: 'Tyrone', irish: 'Tír Eoghain', province: 'Ulster', town: 'Omagh', nickname: 'The Red Hand County', blurb: 'The Sperrin Mountains and the Ulster American Folk Park.' },
]

export const PROVINCES = ['Leinster', 'Munster', 'Connacht', 'Ulster']
