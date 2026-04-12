// src/components/Footer.jsx

import { useNavigate } from "react-router-dom";
import CrownIcon from './CrownIcon.jsx';
import { NAV_LINKS } from '../data/data.js';

function Footer() {
  const navigate = useNavigate();

  const handleNavClick = (page) => {
    navigate(page === "Home" ? "/" : `/${page.toLowerCase()}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
                  <button onClick={() => handleNavClick(p)} style={{ fontFamily:"var(--font-body)", color:"var(--muted)", fontSize:"0.81rem", background:"none", border:"none", cursor:"pointer", transition:"color 0.3s", fontWeight:300, padding:0 }}
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

export default Footer;