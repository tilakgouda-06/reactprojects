import { useState, useEffect, useRef } from "react";

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

/* ─── DATA ──────────────────────────────────────────────── */
const NAV_LINKS = ["Home","About","Services","Portfolio","Help","Contact"];

const DISHES = [
  { name:"Saffron Lobster Bisque", desc:"House-smoked cream, micro herbs, caviar pearls", tag:"Chef's Signature", img:"https://images.unsplash.com/photo-1547592166-23ac45744acd?w=900&q=95&fit=crop" },
  { name:"Wagyu Tenderloin A5", desc:"Truffle jus, pomme purée, seasonal greens", tag:"Most Loved", img:"https://images.unsplash.com/photo-1558030006-450675393462?w=900&q=95&fit=crop" },
  { name:"Black Truffle Risotto", desc:"Aged parmesan, wild mushrooms, gold leaf", tag:"Vegetarian", img:"https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=900&q=95&fit=crop" },
  { name:"Miso Glazed Sea Bass", desc:"Dashi broth, pickled radish, yuzu foam", tag:"Seasonal", img:"https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=900&q=95&fit=crop" },
];

const USPS = [
  { icon:"🌿", title:"Farm-to-Table Ingredients", desc:"Every ingredient is sourced fresh daily from certified organic farms and local artisan producers." },
  { icon:"🏆", title:"Award-Winning Chefs", desc:"Our team holds 3 Michelin stars and has been recognized by the World's 50 Best Restaurants." },
  { icon:"✨", title:"Unmatched Ambience", desc:"Every corner of Maharaja's Feast is designed to transport you — from the lighting to the table linens." },
  { icon:"🍷", title:"Curated Wine Cellar", desc:"Over 800 labels selected by our resident sommelier from the finest vineyards worldwide." },
];

const TESTIMONIALS = [
  { name:"Priya Mehta", role:"Food Critic, Condé Nast", quote:"Maharaja's Feast doesn't just serve food — it orchestrates an entire sensory performance. A transcendent evening every single time.", stars:5 },
  { name:"James Whitfield", role:"CEO, Whitfield Group", quote:"We've hosted board dinners at Maharaja's Feast for three years. The consistency of excellence is simply unmatched anywhere in the city.", stars:5 },
  { name:"Aisha Kapoor", role:"Travel Blogger", quote:"If I could only eat at one restaurant for the rest of my life, it would be Maharaja's Feast. Bold claim — absolutely meant.", stars:5 },
];

const SERVICES = [
  { icon:"🍽️", title:"Fine Dining Experience", desc:"An intimate à la carte journey through seasonal tasting menus, crafted fresh each evening by Chef Laurent and his brigade." },
  { icon:"🥂", title:"Private Events & Dining", desc:"Exclusive private rooms for up to 40 guests. Perfect for anniversaries, proposals, corporate celebrations, and bespoke occasions." },
  { icon:"🚐", title:"Luxury Catering", desc:"Bring the Maharaja's Feast experience to your venue. Our catering team delivers the same Michelin-starred quality, wherever you are." },
  { icon:"📅", title:"Online Reservations", desc:"Secure your table instantly via our seamless booking system. Personalise your visit with dietary notes and special requests." },
];

const PORTFOLIO_ITEMS = [
  { category:"Food",     img:"https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=95&fit=crop", title:"Wagyu Elegance" },
  { category:"Interior", img:"https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&q=95&fit=crop", title:"The Main Hall" },
  { category:"Food",     img:"https://images.unsplash.com/photo-1481931098730-318b6f776db0?w=800&q=95&fit=crop", title:"Dessert Architecture" },
  { category:"Events",   img:"https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=95&fit=crop", title:"Private Gala Evening" },
  { category:"Interior", img:"https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=800&q=95&fit=crop", title:"Wine Cellar" },
  { category:"Food",     img:"https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=95&fit=crop", title:"Garden Harvest" },
  { category:"Events",   img:"https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=95&fit=crop", title:"Corporate Dinner" },
  { category:"Interior", img:"https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=95&fit=crop", title:"The Lounge Bar" },
  { category:"Food",     img:"https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&q=95&fit=crop", title:"Seasonal Plating" },
];

const TIMELINE = [
  { year:"2008", title:"The Beginning",       desc:"Chef Laurent Moreau opens Maharaja's Feast as a 30-seat bistro in South Mumbai with a single vision: honest luxury." },
  { year:"2012", title:"First Michelin Star",  desc:"Four years of relentless refinement earns Maharaja's Feast its first Michelin star — the first in Maharashtra." },
  { year:"2017", title:"The Grand Expansion", desc:"A full renovation transforms the restaurant into a 120-seat temple of fine dining, with a private event wing." },
  { year:"2022", title:"Third Star Awarded",  desc:"Maharaja's Feast joins a rarefied group of three-star establishments in Asia, cementing its global reputation." },
];

/* ─── SCROLL REVEAL ─────────────────────────────────────── */
function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".section-reveal");
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("visible"); observer.unobserve(e.target); } });
    }, { threshold: 0.07 });
    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  });
}

/* ─── MAHARAJA CROWN SVG ─────────────────────────────────── */
function CrownIcon({ size = 18, color = "var(--gold)" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display:"inline-block", verticalAlign:"middle", animation:"crownFloat 3s ease-in-out infinite", flexShrink:0 }}>
      <path d="M2 20 L6 8 L12 14 L16 4 L20 14 L26 8 L30 20 Z" fill={color} opacity="0.92"/>
      <rect x="2" y="20" width="28" height="3" rx="1.5" fill={color} opacity="0.7"/>
      <circle cx="16" cy="4" r="2" fill={color}/>
      <circle cx="6" cy="8" r="1.5" fill={color} opacity="0.8"/>
      <circle cx="26" cy="8" r="1.5" fill={color} opacity="0.8"/>
    </svg>
  );
}

/* ─── HELPERS ───────────────────────────────────────────── */
function GoldDivider() {
  return (
    <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:"10px", margin:"14px 0" }}>
      <div style={{ height:"1px", width:"48px", background:"linear-gradient(to right, transparent, var(--gold))" }} />
      <svg width="10" height="10" viewBox="0 0 14 14" fill="none">
        <path d="M7 0L8.4 5.6L14 7L8.4 8.4L7 14L5.6 8.4L0 7L5.6 5.6Z" fill="var(--gold)" />
      </svg>
      <div style={{ height:"1px", width:"48px", background:"linear-gradient(to left, transparent, var(--gold))" }} />
    </div>
  );
}

function SectionLabel({ label }) {
  return (
    <p style={{ fontFamily:"var(--font-body)", color:"var(--gold)", fontSize:"0.58rem", letterSpacing:"0.32em", textTransform:"uppercase", fontWeight:500, marginBottom:"8px", opacity:0.85 }}>{label}</p>
  );
}

function SectionHeader({ label, heading, accent, sub }) {
  return (
    <div style={{ textAlign:"center", marginBottom:"40px" }}>
      <SectionLabel label={label} />
      <h2 style={{ fontFamily:"var(--font-heading)", fontSize:"clamp(1.9rem,4vw,3.1rem)", color:"var(--cream)", lineHeight:1.15, marginBottom:"2px", fontWeight:600 }}>
        {heading}{accent && <> <em style={{ color:"var(--gold)", fontWeight:400 }}>{accent}</em></>}
      </h2>
      <GoldDivider />
      {sub && <p style={{ fontFamily:"var(--font-body)", color:"var(--muted)", marginTop:"12px", lineHeight:1.8, fontSize:"0.88rem", fontWeight:300, maxWidth:"520px", margin:"12px auto 0" }}>{sub}</p>}
    </div>
  );
}

