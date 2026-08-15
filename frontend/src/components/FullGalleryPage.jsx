import { useState, useEffect, useCallback } from 'react';
import { GALLERY_IMAGES, CATEGORIES } from './GallerySection';

export default function FullGalleryPage({ onBackToHome }) {
  const [activeCategory, setActiveCategory] = useState('All Events');
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Filter images based on active tab category
  const filteredImages = activeCategory === 'All Events'
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.filter((img) => img.category === activeCategory);

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
      const nextIdx = (selectedIndex - 1 + filteredImages.length) % filteredImages.length;
      setSelectedIndex(nextIdx);
      setSelectedImage(filteredImages[nextIdx]);
    },
    [selectedIndex, filteredImages]
  );

  const nextImage = useCallback(
    (e) => {
      e?.stopPropagation();
      const nextIdx = (selectedIndex + 1) % filteredImages.length;
      setSelectedIndex(nextIdx);
      setSelectedImage(filteredImages[nextIdx]);
    },
    [selectedIndex, filteredImages]
  );

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

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      style={{
        background: 'var(--color-void)',
        minHeight: '100vh',
        color: 'var(--color-white)',
        position: 'relative',
        zIndex: 9999,
        paddingBottom: '6rem',
      }}
    >
      {/* Header Bar */}
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 100,
          background: 'rgba(0, 0, 0, 0.85)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          padding: '1.25rem 2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <button
          onClick={onBackToHome}
          className="btn-secondary"
          style={{ padding: '0.6rem 1.25rem', fontSize: '0.75rem' }}
        >
          ← Back to Home
        </button>

        <div style={{ textAlign: 'right' }}>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.1rem' }}>
            SUBHADRA <span style={{ color: 'var(--color-electric)' }}>BAND & DJ</span>
          </span>
          <p style={{ fontSize: '0.65rem', color: 'var(--color-mist)', letterSpacing: '0.15em' }}>
            OLD EVENTS &amp; CELEBRATION ARCHIVE
          </p>
        </div>
      </header>

      {/* Hero Header for Gallery */}
      <div className="section-inner" style={{ paddingTop: '4rem', paddingBottom: '2rem' }}>
        <span className="text-label" style={{ display: 'block', marginBottom: '1rem' }}>
          Complete Event Portfolio ({GALLERY_IMAGES.length} Memories)
        </span>
        <h1 className="text-display" style={{ marginBottom: '1.5rem' }}>
          ALL <span style={{ color: 'var(--color-purple)' }}>OLD EVENTS.</span>
        </h1>
        <p className="text-body-lg" style={{ maxWidth: '700px', marginBottom: '3rem' }}>
          Browse through our past wedding baraats, energetic DJ nights, corporate galas, and family celebrations across Bhubaneswar and Odisha. Click on any image for full-screen zoomed view.
        </p>

        {/* Category Filters */}
        <div
          style={{
            display: 'flex',
            gap: '0.75rem',
            flexWrap: 'wrap',
            marginBottom: '3rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            paddingBottom: '1.5rem',
          }}
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                padding: '0.6rem 1.25rem',
                borderRadius: '30px',
                border: activeCategory === cat ? '1px solid var(--color-electric)' : '1px solid rgba(255, 255, 255, 0.1)',
                background: activeCategory === cat ? 'var(--color-electric)' : 'transparent',
                color: activeCategory === cat ? '#fff' : 'var(--color-silver)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Images Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {filteredImages.map((img, idx) => (
            <div
              key={img.id}
              onClick={() => openLightbox(img, idx)}
              style={{
                position: 'relative',
                height: '280px',
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
                  transition: 'transform 0.5s ease',
                }}
                onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.08)')}
                onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.1) 60%, transparent 100%)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  padding: '1.25rem',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span
                    style={{
                      background: 'rgba(0,0,0,0.7)',
                      color: 'var(--color-electric)',
                      fontSize: '0.65rem',
                      fontWeight: 600,
                      padding: '4px 10px',
                      borderRadius: '20px',
                      border: '1px solid rgba(59, 130, 246, 0.3)',
                    }}
                  >
                    {img.category}
                  </span>
                  <span style={{ fontSize: '1rem', color: '#fff' }}>🔍 Zoom</span>
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.15rem',
                      fontWeight: 700,
                      color: '#fff',
                      marginBottom: '0.25rem',
                    }}
                  >
                    {img.title}
                  </h3>
                  <p style={{ fontSize: '0.78rem', color: 'var(--color-mist)' }}>
                    📍 {img.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '5rem' }}>
          <button onClick={onBackToHome} className="btn-primary">
            ← Return to Main Page
          </button>
        </div>
      </div>

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
          }}
        >
          <button
            onClick={closeLightbox}
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
            }}
          >
            ✕
          </button>

          <button
            onClick={prevImage}
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
              zIndex: 100001,
            }}
          >
            ‹
          </button>

          <button
            onClick={nextImage}
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
              zIndex: 100001,
            }}
          >
            ›
          </button>

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
                {selectedImage.category} • {selectedIndex + 1} of {filteredImages.length}
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
              <p style={{ fontSize: '0.88rem', color: 'var(--color-silver)' }}>
                📍 {selectedImage.location} • {selectedImage.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
