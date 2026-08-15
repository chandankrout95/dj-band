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
          <span className="text-label">Contact</span>
        </div>

        <h2 className="contact-animate text-display" style={{ marginBottom: '4rem' }}>
          LET&apos;S MAKE
          <br />
          SOMETHING <span style={{ color: 'var(--color-electric)' }}>LOUD.</span>
        </h2>

        <div
          className="contact-animate"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '2.5rem',
            maxWidth: '900px',
            borderTop: '1px solid rgba(255,255,255,0.05)',
            paddingTop: '3rem',
          }}
        >
          <div>
            <span className="text-label" style={{ display: 'block', marginBottom: '0.75rem' }}>
              Booking & Inquiries
            </span>
            <a href="mailto:booking@lumixdj.com" className="contact-link" style={{ fontSize: '1.1rem', color: 'var(--color-white)' }}>
              booking@lumixdj.com
            </a>
          </div>

          <div>
            <span className="text-label" style={{ display: 'block', marginBottom: '0.75rem' }}>
              Direct Line
            </span>
            <a href="tel:+15550192834" className="contact-link" style={{ fontSize: '1.1rem', color: 'var(--color-white)' }}>
              +1 (555) 019-2834
            </a>
          </div>

          <div>
            <span className="text-label" style={{ display: 'block', marginBottom: '0.75rem' }}>
              Location
            </span>
            <p style={{ color: 'var(--color-silver)', fontSize: '1rem', lineHeight: 1.6 }}>
              Available Worldwide
              <br />
              <span style={{ fontSize: '0.85rem', color: 'var(--color-mist)' }}>Based in New York &amp; Los Angeles</span>
            </p>
          </div>

          <div>
            <span className="text-label" style={{ display: 'block', marginBottom: '0.75rem' }}>
              Social
            </span>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="contact-link">
                Instagram
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="contact-link">
                YouTube
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
