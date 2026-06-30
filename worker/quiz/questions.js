// Irish Tools — Daily Quiz question bank (SERVER-SIDE, with answers).
// This lives in the Worker only and is never sent to the browser. The client
// receives questions without the answer key. Add new questions weekly and
// redeploy the Worker. Each: { q, options:[...], answer:<index> }.

export const QUESTIONS = [
  {
    "q": "What’s the Irish for “hello”?",
    "options": [
      "Slán",
      "Dia duit",
      "Sláinte",
      "Go raibh maith agat"
    ],
    "answer": 1
  },
  {
    "q": "Which county is known as “The Kingdom”?",
    "options": [
      "Cork",
      "Galway",
      "Kerry",
      "Mayo"
    ],
    "answer": 2
  },
  {
    "q": "In Ireland, “grand” usually means…",
    "options": [
      "Huge",
      "Fine / okay",
      "Expensive",
      "Angry"
    ],
    "answer": 1
  },
  {
    "q": "“Acting the maggot” means…",
    "options": [
      "Working hard",
      "Messing about",
      "Feeling sick",
      "Telling lies"
    ],
    "answer": 1
  },
  {
    "q": "What’s the longest river in Ireland?",
    "options": [
      "The Liffey",
      "The Lee",
      "The Shannon",
      "The Boyne"
    ],
    "answer": 2
  },
  {
    "q": "“Sláinte” is a toast meaning…",
    "options": [
      "Goodbye",
      "Health",
      "Love",
      "Money"
    ],
    "answer": 1
  },
  {
    "q": "Which is a traditional Irish sport?",
    "options": [
      "Hurling",
      "Cricket",
      "Lacrosse",
      "Polo"
    ],
    "answer": 0
  },
  {
    "q": "What is “the immersion”?",
    "options": [
      "A water heater",
      "A swimming pool",
      "A type of bog",
      "A pub"
    ],
    "answer": 0
  },
  {
    "q": "“What’s the craic?” is asking…",
    "options": [
      "The time",
      "The news / any gossip",
      "For directions",
      "The weather"
    ],
    "answer": 1
  },
  {
    "q": "Newgrange is older than…",
    "options": [
      "The Colosseum",
      "Stonehenge",
      "The Egyptian pyramids",
      "All of these"
    ],
    "answer": 3
  },
  {
    "q": "Which colour is on the hoist side of the Irish tricolour?",
    "options": [
      "Orange",
      "White",
      "Green",
      "Gold"
    ],
    "answer": 2
  },
  {
    "q": "A “culchie” is…",
    "options": [
      "A city slicker",
      "Someone from rural Ireland",
      "A tourist",
      "A farm tool"
    ],
    "answer": 1
  },
  {
    "q": "Which is Ireland’s largest county by area?",
    "options": [
      "Cork",
      "Galway",
      "Mayo",
      "Donegal"
    ],
    "answer": 0
  },
  {
    "q": "In Hiberno-English, a “press” is often a…",
    "options": [
      "Cupboard",
      "Newspaper",
      "Button",
      "Crowd"
    ],
    "answer": 0
  },
  {
    "q": "St Brigid’s Day falls on…",
    "options": [
      "1 February",
      "17 March",
      "1 May",
      "1 November"
    ],
    "answer": 0
  },
  {
    "q": "What’s the Irish for “thank you”?",
    "options": [
      "Le do thoil",
      "Go raibh maith agat",
      "Slán abhaile",
      "Conas atá tú"
    ],
    "answer": 1
  },
  {
    "q": "The Wild Atlantic Way runs along which coast?",
    "options": [
      "The east",
      "The west",
      "The south only",
      "The north only"
    ],
    "answer": 1
  },
  {
    "q": "A “soft day” refers to…",
    "options": [
      "Mild, drizzly weather",
      "A day off work",
      "A lazy person",
      "An easy job"
    ],
    "answer": 0
  },
  {
    "q": "Which instrument features on Irish euro coins?",
    "options": [
      "A fiddle",
      "A harp",
      "Uilleann pipes",
      "A bodhrán"
    ],
    "answer": 1
  },
  {
    "q": "“Giving out” means…",
    "options": [
      "Donating",
      "Complaining / scolding",
      "Sharing food",
      "Giving up"
    ],
    "answer": 1
  },
  {
    "q": "Halloween comes from which Celtic festival?",
    "options": [
      "Bealtaine",
      "Imbolc",
      "Samhain",
      "Lúnasa"
    ],
    "answer": 2
  },
  {
    "q": "What does GAA stand for?",
    "options": [
      "Gaelic Athletic Association",
      "Gaelic Arts Academy",
      "Galway Athletic Alliance",
      "Gaelic Amateur Association"
    ],
    "answer": 0
  },
  {
    "q": "“The jacks” is slang for…",
    "options": [
      "Money",
      "The toilet",
      "Playing cards",
      "Your mates"
    ],
    "answer": 1
  },
  {
    "q": "Which city is known as “The Rebel City”?",
    "options": [
      "Limerick",
      "Cork",
      "Derry",
      "Waterford"
    ],
    "answer": 1
  },
  {
    "q": "“Yoke” usually means…",
    "options": [
      "A thing / whatchamacallit",
      "An egg yolk",
      "A joke",
      "A yoga pose"
    ],
    "answer": 0
  },
  {
    "q": "Croke Park is mainly home to which sports?",
    "options": [
      "Soccer",
      "Rugby",
      "Gaelic games",
      "Cricket"
    ],
    "answer": 2
  },
  {
    "q": "The Cliffs of Moher are in which county?",
    "options": [
      "Clare",
      "Kerry",
      "Galway",
      "Donegal"
    ],
    "answer": 0
  },
  {
    "q": "“Eejit” means…",
    "options": [
      "A fool",
      "A genius",
      "A child",
      "An elder"
    ],
    "answer": 0
  },
  {
    "q": "Guinness was first brewed in which city?",
    "options": [
      "Cork",
      "Belfast",
      "Dublin",
      "Galway"
    ],
    "answer": 2
  },
  {
    "q": "What’s the capital of Northern Ireland?",
    "options": [
      "Derry",
      "Belfast",
      "Armagh",
      "Lisburn"
    ],
    "answer": 1
  },
  {
    "q": "“Grá” is the Irish word for…",
    "options": [
      "Love",
      "Fear",
      "Hunger",
      "Rain"
    ],
    "answer": 0
  },
  {
    "q": "How many counties are on the island of Ireland?",
    "options": [
      "26",
      "30",
      "32",
      "34"
    ],
    "answer": 2
  },
  {
    "q": "What does “Tír na nÓg” mean?",
    "options": [
      "Land of Saints",
      "Land of the Young",
      "Land of Kings",
      "Land of Mist"
    ],
    "answer": 1
  },
  {
    "q": "Who drove the snakes out of Ireland, according to legend?",
    "options": [
      "St Brigid",
      "St Colmcille",
      "St Patrick",
      "Fionn mac Cumhaill"
    ],
    "answer": 2
  },
  {
    "q": "What’s a “gansey”?",
    "options": [
      "A jumper",
      "A walk",
      "A drink",
      "A liar"
    ],
    "answer": 0
  },
  {
    "q": "In what year was the Easter Rising?",
    "options": [
      "1798",
      "1916",
      "1921",
      "1922"
    ],
    "answer": 1
  },
  {
    "q": "Which Irish dish is made from mashed potato and cabbage or kale?",
    "options": [
      "Coddle",
      "Boxty",
      "Colcannon",
      "Champ"
    ],
    "answer": 2
  },
  {
    "q": "“Fair play to ya” means…",
    "options": [
      "Be honest",
      "Well done",
      "Calm down",
      "Hurry up"
    ],
    "answer": 1
  },
  {
    "q": "What instrument is the bodhrán?",
    "options": [
      "A fiddle",
      "A flute",
      "A drum",
      "A pipe"
    ],
    "answer": 2
  },
  {
    "q": "Which province is Galway in?",
    "options": [
      "Leinster",
      "Munster",
      "Connacht",
      "Ulster"
    ],
    "answer": 2
  },
  {
    "q": "What’s “boxty”?",
    "options": [
      "A potato pancake",
      "A small donkey",
      "A type of boot",
      "A boxing match"
    ],
    "answer": 0
  },
  {
    "q": "Who wrote Ulysses?",
    "options": [
      "W.B. Yeats",
      "Samuel Beckett",
      "Oscar Wilde",
      "James Joyce"
    ],
    "answer": 3
  },
  {
    "q": "What colour is associated with St Patrick’s Day?",
    "options": [
      "Blue",
      "Green",
      "Orange",
      "Gold"
    ],
    "answer": 1
  },
  {
    "q": "A “gaff” is…",
    "options": [
      "A mistake",
      "A house",
      "A laugh",
      "A boat"
    ],
    "answer": 1
  },
  {
    "q": "“Black stuff” usually refers to…",
    "options": [
      "Turf",
      "Tea",
      "Guinness",
      "Liquorice"
    ],
    "answer": 2
  },
  {
    "q": "The harp on Irish coins faces which way compared to the Guinness harp?",
    "options": [
      "The same way",
      "The opposite way",
      "Upside down",
      "There is no difference"
    ],
    "answer": 1
  },
  {
    "q": "Which county is called “The Wee County”?",
    "options": [
      "Leitrim",
      "Carlow",
      "Louth",
      "Longford"
    ],
    "answer": 2
  },
  {
    "q": "What’s the Irish word for music?",
    "options": [
      "Ceol",
      "Craic",
      "Cáca",
      "Cúl"
    ],
    "answer": 0
  },
  {
    "q": "Which mythical figure gained wisdom from a salmon?",
    "options": [
      "Cú Chulainn",
      "Fionn mac Cumhaill",
      "Oisín",
      "Setanta"
    ],
    "answer": 1
  },
  {
    "q": "What was Cú Chulainn’s original name?",
    "options": [
      "Oisín",
      "Ferdia",
      "Setanta",
      "Conall"
    ],
    "answer": 2
  },
  {
    "q": "“The messages” means…",
    "options": [
      "Texts",
      "The shopping",
      "Mass readings",
      "Gossip"
    ],
    "answer": 1
  },
  {
    "q": "Which city is the “Treaty City”?",
    "options": [
      "Cork",
      "Galway",
      "Limerick",
      "Waterford"
    ],
    "answer": 2
  },
  {
    "q": "How many players are on a Gaelic football team?",
    "options": [
      "11",
      "13",
      "15",
      "17"
    ],
    "answer": 2
  },
  {
    "q": "What’s the All-Ireland football trophy called?",
    "options": [
      "Liam MacCarthy Cup",
      "Sam Maguire Cup",
      "Bob O’Keeffe Cup",
      "Brendan Martin Cup"
    ],
    "answer": 1
  },
  {
    "q": "And the All-Ireland hurling trophy?",
    "options": [
      "Sam Maguire Cup",
      "Liam MacCarthy Cup",
      "Tom Markham Cup",
      "Christy Ring Cup"
    ],
    "answer": 1
  },
  {
    "q": "What is a sliotar?",
    "options": [
      "A hurling ball",
      "A hurling stick",
      "A type of boot",
      "A penalty"
    ],
    "answer": 0
  },
  {
    "q": "“Acting the gom” means acting like…",
    "options": [
      "A boss",
      "A fool",
      "A hero",
      "A child"
    ],
    "answer": 1
  },
  {
    "q": "Which river runs through Cork city?",
    "options": [
      "The Shannon",
      "The Lee",
      "The Suir",
      "The Corrib"
    ],
    "answer": 1
  },
  {
    "q": "Which river runs through Galway?",
    "options": [
      "The Moy",
      "The Corrib",
      "The Barrow",
      "The Erne"
    ],
    "answer": 1
  },
  {
    "q": "What’s the highest mountain in Ireland?",
    "options": [
      "Croagh Patrick",
      "Errigal",
      "Carrauntoohil",
      "Slieve Donard"
    ],
    "answer": 2
  },
  {
    "q": "Carrauntoohil is in which county?",
    "options": [
      "Mayo",
      "Wicklow",
      "Kerry",
      "Donegal"
    ],
    "answer": 2
  },
  {
    "q": "“I will yeah” usually means…",
    "options": [
      "Definitely yes",
      "Absolutely not",
      "Maybe",
      "Right away"
    ],
    "answer": 1
  },
  {
    "q": "What’s “the press” in an Irish kitchen?",
    "options": [
      "The iron",
      "The cupboard",
      "The newspaper",
      "The kettle"
    ],
    "answer": 1
  },
  {
    "q": "Which Irish writer won the Nobel Prize in 1923?",
    "options": [
      "James Joyce",
      "W.B. Yeats",
      "G.B. Shaw",
      "Seamus Heaney"
    ],
    "answer": 1
  },
  {
    "q": "Seamus Heaney came from which county?",
    "options": [
      "Monaghan",
      "Sligo",
      "Derry",
      "Kerry"
    ],
    "answer": 2
  },
  {
    "q": "What’s a “hooley”?",
    "options": [
      "A storm",
      "A party",
      "A fight",
      "A hurling match"
    ],
    "answer": 1
  },
  {
    "q": "The Claddagh ring shows two hands holding a…",
    "options": [
      "Harp",
      "Shamrock",
      "Crowned heart",
      "Cross"
    ],
    "answer": 2
  },
  {
    "q": "Where is the Claddagh?",
    "options": [
      "Dublin",
      "Galway",
      "Cork",
      "Kerry"
    ],
    "answer": 1
  },
  {
    "q": "“Sceolán” and “Bran” were Fionn mac Cumhaill’s…",
    "options": [
      "Swords",
      "Sons",
      "Hounds",
      "Horses"
    ],
    "answer": 2
  },
  {
    "q": "What’s “poitín”?",
    "options": [
      "Illegal homemade spirits",
      "A small pot",
      "A potato dish",
      "A fairy"
    ],
    "answer": 0
  },
  {
    "q": "A “banshee” is said to warn of…",
    "options": [
      "Rain",
      "A death",
      "A wedding",
      "Bad luck at cards"
    ],
    "answer": 1
  },
  {
    "q": "What does “fáilte” mean?",
    "options": [
      "Goodbye",
      "Welcome",
      "Thanks",
      "Cheers"
    ],
    "answer": 1
  },
  {
    "q": "“Ar dheis Dé go raibh a anam” is said when someone…",
    "options": [
      "Marries",
      "Emigrates",
      "Dies",
      "Graduates"
    ],
    "answer": 2
  },
  {
    "q": "Which county is “The Banner County”?",
    "options": [
      "Clare",
      "Kerry",
      "Tipperary",
      "Galway"
    ],
    "answer": 0
  },
  {
    "q": "Which county is “The Kingdom”?",
    "options": [
      "Cork",
      "Kerry",
      "Meath",
      "Tyrone"
    ],
    "answer": 1
  },
  {
    "q": "Which county is “The Rebel County”?",
    "options": [
      "Wexford",
      "Tipperary",
      "Cork",
      "Kilkenny"
    ],
    "answer": 2
  },
  {
    "q": "Bunratty Castle is in which county?",
    "options": [
      "Limerick",
      "Clare",
      "Tipperary",
      "Galway"
    ],
    "answer": 1
  },
  {
    "q": "What’s the capital of Connacht (traditionally)?",
    "options": [
      "Sligo",
      "Castlebar",
      "Galway",
      "Roscommon"
    ],
    "answer": 2
  },
  {
    "q": "The Book of Kells is kept where?",
    "options": [
      "Kells",
      "The National Museum",
      "Trinity College Dublin",
      "Armagh Cathedral"
    ],
    "answer": 2
  },
  {
    "q": "What’s “turf” cut from?",
    "options": [
      "A field",
      "A bog",
      "A beach",
      "A forest"
    ],
    "answer": 1
  },
  {
    "q": "What does “níl aon tinteán mar do thinteán féin” mean?",
    "options": [
      "Health is wealth",
      "There’s no place like home",
      "Time waits for no one",
      "Many hands make light work"
    ],
    "answer": 1
  },
  {
    "q": "“Two soft days in a row” means…",
    "options": [
      "It rained gently twice",
      "A heatwave",
      "Snow",
      "A hard frost"
    ],
    "answer": 0
  },
  {
    "q": "Which ocean batters Ireland’s west coast?",
    "options": [
      "The Pacific",
      "The Atlantic",
      "The Irish Sea",
      "The North Sea"
    ],
    "answer": 1
  },
  {
    "q": "The Irish flag’s colours are green, white and…",
    "options": [
      "Gold",
      "Red",
      "Orange",
      "Blue"
    ],
    "answer": 2
  },
  {
    "q": "What does the white in the tricolour symbolise?",
    "options": [
      "Snow",
      "Peace between traditions",
      "The church",
      "Surrender"
    ],
    "answer": 1
  },
  {
    "q": "“Dún an doras” means…",
    "options": [
      "Open the window",
      "Close the door",
      "Light the fire",
      "Set the table"
    ],
    "answer": 1
  },
  {
    "q": "A “céilí” is…",
    "options": [
      "A funeral",
      "A dance gathering",
      "A market day",
      "A church service"
    ],
    "answer": 1
  },
  {
    "q": "What’s a “fleadh”?",
    "options": [
      "A music festival",
      "A flood",
      "A fight",
      "A feast day"
    ],
    "answer": 0
  },
  {
    "q": "Puck Fair, with its goat king, is held in which county?",
    "options": [
      "Clare",
      "Galway",
      "Kerry",
      "Cork"
    ],
    "answer": 2
  },
  {
    "q": "The Rose of Tralee is held in…",
    "options": [
      "Cork",
      "Kerry",
      "Limerick",
      "Galway"
    ],
    "answer": 1
  },
  {
    "q": "Which is Ireland’s longest-running soap opera?",
    "options": [
      "Glenroe",
      "Fair City",
      "Ros na Rún",
      "The Riordans"
    ],
    "answer": 1
  },
  {
    "q": "Father Ted’s parochial house is on…",
    "options": [
      "Inis Mór",
      "Craggy Island",
      "Tory Island",
      "Achill Island"
    ],
    "answer": 1
  },
  {
    "q": "Mrs Doyle’s catchphrase is…",
    "options": [
      "“Ah here”",
      "“Go on go on go on”",
      "“That’d be an ecumenical matter”",
      "“Down with this sort of thing”"
    ],
    "answer": 1
  },
  {
    "q": "“That’d be an ecumenical matter” is whose line?",
    "options": [
      "Father Ted",
      "Father Dougal",
      "Father Jack",
      "Bishop Brennan"
    ],
    "answer": 2
  },
  {
    "q": "What’s “the strand”?",
    "options": [
      "The main street",
      "The beach",
      "The river bank",
      "The pier"
    ],
    "answer": 1
  },
  {
    "q": "Which U.S. president famously visited his Mayo roots in 2023?",
    "options": [
      "Barack Obama",
      "Joe Biden",
      "Bill Clinton",
      "John F. Kennedy"
    ],
    "answer": 1
  },
  {
    "q": "Barack Obama’s Irish ancestors came from which village?",
    "options": [
      "Moneygall",
      "Knock",
      "Adare",
      "Cong"
    ],
    "answer": 0
  },
  {
    "q": "JFK’s people came from which county?",
    "options": [
      "Cork",
      "Wexford",
      "Clare",
      "Limerick"
    ],
    "answer": 1
  },
  {
    "q": "What’s a “naggin”?",
    "options": [
      "A small bottle of spirits",
      "A complaint",
      "A young horse",
      "A nap"
    ],
    "answer": 0
  },
  {
    "q": "“C’mere to me” means…",
    "options": [
      "Go away",
      "Listen here",
      "Carry me",
      "Look at me"
    ],
    "answer": 1
  },
  {
    "q": "Which Irish dance show took the world by storm in 1994?",
    "options": [
      "Lord of the Dance",
      "Riverdance",
      "Celtic Tiger",
      "Feet of Flames"
    ],
    "answer": 1
  },
  {
    "q": "The Eurovision interval act that became Riverdance happened in which Irish venue?",
    "options": [
      "The Olympia",
      "The Point Theatre",
      "Croke Park",
      "The Gaiety"
    ],
    "answer": 1
  },
  {
    "q": "How many times has Ireland won Eurovision?",
    "options": [
      "3",
      "5",
      "7",
      "9"
    ],
    "answer": 2
  },
  {
    "q": "What’s “the jax”?",
    "options": [
      "The pub",
      "The toilet",
      "The bookies",
      "The chipper"
    ],
    "answer": 1
  },
  {
    "q": "A “chipper” is…",
    "options": [
      "A carpenter",
      "A fish-and-chip shop",
      "A happy person",
      "A golf club"
    ],
    "answer": 1
  },
  {
    "q": "What goes into a “spice bag”?",
    "options": [
      "Herbs for stew",
      "Chips, chicken and peppers",
      "Turf",
      "Sweets"
    ],
    "answer": 1
  },
  {
    "q": "Tayto is famous for which flavour?",
    "options": [
      "Salt & Vinegar",
      "Cheese & Onion",
      "Smoky Bacon",
      "Prawn Cocktail"
    ],
    "answer": 1
  },
  {
    "q": "What’s “red lemonade” traditionally paired with?",
    "options": [
      "Tea",
      "Whiskey",
      "Stout",
      "Milk"
    ],
    "answer": 1
  },
  {
    "q": "A “99” is…",
    "options": [
      "An ice cream with a Flake",
      "A bus route",
      "A lotto number",
      "A penalty"
    ],
    "answer": 0
  },
  {
    "q": "Which saint is associated with a woven rush cross?",
    "options": [
      "St Patrick",
      "St Brigid",
      "St Colmcille",
      "St Kevin"
    ],
    "answer": 1
  },
  {
    "q": "Ireland’s patron saints are Patrick, Brigid and…",
    "options": [
      "Kevin",
      "Oliver",
      "Colmcille",
      "Brendan"
    ],
    "answer": 2
  },
  {
    "q": "St Brendan the Navigator allegedly sailed to…",
    "options": [
      "Spain",
      "Iceland",
      "America",
      "Egypt"
    ],
    "answer": 2
  },
  {
    "q": "What’s the GPO famous for?",
    "options": [
      "The 1916 Rising HQ",
      "Ireland’s first cinema",
      "The oldest pub",
      "Daniel O’Connell’s birthplace"
    ],
    "answer": 0
  },
  {
    "q": "Who was “The Liberator”?",
    "options": [
      "Michael Collins",
      "Daniel O’Connell",
      "Éamon de Valera",
      "Wolfe Tone"
    ],
    "answer": 1
  },
  {
    "q": "Michael Collins came from which county?",
    "options": [
      "Dublin",
      "Kerry",
      "Cork",
      "Tipperary"
    ],
    "answer": 2
  },
  {
    "q": "The Great Famine began in which year?",
    "options": [
      "1825",
      "1845",
      "1865",
      "1885"
    ],
    "answer": 1
  },
  {
    "q": "Grace O’Malley (Gráinne Mhaol) was famous as a…",
    "options": [
      "Poet",
      "Pirate queen",
      "Saint",
      "Healer"
    ],
    "answer": 1
  },
  {
    "q": "Grace O’Malley ruled the seas off which county?",
    "options": [
      "Donegal",
      "Mayo",
      "Kerry",
      "Wexford"
    ],
    "answer": 1
  },
  {
    "q": "What was a “hedge school”?",
    "options": [
      "A gardening course",
      "A secret school during Penal times",
      "A farm school",
      "A school for druids"
    ],
    "answer": 1
  },
  {
    "q": "Which language family does Irish belong to?",
    "options": [
      "Germanic",
      "Romance",
      "Celtic",
      "Slavic"
    ],
    "answer": 2
  },
  {
    "q": "A “Gaeltacht” is…",
    "options": [
      "A music session",
      "An Irish-speaking region",
      "A type of dance",
      "A summer storm"
    ],
    "answer": 1
  },
  {
    "q": "What does “Éire go Brách” mean?",
    "options": [
      "Ireland is great",
      "Ireland forever",
      "Ireland awake",
      "Ireland the brave"
    ],
    "answer": 1
  },
  {
    "q": "“Slán abhaile” means…",
    "options": [
      "Good luck",
      "Safe home",
      "Sleep well",
      "God bless"
    ],
    "answer": 1
  },
  {
    "q": "What’s a “currach”?",
    "options": [
      "A stone wall",
      "A traditional boat",
      "A peat spade",
      "A round tower"
    ],
    "answer": 1
  },
  {
    "q": "Round towers were mainly built by…",
    "options": [
      "Vikings",
      "Normans",
      "Monks",
      "Celts"
    ],
    "answer": 2
  },
  {
    "q": "Dublin was founded by…",
    "options": [
      "The Celts",
      "The Vikings",
      "The Normans",
      "The Romans"
    ],
    "answer": 1
  },
  {
    "q": "“Dubh Linn” means…",
    "options": [
      "Black pool",
      "Dark hill",
      "Deep river",
      "Old fort"
    ],
    "answer": 0
  },
  {
    "q": "Which stone do you kiss for eloquence?",
    "options": [
      "The Cashel Stone",
      "The Blarney Stone",
      "The Lia Fáil",
      "The Turoe Stone"
    ],
    "answer": 1
  },
  {
    "q": "The Lia Fáil (Stone of Destiny) stands at…",
    "options": [
      "Newgrange",
      "The Hill of Tara",
      "Cashel",
      "Clonmacnoise"
    ],
    "answer": 1
  },
  {
    "q": "What happens at Newgrange on the winter solstice?",
    "options": [
      "It floods",
      "Sunlight fills the inner chamber",
      "Druids gather legally",
      "Nothing at all"
    ],
    "answer": 1
  },
  {
    "q": "The Giant’s Causeway was built (in legend) by…",
    "options": [
      "Cú Chulainn",
      "Fionn mac Cumhaill",
      "The Tuatha Dé Danann",
      "St Patrick"
    ],
    "answer": 1
  },
  {
    "q": "“The Táin” is an epic about a raid to steal a…",
    "options": [
      "Sword",
      "Crown",
      "Bull",
      "Harp"
    ],
    "answer": 2
  },
  {
    "q": "The Children of Lir were turned into…",
    "options": [
      "Salmon",
      "Deer",
      "Swans",
      "Ravens"
    ],
    "answer": 2
  },
  {
    "q": "How long were the Children of Lir cursed?",
    "options": [
      "100 years",
      "300 years",
      "900 years",
      "1,000 years"
    ],
    "answer": 2
  },
  {
    "q": "A “leipreachán” traditionally guards…",
    "options": [
      "A rainbow",
      "A pot of gold",
      "A fairy fort",
      "A well"
    ],
    "answer": 1
  },
  {
    "q": "Disturbing a “fairy fort” is said to bring…",
    "options": [
      "Rain",
      "Wealth",
      "Bad luck",
      "Visitors"
    ],
    "answer": 2
  },
  {
    "q": "Which airline has a shamrock on its tail?",
    "options": [
      "Ryanair",
      "Aer Lingus",
      "CityJet",
      "Emerald Air"
    ],
    "answer": 1
  },
  {
    "q": "Which Irish airline is famously no-frills?",
    "options": [
      "Aer Lingus",
      "Ryanair",
      "Stobart Air",
      "Aer Arann"
    ],
    "answer": 1
  },
  {
    "q": "“Up the Dubs!” supports which county?",
    "options": [
      "Donegal",
      "Down",
      "Dublin",
      "Derry"
    ],
    "answer": 2
  },
  {
    "q": "Croke Park holds roughly how many people?",
    "options": [
      "52,000",
      "68,000",
      "82,000",
      "95,000"
    ],
    "answer": 2
  },
  {
    "q": "Which sport does Katie Taylor dominate?",
    "options": [
      "Camogie",
      "Boxing",
      "Athletics",
      "Rowing"
    ],
    "answer": 1
  },
  {
    "q": "Camogie is the women’s version of…",
    "options": [
      "Gaelic football",
      "Hurling",
      "Rounders",
      "Handball"
    ],
    "answer": 1
  },
  {
    "q": "What does “GRMA” stand for in Irish texting?",
    "options": [
      "Good morning",
      "Thank you (go raibh maith agat)",
      "Goodbye",
      "No bother"
    ],
    "answer": 1
  },
  {
    "q": "“Ah sure look it” roughly means…",
    "options": [
      "Look over there",
      "It is what it is",
      "Hurry up",
      "I disagree"
    ],
    "answer": 1
  },
  {
    "q": "What’s “drisheen”?",
    "options": [
      "A Cork blood pudding",
      "A small fish",
      "Light rain",
      "A dance step"
    ],
    "answer": 0
  },
  {
    "q": "Coddle is a dish most associated with…",
    "options": [
      "Cork",
      "Belfast",
      "Dublin",
      "Galway"
    ],
    "answer": 2
  },
  {
    "q": "Barmbrack is eaten at…",
    "options": [
      "Easter",
      "Halloween",
      "Christmas",
      "St Patrick’s Day"
    ],
    "answer": 1
  },
  {
    "q": "Finding the ring in the barmbrack means…",
    "options": [
      "Wealth",
      "Marriage within the year",
      "A journey",
      "Bad luck"
    ],
    "answer": 1
  },
  {
    "q": "What’s “curing the hay” dependent on?",
    "options": [
      "The moon",
      "Good dry weather",
      "The tides",
      "A full barn"
    ],
    "answer": 1
  },
  {
    "q": "The “wren boys” go out on…",
    "options": [
      "Christmas Day",
      "St Stephen’s Day",
      "New Year’s Day",
      "Good Friday"
    ],
    "answer": 1
  },
  {
    "q": "Women traditionally propose on…",
    "options": [
      "Christmas Eve",
      "May Day",
      "29 February",
      "Midsummer"
    ],
    "answer": 2
  },
  {
    "q": "“Nollaig Shona” means…",
    "options": [
      "Happy Easter",
      "Happy Christmas",
      "Happy Birthday",
      "Happy New Year"
    ],
    "answer": 1
  },
  {
    "q": "The Angelus airs on RTÉ at…",
    "options": [
      "12 noon and 6pm",
      "9am and 9pm",
      "6am and 6pm",
      "Noon only"
    ],
    "answer": 0
  },
  {
    "q": "What’s the “GAA” pronounced as, colloquially?",
    "options": [
      "The Gah",
      "The Gee-ay-ay",
      "The Gaa-club",
      "All of these get used"
    ],
    "answer": 3
  },
  {
    "q": "What’s a “culchie’s” opposite?",
    "options": [
      "A bogger",
      "A Jackeen",
      "A townie",
      "A blow-in"
    ],
    "answer": 1
  },
  {
    "q": "A “blow-in” is…",
    "options": [
      "A storm",
      "A newcomer to an area",
      "A trumpet player",
      "A gossip"
    ],
    "answer": 1
  },
  {
    "q": "What’s the oldest pub in Ireland said to be?",
    "options": [
      "The Brazen Head",
      "Sean’s Bar, Athlone",
      "Kyteler’s Inn",
      "The Crown, Belfast"
    ],
    "answer": 1
  },
  {
    "q": "Which whiskey distillery is the world’s oldest licensed?",
    "options": [
      "Jameson",
      "Teeling",
      "Bushmills",
      "Tullamore Dew"
    ],
    "answer": 2
  },
  {
    "q": "Irish whiskey is usually distilled how many times?",
    "options": [
      "Once",
      "Twice",
      "Three times",
      "Four times"
    ],
    "answer": 2
  },
  {
    "q": "In which county is the town of Ennis?",
    "options": [
      "Clare",
      "Limerick",
      "Galway",
      "Tipperary"
    ],
    "answer": 0
  },
  {
    "q": "What is the county town of County Mayo?",
    "options": [
      "Castlebar",
      "Westport",
      "Ballina",
      "Claremorris"
    ],
    "answer": 0
  },
  {
    "q": "Which county is known as the Yellowbelly county?",
    "options": [
      "Wexford",
      "Waterford",
      "Carlow",
      "Kilkenny"
    ],
    "answer": 0
  },
  {
    "q": "In which province is County Donegal?",
    "options": [
      "Ulster",
      "Connacht",
      "Leinster",
      "Munster"
    ],
    "answer": 0
  },
  {
    "q": "Which is the largest county in Ireland by area?",
    "options": [
      "Cork",
      "Galway",
      "Mayo",
      "Kerry"
    ],
    "answer": 0
  },
  {
    "q": "Which is the smallest county in Ireland by area?",
    "options": [
      "Louth",
      "Carlow",
      "Dublin",
      "Leitrim"
    ],
    "answer": 0
  },
  {
    "q": "The River Liffey flows through which city?",
    "options": [
      "Dublin",
      "Cork",
      "Limerick",
      "Waterford"
    ],
    "answer": 0
  },
  {
    "q": "On which peninsula is the town of Dingle?",
    "options": [
      "Dingle Peninsula",
      "Beara Peninsula",
      "Iveragh Peninsula",
      "Mizen Peninsula"
    ],
    "answer": 0
  },
  {
    "q": "What is the largest lake on the island of Ireland?",
    "options": [
      "Lough Neagh",
      "Lough Corrib",
      "Lough Derg",
      "Lough Erne"
    ],
    "answer": 0
  },
  {
    "q": "Which county is known as the Faithful County?",
    "options": [
      "Offaly",
      "Laois",
      "Westmeath",
      "Longford"
    ],
    "answer": 0
  },
  {
    "q": "In which county is Connemara?",
    "options": [
      "Galway",
      "Mayo",
      "Clare",
      "Sligo"
    ],
    "answer": 0
  },
  {
    "q": "What is the county town of County Donegal?",
    "options": [
      "Lifford",
      "Letterkenny",
      "Donegal Town",
      "Ballybofey"
    ],
    "answer": 0
  },
  {
    "q": "The Giant's Causeway is in which county?",
    "options": [
      "Antrim",
      "Down",
      "Derry",
      "Tyrone"
    ],
    "answer": 0
  },
  {
    "q": "Which county is known as the Premier County?",
    "options": [
      "Tipperary",
      "Cork",
      "Kilkenny",
      "Limerick"
    ],
    "answer": 0
  },
  {
    "q": "In which province is County Cavan?",
    "options": [
      "Ulster",
      "Leinster",
      "Connacht",
      "Munster"
    ],
    "answer": 0
  },
  {
    "q": "The River Boyne flows through which county?",
    "options": [
      "Meath",
      "Louth",
      "Kildare",
      "Westmeath"
    ],
    "answer": 0
  },
  {
    "q": "Which mountain range lies mostly in County Down?",
    "options": [
      "Mourne Mountains",
      "Wicklow Mountains",
      "Galtee Mountains",
      "Comeragh Mountains"
    ],
    "answer": 0
  },
  {
    "q": "What is the county town of County Kerry?",
    "options": [
      "Tralee",
      "Killarney",
      "Listowel",
      "Dingle"
    ],
    "answer": 0
  },
  {
    "q": "Achill Island lies off the coast of which county?",
    "options": [
      "Mayo",
      "Galway",
      "Donegal",
      "Sligo"
    ],
    "answer": 0
  },
  {
    "q": "Which county is known as the Garden County?",
    "options": [
      "Wicklow",
      "Wexford",
      "Carlow",
      "Meath"
    ],
    "answer": 0
  },
  {
    "q": "In which county is the Rock of Cashel?",
    "options": [
      "Tipperary",
      "Limerick",
      "Kilkenny",
      "Cork"
    ],
    "answer": 0
  },
  {
    "q": "The River Suir flows through which city?",
    "options": [
      "Waterford",
      "Clonmel",
      "Cork",
      "Kilkenny"
    ],
    "answer": 1
  },
  {
    "q": "Which is the highest mountain in the Wicklow Mountains?",
    "options": [
      "Lugnaquilla",
      "Mullaghcleevaun",
      "Tonelagee",
      "Djouce"
    ],
    "answer": 0
  },
  {
    "q": "Valentia Island lies off the coast of which county?",
    "options": [
      "Kerry",
      "Cork",
      "Clare",
      "Galway"
    ],
    "answer": 0
  },
  {
    "q": "What is the county town of County Tipperary?",
    "options": [
      "Clonmel",
      "Nenagh",
      "Thurles",
      "Cashel"
    ],
    "answer": 0
  },
  {
    "q": "In which province is County Roscommon?",
    "options": [
      "Connacht",
      "Leinster",
      "Ulster",
      "Munster"
    ],
    "answer": 0
  },
  {
    "q": "Which bay does the city of Galway sit on?",
    "options": [
      "Galway Bay",
      "Clew Bay",
      "Donegal Bay",
      "Bantry Bay"
    ],
    "answer": 0
  },
  {
    "q": "Which county is known as the Lake County?",
    "options": [
      "Cavan",
      "Leitrim",
      "Westmeath",
      "Fermanagh"
    ],
    "answer": 0
  },
  {
    "q": "The Aran Islands lie off the coast of which county?",
    "options": [
      "Galway",
      "Clare",
      "Mayo",
      "Kerry"
    ],
    "answer": 0
  },
  {
    "q": "What is the county town of County Wexford?",
    "options": [
      "Wexford",
      "Enniscorthy",
      "Gorey",
      "New Ross"
    ],
    "answer": 0
  },
  {
    "q": "Slieve Donard is the highest peak in which range?",
    "options": [
      "Mourne Mountains",
      "Sperrin Mountains",
      "Antrim Hills",
      "Cooley Mountains"
    ],
    "answer": 0
  },
  {
    "q": "In which county is the town of Bundoran?",
    "options": [
      "Donegal",
      "Sligo",
      "Leitrim",
      "Fermanagh"
    ],
    "answer": 0
  },
  {
    "q": "Which county is known as the Royal County?",
    "options": [
      "Meath",
      "Kildare",
      "Dublin",
      "Westmeath"
    ],
    "answer": 0
  },
  {
    "q": "The River Barrow flows through which county town?",
    "options": [
      "Carlow",
      "Kilkenny",
      "Wexford",
      "Portlaoise"
    ],
    "answer": 0
  },
  {
    "q": "Which county does NOT have a coastline?",
    "options": [
      "Laois",
      "Wexford",
      "Sligo",
      "Louth"
    ],
    "answer": 0
  },
  {
    "q": "Inishmore is the largest of which island group?",
    "options": [
      "Aran Islands",
      "Blasket Islands",
      "Skellig Islands",
      "Saltee Islands"
    ],
    "answer": 0
  },
  {
    "q": "What is the county town of County Cavan?",
    "options": [
      "Cavan",
      "Belturbet",
      "Cootehill",
      "Bailieborough"
    ],
    "answer": 0
  },
  {
    "q": "In which province is County Louth?",
    "options": [
      "Leinster",
      "Ulster",
      "Connacht",
      "Munster"
    ],
    "answer": 0
  },
  {
    "q": "Croagh Patrick mountain overlooks which bay?",
    "options": [
      "Clew Bay",
      "Galway Bay",
      "Killala Bay",
      "Donegal Bay"
    ],
    "answer": 0
  },
  {
    "q": "Which county is known as the Treaty County?",
    "options": [
      "Limerick",
      "Clare",
      "Tipperary",
      "Cork"
    ],
    "answer": 0
  },
  {
    "q": "The Skellig Islands lie off the coast of which county?",
    "options": [
      "Kerry",
      "Cork",
      "Clare",
      "Galway"
    ],
    "answer": 0
  },
  {
    "q": "What is the county town of County Sligo?",
    "options": [
      "Sligo",
      "Ballymote",
      "Tubbercurry",
      "Collooney"
    ],
    "answer": 0
  },
  {
    "q": "Lough Derg, on the Shannon, borders which counties?",
    "options": [
      "Clare, Tipperary and Galway",
      "Cork, Kerry and Limerick",
      "Mayo, Galway and Roscommon",
      "Cavan, Leitrim and Fermanagh"
    ],
    "answer": 0
  },
  {
    "q": "Which county is known as the Orchard County?",
    "options": [
      "Armagh",
      "Down",
      "Tyrone",
      "Fermanagh"
    ],
    "answer": 0
  },
  {
    "q": "In which county is the Beara Peninsula mostly located?",
    "options": [
      "Cork",
      "Kerry",
      "Clare",
      "Limerick"
    ],
    "answer": 0
  },
  {
    "q": "What is the county town of County Roscommon?",
    "options": [
      "Roscommon",
      "Boyle",
      "Castlerea",
      "Strokestown"
    ],
    "answer": 0
  },
  {
    "q": "The River Blackwater (Munster) reaches the sea at which town?",
    "options": [
      "Youghal",
      "Mallow",
      "Fermoy",
      "Cork"
    ],
    "answer": 0
  },
  {
    "q": "Which county is known as the Saffron County in GAA?",
    "options": [
      "Antrim",
      "Armagh",
      "Down",
      "Derry"
    ],
    "answer": 0
  },
  {
    "q": "Carlingford Lough separates County Louth from which county?",
    "options": [
      "Down",
      "Armagh",
      "Monaghan",
      "Meath"
    ],
    "answer": 0
  },
  {
    "q": "In which province is County Clare?",
    "options": [
      "Munster",
      "Connacht",
      "Leinster",
      "Ulster"
    ],
    "answer": 0
  },
  {
    "q": "What is the county town of County Laois?",
    "options": [
      "Portlaoise",
      "Portarlington",
      "Mountmellick",
      "Abbeyleix"
    ],
    "answer": 0
  },
  {
    "q": "Which county is known as the Model County?",
    "options": [
      "Wexford",
      "Wicklow",
      "Kilkenny",
      "Carlow"
    ],
    "answer": 0
  },
  {
    "q": "Rathlin Island lies off the coast of which county?",
    "options": [
      "Antrim",
      "Down",
      "Derry",
      "Donegal"
    ],
    "answer": 0
  },
  {
    "q": "The Iveragh Peninsula is famous for which scenic route?",
    "options": [
      "Ring of Kerry",
      "Wild Atlantic Way",
      "Causeway Coast",
      "Sky Road"
    ],
    "answer": 0
  },
  {
    "q": "What is the county town of County Monaghan?",
    "options": [
      "Monaghan",
      "Clones",
      "Carrickmacross",
      "Castleblayney"
    ],
    "answer": 0
  },
  {
    "q": "In which county is Lough Gill?",
    "options": [
      "Sligo",
      "Leitrim",
      "Cavan",
      "Fermanagh"
    ],
    "answer": 0
  },
  {
    "q": "Which county is known as the Heather County?",
    "options": [
      "Antrim",
      "Down",
      "Tyrone",
      "Derry"
    ],
    "answer": 0
  },
  {
    "q": "The River Nore flows through which city?",
    "options": [
      "Kilkenny",
      "Waterford",
      "Carlow",
      "Clonmel"
    ],
    "answer": 0
  },
  {
    "q": "Cape Clear Island lies off the coast of which county?",
    "options": [
      "Cork",
      "Kerry",
      "Waterford",
      "Wexford"
    ],
    "answer": 0
  },
  {
    "q": "What is the county town of County Longford?",
    "options": [
      "Longford",
      "Granard",
      "Edgeworthstown",
      "Ballymahon"
    ],
    "answer": 0
  },
  {
    "q": "In which province is County Westmeath?",
    "options": [
      "Leinster",
      "Connacht",
      "Ulster",
      "Munster"
    ],
    "answer": 0
  },
  {
    "q": "Which county is known as the Lilywhites?",
    "options": [
      "Kildare",
      "Dublin",
      "Meath",
      "Laois"
    ],
    "answer": 0
  },
  {
    "q": "Lough Ree lies on which river?",
    "options": [
      "Shannon",
      "Erne",
      "Boyne",
      "Barrow"
    ],
    "answer": 0
  },
  {
    "q": "The Galtee Mountains lie mainly in which county?",
    "options": [
      "Tipperary",
      "Limerick",
      "Cork",
      "Waterford"
    ],
    "answer": 0
  },
  {
    "q": "What is the county town of County Carlow?",
    "options": [
      "Carlow",
      "Tullow",
      "Bagenalstown",
      "Hacketstown"
    ],
    "answer": 0
  },
  {
    "q": "Tory Island lies off the coast of which county?",
    "options": [
      "Donegal",
      "Mayo",
      "Sligo",
      "Galway"
    ],
    "answer": 0
  },
  {
    "q": "Which county is known as the Breffni County?",
    "options": [
      "Cavan",
      "Leitrim",
      "Monaghan",
      "Longford"
    ],
    "answer": 0
  },
  {
    "q": "In which county is the Hook Head lighthouse?",
    "options": [
      "Wexford",
      "Waterford",
      "Wicklow",
      "Cork"
    ],
    "answer": 0
  },
  {
    "q": "The Comeragh Mountains lie mainly in which county?",
    "options": [
      "Waterford",
      "Tipperary",
      "Kilkenny",
      "Cork"
    ],
    "answer": 0
  },
  {
    "q": "What is the county town of County Leitrim?",
    "options": [
      "Carrick-on-Shannon",
      "Manorhamilton",
      "Drumshanbo",
      "Mohill"
    ],
    "answer": 0
  },
  {
    "q": "In which province is County Kilkenny?",
    "options": [
      "Leinster",
      "Munster",
      "Connacht",
      "Ulster"
    ],
    "answer": 0
  },
  {
    "q": "Which county is known as the O'Moore County?",
    "options": [
      "Laois",
      "Offaly",
      "Kildare",
      "Carlow"
    ],
    "answer": 0
  },
  {
    "q": "Bantry Bay is in which county?",
    "options": [
      "Cork",
      "Kerry",
      "Clare",
      "Waterford"
    ],
    "answer": 0
  },
  {
    "q": "The town of Westport is in which county?",
    "options": [
      "Mayo",
      "Galway",
      "Sligo",
      "Roscommon"
    ],
    "answer": 0
  },
  {
    "q": "What is the county town of County Offaly?",
    "options": [
      "Tullamore",
      "Birr",
      "Edenderry",
      "Clara"
    ],
    "answer": 0
  },
  {
    "q": "Mount Errigal is in which county?",
    "options": [
      "Donegal",
      "Sligo",
      "Mayo",
      "Tyrone"
    ],
    "answer": 0
  },
  {
    "q": "Which county is known as the Forge County?",
    "options": [
      "Donegal",
      "Antrim",
      "Derry",
      "Tyrone"
    ],
    "answer": 0
  },
  {
    "q": "In which county is the Burren?",
    "options": [
      "Clare",
      "Galway",
      "Limerick",
      "Kerry"
    ],
    "answer": 0
  },
  {
    "q": "The River Foyle flows through which city?",
    "options": [
      "Derry",
      "Belfast",
      "Lisburn",
      "Strabane"
    ],
    "answer": 0
  },
  {
    "q": "What is the county town of County Meath?",
    "options": [
      "Navan",
      "Trim",
      "Kells",
      "Ashbourne"
    ],
    "answer": 0
  },
  {
    "q": "Which county is known as the Herring Gut?",
    "options": [
      "Down",
      "Antrim",
      "Wexford",
      "Louth"
    ],
    "answer": 0
  },
  {
    "q": "Lough Corrib lies mainly in which county?",
    "options": [
      "Galway",
      "Mayo",
      "Clare",
      "Roscommon"
    ],
    "answer": 0
  },
  {
    "q": "In which province is County Armagh?",
    "options": [
      "Ulster",
      "Leinster",
      "Connacht",
      "Munster"
    ],
    "answer": 0
  },
  {
    "q": "The Mizen Head is the most southerly point of which county?",
    "options": [
      "Cork",
      "Kerry",
      "Waterford",
      "Wexford"
    ],
    "answer": 0
  },
  {
    "q": "What is the county town of County Tyrone?",
    "options": [
      "Omagh",
      "Cookstown",
      "Dungannon",
      "Strabane"
    ],
    "answer": 0
  },
  {
    "q": "Which county is known as the Ridge County?",
    "options": [
      "Derry",
      "Tyrone",
      "Fermanagh",
      "Armagh"
    ],
    "answer": 0
  },
  {
    "q": "Inishbofin island lies off the coast of which county?",
    "options": [
      "Galway",
      "Donegal",
      "Mayo",
      "Sligo"
    ],
    "answer": 0
  },
  {
    "q": "The Sperrin Mountains lie mainly in which two counties?",
    "options": [
      "Tyrone and Derry",
      "Antrim and Down",
      "Fermanagh and Tyrone",
      "Armagh and Down"
    ],
    "answer": 0
  },
  {
    "q": "What is the county town of County Fermanagh?",
    "options": [
      "Enniskillen",
      "Lisnaskea",
      "Irvinestown",
      "Belleek"
    ],
    "answer": 0
  },
  {
    "q": "Which county is known as the Maple Leaf County?",
    "options": [
      "Derry",
      "Antrim",
      "Tyrone",
      "Armagh"
    ],
    "answer": 0
  },
  {
    "q": "The Saltee Islands lie off the coast of which county?",
    "options": [
      "Wexford",
      "Waterford",
      "Cork",
      "Wicklow"
    ],
    "answer": 0
  },
  {
    "q": "In which county is Glenveagh National Park?",
    "options": [
      "Donegal",
      "Mayo",
      "Kerry",
      "Wicklow"
    ],
    "answer": 0
  },
  {
    "q": "The River Lagan flows through which city?",
    "options": [
      "Belfast",
      "Lisburn",
      "Derry",
      "Armagh"
    ],
    "answer": 0
  },
  {
    "q": "What is the county town of County Antrim historically?",
    "options": [
      "Antrim",
      "Ballymena",
      "Carrickfergus",
      "Larne"
    ],
    "answer": 0
  },
  {
    "q": "Which county is known as the Granite County?",
    "options": [
      "Wicklow",
      "Down",
      "Donegal",
      "Galway"
    ],
    "answer": 0
  },
  {
    "q": "Strangford Lough lies in which county?",
    "options": [
      "Down",
      "Antrim",
      "Armagh",
      "Derry"
    ],
    "answer": 0
  },
  {
    "q": "In which province is County Galway?",
    "options": [
      "Connacht",
      "Munster",
      "Leinster",
      "Ulster"
    ],
    "answer": 0
  },
  {
    "q": "The Twelve Bens mountain range is in which region?",
    "options": [
      "Connemara",
      "The Burren",
      "Beara",
      "Iveragh"
    ],
    "answer": 0
  },
  {
    "q": "What is the county town of County Down historically?",
    "options": [
      "Downpatrick",
      "Newry",
      "Bangor",
      "Newtownards"
    ],
    "answer": 0
  },
  {
    "q": "Which county is known as the Slieveblooms county along with Laois?",
    "options": [
      "Offaly",
      "Tipperary",
      "Kildare",
      "Westmeath"
    ],
    "answer": 0
  },
  {
    "q": "Keem Bay is a famous beach on which island?",
    "options": [
      "Achill",
      "Aran",
      "Rathlin",
      "Valentia"
    ],
    "answer": 0
  },
  {
    "q": "In which county is the town of Carrick-on-Suir?",
    "options": [
      "Tipperary",
      "Waterford",
      "Kilkenny",
      "Cork"
    ],
    "answer": 0
  },
  {
    "q": "The River Erne flows into the sea at which town?",
    "options": [
      "Ballyshannon",
      "Bundoran",
      "Enniskillen",
      "Sligo"
    ],
    "answer": 0
  },
  {
    "q": "What is the county town of County Derry historically?",
    "options": [
      "Coleraine",
      "Derry",
      "Limavady",
      "Magherafelt"
    ],
    "answer": 0
  },
  {
    "q": "Which county borders the most other counties?",
    "options": [
      "Tipperary",
      "Cork",
      "Galway",
      "Offaly"
    ],
    "answer": 0
  },
  {
    "q": "Brandon Mountain is on which peninsula?",
    "options": [
      "Dingle Peninsula",
      "Iveragh Peninsula",
      "Beara Peninsula",
      "Sheep's Head"
    ],
    "answer": 0
  },
  {
    "q": "In which county is the town of Cobh?",
    "options": [
      "Cork",
      "Waterford",
      "Wexford",
      "Kerry"
    ],
    "answer": 0
  },
  {
    "q": "Which lough lies between Cavan, Fermanagh and Leitrim?",
    "options": [
      "Lough MacNean",
      "Lough Allen",
      "Lough Oughter",
      "Lough Sheelin"
    ],
    "answer": 0
  },
  {
    "q": "The Wild Atlantic Way begins or ends in which county to the north?",
    "options": [
      "Donegal",
      "Mayo",
      "Sligo",
      "Galway"
    ],
    "answer": 0
  },
  {
    "q": "In which county is the famous Inch Strand beach?",
    "options": [
      "Kerry",
      "Cork",
      "Clare",
      "Galway"
    ],
    "answer": 0
  },
  {
    "q": "The Knockmealdown Mountains lie between which two counties?",
    "options": [
      "Tipperary and Waterford",
      "Cork and Kerry",
      "Limerick and Tipperary",
      "Waterford and Cork"
    ],
    "answer": 0
  },
  {
    "q": "What is the county town of County Kildare?",
    "options": [
      "Naas",
      "Newbridge",
      "Kildare",
      "Athy"
    ],
    "answer": 0
  },
  {
    "q": "In which county is Mount Leinster?",
    "options": [
      "Carlow",
      "Wexford",
      "Wicklow",
      "Kilkenny"
    ],
    "answer": 0
  },
  {
    "q": "Clifden is the capital of which region?",
    "options": [
      "Connemara",
      "The Burren",
      "Inishowen",
      "Beara"
    ],
    "answer": 0
  },
  {
    "q": "The Inishowen Peninsula is in which county?",
    "options": [
      "Donegal",
      "Derry",
      "Antrim",
      "Tyrone"
    ],
    "answer": 0
  },
  {
    "q": "Malin Head, the most northerly point of the island, is in which county?",
    "options": [
      "Donegal",
      "Antrim",
      "Derry",
      "Mayo"
    ],
    "answer": 0
  },
  {
    "q": "In which county is the seaside town of Tramore?",
    "options": [
      "Waterford",
      "Wexford",
      "Cork",
      "Wicklow"
    ],
    "answer": 0
  },
  {
    "q": "Lough Leane is the largest of which lakes?",
    "options": [
      "Lakes of Killarney",
      "Lakes of Connemara",
      "Erne lakes",
      "Westmeath lakes"
    ],
    "answer": 0
  },
  {
    "q": "The Nephin Beg range lies in which county?",
    "options": [
      "Mayo",
      "Galway",
      "Sligo",
      "Donegal"
    ],
    "answer": 0
  },
  {
    "q": "In which county is the town of Birr?",
    "options": [
      "Offaly",
      "Tipperary",
      "Laois",
      "Westmeath"
    ],
    "answer": 0
  },
  {
    "q": "Which strand in Donegal is famous for surfing near Bundoran?",
    "options": [
      "Tullan Strand",
      "Inch Strand",
      "Curracloe",
      "Banna Strand"
    ],
    "answer": 0
  },
  {
    "q": "The River Bann is the longest river in which region?",
    "options": [
      "Northern Ireland",
      "Connacht",
      "Munster",
      "Leinster"
    ],
    "answer": 0
  },
  {
    "q": "In which county is the town of Athlone mostly located?",
    "options": [
      "Westmeath",
      "Roscommon",
      "Offaly",
      "Longford"
    ],
    "answer": 0
  },
  {
    "q": "Bere Island lies in which bay?",
    "options": [
      "Bantry Bay",
      "Dunmanus Bay",
      "Kenmare Bay",
      "Roaringwater Bay"
    ],
    "answer": 0
  },
  {
    "q": "Slieve League sea cliffs are in which county?",
    "options": [
      "Donegal",
      "Mayo",
      "Clare",
      "Antrim"
    ],
    "answer": 0
  },
  {
    "q": "In which county is the town of Killarney?",
    "options": [
      "Kerry",
      "Cork",
      "Limerick",
      "Clare"
    ],
    "answer": 0
  },
  {
    "q": "The town of Drogheda lies mostly in which county?",
    "options": [
      "Louth",
      "Meath",
      "Dublin",
      "Cavan"
    ],
    "answer": 0
  },
  {
    "q": "Curracloe beach, used in film, is in which county?",
    "options": [
      "Wexford",
      "Wicklow",
      "Waterford",
      "Dublin"
    ],
    "answer": 0
  },
  {
    "q": "In which county is the Glen of Aherlow?",
    "options": [
      "Tipperary",
      "Limerick",
      "Cork",
      "Waterford"
    ],
    "answer": 0
  },
  {
    "q": "Banna Strand, linked to Roger Casement, is in which county?",
    "options": [
      "Kerry",
      "Cork",
      "Clare",
      "Galway"
    ],
    "answer": 0
  },
  {
    "q": "The town of Carrickfergus is in which county?",
    "options": [
      "Antrim",
      "Down",
      "Derry",
      "Armagh"
    ],
    "answer": 0
  },
  {
    "q": "In which county is the village of Adare?",
    "options": [
      "Limerick",
      "Clare",
      "Tipperary",
      "Cork"
    ],
    "answer": 0
  },
  {
    "q": "Lough Allen, the first major lake on the Shannon, is in which county?",
    "options": [
      "Leitrim",
      "Cavan",
      "Roscommon",
      "Fermanagh"
    ],
    "answer": 0
  },
  {
    "q": "The Sheep's Head Peninsula is in which county?",
    "options": [
      "Cork",
      "Kerry",
      "Clare",
      "Waterford"
    ],
    "answer": 0
  },
  {
    "q": "In which county is the town of Bray?",
    "options": [
      "Wicklow",
      "Dublin",
      "Wexford",
      "Kildare"
    ],
    "answer": 0
  },
  {
    "q": "Dunmore East is a fishing village in which county?",
    "options": [
      "Waterford",
      "Wexford",
      "Cork",
      "Wicklow"
    ],
    "answer": 0
  },
  {
    "q": "The Maumturk Mountains are in which region?",
    "options": [
      "Connemara",
      "The Burren",
      "Inishowen",
      "Beara"
    ],
    "answer": 0
  },
  {
    "q": "In which county is the town of Carrickmacross?",
    "options": [
      "Monaghan",
      "Cavan",
      "Louth",
      "Meath"
    ],
    "answer": 0
  },
  {
    "q": "Garnish Island, with its gardens, lies in which bay?",
    "options": [
      "Bantry Bay",
      "Kenmare Bay",
      "Dunmanus Bay",
      "Roaringwater Bay"
    ],
    "answer": 0
  },
  {
    "q": "The River Slaney flows into the sea at which town?",
    "options": [
      "Wexford",
      "Arklow",
      "Gorey",
      "New Ross"
    ],
    "answer": 0
  },
  {
    "q": "In which county is the town of Clonakilty?",
    "options": [
      "Cork",
      "Kerry",
      "Waterford",
      "Wexford"
    ],
    "answer": 0
  },
  {
    "q": "Lough Conn and Lough Cullin lie in which county?",
    "options": [
      "Mayo",
      "Galway",
      "Sligo",
      "Roscommon"
    ],
    "answer": 0
  },
  {
    "q": "The Cooley Peninsula is in which county?",
    "options": [
      "Louth",
      "Down",
      "Meath",
      "Monaghan"
    ],
    "answer": 0
  },
  {
    "q": "In which county is the town of Kinsale?",
    "options": [
      "Cork",
      "Kerry",
      "Waterford",
      "Clare"
    ],
    "answer": 0
  },
  {
    "q": "Spanish Point beach is in which county?",
    "options": [
      "Clare",
      "Galway",
      "Mayo",
      "Kerry"
    ],
    "answer": 0
  },
  {
    "q": "The town of Ballina lies on which river?",
    "options": [
      "River Moy",
      "River Suck",
      "River Erne",
      "River Robe"
    ],
    "answer": 0
  },
  {
    "q": "In which county is the Doolough Valley?",
    "options": [
      "Mayo",
      "Galway",
      "Kerry",
      "Donegal"
    ],
    "answer": 0
  },
  {
    "q": "Loop Head peninsula is in which county?",
    "options": [
      "Clare",
      "Kerry",
      "Galway",
      "Limerick"
    ],
    "answer": 0
  },
  {
    "q": "The town of Carlow lies on which river?",
    "options": [
      "River Barrow",
      "River Nore",
      "River Slaney",
      "River Suir"
    ],
    "answer": 0
  },
  {
    "q": "In which county is the seaside town of Lahinch?",
    "options": [
      "Clare",
      "Galway",
      "Kerry",
      "Mayo"
    ],
    "answer": 0
  },
  {
    "q": "Devenish Island lies in which lough?",
    "options": [
      "Lower Lough Erne",
      "Lough Neagh",
      "Lough Gill",
      "Lough Allen"
    ],
    "answer": 0
  },
  {
    "q": "The Ox Mountains lie mainly in which county?",
    "options": [
      "Sligo",
      "Mayo",
      "Leitrim",
      "Roscommon"
    ],
    "answer": 0
  },
  {
    "q": "In which county is Bunratty Castle?",
    "options": [
      "Clare",
      "Limerick",
      "Galway",
      "Tipperary"
    ],
    "answer": 0
  },
  {
    "q": "On which rocky island off Kerry is an early Christian monastery and beehive huts?",
    "options": [
      "Skellig Michael",
      "Inishmore",
      "Tory Island",
      "Valentia"
    ],
    "answer": 0
  },
  {
    "q": "The Rock of Cashel is located in which county?",
    "options": [
      "Tipperary",
      "Kilkenny",
      "Cork",
      "Waterford"
    ],
    "answer": 0
  },
  {
    "q": "Glendalough monastic site is in which county?",
    "options": [
      "Wicklow",
      "Wexford",
      "Carlow",
      "Kildare"
    ],
    "answer": 0
  },
  {
    "q": "Clonmacnoise sits on the banks of which river?",
    "options": [
      "Shannon",
      "Liffey",
      "Boyne",
      "Barrow"
    ],
    "answer": 0
  },
  {
    "q": "What is the largest of the three Aran Islands?",
    "options": [
      "Inishmore",
      "Inishmaan",
      "Inisheer",
      "Inishbofin"
    ],
    "answer": 0
  },
  {
    "q": "The Ring of Kerry is a scenic drive around which peninsula?",
    "options": [
      "Iveragh",
      "Dingle",
      "Beara",
      "Mizen"
    ],
    "answer": 0
  },
  {
    "q": "The Burren, a karst limestone landscape, is mainly in which county?",
    "options": [
      "Clare",
      "Galway",
      "Limerick",
      "Tipperary"
    ],
    "answer": 0
  },
  {
    "q": "Which Dublin landmark is a former prison now a museum?",
    "options": [
      "Kilmainham Gaol",
      "Dublin Castle",
      "Christ Church",
      "The Custom House"
    ],
    "answer": 0
  },
  {
    "q": "Croke Park, the GAA stadium, is in which city?",
    "options": [
      "Dublin",
      "Cork",
      "Limerick",
      "Galway"
    ],
    "answer": 0
  },
  {
    "q": "The Poulnabrone Dolmen is found in which region?",
    "options": [
      "The Burren",
      "Connemara",
      "The Glens of Antrim",
      "The Comeraghs"
    ],
    "answer": 0
  },
  {
    "q": "Kylemore Abbey is set in which scenic region?",
    "options": [
      "Connemara",
      "The Burren",
      "Wicklow Mountains",
      "Glenveagh"
    ],
    "answer": 0
  },
  {
    "q": "In which county is Kylemore Abbey?",
    "options": [
      "Galway",
      "Mayo",
      "Donegal",
      "Clare"
    ],
    "answer": 0
  },
  {
    "q": "Trim Castle, the largest Norman castle in Ireland, is in which county?",
    "options": [
      "Meath",
      "Louth",
      "Kildare",
      "Westmeath"
    ],
    "answer": 0
  },
  {
    "q": "Which castle in Cork is famous for a stone said to give the gift of eloquence?",
    "options": [
      "Blarney Castle",
      "Bunratty Castle",
      "Cahir Castle",
      "Ross Castle"
    ],
    "answer": 0
  },
  {
    "q": "Ashford Castle, a luxury hotel, is on the shores of which lake?",
    "options": [
      "Lough Corrib",
      "Lough Derg",
      "Lough Ree",
      "Lough Neagh"
    ],
    "answer": 0
  },
  {
    "q": "The Dingle Peninsula is in which county?",
    "options": [
      "Kerry",
      "Cork",
      "Clare",
      "Limerick"
    ],
    "answer": 0
  },
  {
    "q": "Achill Island is connected to the mainland of which county by a bridge?",
    "options": [
      "Mayo",
      "Galway",
      "Sligo",
      "Donegal"
    ],
    "answer": 0
  },
  {
    "q": "What is Ireland's largest island?",
    "options": [
      "Achill Island",
      "Valentia Island",
      "Aranmore",
      "Tory Island"
    ],
    "answer": 0
  },
  {
    "q": "The Hook Lighthouse, one of the oldest in the world, is in which county?",
    "options": [
      "Wexford",
      "Waterford",
      "Wicklow",
      "Cork"
    ],
    "answer": 0
  },
  {
    "q": "Which national park surrounds the lakes near Killarney?",
    "options": [
      "Killarney National Park",
      "Connemara National Park",
      "Glenveagh National Park",
      "Wicklow Mountains National Park"
    ],
    "answer": 0
  },
  {
    "q": "Muckross House is found in which national park?",
    "options": [
      "Killarney",
      "Connemara",
      "Glenveagh",
      "Burren"
    ],
    "answer": 0
  },
  {
    "q": "Glenveagh National Park and Castle are in which county?",
    "options": [
      "Donegal",
      "Mayo",
      "Galway",
      "Sligo"
    ],
    "answer": 0
  },
  {
    "q": "Powerscourt Estate and Gardens are in which county?",
    "options": [
      "Wicklow",
      "Wexford",
      "Kildare",
      "Dublin"
    ],
    "answer": 0
  },
  {
    "q": "The Giant's Causeway is located in which county?",
    "options": [
      "Antrim",
      "Down",
      "Derry",
      "Tyrone"
    ],
    "answer": 0
  },
  {
    "q": "Which famous rope bridge in County Antrim crosses to a small island?",
    "options": [
      "Carrick-a-Rede",
      "Sky Bridge",
      "Mizen Head Bridge",
      "Ha'penny Bridge"
    ],
    "answer": 0
  },
  {
    "q": "The Ha'penny Bridge crosses which river in Dublin?",
    "options": [
      "Liffey",
      "Dodder",
      "Tolka",
      "Boyne"
    ],
    "answer": 0
  },
  {
    "q": "Newgrange is part of which UNESCO World Heritage complex?",
    "options": [
      "Brú na Bóinne",
      "Skellig Michael",
      "Céide Fields",
      "The Burren"
    ],
    "answer": 0
  },
  {
    "q": "The Céide Fields, an ancient Stone Age field system, are in which county?",
    "options": [
      "Mayo",
      "Sligo",
      "Galway",
      "Donegal"
    ],
    "answer": 0
  },
  {
    "q": "Which round tower and monastic site is found in County Kildare, associated with St Brigid?",
    "options": [
      "Kildare",
      "Glendalough",
      "Devenish",
      "Monasterboice"
    ],
    "answer": 0
  },
  {
    "q": "Monasterboice, famous for high crosses, is in which county?",
    "options": [
      "Louth",
      "Meath",
      "Cavan",
      "Monaghan"
    ],
    "answer": 0
  },
  {
    "q": "The Muiredach's High Cross is found at which site?",
    "options": [
      "Monasterboice",
      "Clonmacnoise",
      "Glendalough",
      "Kells"
    ],
    "answer": 0
  },
  {
    "q": "Mellifont Abbey, the first Cistercian monastery in Ireland, is in which county?",
    "options": [
      "Louth",
      "Meath",
      "Dublin",
      "Kildare"
    ],
    "answer": 0
  },
  {
    "q": "The Spire of Dublin stands on which street?",
    "options": [
      "O'Connell Street",
      "Grafton Street",
      "Dame Street",
      "Henry Street"
    ],
    "answer": 0
  },
  {
    "q": "Which Dublin park is one of the largest enclosed city parks in Europe?",
    "options": [
      "Phoenix Park",
      "St Stephen's Green",
      "Merrion Square",
      "Herbert Park"
    ],
    "answer": 0
  },
  {
    "q": "Dublin Zoo is located in which park?",
    "options": [
      "Phoenix Park",
      "St Stephen's Green",
      "Iveagh Gardens",
      "Marlay Park"
    ],
    "answer": 0
  },
  {
    "q": "Croagh Patrick, a pilgrimage mountain, overlooks which bay?",
    "options": [
      "Clew Bay",
      "Galway Bay",
      "Donegal Bay",
      "Bantry Bay"
    ],
    "answer": 0
  },
  {
    "q": "Croagh Patrick is in which county?",
    "options": [
      "Mayo",
      "Galway",
      "Sligo",
      "Donegal"
    ],
    "answer": 0
  },
  {
    "q": "The Cliffs of Moher visitor centre is near which village?",
    "options": [
      "Liscannor",
      "Doolin",
      "Lahinch",
      "Ennistymon"
    ],
    "answer": 0
  },
  {
    "q": "O'Brien's Tower stands at which Irish attraction?",
    "options": [
      "Cliffs of Moher",
      "Rock of Cashel",
      "Blarney Castle",
      "Slieve League"
    ],
    "answer": 0
  },
  {
    "q": "Slieve League, among Europe's highest sea cliffs, is in which county?",
    "options": [
      "Donegal",
      "Mayo",
      "Clare",
      "Kerry"
    ],
    "answer": 0
  },
  {
    "q": "Which scenic coastal route in Connemara is known as the Sky Road?",
    "options": [
      "Clifden",
      "Roundstone",
      "Letterfrack",
      "Cong"
    ],
    "answer": 0
  },
  {
    "q": "Lough Gur, a noted archaeological site with a stone circle, is in which county?",
    "options": [
      "Limerick",
      "Tipperary",
      "Clare",
      "Cork"
    ],
    "answer": 0
  },
  {
    "q": "The Drombeg Stone Circle is found in which county?",
    "options": [
      "Cork",
      "Kerry",
      "Clare",
      "Waterford"
    ],
    "answer": 0
  },
  {
    "q": "St Patrick's Cathedral, the largest cathedral in Ireland, is in which city?",
    "options": [
      "Dublin",
      "Armagh",
      "Cork",
      "Cashel"
    ],
    "answer": 0
  },
  {
    "q": "The Titanic Belfast visitor attraction stands near the former shipyard of which company?",
    "options": [
      "Harland and Wolff",
      "Cammell Laird",
      "John Brown",
      "Swan Hunter"
    ],
    "answer": 0
  },
  {
    "q": "Valentia Island is connected by a bridge to the mainland of which county?",
    "options": [
      "Kerry",
      "Cork",
      "Clare",
      "Galway"
    ],
    "answer": 0
  },
  {
    "q": "Which island off Cork was a major emigration departure point and is reached from Cobh?",
    "options": [
      "Spike Island",
      "Sherkin Island",
      "Cape Clear",
      "Bere Island"
    ],
    "answer": 0
  },
  {
    "q": "Cape Clear Island, Ireland's southernmost inhabited island, is in which county?",
    "options": [
      "Cork",
      "Kerry",
      "Waterford",
      "Wexford"
    ],
    "answer": 0
  },
  {
    "q": "The Skellig Islands are home to large colonies of which seabird?",
    "options": [
      "Gannets",
      "Puffins only",
      "Cormorants",
      "Terns"
    ],
    "answer": 0
  },
  {
    "q": "Dún Aonghasa, a prehistoric stone fort, is on which island?",
    "options": [
      "Inishmore",
      "Inishbofin",
      "Achill",
      "Tory"
    ],
    "answer": 0
  },
  {
    "q": "Which prehistoric monument near Sligo is one of the largest megalithic cemeteries in Ireland?",
    "options": [
      "Carrowmore",
      "Newgrange",
      "Knowth",
      "Loughcrew"
    ],
    "answer": 0
  },
  {
    "q": "The Loughcrew Cairns passage tombs are in which county?",
    "options": [
      "Meath",
      "Cavan",
      "Westmeath",
      "Louth"
    ],
    "answer": 0
  },
  {
    "q": "Knowth and Dowth are passage tombs near which more famous tomb?",
    "options": [
      "Newgrange",
      "Carrowmore",
      "Loughcrew",
      "Poulnabrone"
    ],
    "answer": 0
  },
  {
    "q": "The Gap of Dunloe is a mountain pass in which county?",
    "options": [
      "Kerry",
      "Cork",
      "Wicklow",
      "Galway"
    ],
    "answer": 0
  },
  {
    "q": "Ross Castle stands beside which lake in Killarney?",
    "options": [
      "Lough Leane",
      "Muckross Lake",
      "Upper Lake",
      "Lough Currane"
    ],
    "answer": 0
  },
  {
    "q": "The Cobh waterfront cathedral is dedicated to which saint?",
    "options": [
      "St Colman",
      "St Patrick",
      "St Finbarr",
      "St Declan"
    ],
    "answer": 0
  },
  {
    "q": "St Fin Barre's Cathedral, with three spires, is in which city?",
    "options": [
      "Cork",
      "Limerick",
      "Waterford",
      "Kilkenny"
    ],
    "answer": 0
  },
  {
    "q": "King John's Castle stands on the River Shannon in which city?",
    "options": [
      "Limerick",
      "Athlone",
      "Cork",
      "Galway"
    ],
    "answer": 0
  },
  {
    "q": "Athlone Castle guards a crossing of which river?",
    "options": [
      "Shannon",
      "Boyne",
      "Barrow",
      "Suir"
    ],
    "answer": 0
  },
  {
    "q": "Cahir Castle, one of Ireland's largest, is in which county?",
    "options": [
      "Tipperary",
      "Cork",
      "Waterford",
      "Limerick"
    ],
    "answer": 0
  },
  {
    "q": "Kilkenny Castle was long the seat of which powerful family?",
    "options": [
      "Butler",
      "Fitzgerald",
      "O'Brien",
      "Burke"
    ],
    "answer": 0
  },
  {
    "q": "The medieval Rock of Cashel was traditionally seat of the kings of which province?",
    "options": [
      "Munster",
      "Leinster",
      "Connacht",
      "Ulster"
    ],
    "answer": 0
  },
  {
    "q": "Cong, a village famous as a film location for The Quiet Man, lies in which county?",
    "options": [
      "Mayo",
      "Galway",
      "Roscommon",
      "Sligo"
    ],
    "answer": 0
  },
  {
    "q": "Connemara National Park is overlooked by which mountain?",
    "options": [
      "Diamond Hill",
      "Mweelrea",
      "Errigal",
      "Carrauntoohil"
    ],
    "answer": 0
  },
  {
    "q": "Mount Errigal is the highest peak in which mountain range?",
    "options": [
      "Derryveagh",
      "MacGillycuddy's Reeks",
      "Twelve Bens",
      "Mourne"
    ],
    "answer": 0
  },
  {
    "q": "Carrauntoohil, Ireland's highest mountain, is in which range?",
    "options": [
      "MacGillycuddy's Reeks",
      "Twelve Bens",
      "Mourne Mountains",
      "Galtees"
    ],
    "answer": 0
  },
  {
    "q": "The Mourne Mountains are in which county?",
    "options": [
      "Down",
      "Antrim",
      "Armagh",
      "Tyrone"
    ],
    "answer": 0
  },
  {
    "q": "Which lough in Northern Ireland is the largest lake in the British Isles?",
    "options": [
      "Lough Neagh",
      "Lough Erne",
      "Lough Foyle",
      "Strangford Lough"
    ],
    "answer": 0
  },
  {
    "q": "The Marble Arch Caves are in which county?",
    "options": [
      "Fermanagh",
      "Tyrone",
      "Cavan",
      "Leitrim"
    ],
    "answer": 0
  },
  {
    "q": "Devenish Island, with a round tower, is in which lough?",
    "options": [
      "Lower Lough Erne",
      "Lough Neagh",
      "Lough Foyle",
      "Strangford Lough"
    ],
    "answer": 0
  },
  {
    "q": "The Aillwee Cave is a show cave located in which region?",
    "options": [
      "The Burren",
      "Connemara",
      "Wicklow",
      "Glens of Antrim"
    ],
    "answer": 0
  },
  {
    "q": "Doolin is well known as a departure point for ferries to which islands?",
    "options": [
      "Aran Islands",
      "Skellig Islands",
      "Blasket Islands",
      "Saltee Islands"
    ],
    "answer": 0
  },
  {
    "q": "The Great Blasket Island lies off which peninsula?",
    "options": [
      "Dingle",
      "Iveragh",
      "Beara",
      "Mizen"
    ],
    "answer": 0
  },
  {
    "q": "The Saltee Islands, a bird sanctuary, lie off which county?",
    "options": [
      "Wexford",
      "Waterford",
      "Wicklow",
      "Cork"
    ],
    "answer": 0
  },
  {
    "q": "Brú na Bóinne is located in the valley of which river?",
    "options": [
      "Boyne",
      "Shannon",
      "Liffey",
      "Suir"
    ],
    "answer": 0
  },
  {
    "q": "The Wild Atlantic Way is a coastal touring route along which coast of Ireland?",
    "options": [
      "West",
      "East",
      "South",
      "North"
    ],
    "answer": 0
  },
  {
    "q": "Approximately how long is the Wild Atlantic Way?",
    "options": [
      "2,500 km",
      "500 km",
      "1,000 km",
      "4,000 km"
    ],
    "answer": 0
  },
  {
    "q": "Mizen Head, a noted signal station, is the most southwesterly point of which county?",
    "options": [
      "Cork",
      "Kerry",
      "Waterford",
      "Clare"
    ],
    "answer": 0
  },
  {
    "q": "Malin Head, Ireland's most northerly point, is in which county?",
    "options": [
      "Donegal",
      "Antrim",
      "Derry",
      "Mayo"
    ],
    "answer": 0
  },
  {
    "q": "The Fanad Head Lighthouse is in which county?",
    "options": [
      "Donegal",
      "Antrim",
      "Mayo",
      "Sligo"
    ],
    "answer": 0
  },
  {
    "q": "Bantry House overlooks which bay?",
    "options": [
      "Bantry Bay",
      "Dingle Bay",
      "Clew Bay",
      "Galway Bay"
    ],
    "answer": 0
  },
  {
    "q": "Garinish Island, known for its gardens, lies in which bay?",
    "options": [
      "Bantry Bay",
      "Galway Bay",
      "Clew Bay",
      "Dublin Bay"
    ],
    "answer": 0
  },
  {
    "q": "The National Botanic Gardens are located in which Dublin suburb?",
    "options": [
      "Glasnevin",
      "Rathmines",
      "Clontarf",
      "Dundrum"
    ],
    "answer": 0
  },
  {
    "q": "Which Dublin cemetery is the resting place of many famous Irish figures, near the Botanic Gardens?",
    "options": [
      "Glasnevin",
      "Mount Jerome",
      "Deansgrange",
      "Shanganagh"
    ],
    "answer": 0
  },
  {
    "q": "The Japanese Gardens and the National Stud are located in which county?",
    "options": [
      "Kildare",
      "Meath",
      "Wicklow",
      "Dublin"
    ],
    "answer": 0
  },
  {
    "q": "Birr Castle, famous for its giant historic telescope, is in which county?",
    "options": [
      "Offaly",
      "Laois",
      "Westmeath",
      "Tipperary"
    ],
    "answer": 0
  },
  {
    "q": "The Rock of Dunamase, a ruined hilltop fortress, is in which county?",
    "options": [
      "Laois",
      "Offaly",
      "Kildare",
      "Carlow"
    ],
    "answer": 0
  },
  {
    "q": "The Brownshill Dolmen, with one of Europe's heaviest capstones, is in which county?",
    "options": [
      "Carlow",
      "Kilkenny",
      "Wexford",
      "Wicklow"
    ],
    "answer": 0
  },
  {
    "q": "Which medieval city is known for its Viking Triangle and the Waterford Crystal visitor centre?",
    "options": [
      "Waterford",
      "Wexford",
      "Kilkenny",
      "Cork"
    ],
    "answer": 0
  },
  {
    "q": "Reginald's Tower, the oldest civic building in Ireland, is in which city?",
    "options": [
      "Waterford",
      "Dublin",
      "Cork",
      "Limerick"
    ],
    "answer": 0
  },
  {
    "q": "The Spanish Arch is a well-known landmark in which city?",
    "options": [
      "Galway",
      "Cork",
      "Limerick",
      "Waterford"
    ],
    "answer": 0
  },
  {
    "q": "Eyre Square is a central public space in which city?",
    "options": [
      "Galway",
      "Cork",
      "Limerick",
      "Sligo"
    ],
    "answer": 0
  },
  {
    "q": "Lismore Castle, with renowned gardens, is in which county?",
    "options": [
      "Waterford",
      "Cork",
      "Tipperary",
      "Kilkenny"
    ],
    "answer": 0
  },
  {
    "q": "Glenariff, often called the Queen of the Glens, is in which county?",
    "options": [
      "Antrim",
      "Down",
      "Derry",
      "Tyrone"
    ],
    "answer": 0
  },
  {
    "q": "The Dark Hedges, a famous beech tree avenue, are in which county?",
    "options": [
      "Antrim",
      "Down",
      "Derry",
      "Armagh"
    ],
    "answer": 0
  },
  {
    "q": "Dunluce Castle, a dramatic clifftop ruin, is in which county?",
    "options": [
      "Antrim",
      "Down",
      "Derry",
      "Donegal"
    ],
    "answer": 0
  },
  {
    "q": "The walled city famous for its intact 17th-century walls is which Northern Ireland city?",
    "options": [
      "Derry",
      "Belfast",
      "Armagh",
      "Lisburn"
    ],
    "answer": 0
  },
  {
    "q": "Navan Fort (Emain Macha), an ancient royal site, is near which city?",
    "options": [
      "Armagh",
      "Belfast",
      "Newry",
      "Lisburn"
    ],
    "answer": 0
  },
  {
    "q": "The Hill of Slane, where St Patrick is said to have lit a paschal fire, is in which county?",
    "options": [
      "Meath",
      "Louth",
      "Cavan",
      "Westmeath"
    ],
    "answer": 0
  },
  {
    "q": "Slane Castle is well known as a venue for large outdoor what?",
    "options": [
      "Concerts",
      "Horse races",
      "Air shows",
      "Marathons"
    ],
    "answer": 0
  },
  {
    "q": "The Japanese-style Powerscourt Waterfall is the highest waterfall in which country?",
    "options": [
      "Ireland",
      "Scotland",
      "Wales",
      "England"
    ],
    "answer": 0
  },
  {
    "q": "The Wicklow Way is a long-distance walking trail mainly through which mountains?",
    "options": [
      "Wicklow Mountains",
      "Comeragh Mountains",
      "Galtee Mountains",
      "Blackstairs Mountains"
    ],
    "answer": 0
  },
  {
    "q": "Glendalough's name means the valley of how many lakes?",
    "options": [
      "Two",
      "One",
      "Three",
      "Five"
    ],
    "answer": 0
  },
  {
    "q": "The Round Tower at Glendalough was associated with which monastic founder?",
    "options": [
      "St Kevin",
      "St Kieran",
      "St Enda",
      "St Finbarr"
    ],
    "answer": 0
  },
  {
    "q": "Clonmacnoise was founded by which saint?",
    "options": [
      "St Ciarán",
      "St Kevin",
      "St Columba",
      "St Brendan"
    ],
    "answer": 0
  },
  {
    "q": "Glencolmcille, a rural Gaeltacht area with a folk village, is in which county?",
    "options": [
      "Donegal",
      "Mayo",
      "Galway",
      "Kerry"
    ],
    "answer": 0
  },
  {
    "q": "Clare Island, in Clew Bay, is associated with which famous pirate queen?",
    "options": [
      "Grace O'Malley",
      "Anne Bonny",
      "Maeve",
      "Brigid"
    ],
    "answer": 0
  },
  {
    "q": "The Old Head of Kinsale, a famous golf links and headland, is in which county?",
    "options": [
      "Cork",
      "Kerry",
      "Waterford",
      "Wexford"
    ],
    "answer": 0
  },
  {
    "q": "Charles Fort, a star-shaped fortification, guards the harbour of which Cork town?",
    "options": [
      "Kinsale",
      "Cobh",
      "Youghal",
      "Bandon"
    ],
    "answer": 0
  },
  {
    "q": "The Vee Pass scenic drive runs through which mountains?",
    "options": [
      "Knockmealdown",
      "Comeragh",
      "Galtee",
      "Slieve Bloom"
    ],
    "answer": 0
  },
  {
    "q": "Lough Tay in Wicklow is often nicknamed the what Lake?",
    "options": [
      "Guinness",
      "Black",
      "Silver",
      "Mirror"
    ],
    "answer": 0
  },
  {
    "q": "Dún Laoghaire is best known for its large what?",
    "options": [
      "Harbour",
      "Castle",
      "Cathedral",
      "Round tower"
    ],
    "answer": 0
  },
  {
    "q": "The James Joyce Tower and Museum, a Martello tower, is at which seaside place?",
    "options": [
      "Sandycove",
      "Howth",
      "Bray",
      "Greystones"
    ],
    "answer": 0
  },
  {
    "q": "Howth Head and its cliff walk overlook which bay?",
    "options": [
      "Dublin Bay",
      "Galway Bay",
      "Clew Bay",
      "Bantry Bay"
    ],
    "answer": 0
  },
  {
    "q": "Dalkey Island lies off the coast of which county?",
    "options": [
      "Dublin",
      "Wicklow",
      "Louth",
      "Meath"
    ],
    "answer": 0
  },
  {
    "q": "Ireland's Eye is a small island off which Dublin coastal town?",
    "options": [
      "Howth",
      "Bray",
      "Skerries",
      "Malahide"
    ],
    "answer": 0
  },
  {
    "q": "Malahide Castle, set in parkland, is in which county?",
    "options": [
      "Dublin",
      "Meath",
      "Louth",
      "Kildare"
    ],
    "answer": 0
  },
  {
    "q": "The seaside resort of Bray, with its promenade, is in which county?",
    "options": [
      "Wicklow",
      "Dublin",
      "Wexford",
      "Carlow"
    ],
    "answer": 0
  },
  {
    "q": "Bray Head and Greystones are connected by a famous what walk?",
    "options": [
      "Cliff",
      "Bog",
      "Canal",
      "Forest"
    ],
    "answer": 0
  },
  {
    "q": "The Hellfire Club ruin sits atop which Dublin mountain?",
    "options": [
      "Montpelier Hill",
      "Three Rock",
      "Kippure",
      "Djouce"
    ],
    "answer": 0
  },
  {
    "q": "EPIC The Irish Emigration Museum is located in which Dublin area?",
    "options": [
      "CHQ Building docklands",
      "Temple Bar",
      "Phoenix Park",
      "Smithfield"
    ],
    "answer": 0
  },
  {
    "q": "The Guinness Storehouse is located at which Dublin brewery site?",
    "options": [
      "St James's Gate",
      "Smithfield",
      "Liberties Hall",
      "Marrowbone"
    ],
    "answer": 0
  },
  {
    "q": "The Jameson Distillery visitor experience in Dublin is located in which area?",
    "options": [
      "Bow Street Smithfield",
      "Temple Bar",
      "Ballsbridge",
      "Rathmines"
    ],
    "answer": 0
  },
  {
    "q": "Russborough House, a Palladian mansion, is in which county?",
    "options": [
      "Wicklow",
      "Kildare",
      "Meath",
      "Dublin"
    ],
    "answer": 0
  },
  {
    "q": "Castletown House, Ireland's largest Palladian country house, is in which county?",
    "options": [
      "Kildare",
      "Meath",
      "Dublin",
      "Wicklow"
    ],
    "answer": 0
  },
  {
    "q": "The Strokestown Park House and Famine Museum are in which county?",
    "options": [
      "Roscommon",
      "Longford",
      "Leitrim",
      "Galway"
    ],
    "answer": 0
  },
  {
    "q": "Lough Key Forest Park is in which county?",
    "options": [
      "Roscommon",
      "Leitrim",
      "Sligo",
      "Cavan"
    ],
    "answer": 0
  },
  {
    "q": "Knock Shrine, a major Marian pilgrimage site, is in which county?",
    "options": [
      "Mayo",
      "Galway",
      "Roscommon",
      "Sligo"
    ],
    "answer": 0
  },
  {
    "q": "Benbulben, a distinctive flat-topped mountain linked to W B Yeats, is in which county?",
    "options": [
      "Sligo",
      "Leitrim",
      "Donegal",
      "Mayo"
    ],
    "answer": 0
  },
  {
    "q": "W B Yeats is buried in a churchyard at Drumcliffe in which county?",
    "options": [
      "Sligo",
      "Galway",
      "Dublin",
      "Mayo"
    ],
    "answer": 0
  },
  {
    "q": "The Caves of Keash are in which county?",
    "options": [
      "Sligo",
      "Leitrim",
      "Roscommon",
      "Mayo"
    ],
    "answer": 0
  },
  {
    "q": "The Doolough Valley scenic drive is in which county?",
    "options": [
      "Mayo",
      "Galway",
      "Donegal",
      "Kerry"
    ],
    "answer": 0
  },
  {
    "q": "Keem Bay, a popular beach, is on which island?",
    "options": [
      "Achill",
      "Inishmore",
      "Valentia",
      "Tory"
    ],
    "answer": 0
  },
  {
    "q": "The Healy Pass winds through which peninsula?",
    "options": [
      "Beara",
      "Iveragh",
      "Dingle",
      "Mizen"
    ],
    "answer": 0
  },
  {
    "q": "Gougane Barra, a scenic glacial valley with a tiny island church, is in which county?",
    "options": [
      "Cork",
      "Kerry",
      "Limerick",
      "Tipperary"
    ],
    "answer": 0
  },
  {
    "q": "Torc Waterfall is found in which national park?",
    "options": [
      "Killarney",
      "Connemara",
      "Glenveagh",
      "Wicklow Mountains"
    ],
    "answer": 0
  },
  {
    "q": "Ladies View is a famous scenic viewpoint on which route?",
    "options": [
      "Ring of Kerry",
      "Ring of Beara",
      "Sky Road",
      "Causeway Coast"
    ],
    "answer": 0
  },
  {
    "q": "Staigue Fort, a well-preserved ring fort, is in which county?",
    "options": [
      "Kerry",
      "Cork",
      "Clare",
      "Galway"
    ],
    "answer": 0
  },
  {
    "q": "The medieval Quin Abbey friary is in which county?",
    "options": [
      "Clare",
      "Limerick",
      "Tipperary",
      "Galway"
    ],
    "answer": 0
  },
  {
    "q": "Roscrea and Holycross Abbey are notable monastic sites in which county?",
    "options": [
      "Tipperary",
      "Offaly",
      "Laois",
      "Kilkenny"
    ],
    "answer": 0
  },
  {
    "q": "Jerpoint Abbey, a noted Cistercian ruin, is in which county?",
    "options": [
      "Kilkenny",
      "Carlow",
      "Wexford",
      "Tipperary"
    ],
    "answer": 0
  },
  {
    "q": "Tintern Abbey, named after its Welsh counterpart, is in which county?",
    "options": [
      "Wexford",
      "Wicklow",
      "Carlow",
      "Waterford"
    ],
    "answer": 0
  },
  {
    "q": "The Irish National Heritage Park is located in which county?",
    "options": [
      "Wexford",
      "Waterford",
      "Kilkenny",
      "Carlow"
    ],
    "answer": 0
  },
  {
    "q": "Hook Head and the Hook Peninsula form part of which county's coast?",
    "options": [
      "Wexford",
      "Waterford",
      "Wicklow",
      "Cork"
    ],
    "answer": 0
  },
  {
    "q": "The Copper Coast UNESCO Global Geopark is located in which county?",
    "options": [
      "Waterford",
      "Wexford",
      "Cork",
      "Wicklow"
    ],
    "answer": 0
  },
  {
    "q": "Cong Abbey ruins are linked to which High King of Ireland's final years?",
    "options": [
      "Rory O'Connor",
      "Brian Boru",
      "Niall",
      "Turlough"
    ],
    "answer": 0
  },
  {
    "q": "The Aran island of Inisheer is the smallest and closest to which county?",
    "options": [
      "Clare",
      "Galway",
      "Mayo",
      "Kerry"
    ],
    "answer": 0
  },
  {
    "q": "Which UNESCO World Heritage Site in Ireland was used as a Star Wars filming location?",
    "options": [
      "Skellig Michael",
      "Newgrange",
      "Giant's Causeway",
      "Rock of Cashel"
    ],
    "answer": 0
  },
  {
    "q": "The Burren and Cliffs of Moher together form what kind of designated area?",
    "options": [
      "UNESCO Global Geopark",
      "National Park",
      "Marine Reserve",
      "Biosphere only"
    ],
    "answer": 0
  },
  {
    "q": "St Kevin's Bed is a feature associated with which monastic valley?",
    "options": [
      "Glendalough",
      "Clonmacnoise",
      "Glenstal",
      "Glencolmcille"
    ],
    "answer": 0
  },
  {
    "q": "The Doo Lough and the Sheeffry Hills are scenic features of which county?",
    "options": [
      "Mayo",
      "Galway",
      "Sligo",
      "Donegal"
    ],
    "answer": 0
  },
  {
    "q": "Lough Hyne, a marine nature reserve and saltwater lake, is in which county?",
    "options": [
      "Cork",
      "Kerry",
      "Waterford",
      "Clare"
    ],
    "answer": 0
  },
  {
    "q": "Fota Wildlife Park and Fota House are located on an island in which harbour?",
    "options": [
      "Cork Harbour",
      "Galway Bay",
      "Dublin Bay",
      "Waterford Harbour"
    ],
    "answer": 0
  },
  {
    "q": "The seaside town of Tramore is in which county?",
    "options": [
      "Waterford",
      "Wexford",
      "Cork",
      "Wicklow"
    ],
    "answer": 0
  },
  {
    "q": "Mount Stewart, a National Trust house and gardens, is on the shore of which lough?",
    "options": [
      "Strangford Lough",
      "Lough Neagh",
      "Lough Erne",
      "Belfast Lough"
    ],
    "answer": 0
  },
  {
    "q": "In what year was the Battle of Clontarf fought?",
    "options": [
      "1014",
      "1066",
      "988",
      "1169"
    ],
    "answer": 0
  },
  {
    "q": "Which High King of Ireland was killed at the Battle of Clontarf?",
    "options": [
      "Brian Boru",
      "Niall of the Nine Hostages",
      "Rory O'Connor",
      "Diarmait MacMurrough"
    ],
    "answer": 0
  },
  {
    "q": "In what year did the Normans first invade Ireland?",
    "options": [
      "1169",
      "1014",
      "1100",
      "1250"
    ],
    "answer": 0
  },
  {
    "q": "Which Norman leader is famously associated with the 1170 invasion of Ireland?",
    "options": [
      "Strongbow",
      "William Marshal",
      "John de Courcy",
      "Hugh de Lacy"
    ],
    "answer": 0
  },
  {
    "q": "What was 'Strongbow' the nickname of?",
    "options": [
      "Richard de Clare",
      "Henry II",
      "Maurice FitzGerald",
      "Raymond le Gros"
    ],
    "answer": 0
  },
  {
    "q": "In what year did the Battle of the Boyne take place?",
    "options": [
      "1690",
      "1689",
      "1691",
      "1641"
    ],
    "answer": 0
  },
  {
    "q": "The Battle of the Boyne was fought between King William III and which deposed king?",
    "options": [
      "James II",
      "Charles I",
      "Charles II",
      "Henry VIII"
    ],
    "answer": 0
  },
  {
    "q": "The Flight of the Earls occurred in which year?",
    "options": [
      "1607",
      "1601",
      "1641",
      "1690"
    ],
    "answer": 0
  },
  {
    "q": "Which two Gaelic earls led the Flight of the Earls?",
    "options": [
      "O'Neill and O'Donnell",
      "O'Brien and O'Connor",
      "FitzGerald and Butler",
      "MacCarthy and O'Sullivan"
    ],
    "answer": 0
  },
  {
    "q": "What was the ancient system of native Irish law called?",
    "options": [
      "Brehon law",
      "Salic law",
      "Common law",
      "Canon law"
    ],
    "answer": 0
  },
  {
    "q": "The Hill of Tara was traditionally associated with which role?",
    "options": [
      "Seat of the High Kings",
      "A Viking trading port",
      "A Norman castle",
      "A monastic school"
    ],
    "answer": 0
  },
  {
    "q": "Which county is the Hill of Tara located in?",
    "options": [
      "Meath",
      "Kildare",
      "Dublin",
      "Louth"
    ],
    "answer": 0
  },
  {
    "q": "Who is traditionally credited with bringing Christianity to Ireland in the 5th century?",
    "options": [
      "St Patrick",
      "St Brigid",
      "St Columba",
      "St Brendan"
    ],
    "answer": 0
  },
  {
    "q": "Which Irish saint founded the monastery on the island of Iona in Scotland?",
    "options": [
      "St Columba (Colmcille)",
      "St Patrick",
      "St Kevin",
      "St Finbarr"
    ],
    "answer": 0
  },
  {
    "q": "St Kevin founded which famous monastic settlement in County Wicklow?",
    "options": [
      "Glendalough",
      "Clonmacnoise",
      "Monasterboice",
      "Kells"
    ],
    "answer": 0
  },
  {
    "q": "The famous monastery of Clonmacnoise sits on the banks of which river?",
    "options": [
      "The Shannon",
      "The Liffey",
      "The Boyne",
      "The Lee"
    ],
    "answer": 0
  },
  {
    "q": "Which famous illuminated manuscript is associated with an Irish monastery?",
    "options": [
      "The Book of Kells",
      "The Domesday Book",
      "The Magna Carta",
      "The Bayeux Tapestry"
    ],
    "answer": 0
  },
  {
    "q": "The Book of Kells is housed in which institution today?",
    "options": [
      "Trinity College Dublin",
      "The National Museum",
      "Dublin Castle",
      "Christ Church Cathedral"
    ],
    "answer": 0
  },
  {
    "q": "Which Viking town in the south-east of Ireland was founded around 914 AD?",
    "options": [
      "Waterford",
      "Cork",
      "Galway",
      "Sligo"
    ],
    "answer": 0
  },
  {
    "q": "Which of these cities was founded as a Viking settlement?",
    "options": [
      "Limerick",
      "Kilkenny",
      "Armagh",
      "Cashel"
    ],
    "answer": 0
  },
  {
    "q": "Which south-eastern town was a Viking settlement whose name derives from Norse?",
    "options": [
      "Wexford",
      "Wicklow",
      "Dundalk",
      "Naas"
    ],
    "answer": 0
  },
  {
    "q": "The area around Dublin under English control in the late medieval period was known as what?",
    "options": [
      "The Pale",
      "The Marches",
      "The Liberty",
      "The Shire"
    ],
    "answer": 0
  },
  {
    "q": "Which English military and political leader campaigned brutally in Ireland from 1649?",
    "options": [
      "Oliver Cromwell",
      "Robert Devereux",
      "Charles I",
      "Lord Mountjoy"
    ],
    "answer": 0
  },
  {
    "q": "Cromwell's forces carried out a notorious massacre in 1649 at which town?",
    "options": [
      "Drogheda",
      "Wexford",
      "Cork",
      "Galway"
    ],
    "answer": 0
  },
  {
    "q": "The Plantation of Ulster, settling English and Scots, began in which century?",
    "options": [
      "17th century",
      "16th century",
      "15th century",
      "18th century"
    ],
    "answer": 0
  },
  {
    "q": "The 1641 Rebellion broke out primarily in which province?",
    "options": [
      "Ulster",
      "Munster",
      "Leinster",
      "Connacht"
    ],
    "answer": 0
  },
  {
    "q": "Which Irish chieftain led resistance to the English in the Nine Years' War (1593-1603)?",
    "options": [
      "Hugh O'Neill, Earl of Tyrone",
      "Owen Roe O'Neill",
      "Patrick Sarsfield",
      "Shane O'Neill"
    ],
    "answer": 0
  },
  {
    "q": "The Nine Years' War ended with a decisive Gaelic defeat at which 1601 battle?",
    "options": [
      "Battle of Kinsale",
      "Battle of the Yellow Ford",
      "Battle of Aughrim",
      "Battle of Benburb"
    ],
    "answer": 0
  },
  {
    "q": "At the Battle of Kinsale, which foreign power had sent troops to aid the Irish?",
    "options": [
      "Spain",
      "France",
      "Portugal",
      "The Netherlands"
    ],
    "answer": 0
  },
  {
    "q": "Which Irish king of Leinster invited the Normans to Ireland?",
    "options": [
      "Diarmait MacMurrough",
      "Rory O'Connor",
      "Brian Boru",
      "Turlough O'Connor"
    ],
    "answer": 0
  },
  {
    "q": "Who was the last High King of Ireland before the Norman invasion?",
    "options": [
      "Rory O'Connor",
      "Diarmait MacMurrough",
      "Brian Boru",
      "Muirchertach"
    ],
    "answer": 0
  },
  {
    "q": "Which English king led an expedition to Ireland in 1171 to assert royal authority?",
    "options": [
      "Henry II",
      "Richard I",
      "John",
      "William I"
    ],
    "answer": 0
  },
  {
    "q": "The Siege of Limerick in 1690-1691 was famously defended by which Irish leader?",
    "options": [
      "Patrick Sarsfield",
      "Hugh O'Neill",
      "Owen Roe O'Neill",
      "Brian Boru"
    ],
    "answer": 0
  },
  {
    "q": "The Treaty of Limerick, ending the Williamite War, was signed in which year?",
    "options": [
      "1691",
      "1690",
      "1689",
      "1695"
    ],
    "answer": 0
  },
  {
    "q": "The decisive battle of the Williamite War after the Boyne was fought in 1691 at which place?",
    "options": [
      "Aughrim",
      "Kinsale",
      "Clontarf",
      "Benburb"
    ],
    "answer": 0
  },
  {
    "q": "Which monastic site in County Louth is famous for its high crosses?",
    "options": [
      "Monasterboice",
      "Glendalough",
      "Clonmacnoise",
      "Skellig Michael"
    ],
    "answer": 0
  },
  {
    "q": "The remote island monastery of Skellig Michael lies off the coast of which county?",
    "options": [
      "Kerry",
      "Cork",
      "Clare",
      "Donegal"
    ],
    "answer": 0
  },
  {
    "q": "Which Irish saint is celebrated on 1 February and associated with Kildare?",
    "options": [
      "St Brigid",
      "St Ita",
      "St Dymphna",
      "St Gobnait"
    ],
    "answer": 0
  },
  {
    "q": "What did the Vikings call their fortified harbour settlement in Ireland?",
    "options": [
      "A longphort",
      "A ringfort",
      "A crannog",
      "A motte"
    ],
    "answer": 0
  },
  {
    "q": "Newgrange, a famous Neolithic passage tomb, is located in which valley?",
    "options": [
      "Boyne Valley",
      "Glen of Aherlow",
      "Vale of Avoca",
      "Golden Vale"
    ],
    "answer": 0
  },
  {
    "q": "Roughly how old is the Neolithic monument at Newgrange?",
    "options": [
      "About 5,000 years",
      "About 1,000 years",
      "About 2,000 years",
      "About 10,000 years"
    ],
    "answer": 0
  },
  {
    "q": "Newgrange is famously aligned with the sunrise on which day of the year?",
    "options": [
      "Winter solstice",
      "Summer solstice",
      "Spring equinox",
      "St Patrick's Day"
    ],
    "answer": 0
  },
  {
    "q": "The Celts are generally thought to have arrived in Ireland during which age?",
    "options": [
      "The Iron Age",
      "The Stone Age",
      "The Bronze Age",
      "The Middle Ages"
    ],
    "answer": 0
  },
  {
    "q": "Which language did the Celts who settled Ireland speak, ancestor of modern Irish?",
    "options": [
      "Goidelic (Gaelic)",
      "Latin",
      "Brythonic only",
      "Norse"
    ],
    "answer": 0
  },
  {
    "q": "Under Brehon law, what was the practice of fostering children of nobles called?",
    "options": [
      "Fosterage",
      "Gavelkind",
      "Tanistry",
      "Wardship"
    ],
    "answer": 0
  },
  {
    "q": "The Gaelic system for choosing a successor to a chieftain was known as what?",
    "options": [
      "Tanistry",
      "Primogeniture",
      "Feudalism",
      "Coyne and livery"
    ],
    "answer": 0
  },
  {
    "q": "Which Tudor monarch's reign saw the conquest and plantation of much of Ireland?",
    "options": [
      "Elizabeth I",
      "Henry VII",
      "Edward VI",
      "Mary I"
    ],
    "answer": 0
  },
  {
    "q": "Henry VIII was declared 'King of Ireland' by the Irish Parliament in which year?",
    "options": [
      "1541",
      "1509",
      "1601",
      "1607"
    ],
    "answer": 0
  },
  {
    "q": "The first major English plantation in Ireland was in which province in the 1580s?",
    "options": [
      "Munster",
      "Ulster",
      "Connacht",
      "Leinster"
    ],
    "answer": 0
  },
  {
    "q": "Which Gaelic leader famously won the Battle of Benburb in 1646?",
    "options": [
      "Owen Roe O'Neill",
      "Hugh O'Neill",
      "Patrick Sarsfield",
      "Rory O'Donnell"
    ],
    "answer": 0
  },
  {
    "q": "Which body governed Confederate Ireland from 1642, based in Kilkenny?",
    "options": [
      "The Confederation of Kilkenny",
      "The Irish Parliament",
      "The Pale Council",
      "The Privy Council"
    ],
    "answer": 0
  },
  {
    "q": "The dominant Anglo-Norman family in Munster held which earldom?",
    "options": [
      "Earl of Desmond",
      "Earl of Kildare",
      "Earl of Ormond",
      "Earl of Tyrone"
    ],
    "answer": 0
  },
  {
    "q": "Which powerful Anglo-Norman family were the Earls of Kildare?",
    "options": [
      "The FitzGeralds",
      "The Butlers",
      "The de Burghs",
      "The de Lacys"
    ],
    "answer": 0
  },
  {
    "q": "The Butler family held which earldom centred on Kilkenny?",
    "options": [
      "Earl of Ormond",
      "Earl of Desmond",
      "Earl of Kildare",
      "Earl of Ulster"
    ],
    "answer": 0
  },
  {
    "q": "The Statutes of Kilkenny (1366) were laws aimed at preventing what?",
    "options": [
      "English settlers adopting Irish customs",
      "Viking raids",
      "Norman castle building",
      "The spread of Christianity"
    ],
    "answer": 0
  },
  {
    "q": "Which Norman knight built many castles and conquered much of Ulster in the 1170s?",
    "options": [
      "John de Courcy",
      "Strongbow",
      "Hugh de Lacy",
      "William Marshal"
    ],
    "answer": 0
  },
  {
    "q": "What type of early Norman fortification consisted of a mound topped by a tower?",
    "options": [
      "Motte and bailey",
      "Round tower",
      "Ringfort",
      "Crannog"
    ],
    "answer": 0
  },
  {
    "q": "Which Irish High King is said to have defeated the Vikings at Clontarf?",
    "options": [
      "Brian Boru",
      "Mael Sechnaill",
      "Cormac mac Airt",
      "Niall Glundub"
    ],
    "answer": 0
  },
  {
    "q": "Brian Boru came from which dynasty of Munster?",
    "options": [
      "Dal gCais",
      "Ui Neill",
      "Eoganacht",
      "Dal Riata"
    ],
    "answer": 0
  },
  {
    "q": "What was the name of the great national assembly traditionally held at Tara?",
    "options": [
      "The Feis of Tara",
      "The Oireachtas",
      "The Dail",
      "The Moot"
    ],
    "answer": 0
  },
  {
    "q": "Which legendary warrior leads the Fianna in Irish mythology?",
    "options": [
      "Fionn mac Cumhaill",
      "Cu Chulainn",
      "Conn of the Hundred Battles",
      "Lugh"
    ],
    "answer": 0
  },
  {
    "q": "The Tain Bo Cuailnge is an epic tale centred on which hero?",
    "options": [
      "Cu Chulainn",
      "Fionn mac Cumhaill",
      "Oisin",
      "Diarmuid"
    ],
    "answer": 0
  },
  {
    "q": "In the Tain, which queen leads an army to steal a prize bull?",
    "options": [
      "Queen Medb of Connacht",
      "Queen Maeve of Ulster",
      "Grainne",
      "Deirdre"
    ],
    "answer": 0
  },
  {
    "q": "Which ancient ceremonial royal site is in County Armagh, seat of Ulster kings?",
    "options": [
      "Emain Macha (Navan Fort)",
      "Cruachan",
      "Dun Ailinne",
      "Cashel"
    ],
    "answer": 0
  },
  {
    "q": "The Rock of Cashel was the traditional seat of the kings of which province?",
    "options": [
      "Munster",
      "Leinster",
      "Ulster",
      "Connacht"
    ],
    "answer": 0
  },
  {
    "q": "What were the small circular fortified farmsteads common in early medieval Ireland called?",
    "options": [
      "Ringforts",
      "Mottes",
      "Longphorts",
      "Cashels only"
    ],
    "answer": 0
  },
  {
    "q": "A 'crannog' in early Ireland was a dwelling built where?",
    "options": [
      "On an artificial island in a lake",
      "On a hilltop",
      "In a cave",
      "On a coastal cliff"
    ],
    "answer": 0
  },
  {
    "q": "Which Viking leader's dynasty ruled Dublin in the 10th century?",
    "options": [
      "The Ui Imair (descendants of Ivar)",
      "The house of Cnut",
      "The Jarls of Orkney",
      "The sons of Ragnar"
    ],
    "answer": 0
  },
  {
    "q": "What name did the Irish give to the Norse and Norse-Gaelic settlers?",
    "options": [
      "Ostmen",
      "Saxons",
      "Galls only meaning Normans",
      "Danes only"
    ],
    "answer": 0
  },
  {
    "q": "The Synod of Whitby (664) involved a dispute over practices including which Irish tradition?",
    "options": [
      "The dating of Easter",
      "Clerical marriage",
      "The use of Latin",
      "Pilgrimage"
    ],
    "answer": 0
  },
  {
    "q": "Which saint is associated with founding the monastery of Bangor in County Down?",
    "options": [
      "St Comgall",
      "St Patrick",
      "St Malachy",
      "St Brendan"
    ],
    "answer": 0
  },
  {
    "q": "St Brendan the Navigator is legendary for a voyage in search of what?",
    "options": [
      "A promised land across the ocean",
      "The Holy Grail",
      "The North Star",
      "Lost relics of St Patrick"
    ],
    "answer": 0
  },
  {
    "q": "Which Irish missionary founded monasteries on the continent including Bobbio in Italy?",
    "options": [
      "St Columbanus",
      "St Columba",
      "St Gall",
      "St Aidan"
    ],
    "answer": 0
  },
  {
    "q": "St Aidan, an Irish monk from Iona, founded a monastery at which English site?",
    "options": [
      "Lindisfarne",
      "Canterbury",
      "York",
      "Glastonbury"
    ],
    "answer": 0
  },
  {
    "q": "The High Cross is a distinctive feature of early Irish what?",
    "options": [
      "Monasteries",
      "Viking towns",
      "Norman castles",
      "Royal palaces"
    ],
    "answer": 0
  },
  {
    "q": "The annals of medieval Ireland were primarily recorded by whom?",
    "options": [
      "Monks",
      "Bards alone",
      "Norman clerks",
      "Viking traders"
    ],
    "answer": 0
  },
  {
    "q": "The Annals of the Four Masters were compiled in the early 17th century in which county?",
    "options": [
      "Donegal",
      "Galway",
      "Cork",
      "Kildare"
    ],
    "answer": 0
  },
  {
    "q": "Which battle of 1014 is regarded as breaking Viking power in Ireland?",
    "options": [
      "Clontarf",
      "Tara",
      "Sulcoit",
      "Glenmama"
    ],
    "answer": 0
  },
  {
    "q": "Which Munster town did Brian Boru's brother Mathgamain capture from the Norse?",
    "options": [
      "Limerick",
      "Cork",
      "Waterford",
      "Wexford"
    ],
    "answer": 0
  },
  {
    "q": "The Norman invasion of Ireland began with a landing in 1169 in which county?",
    "options": [
      "Wexford",
      "Waterford",
      "Cork",
      "Dublin"
    ],
    "answer": 0
  },
  {
    "q": "Strongbow married Aoife, the daughter of which Irish king?",
    "options": [
      "Diarmait MacMurrough",
      "Rory O'Connor",
      "Brian Boru",
      "Donnchad"
    ],
    "answer": 0
  },
  {
    "q": "After Strongbow's death, who became the great Norman lord of Leinster by marriage?",
    "options": [
      "William Marshal",
      "John de Courcy",
      "Hugh de Lacy",
      "Henry II"
    ],
    "answer": 0
  },
  {
    "q": "Dublin Castle was established as a centre of English administration under which king?",
    "options": [
      "King John",
      "Henry II",
      "Henry VIII",
      "Edward I"
    ],
    "answer": 0
  },
  {
    "q": "The Treaty of Windsor (1175) recognised which Irish king as ruler of unconquered Ireland?",
    "options": [
      "Rory O'Connor",
      "Diarmait MacMurrough",
      "Brian Boru",
      "Turlough O'Brien"
    ],
    "answer": 0
  },
  {
    "q": "In 1315 Edward Bruce invaded Ireland; he was the brother of which Scottish king?",
    "options": [
      "Robert the Bruce",
      "David II",
      "James I",
      "Malcolm"
    ],
    "answer": 0
  },
  {
    "q": "Edward Bruce was killed in 1318 at which battle near Dundalk?",
    "options": [
      "Battle of Faughart",
      "Battle of Athenry",
      "Battle of Dysert O'Dea",
      "Battle of Callan"
    ],
    "answer": 0
  },
  {
    "q": "The Black Death reached Ireland in which decade?",
    "options": [
      "1340s",
      "1290s",
      "1380s",
      "1410s"
    ],
    "answer": 0
  },
  {
    "q": "Which Gaelic Irish leader famously rebelled against Elizabeth I in Munster in the 1570s-80s?",
    "options": [
      "Gerald FitzGerald, Earl of Desmond",
      "Hugh O'Neill",
      "Shane O'Neill",
      "Red Hugh O'Donnell"
    ],
    "answer": 0
  },
  {
    "q": "The 'Surrender and Regrant' policy of the Tudors asked Gaelic lords to do what?",
    "options": [
      "Give up lands to the Crown and receive them back as English titles",
      "Convert to Catholicism",
      "Move to England",
      "Pay tribute to the Pope"
    ],
    "answer": 0
  },
  {
    "q": "Which Gaelic chieftain of Tyrone challenged the English in the 1560s, known as 'the Proud'?",
    "options": [
      "Shane O'Neill",
      "Hugh O'Neill",
      "Conn O'Neill",
      "Turlough O'Neill"
    ],
    "answer": 0
  },
  {
    "q": "Red Hugh O'Donnell was a leader of the Gaelic forces in which war?",
    "options": [
      "The Nine Years' War",
      "The Desmond Rebellions",
      "The Williamite War",
      "The 1641 Rebellion"
    ],
    "answer": 0
  },
  {
    "q": "At which 1598 battle did Hugh O'Neill win a major victory over the English?",
    "options": [
      "The Yellow Ford",
      "Kinsale",
      "Aughrim",
      "Benburb"
    ],
    "answer": 0
  },
  {
    "q": "The Plantation of Ulster mainly settled people from England and where?",
    "options": [
      "Scotland",
      "Wales",
      "France",
      "The Netherlands"
    ],
    "answer": 0
  },
  {
    "q": "The City of London companies developed a plantation around which renamed Ulster town?",
    "options": [
      "Londonderry",
      "Belfast",
      "Armagh",
      "Coleraine"
    ],
    "answer": 0
  },
  {
    "q": "The 1641 Rebellion was led by Gaelic Irish nobles fearful of losing land to whom?",
    "options": [
      "Protestant settlers",
      "Norman barons",
      "Viking traders",
      "Spanish soldiers"
    ],
    "answer": 0
  },
  {
    "q": "Cromwell arrived in Ireland in which year to crush the Confederate and Royalist forces?",
    "options": [
      "1649",
      "1641",
      "1660",
      "1690"
    ],
    "answer": 0
  },
  {
    "q": "Cromwell's land settlement forced many Irish landowners to move west of which river?",
    "options": [
      "The Shannon",
      "The Boyne",
      "The Liffey",
      "The Barrow"
    ],
    "answer": 0
  },
  {
    "q": "The phrase associated with Cromwellian transplantation was 'To Hell or to' where?",
    "options": [
      "Connacht",
      "Munster",
      "Ulster",
      "America"
    ],
    "answer": 0
  },
  {
    "q": "Which king was restored to the throne in 1660 after the Cromwellian period?",
    "options": [
      "Charles II",
      "James II",
      "William III",
      "Charles I"
    ],
    "answer": 0
  },
  {
    "q": "King James II, defeated at the Boyne, was a member of which royal house?",
    "options": [
      "The House of Stuart",
      "The House of Tudor",
      "The House of Hanover",
      "The House of Orange"
    ],
    "answer": 0
  },
  {
    "q": "William III, victor at the Boyne, is also known by which title?",
    "options": [
      "William of Orange",
      "William the Conqueror",
      "William Rufus",
      "William the Lion"
    ],
    "answer": 0
  },
  {
    "q": "After the Treaty of Limerick (1691), many Irish soldiers left for the continent in what event?",
    "options": [
      "The Flight of the Wild Geese",
      "The Flight of the Earls",
      "The Great Migration",
      "The Plantation"
    ],
    "answer": 0
  },
  {
    "q": "Which Jacobite cavalry leader famously raided the Williamite siege train at Ballyneety?",
    "options": [
      "Patrick Sarsfield",
      "Richard Talbot",
      "Owen Roe O'Neill",
      "Hugh Dubh O'Neill"
    ],
    "answer": 0
  },
  {
    "q": "Which Catholic Lord Deputy of Ireland served King James II, known as Tyrconnell?",
    "options": [
      "Richard Talbot",
      "Patrick Sarsfield",
      "Justin McCarthy",
      "Conrad von Rosen"
    ],
    "answer": 0
  },
  {
    "q": "The Siege of Derry in 1689 is remembered for the cry of which defenders?",
    "options": [
      "No surrender",
      "God save the king",
      "Remember Limerick",
      "For God and Ulster"
    ],
    "answer": 0
  },
  {
    "q": "During the 1689 Siege of Derry, apprentice boys famously did what?",
    "options": [
      "Shut the city gates",
      "Burned the cathedral",
      "Surrendered the keys",
      "Opened the harbour"
    ],
    "answer": 0
  },
  {
    "q": "Which river did King William's forces cross to defeat James II in 1690?",
    "options": [
      "The Boyne",
      "The Shannon",
      "The Liffey",
      "The Foyle"
    ],
    "answer": 0
  },
  {
    "q": "Which ogham-inscribed stones provide some of the earliest written Irish?",
    "options": [
      "Standing stones with edge notches",
      "Round tower lintels",
      "High cross bases",
      "Crannog posts"
    ],
    "answer": 0
  },
  {
    "q": "Ogham, the early Irish alphabet, was usually carved along what part of a stone?",
    "options": [
      "The edge",
      "The flat face only",
      "The base",
      "The top"
    ],
    "answer": 0
  },
  {
    "q": "Which sacred royal inauguration stone stood on the Hill of Tara?",
    "options": [
      "The Lia Fail (Stone of Destiny)",
      "The Blarney Stone",
      "The Turoe Stone",
      "The Stone of Scone"
    ],
    "answer": 0
  },
  {
    "q": "The Gaelic festival marking the start of summer was known as what?",
    "options": [
      "Bealtaine",
      "Samhain",
      "Imbolc",
      "Lughnasa"
    ],
    "answer": 0
  },
  {
    "q": "The Gaelic festival of Samhain marked the beginning of which season?",
    "options": [
      "Winter",
      "Summer",
      "Spring",
      "Autumn"
    ],
    "answer": 0
  },
  {
    "q": "Which Gaelic harvest festival is associated with the god Lugh?",
    "options": [
      "Lughnasa",
      "Samhain",
      "Bealtaine",
      "Imbolc"
    ],
    "answer": 0
  },
  {
    "q": "In Irish mythology, the supernatural race defeated at the Battle of Mag Tuired were the?",
    "options": [
      "Fomorians",
      "Milesians",
      "Fir Bolg",
      "Tuatha de Danann"
    ],
    "answer": 0
  },
  {
    "q": "The Tuatha de Danann were said to be skilled in what?",
    "options": [
      "Magic and craft",
      "Seafaring trade",
      "Farming alone",
      "Castle building"
    ],
    "answer": 0
  },
  {
    "q": "According to legend, which people were the last mythical invaders, ancestors of the Gaels?",
    "options": [
      "The Milesians",
      "The Fir Bolg",
      "The Fomorians",
      "The Tuatha de Danann"
    ],
    "answer": 0
  },
  {
    "q": "Which order of learned poets held high status in Gaelic society?",
    "options": [
      "The filidh (bards)",
      "The brehons only",
      "The druids only",
      "The monks"
    ],
    "answer": 0
  },
  {
    "q": "What was the unit of currency or value used to pay fines under Brehon law?",
    "options": [
      "Cattle (and silver)",
      "Gold coins",
      "Land grants",
      "Tributes of grain only"
    ],
    "answer": 0
  },
  {
    "q": "Which legendary 3rd-century High King is associated with the golden age of Tara?",
    "options": [
      "Cormac mac Airt",
      "Niall of the Nine Hostages",
      "Brian Boru",
      "Conn Cetchathach"
    ],
    "answer": 0
  },
  {
    "q": "Niall of the Nine Hostages is said to have founded which great dynasty?",
    "options": [
      "The Ui Neill",
      "The Eoganacht",
      "The Dal gCais",
      "The O'Connors"
    ],
    "answer": 0
  },
  {
    "q": "Which county contains the prehistoric royal site of Rathcroghan (Cruachan)?",
    "options": [
      "Roscommon",
      "Sligo",
      "Galway",
      "Mayo"
    ],
    "answer": 0
  },
  {
    "q": "The Ardagh Chalice, a masterpiece of early Irish metalwork, dates from which period?",
    "options": [
      "8th century",
      "12th century",
      "16th century",
      "5th century"
    ],
    "answer": 0
  },
  {
    "q": "The Tara Brooch is a famous example of early medieval Irish what?",
    "options": [
      "Metalwork",
      "Manuscript illumination",
      "Stone carving",
      "Weaving"
    ],
    "answer": 0
  },
  {
    "q": "Which English monarch's break with Rome led to the dissolution of Irish monasteries?",
    "options": [
      "Henry VIII",
      "Elizabeth I",
      "Edward VI",
      "Henry VII"
    ],
    "answer": 0
  },
  {
    "q": "Poynings' Law (1494) restricted the power of which body?",
    "options": [
      "The Irish Parliament",
      "The Gaelic chieftains",
      "The monasteries",
      "The Norman lords"
    ],
    "answer": 0
  },
  {
    "q": "Which Earl of Kildare effectively ruled Ireland as Lord Deputy around 1500?",
    "options": [
      "Gerald FitzGerald, the Great Earl",
      "Thomas Butler",
      "Hugh O'Neill",
      "James FitzMaurice"
    ],
    "answer": 0
  },
  {
    "q": "The rebellion of 'Silken Thomas' FitzGerald against the Crown occurred in which decade?",
    "options": [
      "1530s",
      "1560s",
      "1590s",
      "1640s"
    ],
    "answer": 0
  },
  {
    "q": "Which Gaelic clan dominated the kingdom of Tyrconnell (Donegal)?",
    "options": [
      "The O'Donnells",
      "The O'Neills",
      "The MacCarthys",
      "The O'Briens"
    ],
    "answer": 0
  },
  {
    "q": "The O'Neills were the great Gaelic clan of which Ulster territory?",
    "options": [
      "Tyrone",
      "Donegal",
      "Down",
      "Antrim"
    ],
    "answer": 0
  },
  {
    "q": "Grace O'Malley, the famous 16th-century 'pirate queen', was based in which county?",
    "options": [
      "Mayo",
      "Galway",
      "Donegal",
      "Cork"
    ],
    "answer": 0
  },
  {
    "q": "Grace O'Malley reputedly met which monarch in 1593?",
    "options": [
      "Elizabeth I",
      "Mary I",
      "James I",
      "Henry VIII"
    ],
    "answer": 0
  },
  {
    "q": "Which battle in 1690 saw James II flee Ireland shortly afterwards for France?",
    "options": [
      "The Boyne",
      "Aughrim",
      "Limerick",
      "Derry"
    ],
    "answer": 0
  },
  {
    "q": "The two Sieges of Limerick took place during which conflict?",
    "options": [
      "The Williamite War",
      "The Nine Years' War",
      "The Cromwellian conquest",
      "The Desmond Rebellions"
    ],
    "answer": 0
  },
  {
    "q": "Which Irish town's name comes from the Norse for 'wind fjord' or similar?",
    "options": [
      "Wexford",
      "Wicklow",
      "Carlingford",
      "Strangford"
    ],
    "answer": 0
  },
  {
    "q": "The bishopric and round tower town of Glendalough flourished from which era?",
    "options": [
      "Early medieval (6th century onward)",
      "Norman period",
      "Tudor period",
      "Viking founding only"
    ],
    "answer": 0
  },
  {
    "q": "Which famous Irish abbey founded in 1142 was the first Cistercian house in Ireland?",
    "options": [
      "Mellifont Abbey",
      "Jerpoint Abbey",
      "Holy Cross Abbey",
      "Bective Abbey"
    ],
    "answer": 0
  },
  {
    "q": "Mellifont Abbey was founded under the influence of which Irish church reformer?",
    "options": [
      "St Malachy",
      "St Laurence O'Toole",
      "St Patrick",
      "St Columba"
    ],
    "answer": 0
  },
  {
    "q": "Who was Archbishop of Dublin at the time of the Norman capture of the city in 1170?",
    "options": [
      "St Laurence O'Toole",
      "St Malachy",
      "Gregory",
      "John Comyn"
    ],
    "answer": 0
  },
  {
    "q": "Which 1607 event marked the effective end of the old Gaelic aristocratic order in Ulster?",
    "options": [
      "The Flight of the Earls",
      "The Battle of Kinsale",
      "The Plantation of Ulster",
      "The Treaty of Mellifont"
    ],
    "answer": 0
  },
  {
    "q": "The Treaty of Mellifont (1603) saw Hugh O'Neill submit to which English authority?",
    "options": [
      "The Crown of King James I",
      "Oliver Cromwell",
      "Queen Mary",
      "The Pope"
    ],
    "answer": 0
  },
  {
    "q": "Confederate Ireland in the 1640s fought largely in support of which cause?",
    "options": [
      "Catholic rights and King Charles I",
      "Cromwell's Parliament",
      "Scottish Presbyterians",
      "Spanish rule"
    ],
    "answer": 0
  },
  {
    "q": "Which long earthwork in Ulster was an ancient frontier defence, partly surviving today?",
    "options": [
      "The Black Pig's Dyke",
      "Offa's Dyke",
      "The Antonine Wall",
      "The Giant's Causeway"
    ],
    "answer": 0
  },
  {
    "q": "Which 12th-century document, the 'Laudabiliter', allegedly granted Ireland to Henry II?",
    "options": [
      "A papal bull",
      "A royal charter",
      "A treaty",
      "A monastic decree"
    ],
    "answer": 0
  },
  {
    "q": "The Pope who supposedly issued Laudabiliter, Adrian IV, was notable as the only what?",
    "options": [
      "English pope",
      "Irish pope",
      "French pope",
      "Norman pope"
    ],
    "answer": 0
  },
  {
    "q": "Which Gaelic Irish poet tradition praised chieftains in formal verse for centuries?",
    "options": [
      "Bardic poetry",
      "Sean-nos singing only",
      "Keening only",
      "Plainchant"
    ],
    "answer": 0
  },
  {
    "q": "Which medieval Irish kingdom did the O'Brien dynasty rule, centred on Munster?",
    "options": [
      "Thomond",
      "Desmond",
      "Ormond",
      "Tyrconnell"
    ],
    "answer": 0
  },
  {
    "q": "The Williamite War in Ireland was part of a wider European conflict known as the?",
    "options": [
      "Nine Years' War (War of the Grand Alliance)",
      "Thirty Years' War",
      "Hundred Years' War",
      "War of the Spanish Succession"
    ],
    "answer": 0
  },
  {
    "q": "Which type of monk's tall structure served as a bell tower and refuge in Irish monasteries?",
    "options": [
      "Round tower",
      "Keep",
      "Motte",
      "Spire"
    ],
    "answer": 0
  },
  {
    "q": "Which Viking-founded city lies at the mouth of the River Suir?",
    "options": [
      "Waterford",
      "Limerick",
      "Cork",
      "Wexford"
    ],
    "answer": 0
  },
  {
    "q": "Reginald's Tower, a Viking-origin landmark, stands in which Irish city?",
    "options": [
      "Waterford",
      "Dublin",
      "Cork",
      "Limerick"
    ],
    "answer": 0
  },
  {
    "q": "The fertile lowland territory of the Pale was centred around which two main towns?",
    "options": [
      "Dublin and Drogheda",
      "Cork and Limerick",
      "Galway and Sligo",
      "Belfast and Armagh"
    ],
    "answer": 0
  },
  {
    "q": "Which mythological cycle of Irish tales centres on Fionn mac Cumhaill?",
    "options": [
      "The Fenian Cycle",
      "The Ulster Cycle",
      "The Mythological Cycle",
      "The Cycle of the Kings"
    ],
    "answer": 0
  },
  {
    "q": "Which cycle of Irish legend includes the deeds of Cu Chulainn?",
    "options": [
      "The Ulster Cycle",
      "The Fenian Cycle",
      "The Mythological Cycle",
      "The Historical Cycle"
    ],
    "answer": 0
  },
  {
    "q": "The Battle of the Boyne was fought in which year?",
    "options": [
      "1690",
      "1641",
      "1715",
      "1745"
    ],
    "answer": 0
  },
  {
    "q": "Which two kings fought at the Battle of the Boyne?",
    "options": [
      "William of Orange and James II",
      "George I and James II",
      "Charles II and Cromwell",
      "Henry VIII and James I"
    ],
    "answer": 0
  },
  {
    "q": "The 1691 treaty that ended the Williamite War in Ireland was the Treaty of which city?",
    "options": [
      "Limerick",
      "Galway",
      "Athlone",
      "Cork"
    ],
    "answer": 0
  },
  {
    "q": "The flight of Irish soldiers to continental Europe after 1691 became known as the Flight of the what?",
    "options": [
      "Wild Geese",
      "Earls",
      "Swans",
      "Eagles"
    ],
    "answer": 0
  },
  {
    "q": "The Penal Laws in 18th-century Ireland primarily discriminated against which group?",
    "options": [
      "Catholics",
      "Methodists",
      "Quakers",
      "Jews"
    ],
    "answer": 0
  },
  {
    "q": "Under the Penal Laws, Catholics were barred from sitting in which body?",
    "options": [
      "The Irish Parliament",
      "The town markets",
      "The army only",
      "Local guilds only"
    ],
    "answer": 0
  },
  {
    "q": "Henry Grattan is associated with securing legislative independence for the Irish Parliament in which year?",
    "options": [
      "1782",
      "1690",
      "1801",
      "1829"
    ],
    "answer": 0
  },
  {
    "q": "Grattan's Parliament met in which city?",
    "options": [
      "Dublin",
      "Belfast",
      "Cork",
      "Kilkenny"
    ],
    "answer": 0
  },
  {
    "q": "The Society of United Irishmen was founded in 1791 in which city?",
    "options": [
      "Belfast",
      "Dublin",
      "Wexford",
      "Derry"
    ],
    "answer": 0
  },
  {
    "q": "Who is regarded as the founding father of Irish republicanism and a leader of the United Irishmen?",
    "options": [
      "Theobald Wolfe Tone",
      "Robert Emmet",
      "Daniel O'Connell",
      "Charles Parnell"
    ],
    "answer": 0
  },
  {
    "q": "The 1798 Rebellion in Ireland was led chiefly by which organisation?",
    "options": [
      "The United Irishmen",
      "The Fenians",
      "The Land League",
      "The Orange Order"
    ],
    "answer": 0
  },
  {
    "q": "The most famous battle of the 1798 Rebellion in County Wexford was fought at which hill?",
    "options": [
      "Vinegar Hill",
      "Tara Hill",
      "Slievenamon",
      "Croagh Patrick"
    ],
    "answer": 0
  },
  {
    "q": "Wolfe Tone sought military assistance for the United Irishmen from which country?",
    "options": [
      "France",
      "Spain",
      "America",
      "Russia"
    ],
    "answer": 0
  },
  {
    "q": "A French expedition aiding the United Irishmen famously landed at Killala Bay in which county in 1798?",
    "options": [
      "Mayo",
      "Cork",
      "Kerry",
      "Donegal"
    ],
    "answer": 0
  },
  {
    "q": "Wolfe Tone died in 1798 while a prisoner, reportedly by which means?",
    "options": [
      "Self-inflicted throat wound",
      "Hanging",
      "Firing squad",
      "Drowning"
    ],
    "answer": 0
  },
  {
    "q": "The Act of Union, merging the Irish and British parliaments, took effect in which year?",
    "options": [
      "1801",
      "1798",
      "1782",
      "1829"
    ],
    "answer": 0
  },
  {
    "q": "Under the Act of Union, the Irish Parliament was abolished and Ireland sent MPs to which parliament?",
    "options": [
      "Westminster",
      "Edinburgh",
      "Versailles",
      "Belfast"
    ],
    "answer": 0
  },
  {
    "q": "Robert Emmet led a short-lived rebellion in Dublin in which year?",
    "options": [
      "1803",
      "1798",
      "1828",
      "1848"
    ],
    "answer": 0
  },
  {
    "q": "Robert Emmet is famous for a speech delivered from the dock ending with a request that no man write his what?",
    "options": [
      "Epitaph",
      "Will",
      "Pardon",
      "Eulogy"
    ],
    "answer": 0
  },
  {
    "q": "Catholic Emancipation, allowing Catholics to sit in Parliament, was achieved in which year?",
    "options": [
      "1829",
      "1801",
      "1798",
      "1845"
    ],
    "answer": 0
  },
  {
    "q": "Which organisation did Daniel O'Connell found to campaign for Catholic Emancipation?",
    "options": [
      "The Catholic Association",
      "The Land League",
      "The Repeal Association",
      "The Gaelic League"
    ],
    "answer": 0
  },
  {
    "q": "Daniel O'Connell won a famous by-election in 1828 in which county, triggering Emancipation?",
    "options": [
      "Clare",
      "Kerry",
      "Cork",
      "Limerick"
    ],
    "answer": 0
  },
  {
    "q": "After Emancipation, O'Connell campaigned to repeal which act?",
    "options": [
      "The Act of Union",
      "The Penal Laws",
      "The Corn Laws",
      "The Poor Law"
    ],
    "answer": 0
  },
  {
    "q": "O'Connell's huge open-air rallies for Repeal were nicknamed what?",
    "options": [
      "Monster meetings",
      "Mass rallies",
      "Green gatherings",
      "Tara assemblies"
    ],
    "answer": 0
  },
  {
    "q": "A planned monster meeting in 1843 was banned by the government at which historic site?",
    "options": [
      "Clontarf",
      "Tara",
      "Croke Park",
      "Glendalough"
    ],
    "answer": 0
  },
  {
    "q": "The Tithe War of the 1830s was a protest against payments to which church?",
    "options": [
      "The Church of Ireland",
      "The Catholic Church",
      "The Presbyterian Church",
      "The Methodist Church"
    ],
    "answer": 0
  },
  {
    "q": "The blight that destroyed the potato crop during the Great Famine was caused by what type of organism?",
    "options": [
      "A water mould",
      "A bacterium",
      "An insect",
      "A virus"
    ],
    "answer": 0
  },
  {
    "q": "Roughly how many people are estimated to have died during the Great Famine of the 1840s?",
    "options": [
      "About one million",
      "About ten thousand",
      "About one hundred thousand",
      "About five million"
    ],
    "answer": 0
  },
  {
    "q": "During and after the Famine, the most common overseas destination for Irish emigrants was which country?",
    "options": [
      "The United States",
      "Australia",
      "Argentina",
      "Canada"
    ],
    "answer": 0
  },
  {
    "q": "The overcrowded, disease-ridden ships that carried Famine emigrants were grimly nicknamed what?",
    "options": [
      "Coffin ships",
      "Ghost ships",
      "Hunger ships",
      "Plague boats"
    ],
    "answer": 0
  },
  {
    "q": "Which British relief measure forced the destitute into harsh institutions during the Famine?",
    "options": [
      "The workhouses",
      "The barracks",
      "The plantations",
      "The almshouses"
    ],
    "answer": 0
  },
  {
    "q": "The Famine relief works often had labourers building what largely useless structures?",
    "options": [
      "Roads to nowhere",
      "Castles",
      "Canals to the sea",
      "Lighthouses"
    ],
    "answer": 0
  },
  {
    "q": "The Young Ireland movement staged a small rebellion in 1848 in which county?",
    "options": [
      "Tipperary",
      "Wexford",
      "Cork",
      "Wicklow"
    ],
    "answer": 0
  },
  {
    "q": "The 1848 Young Ireland rising is sometimes mocked as the affair at the Widow McCormack's what?",
    "options": [
      "Cabbage patch",
      "Pub",
      "Forge",
      "Barn"
    ],
    "answer": 0
  },
  {
    "q": "Which nationalist newspaper was the voice of the Young Ireland movement?",
    "options": [
      "The Nation",
      "The Freeman's Journal",
      "The Irish Times",
      "An Phoblacht"
    ],
    "answer": 0
  },
  {
    "q": "Thomas Davis, a leading Young Irelander, is best remembered as a writer of what?",
    "options": [
      "Patriotic ballads",
      "Novels",
      "Plays",
      "Scientific papers"
    ],
    "answer": 0
  },
  {
    "q": "The Irish Republican Brotherhood, or Fenians, was founded in which year?",
    "options": [
      "1858",
      "1798",
      "1884",
      "1916"
    ],
    "answer": 0
  },
  {
    "q": "The American counterpart organisation to the IRB was known as the what?",
    "options": [
      "Fenian Brotherhood",
      "Clan na Poblachta",
      "Sinn Fein League",
      "Hibernian Society"
    ],
    "answer": 0
  },
  {
    "q": "The Fenians staged an unsuccessful rising in which year?",
    "options": [
      "1867",
      "1848",
      "1798",
      "1916"
    ],
    "answer": 0
  },
  {
    "q": "The Manchester Martyrs were three Fenians executed in 1867 after the death of whom?",
    "options": [
      "A police sergeant",
      "A magistrate",
      "A soldier",
      "A prison warden"
    ],
    "answer": 0
  },
  {
    "q": "The Irish National Land League was founded in 1879, primarily to address what issue?",
    "options": [
      "Tenant land rights",
      "Voting rights",
      "Religious freedom",
      "Education"
    ],
    "answer": 0
  },
  {
    "q": "Who founded the Land League in 1879?",
    "options": [
      "Michael Davitt",
      "Wolfe Tone",
      "Robert Emmet",
      "Eamon de Valera"
    ],
    "answer": 0
  },
  {
    "q": "Michael Davitt was from which county?",
    "options": [
      "Mayo",
      "Cork",
      "Kerry",
      "Dublin"
    ],
    "answer": 0
  },
  {
    "q": "The tactic of socially ostracising a land agent in 1880 gave the English language which word?",
    "options": [
      "Boycott",
      "Lynch",
      "Sabotage",
      "Picket"
    ],
    "answer": 0
  },
  {
    "q": "Captain Charles Boycott, after whom the word is named, was a land agent in which county?",
    "options": [
      "Mayo",
      "Galway",
      "Clare",
      "Sligo"
    ],
    "answer": 0
  },
  {
    "q": "The period of agrarian agitation around 1879 to 1882 is known as the Land what?",
    "options": [
      "War",
      "Rebellion",
      "Crusade",
      "Riots"
    ],
    "answer": 0
  },
  {
    "q": "Charles Stewart Parnell was widely known by which nickname?",
    "options": [
      "The Uncrowned King of Ireland",
      "The Liberator",
      "The Big Fellow",
      "The Chief Secretary"
    ],
    "answer": 0
  },
  {
    "q": "Parnell led which political party at Westminster?",
    "options": [
      "The Irish Parliamentary Party",
      "Sinn Fein",
      "Fianna Fail",
      "Cumann na nGaedheal"
    ],
    "answer": 0
  },
  {
    "q": "Parnell's political career was destroyed by a scandal involving which woman?",
    "options": [
      "Katharine O'Shea",
      "Maud Gonne",
      "Constance Markievicz",
      "Lady Gregory"
    ],
    "answer": 0
  },
  {
    "q": "The two Home Rule Bills introduced by Gladstone in 1886 and 1893 both ultimately what?",
    "options": [
      "Failed to become law",
      "Granted full independence",
      "Created a republic",
      "Partitioned Ireland"
    ],
    "answer": 0
  },
  {
    "q": "Which British Prime Minister became a strong supporter of Irish Home Rule?",
    "options": [
      "William Gladstone",
      "Benjamin Disraeli",
      "Robert Peel",
      "Lord Palmerston"
    ],
    "answer": 0
  },
  {
    "q": "The Gaelic Athletic Association (GAA) was founded in which year?",
    "options": [
      "1884",
      "1893",
      "1858",
      "1905"
    ],
    "answer": 0
  },
  {
    "q": "In which town was the GAA founded?",
    "options": [
      "Thurles",
      "Dublin",
      "Cork",
      "Galway"
    ],
    "answer": 0
  },
  {
    "q": "Who was the principal founder and first secretary of the GAA?",
    "options": [
      "Michael Cusack",
      "Douglas Hyde",
      "Eoin MacNeill",
      "Patrick Pearse"
    ],
    "answer": 0
  },
  {
    "q": "The GAA was founded to promote and preserve which sports?",
    "options": [
      "Traditional Irish games",
      "Rugby and cricket",
      "Soccer and golf",
      "Rowing and sailing"
    ],
    "answer": 0
  },
  {
    "q": "The Gaelic League, founded to revive the Irish language, was established in which year?",
    "options": [
      "1893",
      "1884",
      "1905",
      "1916"
    ],
    "answer": 0
  },
  {
    "q": "Who was the first president of the Gaelic League and later first President of Ireland?",
    "options": [
      "Douglas Hyde",
      "Eoin MacNeill",
      "Patrick Pearse",
      "Eamon de Valera"
    ],
    "answer": 0
  },
  {
    "q": "The Gaelic revival of the late 19th century is often called the Irish what?",
    "options": [
      "Literary and cultural revival",
      "Industrial revolution",
      "Reformation",
      "Enlightenment"
    ],
    "answer": 0
  },
  {
    "q": "The 1913 Dublin Lockout was a major dispute involving which union?",
    "options": [
      "The Irish Transport and General Workers' Union",
      "The National Union of Railwaymen",
      "The Amalgamated Engineers",
      "The Teachers' Union"
    ],
    "answer": 0
  },
  {
    "q": "Which fiery labour leader led the workers during the 1913 Lockout?",
    "options": [
      "Jim Larkin",
      "James Connolly",
      "William O'Brien",
      "Tom Clarke"
    ],
    "answer": 0
  },
  {
    "q": "The employers in the 1913 Lockout were led by which businessman?",
    "options": [
      "William Martin Murphy",
      "Arthur Guinness",
      "Andrew Jameson",
      "Edward Carson"
    ],
    "answer": 0
  },
  {
    "q": "The Irish Citizen Army was formed in 1913 to protect which group?",
    "options": [
      "Striking workers",
      "Catholic clergy",
      "Unionist marchers",
      "Land tenants"
    ],
    "answer": 0
  },
  {
    "q": "The Irish Volunteers were founded in 1913 partly in response to the formation of which northern force?",
    "options": [
      "The Ulster Volunteer Force",
      "The Black and Tans",
      "The B-Specials",
      "The RIC"
    ],
    "answer": 0
  },
  {
    "q": "The 1914 gun-running that armed the Irish Volunteers landed weapons at which harbour?",
    "options": [
      "Howth",
      "Dun Laoghaire",
      "Wicklow",
      "Bray"
    ],
    "answer": 0
  },
  {
    "q": "Who read the Proclamation of the Irish Republic outside the GPO in 1916?",
    "options": [
      "Patrick Pearse",
      "James Connolly",
      "Eamon de Valera",
      "Tom Clarke"
    ],
    "answer": 0
  },
  {
    "q": "How many signatories were there to the 1916 Proclamation of the Irish Republic?",
    "options": [
      "Seven",
      "Five",
      "Three",
      "Twelve"
    ],
    "answer": 0
  },
  {
    "q": "James Connolly, a 1916 leader, was also a prominent figure in which movement?",
    "options": [
      "Socialism and trade unionism",
      "The temperance movement",
      "The land reform movement",
      "The Gaelic League"
    ],
    "answer": 0
  },
  {
    "q": "Patrick Pearse was, by profession, notably the headmaster of which school?",
    "options": [
      "St Enda's",
      "Clongowes Wood",
      "Belvedere",
      "Blackrock"
    ],
    "answer": 0
  },
  {
    "q": "Which 1916 leader was already elderly and the éminence grise behind the Rising's planning?",
    "options": [
      "Tom Clarke",
      "Sean MacDiarmada",
      "Joseph Plunkett",
      "Thomas MacDonagh"
    ],
    "answer": 0
  },
  {
    "q": "The 1916 Rising lasted roughly how long before the rebels surrendered?",
    "options": [
      "About a week",
      "About a day",
      "About a month",
      "About three months"
    ],
    "answer": 0
  },
  {
    "q": "The 1916 leaders were executed by firing squad at which Dublin prison?",
    "options": [
      "Kilmainham Gaol",
      "Mountjoy Prison",
      "Arbour Hill",
      "Portlaoise Prison"
    ],
    "answer": 0
  },
  {
    "q": "James Connolly, too wounded to stand, was executed while seated in a what?",
    "options": [
      "Chair",
      "Wheelchair",
      "Stretcher",
      "Carriage"
    ],
    "answer": 0
  },
  {
    "q": "Which 1916 commandant avoided execution, partly due to his American birth, and later became President?",
    "options": [
      "Eamon de Valera",
      "Michael Collins",
      "Cathal Brugha",
      "Sean Lemass"
    ],
    "answer": 0
  },
  {
    "q": "Countess Markievicz fought in 1916 and later became the first woman elected to which parliament?",
    "options": [
      "The British House of Commons",
      "The Irish Senate",
      "The French Assembly",
      "The US Congress"
    ],
    "answer": 0
  },
  {
    "q": "The British general who ordered the 1916 executions and martial law was named what?",
    "options": [
      "Maxwell",
      "French",
      "Haig",
      "Kitchener"
    ],
    "answer": 0
  },
  {
    "q": "Public opinion in Ireland shifted toward the rebels largely because of what after the Rising?",
    "options": [
      "The executions of the leaders",
      "A famine",
      "A new tax",
      "A royal visit"
    ],
    "answer": 0
  },
  {
    "q": "Roger Casement was hanged in 1916 after being captured trying to land arms from which country?",
    "options": [
      "Germany",
      "France",
      "Spain",
      "Russia"
    ],
    "answer": 0
  },
  {
    "q": "In the December 1918 general election, which party won a landslide majority of Irish seats?",
    "options": [
      "Sinn Fein",
      "The Irish Parliamentary Party",
      "The Unionist Party",
      "Labour"
    ],
    "answer": 0
  },
  {
    "q": "The 1918 election was the first in which most adult women could do what?",
    "options": [
      "Vote",
      "Stand for the army",
      "Own property",
      "Sit as judges"
    ],
    "answer": 0
  },
  {
    "q": "Rather than go to Westminster, the elected Sinn Fein MPs set up their own assembly called the what?",
    "options": [
      "Dail Eireann",
      "Seanad",
      "Oireachtas",
      "Ard Fheis"
    ],
    "answer": 0
  },
  {
    "q": "The First Dail met for the first time in 1919 in which Dublin building?",
    "options": [
      "The Mansion House",
      "Dublin Castle",
      "Leinster House",
      "City Hall"
    ],
    "answer": 0
  },
  {
    "q": "The Irish War of Independence is generally dated as beginning in which year?",
    "options": [
      "1919",
      "1916",
      "1921",
      "1922"
    ],
    "answer": 0
  },
  {
    "q": "An ambush at Soloheadbeg in 1919 is often taken as the opening shots of which conflict?",
    "options": [
      "The War of Independence",
      "The Civil War",
      "The Easter Rising",
      "The Land War"
    ],
    "answer": 0
  },
  {
    "q": "During the War of Independence, Michael Collins served as the IRA's director of what?",
    "options": [
      "Intelligence",
      "Artillery",
      "Propaganda",
      "Recruitment"
    ],
    "answer": 0
  },
  {
    "q": "The notorious British paramilitary recruits deployed in 1920 were nicknamed the what?",
    "options": [
      "Black and Tans",
      "Redcoats",
      "Grey Wolves",
      "Blueshirts"
    ],
    "answer": 0
  },
  {
    "q": "On Bloody Sunday in November 1920, British forces opened fire on a crowd at which ground?",
    "options": [
      "Croke Park",
      "Lansdowne Road",
      "Dalymount Park",
      "Thomond Park"
    ],
    "answer": 0
  },
  {
    "q": "The Lord Mayor of Cork who died on hunger strike in 1920 was named what?",
    "options": [
      "Terence MacSwiney",
      "Tomas MacCurtain",
      "Sean Hales",
      "Liam Lynch"
    ],
    "answer": 0
  },
  {
    "q": "The Government of Ireland Act 1920 partitioned Ireland into how many parts?",
    "options": [
      "Two",
      "Three",
      "Four",
      "Five"
    ],
    "answer": 0
  },
  {
    "q": "Northern Ireland, created by partition, consisted of how many counties?",
    "options": [
      "Six",
      "Nine",
      "Four",
      "Three"
    ],
    "answer": 0
  },
  {
    "q": "A truce halting the War of Independence came into effect in which year?",
    "options": [
      "1921",
      "1919",
      "1922",
      "1923"
    ],
    "answer": 0
  },
  {
    "q": "The Anglo-Irish Treaty was signed in which year?",
    "options": [
      "1921",
      "1919",
      "1922",
      "1923"
    ],
    "answer": 0
  },
  {
    "q": "The Anglo-Irish Treaty created an entity called the Irish what?",
    "options": [
      "Free State",
      "Republic",
      "Commonwealth",
      "Dominion of Ulster"
    ],
    "answer": 0
  },
  {
    "q": "A major sticking point in the Treaty was an oath of allegiance to whom?",
    "options": [
      "The British Crown",
      "The Pope",
      "The Dail",
      "The President"
    ],
    "answer": 0
  },
  {
    "q": "Which leader led the Irish delegation that negotiated and signed the 1921 Treaty?",
    "options": [
      "Michael Collins",
      "Eamon de Valera",
      "Arthur Griffith and Michael Collins",
      "Cathal Brugha"
    ],
    "answer": 2
  },
  {
    "q": "Eamon de Valera notably did what regarding the Treaty?",
    "options": [
      "Opposed it",
      "Signed it personally",
      "Negotiated it in London",
      "Drafted it alone"
    ],
    "answer": 0
  },
  {
    "q": "The Dail vote to approve the Anglo-Irish Treaty in January 1922 was decided by what kind of margin?",
    "options": [
      "A narrow majority",
      "Unanimously",
      "A two-thirds majority",
      "It was rejected"
    ],
    "answer": 0
  },
  {
    "q": "Michael Collins reportedly described signing the Treaty as signing his own what?",
    "options": [
      "Death warrant",
      "Pardon",
      "Resignation",
      "Confession"
    ],
    "answer": 0
  },
  {
    "q": "Arthur Griffith is best remembered as the founder of which political movement?",
    "options": [
      "Sinn Fein",
      "The Land League",
      "Cumann na mBan",
      "The Gaelic League"
    ],
    "answer": 0
  },
  {
    "q": "The seat of British administration in Ireland for centuries was which Dublin landmark?",
    "options": [
      "Dublin Castle",
      "The Custom House",
      "Leinster House",
      "The Four Courts"
    ],
    "answer": 0
  },
  {
    "q": "During the War of Independence the IRA burned which Dublin building, a centre of British records, in 1921?",
    "options": [
      "The Custom House",
      "Dublin Castle",
      "The GPO",
      "Trinity College"
    ],
    "answer": 0
  },
  {
    "q": "Cumann na mBan, founded in 1914, was an organisation of Irish what?",
    "options": [
      "Republican women",
      "Trade unionists",
      "Schoolteachers",
      "Farmers"
    ],
    "answer": 0
  },
  {
    "q": "Maud Gonne was a noted activist and the muse of which poet?",
    "options": [
      "W. B. Yeats",
      "Patrick Kavanagh",
      "Seamus Heaney",
      "Oscar Wilde"
    ],
    "answer": 0
  },
  {
    "q": "The 1903 Wyndham Land Act greatly helped Irish tenants to do what?",
    "options": [
      "Buy out their farms",
      "Vote in elections",
      "Emigrate freely",
      "Join trade unions"
    ],
    "answer": 0
  },
  {
    "q": "The leader of Ulster unionist resistance to Home Rule before 1914 was which barrister?",
    "options": [
      "Edward Carson",
      "James Craig",
      "Bonar Law",
      "Basil Brooke"
    ],
    "answer": 0
  },
  {
    "q": "The 1912 Ulster Covenant was a pledge by unionists to resist what?",
    "options": [
      "Home Rule",
      "Conscription",
      "Partition",
      "Land reform"
    ],
    "answer": 0
  },
  {
    "q": "Some signed the 1912 Ulster Covenant dramatically using what?",
    "options": [
      "Their own blood",
      "Gold ink",
      "Wax seals",
      "A quill from Carson"
    ],
    "answer": 0
  },
  {
    "q": "John Redmond was the leader of the Irish Parliamentary Party at the outbreak of which war?",
    "options": [
      "The First World War",
      "The Boer War",
      "The Crimean War",
      "The Second World War"
    ],
    "answer": 0
  },
  {
    "q": "John Redmond controversially urged Irishmen to do what in 1914?",
    "options": [
      "Enlist in the British Army",
      "Take up arms in Dublin",
      "Boycott the war effort",
      "Emigrate to America"
    ],
    "answer": 0
  },
  {
    "q": "Eoin MacNeill, chief of staff of the Irish Volunteers, issued a 1916 order that did what?",
    "options": [
      "Cancelled the Rising manoeuvres",
      "Started the Rising early",
      "Armed the GPO",
      "Called in the French"
    ],
    "answer": 0
  },
  {
    "q": "Joseph Mary Plunkett, a 1916 signatory, married Grace Gifford where, hours before his execution?",
    "options": [
      "Kilmainham Gaol",
      "Glasnevin",
      "Dublin Castle",
      "St Enda's"
    ],
    "answer": 0
  },
  {
    "q": "The 1916 rebels' headquarters, the GPO, is located on which Dublin street?",
    "options": [
      "O'Connell Street",
      "Grafton Street",
      "Dame Street",
      "Henry Street"
    ],
    "answer": 0
  },
  {
    "q": "Who was the British Prime Minister during the 1916 Easter Rising?",
    "options": [
      "H. H. Asquith",
      "David Lloyd George",
      "Winston Churchill",
      "Stanley Baldwin"
    ],
    "answer": 0
  },
  {
    "q": "Who was British Prime Minister during the 1921 Treaty negotiations?",
    "options": [
      "David Lloyd George",
      "H. H. Asquith",
      "Bonar Law",
      "Ramsay MacDonald"
    ],
    "answer": 0
  },
  {
    "q": "The Phoenix Park Murders of 1882 killed the Chief Secretary and which other official?",
    "options": [
      "The Under-Secretary",
      "The Lord Lieutenant",
      "The Lord Mayor",
      "The Archbishop"
    ],
    "answer": 0
  },
  {
    "q": "The Phoenix Park Murders of 1882 were carried out by a group calling itself the what?",
    "options": [
      "Invincibles",
      "Fenians",
      "Defenders",
      "Whiteboys"
    ],
    "answer": 0
  },
  {
    "q": "The 18th-century agrarian secret societies such as the Whiteboys protested mainly against what?",
    "options": [
      "Rents and tithes",
      "Religion",
      "Conscription",
      "Foreign trade"
    ],
    "answer": 0
  },
  {
    "q": "The Orange Order was founded in 1795 in which county after the Battle of the Diamond?",
    "options": [
      "Armagh",
      "Antrim",
      "Down",
      "Tyrone"
    ],
    "answer": 0
  },
  {
    "q": "The Battle of Aughrim in 1691 was a decisive defeat for which side?",
    "options": [
      "The Jacobites",
      "The Williamites",
      "The Cromwellians",
      "The Spanish"
    ],
    "answer": 0
  },
  {
    "q": "Patrick Sarsfield was a celebrated commander on which side in the Williamite War?",
    "options": [
      "The Jacobites",
      "The Williamites",
      "The Cromwellians",
      "The Hanoverians"
    ],
    "answer": 0
  },
  {
    "q": "Jonathan Swift, the Dublin-born writer, satirised English policy in Ireland in which famous pamphlet?",
    "options": [
      "A Modest Proposal",
      "Gulliver's Travels",
      "The Drapier's Letters only",
      "A Tale of a Tub"
    ],
    "answer": 0
  },
  {
    "q": "Edmund Burke, the Irish-born statesman and orator, is regarded as a father of which political tradition?",
    "options": [
      "Conservatism",
      "Socialism",
      "Anarchism",
      "Liberalism only"
    ],
    "answer": 0
  },
  {
    "q": "The Defenders were a Catholic agrarian society that often clashed with which Protestant group in the 1790s?",
    "options": [
      "The Peep o' Day Boys",
      "The Quakers",
      "The Methodists",
      "The Huguenots"
    ],
    "answer": 0
  },
  {
    "q": "Lord Edward Fitzgerald, a leading United Irishman, died in 1798 from wounds received during what?",
    "options": [
      "His arrest",
      "A duel",
      "The Battle of the Boyne",
      "A shipwreck"
    ],
    "answer": 0
  },
  {
    "q": "The chief organiser of Catholic Emancipation, Daniel O'Connell, was a member of which profession?",
    "options": [
      "Barrister",
      "Doctor",
      "Priest",
      "Soldier"
    ],
    "answer": 0
  },
  {
    "q": "The Famine is known in the Irish language as An what?",
    "options": [
      "Gorta Mor",
      "Cogadh Mor",
      "Eiri Amach",
      "Saoirse"
    ],
    "answer": 0
  },
  {
    "q": "During the Famine, exports of which foodstuff continued to leave Ireland, causing great bitterness?",
    "options": [
      "Grain and livestock",
      "Potatoes",
      "Fish",
      "Apples"
    ],
    "answer": 0
  },
  {
    "q": "The British politician whose laissez-faire approach to Famine relief drew lasting criticism was named what?",
    "options": [
      "Charles Trevelyan",
      "Robert Peel",
      "Lord John Russell",
      "Lord Palmerston"
    ],
    "answer": 0
  },
  {
    "q": "Robert Peel's early Famine relief famously involved importing maize nicknamed what?",
    "options": [
      "Peel's brimstone",
      "Yellow gold",
      "Russell's ration",
      "Trevelyan's loaf"
    ],
    "answer": 0
  },
  {
    "q": "Which leading Young Irelander was transported to Tasmania but later became a US Civil War general?",
    "options": [
      "Thomas Francis Meagher",
      "John Mitchel",
      "William Smith O'Brien",
      "Charles Gavan Duffy"
    ],
    "answer": 0
  },
  {
    "q": "Thomas Francis Meagher is credited with first unfurling which flag in Ireland in 1848?",
    "options": [
      "The Irish tricolour",
      "The Starry Plough",
      "The Sunburst",
      "The harp on green"
    ],
    "answer": 0
  },
  {
    "q": "The three colours of the Irish tricolour are green, white and what?",
    "options": [
      "Orange",
      "Gold",
      "Blue",
      "Red"
    ],
    "answer": 0
  },
  {
    "q": "John Mitchel, the Young Irelander, wrote a famous prison diary titled the what?",
    "options": [
      "Jail Journal",
      "Speeches from the Dock",
      "The Nation",
      "Labour in Irish History"
    ],
    "answer": 0
  },
  {
    "q": "James Stephens was a founder and leader of which secret revolutionary society?",
    "options": [
      "The Irish Republican Brotherhood",
      "The Land League",
      "The Young Irelanders",
      "The Gaelic League"
    ],
    "answer": 0
  },
  {
    "q": "The Fenian dynamite campaign of the 1880s targeted cities in which country?",
    "options": [
      "Britain",
      "France",
      "America",
      "Canada"
    ],
    "answer": 0
  },
  {
    "q": "Jeremiah O'Donovan Rossa, a famous Fenian whose 1915 funeral was a major event, lived in exile in which country?",
    "options": [
      "The United States",
      "France",
      "Australia",
      "Argentina"
    ],
    "answer": 0
  },
  {
    "q": "Patrick Pearse delivered a celebrated graveside oration at the 1915 funeral of which Fenian?",
    "options": [
      "O'Donovan Rossa",
      "James Stephens",
      "John Devoy",
      "Thomas Clarke"
    ],
    "answer": 0
  },
  {
    "q": "The Plan of Campaign in the late 1880s was a renewed tactic in which struggle?",
    "options": [
      "The land agitation",
      "Catholic Emancipation",
      "Home Rule legislation",
      "The Gaelic revival"
    ],
    "answer": 0
  },
  {
    "q": "Parnell died in which year, shortly after the O'Shea scandal split his party?",
    "options": [
      "1891",
      "1879",
      "1900",
      "1886"
    ],
    "answer": 0
  },
  {
    "q": "The Irish Parliamentary Party split after the Parnell scandal into Parnellite and what factions?",
    "options": [
      "Anti-Parnellite",
      "Unionist",
      "Fenian",
      "Redmondite"
    ],
    "answer": 0
  },
  {
    "q": "The first All-Ireland football and hurling finals organised by the GAA were held in which decade?",
    "options": [
      "The 1880s",
      "The 1860s",
      "The 1900s",
      "The 1920s"
    ],
    "answer": 0
  },
  {
    "q": "Archbishop Thomas Croke, an early patron of the GAA, is commemorated by the name of which stadium?",
    "options": [
      "Croke Park",
      "Semple Stadium",
      "Pairc Ui Chaoimh",
      "Casement Park"
    ],
    "answer": 0
  },
  {
    "q": "The Irish Volunteers split in 1914 when most followed Redmond, the larger group renaming themselves the National what?",
    "options": [
      "Volunteers",
      "Brotherhood",
      "Guard",
      "League"
    ],
    "answer": 0
  },
  {
    "q": "The Howth gun-running of 1914 ended in tragedy when troops fired on civilians at which Dublin location?",
    "options": [
      "Bachelor's Walk",
      "O'Connell Bridge",
      "St Stephen's Green",
      "College Green"
    ],
    "answer": 0
  },
  {
    "q": "Thomas Ashe, a republican who died in 1917, perished as a result of what?",
    "options": [
      "Force-feeding during a hunger strike",
      "A firing squad",
      "A street ambush",
      "Illness in exile"
    ],
    "answer": 0
  },
  {
    "q": "The German ship scuttled off Cork in 1916 while trying to land arms for the Rising was the what?",
    "options": [
      "Aud",
      "Asgard",
      "Erin's Hope",
      "Helga"
    ],
    "answer": 0
  },
  {
    "q": "A British gunboat that shelled Dublin during the 1916 Rising was the Helga, operating on which river?",
    "options": [
      "The Liffey",
      "The Lee",
      "The Shannon",
      "The Boyne"
    ],
    "answer": 0
  },
  {
    "q": "Which 1916 garrison was commanded by Eamon de Valera?",
    "options": [
      "Boland's Mill",
      "The GPO",
      "Jacob's Factory",
      "The Four Courts"
    ],
    "answer": 0
  },
  {
    "q": "Thomas MacDonagh, a 1916 signatory, was also known as a poet and what?",
    "options": [
      "University lecturer",
      "Doctor",
      "Sea captain",
      "Blacksmith"
    ],
    "answer": 0
  },
  {
    "q": "Sean MacDiarmada, a 1916 signatory, was partly disabled by which disease?",
    "options": [
      "Polio",
      "Tuberculosis",
      "Cholera",
      "Typhoid"
    ],
    "answer": 0
  },
  {
    "q": "The slogan painted on a banner over the 1916 garrisons proclaimed the Irish what?",
    "options": [
      "Republic",
      "Free State",
      "Nation",
      "Kingdom"
    ],
    "answer": 0
  },
  {
    "q": "Michael Collins fought in 1916 in which garrison?",
    "options": [
      "The GPO",
      "Boland's Mill",
      "Jacob's Factory",
      "The South Dublin Union"
    ],
    "answer": 0
  },
  {
    "q": "After 1916, many republican prisoners were interned at which Welsh camp?",
    "options": [
      "Frongoch",
      "Dartmoor",
      "Portland",
      "Lewes"
    ],
    "answer": 0
  },
  {
    "q": "The conscription crisis of 1918 boosted Sinn Fein because it opposed extending conscription to what?",
    "options": [
      "Ireland",
      "Scotland",
      "The colonies",
      "India"
    ],
    "answer": 0
  },
  {
    "q": "Cathal Brugha was the first what of the First Dail in 1919?",
    "options": [
      "Ceann Comhairle then Minister for Defence",
      "President",
      "Speaker only",
      "Chief Justice"
    ],
    "answer": 0
  },
  {
    "q": "The IRA flying columns of the War of Independence were small mobile units that specialised in what?",
    "options": [
      "Ambushes",
      "Naval raids",
      "Aerial attacks",
      "Siege warfare"
    ],
    "answer": 0
  },
  {
    "q": "The Kilmichael Ambush of 1920, a major IRA success, took place in which county?",
    "options": [
      "Cork",
      "Kerry",
      "Tipperary",
      "Clare"
    ],
    "answer": 0
  },
  {
    "q": "Tom Barry led the West Cork flying column during which conflict?",
    "options": [
      "The War of Independence",
      "The Civil War",
      "The Easter Rising",
      "The Land War"
    ],
    "answer": 0
  },
  {
    "q": "On Bloody Sunday morning in 1920, Collins's squad assassinated a group of British agents nicknamed the what?",
    "options": [
      "Cairo Gang",
      "Black and Tans",
      "Auxiliaries",
      "G-men"
    ],
    "answer": 0
  },
  {
    "q": "The Burning of Cork city in December 1920 was carried out by which forces?",
    "options": [
      "The Black and Tans and Auxiliaries",
      "The IRA",
      "The German navy",
      "The Irish Citizen Army"
    ],
    "answer": 0
  },
  {
    "q": "Eamon de Valera spent much of the War of Independence raising funds and support in which country?",
    "options": [
      "The United States",
      "France",
      "Australia",
      "Germany"
    ],
    "answer": 0
  },
  {
    "q": "Northern Ireland's first Prime Minister, taking office in 1921, was who?",
    "options": [
      "James Craig",
      "Edward Carson",
      "Basil Brooke",
      "Terence O'Neill"
    ],
    "answer": 0
  },
  {
    "q": "The Treaty provided for a Boundary Commission to review what?",
    "options": [
      "The border between North and South",
      "Fishing rights",
      "The oath of allegiance",
      "War reparations"
    ],
    "answer": 0
  },
  {
    "q": "The split over the Anglo-Irish Treaty led directly to which conflict in 1922?",
    "options": [
      "The Irish Civil War",
      "The War of Independence",
      "The Easter Rising",
      "The Land War"
    ],
    "answer": 0
  },
  {
    "q": "Michael Collins was killed in an ambush in 1922 at Beal na mBlath in which county?",
    "options": [
      "Cork",
      "Kerry",
      "Tipperary",
      "Limerick"
    ],
    "answer": 0
  },
  {
    "q": "Arthur Griffith died suddenly in August 1922, just days before which event?",
    "options": [
      "The death of Michael Collins",
      "The Treaty signing",
      "The Civil War's end",
      "The 1923 election"
    ],
    "answer": 0
  },
  {
    "q": "The first president of the executive council of the Irish Free State was who?",
    "options": [
      "W. T. Cosgrave",
      "Eamon de Valera",
      "Michael Collins",
      "Arthur Griffith"
    ],
    "answer": 0
  },
  {
    "q": "In 1922 the new Free State army shelled which Dublin building held by anti-Treaty forces?",
    "options": [
      "The Four Courts",
      "The GPO",
      "Dublin Castle",
      "Leinster House"
    ],
    "answer": 0
  },
  {
    "q": "The Irish Free State formally came into existence in which year?",
    "options": [
      "1922",
      "1921",
      "1916",
      "1923"
    ],
    "answer": 0
  },
  {
    "q": "The penal-era hidden outdoor altars used for Catholic Mass were known as what?",
    "options": [
      "Mass rocks",
      "Holy wells",
      "Round towers",
      "Rood screens"
    ],
    "answer": 0
  },
  {
    "q": "The 1796 French invasion fleet led by General Hoche failed to land due to storms in which bay?",
    "options": [
      "Bantry Bay",
      "Galway Bay",
      "Dublin Bay",
      "Donegal Bay"
    ],
    "answer": 0
  },
  {
    "q": "Henry Joy McCracken, a leader of the 1798 rising in Ulster, was executed after the Battle of what?",
    "options": [
      "Antrim",
      "Ballynahinch only",
      "Arklow",
      "New Ross"
    ],
    "answer": 0
  },
  {
    "q": "The 1798 rebellion in the north-east was strongest among which religious community?",
    "options": [
      "Presbyterians",
      "Catholics",
      "Anglicans",
      "Quakers"
    ],
    "answer": 0
  },
  {
    "q": "Daniel O'Connell secured Emancipation through which approach he championed?",
    "options": [
      "Peaceful mass agitation",
      "Armed insurrection",
      "Foreign invasion",
      "Court appeals only"
    ],
    "answer": 0
  },
  {
    "q": "Father Theobald Mathew led which major social movement in 1840s Ireland?",
    "options": [
      "The temperance crusade",
      "The land reform movement",
      "The Gaelic revival",
      "Catholic Emancipation"
    ],
    "answer": 0
  },
  {
    "q": "The Quakers are remembered for organising what during the Great Famine?",
    "options": [
      "Soup kitchens and relief",
      "Coffin ships",
      "Eviction crews",
      "Grain exports"
    ],
    "answer": 0
  },
  {
    "q": "The 1847 height of the Famine is often called Black what?",
    "options": [
      "Forty-Seven",
      "Friday",
      "Winter",
      "Hunger"
    ],
    "answer": 0
  },
  {
    "q": "Mass evictions during and after the Famine sometimes involved demolishing tenants' homes using a what?",
    "options": [
      "Battering ram",
      "Cannon",
      "Plough",
      "Crane"
    ],
    "answer": 0
  },
  {
    "q": "The largest single emigrant destination city for the Famine Irish in America was which?",
    "options": [
      "New York",
      "Chicago",
      "Boston only",
      "New Orleans"
    ],
    "answer": 0
  },
  {
    "q": "Grosse Ile, a notorious Famine-era quarantine station, lies in the river near which Canadian city?",
    "options": [
      "Quebec City",
      "Toronto",
      "Montreal",
      "Halifax"
    ],
    "answer": 0
  },
  {
    "q": "James Connolly founded which socialist party in 1896?",
    "options": [
      "The Irish Socialist Republican Party",
      "The Labour Party",
      "Sinn Fein",
      "The Fenian Brotherhood"
    ],
    "answer": 0
  },
  {
    "q": "James Connolly's best-known book on Irish history is titled Labour in Irish what?",
    "options": [
      "History",
      "Politics",
      "Struggle",
      "Society"
    ],
    "answer": 0
  },
  {
    "q": "Jim Larkin's union battle cry was that an injury to one is the concern of whom?",
    "options": [
      "All",
      "None",
      "The state",
      "The union"
    ],
    "answer": 0
  },
  {
    "q": "Sinn Fein was originally founded by Arthur Griffith advocating a dual monarchy modelled on which country?",
    "options": [
      "Austria-Hungary",
      "Sweden",
      "Canada",
      "Switzerland"
    ],
    "answer": 0
  },
  {
    "q": "Who was elected the first President of Dail Eireann in 1919 while imprisoned, then escaping?",
    "options": [
      "Eamon de Valera",
      "Arthur Griffith",
      "Michael Collins",
      "Cathal Brugha"
    ],
    "answer": 0
  },
  {
    "q": "The IRA assassinated which detective division of the Dublin police during the War of Independence?",
    "options": [
      "The G Division",
      "The Special Branch",
      "The Auxiliaries",
      "The Cairo Gang"
    ],
    "answer": 0
  },
  {
    "q": "Kevin Barry, executed in 1920 and the subject of a famous ballad, was a what at the time?",
    "options": [
      "Medical student",
      "Soldier",
      "Priest",
      "Farmer"
    ],
    "answer": 0
  },
  {
    "q": "The 1916 Rising's main rebel force, the Irish Volunteers, later evolved into what?",
    "options": [
      "The Irish Republican Army",
      "The Free State Army",
      "The Citizen Army",
      "The Garda"
    ],
    "answer": 0
  },
  {
    "q": "Constance Markievicz was second-in-command at which 1916 garrison area?",
    "options": [
      "St Stephen's Green",
      "The GPO",
      "Boland's Mill",
      "The Four Courts"
    ],
    "answer": 0
  },
  {
    "q": "Sir Roger Casement had earlier won fame as a humanitarian exposing abuses in the Congo and where?",
    "options": [
      "The Putumayo region of South America",
      "India",
      "South Africa",
      "Australia"
    ],
    "answer": 0
  },
  {
    "q": "The Defence of the Realm Act, used to try the 1916 leaders, allowed trial by what?",
    "options": [
      "Court martial",
      "Jury",
      "The House of Lords",
      "A papal court"
    ],
    "answer": 0
  },
  {
    "q": "W. T. Cosgrave's pro-Treaty party in the new Free State was named Cumann na what?",
    "options": [
      "nGaedheal",
      "mBan",
      "Poblachta",
      "Saoirse"
    ],
    "answer": 0
  },
  {
    "q": "Erskine Childers, executed in 1922, had earlier skippered which yacht in the Howth gun-running?",
    "options": [
      "The Asgard",
      "The Aud",
      "The Erin's Hope",
      "The Helga"
    ],
    "answer": 0
  },
  {
    "q": "The anti-Treaty side in the Civil War is often referred to as the what?",
    "options": [
      "Irregulars",
      "Loyalists",
      "Free Staters",
      "Unionists"
    ],
    "answer": 0
  },
  {
    "q": "Liam Lynch, who died in 1923, was chief of staff of which side in the Civil War?",
    "options": [
      "The anti-Treaty IRA",
      "The Free State Army",
      "The Citizen Army",
      "The Black and Tans"
    ],
    "answer": 0
  },
  {
    "q": "The Irish Civil War effectively ended in 1923 when the anti-Treaty side did what?",
    "options": [
      "Dumped arms and ceased fighting",
      "Captured Dublin",
      "Signed a new treaty",
      "Won a general election"
    ],
    "answer": 0
  },
  {
    "q": "Daniel O'Connell co-founded which campaigning newspaper-backed body for repeal in 1840?",
    "options": [
      "The Repeal Association",
      "The Land League",
      "The Gaelic League",
      "Sinn Fein"
    ],
    "answer": 0
  },
  {
    "q": "The 1800 vote for the Act of Union in the Irish Parliament was secured partly through widespread what?",
    "options": [
      "Bribery and patronage",
      "Public referendum",
      "Military draft",
      "Religious decree"
    ],
    "answer": 0
  },
  {
    "q": "Wolfe Tone's most famous pamphlet was An Argument on Behalf of the Catholics of where?",
    "options": [
      "Ireland",
      "Ulster",
      "Britain",
      "Europe"
    ],
    "answer": 0
  },
  {
    "q": "The term Ascendancy referred to the dominant class in 18th-century Ireland of which religion?",
    "options": [
      "Anglican Protestant",
      "Roman Catholic",
      "Presbyterian",
      "Methodist"
    ],
    "answer": 0
  },
  {
    "q": "Maynooth College, founded in 1795, was established to train Irish Catholic what?",
    "options": [
      "Priests",
      "Soldiers",
      "Lawyers",
      "Teachers"
    ],
    "answer": 0
  },
  {
    "q": "Robert Emmet was in love with and engaged to which woman, daughter of a noted lawyer?",
    "options": [
      "Sarah Curran",
      "Anne Devlin",
      "Pamela Fitzgerald",
      "Mary Doyle"
    ],
    "answer": 0
  },
  {
    "q": "Anne Devlin, who endured imprisonment without betraying him, was associated with which rebel?",
    "options": [
      "Robert Emmet",
      "Wolfe Tone",
      "Lord Edward Fitzgerald",
      "Henry Joy McCracken"
    ],
    "answer": 0
  },
  {
    "q": "The Battle of New Ross in 1798 was a bloody engagement in which county?",
    "options": [
      "Wexford",
      "Wicklow",
      "Kildare",
      "Carlow"
    ],
    "answer": 0
  },
  {
    "q": "Father John Murphy was a noted priest-leader in the 1798 rebellion in which county?",
    "options": [
      "Wexford",
      "Antrim",
      "Mayo",
      "Cork"
    ],
    "answer": 0
  },
  {
    "q": "Catholic Emancipation in 1829 was reluctantly granted under which British Prime Minister?",
    "options": [
      "The Duke of Wellington",
      "Robert Peel",
      "Lord Grey",
      "George Canning"
    ],
    "answer": 0
  },
  {
    "q": "The disestablishment of the Church of Ireland, ending its privileged status, occurred in which year?",
    "options": [
      "1869",
      "1801",
      "1845",
      "1916"
    ],
    "answer": 0
  },
  {
    "q": "Isaac Butt is credited with founding the parliamentary movement for which cause in the 1870s?",
    "options": [
      "Home Rule",
      "Catholic Emancipation",
      "Land reform only",
      "Repeal of the Union"
    ],
    "answer": 0
  },
  {
    "q": "The obstructionist tactic of filibustering at Westminster was used effectively by Parnell and which colleague?",
    "options": [
      "Joseph Biggar",
      "John Dillon",
      "William O'Brien",
      "Tim Healy"
    ],
    "answer": 0
  },
  {
    "q": "Michael Davitt had lost an arm in childhood working in a what?",
    "options": [
      "Cotton mill",
      "Coal mine",
      "Shipyard",
      "Quarry"
    ],
    "answer": 0
  },
  {
    "q": "The slogan the land of Ireland for the people of Ireland was central to which movement?",
    "options": [
      "The Land League",
      "Home Rule",
      "The Gaelic League",
      "The Fenians"
    ],
    "answer": 0
  },
  {
    "q": "Douglas Hyde's influential 1892 lecture argued for the de-Anglicising of which nation?",
    "options": [
      "Ireland",
      "Scotland",
      "Wales",
      "Britain"
    ],
    "answer": 0
  },
  {
    "q": "Patrick Pearse edited which Gaelic League newspaper before turning to revolution?",
    "options": [
      "An Claidheamh Soluis",
      "The Nation",
      "The Workers' Republic",
      "United Irishman"
    ],
    "answer": 0
  },
  {
    "q": "The 1798 rebellion was suppressed with great loss of life, with deaths estimated in the tens of what?",
    "options": [
      "Thousands",
      "Hundreds",
      "Millions",
      "Dozens"
    ],
    "answer": 0
  },
  {
    "q": "The Repeal monster meeting on the Hill of Tara in 1843 reportedly drew a crowd estimated at how many?",
    "options": [
      "Hundreds of thousands",
      "A few hundred",
      "About ten million",
      "Around five thousand"
    ],
    "answer": 0
  },
  {
    "q": "After the Famine, the Irish population fell drastically and continued to decline due to ongoing what?",
    "options": [
      "Emigration",
      "War",
      "Plague",
      "Famine every year"
    ],
    "answer": 0
  },
  {
    "q": "The Land Acts and Wyndham Act ultimately transferred ownership of much Irish land to whom?",
    "options": [
      "The tenant farmers",
      "The British Crown",
      "The Catholic Church",
      "Foreign investors"
    ],
    "answer": 0
  },
  {
    "q": "Patrick Pearse and his brother Willie were both executed after which event?",
    "options": [
      "The 1916 Rising",
      "The 1798 Rebellion",
      "The Civil War",
      "The War of Independence"
    ],
    "answer": 0
  },
  {
    "q": "The British military court executions after 1916 took place over roughly what period in May?",
    "options": [
      "About ten days",
      "A single day",
      "Three months",
      "Half a year"
    ],
    "answer": 0
  },
  {
    "q": "The 1918 general election result showed which party had collapsed as the dominant Irish nationalist force?",
    "options": [
      "The Irish Parliamentary Party",
      "Sinn Fein",
      "The Unionists",
      "Labour"
    ],
    "answer": 0
  },
  {
    "q": "The Soloheadbeg ambush of 1919 took place in which county?",
    "options": [
      "Tipperary",
      "Cork",
      "Dublin",
      "Clare"
    ],
    "answer": 0
  },
  {
    "q": "The Auxiliaries deployed in 1920 were recruited mainly from former British Army what?",
    "options": [
      "Officers",
      "Cooks",
      "Sailors",
      "Engineers"
    ],
    "answer": 0
  },
  {
    "q": "Terence MacSwiney's hunger strike in 1920 lasted a famous total of how many days?",
    "options": [
      "Seventy-four",
      "Ten",
      "Thirty",
      "One hundred"
    ],
    "answer": 0
  },
  {
    "q": "The Treaty negotiations of 1921 were held in which city?",
    "options": [
      "London",
      "Dublin",
      "Belfast",
      "Paris"
    ],
    "answer": 0
  },
  {
    "q": "Following the Treaty split, de Valera later founded which party in 1926?",
    "options": [
      "Fianna Fail",
      "Fine Gael",
      "Sinn Fein",
      "Labour"
    ],
    "answer": 0
  },
  {
    "q": "What does the Irish word uisce mean?",
    "options": [
      "Water",
      "Fire",
      "Bread",
      "Road"
    ],
    "answer": 0
  },
  {
    "q": "What colour is described by the Irish word dearg?",
    "options": [
      "Red",
      "Blue",
      "Green",
      "Yellow"
    ],
    "answer": 0
  },
  {
    "q": "What colour is described by the Irish word gorm?",
    "options": [
      "Blue",
      "Red",
      "Black",
      "White"
    ],
    "answer": 0
  },
  {
    "q": "What colour is described by the Irish word glas?",
    "options": [
      "Green",
      "Purple",
      "Orange",
      "Pink"
    ],
    "answer": 0
  },
  {
    "q": "What colour is described by the Irish word bán?",
    "options": [
      "White",
      "Black",
      "Brown",
      "Grey"
    ],
    "answer": 0
  },
  {
    "q": "What colour is described by the Irish word dubh?",
    "options": [
      "Black",
      "White",
      "Red",
      "Blue"
    ],
    "answer": 0
  },
  {
    "q": "What colour is described by the Irish word buí?",
    "options": [
      "Yellow",
      "Green",
      "Blue",
      "Red"
    ],
    "answer": 0
  },
  {
    "q": "What does the Irish word madra mean?",
    "options": [
      "Dog",
      "Cat",
      "Horse",
      "Cow"
    ],
    "answer": 0
  },
  {
    "q": "What does the Irish word cat mean?",
    "options": [
      "Cat",
      "Dog",
      "Bird",
      "Fish"
    ],
    "answer": 0
  },
  {
    "q": "What does the Irish word capall mean?",
    "options": [
      "Horse",
      "Sheep",
      "Pig",
      "Goat"
    ],
    "answer": 0
  },
  {
    "q": "What does the Irish word bó mean?",
    "options": [
      "Cow",
      "Bull",
      "Sheep",
      "Hen"
    ],
    "answer": 0
  },
  {
    "q": "What does the Irish word caora mean?",
    "options": [
      "Sheep",
      "Cow",
      "Goat",
      "Deer"
    ],
    "answer": 0
  },
  {
    "q": "What does the Irish word muc mean?",
    "options": [
      "Pig",
      "Dog",
      "Cat",
      "Cow"
    ],
    "answer": 0
  },
  {
    "q": "What does the Irish word éan mean?",
    "options": [
      "Bird",
      "Fish",
      "Frog",
      "Fly"
    ],
    "answer": 0
  },
  {
    "q": "What does the Irish word iasc mean?",
    "options": [
      "Fish",
      "Bird",
      "Snake",
      "Crab"
    ],
    "answer": 0
  },
  {
    "q": "What does the Irish word arán mean?",
    "options": [
      "Bread",
      "Butter",
      "Cheese",
      "Milk"
    ],
    "answer": 0
  },
  {
    "q": "What does the Irish word bainne mean?",
    "options": [
      "Milk",
      "Water",
      "Tea",
      "Juice"
    ],
    "answer": 0
  },
  {
    "q": "What does the Irish word im mean?",
    "options": [
      "Butter",
      "Bread",
      "Cheese",
      "Cream"
    ],
    "answer": 0
  },
  {
    "q": "What does the Irish word tae mean?",
    "options": [
      "Tea",
      "Coffee",
      "Water",
      "Beer"
    ],
    "answer": 0
  },
  {
    "q": "What does the Irish word císte mean?",
    "options": [
      "Cake",
      "Bread",
      "Biscuit",
      "Pie"
    ],
    "answer": 0
  },
  {
    "q": "What does the Irish word prátaí mean?",
    "options": [
      "Potatoes",
      "Carrots",
      "Onions",
      "Beans"
    ],
    "answer": 0
  },
  {
    "q": "What does the Irish word úll mean?",
    "options": [
      "Apple",
      "Orange",
      "Pear",
      "Plum"
    ],
    "answer": 0
  },
  {
    "q": "What does the Irish word feoil mean?",
    "options": [
      "Meat",
      "Fish",
      "Bread",
      "Fruit"
    ],
    "answer": 0
  },
  {
    "q": "What number is the Irish word dó?",
    "options": [
      "Two",
      "Three",
      "Four",
      "Five"
    ],
    "answer": 0
  },
  {
    "q": "What number is the Irish word trí?",
    "options": [
      "Three",
      "Two",
      "Four",
      "Six"
    ],
    "answer": 0
  },
  {
    "q": "What number is the Irish word ceathair?",
    "options": [
      "Four",
      "Three",
      "Five",
      "Eight"
    ],
    "answer": 0
  },
  {
    "q": "What number is the Irish word cúig?",
    "options": [
      "Five",
      "Four",
      "Six",
      "Seven"
    ],
    "answer": 0
  },
  {
    "q": "What number is the Irish word sé?",
    "options": [
      "Six",
      "Five",
      "Seven",
      "Eight"
    ],
    "answer": 0
  },
  {
    "q": "What number is the Irish word seacht?",
    "options": [
      "Seven",
      "Six",
      "Eight",
      "Nine"
    ],
    "answer": 0
  },
  {
    "q": "What number is the Irish word ocht?",
    "options": [
      "Eight",
      "Seven",
      "Nine",
      "Ten"
    ],
    "answer": 0
  },
  {
    "q": "What number is the Irish word naoi?",
    "options": [
      "Nine",
      "Eight",
      "Ten",
      "Seven"
    ],
    "answer": 0
  },
  {
    "q": "What number is the Irish word deich?",
    "options": [
      "Ten",
      "Nine",
      "Eleven",
      "Twelve"
    ],
    "answer": 0
  },
  {
    "q": "What does the Irish word máthair mean?",
    "options": [
      "Mother",
      "Father",
      "Sister",
      "Aunt"
    ],
    "answer": 0
  },
  {
    "q": "What does the Irish word athair mean?",
    "options": [
      "Father",
      "Mother",
      "Brother",
      "Uncle"
    ],
    "answer": 0
  },
  {
    "q": "What does the Irish word deartháir mean?",
    "options": [
      "Brother",
      "Sister",
      "Cousin",
      "Son"
    ],
    "answer": 0
  },
  {
    "q": "What does the Irish word deirfiúr mean?",
    "options": [
      "Sister",
      "Brother",
      "Daughter",
      "Mother"
    ],
    "answer": 0
  },
  {
    "q": "What does the Irish word mac mean?",
    "options": [
      "Son",
      "Daughter",
      "Father",
      "Nephew"
    ],
    "answer": 0
  },
  {
    "q": "What does the Irish word iníon mean?",
    "options": [
      "Daughter",
      "Son",
      "Sister",
      "Mother"
    ],
    "answer": 0
  },
  {
    "q": "What does the Irish word seanmháthair mean?",
    "options": [
      "Grandmother",
      "Grandfather",
      "Aunt",
      "Mother"
    ],
    "answer": 0
  },
  {
    "q": "What does the Irish word seanathair mean?",
    "options": [
      "Grandfather",
      "Grandmother",
      "Uncle",
      "Father"
    ],
    "answer": 0
  },
  {
    "q": "What does the Irish word clann mean?",
    "options": [
      "Family or children",
      "House",
      "Village",
      "Friends"
    ],
    "answer": 0
  },
  {
    "q": "What does the Irish word cara mean?",
    "options": [
      "Friend",
      "Enemy",
      "Stranger",
      "Neighbour"
    ],
    "answer": 0
  },
  {
    "q": "What part of the body is the Irish word ceann?",
    "options": [
      "Head",
      "Hand",
      "Foot",
      "Eye"
    ],
    "answer": 0
  },
  {
    "q": "What part of the body is the Irish word lámh?",
    "options": [
      "Hand",
      "Head",
      "Leg",
      "Ear"
    ],
    "answer": 0
  },
  {
    "q": "What part of the body is the Irish word cos?",
    "options": [
      "Foot or leg",
      "Hand",
      "Head",
      "Nose"
    ],
    "answer": 0
  },
  {
    "q": "What part of the body is the Irish word súil?",
    "options": [
      "Eye",
      "Ear",
      "Mouth",
      "Nose"
    ],
    "answer": 0
  },
  {
    "q": "What part of the body is the Irish word cluas?",
    "options": [
      "Ear",
      "Eye",
      "Lip",
      "Tooth"
    ],
    "answer": 0
  },
  {
    "q": "What part of the body is the Irish word béal?",
    "options": [
      "Mouth",
      "Nose",
      "Chin",
      "Cheek"
    ],
    "answer": 0
  },
  {
    "q": "What part of the body is the Irish word srón?",
    "options": [
      "Nose",
      "Mouth",
      "Eye",
      "Ear"
    ],
    "answer": 0
  },
  {
    "q": "What part of the body is the Irish word gruaig?",
    "options": [
      "Hair",
      "Skin",
      "Tooth",
      "Nail"
    ],
    "answer": 0
  },
  {
    "q": "What does the Irish word grian mean?",
    "options": [
      "Sun",
      "Moon",
      "Star",
      "Cloud"
    ],
    "answer": 0
  },
  {
    "q": "What does the Irish word báisteach mean?",
    "options": [
      "Rain",
      "Snow",
      "Wind",
      "Frost"
    ],
    "answer": 0
  },
  {
    "q": "What does the Irish word sneachta mean?",
    "options": [
      "Snow",
      "Rain",
      "Hail",
      "Ice"
    ],
    "answer": 0
  },
  {
    "q": "What does the Irish word gaoth mean?",
    "options": [
      "Wind",
      "Storm",
      "Rain",
      "Cloud"
    ],
    "answer": 0
  },
  {
    "q": "What does the Irish word scamall mean?",
    "options": [
      "Cloud",
      "Sky",
      "Sun",
      "Rainbow"
    ],
    "answer": 0
  },
  {
    "q": "What does the Irish word spéir mean?",
    "options": [
      "Sky",
      "Sea",
      "Earth",
      "Cloud"
    ],
    "answer": 0
  },
  {
    "q": "What does the Irish word teach mean?",
    "options": [
      "House",
      "Shop",
      "School",
      "Church"
    ],
    "answer": 0
  },
  {
    "q": "What does the Irish word leabhar mean?",
    "options": [
      "Book",
      "Pen",
      "Paper",
      "Table"
    ],
    "answer": 0
  },
  {
    "q": "What does the Irish word doras mean?",
    "options": [
      "Door",
      "Window",
      "Wall",
      "Roof"
    ],
    "answer": 0
  },
  {
    "q": "What does the Irish word bóthar mean?",
    "options": [
      "Road",
      "River",
      "Bridge",
      "Path"
    ],
    "answer": 0
  },
  {
    "q": "What does the Irish word carr mean?",
    "options": [
      "Car",
      "Bus",
      "Train",
      "Boat"
    ],
    "answer": 0
  },
  {
    "q": "What does the Irish word bád mean?",
    "options": [
      "Boat",
      "Car",
      "Plane",
      "Bicycle"
    ],
    "answer": 0
  },
  {
    "q": "What does the Irish word scoil mean?",
    "options": [
      "School",
      "Shop",
      "Hospital",
      "Library"
    ],
    "answer": 0
  },
  {
    "q": "What does the Irish word siopa mean?",
    "options": [
      "Shop",
      "School",
      "House",
      "Office"
    ],
    "answer": 0
  },
  {
    "q": "What does the Irish word obair mean?",
    "options": [
      "Work",
      "Rest",
      "Play",
      "Sleep"
    ],
    "answer": 0
  },
  {
    "q": "What does the Irish word airgead mean?",
    "options": [
      "Money or silver",
      "Gold",
      "Copper",
      "Iron"
    ],
    "answer": 0
  },
  {
    "q": "What does the Irish verb ith mean?",
    "options": [
      "Eat",
      "Drink",
      "Sleep",
      "Run"
    ],
    "answer": 0
  },
  {
    "q": "What does the Irish verb ól mean?",
    "options": [
      "Drink",
      "Eat",
      "Walk",
      "Sing"
    ],
    "answer": 0
  },
  {
    "q": "What does the Irish verb rith mean?",
    "options": [
      "Run",
      "Walk",
      "Jump",
      "Sit"
    ],
    "answer": 0
  },
  {
    "q": "What does the Irish verb codail mean?",
    "options": [
      "Sleep",
      "Wake",
      "Dream",
      "Rest"
    ],
    "answer": 0
  },
  {
    "q": "What does the Irish verb léigh mean?",
    "options": [
      "Read",
      "Write",
      "Speak",
      "Listen"
    ],
    "answer": 0
  },
  {
    "q": "What does the Irish verb scríobh mean?",
    "options": [
      "Write",
      "Read",
      "Draw",
      "Count"
    ],
    "answer": 0
  },
  {
    "q": "What does the Irish verb féach mean?",
    "options": [
      "Look",
      "Hear",
      "Touch",
      "Smell"
    ],
    "answer": 0
  },
  {
    "q": "What does the Irish verb siúil mean?",
    "options": [
      "Walk",
      "Run",
      "Stand",
      "Fall"
    ],
    "answer": 0
  },
  {
    "q": "What does the Irish word inniu mean?",
    "options": [
      "Today",
      "Tomorrow",
      "Yesterday",
      "Tonight"
    ],
    "answer": 0
  },
  {
    "q": "What does the Irish word amárach mean?",
    "options": [
      "Tomorrow",
      "Today",
      "Yesterday",
      "Now"
    ],
    "answer": 0
  },
  {
    "q": "What does the Irish word inné mean?",
    "options": [
      "Yesterday",
      "Today",
      "Tomorrow",
      "Later"
    ],
    "answer": 0
  },
  {
    "q": "What does the Irish word lá mean?",
    "options": [
      "Day",
      "Night",
      "Week",
      "Year"
    ],
    "answer": 0
  },
  {
    "q": "What does the Irish word oíche mean?",
    "options": [
      "Night",
      "Day",
      "Morning",
      "Evening"
    ],
    "answer": 0
  },
  {
    "q": "What does the Irish word maidin mean?",
    "options": [
      "Morning",
      "Evening",
      "Noon",
      "Midnight"
    ],
    "answer": 0
  },
  {
    "q": "What does the Irish word bliain mean?",
    "options": [
      "Year",
      "Month",
      "Week",
      "Hour"
    ],
    "answer": 0
  },
  {
    "q": "What does the Irish word seachtain mean?",
    "options": [
      "Week",
      "Year",
      "Day",
      "Month"
    ],
    "answer": 0
  },
  {
    "q": "What does the Irish phrase Conas atá tú? mean?",
    "options": [
      "How are you?",
      "What is your name?",
      "Where are you?",
      "Who are you?"
    ],
    "answer": 0
  },
  {
    "q": "What does the Irish phrase le do thoil mean?",
    "options": [
      "Please",
      "Thank you",
      "Sorry",
      "Welcome"
    ],
    "answer": 0
  },
  {
    "q": "What does the Irish phrase tá brón orm mean?",
    "options": [
      "I am sorry",
      "I am happy",
      "I am tired",
      "I am hungry"
    ],
    "answer": 0
  },
  {
    "q": "What does the Irish phrase Cad is ainm duit? mean?",
    "options": [
      "What is your name?",
      "How old are you?",
      "Where do you live?",
      "How are you?"
    ],
    "answer": 0
  },
  {
    "q": "What does the Irish phrase oíche mhaith mean?",
    "options": [
      "Good night",
      "Good morning",
      "Good evening",
      "Good day"
    ],
    "answer": 0
  },
  {
    "q": "What does the Irish phrase maidin mhaith mean?",
    "options": [
      "Good morning",
      "Good night",
      "Good afternoon",
      "Good evening"
    ],
    "answer": 0
  },
  {
    "q": "What does the Irish phrase tá go maith mean?",
    "options": [
      "It is good or fine",
      "It is bad",
      "It is cold",
      "It is late"
    ],
    "answer": 0
  },
  {
    "q": "What does the Irish phrase go n-éirí an bóthar leat mean?",
    "options": [
      "May the road rise with you",
      "Have a good night",
      "Welcome home",
      "Safe travels home"
    ],
    "answer": 0
  },
  {
    "q": "What does the Irish word tá mean?",
    "options": [
      "Is or yes (it is)",
      "No",
      "Maybe",
      "Why"
    ],
    "answer": 0
  },
  {
    "q": "What does the Irish word agus mean?",
    "options": [
      "And",
      "But",
      "Or",
      "If"
    ],
    "answer": 0
  },
  {
    "q": "What does the Irish word mór mean?",
    "options": [
      "Big",
      "Small",
      "Fast",
      "Slow"
    ],
    "answer": 0
  },
  {
    "q": "What does the Irish word beag mean?",
    "options": [
      "Small",
      "Big",
      "Tall",
      "Wide"
    ],
    "answer": 0
  },
  {
    "q": "What does the Irish word maith mean?",
    "options": [
      "Good",
      "Bad",
      "Old",
      "New"
    ],
    "answer": 0
  },
  {
    "q": "What does the Irish word te mean?",
    "options": [
      "Hot",
      "Cold",
      "Warm",
      "Wet"
    ],
    "answer": 0
  },
  {
    "q": "What does the Irish word fuar mean?",
    "options": [
      "Cold",
      "Hot",
      "Dry",
      "Damp"
    ],
    "answer": 0
  },
  {
    "q": "What does the Irish word nua mean?",
    "options": [
      "New",
      "Old",
      "Young",
      "Broken"
    ],
    "answer": 0
  },
  {
    "q": "What does the Irish word sean mean?",
    "options": [
      "Old",
      "New",
      "Big",
      "Fast"
    ],
    "answer": 0
  },
  {
    "q": "What does the Irish word ard mean?",
    "options": [
      "High or tall",
      "Low",
      "Deep",
      "Narrow"
    ],
    "answer": 0
  },
  {
    "q": "In place names, what does the element baile (bally) mean?",
    "options": [
      "Town or homestead",
      "River",
      "Hill",
      "Wood"
    ],
    "answer": 0
  },
  {
    "q": "In place names, what does the element dún mean?",
    "options": [
      "Fort",
      "Lake",
      "Field",
      "Bridge"
    ],
    "answer": 0
  },
  {
    "q": "In place names, what does the element cill (kil) usually mean?",
    "options": [
      "Church",
      "Castle",
      "Market",
      "Harbour"
    ],
    "answer": 0
  },
  {
    "q": "In place names, what does the element loch mean?",
    "options": [
      "Lake",
      "Hill",
      "Wood",
      "Road"
    ],
    "answer": 0
  },
  {
    "q": "In place names, what does the element gleann (glen) mean?",
    "options": [
      "Valley or glen",
      "Peak",
      "Beach",
      "Island"
    ],
    "answer": 0
  },
  {
    "q": "In place names, what does the element cnoc (knock) mean?",
    "options": [
      "Hill",
      "Lake",
      "Fort",
      "Church"
    ],
    "answer": 0
  },
  {
    "q": "In place names, what does the element inis mean?",
    "options": [
      "Island",
      "Mountain",
      "Bridge",
      "Meadow"
    ],
    "answer": 0
  },
  {
    "q": "In place names, what does the element droichead mean?",
    "options": [
      "Bridge",
      "Ford",
      "Tower",
      "Wall"
    ],
    "answer": 0
  },
  {
    "q": "In place names, what does the element áth (ath) mean?",
    "options": [
      "Ford",
      "Bridge",
      "Island",
      "Hill"
    ],
    "answer": 0
  },
  {
    "q": "In place names, what does the element ros often mean?",
    "options": [
      "Wood or headland",
      "Lake",
      "Castle",
      "Market"
    ],
    "answer": 0
  },
  {
    "q": "In place names, what does the element sliabh mean?",
    "options": [
      "Mountain",
      "River",
      "Valley",
      "Town"
    ],
    "answer": 0
  },
  {
    "q": "In place names, what does the element abhainn mean?",
    "options": [
      "River",
      "Lake",
      "Sea",
      "Spring"
    ],
    "answer": 0
  },
  {
    "q": "In place names, what does the element carraig mean?",
    "options": [
      "Rock",
      "Sand",
      "Marsh",
      "Field"
    ],
    "answer": 0
  },
  {
    "q": "In place names, what does the element caisleán mean?",
    "options": [
      "Castle",
      "Church",
      "Fort",
      "Tower"
    ],
    "answer": 0
  },
  {
    "q": "In place names, what does the element doire (derry) mean?",
    "options": [
      "Oak wood",
      "Pine forest",
      "Beach",
      "Bog"
    ],
    "answer": 0
  },
  {
    "q": "In place names, what does the element trá mean?",
    "options": [
      "Beach or strand",
      "Cliff",
      "Harbour",
      "Bay"
    ],
    "answer": 0
  },
  {
    "q": "In place names, what does the element port mean?",
    "options": [
      "Port or landing place",
      "Hill",
      "Wood",
      "Lake"
    ],
    "answer": 0
  },
  {
    "q": "In place names, what does the element gort mean?",
    "options": [
      "Field",
      "Garden",
      "Wood",
      "Bog"
    ],
    "answer": 0
  },
  {
    "q": "In place names, what does the element lios mean?",
    "options": [
      "Ring-fort",
      "Bridge",
      "Mill",
      "Harbour"
    ],
    "answer": 0
  },
  {
    "q": "In place names, what does the element mullach mean?",
    "options": [
      "Summit or top",
      "Bottom",
      "Edge",
      "Middle"
    ],
    "answer": 0
  },
  {
    "q": "What is the Irish name for the province of Leinster?",
    "options": [
      "Laighin",
      "Mumhan",
      "Connacht",
      "Ulaidh"
    ],
    "answer": 0
  },
  {
    "q": "What is the Irish name for the province of Munster?",
    "options": [
      "Mumhan",
      "Laighin",
      "Connacht",
      "Ulaidh"
    ],
    "answer": 0
  },
  {
    "q": "What is the Irish name for the province of Connacht?",
    "options": [
      "Connachta",
      "Mumhan",
      "Laighin",
      "Ulaidh"
    ],
    "answer": 0
  },
  {
    "q": "What is the Irish name for the province of Ulster?",
    "options": [
      "Ulaidh",
      "Laighin",
      "Mumhan",
      "Connachta"
    ],
    "answer": 0
  },
  {
    "q": "What is the Irish name for the city of Dublin?",
    "options": [
      "Baile Átha Cliath",
      "Corcaigh",
      "Gaillimh",
      "Luimneach"
    ],
    "answer": 0
  },
  {
    "q": "What is the Irish name for the county and city of Cork?",
    "options": [
      "Corcaigh",
      "Ciarraí",
      "Port Láirge",
      "Loch Garman"
    ],
    "answer": 0
  },
  {
    "q": "What is the Irish name for the county and city of Galway?",
    "options": [
      "Gaillimh",
      "Maigh Eo",
      "Sligeach",
      "Dún na nGall"
    ],
    "answer": 0
  },
  {
    "q": "What is the Irish name for the county of Kerry?",
    "options": [
      "Ciarraí",
      "Corcaigh",
      "An Clár",
      "Luimneach"
    ],
    "answer": 0
  },
  {
    "q": "What is the Irish name for the county of Donegal?",
    "options": [
      "Dún na nGall",
      "Doire",
      "Tír Eoghain",
      "Muineachán"
    ],
    "answer": 0
  },
  {
    "q": "What is the Irish name for the county of Mayo?",
    "options": [
      "Maigh Eo",
      "Gaillimh",
      "Sligeach",
      "Liatroim"
    ],
    "answer": 0
  },
  {
    "q": "What does the word Gaeltacht refer to?",
    "options": [
      "An Irish-speaking region",
      "A type of dance",
      "An old castle",
      "A church festival"
    ],
    "answer": 0
  },
  {
    "q": "In which county is the Connemara Gaeltacht located?",
    "options": [
      "Galway",
      "Kerry",
      "Donegal",
      "Cork"
    ],
    "answer": 0
  },
  {
    "q": "The Dingle peninsula Gaeltacht (Corca Dhuibhne) is in which county?",
    "options": [
      "Kerry",
      "Clare",
      "Cork",
      "Limerick"
    ],
    "answer": 0
  },
  {
    "q": "The Gaoth Dobhair (Gweedore) Gaeltacht is in which county?",
    "options": [
      "Donegal",
      "Mayo",
      "Sligo",
      "Galway"
    ],
    "answer": 0
  },
  {
    "q": "What is the Irish word for the Irish language itself?",
    "options": [
      "Gaeilge",
      "Béarla",
      "Gaelach",
      "Éireann"
    ],
    "answer": 0
  },
  {
    "q": "What does the Irish word Béarla mean?",
    "options": [
      "The English language",
      "The Irish language",
      "A dialect",
      "An accent"
    ],
    "answer": 0
  },
  {
    "q": "What does the Irish word Éire mean?",
    "options": [
      "Ireland",
      "England",
      "Scotland",
      "Wales"
    ],
    "answer": 0
  },
  {
    "q": "The Irish word smithereens, used in English, comes from a word meaning what?",
    "options": [
      "Small fragments",
      "Loud noise",
      "Quick steps",
      "Bright lights"
    ],
    "answer": 0
  },
  {
    "q": "The English word galore comes from the Irish go leor, meaning what?",
    "options": [
      "Plenty or enough",
      "Goodbye",
      "Quickly",
      "Together"
    ],
    "answer": 0
  },
  {
    "q": "The English word brogue (a shoe or accent) comes from the Irish bróg, meaning what?",
    "options": [
      "Shoe",
      "Hat",
      "Coat",
      "Glove"
    ],
    "answer": 0
  },
  {
    "q": "The English word banshee comes from bean sí, meaning what?",
    "options": [
      "Fairy woman",
      "Old hag",
      "Sea witch",
      "Wise man"
    ],
    "answer": 0
  },
  {
    "q": "The word whiskey derives from the Irish uisce beatha, meaning what?",
    "options": [
      "Water of life",
      "Fire water",
      "Strong drink",
      "Golden water"
    ],
    "answer": 0
  },
  {
    "q": "The word slogan comes from the Irish sluagh-ghairm, originally meaning what?",
    "options": [
      "A battle cry",
      "A market call",
      "A church bell",
      "A drinking song"
    ],
    "answer": 0
  },
  {
    "q": "The English word colleen comes from cailín, meaning what?",
    "options": [
      "Girl",
      "Boy",
      "Woman",
      "Child"
    ],
    "answer": 0
  },
  {
    "q": "What does the Irish word buachaill mean?",
    "options": [
      "Boy",
      "Girl",
      "Man",
      "Child"
    ],
    "answer": 0
  },
  {
    "q": "What does the Irish word cailín mean?",
    "options": [
      "Girl",
      "Boy",
      "Woman",
      "Baby"
    ],
    "answer": 0
  },
  {
    "q": "What does the Irish word fearg mean?",
    "options": [
      "Anger",
      "Joy",
      "Fear",
      "Sadness"
    ],
    "answer": 0
  },
  {
    "q": "What does the Irish word áthas mean?",
    "options": [
      "Happiness",
      "Sadness",
      "Anger",
      "Hunger"
    ],
    "answer": 0
  },
  {
    "q": "What does the Irish word ocras mean?",
    "options": [
      "Hunger",
      "Thirst",
      "Tiredness",
      "Cold"
    ],
    "answer": 0
  },
  {
    "q": "What does the Irish word tuirseach mean?",
    "options": [
      "Tired",
      "Hungry",
      "Happy",
      "Angry"
    ],
    "answer": 0
  },
  {
    "q": "What does the Irish word asal mean?",
    "options": [
      "Donkey",
      "Pony",
      "Mule",
      "Ox"
    ],
    "answer": 0
  },
  {
    "q": "What does the Irish word luch mean?",
    "options": [
      "Mouse",
      "Rat",
      "Rabbit",
      "Squirrel"
    ],
    "answer": 0
  },
  {
    "q": "What does the Irish word coinín mean?",
    "options": [
      "Rabbit",
      "Hare",
      "Mouse",
      "Fox"
    ],
    "answer": 0
  },
  {
    "q": "What does the Irish word teaghlach mean?",
    "options": [
      "Household or family",
      "Village",
      "Tribe",
      "Crowd"
    ],
    "answer": 0
  },
  {
    "q": "What does the Irish word gairdín mean?",
    "options": [
      "Garden",
      "Field",
      "Yard",
      "Park"
    ],
    "answer": 0
  },
  {
    "q": "What does the Irish word fuinneog mean?",
    "options": [
      "Window",
      "Door",
      "Wall",
      "Floor"
    ],
    "answer": 0
  },
  {
    "q": "What does the Irish word talamh mean?",
    "options": [
      "Land or ground",
      "Sky",
      "Sea",
      "Air"
    ],
    "answer": 0
  },
  {
    "q": "What does the Irish word farraige mean?",
    "options": [
      "Sea",
      "River",
      "Lake",
      "Pond"
    ],
    "answer": 0
  },
  {
    "q": "What does the Irish word crann mean?",
    "options": [
      "Tree",
      "Flower",
      "Grass",
      "Bush"
    ],
    "answer": 0
  },
  {
    "q": "What does the Irish word bláth mean?",
    "options": [
      "Flower",
      "Leaf",
      "Root",
      "Seed"
    ],
    "answer": 0
  },
  {
    "q": "In Irish slang, what does 'locked' mean?",
    "options": [
      "Very drunk",
      "Locked out",
      "Confused",
      "Tired"
    ],
    "answer": 0
  },
  {
    "q": "If something is 'deadly', it is...",
    "options": [
      "Excellent",
      "Dangerous",
      "Boring",
      "Cheap"
    ],
    "answer": 0
  },
  {
    "q": "What does 'banjaxed' mean? (broken)",
    "options": [
      "Broken or ruined",
      "Delicious",
      "Hilarious",
      "Expensive"
    ],
    "answer": 0
  },
  {
    "q": "If you are 'scarlet', you are...",
    "options": [
      "Mortified or embarrassed",
      "Furious",
      "Sunburnt",
      "Drunk"
    ],
    "answer": 0
  },
  {
    "q": "A 'chancer' is someone who...",
    "options": [
      "Takes risks or tries to get away with things",
      "Is very shy",
      "Never gambles",
      "Is extremely wealthy"
    ],
    "answer": 0
  },
  {
    "q": "If the weather or food is 'manky', it is...",
    "options": [
      "Dirty or unpleasant",
      "Lovely",
      "Expensive",
      "Spicy"
    ],
    "answer": 0
  },
  {
    "q": "Describing a person as 'sound' means they are...",
    "options": [
      "Decent and reliable",
      "Very loud",
      "Asleep",
      "Unwell"
    ],
    "answer": 0
  },
  {
    "q": "In Ireland, calling something 'gas' means it is...",
    "options": [
      "Very funny",
      "Smelly",
      "Cheap",
      "Fast"
    ],
    "answer": 0
  },
  {
    "q": "If you are 'jaded', you are...",
    "options": [
      "Exhausted",
      "Annoyed",
      "Hungry",
      "Excited"
    ],
    "answer": 0
  },
  {
    "q": "A 'cute hoor' is a person who is...",
    "options": [
      "Cunning and self-serving",
      "Very attractive",
      "Extremely honest",
      "Always late"
    ],
    "answer": 0
  },
  {
    "q": "If something is 'savage', it is...",
    "options": [
      "Brilliant or great",
      "Violent only",
      "Disgusting",
      "Tiny"
    ],
    "answer": 0
  },
  {
    "q": "To be 'in bits' means to be...",
    "options": [
      "Very upset or in a bad state",
      "Wealthy",
      "Organised",
      "Calm"
    ],
    "answer": 0
  },
  {
    "q": "What does 'mitching' mean?",
    "options": [
      "Skipping school",
      "Telling lies",
      "Eating quickly",
      "Dancing badly"
    ],
    "answer": 0
  },
  {
    "q": "If a child is being 'bold', they are...",
    "options": [
      "Naughty or misbehaving",
      "Very brave",
      "Quiet",
      "Generous"
    ],
    "answer": 0
  },
  {
    "q": "'Give it a lash' means to...",
    "options": [
      "Give it a go",
      "Tie it up",
      "Throw it away",
      "Hit someone"
    ],
    "answer": 0
  },
  {
    "q": "If you are 'raging', you are...",
    "options": [
      "Very annoyed",
      "Delighted",
      "Sleepy",
      "Lost"
    ],
    "answer": 0
  },
  {
    "q": "Being 'delira' (and 'excira') means you are...",
    "options": [
      "Delighted and excited",
      "Confused and lost",
      "Sick and tired",
      "Cold and wet"
    ],
    "answer": 0
  },
  {
    "q": "A 'dose' (as in 'he is a dose') refers to...",
    "options": [
      "An annoying person",
      "A generous person",
      "A doctor",
      "A drink"
    ],
    "answer": 0
  },
  {
    "q": "What does 'a dose' often mean about your health?",
    "options": [
      "A bout of illness like a cold or flu",
      "A full recovery",
      "A medical check-up",
      "A hangover cure"
    ],
    "answer": 0
  },
  {
    "q": "If you 'foostered' around, you...",
    "options": [
      "Fumbled or wasted time",
      "Ran very fast",
      "Argued loudly",
      "Cooked a meal"
    ],
    "answer": 0
  },
  {
    "q": "A 'wagon' (about a person) usually means...",
    "options": [
      "A disagreeable or nasty woman",
      "A strong man",
      "A fast car",
      "A child"
    ],
    "answer": 0
  },
  {
    "q": "In Cork slang, a 'langer' is...",
    "options": [
      "An idiot or annoying person",
      "A clever person",
      "A good friend",
      "A small dog"
    ],
    "answer": 0
  },
  {
    "q": "If you are 'mortified', you are...",
    "options": [
      "Deeply embarrassed",
      "Frightened",
      "Exhausted",
      "Furious"
    ],
    "answer": 0
  },
  {
    "q": "'Donkey's years' means...",
    "options": [
      "A very long time",
      "Hard work",
      "A short while",
      "Old age in animals"
    ],
    "answer": 0
  },
  {
    "q": "If something is 'minging', it is...",
    "options": [
      "Disgusting or smelly",
      "Beautiful",
      "Expensive",
      "Lucky"
    ],
    "answer": 0
  },
  {
    "q": "To be 'fluthered' means to be...",
    "options": [
      "Very drunk",
      "Confused",
      "Out of breath",
      "Frozen"
    ],
    "answer": 0
  },
  {
    "q": "Being 'ossified' is a way of saying you are...",
    "options": [
      "Extremely drunk",
      "Very old",
      "Stubborn",
      "Stiff and sore"
    ],
    "answer": 0
  },
  {
    "q": "If you give someone 'a bollocking', you...",
    "options": [
      "Tell them off harshly",
      "Give them a gift",
      "Buy them a drink",
      "Ignore them"
    ],
    "answer": 0
  },
  {
    "q": "In Hiberno-English, a 'melt' (as in 'you melt') is...",
    "options": [
      "An idiot",
      "A great cook",
      "A warm coat",
      "A close friend"
    ],
    "answer": 0
  },
  {
    "q": "Calling someone 'a gowl' means they are...",
    "options": [
      "A fool or idiot",
      "A hero",
      "A gossip",
      "A miser"
    ],
    "answer": 0
  },
  {
    "q": "If you are 'scundered' (Northern Ireland), you are...",
    "options": [
      "Embarrassed or fed up",
      "Overjoyed",
      "Drunk",
      "Hungry"
    ],
    "answer": 0
  },
  {
    "q": "'The head on you' is usually a comment about someone's...",
    "options": [
      "Foolish look or behaviour",
      "Hairstyle only",
      "Intelligence",
      "Height"
    ],
    "answer": 0
  },
  {
    "q": "Greeting someone with 'Story horse?' means...",
    "options": [
      "What's the news / how are you?",
      "Where are the horses?",
      "Tell me a story later",
      "Are you tired?"
    ],
    "answer": 0
  },
  {
    "q": "Saying 'well?' as a greeting in Ireland means...",
    "options": [
      "How are you / what's up?",
      "Are you healthy?",
      "Is the water deep?",
      "Are you finished?"
    ],
    "answer": 0
  },
  {
    "q": "If someone is a 'ride', it means they are...",
    "options": [
      "Very attractive",
      "A taxi driver",
      "Annoying",
      "Generous"
    ],
    "answer": 0
  },
  {
    "q": "A 'gobshite' is...",
    "options": [
      "A foolish, stupid person",
      "A talented singer",
      "A type of fish",
      "A reliable worker"
    ],
    "answer": 0
  },
  {
    "q": "If you are 'gutted', you are...",
    "options": [
      "Very disappointed",
      "Overfed",
      "Delighted",
      "Exhausted"
    ],
    "answer": 0
  },
  {
    "q": "Describing a night out as 'a session' means...",
    "options": [
      "A long bout of drinking and fun",
      "A short meeting",
      "A study period",
      "A football match"
    ],
    "answer": 0
  },
  {
    "q": "'On the lash' means...",
    "options": [
      "Out drinking",
      "Working hard",
      "Getting a haircut",
      "Telling off"
    ],
    "answer": 0
  },
  {
    "q": "If you are 'flahed out' (or 'flahed'), you are...",
    "options": [
      "Worn out and exhausted",
      "Showing off",
      "Very full",
      "Soaking wet"
    ],
    "answer": 0
  },
  {
    "q": "A 'header' (about a person) is someone who is...",
    "options": [
      "A bit mad or reckless",
      "Very intelligent",
      "Tall",
      "A footballer"
    ],
    "answer": 0
  },
  {
    "q": "If something is 'a doddle', it is...",
    "options": [
      "Very easy",
      "Very hard",
      "Pointless",
      "Expensive"
    ],
    "answer": 0
  },
  {
    "q": "To be 'mad for road' means you are...",
    "options": [
      "Eager to get going or out",
      "Lost while driving",
      "Very tired",
      "Afraid of traffic"
    ],
    "answer": 0
  },
  {
    "q": "If someone 'hasn't a baldy', they...",
    "options": [
      "Have no idea or no chance",
      "Are bald",
      "Are very rich",
      "Are very fast"
    ],
    "answer": 0
  },
  {
    "q": "Telling someone to 'go way outta that' usually expresses...",
    "options": [
      "Disbelief or 'you can't be serious'",
      "A direction to leave",
      "An apology",
      "A warning of danger"
    ],
    "answer": 0
  },
  {
    "q": "If you 'made a holy show' of yourself, you...",
    "options": [
      "Embarrassed yourself badly",
      "Performed brilliantly",
      "Went to mass",
      "Won a prize"
    ],
    "answer": 0
  },
  {
    "q": "Something described as 'an awful state' is...",
    "options": [
      "A bad mess or condition",
      "A great success",
      "A foreign country",
      "A small amount"
    ],
    "answer": 0
  },
  {
    "q": "A 'shift' (Irish teen slang) means...",
    "options": [
      "A kiss or making out",
      "A work rota",
      "A move house",
      "A dance move"
    ],
    "answer": 0
  },
  {
    "q": "If you 'got the shift', you...",
    "options": [
      "Kissed someone",
      "Got a new job",
      "Were moved on",
      "Got sick"
    ],
    "answer": 0
  },
  {
    "q": "Calling someone a 'messer' means they...",
    "options": [
      "Mess about and don't take things seriously",
      "Are very tidy",
      "Cook badly",
      "Are very strict"
    ],
    "answer": 0
  },
  {
    "q": "If you are 'in flitters', you are...",
    "options": [
      "Torn to pieces or in a bad state",
      "Flirting",
      "Very happy",
      "Wealthy"
    ],
    "answer": 0
  },
  {
    "q": "A 'fierce' amount of something means...",
    "options": [
      "A great deal",
      "A tiny bit",
      "Exactly enough",
      "None at all"
    ],
    "answer": 0
  },
  {
    "q": "If the rain is 'lashing', it is...",
    "options": [
      "Pouring heavily",
      "Barely drizzling",
      "Stopping",
      "Freezing"
    ],
    "answer": 0
  },
  {
    "q": "'Pure' used as an intensifier (e.g. 'pure delighted') means...",
    "options": [
      "Completely or really",
      "Clean",
      "Slightly",
      "Pretend"
    ],
    "answer": 0
  },
  {
    "q": "If you 'haven't a notion', you...",
    "options": [
      "Have no idea",
      "Have a great plan",
      "Are very busy",
      "Feel romantic"
    ],
    "answer": 0
  },
  {
    "q": "Describing food as 'only gorgeous' means it is...",
    "options": [
      "Absolutely delicious",
      "Slightly tasty",
      "Overcooked",
      "Too expensive"
    ],
    "answer": 0
  },
  {
    "q": "If someone is 'away with the fairies', they are...",
    "options": [
      "Daydreaming or not all there",
      "On holiday",
      "Very religious",
      "Drunk"
    ],
    "answer": 0
  },
  {
    "q": "A person 'on the pig's back' is...",
    "options": [
      "Doing very well in life",
      "In serious trouble",
      "Working on a farm",
      "Lost"
    ],
    "answer": 0
  },
  {
    "q": "If you 'took a notion', you...",
    "options": [
      "Suddenly decided to do something",
      "Took offence",
      "Got an idea stolen",
      "Fell asleep"
    ],
    "answer": 0
  },
  {
    "q": "Saying 'the state of you' implies you look...",
    "options": [
      "A mess",
      "Wonderful",
      "Tired but smart",
      "Wealthy"
    ],
    "answer": 0
  },
  {
    "q": "If it is 'baltic' outside, it is...",
    "options": [
      "Freezing cold",
      "Boiling hot",
      "Very windy",
      "Foggy"
    ],
    "answer": 0
  },
  {
    "q": "A 'feed' (as in 'a good feed') means...",
    "options": [
      "A large meal",
      "Animal fodder only",
      "A small snack",
      "A drink"
    ],
    "answer": 0
  },
  {
    "q": "If you got 'a right feed of drink', you...",
    "options": [
      "Drank a lot",
      "Ate dinner",
      "Stayed sober",
      "Spilled your pint"
    ],
    "answer": 0
  },
  {
    "q": "Someone who is 'thick' in this context is...",
    "options": [
      "Stubborn or sulking/angry",
      "Overweight",
      "Generous",
      "Tall"
    ],
    "answer": 0
  },
  {
    "q": "To 'take the hump' means to...",
    "options": [
      "Become sulky or offended",
      "Carry a load",
      "Cheer up",
      "Fall asleep"
    ],
    "answer": 0
  },
  {
    "q": "If someone 'lost the run of themselves', they...",
    "options": [
      "Got carried away or out of control",
      "Got very fit",
      "Forgot directions",
      "Became shy"
    ],
    "answer": 0
  },
  {
    "q": "A 'shower' (as in 'that shower') refers to...",
    "options": [
      "A group of people, often disapprovingly",
      "Heavy rain",
      "A bathroom",
      "A gift"
    ],
    "answer": 0
  },
  {
    "q": "If you are 'puss on you' / 'a puss', you have...",
    "options": [
      "A sulky face",
      "A pet cat",
      "A big smile",
      "A bad cough"
    ],
    "answer": 0
  },
  {
    "q": "Calling someone a 'dryshite' means they are...",
    "options": [
      "Boring and no craic",
      "Very funny",
      "Dishonest",
      "Tidy"
    ],
    "answer": 0
  },
  {
    "q": "If you 'haven't the foggiest', you...",
    "options": [
      "Have no idea",
      "Are certain",
      "Are sleepy",
      "Feel cold"
    ],
    "answer": 0
  },
  {
    "q": "A 'gas ticket' is a person who is...",
    "options": [
      "Great fun / a character",
      "Very expensive",
      "Always serious",
      "A bus inspector"
    ],
    "answer": 0
  },
  {
    "q": "If your plans are 'banjaxed', they are...",
    "options": [
      "Ruined",
      "Confirmed",
      "Improved",
      "Delayed slightly"
    ],
    "answer": 0
  },
  {
    "q": "To be 'wrecked' means to be...",
    "options": [
      "Exhausted",
      "Crashed in a car",
      "Embarrassed",
      "Drunk only"
    ],
    "answer": 0
  },
  {
    "q": "If you are 'bursting', you usually...",
    "options": [
      "Badly need the toilet",
      "Are very happy",
      "Are overeating",
      "Are angry"
    ],
    "answer": 0
  },
  {
    "q": "Describing a person as 'a tool' means they are...",
    "options": [
      "An idiot",
      "Very useful",
      "Hardworking",
      "Wealthy"
    ],
    "answer": 0
  },
  {
    "q": "'Acting the bollocks' means...",
    "options": [
      "Behaving foolishly or messing",
      "Working hard",
      "Being polite",
      "Being brave"
    ],
    "answer": 0
  },
  {
    "q": "If you are 'cat' (as in 'it was cat'), it was...",
    "options": [
      "Terrible / awful",
      "Brilliant",
      "Funny",
      "Cold"
    ],
    "answer": 0
  },
  {
    "q": "'Cat melojen' (or 'cat malojin') describes something that is...",
    "options": [
      "Dreadful or very bad",
      "Excellent",
      "Hilarious",
      "Delicious"
    ],
    "answer": 0
  },
  {
    "q": "If something is 'rotten', in Irish use it often means...",
    "options": [
      "Awful or terrible",
      "Smelly fruit only",
      "Lucky",
      "Cheap"
    ],
    "answer": 0
  },
  {
    "q": "A 'right eejit' is...",
    "options": [
      "A complete fool",
      "A clever person",
      "A good neighbour",
      "A left-handed person"
    ],
    "answer": 0
  },
  {
    "q": "If you 'gave out yards' to someone, you...",
    "options": [
      "Scolded them at length",
      "Gave them money",
      "Measured a field",
      "Praised them"
    ],
    "answer": 0
  },
  {
    "q": "Describing the craic as 'ninety' means the fun was...",
    "options": [
      "Excellent / top notch",
      "Almost over",
      "Very expensive",
      "Disappointing"
    ],
    "answer": 0
  },
  {
    "q": "If you 'were only delighted', you were...",
    "options": [
      "Very pleased",
      "Mildly annoyed",
      "Disappointed",
      "Confused"
    ],
    "answer": 0
  },
  {
    "q": "Someone described as 'a chiseler' (Dublin) is...",
    "options": [
      "A child",
      "A burglar",
      "A carpenter",
      "A liar"
    ],
    "answer": 0
  },
  {
    "q": "In Dublin slang, a 'gurrier' is...",
    "options": [
      "A rough young fella",
      "A wealthy man",
      "A church-goer",
      "A fisherman"
    ],
    "answer": 0
  },
  {
    "q": "If you call someone 'me oul segotia', you mean they are...",
    "options": [
      "An old friend",
      "An enemy",
      "A stranger",
      "A child"
    ],
    "answer": 0
  },
  {
    "q": "A 'jackeen' is a slightly mocking term for...",
    "options": [
      "A Dubliner",
      "A farmer",
      "A foreigner",
      "A priest"
    ],
    "answer": 0
  },
  {
    "q": "If something is 'bockety', it is...",
    "options": [
      "Wobbly or unstable",
      "Brand new",
      "Very fast",
      "Shiny"
    ],
    "answer": 0
  },
  {
    "q": "A 'gander' (as in 'have a gander') means...",
    "options": [
      "A look",
      "A walk",
      "A male goose only",
      "A meal"
    ],
    "answer": 0
  },
  {
    "q": "If you are 'plámásing' someone, you are...",
    "options": [
      "Flattering them smoothly",
      "Shouting at them",
      "Ignoring them",
      "Robbing them"
    ],
    "answer": 0
  },
  {
    "q": "'Plámás' refers to...",
    "options": [
      "Flattery or smooth talk",
      "Hard work",
      "Bad weather",
      "A type of stew"
    ],
    "answer": 0
  },
  {
    "q": "If you 'haven't a bull's notion', you...",
    "options": [
      "Have no idea at all",
      "Have a strong plan",
      "Are very stubborn",
      "Own cattle"
    ],
    "answer": 0
  },
  {
    "q": "A 'spanner' (about a person) means they are...",
    "options": [
      "A clumsy fool",
      "Very clever",
      "A mechanic",
      "Tall"
    ],
    "answer": 0
  },
  {
    "q": "If you 'made a bags of' something, you...",
    "options": [
      "Made a mess of it",
      "Did it perfectly",
      "Packed it neatly",
      "Sold it"
    ],
    "answer": 0
  },
  {
    "q": "A 'flah' (Cork) can mean...",
    "options": [
      "A very attractive person",
      "An idiot",
      "A coward",
      "A liar"
    ],
    "answer": 0
  },
  {
    "q": "If someone is 'after their dinner', they...",
    "options": [
      "Have just had their dinner",
      "Want more food",
      "Cooked dinner",
      "Skipped dinner"
    ],
    "answer": 0
  },
  {
    "q": "The construction 'I'm after losing my keys' means...",
    "options": [
      "I have just lost my keys",
      "I am searching for keys",
      "I want new keys",
      "I gave away keys"
    ],
    "answer": 0
  },
  {
    "q": "If you 'do be' somewhere (e.g. 'I do be tired'), it describes...",
    "options": [
      "A habitual or repeated state",
      "A single past event",
      "A future plan",
      "A wish"
    ],
    "answer": 0
  },
  {
    "q": "Calling something 'massive' in Ireland means it is...",
    "options": [
      "Great or lovely",
      "Enormous in size only",
      "Heavy",
      "Ugly"
    ],
    "answer": 0
  },
  {
    "q": "If a person is 'a state', they are...",
    "options": [
      "A mess",
      "Very organised",
      "Government employed",
      "Calm"
    ],
    "answer": 0
  },
  {
    "q": "To 'go to town on' something means to...",
    "options": [
      "Do it with great enthusiasm",
      "Travel into the city",
      "Avoid it",
      "Do it badly"
    ],
    "answer": 0
  },
  {
    "q": "If you are 'chancing your arm', you are...",
    "options": [
      "Taking a risky try",
      "Injured",
      "Resting",
      "Boasting"
    ],
    "answer": 0
  },
  {
    "q": "A 'langball' or being 'langers' means you are...",
    "options": [
      "Very drunk",
      "Very tall",
      "Very clever",
      "Very tired"
    ],
    "answer": 0
  },
  {
    "q": "If something 'went pear-shaped', it...",
    "options": [
      "Went wrong",
      "Improved",
      "Got rounder",
      "Got cheaper"
    ],
    "answer": 0
  },
  {
    "q": "Calling someone 'a soft oul day' is wrong — but a 'soft lad' is...",
    "options": [
      "A foolish or gullible fella",
      "A strong man",
      "A gentle giant",
      "A baby"
    ],
    "answer": 0
  },
  {
    "q": "If you 'hadn't a tosser', you had...",
    "options": [
      "No money",
      "No friends",
      "No idea",
      "No luck"
    ],
    "answer": 0
  },
  {
    "q": "Being 'skint' means you are...",
    "options": [
      "Broke / out of money",
      "Injured",
      "Sunburnt",
      "Exhausted"
    ],
    "answer": 0
  },
  {
    "q": "A 'gobdaw' is...",
    "options": [
      "A foolish person",
      "A talkative bird",
      "A wealthy man",
      "A small boat"
    ],
    "answer": 0
  },
  {
    "q": "If you are 'effin and blindin', you are...",
    "options": [
      "Cursing and swearing",
      "Crying",
      "Praying",
      "Laughing"
    ],
    "answer": 0
  },
  {
    "q": "'Whisht!' is a way of telling someone to...",
    "options": [
      "Be quiet",
      "Hurry up",
      "Come here",
      "Sit down"
    ],
    "answer": 0
  },
  {
    "q": "If you 'hold your whisht', you...",
    "options": [
      "Stay quiet",
      "Hold a grudge",
      "Wait outside",
      "Keep your money"
    ],
    "answer": 0
  },
  {
    "q": "Calling someone 'a streel' means they are...",
    "options": [
      "Untidy or scruffy",
      "Very fast",
      "Generous",
      "Cheerful"
    ],
    "answer": 0
  },
  {
    "q": "A 'sleeveen' is a person who is...",
    "options": [
      "Sly and untrustworthy",
      "Hardworking",
      "Very shy",
      "Generous"
    ],
    "answer": 0
  },
  {
    "q": "If you are 'codding' someone, you are...",
    "options": [
      "Joking or fooling them",
      "Feeding them",
      "Insulting them",
      "Helping them"
    ],
    "answer": 0
  },
  {
    "q": "'You're only codding me!' expresses...",
    "options": [
      "Disbelief",
      "Anger",
      "Gratitude",
      "Boredom"
    ],
    "answer": 0
  },
  {
    "q": "If you 'got an awful land', you got...",
    "options": [
      "A big fright or shock",
      "A piece of property",
      "A bargain",
      "A reward"
    ],
    "answer": 0
  },
  {
    "q": "A 'rake of' something means...",
    "options": [
      "A large amount",
      "A garden tool only",
      "A tiny bit",
      "An exact half"
    ],
    "answer": 0
  },
  {
    "q": "If pints are 'a rake of pints', that's...",
    "options": [
      "A lot of pints",
      "Two pints",
      "No pints",
      "Cheap pints"
    ],
    "answer": 0
  },
  {
    "q": "Describing someone as 'a tonic' means they are...",
    "options": [
      "Cheering and good company",
      "Always sick",
      "A pharmacist",
      "Boring"
    ],
    "answer": 0
  },
  {
    "q": "If you 'got a clatter', you got...",
    "options": [
      "A smack or hit",
      "A reward",
      "A laugh",
      "A meal"
    ],
    "answer": 0
  },
  {
    "q": "A 'clatter of' children means...",
    "options": [
      "A large number of them",
      "A pair",
      "Noisy ones only",
      "Well-behaved ones"
    ],
    "answer": 0
  },
  {
    "q": "If you 'made shapes', you...",
    "options": [
      "Squared up looking for a fight",
      "Did exercise",
      "Drew pictures",
      "Cooked dinner"
    ],
    "answer": 0
  },
  {
    "q": "Calling weather 'close' means it is...",
    "options": [
      "Muggy and humid",
      "Nearby",
      "Cold",
      "Nearly over"
    ],
    "answer": 0
  },
  {
    "q": "If you are 'foundered', you are...",
    "options": [
      "Freezing cold",
      "Lost",
      "Wealthy",
      "Confused"
    ],
    "answer": 0
  },
  {
    "q": "A 'gowl' in Limerick slang is often a term for...",
    "options": [
      "An idiot",
      "A hero",
      "A pint",
      "A road"
    ],
    "answer": 0
  },
  {
    "q": "If you 'tipped away', you...",
    "options": [
      "Went off slowly / carried on",
      "Fell over",
      "Threw rubbish out",
      "Tidied up"
    ],
    "answer": 0
  },
  {
    "q": "'Tipping along nicely' means things are...",
    "options": [
      "Going grand / steadily fine",
      "Falling apart",
      "Speeding up dangerously",
      "Stopping"
    ],
    "answer": 0
  },
  {
    "q": "A 'boyo' is...",
    "options": [
      "A lad, sometimes a rogue",
      "A baby girl",
      "An old man",
      "A dog"
    ],
    "answer": 0
  },
  {
    "q": "If something is 'only massive altogether', it is...",
    "options": [
      "Really great",
      "Slightly disappointing",
      "Far too big",
      "Broken"
    ],
    "answer": 0
  },
  {
    "q": "A 'gom' or 'gommie' is...",
    "options": [
      "A simpleton",
      "A genius",
      "A bully",
      "A musician"
    ],
    "answer": 0
  },
  {
    "q": "If you are 'pure stuck', you are...",
    "options": [
      "In real difficulty",
      "Very lucky",
      "Glued",
      "Bored"
    ],
    "answer": 0
  },
  {
    "q": "To be 'snookered' means you are...",
    "options": [
      "In a tricky bind",
      "Playing pool",
      "Drunk",
      "Late"
    ],
    "answer": 0
  },
  {
    "q": "If you 'cop on', you...",
    "options": [
      "Wise up / realise sense",
      "Call the police",
      "Sit down",
      "Give up"
    ],
    "answer": 0
  },
  {
    "q": "Telling someone to 'have a bit of cop-on' means...",
    "options": [
      "Have some common sense",
      "Be quiet",
      "Hurry up",
      "Apologise"
    ],
    "answer": 0
  },
  {
    "q": "A 'fella' in everyday speech is...",
    "options": [
      "A man or guy",
      "A child",
      "A boss",
      "A stranger"
    ],
    "answer": 0
  },
  {
    "q": "If you 'gave it socks', you...",
    "options": [
      "Gave maximum effort",
      "Gave up",
      "Got dressed",
      "Were beaten"
    ],
    "answer": 0
  },
  {
    "q": "Describing someone as 'a quare hawk' means they are...",
    "options": [
      "An odd character",
      "A great hunter",
      "A wealthy man",
      "A bird-watcher"
    ],
    "answer": 0
  },
  {
    "q": "'Quare' in Hiberno-English usually means...",
    "options": [
      "Very or strange",
      "Square in shape",
      "Honest",
      "Quiet"
    ],
    "answer": 0
  },
  {
    "q": "If a place is 'down the country', it is...",
    "options": [
      "Outside Dublin / rural",
      "Underground",
      "Abroad",
      "By the sea"
    ],
    "answer": 0
  },
  {
    "q": "Someone 'up to ninety' is...",
    "options": [
      "Extremely busy or stressed",
      "Very old",
      "Speeding",
      "Half asleep"
    ],
    "answer": 0
  },
  {
    "q": "If you 'wouldn't be found dead' doing something, you...",
    "options": [
      "Would never do it",
      "Love doing it",
      "Do it secretly",
      "Did it once"
    ],
    "answer": 0
  },
  {
    "q": "A 'right ride' of a car would be...",
    "options": [
      "A great-looking car",
      "A broken car",
      "A cheap car",
      "A taxi"
    ],
    "answer": 0
  },
  {
    "q": "If you are 'on the dry', you are...",
    "options": [
      "Not drinking alcohol",
      "Drying laundry",
      "Out of money",
      "Sunbathing"
    ],
    "answer": 0
  },
  {
    "q": "'Throwing shapes' on the dancefloor means...",
    "options": [
      "Dancing flamboyantly",
      "Falling over",
      "Fighting",
      "Leaving early"
    ],
    "answer": 0
  },
  {
    "q": "If someone 'has a neck', they have...",
    "options": [
      "A lot of cheek or nerve",
      "A sore throat",
      "Good manners",
      "A scarf"
    ],
    "answer": 0
  },
  {
    "q": "The 'fear of God put into you' means you were...",
    "options": [
      "Badly frightened or warned",
      "Made very religious",
      "Cured of illness",
      "Given good news"
    ],
    "answer": 0
  },
  {
    "q": "If you 'wouldn't mind' something nice, you...",
    "options": [
      "Would quite like it",
      "Strongly dislike it",
      "Are indifferent",
      "Already have it"
    ],
    "answer": 0
  },
  {
    "q": "A 'gentle answer' to 'How's she cuttin'?' would be...",
    "options": [
      "Not too bad, and yourself?",
      "Mind your business",
      "Goodbye now",
      "It's raining"
    ],
    "answer": 0
  },
  {
    "q": "'How's she cuttin'?' is a way of asking...",
    "options": [
      "How are things?",
      "How sharp is the blade?",
      "What time is it?",
      "Where are you going?"
    ],
    "answer": 0
  },
  {
    "q": "If something is 'a hames', it is...",
    "options": [
      "A mess or botch",
      "A great success",
      "A horse harness only",
      "A bargain"
    ],
    "answer": 0
  },
  {
    "q": "To 'make a hames of' a job means to...",
    "options": [
      "Do it badly",
      "Finish it early",
      "Charge too much",
      "Do it perfectly"
    ],
    "answer": 0
  },
  {
    "q": "If your stomach is 'at you', it is...",
    "options": [
      "Giving you trouble / pain",
      "Rumbling happily",
      "Full",
      "Settled"
    ],
    "answer": 0
  },
  {
    "q": "'Now you're sucking diesel' means...",
    "options": [
      "Now you're doing it right",
      "Now you're broke",
      "Now you're lost",
      "Now you're tired"
    ],
    "answer": 0
  },
  {
    "q": "If you say 'I'm grand altogether', you mean you are...",
    "options": [
      "Perfectly fine",
      "Very wealthy",
      "Quite ill",
      "Extremely busy"
    ],
    "answer": 0
  },
  {
    "q": "A 'dose of the runs' means...",
    "options": [
      "Diarrhoea",
      "A jogging habit",
      "Good luck",
      "A bad cold"
    ],
    "answer": 0
  },
  {
    "q": "If someone is 'fond of the drop', they...",
    "options": [
      "Like a drink",
      "Are afraid of heights",
      "Cry easily",
      "Are careless"
    ],
    "answer": 0
  },
  {
    "q": "Calling a meal 'only mighty' means it was...",
    "options": [
      "Excellent",
      "Too small",
      "Burnt",
      "Bland"
    ],
    "answer": 0
  },
  {
    "q": "How many points is a goal worth in Gaelic football?",
    "options": [
      "3",
      "1",
      "2",
      "5"
    ],
    "answer": 0
  },
  {
    "q": "In hurling, how many points is a goal worth?",
    "options": [
      "3",
      "2",
      "1",
      "4"
    ],
    "answer": 0
  },
  {
    "q": "What is Tipperary's famous home GAA ground called?",
    "options": [
      "Semple Stadium",
      "Nowlan Park",
      "Pearse Stadium",
      "Walsh Park"
    ],
    "answer": 0
  },
  {
    "q": "In which town is Semple Stadium located?",
    "options": [
      "Thurles",
      "Clonmel",
      "Nenagh",
      "Cashel"
    ],
    "answer": 0
  },
  {
    "q": "What is Cork's main GAA stadium called?",
    "options": [
      "Pairc Ui Chaoimh",
      "Semple Stadium",
      "Nowlan Park",
      "Gaelic Grounds"
    ],
    "answer": 0
  },
  {
    "q": "What is Kilkenny's home hurling ground called?",
    "options": [
      "Nowlan Park",
      "Walsh Park",
      "Cusack Park",
      "Semple Stadium"
    ],
    "answer": 0
  },
  {
    "q": "What is Galway's main GAA stadium in Salthill called?",
    "options": [
      "Pearse Stadium",
      "Nowlan Park",
      "Cusack Park",
      "Markievicz Park"
    ],
    "answer": 0
  },
  {
    "q": "Who is widely regarded as the greatest hurler of all time from Cork?",
    "options": [
      "Christy Ring",
      "Jimmy Doyle",
      "Eddie Keher",
      "John Doyle"
    ],
    "answer": 0
  },
  {
    "q": "Which Kilkenny hurler won a record number of All-Ireland senior medals and 11 All-Stars?",
    "options": [
      "Henry Shefflin",
      "DJ Carey",
      "Eddie Keher",
      "Tommy Walsh"
    ],
    "answer": 0
  },
  {
    "q": "Which legendary Kerry footballer was famed for his fielding and play from Valentia Island?",
    "options": [
      "Mick O'Connell",
      "Mick O'Dwyer",
      "Jack O'Shea",
      "Pat Spillane"
    ],
    "answer": 0
  },
  {
    "q": "How many players are on a hurling team on the pitch?",
    "options": [
      "15",
      "13",
      "11",
      "17"
    ],
    "answer": 0
  },
  {
    "q": "What colour are Kilkenny's traditional hurling jerseys?",
    "options": [
      "Black and amber",
      "Blue and gold",
      "Green and gold",
      "Red and white"
    ],
    "answer": 0
  },
  {
    "q": "What are the traditional colours of the Kerry football team?",
    "options": [
      "Green and gold",
      "Blue and white",
      "Red and white",
      "Black and amber"
    ],
    "answer": 0
  },
  {
    "q": "What colour are the Dublin GAA jerseys?",
    "options": [
      "Sky blue and navy",
      "Green and gold",
      "Red and white",
      "Black and amber"
    ],
    "answer": 0
  },
  {
    "q": "What are Cork's traditional GAA colours?",
    "options": [
      "Red and white",
      "Blue and gold",
      "Green and gold",
      "Black and amber"
    ],
    "answer": 0
  },
  {
    "q": "What are Tipperary's traditional GAA colours?",
    "options": [
      "Blue and gold",
      "Red and white",
      "Green and gold",
      "Black and amber"
    ],
    "answer": 0
  },
  {
    "q": "What are Galway's traditional GAA colours?",
    "options": [
      "Maroon and white",
      "Blue and gold",
      "Red and white",
      "Green and gold"
    ],
    "answer": 0
  },
  {
    "q": "Which county is nicknamed 'The Rebels'?",
    "options": [
      "Cork",
      "Kerry",
      "Dublin",
      "Galway"
    ],
    "answer": 0
  },
  {
    "q": "Which county GAA team is nicknamed 'The Kingdom'?",
    "options": [
      "Kerry",
      "Cork",
      "Dublin",
      "Mayo"
    ],
    "answer": 0
  },
  {
    "q": "Which county is nicknamed 'The Cats' in hurling?",
    "options": [
      "Kilkenny",
      "Tipperary",
      "Cork",
      "Clare"
    ],
    "answer": 0
  },
  {
    "q": "What is the name of the famous Cork hurling and football rivalry county to the south-west?",
    "options": [
      "Kerry",
      "Limerick",
      "Waterford",
      "Clare"
    ],
    "answer": 0
  },
  {
    "q": "Which two counties contest one of hurling's oldest rivalries, often called the 'old enemy' clashes in Munster?",
    "options": [
      "Cork and Tipperary",
      "Galway and Mayo",
      "Dublin and Meath",
      "Down and Armagh"
    ],
    "answer": 0
  },
  {
    "q": "How long is a standard senior inter-county Gaelic football match (two halves)?",
    "options": [
      "70 minutes",
      "60 minutes",
      "80 minutes",
      "90 minutes"
    ],
    "answer": 0
  },
  {
    "q": "How many points are scored when the ball goes over the crossbar between the posts?",
    "options": [
      "1",
      "2",
      "3",
      "0"
    ],
    "answer": 0
  },
  {
    "q": "What is the name of the goalkeeper's large kick-out area marking in Gaelic football?",
    "options": [
      "The small rectangle",
      "The square circle",
      "The penalty box",
      "The D zone"
    ],
    "answer": 0
  },
  {
    "q": "In hurling, the small ball is struck with what implement?",
    "options": [
      "A hurley",
      "A bat",
      "A racket",
      "A mallet"
    ],
    "answer": 0
  },
  {
    "q": "What is the Irish name for the hurley stick?",
    "options": [
      "Camán",
      "Sliotar",
      "Bóthar",
      "Bainne"
    ],
    "answer": 0
  },
  {
    "q": "Which province championship do Dublin, Meath and Kildare compete in?",
    "options": [
      "Leinster",
      "Munster",
      "Connacht",
      "Ulster"
    ],
    "answer": 0
  },
  {
    "q": "Which province do Cork, Kerry and Tipperary compete in?",
    "options": [
      "Munster",
      "Leinster",
      "Connacht",
      "Ulster"
    ],
    "answer": 0
  },
  {
    "q": "Which province do Galway, Mayo and Roscommon compete in?",
    "options": [
      "Connacht",
      "Munster",
      "Leinster",
      "Ulster"
    ],
    "answer": 0
  },
  {
    "q": "Which province do Tyrone, Donegal and Armagh compete in?",
    "options": [
      "Ulster",
      "Connacht",
      "Leinster",
      "Munster"
    ],
    "answer": 0
  },
  {
    "q": "Which Kerry manager guided the county to eight All-Irelands and was known as 'Micko'?",
    "options": [
      "Mick O'Dwyer",
      "Mick O'Connell",
      "Jack O'Connor",
      "Paidi O Se"
    ],
    "answer": 0
  },
  {
    "q": "Which Kilkenny hurler nicknamed 'King Henry' became a star forward and later a manager?",
    "options": [
      "Henry Shefflin",
      "DJ Carey",
      "Eddie Keher",
      "JJ Delaney"
    ],
    "answer": 0
  },
  {
    "q": "Which legendary Kilkenny forward of the 1990s was nicknamed 'The Dodger'?",
    "options": [
      "DJ Carey",
      "Henry Shefflin",
      "Eddie Keher",
      "Tommy Walsh"
    ],
    "answer": 0
  },
  {
    "q": "How wide is a standard set of GAA goalposts at the bottom (between the uprights)?",
    "options": [
      "6.5 metres",
      "4 metres",
      "9 metres",
      "11 metres"
    ],
    "answer": 0
  },
  {
    "q": "In Gaelic football, how many steps may a player take while holding the ball before bouncing or soloing?",
    "options": [
      "4",
      "2",
      "6",
      "8"
    ],
    "answer": 0
  },
  {
    "q": "What is the action of dropping the ball onto the foot and kicking it back to the hands called?",
    "options": [
      "A solo",
      "A bounce",
      "A hand-pass",
      "A block"
    ],
    "answer": 0
  },
  {
    "q": "What is balancing the sliotar on the hurley while running called?",
    "options": [
      "Soloing",
      "Blocking",
      "Hooking",
      "Catching"
    ],
    "answer": 0
  },
  {
    "q": "What is the defensive move of catching an opponent's hurley swing with your own called?",
    "options": [
      "A hook",
      "A solo",
      "A block",
      "A frees"
    ],
    "answer": 0
  },
  {
    "q": "Which county is nicknamed 'The Banner'?",
    "options": [
      "Clare",
      "Limerick",
      "Tipperary",
      "Waterford"
    ],
    "answer": 0
  },
  {
    "q": "Which county is nicknamed 'The Treaty County'?",
    "options": [
      "Limerick",
      "Clare",
      "Cork",
      "Tipperary"
    ],
    "answer": 0
  },
  {
    "q": "What is Clare's main GAA ground in Ennis called?",
    "options": [
      "Cusack Park",
      "Walsh Park",
      "Pearse Stadium",
      "Nowlan Park"
    ],
    "answer": 0
  },
  {
    "q": "What is Limerick's main GAA stadium in the city called?",
    "options": [
      "Gaelic Grounds",
      "Semple Stadium",
      "Cusack Park",
      "Walsh Park"
    ],
    "answer": 0
  },
  {
    "q": "What is Waterford's main hurling ground called?",
    "options": [
      "Walsh Park",
      "Cusack Park",
      "Nowlan Park",
      "Pearse Stadium"
    ],
    "answer": 0
  },
  {
    "q": "Which county GAA team is nicknamed 'The Yeats County'?",
    "options": [
      "Sligo",
      "Leitrim",
      "Mayo",
      "Roscommon"
    ],
    "answer": 0
  },
  {
    "q": "What is the Connacht provincial trophy for senior football called?",
    "options": [
      "The Nestor Cup",
      "The Anglo-Celt Cup",
      "The Mick Mackey Cup",
      "The Bob O'Keeffe Cup"
    ],
    "answer": 0
  },
  {
    "q": "What is the Ulster senior football championship cup called?",
    "options": [
      "The Anglo-Celt Cup",
      "The Nestor Cup",
      "The Bob O'Keeffe Cup",
      "The Mick Mackey Cup"
    ],
    "answer": 0
  },
  {
    "q": "Which historic inter-provincial GAA competition is named the Railway Cup?",
    "options": [
      "Inter-provincial championship",
      "Club championship",
      "Minor championship",
      "Junior championship"
    ],
    "answer": 0
  },
  {
    "q": "On St Patrick's Day, Croke Park traditionally hosts the final of which club competition?",
    "options": [
      "All-Ireland Club Championship",
      "Railway Cup",
      "Minor Championship",
      "Sigerson Cup"
    ],
    "answer": 0
  },
  {
    "q": "What is the colloquial name for the All-Ireland football championship trophy?",
    "options": [
      "Sam",
      "Liam",
      "Bob",
      "Nestor"
    ],
    "answer": 0
  },
  {
    "q": "Camogie is the women's version of which sport?",
    "options": [
      "Hurling",
      "Gaelic football",
      "Handball",
      "Rounders"
    ],
    "answer": 0
  },
  {
    "q": "What is the women's equivalent of Gaelic football commonly called?",
    "options": [
      "Ladies' Gaelic football",
      "Camogie",
      "Handball",
      "Rounders"
    ],
    "answer": 0
  },
  {
    "q": "Handball, rounders, hurling and Gaelic football are the four sports governed by which body?",
    "options": [
      "The GAA",
      "The FAI",
      "The IRFU",
      "The OCI"
    ],
    "answer": 0
  },
  {
    "q": "Which Kerry forward of the 1970s and 80s was a famed corner-forward and later a TV pundit?",
    "options": [
      "Pat Spillane",
      "Mick O'Connell",
      "Jack O'Shea",
      "Mikey Sheehy"
    ],
    "answer": 0
  },
  {
    "q": "Which great Tipperary hurler of the 1950s and 60s was a celebrated forward known for accuracy?",
    "options": [
      "Jimmy Doyle",
      "Christy Ring",
      "Eddie Keher",
      "John Doyle"
    ],
    "answer": 0
  },
  {
    "q": "Which Offaly-born hurling figure is famed for managing Clare to the 1995 All-Ireland?",
    "options": [
      "Ger Loughnane",
      "Brian Cody",
      "Davy Fitzgerald",
      "Anthony Daly"
    ],
    "answer": 0
  },
  {
    "q": "Which long-serving Kilkenny manager led the Cats to multiple All-Irelands in the 2000s and 2010s?",
    "options": [
      "Brian Cody",
      "Ger Loughnane",
      "Liam Sheedy",
      "John Kiely"
    ],
    "answer": 0
  },
  {
    "q": "Which manager led Limerick hurlers to multiple All-Irelands starting in 2018?",
    "options": [
      "John Kiely",
      "Brian Cody",
      "Liam Sheedy",
      "Ger Loughnane"
    ],
    "answer": 0
  },
  {
    "q": "How many points is a free kick over the bar worth in Gaelic football?",
    "options": [
      "1",
      "2",
      "3",
      "0"
    ],
    "answer": 0
  },
  {
    "q": "What is the term for passing the ball with an open hand strike in Gaelic football?",
    "options": [
      "A hand-pass",
      "A solo",
      "A bounce",
      "A fist drop"
    ],
    "answer": 0
  },
  {
    "q": "Which county is nicknamed 'The Faithful County'?",
    "options": [
      "Offaly",
      "Laois",
      "Westmeath",
      "Carlow"
    ],
    "answer": 0
  },
  {
    "q": "Which county is nicknamed 'The Royal County'?",
    "options": [
      "Meath",
      "Kildare",
      "Wicklow",
      "Louth"
    ],
    "answer": 0
  },
  {
    "q": "Which county is nicknamed 'The Lilywhites'?",
    "options": [
      "Kildare",
      "Meath",
      "Laois",
      "Louth"
    ],
    "answer": 0
  },
  {
    "q": "Which county GAA team is nicknamed 'The Saffrons'?",
    "options": [
      "Antrim",
      "Down",
      "Derry",
      "Tyrone"
    ],
    "answer": 0
  },
  {
    "q": "Which county is nicknamed 'The Red Hands'?",
    "options": [
      "Tyrone",
      "Armagh",
      "Derry",
      "Down"
    ],
    "answer": 0
  },
  {
    "q": "Which county is nicknamed 'The Wee County'?",
    "options": [
      "Louth",
      "Carlow",
      "Leitrim",
      "Longford"
    ],
    "answer": 0
  },
  {
    "q": "Which Galway-Mayo fixture is the great rivalry of Connacht football?",
    "options": [
      "Galway v Mayo",
      "Sligo v Leitrim",
      "Roscommon v Sligo",
      "Mayo v Roscommon"
    ],
    "answer": 0
  },
  {
    "q": "Which long-running Leinster football rivalry features two of its biggest sides from the 1980s and 90s?",
    "options": [
      "Dublin v Meath",
      "Laois v Offaly",
      "Kildare v Carlow",
      "Wexford v Wicklow"
    ],
    "answer": 0
  },
  {
    "q": "What is the name of the GAA's headquarters stadium in Dublin?",
    "options": [
      "Croke Park",
      "Aviva Stadium",
      "Dalymount Park",
      "Tolka Park"
    ],
    "answer": 0
  },
  {
    "q": "What is the famous terrace end at Croke Park called?",
    "options": [
      "Hill 16",
      "The Kop",
      "The Shed",
      "The Stretford End"
    ],
    "answer": 0
  },
  {
    "q": "What is the GAA underage grade for players generally up to 18 years old called?",
    "options": [
      "Minor",
      "Junior",
      "Intermediate",
      "Reserve"
    ],
    "answer": 0
  },
  {
    "q": "The Sigerson Cup is a GAA football competition for which group?",
    "options": [
      "Universities and colleges",
      "Minor county teams",
      "Garda teams",
      "Primary schools"
    ],
    "answer": 0
  },
  {
    "q": "The Fitzgibbon Cup is the third-level competition for which sport?",
    "options": [
      "Hurling",
      "Gaelic football",
      "Handball",
      "Camogie"
    ],
    "answer": 0
  },
  {
    "q": "Which great Kerry midfielder of the 1970s and 80s was nicknamed 'Jacko'?",
    "options": [
      "Jack O'Shea",
      "Pat Spillane",
      "Mikey Sheehy",
      "Ger Power"
    ],
    "answer": 0
  },
  {
    "q": "Which Kilkenny defender won a record run of All-Star awards in the 2000s and was nicknamed 'Tommy the Cat'?",
    "options": [
      "Tommy Walsh",
      "JJ Delaney",
      "Noel Hickey",
      "Michael Kavanagh"
    ],
    "answer": 0
  },
  {
    "q": "How many points equal a goal in score terms in Gaelic games?",
    "options": [
      "3",
      "2",
      "1",
      "4"
    ],
    "answer": 0
  },
  {
    "q": "If a team scores 2-10, how many total points is that?",
    "options": [
      "16",
      "12",
      "20",
      "22"
    ],
    "answer": 0
  },
  {
    "q": "If a team scores 1-12, how many total points is that?",
    "options": [
      "15",
      "13",
      "18",
      "24"
    ],
    "answer": 0
  },
  {
    "q": "A score of 3-5 totals how many points?",
    "options": [
      "14",
      "8",
      "15",
      "11"
    ],
    "answer": 0
  },
  {
    "q": "Which position wears the number 1 jersey in Gaelic games?",
    "options": [
      "Goalkeeper",
      "Full-forward",
      "Midfield",
      "Centre-back"
    ],
    "answer": 0
  },
  {
    "q": "In the standard GAA numbering, what position is the number 3 jersey?",
    "options": [
      "Full-back",
      "Goalkeeper",
      "Centre-forward",
      "Midfield"
    ],
    "answer": 0
  },
  {
    "q": "The numbers 8 and 9 jerseys are usually worn by players in which position?",
    "options": [
      "Midfield",
      "Full-back line",
      "Half-forward line",
      "Corner-forward"
    ],
    "answer": 0
  },
  {
    "q": "What is the typical jersey number of the full-forward?",
    "options": [
      "14",
      "11",
      "9",
      "6"
    ],
    "answer": 0
  },
  {
    "q": "Which county hurling stronghold is in the south-east and known for 'The Cats'?",
    "options": [
      "Kilkenny",
      "Donegal",
      "Mayo",
      "Cavan"
    ],
    "answer": 0
  },
  {
    "q": "Which of these is regarded as a traditional hurling stronghold?",
    "options": [
      "Tipperary",
      "Donegal",
      "Tyrone",
      "Cavan"
    ],
    "answer": 0
  },
  {
    "q": "Which of these counties is a traditional Gaelic football stronghold rather than hurling?",
    "options": [
      "Kerry",
      "Kilkenny",
      "Clare",
      "Waterford"
    ],
    "answer": 0
  },
  {
    "q": "What is Mayo's main GAA ground in Castlebar called?",
    "options": [
      "MacHale Park",
      "Markievicz Park",
      "Pearse Stadium",
      "Hyde Park"
    ],
    "answer": 0
  },
  {
    "q": "What is Roscommon's main GAA ground called?",
    "options": [
      "Dr Hyde Park",
      "MacHale Park",
      "Markievicz Park",
      "Cusack Park"
    ],
    "answer": 0
  },
  {
    "q": "What is Sligo's main GAA ground called?",
    "options": [
      "Markievicz Park",
      "MacHale Park",
      "Dr Hyde Park",
      "Healy Park"
    ],
    "answer": 0
  },
  {
    "q": "What is Tyrone's main GAA ground in Omagh called?",
    "options": [
      "Healy Park",
      "Clones",
      "Casement Park",
      "Brewster Park"
    ],
    "answer": 0
  },
  {
    "q": "Which Ulster ground in Clones traditionally hosts the Ulster football final?",
    "options": [
      "St Tiernach's Park",
      "Casement Park",
      "Healy Park",
      "Brewster Park"
    ],
    "answer": 0
  },
  {
    "q": "Which county won the most All-Ireland senior football titles in history?",
    "options": [
      "Kerry",
      "Dublin",
      "Galway",
      "Meath"
    ],
    "answer": 0
  },
  {
    "q": "Which county has won the most All-Ireland senior hurling titles?",
    "options": [
      "Kilkenny",
      "Cork",
      "Tipperary",
      "Limerick"
    ],
    "answer": 0
  },
  {
    "q": "What is the term for the Sunday in September traditionally associated with the All-Ireland football final?",
    "options": [
      "All-Ireland final day",
      "Cup final Saturday",
      "Cup tie Friday",
      "Grand final eve"
    ],
    "answer": 0
  },
  {
    "q": "What does the term 'sideline cut' refer to in hurling?",
    "options": [
      "Striking the sliotar from the ground at the sideline",
      "A foul throw-in",
      "A goalkeeper kick-out",
      "A free from the 20m line"
    ],
    "answer": 0
  },
  {
    "q": "What is a 'puck-out' in hurling?",
    "options": [
      "The goalkeeper's restart strike",
      "A scored point",
      "A sideline ball",
      "A penalty"
    ],
    "answer": 0
  },
  {
    "q": "What restarts play after a point is scored in Gaelic football?",
    "options": [
      "A kick-out by the keeper",
      "A throw-in",
      "A sideline kick",
      "A free"
    ],
    "answer": 0
  },
  {
    "q": "What signals the start of each half in Gaelic games?",
    "options": [
      "A throw-in between midfielders",
      "A goalkeeper kick-out",
      "A coin toss",
      "A penalty"
    ],
    "answer": 0
  },
  {
    "q": "Which famous Down footballer was a star of their 1960s All-Ireland-winning teams?",
    "options": [
      "Sean O'Neill",
      "Mick O'Connell",
      "Jack O'Shea",
      "Sean Purcell"
    ],
    "answer": 0
  },
  {
    "q": "Which Galway footballer of the 1950s was nicknamed 'The Master'?",
    "options": [
      "Sean Purcell",
      "Sean O'Neill",
      "Mick O'Connell",
      "Frankie Stockwell"
    ],
    "answer": 0
  },
  {
    "q": "Which Tipperary defender of the mid-20th century was a famed full-back nicknamed for his toughness?",
    "options": [
      "John Doyle",
      "Christy Ring",
      "Jimmy Doyle",
      "Mick Mackey"
    ],
    "answer": 0
  },
  {
    "q": "Which Limerick hurling legend of the 1930s and 40s gave his name to a Munster cup?",
    "options": [
      "Mick Mackey",
      "Christy Ring",
      "John Doyle",
      "Jimmy Doyle"
    ],
    "answer": 0
  },
  {
    "q": "What is the term for a defender getting the hurley under an opponent's to dispossess on the ground?",
    "options": [
      "A block down",
      "A solo run",
      "A sideline cut",
      "A free puck"
    ],
    "answer": 0
  },
  {
    "q": "In Gaelic football, picking the ball directly off the ground with the hands is generally what?",
    "options": [
      "A foul",
      "Legal",
      "A point",
      "A penalty"
    ],
    "answer": 0
  },
  {
    "q": "What is the maximum number of consecutive hand-passes that is NOT limited in standard Gaelic football?",
    "options": [
      "There is no fixed limit",
      "Two",
      "Three",
      "Five"
    ],
    "answer": 0
  },
  {
    "q": "Which song is the anthem most associated with Cork GAA supporters?",
    "options": [
      "The Banks of My Own Lovely Lee",
      "The Fields of Athenry",
      "Molly Malone",
      "The Rose of Tralee"
    ],
    "answer": 0
  },
  {
    "q": "Which anthem-like song is associated with Galway GAA supporters?",
    "options": [
      "The Fields of Athenry",
      "Molly Malone",
      "The Banks",
      "Dublin in the Rare Old Times"
    ],
    "answer": 0
  },
  {
    "q": "Which county won the 1995 All-Ireland senior hurling title, ending a long famine?",
    "options": [
      "Clare",
      "Offaly",
      "Wexford",
      "Limerick"
    ],
    "answer": 0
  },
  {
    "q": "Which county won the 2018, 2020, 2021, 2022 and 2023 All-Ireland senior hurling titles in a dominant run?",
    "options": [
      "Limerick",
      "Kilkenny",
      "Tipperary",
      "Galway"
    ],
    "answer": 0
  },
  {
    "q": "Dublin footballers won an unprecedented run of consecutive All-Irelands ending in which decade?",
    "options": [
      "The 2010s and early 2020s",
      "The 1970s",
      "The 1980s",
      "The 1990s"
    ],
    "answer": 0
  },
  {
    "q": "What is the name of the second-tier Gaelic football championship introduced for weaker counties?",
    "options": [
      "Tailteann Cup",
      "Tommy Murphy Cup",
      "Christy Ring Cup",
      "Nicky Rackard Cup"
    ],
    "answer": 0
  },
  {
    "q": "The Christy Ring Cup is a hurling competition for teams at what level?",
    "options": [
      "Second-tier inter-county",
      "Minor",
      "Club junior",
      "Universities"
    ],
    "answer": 0
  },
  {
    "q": "The Joe McDonagh Cup is a hurling championship at what tier?",
    "options": [
      "Second tier below Liam MacCarthy",
      "Minor",
      "Club",
      "Schools"
    ],
    "answer": 0
  },
  {
    "q": "What colour predominantly are Mayo's GAA jerseys?",
    "options": [
      "Green and red",
      "Blue and gold",
      "Black and amber",
      "Maroon and white"
    ],
    "answer": 0
  },
  {
    "q": "What are Tyrone's traditional GAA colours?",
    "options": [
      "White and red",
      "Green and gold",
      "Blue and gold",
      "Black and amber"
    ],
    "answer": 0
  },
  {
    "q": "What are Donegal's traditional GAA colours?",
    "options": [
      "Green and gold",
      "Red and white",
      "Blue and white",
      "Maroon and white"
    ],
    "answer": 0
  },
  {
    "q": "What are Meath's traditional GAA colours?",
    "options": [
      "Green and gold",
      "Red and white",
      "Blue and gold",
      "Black and amber"
    ],
    "answer": 0
  },
  {
    "q": "What are Wexford's traditional GAA colours?",
    "options": [
      "Purple and gold",
      "Green and red",
      "Blue and gold",
      "Black and amber"
    ],
    "answer": 0
  },
  {
    "q": "What are Offaly's traditional GAA colours?",
    "options": [
      "Green, white and gold",
      "Red and white",
      "Blue and gold",
      "Maroon and white"
    ],
    "answer": 0
  },
  {
    "q": "What are Clare's traditional GAA colours?",
    "options": [
      "Saffron and blue",
      "Green and gold",
      "Red and white",
      "Black and amber"
    ],
    "answer": 0
  },
  {
    "q": "What are Limerick's traditional GAA colours?",
    "options": [
      "Green and white",
      "Blue and gold",
      "Red and white",
      "Maroon and white"
    ],
    "answer": 0
  },
  {
    "q": "What are Waterford's traditional GAA colours?",
    "options": [
      "White and blue",
      "Green and gold",
      "Red and white",
      "Black and amber"
    ],
    "answer": 0
  },
  {
    "q": "What is the GAA term for a team's reserve or B-level grade in club competitions?",
    "options": [
      "Junior",
      "Minor",
      "Senior",
      "Premier"
    ],
    "answer": 0
  },
  {
    "q": "In hurling, what protective headgear is now mandatory?",
    "options": [
      "A helmet with faceguard",
      "Shin pads",
      "A scrum cap",
      "Shoulder pads"
    ],
    "answer": 0
  },
  {
    "q": "What is the standard shape of a GAA pitch?",
    "options": [
      "Rectangular",
      "Oval",
      "Circular",
      "Square"
    ],
    "answer": 0
  },
  {
    "q": "Roughly how long is a full-size GAA pitch?",
    "options": [
      "About 130 to 145 metres",
      "About 60 metres",
      "About 200 metres",
      "About 90 metres"
    ],
    "answer": 0
  },
  {
    "q": "The 'square' in front of goal where a defending keeper is protected is what shape?",
    "options": [
      "A small rectangle",
      "A circle",
      "A triangle",
      "A semi-circle"
    ],
    "answer": 0
  },
  {
    "q": "Which county's hurlers are nicknamed 'The Premier County'?",
    "options": [
      "Tipperary",
      "Kilkenny",
      "Cork",
      "Clare"
    ],
    "answer": 0
  },
  {
    "q": "Which county is known as 'The Deise' in hurling?",
    "options": [
      "Waterford",
      "Wexford",
      "Clare",
      "Limerick"
    ],
    "answer": 0
  },
  {
    "q": "Which county GAA team is nicknamed 'The Model County'?",
    "options": [
      "Wexford",
      "Carlow",
      "Wicklow",
      "Laois"
    ],
    "answer": 0
  },
  {
    "q": "Which county is nicknamed 'The Garden County'?",
    "options": [
      "Wicklow",
      "Wexford",
      "Carlow",
      "Kildare"
    ],
    "answer": 0
  },
  {
    "q": "What is the GAA term for a player sent off shown a red card?",
    "options": [
      "Dismissed",
      "Booked",
      "Subbed",
      "Carded green"
    ],
    "answer": 0
  },
  {
    "q": "What colour card is shown for a temporary 10-minute suspension in some GAA codes (the sin-bin)?",
    "options": [
      "Black",
      "Green",
      "Orange",
      "Purple"
    ],
    "answer": 0
  },
  {
    "q": "Which famous footballing parish-based unit competes in the All-Ireland Club Championship?",
    "options": [
      "Local GAA clubs",
      "County boards",
      "Provincial councils",
      "Schools"
    ],
    "answer": 0
  },
  {
    "q": "What is the name for the gathering of supporters and music at a big match, central to GAA culture?",
    "options": [
      "The atmosphere and craic",
      "The scrum",
      "The huddle",
      "The tunnel"
    ],
    "answer": 0
  },
  {
    "q": "Which Tyrone manager led the county to its first All-Ireland senior football titles in the 2000s?",
    "options": [
      "Mickey Harte",
      "Jim McGuinness",
      "Pete McGrath",
      "Joe Kernan"
    ],
    "answer": 0
  },
  {
    "q": "Which manager guided Donegal to the 2012 All-Ireland senior football title?",
    "options": [
      "Jim McGuinness",
      "Mickey Harte",
      "Jim Gavin",
      "Joe Kernan"
    ],
    "answer": 0
  },
  {
    "q": "Which manager oversaw Dublin's record run of football All-Irelands in the 2010s?",
    "options": [
      "Jim Gavin",
      "Mickey Harte",
      "Jim McGuinness",
      "Pat Gilroy"
    ],
    "answer": 0
  },
  {
    "q": "Which Armagh manager led the county to its first All-Ireland in 2002?",
    "options": [
      "Joe Kernan",
      "Mickey Harte",
      "Jim McGuinness",
      "Pete McGrath"
    ],
    "answer": 0
  },
  {
    "q": "In handball, players strike the ball using what?",
    "options": [
      "Their hand",
      "A hurley",
      "A racket",
      "A bat"
    ],
    "answer": 0
  },
  {
    "q": "What surface is GAA handball traditionally played against?",
    "options": [
      "A walled court (alley)",
      "An open field",
      "A net",
      "A table"
    ],
    "answer": 0
  },
  {
    "q": "Which Galway hurler captained the county to the 2017 All-Ireland and is regarded as a modern great?",
    "options": [
      "David Burke",
      "Joe Canning",
      "Henry Shefflin",
      "TJ Reid"
    ],
    "answer": 0
  },
  {
    "q": "What is the name of the All-Ireland camogie championship's senior trophy?",
    "options": [
      "O'Duffy Cup",
      "Liam MacCarthy Cup",
      "Brendan Martin Cup",
      "Sam Maguire Cup"
    ],
    "answer": 0
  },
  {
    "q": "What is the senior Ladies' Gaelic football All-Ireland trophy called?",
    "options": [
      "Brendan Martin Cup",
      "O'Duffy Cup",
      "Sam Maguire Cup",
      "Liam MacCarthy Cup"
    ],
    "answer": 0
  },
  {
    "q": "Which county has dominated modern ladies' Gaelic football, winning many All-Irelands from Connacht?",
    "options": [
      "Mayo",
      "Tyrone",
      "Wexford",
      "Antrim"
    ],
    "answer": 0
  },
  {
    "q": "Which county dominated senior camogie historically with the most titles, from the south-east?",
    "options": [
      "Cork",
      "Antrim",
      "Galway",
      "Dublin"
    ],
    "answer": 0
  },
  {
    "q": "What is the playing position directly in front of the opposition goal called?",
    "options": [
      "Full-forward",
      "Full-back",
      "Midfield",
      "Centre-back"
    ],
    "answer": 0
  },
  {
    "q": "What is the central defensive position numbered 6 called?",
    "options": [
      "Centre-back",
      "Centre-forward",
      "Full-back",
      "Midfield"
    ],
    "answer": 0
  },
  {
    "q": "What is the central attacking position numbered 11 called?",
    "options": [
      "Centre-forward",
      "Centre-back",
      "Full-forward",
      "Midfield"
    ],
    "answer": 0
  },
  {
    "q": "What is the GAA term for the line of three forwards nearest the opposition goal?",
    "options": [
      "The full-forward line",
      "The midfield line",
      "The half-back line",
      "The full-back line"
    ],
    "answer": 0
  },
  {
    "q": "Which famous Cork dual player excelled at both hurling and Gaelic football and is a celebrated GAA great?",
    "options": [
      "Jack Lynch",
      "Christy Ring",
      "Jimmy Doyle",
      "John Doyle"
    ],
    "answer": 0
  },
  {
    "q": "Which great Kerry forward of the 1970s and 80s scored a famous chipped goal past the Dublin keeper?",
    "options": [
      "Mikey Sheehy",
      "Pat Spillane",
      "Jack O'Shea",
      "Eoin Liston"
    ],
    "answer": 0
  },
  {
    "q": "Which towering Kerry full-forward of the late 1970s and 80s was nicknamed 'Bomber'?",
    "options": [
      "Eoin Liston",
      "Mikey Sheehy",
      "Jack O'Shea",
      "Pat Spillane"
    ],
    "answer": 0
  },
  {
    "q": "What is the GAA term for the central two players who contest kick-outs and throw-ins?",
    "options": [
      "Midfielders",
      "Wing-backs",
      "Corner-forwards",
      "Sweepers"
    ],
    "answer": 0
  },
  {
    "q": "In Irish myth, what was the name of the divine race who ruled Ireland before the Milesians?",
    "options": [
      "Tuatha Dé Danann",
      "Fir Bolg",
      "Fomorians",
      "Milesians"
    ],
    "answer": 0
  },
  {
    "q": "Lugh, a leader of the Tuatha Dé Danann, was associated with skill in many crafts and which festival?",
    "options": [
      "Lúnasa",
      "Imbolc",
      "Samhain",
      "Bealtaine"
    ],
    "answer": 0
  },
  {
    "q": "Which Irish god, the 'good god', owned a magic cauldron that never emptied?",
    "options": [
      "The Dagda",
      "Lugh",
      "Nuada",
      "Manannán mac Lir"
    ],
    "answer": 0
  },
  {
    "q": "The Morrígan in Irish myth is a goddess associated with what?",
    "options": [
      "War and fate",
      "Love and beauty",
      "The harvest",
      "Healing wells"
    ],
    "answer": 0
  },
  {
    "q": "In the Ulster Cycle, who is the queen of Connacht who starts the cattle raid in the Táin?",
    "options": [
      "Medb",
      "Deirdre",
      "Macha",
      "Emer"
    ],
    "answer": 0
  },
  {
    "q": "The great prize coveted by Queen Medb in the Táin Bó Cúailnge was which animal?",
    "options": [
      "The Brown Bull of Cooley",
      "A white stag",
      "A golden horse",
      "A magic salmon"
    ],
    "answer": 0
  },
  {
    "q": "Who was Cú Chulainn's foster-brother and friend that he was forced to fight at a ford in the Táin?",
    "options": [
      "Ferdia",
      "Conall",
      "Lóegaire",
      "Fergus"
    ],
    "answer": 0
  },
  {
    "q": "In the legend, Oisín travelled to Tír na nÓg with which fairy woman?",
    "options": [
      "Niamh",
      "Étaín",
      "Fand",
      "Clíodhna"
    ],
    "answer": 0
  },
  {
    "q": "Which leader of the Fianna was the father of Oisín?",
    "options": [
      "Fionn mac Cumhaill",
      "Conn",
      "Goll",
      "Diarmuid"
    ],
    "answer": 0
  },
  {
    "q": "In the tale of the pursuit, Gráinne fled with which member of the Fianna instead of marrying Fionn?",
    "options": [
      "Diarmuid",
      "Oisín",
      "Caoilte",
      "Goll"
    ],
    "answer": 0
  },
  {
    "q": "Diarmuid in the Fianna legends was killed by which animal?",
    "options": [
      "A wild boar",
      "A great wolf",
      "A bull",
      "A stag"
    ],
    "answer": 0
  },
  {
    "q": "Which saint is famous for a legendary voyage across the Atlantic in search of a Promised Land?",
    "options": [
      "St Brendan",
      "St Kevin",
      "St Colmcille",
      "St Finbarr"
    ],
    "answer": 0
  },
  {
    "q": "Which saint founded the monastic settlement at Glendalough in County Wicklow?",
    "options": [
      "St Kevin",
      "St Brendan",
      "St Declan",
      "St Ciarán"
    ],
    "answer": 0
  },
  {
    "q": "St Colmcille, who founded a monastery on Iona, is also known by which other name?",
    "options": [
      "Columba",
      "Comgall",
      "Cormac",
      "Canice"
    ],
    "answer": 0
  },
  {
    "q": "What is the Irish name for the fairy folk who live in mounds and the otherworld?",
    "options": [
      "The sídhe",
      "The sluagh",
      "The merrow",
      "The dullahan"
    ],
    "answer": 0
  },
  {
    "q": "In fairy lore, a changeling is what?",
    "options": [
      "A fairy substituted for a stolen human child",
      "A fairy that grants wishes",
      "A type of fairy fort",
      "A fairy musician"
    ],
    "answer": 0
  },
  {
    "q": "What is a 'fairy fort' in the Irish landscape usually identified as?",
    "options": [
      "A ringfort or rath",
      "A standing stone",
      "A holy well",
      "A round tower"
    ],
    "answer": 0
  },
  {
    "q": "The pooka (púca) in Irish folklore is a shape-shifting creature that often appears as what?",
    "options": [
      "A black horse",
      "A white hare",
      "A red fox",
      "A grey cat"
    ],
    "answer": 0
  },
  {
    "q": "How many children of Lir were turned into swans in the famous legend?",
    "options": [
      "Four",
      "Three",
      "Two",
      "Seven"
    ],
    "answer": 0
  },
  {
    "q": "Which of the four great Irish festivals marks the beginning of summer, around 1 May?",
    "options": [
      "Bealtaine",
      "Samhain",
      "Imbolc",
      "Lúnasa"
    ],
    "answer": 0
  },
  {
    "q": "Imbolc, marking the start of spring, is associated with which figure?",
    "options": [
      "Brigid",
      "The Morrígan",
      "Lugh",
      "The Dagda"
    ],
    "answer": 0
  },
  {
    "q": "Lúnasa, the harvest festival, is named after which god?",
    "options": [
      "Lugh",
      "Nuada",
      "Aengus",
      "Dian Cécht"
    ],
    "answer": 0
  },
  {
    "q": "The god of the sea in Irish mythology, who gives his name to the Isle of Man, is?",
    "options": [
      "Manannán mac Lir",
      "Lir",
      "Bodb Derg",
      "Aengus"
    ],
    "answer": 0
  },
  {
    "q": "Aengus, the Irish god associated with love and youth, was the son of which god?",
    "options": [
      "The Dagda",
      "Lugh",
      "Nuada",
      "Goibniu"
    ],
    "answer": 0
  },
  {
    "q": "In the Ulster Cycle, what was the capital fortress of King Conchobar mac Nessa?",
    "options": [
      "Emain Macha",
      "Tara",
      "Cruachan",
      "Dún Aonghasa"
    ],
    "answer": 0
  },
  {
    "q": "The tragic heroine Deirdre of the Sorrows fell in love with which man?",
    "options": [
      "Naoise",
      "Cú Chulainn",
      "Conchobar",
      "Fergus"
    ],
    "answer": 0
  },
  {
    "q": "Nuada, an early king of the Tuatha Dé Danann, was given a replacement of what after losing it in battle?",
    "options": [
      "A silver arm",
      "An eye",
      "A leg",
      "A golden hand"
    ],
    "answer": 0
  },
  {
    "q": "The Fomorians in Irish myth were the chief enemies of which race?",
    "options": [
      "The Tuatha Dé Danann",
      "The Milesians",
      "The Fianna",
      "The men of Ulster"
    ],
    "answer": 0
  },
  {
    "q": "In which battle did Lugh slay the Fomorian leader Balor of the Evil Eye?",
    "options": [
      "The Battle of Mag Tuired",
      "The Battle of Clontarf",
      "The Battle of Tara",
      "The Battle of Ventry"
    ],
    "answer": 0
  },
  {
    "q": "Balor, the Fomorian giant, was famous for what feature?",
    "options": [
      "A destructive single eye",
      "Three heads",
      "Iron teeth",
      "Wings"
    ],
    "answer": 0
  },
  {
    "q": "When Oisín returned from Tír na nÓg and touched the ground of Ireland, what happened to him?",
    "options": [
      "He aged rapidly into an old man",
      "He turned to stone",
      "He vanished",
      "He became a swan"
    ],
    "answer": 0
  },
  {
    "q": "The Hill of Tara was traditionally associated with which group?",
    "options": [
      "The High Kings of Ireland",
      "The Vikings",
      "The Fianna only",
      "The Fomorians"
    ],
    "answer": 0
  },
  {
    "q": "Which legendary smith-god of the Tuatha Dé Danann brewed an ale of immortality?",
    "options": [
      "Goibniu",
      "Lugh",
      "Dian Cécht",
      "Aengus"
    ],
    "answer": 0
  },
  {
    "q": "Dian Cécht in Irish myth was the god of what?",
    "options": [
      "Healing",
      "War",
      "The sea",
      "Smithcraft"
    ],
    "answer": 0
  },
  {
    "q": "In folklore, a merrow is the Irish equivalent of which creature?",
    "options": [
      "A mermaid",
      "A leprechaun",
      "A banshee",
      "A giant"
    ],
    "answer": 0
  },
  {
    "q": "The dullahan in Irish folklore is a frightening figure that rides a horse and is missing what?",
    "options": [
      "Its head",
      "Its legs",
      "An arm",
      "Its eyes"
    ],
    "answer": 0
  },
  {
    "q": "Which legendary giant is said to have built the Giant's Causeway?",
    "options": [
      "Fionn mac Cumhaill",
      "Cú Chulainn",
      "Balor",
      "The Dagda"
    ],
    "answer": 0
  },
  {
    "q": "Tír na nÓg in Irish myth translates as what?",
    "options": [
      "Land of the Young",
      "Land of Promise",
      "Land of Shadows",
      "Land of the West"
    ],
    "answer": 0
  },
  {
    "q": "Which warrior band did Fionn mac Cumhaill lead?",
    "options": [
      "The Fianna",
      "The Red Branch",
      "The Tuatha",
      "The Milesians"
    ],
    "answer": 0
  },
  {
    "q": "The Red Branch Knights served which king in the Ulster Cycle?",
    "options": [
      "Conchobar mac Nessa",
      "Cormac mac Airt",
      "Brian Boru",
      "Niall"
    ],
    "answer": 0
  },
  {
    "q": "In the legend, what did Fionn gain by sucking his thumb after burning it on a salmon?",
    "options": [
      "Knowledge and wisdom",
      "Invisibility",
      "Great strength",
      "Eternal youth"
    ],
    "answer": 0
  },
  {
    "q": "Cú Chulainn's famous battle-rage in the Ulster Cycle is known as his?",
    "options": [
      "Ríastrad (warp-spasm)",
      "Geis",
      "Imbas",
      "Fian"
    ],
    "answer": 0
  },
  {
    "q": "A 'geis' in Irish legend is what?",
    "options": [
      "A magical taboo or prohibition",
      "A war chariot",
      "A type of spear",
      "A fairy mound"
    ],
    "answer": 0
  },
  {
    "q": "Cú Chulainn's deadly spear was named?",
    "options": [
      "Gáe Bolg",
      "Fragarach",
      "Caladbolg",
      "Lúin"
    ],
    "answer": 0
  },
  {
    "q": "The Children of Lir were turned into swans by their jealous stepmother, named?",
    "options": [
      "Aoife",
      "Niamh",
      "Étaín",
      "Deirdre"
    ],
    "answer": 0
  },
  {
    "q": "Which saint is patron of Ireland and credited with banishing snakes from the island?",
    "options": [
      "St Patrick",
      "St Brendan",
      "St Colmcille",
      "St Kevin"
    ],
    "answer": 0
  },
  {
    "q": "St Brigid of Kildare founded a famous monastery in which county?",
    "options": [
      "Kildare",
      "Wicklow",
      "Clare",
      "Kerry"
    ],
    "answer": 0
  },
  {
    "q": "In legend, St Kevin held out his hand so long that a bird did what?",
    "options": [
      "Nested and laid eggs in it",
      "Sang him a hymn",
      "Brought him gold",
      "Turned to stone"
    ],
    "answer": 0
  },
  {
    "q": "The banshee's name in Irish, 'bean sídhe', literally means what?",
    "options": [
      "Woman of the fairy mound",
      "Wailing woman",
      "Old grey woman",
      "Woman of death"
    ],
    "answer": 0
  },
  {
    "q": "Which festival corresponds to the Christian feast of St Brigid on 1 February?",
    "options": [
      "Imbolc",
      "Bealtaine",
      "Lúnasa",
      "Samhain"
    ],
    "answer": 0
  },
  {
    "q": "On the eve of Bealtaine, a traditional custom was to do what to protect cattle?",
    "options": [
      "Drive them between two bonfires",
      "Hang bells on them",
      "Paint their horns",
      "Lock them in barns"
    ],
    "answer": 0
  },
  {
    "q": "What is the Irish name for the otherworldly host or fairy army?",
    "options": [
      "The sluagh",
      "The sídhe",
      "The fianna",
      "The aos sí"
    ],
    "answer": 0
  },
  {
    "q": "In myth, the goddess Macha cursed the men of Ulster to suffer what in their hour of need?",
    "options": [
      "Labour pains",
      "Blindness",
      "Deep sleep",
      "Madness"
    ],
    "answer": 0
  },
  {
    "q": "Étaín is a heroine of which famous Irish mythological tale?",
    "options": [
      "The Wooing of Étaín",
      "The Táin",
      "The Voyage of Bran",
      "The Cattle Raid"
    ],
    "answer": 0
  },
  {
    "q": "The Salmon of Knowledge swam in which legendary pool or river?",
    "options": [
      "The River Boyne",
      "Lough Neagh",
      "The Shannon",
      "The Liffey"
    ],
    "answer": 0
  },
  {
    "q": "Manannán mac Lir is said to ride across the sea in a chariot pulled by what?",
    "options": [
      "Waves like horses",
      "Great swans",
      "Sea serpents",
      "Dolphins"
    ],
    "answer": 0
  },
  {
    "q": "Which mythical figure is associated with the magical sword Fragarach, 'the Answerer'?",
    "options": [
      "Lugh",
      "Cú Chulainn",
      "Fionn",
      "The Dagda"
    ],
    "answer": 0
  },
  {
    "q": "The festival of Samhain traditionally marked the start of which season?",
    "options": [
      "Winter",
      "Spring",
      "Summer",
      "Autumn"
    ],
    "answer": 0
  },
  {
    "q": "Cormac mac Airt is remembered in legend as a wise?",
    "options": [
      "High King of Ireland",
      "Smith",
      "Druid",
      "Sea-god"
    ],
    "answer": 0
  },
  {
    "q": "The leprechaun in Irish folklore is traditionally said to work as a?",
    "options": [
      "Shoemaker",
      "Blacksmith",
      "Weaver",
      "Miller"
    ],
    "answer": 0
  },
  {
    "q": "Which body of water was created, in legend, by a well that overflowed and drowned the land?",
    "options": [
      "Lough Neagh",
      "Lough Corrib",
      "Lough Derg",
      "Lough Ree"
    ],
    "answer": 0
  },
  {
    "q": "St Brendan is often given which nickname?",
    "options": [
      "The Navigator",
      "The Hermit",
      "The Scholar",
      "The Pilgrim"
    ],
    "answer": 0
  },
  {
    "q": "A holy well in Irish custom is often visited and the act of walking around it is called?",
    "options": [
      "Doing the rounds (the pattern)",
      "The wake",
      "The station fast",
      "The vigil dance"
    ],
    "answer": 0
  },
  {
    "q": "Which Irish dish is a traditional Dublin stew of sausages, bacon, potatoes and onions?",
    "options": [
      "Coddle",
      "Champ",
      "Boxty",
      "Drisheen"
    ],
    "answer": 0
  },
  {
    "q": "Champ is a dish of mashed potatoes mixed with which ingredient?",
    "options": [
      "Scallions (spring onions)",
      "Cabbage",
      "Carrots",
      "Leeks only"
    ],
    "answer": 0
  },
  {
    "q": "Drisheen is a traditional dish from Cork made principally from what?",
    "options": [
      "Blood",
      "Liver",
      "Oats and butter",
      "Seaweed"
    ],
    "answer": 0
  },
  {
    "q": "Crubeens are a traditional Irish dish made from which part of the pig?",
    "options": [
      "Trotters (feet)",
      "Ears",
      "Snout",
      "Tail"
    ],
    "answer": 0
  },
  {
    "q": "A blaa is a soft white bread roll especially associated with which county?",
    "options": [
      "Waterford",
      "Cork",
      "Galway",
      "Mayo"
    ],
    "answer": 0
  },
  {
    "q": "Soda bread is traditionally leavened with what instead of yeast?",
    "options": [
      "Bicarbonate of soda",
      "Baking powder only",
      "Sourdough starter",
      "Beer"
    ],
    "answer": 0
  },
  {
    "q": "The liquid traditionally used with the bread soda in soda bread to create the rise is?",
    "options": [
      "Buttermilk",
      "Cream",
      "Stout",
      "Cider"
    ],
    "answer": 0
  },
  {
    "q": "Bacon and cabbage is a classic Irish dinner usually served with what?",
    "options": [
      "Potatoes",
      "Rice",
      "Pasta",
      "Dumplings"
    ],
    "answer": 0
  },
  {
    "q": "A traditional 'full Irish' breakfast typically includes black pudding and which other pudding?",
    "options": [
      "White pudding",
      "Bread pudding",
      "Rice pudding",
      "Yorkshire pudding"
    ],
    "answer": 0
  },
  {
    "q": "Black pudding gets its dark colour mainly from which ingredient?",
    "options": [
      "Blood",
      "Treacle",
      "Black beans",
      "Squid ink"
    ],
    "answer": 0
  },
  {
    "q": "Irish stew is traditionally made with which meat?",
    "options": [
      "Lamb or mutton",
      "Beef",
      "Pork",
      "Chicken"
    ],
    "answer": 0
  },
  {
    "q": "Which Irish crisp brand pioneered cheese and onion flavour and is hugely popular?",
    "options": [
      "Tayto",
      "Walkers",
      "King",
      "Hunky Dorys"
    ],
    "answer": 0
  },
  {
    "q": "Barry's Tea and Lyons Tea are two famous Irish brands of what?",
    "options": [
      "Tea",
      "Coffee",
      "Whiskey",
      "Biscuits"
    ],
    "answer": 0
  },
  {
    "q": "Kerrygold is an internationally known Irish brand best known for which product?",
    "options": [
      "Butter",
      "Cheese only",
      "Cream",
      "Milk"
    ],
    "answer": 0
  },
  {
    "q": "Club Orange is a popular Irish soft drink known for containing what?",
    "options": [
      "Real orange bits",
      "Extra caffeine",
      "No sugar at all",
      "Lime juice"
    ],
    "answer": 0
  },
  {
    "q": "In Ireland, 'red lemonade' is a fizzy drink often mixed with which spirit?",
    "options": [
      "Whiskey",
      "Vodka",
      "Gin",
      "Rum"
    ],
    "answer": 0
  },
  {
    "q": "Which whiskey, distilled in Cork, is one of Ireland's best-selling whiskeys worldwide?",
    "options": [
      "Jameson",
      "Bushmills",
      "Powers",
      "Tullamore"
    ],
    "answer": 0
  },
  {
    "q": "Which distillery in County Antrim claims to be the oldest licensed whiskey distillery in the world?",
    "options": [
      "Bushmills",
      "Jameson",
      "Midleton",
      "Kilbeggan"
    ],
    "answer": 0
  },
  {
    "q": "The famous Irish stout brewed at St James's Gate in Dublin is?",
    "options": [
      "Guinness",
      "Murphy's",
      "Beamish",
      "Smithwick's"
    ],
    "answer": 0
  },
  {
    "q": "Murphy's and Beamish are two stouts traditionally brewed in which city?",
    "options": [
      "Cork",
      "Dublin",
      "Limerick",
      "Galway"
    ],
    "answer": 0
  },
  {
    "q": "Smithwick's is an Irish beer best described as which style?",
    "options": [
      "Red ale",
      "Stout",
      "Lager",
      "Wheat beer"
    ],
    "answer": 0
  },
  {
    "q": "Boxty is a traditional Irish food made mainly from what?",
    "options": [
      "Potato",
      "Oats",
      "Barley",
      "Cabbage"
    ],
    "answer": 0
  },
  {
    "q": "White pudding differs from black pudding mainly in that it contains no?",
    "options": [
      "Blood",
      "Oats",
      "Pork",
      "Spices"
    ],
    "answer": 0
  },
  {
    "q": "A batch loaf is a type of Irish what?",
    "options": [
      "Bread",
      "Cake",
      "Pudding",
      "Biscuit"
    ],
    "answer": 0
  },
  {
    "q": "Which Irish whiskey brand shares its name with a strong word meaning power?",
    "options": [
      "Powers",
      "Jameson",
      "Paddy",
      "Redbreast"
    ],
    "answer": 0
  },
  {
    "q": "Midleton, a major whiskey distillery, is located in which county?",
    "options": [
      "Cork",
      "Antrim",
      "Dublin",
      "Offaly"
    ],
    "answer": 0
  },
  {
    "q": "Tullamore D.E.W. whiskey is named after a town in which county?",
    "options": [
      "Offaly",
      "Cork",
      "Kilkenny",
      "Tipperary"
    ],
    "answer": 0
  },
  {
    "q": "Which dark, malty Irish drink is technically a stout and famous for its creamy head?",
    "options": [
      "Guinness",
      "Harp",
      "Smithwick's",
      "Bulmers"
    ],
    "answer": 0
  },
  {
    "q": "Bulmers is a popular Irish brand of which drink?",
    "options": [
      "Cider",
      "Stout",
      "Whiskey",
      "Lager"
    ],
    "answer": 0
  },
  {
    "q": "Cadbury chocolate is hugely popular in Ireland; its long-running Irish factory is in which town?",
    "options": [
      "Coolock, Dublin",
      "Cork city",
      "Athlone",
      "Drogheda"
    ],
    "answer": 0
  },
  {
    "q": "Colcannon, a traditional dish, combines mashed potato with what?",
    "options": [
      "Cabbage or kale",
      "Carrots",
      "Turnip",
      "Peas"
    ],
    "answer": 0
  },
  {
    "q": "Which fish features in the traditional Galway delicacy often eaten raw with stout?",
    "options": [
      "Oysters",
      "Mackerel",
      "Salmon",
      "Cod"
    ],
    "answer": 0
  },
  {
    "q": "Carrageen moss, used in traditional Irish puddings, is a type of what?",
    "options": [
      "Seaweed",
      "Moss from bogs",
      "Lichen",
      "Grass"
    ],
    "answer": 0
  },
  {
    "q": "Dulse, eaten as a snack especially in the north, is what?",
    "options": [
      "Dried edible seaweed",
      "Dried fish",
      "A type of bread",
      "Salted meat"
    ],
    "answer": 0
  },
  {
    "q": "A 'gur cake' is a traditional inexpensive Irish?",
    "options": [
      "Pastry slice with dried fruit",
      "Soda bread",
      "Type of stew",
      "Fizzy drink"
    ],
    "answer": 0
  },
  {
    "q": "Which Irish biscuit brand is famous for its USA biscuits and chocolate Kimberley?",
    "options": [
      "Jacob's",
      "McVitie's",
      "Fox's",
      "Border"
    ],
    "answer": 0
  },
  {
    "q": "Barmbrack is a fruit bread traditionally eaten around which time of year?",
    "options": [
      "Halloween",
      "Easter",
      "Midsummer",
      "St Patrick's Day"
    ],
    "answer": 0
  },
  {
    "q": "In a traditional Halloween barmbrack, finding the ring is said to mean what?",
    "options": [
      "Marriage within the year",
      "Wealth",
      "A long life",
      "Bad luck"
    ],
    "answer": 0
  },
  {
    "q": "Yellowman is a traditional hard, chewy sweet associated with which northern fair?",
    "options": [
      "The Ould Lammas Fair, Ballycastle",
      "Puck Fair",
      "Galway Races",
      "The Rose of Tralee"
    ],
    "answer": 0
  },
  {
    "q": "A 'rasher' in Ireland refers to a slice of what?",
    "options": [
      "Bacon",
      "Black pudding",
      "Sausage",
      "Ham"
    ],
    "answer": 0
  },
  {
    "q": "The traditional Irish dish 'spuds' is a colloquial word for what?",
    "options": [
      "Potatoes",
      "Turnips",
      "Sausages",
      "Dumplings"
    ],
    "answer": 0
  },
  {
    "q": "Which fizzy drink, made by a Belfast company, is a famous Northern Irish soft drink?",
    "options": [
      "Maine (or Cidona)",
      "Lucozade",
      "Fanta",
      "Tizer"
    ],
    "answer": 0
  },
  {
    "q": "Cidona is a popular Irish soft drink flavoured to taste of what?",
    "options": [
      "Apple",
      "Orange",
      "Lemon",
      "Cola"
    ],
    "answer": 0
  },
  {
    "q": "Which traditional cured meat is the centrepiece of a 'bacon and cabbage' dinner?",
    "options": [
      "Back bacon joint",
      "Sausages",
      "Black pudding",
      "Corned beef only"
    ],
    "answer": 0
  },
  {
    "q": "Corned beef and cabbage is especially associated with Irish communities where?",
    "options": [
      "The United States",
      "Australia",
      "Scotland",
      "France"
    ],
    "answer": 0
  },
  {
    "q": "The Irish word 'craic' refers to what?",
    "options": [
      "Fun, news and good conversation",
      "A type of bread",
      "A drinking game",
      "A musical instrument"
    ],
    "answer": 0
  },
  {
    "q": "Poitín is a traditional Irish spirit historically distilled from what?",
    "options": [
      "Potatoes or grain",
      "Apples",
      "Honey",
      "Grapes"
    ],
    "answer": 0
  },
  {
    "q": "Poitín was for many years illegal in Ireland because it was?",
    "options": [
      "Distilled without a licence",
      "Made from poison",
      "Too weak to sell",
      "Imported only"
    ],
    "answer": 0
  },
  {
    "q": "Which Irish cream liqueur is one of the best-selling in the world?",
    "options": [
      "Baileys",
      "Carolans",
      "Coole Swan",
      "Sheridans"
    ],
    "answer": 0
  },
  {
    "q": "Irish coffee combines coffee, sugar, cream and which spirit?",
    "options": [
      "Whiskey",
      "Brandy",
      "Rum",
      "Vodka"
    ],
    "answer": 0
  },
  {
    "q": "A 'naggin' in Ireland is a small bottle of what, holding about 200ml?",
    "options": [
      "Spirits",
      "Milk",
      "Lemonade",
      "Vinegar"
    ],
    "answer": 0
  },
  {
    "q": "Which leafy dish made from boiled nettles was a traditional spring tonic in Ireland?",
    "options": [
      "Nettle soup",
      "Cabbage broth",
      "Dock pudding",
      "Seaweed stew"
    ],
    "answer": 0
  },
  {
    "q": "Goody, a traditional dish for children and festivals, is bread boiled in?",
    "options": [
      "Milk with sugar",
      "Stout",
      "Tea",
      "Stock"
    ],
    "answer": 0
  },
  {
    "q": "What is the main grain in traditional Irish porridge or 'stirabout'?",
    "options": [
      "Oats",
      "Barley",
      "Wheat",
      "Rye"
    ],
    "answer": 0
  },
  {
    "q": "Which Irish cheese is a well-known washed-rind cheese from County Cork?",
    "options": [
      "Ardrahan",
      "Cheddar",
      "Brie",
      "Edam"
    ],
    "answer": 0
  },
  {
    "q": "On St Patrick's Day, which colour is most strongly associated with Ireland and the saint today?",
    "options": [
      "Green",
      "Blue",
      "Gold",
      "Red"
    ],
    "answer": 0
  },
  {
    "q": "What plant did St Patrick reputedly use to explain the Holy Trinity?",
    "options": [
      "The shamrock",
      "The harp",
      "The clover of four leaves",
      "The thistle"
    ],
    "answer": 0
  },
  {
    "q": "St Patrick's Day is celebrated on which date?",
    "options": [
      "17 March",
      "1 February",
      "23 June",
      "25 December"
    ],
    "answer": 0
  },
  {
    "q": "On St Brigid's Day, a cross woven from rushes is traditionally placed where?",
    "options": [
      "Over the door for protection",
      "On the table",
      "In the fields",
      "Under the bed"
    ],
    "answer": 0
  },
  {
    "q": "St Brigid's Day in 2023 became what in the Republic of Ireland?",
    "options": [
      "A new public holiday",
      "A bank closure only",
      "A religious fast",
      "A market day"
    ],
    "answer": 0
  },
  {
    "q": "The 'wren boys' traditionally go out on which day?",
    "options": [
      "St Stephen's Day (26 December)",
      "St Patrick's Day",
      "New Year's Day",
      "May Day"
    ],
    "answer": 0
  },
  {
    "q": "Bloomsday celebrates the work of which Irish writer?",
    "options": [
      "James Joyce",
      "W.B. Yeats",
      "Samuel Beckett",
      "Oscar Wilde"
    ],
    "answer": 0
  },
  {
    "q": "Bloomsday is celebrated on which date each year?",
    "options": [
      "16 June",
      "17 March",
      "29 September",
      "1 May"
    ],
    "answer": 0
  },
  {
    "q": "Puck Fair, one of Ireland's oldest fairs, is held in which County Kerry town?",
    "options": [
      "Killorglin",
      "Tralee",
      "Dingle",
      "Killarney"
    ],
    "answer": 0
  },
  {
    "q": "At Puck Fair, a wild goat is crowned as what?",
    "options": [
      "King Puck",
      "The May King",
      "The Wren King",
      "Lord of Misrule"
    ],
    "answer": 0
  },
  {
    "q": "The Rose of Tralee festival is held in which county?",
    "options": [
      "Kerry",
      "Cork",
      "Clare",
      "Galway"
    ],
    "answer": 0
  },
  {
    "q": "The Rose of Tralee is open to women of Irish heritage from where?",
    "options": [
      "Ireland and around the world",
      "Only County Kerry",
      "Only the Republic",
      "Only Dublin"
    ],
    "answer": 0
  },
  {
    "q": "An old Irish Christmas custom is to place a lit candle where on Christmas Eve?",
    "options": [
      "In the window",
      "On the doorstep",
      "In the chimney",
      "On the gate"
    ],
    "answer": 0
  },
  {
    "q": "The candle in the window at Christmas was traditionally said to welcome whom?",
    "options": [
      "Mary and Joseph (travellers)",
      "The wren boys",
      "The banshee",
      "Returning sailors"
    ],
    "answer": 0
  },
  {
    "q": "Nollaig na mBan, on 6 January, is traditionally a day off for whom?",
    "options": [
      "Women",
      "Children",
      "Farmers",
      "Fishermen"
    ],
    "answer": 0
  },
  {
    "q": "Nollaig na mBan translates into English as?",
    "options": [
      "Women's Christmas",
      "Little Christmas",
      "Old Christmas",
      "Children's Christmas"
    ],
    "answer": 0
  },
  {
    "q": "At a traditional Irish wake, the body of the deceased is usually?",
    "options": [
      "Laid out at home and watched over",
      "Cremated immediately",
      "Buried at once",
      "Kept in a church only"
    ],
    "answer": 0
  },
  {
    "q": "Keening at an Irish wake refers to what?",
    "options": [
      "Vocal lamenting and wailing for the dead",
      "A funeral feast",
      "A type of prayer",
      "Lighting candles"
    ],
    "answer": 0
  },
  {
    "q": "According to leap-year tradition, on 29 February it is said that a woman may do what?",
    "options": [
      "Propose marriage to a man",
      "Refuse all work",
      "Wear only green",
      "Visit any house freely"
    ],
    "answer": 0
  },
  {
    "q": "On St Patrick's Day, the custom of 'drowning the shamrock' involves what?",
    "options": [
      "Putting a shamrock in a drink before toasting",
      "Throwing shamrock in a river",
      "Watering plants",
      "Wearing wet shamrock"
    ],
    "answer": 0
  },
  {
    "q": "Which city in Ireland is especially famous for its St Patrick's Festival parade?",
    "options": [
      "Dublin",
      "Cork",
      "Galway",
      "Limerick"
    ],
    "answer": 0
  },
  {
    "q": "On Halloween in Ireland, a traditional game involves children doing what to apples?",
    "options": [
      "Bobbing for them in water",
      "Carving faces in them",
      "Throwing them at doors",
      "Hanging them on trees"
    ],
    "answer": 0
  },
  {
    "q": "The jack-o'-lantern tradition in Ireland was originally carved from what, before pumpkins?",
    "options": [
      "Turnips",
      "Potatoes",
      "Cabbages",
      "Apples"
    ],
    "answer": 0
  },
  {
    "q": "On St Stephen's Day, the wren boys traditionally carried what from house to house?",
    "options": [
      "A decorated holly bush (with a wren)",
      "A May pole",
      "A straw effigy",
      "Candles"
    ],
    "answer": 0
  },
  {
    "q": "A 'station' in rural Irish Catholic custom is a Mass held where?",
    "options": [
      "In a private home",
      "Only in cathedrals",
      "At a holy well",
      "On a mountain top"
    ],
    "answer": 0
  },
  {
    "q": "The Galway International Oyster Festival celebrates the start of the season for which shellfish?",
    "options": [
      "Oysters",
      "Mussels",
      "Crab",
      "Lobster"
    ],
    "answer": 0
  },
  {
    "q": "Which traditional wedding custom involves the couple's hands being tied together?",
    "options": [
      "Handfasting",
      "Jumping the broom",
      "The first dance",
      "The toast"
    ],
    "answer": 0
  },
  {
    "q": "A Claddagh ring, often given in courtship, features a heart held by hands and topped with a?",
    "options": [
      "Crown",
      "Cross",
      "Star",
      "Knot"
    ],
    "answer": 0
  },
  {
    "q": "The Claddagh ring originates from a fishing village near which city?",
    "options": [
      "Galway",
      "Cork",
      "Dublin",
      "Waterford"
    ],
    "answer": 0
  },
  {
    "q": "When a Claddagh ring is worn with the heart pointing outward, it traditionally signals the wearer is?",
    "options": [
      "Single and open to love",
      "Married",
      "Engaged",
      "In mourning"
    ],
    "answer": 0
  },
  {
    "q": "At many Irish weddings a 'magic hanky' is given that can later be made into what for a baby?",
    "options": [
      "A christening bonnet",
      "A blanket",
      "A bib",
      "A toy"
    ],
    "answer": 0
  },
  {
    "q": "The custom of ringing church bells and lighting bonfires marks which midsummer Irish festival night?",
    "options": [
      "St John's Eve (Bonfire Night)",
      "Samhain",
      "Imbolc",
      "Lúnasa"
    ],
    "answer": 0
  },
  {
    "q": "St John's Eve bonfires in Ireland are lit around which date?",
    "options": [
      "23 June",
      "31 October",
      "1 February",
      "1 May"
    ],
    "answer": 0
  },
  {
    "q": "Which annual matchmaking festival is held in Lisdoonvarna, County Clare?",
    "options": [
      "The Matchmaking Festival",
      "Puck Fair",
      "The Rose of Tralee",
      "Fleadh Cheoil"
    ],
    "answer": 0
  },
  {
    "q": "The Fleadh Cheoil is a festival celebrating what?",
    "options": [
      "Traditional Irish music",
      "Irish food",
      "Horse racing",
      "Storytelling only"
    ],
    "answer": 0
  },
  {
    "q": "On the Feast of the Epiphany, 6 January, an old Irish belief held that well water turned to what at midnight?",
    "options": [
      "Wine",
      "Gold",
      "Milk",
      "Holy oil"
    ],
    "answer": 0
  },
  {
    "q": "Which patron saint's pilgrimage involves climbing Croagh Patrick in County Mayo?",
    "options": [
      "St Patrick",
      "St Brigid",
      "St Kevin",
      "St Brendan"
    ],
    "answer": 0
  },
  {
    "q": "Lough Derg in County Donegal is a famous Irish site of pilgrimage known as?",
    "options": [
      "St Patrick's Purgatory",
      "St Brigid's Well",
      "Holy Island",
      "The Pilgrim's Way"
    ],
    "answer": 0
  },
  {
    "q": "At Irish wakes, clocks were traditionally stopped and mirrors covered for what reason?",
    "options": [
      "Respect and superstition about the soul",
      "To keep the house dark",
      "To save money",
      "To stop the noise"
    ],
    "answer": 0
  },
  {
    "q": "Which Irish Christmas swim has become a popular charity tradition on Christmas morning?",
    "options": [
      "The Forty Foot swim",
      "The Liffey dip",
      "The Atlantic plunge",
      "The Shannon swim"
    ],
    "answer": 0
  },
  {
    "q": "Which festival in Galway celebrates the arts each summer with parades and theatre?",
    "options": [
      "Galway International Arts Festival",
      "Puck Fair",
      "Bloomsday",
      "Fleadh Cheoil"
    ],
    "answer": 0
  }
]