/* ─── SPLASH ────────────────────────────────────────────── */
function SplashScreen({ onDone }) {
  const [exit, setExit] = useState(false);
  useEffect(() => {
    const t1 = setTimeout(() => setExit(true), 2800);
    const t2 = setTimeout(() => onDone(), 3500);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [onDone]);

  return (
    <div className={exit ? "splash-exit" : "splash-enter"} style={{
      position:"fixed", inset:0, zIndex:9999,
      background:"linear-gradient(145deg,#0C0A09 0%,#1A0C0A 55%,#0C0A09 100%)",
      display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", overflow:"hidden"
    }}>
      <div style={{ position:"absolute", width:"min(540px,88vw)", height:"min(540px,88vw)", border:"1px solid rgba(201,168,76,0.08)", borderRadius:"50%", top:"50%", left:"50%", transform:"translate(-50%,-50%)", animation:"spinSlow 32s linear infinite" }} />
      <div style={{ position:"absolute", width:"min(360px,62vw)", height:"min(360px,62vw)", border:"1px solid rgba(122,28,46,0.1)", borderRadius:"50%", top:"50%", left:"50%", transform:"translate(-50%,-50%)", animation:"spinSlow 20s linear infinite reverse" }} />
      <div style={{ position:"absolute", inset:0, background:"radial-gradient(ellipse at center,rgba(122,28,46,0.14) 0%,transparent 68%)" }} />
      <div style={{ position:"relative", textAlign:"center", padding:"0 28px" }}>
        <p style={{ fontFamily:"var(--font-body)", fontSize:"0.57rem", letterSpacing:"0.36em", textTransform:"uppercase", color:"rgba(201,168,76,0.65)", marginBottom:"18px", animation:"fadeUp 0.8s ease 0.3s both" }}>Welcome to</p>
        <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:"14px", marginBottom:"8px", animation:"fadeUp 0.8s ease 0.5s both" }}>
          <CrownIcon size={28} />
          <h1 style={{ fontFamily:"var(--font-heading)", fontSize:"clamp(2.4rem,9vw,5.2rem)", fontWeight:700, lineHeight:1, margin:0 }}>
            <span className="gold-shimmer gold-glow-text">MAHARAJA'S</span>
          </h1>
          <CrownIcon size={28} />
        </div>
        <h2 style={{ fontFamily:"var(--font-heading)", fontSize:"clamp(1.6rem,5vw,3rem)", color:"var(--cream)", fontStyle:"italic", fontWeight:300, marginBottom:"14px", animation:"fadeUp 0.8s ease 0.7s both" }}>Feast</h2>
        <div style={{ animation:"fadeUp 0.8s ease 0.9s both" }}><GoldDivider /></div>
        <p style={{ fontFamily:"var(--font-body)", fontSize:"0.68rem", letterSpacing:"0.28em", textTransform:"uppercase", color:"var(--muted)", marginTop:"10px", animation:"fadeUp 0.8s ease 1.1s both" }}>Mumbai · Est. 2008</p>
      </div>
    </div>
  );
}

/* ─── NAVBAR ────────────────────────────────────────────── */
function Navbar({ activePage, setActivePage, isDark, setIsDark }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav style={{
      position:"fixed", top:0, left:0, right:0, zIndex:100,
      display:"flex", alignItems:"center", justifyContent:"space-between",
      padding: scrolled ? "10px 48px" : "18px 48px",
      transition:"all 0.45s cubic-bezier(0.4,0,0.2,1)",
      ...(scrolled ? {
        backdropFilter:"blur(24px) saturate(160%)",
        WebkitBackdropFilter:"blur(24px) saturate(160%)",
        background:"rgba(12,10,9,0.94)",
        borderBottom:"1px solid rgba(201,168,76,0.1)"
      } : { background:"transparent" })
    }}>
      {/* Logo */}
      <button onClick={() => setActivePage("Home")} style={{
        display:"flex", alignItems:"center", gap:"9px",
        background:"none", border:"none", cursor:"pointer"
      }}>
        <CrownIcon size={20} />
        <span style={{
          fontFamily:"var(--font-heading)", fontSize:"1.25rem", fontWeight:700,
          background:"linear-gradient(135deg,var(--gold),var(--gold-light))",
          WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent",
          backgroundClip:"text", letterSpacing:"0.1em"
        }}>MAHARAJA'S</span>
        <span style={{ fontFamily:"var(--font-heading)", fontStyle:"italic", fontWeight:300, fontSize:"1.1rem", color:"var(--cream)", WebkitTextFillColor:"var(--cream)", letterSpacing:"0.04em" }}>Feast</span>
      </button>

      <ul style={{ display:"flex", alignItems:"center", gap:"30px", listStyle:"none" }} className="hidden-mobile">
        {NAV_LINKS.map(p => (
          <li key={p}>
            <button onClick={() => setActivePage(p)}
              className={`nav-link-item ${activePage===p?"active":""}`}
              style={{
                fontFamily:"var(--font-body)", fontSize:"0.63rem", letterSpacing:"0.16em",
                textTransform:"uppercase", fontWeight:500, cursor:"pointer", border:"none",
                background:"transparent", padding:"4px 0",
                color: activePage===p ? "var(--gold)" : "var(--muted)",
                transition:"color 0.3s"
              }}>{p}</button>
          </li>
        ))}
      </ul>

      <div style={{ display:"flex", alignItems:"center", gap:"14px" }} className="hidden-mobile">
        <div className={`theme-toggle ${!isDark?"light":""}`} onClick={() => setIsDark(!isDark)} title={isDark?"Light Mode":"Dark Mode"}>
          <div className="knob" />
        </div>
        <button onClick={() => setActivePage("Contact")} className="btn-outline" style={{ fontSize:"0.6rem", padding:"10px 22px" }}>Reserve a Table</button>
      </div>

      <div style={{ display:"flex", alignItems:"center", gap:"12px" }} className="mobile-only">
        <div className={`theme-toggle ${!isDark?"light":""}`} onClick={() => setIsDark(!isDark)}><div className="knob" /></div>
        <button onClick={() => setMenuOpen(!menuOpen)} style={{ color:"var(--gold)", fontSize:"1.3rem", background:"none", border:"none", cursor:"pointer" }}>
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {menuOpen && (
        <div style={{
          position:"absolute", top:"100%", left:0, right:0,
          backdropFilter:"blur(28px)", WebkitBackdropFilter:"blur(28px)",
          background:"rgba(12,10,9,0.97)",
          borderTop:"1px solid rgba(201,168,76,0.1)",
          padding:"24px 0 20px", display:"flex", flexDirection:"column", alignItems:"center", gap:"16px",
          animation:"fadeUp 0.3s ease"
        }}>
          {NAV_LINKS.map(p => (
            <button key={p} onClick={() => { setActivePage(p); setMenuOpen(false); }}
              style={{ fontFamily:"var(--font-body)", fontSize:"0.7rem", letterSpacing:"0.2em", textTransform:"uppercase", background:"none", border:"none", cursor:"pointer", color: activePage===p ? "var(--gold)" : "var(--muted)", fontWeight:500 }}>{p}</button>
          ))}
          <button onClick={() => { setActivePage("Contact"); setMenuOpen(false); }} className="btn-gold" style={{ marginTop:"6px" }}>Reserve a Table</button>
        </div>
      )}
    </nav>
  );
}

