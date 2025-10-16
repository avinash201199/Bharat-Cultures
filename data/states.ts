import type { StateData, StateBrief } from "./types"

const placeholder = (query: string, w = 640, h = 360) =>
  `/placeholder.svg?height=${h}&width=${w}&query=${encodeURIComponent(query)}`

const ALL: StateData[] = [
  // Rich examples
  {
    slug: "kerala",
    name: "Kerala",
    tagline: "God’s Own Country",
    heroImage: "/images/kerala/home.jpeg",
    about:
      "Kerala blends lush backwaters, Ayurveda, and classical arts like Kathakali and Mohiniyattam. Its culture values harmony, education, and communal festivals like Onam.",
    cultureAspects: [
      {
        id: "festivals",
        title: "Festivals",
        description:
          "Onam and Vishu celebrate harvest and renewal with floral carpets (Pookalam), boat races, and feasts (Sadya).",
        image: placeholder("Kerala Onam Pookalam"),
        content:
          "Onam marks the legendary return of King Mahabali and the joy of harvest. Homes craft intricate Pookalams,\n" +
          "villages host Vallamkali (snake boat races), and families share Sadya on banana leaves. Vishu ushers in the new year\n" +
          "with Vishukkani—auspicious first sight of the day—symbolizing abundance and hope.",
      },
      {
        id: "dance",
        title: "Music & Dance",
        description: "Kathakali, Mohiniyattam, and Sopana Sangeetham exemplify expressive storytelling and rhythm.",
        image: placeholder("Kerala Kathakali performance"),
        content:
          "Kathakali’s elaborate makeup, mudras, and percussion narrate epics with intense expression. Mohiniyattam flows with\n" +
          "grace and devotion, while Sopana Sangeetham accompanies temple rituals in contemplative tones.",
      },
      {
        id: "cuisine",
        title: "Cuisine",
        description:
          "Banana leaf Sadya, appam with stew, Malabar parotta, and seafood infused with coconut, curry leaves, and spices.",
        image: placeholder("Kerala Sadya banana leaf"),
        content:
          "Kerala cuisine balances spice and subtlety—coconut, tamarind, and curry leaves define its character. The Sadya feast\n" +
          "celebrates variety and hospitality, while coastal regions offer fragrant seafood curries and fries.",
      },
      {
        id: "art",
        title: "Art & Handicrafts",
        description:
          "Coconut coir, mural painting, and bell-metal craft reflect intricate skill and natural materials.",
        image: placeholder("Kerala mural art"),
        content:
          "Temple murals depict mythic scenes in earthy palettes. Cottage industries transform coconut coir into ropes and mats,\n" +
          "while bell-metal and brassware workshops keep heritage techniques alive.",
      },
      {
        id: "rituals",
        title: "Rituals & Customs",
        description: "Temple arts, Theyyam rituals in North Kerala, and Ayurveda wellness practices foster balance.",
        image: placeholder("Kerala Theyyam ritual"),
        content:
          "Theyyam blends dance, trance, and living deity traditions—community identity and spiritual protection intertwine.\n" +
          "Ayurveda’s routines—abhyanga, rasayana—emphasize longevity and harmony.",
      },
    ],
    stories: [
      {
        id: "tiger-and-judge",
        title: "The Tiger and the Wise Judge",
        excerpt: "A village dispute resolved by wisdom teaches fairness beyond appearances.",
        content:
          "In a coastal village, two fishermen argued about a trapped tiger cub. A wise judge listened to both, freed the cub safely, and compensated each for their care. The village learned that justice considers context and compassion, not just strict rules.",
        moral: "Justice with empathy nurtures trust and harmony.",
      },
      {
        id: "boat-race",
        title: "The Snake Boat Lesson",
        excerpt: "When rowers aligned their rhythm to the drum, the boat flew.",
        content:
          "During a Vallamkali race, a divided crew lagged. A drummer unified their strokes; the boat surged. They realized collective rhythm beats raw strength.",
        moral: "Unity of purpose multiplies strength.",
      },
    ],
    gallery: [
      { src: placeholder("Kerala backwaters houseboat", 800, 450), alt: "Backwaters" },
      { src: placeholder("Kathakali mask closeup", 800, 450), alt: "Kathakali" },
      { src: placeholder("Onam Pookalam floral art", 800, 450), alt: "Pookalam" },
    ],
    related: ["tamil-nadu", "karnataka", "pondicherry"],
  },
  {
    slug: "maharashtra",
    name: "Maharashtra",
    tagline: "Gateway of India, Traditions of Warkari",
    heroImage:"/images/maharashtra/home.jpeg",
    about:
      "From Mumbai’s cosmopolitan energy to Warli art and Warkari devotion, Maharashtra balances modernity and tradition.",
    cultureAspects: [
      {
        id: "festivals",
        title: "Festivals",
        description: "Ganesh Chaturthi unites communities in devotion, art, and music.",
        image: placeholder("Ganesh Chaturthi procession"),
        content:
          "Ganesh Chaturthi transforms neighborhoods into artful pandals. Daily aarti, community meals, and visarjan (immersion)\n" +
          "foster seva and togetherness across backgrounds.",
      },
      {
        id: "dance",
        title: "Music & Dance",
        description: "Lavani and Powada carry powerful rhythm and history.",
        image: placeholder("Lavani dance performance"),
        content:
          "Lavani’s quick tempo and expressive abhinaya energize folk stages, while Powada ballads recount valor and history,\n" +
          "preserving memory through music.",
      },
      {
        id: "cuisine",
        title: "Cuisine",
        description: "Puran Poli, Misal Pav, Vada Pav, and coastal Malvani seafood.",
        image: placeholder("Maharashtra Misal Pav"),
        content:
          "From hearty Misal’s kat (spicy gravy) to delicate Malvani seafood, the spectrum runs from fiery to fragrant.\n" +
          "Sweets like Puran Poli mark festivals and family gatherings.",
      },
      {
        id: "art",
        title: "Art & Handicrafts",
        description: "Warli tribal art, Paithani saris, and Kolhapuri craftsmanship.",
        image: placeholder("Warli art on wall"),
        content:
          "Warli’s white-on-ochre geometry narrates daily life and rituals. Paithani looms weave peacock motifs in lustrous silks;\n" +
          "Kolhapuri artisans handcraft durable leather goods and jewelry.",
      },
      {
        id: "rituals",
        title: "Rituals & Customs",
        description: "Warkari pilgrimages highlight humility, equality, and service.",
        image: placeholder("Warkari devotion procession"),
        content:
          "The Wari pilgrimage to Pandharpur centers on kirtan, discipline, and equality—devotion expressed through walking,\n" +
          "service, and song.",
      },
    ],
    stories: [
      {
        id: "warkari-lesson",
        title: "The Pilgrim’s Water Pot",
        excerpt: "A shared sip on a hot day saves more than thirst.",
        content:
          "Two travelers quarreled over scarce water. A Warkari pilgrim offered his pot to both, saying “Service quenches two thirsts: the body’s and the heart’s.” They walked together after that.",
        moral: "Service softens conflict into companionship.",
      },
    ],
    gallery: [
      { src: placeholder("Gateway of India at dawn", 800, 450), alt: "Gateway of India" },
      { src: placeholder("Warli art pattern", 800, 450), alt: "Warli Art" },
    ],
    related: ["gujarat", "goa", "karnataka", "madhya-pradesh"],
  },
  {
    slug: "rajasthan",
    name: "Rajasthan",
    tagline: "Desert Palaces and Folk Splendor",
    heroImage: "/images/rajasthan/home.jpeg",
    about: "Rajasthan’s forts, miniature paintings, and folk music echo tales of resilience and hospitality.",
    cultureAspects: [
      {
        id: "festivals",
        title: "Festivals",
        description: "Desert Festival and Teej celebrate heritage with color and community.",
        image: placeholder("Rajasthan Desert Festival"),
        content:
          "The Desert Festival showcases folk arts, camel pageants, and dune concerts. Teej’s swings, songs, and monsoon rituals\n" +
          "celebrate renewal and marital harmony.",
      },
      {
        id: "dance",
        title: "Music & Dance",
        description: "Kalbeliya dance and Manganiyar music vibrate with grace and melody.",
        image: placeholder("Kalbeliya dancer with traditional dress"),
        content:
          "Kalbeliya’s serpentine movements, mirrorwork costumes, and ecstatic rhythm pair with Manganiyar’s haunting sarangi and\n" +
          "dholak to conjure desert nights.",
      },
      {
        id: "cuisine",
        title: "Cuisine",
        description: "Dal Baati Churma, Gatte ki Sabzi, and robust preserves for arid climes.",
        image: placeholder("Rajasthan Dal Baati Churma"),
        content:
          "Arid conditions shaped a cuisine of stored grains, clarified butter, and dried spices. Dal Baati Churma symbolizes\n" +
          "comfort, resilience, and festive sharing.",
      },
      {
        id: "art",
        title: "Art & Handicrafts",
        description: "Blue pottery, bandhani, and miniature paintings famed worldwide.",
        image: placeholder("Rajasthan blue pottery"),
        content:
          "Blue pottery’s quartz glaze shines in turquoise hues, bandhani ties create airy patterns, and miniature paintings\n" +
          "illuminate courts and epics with fine brushwork.",
      },
      {
        id: "rituals",
        title: "Rituals & Customs",
        description: "“Padharo Mhare Des” hospitality embodies warmth for guests.",
        image: placeholder("Rajasthan hospitality tradition"),
        content:
          "Hospitality is a moral code—offering water, shade, and meals to travelers in the desert binds communities together.",
      },
    ],
    stories: [
      {
        id: "camel-and-wind",
        title: "The Camel and the Wind",
        excerpt: "A humble shawl shields more than a storm.",
        content:
          "A traveler crossed the Thar when winds rose. A camel knelt, allowing the traveler to duck behind its hump. Together they reached a village. The traveler fed the camel first.",
        moral: "Gratitude strengthens bonds in harsh times.",
      },
    ],
    gallery: [
      { src: placeholder("Jaisalmer fort at sunset", 800, 450), alt: "Jaisalmer Fort" },
      { src: placeholder("Bandhani textile closeup", 800, 450), alt: "Bandhani" },
    ],
    related: ["gujarat", "punjab", "haryana", "uttar-pradesh", "madhya-pradesh"],
  },
  {
    slug: "tamil-nadu",
    name: "Tamil Nadu",
    tagline: "Classical Temples and Bharatanatyam",
    heroImage: "/images/tamil-nadu/home.jpeg",
    about:
      "Rooted in Sangam literature, Carnatic music, and Dravidian architecture, Tamil Nadu honors continuity and learning.",
    cultureAspects: [
      {
        id: "dance",
        title: "Music & Dance",
        description: "Bharatanatyam and Carnatic music shape the state’s classical aesthetic and devotion.",
        image: placeholder("Tamil Nadu Bharatanatyam costume"),
      },
      {
        id: "temples",
        title: "Temples & Architecture",
        description: "Dravidian gopurams in Madurai, Thanjavur, and Kanchipuram exemplify intricate craft.",
        image: placeholder("Tamil Nadu temple gopuram detail"),
      },
      {
        id: "cuisine",
        title: "Cuisine",
        description: "Idli, dosa, filter coffee, Chettinad spices, and festive plantain-leaf meals.",
        image: placeholder("Tamil Nadu dosa and filter coffee"),
      },
    ],
    gallery: [
      { src: placeholder("Meenakshi temple corridors", 800, 450), alt: "Meenakshi Temple" },
      { src: placeholder("Bharatanatyam performance stage", 800, 450), alt: "Bharatanatyam" },
    ],
    related: ["kerala", "karnataka", "andhra-pradesh"],
  },
  {
    slug: "delhi",
    name: "Delhi (NCT)",
    tagline: "Where Many Histories Meet",
    heroImage:"/images/delhi/home.jpeg",
    about: "A confluence of dynasties and diversity, Delhi reflects India’s plural ethos.",
    cultureAspects: [
      {
        id: "heritage",
        title: "Heritage",
        description: "Qutub Minar, Purana Qila, and Red Fort narrate shifting empires and styles.",
        image: placeholder("Delhi Red Fort walls"),
      },
      {
        id: "festivals",
        title: "Festivals",
        description: "Diwali, Eid, Gurpurab, and Christmas are celebrated with shared warmth.",
        image: placeholder("Delhi festival lights"),
      },
      {
        id: "cuisine",
        title: "Cuisine",
        description: "Street foods like chaat and parathas meet Mughlai flavors and modern cafés.",
        image: placeholder("Delhi chaat plate"),
      },
    ],
    gallery: [
      { src: placeholder("India Gate at dusk", 800, 450), alt: "India Gate" },
      { src: placeholder("Old Delhi spice market", 800, 450), alt: "Spice Market" },
    ],
    related: ["uttar-pradesh", "haryana", "punjab"],
  },

  // Brief entries for all remaining States & Union Territories
  /*{
    slug: "andhra-pradesh",
    name: "Andhra Pradesh",
    tagline: "Kuchipudi, temple towns, and coastal flavors",
    heroImage: "/images/andhra-pradesh/home.jpeg",
    about: "From Tirupati’s devotion to coastal flavors and Kuchipudi dance, Andhra blends faith, art, and enterprise.",
    cultureAspects: [
      {
        id: "dance",
        title: "Music & Dance",
        description: "Kuchipudi’s expressive abhinaya and rhythm thrive in village and stage settings.",
        image: placeholder("Andhra Kuchipudi performance"),
      },
      {
        id: "temples",
        title: "Temples",
        description: "Tirumala-Tirupati draws pilgrims seeking darshan and community seva.",
        image: placeholder("Andhra Tirupati temple steps"),
      },
      {
        id: "cuisine",
        title: "Cuisine",
        description: "Gongura, pesarattu, coastal seafood, and spicy pickles define hearty meals.",
        image: placeholder("Andhra thali with gongura"),
      },
    ],
    gallery: [
      { src: placeholder("Tirupati temple skyline", 800, 450), alt: "Tirupati" },
      { src: placeholder("Kuchipudi dancer pose", 800, 450), alt: "Kuchipudi" },
    ],
    related: ["telangana", "tamil-nadu", "karnataka", "odisha"],
  },*/
  {
  slug: "andhra-pradesh",
  name: "Andhra Pradesh",
  tagline: "Kuchipudi, temple towns, coastal flavors, sun-kissed beaches, and vibrant stories",
  heroImage: "/images/andhra-pradesh/home.jpeg",
  about: "Andhra Pradesh is a land of contrasts and culture: from the sacred Tirupati hills to sunlit beaches, from the rhythmic beats of Kuchipudi to the aromatic spices of coastal cuisine, the state embodies a rich tapestry of art, devotion, and natural beauty.",
  cultureAspects: [
    {
      id: "dance",
      title: "Music & Dance",
      description: "Kuchipudi’s expressive abhinaya, graceful movements, and intricate footwork flourish both on stage and in villages, capturing Andhra’s artistic spirit.",
      image: "/images/andhra-pradesh/kuchipudi.jpeg",
      content: "Kuchipudi, a classical dance form originating in the village of Kuchipudi, blends drama, devotion, and rhythm. Performers convey stories from epics like the Ramayana and Mahabharata through precise gestures, facial expressions, and vibrant costumes. Village performances often accompany temple festivals, while grand stages bring this ancient art to global audiences. Music, dance, and theatrical storytelling intertwine to preserve centuries-old traditions, making every performance a living heritage."
    },
    {
      id: "temples",
      title: "Temples",
      description: "Tirumala-Tirupati and other temple towns are centers of devotion, culture, and community bonding.",
      image: "/images/andhra-pradesh/tirupati.jpeg",
      content: "Tirupati’s Venkateswara Temple, perched on the sacred Tirumala Hills, attracts millions of pilgrims every year. Devotees participate in darshan, seva, and annual festivals such as Brahmotsavam, creating a rhythm of faith that shapes local life. Other temple towns like Srikalahasti, Vijayawada’s Kanaka Durga, and Simhachalam showcase a rich blend of architecture, mythology, and religious rituals, illustrating Andhra Pradesh’s deeply rooted spiritual traditions."
    },
    {
      id: "cuisine",
      title: "Cuisine",
      description: "Andhra cuisine is famed for its coastal seafood, tangy Gongura, fiery pickles, and wholesome curries that awaken the senses.",
      image: "/images/andhra-pradesh/coastal-food.jpeg",
      content: "From the spicy prawn and fish curries along the Godavari and Krishna deltas to the tangy Gongura pachadi, Andhra cuisine celebrates the bounty of the coast. Meals include aromatic rice, lentils, fresh vegetables, and vibrant condiments, each reflecting regional diversity. Coastal towns bring in freshly caught seafood daily, which is prepared in traditional recipes that balance spice, sourness, and umami. Festivals and weddings feature elaborate feasts, showcasing the culinary mastery passed down through generations."
    },
    {
      id: "beaches",
      title: "Beaches & Coastal Life",
      description: "Andhra Pradesh’s coastline offers golden sands, azure waters, and vibrant local life.",
      image: "/images/andhra-pradesh/beach.jpeg",
      content: "Rishikonda, Bheemili, and Rushikonda beaches are not just scenic spots—they are hubs of coastal traditions, festivals, and livelihoods. Fishing villages, local markets, and water sports coexist with serene stretches of sand where sunrise and sunset paint the horizon. Seasonal festivals celebrate the sea, community, and the cultural rhythms of life along the Andhra coast, making the beaches a living part of the state’s identity."
    }
  ],
  stories: [
    {
      id: "tirupati-lore",
      title: "The Divine Legend of Tirupati",
      excerpt: "How devotion, faith, and miracles shaped one of India’s holiest pilgrimage centers.",
      content: "Legend narrates that Lord Venkateswara appeared on Tirumala hills to bless humanity. Over centuries, countless devotees have experienced miracles and divine guidance here. Pilgrimage involves not only spiritual connection but also community participation, as devotees contribute through seva, charitable acts, and festival preparations. Tirupati today is a vibrant tapestry of faith, culture, and enduring traditions.",
      moral: "Faith nurtures community, devotion, and timeless traditions."
    },
    {
      id: "kanaka-durga-vijayawada",
      title: "Kanaka Durga of Vijayawada",
      excerpt: "A goddess revered on Indrakeeladri hill, inspiring courage, protection, and cultural devotion.",
      content: "The Kanaka Durga Temple, atop Indrakeeladri Hill overlooking the Krishna River, symbolizes divine courage. Annual festivals like Dasara draw pilgrims who witness rituals, processions, and devotional performances. The goddess’s presence has shaped the city’s identity for centuries, embedding courage, faith, and resilience into the local culture. Legends narrate her victory over demons, inspiring generations to embrace justice and valor.",
      moral: "Courage and devotion guide communities through time."
    },
  ],
  gallery: [
    { src: "/images/andhra-pradesh/vijayawada.jpeg", alt: "Vijayawada Kanakadurga Temple" },

    { src: "/images/andhra-pradesh/waterfalls.jpeg", alt: "Araku Waterfalls" }
    //{ src: "/images/andhra-pradesh/andhra-thali.jpeg", alt: "Andhra Cuisine" }
  ],
  related: ["telangana", "tamil-nadu", "karnataka", "odisha"],
},

  {
    slug: "arunachal-pradesh",
    name: "Arunachal Pradesh",
    tagline: "Dawn-lit mountains, monasteries, and vibrant festivals",
    heroImage: "/images/arunachal-pradesh/home.jpg",
    about: "Land of the dawn-lit mountains with diverse tribes, monasteries, and rich textile and bamboo craft.",
    cultureAspects: [
      {
        id: "festivals",
        title: "Festivals",
        description: "Losar and Solung celebrate harvest, kinship, and the rhythms of highland life.",
        image: placeholder("Arunachal Losar festival"),
      },
      {
        id: "craft",
        title: "Crafts",
        description: "Weaving, cane and bamboo work reflect precision and sustainable living.",
        image: placeholder("Arunachal woven textiles"),
      },
      {
        id: "faith",
        title: "Faith & Monasteries",
        description: "Tawang Monastery represents enduring Buddhist scholarship and culture.",
        image: placeholder("Arunachal Tawang Monastery"),
      },
    ],
    gallery: [
      { src: placeholder("Tawang monastery aerial", 800, 450), alt: "Tawang Monastery" },
      { src: placeholder("Bamboo craft close-up", 800, 450), alt: "Bamboo Craft" },
    ],
    related: ["assam", "sikkim", "nagaland"],
  },
  {
    slug: "assam",
    name: "Assam",
    tagline: "Tea gardens, Brahmaputra, and Bihu rhythms",
    heroImage: "/images/assam/home.jpeg",
    about: "Assam’s tea gardens, Bihu dance, and mighty Brahmaputra shape a culture of warmth and resilience.",
    cultureAspects: [
      {
        id: "dance",
        title: "Music & Dance",
        description: "Bihu dances celebrate seasons with dhol, pepa, and graceful movements.",
        image: placeholder("Assam Bihu performance"),
      },
      {
        id: "tea",
        title: "Tea Culture",
        description: "Tea plantations set the rhythm for livelihoods and global flavors.",
        image: placeholder("Assam tea plucking"),
      },
      {
        id: "cuisine",
        title: "Cuisine",
        description: "Fish curries, bamboo shoots, and mustard-based flavors define homestyle meals.",
        image: placeholder("Assamese fish curry"),
      },
    ],
    gallery: [
      { src: placeholder("Tea estates rolling hills", 800, 450), alt: "Tea Estates" },
      { src: placeholder("Brahmaputra river sunset", 800, 450), alt: "Brahmaputra" },
    ],
    related: ["arunachal-pradesh", "nagaland", "meghalaya"],
  },
  {
    slug: "bihar",
    name: "Bihar",
    tagline: "Nalanda legacy, Madhubani art, and sacred traditions",
    heroImage: "/images/bihar/home.jpeg",
    about: "Home to ancient universities and living arts, Bihar bridges scholarship, devotion, and folk creativity.",
    cultureAspects: [
      {
        id: "art",
        title: "Art & Handicrafts",
        description: "Madhubani (Mithila) painting narrates mythology in bold line and color.",
        image: placeholder("Bihar Madhubani painting"),
      },
      {
        id: "heritage",
        title: "Heritage & Faith",
        description: "Bodh Gaya’s enlightenment story inspires seekers around the world.",
        image: placeholder("Bodh Gaya Mahabodhi Temple"),
      },
      {
        id: "cuisine",
        title: "Cuisine",
        description: "Litti chokha and sweets like khaja reflect earthy, generous flavors.",
        image: placeholder("Bihar litti chokha"),
      },
    ],
    gallery: [
      { src: placeholder("Nalanda ruins courtyard", 800, 450), alt: "Nalanda" },
      { src: placeholder("Madhubani painting close-up", 800, 450), alt: "Madhubani" },
    ],
    related: ["jharkhand", "uttar-pradesh", "west-bengal"],
  },
  {
    slug: "chhattisgarh",
    name: "Chhattisgarh",
    tagline: "Tribal dance, forests, and folk craftsmanship",
    heroImage: "/images/chhattisgarh/home.jpeg",
    about: "Lush forests, indigenous dances, and bell metal craft define Chhattisgarh’s living heritage.",
    cultureAspects: [
      {
        id: "dance",
        title: "Folk Dance",
        description: "Panthi and Sua dance celebrate community and seasonal cycles.",
        image: placeholder("Chhattisgarh folk dance"),
      },
      {
        id: "craft",
        title: "Craft",
        description: "Dhokra (bell metal) and bamboo work showcase skill and sustainability.",
        image: placeholder("Chhattisgarh bell metal craft"),
      },
      {
        id: "cuisine",
        title: "Cuisine",
        description: "Chila, fara, and forest produce-based dishes reflect local abundance.",
        image: placeholder("Chhattisgarh traditional thali"),
      },
    ],
    gallery: [
      { src: placeholder("Tribal dance in village", 800, 450), alt: "Folk Dance" },
      { src: placeholder("Dhokra craft figurines", 800, 450), alt: "Dhokra Craft" },
    ],
    related: ["madhya-pradesh", "odisha", "jharkhand", "maharashtra"],
  },
  {
    slug: "goa",
    name: "Goa",
    tagline: "Beaches, churches, and carnival spirit",
    heroImage: "/images/goa/home.jpeg",
    about: "Coastal cuisine, Latin-Indian heritage, and easygoing susegad ethos shape Goa’s vibrant culture.",
    cultureAspects: [
      {
        id: "festivals",
        title: "Festivals",
        description: "Carnival, Shigmo, and church feasts bring color and music to streets.",
        image: placeholder("Goa Carnival parade"),
      },
      {
        id: "heritage",
        title: "Heritage",
        description: "Basilicas and old quarters blend baroque architecture with Konkan life.",
        image: placeholder("Goa Basilica of Bom Jesus"),
      },
      {
        id: "cuisine",
        title: "Cuisine",
        description: "Vindaloo, xacuti, bebinca, and seafood cooked with kokum and coconut.",
        image: placeholder("Goan fish curry"),
      },
    ],
    gallery: [
      { src: placeholder("Goa sunset beach", 800, 450), alt: "Beach Sunset" },
      { src: placeholder("Old Goa church facade", 800, 450), alt: "Old Goa" },
    ],
    related: ["maharashtra", "karnataka"],
  },
  {
    slug: "gujarat",
    name: "Gujarat",
    tagline: "Garba, stepwells, and the crafts of Kutch",
    heroImage: "/images/gujarat/home.jpeg",
    about: "From stepwells to salt deserts, Gujarat dances to Garba and thrives on enterprise and craft.",
    cultureAspects: [
      {
        id: "dance",
        title: "Festivals & Dance",
        description: "Navratri Garba circles light up nights with rhythm and community.",
        image: placeholder("Gujarat Garba dancers"),
      },
      {
        id: "craft",
        title: "Textiles & Craft",
        description: "Kutch embroidery and bandhani tell stories in thread and dye.",
        image: placeholder("Gujarat Kutch embroidery"),
      },
      {
        id: "cuisine",
        title: "Cuisine",
        description: "Dhokla, thepla, farsan, and sweet-salty flavors mark daily meals.",
        image: placeholder("Gujarat dhokla plate"),
      },
    ],
    gallery: [
      { src: placeholder("Rani ki Vav stepwell", 800, 450), alt: "Stepwell" },
      { src: placeholder("Kutch desert landscape", 800, 450), alt: "Rann of Kutch" },
    ],
    related: ["rajasthan", "maharashtra", "madhya-pradesh"],
  },
  {
    slug: "haryana",
    name: "Haryana",
    tagline: "Golden fields, akharas, and folk songs",
    heroImage: "/images/haryana/home.jpeg",
    about: "Farming traditions, akharas, and soulful ragni singing shape Haryana’s sturdy spirit.",
    cultureAspects: [
      {
        id: "music",
        title: "Music & Folk",
        description: "Ragni and saang theatre carry stories of valor and everyday wit.",
        image: placeholder("Haryana folk singers"),
      },
      {
        id: "sport",
        title: "Sport",
        description: "Wrestling akharas and kabaddi reflect strength and discipline.",
        image: placeholder("Haryana wrestling akhara"),
      },
      {
        id: "cuisine",
        title: "Cuisine",
        description: "Bajra rotis, lassi, and seasonal produce nourish farm life.",
        image: placeholder("Haryana rustic meal"),
      },
    ],
    gallery: [
      { src: placeholder("Mustard fields landscape", 800, 450), alt: "Mustard Fields" },
      { src: placeholder("Akhara training", 800, 450), alt: "Akhara" },
    ],
    related: ["punjab", "delhi", "uttar-pradesh", "rajasthan"],
  },
  {
    slug: "himachal-pradesh",
    name: "Himachal Pradesh",
    tagline: "Himalayan temples, apple orchards, and mountain dhams",
    heroImage: "/images/himachal-pradesh/home.jpeg",
    about: "Snow-capped shrines, wooden homes, and festival processions define Himachal’s mountain charm.",
    cultureAspects: [
      {
        id: "festivals",
        title: "Festivals",
        description: "Kullu Dussehra and village fairs honor deities with music and processions.",
        image: placeholder("Himachal Kullu Dussehra"),
      },
      {
        id: "craft",
        title: "Craft & Weaves",
        description: "Kullu shawls and wood carving reflect warmth and precision.",
        image: placeholder("Himachal Kullu shawls"),
      },
      {
        id: "cuisine",
        title: "Cuisine",
        description: "Dham feasts and trout dishes pair mountain harvests with hospitality.",
        image: placeholder("Himachal dham thali"),
      },
    ],
    gallery: [
      { src: placeholder("Temple in cedar forest", 800, 450), alt: "Mountain Temple" },
      { src: placeholder("Apple orchards hillside", 800, 450), alt: "Apple Orchards" },
    ],
    related: ["punjab", "uttarakhand", "jammu-and-kashmir"],
  },
  {
    slug: "jharkhand",
    name: "Jharkhand",
    tagline: "Forests, waterfalls, and indigenous heritage",
    heroImage: "/images/jharkhand/home.jpeg",
    about: "Rich in forests and minerals, Jharkhand’s dances and crafts celebrate nature and resilience.",
    cultureAspects: [
      {
        id: "dance",
        title: "Folk Dance",
        description: "Chhau and Jhumar express myth, harvest, and everyday life.",
        image: placeholder("Jharkhand Chhau dancers"),
      },
      {
        id: "craft",
        title: "Craft",
        description: "Stone and dokra metal craft record local legends and fauna.",
        image: placeholder("Jharkhand dokra craft"),
      },
      {
        id: "cuisine",
        title: "Cuisine",
        description: "Dhuska, pittha, and forest greens sustain energetic workdays.",
        image: placeholder("Jharkhand traditional dish"),
      },
    ],
    gallery: [
      { src: placeholder("Hundru waterfall", 800, 450), alt: "Waterfall" },
      { src: placeholder("Tribal craft market", 800, 450), alt: "Crafts" },
    ],
    related: ["bihar", "odisha", "chhattisgarh", "west-bengal"],
  },
  {
    slug: "karnataka",
    name: "Karnataka",
    tagline: "Hampi ruins, Yakshagana, and filter coffee",
    heroImage: "/images/karnataka/home.jpeg",
    about: "From Hampi’s stones to Bengaluru’s buzz, Karnataka blends heritage with innovation.",
    cultureAspects: [
      {
        id: "theatre",
        title: "Theatre & Dance",
        description: "Yakshagana’s elaborate costumes and music animate epic tales.",
        image: placeholder("Karnataka Yakshagana stage"),
      },
      {
        id: "heritage",
        title: "Heritage",
        description: "Hampi and Belur-Halebidu showcase temple sculpture and urban history.",
        image: placeholder("Karnataka Hampi temple ruins"),
      },
      {
        id: "cuisine",
        title: "Cuisine",
        description: "Bisi bele bath, ragi mudde, and filter coffee fuel daily life.",
        image: placeholder("Karnataka filter coffee"),
      },
    ],
    gallery: [
      { src: placeholder("Stone chariot Hampi", 800, 450), alt: "Hampi" },
      { src: placeholder("Coffee plantations Coorg", 800, 450), alt: "Coffee Estates" },
    ],
    related: ["tamil-nadu", "andhra-pradesh", "maharashtra", "goa", "kerala"],
  },
  {
    slug: "madhya-pradesh",
    name: "Madhya Pradesh",
    tagline: "Heart of India: temples, wildlife, and ghats",
    heroImage: "/images/madhya-pradesh/home.jpeg",
    about: "The heart of India holds rock art, temple towns, and forests rich with wildlife.",
    cultureAspects: [
      {
        id: "heritage",
        title: "Heritage",
        description: "Khajuraho temples and Bhimbetka rock shelters span centuries of art.",
        image: placeholder("MP Khajuraho carvings"),
      },
      {
        id: "music",
        title: "Music",
        description: "Gwalior gharana preserves classical training and innovation.",
        image: placeholder("MP classical music performance"),
      },
      {
        id: "cuisine",
        title: "Cuisine",
        description: "Poha, bhutte ka kees, and tribal recipes reflect regional diversity.",
        image: placeholder("MP poha breakfast"),
      },
    ],
    gallery: [
      { src: placeholder("Sanchi stupa view", 800, 450), alt: "Sanchi Stupa" },
      { src: placeholder("Narmada ghats at dusk", 800, 450), alt: "Narmada Ghats" },
    ],
    related: ["maharashtra", "gujarat", "chhattisgarh", "uttar-pradesh", "rajasthan"],
  },
  {
    slug: "manipur",
    name: "Manipur",
    tagline: "Ras Lila grace, polo origins, and serene lakes",
    heroImage: "/images/manipur/home.jpeg",
    about: "Graceful Ras Lila, handloom traditions, and Loktak’s floating phumdis define Manipur’s beauty.",
    cultureAspects: [
      {
        id: "dance",
        title: "Dance & Devotion",
        description: "Ras Lila’s delicate storytelling moves hearts across generations.",
        image: placeholder("Manipur Ras Lila dancers"),
      },
      {
        id: "handloom",
        title: "Handloom",
        description: "Intricate shawls and phaneks show refined patterns and colors.",
        image: placeholder("Manipur handloom weaving"),
      },
      {
        id: "cuisine",
        title: "Cuisine",
        description: "Eromba, singju, and fish-based dishes feature fresh herbs and simplicity.",
        image: placeholder("Manipur traditional dish"),
      },
    ],
    gallery: [
      { src: placeholder("Loktak lake aerial", 800, 450), alt: "Loktak Lake" },
      { src: placeholder("Handloom market stall", 800, 450), alt: "Handloom" },
    ],
    related: ["mizoram", "nagaland", "assam"],
  },
  {
    slug: "meghalaya",
    name: "Meghalaya",
    tagline: "Living root bridges, misty hills, and Khasi culture",
    heroImage: "/images/meghalaya/home.jpeg",
    about: "Cloud-kissed hills, matrilineal traditions, and living root bridges mark Meghalaya’s harmony with nature.",
    cultureAspects: [
      {
        id: "traditions",
        title: "Traditions",
        description: "Khasi and Garo customs honor kinship, music, and land.",
        image: placeholder("Meghalaya Khasi attire"),
      },
      {
        id: "bridges",
        title: "Living Bridges",
        description: "Centuries-old root bridges embody patient craft and ecology.",
        image: placeholder("Meghalaya living root bridge path"),
      },
      {
        id: "cuisine",
        title: "Cuisine",
        description: "Jadoh rice and smoked meats reflect highland flavors.",
        image: placeholder("Meghalaya jadoh dish"),
      },
    ],
    gallery: [
      { src: placeholder("Cherrapunji valleys", 800, 450), alt: "Cherrapunji" },
      { src: placeholder("Root bridge walkway", 800, 450), alt: "Root Bridge" },
    ],
    related: ["assam", "mizoram", "tripura"],
  },
  {
    slug: "mizoram",
    name: "Mizoram",
    tagline: "Zoram hills, handlooms, and bamboo craft",
    heroImage: "/images/mizoram/home.jpeg",
    about: "Rolling hills, chhangban handlooms, and community festivals shape Mizoram’s close-knit culture.",
    cultureAspects: [
      {
        id: "dance",
        title: "Dance",
        description: "Cheraw (bamboo dance) blends rhythm, coordination, and grace.",
        image: placeholder("Mizoram Cheraw dance"),
      },
      {
        id: "handloom",
        title: "Handloom",
        description: "Vibrant shawls and puans feature precise geometric designs.",
        image: placeholder("Mizoram shawl weaving"),
      },
      {
        id: "cuisine",
        title: "Cuisine",
        description: "Steamed dishes, bamboo shoots, and smoked meats offer light, fresh flavors.",
        image: placeholder("Mizoram bamboo shoot dish"),
      },
    ],
    gallery: [
      { src: placeholder("Aizawl city hills", 800, 450), alt: "Aizawl" },
      { src: placeholder("Bamboo dance sticks", 800, 450), alt: "Cheraw" },
    ],
    related: ["manipur", "tripura", "assam"],
  },
  {
    slug: "nagaland",
    name: "Nagaland",
    tagline: "Hornbill festival, hills, and warrior traditions",
    heroImage: "/images/nagaland/home.jpeg",
    about: "Distinct tribes, crafts, and choral music come together at festivals like Hornbill.",
    cultureAspects: [
      {
        id: "festivals",
        title: "Festivals",
        description: "Hornbill showcases dance, music, and inter-tribal exchange.",
        image: placeholder("Nagaland Hornbill performance"),
      },
      {
        id: "craft",
        title: "Crafts",
        description: "Woodwork, bead jewelry, and shawls reflect identity and skill.",
        image: placeholder("Nagaland beadwork"),
      },
      {
        id: "cuisine",
        title: "Cuisine",
        description: "Smoked meats and bamboo shoot preparations with local herbs.",
        image: placeholder("Nagaland smoked meat"),
      },
    ],
    gallery: [
      { src: placeholder("Hornbill festival arena", 800, 450), alt: "Hornbill Festival" },
      { src: placeholder("Traditional Naga shawl", 800, 450), alt: "Naga Shawl" },
    ],
    related: ["assam", "manipur", "arunachal-pradesh"],
  },
  {
    slug: "odisha",
    name: "Odisha",
    tagline: "Jagannath culture, Odissi dance, and temple arts",
    heroImage: "/images/odisha/home.jpeg",
    about: "Jagannath devotion, Odissi dance, and temple sculpture define Odisha’s classical heart.",
    cultureAspects: [
      {
        id: "dance",
        title: "Dance",
        description: "Odissi’s fluid stances and abhinaya recount timeless stories.",
        image: placeholder("Odisha Odissi dancer"),
      },
      {
        id: "temples",
        title: "Temples & Arts",
        description: "Konark’s stone chariot and Puri’s rituals anchor heritage.",
        image: placeholder("Konark Sun Temple detail"),
      },
      {
        id: "cuisine",
        title: "Cuisine",
        description: "Pakhala, chenna poda, and temple mahaprasad are cherished staples.",
        image: placeholder("Odisha pakhala dish"),
      },
    ],
    gallery: [
      { src: placeholder("Puri beach and temple", 800, 450), alt: "Puri" },
      { src: placeholder("Konark temple carvings", 800, 450), alt: "Konark" },
    ],
    related: ["andhra-pradesh", "chhattisgarh", "west-bengal", "jharkhand"],
  },
  {
    slug: "punjab",
    name: "Punjab",
    tagline: "Five rivers, Bhangra beats, and langar spirit",
    heroImage: "/images/punjab/home.jpeg",
    about: "Farming pride, Gurdwaras’ langar, and Bhangra’s energy underscore Punjab’s generosity.",
    cultureAspects: [
      {
        id: "music",
        title: "Music & Dance",
        description: "Bhangra and Giddha celebrate joy with dhol and vibrant moves.",
        image: placeholder("Punjab Bhangra dancers"),
      },
      {
        id: "faith",
        title: "Faith & Service",
        description: "Langar kitchens feed all, embodying equality and care.",
        image: placeholder("Punjab langar hall"),
      },
      {
        id: "cuisine",
        title: "Cuisine",
        description: "Sarson da saag, makki di roti, and lassi warm winter tables.",
        image: placeholder("Punjab saag and roti"),
      },
    ],
    gallery: [
      { src: placeholder("Golden Temple reflection", 800, 450), alt: "Golden Temple" },
      { src: placeholder("Mustard fields track", 800, 450), alt: "Fields" },
    ],
    related: ["haryana", "delhi", "rajasthan", "himachal-pradesh"],
  },
  {
    slug: "sikkim",
    name: "Sikkim",
    tagline: "Monasteries, snow peaks, and organic harmony",
    heroImage: "/images/sikkim/home.jpeg",
    about: "Organic farms, Buddhist monasteries, and mountain passes make Sikkim serene and sustainable.",
    cultureAspects: [
      {
        id: "faith",
        title: "Monasteries & Faith",
        description: "Rumtek and Pemayangtse preserve scholarship and ritual arts.",
        image: placeholder("Sikkim monastery murals"),
      },
      {
        id: "festivals",
        title: "Festivals",
        description: "Losar and Pang Lhabsol honor nature and guardians of the land.",
        image: placeholder("Sikkim festival prayer flags"),
      },
      {
        id: "cuisine",
        title: "Cuisine",
        description: "Momos, thukpa, and fermented flavors suit the mountain climate.",
        image: placeholder("Sikkim momos"),
      },
    ],
    gallery: [
      { src: placeholder("Snow peaks and prayer flags", 800, 450), alt: "Peaks" },
      { src: placeholder("Organic farm terraces", 800, 450), alt: "Terraces" },
    ],
    related: ["west-bengal", "arunachal-pradesh"],
  },
  {
    slug: "telangana",
    name: "Telangana",
    tagline: "Charminar charm, Deccani flavors, and Bonalu",
    heroImage: "/images/telangana/hero.jpeg",
    about: "Hyderabad’s pearls, Deccani cuisine, and Bonalu festivities reflect Telangana’s rich fusion.",
    cultureAspects: [
      {
      id: "charminar",
      title: "Charminar – Symbol of Hyderabad",
      description:
        "Built in 1591, the Charminar stands as a symbol of Hyderabad’s glorious past under the Qutb Shahi dynasty. Its Indo-Islamic architecture, intricate stucco work, and bustling bazaars around it, like Laad Bazaar, reflect the city’s old-world charm and cultural richness.",
      image: "/images/telangana/charminar.jpeg",
      content:
        "Charminar, located in the heart of Hyderabad, was built by Sultan Muhammad Quli Qutb Shah. It represents the founding of the city and the end of a deadly plague. Surrounding it are aromatic food stalls, pearl shops, and artisans preserving centuries-old crafts.",
    },
    {
      id: "bonalu",
      title: "Bonalu – Festival of Strength and Faith",
      description:
        "Bonalu, celebrated with grandeur across Telangana, honors Goddess Mahakali. Women carry decorated pots filled with offerings, while men perform Pothuraju dances, symbolizing protection and devotion.",
      image: "/images/telangana/bonalu.jpeg",
      content:
        "Originating in Hyderabad and Secunderabad, Bonalu reflects Telangana’s matriarchal spiritual traditions. Every July–August, the streets come alive with rhythmic drums, chants, and community feasts as devotees thank the Goddess for prosperity and protection.",
    },
    {
      id: "bathukamma",
      title: "Bathukamma – Celebration of Flowers and Womanhood",
      description:
        "Bathukamma is Telangana’s floral festival symbolizing the strength, spirit, and grace of women. It features colorful flower stacks arranged in concentric layers and celebrated with songs and dance.",
      image: "/images/telangana/bathukamma.jpeg",
      content:
        "Bathukamma, celebrated during Navratri, showcases seasonal flowers like Gunuka and Tangedu. Women gather in vibrant attire, form circles around the flower stacks, and sing folk songs that celebrate life and nature.",
    },
    {
      id: "cuisine",
      title: "Delectable Biryani & Haleem",
      description:
        "Telangana cuisine is a royal fusion of spicy local flavors and Nizami delicacies. Hyderabad’s Biryani and Ramadan-special Haleem represent the culinary legacy that connects tradition with taste.",
      image: "/images/telangana/biryani.jpeg",
      content:
        "Hyderabadi Biryani, cooked with basmati rice, saffron, and marinated meat, embodies centuries of Mughlai and Telugu influence. During Ramadan, Haleem — a slow-cooked wheat and meat delicacy — unites communities in celebration and flavor.",
    },
    {
      id: "it-sector",
      title: "Hyderabad’s IT Hub – The Modern Face of Telangana",
      description:
        "Hyderabad, home to HITEC City and global tech giants, showcases Telangana’s transformation into a digital powerhouse while maintaining its cultural soul.",
      image: "/images/telangana/hitec-city.jpeg",
      content:
        "Known as ‘Cyberabad’, Hyderabad houses companies like Microsoft, Google, and Amazon. Its futuristic skyline, innovation ecosystem, and world-class infrastructure coexist with centuries-old monuments — a true reflection of Telangana’s dual identity.",
    },
    ],
    stories: [
    {
      id: "bathukamma-blessing",
      title: "The Bathukamma Blessing",
      excerpt: "A girl’s floral devotion restores her village’s prosperity.",
      content:
        "Long ago, in a drought-stricken village near Siddipet, people despaired as their lakes dried and crops failed. Amidst this struggle, a little girl named Mallamma gathered wild flowers from the parched fields and arranged them in layers, forming a vibrant tower. She placed it before the village temple, whispering prayers for life to return. Seeing her innocence, the villagers joined her, each bringing flowers, singing songs to the Mother Goddess.\n\nAs dusk fell, clouds gathered. A gentle rain began, soaking the earth with renewal. The fields turned green again, and the lakes filled with life. The people named the celebration ‘Bathukamma’ — meaning ‘Mother, come alive.’ To this day, Telangana women gather in colorful sarees, sing folk songs, and offer floral devotion, remembering Mallamma’s prayer that brought hope.",
      moral: "Faith and gratitude invite abundance.",
    },
    {
      id: "kakatiya-rudramadevi",
      title: "Rudramadevi — The Kakatiya Queen",
      excerpt:
        "A fearless queen who led with wisdom, valor, and equality in an age of kings.",
      content:
        "In the heart of the Deccan plateau rose the magnificent Kakatiya Empire, ruled by a name that would echo through centuries — Rani Rudramadevi. Born to King Ganapati Deva, she was trained in the art of war, diplomacy, and justice. To ensure she was accepted in a male-dominated court, she was raised as a prince — Rudradeva.\n\nWhen she ascended the throne, nobles doubted her, but the queen proved her strength through action, not words. She restructured the army, built reservoirs for farmers, and fortified Warangal with impregnable stone walls and grand gateways. Under her rule, trade flourished, and art and architecture reached their golden age.\n\nDuring invasions, Rudramadevi herself rode at the frontlines in armor, inspiring her soldiers with unmatched courage. Even her enemies bowed to her valor. Her reign was a beacon of gender equality and administrative brilliance — a time when Telangana’s spirit of resilience and pride took form in the mighty Kakatiya fortresses that still stand today.",
      moral: "True leadership transcends gender—it lies in courage, compassion, and vision.",
    },
  ],
    gallery: [
      { src:"/images/telangana/golkonda.jpeg", alt: "Golconda" },
      { src: "/images/telangana/thousand-pillars.jpeg", alt: "Warangal" },
    ],
    related: ["andhra-pradesh", "karnataka", "maharashtra"],
  },
  {
    slug: "tripura",
    name: "Tripura",
    tagline: "Royal palaces, bamboo crafts, and folk tales",
    heroImage: "/images/tripura/home.jpeg",
    about: "Ujjayanta Palace, bamboo crafts, and diverse tribes make Tripura quietly captivating.",
    cultureAspects: [
      {
        id: "craft",
        title: "Bamboo Craft",
        description: "Bamboo weaving provides artful utility across homes and markets.",
        image: placeholder("Tripura bamboo weaving"),
      },
      {
        id: "dance",
        title: "Dance",
        description: "Hojagiri’s balancing feats celebrate skill and grace.",
        image: placeholder("Tripura Hojagiri dance"),
      },
      {
        id: "cuisine",
        title: "Cuisine",
        description: "Mui Borok dishes feature bamboo shoots and freshwater fish.",
        image: placeholder("Tripura traditional cuisine"),
      },
    ],
    gallery: [
      { src: placeholder("Ujjayanta Palace facade", 800, 450), alt: "Ujjayanta Palace" },
      { src: placeholder("Tribal dance performance", 800, 450), alt: "Folk Dance" },
    ],
    related: ["assam", "mizoram", "meghalaya"],
  },
  /*{
    slug: "uttar-pradesh",
    name: "Uttar Pradesh",
    tagline: "Kumbh spirit, sacred ghats, and the Taj",
    heroImage: "/images/uttar-pradesh/home.jpeg",
    about: "From Varanasi’s ghats to Agra’s Taj, UP anchors sacred journeys and Mughal heritage.",
    cultureAspects: [
      {
        id: "faith",
        title: "Faith & Ghats",
        description: "Aarti at the Ganga ghats offers peace and continuity.",
        image: placeholder("Varanasi ghat aarti"),
      },
      {
        id: "heritage",
        title: "Heritage",
        description: "Taj Mahal’s marble poetry meets nawabi tehzeeb of Awadh.",
        image: placeholder("Taj Mahal dawn view"),
      },
      {
        id: "cuisine",
        title: "Cuisine",
        description: "Tunday kebabs, kachori-sabzi, and sweets like peda delight palates.",
        image: placeholder("Lucknowi kebabs"),
      },
    ],
    gallery: [
      { src: placeholder("Ganga aarti on ghats", 800, 450), alt: "Ganga Aarti" },
      { src: placeholder("Taj Mahal reflection pools", 800, 450), alt: "Taj Mahal" },
    ],
    related: ["uttarakhand", "delhi", "rajasthan", "madhya-pradesh", "bihar"],
  },*/
  {
  slug: "uttar-pradesh",
  name: "Uttar Pradesh",
  tagline: "Land of Taj Mahal, Ram Mandir, Varanasi ghats, and vibrant traditions",
  heroImage: "/images/uttar-pradesh/home.jpeg",
  about: "Uttar Pradesh is India’s cultural heartbeat, blending Mughal monuments, sacred temples, ghats of Varanasi, and festivals that resonate across centuries. From the Taj Mahal’s grandeur to life along the Ganges, every corner reflects devotion, artistry, and history.",
  cultureAspects: [
    {
      id: "monuments",
      title: "Monuments",
      description: "From the Taj Mahal to Mughal forts, UP preserves timeless architectural marvels.",
      image: "/images/uttar-pradesh/taj-mahal.jpeg",
      content: "The Taj Mahal in Agra, a UNESCO World Heritage site, epitomizes Mughal architecture with its white marble domes and intricate inlay work. Forts like Agra Fort and Fatehpur Sikri showcase royal history, artistry, and grandeur. These monuments draw millions of tourists and serve as symbols of India’s rich historical legacy."
    },
    {
      id: "temples",
      title: "Temples & Pilgrimage",
      description: "Sacred sites like Ram Mandir in Ayodhya and Kashi Vishwanath in Varanasi inspire devotion across India.",
      image: "/images/uttar-pradesh/ram.jpeg",
      content: "Ayodhya, believed to be Lord Rama’s birthplace, has been a center of devotion for millennia. The Ram Mandir now stands as a spiritual landmark, attracting devotees globally. Varanasi, one of the world’s oldest living cities, thrives along the Ganges with rituals, ghats, and daily ceremonies that echo spirituality and continuity of faith."
    },
    {
      id: "varanasi-ghats",
      title: "Varanasi & Ganga Ghats",
      description: "Life along the Ganges from birth rituals to last rites reveals a city steeped in spirituality.",
      image: "/images/uttar-pradesh/varanasi.jpeg",
      content: "Varanasi, the oldest living city in India, is a cultural and spiritual hub. The ghats along the Ganga witness every stage of life—baptisms, daily prayers, meditation, festivals, and cremations. The continuous cycle of life, death, and devotion creates a unique living heritage, embodying centuries of rituals, music, and storytelling."
    },
    {
      id: "cuisine",
      title: "Cuisine & Delicacies",
      description: "Mughlai flavors, kebabs, and sweets like petha and gujiyas define UP’s culinary heritage.",
      image: "/images/uttar-pradesh/food.jpeg",
      content: "Lucknow’s kebabs, biryani, and Mughlai curries reflect royal culinary traditions. Mathura’s petha, Banarasi sweets, and street food along ghats capture local flavors. Festivals and weddings feature elaborate spreads, highlighting the diversity and richness of UP cuisine."
    }
  ],
  stories: [
    {
      id: "taj-mahal-legend",
      title: "The Eternal Love of Taj Mahal",
      excerpt: "Shah Jahan’s tribute to Mumtaz Mahal immortalized in marble.",
      content: "Built in the 17th century, the Taj Mahal is not only an architectural masterpiece but also a symbol of eternal love. Its gardens, reflecting pools, and intricate carvings narrate a story of devotion and artistry, drawing millions of visitors each year.",
      moral: "Love and dedication can leave timeless legacies."
    },
    {
      id: "ram-mandir-ayat",
      title: "The Spiritual Heart of Ayodhya",
      excerpt: "Ayodhya, the birthplace of Lord Rama, inspires devotion and pilgrimage.",
      content: "The Ram Mandir stands as a symbol of faith and resilience. Devotees flock to witness rituals, festivals, and ceremonies that have been preserved for generations. Pilgrimage here intertwines spirituality with cultural celebration.",
      moral: "Faith sustains communities through centuries."
    },
  ],
  gallery: [

    { src: "/images/uttar-pradesh/holi.jpeg", alt: "Holi in Mathura" }
  ],
  related: ["rajasthan", "uttarakhand", "bihar", "madhya-pradesh"]
},
{
    slug: "uttarakhand",
    name: "Uttarakhand",
    tagline: "Himalayan shrines, Ganga source, and folk songs",
    heroImage: "/images/uttarakhand/home.jpeg",
    about: "Devbhumi’s pilgrim routes, folk songs, and alpine meadows inspire devotion and adventure.",
    cultureAspects: [
      {
        id: "pilgrimage",
        title: "Pilgrimage",
        description: "Char Dham yatra binds landscapes with faith and service.",
        image: placeholder("Uttarakhand Kedarnath trail"),
      },
      {
        id: "folk",
        title: "Folk Music",
        description: "Jhora and Chancheri echo across valleys during community events.",
        image: placeholder("Uttarakhand folk instruments"),
      },
      {
        id: "cuisine",
        title: "Cuisine",
        description: "Bhatt ki churkani and mandua roti suit cool mountain climates.",
        image: placeholder("Uttarakhand mountain meal"),
      },
    ],
    gallery: [
      { src: placeholder("Himalayan meadow trek", 800, 450), alt: "Meadows" },
      { src: placeholder("Temple above clouds", 800, 450), alt: "Mountain Shrine" },
    ],
    related: ["uttar-pradesh", "himachal-pradesh", "delhi"],
  },
  {
    slug: "west-bengal",
    name: "West Bengal",
    tagline: "Durga Puja, adda, and the arts of Bengal",
    heroImage: "/images/west-bengal/home.jpeg",
    about: "Poetry, theatre, and Durga Puja processions animate Bengal’s artistic and intellectual life.",
    cultureAspects: [
      {
        id: "festivals",
        title: "Festivals",
        description: "Durga Puja pandals transform neighborhoods into creative hubs.",
        image: placeholder("Kolkata Durga Puja pandal"),
      },
      {
        id: "arts",
        title: "Arts & Letters",
        description: "Tagore’s legacy, theatre, and cinema shape cultural discourse.",
        image: placeholder("Rabindra Sangeet performance"),
      },
      {
        id: "cuisine",
        title: "Cuisine",
        description: "Machher jhol, kosha mangsho, and mishti doi balance spice and sweet.",
        image: placeholder("Bengali thali fish curry"),
      },
    ],
    gallery: [
      { src: placeholder("Howrah bridge evening", 800, 450), alt: "Howrah Bridge" },
      { src: placeholder("Kumartuli idol making", 800, 450), alt: "Kumartuli" },
    ],
    related: ["bihar", "jharkhand", "sikkim", "assam"],
  },

  // Union Territories
  {
    slug: "andaman-and-nicobar-islands",
    name: "Andaman & Nicobar Islands",
    tagline: "Coral shores, island tribes, and turquoise lagoons",
    heroImage: "/images/andaman-and-nicobar-islands/home.jpeg",
    about: "Pristine reefs, layered histories, and island communities define Andaman’s maritime character.",
    cultureAspects: [
      {
        id: "marine",
        title: "Marine Life",
        description: "Coral gardens and clear waters sustain diverse livelihoods.",
        image: placeholder("Andaman coral reef"),
      },
      {
        id: "heritage",
        title: "Heritage",
        description: "Cellular Jail stands as a solemn reminder of freedom struggles.",
        image: placeholder("Andaman Cellular Jail"),
      },
      {
        id: "cuisine",
        title: "Cuisine",
        description: "Fresh seafood, coconut, and island spices flavor daily meals.",
        image: placeholder("Andaman seafood platter"),
      },
    ],
    gallery: [
      { src: placeholder("Turquoise lagoon shore", 800, 450), alt: "Lagoon" },
      { src: placeholder("Cellular Jail arches", 800, 450), alt: "Cellular Jail" },
    ],
    related: ["tamil-nadu", "west-bengal"],
  },
  {
    slug: "chandigarh",
    name: "Chandigarh",
    tagline: "Modernist city, gardens, and boulevards",
    heroImage: "/images/chandigarh/home.jpeg",
    about: "Planned modernism, gardens, and shared Punjab-Haryana culture give Chandigarh a unique identity.",
    cultureAspects: [
      {
        id: "architecture",
        title: "Architecture",
        description: "Capitol Complex and sector planning reflect modernist ideals.",
        image: placeholder("Chandigarh Secretariat building"),
      },
      {
        id: "gardens",
        title: "Gardens",
        description: "Rock Garden and Sukhna Lake offer artful recreation spaces.",
        image: placeholder("Chandigarh Rock Garden sculptures"),
      },
      {
        id: "cuisine",
        title: "Cuisine",
        description: "North Indian classics and café culture meet in leafy sectors.",
        image: placeholder("Chandigarh Punjabi thali"),
      },
    ],
    gallery: [
      { src: placeholder("Sukhna Lake promenade", 800, 450), alt: "Sukhna Lake" },
      { src: placeholder("Rock Garden mosaic", 800, 450), alt: "Rock Garden" },
    ],
    related: ["punjab", "haryana", "himachal-pradesh"],
  },
  {
    slug: "dadra-and-nagar-haveli-and-daman-and-diu",
    name: "Dadra & Nagar Haveli and Daman & Diu",
    tagline: "Coastal forts, fusion cultures, and seafaring past",
    heroImage: "/images/dadra-and-nagar-haveli-and-daman-and-diu/home.jpeg",
    about: "Portuguese-era forts, beaches, and tribal crafts shape these linked coastal and inland regions.",
    cultureAspects: [
      {
        id: "heritage",
        title: "Heritage",
        description: "Seaside forts and churches narrate maritime exchanges.",
        image: placeholder("Diu sea fort walls"),
      },
      {
        id: "craft",
        title: "Craft & Life",
        description: "Warli-style art and bamboo crafts sustain village economies.",
        image: placeholder("Dadra Nagar Haveli craft"),
      },
      {
        id: "cuisine",
        title: "Cuisine",
        description: "Seafood and coconut meet Gujarati influences in daily fare.",
        image: placeholder("Daman seafood curry"),
      },
    ],
    gallery: [
      { src: placeholder("Diu fort lighthouse view", 800, 450), alt: "Diu Fort" },
      { src: placeholder("Village craft market", 800, 450), alt: "Craft Market" },
    ],
    related: ["gujarat", "maharashtra", "goa"],
  },
  {
    slug: "jammu-and-kashmir",
    name: "Jammu & Kashmir",
    tagline: "Valleys, houseboats, pashmina, and saffron",
    heroImage: "/images/jammu-and-kashmir/home.jpeg",
    about: "Sufi poetry, wazwan cuisine, and alpine vistas make the valley unforgettable.",
    cultureAspects: [
      {
        id: "craft",
        title: "Crafts",
        description: "Pashmina, papier-mâché, and woodwork embody fine craftsmanship.",
        image: placeholder("Kashmir pashmina weaving"),
      },
      {
        id: "cuisine",
        title: "Cuisine",
        description: "Wazwan feasts and kahwa tea warm cold evenings.",
        image: placeholder("Kashmiri wazwan spread"),
      },
      {
        id: "music",
        title: "Music & Verse",
        description: "Sufi and folk melodies echo through orchards and lakes.",
        image: placeholder("Kashmir santoor player"),
      },
    ],
    gallery: [
      { src: placeholder("Dal Lake houseboats", 800, 450), alt: "Dal Lake" },
      { src: placeholder("Saffron fields", 800, 450), alt: "Saffron" },
    ],
    related: ["himachal-pradesh", "ladakh", "punjab"],
  },
  {
    slug: "ladakh",
    name: "Ladakh",
    tagline: "High passes, monasteries, and starlit skies",
    heroImage: "/images/ladakh/home.jpeg",
    about: "High-altitude deserts, Tibetan Buddhist monasteries, and resilient villages define Ladakh.",
    cultureAspects: [
      {
        id: "monasteries",
        title: "Monasteries",
        description: "Hemis and Thiksey host masked dances and spiritual learning.",
        image: placeholder("Ladakh Hemis monastery masks"),
      },
      {
        id: "life",
        title: "Mountain Life",
        description: "Terraced fields and mud homes adapt to extreme climates.",
        image: placeholder("Ladakh village terraces"),
      },
      {
        id: "cuisine",
        title: "Cuisine",
        description: "Thukpa, momos, and butter tea support high-altitude living.",
        image: placeholder("Ladakh butter tea"),
      },
    ],
    gallery: [
      { src: placeholder("Pangong lake blue", 800, 450), alt: "Pangong Tso" },
      { src: placeholder("Starlit sky over gompa", 800, 450), alt: "Gompa at Night" },
    ],
    related: ["jammu-and-kashmir", "himachal-pradesh"],
  },
  {
    slug: "lakshadweep",
    name: "Lakshadweep",
    tagline: "Coral atolls, lagoons, and quiet rhythms",
    heroImage: "/images/lakshadweep/home.jpeg",
    about: "Tiny atolls, coconut groves, and tranquil lagoons create a delicate island culture.",
    cultureAspects: [
      {
        id: "marine",
        title: "Marine Life",
        description: "Coral reefs support fishing, craft, and careful stewardship.",
        image: placeholder("Lakshadweep coral garden"),
      },
      {
        id: "craft",
        title: "Craft",
        description: "Coir products and boat-making sustain traditional livelihoods.",
        image: placeholder("Lakshadweep coir craft"),
      },
      {
        id: "cuisine",
        title: "Cuisine",
        description: "Fish curries with coconut and local spices are everyday comfort.",
        image: placeholder("Lakshadweep fish curry"),
      },
    ],
    gallery: [
      { src: placeholder("Lagoon and reef edge", 800, 450), alt: "Lagoon" },
      { src: placeholder("Coconut palms shoreline", 800, 450), alt: "Coconut Shore" },
    ],
    related: ["kerala", "tamil-nadu"],
  },
  {
    slug: "pondicherry",
    name: "Puducherry",
    tagline: "French quarter charm, ashram calm, and beaches",
    heroImage: "/images/pondicherry/home.jpeg",
    about: "Auroville ideals, French heritage streets, and Tamil culture blend along calm shores.",
    cultureAspects: [
      {
        id: "heritage",
        title: "Heritage",
        description: "Pastel facades, bougainvillea lanes, and seaside promenades.",
        image: placeholder("Puducherry French quarter street"),
      },
      {
        id: "spirituality",
        title: "Spirituality",
        description: "Sri Aurobindo Ashram and Auroville explore mindful living.",
        image: placeholder("Puducherry ashram courtyard"),
      },
      {
        id: "cuisine",
        title: "Cuisine",
        description: "Fresh seafood, Franco-Tamil bakes, and café culture by the sea.",
        image: placeholder("Puducherry café pastries"),
      },
    ],
    gallery: [
      { src: placeholder("Promenade sunrise", 800, 450), alt: "Promenade" },
      { src: placeholder("Pastel heritage homes", 800, 450), alt: "Heritage Homes" },
    ],
    related: ["tamil-nadu", "andhra-pradesh", "kerala"],
  },
]

export function getAllStatesBrief(): StateBrief[] {
  return ALL.map(({ slug, name, tagline, heroImage }) => ({
    slug,
    name,
    tagline,
    heroImage: heroImage ?? placeholder(`${name} culture`),
  }))
}

export function getStateBySlug(slug: string): StateData | undefined {
  return ALL.find((s) => s.slug === slug)
}

export function getRelatedStates(slugs: string[]) {
  return getAllStatesBrief().filter((s) => slugs.includes(s.slug))
}

export function getCultureAspect(slug: string, aspectId: string) {
  const s = getStateBySlug(slug)
  const aspect = s?.cultureAspects?.find((a) => a.id === aspectId)
  return { state: s, aspect }
}
