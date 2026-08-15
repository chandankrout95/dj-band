import { useEffect, useRef } from 'react';
import { fadeInUp } from '../animations/gsapAnimations';

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const els = sectionRef.current.querySelectorAll('.about-animate');
    const triggers = [];

    els.forEach((el, i) => {
      triggers.push(
        fadeInUp(el, {
          y: 50,
          duration: 1,
          delay: i * 0.1,
          trigger: sectionRef.current,
          start: 'top 70%',
        })
      );
    });

    return () => triggers.forEach((t) => t?.scrollTrigger?.kill());
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="section"
      style={{ background: 'var(--color-abyss)', position: 'relative' }}
      aria-label="About"
    >
      <div
        className="section-glow"
        style={{
          top: '20%',
          right: '-200px',
          background: 'radial-gradient(circle, rgba(168,85,247,0.06), transparent 70%)',
        }}
      />

      <div className="section-inner" style={{ position: 'relative', zIndex: 1 }}>
        {/* Label */}
        <div className="about-animate" style={{ marginBottom: '1.5rem' }}>
          <span className="text-label">About Us</span>
        </div>

        {/* Heading */}
        <h2
          className="about-animate text-display"
          style={{ marginBottom: '4rem', maxWidth: '700px' }}
        >
          THE
          <br />
          EXPERIENCE
        </h2>

        {/* Divider */}
        <div className="about-animate divider" style={{ marginBottom: '3rem' }} />

        {/* Content columns */}
        <div
          className="about-animate"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '3rem',
            maxWidth: '900px',
          }}
        >
          <div>
            <p
              className="text-heading"
              style={{ fontSize: 'clamp(1.2rem, 2vw, 1.6rem)', marginBottom: '1rem', fontWeight: 600 }}
            >
              More than sound.
              <br />
              More than lights.
              <br />
              More than an event.
            </p>
          </div>
          <div>
            <p className="text-body-lg">
              We create immersive DJ experiences designed to transform ordinary
              spaces into unforgettable nights. Our approach combines
              cutting-edge lighting technology, professional sound systems, and
              curated musical performances to deliver a sensory experience that
              goes beyond expectations.
            </p>
            <p className="text-body-lg" style={{ marginTop: '1.5rem' }}>
              Every event is unique. Every audience deserves something
              extraordinary. That&apos;s what we deliver — every single time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
