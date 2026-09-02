'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import useLenis from '@/hooks/useLenis';
import usePreloader from '@/hooks/usePreloader';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import ItemSection from '@/components/ItemSection';
import GallerySection from '@/components/GallerySection';
import About from '@/components/About';
import Contact from '@/components/Contact';
import GoogleReviews from '@/components/GoogleReviews';
import Footer from '@/components/Footer';

export default function Home() {
  const lenisRef = useLenis();
  const { images } = usePreloader();
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

  // Continuous scroll tracker — always saves exact Y coordinate
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          if (window.scrollY > 80) {
            sessionStorage.setItem('home_scroll_pos', window.scrollY.toString());
          }
          ticking = false;
        });
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll restoration — uses saved pixel position, no hashes
  useEffect(() => {
    const shouldRestore = sessionStorage.getItem('should_restore_scroll');
    const savedPos = sessionStorage.getItem('home_scroll_pos');

    if (!shouldRestore || !savedPos) return;

    const targetY = parseFloat(savedPos);
    if (isNaN(targetY) || targetY < 80) {
      sessionStorage.removeItem('should_restore_scroll');
      return;
    }

    // Clear the hash from URL if present (from any previous approach)
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname);
    }

    // Retry with increasing delays to wait for GSAP ScrollTrigger pin recalculation
    let attempt = 0;
    const maxAttempts = 12;
    const delays = [0, 50, 100, 150, 200, 300, 400, 500, 700, 900, 1200, 1500];

    const restoreScroll = () => {
      // Force scroll via both native and Lenis
      window.scrollTo({ top: targetY, behavior: 'instant' });
      if (lenisRef?.current) {
        lenisRef.current.scrollTo(targetY, { immediate: true });
      }

      attempt++;
      if (attempt < maxAttempts) {
        setTimeout(restoreScroll, delays[attempt] || 200);
      } else {
        // Final cleanup
        sessionStorage.removeItem('should_restore_scroll');
      }
    };

    // Kick off immediately
    restoreScroll();

    return () => { attempt = maxAttempts; }; // cancel on unmount
  }, [lenisRef]);

  const handleOpenFullGallery = () => {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('home_scroll_pos', window.scrollY.toString());
    }
    router.push('/old-events');
  };

  return (
    <>
      <main className="relative z-[1] min-h-screen bg-black text-white">
        <Navbar lenisRef={lenisRef} />
        <Hero images={images} />
        <Services />
        <ItemSection />
        <GallerySection onViewAllEvents={handleOpenFullGallery} />
        <About />
        <Contact />
        <GoogleReviews />
        <Footer lenisRef={lenisRef} />
      </main>

      {/* Cursor Glow */}
      <div
        ref={cursorRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/20 blur-md md:block"
      />
    </>
  );
}
