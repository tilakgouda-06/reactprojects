// src/pages/Help.jsx

import { useNavigate } from "react-router-dom";
import useScrollReveal from '../hooks/useScrollReveal.js';
import SectionHeader from '../components/SectionHeader.jsx';
import { FAQS } from '../data/data.js';

function Help() {
  const navigate = useNavigate();
  useScrollReveal();

  const handleNavClick = (page) => {
    navigate(page === "Home" ? "/" : `/${page.toLowerCase()}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div style={{ background:"var(--black)", minHeight:"100vh", padding:"72px 24px 60px" }}>
      <div style={{ maxWidth:"1280px", margin:"0 auto" }}>
        <SectionHeader label="Support" heading="Frequently" accent="Asked Questions" />

        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(400px,1fr))", gap:"24px", marginTop:"40px" }}>
          {FAQS.map((faq, i) => (
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
          <button onClick={() => handleNavClick("Contact")} className="btn-gold">Contact Us</button>
        </div>
      </div>
    </div>
  );
}

export default Help;