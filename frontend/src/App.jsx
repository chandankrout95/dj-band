import { useState, useEffect, useRef } from 'react';
import useLenis from './hooks/useLenis';
import usePreloader from './hooks/usePreloader';

import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import IntroSection from './components/IntroSection';
import About from './components/About';
import Services from './components/Services';
import Equipment from './components/Equipment';
import LightingShowcase from './components/LightingShowcase';
import Experience from './components/Experience';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const lenisRef = useLenis();
  const { progress, isLoaded, images } = usePreloader();
  const [showContent, setShowContent] = useState(false);
  const cursorRef = useRef(null);

  // Desktop cursor glow effect
  useEffect(() => {
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    if (isMobile) return;

    const handleMouseMove = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <div ref={cursorRef} className="cursor-glow" />

      <LoadingScreen
        progress={progress}
        isLoaded={isLoaded}
        onComplete={() => setShowContent(true)}
      />

      {showContent && (
        <main style={{ position: 'relative', zIndex: 1 }}>
          <Navbar lenisRef={lenisRef} />
          <Hero images={images} />
          <IntroSection />
          <About />
          <Services />
          <Equipment />
          <LightingShowcase />
          <Experience />
          <Stats />
          <Testimonials />
          <CTA />
          <Contact />
          <Footer lenisRef={lenisRef} />
        </main>
      )}
    </>
  );
}
