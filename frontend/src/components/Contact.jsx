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
      aria-label="Contact"
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
          <span className="text-label">Get In Touch</span>
        </div>

        <h2 className="contact-animate text-display" style={{ marginBottom: '2rem' }}>
          BOOK YOUR
          <br />
          <span style={{ color: 'var(--color-electric)' }}>CELEBRATION.</span>
        </h2>

        <p className="contact-animate text-body-lg" style={{ maxWidth: '650px', marginBottom: '3rem' }}>
          Supplier of band &amp; DJ services for weddings &amp; other celebrations from formal, family &amp; corporate events to parties.
        </p>

        <div
          className="contact-animate"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '2.5rem',
            maxWidth: '1000px',
            borderTop: '1px solid rgba(255,255,255,0.08)',
            paddingTop: '3rem',
          }}
        >
          {/* Phone */}
          <div>
            <span className="text-label" style={{ display: 'block', marginBottom: '0.75rem' }}>
              Direct Phone Call
            </span>
            <a
              href="tel:09861060200"
              className="contact-link"
              style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--color-white)' }}
            >
              📞 098610 60200
            </a>
            <div style={{ marginTop: '0.75rem', display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <a
                href="tel:09861060200"
                className="btn-primary"
                style={{ padding: '0.5rem 1rem', fontSize: '0.7rem' }}
              >
                Call Now
              </a>
              <a
                href="https://wa.me/919861060200?text=Hello%20Subhadra%20Band%20%26%20DJ,%20I%20would%20like%20to%20inquire%20about%20booking%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{ padding: '0.5rem 1rem', fontSize: '0.7rem' }}
              >
                WhatsApp Us
              </a>
            </div>
          </div>

          {/* Location / Address */}
          <div>
            <span className="text-label" style={{ display: 'block', marginBottom: '0.75rem' }}>
              Address & Location
            </span>
            <p style={{ color: 'var(--color-cloud)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '0.75rem' }}>
              📍 Rath Road, Rameswar Patna Rd, near Barik Sahi, chhack, Bhubaneswar, Odisha 751002
            </p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Rath+Road,+Rameswar+Patna+Rd,+near+Barik+Sahi,+chhack,+Bhubaneswar,+Odisha+751002"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
              style={{ fontSize: '0.85rem', color: 'var(--color-electric)' }}
            >
              🗺️ Get Directions (Approx. 3 hrs 13 mins)
            </a>
          </div>

          {/* Operating Hours */}
          <div>
            <span className="text-label" style={{ display: 'block', marginBottom: '0.75rem' }}>
              Operating Hours
            </span>
            <p style={{ color: 'var(--color-white)', fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.25rem' }}>
              🟢 Open · Closes 11 pm
            </p>
            <p style={{ fontSize: '0.8rem', color: 'var(--color-mist)', fontStyle: 'italic', lineHeight: 1.5 }}>
              * Indian Independence Day &amp; national holidays might affect these hours.
            </p>
          </div>

          {/* Service Area */}
          <div>
            <span className="text-label" style={{ display: 'block', marginBottom: '0.75rem' }}>
              Service Coverage
            </span>
            <p style={{ color: 'var(--color-silver)', fontSize: '0.95rem', lineHeight: 1.6 }}>
              Bhubaneswar, Cuttack &amp; all districts across Odisha. Available for local &amp; destination celebrations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
