import { useEffect, useRef } from 'react';
import { staggerReveal } from '../animations/gsapAnimations';

export default function IntroSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const anim = staggerReveal(sectionRef.current, '.intro-line', {
      y: 40,
      duration: 0.9,
      stagger: 0.2,
      start: 'top 75%',
    });

    return () => {
      if (anim?.scrollTrigger) anim.scrollTrigger.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--color-void)',
        position: 'relative',
      }}
    >
      {/* Subtle glow */}
      <div
        className="section-glow"
        style={{
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(59,130,246,0.08), transparent 70%)',
        }}
      />

      <div style={{ textAlign: 'center', maxWidth: '900px', position: 'relative', zIndex: 1 }}>
        <p className="intro-line text-display" style={{ color: 'var(--color-cloud)' }}>
          WE DON&apos;T JUST PLAY MUSIC.
        </p>
        <p className="intro-line text-display" style={{ color: 'var(--color-white)', marginTop: '0.5rem' }}>
          WE ELEVATE CELEBRATIONS.
        </p>
        <div className="intro-line" style={{ height: '2rem' }} />
        <p className="intro-line text-display" style={{ color: 'var(--color-cloud)' }}>
          WELCOME TO
        </p>
        <p className="intro-line text-display" style={{ marginTop: '0.5rem' }}>
          <span style={{ background: 'linear-gradient(135deg, #3b82f6, #a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            SUBHADRA BAND &amp; DJ.
          </span>
        </p>
      </div>
    </section>
  );
}
