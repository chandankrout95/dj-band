'use client';

import { useParams } from 'next/navigation';
import { MapPin, Calendar, Tag } from 'lucide-react';
import DetailPageLayout from '@/components/DetailPageLayout';
import { GALLERY_IMAGES } from '@/components/GallerySection';

export default function GoldenMemoryDetailPage() {
  const params = useParams();
  const memory = GALLERY_IMAGES.find((m) => String(m.id) === params.id);

  if (!memory) {
    return (
      <DetailPageLayout
        backHref="/#golden-memories"
        backLabel="Back to Golden Memories"
        heroImage="/frames/ezgif-frame-001.jpg"
        title="Memory Not Found"
      >
        <p style={{ color: 'var(--color-silver)', fontSize: '1.1rem' }}>
          The requested memory could not be found.
        </p>
      </DetailPageLayout>
    );
  }

  return (
    <DetailPageLayout
      backHref="/#golden-memories"
      backLabel="Back to Golden Memories"
      heroImage={memory.src}
      heroAlt={memory.title}
      tag={memory.category}
      title={memory.title}
      subtitle={memory.description}
    >
      {/* Event Details Bar */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '2rem',
          padding: '1.5rem 2rem',
          background: 'rgba(255, 255, 255, 0.02)',
          border: '1px solid rgba(255, 255, 255, 0.06)',
          borderRadius: '16px',
          marginBottom: '3.5rem',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <MapPin size={18} style={{ color: 'var(--color-electric)' }} />
          <div>
            <span
              style={{
                display: 'block',
                fontSize: '0.68rem',
                fontWeight: 700,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--color-mist)',
                marginBottom: '0.2rem',
              }}
            >
              Location
            </span>
            <span style={{ color: 'var(--color-cloud)', fontSize: '0.95rem', fontWeight: 600 }}>
              {memory.location}
            </span>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <Calendar size={18} style={{ color: 'var(--color-purple)' }} />
          <div>
            <span
              style={{
                display: 'block',
                fontSize: '0.68rem',
                fontWeight: 700,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--color-mist)',
                marginBottom: '0.2rem',
              }}
            >
              Year
            </span>
            <span style={{ color: 'var(--color-cloud)', fontSize: '0.95rem', fontWeight: 600 }}>
              {memory.date}
            </span>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <Tag size={18} style={{ color: 'var(--color-amber, #f59e0b)' }} />
          <div>
            <span
              style={{
                display: 'block',
                fontSize: '0.68rem',
                fontWeight: 700,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--color-mist)',
                marginBottom: '0.2rem',
              }}
            >
              Category
            </span>
            <span style={{ color: 'var(--color-cloud)', fontSize: '0.95rem', fontWeight: 600 }}>
              {memory.category}
            </span>
          </div>
        </div>
      </div>

      {/* Full Story */}
      <div style={{ marginBottom: '4rem' }}>
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.4rem, 3vw, 2rem)',
            fontWeight: 700,
            color: '#fff',
            marginBottom: '1.5rem',
          }}
        >
          THE{' '}
          <span style={{ color: 'var(--color-purple)' }}>STORY</span>
        </h2>
        <div
          style={{
            width: '60px',
            height: '2px',
            background: 'linear-gradient(90deg, var(--color-purple), var(--color-electric))',
            marginBottom: '2rem',
          }}
        />
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(1rem, 1.6vw, 1.15rem)',
            color: 'var(--color-cloud)',
            lineHeight: 1.8,
            maxWidth: '800px',
          }}
        >
          {memory.fullDesc}
        </p>
      </div>

      {/* Full Image Showcase */}
      <div>
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.4rem, 3vw, 2rem)',
            fontWeight: 700,
            color: '#fff',
            marginBottom: '1.5rem',
          }}
        >
          EVENT{' '}
          <span style={{ color: 'var(--color-electric)' }}>HIGHLIGHT</span>
        </h2>
        <div
          style={{
            width: '60px',
            height: '2px',
            background: 'linear-gradient(90deg, var(--color-electric), var(--color-purple))',
            marginBottom: '2rem',
          }}
        />
        <div
          style={{
            borderRadius: '16px',
            overflow: 'hidden',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)',
          }}
        >
          <img
            src={memory.src}
            alt={memory.title}
            style={{
              width: '100%',
              height: 'auto',
              maxHeight: '600px',
              objectFit: 'cover',
              display: 'block',
            }}
          />
        </div>
      </div>
    </DetailPageLayout>
  );
}
