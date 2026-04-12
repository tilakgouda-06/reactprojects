// src/pages/Portfolio.jsx

import { useState } from "react";
import useScrollReveal from '../hooks/useScrollReveal.js';
import SectionHeader from '../components/SectionHeader.jsx';
import { PORTFOLIO_ITEMS } from '../data/data.js';

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

export default Portfolio;