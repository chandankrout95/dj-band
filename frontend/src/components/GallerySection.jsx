'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { ZoomIn, MapPin, Images, ArrowRight, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { staggerReveal } from '../animations/gsapAnimations';

const GALLERY_IMAGES = [
  {
    id: 1,
    title: 'Grand Wedding Baraat Procession',
    category: 'Weddings & Baraat',
    location: 'Rath Road, Bhubaneswar',
    date: '2025',
    src: '/frames/ezgif-frame-015.jpg',
    description: 'Electrifying wedding baraat procession with live brass band tunes and traditional dhol drumming.',
  },
  {
    id: 2,
    title: 'Royal Wedding Reception DJ Night',
    category: 'DJ Nights',
    location: 'Mayfair Lagoon, Bhubaneswar',
    date: '2025',
    src: '/frames/ezgif-frame-035.jpg',
    description: 'High-energy DJ performance accompanied by synchronized moving heads and ambient light show.',
  },
  {
    id: 3,
    title: 'Corporate Celebration Gala',
    category: 'Corporate Events',
    location: 'Hotel Swosti Premium',
    date: '2024',
    src: '/frames/ezgif-frame-065.jpg',
    description: 'Sophisticated sound reinforcement and elegant stage lighting setup for corporate award night.',
  },
  {
    id: 4,
    title: 'Atmospheric Stage & Laser Show',
    category: 'Lighting & Stage',
    location: 'Patia, Bhubaneswar',
    date: '2024',
    src: '/frames/ezgif-frame-090.jpg',
    description: 'Laser beam projections and fog effects creating a magical stage visual spectacle.',
  },
  {
    id: 5,
    title: 'Traditional Wedding Musical Ensemble',
    category: 'Weddings & Baraat',
    location: 'Cuttack Road',
    date: '2024',
    src: '/frames/ezgif-frame-115.jpg',
    description: 'Uniformed brass band performing classic celebration melodies for the groom’s family.',
  },
  {
    id: 6,
    title: 'Private Party High Bass DJ Floor',
    category: 'DJ Nights',
    location: 'Jaydev Vihar, Bhubaneswar',
    date: '2024',
    src: '/frames/ezgif-frame-140.jpg',
    description: 'Non-stop dance floor energy powered by custom DJ setlists and dual bass subwoofers.',
  },
  {
    id: 7,
    title: 'Cultural Festival Live Sound & Light',
    category: 'Corporate Events',
    location: 'Exhibition Ground, Bhubaneswar',
    date: '2023',
    src: '/frames/ezgif-frame-045.jpg',
    description: 'Massive open-air festival audio setup with multi-angle trussing and color washes.',
  },
  {
    id: 8,
    title: 'Anniversary Celebration Evening',
    category: 'Family Parties',
    location: 'Khandagiri, Bhubaneswar',
    date: '2023',
    src: '/frames/ezgif-frame-080.jpg',
    description: 'Intimate musical band performance and ambient warm lighting for family celebration.',
  },
  {
    id: 9,
    title: 'Festive Sangeet & Mehendi Night',
    category: 'Weddings & Baraat',
    location: 'Janpath, Bhubaneswar',
    date: '2023',
    src: '/frames/ezgif-frame-100.jpg',
    description: 'Interactive DJ dance floor setup for wedding Sangeet ceremony.',
  },
  {
    id: 10,
    title: 'High-Impact Moving Beam Rig',
    category: 'Lighting & Stage',
    location: 'Bhubaneswar Event Arena',
    date: '2023',
    src: '/frames/ezgif-frame-125.jpg',
    description: 'Dynamic DMX lighting sequence with rapid pan/tilt moving head fixtures.',
  },
  {
    id: 11,
    title: 'Grand Baraat Dhol Beats',
    category: 'Weddings & Baraat',
    location: 'Old Town, Bhubaneswar',
    date: '2023',
    src: '/frames/ezgif-frame-025.jpg',
    description: 'Rhythmic dhol drummers leading the street wedding procession with high spirit.',
  },
  {
    id: 12,
    title: 'Club & Party Lighting Spectacle',
    category: 'DJ Nights',
    location: 'Bhubaneswar',
    date: '2023',
    src: '/frames/ezgif-frame-070.jpg',
    description: 'Vibrant club lighting show with strobes and RGB laser grids.',
  },
];

