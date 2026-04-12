// src/pages/Services.jsx

import { useNavigate } from "react-router-dom";
import useScrollReveal from '../hooks/useScrollReveal.js';
import SectionHeader from '../components/SectionHeader.jsx';
import { SERVICES } from '../data/data.js';

function Services() {
  const navigate = useNavigate();
  useScrollReveal();

  const handleNavClick = (page) => {
    navigate(page === "Home" ? "/" : `/${page.toLowerCase()}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
            <button onClick={() => handleNavClick("Contact")} style={{ marginTop:"22px", fontFamily:"var(--font-body)", fontSize:"0.57rem", letterSpacing:"0.2em", textTransform:"uppercase", color:"var(--gold)", background:"none", border:"none", borderBottom:"1px solid rgba(201,168,76,0.28)", paddingBottom:"2px", cursor:"pointer", display:"inline-flex", alignItems:"center", gap:"5px" }}>Enquire Now →</button>
          </div>
        ))}
      </section>

      <section className="section-reveal" style={{ position:"relative", height:"280px", display:"flex", alignItems:"center", justifyContent:"center", overflow:"hidden" }}>
        <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1800&q=95&fit=crop"
          alt="Private dining" style={{ position:"absolute", inset:0, width:"100%", height:"100%", objectFit:"cover", objectPosition:"center" }} loading="lazy" />
        <div style={{ position:"absolute", inset:0, background:"rgba(12,10,9,0.65)" }} />
        <div style={{ position:"relative", textAlign:"center", padding:"0 24px" }}>
          <p style={{ fontFamily:"var(--font-heading)", fontSize:"clamp(1.3rem,3vw,2.1rem)", color:"var(--cream)", marginBottom:"22px", fontStyle:"italic", fontWeight:300 }}>Planning something special?</p>
          <button onClick={() => handleNavClick("Contact")} className="btn-gold">Talk to Our Events Team</button>
        </div>
      </section>
    </div>
  );
}

export default Services;