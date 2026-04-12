// src/styles/globalStyles.js

const fontLink = document.createElement("link");
fontLink.rel = "stylesheet";
fontLink.href = "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,600&family=DM+Sans:wght@300;400;500;600&display=swap";
document.head.appendChild(fontLink);

const globalStyles = `
  :root {
    --gold: #C9A84C;
    --gold-light: #E8C97A;
    --gold-dim: #8A6B28;
    --gold-subtle: rgba(201,168,76,0.12);
    --red: #7A1C2E;
    --red-bright: #9B1F35;
    --black: #0C0A09;
    --black-mid: #131110;
    --black-card: #1C1815;
    --black-elevated: #211D19;
    --white: #FFFFFF;
    --cream: #F2E8D5;
    --cream-dim: #C8B89A;
    --muted: #7A6B5A;
    --border: rgba(201,168,76,0.14);
    --border-hover: rgba(201,168,76,0.38);
    --font-heading: 'Cormorant Garamond', Georgia, serif;
    --font-body: 'DM Sans', system-ui, sans-serif;
    --radius-sm: 4px;
    --radius-md: 8px;
    --radius-lg: 12px;
    --shadow-card: 0 2px 16px rgba(0,0,0,0.32), 0 0 0 1px var(--border);
    --shadow-hover: 0 8px 32px rgba(0,0,0,0.44), 0 0 0 1px var(--border-hover);
    --transition: all 0.35s cubic-bezier(0.4,0,0.2,1);
  }

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }

  body {
    font-family: var(--font-body);
    background: var(--black);
    color: var(--cream);
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
  }

  @keyframes splashFadeIn  { 0%{opacity:0;transform:scale(0.97)} 100%{opacity:1;transform:scale(1)} }
  @keyframes splashFadeOut { 0%{opacity:1} 100%{opacity:0;pointer-events:none} }
  @keyframes goldGlow {
    0%,100%{text-shadow:0 0 24px rgba(201,168,76,0.5),0 0 48px rgba(201,168,76,0.2)}
    50%{text-shadow:0 0 40px rgba(201,168,76,0.8),0 0 80px rgba(201,168,76,0.35)}
  }
  @keyframes fadeUp { 0%{opacity:0;transform:translateY(18px)} 100%{opacity:1;transform:translateY(0)} }
  @keyframes shimmer { 0%{background-position:-200% center} 100%{background-position:200% center} }
  @keyframes pulse { 0%,100%{box-shadow:0 0 0 0 rgba(201,168,76,0.4)} 50%{box-shadow:0 0 0 8px rgba(201,168,76,0)} }
  @keyframes spinSlow { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
  @keyframes heroZoom { 0%{transform:scale(1.05)} 100%{transform:scale(1)} }
  @keyframes crownFloat { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-3px)} }

  .splash-enter { animation: splashFadeIn 0.6s ease forwards; }
  .splash-exit  { animation: splashFadeOut 0.7s ease forwards; }
  .gold-glow-text { animation: goldGlow 3s ease-in-out infinite; }
  .fade-up { animation: fadeUp 0.8s ease forwards; }

  .nav-link-item { position: relative; }
  .nav-link-item::after {
    content:''; position:absolute; bottom:-5px; left:0;
    height:1.5px; width:0;
    background: linear-gradient(90deg, var(--gold), var(--gold-light));
    transition: width 0.3s cubic-bezier(0.4,0,0.2,1);
  }
  .nav-link-item:hover::after, .nav-link-item.active::after { width:100%; }

  .gold-shimmer {
    background: linear-gradient(105deg, var(--gold-dim) 0%, var(--gold) 30%, var(--gold-light) 55%, var(--gold) 75%, var(--gold-dim) 100%);
    background-size: 200% auto;
    -webkit-background-clip: text; -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: shimmer 4s linear infinite;
  }

  .card-hover {
    transition: var(--transition);
    box-shadow: var(--shadow-card);
  }
  .card-hover:hover {
    transform: translateY(-3px);
    box-shadow: var(--shadow-hover);
  }

  .img-zoom-wrap { overflow: hidden; }
  .img-zoom-wrap img {
    transition: transform 0.75s cubic-bezier(0.4,0,0.2,1);
    display: block; width: 100%; height: 100%; object-fit: cover; object-position: center;
  }
  .img-zoom-wrap:hover img { transform: scale(1.05); }

  .btn-gold {
    background: linear-gradient(135deg, var(--gold-dim) 0%, var(--gold) 45%, var(--gold-light) 100%);
    color: #1A1200;
    font-family: var(--font-body); font-weight: 600; font-size: 0.68rem;
    letter-spacing: 0.18em; text-transform: uppercase;
    padding: 13px 32px; border: none; cursor: pointer;
    position: relative; overflow: hidden;
    border-radius: var(--radius-sm);
    transition: var(--transition);
    box-shadow: 0 4px 20px rgba(201,168,76,0.22);
  }
  .btn-gold::before {
    content:''; position:absolute; inset:0;
    background: rgba(255,255,255,0); transition: background 0.3s;
  }
  .btn-gold:hover::before { background: rgba(255,255,255,0.1); }
  .btn-gold:hover { box-shadow: 0 8px 28px rgba(201,168,76,0.38); transform: translateY(-1px); }
  .btn-gold:active { transform: translateY(0); }

  .btn-outline {
    background: transparent; color: var(--gold);
    font-family: var(--font-body); font-weight: 500; font-size: 0.68rem;
    letter-spacing: 0.18em; text-transform: uppercase;
    padding: 12px 32px;
    border: 1px solid rgba(201,168,76,0.45);
    cursor: pointer;
    border-radius: var(--radius-sm);
    transition: var(--transition);
  }
  .btn-outline:hover {
    background: rgba(201,168,76,0.08);
    border-color: var(--gold);
    box-shadow: 0 0 20px rgba(201,168,76,0.14);
  }

  .section-reveal { opacity:0; transform:translateY(20px); transition:opacity 0.7s ease,transform 0.7s ease; }
  .section-reveal.visible { opacity:1; transform:translateY(0); }

  .dark-mode {
    --black:#0C0A09; --black-mid:#131110; --black-card:#1C1815;
    --black-elevated:#211D19; --cream:#F2E8D5; --cream-dim:#C8B89A; --muted:#7A6B5A;
    --border: rgba(201,168,76,0.14); --border-hover: rgba(201,168,76,0.38);
    --shadow-card: 0 2px 16px rgba(0,0,0,0.32), 0 0 0 1px var(--border);
    --shadow-hover: 0 8px 32px rgba(0,0,0,0.44), 0 0 0 1px var(--border-hover);
  }
  .light-mode {
    --black:#F7F2EA; --black-mid:#EDE8DF; --black-card:#FFFFFF;
    --black-elevated:#F7F2EA; --cream:#1A120A; --cream-dim:#4A3824;
    --muted:#8A7560; --red:#7A1C2E; --red-bright:#9B1F35;
    --border: rgba(140,100,40,0.16); --border-hover: rgba(140,100,40,0.4);
    --shadow-card: 0 2px 16px rgba(0,0,0,0.08), 0 0 0 1px var(--border);
    --shadow-hover: 0 8px 32px rgba(0,0,0,0.14), 0 0 0 1px var(--border-hover);
  }
  .light-mode .hero-img-overlay {
    background: linear-gradient(to bottom,rgba(247,242,234,0.08) 0%,rgba(247,242,234,0) 30%,rgba(247,242,234,0.78) 100%) !important;
  }
  .light-mode .btn-gold { color: #2A1800; }
  .light-mode img { filter: none !important; mix-blend-mode: normal !important; }

  input, textarea, select { font-family: var(--font-body) !important; }

  ::-webkit-scrollbar { width: 4px; }
  ::-webkit-scrollbar-track { background: var(--black); }
  ::-webkit-scrollbar-thumb { background: linear-gradient(var(--red), var(--gold)); border-radius: 2px; }

  .theme-toggle {
    width: 44px; height: 24px; border-radius: 12px;
    border: 1px solid var(--border-hover);
    position: relative; cursor: pointer; transition: background 0.3s;
    display: flex; align-items: center; padding: 2px;
    background: rgba(201,168,76,0.06);
  }
  .theme-toggle .knob {
    width: 18px; height: 18px; border-radius: 50%;
    background: linear-gradient(135deg, var(--gold), var(--gold-light));
    transition: transform 0.3s cubic-bezier(0.4,0,0.2,1);
    box-shadow: 0 0 6px rgba(201,168,76,0.5);
  }
  .theme-toggle.light .knob { transform: translateX(20px); }

  @media (max-width:768px) {
    .hidden-mobile{display:none!important}
    .timeline-center-line{display:none!important}
    .timeline-grid{grid-template-columns:1fr!important; text-align:left!important}
    .timeline-right-spacer{display:none!important}
  }
  @media (min-width:769px) { .mobile-only{display:none!important} }
  @media (max-width:768px) { nav { padding-left:18px!important; padding-right:18px!important; } }
`;

const styleEl = document.createElement("style");
styleEl.textContent = globalStyles;
document.head.appendChild(styleEl);