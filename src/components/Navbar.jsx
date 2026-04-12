// src/components/Navbar.jsx

import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import CrownIcon from './CrownIcon.jsx';
import { NAV_LINKS } from '../data/data.js';

function Navbar({ isDark, setIsDark }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (page) => {
    navigate(page === "Home" ? "/" : `/${page.toLowerCase()}`);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const activePage = location.pathname === "/" ? "Home" : location.pathname.slice(1).charAt(0).toUpperCase() + location.pathname.slice(2);

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
      <button onClick={() => handleNavClick("Home")} style={{
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
            <button onClick={() => handleNavClick(p)}
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
        <button onClick={() => handleNavClick("Contact")} className="btn-outline" style={{ fontSize:"0.6rem", padding:"10px 22px" }}>Reserve a Table</button>
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
            <button key={p} onClick={() => handleNavClick(p)}
              style={{ fontFamily:"var(--font-body)", fontSize:"0.7rem", letterSpacing:"0.2em", textTransform:"uppercase", background:"none", border:"none", cursor:"pointer", color: activePage===p ? "var(--gold)" : "var(--muted)", fontWeight:500 }}>{p}</button>
          ))}
          <button onClick={() => handleNavClick("Contact")} className="btn-gold" style={{ marginTop:"6px" }}>Reserve a Table</button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;