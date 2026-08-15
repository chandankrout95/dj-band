import { useEffect, useRef } from 'react';
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
      style={{ background: 'var(--color-abyss)', position: 'relative' }}
      aria-label="Book Your Celebration"
    >
      <div
        className="section-glow"
        style={{
          bottom: '10%',
          left: '10%',
          background: 'radial-gradient(circle, rgba(59,130,246,0.06), transparent 70%)',
        }}
      />

      <div className="section-inner" style={{ position: 'relative', zIndex: 1 }}>
        <div className="contact-animate" style={{ marginBottom: '1.5rem' }}>
          <span className="text-label">Book Now</span>
        </div>

        <h2 className="contact-animate text-display" style={{ marginBottom: '3rem' }}>
          BOOK YOUR
          <br />
          <span style={{ color: 'var(--color-electric)' }}>CELEBRATION.</span>
        </h2>

        {/* High-Impact Action Buttons */}
        <div
          className="contact-animate"
          style={{
            display: 'flex',
            gap: '1.25rem',
            flexWrap: 'wrap',
            marginBottom: '4rem',
          }}
        >
          {/* Call Button */}
          <a href="tel:09861060200" className="btn-primary">
            📞 Call 098610 60200
          </a>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/919861060200?text=Hello%20Subhadra%20Band%20%26%20DJ,%20I%20would%20like%20to%20inquire%20about%20booking%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ borderColor: '#22c55e', color: '#22c55e' }}
          >
            💬 WhatsApp Us
          </a>

          {/* Google Maps Directions Button */}
          <a
            href="https://www.google.com/maps/search/?api=1&query=Rath+Road,+Rameswar+Patna+Rd,+near+Barik+Sahi,+chhack,+Bhubaneswar,+Odisha+751002"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            🗺️ Get Directions (3h 13m)
          </a>
        </div>

        {/* Address and Hours Info */}
        {/* <div
          className="contact-animate"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '2.5rem',
            maxWidth: '1000px',
            borderTop: '1px solid rgba(255,255,255,0.05)',
            paddingTop: '3rem',
          }}
        >
          <div>
            <span className="text-label" style={{ display: 'block', marginBottom: '0.75rem' }}>
              Address &amp; Location
            </span>
            <p style={{ color: 'var(--color-silver)', fontSize: '0.95rem', lineHeight: 1.6 }}>
              📍 Rath Road, Rameswar Patna Rd, near Barik Sahi, chhack, Bhubaneswar, Odisha 751002
            </p>
          </div>

          <div>
            <span className="text-label" style={{ display: 'block', marginBottom: '0.75rem' }}>
              Operating Hours
            </span>
            <p style={{ color: 'var(--color-white)', fontSize: '1rem', fontWeight: 600 }}>
              🟢 Open · Closes 11 pm
            </p>
            <p style={{ fontSize: '0.75rem', color: 'var(--color-mist)', fontStyle: 'italic', marginTop: '0.25rem' }}>
              * Indian Independence Day might affect hours.
            </p>
          </div>
        </div> */}
      </div>
    </section>
  );
}
