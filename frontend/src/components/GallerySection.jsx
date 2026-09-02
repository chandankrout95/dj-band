'use client';

import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { MapPin, Images, ArrowRight } from 'lucide-react';
import { staggerReveal } from '../animations/gsapAnimations';

export const GALLERY_IMAGES = [
  {
    id: 1,
    title: 'Grand Wedding Baraat Procession',
    category: 'Weddings & Baraat',
    location: 'Rath Road, Bhubaneswar',
    date: '2025',
    src: '/frames/ezgif-frame-015.jpg',
    description: 'Electrifying wedding baraat procession with live brass band tunes and traditional dhol drumming.',
    fullDesc:
      'This grand wedding baraat procession on Rath Road featured our full 18-member brass band ensemble in ceremonial attire, accompanied by powerful dhol and nagada drummers. The procession illuminated the streets of Bhubaneswar with LED lighting, decorated horse chariot, and non-stop celebration music that had the entire neighbourhood joining in the festivities.',
  },
  {
    id: 2,
    title: 'Royal Wedding Reception DJ Night',
    category: 'DJ Nights',
    location: 'Mayfair Lagoon, Bhubaneswar',
    date: '2025',
    src: '/frames/ezgif-frame-035.jpg',
    description: 'High-energy DJ performance accompanied by synchronized moving heads and ambient light show.',
    fullDesc:
      'At the prestigious Mayfair Lagoon, our DJ team delivered an unforgettable reception night with Pioneer CDJ setups, synchronized moving head beams, and a curated setlist spanning Bollywood classics to EDM drops. The dance floor was packed from 9 PM till the early hours, with the lighting design perfectly complementing every beat.',
  },
  {
    id: 3,
    title: 'Corporate Celebration Gala',
    category: 'Corporate Events',
    location: 'Hotel Swosti Premium',
    date: '2024',
    src: '/frames/ezgif-frame-065.jpg',
    description: 'Sophisticated sound reinforcement and elegant stage lighting setup for corporate award night.',
    fullDesc:
      'For this prestigious corporate gala at Hotel Swosti Premium, we deployed our premium line array sound system for crystal-clear audio across the banquet hall. The stage was dressed with elegant warm-white wash lighting, custom gobo projections featuring the company logo, and subtle atmospheric haze that created a refined, award-ceremony atmosphere.',
  },
  {
    id: 4,
    title: 'Atmospheric Stage & Laser Show',
    category: 'Lighting & Stage',
    location: 'Patia, Bhubaneswar',
    date: '2024',
    src: '/frames/ezgif-frame-090.jpg',
    description: 'Laser beam projections and fog effects creating a magical stage visual spectacle.',
    fullDesc:
      'This outdoor event in Patia showcased the full power of our lighting production capabilities. Multiple DMX-programmed moving heads created dynamic beam patterns, while RGB laser scanners painted the night sky with vivid colors. Heavy fog machines added atmospheric depth, transforming the open-air venue into a mesmerizing visual spectacle.',
  },
  {
    id: 5,
    title: 'Traditional Wedding Musical Ensemble',
    category: 'Weddings & Baraat',
    location: 'Cuttack Road',
    date: '2024',
    src: '/frames/ezgif-frame-115.jpg',
    description: 'Uniformed brass band performing classic celebration melodies for the groom\'s family.',
    fullDesc:
      'Our uniformed brass band performed a heartfelt selection of classic wedding melodies and traditional Odia celebration songs along Cuttack Road. The groom\'s family requested a mix of timeless Bollywood tracks and regional favorites, and our musicians delivered each piece with precision and passion, making the baraat truly memorable.',
  },
  {
    id: 6,
    title: 'Private Party High Bass DJ Floor',
    category: 'DJ Nights',
    location: 'Jaydev Vihar, Bhubaneswar',
    date: '2024',
    src: '/frames/ezgif-frame-140.jpg',
    description: 'Non-stop dance floor energy powered by custom DJ setlists and dual bass subwoofers.',
    fullDesc:
      'This private birthday party in Jaydev Vihar was all about high-energy dancing. We set up dual 21" subwoofers for deep, chest-thumping bass alongside crystal-clear line array speakers. Our DJ read the crowd perfectly, transitioning between Bollywood bangers, hip-hop, and EDM tracks, keeping the dance floor packed for five hours straight.',
  },
  {
    id: 7,
    title: 'Cultural Festival Live Sound & Light',
    category: 'Corporate Events',
    location: 'Exhibition Ground, Bhubaneswar',
    date: '2023',
    src: '/frames/ezgif-frame-045.jpg',
    description: 'Massive open-air festival audio setup with multi-angle trussing and color washes.',
    fullDesc:
      'For this large-scale cultural festival at Exhibition Ground, we deployed our biggest sound system — multiple line array stacks for uniform coverage across the massive open-air venue. The stage featured multi-angle aluminium trussing supporting moving heads, LED washes, and atmospheric effects, creating a concert-grade production experience.',
  },
  {
    id: 8,
    title: 'Anniversary Celebration Evening',
    category: 'Family Parties',
    location: 'Khandagiri, Bhubaneswar',
    date: '2023',
    src: '/frames/ezgif-frame-080.jpg',
    description: 'Intimate musical band performance and ambient warm lighting for family celebration.',
    fullDesc:
      'This intimate 25th wedding anniversary celebration in Khandagiri featured our smaller acoustic band ensemble performing romantic melodies and classic hits. Warm amber uplighting and soft LED washes created a cozy, elegant atmosphere perfect for the family gathering. The evening was a beautiful blend of music, memories, and heartfelt moments.',
  },
  {
    id: 9,
    title: 'Festive Sangeet & Mehendi Night',
    category: 'Weddings & Baraat',
    location: 'Janpath, Bhubaneswar',
    date: '2023',
    src: '/frames/ezgif-frame-100.jpg',
    description: 'Interactive DJ dance floor setup for wedding Sangeet ceremony.',
    fullDesc:
      'The Sangeet night on Janpath was a vibrant celebration of music and dance. Our DJ setup featured interactive elements — a request system, dance battle segments, and games that got every family member on the floor. The lighting was programmed to shift with the music mood, from warm romantic hues to high-energy strobes for the dance-offs.',
  },
  {
    id: 10,
    title: 'High-Impact Moving Beam Rig',
    category: 'Lighting & Stage',
    location: 'Bhubaneswar Event Arena',
    date: '2023',
    src: '/frames/ezgif-frame-125.jpg',
    description: 'Dynamic DMX lighting sequence with rapid pan/tilt moving head fixtures.',
    fullDesc:
      'This event showcased our premium moving head rig — 12 high-powered beam fixtures with rapid pan/tilt capabilities, all running custom DMX sequences synchronized to the music. The result was a concert-quality lighting show with precise beam effects, color mixing, and dramatic gobo patterns that wowed every guest in the arena.',
  },
  {
    id: 11,
    title: 'Grand Baraat Dhol Beats',
    category: 'Weddings & Baraat',
    location: 'Old Town, Bhubaneswar',
    date: '2023',
    src: '/frames/ezgif-frame-025.jpg',
    description: 'Rhythmic dhol drummers leading the street wedding procession with high spirit.',
    fullDesc:
      'In the historic lanes of Old Town, our dhol drummers led a spirited baraat procession with infectious rhythms that echoed through the narrow streets. The energetic beats drew crowds of well-wishers, creating an unforgettable street celebration that perfectly blended tradition with high-energy entertainment.',
  },
  {
    id: 12,
    title: 'Club & Party Lighting Spectacle',
    category: 'DJ Nights',
    location: 'Bhubaneswar',
    date: '2023',
    src: '/frames/ezgif-frame-070.jpg',
    description: 'Vibrant club lighting show with strobes and RGB laser grids.',
    fullDesc:
      'This club-style party setup featured our full lighting arsenal — strobes for high-energy moments, RGB laser grids painting geometric patterns across the venue, LED pixel bars for ambient effects, and moving heads for dramatic beam shows. Combined with our DJ performance, it created an authentic nightclub experience.',
  },
];

