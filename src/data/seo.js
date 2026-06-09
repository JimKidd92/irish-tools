// Per-route SEO metadata. Used by the app (document.title on navigation) and
// by scripts/prerender.mjs (baked into each route's static HTML + sitemap.xml).
export const SITE_URL = 'https://irishtools.ie'

export const ROUTE_META = {
  home: {
    title: 'Irish Tools · Grand little tools for grand little problems',
    description:
      'Discover your Irish roots, plan a trip home, and enjoy the everyday craic of real Irish life — surname origins, Irish names, places to visit, a Daily Irish Quiz and more.',
  },
  immersion: {
    title: 'Is the Immersion On? · Irish Tools',
    description:
      'The eternal Irish question, finally answered. Flick the famous immersion switch and never bankrupt the house again.',
  },
  drying: {
    title: 'Is There Good Drying Out? · Irish Tools',
    description:
      'Should ya hang the washing on the line? Live Irish weather turned into a proper drying verdict.',
  },
  'soft-day': {
    title: 'Is It a Soft Day? · Irish Tools',
    description:
      'Mild, grey and a gentle mizzle? Check if it’s a soft day and translate the forecast into proper Irish.',
  },
  turf: {
    title: 'Is It Time to Foot the Turf? · Irish Tools',
    description:
      'Footing turf needs a dry, breezy spell. We check the days behind and ahead and tell you if the bog is ready.',
  },
  form: {
    title: 'How’s the Form? Grand Stretch Calculator · Irish Tools',
    description:
      'Is there a grand stretch in the evenings? Sunrise, sunset and daylight compared to last week, wherever you are.',
  },
  tea: {
    title: 'Will Ya Have a Cup of Tea? · Irish Tools',
    description: 'Mrs Doyle won’t take no for an answer. Go on, go on, go on, go on.',
  },
  round: {
    title: 'Whose Round Is It? Pub Round Tracker · Irish Tools',
    description:
      'Add the session and we’ll keep honest track of who’s bought and whose turn is next.',
  },
  spuds: {
    title: 'How Many Spuds? Potato Portion Calculator · Irish Tools',
    description: 'Dinner portions done properly — including the Irish Mammy setting.',
  },
  quiz: {
    title: 'The Daily Irish Quiz · Irish Tools',
    description:
      'Five fresh questions about Ireland every day. Build your streak and share your score.',
  },
  'bank-holiday': {
    title: 'Next Irish Bank Holiday Countdown · Irish Tools',
    description:
      'When’s the next day off in Ireland? Countdown to the next bank holiday and the full list ahead.',
  },
  reg: {
    title: 'Irish Reg Plate Decoder · Irish Tools',
    description:
      'Type any Irish number plate and find out the year, half-year and county it was registered in.',
  },
  pints: {
    title: 'That’s How Many Pints? · Irish Tools',
    description: 'The only currency that matters — convert any price into pints.',
  },
  mammy: {
    title: 'Irish Mammy Says… · Irish Tools',
    description: 'Words of wisdom from the woman herself. Wrap up, you’ll catch your death.',
  },
  focal: {
    title: 'Cúpla Focal — Irish Word of the Day · Irish Tools',
    description:
      'Learn a bit of Irish every day: a focal with its meaning and how to actually pronounce it.',
  },
  pub: {
    title: 'Is the Pub Open? · Irish Tools',
    description: 'Can I get a pint in Ireland today? The eternal question, settled by law.',
  },
  surnames: {
    title: 'Irish Surname Origins & Meanings · Irish Tools',
    description:
      'Where does your Irish family name come from? Look up its Irish form, meaning and home county — Murphy, Kelly, O’Brien, Walsh and hundreds more.',
  },
  names: {
    title: 'Irish First Names, Meanings & Pronunciation · Irish Tools',
    description:
      'Beautiful Irish names with their meanings and how to actually say them — Saoirse, Aoife, Cian, Tadhg and more.',
  },
  places: {
    title: 'Places to Visit in Ireland — Interactive Map · Irish Tools',
    description:
      'Plan your trip to Ireland: an interactive map of 550+ castles, abbeys, ancient sites and must-see landmarks across the island.',
  },
  counties: {
    title: 'Irish County Guide — All 32 Counties · Irish Tools',
    description:
      'Explore all 32 counties of Ireland: Irish names, nicknames, photos, and what to see. A grand way to find where your people came from.',
  },
  slang: {
    title: 'Irish Slang Dictionary · Irish Tools',
    description:
      'What’s the craic? Search the Irish slang dictionary — from acting the maggot to the jacks, with meanings and examples.',
  },
  'how-irish': {
    title: 'How Irish Are You? Quiz · Irish Tools',
    description:
      'Take the test: twelve questions of pure Irishness, from the immersion to the pressed press. Share your score.',
  },
  'ring-home': {
    title: 'What Time Is It in Ireland? Can I Ring Home? · Irish Tools',
    description:
      'The current time in Ireland, the time difference from where you are, and whether it’s a decent hour to ring home.',
  },
  blessings: {
    title: 'Irish Blessings & Toasts Generator · Irish Tools',
    description:
      'Traditional Irish blessings for weddings, farewells, toasts and luck — may the road rise to meet you.',
  },
  'paddys-day': {
    title: 'St Patrick’s Day Countdown · Irish Tools',
    description: 'How long until St Patrick’s Day? The countdown to the greenest day of the year.',
  },
  'trip-budget': {
    title: 'Ireland Trip Budget Converter · Irish Tools',
    description:
      'Planning a trip to Ireland? Convert your dollars or pounds to euro at today’s rate and see what things cost.',
  },
  privacy: {
    title: 'Privacy Policy · Irish Tools',
    description: 'How Irish Tools handles your data: locally, lightly, and honestly.',
  },
}

export function metaFor(route) {
  return ROUTE_META[route] || ROUTE_META.home
}

export function pathFor(route) {
  return route === 'home' ? '/' : `/${route}/`
}
