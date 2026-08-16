import { useEffect, useRef, useState } from 'react';
import {
  Routes,
  Route,
  useNavigate,
  useLocation,
} from 'react-router-dom';

import useLenis from './hooks/useLenis';
import usePreloader from './hooks/usePreloader';

import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ItemSection from './components/ItemSection';
import GallerySection from './components/GallerySection';
import FullGalleryPage from './components/FullGalleryPage';
import About from './components/About';
import Contact from './components/Contact';
import GoogleReviews from './components/GoogleReviews';
import Footer from './components/Footer';


// ============================================================
// HOME PAGE
// ============================================================

function Home({
  images,
  lenisRef,
  onOpenGallery,
}) {
  return (
    <div className="relative min-h-screen bg-black text-white">

      <Navbar
        lenisRef={lenisRef}
      />

      <Hero
        images={images}
      />

      <ItemSection />

      <GallerySection
        onViewAllEvents={onOpenGallery}
      />

      <About />

      <Contact />

      <GoogleReviews />

      <Footer
        lenisRef={lenisRef}
      />

    </div>
  );
}


// ============================================================
// APP
// ============================================================

export default function App() {

  const lenisRef = useLenis();

  const {
    progress,
    isLoaded,
    images,
  } = usePreloader();

  const [showContent, setShowContent] =
    useState(false);

  const cursorRef = useRef(null);

  const navigate = useNavigate();

  const location = useLocation();


  // ==========================================================
  // DESKTOP CURSOR GLOW
  // ==========================================================

  useEffect(() => {

    const isMobile = window.matchMedia(
      '(max-width: 768px)'
    ).matches;

    if (isMobile) return;


    const handleMouseMove = (event) => {

      if (!cursorRef.current) return;

      cursorRef.current.style.left =
        `${event.clientX}px`;

      cursorRef.current.style.top =
        `${event.clientY}px`;

    };


    window.addEventListener(
      'mousemove',
      handleMouseMove,
      { passive: true }
    );


    return () => {

      window.removeEventListener(
        'mousemove',
        handleMouseMove
      );

    };

  }, []);


  // ==========================================================
  // OPEN FULL GALLERY
  // ==========================================================

  const handleOpenFullGallery = () => {

    navigate('/old-events');

  };


  // ==========================================================
  // WHEN FULL GALLERY OPENS
  // START IT FROM TOP
  // ==========================================================

  useEffect(() => {

    if (location.pathname !== '/old-events') {
      return;
    }

    // Wait until React renders FullGalleryPage
    requestAnimationFrame(() => {

      if (lenisRef?.current) {

        lenisRef.current.scrollTo(0, {
          immediate: true,
        });

      }

      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'auto',
      });

    });

  }, [
    location.pathname,
    lenisRef,
  ]);


  // ==========================================================
  // BACK TO HOME
  // ==========================================================

  const handleBackToHome = () => {

    navigate(-1);

  };


  // ==========================================================
  // RENDER
  // ==========================================================

  return (
    <>

      {/* ======================================================
          LOADING SCREEN
      ====================================================== */}

      <LoadingScreen
        progress={progress}
        isLoaded={isLoaded}
        onComplete={() =>
          setShowContent(true)
        }
      />


      {/* ======================================================
          ROUTES
      ====================================================== */}

      {showContent && (

        <main className="relative z-[1]">

          <Routes>

            {/* ==================================================
                HOME
            ================================================== */}

            <Route
              path="/"
              element={
                <Home
                  images={images}
                  lenisRef={lenisRef}
                  onOpenGallery={
                    handleOpenFullGallery
                  }
                />
              }
            />


            {/* ==================================================
                FULL GALLERY
            ================================================== */}

            <Route
              path="/old-events"
              element={
                <FullGalleryPage
                  onBackToHome={
                    handleBackToHome
                  }
                />
              }
            />

          </Routes>

        </main>

      )}


      {/* ======================================================
          CURSOR GLOW
      ====================================================== */}

      <div
        ref={cursorRef}
        className="
          pointer-events-none
          fixed
          left-0
          top-0
          z-[9999]

          hidden
          md:block

          h-5
          w-5

          -translate-x-1/2
          -translate-y-1/2

          rounded-full

          bg-white/20

          blur-md
        "
      />

    </>
  );
}