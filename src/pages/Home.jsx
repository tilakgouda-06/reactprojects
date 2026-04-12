// src/pages/Home.jsx

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useScrollReveal from '../hooks/useScrollReveal.js';
import SectionHeader from '../components/SectionHeader.jsx';
import { DISHES, USPS, TESTIMONIALS, PORTFOLIO_ITEMS } from '../data/data.js';

function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const navigate = useNavigate();
  useScrollReveal();

  useEffect(() => {
    const t = setInterval(() => setActiveTestimonial(p => (p+1) % TESTIMONIALS.length), 5200);
    return () => clearInterval(t);
  }, []);

  const handleNavClick = (page) => {
    navigate(page === "Home" ? "/" : `/${page.toLowerCase()}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
            <button onClick={() => handleNavClick("Contact")} className="btn-gold">Reserve a Table</button>
            <button onClick={() => handleNavClick("Services")} className="btn-outline">View Menu</button>
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
            <div style={{ fontFamily:"var(--font-body)", color:"var(--gold)", fontSize:"0.58rem", letterSpacing:"0.32em", textTransform:"uppercase", fontWeight:500, marginBottom:"8px", opacity:0.85 }}>Meet the Maestro</div>
            <h2 style={{ fontFamily:"var(--font-heading)", fontSize:"clamp(2rem,4vw,3.3rem)", color:"var(--cream)", lineHeight:1.12, marginBottom:"4px", fontWeight:600 }}>
              Chef Laurent<br /><em style={{ color:"var(--gold)", fontWeight:300 }}>Moreau</em>
            </h2>
            <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:"10px", margin:"14px 0" }}>
              <div style={{ height:"1px", width:"48px", background:"linear-gradient(to right, transparent, var(--gold))" }} />
              <svg width="10" height="10" viewBox="0 0 14 14" fill="none">
                <path d="M7 0L8.4 5.6L14 7L8.4 8.4L7 14L5.6 8.4L0 7L5.6 5.6Z" fill="var(--gold)" />
              </svg>
              <div style={{ height:"1px", width:"48px", background:"linear-gradient(to left, transparent, var(--gold))" }} />
            </div>
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
          <button onClick={() => handleNavClick("Portfolio")} className="btn-outline">View Full Portfolio</button>
        </div>
      </section>
    </div>
  );
}

export default Home;