const partners = [
  // ── SHOWROOM ──────────────────────────────────────────────────────────
  {
    category: "Ceramiche & Gres Porcellanato",
    slug: "ceramiche-gres",
    location: "showroom",
    desc: "Collaboriamo con i migliori produttori di ceramiche e gres porcellanato per offrire pavimenti e rivestimenti di alta qualità, resistenti e dall'estetica raffinata.",
    showroomDesc: "L'area ceramiche del nostro showroom espone centinaia di campioni: gres effetto legno, pietra, cemento e marmo. Lastre di grande formato, mosaici e rivestimenti per ogni ambiente. Vieni a scegliere di persona.",
    imgGrad: "linear-gradient(145deg,#6a7a8a 0%,#8a9aaa 30%,#aab8c8 55%,#ccd8e0 100%)",
    img: null,
    companies: [
      { name: "Florim Ceramiche S.P.A.", role: "Gres porcellanato e grandi lastre", logo: "img/partners/Florim Ceramiche.webp", logoBg: "#d6e4ed", website: "https://www.florim.com/it" },
      { name: "Marazzi Group", role: "Rivestimenti bagno e cucina", logo: "img/partners/Marazzi Group.webp", logoBg: "#e8dce8", website: "https://www.marazzi.it" },
      { name: "Energie Ker", role: "Ceramiche da esterno e decori", logo: "img/partners/Energie Ker.webp", logoBg: "#dde8d4", website: "https://www.energieker.it/it/" },
      { name: "Ceramica Coem e Fioranese", role: "Mosaici e formati speciali", logo: "img/partners/Ceramica Coem e Fioranese.webp", logoBg: "#e8dcc8", website: "https://www.coem.it/" },
      { name: "Casalgrande Padana", role: "Effetto marmo e pietra naturale", logo: "img/partners/Casalgrande Padana.webp", logoBg: "#f2e2d6", website: "https://www.casalgrandepadana.it/" }
    ]
  },
  {
    category: "Parquet",
    slug: "parquet",
    location: "showroom",
    desc: "Collaboriamo con i migliori produttori di parquet in legno massello e prefinito, per offrire pavimentazioni calde, eleganti e durature in ogni ambiente.",
    showroomDesc: "Nell'area parquet del nostro showroom trovi campioni di oltre 40 essenze e finiture diverse: rovere, noce, ciliegio, wengé. Puoi camminare sulle campionature reali e vedere i colori in luce naturale.",
    imgGrad: "linear-gradient(140deg,#a08060 0%,#b89878 30%,#d0b898 55%,#e0cdb0 100%)",
    img: null,
    companies: [
      { name: "Berti", role: "Parquet massello e prefinito", logo: "img/partners/Berti.webp", logoBg: "#f2e2d6", website: null },
      { name: "Labor Legno", role: "Parquet su misura e restauro", logo: "img/partners/Labor Legno.webp", logoBg: "#e8dcc8", website: "https://www.laborlegno.it/" },
      { name: "Beki Floor", role: "Pavimenti in legno tecnico", logo: "img/partners/Beki Floor.webp", logoBg: "#dde8d4", website: null }
    ]
  },
  {
    category: "PVC",
    slug: "pvc",
    location: "showroom",
    desc: "Il nostro partner PVC offre soluzioni per pavimenti e rivestimenti resistenti, impermeabili e di facile manutenzione, ideali per ambienti commerciali e residenziali.",
    showroomDesc: "L'area PVC espone pavimenti in vinile, LVT e rivestimenti impermeabili per bagni e cucine. Soluzioni pratiche ed esteticamente raffinate per ogni esigenza.",
    imgGrad: "linear-gradient(130deg,#e0ece8 0%,#c8ddd8 30%,#a8c8c0 55%,#88b0a8 100%)",
    img: null,
    companies: [
      { name: "Forbo Flooring System", role: "Pavimenti in vinile e LVT", logo: "img/partners/Forbo Flooring System.webp", logoBg: "#d6e4ed", website: "https://www.forbo.com/flooring/it-it/" }
    ]
  },

  // ── MAGAZZINO ─────────────────────────────────────────────────────────
  {
    category: "Materiali Edili",
    slug: "materiali-edili",
    location: "magazzino",
    desc: "Selezioniamo i migliori produttori di materiali edili per garantire costruzioni solide, durature e conformi alle normative antisismiche ed energetiche.",
    showroomDesc: "Colle, cementi, malte, additivi e materiali da costruzione disponibili nel nostro magazzino. Prodotti certificati dei migliori produttori, sempre disponibili per i cantieri.",
    imgGrad: "linear-gradient(135deg,#8b7355 0%,#a08060 35%,#c4a882 60%,#d4c5a9 100%)",
    img: null,
    companies: [
      { name: "Mapei", role: "Materiali strutturali e laterizi", logo: "img/partners/Mapei.webp", logoBg: "#e8dcc8", website: "https://www.mapei.com/it/it/home-page" },
      { name: "Kerakoll", role: "Colle, cementi e malte", logo: "img/partners/Kerakoll.webp", logoBg: "#dde8d4", website: "https://it.kerakoll.com/" }
    ]
  }
];

// Carosello showroom ingresso (4 foto "Powered by Florian")
const showroomCarousel = [
  { img: null, imgGrad: "linear-gradient(145deg,#3a3a4a 0%,#52526a 30%,#6e7a8a 55%,#8fa5b5 100%)", caption: "Ingresso showroom" },
  { img: null, imgGrad: "linear-gradient(135deg,#8b7355 0%,#a08060 35%,#c4a882 60%,#d4c5a9 100%)", caption: "Area cucina" },
  { img: null, imgGrad: "linear-gradient(140deg,#a08060 0%,#b89878 30%,#d0b898 55%,#e0cdb0 100%)", caption: "Area gres porcellanato" },
  { img: null, imgGrad: "linear-gradient(130deg,#e0ece8 0%,#c8ddd8 30%,#a8c8c0 55%,#88b0a8 100%)", caption: "Area ..." }
];

module.exports = { partners, showroomCarousel };
