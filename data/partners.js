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
      { name: "Florim Ceramiche S.P.A.", role: "Gres porcellanato e grandi lastre", logo: "img/partners/Florim Ceramiche.png", logoBg: "#d6e4ed", website: null },
      { name: "Marazzi Group", role: "Rivestimenti bagno e cucina", logo: null, logoBg: "#e8dce8", website: null },
      { name: "Energie Ker", role: "Ceramiche da esterno e decori", logo: null, logoBg: "#dde8d4", website: null },
      { name: "Ceramica Coem e Fioranese", role: "Mosaici e formati speciali", logo: null, logoBg: "#e8dcc8", website: null },
      { name: "Casalgrande Padana", role: "Effetto marmo e pietra naturale", logo: null, logoBg: "#f2e2d6", website: null }
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
      { name: "Azienda Parquet 1", role: "Parquet massello e prefinito", logo: null, logoBg: "#f2e2d6", website: null },
      { name: "Azienda Parquet 2", role: "Parquet su misura e restauro", logo: null, logoBg: "#e8dcc8", website: null },
      { name: "Azienda Parquet 3", role: "Pavimenti in legno tecnico", logo: null, logoBg: "#dde8d4", website: null }
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
      { name: "Azienda PVC 1", role: "Pavimenti in vinile e LVT", logo: null, logoBg: "#d6e4ed", website: null }
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
      { name: "Azienda Edile 1", role: "Materiali strutturali e laterizi", logo: null, logoBg: "#e8dcc8", website: null },
      { name: "Azienda Edile 2", role: "Colle, cementi e malte", logo: null, logoBg: "#dde8d4", website: null }
    ]
  }
];

// Carosello showroom ingresso (4 foto "Powered by Florian")
const showroomCarousel = [
  { img: null, imgGrad: "linear-gradient(145deg,#3a3a4a 0%,#52526a 30%,#6e7a8a 55%,#8fa5b5 100%)", caption: "Ingresso showroom" },
  { img: null, imgGrad: "linear-gradient(135deg,#8b7355 0%,#a08060 35%,#c4a882 60%,#d4c5a9 100%)", caption: "Area ceramiche" },
  { img: null, imgGrad: "linear-gradient(140deg,#a08060 0%,#b89878 30%,#d0b898 55%,#e0cdb0 100%)", caption: "Area parquet" },
  { img: null, imgGrad: "linear-gradient(130deg,#e0ece8 0%,#c8ddd8 30%,#a8c8c0 55%,#88b0a8 100%)", caption: "Area PVC e rivestimenti" }
];

module.exports = { partners, showroomCarousel };
