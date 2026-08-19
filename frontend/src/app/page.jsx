'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import useLenis from '@/hooks/useLenis';
import usePreloader from '@/hooks/usePreloader';

import LoadingScreen from '@/components/LoadingScreen';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ItemSection from '@/components/ItemSection';
import GallerySection from '@/components/GallerySection';
import About from '@/components/About';
import Contact from '@/components/Contact';
import GoogleReviews from '@/components/GoogleReviews';
import Footer from '@/components/Footer';

export default function Home() {
  const lenisRef = useLenis();
  const { progress, isLoaded, images } = usePreloader();
  const [showContent, setShowContent] = useState(false);
  const cursorRef = useRef(null);
  const router = useRouter();

  // Desktop custom cursor glow
  useEffect(() => {
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    if (isMobile) return;

    const handleMouseMove = (event) => {
      if (!cursorRef.current) return;
      cursorRef.current.style.left = `${event.clientX}px`;
      cursorRef.current.style.top = `${event.clientY}px`;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleOpenFullGallery = () => {
    router.push('/old-events');
  };

  return (
    <>
      <LoadingScreen
        progress={progress}
        isLoaded={isLoaded}
        onComplete={() => setShowContent(true)}
      />

      {showContent && (
        <main className="relative z-[1] min-h-screen bg-black text-white">
          <Navbar lenisRef={lenisRef} />
          <Hero images={images} />
          <ItemSection />
          <GallerySection onViewAllEvents={handleOpenFullGallery} />
          <About />
          <Contact />
          <GoogleReviews />
          <Footer lenisRef={lenisRef} />
        </main>
      )}

      {/* Cursor Glow */}
      <div
        ref={cursorRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/20 blur-md md:block"
      />
    </>
  );
}
