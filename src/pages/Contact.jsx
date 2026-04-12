// src/pages/Contact.jsx

import { useState } from "react";
import useScrollReveal from '../hooks/useScrollReveal.js';
import SectionHeader from '../components/SectionHeader.jsx';

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

export default Contact;