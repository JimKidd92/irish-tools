// Irish-brewed beers — a directory for the "Beer of the Day" and the Irish
// Beers page. Style/brewery/county are the generally-known details; ABVs are
// the commonly-listed figures and notes are light tasting descriptors.
export const BEERS = [
  // The classics
  { name: 'Guinness Draught', brewery: 'St. James’s Gate', county: 'Dublin', style: 'Dry Stout', abv: '4.2%', note: 'The black stuff. Roasted, creamy, and a surge to settle.' },
  { name: 'Guinness Extra Stout', brewery: 'St. James’s Gate', county: 'Dublin', style: 'Stout', abv: '4.2%', note: 'Sharper and more bitter than the draught — the original recipe.' },
  { name: 'Smithwick’s', brewery: 'Smithwick’s', county: 'Kilkenny', style: 'Irish Red Ale', abv: '3.8%', note: 'Malty, easy red ale from Ireland’s oldest brewery site.' },
  { name: 'Murphy’s Irish Stout', brewery: 'Murphy’s', county: 'Cork', style: 'Stout', abv: '4.0%', note: 'Smoother and less bitter than its Dublin rival. Leeside pride.' },
  { name: 'Beamish', brewery: 'Beamish & Crawford', county: 'Cork', style: 'Stout', abv: '4.1%', note: 'The other Cork stout — roasty and dry.' },
  { name: 'Harp Lager', brewery: 'Great Northern', county: 'Louth', style: 'Lager', abv: '4.3%', note: 'Ireland’s own lager, brewed in Dundalk since 1960.' },
  { name: 'Kilkenny', brewery: 'Smithwick’s', county: 'Kilkenny', style: 'Irish Cream Ale', abv: '4.3%', note: 'Creamy red ale with a nitro head, big abroad.' },
  // Carlow Brewing / O'Hara's
  { name: 'O’Hara’s Irish Stout', brewery: 'Carlow Brewing Co.', county: 'Carlow', style: 'Stout', abv: '4.3%', note: 'A craft stout with real liquorice and coffee depth.' },
  { name: 'O’Hara’s Irish Red', brewery: 'Carlow Brewing Co.', county: 'Carlow', style: 'Irish Red Ale', abv: '4.3%', note: 'Toffee and toast — a benchmark Irish red.' },
  { name: 'O’Hara’s Leann Folláin', brewery: 'Carlow Brewing Co.', county: 'Carlow', style: 'Extra Stout', abv: '6.0%', note: 'A bigger, richer stout for the cold evenings.' },
  // West & Atlantic
  { name: 'Galway Hooker', brewery: 'Galway Hooker', county: 'Galway', style: 'Irish Pale Ale', abv: '4.4%', note: 'One of the first Irish craft pale ales — citrus and caramel.' },
  { name: 'Galway Bay Full Sail', brewery: 'Galway Bay Brewery', county: 'Galway', style: 'IPA', abv: '5.8%', note: 'Punchy, resinous IPA from the Salthouse crew.' },
  { name: 'Galway Bay Buried at Sea', brewery: 'Galway Bay Brewery', county: 'Galway', style: 'Chocolate Milk Stout', abv: '4.5%', note: 'Smooth, sweet, chocolatey — a pudding in a pint.' },
  { name: 'Western Herd Atlantic', brewery: 'Western Herd', county: 'Clare', style: 'Pale Ale', abv: '4.6%', note: 'Crisp Clare pale ale, brewed on a farm.' },
  // Sligo / North-West
  { name: 'Little Fawn', brewery: 'The White Hag', county: 'Sligo', style: 'Session Pale Ale', abv: '4.2%', note: 'Tropical and sessionable — The White Hag’s flagship.' },
  { name: 'Black Boar', brewery: 'The White Hag', county: 'Sligo', style: 'Imperial Oatmeal Stout', abv: '10.2%', note: 'A monster of a stout. Sip it slow.' },
  { name: 'Surfer Rosa', brewery: 'Lough Gill', county: 'Sligo', style: 'Pale Ale', abv: '4.5%', note: 'Easy-drinking Sligo pale ale named for the waves.' },
  // Donegal
  { name: 'Scraggy Bay', brewery: 'Kinnegar', county: 'Donegal', style: 'IPA', abv: '4.8%', note: 'Kinnegar’s flagship IPA — orange peel and pine.' },
  { name: 'Rustbucket', brewery: 'Kinnegar', county: 'Donegal', style: 'Rye Ale', abv: '5.1%', note: 'Spicy rye twist on a pale ale.' },
  // Wicklow
  { name: 'Elevation', brewery: 'Wicklow Wolf', county: 'Wicklow', style: 'Pale Ale', abv: '4.6%', note: 'Reliable Garden County pale ale.' },
  { name: 'Locavore', brewery: 'Wicklow Wolf', county: 'Wicklow', style: 'Seasonal Ale', abv: '5.0%', note: 'Brewed with Irish-grown hops when in season.' },
  { name: 'Larkin’s Stout', brewery: 'Larkin’s', county: 'Wicklow', style: 'Stout', abv: '4.5%', note: 'Tiny Wicklow brewery, mighty wee stout.' },
  // Dublin craft
  { name: 'Handsome Jack', brewery: 'Hope Beer', county: 'Dublin', style: 'Pale Ale', abv: '4.6%', note: 'Howth brewery’s flagship — clean and hoppy.' },
  { name: 'Rollover', brewery: 'Whiplash', county: 'Dublin', style: 'Session IPA', abv: '4.0%', note: 'Hazy, juicy, dangerously easy. Whiplash do it well.' },
  { name: 'Happy Days', brewery: 'Rascals', county: 'Dublin', style: 'Pale Ale', abv: '4.5%', note: 'Inchicore’s pizza-and-beer crowd-pleaser.' },
  { name: 'Five Lamps', brewery: 'Five Lamps', county: 'Dublin', style: 'Lager', abv: '4.2%', note: 'A proper Dublin lager named for the northside landmark.' },
  { name: 'Twelve Acres', brewery: 'Trouble Brewing', county: 'Kildare', style: 'Stout', abv: '4.5%', note: 'Oatmeal stout from the Kildare crew.' },
  { name: 'Ór Golden Ale', brewery: 'Trouble Brewing', county: 'Kildare', style: 'Golden Ale', abv: '4.4%', note: 'Crisp, golden and approachable.' },
  // Cork craft
  { name: 'Howling Gale', brewery: 'Eight Degrees', county: 'Cork', style: 'Irish Pale Ale', abv: '5.0%', note: 'Mitchelstown’s flagship — a wind off the Galtees.' },
  { name: 'Knockmealdown', brewery: 'Eight Degrees', county: 'Cork', style: 'Porter', abv: '5.5%', note: 'Rich, roasty porter named for the mountains.' },
  { name: 'Rebel Red', brewery: 'Franciscan Well', county: 'Cork', style: 'Red Ale', abv: '4.3%', note: 'Caramel red ale from the famous Cork brewpub.' },
  { name: 'Friar Weisse', brewery: 'Franciscan Well', county: 'Cork', style: 'Wheat Beer', abv: '5.0%', note: 'Banana-and-clove Bavarian-style wheat.' },
  { name: 'Stag Bán', brewery: '9 White Deer', county: 'Cork', style: 'Gluten-free Lager', abv: '4.2%', note: 'Ballyvourney’s gluten-free pioneer.' },
  { name: 'Crowd Pleaser', brewery: 'Cotton Ball', county: 'Cork', style: 'IPA', abv: '5.5%', note: 'From a Mayfield pub that brews its own.' },
  // South-East
  { name: 'Castaway', brewery: 'YellowBelly', county: 'Wexford', style: 'Session IPA', abv: '4.0%', note: 'Wexford’s slick session IPA.' },
  { name: 'Sullivan’s Maltings Red', brewery: 'Sullivan’s Brewing Co.', county: 'Kilkenny', style: 'Red Ale', abv: '4.3%', note: 'A revived Kilkenny name with a smooth red.' },
  { name: 'Metalman Pale Ale', brewery: 'Metalman', county: 'Waterford', style: 'Pale Ale', abv: '4.3%', note: 'Waterford craft stalwart — grapefruity and dry.' },
  { name: 'Ballykilcavan Bin Bawn', brewery: 'Ballykilcavan', county: 'Laois', style: 'Pale Ale', abv: '4.5%', note: 'Brewed on a 13-generation Laois farm.' },
  // Midlands & North
  { name: 'Dead Centre Stout', brewery: 'Dead Centre', county: 'Westmeath', style: 'Stout', abv: '4.6%', note: 'From Athlone — the dead centre of Ireland.' },
  { name: 'Brehon Killer Bee', brewery: 'Brehon Brewhouse', county: 'Monaghan', style: 'Honey Ale', abv: '4.3%', note: 'Monaghan ale brewed with Irish honey.' },
  { name: 'Mescan Extra', brewery: 'Mescan', county: 'Mayo', style: 'Belgian Tripel', abv: '8.0%', note: 'Belgian-style brewing at the foot of Croagh Patrick.' },
  { name: 'Sheep Stealer', brewery: 'Black Donkey', county: 'Roscommon', style: 'Rye Ale', abv: '4.6%', note: 'Characterful farmhouse rye from Roscommon.' },
  // Northern Ireland
  { name: 'Boundary Export Stout', brewery: 'Boundary', county: 'Antrim', style: 'Export Stout', abv: '7.0%', note: 'Belfast co-op brewery; bold, roasty stout.' },
  { name: 'Yardsman Lager', brewery: 'Lacada / Hercules', county: 'Antrim', style: 'Lager', abv: '4.3%', note: 'A crisp Belfast lager.' },
  { name: 'Lacada Giant’s Causeway', brewery: 'Lacada', county: 'Antrim', style: 'Amber Ale', abv: '4.0%', note: 'Portrush co-op ale, named for the stones.' },
  { name: 'Hilden Irish Stout', brewery: 'Hilden', county: 'Antrim', style: 'Stout', abv: '4.2%', note: 'Ireland’s oldest independent craft brewery, since 1981.' },
  // Lager & easy-drinking
  { name: 'Rascals Jen’s', brewery: 'Rascals', county: 'Dublin', style: 'Session Pale Ale', abv: '3.8%', note: 'Low-ABV, full-flavour session sipper.' },
  { name: 'McGargles Francis’ IPA', brewery: 'Rye River', county: 'Kildare', style: 'IPA', abv: '5.5%', note: 'Kildare brewery with a big medal cabinet.' },
]
