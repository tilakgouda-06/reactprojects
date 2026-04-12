// src/components/SectionHeader.jsx

import { GoldDivider, SectionLabel } from './helpers.jsx';

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

export default SectionHeader;