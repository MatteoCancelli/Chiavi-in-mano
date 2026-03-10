const steps        = require('../data/steps');
const testimonials = require('../data/testimonials');
const { partners, showroomCarousel } = require('../data/partners');
const certificates = require('../data/certificates');

// ── HOME ──────────────────────────────────────────────────────────────────────
exports.home = (req, res) => {
  res.render('index', {
    title: 'In B. & B. S.r.l — Edilizia Chiavi in Mano',
    meta: 'Dalla consulenza alla consegna: costruzione, ristrutturazione e riqualificazione energetica con un unico interlocutore.',
    steps,
    testimonials,
    page: 'home'
  });
};

// ── CHI SIAMO ─────────────────────────────────────────────────────────────────
exports.chiSiamo = (req, res) => {
  res.render('chi-siamo', {
    title: 'Chi Siamo — In B. & B. S.r.l',
    meta: 'Scopri la storia, il team e i valori di In B. & B. S.r.l, edilizia chiavi in mano in provincia di Brescia.',
    page: 'chi-siamo'
  });
};

// ── SHOWROOM ──────────────────────────────────────────────────────────────────
exports.showroom = (req, res) => {
  res.render('azienda/showroom', {
    title: 'Showroom & Partnership — In B. & B. S.r.l',
    meta: 'Visita il nostro showroom a Brescia: materiali edili, parquet e PVC dei migliori partner.',
    partners,
    showroomCarousel,
    page: 'showroom'
  });
};

// ── CERTIFICATI ───────────────────────────────────────────────────────────────
exports.certificati = (req, res) => {
  res.render('azienda/certificati', {
    title: 'Certificazioni — In B. & B. S.r.l',
    meta: 'Certificazioni e attestati di qualità di In B. & B. S.r.l.',
    certificates,
    page: 'certificati'
  });
};

// ── SERVIZI (lista) ───────────────────────────────────────────────────────────
exports.servizi = (req, res) => {
  res.render('servizi/index', {
    title: 'Servizi — In B. & B. S.r.l',
    meta: 'Tutti i servizi edilizi: costruzione, ristrutturazione, impianti, cappotto, finiture e molto altro.',
    steps,
    page: 'servizi'
  });
};

// ── SERVIZIO SINGOLO ──────────────────────────────────────────────────────────
exports.servizioSingolo = (req, res) => {
  const step = steps.find(s => s.slug === req.params.slug);
  if (!step) return res.status(404).render('404', { title: 'Pagina non trovata', page: '' });

  res.render('servizi/singolo', {
    title: `${step.title} — In B. & B. S.r.l`,
    meta: step.shortDesc,
    step,
    steps,
    page: 'servizi'
  });
};

// ── CONTATTI ──────────────────────────────────────────────────────────────────
exports.contatti = (req, res) => {
  res.render('contatti', {
    title: 'Contatti — In B. & B. S.r.l',
    meta: 'Contattaci per una consulenza gratuita. Risposta entro 24 ore.',
    page: 'contatti'
  });
};
