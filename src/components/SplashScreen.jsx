// src/components/SplashScreen.jsx

import { useState, useEffect } from "react";
import CrownIcon from './CrownIcon.jsx';

function SplashScreen({ onDone }) {
  const [exit, setExit] = useState(false);
  useEffect(() => {
    const t1 = setTimeout(() => setExit(true), 2800);
    const t2 = setTimeout(() => onDone(), 3500);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [onDone]);

  return (
    <div className={exit ? "splash-exit" : "splash-enter"} style={{
      position:"fixed", inset:0, zIndex:9999,
      background:"linear-gradient(145deg,#0C0A09 0%,#1A0C0A 55%,#0C0A09 100%)",
      display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", overflow:"hidden"
    }}>
      <div style={{ position:"absolute", width:"min(540px,88vw)", height:"min(540px,88vw)", border:"1px solid rgba(201,168,76,0.08)", borderRadius:"50%", top:"50%", left:"50%", transform:"translate(-50%,-50%)", animation:"spinSlow 32s linear infinite" }} />
      <div style={{ position:"absolute", width:"min(360px,62vw)", height:"min(360px,62vw)", border:"1px solid rgba(122,28,46,0.1)", borderRadius:"50%", top:"50%", left:"50%", transform:"translate(-50%,-50%)", animation:"spinSlow 20s linear infinite reverse" }} />
      <div style={{ position:"absolute", inset:0, background:"radial-gradient(ellipse at center,rgba(122,28,46,0.14) 0%,transparent 68%)" }} />
      <div style={{ position:"relative", textAlign:"center", padding:"0 28px" }}>
        <p style={{ fontFamily:"var(--font-body)", fontSize:"0.57rem", letterSpacing:"0.36em", textTransform:"uppercase", color:"rgba(201,168,76,0.65)", marginBottom:"18px", animation:"fadeUp 0.8s ease 0.3s both" }}>Welcome to</p>
        <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:"14px", marginBottom:"8px", animation:"fadeUp 0.8s ease 0.5s both" }}>
          <CrownIcon size={28} />
          <h1 style={{ fontFamily:"var(--font-heading)", fontSize:"clamp(2.4rem,9vw,5.2rem)", fontWeight:700, lineHeight:1, margin:0 }}>
            <span className="gold-shimmer gold-glow-text">MAHARAJA'S</span>
          </h1>
          <CrownIcon size={28} />
        </div>
        <h2 style={{ fontFamily:"var(--font-heading)", fontSize:"clamp(1.6rem,5vw,3rem)", color:"var(--cream)", fontStyle:"italic", fontWeight:300, marginBottom:"14px", animation:"fadeUp 0.8s ease 0.7s both" }}>Feast</h2>
        <div style={{ animation:"fadeUp 0.8s ease 0.9s both" }}><div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:"10px", margin:"14px 0" }}>
      <div style={{ height:"1px", width:"48px", background:"linear-gradient(to right, transparent, var(--gold))" }} />
      <svg width="10" height="10" viewBox="0 0 14 14" fill="none">
        <path d="M7 0L8.4 5.6L14 7L8.4 8.4L7 14L5.6 8.4L0 7L5.6 5.6Z" fill="var(--gold)" />
      </svg>
      <div style={{ height:"1px", width:"48px", background:"linear-gradient(to left, transparent, var(--gold))" }} />
    </div></div>
        <p style={{ fontFamily:"var(--font-body)", fontSize:"0.68rem", letterSpacing:"0.28em", textTransform:"uppercase", color:"var(--muted)", marginTop:"10px", animation:"fadeUp 0.8s ease 1.1s both" }}>Mumbai · Est. 2008</p>
      </div>
    </div>
  );
}

export default SplashScreen;