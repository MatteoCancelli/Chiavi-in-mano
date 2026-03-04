const steps       = require('../data/steps');
const projects    = require('../data/projects');
const testimonials = require('../data/testimonials');

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

  const relatedProjects = projects.filter(p =>
    p.services.includes(step.slug)
  ).slice(0, 3);

  res.render('servizi/singolo', {
    title: `${step.title} — In B. & B. S.r.l`,
    meta: step.shortDesc,
    step,
    relatedProjects,
    steps, // per la navigazione agli altri servizi
    page: 'servizi'
  });
};

// ── PROGETTI ──────────────────────────────────────────────────────────────────
exports.progetti = (req, res) => {
  const { categoria } = req.query;
  const filtered = categoria
    ? projects.filter(p => p.category.toLowerCase().includes(categoria.toLowerCase()))
    : projects;

  const categories = [...new Set(projects.map(p => p.category))];

  res.render('progetti', {
    title: 'Progetti — In B. & B. S.r.l',
    meta: 'Guarda i lavori completati: costruzioni, ristrutturazioni, riqualificazioni energetiche.',
    projects: filtered,
    categories,
    activeCategory: categoria || null,
    page: 'progetti'
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
