'use client';

import { useParams } from 'next/navigation';
import { CheckCircle2 } from 'lucide-react';
import DetailPageLayout from '@/components/DetailPageLayout';
import { ITEMS } from '@/components/ItemSection';

export default function EquipmentDetailPage() {
  const params = useParams();
  const item = ITEMS.find((i) => i.id === params.slug);

  if (!item) {
    return (
      <DetailPageLayout
        backHref="/#equipments"
        backLabel="Back to Equipments"
        heroImage="/frames/ezgif-frame-045.jpg"
        title="Equipment Not Found"
      >
        <p style={{ color: 'var(--color-silver)', fontSize: '1.1rem' }}>
          The requested equipment could not be found.
        </p>
      </DetailPageLayout>
    );
  }

  const ItemIcon = item.Icon;

  return (
    <DetailPageLayout
      backHref="/#equipments"
      backLabel="Back to Equipments"
      heroImage={item.image}
      heroAlt={item.title}
      tag={item.tag}
      title={item.title}
      subtitle={item.desc}
    >
      {/* Full Description */}
      <div style={{ marginBottom: '4rem' }}>
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.4rem, 3vw, 2rem)',
            fontWeight: 700,
            color: '#fff',
            marginBottom: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
          }}
        >
          {ItemIcon && (
            <ItemIcon size={28} style={{ color: 'var(--color-electric)' }} />
          )}
          EQUIPMENT{' '}
          <span style={{ color: 'var(--color-electric)' }}>DETAILS</span>
        </h2>
        <div
          style={{
            width: '60px',
            height: '2px',
            background: 'linear-gradient(90deg, var(--color-electric), var(--color-purple))',
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
          {item.fullDesc}
        </p>
      </div>

      {/* Specs Grid */}
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
          KEY{' '}
          <span style={{ color: 'var(--color-purple)' }}>SPECIFICATIONS</span>
        </h2>
        <div
          style={{
            width: '60px',
            height: '2px',
            background: 'linear-gradient(90deg, var(--color-purple), var(--color-electric))',
            marginBottom: '2.5rem',
          }}
        />
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.25rem',
          }}
        >
          {item.specs.map((spec, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '1rem',
                padding: '1.25rem 1.5rem',
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                borderRadius: '12px',
                transition: 'border-color 0.3s ease',
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.25)')
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.06)')
              }
            >
              <CheckCircle2
                size={20}
                style={{
                  color: 'var(--color-electric)',
                  flexShrink: 0,
                  marginTop: '2px',
                }}
              />
              <span
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.95rem',
                  color: 'var(--color-cloud)',
                  lineHeight: 1.5,
                }}
              >
                {spec}
              </span>
            </div>
          ))}
        </div>
      </div>
    </DetailPageLayout>
  );
}
