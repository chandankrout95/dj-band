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
          <span className="text-label">About Subhadra Band & DJ</span>
        </div>

        {/* Heading */}
        <h2
          className="about-animate text-display"
          style={{ marginBottom: '4rem', maxWidth: '700px' }}
        >
          PREMIER
          <br />
          CELEBRATION
          <br />
          SERVICES
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
              Supplier of band & DJ services for weddings & other celebrations from formal, family & corporate events to parties.
            </p>
          </div>
          <div>
            <p className="text-body-lg">
              Based at Rath Road, Bhubaneswar, Subhadra Band & DJ provides grand musical processions, high-energy DJ setups, and modern visual lighting that turn every gathering into a spectacular milestone.
            </p>
            <p className="text-body-lg" style={{ marginTop: '1.5rem' }}>
              From traditional wedding baraats to vibrant corporate galas, private parties, and cultural celebrations, we bring unmatched passion, crystal-clear sound, and captivating energy to every stage.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
