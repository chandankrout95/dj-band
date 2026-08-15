import { useState, useEffect, useRef } from 'react';
import useLenis from './hooks/useLenis';
import usePreloader from './hooks/usePreloader';

import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import IntroSection from './components/IntroSection';
import ItemSection from './components/ItemSection';
import GallerySection from './components/GallerySection';
import FullGalleryPage from './components/FullGalleryPage';
import About from './components/About';
import Contact from './components/Contact';
import GoogleReviews from './components/GoogleReviews';
import Footer from './components/Footer';

export default function App() {
  const lenisRef = useLenis();
  const { progress, isLoaded, images } = usePreloader();
  const [showContent, setShowContent] = useState(false);
  const [currentView, setCurrentView] = useState('home'); // 'home' | 'full-gallery'
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
          {currentView === 'home' ? (
            <>
              <Navbar lenisRef={lenisRef} />
              <Hero images={images} />
              <IntroSection />
              <ItemSection />
              <GallerySection onViewAllEvents={() => setCurrentView('full-gallery')} />
              <About />
              <Contact />
              <GoogleReviews />
              <Footer lenisRef={lenisRef} />
            </>
          ) : (
            <FullGalleryPage onBackToHome={() => setCurrentView('home')} />
          )}
        </main>
      )}
    </>
  );
}
