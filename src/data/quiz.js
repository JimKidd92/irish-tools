// Question pool for the Daily Irish Quiz. Each day picks a deterministic set
// from this pool, so everyone gets the same questions on the same day.
// Each question: { q, options: [...], answer: <index of correct option> }.
export const QUESTIONS = [
  { q: 'What’s the Irish for “hello”?', options: ['Slán', 'Dia duit', 'Sláinte', 'Go raibh maith agat'], answer: 1 },
  { q: 'Which county is known as “The Kingdom”?', options: ['Cork', 'Galway', 'Kerry', 'Mayo'], answer: 2 },
  { q: 'In Ireland, “grand” usually means…', options: ['Huge', 'Fine / okay', 'Expensive', 'Angry'], answer: 1 },
  { q: '“Acting the maggot” means…', options: ['Working hard', 'Messing about', 'Feeling sick', 'Telling lies'], answer: 1 },
  { q: 'What’s the longest river in Ireland?', options: ['The Liffey', 'The Lee', 'The Shannon', 'The Boyne'], answer: 2 },
  { q: '“Sláinte” is a toast meaning…', options: ['Goodbye', 'Health', 'Love', 'Money'], answer: 1 },
  { q: 'Which is a traditional Irish sport?', options: ['Hurling', 'Cricket', 'Lacrosse', 'Polo'], answer: 0 },
  { q: 'What is “the immersion”?', options: ['A water heater', 'A swimming pool', 'A type of bog', 'A pub'], answer: 0 },
  { q: '“What’s the craic?” is asking…', options: ['The time', 'The news / any gossip', 'For directions', 'The weather'], answer: 1 },
  { q: 'Newgrange is older than…', options: ['The Colosseum', 'Stonehenge', 'The Egyptian pyramids', 'All of these'], answer: 3 },
  { q: 'Which colour is on the hoist side of the Irish tricolour?', options: ['Orange', 'White', 'Green', 'Gold'], answer: 2 },
  { q: 'A “culchie” is…', options: ['A city slicker', 'Someone from rural Ireland', 'A tourist', 'A farm tool'], answer: 1 },
  { q: 'Which is Ireland’s largest county by area?', options: ['Cork', 'Galway', 'Mayo', 'Donegal'], answer: 0 },
  { q: 'In Hiberno-English, a “press” is often a…', options: ['Cupboard', 'Newspaper', 'Button', 'Crowd'], answer: 0 },
  { q: 'St Brigid’s Day falls on…', options: ['1 February', '17 March', '1 May', '1 November'], answer: 0 },
  { q: 'What’s the Irish for “thank you”?', options: ['Le do thoil', 'Go raibh maith agat', 'Slán abhaile', 'Conas atá tú'], answer: 1 },
  { q: 'The Wild Atlantic Way runs along which coast?', options: ['The east', 'The west', 'The south only', 'The north only'], answer: 1 },
  { q: 'A “soft day” refers to…', options: ['Mild, drizzly weather', 'A day off work', 'A lazy person', 'An easy job'], answer: 0 },
  { q: 'Which instrument features on Irish euro coins?', options: ['A fiddle', 'A harp', 'Uilleann pipes', 'A bodhrán'], answer: 1 },
  { q: '“Giving out” means…', options: ['Donating', 'Complaining / scolding', 'Sharing food', 'Giving up'], answer: 1 },
  { q: 'Halloween comes from which Celtic festival?', options: ['Bealtaine', 'Imbolc', 'Samhain', 'Lúnasa'], answer: 2 },
  { q: 'What does GAA stand for?', options: ['Gaelic Athletic Association', 'Gaelic Arts Academy', 'Galway Athletic Alliance', 'Gaelic Amateur Association'], answer: 0 },
  { q: '“The jacks” is slang for…', options: ['Money', 'The toilet', 'Playing cards', 'Your mates'], answer: 1 },
  { q: 'Which city is known as “The Rebel City”?', options: ['Limerick', 'Cork', 'Derry', 'Waterford'], answer: 1 },
  { q: '“Yoke” usually means…', options: ['A thing / whatchamacallit', 'An egg yolk', 'A joke', 'A yoga pose'], answer: 0 },
  { q: 'Croke Park is mainly home to which sports?', options: ['Soccer', 'Rugby', 'Gaelic games', 'Cricket'], answer: 2 },
  { q: 'The Cliffs of Moher are in which county?', options: ['Clare', 'Kerry', 'Galway', 'Donegal'], answer: 0 },
  { q: '“Eejit” means…', options: ['A fool', 'A genius', 'A child', 'An elder'], answer: 0 },
  { q: 'Guinness was first brewed in which city?', options: ['Cork', 'Belfast', 'Dublin', 'Galway'], answer: 2 },
  { q: 'What’s the capital of Northern Ireland?', options: ['Derry', 'Belfast', 'Armagh', 'Lisburn'], answer: 1 },
  { q: '“Grá” is the Irish word for…', options: ['Love', 'Fear', 'Hunger', 'Rain'], answer: 0 },
  { q: 'How many counties are on the island of Ireland?', options: ['26', '30', '32', '34'], answer: 2 },
]

export const QUESTIONS_PER_DAY = 5
