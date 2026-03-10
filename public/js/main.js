/* ── NAV MOBILE TOGGLE ────────────────────────────────────────────────── */
const navToggle = document.querySelector('.nav-toggle');
const navLinks  = document.querySelector('.nav-links');
if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('open');
    navLinks.classList.toggle('open');
  });
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      navToggle.classList.remove('open');
      navLinks.classList.remove('open');
    });
  });
}

/* ── NAV DROPDOWN (desktop: hover via CSS, mobile: click toggle) ─────── */
const dropdownToggle = document.querySelector('.nav-dropdown-toggle');
if (dropdownToggle) {
  dropdownToggle.addEventListener('click', () => {
    dropdownToggle.classList.toggle('open');
  });
}

/* ── SCROLL REVEAL (generico .reveal) ────────────────────────────────── */
const revealAll = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      revealAll.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => revealAll.observe(el));

/* ── TIMELINE (solo sulla home se #timelineOuter esiste) ─────────────── */
(function initTimeline() {
  const outer = document.getElementById('timelineOuter');
  if (!outer) return;

  /* toggle card */
  window.toggle = function(card) {
    card.classList.toggle('open');
    setTimeout(drawCurve, 460);
  };

  /* SVG serpentina */
  function drawCurve() {
    const svg = document.getElementById('timelineSvg');
    if (!svg) return;
    const isMobile = window.innerWidth <= 680;
    if (isMobile) { svg.style.display = 'none'; return; }
    svg.style.display = 'block';

    const outerRect = outer.getBoundingClientRect();
    const outerTop  = outerRect.top + window.scrollY;
    const W  = outerRect.width;
    const H  = outer.scrollHeight;
    const cx = W / 2;   // centro fisso del contenitore
    const amp = 58;     // ampiezza oscillazione

    const dots = outer.querySelectorAll('.step-dot');
    const points = [];

    dots.forEach((dot, i) => {
      const r = dot.getBoundingClientRect();
      const y = (r.top + window.scrollY) + r.height / 2 - outerTop;
      // X calcolata dal centro del contenitore, non dalla posizione del dot
      const x = (i % 2 === 0) ? cx - amp : cx + amp;
      points.push({ x, y });
    });

    if (points.length < 2) return;

    /* costruisce il path SVG */
    let d = `M ${points[0].x} ${points[0].y}`;
    for (let i = 1; i < points.length; i++) {
      const p = points[i - 1], c = points[i];
      const midY = (p.y + c.y) / 2;
      d += ` C ${p.x} ${midY}, ${c.x} ${midY}, ${c.x} ${c.y}`;
    }

    svg.setAttribute('width',   W);
    svg.setAttribute('height',  H);
    svg.setAttribute('viewBox', `0 0 ${W} ${H}`);
    svg.innerHTML = `
      <defs>
        <linearGradient id="lg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stop-color="#c8a96e"/>
          <stop offset="40%"  stop-color="#7a8f6e"/>
          <stop offset="100%" stop-color="#6a8fa3"/>
        </linearGradient>
      </defs>
      <path d="${d}" fill="none" stroke="url(#lg)" stroke-width="2.8"
            stroke-linecap="round" stroke-dasharray="10 6" opacity=".75"/>`;

    /*
      Invece di spostare il col con translateX (impreciso al resize),
      posizioniamo ogni dot-col in modo assoluto rispetto al contenitore.
      Il col diventa position:absolute con left calcolato dalla x della curva.
    */
    dots.forEach((dot, i) => {
      const col = dot.closest('.step-dot-col');
      // reset transform precedente
      col.style.transform = '';
      // posiziona in assoluto centrato sulla x della curva
      col.style.position = 'absolute';
      col.style.left = `${points[i].x - col.offsetWidth / 2}px`;
    });
  }

  /* scroll reveal per gli step */
  const stepObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        requestAnimationFrame(() => requestAnimationFrame(drawCurve));
      }
    });
  }, { threshold: 0.15 });
  outer.querySelectorAll('.step').forEach(el => stepObs.observe(el));

  document.fonts.ready.then(() => requestAnimationFrame(() => requestAnimationFrame(drawCurve)));
  window.addEventListener('resize', drawCurve);
  new MutationObserver(() => requestAnimationFrame(() => requestAnimationFrame(drawCurve)))
    .observe(outer, { subtree: true, attributes: true, attributeFilter: ['class'] });
})();

/* ── FILTER BAR (pagina progetti) ────────────────────────────────────── */
(function initFilterBar() {
  const btns = document.querySelectorAll('.filter-btn[data-cat]');
  if (!btns.length) return;

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      const cat = btn.dataset.cat;
      const url = new URL(window.location.href);
      if (cat === 'all') { url.searchParams.delete('categoria'); }
      else               { url.searchParams.set('categoria', cat); }
      window.location.href = url.toString();
    });
  });
})();
