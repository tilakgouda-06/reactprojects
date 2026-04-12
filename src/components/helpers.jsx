// src/components/helpers.jsx

export function GoldDivider() {
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

export function SectionLabel({ label }) {
  return (
    <p style={{ fontFamily:"var(--font-body)", color:"var(--gold)", fontSize:"0.58rem", letterSpacing:"0.32em", textTransform:"uppercase", fontWeight:500, marginBottom:"8px", opacity:0.85 }}>{label}</p>
  );
}