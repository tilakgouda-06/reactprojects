// src/components/CrownIcon.jsx

function CrownIcon({ size = 18, color = "var(--gold)" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display:"inline-block", verticalAlign:"middle", animation:"crownFloat 3s ease-in-out infinite", flexShrink:0 }}>
      <path d="M2 20 L6 8 L12 14 L16 4 L20 14 L26 8 L30 20 Z" fill={color} opacity="0.92"/>
      <rect x="2" y="20" width="28" height="3" rx="1.5" fill={color} opacity="0.7"/>
      <circle cx="16" cy="4" r="2" fill={color}/>
      <circle cx="6" cy="8" r="1.5" fill={color} opacity="0.8"/>
      <circle cx="26" cy="8" r="1.5" fill={color} opacity="0.8"/>
    </svg>
  );
}

export default CrownIcon;