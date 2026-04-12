// src/hooks/useScrollReveal.js

import { useEffect } from "react";

function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".section-reveal");
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("visible"); observer.unobserve(e.target); } });
    }, { threshold: 0.07 });
    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  });
}

export default useScrollReveal;