export const CATEGORIES = ['All Events', 'Weddings & Baraat', 'DJ Nights', 'Corporate Events', 'Lighting & Stage', 'Family Parties'];

export default function GallerySection({ onViewAllEvents }) {
  const gridRef = useRef(null);
  const router = useRouter();

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

  const handleCardClick = (id) => {
    router.push(`/golden-memories/${id}`);
  };

  return (
    <section
      id="golden-memories"
      className="section"
      style={{ background: 'var(--color-void)', position: 'relative' }}
      aria-label="Golden Memories & Old Events Gallery"
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
              GOLDEN <span style={{ color: 'var(--color-purple)' }}>MEMORIES.</span>
            </h2>
          </div>
        </div>

        {/* Gallery Grid */}
        <div
          ref={gridRef}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))',
            gap: 'clamp(1.25rem, 3vw, 1.5rem)',
            width: '100%',
          }}
        >
          {previewImages.map((img) => (
            <div
              key={img.id}
              className="gallery-card"
              onClick={() => handleCardClick(img.id)}
              style={{
                position: 'relative',
                height: '280px',
                borderRadius: '12px',
                overflow: 'hidden',
                cursor: 'pointer',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                background: 'var(--color-abyss)',
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                width: '100%',
                boxSizing: 'border-box',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.border = '1px solid rgba(168, 85, 247, 0.35)';
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.4)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
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
                      background: 'rgba(0,0,0,0.6)',
                      backdropFilter: 'blur(8px)',
                      color: 'var(--color-mist)',
                      fontSize: '0.65rem',
                      fontWeight: 600,
                      letterSpacing: '0.1em',
                      padding: '4px 10px',
                      borderRadius: '20px',
                      border: '1px solid rgba(255,255,255,0.1)',
                    }}
                  >
                    {img.date}
                  </span>
                </div>

                <div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.1rem',
                      fontWeight: 700,
                      color: 'var(--color-white)',
                      marginBottom: '0.4rem',
                    }}
                  >
                    {img.title}
                  </h3>
                  <p style={{ fontSize: '0.75rem', color: 'var(--color-mist)', display: 'flex', alignItems: 'center', gap: '0.3rem', marginBottom: '0.75rem' }}>
                    <MapPin size={12} style={{ color: 'var(--color-electric)' }} /> {img.location}
                  </p>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      color: 'var(--color-purple)',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                    }}
                  >
                    <span>View Memory</span>
                    <ArrowRight size={14} />
                  </div>
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
  );
}
