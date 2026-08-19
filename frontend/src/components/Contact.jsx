'use client';

import { useEffect, useRef } from 'react';
import { Phone, MessageCircle, Navigation2, MapPin, Clock } from 'lucide-react';
import { fadeInUp } from '../animations/gsapAnimations';

export default function Contact() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const els = sectionRef.current.querySelectorAll('.contact-animate');
    const triggers = [];

    els.forEach((el, i) => {
      triggers.push(
        fadeInUp(el, {
          y: 40,
          duration: 1,
          delay: i * 0.1,
          trigger: sectionRef.current,
          start: 'top 75%',
        })
      );
    });

    return () => triggers.forEach((t) => t?.scrollTrigger?.kill());
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="section"
      style={{
        background: 'radial-gradient(ellipse at center, rgba(15, 23, 42, 0.95) 0%, var(--color-void) 100%)',
        position: 'relative',
      }}
      aria-label="Book Your Celebration"
    >
      {/* Background ambient lighting glows */}
      <div
        className="section-glow"
        style={{
          top: '20%',
          left: '5%',
          background: 'radial-gradient(circle, rgba(59,130,246,0.12), transparent 70%)',
        }}
      />
      <div
        className="section-glow"
        style={{
          bottom: '10%',
          right: '5%',
          background: 'radial-gradient(circle, rgba(168,85,247,0.1), transparent 70%)',
        }}
      />

      <div className="section-inner" style={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
        {/* Header Badge */}
        <div className="contact-animate">
          <span
            className="text-subheading"
            style={{
              color: 'var(--color-electric)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              letterSpacing: '0.25em',
              fontSize: '0.75rem',
              padding: '0.4rem 1.2rem',
              borderRadius: '30px',
              background: 'rgba(59, 130, 246, 0.08)',
              border: '1px solid rgba(59, 130, 246, 0.25)',
              marginBottom: '1.5rem',
            }}
          >
            <Clock size={14} className="animate-spin" style={{ animationDuration: '4s' }} />
            RESERVE YOUR EVENT DATES
          </span>

          <h2
            className="text-display"
            style={{
              marginBottom: '1rem',
              fontSize: 'clamp(2.2rem, 5.5vw, 5.5rem)',
              letterSpacing: '-0.04em',
              background: 'linear-gradient(135deg, #ffffff 30%, #94a3b8 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            LET’S MAKE YOUR EVENT <br />
            <span
              style={{
                background: 'linear-gradient(90deg, #3b82f6 0%, #a855f7 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              UNFORGETTABLE
            </span>
          </h2>
        </div>

        <div className="contact-animate" style={{ display: 'flex', justifyContent: 'center', marginBottom: '2.5rem' }}>
          <div className="divider" style={{ width: '80px', height: '2px' }} />
        </div>

        <p
          className="contact-animate text-body-lg"
          style={{
            maxWidth: '650px',
            margin: '0 auto 3rem',
            color: 'var(--color-cloud)',
            fontSize: 'clamp(1rem, 1.8vw, 1.25rem)',
            lineHeight: 1.7,
          }}
        >
          Book Subhadra Band &amp; DJ for weddings, processions, corporate events, or private celebrations across Bhubaneswar &amp; Odisha.
        </p>

        {/* Premium CTA Buttons Group */}
        <div
          className="contact-animate"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1.25rem',
            marginBottom: '4.5rem',
          }}
        >
          {/* Direct Phone Call Button */}
          <a
            href="tel:+919861060200"
            className="btn-primary"
            style={{
              padding: '1.1rem 2.5rem',
              fontSize: '0.9rem',
              fontWeight: 700,
              borderRadius: '50px',
              background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
              color: '#ffffff',
              border: 'none',
              boxShadow: '0 10px 30px rgba(59, 130, 246, 0.4)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              textDecoration: 'none',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            }}
          >
            <Phone size={18} />
            <span>Call 098610 60200</span>
          </a>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/919861060200?text=Hello%20Subhadra%20Band%20%26%20DJ,%20I%20would%20like%20to%20inquire%20about%20booking%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{
              padding: '1.1rem 2.5rem',
              fontSize: '0.9rem',
              fontWeight: 700,
              borderRadius: '50px',
              background: 'linear-gradient(135deg, #22c55e 0%, #15803d 100%)',
              color: '#ffffff',
              border: 'none',
              boxShadow: '0 10px 30px rgba(34, 197, 94, 0.35)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              textDecoration: 'none',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            }}
          >
            <MessageCircle size={18} />
            <span>Chat on WhatsApp</span>
          </a>

          {/* Google Maps Directions Button */}
          <a
            href="https://www.google.com/maps/search/?api=1&query=Rath+Road,+Rameswar+Patna+Rd,+near+Barik+Sahi,+chhack,+Bhubaneswar,+Odisha+751002"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            style={{
              padding: '1.1rem 2.2rem',
              fontSize: '0.88rem',
              fontWeight: 600,
              borderRadius: '50px',
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              color: 'var(--color-cloud)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              textDecoration: 'none',
            }}
          >
            <Navigation2 size={18} />
            <span>Get Directions (3h 13m)</span>
          </a>
        </div>

        {/* Address & Info Banner */}
        <div
          className="contact-animate"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '2.5rem',
            maxWidth: '1000px',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            paddingTop: '3rem',
          }}
        >
          <div style={{ textAlign: 'left' }}>
            <span className="text-label" style={{ display: 'block', marginBottom: '0.6rem' }}>
              Official Location
            </span>
            <p style={{ color: 'var(--color-cloud)', fontSize: '0.95rem', lineHeight: 1.6, display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
              <MapPin size={18} style={{ flexShrink: 0, marginTop: '3px', color: 'var(--color-electric)' }} />
              <span>Rath Road, Rameswar Patna Rd, near Barik Sahi, chhack, Bhubaneswar, Odisha 751002</span>
            </p>
          </div>

          <div style={{ textAlign: 'left' }}>
            <span className="text-label" style={{ display: 'block', marginBottom: '0.6rem' }}>
              Working Hours
            </span>
            <p style={{ color: 'var(--color-white)', fontSize: '1.05rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Clock size={18} style={{ color: '#22c55e' }} />
              <span>Open · Closes 11 pm</span>
            </p>
            <p style={{ fontSize: '0.75rem', color: 'var(--color-mist)', marginTop: '0.25rem' }}>
              * Holidays and event days operate on extended schedules.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
