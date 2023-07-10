const data = [
    {
        "id": 2,
        "kikuyuname": "Kererwa",
        "scientificname": "Croton dichogamus",
        "part": "leaves",
        "preparationmethod": "boil the leaves",
        "administermethod": "drink",
        "disease": "Throat irritation",
        "imageurl": "kererwa"
    },
    {
        "id": 24,
        "kikuyuname": "Nathi",
        "scientificname": "Physalis peruviana",
        "part": "leaves",
        "preparationmethod": "wash the leaves",
        "administermethod": "eat the leaves",
        "disease": "Stomach ache",
        "imageurl": "nathi"
    },
    {
        "id": 25,
        "kikuyuname": "Nathi",
        "scientificname": "Physalis peruviana",
        "part": "leaves",
        "preparationmethod": "boil the leaves",
        "administermethod": "drink",
        "disease": "Typhoid",
        "imageurl": "nathi"
    },
    {
        "id": 28,
        "kikuyuname": "Rosemary",
        "scientificname": "Salvia rosmarinus",
        "part": "leaves",
        "preparationmethod": "boil the leaves",
        "administermethod": "mix with drinks and food",
        "disease": "memory improvement",
        "imageurl": "rosemary"
    },
    {
        "id": 1,
        "kikuyuname": "Gathiriga",
        "scientificname": "Feurstia africana",
        "part": "leaves",
        "preparationmethod": "boil the leaves",
        "administermethod": "drink",
        "disease": "Releases blocked urine",
        "imageurl": "kathiriga"
    },
    {
        "id": 5,
        "kikuyuname": "Mikinghi",
        "scientificname": "",
        "part": "leaves",
        "preparationmethod": "rub the leaves",
        "administermethod": "apply on the head",
        "disease": "Reduces headache",
        "imageurl": "mikinghi"
    },
    {
        "id": 7,
        "kikuyuname": "Mubariki",
        "scientificname": "Ricinus communis",
        "part": "leaves",
        "preparationmethod": "ground the leaves",
        "administermethod": "eat the leaves",
        "disease": "Calcium for cows",
        "imageurl": "mubariki"
    },
    {
        "id": 10,
        "kikuyuname": "Mugucua",
        "scientificname": "Zanthoxyium usambarense",
        "part": "bark",
        "preparationmethod": "wash the bark and remove thorns",
        "administermethod": "chew the bark",
        "disease": "Tooth ache",
        "imageurl": "mugucua"
    },
    {
        "id": 11,
        "kikuyuname": "Mugucua",
        "scientificname": "Zanthoxyium usambarense",
        "part": "bark",
        "preparationmethod": "wash the bark and remove thorns",
        "administermethod": "chew the bark",
        "disease": "Bleeding gums",
        "imageurl": "mugucua"
    },
    {
        "id": 12,
        "kikuyuname": "Muiri",
        "scientificname": "Prunus africana",
        "part": "bark",
        "preparationmethod": "boil the bark",
        "administermethod": "drink",
        "disease": "Allergy",
        "imageurl": "muiri"
    },
    {
        "id": 13,
        "kikuyuname": "Muiri",
        "scientificname": "Prunus africana",
        "part": "bark",
        "preparationmethod": "boil the bark",
        "administermethod": "drink",
        "disease": "Urinal issue for men over 40years",
        "imageurl": "muiri"
    },
    {
        "id": 14,
        "kikuyuname": "Mukinduri",
        "scientificname": "Croton megalocarpus",
        "part": "bark",
        "preparationmethod": "boil the bark with milk",
        "administermethod": "drink",
        "disease": "Intestinal worms",
        "imageurl": "mukinduri"
    },
    {
        "id": 15,
        "kikuyuname": "Mukoigo",
        "scientificname": "Bridelia micrantha",
        "part": "bark",
        "preparationmethod": "boil the bark",
        "administermethod": "drink",
        "disease": "General body pains",
        "imageurl": "mukoigo"
    },
    {
        "id": 16,
        "kikuyuname": "Mukungugu",
        "scientificname": "Commoiphora eminii",
        "part": "bark",
        "preparationmethod": "boil the bark",
        "administermethod": "drink",
        "disease": "Diarrhoea",
        "imageurl": "mukungugu"
    },
    {
        "id": 17,
        "kikuyuname": "Mukura utuku",
        "scientificname": "Malva verticillata",
        "part": "leaves",
        "preparationmethod": "squeeze sap out of leaves",
        "administermethod": "apply on wound",
        "disease": "Healing wound",
        "imageurl": "mukura-utuku"
    },
    {
        "id": 8,
        "kikuyuname": "Mubera (Guava)",
        "scientificname": "Psidium guajava",
        "part": "leaves",
        "preparationmethod": "boil the leaves",
        "administermethod": "drink",
        "disease": "High blood pressure",
        "imageurl": "mubera"
    },
    {
        "id": 9,
        "kikuyuname": "Mubera (Guava)",
        "scientificname": "Psidium guajava",
        "part": "leaves",
        "preparationmethod": "boil the leaves",
        "administermethod": "drink",
        "disease": "Diabetes",
        "imageurl": "mubera"
    },
    {
        "id": 22,
        "kikuyuname": "Mutundu",
        "scientificname": "Neoboutonia macrocalyx",
        "part": "leaves",
        "preparationmethod": "squeeze sap out of leaves",
        "administermethod": "apply on wound",
        "disease": "Stops bleeding",
        "imageurl": "mutundu"
    },
    {
        "id": 23,
        "kikuyuname": "Muenderendu",
        "scientificname": "Tredea",
        "part": "leaves",
        "preparationmethod": "boil the leaves with milk",
        "administermethod": "drink",
        "disease": "Joint pains",
        "imageurl": "muenderendu"
    },
    {
        "id": 19,
        "kikuyuname": "Munyua mai (white blue gum)",
        "scientificname": "Eucalyptus globulus",
        "part": "leaves",
        "preparationmethod": "boil the leaves",
        "administermethod": "Cover and inhale the steam",
        "disease": "Asthma",
        "imageurl": "white-bluegum"
    },
    {
        "id": 21,
        "kikuyuname": "Mutongu",
        "scientificname": "Solanum incanum",
        "part": "leaves",
        "preparationmethod": "boil the leaves",
        "administermethod": "drink",
        "disease": "Stomach ache",
        "imageurl": "sodom-apple"
    },
    {
        "id": 3,
        "kikuyuname": "Kiruma (Aloe Vera)",
        "scientificname": "Aloe vera",
        "part": "leaves",
        "preparationmethod": "ground the leaves",
        "administermethod": "apply",
        "disease": "Helps cure wounds",
        "imageurl": "kiruma"
    },
    {
        "id": 4,
        "kikuyuname": "Makorobia (Avocado)",
        "scientificname": "Persea americana",
        "part": "seed",
        "preparationmethod": "ground and dry the leaves",
        "administermethod": "drink with water",
        "disease": "Intestinal worms",
        "imageurl": "makorobia"
    },
    {
        "id": 29,
        "kikuyuname": "Thabai (Stinging nettle)",
        "scientificname": "Urtica dioica",
        "part": "leaves",
        "preparationmethod": "boil the leaves",
        "administermethod": "drink",
        "disease": "High blood pressure",
        "imageurl": "stinging-nettle"
    },
    {
        "id": 6,
        "kikuyuname": "Mubangi (Mexican marigold)",
        "scientificname": "Tagetes minuta",
        "part": "leaves",
        "preparationmethod": "boil the leaves",
        "administermethod": "drink",
        "disease": "High blood pressure",
        "imageurl": "mubangi"
    },
    {
        "id": 18,
        "kikuyuname": "Munyua mai (Blue gum)",
        "scientificname": "Eucalyptus globulus",
        "part": "leaves",
        "preparationmethod": "boil the leaves with spring onions",
        "administermethod": "Cover and inhale the steam",
        "disease": "Common cold",
        "imageurl": "bluegum"
    },
    {
        "id": 20,
        "kikuyuname": "Mutamaiyu (Brown olive)",
        "scientificname": "Olea europaea",
        "part": "bark",
        "preparationmethod": "boil the bark",
        "administermethod": "drink after eating allergen",
        "disease": "Allergy",
        "imageurl": "mutamaiyu"
    },
    {
        "id": 26,
        "kikuyuname": "Nduuma (female) (Arrowroot)",
        "scientificname": "Colocasia antiquorum",
        "part": "leaves",
        "preparationmethod": "boil the leaves",
        "administermethod": "drink",
        "disease": "Stomach Ulcers",
        "imageurl": "nduuma"
    },
    {
        "id": 27,
        "kikuyuname": "Nduuma (male) (Arrowroot)",
        "scientificname": "Colocasia antiquorum",
        "part": "leaves",
        "preparationmethod": "boil the leaves",
        "administermethod": "drink",
        "disease": "Throat pain",
        "imageurl": "nduuma"
    }
]

module.exports = data;