const CATEGORIES = ['All Events', 'Weddings & Baraat', 'DJ Nights', 'Corporate Events', 'Lighting & Stage', 'Family Parties'];

export default function GallerySection({ onViewAllEvents }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const gridRef = useRef(null);

  // Featured 4 images for home section preview
  const previewImages = GALLERY_IMAGES.slice(0, 4);

  useEffect(() => {
    const anim = staggerReveal(gridRef.current, '.gallery-card', {
      y: 40,
      stagger: 0.1,
      start: 'top 75%',
    });

    return () => anim?.scrollTrigger?.kill();
  }, []);

  const openLightbox = (img, index) => {
    setSelectedImage(img);
    setSelectedIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = useCallback(() => {
    setSelectedImage(null);
    document.body.style.overflow = '';
  }, []);

  const prevImage = useCallback(
    (e) => {
      e?.stopPropagation();
      const nextIdx = (selectedIndex - 1 + previewImages.length) % previewImages.length;
      setSelectedIndex(nextIdx);
      setSelectedImage(previewImages[nextIdx]);
    },
    [selectedIndex, previewImages]
  );

  const nextImage = useCallback(
    (e) => {
      e?.stopPropagation();
      const nextIdx = (selectedIndex + 1) % previewImages.length;
      setSelectedIndex(nextIdx);
      setSelectedImage(previewImages[nextIdx]);
    },
    [selectedIndex, previewImages]
  );

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, closeLightbox, prevImage, nextImage]);

  return (
    <>
      <section
        id="gallery"
        className="section"
        style={{ background: 'var(--color-void)', position: 'relative' }}
        aria-label="Old Events Gallery"
      >
        <div
          className="section-glow"
          style={{
            top: '30%',
            right: '-200px',
            background: 'radial-gradient(circle, rgba(168,85,247,0.06), transparent 70%)',
          }}
        />

        <div className="section-inner" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '4rem' }}>
            <div>
              <span className="text-label" style={{ display: 'block', marginBottom: '1rem' }}>
                Past Celebrations &amp; Memory Archive
              </span>
              <h2 className="text-display">
                OLD <span style={{ color: 'var(--color-purple)' }}>EVENTS.</span>
              </h2>
            </div>


          </div>

          {/* Gallery Grid */}
          <div
            ref={gridRef}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {previewImages.map((img, idx) => (
              <div
                key={img.id}
                className="gallery-card"
                onClick={() => openLightbox(img, idx)}
                style={{
                  position: 'relative',
                  height: '260px',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  background: 'var(--color-abyss)',
                }}
              >
                <img
                  src={img.src}
                  alt={img.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.08)')}
                  onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                />

                {/* Gradient Overlay */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    padding: '1.25rem',
                    transition: 'opacity 0.3s ease',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span
                      style={{
                        background: 'rgba(0,0,0,0.6)',
                        backdropFilter: 'blur(8px)',
                        color: 'var(--color-white)',
                        fontSize: '0.65rem',
                        fontWeight: 600,
                        letterSpacing: '0.1em',
                        padding: '4px 10px',
                        borderRadius: '20px',
                        border: '1px solid rgba(255,255,255,0.15)',
                        textTransform: 'uppercase',
                      }}
                    >
                      {img.category}
                    </span>
                    <span
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        background: 'rgba(59, 130, 246, 0.8)',
                        color: '#fff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 0 15px rgba(59,130,246,0.5)',
                      }}
                    >
                      <ZoomIn size={16} />
                    </span>
                  </div>

                  <div>
                    <h3
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '1.1rem',
                        fontWeight: 700,
                        color: 'var(--color-white)',
                        marginBottom: '0.25rem',
                      }}
                    >
                      {img.title}
                    </h3>
                    <p style={{ fontSize: '0.75rem', color: 'var(--color-mist)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                      <MapPin size={12} style={{ color: 'var(--color-electric)' }} /> {img.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More Redirect CTA */}
          <div style={{ textAlign: 'center', marginTop: '4rem' }}>
            <button
              onClick={onViewAllEvents}
              className="btn-primary"
              style={{
                padding: '1.1rem 2.6rem',
                fontSize: '0.88rem',
                letterSpacing: '0.15em',
                borderRadius: '50px',
                background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(168, 85, 247, 0.2))',
                border: '1px solid rgba(168, 85, 247, 0.5)',
                boxShadow: '0 0 30px rgba(168, 85, 247, 0.25)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.8rem',
                cursor: 'pointer',
              }}
            >
              <Images size={18} />
              <span>View All ({GALLERY_IMAGES.length}+) Old Events &amp; Photos</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* FULLSCREEN LIGHTBOX ZOOM MODAL */}
      {selectedImage && (
        <div
          onClick={closeLightbox}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 99999,
            background: 'rgba(0, 0, 0, 0.95)',
            backdropFilter: 'blur(20px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
            animation: 'fadeIn 0.3s ease-out forwards',
          }}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            aria-label="Close image zoom"
            style={{
              position: 'absolute',
              top: '20px',
              right: '24px',
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              color: '#fff',
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              fontSize: '1.5rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 100001,
              transition: 'all 0.3s ease',
            }}
            onMouseOver={(e) => (e.currentTarget.style.background = 'rgba(239, 68, 68, 0.8)')}
            onMouseOut={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)')}
          >
            <X size={24} />
          </button>

          {/* Prev Arrow */}
          <button
            onClick={prevImage}
            aria-label="Previous image"
            style={{
              position: 'absolute',
              left: '24px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              color: '#fff',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              fontSize: '1.4rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 100001,
              transition: 'all 0.3s ease',
            }}
            onMouseOver={(e) => (e.currentTarget.style.background = 'rgba(59, 130, 246, 0.8)')}
            onMouseOut={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)')}
          >
            <ChevronLeft size={28} />
          </button>

          {/* Next Arrow */}
          <button
            onClick={nextImage}
            aria-label="Next image"
            style={{
              position: 'absolute',
              right: '24px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              color: '#fff',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              fontSize: '1.4rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 100001,
              transition: 'all 0.3s ease',
            }}
            onMouseOver={(e) => (e.currentTarget.style.background = 'rgba(59, 130, 246, 0.8)')}
            onMouseOut={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)')}
          >
            <ChevronRight size={28} />
          </button>

          {/* Modal Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '1000px',
              maxHeight: '90vh',
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              zIndex: 100000,
            }}
          >
            <div
              style={{
                position: 'relative',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.9), 0 0 40px rgba(59, 130, 246, 0.3)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                maxHeight: '75vh',
              }}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                style={{
                  maxWidth: '100%',
                  maxHeight: '75vh',
                  objectFit: 'contain',
                  display: 'block',
                }}
              />
            </div>

            {/* Caption & Counter */}
            <div
              style={{
                marginTop: '1.25rem',
                textAlign: 'center',
                color: '#fff',
                maxWidth: '600px',
              }}
            >
              <span
                style={{
                  fontSize: '0.7rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'var(--color-electric)',
                  fontWeight: 600,
                  display: 'block',
                  marginBottom: '0.4rem',
                }}
              >
                {selectedImage.category} • {selectedIndex + 1} of {previewImages.length}
              </span>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.4rem',
                  fontWeight: 700,
                  marginBottom: '0.4rem',
                }}
              >
                {selectedImage.title}
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--color-silver)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem' }}>
                <MapPin size={14} style={{ color: 'var(--color-electric)' }} /> {selectedImage.location} • {selectedImage.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export { GALLERY_IMAGES, CATEGORIES };
