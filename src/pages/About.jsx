// src/pages/About.jsx

import useScrollReveal from '../hooks/useScrollReveal.js';
import SectionHeader from '../components/SectionHeader.jsx';
import { TIMELINE } from '../data/data.js';

function About() {
  useScrollReveal();
  return (
    <div style={{ background:"var(--black)", paddingTop:"80px" }}>
      <section className="section-reveal" style={{ maxWidth:"1280px", margin:"0 auto", padding:"64px 24px 56px", display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))", gap:"52px", alignItems:"center" }}>
        <div>
          <div style={{ fontFamily:"var(--font-body)", color:"var(--gold)", fontSize:"0.58rem", letterSpacing:"0.32em", textTransform:"uppercase", fontWeight:500, marginBottom:"8px", opacity:0.85 }}>Our Story</div>
          <h2 style={{ fontFamily:"var(--font-heading)", fontSize:"clamp(2rem,4.5vw,3.5rem)", color:"var(--cream)", lineHeight:1.12, marginBottom:"12px", fontWeight:600 }}>
            Born from<br /><em style={{ color:"var(--gold)", fontWeight:300 }}>Passion.</em><br />Refined by Time.
          </h2>
          <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:"10px", margin:"14px 0" }}>
            <div style={{ height:"1px", width:"48px", background:"linear-gradient(to right, transparent, var(--gold))" }} />
            <svg width="10" height="10" viewBox="0 0 14 14" fill="none">
              <path d="M7 0L8.4 5.6L14 7L8.4 8.4L7 14L5.6 8.4L0 7L5.6 5.6Z" fill="var(--gold)" />
            </svg>
            <div style={{ height:"1px", width:"48px", background:"linear-gradient(to left, transparent, var(--gold))" }} />
          </div>
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

export default About;