'use client';

import { useRouter } from 'next/navigation';
import { ArrowLeft, Phone, MessageCircle } from 'lucide-react';

export default function DetailPageLayout({
  backHref = '/',
  backLabel = 'Back to Home',
  heroImage,
  heroAlt,
  tag,
  title,
  subtitle,
  children,
}) {
  const router = useRouter();

  const handleBack = (e) => {
    e.preventDefault();
    router.push(backHref);
  };

  return (
    <main
      style={{
        minHeight: '100vh',
        background: 'var(--color-void)',
        color: 'var(--color-white)',
      }}
    >
      {/* Top Navigation Bar */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: '1rem 2rem',
          background: 'rgba(0, 0, 0, 0.8)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <a
          href={backHref}
          onClick={handleBack}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.6rem',
            color: 'rgba(255, 255, 255, 0.85)',
            textDecoration: 'none',
            fontSize: '0.88rem',
            fontWeight: 600,
            fontFamily: 'var(--font-body)',
            letterSpacing: '0.05em',
            transition: 'color 0.3s ease',
          }}
        >
          <ArrowLeft size={20} />
          <span>{backLabel}</span>
        </a>

        <a
          href="tel:+919861060200"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.5rem 1.2rem',
            borderRadius: '30px',
            background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
            color: '#fff',
            textDecoration: 'none',
            fontSize: '0.78rem',
            fontWeight: 700,
            border: 'none',
            boxShadow: '0 4px 15px rgba(59, 130, 246, 0.3)',
          }}
        >
          <Phone size={14} />
          <span>Call Now</span>
        </a>
      </div>

      {/* Hero Image Section */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: 'clamp(300px, 50vh, 550px)',
          overflow: 'hidden',
          marginTop: '60px',
        }}
      >
        <img
          src={heroImage}
          alt={heroAlt || title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
          }}
        />
        {/* Gradient overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(to top, var(--color-void) 0%, rgba(0,0,0,0.4) 40%, rgba(0,0,0,0.15) 100%)',
          }}
        />

        {/* Title overlay */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            padding: '3rem clamp(1rem, 3vw, 2rem) 2.5rem',
            maxWidth: '1200px',
            margin: '0 auto',
            boxSizing: 'border-box',
            width: '100%',
          }}
        >
          {tag && (
            <span
              style={{
                display: 'inline-block',
                fontSize: '0.7rem',
                fontWeight: 700,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--color-electric)',
                background: 'rgba(59, 130, 246, 0.12)',
                border: '1px solid rgba(59, 130, 246, 0.3)',
                padding: '0.35rem 1rem',
                borderRadius: '30px',
                marginBottom: '1rem',
              }}
            >
              {tag}
            </span>
          )}
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: '#fff',
              marginBottom: subtitle ? '0.75rem' : 0,
            }}
          >
            {title}
          </h1>
          {subtitle && (
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(1rem, 1.8vw, 1.2rem)',
                color: 'var(--color-cloud)',
                lineHeight: 1.6,
                maxWidth: '700px',
              }}
            >
              {subtitle}
            </p>
          )}
        </div>
      </div>

      {/* Content Area */}
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '4rem clamp(1rem, 3vw, 2rem) 6rem',
          boxSizing: 'border-box',
          width: '100%',
        }}
      >
        {children}
      </div>

      {/* Bottom CTA Strip */}
      <div
        style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.06)',
          background: 'rgba(255, 255, 255, 0.02)',
          padding: '3rem clamp(1rem, 3vw, 2rem)',
          boxSizing: 'border-box',
          width: '100%',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            textAlign: 'center',
          }}
        >
          <h3
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.4rem, 3vw, 2rem)',
              fontWeight: 700,
              marginBottom: '1.5rem',
              color: '#fff',
            }}
          >
            INTERESTED? LET&apos;S{' '}
            <span style={{ color: 'var(--color-electric)' }}>TALK.</span>
          </h3>
          <div
            style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            <a
              href="tel:+919861060200"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                padding: '0.9rem 2rem',
                borderRadius: '50px',
                background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
                color: '#fff',
                textDecoration: 'none',
                fontSize: '0.88rem',
                fontWeight: 700,
                border: 'none',
                boxShadow: '0 8px 25px rgba(59, 130, 246, 0.35)',
              }}
            >
              <Phone size={16} />
              <span>Call 098610 60200</span>
            </a>
            <a
              href="https://wa.me/919861060200?text=Hello%20Subhadra%20Band%20%26%20DJ,%20I%20would%20like%20to%20inquire%20about%20booking%20services."
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                padding: '0.9rem 2rem',
                borderRadius: '50px',
                background: 'linear-gradient(135deg, #22c55e 0%, #15803d 100%)',
                color: '#fff',
                textDecoration: 'none',
                fontSize: '0.88rem',
                fontWeight: 700,
                border: 'none',
                boxShadow: '0 8px 25px rgba(34, 197, 94, 0.3)',
              }}
            >
              <MessageCircle size={16} />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
