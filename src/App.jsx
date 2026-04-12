// src/App.jsx

import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import './styles/globalStyles.js';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import SplashScreen from './components/SplashScreen.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Help from './pages/Help.jsx';
import Contact from './pages/Contact.jsx';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    document.documentElement.className = isDark ? "dark-mode" : "light-mode";
    document.body.style.background = isDark ? "#0C0A09" : "#F7F2EA";
    document.body.style.color = isDark ? "#F2E8D5" : "#1A120A";
  }, [isDark]);

  return (
    <>
      {showSplash && <SplashScreen onDone={() => setShowSplash(false)} />}
      <div style={{ minHeight:"100vh", background:"var(--black)", opacity:showSplash?0:1, transition:"opacity 0.5s ease" }}>
        <Navbar isDark={isDark} setIsDark={setIsDark} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/help" element={<Help />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}