const steps = [
  {
    slug: "consulenza-analisi",
    num: "01",
    title: "Consulenza & Analisi",
    icon: "🔍",
    iconBg: "#e8dcc8",
    dotColor: "#c8a96e",
    startHere: true,
    imgGrad: "linear-gradient(135deg,#8b7355 0%,#a08060 35%,#c4a882 60%,#d4c5a9 100%)",
    img: null,
    imgAccent: "Sopralluogo",
    shortDesc: "Prima visita al sito: valutiamo la fattibilità, le condizioni strutturali e le normative urbanistiche locali.",
    desc: "Prima visita al sito: valutiamo la fattibilità, le condizioni strutturali e le normative urbanistiche locali. Ti illustriamo le opzioni e i vincoli prima di spendere un euro.",
    fullDesc: `La fase di consulenza è il punto di partenza di ogni progetto riuscito. Il nostro team effettua un sopralluogo approfondito per valutare le condizioni del sito, analizzare la normativa urbanistica vigente e identificare eventuali vincoli paesaggistici o strutturali.

Ti forniamo una relazione chiara e dettagliata con tutte le possibilità progettuali, i costi indicativi e le tempistiche realistiche. Nessuna sorpresa, nessun costo nascosto.

Cosa include:
- Sopralluogo tecnico completo
- Analisi delle normative locali e vincoli
- Valutazione di fattibilità strutturale
- Report scritto con scenari e costi indicativi
- Prima consulenza senza impegno`,
    tags: ["Sopralluogo", "Normative", "Fattibilità"],
    duration: "1–3 giorni",
    category: "Analisi"
  },
  {
    slug: "progettazione-architettonica",
    num: "02",
    title: "Progettazione Architettonica",
    icon: "📐",
    iconBg: "#dde8d4",
    dotColor: "#7a8f6e",
    startHere: false,
    imgGrad: "linear-gradient(145deg,#3a3a4a 0%,#52526a 30%,#6e7a8a 55%,#8fa5b5 100%)",
    img: "/img/steps/02.jpg",
    imgAccent: "Progetto",
    shortDesc: "Il nostro architetto elabora il progetto preliminare e definitivo con tavole, sezioni e layout degli ambienti.",
    desc: "Il nostro architetto elabora il progetto preliminare e definitivo. Tavole, sezioni, materiali e layout degli ambienti — tutto condiviso con te in tempo reale.",
    fullDesc: `La progettazione architettonica trasforma la tua visione in disegni tecnici precisi e realizzabili. Lavoriamo con software BIM moderni per offrirti render fotorealistici e una visione completa del risultato finale prima di iniziare i lavori.

Il processo è iterativo e collaborativo: ogni revisione viene discussa con te fino a raggiungere la soluzione perfetta. Includiamo nella progettazione anche gli aspetti impiantistici e strutturali, garantendo coerenza tra tutte le discipline.

Cosa include:
- Progetto preliminare con planimetrie e prospetti
- Progetto definitivo ed esecutivo
- Render 3D fotorealistici
- Computo metrico estimativo
- Coordinamento con strutturista e impiantisti`,
    tags: ["Progetto prelim.", "Layout", "Materiali"],
    duration: "2–6 settimane",
    category: "Progettazione"
  },
  {
    slug: "permessi-pratiche",
    num: "03",
    title: "Permessi & Pratiche",
    icon: "📄",
    iconBg: "#e8dcc8",
    dotColor: "#c8a96e",
    startHere: false,
    imgGrad: "linear-gradient(130deg,#e8e0d0 0%,#d4cbb8 40%,#bfb49e 70%,#a8997e 100%)",
    img: null,
    imgAccent: "Documentazione",
    shortDesc: "Gestiamo interamente i rapporti con il Comune: permesso di costruire, pareri e pratiche burocratiche.",
    desc: "Gestiamo interamente i rapporti con il Comune: permesso di costruire, pareri della commissione paesaggio, VIA se necessaria. Nessun pensiero per te.",
    fullDesc: `La burocrazia edilizia italiana è complessa e in continua evoluzione. Il nostro team di tecnici abilitati si occupa di ogni aspetto amministrativo, dalla preparazione degli elaborati alla consegna degli atti, ai rapporti con gli enti competenti.

Seguiamo l'iter completo fino all'ottenimento di tutti i titoli abilitativi necessari, monitorando costantemente lo stato delle pratiche e informandoti ad ogni aggiornamento.

Cosa include:
- Permesso di costruire o SCIA/CILA
- Pareri commissione paesaggio e Soprintendenza
- Valutazione di Impatto Ambientale (VIA) se richiesta
- Deposito strutturale in Genio Civile
- Comunicazione fine lavori e aggiornamento catastale`,
    tags: ["Permesso costruire", "Burocrazia", "VIA"],
    duration: "1–6 mesi",
    category: "Burocrazia"
  },
  {
    slug: "preparazione-cantiere",
    num: "04",
    title: "Preparazione del Cantiere",
    icon: "🏗️",
    iconBg: "#dde8d4",
    dotColor: "#7a8f6e",
    startHere: false,
    imgGrad: "linear-gradient(140deg,#5c4a3a 0%,#7a6350 30%,#9a8468 55%,#b8a080 100%)",
    img: null,
    imgAccent: "Cantiere",
    shortDesc: "Allestimento del cantiere, recinzioni, segnaletica e organizzazione logistica dei materiali.",
    desc: "Allestimento del cantiere, recinzioni, segnaletica e organizzazione dei materiali. Pianifichiamo ogni logistica per non perdere un giorno.",
    fullDesc: `Un cantiere ben organizzato è la base di un lavoro eseguito in sicurezza e nei tempi previsti. Curiamo ogni aspetto dell'allestimento, dalla recinzione perimetrale alla viabilità interna, dalla gestione dei materiali agli spazi per il personale.

Predisponiamo il Piano di Sicurezza e Coordinamento (PSC) e nominiamo il Coordinatore per la Sicurezza in fase di esecuzione (CSE), garantendo piena conformità al D.Lgs. 81/2008.

Cosa include:
- Recinzione, segnaletica e ponteggi
- Piano di Sicurezza e Coordinamento (PSC)
- Allacciamenti provvisori (luce, acqua)
- Smaltimento e gestione terra di scavo
- Pianificazione logistica forniture`,
    tags: ["Allestimento", "Logistica", "Sicurezza"],
    duration: "3–7 giorni",
    category: "Cantiere"
  },
  {
    slug: "fondazioni-struttura",
    num: "05",
    title: "Fondazioni & Struttura",
    icon: "🪨",
    iconBg: "#f2e2d6",
    dotColor: "#b5724a",
    startHere: true,
    imgGrad: "linear-gradient(150deg,#4a4038 0%,#6b5e4e 25%,#8a7b68 50%,#a89580 75%,#c0ad95 100%)",
    img: null,
    imgAccent: "Fondazioni",
    shortDesc: "Scavi, getto delle fondazioni in c.a., pilastri e travi con collaudo strutturale ad ogni fase.",
    desc: "Scavi, getto delle fondazioni in c.a., pilastri e travi. Ogni fase viene verificata con collaudo strutturale prima di procedere.",
    fullDesc: `Le fondazioni sono l'elemento più critico di ogni costruzione. Utilizziamo calcestruzzo certificato e acciaio ad alta resistenza, con controlli di laboratorio su ogni getto. Il Direttore dei Lavori strutturale supervisiona ogni fase.

Per gli interventi antisismici applichiamo le tecniche più avanzate, incluse le fondazioni su pali o i plinti in caso di terreni difficili. Ogni opera viene documentata fotograficamente e con certificati di conformità.

Cosa include:
- Scavi e movimenti terra
- Fondazioni superficiali o profonde (pali)
- Struttura in c.a.: pilastri, travi, solai
- Vespai aerati e sottofondi
- Collaudo strutturale e certificazioni`,
    tags: ["Fondazioni", "C.A.", "Collaudo"],
    duration: "2–8 settimane",
    category: "Strutture"
  },
  {
    slug: "muratura-tamponature",
    num: "06",
    title: "Muratura & Tamponature",
    icon: "🧱",
    iconBg: "#e8dcc8",
    dotColor: "#c8a96e",
    startHere: false,
    imgGrad: "linear-gradient(135deg,#c27a4a 0%,#d4916a 30%,#e0a880 55%,#e8c4a0 100%)",
    img: null,
    imgAccent: "Muratura",
    shortDesc: "Costruzione delle pareti perimetrali e interne con materiali energy-efficient e anti-sismici.",
    desc: "Costruzione delle pareti perimetrali e dei settori interni. Materiali energy-efficient e anti-sismici su indicazione del progetto.",
    fullDesc: `La scelta dei materiali per muratura e tamponature incide direttamente sul comfort termoacustico e sulla performance energetica dell'edificio. Utilizziamo sistemi a blocchi di laterizio porizzato, calcestruzzo cellulare o sistemi a secco in cartongesso, in base alle esigenze progettuali.

Per le ristrutturazioni, eseguiamo anche interventi di risanamento murario, trattamento delle umidità di risalita e rinforzo strutturale con tecniche FRP (Fiber Reinforced Polymer).

Cosa include:
- Murature perimetrali e divisorie
- Sistemi a secco (cartongesso, acustico)
- Risanamento murario e umidità di risalita
- Rinforzo strutturale FRP
- Intonaci civili e rasature`,
    tags: ["Muratura", "Isolamento", "Anti-sisma"],
    duration: "2–6 settimane",
    category: "Costruzione"
  },
  {
    slug: "impianti-elettrici-idraulici",
    num: "07",
    title: "Impianti Elettrici & Idraulici",
    icon: "⚡",
    iconBg: "#dde8d4",
    dotColor: "#7a8f6e",
    startHere: true,
    imgGrad: "linear-gradient(140deg,#2a3540 0%,#3d5060 28%,#506878 50%,#6a8898 75%,#8aacbc 100%)",
    img: null,
    imgAccent: "Impianti",
    shortDesc: "Progettazione e posa di tutti gli impianti: elettrico, idraulico, gas e ventilazione meccanica.",
    desc: "Posizionamento di tutti gli impianti: elettricità, acqua, scarichi, gas e ventilazione. Progetto degli impianti incluso.",
    fullDesc: `Gli impianti sono il cuore tecnologico di un edificio moderno. Il nostro team di impiantisti certificati progetta e realizza sistemi conformi alle normative vigenti, integrati con le soluzioni domotiche più avanzate.

Offriamo soluzioni complete per l'efficienza energetica: impianti fotovoltaici, pompe di calore, sistemi di riscaldamento a pavimento, VMC (Ventilazione Meccanica Controllata) e building automation.

Cosa include:
- Impianto elettrico (CEI 64-8)
- Impianto idrico-sanitario e scarichi
- Impianto gas e riscaldamento
- Ventilazione Meccanica Controllata (VMC)
- Domotica e impianto fotovoltaico (opzionale)`,
    tags: ["Elettrico", "Idraulico", "Ventilazione", "Gas"],
    duration: "2–5 settimane",
    category: "Impianti"
  },
  {
    slug: "isolamento-termico-cappotto",
    num: "08",
    title: "Isolamento Termico & Cappotto",
    icon: "🔥",
    iconBg: "#f2e2d6",
    dotColor: "#b5724a",
    startHere: false,
    imgGrad: "linear-gradient(145deg,#e8d8c0 0%,#dcc8a0 35%,#c8b080 60%,#b89860 100%)",
    img: null,
    imgAccent: "Cappotto",
    shortDesc: "Cappotto esterno e isolamento di volte e pavimenti. Calcoliamo la classe energetica e garantiamo risparmio.",
    desc: "Cappotto esterno e isolamento di volte e pavimenti. Calcoliamo la classe energetica e ti garantiamo risparmio nei consumi.",
    fullDesc: `Il cappotto termico è l'investimento con il miglior ritorno in termini di risparmio energetico e comfort abitativo. Utilizziamo sistemi a cappotto certificati ETAG004, con materiali isolanti di prima scelta: EPS grafitato, lana minerale, fibra di legno o sughero.

Effettuiamo la diagnosi energetica pre e post intervento, con la certificazione APE (Attestato di Prestazione Energetica) che certifica il miglioramento della classe energetica dell'edificio.

Cosa include:
- Cappotto esterno certificato ETAG004
- Isolamento copertura e solaio di base
- Diagnosi energetica e APE
- Gestione pratiche Superbonus / Ecobonus
- Garanzia sulle prestazioni termiche`,
    tags: ["Cappotto", "Classe energetica", "Risparmio"],
    duration: "2–4 settimane",
    category: "Efficienza energetica"
  },
  {
    slug: "servizi-igienici-bagni",
    num: "09",
    title: "Servizi Igienici & Bagni",
    icon: "🚿",
    iconBg: "#d6e4ed",
    dotColor: "#6a8fa3",
    startHere: true,
    imgGrad: "linear-gradient(130deg,#e0ece8 0%,#c8ddd8 30%,#a8c8c0 55%,#88b0a8 100%)",
    img: null,
    imgAccent: "Bagni",
    shortDesc: "Installazione di vasche, docce, sanitari e mobili bagno. Possibile anche solo ristrutturazione bagno.",
    desc: "Installazione di vasche, docce, sanitari e mobili bagno. Puoi iniziare direttamente da questa fase se vuoi ristrutturare solo il bagno.",
    fullDesc: `La ristrutturazione del bagno è uno degli interventi a più alto impatto sulla qualità della vita quotidiana. Seguiamo ogni dettaglio, dalla demolizione alla consegna chiavi, inclusa la scelta dei materiali presso i nostri showroom partner.

Realizziamo bagni in qualsiasi stile: dal minimalismo contemporaneo al classico raffinato, con soluzioni accessibili e conformi alle normative per l'abbattimento delle barriere architettoniche.

Cosa include:
- Demolizione e smaltimento materiali
- Impermeabilizzazione e massetto
- Posa piastrelle e rivestimenti
- Installazione sanitari, docce e vasche
- Mobili bagno, specchi e accessori`,
    tags: ["Sanitari", "Docce", "Mobili bagno"],
    duration: "1–2 settimane",
    category: "Ristrutturazione"
  },
  {
    slug: "pavimentazioni-rivestimenti",
    num: "10",
    title: "Pavimentazioni & Rivestimenti",
    icon: "🎨",
    iconBg: "#f0dce0",
    dotColor: "#c47a6e",
    startHere: true,
    imgGrad: "linear-gradient(140deg,#a08060 0%,#b89878 30%,#d0b898 55%,#e0cdb0 100%)",
    img: null,
    imgAccent: "Pavimentazioni",
    shortDesc: "Posa di piastrelle, parquet, lastre di pietra naturale o materiali tecnici con consulenza sui materiali.",
    desc: "Posa di piastrelle, parquet, lastre di pietra naturale o materiali tecnici. Scelta dei materiali guidata dal design e dalla durata.",
    fullDesc: `La pavimentazione definisce il carattere di ogni ambiente. Offriamo un'ampia gamma di materiali e finiture, dalla ceramica tecnica al parquet massello, dalle lastre in pietra naturale ai moderni pavimenti in microcemento o resina.

Il nostro consulente d'interni ti accompagna nella scelta, valutando insieme estetica, durabilità, costo di manutenzione e coerenza con l'arredo esistente. La posa viene eseguita da maestranze specializzate con massima cura per gli allineamenti e le fughe.

Cosa include:
- Massetto autolivellante di preparazione
- Posa di piastrelle, ceramiche, grès porcellanato
- Parquet in legno massello o prefinito
- Lastre in pietra naturale (marmo, travertino, ardesia)
- Pavimenti continui in microcemento / resina`,
    tags: ["Parquet", "Piastrelle", "Pietra naturale"],
    duration: "1–3 settimane",
    category: "Finiture"
  },
  {
    slug: "serramenti-porte-infissi",
    num: "11",
    title: "Serramenti, Porte & Infissi",
    icon: "🪟",
    iconBg: "#e8dce8",
    dotColor: "#7a5f7e",
    startHere: false,
    imgGrad: "linear-gradient(135deg,#6a7a8a 0%,#8a9aaa 30%,#aab8c8 55%,#ccd8e0 100%)",
    img: null,
    imgAccent: "Serramenti",
    shortDesc: "Montaggio di finestre a doppio o triplo vetro, porte interne e di ingresso in alluminio, legno o PVC.",
    desc: "Montaggio di finestre a doppio o triplo vetro, porte interne e di ingresso. Alluminio, legno o PVC in base a prestazioni e estetica.",
    fullDesc: `I serramenti sono la barriera tra interno ed esterno: influenzano direttamente l'isolamento termico, acustico e la sicurezza dell'edificio. Collaboriamo con produttori certificati per offrire infissi con classe di trasmittanza termica Uw ≤ 1,0 W/m²K.

Gestiamo la misurazione, la produzione su misura, la posa con tagliafuoco dove richiesto e lo smaltimento degli infissi vecchi. Offriamo anche soluzioni di oscuramento integrate: tapparelle motorizzate, persiane, veneziane.

Cosa include:
- Finestre e portefinestre a doppio/triplo vetro
- Porte blindate di ingresso
- Porte interne in legno o vetro
- Sistemi oscuranti (tapparelle, veneziane)
- Sostituzione infissi esistenti con gestione bonus`,
    tags: ["Finestre", "Porte", "Doppio vetro"],
    duration: "3–7 giorni",
    category: "Finiture"
  },
  {
    slug: "finishing-consegna",
    num: "12",
    title: "Finishing & Consegna",
    icon: "✨",
    iconBg: "#e8dcc8",
    dotColor: "#c8a96e",
    startHere: false,
    imgGrad: "linear-gradient(140deg,#f0e8d8 0%,#e0d5c0 30%,#c8bda8 55%,#b8ad90 100%)",
    img: null,
    imgAccent: "Consegna",
    shortDesc: "Tinteggiatura, arredi fissi, pulizia finale e collaudo di tutti gli impianti. La consegna delle chiavi.",
    desc: "Tinteggiatura, arredi fissi, pulizia finale e collaudo di tutti gli impianti. Il momento in cui ti consegniamo la chiave.",
    fullDesc: `Il finishing è la fase in cui tutto prende vita. Curiamo ogni dettaglio delle rifiniture, dalla tinteggiatura con colori scelti insieme, agli arredi fissi su misura, fino alla pulizia profonda degli ambienti.

Prima della consegna eseguiamo un collaudo completo di tutti gli impianti, un sopralluogo con lista di controllo e la produzione di tutta la documentazione di fine lavori. Ti consegniamo le chiavi insieme al fascicolo del fabbricato.

Cosa include:
- Tinteggiatura e decorazioni pareti
- Arredi fissi (armadi a muro, cucine, librerie)
- Pulizia profonda post-cantiere
- Collaudo impianti e test di funzionamento
- Fascicolo del fabbricato e garanzie`,
    tags: ["Tinteggiatura", "Collaudo finale", "Consegna"],
    duration: "1–3 settimane",
    category: "Finishing"
  }
];

module.exports = steps;