/* ─── HOME ──────────────────────────────────────────────── */
function Home({ setActivePage }) {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  useScrollReveal();

  useEffect(() => {
    const t = setInterval(() => setActiveTestimonial(p => (p+1) % TESTIMONIALS.length), 5200);
    return () => clearInterval(t);
  }, []);

  return (
    <div style={{ background:"var(--black)" }}>

      {/* HERO */}
      <section style={{ position:"relative", height:"100vh", display:"flex", alignItems:"center", justifyContent:"center", overflow:"hidden" }}>
        <div style={{ position:"absolute", inset:0 }}>
          <img
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=95&fit=crop"
            alt="Fine dining"
            style={{ width:"100%", height:"100%", objectFit:"cover", objectPosition:"center", display:"block", animation:"heroZoom 9s ease forwards" }}
          />
          <div className="hero-img-overlay" style={{ position:"absolute", inset:0, background:"linear-gradient(to bottom,rgba(12,10,9,0.35) 0%,rgba(122,28,46,0.03) 40%,rgba(12,10,9,0.88) 100%)" }} />
        </div>
        <div style={{ position:"relative", textAlign:"center", padding:"0 24px", maxWidth:"820px", margin:"0 auto" }}>
          <p className="fade-up" style={{ fontFamily:"var(--font-body)", color:"var(--gold)", fontSize:"0.6rem", letterSpacing:"0.36em", textTransform:"uppercase", marginBottom:"18px", animationDelay:"0.3s", animationFillMode:"both", opacity:0.85 }}>
            Established 2008 · Mumbai
          </p>
          <h1 className="fade-up" style={{ fontFamily:"var(--font-heading)", fontSize:"clamp(3rem,8.5vw,6.8rem)", fontWeight:600, color:"var(--cream)", lineHeight:1.08, marginBottom:"20px", animationDelay:"0.5s", animationFillMode:"both" }}>
            Where Taste<br /><em className="gold-shimmer" style={{ fontWeight:300 }}>Meets Royalty</em>
          </h1>
          <p className="fade-up" style={{ fontFamily:"var(--font-body)", fontWeight:300, color:"rgba(242,232,213,0.82)", fontSize:"clamp(0.88rem,2vw,1.05rem)", maxWidth:"440px", margin:"0 auto 34px", lineHeight:1.9, animationDelay:"0.7s", animationFillMode:"both" }}>
            A culinary experience beyond expectations — three Michelin stars, one unforgettable evening.
          </p>
          <div className="fade-up" style={{ display:"flex", gap:"12px", justifyContent:"center", flexWrap:"wrap", animationDelay:"0.9s", animationFillMode:"both" }}>
            <button onClick={() => setActivePage("Contact")} className="btn-gold">Reserve a Table</button>
            <button onClick={() => setActivePage("Services")} className="btn-outline">View Menu</button>
          </div>
        </div>
        <div style={{ position:"absolute", bottom:"28px", left:"50%", transform:"translateX(-50%)", display:"flex", flexDirection:"column", alignItems:"center", gap:"6px", animation:"fadeUp 1s ease 1.2s both" }}>
          <div style={{ width:"1px", height:"36px", background:"linear-gradient(to bottom,var(--gold),transparent)" }} />
          <p style={{ fontFamily:"var(--font-body)", color:"var(--gold)", fontSize:"0.5rem", letterSpacing:"0.3em", textTransform:"uppercase", opacity:0.7 }}>Scroll</p>
        </div>
      </section>

      {/* FEATURED DISHES */}
      <section className="section-reveal" style={{ padding:"72px 24px 60px", maxWidth:"1280px", margin:"0 auto" }}>
        <SectionHeader label="Our Creations" heading="Featured" accent="Dishes" />
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))", gap:"16px" }}>
          {DISHES.map((dish, i) => (
            <div key={i} className="card-hover"
              style={{ position:"relative", cursor:"pointer", background:"var(--black-card)", borderRadius:"var(--radius-md)", overflow:"hidden" }}>
              <div className="img-zoom-wrap" style={{ aspectRatio:"4/3", overflow:"hidden", position:"relative" }}>
                <img src={dish.img} alt={dish.name} loading="lazy" style={{ width:"100%", height:"100%", objectFit:"cover", objectPosition:"center", display:"block" }} />
                <div style={{ position:"absolute", inset:0, background:"linear-gradient(to top,rgba(12,10,9,0.7) 0%,rgba(12,10,9,0.01) 45%,transparent 100%)", pointerEvents:"none" }} />
              </div>
              <div style={{ position:"absolute", top:"10px", left:"10px" }}>
                <span style={{ fontFamily:"var(--font-body)", fontSize:"0.55rem", letterSpacing:"0.14em", textTransform:"uppercase", background:"linear-gradient(135deg,var(--gold-dim),var(--gold))", color:"#1A1200", padding:"4px 10px", fontWeight:600, borderRadius:"2px" }}>
                  {dish.tag}
                </span>
              </div>
              <div style={{ padding:"16px 18px 20px" }}>
                <h3 style={{ fontFamily:"var(--font-heading)", fontSize:"1.15rem", color:"var(--cream)", marginBottom:"5px", fontWeight:600 }}>{dish.name}</h3>
                <p style={{ fontFamily:"var(--font-body)", color:"var(--muted)", fontSize:"0.8rem", fontWeight:300, lineHeight:1.55 }}>{dish.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section-reveal" style={{ padding:"64px 24px", background:"var(--black-mid)", borderTop:"1px solid var(--border)", borderBottom:"1px solid var(--border)" }}>
        <div style={{ maxWidth:"1280px", margin:"0 auto" }}>
          <SectionHeader label="The Promise" heading="Why" accent="Choose Us" />
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))", gap:"16px" }}>
            {USPS.map((u,i) => (
              <div key={i} className="card-hover" style={{ textAlign:"center", padding:"32px 22px 28px", background:"var(--black-card)", borderRadius:"var(--radius-md)", position:"relative", overflow:"hidden" }}>
                <div style={{ position:"absolute", top:0, left:"50%", transform:"translateX(-50%)", width:"56px", height:"1px", background:"linear-gradient(90deg,transparent,var(--gold),transparent)" }} />
                <div style={{ fontSize:"1.8rem", marginBottom:"14px" }}>{u.icon}</div>
                <h3 style={{ fontFamily:"var(--font-heading)", fontSize:"1.05rem", color:"var(--gold)", marginBottom:"10px", fontWeight:600 }}>{u.title}</h3>
                <p style={{ fontFamily:"var(--font-body)", color:"var(--muted)", fontSize:"0.81rem", lineHeight:1.78, fontWeight:300 }}>{u.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHEF HIGHLIGHT */}
      <section className="section-reveal" style={{ padding:"72px 24px 64px", maxWidth:"1280px", margin:"0 auto" }}>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))", gap:"56px", alignItems:"center" }}>
          <div style={{ position:"relative" }}>
            <div className="img-zoom-wrap" style={{ overflow:"hidden", borderRadius:"var(--radius-sm)" }}>
              <img src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=900&q=95&fit=crop"
                alt="Chef Laurent" style={{ width:"100%", height:"520px", objectFit:"cover", objectPosition:"center top", display:"block" }} loading="lazy" />
            </div>
            <div style={{ position:"absolute", bottom:"-14px", right:"-14px", width:"72px", height:"72px", border:"1px solid rgba(201,168,76,0.35)", pointerEvents:"none", borderRadius:"var(--radius-sm)" }} />
            <div style={{ position:"absolute", top:"-14px", left:"-14px", width:"72px", height:"72px", border:"1px solid rgba(201,168,76,0.18)", pointerEvents:"none", borderRadius:"var(--radius-sm)" }} />
            <div style={{ position:"absolute", bottom:"24px", left:"24px", background:"linear-gradient(135deg,var(--red),var(--red-bright))", padding:"12px 18px", borderLeft:"3px solid var(--gold)", borderRadius:"0 var(--radius-sm) var(--radius-sm) 0" }}>
              <p style={{ fontFamily:"var(--font-body)", fontSize:"0.6rem", color:"var(--gold)", letterSpacing:"0.16em", textTransform:"uppercase", marginBottom:"3px" }}>Head Chef</p>
              <p style={{ fontFamily:"var(--font-heading)", fontSize:"1.2rem", color:"var(--cream)", fontWeight:600 }}>Laurent Moreau</p>
            </div>
          </div>
          <div>
            <SectionLabel label="Meet the Maestro" />
            <h2 style={{ fontFamily:"var(--font-heading)", fontSize:"clamp(2rem,4vw,3.3rem)", color:"var(--cream)", lineHeight:1.12, marginBottom:"4px", fontWeight:600 }}>
              Chef Laurent<br /><em style={{ color:"var(--gold)", fontWeight:300 }}>Moreau</em>
            </h2>
            <GoldDivider />
            <p style={{ fontFamily:"var(--font-body)", color:"var(--muted)", lineHeight:1.88, marginBottom:"14px", fontWeight:300, fontSize:"0.88rem", marginTop:"16px" }}>
              With over 18 years of mastery across Paris, Tokyo, and New York, Chef Laurent brings a philosophy that food is emotion — plated. His menus are seasonal, instinctive, and deeply personal.
            </p>
            <blockquote style={{ fontFamily:"var(--font-heading)", color:"rgba(201,168,76,0.8)", lineHeight:1.7, marginBottom:"32px", fontSize:"1rem", fontStyle:"italic", borderLeft:"2px solid rgba(201,168,76,0.3)", paddingLeft:"16px", marginLeft:0 }}>
              "Cooking is not a profession — it is a conversation between the earth and the soul."
            </blockquote>
            <div style={{ display:"flex", gap:"28px" }}>
              {[["18+","Years of Mastery"],["3","Michelin Stars"],["12","Global Awards"]].map(([num,label]) => (
                <div key={label}>
                  <p style={{ fontFamily:"var(--font-heading)", fontSize:"2rem", color:"var(--gold)", fontWeight:700, lineHeight:1 }}>{num}</p>
                  <p style={{ fontFamily:"var(--font-body)", color:"var(--muted)", fontSize:"0.56rem", letterSpacing:"0.14em", textTransform:"uppercase", marginTop:"5px" }}>{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section-reveal" style={{ padding:"64px 24px", background:"var(--black-mid)", borderTop:"1px solid var(--border)", borderBottom:"1px solid var(--border)" }}>
        <div style={{ maxWidth:"660px", margin:"0 auto", textAlign:"center" }}>
          <SectionHeader label="Guest Voices" heading="What They" accent="Say" />
          <div style={{ marginTop:"8px", minHeight:"190px", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center" }}>
            <p style={{ fontFamily:"var(--font-heading)", color:"var(--cream)", fontSize:"clamp(0.95rem,2.5vw,1.28rem)", fontWeight:300, lineHeight:1.78, marginBottom:"22px", fontStyle:"italic" }}>
              "{TESTIMONIALS[activeTestimonial].quote}"
            </p>
            <div style={{ color:"var(--gold)", fontSize:"0.9rem", marginBottom:"12px", letterSpacing:"5px" }}>{"★".repeat(TESTIMONIALS[activeTestimonial].stars)}</div>
            <p style={{ fontFamily:"var(--font-body)", color:"var(--cream)", fontWeight:500, fontSize:"0.88rem", letterSpacing:"0.05em" }}>{TESTIMONIALS[activeTestimonial].name}</p>
            <p style={{ fontFamily:"var(--font-body)", color:"var(--muted)", fontSize:"0.65rem", letterSpacing:"0.15em", textTransform:"uppercase", marginTop:"3px" }}>{TESTIMONIALS[activeTestimonial].role}</p>
          </div>
          <div style={{ display:"flex", justifyContent:"center", gap:"7px", marginTop:"22px" }}>
            {TESTIMONIALS.map((_,i) => (
              <button key={i} onClick={() => setActiveTestimonial(i)} style={{
                width: i===activeTestimonial ? "26px" : "14px", height:"2px",
                background: i===activeTestimonial ? "var(--gold)" : "rgba(122,107,90,0.3)",
                border:"none", cursor:"pointer", transition:"all 0.35s ease", borderRadius:"1px",
                boxShadow: i===activeTestimonial ? "0 0 8px rgba(201,168,76,0.5)" : "none"
              }} />
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="section-reveal" style={{ padding:"72px 24px 64px", maxWidth:"1280px", margin:"0 auto" }}>
        <SectionHeader label="The Royal World" heading="Gallery" accent="Preview" />
        <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"6px", borderRadius:"var(--radius-sm)", overflow:"hidden" }}>
          {PORTFOLIO_ITEMS.slice(0,6).map((item,i) => (
            <div key={i} style={{ position:"relative", aspectRatio:"1", overflow:"hidden", cursor:"pointer" }} className="img-zoom-wrap">
              <img src={item.img} alt={item.title} style={{ width:"100%", height:"100%", objectFit:"cover", objectPosition:"center", display:"block" }} loading="lazy" />
              <div style={{ position:"absolute", inset:0, background:"rgba(12,10,9,0.56)", opacity:0, transition:"opacity 0.32s ease", display:"flex", alignItems:"center", justifyContent:"center" }}
                onMouseEnter={e => { e.currentTarget.style.opacity=1; }}
                onMouseLeave={e => { e.currentTarget.style.opacity=0; }}>
                <p style={{ fontFamily:"var(--font-heading)", color:"var(--cream)", fontSize:"0.95rem", pointerEvents:"none", fontWeight:500 }}>{item.title}</p>
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign:"center", marginTop:"28px" }}>
          <button onClick={() => setActivePage("Portfolio")} className="btn-outline">View Full Portfolio</button>
        </div>
      </section>
    </div>
  );
}

/* ─── ABOUT ─────────────────────────────────────────────── */
function About() {
  useScrollReveal();
  return (
    <div style={{ background:"var(--black)", paddingTop:"80px" }}>
      <section className="section-reveal" style={{ maxWidth:"1280px", margin:"0 auto", padding:"64px 24px 56px", display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))", gap:"52px", alignItems:"center" }}>
        <div>
          <SectionLabel label="Our Story" />
          <h2 style={{ fontFamily:"var(--font-heading)", fontSize:"clamp(2rem,4.5vw,3.5rem)", color:"var(--cream)", lineHeight:1.12, marginBottom:"12px", fontWeight:600 }}>
            Born from<br /><em style={{ color:"var(--gold)", fontWeight:300 }}>Passion.</em><br />Refined by Time.
          </h2>
          <GoldDivider />
          <div style={{ marginTop:"20px", display:"flex", flexDirection:"column", gap:"14px" }}>
            <p style={{ fontFamily:"var(--font-body)", color:"var(--muted)", lineHeight:1.88, fontWeight:300, fontSize:"0.87rem" }}>Maharaja's Feast was never meant to be just a restaurant. When Chef Laurent Moreau arrived in Mumbai in 2008 with nothing but two suitcases and an obsession with honest flavour, he found a city hungry for something different — something that honoured tradition while embracing the bold.</p>
            <p style={{ fontFamily:"var(--font-body)", color:"var(--muted)", lineHeight:1.88, fontWeight:300, fontSize:"0.87rem" }}>What began as a 30-seat bistro in Colaba has grown into one of Asia's most celebrated dining destinations. Three Michelin stars, countless memories, and an unwavering commitment to the idea that dining is theatre — and every guest deserves a front-row seat.</p>
          </div>
        </div>
        <div style={{ position:"relative" }}>
          <div className="img-zoom-wrap" style={{ overflow:"hidden", borderRadius:"var(--radius-sm)" }}>
            <img src="https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=900&q=95&fit=crop"
              alt="Interior" style={{ width:"100%", height:"440px", objectFit:"cover", objectPosition:"center", display:"block" }} loading="lazy" />
          </div>
          <div style={{ position:"absolute", bottom:"-14px", left:"-14px", background:"linear-gradient(135deg,var(--gold-dim),var(--gold))", padding:"16px 20px", borderRadius:"0 var(--radius-sm) 0 0" }}>
            <p style={{ fontFamily:"var(--font-heading)", fontSize:"2.2rem", color:"#1A1200", fontWeight:700 }}>2008</p>
            <p style={{ fontFamily:"var(--font-body)", color:"rgba(26,18,0,0.7)", fontSize:"0.56rem", letterSpacing:"0.15em", textTransform:"uppercase", marginTop:"2px" }}>Est. Mumbai</p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-reveal" style={{ background:"var(--black-mid)", borderTop:"1px solid var(--border)", borderBottom:"1px solid var(--border)", padding:"64px 24px" }}>
        <div style={{ maxWidth:"820px", margin:"0 auto" }}>
          <SectionHeader label="Our Journey" heading="Milestones" />
          <div style={{ position:"relative" }}>
            <div className="timeline-center-line" style={{ position:"absolute", left:"50%", top:0, bottom:0, width:"1px", background:"linear-gradient(to bottom,transparent,rgba(201,168,76,0.22),transparent)" }} />
            <div style={{ display:"flex", flexDirection:"column", gap:"36px" }}>
              {TIMELINE.map((item,i) => (
                <div key={i} className="timeline-grid" style={{ display:"grid", gridTemplateColumns:"1fr 20px 1fr", gap:"24px", alignItems:"center" }}>
                  <div style={{ textAlign: i%2===0?"right":"left", order: i%2===0?0:2 }}>
                    <span style={{ fontFamily:"var(--font-heading)", color:"var(--gold)", fontSize:"1.45rem", display:"block", marginBottom:"4px", fontWeight:700 }}>{item.year}</span>
                    <h3 style={{ fontFamily:"var(--font-heading)", color:"var(--cream)", fontSize:"1rem", marginBottom:"6px", fontWeight:600 }}>{item.title}</h3>
                    <p style={{ fontFamily:"var(--font-body)", color:"var(--muted)", fontSize:"0.8rem", lineHeight:1.72, fontWeight:300 }}>{item.desc}</p>
                  </div>
                  <div style={{ display:"flex", justifyContent:"center", order:1 }}>
                    <div style={{ width:"10px", height:"10px", borderRadius:"50%", background:"linear-gradient(135deg,var(--gold-dim),var(--gold-light))", boxShadow:"0 0 0 4px rgba(201,168,76,0.15)", animation:"pulse 2.2s ease infinite" }} />
                  </div>
                  <div className="timeline-right-spacer" style={{ order: i%2===0?2:0 }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="section-reveal" style={{ padding:"64px 24px", maxWidth:"1280px", margin:"0 auto" }}>
        <SectionHeader label="Recognition" heading="Awards &" accent="Acclaim" />
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(190px,1fr))", gap:"14px" }}>
          {[["⭐⭐⭐","Michelin Stars","2022–Present"],["🥇","Asia's Best Restaurant","World's 50 Best, 2023"],["🍷","Best Wine Programme","James Beard, 2021"],["🏛️","Luxury Dining Award","Condé Nast, 2024"]].map(([icon,award,org]) => (
            <div key={award} className="card-hover" style={{ textAlign:"center", padding:"28px 18px", background:"var(--black-card)", borderRadius:"var(--radius-md)" }}>
              <div style={{ fontSize:"1.6rem", marginBottom:"12px" }}>{icon}</div>
              <p style={{ fontFamily:"var(--font-heading)", color:"var(--gold)", fontSize:"0.92rem", marginBottom:"5px", fontWeight:600 }}>{award}</p>
              <p style={{ fontFamily:"var(--font-body)", color:"var(--muted)", fontSize:"0.67rem", letterSpacing:"0.1em" }}>{org}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Ambience Grid */}
      <section style={{ maxWidth:"1280px", margin:"0 auto", padding:"0 24px 72px" }}>
        <div style={{ display:"grid", gridTemplateColumns:"2fr 1fr", gap:"6px", height:"400px", borderRadius:"var(--radius-sm)", overflow:"hidden" }}>
          <div className="img-zoom-wrap" style={{ overflow:"hidden", height:"400px" }}>
            <img src="https://images.unsplash.com/photo-1552566626-52f8b828add9?w=900&q=95&fit=crop" alt="Main hall" style={{ width:"100%", height:"100%", objectFit:"cover", objectPosition:"center", display:"block" }} loading="lazy" />
          </div>
          <div style={{ display:"flex", flexDirection:"column", gap:"6px", height:"400px" }}>
            <div className="img-zoom-wrap" style={{ flex:1, overflow:"hidden" }}>
              <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&q=95&fit=crop" alt="Lounge" style={{ width:"100%", height:"100%", objectFit:"cover", objectPosition:"center", display:"block" }} loading="lazy" />
            </div>
            <div className="img-zoom-wrap" style={{ flex:1, overflow:"hidden" }}>
              <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&q=95&fit=crop" alt="Dining" style={{ width:"100%", height:"100%", objectFit:"cover", objectPosition:"center", display:"block" }} loading="lazy" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ─── SERVICES ──────────────────────────────────────────── */
function Services({ setActivePage }) {
  useScrollReveal();
  return (
    <div style={{ background:"var(--black)", paddingTop:"80px" }}>
      <section className="section-reveal" style={{ maxWidth:"680px", margin:"0 auto", padding:"64px 24px 48px", textAlign:"center" }}>
        <SectionHeader label="What We Offer" heading="Our" accent="Services"
          sub="Every service at Maharaja's Feast is curated with the same exacting standard — an obsessive attention to detail that transforms any occasion into an extraordinary memory." />
      </section>

      <section className="section-reveal" style={{ maxWidth:"1280px", margin:"0 auto", padding:"0 24px 64px", display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))", gap:"16px" }}>
        {SERVICES.map((s,i) => (
          <div key={i} className="card-hover" style={{ padding:"36px 26px", background:"var(--black-card)", borderRadius:"var(--radius-md)", position:"relative", overflow:"hidden" }}>
            <div style={{ position:"absolute", top:0, left:0, right:0, height:"2px", background:"linear-gradient(90deg,transparent,var(--gold),transparent)", opacity:0.5 }} />
            <div style={{ fontSize:"2.2rem", marginBottom:"16px" }}>{s.icon}</div>
            <h3 style={{ fontFamily:"var(--font-heading)", fontSize:"1.25rem", color:"var(--cream)", marginBottom:"10px", fontWeight:600 }}>{s.title}</h3>
            <p style={{ fontFamily:"var(--font-body)", color:"var(--muted)", lineHeight:1.75, fontWeight:300, fontSize:"0.84rem" }}>{s.desc}</p>
            <button onClick={() => setActivePage("Contact")} style={{ marginTop:"22px", fontFamily:"var(--font-body)", fontSize:"0.57rem", letterSpacing:"0.2em", textTransform:"uppercase", color:"var(--gold)", background:"none", border:"none", borderBottom:"1px solid rgba(201,168,76,0.28)", paddingBottom:"2px", cursor:"pointer", transition:"border-color 0.3s", display:"inline-flex", alignItems:"center", gap:"5px" }}>Enquire Now →</button>
          </div>
        ))}
      </section>

      <section className="section-reveal" style={{ position:"relative", height:"280px", display:"flex", alignItems:"center", justifyContent:"center", overflow:"hidden" }}>
        <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1800&q=95&fit=crop"
          alt="Private dining" style={{ position:"absolute", inset:0, width:"100%", height:"100%", objectFit:"cover", objectPosition:"center" }} loading="lazy" />
        <div style={{ position:"absolute", inset:0, background:"rgba(12,10,9,0.65)" }} />
        <div style={{ position:"relative", textAlign:"center", padding:"0 24px" }}>
          <p style={{ fontFamily:"var(--font-heading)", fontSize:"clamp(1.3rem,3vw,2.1rem)", color:"var(--cream)", marginBottom:"22px", fontStyle:"italic", fontWeight:300 }}>Planning something special?</p>
          <button onClick={() => setActivePage("Contact")} className="btn-gold">Talk to Our Events Team</button>
        </div>
      </section>
    </div>
  );
}

/* ─── PORTFOLIO ─────────────────────────────────────────── */
function Portfolio() {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState(null);
  const FILTERS = ["All","Food","Interior","Events"];
  const filtered = filter==="All" ? PORTFOLIO_ITEMS : PORTFOLIO_ITEMS.filter(i => i.category===filter);
  useScrollReveal();

  return (
    <div style={{ background:"var(--black)", paddingTop:"80px" }}>
      <section className="section-reveal" style={{ maxWidth:"680px", margin:"0 auto", padding:"64px 24px 32px", textAlign:"center" }}>
        <SectionHeader label="Visual Story" heading="Our" accent="Portfolio" />
      </section>

      <div style={{ display:"flex", justifyContent:"center", gap:"0", marginBottom:"32px", padding:"0 24px" }}>
        {FILTERS.map(f => (
          <button key={f} onClick={() => setFilter(f)} style={{
            fontFamily:"var(--font-body)", fontSize:"0.6rem", letterSpacing:"0.2em", textTransform:"uppercase",
            background: filter===f ? "rgba(201,168,76,0.1)" : "none", cursor:"pointer",
            padding:"9px 20px",
            border: filter===f ? "1px solid rgba(201,168,76,0.36)" : "1px solid transparent",
            color: filter===f ? "var(--gold)" : "var(--muted)", transition:"all 0.3s ease",
            borderRadius:"var(--radius-sm)"
          }}>{f}</button>
        ))}
      </div>

      <div style={{ maxWidth:"1280px", margin:"0 auto", padding:"0 24px 72px" }}>
        <div style={{ columns:"2", columnGap:"8px" }} className="portfolio-cols">
          {filtered.map((item,i) => (
            <div key={`${filter}-${i}`} onClick={() => setLightbox(item)} className="img-zoom-wrap"
              style={{ position:"relative", marginBottom:"8px", overflow:"hidden", cursor:"zoom-in", breakInside:"avoid", borderRadius:"var(--radius-sm)" }}>
              <img src={item.img} alt={item.title} style={{ width:"100%", display:"block", objectFit:"cover" }} loading="lazy" />
              <div style={{ position:"absolute", inset:0, background:"rgba(12,10,9,0.6)", opacity:0, transition:"opacity 0.3s", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:"5px", pointerEvents:"none" }}>
                <span style={{ fontFamily:"var(--font-body)", fontSize:"0.55rem", letterSpacing:"0.2em", textTransform:"uppercase", color:"var(--gold)" }}>{item.category}</span>
                <p style={{ fontFamily:"var(--font-heading)", color:"var(--cream)", fontSize:"0.95rem", fontWeight:500 }}>{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightbox && (
        <div style={{ position:"fixed", inset:0, zIndex:200, backdropFilter:"blur(20px)", WebkitBackdropFilter:"blur(20px)", background:"rgba(12,10,9,0.94)", display:"flex", alignItems:"center", justifyContent:"center", padding:"60px 24px 24px" }} onClick={() => setLightbox(null)}>
          <button onClick={() => setLightbox(null)} style={{ position:"absolute", top:"20px", right:"24px", color:"var(--gold)", fontSize:"1.2rem", background:"rgba(12,10,9,0.7)", border:"1px solid rgba(201,168,76,0.3)", width:"36px", height:"36px", borderRadius:"50%", cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center" }}>✕</button>
          <div style={{ maxWidth:"820px", width:"100%" }} onClick={e => e.stopPropagation()}>
            <img src={lightbox.img} alt={lightbox.title} style={{ width:"100%", maxHeight:"72vh", objectFit:"contain", display:"block", borderRadius:"var(--radius-sm)" }} />
            <div style={{ marginTop:"14px", textAlign:"center" }}>
              <span style={{ fontFamily:"var(--font-body)", fontSize:"0.55rem", letterSpacing:"0.2em", textTransform:"uppercase", color:"var(--gold)" }}>{lightbox.category}</span>
              <p style={{ fontFamily:"var(--font-heading)", color:"var(--cream)", fontSize:"1.1rem", marginTop:"4px", fontWeight:500 }}>{lightbox.title}</p>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media(min-width:480px){.portfolio-cols{columns:2!important}}
        @media(min-width:768px){.portfolio-cols{columns:3!important}}
        .portfolio-cols > div:hover > div { opacity: 1 !important; }
      `}</style>
    </div>
  );
}

/* ─── CONTACT ───────────────────────────────────────────── */
function Contact() {
  const [form, setForm] = useState({ name:"", email:"", phone:"", date:"", message:"" });
  const [sent, setSent] = useState(false);
  useScrollReveal();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name:"", email:"", phone:"", date:"", message:"" });
  };

  const inputStyle = {
    width:"100%", background:"transparent",
    borderBottom:"1px solid rgba(201,168,76,0.18)", outline:"none",
    padding:"10px 0", fontFamily:"var(--font-body)", fontSize:"0.875rem",
    color:"var(--cream)", fontWeight:300, transition:"border-color 0.3s",
    borderTop:"none", borderLeft:"none", borderRight:"none"
  };
  const labelStyle = { fontFamily:"var(--font-body)", fontSize:"0.57rem", letterSpacing:"0.2em", textTransform:"uppercase", color:"var(--muted)", display:"block", marginBottom:"6px" };

  return (
    <div style={{ background:"var(--black)", paddingTop:"80px" }}>
      <section className="section-reveal" style={{ maxWidth:"680px", margin:"0 auto", padding:"64px 24px 48px", textAlign:"center" }}>
        <SectionHeader label="Get In Touch" heading="Make a" accent="Reservation" />
      </section>

      <section className="section-reveal" style={{ maxWidth:"1280px", margin:"0 auto", padding:"0 24px 72px", display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))", gap:"40px" }}>
        {/* Form */}
        <div style={{ background:"var(--black-card)", borderRadius:"var(--radius-md)", boxShadow:"var(--shadow-card)", padding:"36px 30px" }}>
          <h3 style={{ fontFamily:"var(--font-heading)", fontSize:"1.4rem", color:"var(--cream)", marginBottom:"24px", fontWeight:600 }}>Reserve Your Table</h3>
          {sent && (
            <div style={{ marginBottom:"18px", padding:"12px 16px", border:"1px solid rgba(201,168,76,0.36)", background:"rgba(201,168,76,0.07)", fontFamily:"var(--font-body)", color:"var(--gold)", fontSize:"0.8rem", letterSpacing:"0.04em", borderRadius:"var(--radius-sm)" }}>
              ✓ Your reservation request has been received. We'll confirm within 24 hours.
            </div>
          )}
          <form onSubmit={handleSubmit} style={{ display:"flex", flexDirection:"column", gap:"22px" }}>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"18px" }}>
              <div><label style={labelStyle}>Full Name</label><input type="text" required placeholder="Priya Mehta" style={inputStyle} value={form.name} onChange={e => setForm({...form,name:e.target.value})} /></div>
              <div><label style={labelStyle}>Email</label><input type="email" required placeholder="hello@example.com" style={inputStyle} value={form.email} onChange={e => setForm({...form,email:e.target.value})} /></div>
            </div>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"18px" }}>
              <div><label style={labelStyle}>Phone</label><input type="tel" placeholder="+91 98765 43210" style={inputStyle} value={form.phone} onChange={e => setForm({...form,phone:e.target.value})} /></div>
              <div><label style={labelStyle}>Preferred Date</label><input type="date" style={{...inputStyle, colorScheme:"dark"}} value={form.date} onChange={e => setForm({...form,date:e.target.value})} /></div>
            </div>
            <div><label style={labelStyle}>Special Requests</label><textarea rows={4} placeholder="Dietary requirements, occasion details, seating preferences..." style={{...inputStyle,resize:"none"}} value={form.message} onChange={e => setForm({...form,message:e.target.value})} /></div>
            <button type="submit" className="btn-gold" style={{ width:"100%", padding:"14px" }}>Confirm Reservation</button>
          </form>
        </div>

        {/* Info column */}
        <div style={{ display:"flex", flexDirection:"column", gap:"16px" }}>
          <div style={{ overflow:"hidden", borderRadius:"var(--radius-md)", background:"var(--black-card)", boxShadow:"var(--shadow-card)", display:"flex", alignItems:"center", justifyContent:"center", padding:"28px 20px" }}>
            <div style={{ textAlign:"center" }}>
              <p style={{ fontSize:"1.7rem", marginBottom:"8px" }}>📍</p>
              <p style={{ fontFamily:"var(--font-heading)", color:"var(--cream)", fontSize:"0.95rem", fontWeight:600 }}>Maharaja's Feast</p>
              <p style={{ fontFamily:"var(--font-body)", color:"var(--muted)", fontSize:"0.78rem", marginTop:"6px", lineHeight:1.65 }}>12, Napean Sea Road, Malabar Hill<br />Mumbai, Maharashtra 400 006</p>
              <a href="https://www.google.com/maps/search/Napean+Sea+Road+Malabar+Hill+Mumbai" target="_blank" rel="noreferrer"
                style={{ display:"inline-block", marginTop:"10px", fontFamily:"var(--font-body)", fontSize:"0.57rem", letterSpacing:"0.2em", textTransform:"uppercase", color:"var(--gold)", borderBottom:"1px solid rgba(201,168,76,0.32)", paddingBottom:"1px", textDecoration:"none" }}>
                View on Google Maps →
              </a>
            </div>
          </div>

          <div style={{ padding:"22px 24px", borderRadius:"var(--radius-md)", background:"var(--black-card)", boxShadow:"var(--shadow-card)" }}>
            <h3 style={{ fontFamily:"var(--font-heading)", fontSize:"1.1rem", color:"var(--gold)", marginBottom:"14px", fontWeight:600 }}>Opening Hours</h3>
            {[["Monday – Friday","12:00 PM – 11:00 PM"],["Saturday","11:00 AM – 11:30 PM"],["Sunday","11:00 AM – 10:00 PM"]].map(([day,time]) => (
              <div key={day} style={{ display:"flex", justifyContent:"space-between", padding:"9px 0", borderBottom:"1px solid rgba(201,168,76,0.07)" }}>
                <span style={{ fontFamily:"var(--font-body)", color:"var(--muted)", fontSize:"0.81rem" }}>{day}</span>
                <span style={{ fontFamily:"var(--font-body)", color:"var(--cream)", fontSize:"0.81rem", fontWeight:300 }}>{time}</span>
              </div>
            ))}
          </div>

          <div style={{ display:"flex", flexDirection:"column", gap:"12px" }}>
            {[
              { icon:"📞", label:"Reservations", val:"+91 22 4001 9999", href:"tel:+912240019999" },
              { icon:"✉️", label:"Email", val:"reserve@maharajasfeast.in", href:"mailto:reserve@maharajasfeast.in" },
              { icon:"📸", label:"Instagram", val:"@maharajasfeast", href:"https://instagram.com/maharajasfeast" },
            ].map(({ icon,label,val,href }) => (
              <a key={label} href={href} target={href.startsWith("http")?"_blank":undefined} rel="noreferrer"
                style={{ display:"flex", alignItems:"center", gap:"12px", textDecoration:"none", transition:"opacity 0.3s", padding:"12px 16px", background:"var(--black-card)", borderRadius:"var(--radius-md)", boxShadow:"var(--shadow-card)" }}
                onMouseEnter={e => e.currentTarget.style.opacity=0.72}
                onMouseLeave={e => e.currentTarget.style.opacity=1}>
                <div style={{ width:"38px", height:"38px", border:"1px solid var(--border)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"1rem", flexShrink:0, background:"var(--gold-subtle)", borderRadius:"var(--radius-sm)" }}>{icon}</div>
                <div>
                  <p style={{ fontFamily:"var(--font-body)", fontSize:"0.57rem", letterSpacing:"0.2em", textTransform:"uppercase", color:"var(--muted)" }}>{label}</p>
                  <p style={{ fontFamily:"var(--font-body)", color:"var(--gold)", fontSize:"0.83rem", marginTop:"2px", fontWeight:400 }}>{val}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

/* ─── FOOTER ────────────────────────────────────────────── */
function Footer({ setActivePage }) {
  return (
    <footer style={{ background:"var(--black-mid)", borderTop:"1px solid var(--border)", padding:"48px 24px 24px" }}>
      <div style={{ maxWidth:"1280px", margin:"0 auto" }}>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(180px,1fr))", gap:"36px", marginBottom:"32px" }}>

          {/* Brand */}
          <div>
            <div style={{ display:"flex", alignItems:"center", gap:"8px", marginBottom:"14px" }}>
              <CrownIcon size={17} />
              <span style={{ fontFamily:"var(--font-heading)", fontSize:"1.25rem", fontWeight:700, letterSpacing:"0.09em", background:"linear-gradient(135deg,var(--gold),var(--gold-light))", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>MAHARAJA'S</span>
              <span style={{ fontFamily:"var(--font-heading)", fontStyle:"italic", fontWeight:300, fontSize:"1.1rem", color:"var(--cream)" }}> Feast</span>
            </div>
            <p style={{ fontFamily:"var(--font-body)", color:"var(--muted)", fontSize:"0.79rem", lineHeight:1.82, fontWeight:300, maxWidth:"230px" }}>
              Three Michelin stars. One unforgettable evening. Mumbai's royal temple of fine dining since 2008.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p style={{ fontFamily:"var(--font-body)", fontSize:"0.57rem", letterSpacing:"0.26em", textTransform:"uppercase", color:"var(--gold)", marginBottom:"14px", opacity:0.85 }}>Navigation</p>
            <ul style={{ listStyle:"none", display:"flex", flexDirection:"column", gap:"8px" }}>
              {NAV_LINKS.map(p => (
                <li key={p}>
                  <button onClick={() => setActivePage(p)} style={{ fontFamily:"var(--font-body)", color:"var(--muted)", fontSize:"0.81rem", background:"none", border:"none", cursor:"pointer", transition:"color 0.3s", fontWeight:300, padding:0 }}
                    onMouseEnter={e => e.target.style.color="var(--cream)"}
                    onMouseLeave={e => e.target.style.color="var(--muted)"}>{p}</button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p style={{ fontFamily:"var(--font-body)", fontSize:"0.57rem", letterSpacing:"0.26em", textTransform:"uppercase", color:"var(--gold)", marginBottom:"14px", opacity:0.85 }}>Contact</p>
            <div style={{ display:"flex", flexDirection:"column", gap:"6px" }}>
              {[
                { text:"12, Napean Sea Road, Malabar Hill" },
                { text:"Mumbai, Maharashtra 400 006" },
                { text:"+91 22 4001 9999", href:"tel:+912240019999" },
                { text:"reserve@maharajasfeast.in", href:"mailto:reserve@maharajasfeast.in" },
              ].map(({ text,href }) => href ? (
                <a key={text} href={href} style={{ fontFamily:"var(--font-body)", color:"var(--gold)", fontSize:"0.79rem", fontWeight:300, textDecoration:"none", transition:"opacity 0.3s" }}
                  onMouseEnter={e => e.currentTarget.style.opacity=0.68}
                  onMouseLeave={e => e.currentTarget.style.opacity=1}>{text}</a>
              ) : (
                <p key={text} style={{ fontFamily:"var(--font-body)", color:"var(--muted)", fontSize:"0.79rem", fontWeight:300 }}>{text}</p>
              ))}
            </div>
          </div>

          {/* Live Location */}
          <div>
            <p style={{ fontFamily:"var(--font-body)", fontSize:"0.57rem", letterSpacing:"0.26em", textTransform:"uppercase", color:"var(--gold)", marginBottom:"14px", opacity:0.85 }}>Live Location</p>
            <a href="https://www.google.com/maps/search/Napean+Sea+Road+Malabar+Hill+Mumbai" target="_blank" rel="noreferrer" style={{ textDecoration:"none", display:"block" }}>
              <div style={{ border:"1px solid var(--border)", background:"var(--gold-subtle)", padding:"14px 16px", transition:"var(--transition)", cursor:"pointer", borderRadius:"var(--radius-md)" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor="rgba(201,168,76,0.4)"; e.currentTarget.style.background="rgba(201,168,76,0.1)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor="var(--border)"; e.currentTarget.style.background="var(--gold-subtle)"; }}>
                <div style={{ display:"flex", alignItems:"center", gap:"8px", marginBottom:"7px" }}>
                  <span style={{ fontSize:"1rem" }}>📍</span>
                  <p style={{ fontFamily:"var(--font-heading)", color:"var(--cream)", fontSize:"0.88rem", fontWeight:600 }}>Maharaja's Feast</p>
                </div>
                <p style={{ fontFamily:"var(--font-body)", color:"var(--muted)", fontSize:"0.74rem", lineHeight:1.65, fontWeight:300 }}>
                  12, Napean Sea Road<br />Malabar Hill, Mumbai 400 006
                </p>
                <div style={{ display:"flex", alignItems:"center", gap:"6px", marginTop:"10px" }}>
                  <div style={{ width:"6px", height:"6px", borderRadius:"50%", background:"#4CAF50", boxShadow:"0 0 5px rgba(76,175,80,0.65)", flexShrink:0 }} />
                  <span style={{ fontFamily:"var(--font-body)", color:"var(--gold)", fontSize:"0.58rem", letterSpacing:"0.12em", textTransform:"uppercase" }}>Open Now · View on Maps →</span>
                </div>
              </div>
            </a>
          </div>
        </div>

        <div style={{ borderTop:"1px solid rgba(201,168,76,0.09)", paddingTop:"18px", display:"flex", flexWrap:"wrap", justifyContent:"space-between", gap:"8px", alignItems:"center" }}>
          <p style={{ fontFamily:"var(--font-body)", color:"var(--muted)", fontSize:"0.67rem", letterSpacing:"0.08em" }}>© 2025 Maharaja's Feast. All rights reserved.</p>
          <p style={{ fontFamily:"var(--font-body)", color:"var(--muted)", fontSize:"0.67rem", letterSpacing:"0.08em" }}>Crafted with passion in Mumbai</p>
        </div>
      </div>
    </footer>
  );
}

/* ─── HELP ──────────────────────────────────────────────── */
function Help({ setActivePage }) {
  useScrollReveal();

  const faqs = [
    {
      question: "How do I make a reservation?",
      answer: "You can make a reservation by calling us at +91 22 4001 9999, emailing reserve@maharajasfeast.in, or using our online booking system on the Contact page."
    },
    {
      question: "What is the dress code?",
      answer: "We require smart casual attire. Gentlemen are encouraged to wear jackets, and ladies should wear elegant dresses or suits. No jeans, shorts, or sneakers please."
    },
    {
      question: "Do you offer vegetarian options?",
      answer: "Yes, we have an extensive vegetarian menu featuring seasonal vegetables, artisanal cheeses, and plant-based creations that rival our meat dishes in sophistication."
    },
    {
      question: "What are your opening hours?",
      answer: "We are open Tuesday through Sunday from 6:00 PM to 11:00 PM. We are closed on Mondays for staff rest and preparation."
    },
    {
      question: "Can I cancel or modify my reservation?",
      answer: "Reservations can be modified or cancelled up to 24 hours in advance. Please contact us directly to make changes."
    },
    {
      question: "Do you accept credit cards?",
      answer: "We accept all major credit cards, debit cards, and digital payment methods. We do not accept cash payments over ₹50,000."
    },
    {
      question: "Is parking available?",
      answer: "Valet parking is available at the entrance. Our team will take care of your vehicle while you enjoy your meal."
    },
    {
      question: "Do you offer private dining?",
      answer: "Yes, we have three private dining rooms available for groups of 8-40 guests. These can be booked for special occasions and corporate events."
    },
    {
      question: "What is the average price per person?",
      answer: "Our tasting menu starts at ₹12,000 per person, with à la carte options ranging from ₹8,000 to ₹25,000 per person, excluding beverages and service charge."
    },
    {
      question: "Can I bring my own wine?",
      answer: "We have a comprehensive wine cellar, but we do allow BYO with a ₹5,000 corkage fee per bottle. Please inform us in advance."
    }
  ];

  return (
    <div style={{ background:"var(--black)", minHeight:"100vh", padding:"72px 24px 60px" }}>
      <div style={{ maxWidth:"1280px", margin:"0 auto" }}>
        <SectionHeader label="Support" heading="Frequently" accent="Asked Questions" />

        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(400px,1fr))", gap:"24px", marginTop:"40px" }}>
          {faqs.map((faq, i) => (
            <div key={i} className="card-hover section-reveal"
              style={{ background:"var(--black-card)", borderRadius:"var(--radius-md)", padding:"24px", border:"1px solid var(--border)" }}>
              <h3 style={{ fontFamily:"var(--font-heading)", fontSize:"1.1rem", color:"var(--gold)", marginBottom:"12px", fontWeight:600 }}>
                {faq.question}
              </h3>
              <p style={{ fontFamily:"var(--font-body)", color:"var(--muted)", fontSize:"0.88rem", lineHeight:1.7, fontWeight:300 }}>
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        <div style={{ textAlign:"center", marginTop:"60px" }}>
          <p style={{ fontFamily:"var(--font-body)", color:"var(--muted)", fontSize:"0.9rem", marginBottom:"20px" }}>
            Still have questions? We're here to help.
          </p>
          <button onClick={() => setActivePage("Contact")} className="btn-gold">Contact Us</button>
        </div>
      </div>
    </div>
  );
}

/* ─── APP ROOT ──────────────────────────────────────────── */
export default function App() {
  const [activePage, setActivePage] = useState("Home");
  const [showSplash, setShowSplash] = useState(true);
  const [isDark, setIsDark] = useState(true);

  const navigate = (page) => {
    setActivePage(page);
    window.scrollTo({ top:0, behavior:"smooth" });
  };

  useEffect(() => {
    document.documentElement.className = isDark ? "dark-mode" : "light-mode";
    document.body.style.background = isDark ? "#0C0A09" : "#F7F2EA";
    document.body.style.color = isDark ? "#F2E8D5" : "#1A120A";
  }, [isDark]);

  const PAGE = { Home, About, Services, Portfolio, Help, Contact };
  const PageComponent = PAGE[activePage];

  return (
    <>
      {showSplash && <SplashScreen onDone={() => setShowSplash(false)} />}
      <div style={{ minHeight:"100vh", background:"var(--black)", opacity:showSplash?0:1, transition:"opacity 0.5s ease" }}>
        <Navbar activePage={activePage} setActivePage={navigate} isDark={isDark} setIsDark={setIsDark} />
        <main>
          <PageComponent setActivePage={navigate} />
        </main>
        <Footer setActivePage={navigate} />
      </div>
    </>
  );
}