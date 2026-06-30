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
  },
  {
    "q": "In what year did the Irish Free State (Saorstat Eireann) come into existence?",
    "options": [
      "1922",
      "1916",
      "1937",
      "1949"
    ],
    "answer": 0
  },
  {
    "q": "What is the Irish-language name of the 1937 Constitution of Ireland?",
    "options": [
      "Bunreacht na hEireann",
      "Dail Eireann",
      "Saorstat Eireann",
      "Oireachtas na hEireann"
    ],
    "answer": 0
  },
  {
    "q": "Who was the dominant figure behind the 1937 Constitution?",
    "options": [
      "Eamon de Valera",
      "Michael Collins",
      "W.T. Cosgrave",
      "Sean Lemass"
    ],
    "answer": 0
  },
  {
    "q": "In what year did Ireland formally declare itself a Republic?",
    "options": [
      "1949",
      "1937",
      "1922",
      "1948"
    ],
    "answer": 0
  },
  {
    "q": "Which political party did Eamon de Valera found in 1926?",
    "options": [
      "Fianna Fail",
      "Fine Gael",
      "Sinn Fein",
      "Labour"
    ],
    "answer": 0
  },
  {
    "q": "In what year did Ireland join the European Economic Community (EEC)?",
    "options": [
      "1973",
      "1957",
      "1992",
      "2002"
    ],
    "answer": 0
  },
  {
    "q": "Who was the first President of Ireland under the 1937 Constitution?",
    "options": [
      "Douglas Hyde",
      "Eamon de Valera",
      "Sean T. O'Kelly",
      "Erskine Childers"
    ],
    "answer": 0
  },
  {
    "q": "Who was the first female President of Ireland?",
    "options": [
      "Mary Robinson",
      "Mary McAleese",
      "Constance Markievicz",
      "Catherine McGuinness"
    ],
    "answer": 0
  },
  {
    "q": "Who succeeded Mary Robinson as President of Ireland in 1997?",
    "options": [
      "Mary McAleese",
      "Michael D. Higgins",
      "Patrick Hillery",
      "Cearbhall O'Dalaigh"
    ],
    "answer": 0
  },
  {
    "q": "Which Irish poet and politician became President of Ireland in 2011?",
    "options": [
      "Michael D. Higgins",
      "Mary McAleese",
      "Brian Lenihan",
      "Eamon Gilmore"
    ],
    "answer": 0
  },
  {
    "q": "What title is given to the head of the Irish government?",
    "options": [
      "Taoiseach",
      "Tanaiste",
      "Ceann Comhairle",
      "Uachtaran"
    ],
    "answer": 0
  },
  {
    "q": "What is the title of the deputy head of the Irish government?",
    "options": [
      "Tanaiste",
      "Taoiseach",
      "Ceann Comhairle",
      "Uachtaran"
    ],
    "answer": 0
  },
  {
    "q": "What is the lower house of the Irish parliament called?",
    "options": [
      "Dail Eireann",
      "Seanad Eireann",
      "Oireachtas",
      "Ard-Chomhairle"
    ],
    "answer": 0
  },
  {
    "q": "What is the upper house (senate) of the Irish parliament called?",
    "options": [
      "Seanad Eireann",
      "Dail Eireann",
      "Oireachtas",
      "Teachta Dala"
    ],
    "answer": 0
  },
  {
    "q": "What is the collective name for the Irish parliament (President plus both houses)?",
    "options": [
      "Oireachtas",
      "Dail",
      "Seanad",
      "Bunreacht"
    ],
    "answer": 0
  },
  {
    "q": "What is the Irish term for a member of the Dail?",
    "options": [
      "Teachta Dala (TD)",
      "Senator",
      "Taoiseach",
      "Ceann Comhairle"
    ],
    "answer": 0
  },
  {
    "q": "Which Taoiseach is most associated with the economic modernisation of Ireland in the late 1950s and 1960s?",
    "options": [
      "Sean Lemass",
      "Eamon de Valera",
      "Jack Lynch",
      "Liam Cosgrave"
    ],
    "answer": 0
  },
  {
    "q": "Which economist's planning is credited with Ireland's economic expansion programme from 1958?",
    "options": [
      "T.K. Whitaker",
      "Sean Lemass",
      "Garret FitzGerald",
      "Ray MacSharry"
    ],
    "answer": 0
  },
  {
    "q": "Who was Taoiseach during the outbreak of the Northern Ireland Troubles in 1969?",
    "options": [
      "Jack Lynch",
      "Sean Lemass",
      "Liam Cosgrave",
      "Charles Haughey"
    ],
    "answer": 0
  },
  {
    "q": "Which Fianna Fail leader served as Taoiseach on three separate occasions in the 1980s?",
    "options": [
      "Charles Haughey",
      "Jack Lynch",
      "Albert Reynolds",
      "Bertie Ahern"
    ],
    "answer": 0
  },
  {
    "q": "Which Fine Gael leader served as Taoiseach in the 1980s and was known for a 'constitutional crusade'?",
    "options": [
      "Garret FitzGerald",
      "Liam Cosgrave",
      "John Bruton",
      "Alan Dukes"
    ],
    "answer": 0
  },
  {
    "q": "Who was the Fianna Fail Taoiseach who helped broker the Good Friday Agreement in 1998?",
    "options": [
      "Bertie Ahern",
      "Albert Reynolds",
      "Charles Haughey",
      "Brian Cowen"
    ],
    "answer": 0
  },
  {
    "q": "Which Taoiseach succeeded Bertie Ahern in 2008?",
    "options": [
      "Brian Cowen",
      "Enda Kenny",
      "John Bruton",
      "Micheal Martin"
    ],
    "answer": 0
  },
  {
    "q": "Which Fine Gael leader became Taoiseach in 2011 after the financial crisis?",
    "options": [
      "Enda Kenny",
      "John Bruton",
      "Leo Varadkar",
      "Garret FitzGerald"
    ],
    "answer": 0
  },
  {
    "q": "Who became Ireland's first openly gay Taoiseach in 2017?",
    "options": [
      "Leo Varadkar",
      "Enda Kenny",
      "Simon Coveney",
      "Micheal Martin"
    ],
    "answer": 0
  },
  {
    "q": "Which two parties have historically been Ireland's largest, both tracing roots to the Civil War?",
    "options": [
      "Fianna Fail and Fine Gael",
      "Labour and Sinn Fein",
      "Fine Gael and Labour",
      "Fianna Fail and Labour"
    ],
    "answer": 0
  },
  {
    "q": "Which party did W.T. Cosgrave's Cumann na nGaedheal merge into in 1933?",
    "options": [
      "Fine Gael",
      "Fianna Fail",
      "Labour",
      "Sinn Fein"
    ],
    "answer": 0
  },
  {
    "q": "What is the name of Ireland's oldest political party, founded in 1912?",
    "options": [
      "The Labour Party",
      "Fianna Fail",
      "Fine Gael",
      "Sinn Fein"
    ],
    "answer": 0
  },
  {
    "q": "What currency did Ireland adopt when euro notes and coins entered circulation in 2002?",
    "options": [
      "The euro",
      "The punt",
      "The pound sterling",
      "The shilling"
    ],
    "answer": 0
  },
  {
    "q": "What was the name of the Irish currency replaced by the euro?",
    "options": [
      "The Irish pound (punt)",
      "The Irish shilling",
      "The Irish crown",
      "The Irish florin"
    ],
    "answer": 0
  },
  {
    "q": "In what year did euro notes and coins begin circulating in Ireland?",
    "options": [
      "2002",
      "1999",
      "2008",
      "1992"
    ],
    "answer": 0
  },
  {
    "q": "The 'Troubles' primarily refers to conflict in which part of Ireland?",
    "options": [
      "Northern Ireland",
      "Connacht",
      "Munster",
      "Leinster"
    ],
    "answer": 0
  },
  {
    "q": "In which city did 'Bloody Sunday' occur on 30 January 1972?",
    "options": [
      "Derry",
      "Belfast",
      "Dublin",
      "Armagh"
    ],
    "answer": 0
  },
  {
    "q": "The Northern Ireland Civil Rights Association of the late 1960s campaigned mainly against what?",
    "options": [
      "Discrimination against Catholics",
      "Joining the EEC",
      "Decimal currency",
      "Television licences"
    ],
    "answer": 0
  },
  {
    "q": "Which 1981 protest by republican prisoners led to the death of Bobby Sands?",
    "options": [
      "The hunger strikes",
      "Bloody Sunday",
      "The Battle of the Bogside",
      "Internment"
    ],
    "answer": 0
  },
  {
    "q": "While on hunger strike in 1981, Bobby Sands was elected as an MP for which constituency?",
    "options": [
      "Fermanagh and South Tyrone",
      "West Belfast",
      "Foyle",
      "Mid Ulster"
    ],
    "answer": 0
  },
  {
    "q": "The Good Friday Agreement was signed in which year?",
    "options": [
      "1998",
      "1985",
      "1994",
      "2005"
    ],
    "answer": 0
  },
  {
    "q": "By what other name is the Good Friday Agreement also known?",
    "options": [
      "The Belfast Agreement",
      "The Sunningdale Agreement",
      "The Downing Street Declaration",
      "The St Andrews Agreement"
    ],
    "answer": 0
  },
  {
    "q": "Which Northern Irish politician shared the 1998 Nobel Peace Prize with David Trimble?",
    "options": [
      "John Hume",
      "Gerry Adams",
      "Ian Paisley",
      "Seamus Mallon"
    ],
    "answer": 0
  },
  {
    "q": "John Hume was the long-time leader of which Northern Irish party?",
    "options": [
      "The SDLP",
      "Sinn Fein",
      "The DUP",
      "The Ulster Unionist Party"
    ],
    "answer": 0
  },
  {
    "q": "Which firebrand unionist founded the Democratic Unionist Party (DUP)?",
    "options": [
      "Ian Paisley",
      "David Trimble",
      "James Molyneaux",
      "Edward Carson"
    ],
    "answer": 0
  },
  {
    "q": "In 1995, Ireland voted in a referendum to legalise what?",
    "options": [
      "Divorce",
      "Abortion",
      "Same-sex marriage",
      "Contraception"
    ],
    "answer": 0
  },
  {
    "q": "In May 2015, Ireland became the first country to legalise same-sex marriage by what means?",
    "options": [
      "A popular referendum",
      "A Dail vote",
      "A court ruling",
      "A presidential decree"
    ],
    "answer": 0
  },
  {
    "q": "The 2018 referendum to 'Repeal the 8th' concerned which issue?",
    "options": [
      "Abortion",
      "Divorce",
      "Marriage equality",
      "Blasphemy"
    ],
    "answer": 0
  },
  {
    "q": "The Eighth Amendment, repealed in 2018, had been inserted into the Constitution in which year?",
    "options": [
      "1983",
      "1972",
      "1995",
      "2004"
    ],
    "answer": 0
  },
  {
    "q": "What nickname was given to Ireland's period of rapid economic growth from the mid-1990s?",
    "options": [
      "The Celtic Tiger",
      "The Emerald Boom",
      "The Green Surge",
      "The Shamrock Wave"
    ],
    "answer": 0
  },
  {
    "q": "Ireland's national public broadcaster is known by which abbreviation?",
    "options": [
      "RTE",
      "BBC",
      "ITV",
      "TG4"
    ],
    "answer": 0
  },
  {
    "q": "What does RTE stand for?",
    "options": [
      "Radio Telefis Eireann",
      "Radio Television England",
      "Republic of Ireland Television",
      "Raidio Teilifis Eireann Network"
    ],
    "answer": 0
  },
  {
    "q": "Which Irish-language television channel launched in 1996?",
    "options": [
      "TG4",
      "RTE One",
      "Virgin Media One",
      "BBC Two"
    ],
    "answer": 0
  },
  {
    "q": "What is the long-running RTE chat show, the world's second-longest-running talk show?",
    "options": [
      "The Late Late Show",
      "The Tonight Show",
      "The Den",
      "Reeling in the Years"
    ],
    "answer": 0
  },
  {
    "q": "Who was the original and long-serving host of The Late Late Show?",
    "options": [
      "Gay Byrne",
      "Pat Kenny",
      "Ryan Tubridy",
      "Terry Wogan"
    ],
    "answer": 0
  },
  {
    "q": "Ireland is well known internationally for what foreign-policy stance?",
    "options": [
      "Military neutrality",
      "Nuclear armament",
      "Colonial expansion",
      "NATO membership"
    ],
    "answer": 0
  },
  {
    "q": "Is the Republic of Ireland a member of the NATO military alliance?",
    "options": [
      "No",
      "Yes",
      "Only since 1998",
      "Only since 2002"
    ],
    "answer": 0
  },
  {
    "q": "Which international body, focused on peace, has Ireland long contributed troops to?",
    "options": [
      "The United Nations",
      "NATO",
      "The Warsaw Pact",
      "SEATO"
    ],
    "answer": 0
  },
  {
    "q": "What was the title of the Irish head of state's representative replaced by the office of President in 1937?",
    "options": [
      "Governor-General",
      "Lord Lieutenant",
      "Viceroy",
      "High Commissioner"
    ],
    "answer": 0
  },
  {
    "q": "Eamon de Valera's party, Fianna Fail, first came to power in which year?",
    "options": [
      "1932",
      "1922",
      "1948",
      "1937"
    ],
    "answer": 0
  },
  {
    "q": "Which Act passed by the Dublin parliament in 1948 declared Ireland a republic?",
    "options": [
      "The Republic of Ireland Act",
      "The Government of Ireland Act",
      "The External Relations Act",
      "The Constitution Act"
    ],
    "answer": 0
  },
  {
    "q": "When Ireland declared a republic, it left which international organisation?",
    "options": [
      "The Commonwealth",
      "The United Nations",
      "The League of Nations",
      "The EEC"
    ],
    "answer": 0
  },
  {
    "q": "Which inter-party Taoiseach led the government that declared the Republic in 1949?",
    "options": [
      "John A. Costello",
      "Eamon de Valera",
      "Sean Lemass",
      "W.T. Cosgrave"
    ],
    "answer": 0
  },
  {
    "q": "Which 1985 agreement gave the Irish government a consultative role in Northern Ireland?",
    "options": [
      "The Anglo-Irish Agreement",
      "The Good Friday Agreement",
      "The Sunningdale Agreement",
      "The Downing Street Declaration"
    ],
    "answer": 0
  },
  {
    "q": "The 1993 Downing Street Declaration was issued jointly by John Major and which Taoiseach?",
    "options": [
      "Albert Reynolds",
      "Charles Haughey",
      "Bertie Ahern",
      "John Bruton"
    ],
    "answer": 0
  },
  {
    "q": "Which republican paramilitary group declared a ceasefire in 1994?",
    "options": [
      "The Provisional IRA",
      "The UDA",
      "The UVF",
      "The INLA"
    ],
    "answer": 0
  },
  {
    "q": "The 1972 events in Derry, 'Bloody Sunday', involved soldiers from which army?",
    "options": [
      "The British Army",
      "The Irish Army",
      "The US Army",
      "The French Army"
    ],
    "answer": 0
  },
  {
    "q": "How many civil-rights marchers were killed on Bloody Sunday in Derry in 1972?",
    "options": [
      "13 (with another dying later)",
      "6",
      "21",
      "3"
    ],
    "answer": 0
  },
  {
    "q": "The 2010 Saville Report was an inquiry into which event?",
    "options": [
      "Bloody Sunday",
      "The Dublin and Monaghan bombings",
      "The Omagh bombing",
      "The hunger strikes"
    ],
    "answer": 0
  },
  {
    "q": "Which British Prime Minister apologised in 2010 following the Saville Report?",
    "options": [
      "David Cameron",
      "Tony Blair",
      "Gordon Brown",
      "John Major"
    ],
    "answer": 0
  },
  {
    "q": "Who was the British Prime Minister who signed the Good Friday Agreement with Bertie Ahern?",
    "options": [
      "Tony Blair",
      "John Major",
      "Gordon Brown",
      "David Cameron"
    ],
    "answer": 0
  },
  {
    "q": "In 1979, who was assassinated by the IRA while on holiday in County Sligo?",
    "options": [
      "Lord Mountbatten",
      "Airey Neave",
      "Christopher Ewart-Biggs",
      "Ross McWhirter"
    ],
    "answer": 0
  },
  {
    "q": "The Sunningdale Agreement of 1973 attempted to set up what in Northern Ireland?",
    "options": [
      "A power-sharing executive",
      "Direct rule",
      "Joint sovereignty",
      "An independent state"
    ],
    "answer": 0
  },
  {
    "q": "Which Irish President resigned in 1976 after a clash with the government over a bill?",
    "options": [
      "Cearbhall O'Dalaigh",
      "Erskine Childers",
      "Patrick Hillery",
      "Sean T. O'Kelly"
    ],
    "answer": 0
  },
  {
    "q": "Which President of Ireland died in office in 1974?",
    "options": [
      "Erskine Childers",
      "Douglas Hyde",
      "Sean T. O'Kelly",
      "Cearbhall O'Dalaigh"
    ],
    "answer": 0
  },
  {
    "q": "Mary Robinson later became United Nations High Commissioner for what?",
    "options": [
      "Human Rights",
      "Refugees",
      "Trade",
      "Education"
    ],
    "answer": 0
  },
  {
    "q": "Which referendum did Irish voters reject in 2008 before passing it in a second vote in 2009?",
    "options": [
      "The Lisbon Treaty",
      "The Nice Treaty",
      "The Maastricht Treaty",
      "Repeal the 8th"
    ],
    "answer": 0
  },
  {
    "q": "Which EU treaty did Ireland first reject in 2001 before approving it in 2002?",
    "options": [
      "The Nice Treaty",
      "The Lisbon Treaty",
      "The Maastricht Treaty",
      "The Amsterdam Treaty"
    ],
    "answer": 0
  },
  {
    "q": "In which year did Ireland accept a financial bailout from the EU, ECB and IMF?",
    "options": [
      "2010",
      "2008",
      "2013",
      "2002"
    ],
    "answer": 0
  },
  {
    "q": "The group providing Ireland's 2010 bailout was nicknamed what?",
    "options": [
      "The Troika",
      "The Quartet",
      "The Big Three",
      "The Council"
    ],
    "answer": 0
  },
  {
    "q": "Which Irish bank's collapse in 2009 became a symbol of the banking crisis?",
    "options": [
      "Anglo Irish Bank",
      "Bank of Ireland",
      "AIB",
      "Permanent TSB"
    ],
    "answer": 0
  },
  {
    "q": "Who was Minister for Finance during the 2010 bailout and the 2008 bank guarantee?",
    "options": [
      "Brian Lenihan",
      "Michael Noonan",
      "Charlie McCreevy",
      "Ray MacSharry"
    ],
    "answer": 0
  },
  {
    "q": "What controversial 2008 measure guaranteed the liabilities of Ireland's banks?",
    "options": [
      "The bank guarantee",
      "The bond bailout",
      "Quantitative easing",
      "The bad bank"
    ],
    "answer": 0
  },
  {
    "q": "What is the name of the state agency set up in 2009 to manage distressed property loans?",
    "options": [
      "NAMA",
      "IBRC",
      "NTMA",
      "AIB"
    ],
    "answer": 0
  },
  {
    "q": "What is the official residence of the President of Ireland?",
    "options": [
      "Aras an Uachtarain",
      "Leinster House",
      "Dublin Castle",
      "Farmleigh"
    ],
    "answer": 0
  },
  {
    "q": "Which Dublin building is the seat of the Oireachtas (Irish parliament)?",
    "options": [
      "Leinster House",
      "Dublin Castle",
      "The Custom House",
      "The Four Courts"
    ],
    "answer": 0
  },
  {
    "q": "Eamon de Valera served as President of Ireland from 1959 until which year?",
    "options": [
      "1973",
      "1966",
      "1969",
      "1975"
    ],
    "answer": 0
  },
  {
    "q": "What is the term length of the Irish presidency?",
    "options": [
      "Seven years",
      "Four years",
      "Five years",
      "Six years"
    ],
    "answer": 0
  },
  {
    "q": "How many terms (maximum) may an Irish President serve?",
    "options": [
      "Two",
      "One",
      "Three",
      "Unlimited"
    ],
    "answer": 0
  },
  {
    "q": "Which political party led by Gerry Adams grew significantly in the Republic in the 2010s?",
    "options": [
      "Sinn Fein",
      "The Green Party",
      "Renua",
      "The Social Democrats"
    ],
    "answer": 0
  },
  {
    "q": "Who succeeded Gerry Adams as leader of Sinn Fein in 2018?",
    "options": [
      "Mary Lou McDonald",
      "Michelle O'Neill",
      "Pearse Doherty",
      "Eoin O Broin"
    ],
    "answer": 0
  },
  {
    "q": "Which party, founded in the 1980s on environmental policy, first entered an Irish government in 2007?",
    "options": [
      "The Green Party",
      "The Progressive Democrats",
      "Labour",
      "Renua"
    ],
    "answer": 0
  },
  {
    "q": "Which party founded by Des O'Malley split from Fianna Fail in 1985?",
    "options": [
      "The Progressive Democrats",
      "The Green Party",
      "Fine Gael",
      "Labour"
    ],
    "answer": 0
  },
  {
    "q": "What is the name of the Dublin street with the General Post Office, central to modern Irish history?",
    "options": [
      "O'Connell Street",
      "Grafton Street",
      "Dame Street",
      "Henry Street"
    ],
    "answer": 0
  },
  {
    "q": "Which 1973 event involved Ireland joining alongside the UK and Denmark?",
    "options": [
      "Joining the EEC",
      "Joining NATO",
      "Joining the euro",
      "Joining the UN"
    ],
    "answer": 0
  },
  {
    "q": "In what year did Ireland join the United Nations?",
    "options": [
      "1955",
      "1945",
      "1973",
      "1937"
    ],
    "answer": 0
  },
  {
    "q": "Which Irishman served as a UN diplomat and won the Nobel Peace Prize in 1974?",
    "options": [
      "Sean MacBride",
      "John Hume",
      "Eamon de Valera",
      "Conor Cruise O'Brien"
    ],
    "answer": 0
  },
  {
    "q": "Sean MacBride co-founded which human rights organisation?",
    "options": [
      "Amnesty International",
      "The Red Cross",
      "Concern",
      "Trocaire"
    ],
    "answer": 0
  },
  {
    "q": "Which long-serving Irish broadcaster hosted The Late Late Show from 1999 to 2009?",
    "options": [
      "Pat Kenny",
      "Ryan Tubridy",
      "Gay Byrne",
      "Joe Duffy"
    ],
    "answer": 0
  },
  {
    "q": "What is the name of RTE's flagship evening television news-and-current-affairs programme launched in 1962 as a current affairs show?",
    "options": [
      "Prime Time",
      "Six One",
      "Morning Ireland",
      "Today Tonight"
    ],
    "answer": 0
  },
  {
    "q": "Which RTE radio programme is a popular morning news flagship?",
    "options": [
      "Morning Ireland",
      "Liveline",
      "Drivetime",
      "The News at One"
    ],
    "answer": 0
  },
  {
    "q": "Which RTE radio phone-in show is hosted by Joe Duffy?",
    "options": [
      "Liveline",
      "Morning Ireland",
      "Drivetime",
      "The Late Debate"
    ],
    "answer": 0
  },
  {
    "q": "What flag has been the national flag of Ireland since the founding of the state?",
    "options": [
      "The green, white and orange tricolour",
      "The harp on green",
      "The Saint Patrick's saltire",
      "The blue with gold harp"
    ],
    "answer": 0
  },
  {
    "q": "What is the national anthem of the Republic of Ireland?",
    "options": [
      "Amhran na bhFiann",
      "A Nation Once Again",
      "The Foggy Dew",
      "God Save Ireland"
    ],
    "answer": 0
  },
  {
    "q": "What is the official state emblem of Ireland?",
    "options": [
      "The harp",
      "The shamrock",
      "The Celtic cross",
      "The round tower"
    ],
    "answer": 0
  },
  {
    "q": "Which county became part of the Republic, not Northern Ireland, despite being in Ulster?",
    "options": [
      "Donegal",
      "Antrim",
      "Down",
      "Armagh"
    ],
    "answer": 0
  },
  {
    "q": "How many counties make up Northern Ireland?",
    "options": [
      "Six",
      "Nine",
      "Four",
      "Twenty-six"
    ],
    "answer": 0
  },
  {
    "q": "How many of the 32 counties of Ireland are in the Republic?",
    "options": [
      "26",
      "32",
      "28",
      "24"
    ],
    "answer": 0
  },
  {
    "q": "In the 1937 Constitution, what name was given to the state in English?",
    "options": [
      "Ireland (Eire)",
      "The Irish Republic",
      "Saorstat Eireann",
      "The Free State"
    ],
    "answer": 0
  },
  {
    "q": "Articles 2 and 3 of the original 1937 Constitution made a territorial claim over what?",
    "options": [
      "The whole island of Ireland",
      "Great Britain",
      "The Isle of Man",
      "Scotland"
    ],
    "answer": 0
  },
  {
    "q": "As part of the Good Friday Agreement, Ireland amended Articles 2 and 3 to do what?",
    "options": [
      "Drop the territorial claim on Northern Ireland",
      "Claim Wales",
      "Abolish the Seanad",
      "Adopt the euro"
    ],
    "answer": 0
  },
  {
    "q": "Which Taoiseach controversially ran arms-related politics in the 1970 'Arms Crisis'?",
    "options": [
      "Charles Haughey",
      "Jack Lynch",
      "Sean Lemass",
      "Liam Cosgrave"
    ],
    "answer": 0
  },
  {
    "q": "Which Fianna Fail Taoiseach resigned in 1992 amid a phone-tapping and political controversy?",
    "options": [
      "Charles Haughey",
      "Albert Reynolds",
      "Jack Lynch",
      "Brian Cowen"
    ],
    "answer": 0
  },
  {
    "q": "Which 1990s tribunal investigated payments to politicians, including Charles Haughey?",
    "options": [
      "The Moriarty Tribunal",
      "The Saville Inquiry",
      "The Beef Tribunal",
      "The Mahon Tribunal"
    ],
    "answer": 0
  },
  {
    "q": "Bertie Ahern resigned as Taoiseach in 2008 amid revelations at which tribunal?",
    "options": [
      "The Mahon Tribunal",
      "The Moriarty Tribunal",
      "The Saville Inquiry",
      "The Beef Tribunal"
    ],
    "answer": 0
  },
  {
    "q": "Which referendum in 1972 lowered the voting age in Ireland to 18?",
    "options": [
      "The Fourth Amendment",
      "The Eighth Amendment",
      "The First Amendment",
      "The Fifth Amendment"
    ],
    "answer": 0
  },
  {
    "q": "Which 1972 referendum removed the 'special position' of the Catholic Church from the Constitution?",
    "options": [
      "The Fifth Amendment",
      "The Fourth Amendment",
      "The Eighth Amendment",
      "The Sixth Amendment"
    ],
    "answer": 0
  },
  {
    "q": "Contraception was fully legalised in Ireland by legislation in which decade?",
    "options": [
      "The 1980s and 1990s",
      "The 1950s",
      "The 1920s",
      "The 2010s"
    ],
    "answer": 0
  },
  {
    "q": "A 1986 referendum on legalising divorce in Ireland resulted in what?",
    "options": [
      "It was rejected",
      "It was approved",
      "It was withdrawn",
      "It was a tie"
    ],
    "answer": 0
  },
  {
    "q": "Which 2015 referendum, separate from marriage equality, lowered the minimum age for presidential candidates and was rejected?",
    "options": [
      "The presidential age referendum",
      "The blasphemy referendum",
      "The Seanad referendum",
      "The divorce referendum"
    ],
    "answer": 0
  },
  {
    "q": "In 2013 Irish voters rejected a referendum to abolish which institution?",
    "options": [
      "The Seanad (Senate)",
      "The Dail",
      "The Presidency",
      "The Supreme Court"
    ],
    "answer": 0
  },
  {
    "q": "Which Irish President was the only one to date elected unopposed more than once and served two full terms ending in 2011?",
    "options": [
      "Mary McAleese",
      "Mary Robinson",
      "Patrick Hillery",
      "Michael D. Higgins"
    ],
    "answer": 0
  },
  {
    "q": "Which President of Ireland was previously a long-serving European Commissioner?",
    "options": [
      "Patrick Hillery",
      "Mary Robinson",
      "Erskine Childers",
      "Douglas Hyde"
    ],
    "answer": 0
  },
  {
    "q": "Which Irishman served as European Commissioner for the Internal Market in the 2000s, having earlier been Minister for Finance?",
    "options": [
      "Charlie McCreevy",
      "Ray MacSharry",
      "Peter Sutherland",
      "Padraig Flynn"
    ],
    "answer": 0
  },
  {
    "q": "Which Irishman served as a European Commissioner and later head of the World Trade Organization's predecessor GATT?",
    "options": [
      "Peter Sutherland",
      "Garret FitzGerald",
      "Sean Lemass",
      "John Bruton"
    ],
    "answer": 0
  },
  {
    "q": "In what year did the Republic of Ireland host the Eurovision Song Contest after Riverdance debuted as an interval act?",
    "options": [
      "1994",
      "1988",
      "1971",
      "2000"
    ],
    "answer": 0
  },
  {
    "q": "Which Irish dance phenomenon premiered as a Eurovision interval act in 1994?",
    "options": [
      "Riverdance",
      "Lord of the Dance",
      "Celtic Woman",
      "Feet of Flames"
    ],
    "answer": 0
  },
  {
    "q": "How many times has Ireland won the Eurovision Song Contest, more than any other country?",
    "options": [
      "Seven",
      "Five",
      "Three",
      "Ten"
    ],
    "answer": 0
  },
  {
    "q": "Which Irish singer won Eurovision in 1980 and 1987?",
    "options": [
      "Johnny Logan",
      "Dana",
      "Linda Martin",
      "Niamh Kavanagh"
    ],
    "answer": 0
  },
  {
    "q": "Who won Eurovision for Ireland in 1970 with 'All Kinds of Everything'?",
    "options": [
      "Dana",
      "Johnny Logan",
      "Linda Martin",
      "Eimear Quinn"
    ],
    "answer": 0
  },
  {
    "q": "The Industrial Development Authority (IDA) is tasked with attracting what to Ireland?",
    "options": [
      "Foreign investment",
      "Tourists",
      "Immigrants",
      "Students"
    ],
    "answer": 0
  },
  {
    "q": "Ireland's low rate of which tax attracted many multinationals during the Celtic Tiger?",
    "options": [
      "Corporation tax",
      "Income tax",
      "VAT",
      "Property tax"
    ],
    "answer": 0
  },
  {
    "q": "Many US tech giants located their European headquarters in which Irish city's docklands?",
    "options": [
      "Dublin",
      "Cork",
      "Galway",
      "Limerick"
    ],
    "answer": 0
  },
  {
    "q": "Which Irish-founded budget airline became one of Europe's largest carriers?",
    "options": [
      "Ryanair",
      "Aer Lingus",
      "Aer Arann",
      "CityJet"
    ],
    "answer": 0
  },
  {
    "q": "What is the name of Ireland's national flag carrier airline?",
    "options": [
      "Aer Lingus",
      "Ryanair",
      "British Airways",
      "Aer Arann"
    ],
    "answer": 0
  },
  {
    "q": "Which 1990 World Cup brought huge national celebration when Ireland reached the quarter-finals?",
    "options": [
      "Italia '90",
      "USA '94",
      "Mexico '86",
      "France '98"
    ],
    "answer": 0
  },
  {
    "q": "Which Englishman managed the Republic of Ireland football team at Italia '90?",
    "options": [
      "Jack Charlton",
      "Bobby Robson",
      "Mick McCarthy",
      "Brian Kerr"
    ],
    "answer": 0
  },
  {
    "q": "Which long-serving figure was Catholic Archbishop of Dublin and a major social influence from 1940 to 1972?",
    "options": [
      "John Charles McQuaid",
      "Diarmuid Martin",
      "Desmond Connell",
      "Kevin McNamara"
    ],
    "answer": 0
  },
  {
    "q": "The 1979 visit of which Pope drew over a million people to Dublin's Phoenix Park?",
    "options": [
      "Pope John Paul II",
      "Pope Paul VI",
      "Pope Benedict XVI",
      "Pope Francis"
    ],
    "answer": 0
  },
  {
    "q": "Which Pope visited Ireland for the World Meeting of Families in 2018?",
    "options": [
      "Pope Francis",
      "Pope John Paul II",
      "Pope Benedict XVI",
      "Pope Paul VI"
    ],
    "answer": 0
  },
  {
    "q": "Which British monarch made a historic first state visit to the Republic of Ireland in 2011?",
    "options": [
      "Queen Elizabeth II",
      "King George VI",
      "King Charles III",
      "King Edward VIII"
    ],
    "answer": 0
  },
  {
    "q": "Which US President with Irish roots visited Ireland in 1963?",
    "options": [
      "John F. Kennedy",
      "Ronald Reagan",
      "Bill Clinton",
      "Richard Nixon"
    ],
    "answer": 0
  },
  {
    "q": "Which US President helped advance the Northern Ireland peace process in the 1990s?",
    "options": [
      "Bill Clinton",
      "George H.W. Bush",
      "Ronald Reagan",
      "Jimmy Carter"
    ],
    "answer": 0
  },
  {
    "q": "Which US senator chaired the Good Friday Agreement negotiations in 1998?",
    "options": [
      "George Mitchell",
      "Ted Kennedy",
      "John Kerry",
      "Joe Biden"
    ],
    "answer": 0
  },
  {
    "q": "What is the name of the policy body that runs Northern Ireland's devolved government under the Good Friday Agreement?",
    "options": [
      "The Northern Ireland Assembly",
      "The Dail",
      "The House of Commons",
      "The Seanad"
    ],
    "answer": 0
  },
  {
    "q": "The two top posts in Northern Ireland's devolved executive are First Minister and what?",
    "options": [
      "deputy First Minister",
      "Taoiseach",
      "Secretary of State",
      "Speaker"
    ],
    "answer": 0
  },
  {
    "q": "Which former IRA commander became deputy First Minister of Northern Ireland in 2007?",
    "options": [
      "Martin McGuinness",
      "Gerry Adams",
      "Gerry Kelly",
      "Pat Doherty"
    ],
    "answer": 0
  },
  {
    "q": "Ian Paisley and Martin McGuinness, who governed together from 2007, were nicknamed what?",
    "options": [
      "The Chuckle Brothers",
      "The Odd Couple",
      "The Peace Pair",
      "The Twins"
    ],
    "answer": 0
  },
  {
    "q": "Which 1998 dissident-republican bombing killed 29 people in a Northern Irish town?",
    "options": [
      "The Omagh bombing",
      "The Enniskillen bombing",
      "The Dublin and Monaghan bombings",
      "The Birmingham bombing"
    ],
    "answer": 0
  },
  {
    "q": "Which 1974 bombings in the Republic were the deadliest single day of the Troubles?",
    "options": [
      "The Dublin and Monaghan bombings",
      "The Omagh bombing",
      "The Enniskillen bombing",
      "The Warrenpoint ambush"
    ],
    "answer": 0
  },
  {
    "q": "In which decade was the Anglo-Irish Free Trade Agreement signed, predating EEC entry?",
    "options": [
      "The 1960s",
      "The 1930s",
      "The 1980s",
      "The 1990s"
    ],
    "answer": 0
  },
  {
    "q": "What were the 'Economic War' tariffs of the 1930s a dispute between Ireland and which country?",
    "options": [
      "The United Kingdom",
      "France",
      "Germany",
      "The United States"
    ],
    "answer": 0
  },
  {
    "q": "The 1938 agreement that returned the 'Treaty Ports' to Irish control was negotiated with whom?",
    "options": [
      "The United Kingdom",
      "France",
      "The League of Nations",
      "Germany"
    ],
    "answer": 0
  },
  {
    "q": "Control of the Treaty Ports allowed Ireland to maintain what during the Second World War?",
    "options": [
      "Neutrality",
      "An alliance with Britain",
      "An invasion of Germany",
      "A naval blockade"
    ],
    "answer": 0
  },
  {
    "q": "What term did Ireland officially use for its neutral status during the Second World War?",
    "options": [
      "The Emergency",
      "The Crisis",
      "The Standoff",
      "The Watch"
    ],
    "answer": 0
  },
  {
    "q": "Which abortion-related tragedy in 2012 intensified calls to repeal the Eighth Amendment?",
    "options": [
      "The death of Savita Halappanavar",
      "The X Case",
      "The C Case",
      "The Kerry Babies case"
    ],
    "answer": 0
  },
  {
    "q": "The 1992 'X Case' in Ireland concerned the right to travel for what?",
    "options": [
      "An abortion",
      "A divorce",
      "An education",
      "Emigration"
    ],
    "answer": 0
  },
  {
    "q": "Which Taoiseach made a 2013 state apology to the women of the Magdalene Laundries?",
    "options": [
      "Enda Kenny",
      "Bertie Ahern",
      "Brian Cowen",
      "Leo Varadkar"
    ],
    "answer": 0
  },
  {
    "q": "What name is given to the Catholic-run institutions for so-called 'fallen women' in 20th-century Ireland?",
    "options": [
      "The Magdalene Laundries",
      "The Mother and Baby Homes",
      "The Industrial Schools",
      "The Workhouses"
    ],
    "answer": 0
  },
  {
    "q": "Eamon de Valera was born in which city in 1882?",
    "options": [
      "New York",
      "Dublin",
      "Limerick",
      "Cork"
    ],
    "answer": 0
  },
  {
    "q": "Which Irish university did many leaders attend and is part of the National University of Ireland system, located in Dublin?",
    "options": [
      "University College Dublin",
      "Trinity College Dublin",
      "Maynooth",
      "University College Cork"
    ],
    "answer": 0
  },
  {
    "q": "What name is given to Ireland's written 1937 fundamental law that replaced the 1922 Free State Constitution?",
    "options": [
      "The Constitution of Ireland",
      "The Treaty",
      "The Statute of Westminster",
      "The Government of Ireland Act"
    ],
    "answer": 0
  },
  {
    "q": "Which 1931 statute gave Dominions like the Irish Free State greater legislative independence from Britain?",
    "options": [
      "The Statute of Westminster",
      "The Government of Ireland Act",
      "The External Relations Act",
      "The Republic of Ireland Act"
    ],
    "answer": 0
  },
  {
    "q": "How many Six Nations Grand Slams had Ireland won by 2023?",
    "options": [
      "Four",
      "Two",
      "Six",
      "One"
    ],
    "answer": 0
  },
  {
    "q": "Which Irish rugby player was famous for scoring tries from centre and captaining Ireland for many years?",
    "options": [
      "Brian O'Driscoll",
      "Paul O'Connell",
      "Keith Wood",
      "Ronan O'Gara"
    ],
    "answer": 0
  },
  {
    "q": "Where do Leinster Rugby traditionally play their big home matches?",
    "options": [
      "The Aviva / RDS in Dublin",
      "Thomond Park in Limerick",
      "Ravenhill in Belfast",
      "The Sportsground in Galway"
    ],
    "answer": 0
  },
  {
    "q": "Which Irish out-half kicked Ireland to many wins and is among their top points scorers?",
    "options": [
      "Johnny Sexton",
      "Brian O'Driscoll",
      "Rob Kearney",
      "Tommy Bowe"
    ],
    "answer": 0
  },
  {
    "q": "Which Irish second row captained Ireland and Munster and was famous for his lineout play?",
    "options": [
      "Paul O'Connell",
      "Cian Healy",
      "Sean O'Brien",
      "Jamie Heaslip"
    ],
    "answer": 0
  },
  {
    "q": "Which city is home to Ulster Rugby?",
    "options": [
      "Belfast",
      "Cork",
      "Galway",
      "Dublin"
    ],
    "answer": 0
  },
  {
    "q": "Which is the home stadium of the Irish national rugby team?",
    "options": [
      "Aviva Stadium",
      "Croke Park",
      "Thomond Park",
      "Windsor Park"
    ],
    "answer": 0
  },
  {
    "q": "What was the Aviva Stadium previously known as?",
    "options": [
      "Lansdowne Road",
      "Dalymount Park",
      "The RDS",
      "Tolka Park"
    ],
    "answer": 0
  },
  {
    "q": "How many teams compete in the Six Nations rugby championship?",
    "options": [
      "Six",
      "Five",
      "Four",
      "Eight"
    ],
    "answer": 0
  },
  {
    "q": "Before it became the Six Nations, what was the championship called?",
    "options": [
      "The Five Nations",
      "The Home Nations only",
      "The Four Nations",
      "The Tri Nations"
    ],
    "answer": 0
  },
  {
    "q": "Which team joined to turn the Five Nations into the Six Nations in 2000?",
    "options": [
      "Italy",
      "Argentina",
      "Romania",
      "Spain"
    ],
    "answer": 0
  },
  {
    "q": "Which Munster fly-half was renowned for his drop goals and points scoring against France and others?",
    "options": [
      "Ronan O'Gara",
      "Peter Stringer",
      "Donncha O'Callaghan",
      "John Hayes"
    ],
    "answer": 0
  },
  {
    "q": "Which Irish hooker captained the British and Irish Lions and was nicknamed for his ball-playing skills?",
    "options": [
      "Keith Wood",
      "Shane Byrne",
      "Jerry Flannery",
      "Rory Best"
    ],
    "answer": 0
  },
  {
    "q": "Which Irish winger from Ulster was known for his finishing and tries on the wing?",
    "options": [
      "Tommy Bowe",
      "Gordon D'Arcy",
      "Luke Fitzgerald",
      "Andrew Trimble"
    ],
    "answer": 0
  },
  {
    "q": "In which year did Ireland win the Six Nations Grand Slam captained by Brian O'Driscoll, their first since 1948?",
    "options": [
      "2009",
      "2007",
      "2011",
      "2005"
    ],
    "answer": 0
  },
  {
    "q": "When Ireland won the Grand Slam in 1948, what was the championship called?",
    "options": [
      "The Five Nations",
      "The Six Nations",
      "The Four Nations",
      "The Lions Cup"
    ],
    "answer": 0
  },
  {
    "q": "Which competition do Irish provinces play in alongside Welsh, Scottish, Italian and South African sides?",
    "options": [
      "The United Rugby Championship",
      "The English Premiership",
      "The Top 14",
      "The Super Rugby"
    ],
    "answer": 0
  },
  {
    "q": "Which Irish province pulled off a famous Pro12 league title in 2016 under Pat Lam?",
    "options": [
      "Connacht",
      "Munster",
      "Ulster",
      "Leinster"
    ],
    "answer": 0
  },
  {
    "q": "Munster famously beat the All Blacks in 1978 at which ground?",
    "options": [
      "Thomond Park",
      "Lansdowne Road",
      "Croke Park",
      "Ravenhill"
    ],
    "answer": 0
  },
  {
    "q": "What animal features on the crest of the Irish rugby team and IRFU?",
    "options": [
      "The shamrock",
      "The harp",
      "The wolfhound",
      "The eagle"
    ],
    "answer": 0
  },
  {
    "q": "Which Irish full-back from Leinster won a Grand Slam and many Lions caps?",
    "options": [
      "Rob Kearney",
      "Geordan Murphy",
      "Girvan Dempsey",
      "Isa Nacewa"
    ],
    "answer": 0
  },
  {
    "q": "Which coach led Ireland to back-to-back Six Nations titles in 2014 and 2015?",
    "options": [
      "Joe Schmidt",
      "Declan Kidney",
      "Eddie O'Sullivan",
      "Andy Farrell"
    ],
    "answer": 0
  },
  {
    "q": "Which coach guided Ireland to the 2009 Grand Slam?",
    "options": [
      "Declan Kidney",
      "Joe Schmidt",
      "Warren Gatland",
      "Eddie O'Sullivan"
    ],
    "answer": 0
  },
  {
    "q": "Ireland recorded a first-ever win over New Zealand in 2016 in which city?",
    "options": [
      "Chicago",
      "Dublin",
      "Auckland",
      "London"
    ],
    "answer": 0
  },
  {
    "q": "Which Irish scrum-half was famous at Munster for his small stature and a try-saving tackle in a 2006 final?",
    "options": [
      "Peter Stringer",
      "Conor Murray",
      "Eoin Reddan",
      "Tomas O'Leary"
    ],
    "answer": 0
  },
  {
    "q": "Which Irish flanker won player of the year awards and was known for his power at the breakdown?",
    "options": [
      "Sean O'Brien",
      "Cian Healy",
      "Rory Best",
      "Devin Toner"
    ],
    "answer": 0
  },
  {
    "q": "Who was Ireland's national soccer team manager during their 1990 World Cup run?",
    "options": [
      "Jack Charlton",
      "Mick McCarthy",
      "Eoin Hand",
      "Brian Kerr"
    ],
    "answer": 0
  },
  {
    "q": "Where did the Republic of Ireland reach their first-ever World Cup in 1990?",
    "options": [
      "Italy",
      "USA",
      "Mexico",
      "Spain"
    ],
    "answer": 0
  },
  {
    "q": "How far did Ireland progress at the 1990 World Cup?",
    "options": [
      "The quarter-finals",
      "The semi-finals",
      "The final",
      "The last 16 only"
    ],
    "answer": 0
  },
  {
    "q": "Which team knocked Ireland out of the 1990 World Cup quarter-final?",
    "options": [
      "Italy",
      "England",
      "Romania",
      "Germany"
    ],
    "answer": 0
  },
  {
    "q": "Ireland beat which country on penalties in the 1990 World Cup last 16?",
    "options": [
      "Romania",
      "Italy",
      "England",
      "Egypt"
    ],
    "answer": 0
  },
  {
    "q": "Which goalkeeper saved the decisive penalty for Ireland against Romania in 1990?",
    "options": [
      "Packie Bonner",
      "Shay Given",
      "Alan Kelly",
      "Gerry Peyton"
    ],
    "answer": 0
  },
  {
    "q": "Who scored the winning penalty for Ireland against Romania in 1990?",
    "options": [
      "David O'Leary",
      "Kevin Sheedy",
      "Niall Quinn",
      "Ray Houghton"
    ],
    "answer": 0
  },
  {
    "q": "Which Irish midfielder famously scored against England at Euro 88 with the line 'who put the ball in the England net'?",
    "options": [
      "Ray Houghton",
      "Kevin Sheedy",
      "Tony Cascarino",
      "John Aldridge"
    ],
    "answer": 0
  },
  {
    "q": "At the 1994 World Cup, Ray Houghton scored a famous goal as Ireland beat which nation?",
    "options": [
      "Italy",
      "Mexico",
      "Norway",
      "Holland"
    ],
    "answer": 0
  },
  {
    "q": "In which country was the 1994 World Cup, where Ireland beat Italy?",
    "options": [
      "USA",
      "Italy",
      "France",
      "Mexico"
    ],
    "answer": 0
  },
  {
    "q": "Which Irish striker, known as the 'Tall' target man, scored at the 1990 and 2002 World Cups?",
    "options": [
      "Niall Quinn",
      "Robbie Keane",
      "Tony Cascarino",
      "David Connolly"
    ],
    "answer": 0
  },
  {
    "q": "Who became the Republic of Ireland's all-time record goalscorer?",
    "options": [
      "Robbie Keane",
      "Niall Quinn",
      "Frank Stapleton",
      "Tony Cascarino"
    ],
    "answer": 0
  },
  {
    "q": "Which combative Irish midfielder captained Manchester United and left Ireland's 2002 World Cup camp in Saipan?",
    "options": [
      "Roy Keane",
      "Roy Keane played for Liverpool",
      "Andy Townsend",
      "Mark Kennedy"
    ],
    "answer": 0
  },
  {
    "q": "Which island gave its name to the famous 2002 dispute between Roy Keane and Mick McCarthy?",
    "options": [
      "Saipan",
      "Tenerife",
      "Malta",
      "Cyprus"
    ],
    "answer": 0
  },
  {
    "q": "How far did Ireland progress at the 2002 World Cup in Japan and South Korea?",
    "options": [
      "The last 16",
      "The quarter-finals",
      "The semi-finals",
      "The group stage only"
    ],
    "answer": 0
  },
  {
    "q": "Which Irish striker scored a famous late equaliser against Germany at the 2002 World Cup?",
    "options": [
      "Robbie Keane",
      "Niall Quinn",
      "Damien Duff",
      "Gary Breen"
    ],
    "answer": 0
  },
  {
    "q": "Ireland lost on penalties to which country in the 2002 World Cup last 16?",
    "options": [
      "Spain",
      "Germany",
      "Italy",
      "Sweden"
    ],
    "answer": 0
  },
  {
    "q": "Which long-serving goalkeeper holds the record for most Republic of Ireland caps?",
    "options": [
      "Shay Given",
      "Packie Bonner",
      "Alan Kelly",
      "Dean Kiely"
    ],
    "answer": 0
  },
  {
    "q": "Which winger known for his dribbling and socks down was a star of Ireland's 2002 team?",
    "options": [
      "Damien Duff",
      "Jason McAteer",
      "Kevin Kilbane",
      "Steve Finnan"
    ],
    "answer": 0
  },
  {
    "q": "What is the top division of soccer in the Republic of Ireland called?",
    "options": [
      "The League of Ireland",
      "The Premier Division of England",
      "The Irish Premiership",
      "The Scottish League"
    ],
    "answer": 0
  },
  {
    "q": "Which Dublin club is one of the most successful in League of Ireland history, based at Tallaght?",
    "options": [
      "Shamrock Rovers",
      "Bohemians",
      "St Patrick's Athletic",
      "Shelbourne"
    ],
    "answer": 0
  },
  {
    "q": "Which Dublin club plays at Dalymount Park?",
    "options": [
      "Bohemians",
      "Shamrock Rovers",
      "Shelbourne",
      "UCD"
    ],
    "answer": 0
  },
  {
    "q": "The Northern Ireland football team plays its home games at which Belfast ground?",
    "options": [
      "Windsor Park",
      "The Oval",
      "Ravenhill",
      "Casement Park"
    ],
    "answer": 0
  },
  {
    "q": "Which Northern Ireland and Manchester United winger is regarded as one of the greatest players ever, nicknamed the 'fifth Beatle'?",
    "options": [
      "George Best",
      "Pat Jennings",
      "Norman Whiteside",
      "David Healy"
    ],
    "answer": 0
  },
  {
    "q": "Which Northern Ireland goalkeeper had a long career with Tottenham and Arsenal and won over 100 caps?",
    "options": [
      "Pat Jennings",
      "Harry Gregg",
      "Roy Carroll",
      "Maik Taylor"
    ],
    "answer": 0
  },
  {
    "q": "Northern Ireland's youngest World Cup scorer Norman Whiteside played at which 1982 tournament host?",
    "options": [
      "Spain",
      "Italy",
      "Mexico",
      "Argentina"
    ],
    "answer": 0
  },
  {
    "q": "Which Republic of Ireland manager led the team to Euro 2016 in France?",
    "options": [
      "Martin O'Neill",
      "Giovanni Trapattoni",
      "Mick McCarthy",
      "Brian Kerr"
    ],
    "answer": 0
  },
  {
    "q": "Robbie Brady scored a famous winning header for Ireland against which team at Euro 2016?",
    "options": [
      "Italy",
      "France",
      "Sweden",
      "Belgium"
    ],
    "answer": 0
  },
  {
    "q": "Which Italian was Republic of Ireland manager who led them to Euro 2012?",
    "options": [
      "Giovanni Trapattoni",
      "Fabio Capello",
      "Marcello Lippi",
      "Roberto Mancini"
    ],
    "answer": 0
  },
  {
    "q": "Which boxer won Ireland's first Olympic boxing gold medal in 1992?",
    "options": [
      "Michael Carruth",
      "Wayne McCullough",
      "Barry McGuigan",
      "Steve Collins"
    ],
    "answer": 0
  },
  {
    "q": "At which Olympics did Michael Carruth win boxing gold?",
    "options": [
      "Barcelona 1992",
      "Atlanta 1996",
      "Seoul 1988",
      "Sydney 2000"
    ],
    "answer": 0
  },
  {
    "q": "Which Belfast boxer won a silver medal at the 1992 Olympics and was nicknamed the 'Pocket Rocket'?",
    "options": [
      "Wayne McCullough",
      "Barry McGuigan",
      "Carl Frampton",
      "Michael Conlan"
    ],
    "answer": 0
  },
  {
    "q": "Which Clones boxer became WBA featherweight world champion and was nicknamed the 'Clones Cyclone'?",
    "options": [
      "Barry McGuigan",
      "Steve Collins",
      "Wayne McCullough",
      "Bernard Dunne"
    ],
    "answer": 0
  },
  {
    "q": "Which Dublin boxer known as the 'Celtic Warrior' beat Chris Eubank and Nigel Benn?",
    "options": [
      "Steve Collins",
      "Barry McGuigan",
      "Michael Carruth",
      "Bernard Dunne"
    ],
    "answer": 0
  },
  {
    "q": "Which Belfast boxer won the WBA super-bantamweight world title in front of a huge crowd in Dublin in 2009?",
    "options": [
      "Bernard Dunne",
      "Steve Collins",
      "Carl Frampton",
      "Wayne McCullough"
    ],
    "answer": 0
  },
  {
    "q": "Which Belfast two-weight world champion was nicknamed 'The Jackal'?",
    "options": [
      "Carl Frampton",
      "Barry McGuigan",
      "Paddy Barnes",
      "Michael Conlan"
    ],
    "answer": 0
  },
  {
    "q": "Which Irish boxer won Olympic bronze medals at both Beijing 2008 and London 2012 in the light-flyweight class?",
    "options": [
      "Paddy Barnes",
      "Kenneth Egan",
      "John Joe Nevin",
      "Darren Sutherland"
    ],
    "answer": 0
  },
  {
    "q": "Kenneth Egan won an Olympic boxing silver for Ireland at which 2008 games?",
    "options": [
      "Beijing",
      "Athens",
      "London",
      "Sydney"
    ],
    "answer": 0
  },
  {
    "q": "Which famous steeplechaser, regarded among the greatest ever, was trained in Ireland and won three Cheltenham Gold Cups?",
    "options": [
      "Arkle",
      "Red Rum",
      "Desert Orchid",
      "Best Mate"
    ],
    "answer": 0
  },
  {
    "q": "Arkle was famous for competing in which type of horse racing?",
    "options": [
      "National Hunt (jumps)",
      "Flat racing",
      "Harness racing",
      "Endurance racing"
    ],
    "answer": 0
  },
  {
    "q": "Which famous flat-racing trainer based at Ballydoyle has won many Classics and Group 1 races?",
    "options": [
      "Aidan O'Brien",
      "Willie Mullins",
      "Jim Bolger",
      "Dermot Weld"
    ],
    "answer": 0
  },
  {
    "q": "Which Irish trainer is famous for his dominance at the Cheltenham Festival in National Hunt racing?",
    "options": [
      "Willie Mullins",
      "Aidan O'Brien",
      "John Oxx",
      "Jessica Harrington"
    ],
    "answer": 0
  },
  {
    "q": "Where is the famous flat racecourse that hosts the Irish Derby?",
    "options": [
      "The Curragh",
      "Punchestown",
      "Leopardstown",
      "Galway"
    ],
    "answer": 0
  },
  {
    "q": "Which County Kildare venue hosts a famous National Hunt racing festival each spring?",
    "options": [
      "Punchestown",
      "The Curragh",
      "Fairyhouse",
      "Naas"
    ],
    "answer": 0
  },
  {
    "q": "The famous summer racing festival held over several days in the west of Ireland is at which town?",
    "options": [
      "Galway",
      "Listowel",
      "Tramore",
      "Killarney"
    ],
    "answer": 0
  },
  {
    "q": "The Cheltenham Festival, hugely popular with Irish racing fans, is held in which country?",
    "options": [
      "England",
      "Ireland",
      "Scotland",
      "Wales"
    ],
    "answer": 0
  },
  {
    "q": "Which famous jockey rode many winners for Aidan O'Brien and is the trainer's son?",
    "options": [
      "Joseph O'Brien",
      "Ruby Walsh",
      "Pat Smullen",
      "Johnny Murtagh"
    ],
    "answer": 0
  },
  {
    "q": "Which Irish jump jockey was one of the most successful at Cheltenham, riding for Willie Mullins?",
    "options": [
      "Ruby Walsh",
      "Tony McCoy",
      "Barry Geraghty",
      "Davy Russell"
    ],
    "answer": 0
  },
  {
    "q": "Which Northern Irish jockey became the most prolific winner in jump racing history and was knighted?",
    "options": [
      "Tony McCoy",
      "Ruby Walsh",
      "Richard Dunwoody",
      "Charlie Swan"
    ],
    "answer": 0
  },
  {
    "q": "Which Irish horse trained by Dermot Weld won the prestigious Melbourne Cup in 1993?",
    "options": [
      "Vintage Crop",
      "Galileo",
      "Sea The Stars",
      "Montjeu"
    ],
    "answer": 0
  },
  {
    "q": "Which outstanding colt trained by John Oxx won the 2009 Epsom Derby and Arc, named after a celestial theme?",
    "options": [
      "Sea The Stars",
      "Galileo",
      "Montjeu",
      "High Chaparral"
    ],
    "answer": 0
  },
  {
    "q": "Which Irish-bred stallion became one of the most influential sires in the world, based at Coolmore?",
    "options": [
      "Galileo",
      "Arkle",
      "Red Rum",
      "Shergar"
    ],
    "answer": 0
  },
  {
    "q": "Which Irish golfer won three majors including back-to-back Open Championships in 2007 and 2008?",
    "options": [
      "Padraig Harrington",
      "Rory McIlroy",
      "Darren Clarke",
      "Graeme McDowell"
    ],
    "answer": 0
  },
  {
    "q": "Which Northern Irish golfer won the 2010 US Open at Pebble Beach?",
    "options": [
      "Graeme McDowell",
      "Rory McIlroy",
      "Darren Clarke",
      "Padraig Harrington"
    ],
    "answer": 0
  },
  {
    "q": "Which golfer from Northern Ireland won the 2011 US Open by eight shots at Congressional?",
    "options": [
      "Rory McIlroy",
      "Graeme McDowell",
      "Darren Clarke",
      "Padraig Harrington"
    ],
    "answer": 0
  },
  {
    "q": "Which Northern Irish golfer won the 2011 Open Championship at Royal St George's?",
    "options": [
      "Darren Clarke",
      "Rory McIlroy",
      "Graeme McDowell",
      "Padraig Harrington"
    ],
    "answer": 0
  },
  {
    "q": "Which Irish golfer won the 2019 Open Championship at Royal Portrush?",
    "options": [
      "Shane Lowry",
      "Padraig Harrington",
      "Rory McIlroy",
      "Graeme McDowell"
    ],
    "answer": 0
  },
  {
    "q": "The 2019 Open Championship was held at which Northern Irish links course?",
    "options": [
      "Royal Portrush",
      "Royal County Down",
      "Portmarnock",
      "Lahinch"
    ],
    "answer": 0
  },
  {
    "q": "Padraig Harrington won the US PGA Championship in which year, completing his major haul?",
    "options": [
      "2008",
      "2006",
      "2010",
      "2004"
    ],
    "answer": 0
  },
  {
    "q": "Which famous links course in County Down is regularly ranked among the world's best?",
    "options": [
      "Royal County Down",
      "The K Club",
      "Mount Juliet",
      "Carton House"
    ],
    "answer": 0
  },
  {
    "q": "Which County Kildare resort hosted the 2006 Ryder Cup, a European victory?",
    "options": [
      "The K Club",
      "Portmarnock",
      "Lahinch",
      "Ballybunion"
    ],
    "answer": 0
  },
  {
    "q": "Which famous links course is located near Dublin on a peninsula and has hosted the Irish Open?",
    "options": [
      "Portmarnock",
      "Royal Portrush",
      "Lahinch",
      "Tralee"
    ],
    "answer": 0
  },
  {
    "q": "Which Irish runner won Olympic 1500m gold for Ireland at the 1956 Melbourne Games?",
    "options": [
      "Ronnie Delany",
      "Eamonn Coghlan",
      "John Treacy",
      "Noel Carroll"
    ],
    "answer": 0
  },
  {
    "q": "Which Cork-born athlete won Olympic 5000m silver and was a world champion runner?",
    "options": [
      "Sonia O'Sullivan",
      "Catherina McKiernan",
      "Derval O'Rourke",
      "Fionnuala McCormack"
    ],
    "answer": 0
  },
  {
    "q": "At which Olympics did Sonia O'Sullivan win her 5000m silver medal?",
    "options": [
      "Sydney 2000",
      "Atlanta 1996",
      "Barcelona 1992",
      "Athens 2004"
    ],
    "answer": 0
  },
  {
    "q": "Which Irish athlete won the marathon silver medal at the 1984 Los Angeles Olympics?",
    "options": [
      "John Treacy",
      "Ronnie Delany",
      "Eamonn Coghlan",
      "Jerry Kiernan"
    ],
    "answer": 0
  },
  {
    "q": "Which Irish runner became known as the 'Chairman of the Boards' for his indoor mile records and won a 1983 World 5000m title?",
    "options": [
      "Eamonn Coghlan",
      "Ronnie Delany",
      "Marcus O'Sullivan",
      "Frank O'Mara"
    ],
    "answer": 0
  },
  {
    "q": "Which Irishman became world champion in snooker by winning the 1997 World Championship?",
    "options": [
      "Ken Doherty",
      "Alex Higgins",
      "Dennis Taylor",
      "Fergal O'Brien"
    ],
    "answer": 0
  },
  {
    "q": "Which flamboyant Belfast snooker player nicknamed 'Hurricane' won the World Championship in 1972 and 1982?",
    "options": [
      "Alex Higgins",
      "Ken Doherty",
      "Dennis Taylor",
      "Joe Swail"
    ],
    "answer": 0
  },
  {
    "q": "Which Northern Irish player famously won the 1985 World Snooker Championship on the final black, known for his upturned glasses?",
    "options": [
      "Dennis Taylor",
      "Alex Higgins",
      "Ken Doherty",
      "Steve Davis"
    ],
    "answer": 0
  },
  {
    "q": "Which Irish cyclist won the Tour de France, Giro d'Italia and World Championship all in 1987?",
    "options": [
      "Stephen Roche",
      "Sean Kelly",
      "Nicolas Roche",
      "Martin Earley"
    ],
    "answer": 0
  },
  {
    "q": "Which Irish cyclist from Carrick-on-Suir was one of the greatest one-day racers and won Paris-Roubaix and Milan-San Remo?",
    "options": [
      "Sean Kelly",
      "Stephen Roche",
      "Dan Martin",
      "Philip Deignan"
    ],
    "answer": 0
  },
  {
    "q": "Sean Kelly won which Grand Tour, the Vuelta a Espana, in 1988?",
    "options": [
      "The Vuelta a Espana",
      "The Tour de France",
      "The Giro d'Italia",
      "The Tour of Britain"
    ],
    "answer": 0
  },
  {
    "q": "Stephen Roche's 1987 achievement of three major titles in one year is often compared to which cyclist who did the same?",
    "options": [
      "Eddy Merckx",
      "Bernard Hinault",
      "Greg LeMond",
      "Miguel Indurain"
    ],
    "answer": 0
  },
  {
    "q": "Which Irish rower brothers from Skibbereen won Olympic silver in the lightweight double sculls at Rio 2016?",
    "options": [
      "The O'Donovan brothers",
      "The Lynch brothers",
      "The Doyle brothers",
      "The Walsh brothers"
    ],
    "answer": 0
  },
  {
    "q": "At which 2021 Olympics did Paul O'Donovan and Fintan McCarthy win rowing gold for Ireland?",
    "options": [
      "Tokyo",
      "Rio",
      "London",
      "Paris"
    ],
    "answer": 0
  },
  {
    "q": "Which sport did the O'Donovan brothers from Skibbereen famously compete in?",
    "options": [
      "Rowing",
      "Sailing",
      "Boxing",
      "Cycling"
    ],
    "answer": 0
  },
  {
    "q": "Which Irish sailor won an Olympic silver medal in the Laser Radial class at Rio 2016?",
    "options": [
      "Annalise Murphy",
      "Saskia Tidey",
      "Aisling Keller",
      "Ciara Peelo"
    ],
    "answer": 0
  },
  {
    "q": "Which province is represented by Connacht Rugby?",
    "options": [
      "The western province",
      "The southern province",
      "The eastern province",
      "The northern province"
    ],
    "answer": 0
  },
  {
    "q": "What is the name of Connacht Rugby's home ground in Galway?",
    "options": [
      "The Sportsground",
      "Thomond Park",
      "Ravenhill",
      "The RDS"
    ],
    "answer": 0
  },
  {
    "q": "Which trophy do Ireland and England contest within the Six Nations?",
    "options": [
      "The Millennium Trophy",
      "The Calcutta Cup",
      "The Triple Crown only",
      "The Lansdowne Cup"
    ],
    "answer": 0
  },
  {
    "q": "A team winning all matches against England, Scotland and Wales in the Six Nations earns which prize?",
    "options": [
      "The Triple Crown",
      "The Grand Slam",
      "The Calcutta Cup",
      "The Wooden Spoon"
    ],
    "answer": 0
  },
  {
    "q": "Winning every match in the Six Nations is known as achieving what?",
    "options": [
      "The Grand Slam",
      "The Triple Crown",
      "A clean sheet",
      "The Championship only"
    ],
    "answer": 0
  },
  {
    "q": "Which Irish centre partnered Brian O'Driscoll in midfield and won a Grand Slam in 2009?",
    "options": [
      "Gordon D'Arcy",
      "Luke Fitzgerald",
      "Keith Earls",
      "Andrew Trimble"
    ],
    "answer": 0
  },
  {
    "q": "Which Irish prop nicknamed 'The Bull' anchored the Munster and Ireland scrum for years?",
    "options": [
      "John Hayes",
      "Cian Healy",
      "Marcus Horan",
      "Tony Buckley"
    ],
    "answer": 0
  },
  {
    "q": "Which Irish number 8 captained Leinster and Ireland and won three Heineken Cups?",
    "options": [
      "Jamie Heaslip",
      "Sean O'Brien",
      "Denis Leamy",
      "Kevin McLaughlin"
    ],
    "answer": 0
  },
  {
    "q": "Which striker scored Ireland's winner against Italy at Euro 2016 to send them through?",
    "options": [
      "Robbie Brady",
      "Wes Hoolahan",
      "Shane Long",
      "Jon Walters"
    ],
    "answer": 0
  },
  {
    "q": "Shane Long scored a remarkably fast goal for the Republic of Ireland in 2019 against which country?",
    "options": [
      "Gibraltar",
      "Denmark",
      "Wales",
      "Georgia"
    ],
    "answer": 0
  },
  {
    "q": "Which Irish forward played for Liverpool and Manchester United and won 1990 World Cup caps as a striker?",
    "options": [
      "John Aldridge",
      "Tony Cascarino",
      "Frank Stapleton",
      "David Kelly"
    ],
    "answer": 0
  },
  {
    "q": "Which Irish defender captained Arsenal and Ireland and played at the 1990 World Cup?",
    "options": [
      "David O'Leary",
      "Kevin Moran",
      "Paul McGrath",
      "Mick McCarthy"
    ],
    "answer": 0
  },
  {
    "q": "Which Irish defender, much loved and nicknamed 'God' by Aston Villa fans, was a 1990 and 1994 World Cup star?",
    "options": [
      "Paul McGrath",
      "Kevin Moran",
      "David O'Leary",
      "Steve Staunton"
    ],
    "answer": 0
  },
  {
    "q": "Which Irish full-back holds a record for outfield appearances and later managed the national team?",
    "options": [
      "Steve Staunton",
      "Denis Irwin",
      "Phil Babb",
      "Terry Phelan"
    ],
    "answer": 0
  },
  {
    "q": "Which Irish defender had a long, decorated career with Manchester United as a reliable full-back?",
    "options": [
      "Denis Irwin",
      "Paul McGrath",
      "Steve Staunton",
      "Gary Kelly"
    ],
    "answer": 0
  },
  {
    "q": "Which boxing world title did Carl Frampton win to become a two-weight world champion?",
    "options": [
      "Featherweight",
      "Lightweight",
      "Welterweight",
      "Middleweight"
    ],
    "answer": 0
  },
  {
    "q": "Which Irish horse named after a famous artist won the 2002 Epsom Derby for Aidan O'Brien?",
    "options": [
      "High Chaparral",
      "Galileo",
      "Montjeu",
      "Camelot"
    ],
    "answer": 0
  },
  {
    "q": "Which Irish-trained colt won the 2012 Epsom Derby and 2000 Guineas for Aidan O'Brien?",
    "options": [
      "Camelot",
      "Galileo",
      "Sea The Stars",
      "Australia"
    ],
    "answer": 0
  },
  {
    "q": "Which famous Aidan O'Brien horse won the 2001 Epsom Derby and became a top sire?",
    "options": [
      "Galileo",
      "Montjeu",
      "High Chaparral",
      "Giant's Causeway"
    ],
    "answer": 0
  },
  {
    "q": "Which Tipperary-born flat jockey was a multiple Irish champion before his death in 2020?",
    "options": [
      "Pat Smullen",
      "Johnny Murtagh",
      "Mick Kinane",
      "Kieren Fallon"
    ],
    "answer": 0
  },
  {
    "q": "Which Irish flat jockey won Epsom Derbies and rode Sea The Stars to many of his wins?",
    "options": [
      "Mick Kinane",
      "Pat Smullen",
      "Johnny Murtagh",
      "Joseph O'Brien"
    ],
    "answer": 0
  },
  {
    "q": "Which Irish golfer was the first European to win the Open Championship in many years when he triumphed in 2007?",
    "options": [
      "Padraig Harrington",
      "Darren Clarke",
      "Graeme McDowell",
      "Paul McGinley"
    ],
    "answer": 0
  },
  {
    "q": "Which Irish golfer holed the winning putt for Europe at the 2002 Ryder Cup at The Belfry?",
    "options": [
      "Paul McGinley",
      "Padraig Harrington",
      "Darren Clarke",
      "Des Smyth"
    ],
    "answer": 0
  },
  {
    "q": "Which course in County Antrim hosted the Open before 2019, last staging it in 1951?",
    "options": [
      "Royal Portrush",
      "Royal County Down",
      "Portmarnock",
      "Lahinch"
    ],
    "answer": 0
  },
  {
    "q": "Which Irish golfer captained the victorious 2014 European Ryder Cup team at Gleneagles?",
    "options": [
      "Paul McGinley",
      "Padraig Harrington",
      "Darren Clarke",
      "Des Smyth"
    ],
    "answer": 0
  },
  {
    "q": "Which Irish golfer captained Europe at the 2016 Ryder Cup at Hazeltine?",
    "options": [
      "Darren Clarke",
      "Paul McGinley",
      "Padraig Harrington",
      "Graeme McDowell"
    ],
    "answer": 0
  },
  {
    "q": "Which legendary Irish horse won the Cheltenham Gold Cup three times in the 1960s?",
    "options": [
      "Arkle",
      "Dawn Run",
      "Best Mate",
      "Desert Orchid"
    ],
    "answer": 0
  },
  {
    "q": "Which mare trained in Ireland famously won both the Champion Hurdle and the Cheltenham Gold Cup?",
    "options": [
      "Dawn Run",
      "Arkle",
      "Istabraq",
      "Quevega"
    ],
    "answer": 0
  },
  {
    "q": "Which great Irish hurdler trained by Aidan O'Brien won the Champion Hurdle three times in the late 1990s?",
    "options": [
      "Istabraq",
      "Dawn Run",
      "Hardy Eustace",
      "Hurricane Fly"
    ],
    "answer": 0
  },
  {
    "q": "Ireland's rugby team shares its players from all four provinces across which political divide?",
    "options": [
      "The whole island, North and South",
      "Republic only",
      "Northern Ireland only",
      "Leinster only"
    ],
    "answer": 0
  },
  {
    "q": "Which Republic of Ireland manager was in charge for the Euro 88 campaign, the country's first major finals?",
    "options": [
      "Jack Charlton",
      "Eoin Hand",
      "Mick McCarthy",
      "Johnny Giles"
    ],
    "answer": 0
  },
  {
    "q": "Which legendary Irish midfielder played for Leeds and Ireland and later managed the team in the 1980s?",
    "options": [
      "Johnny Giles",
      "Liam Brady",
      "Frank Stapleton",
      "David O'Leary"
    ],
    "answer": 0
  },
  {
    "q": "Which gifted Irish midfielder starred for Arsenal and Juventus and was nicknamed 'Chippy'?",
    "options": [
      "Liam Brady",
      "Johnny Giles",
      "Ronnie Whelan",
      "Ray Houghton"
    ],
    "answer": 0
  },
  {
    "q": "Which Irish midfielder scored a memorable goal for Liverpool in the 1989 FA Cup final and played at the 1990 World Cup?",
    "options": [
      "Ronnie Whelan",
      "John Aldridge",
      "Steve Staunton",
      "Ray Houghton"
    ],
    "answer": 0
  },
  {
    "q": "Which sport is the Galway Races primarily associated with?",
    "options": [
      "Horse racing",
      "Greyhound racing",
      "Rowing",
      "Sailing"
    ],
    "answer": 0
  },
  {
    "q": "Which Irish boxer turned a hugely successful amateur career into MMA fame, fighting in the UFC from Dublin?",
    "options": [
      "Conor McGregor",
      "Joseph Duffy",
      "Cathal Pendred",
      "Paddy Holohan"
    ],
    "answer": 0
  },
  {
    "q": "In which sport did Conor McGregor become a two-division UFC champion?",
    "options": [
      "Mixed martial arts",
      "Boxing",
      "Wrestling",
      "Kickboxing"
    ],
    "answer": 0
  },
  {
    "q": "Which Irish woman won an Olympic gold medal in swimming controversy aside at the 1996 Atlanta Games?",
    "options": [
      "Michelle Smith",
      "Sonia O'Sullivan",
      "Annalise Murphy",
      "Derval O'Rourke"
    ],
    "answer": 0
  },
  {
    "q": "Which Irish hurdler won a World Indoor 60m hurdles title in 2006?",
    "options": [
      "Derval O'Rourke",
      "Sonia O'Sullivan",
      "Catherina McKiernan",
      "Ailis McSweeney"
    ],
    "answer": 0
  },
  {
    "q": "Which Irish athlete won the World Cross Country title and several big city marathons in the 1990s?",
    "options": [
      "Catherina McKiernan",
      "Sonia O'Sullivan",
      "Derval O'Rourke",
      "Fionnuala McCormack"
    ],
    "answer": 0
  },
  {
    "q": "Which boxing club city produced many of Ireland's recent Olympic boxers, including the National Stadium?",
    "options": [
      "Dublin",
      "Cork",
      "Galway",
      "Limerick"
    ],
    "answer": 0
  },
  {
    "q": "Which Irish boxer won a bronze medal at the 2008 Olympics and tragically died soon afterwards?",
    "options": [
      "Darren Sutherland",
      "Kenneth Egan",
      "Paddy Barnes",
      "John Joe Joyce"
    ],
    "answer": 0
  },
  {
    "q": "Which Mullingar boxer won an Olympic silver medal in the bantamweight class at London 2012?",
    "options": [
      "John Joe Nevin",
      "Paddy Barnes",
      "Michael Conlan",
      "Joe Ward"
    ],
    "answer": 0
  },
  {
    "q": "Which competition is the pinnacle of European club rugby, won several times by Leinster and Munster?",
    "options": [
      "The Champions Cup",
      "The Premiership",
      "The Top 14",
      "The Currie Cup"
    ],
    "answer": 0
  },
  {
    "q": "What colour jersey does the Irish national rugby team wear?",
    "options": [
      "Green",
      "Blue",
      "Red",
      "White"
    ],
    "answer": 0
  },
  {
    "q": "What is the traditional home jersey colour of the Republic of Ireland soccer team?",
    "options": [
      "Green",
      "Blue",
      "Red",
      "Orange"
    ],
    "answer": 0
  },
  {
    "q": "Which sport did Stephen Roche and Sean Kelly compete in to international acclaim?",
    "options": [
      "Cycling",
      "Athletics",
      "Rowing",
      "Motor racing"
    ],
    "answer": 0
  },
  {
    "q": "Which legendary Northern Irish motorcyclist was a multiple winner at the Isle of Man TT and North West 200?",
    "options": [
      "Joey Dunlop",
      "Eddie Irvine",
      "John Watson",
      "Robert Dunlop"
    ],
    "answer": 0
  },
  {
    "q": "Which Northern Irish driver finished as Formula One World Championship runner-up in 1999?",
    "options": [
      "Eddie Irvine",
      "John Watson",
      "Damon Hill",
      "Martin Donnelly"
    ],
    "answer": 0
  },
  {
    "q": "Ireland's first Olympic gold in boxing came in which weight division for Michael Carruth?",
    "options": [
      "Welterweight",
      "Heavyweight",
      "Flyweight",
      "Lightweight"
    ],
    "answer": 0
  },
  {
    "q": "Which famous Munster and Ireland captain lifted the Heineken Cup in 2006 and 2008?",
    "options": [
      "Paul O'Connell",
      "Ronan O'Gara",
      "Anthony Foley",
      "David Wallace"
    ],
    "answer": 0
  },
  {
    "q": "Which beloved Munster captain, who later coached the team, is remembered with the number 8 jersey?",
    "options": [
      "Anthony Foley",
      "Paul O'Connell",
      "Mick Galwey",
      "Alan Quinlan"
    ],
    "answer": 0
  },
  {
    "q": "Which Irish golfer is from Holywood, County Down, and has won multiple majors?",
    "options": [
      "Rory McIlroy",
      "Graeme McDowell",
      "Darren Clarke",
      "Padraig Harrington"
    ],
    "answer": 0
  },
  {
    "q": "Which surface is most associated with the Irish Derby and the Curragh?",
    "options": [
      "Flat turf racing",
      "Jumps racing",
      "All-weather",
      "Sand"
    ],
    "answer": 0
  },
  {
    "q": "Which world-famous links in County Clare hosted the Irish Open and is known for its dunes?",
    "options": [
      "Lahinch",
      "Royal Portrush",
      "Portmarnock",
      "The K Club"
    ],
    "answer": 0
  },
  {
    "q": "Which Irish athlete won the country's first track Olympic medal of the modern era in the 1500m in 1956?",
    "options": [
      "Ronnie Delany",
      "John Treacy",
      "Eamonn Coghlan",
      "Bob Tisdall"
    ],
    "answer": 0
  },
  {
    "q": "Which Irish band released the album The Joshua Tree?",
    "options": [
      "U2",
      "Thin Lizzy",
      "The Cranberries",
      "The Script"
    ],
    "answer": 0
  },
  {
    "q": "Who is the lead singer of U2?",
    "options": [
      "The Edge",
      "Adam Clayton",
      "Bono",
      "Larry Mullen Jr"
    ],
    "answer": 2
  },
  {
    "q": "What is the stage name of U2 guitarist David Howell Evans?",
    "options": [
      "Slash",
      "The Edge",
      "Bono",
      "Sting"
    ],
    "answer": 1
  },
  {
    "q": "Which Dublin band was fronted by Phil Lynott?",
    "options": [
      "U2",
      "The Pogues",
      "Horslips",
      "Thin Lizzy"
    ],
    "answer": 3
  },
  {
    "q": "Which Thin Lizzy song features the line 'the boys are back in town'?",
    "options": [
      "Whiskey in the Jar",
      "Jailbreak",
      "The Boys Are Back in Town",
      "Dancing in the Moonlight"
    ],
    "answer": 2
  },
  {
    "q": "Who was the lead singer of The Cranberries?",
    "options": [
      "Dolores O'Riordan",
      "Sinéad O'Connor",
      "Enya",
      "Andrea Corr"
    ],
    "answer": 0
  },
  {
    "q": "Which Cranberries song repeats the word 'zombie' in its chorus?",
    "options": [
      "Linger",
      "Dreams",
      "Ode to My Family",
      "Zombie"
    ],
    "answer": 3
  },
  {
    "q": "Which Irish singer had a worldwide hit with Nothing Compares 2 U?",
    "options": [
      "Dolores O'Riordan",
      "Sinéad O'Connor",
      "Enya",
      "Mary Black"
    ],
    "answer": 1
  },
  {
    "q": "Who wrote the song Nothing Compares 2 U, made famous by Sinéad O'Connor?",
    "options": [
      "Bob Dylan",
      "Prince",
      "Van Morrison",
      "Phil Lynott"
    ],
    "answer": 1
  },
  {
    "q": "Which Belfast-born singer recorded the album Astral Weeks?",
    "options": [
      "Rory Gallagher",
      "Bono",
      "Phil Lynott",
      "Van Morrison"
    ],
    "answer": 3
  },
  {
    "q": "Van Morrison was a member of which 1960s beat group?",
    "options": [
      "Them",
      "The Pogues",
      "Horslips",
      "The Undertones"
    ],
    "answer": 0
  },
  {
    "q": "Which Van Morrison song is about a 'brown eyed girl'?",
    "options": [
      "Moondance",
      "Gloria",
      "Brown Eyed Girl",
      "Domino"
    ],
    "answer": 2
  },
  {
    "q": "Which Irish blues guitarist played a famously battered Fender Stratocaster?",
    "options": [
      "The Edge",
      "Gary Moore",
      "Phil Lynott",
      "Rory Gallagher"
    ],
    "answer": 3
  },
  {
    "q": "Which city was blues guitarist Rory Gallagher most associated with growing up?",
    "options": [
      "Dublin",
      "Cork",
      "Galway",
      "Belfast"
    ],
    "answer": 1
  },
  {
    "q": "Which folk-punk band was fronted by Shane MacGowan?",
    "options": [
      "The Dubliners",
      "The Wolfe Tones",
      "The Pogues",
      "Planxty"
    ],
    "answer": 2
  },
  {
    "q": "The Pogues and Kirsty MacColl had a Christmas hit with which song?",
    "options": [
      "Fairytale of New York",
      "Dirty Old Town",
      "A Pair of Brown Eyes",
      "Sally MacLennane"
    ],
    "answer": 0
  },
  {
    "q": "Who is the singer behind Hozier, known for the song Take Me to Church?",
    "options": [
      "Andrew Hozier-Byrne",
      "Niall Horan",
      "Danny O'Donoghue",
      "Glen Hansard"
    ],
    "answer": 0
  },
  {
    "q": "From which county does the singer Hozier come?",
    "options": [
      "Cork",
      "Kerry",
      "Wicklow",
      "Mayo"
    ],
    "answer": 2
  },
  {
    "q": "Which Irish singer composed the ethereal hit Orinoco Flow (Sail Away)?",
    "options": [
      "Sinéad O'Connor",
      "Enya",
      "Dolores O'Riordan",
      "Mary Black"
    ],
    "answer": 1
  },
  {
    "q": "Enya was originally a member of which Donegal family band?",
    "options": [
      "The Corrs",
      "Altan",
      "Planxty",
      "Clannad"
    ],
    "answer": 3
  },
  {
    "q": "The band Clannad is most associated with which Irish county?",
    "options": [
      "Cork",
      "Dublin",
      "Donegal",
      "Galway"
    ],
    "answer": 2
  },
  {
    "q": "How many siblings make up the family band The Corrs?",
    "options": [
      "Four",
      "Two",
      "Three",
      "Five"
    ],
    "answer": 0
  },
  {
    "q": "Which of these is NOT one of the Corr siblings?",
    "options": [
      "Andrea",
      "Sharon",
      "Caroline",
      "Dolores"
    ],
    "answer": 3
  },
  {
    "q": "Which Irish boy band had hits including Flying Without Wings and Swear It Again?",
    "options": [
      "Boyzone",
      "Westlife",
      "The Script",
      "Kodaline"
    ],
    "answer": 1
  },
  {
    "q": "Which Irish boy band was fronted by Ronan Keating?",
    "options": [
      "Westlife",
      "Boyzone",
      "The Coronas",
      "The Script"
    ],
    "answer": 1
  },
  {
    "q": "Which town is the boy band Westlife from?",
    "options": [
      "Cork",
      "Galway",
      "Limerick",
      "Sligo"
    ],
    "answer": 3
  },
  {
    "q": "Who is the lead singer of The Script?",
    "options": [
      "Danny O'Donoghue",
      "Ronan Keating",
      "Niall Horan",
      "Hozier"
    ],
    "answer": 0
  },
  {
    "q": "Which Irish member of One Direction comes from Mullingar?",
    "options": [
      "Harry Styles",
      "Liam Payne",
      "Niall Horan",
      "Zayn Malik"
    ],
    "answer": 2
  },
  {
    "q": "Which folk singer is famous for songs like Ride On and Ordinary Man?",
    "options": [
      "Luke Kelly",
      "Liam Clancy",
      "Paul Brady",
      "Christy Moore"
    ],
    "answer": 3
  },
  {
    "q": "Christy Moore was a founding member of which influential trad band?",
    "options": [
      "The Chieftains",
      "Planxty",
      "The Dubliners",
      "Altan"
    ],
    "answer": 1
  },
  {
    "q": "Which Dubliners member had a gravelly voice and sang Seven Drunken Nights?",
    "options": [
      "Luke Kelly",
      "Barney McKenna",
      "Ronnie Drew",
      "John Sheahan"
    ],
    "answer": 2
  },
  {
    "q": "Which traditional Irish group was led for decades by Paddy Moloney?",
    "options": [
      "The Chieftains",
      "The Dubliners",
      "Planxty",
      "The Bothy Band"
    ],
    "answer": 0
  },
  {
    "q": "What instrument is Paddy Moloney of The Chieftains best known for playing?",
    "options": [
      "Uilleann pipes",
      "Fiddle",
      "Tin whistle",
      "Banjo"
    ],
    "answer": 0
  },
  {
    "q": "Which Irish ballad group is known for the song Come Out Ye Black and Tans?",
    "options": [
      "The Chieftains",
      "Planxty",
      "The Wolfe Tones",
      "Altan"
    ],
    "answer": 2
  },
  {
    "q": "Which Irish bagpipes are inflated by a bellows under the arm rather than the mouth?",
    "options": [
      "Highland pipes",
      "Uilleann pipes",
      "Northumbrian pipes",
      "Gaita"
    ],
    "answer": 1
  },
  {
    "q": "A 'reel' in Irish traditional music is typically in which time signature?",
    "options": [
      "6/8",
      "3/4",
      "9/8",
      "4/4"
    ],
    "answer": 3
  },
  {
    "q": "A 'jig' in Irish traditional music is most commonly in which time signature?",
    "options": [
      "4/4",
      "2/4",
      "6/8",
      "3/4"
    ],
    "answer": 2
  },
  {
    "q": "What is the name of a competitive Irish traditional music festival?",
    "options": [
      "Fleadh Cheoil",
      "Oireachtas",
      "Feis Ceoil",
      "Mod"
    ],
    "answer": 0
  },
  {
    "q": "An informal gathering of musicians playing trad tunes in a pub is called a what?",
    "options": [
      "Recital",
      "Symphony",
      "Concerto",
      "Session"
    ],
    "answer": 3
  },
  {
    "q": "Which Irish singer won the Eurovision Song Contest twice as a performer?",
    "options": [
      "Dana",
      "Johnny Logan",
      "Niamh Kavanagh",
      "Eimear Quinn"
    ],
    "answer": 1
  },
  {
    "q": "With which song did Johnny Logan win Eurovision in 1980?",
    "options": [
      "Hold Me Now",
      "What's Another Year",
      "All Kinds of Everything",
      "Why Me"
    ],
    "answer": 1
  },
  {
    "q": "Which song did Johnny Logan win Eurovision with in 1987?",
    "options": [
      "What's Another Year",
      "Rock 'n' Roll Kids",
      "The Voice",
      "Hold Me Now"
    ],
    "answer": 3
  },
  {
    "q": "Which singer gave Ireland its first Eurovision win in 1970 with All Kinds of Everything?",
    "options": [
      "Dana",
      "Sandie Shaw",
      "Linda Martin",
      "Niamh Kavanagh"
    ],
    "answer": 0
  },
  {
    "q": "Which duo, Paul Harrington and Charlie McGettigan, won Eurovision in 1994?",
    "options": [
      "The Voice",
      "Why Me",
      "Rock 'n' Roll Kids",
      "In Your Eyes"
    ],
    "answer": 2
  },
  {
    "q": "Eimear Quinn won Eurovision for Ireland in 1996 with which song?",
    "options": [
      "Rock 'n' Roll Kids",
      "In Your Eyes",
      "Why Me",
      "The Voice"
    ],
    "answer": 3
  },
  {
    "q": "Which trad fiddle and accordion band hails from Donegal and features Mairéad Ní Mhaonaigh?",
    "options": [
      "The Chieftains",
      "Altan",
      "Planxty",
      "Dervish"
    ],
    "answer": 1
  },
  {
    "q": "Which 1987 U2 album contains the song With or Without You?",
    "options": [
      "Achtung Baby",
      "War",
      "The Joshua Tree",
      "The Unforgettable Fire"
    ],
    "answer": 2
  },
  {
    "q": "Which U2 song shares its name with a 1972 Derry tragedy and the day of the week?",
    "options": [
      "Sunday Bloody Sunday",
      "One",
      "Pride",
      "Desire"
    ],
    "answer": 0
  },
  {
    "q": "Which 1991 U2 album marked a shift to a more electronic sound and includes One?",
    "options": [
      "Achtung Baby",
      "The Joshua Tree",
      "Rattle and Hum",
      "Boy"
    ],
    "answer": 0
  },
  {
    "q": "Who is the drummer of U2?",
    "options": [
      "Adam Clayton",
      "The Edge",
      "Larry Mullen Jr",
      "Bono"
    ],
    "answer": 2
  },
  {
    "q": "Who is the bassist of U2?",
    "options": [
      "Larry Mullen Jr",
      "Adam Clayton",
      "The Edge",
      "Bono"
    ],
    "answer": 1
  },
  {
    "q": "The U2 song Pride (In the Name of Love) honours which historical figure?",
    "options": [
      "Nelson Mandela",
      "John F Kennedy",
      "Bobby Sands",
      "Martin Luther King Jr"
    ],
    "answer": 3
  },
  {
    "q": "Which 1990 Sinéad O'Connor album features Nothing Compares 2 U?",
    "options": [
      "The Lion and the Cobra",
      "Universal Mother",
      "I Do Not Want What I Haven't Got",
      "Faith and Courage"
    ],
    "answer": 2
  },
  {
    "q": "Which Irish band recorded the song Linger?",
    "options": [
      "The Cranberries",
      "The Corrs",
      "Westlife",
      "The Script"
    ],
    "answer": 0
  },
  {
    "q": "Which song about a betrayed highwayman was covered by Thin Lizzy and Metallica?",
    "options": [
      "The Wild Rover",
      "Black Velvet Band",
      "The Irish Rover",
      "Whiskey in the Jar"
    ],
    "answer": 3
  },
  {
    "q": "Which folk standard has the chorus line 'And it's no, nay, never'?",
    "options": [
      "Whiskey in the Jar",
      "The Wild Rover",
      "Molly Malone",
      "Dirty Old Town"
    ],
    "answer": 1
  },
  {
    "q": "The song Molly Malone is set in which Irish city?",
    "options": [
      "Cork",
      "Dublin",
      "Galway",
      "Limerick"
    ],
    "answer": 1
  },
  {
    "q": "What does Molly Malone sell in the song, crying 'cockles and mussels'?",
    "options": [
      "Fish and chips",
      "Apples and pears",
      "Bread and milk",
      "Cockles and mussels"
    ],
    "answer": 3
  },
  {
    "q": "Which guitarist who played with Thin Lizzy recorded the hit Parisienne Walkways?",
    "options": [
      "Gary Moore",
      "Rory Gallagher",
      "The Edge",
      "Phil Lynott"
    ],
    "answer": 0
  },
  {
    "q": "Which band performs the best-known version of The Auld Triangle, written by Brendan Behan?",
    "options": [
      "Westlife",
      "Clannad",
      "The Dubliners",
      "The Corrs"
    ],
    "answer": 2
  },
  {
    "q": "Which famous Irish writer wrote the song The Auld Triangle?",
    "options": [
      "James Joyce",
      "Patrick Kavanagh",
      "Sean O'Casey",
      "Brendan Behan"
    ],
    "answer": 3
  },
  {
    "q": "Raglan Road, sung by Luke Kelly, is based on a poem by which Irish poet?",
    "options": [
      "W.B. Yeats",
      "Patrick Kavanagh",
      "Seamus Heaney",
      "Brendan Behan"
    ],
    "answer": 1
  },
  {
    "q": "Which song by The Saw Doctors is named after a road in the west of Ireland?",
    "options": [
      "Whiskey in the Jar",
      "Dirty Old Town",
      "N17",
      "The Auld Triangle"
    ],
    "answer": 2
  },
  {
    "q": "Which county are The Saw Doctors from?",
    "options": [
      "Galway",
      "Cork",
      "Dublin",
      "Kerry"
    ],
    "answer": 0
  },
  {
    "q": "Which Derry punk band recorded Teenage Kicks?",
    "options": [
      "The Undertones",
      "Stiff Little Fingers",
      "The Pogues",
      "Them"
    ],
    "answer": 0
  },
  {
    "q": "Which Belfast punk band recorded Alternative Ulster?",
    "options": [
      "The Undertones",
      "Them",
      "Stiff Little Fingers",
      "The Pogues"
    ],
    "answer": 2
  },
  {
    "q": "Dirty Old Town, often sung by Irish folk acts, was written about which English town?",
    "options": [
      "Manchester",
      "Salford",
      "Liverpool",
      "Birmingham"
    ],
    "answer": 1
  },
  {
    "q": "Which Corrs album, released in 1997, includes the song So Young?",
    "options": [
      "Forgiven, Not Forgotten",
      "In Blue",
      "Borrowed Heaven",
      "Talk on Corners"
    ],
    "answer": 3
  },
  {
    "q": "Which instrument is Sharon Corr of The Corrs best known for playing?",
    "options": [
      "Tin whistle",
      "Bodhrán",
      "Violin",
      "Piano"
    ],
    "answer": 2
  },
  {
    "q": "Which instrument is Caroline Corr of The Corrs best known for playing?",
    "options": [
      "Drums",
      "Violin",
      "Guitar",
      "Cello"
    ],
    "answer": 0
  },
  {
    "q": "Which member of The Corrs is the lead vocalist?",
    "options": [
      "Sharon",
      "Caroline",
      "Jim",
      "Andrea"
    ],
    "answer": 3
  },
  {
    "q": "Which Irish trad-rock band fused Celtic music with rock and released The Tain in 1973?",
    "options": [
      "Thin Lizzy",
      "Horslips",
      "Planxty",
      "The Pogues"
    ],
    "answer": 1
  },
  {
    "q": "Who composed the music for Riverdance?",
    "options": [
      "Phil Coulter",
      "Bill Whelan",
      "Michael Flatley",
      "Shaun Davey"
    ],
    "answer": 1
  },
  {
    "q": "Who was the original male lead of Riverdance and later created Lord of the Dance?",
    "options": [
      "Jean Butler",
      "Colin Dunne",
      "Colin Farrell",
      "Michael Flatley"
    ],
    "answer": 3
  },
  {
    "q": "Which lullaby by Phil Coulter about his son became a Luke Kelly classic?",
    "options": [
      "Scorn Not His Simplicity",
      "The Town I Loved So Well",
      "Steal Away",
      "Home from the Sea"
    ],
    "answer": 0
  },
  {
    "q": "The Town I Loved So Well, written by Phil Coulter, is about which city?",
    "options": [
      "Belfast",
      "Dublin",
      "Derry",
      "Cork"
    ],
    "answer": 2
  },
  {
    "q": "Which Irish singer is the lead vocalist of Clannad and a sister of Enya?",
    "options": [
      "Mary Black",
      "Dolores Keane",
      "Frances Black",
      "Moya Brennan"
    ],
    "answer": 3
  },
  {
    "q": "Which 1970s trad supergroup included Donal Lunny, Andy Irvine, and Christy Moore?",
    "options": [
      "The Bothy Band",
      "Planxty",
      "Altan",
      "Dervish"
    ],
    "answer": 1
  },
  {
    "q": "Which multi-instrumentalist and producer co-founded both Planxty and Moving Hearts?",
    "options": [
      "Paddy Moloney",
      "Christy Moore",
      "Donal Lunny",
      "Andy Irvine"
    ],
    "answer": 2
  },
  {
    "q": "Which jazz-rock-trad fusion band did Christy Moore and Donal Lunny found in 1981?",
    "options": [
      "Moving Hearts",
      "Planxty",
      "The Bothy Band",
      "Horslips"
    ],
    "answer": 0
  },
  {
    "q": "Which ballad singer was singled out by Bob Dylan as one of his favourites?",
    "options": [
      "Liam Clancy",
      "Ronan Keating",
      "Danny O'Donoghue",
      "Bono"
    ],
    "answer": 0
  },
  {
    "q": "Which phenomenon saw bands play covers at dance halls all over 1960s Ireland?",
    "options": [
      "Sessions",
      "Fleadhs",
      "Showbands",
      "Feiseanna"
    ],
    "answer": 2
  },
  {
    "q": "Which Irishman organised Live Aid in 1985 and led The Boomtown Rats?",
    "options": [
      "Bono",
      "Bob Geldof",
      "Phil Lynott",
      "Paul Brady"
    ],
    "answer": 1
  },
  {
    "q": "Which Boomtown Rats song reached number one in the UK in 1979?",
    "options": [
      "Rat Trap",
      "Banana Republic",
      "She's So Modern",
      "I Don't Like Mondays"
    ],
    "answer": 3
  },
  {
    "q": "Which Limerick group brought Irish-language hip-hop to wide attention in the 2020s?",
    "options": [
      "Versatile",
      "Rejjie Snow",
      "Kneecap",
      "Hozier"
    ],
    "answer": 2
  },
  {
    "q": "Kneecap perform predominantly in which language?",
    "options": [
      "Irish",
      "English",
      "Ulster Scots",
      "French"
    ],
    "answer": 0
  },
  {
    "q": "Which Irish singer-songwriter recorded the album O and the song The Blower's Daughter?",
    "options": [
      "Glen Hansard",
      "Paddy Casey",
      "Mick Flannery",
      "Damien Rice"
    ],
    "answer": 3
  },
  {
    "q": "Which Irish musician starred in the film Once and won an Oscar for Falling Slowly?",
    "options": [
      "Damien Rice",
      "Glen Hansard",
      "Hozier",
      "Paddy Casey"
    ],
    "answer": 1
  },
  {
    "q": "Glen Hansard fronted which Dublin band before his Once fame?",
    "options": [
      "The Coronas",
      "The Frames",
      "Bell X1",
      "The Thrills"
    ],
    "answer": 1
  },
  {
    "q": "Which mid-1970s trad supergroup included Matt Molloy and Triona Ní Dhomhnaill?",
    "options": [
      "Planxty",
      "Altan",
      "Dervish",
      "The Bothy Band"
    ],
    "answer": 3
  },
  {
    "q": "Which county is famous for the fiddle style of Michael Coleman?",
    "options": [
      "Sligo",
      "Clare",
      "Donegal",
      "Kerry"
    ],
    "answer": 0
  },
  {
    "q": "Willie Clancy, honoured by a famous summer school, was a master of which instrument?",
    "options": [
      "Fiddle",
      "Concertina",
      "Uilleann pipes",
      "Tin whistle"
    ],
    "answer": 2
  },
  {
    "q": "Which Irish-American trad band took its name from the Irish word for 'light'?",
    "options": [
      "Lúnasa",
      "Dervish",
      "Altan",
      "Solas"
    ],
    "answer": 3
  },
  {
    "q": "Which blind 18th-century harper composed many of Ireland's best-known harp tunes?",
    "options": [
      "Michael Coleman",
      "Turlough O'Carolan",
      "Seán Ó Riada",
      "Davy Spillane"
    ],
    "answer": 1
  },
  {
    "q": "Which composer revived interest in trad and founded Ceoltóirí Chualann in the 1960s?",
    "options": [
      "Bill Whelan",
      "Phil Coulter",
      "Seán Ó Riada",
      "Turlough O'Carolan"
    ],
    "answer": 2
  },
  {
    "q": "Which uilleann piper blended pipes with rock and featured on the Riverdance soundtrack?",
    "options": [
      "Davy Spillane",
      "Paddy Moloney",
      "Liam O'Flynn",
      "Finbar Furey"
    ],
    "answer": 0
  },
  {
    "q": "Which Dublin family band recorded Sweet Sixteen and The Green Fields of France?",
    "options": [
      "The Fureys",
      "The Corrs",
      "Clannad",
      "The Dubliners"
    ],
    "answer": 0
  },
  {
    "q": "Which 1992 compilation of Irish female singers became Ireland's best-selling album?",
    "options": [
      "Common Ground",
      "The Long Black Veil",
      "A Woman's Heart",
      "Celtic Woman"
    ],
    "answer": 2
  },
  {
    "q": "Which 1980 Thin Lizzy live album is regarded as a classic live rock record?",
    "options": [
      "Jailbreak",
      "Live and Dangerous",
      "Black Rose",
      "Chinatown"
    ],
    "answer": 1
  },
  {
    "q": "In which year did Phil Lynott of Thin Lizzy die?",
    "options": [
      "1976",
      "1991",
      "1996",
      "1986"
    ],
    "answer": 3
  },
  {
    "q": "In which year did Dolores O'Riordan of The Cranberries die?",
    "options": [
      "2008",
      "2015",
      "2018",
      "2020"
    ],
    "answer": 2
  },
  {
    "q": "Which Cranberries debut album contained Linger and Dreams?",
    "options": [
      "Everybody Else Is Doing It, So Why Can't We?",
      "No Need to Argue",
      "To the Faithful Departed",
      "Bury the Hatchet"
    ],
    "answer": 0
  },
  {
    "q": "On which Cranberries album does the song Zombie appear?",
    "options": [
      "Everybody Else Is Doing It, So Why Can't We?",
      "Bury the Hatchet",
      "Wake Up and Smell the Coffee",
      "No Need to Argue"
    ],
    "answer": 3
  },
  {
    "q": "Which band is fronted by Northern Irish singer Gary Lightbody?",
    "options": [
      "Ash",
      "Snow Patrol",
      "Two Door Cinema Club",
      "The Divine Comedy"
    ],
    "answer": 1
  },
  {
    "q": "Which Dublin post-punk band released the acclaimed album A Hero's Death?",
    "options": [
      "The Murder Capital",
      "Fontaines D.C.",
      "Kneecap",
      "Just Mustard"
    ],
    "answer": 1
  },
  {
    "q": "Which Westlife member represented Ireland solo at Eurovision 2016?",
    "options": [
      "Shane Filan",
      "Mark Feehily",
      "Kian Egan",
      "Nicky Byrne"
    ],
    "answer": 3
  },
  {
    "q": "The twins Jedward, who represented Ireland at Eurovision, are named John and what?",
    "options": [
      "Edward",
      "James",
      "Eamon",
      "Eoin"
    ],
    "answer": 0
  },
  {
    "q": "Which frame drum, played with a beater, is central to Irish trad rhythm?",
    "options": [
      "Cajón",
      "Tabla",
      "Bodhrán",
      "Djembe"
    ],
    "answer": 2
  },
  {
    "q": "Which song begins 'In Dublin's fair city, where the girls are so pretty'?",
    "options": [
      "The Wild Rover",
      "Dirty Old Town",
      "The Irish Rover",
      "Molly Malone"
    ],
    "answer": 3
  },
  {
    "q": "Which song about an emigrant ship is a duet for The Dubliners and The Pogues?",
    "options": [
      "The Wild Rover",
      "The Irish Rover",
      "Whiskey in the Jar",
      "Black Velvet Band"
    ],
    "answer": 1
  },
  {
    "q": "Clannad's haunting Theme from Harry's Game is sung in which language?",
    "options": [
      "Latin",
      "English",
      "Irish",
      "Scots Gaelic"
    ],
    "answer": 2
  },
  {
    "q": "Which Irish ballad commemorating the 1798 rebellion is titled The Rising of the what?",
    "options": [
      "Moon",
      "Sun",
      "Dawn",
      "Tide"
    ],
    "answer": 0
  },
  {
    "q": "Which song, popular at Irish sports events, was recorded by The Wolfe Tones?",
    "options": [
      "A Nation Once Again",
      "Ireland's Call",
      "Amhrán na bhFiann",
      "Danny Boy"
    ],
    "answer": 0
  },
  {
    "q": "The Fields of Athenry refers to a man transported for stealing food during which event?",
    "options": [
      "The 1916 Rising",
      "The War of Independence",
      "The Great Famine",
      "The Penal Laws"
    ],
    "answer": 2
  },
  {
    "q": "Which rugby anthem written by Phil Coulter is sung by Irish fans?",
    "options": [
      "A Nation Once Again",
      "Ireland's Call",
      "The Fields of Athenry",
      "Danny Boy"
    ],
    "answer": 1
  },
  {
    "q": "Who wrote the lyrics of Ireland's national anthem, The Soldier's Song?",
    "options": [
      "Patrick Pearse",
      "Thomas Davis",
      "Phil Coulter",
      "Peadar Kearney"
    ],
    "answer": 3
  },
  {
    "q": "In which county was Van Morrison born?",
    "options": [
      "Down",
      "Derry",
      "Antrim",
      "Armagh"
    ],
    "answer": 2
  },
  {
    "q": "Which 1989 Van Morrison duet with Cliff Richard was a Christmas hit?",
    "options": [
      "Whenever God Shines His Light",
      "Have I Told You Lately",
      "Days Like This",
      "Bright Side of the Road"
    ],
    "answer": 0
  },
  {
    "q": "Which instrument did Liam O'Flynn of Planxty play?",
    "options": [
      "Fiddle",
      "Bouzouki",
      "Tin whistle",
      "Uilleann pipes"
    ],
    "answer": 3
  },
  {
    "q": "Which Irish singer tore up a photograph on US television in 1992 in protest?",
    "options": [
      "Dolores O'Riordan",
      "Sinéad O'Connor",
      "Mary Black",
      "Enya"
    ],
    "answer": 1
  },
  {
    "q": "The band name Clannad is taken from the Irish word for what?",
    "options": [
      "Music",
      "Family",
      "Mountain",
      "River"
    ],
    "answer": 1
  },
  {
    "q": "From which county does the singer Enya come?",
    "options": [
      "Galway",
      "Cork",
      "Mayo",
      "Donegal"
    ],
    "answer": 3
  },
  {
    "q": "Brendan Graham wrote two Eurovision winners for Ireland; which did he pen in 1996?",
    "options": [
      "The Voice",
      "Rock 'n' Roll Kids",
      "In Your Eyes",
      "Why Me"
    ],
    "answer": 0
  },
  {
    "q": "Which Irish guitar virtuoso released the album Calling Card in 1976?",
    "options": [
      "Gary Moore",
      "The Edge",
      "Rory Gallagher",
      "Phil Lynott"
    ],
    "answer": 2
  },
  {
    "q": "Which classic Thin Lizzy album contains the title track Jailbreak?",
    "options": [
      "Black Rose",
      "Chinatown",
      "Renegade",
      "Jailbreak"
    ],
    "answer": 3
  },
  {
    "q": "Which 2014 Hozier song reached number two on the US Billboard Hot 100?",
    "options": [
      "Cherry Wine",
      "Take Me to Church",
      "Someone New",
      "Work Song"
    ],
    "answer": 1
  },
  {
    "q": "Which 2024 Hozier song became a global hit from the Unreal Unearth era?",
    "options": [
      "Take Me to Church",
      "Cherry Wine",
      "Too Sweet",
      "Movement"
    ],
    "answer": 2
  },
  {
    "q": "Which Donegal-named trad band features fiddler Mairéad Ní Mhaonaigh?",
    "options": [
      "Altan",
      "Clannad",
      "Dervish",
      "Solas"
    ],
    "answer": 0
  },
  {
    "q": "The Fields of Athenry refers to a town in which county?",
    "options": [
      "Galway",
      "Cork",
      "Kerry",
      "Mayo"
    ],
    "answer": 0
  },
  {
    "q": "Which Clare-born fiddler leads the modern trad supergroup The Gloaming?",
    "options": [
      "Frankie Gavin",
      "Kevin Burke",
      "Martin Hayes",
      "Paddy Glackin"
    ],
    "answer": 2
  },
  {
    "q": "Which Cranberries song opens 'Oh, my life is changing every day'?",
    "options": [
      "Linger",
      "Dreams",
      "Zombie",
      "Ode to My Family"
    ],
    "answer": 1
  },
  {
    "q": "From which city do The Cranberries come?",
    "options": [
      "Cork",
      "Dublin",
      "Galway",
      "Limerick"
    ],
    "answer": 3
  },
  {
    "q": "In which city did The Script form?",
    "options": [
      "Cork",
      "Belfast",
      "Dublin",
      "Galway"
    ],
    "answer": 2
  },
  {
    "q": "Which 2008 Script hit is titled The Man Who Can't Be what?",
    "options": [
      "Moved",
      "Saved",
      "Found",
      "Broken"
    ],
    "answer": 0
  },
  {
    "q": "Which Script song features will.i.am and reached number one in the UK in 2012?",
    "options": [
      "Breakeven",
      "For the First Time",
      "Superheroes",
      "Hall of Fame"
    ],
    "answer": 3
  },
  {
    "q": "Which Co Clare town hosts a famous matchmaking and music festival?",
    "options": [
      "Doolin",
      "Lisdoonvarna",
      "Ennistymon",
      "Kilrush"
    ],
    "answer": 1
  },
  {
    "q": "Which Co Clare village is internationally famous for its trad pub sessions?",
    "options": [
      "Lisdoonvarna",
      "Doolin",
      "Kilkee",
      "Spanish Point"
    ],
    "answer": 1
  },
  {
    "q": "Carrickfergus, the town in the traditional ballad, is in which county?",
    "options": [
      "Down",
      "Derry",
      "Armagh",
      "Antrim"
    ],
    "answer": 3
  },
  {
    "q": "Which U2 member writes most of the band's music alongside Bono?",
    "options": [
      "The Edge",
      "Adam Clayton",
      "Larry Mullen Jr",
      "Brian Eno"
    ],
    "answer": 0
  },
  {
    "q": "Which U2 song from Achtung Baby opens with 'Is it getting better'?",
    "options": [
      "Mysterious Ways",
      "The Fly",
      "One",
      "Even Better Than the Real Thing"
    ],
    "answer": 2
  },
  {
    "q": "Which 1984 Band Aid charity single did Bono perform on?",
    "options": [
      "We Are the World",
      "That's What Friends Are For",
      "Feed the World",
      "Do They Know It's Christmas?"
    ],
    "answer": 3
  },
  {
    "q": "Which Westlife song was their debut UK number one in 1999?",
    "options": [
      "Flying Without Wings",
      "Swear It Again",
      "If I Let You Go",
      "My Love"
    ],
    "answer": 1
  },
  {
    "q": "Which singer represented Ireland at Eurovision 2024 with Doomsday Blue?",
    "options": [
      "Brooke Scullion",
      "Lesley Roy",
      "Bambie Thug",
      "Nicky Byrne"
    ],
    "answer": 2
  },
  {
    "q": "Which 1960s Dublin ballad group recorded Seven Drunken Nights?",
    "options": [
      "The Dubliners",
      "The Wolfe Tones",
      "The Clancy Brothers",
      "Planxty"
    ],
    "answer": 0
  },
  {
    "q": "To which instrument family does the fiddle belong in Irish traditional music?",
    "options": [
      "Bowed strings",
      "Woodwind",
      "Percussion",
      "Brass"
    ],
    "answer": 0
  },
  {
    "q": "In Fairytale of New York, who originally sang the female vocal part?",
    "options": [
      "Sinéad O'Connor",
      "Dolores O'Riordan",
      "Kirsty MacColl",
      "Mary Black"
    ],
    "answer": 2
  },
  {
    "q": "In which city is the song Fairytale of New York set?",
    "options": [
      "Boston",
      "New York",
      "Chicago",
      "Dublin"
    ],
    "answer": 1
  },
  {
    "q": "Which 2000 U2 album includes Beautiful Day?",
    "options": [
      "Pop",
      "Zooropa",
      "No Line on the Horizon",
      "All That You Can't Leave Behind"
    ],
    "answer": 3
  },
  {
    "q": "Which instrumental trad quintet is named for the Irish word for August?",
    "options": [
      "Solas",
      "Dervish",
      "Lúnasa",
      "Téada"
    ],
    "answer": 2
  },
  {
    "q": "Which social dance evening with music is spelled how in Irish?",
    "options": [
      "Céilí",
      "Feis",
      "Fleadh",
      "Oireachtas"
    ],
    "answer": 0
  },
  {
    "q": "Which Sligo-based family trad band rose to fame in the 1990s?",
    "options": [
      "Altan",
      "Solas",
      "Lúnasa",
      "Dervish"
    ],
    "answer": 3
  },
  {
    "q": "Who wrote the play Waiting for Godot?",
    "options": [
      "Samuel Beckett",
      "Brian Friel",
      "Sean O'Casey",
      "J.M. Synge"
    ],
    "answer": 0
  },
  {
    "q": "Which Irish author wrote the novel Dracula?",
    "options": [
      "Bram Stoker",
      "Sheridan Le Fanu",
      "Oscar Wilde",
      "Lord Dunsany"
    ],
    "answer": 0
  },
  {
    "q": "Who wrote Gulliver's Travels?",
    "options": [
      "Jonathan Swift",
      "Oliver Goldsmith",
      "Laurence Sterne",
      "Richard Steele"
    ],
    "answer": 0
  },
  {
    "q": "Which Irish writer penned The Importance of Being Earnest?",
    "options": [
      "Oscar Wilde",
      "George Bernard Shaw",
      "Richard Brinsley Sheridan",
      "W.B. Yeats"
    ],
    "answer": 0
  },
  {
    "q": "Frank McCourt's memoir of growing up in Limerick is titled what?",
    "options": [
      "Angela's Ashes",
      "Tis",
      "Teacher Man",
      "The Limerick Years"
    ],
    "answer": 0
  },
  {
    "q": "Who wrote the novel The Picture of Dorian Gray?",
    "options": [
      "Oscar Wilde",
      "Bram Stoker",
      "George Moore",
      "James Stephens"
    ],
    "answer": 0
  },
  {
    "q": "Which Irish playwright wrote Pygmalion?",
    "options": [
      "George Bernard Shaw",
      "Oscar Wilde",
      "Sean O'Casey",
      "Brian Friel"
    ],
    "answer": 0
  },
  {
    "q": "Roddy Doyle's novel about a Dublin soul band is called what?",
    "options": [
      "The Commitments",
      "The Snapper",
      "The Van",
      "Paddy Clarke Ha Ha Ha"
    ],
    "answer": 0
  },
  {
    "q": "Which Roddy Doyle novel won the Booker Prize in 1993?",
    "options": [
      "Paddy Clarke Ha Ha Ha",
      "The Snapper",
      "The Commitments",
      "A Star Called Henry"
    ],
    "answer": 0
  },
  {
    "q": "Who wrote the play The Playboy of the Western World?",
    "options": [
      "J.M. Synge",
      "Sean O'Casey",
      "Lady Gregory",
      "W.B. Yeats"
    ],
    "answer": 0
  },
  {
    "q": "Sally Rooney's novel about Connell and Marianne is titled what?",
    "options": [
      "Normal People",
      "Conversations with Friends",
      "Beautiful World, Where Are You",
      "Intermezzo"
    ],
    "answer": 0
  },
  {
    "q": "Which Irish poet won the Nobel Prize in Literature in 1995?",
    "options": [
      "Seamus Heaney",
      "Patrick Kavanagh",
      "Louis MacNeice",
      "Derek Mahon"
    ],
    "answer": 0
  },
  {
    "q": "Who wrote the play Juno and the Paycock?",
    "options": [
      "Sean O'Casey",
      "J.M. Synge",
      "Brendan Behan",
      "Brian Friel"
    ],
    "answer": 0
  },
  {
    "q": "Brendan Behan wrote which famous play set in a prison?",
    "options": [
      "The Quare Fellow",
      "The Hostage",
      "Borstal Boy",
      "The Plough and the Stars"
    ],
    "answer": 0
  },
  {
    "q": "Which novel by Flann O'Brien features a man writing a book about a man writing a book?",
    "options": [
      "At Swim-Two-Birds",
      "The Third Policeman",
      "The Dalkey Archive",
      "The Poor Mouth"
    ],
    "answer": 0
  },
  {
    "q": "Brian Friel's most famous play is set in the fictional town of Ballybeg and is called what?",
    "options": [
      "Dancing at Lughnasa",
      "Translations",
      "Philadelphia, Here I Come!",
      "Faith Healer"
    ],
    "answer": 0
  },
  {
    "q": "Who wrote the play The Field, later made into a film?",
    "options": [
      "John B. Keane",
      "Brian Friel",
      "Tom Murphy",
      "Hugh Leonard"
    ],
    "answer": 0
  },
  {
    "q": "Maeve Binchy's debut novel was titled what?",
    "options": [
      "Light a Penny Candle",
      "Circle of Friends",
      "Tara Road",
      "Echoes"
    ],
    "answer": 0
  },
  {
    "q": "Which Irish author wrote the novel Brooklyn?",
    "options": [
      "Colm Toibin",
      "John Banville",
      "Sebastian Barry",
      "Joseph O'Connor"
    ],
    "answer": 0
  },
  {
    "q": "Who wrote the Dublin Murder Squad crime novels?",
    "options": [
      "Tana French",
      "John Connolly",
      "Liz Nugent",
      "Jane Casey"
    ],
    "answer": 0
  },
  {
    "q": "Which poet wrote the collection Death of a Naturalist?",
    "options": [
      "Seamus Heaney",
      "Paul Muldoon",
      "Michael Longley",
      "Thomas Kinsella"
    ],
    "answer": 0
  },
  {
    "q": "Patrick Kavanagh wrote which long poem about rural Irish life?",
    "options": [
      "The Great Hunger",
      "The Waste Land",
      "Tarry Flynn",
      "Raglan Road"
    ],
    "answer": 0
  },
  {
    "q": "Which national theatre of Ireland was founded in 1904 in Dublin?",
    "options": [
      "The Abbey Theatre",
      "The Gate Theatre",
      "The Gaiety Theatre",
      "The Olympia Theatre"
    ],
    "answer": 0
  },
  {
    "q": "John Banville won the Booker Prize in 2005 for which novel?",
    "options": [
      "The Sea",
      "The Book of Evidence",
      "The Untouchable",
      "Ancient Light"
    ],
    "answer": 0
  },
  {
    "q": "Which Irish writer created the crime novels featuring detective Quirke?",
    "options": [
      "John Banville",
      "Ken Bruen",
      "Declan Hughes",
      "John Connolly"
    ],
    "answer": 0
  },
  {
    "q": "Who wrote the play Translations, about an Irish-speaking community in Donegal?",
    "options": [
      "Brian Friel",
      "Tom Murphy",
      "Frank McGuinness",
      "Sebastian Barry"
    ],
    "answer": 0
  },
  {
    "q": "Eilis Lacey is the central character in which Colm Toibin novel?",
    "options": [
      "Brooklyn",
      "The Master",
      "Nora Webster",
      "The Blackwater Lightship"
    ],
    "answer": 0
  },
  {
    "q": "Which Irish actor played Oskar Schindler in Schindler's List?",
    "options": [
      "Liam Neeson",
      "Brendan Gleeson",
      "Stephen Rea",
      "Gabriel Byrne"
    ],
    "answer": 0
  },
  {
    "q": "Cillian Murphy won the Best Actor Oscar in 2024 for playing whom?",
    "options": [
      "J. Robert Oppenheimer",
      "Tommy Shelby",
      "Scarecrow",
      "Jim"
    ],
    "answer": 0
  },
  {
    "q": "Saoirse Ronan received an Oscar nomination for playing Eilis in which film?",
    "options": [
      "Brooklyn",
      "Lady Bird",
      "Atonement",
      "Little Women"
    ],
    "answer": 0
  },
  {
    "q": "Which 1952 John Ford film starring John Wayne and Maureen O'Hara is set in Ireland?",
    "options": [
      "The Quiet Man",
      "The Informer",
      "Ryan's Daughter",
      "The Field"
    ],
    "answer": 0
  },
  {
    "q": "The 1991 film The Commitments was based on a novel by which author?",
    "options": [
      "Roddy Doyle",
      "Dermot Bolger",
      "Joseph O'Connor",
      "Colm Toibin"
    ],
    "answer": 0
  },
  {
    "q": "Which 2007 Irish musical film featured the Oscar-winning song Falling Slowly?",
    "options": [
      "Once",
      "Sing Street",
      "The Commitments",
      "Begin Again"
    ],
    "answer": 0
  },
  {
    "q": "Who directed the 2022 film The Banshees of Inisherin?",
    "options": [
      "Martin McDonagh",
      "Lenny Abrahamson",
      "John Carney",
      "Jim Sheridan"
    ],
    "answer": 0
  },
  {
    "q": "Which two actors starred together in The Banshees of Inisherin?",
    "options": [
      "Colin Farrell and Brendan Gleeson",
      "Cillian Murphy and Liam Neeson",
      "Pierce Brosnan and Gabriel Byrne",
      "Barry Keoghan and Stephen Rea"
    ],
    "answer": 0
  },
  {
    "q": "Pierce Brosnan played which iconic spy character in four films?",
    "options": [
      "James Bond",
      "Jason Bourne",
      "Jack Ryan",
      "George Smiley"
    ],
    "answer": 0
  },
  {
    "q": "Daniel Day-Lewis won an Oscar for playing Christy Brown in which film?",
    "options": [
      "My Left Foot",
      "In the Name of the Father",
      "The Boxer",
      "Gangs of New York"
    ],
    "answer": 0
  },
  {
    "q": "Which Jim Sheridan film starred Daniel Day-Lewis as Gerry Conlon?",
    "options": [
      "In the Name of the Father",
      "My Left Foot",
      "The Boxer",
      "The Field"
    ],
    "answer": 0
  },
  {
    "q": "Colin Farrell starred as a hitman in which 2008 Martin McDonagh film?",
    "options": [
      "In Bruges",
      "Seven Psychopaths",
      "The Lobster",
      "Phone Booth"
    ],
    "answer": 0
  },
  {
    "q": "Which sitcom is set on the fictional Craggy Island?",
    "options": [
      "Father Ted",
      "Killinaskully",
      "Bachelors Walk",
      "Hardy Bucks"
    ],
    "answer": 0
  },
  {
    "q": "Who played Father Ted Crilly in the sitcom Father Ted?",
    "options": [
      "Dermot Morgan",
      "Ardal O'Hanlon",
      "Frank Kelly",
      "Pat Shortt"
    ],
    "answer": 0
  },
  {
    "q": "Ardal O'Hanlon played which dim-witted priest in Father Ted?",
    "options": [
      "Father Dougal McGuire",
      "Father Jack Hackett",
      "Father Noel Furlong",
      "Father Stone"
    ],
    "answer": 0
  },
  {
    "q": "Which actor played the foul-mouthed Father Jack in Father Ted?",
    "options": [
      "Frank Kelly",
      "Dermot Morgan",
      "Pat Laffan",
      "Niall Buggy"
    ],
    "answer": 0
  },
  {
    "q": "Father Ted was co-written by Graham Linehan and which other writer?",
    "options": [
      "Arthur Mathews",
      "Pauline McLynn",
      "Declan Lowney",
      "Paul Woodfull"
    ],
    "answer": 0
  },
  {
    "q": "The teen comedy Derry Girls is set in which decade?",
    "options": [
      "The 1990s",
      "The 1970s",
      "The 1980s",
      "The 2000s"
    ],
    "answer": 0
  },
  {
    "q": "Who created and wrote the sitcom Derry Girls?",
    "options": [
      "Lisa McGee",
      "Sharon Horgan",
      "Graham Linehan",
      "Roddy Doyle"
    ],
    "answer": 0
  },
  {
    "q": "In Derry Girls, what is the nationality of the boy James?",
    "options": [
      "English",
      "Scottish",
      "Welsh",
      "American"
    ],
    "answer": 0
  },
  {
    "q": "Brendan O'Carroll plays which matriarch in Mrs Brown's Boys?",
    "options": [
      "Agnes Brown",
      "Cathy Brown",
      "Winnie McGoogan",
      "Betty Brown"
    ],
    "answer": 0
  },
  {
    "q": "RTE's flagship chat show, the world's longest-running, is called what?",
    "options": [
      "The Late Late Show",
      "The Tonight Show",
      "The Saturday Night Show",
      "Tubridy Tonight"
    ],
    "answer": 0
  },
  {
    "q": "Who was the original host of The Late Late Show from 1962?",
    "options": [
      "Gay Byrne",
      "Pat Kenny",
      "Ryan Tubridy",
      "Mike Murphy"
    ],
    "answer": 0
  },
  {
    "q": "Which Irish writer wrote the novel The Country Girls, once banned in Ireland?",
    "options": [
      "Edna O'Brien",
      "Maeve Binchy",
      "Kate O'Brien",
      "Molly Keane"
    ],
    "answer": 0
  },
  {
    "q": "Who wrote the 1939 novel At Swim-Two-Birds under a pen name?",
    "options": [
      "Flann O'Brien",
      "Brian Friel",
      "Patrick Kavanagh",
      "Samuel Beckett"
    ],
    "answer": 0
  },
  {
    "q": "Bram Stoker was born in which Irish city?",
    "options": [
      "Dublin",
      "Cork",
      "Belfast",
      "Galway"
    ],
    "answer": 0
  },
  {
    "q": "Which Irish playwright wrote She Stoops to Conquer?",
    "options": [
      "Oliver Goldsmith",
      "Richard Brinsley Sheridan",
      "George Farquhar",
      "William Congreve"
    ],
    "answer": 0
  },
  {
    "q": "Richard Brinsley Sheridan wrote which famous comedy of manners?",
    "options": [
      "The School for Scandal",
      "She Stoops to Conquer",
      "The Beaux' Stratagem",
      "The Way of the World"
    ],
    "answer": 0
  },
  {
    "q": "Which novel by James Joyce is a collection of short stories set in Dublin?",
    "options": [
      "Dubliners",
      "A Portrait of the Artist as a Young Man",
      "Finnegans Wake",
      "Stephen Hero"
    ],
    "answer": 0
  },
  {
    "q": "The final story in Joyce's Dubliners is called what?",
    "options": [
      "The Dead",
      "Araby",
      "Eveline",
      "The Sisters"
    ],
    "answer": 0
  },
  {
    "q": "Which Irish poet wrote The Lake Isle of Innisfree?",
    "options": [
      "W.B. Yeats",
      "Patrick Kavanagh",
      "Oliver Goldsmith",
      "Thomas Moore"
    ],
    "answer": 0
  },
  {
    "q": "Who wrote the poem The Second Coming, with the line 'things fall apart'?",
    "options": [
      "W.B. Yeats",
      "Seamus Heaney",
      "Louis MacNeice",
      "Austin Clarke"
    ],
    "answer": 0
  },
  {
    "q": "Which Irish writer is famous for the novel The Sea, the Sea? (Note: she was Dublin-born)",
    "options": [
      "Iris Murdoch",
      "Elizabeth Bowen",
      "Molly Keane",
      "Kate O'Brien"
    ],
    "answer": 0
  },
  {
    "q": "C.S. Lewis, author of The Chronicles of Narnia, was born in which Irish city?",
    "options": [
      "Belfast",
      "Dublin",
      "Derry",
      "Lisburn"
    ],
    "answer": 0
  },
  {
    "q": "Which Irish author wrote the Artemis Fowl series of children's books?",
    "options": [
      "Eoin Colfer",
      "Derek Landy",
      "Darren Shan",
      "John Boyne"
    ],
    "answer": 0
  },
  {
    "q": "John Boyne wrote which novel set during the Holocaust?",
    "options": [
      "The Boy in the Striped Pyjamas",
      "The Heart's Invisible Furies",
      "A History of Loneliness",
      "The Absolutist"
    ],
    "answer": 0
  },
  {
    "q": "Which playwright wrote The Weir, set in a rural Irish pub?",
    "options": [
      "Conor McPherson",
      "Martin McDonagh",
      "Enda Walsh",
      "Mark O'Rowe"
    ],
    "answer": 0
  },
  {
    "q": "Enda Walsh co-wrote the book for which Tony-winning musical based on an Irish film?",
    "options": [
      "Once",
      "The Commitments",
      "Riverdance",
      "Sing Street"
    ],
    "answer": 0
  },
  {
    "q": "Which Irish author wrote the 2018 novel Milkman, which won the Booker Prize?",
    "options": [
      "Anna Burns",
      "Lisa McInerney",
      "Eimear McBride",
      "Sara Baume"
    ],
    "answer": 0
  },
  {
    "q": "Anne Enright won the Booker Prize in 2007 for which novel?",
    "options": [
      "The Gathering",
      "The Forgotten Waltz",
      "The Green Road",
      "Actress"
    ],
    "answer": 0
  },
  {
    "q": "Which Irish poet and Nobel laureate wrote the play The Cure at Troy?",
    "options": [
      "Seamus Heaney",
      "W.B. Yeats",
      "Brian Friel",
      "Tom Paulin"
    ],
    "answer": 0
  },
  {
    "q": "Who wrote the novel Strumpet City, set in Dublin around the 1913 Lockout?",
    "options": [
      "James Plunkett",
      "Liam O'Flaherty",
      "Sean O'Faolain",
      "Frank O'Connor"
    ],
    "answer": 0
  },
  {
    "q": "Liam O'Flaherty wrote which novel set during the Irish War of Independence?",
    "options": [
      "The Informer",
      "Famine",
      "The Assassin",
      "Skerrett"
    ],
    "answer": 0
  },
  {
    "q": "Which short-story writer wrote Guests of the Nation?",
    "options": [
      "Frank O'Connor",
      "Sean O'Faolain",
      "Mary Lavin",
      "Bryan MacMahon"
    ],
    "answer": 0
  },
  {
    "q": "George Bernard Shaw won the Nobel Prize in Literature in which year?",
    "options": [
      "1925",
      "1923",
      "1932",
      "1947"
    ],
    "answer": 0
  },
  {
    "q": "Samuel Beckett won the Nobel Prize in Literature in which year?",
    "options": [
      "1969",
      "1955",
      "1961",
      "1972"
    ],
    "answer": 0
  },
  {
    "q": "Which of these plays was written by Samuel Beckett?",
    "options": [
      "Endgame",
      "The Hostage",
      "The Plough and the Stars",
      "Sive"
    ],
    "answer": 0
  },
  {
    "q": "Beckett's play Krapp's Last Tape features a man listening to what?",
    "options": [
      "Tape recordings of his past",
      "The radio",
      "Old gramophone records",
      "Voicemail messages"
    ],
    "answer": 0
  },
  {
    "q": "Which Irish author wrote A Star Called Henry, part of The Last Roundup trilogy?",
    "options": [
      "Roddy Doyle",
      "Sebastian Barry",
      "Joseph O'Connor",
      "Dermot Bolger"
    ],
    "answer": 0
  },
  {
    "q": "Sebastian Barry won the Costa Book of the Year twice, including for which novel?",
    "options": [
      "The Secret Scripture",
      "A Long Long Way",
      "Days Without End",
      "Annie Dunne"
    ],
    "answer": 0
  },
  {
    "q": "Which writer created the character of Christy Mahon?",
    "options": [
      "J.M. Synge",
      "Sean O'Casey",
      "Lady Gregory",
      "Padraic Colum"
    ],
    "answer": 0
  },
  {
    "q": "Sean O'Casey's Dublin Trilogy includes Juno and the Paycock and which other play?",
    "options": [
      "The Plough and the Stars",
      "The Silver Tassie",
      "Red Roses for Me",
      "Purple Dust"
    ],
    "answer": 0
  },
  {
    "q": "Which Irish author wrote the novel The Heather Blazing?",
    "options": [
      "Colm Toibin",
      "John McGahern",
      "William Trevor",
      "Patrick McCabe"
    ],
    "answer": 0
  },
  {
    "q": "John McGahern's acclaimed final novel was titled what?",
    "options": [
      "That They May Face the Rising Sun",
      "Amongst Women",
      "The Barracks",
      "The Dark"
    ],
    "answer": 0
  },
  {
    "q": "Which Patrick McCabe novel was adapted into a Neil Jordan film starring a boy named Francie Brady?",
    "options": [
      "The Butcher Boy",
      "Breakfast on Pluto",
      "The Dead School",
      "Winterwood"
    ],
    "answer": 0
  },
  {
    "q": "Neil Jordan won an Oscar for the screenplay of which 1992 film?",
    "options": [
      "The Crying Game",
      "Michael Collins",
      "Interview with the Vampire",
      "The Butcher Boy"
    ],
    "answer": 0
  },
  {
    "q": "Which actor played the title role in Neil Jordan's 1996 film Michael Collins?",
    "options": [
      "Liam Neeson",
      "Aidan Quinn",
      "Stephen Rea",
      "Alan Rickman"
    ],
    "answer": 0
  },
  {
    "q": "Which Irish actress won the 1953 Best Actress Oscar nomination but is best known for The Quiet Man?",
    "options": [
      "Maureen O'Hara",
      "Siobhan McKenna",
      "Greer Garson",
      "Constance Smith"
    ],
    "answer": 0
  },
  {
    "q": "Gabriel Byrne starred in which 1995 crime film as Dean Keaton?",
    "options": [
      "The Usual Suspects",
      "Miller's Crossing",
      "The Man in the Iron Mask",
      "Stigmata"
    ],
    "answer": 0
  },
  {
    "q": "Which Irish actor voiced Aslan in The Chronicles of Narnia films?",
    "options": [
      "Liam Neeson",
      "Brendan Gleeson",
      "Ciaran Hinds",
      "Colm Meaney"
    ],
    "answer": 0
  },
  {
    "q": "Colm Meaney played Miles O'Brien in which Star Trek series?",
    "options": [
      "Deep Space Nine",
      "Voyager",
      "Enterprise",
      "Discovery"
    ],
    "answer": 0
  },
  {
    "q": "Which actor played the father, Jimmy Rabbitte Sr, in The Snapper and The Van?",
    "options": [
      "Colm Meaney",
      "Donal McCann",
      "Brendan Gleeson",
      "Niall Toibin"
    ],
    "answer": 0
  },
  {
    "q": "Barry Keoghan received an Oscar nomination for his role in which 2022 film?",
    "options": [
      "The Banshees of Inisherin",
      "Saltburn",
      "The Killing of a Sacred Deer",
      "Dunkirk"
    ],
    "answer": 0
  },
  {
    "q": "Which Irish actor starred as the lead in the 2023 film Saltburn?",
    "options": [
      "Barry Keoghan",
      "Paul Mescal",
      "Jack Reynor",
      "Cillian Murphy"
    ],
    "answer": 0
  },
  {
    "q": "Paul Mescal rose to fame playing Connell in which TV adaptation?",
    "options": [
      "Normal People",
      "Conversations with Friends",
      "The Deceived",
      "Wild Mountain Thyme"
    ],
    "answer": 0
  },
  {
    "q": "Paul Mescal received a Best Actor Oscar nomination for which 2022 film?",
    "options": [
      "Aftersun",
      "All of Us Strangers",
      "Gladiator II",
      "God's Creatures"
    ],
    "answer": 0
  },
  {
    "q": "Which actress played the lead in the TV series Normal People opposite Paul Mescal?",
    "options": [
      "Daisy Edgar-Jones",
      "Jessie Buckley",
      "Aisling Bea",
      "Niamh Algar"
    ],
    "answer": 0
  },
  {
    "q": "Jessie Buckley received an Oscar nomination for which 2021 film?",
    "options": [
      "The Lost Daughter",
      "Wild Rose",
      "Women Talking",
      "I'm Thinking of Ending Things"
    ],
    "answer": 0
  },
  {
    "q": "Which 2019 film, with dialogue mostly in Irish, starred a boy named Ole Schibik?",
    "options": [
      "The Quiet Girl",
      "Song of the Sea",
      "Kisses",
      "Garage"
    ],
    "answer": 0
  },
  {
    "q": "The Quiet Girl (An Cailin Ciuin) was based on a story by which author?",
    "options": [
      "Claire Keegan",
      "Edna O'Brien",
      "Kevin Barry",
      "Donal Ryan"
    ],
    "answer": 0
  },
  {
    "q": "Claire Keegan's novella Small Things Like These was adapted into a film starring whom?",
    "options": [
      "Cillian Murphy",
      "Colin Farrell",
      "Brendan Gleeson",
      "Barry Keoghan"
    ],
    "answer": 0
  },
  {
    "q": "Which animation studio based in Kilkenny made The Secret of Kells?",
    "options": [
      "Cartoon Saloon",
      "Brown Bag Films",
      "Boulder Media",
      "JAM Media"
    ],
    "answer": 0
  },
  {
    "q": "Cartoon Saloon's film about Irish folklore and wolves is titled what?",
    "options": [
      "Wolfwalkers",
      "Song of the Sea",
      "The Breadwinner",
      "The Secret of Kells"
    ],
    "answer": 0
  },
  {
    "q": "Which Irish sketch show featured the character of Mario Rosenstock impersonating celebrities?",
    "options": [
      "Gift Grub",
      "Hardy Bucks",
      "The Savage Eye",
      "Republic of Telly"
    ],
    "answer": 0
  },
  {
    "q": "Pat Shortt starred as Jim in which RTE comedy series set in a rural pub?",
    "options": [
      "Killinaskully",
      "Bachelors Walk",
      "Paths to Freedom",
      "Mattie"
    ],
    "answer": 0
  },
  {
    "q": "Which long-running RTE drama is set in the fictional Dublin suburb of Carrigstown?",
    "options": [
      "Fair City",
      "Glenroe",
      "The Riordans",
      "Bracken"
    ],
    "answer": 0
  },
  {
    "q": "Which rural RTE soap, running from 1983 to 2001, was set in Wicklow?",
    "options": [
      "Glenroe",
      "The Riordans",
      "Bracken",
      "Ros na Run"
    ],
    "answer": 0
  },
  {
    "q": "Ros na Run is a soap opera broadcast primarily in which language?",
    "options": [
      "Irish",
      "English",
      "Ulster Scots",
      "Latin"
    ],
    "answer": 0
  },
  {
    "q": "Who succeeded Gay Byrne as host of The Late Late Show in 1999?",
    "options": [
      "Pat Kenny",
      "Ryan Tubridy",
      "Patrick Kielty",
      "Joe Duffy"
    ],
    "answer": 0
  },
  {
    "q": "Who became host of The Late Late Show in 2023?",
    "options": [
      "Patrick Kielty",
      "Ryan Tubridy",
      "Pat Kenny",
      "Tommy Tiernan"
    ],
    "answer": 0
  },
  {
    "q": "Which comedian hosts a chat show on RTE where he doesn't know the guests in advance?",
    "options": [
      "Tommy Tiernan",
      "Dara O Briain",
      "Dylan Moran",
      "Ed Byrne"
    ],
    "answer": 0
  },
  {
    "q": "Dylan Moran co-starred as bookshop owner Bernard Black in which sitcom?",
    "options": [
      "Black Books",
      "Father Ted",
      "The IT Crowd",
      "Catastrophe"
    ],
    "answer": 0
  },
  {
    "q": "Graham Linehan also co-created which sitcom about office tech support?",
    "options": [
      "The IT Crowd",
      "Black Books",
      "Spaced",
      "Peep Show"
    ],
    "answer": 0
  },
  {
    "q": "Sharon Horgan co-created and starred in which dark comedy with Rob Delaney?",
    "options": [
      "Catastrophe",
      "Motherland",
      "Pulling",
      "Bad Sisters"
    ],
    "answer": 0
  },
  {
    "q": "Sharon Horgan created which 2022 thriller-comedy series set in Ireland?",
    "options": [
      "Bad Sisters",
      "This Way Up",
      "Divorce",
      "Together"
    ],
    "answer": 0
  },
  {
    "q": "Which comedian created and starred in the Channel 4 sitcom This Way Up?",
    "options": [
      "Aisling Bea",
      "Sharon Horgan",
      "Roisin Conaty",
      "Katherine Ryan"
    ],
    "answer": 0
  },
  {
    "q": "Chris O'Dowd played which character in The IT Crowd?",
    "options": [
      "Roy",
      "Moss",
      "Douglas",
      "Richmond"
    ],
    "answer": 0
  },
  {
    "q": "Chris O'Dowd co-created and starred in which semi-autobiographical sitcom about his childhood?",
    "options": [
      "Moone Boy",
      "The Sparticle Mystery",
      "Family Tree",
      "Get Shorty"
    ],
    "answer": 0
  },
  {
    "q": "Which Irish band's songs feature in the film Sing Street, directed by John Carney?",
    "options": [
      "The film uses original songs and 80s hits",
      "U2",
      "The Cranberries",
      "Thin Lizzy"
    ],
    "answer": 0
  },
  {
    "q": "John Carney directed Once, Sing Street and which other music-based film?",
    "options": [
      "Begin Again",
      "Whiplash",
      "Yesterday",
      "Rocketman"
    ],
    "answer": 0
  },
  {
    "q": "Which Irish poet wrote the collection North in 1975?",
    "options": [
      "Seamus Heaney",
      "John Montague",
      "Derek Mahon",
      "Michael Hartnett"
    ],
    "answer": 0
  },
  {
    "q": "Eavan Boland is best known as an Irish writer in which genre?",
    "options": [
      "Poetry",
      "Crime fiction",
      "Theatre",
      "Travel writing"
    ],
    "answer": 0
  },
  {
    "q": "Which contemporary Irish poet won the T.S. Eliot Prize and is from Northern Ireland, known for Moy Sand and Gravel?",
    "options": [
      "Paul Muldoon",
      "Ciaran Carson",
      "Tom Paulin",
      "Frank Ormsby"
    ],
    "answer": 0
  },
  {
    "q": "Thomas Moore wrote which collection of songs including The Last Rose of Summer?",
    "options": [
      "Irish Melodies",
      "The Minstrel Boy Songs",
      "Lalla Rookh",
      "The Bard's Legacy"
    ],
    "answer": 0
  },
  {
    "q": "Which Irish writer wrote The Vicar of Wakefield?",
    "options": [
      "Oliver Goldsmith",
      "Laurence Sterne",
      "Maria Edgeworth",
      "Jonathan Swift"
    ],
    "answer": 0
  },
  {
    "q": "Maria Edgeworth wrote which 1800 novel often called the first regional novel?",
    "options": [
      "Castle Rackrent",
      "Belinda",
      "The Absentee",
      "Ormond"
    ],
    "answer": 0
  },
  {
    "q": "Which Irish novelist wrote Felicia's Journey and The Story of Lucy Gault?",
    "options": [
      "William Trevor",
      "John Banville",
      "Brian Moore",
      "Aidan Higgins"
    ],
    "answer": 0
  },
  {
    "q": "Brian Moore wrote which novel about a Belfast spinster, later filmed with Maggie Smith?",
    "options": [
      "The Lonely Passion of Judith Hearne",
      "The Doctor's Wife",
      "Black Robe",
      "Lies of Silence"
    ],
    "answer": 0
  },
  {
    "q": "Which Irish author wrote the Skulduggery Pleasant series?",
    "options": [
      "Derek Landy",
      "Eoin Colfer",
      "Darren Shan",
      "John Connolly"
    ],
    "answer": 0
  },
  {
    "q": "Cecelia Ahern wrote which bestselling novel, later a film with Hilary Swank?",
    "options": [
      "P.S. I Love You",
      "Love, Rosie",
      "The Gift",
      "If You Could See Me Now"
    ],
    "answer": 0
  },
  {
    "q": "Cecelia Ahern is the daughter of which former Irish Taoiseach?",
    "options": [
      "Bertie Ahern",
      "Brian Cowen",
      "Charles Haughey",
      "Albert Reynolds"
    ],
    "answer": 0
  },
  {
    "q": "Which Irish author wrote the Glorious Heresies, winning the Baileys Prize in 2016?",
    "options": [
      "Lisa McInerney",
      "Anna Burns",
      "Eimear McBride",
      "Donal Ryan"
    ],
    "answer": 0
  },
  {
    "q": "Donal Ryan's debut novel, told in 21 voices, is titled what?",
    "options": [
      "The Spinning Heart",
      "The Thing About December",
      "All We Shall Know",
      "From a Low and Quiet Sea"
    ],
    "answer": 0
  },
  {
    "q": "Which Irish writer won the Goldsmiths Prize for the experimental novel A Girl Is a Half-formed Thing?",
    "options": [
      "Eimear McBride",
      "Anna Burns",
      "Mike McCormack",
      "Kevin Barry"
    ],
    "answer": 0
  },
  {
    "q": "Kevin Barry's debut novel, set in a dystopian Irish city, is titled what?",
    "options": [
      "City of Bohane",
      "Beatlebone",
      "Night Boat to Tangier",
      "That Old Country Music"
    ],
    "answer": 0
  },
  {
    "q": "Which Irish playwright wrote The Pillowman and The Beauty Queen of Leenane?",
    "options": [
      "Martin McDonagh",
      "Conor McPherson",
      "Enda Walsh",
      "Marina Carr"
    ],
    "answer": 0
  },
  {
    "q": "Marina Carr's play By the Bog of Cats is loosely based on which Greek tragedy?",
    "options": [
      "Medea",
      "Antigone",
      "Oedipus Rex",
      "Electra"
    ],
    "answer": 0
  },
  {
    "q": "Which actor played the lead role of Tommy Shelby in Peaky Blinders?",
    "options": [
      "Cillian Murphy",
      "Aidan Gillen",
      "Paul Anderson",
      "Jack Reynor"
    ],
    "answer": 0
  },
  {
    "q": "Aidan Gillen played Littlefinger in which hit HBO series?",
    "options": [
      "Game of Thrones",
      "The Wire",
      "Rome",
      "Boardwalk Empire"
    ],
    "answer": 0
  },
  {
    "q": "Which RTE crime drama featured Aidan Gillen as Nidge and Tom Vaughan-Lawlor as a key figure?",
    "options": [
      "Love/Hate",
      "The Clinic",
      "Single-Handed",
      "Red Rock"
    ],
    "answer": 0
  },
  {
    "q": "Tom Vaughan-Lawlor played Nidge in which acclaimed RTE drama?",
    "options": [
      "Love/Hate",
      "Red Rock",
      "Raw",
      "Amber"
    ],
    "answer": 0
  },
  {
    "q": "Which Irish actor played the villain Ra's al Ghul in Batman Begins?",
    "options": [
      "Liam Neeson",
      "Cillian Murphy",
      "Gabriel Byrne",
      "Pierce Brosnan"
    ],
    "answer": 0
  },
  {
    "q": "Cillian Murphy played which villain in Batman Begins and The Dark Knight?",
    "options": [
      "Scarecrow",
      "The Joker",
      "Two-Face",
      "Bane"
    ],
    "answer": 0
  },
  {
    "q": "Ruth Negga received a Best Actress Oscar nomination for which 2016 film?",
    "options": [
      "Loving",
      "Passing",
      "Preacher",
      "Ad Astra"
    ],
    "answer": 0
  },
  {
    "q": "Kerry Condon received an Oscar nomination for her role in which 2022 film?",
    "options": [
      "The Banshees of Inisherin",
      "The Last Duel",
      "Better Call Saul",
      "Bad Samaritan"
    ],
    "answer": 0
  },
  {
    "q": "Domhnall Gleeson played which character in the Star Wars sequel trilogy?",
    "options": [
      "General Hux",
      "Poe Dameron",
      "Finn",
      "Kylo Ren"
    ],
    "answer": 0
  },
  {
    "q": "Which 2014 film directed by John Michael McDonagh starred Brendan Gleeson as a priest?",
    "options": [
      "Calvary",
      "The Guard",
      "War on Everyone",
      "Cavalry Charge"
    ],
    "answer": 0
  },
  {
    "q": "In the 2011 film The Guard, Brendan Gleeson plays a Garda partnered with an FBI agent played by whom?",
    "options": [
      "Don Cheadle",
      "Forest Whitaker",
      "Samuel L. Jackson",
      "Idris Elba"
    ],
    "answer": 0
  },
  {
    "q": "Adrian Dunbar played Superintendent Ted Hastings in which BBC police drama?",
    "options": [
      "Line of Duty",
      "Blood",
      "Cracker",
      "The Fall"
    ],
    "answer": 0
  },
  {
    "q": "Which actor played serial killer Paul Spector in the BBC series The Fall, set in Belfast?",
    "options": [
      "Jamie Dornan",
      "Cillian Murphy",
      "James Nesbitt",
      "Liam Cunningham"
    ],
    "answer": 0
  },
  {
    "q": "Jamie Dornan starred as Christian Grey in which film series?",
    "options": [
      "Fifty Shades",
      "Twilight",
      "After",
      "The Notebook"
    ],
    "answer": 0
  },
  {
    "q": "Kenneth Branagh's semi-autobiographical 2021 film about his childhood in Northern Ireland is called what?",
    "options": [
      "Belfast",
      "Derry",
      "The Troubles",
      "Home"
    ],
    "answer": 0
  },
  {
    "q": "Which young Irish actor played the boy Buddy in Kenneth Branagh's Belfast?",
    "options": [
      "Jude Hill",
      "Barry Keoghan",
      "Art Parkinson",
      "Lewis McAskie"
    ],
    "answer": 0
  },
  {
    "q": "Which writer created the long-running sketch series and character Mrs Brown before TV fame?",
    "options": [
      "Brendan O'Carroll",
      "Pat Shortt",
      "Brendan Grace",
      "Niall Toibin"
    ],
    "answer": 0
  },
  {
    "q": "Which classic Irish comedy character did Brendan Grace famously portray, a schoolboy?",
    "options": [
      "Bottler",
      "Father Stone",
      "Podge",
      "Buckets McGrath"
    ],
    "answer": 0
  },
  {
    "q": "Which Irish author wrote the Wonder, about a fasting girl, and Room?",
    "options": [
      "Emma Donoghue",
      "Anne Enright",
      "Belinda McKeon",
      "Christine Dwyer Hickey"
    ],
    "answer": 0
  },
  {
    "q": "Emma Donoghue's novel Room was adapted into a film that won an Oscar for which actress?",
    "options": [
      "Brie Larson",
      "Saoirse Ronan",
      "Ruth Negga",
      "Jessie Buckley"
    ],
    "answer": 0
  },
  {
    "q": "John B. Keane's play about a matchmaking arrangement is titled what?",
    "options": [
      "Sive",
      "The Field",
      "Big Maggie",
      "Moll"
    ],
    "answer": 0
  }
]
