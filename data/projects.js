const projects = [
  {
    slug: "villa-unifamiliare-brescia",
    title: "Villa Unifamiliare",
    location: "Brescia Nord",
    year: 2023,
    category: "Costruzione ex novo",
    services: ["fondazioni-struttura", "impianti-elettrici-idraulici", "isolamento-termico-cappotto", "finishing-consegna"],
    imgGrad: "linear-gradient(145deg,#5c4a3a 0%,#7a6350 30%,#9a8468 55%,#b8a080 100%)",
    shortDesc: "Villa su due livelli con giardino, classe energetica A2. Costruzione completa in 14 mesi.",
    fullDesc: "Costruzione chiavi in mano di una villa bifamiliare su due livelli con garage interrato e giardino privato. Struttura in c.a., cappotto 16 cm, impianto fotovoltaico da 6 kWp e pompa di calore aria-acqua. Classe energetica A2.",
    stats: { area: "280 m²", duration: "14 mesi", class: "A2" }
  },
  {
    slug: "appartamento-centro-storico",
    title: "Ristrutturazione Totale Appartamento",
    location: "Centro storico, Brescia",
    year: 2023,
    category: "Ristrutturazione",
    services: ["permessi-pratiche", "muratura-tamponature", "impianti-elettrici-idraulici", "pavimentazioni-rivestimenti", "finishing-consegna"],
    imgGrad: "linear-gradient(135deg,#8b7355 0%,#a08060 35%,#c4a882 60%,#d4c5a9 100%)",
    shortDesc: "Ristrutturazione completa in edificio vincolato. Nuova distribuzione, impianti e finiture di pregio.",
    fullDesc: "Ristrutturazione completa di un appartamento di 120 m² in palazzo storico del centro di Brescia, con vincolo della Soprintendenza. Nuova distribuzione degli spazi, impianto di riscaldamento a pavimento, pavimenti in parquet di rovere e bagni in marmo di Carrara.",
    stats: { area: "120 m²", duration: "5 mesi", class: "B" }
  },
  {
    slug: "ristrutturazione-bagni-ufficio",
    title: "Rifacimento Bagni Complesso Direzionale",
    location: "Zona industriale, Roncadelle",
    year: 2024,
    category: "Ristrutturazione commerciale",
    services: ["servizi-igienici-bagni", "impianti-elettrici-idraulici"],
    imgGrad: "linear-gradient(130deg,#e0ece8 0%,#c8ddd8 30%,#a8c8c0 55%,#88b0a8 100%)",
    shortDesc: "16 bagni ristrutturati in un complesso direzionale. Lavori completati fuori orario senza interrompere l'attività.",
    fullDesc: "Ristrutturazione di 16 bagni in un complesso direzionale di 3 piani, eseguita in fasi serali e notturne per non interrompere le attività lavorative. Nuovi sanitari sospesi, pannelli doccia walk-in e pavimenti in gres effetto pietra. Conforme L. 13/89 per abbattimento barriere architettoniche.",
    stats: { area: "320 m²", duration: "8 settimane", class: "—" }
  },
  {
    slug: "nuova-costruzione-capannone",
    title: "Capannone Artigianale",
    location: "Zona PGTU, Ospitaletto",
    year: 2022,
    category: "Costruzione industriale",
    services: ["consulenza-analisi", "progettazione-architettonica", "permessi-pratiche", "fondazioni-struttura", "impianti-elettrici-idraulici"],
    imgGrad: "linear-gradient(140deg,#3a3a4a 0%,#52526a 30%,#6e7a8a 55%,#8fa5b5 100%)",
    shortDesc: "Capannone artigianale di 800 m² con uffici annessi, pensilina fotovoltaica e impianto antincendio.",
    fullDesc: "Costruzione di un capannone artigianale di 800 m² con struttura in acciaio e tamponatura in pannelli sandwich, inclusi 120 m² di uffici e servizi. Pensilina fotovoltaica da 40 kWp, impianto di climatizzazione canalizzato e impianto antincendio a sprinkler. Realizzato in 6 mesi chiavi in mano.",
    stats: { area: "920 m²", duration: "6 mesi", class: "—" }
  },
  {
    slug: "riqualificazione-energetica",
    title: "Riqualificazione Energetica Condominio",
    location: "Quartiere Urago, Brescia",
    year: 2024,
    category: "Efficienza energetica",
    services: ["consulenza-analisi", "isolamento-termico-cappotto", "serramenti-porte-infissi"],
    imgGrad: "linear-gradient(145deg,#e8d8c0 0%,#dcc8a0 35%,#c8b080 60%,#b89860 100%)",
    shortDesc: "Cappotto e nuovi infissi su condominio di 12 unità. Salto di 3 classi energetiche con Superbonus gestito al 100%.",
    fullDesc: "Riqualificazione energetica profonda di un condominio di 12 appartamenti degli anni '70. Posa di cappotto in EPS grafitato 14 cm, sostituzione di 96 infissi con finestre a triplo vetro e installazione di impianto centralizzato pompa di calore. Gestione completa del Superbonus 110%: dal visto di conformità alla cessione del credito.",
    stats: { area: "1.200 m²", duration: "4 mesi", class: "A1" }
  },
  {
    slug: "casa-in-legno",
    title: "Casa in Legno CLT",
    location: "Provaglio d'Iseo, BS",
    year: 2022,
    category: "Bioedilizia",
    services: ["consulenza-analisi", "progettazione-architettonica", "permessi-pratiche", "fondazioni-struttura", "impianti-elettrici-idraulici", "finishing-consegna"],
    imgGrad: "linear-gradient(135deg,#6b7c4a 0%,#8a9f62 30%,#a8ba80 55%,#c8d4a8 100%)",
    shortDesc: "Abitazione in legno massello CLT con struttura a pannelli portanti. Prima casa a energia quasi zero della zona.",
    fullDesc: "Progettazione e costruzione di una casa unifamiliare in pannelli di legno massello a strati incrociati (CLT), tecnologia bioecologica ad altissime prestazioni. Struttura portante in CLT, cappotto in fibra di legno 20 cm, VMC con recupero di calore, FV da 8 kWp e serbatoio di accumulo. Casa classificata NZEB (Nearly Zero Energy Building).",
    stats: { area: "210 m²", duration: "10 mesi", class: "A4" }
  }
];

module.exports = projects;
