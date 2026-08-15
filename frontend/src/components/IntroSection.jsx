import { useEffect, useRef } from 'react';
import { textLineReveal } from '../animations/gsapAnimations';

export default function IntroSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = textLineReveal(sectionRef.current, {
      duration: 1.2,
      stagger: 0.3,
      start: 'top 75%',
    });

    return () => {
      if (ctx?.scrollTrigger) ctx.scrollTrigger.kill();
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
        <p className="reveal-line text-display" style={{ color: 'var(--color-cloud)' }}>
          WE DON&apos;T JUST PLAY MUSIC.
        </p>
        <p className="reveal-line text-display" style={{ color: 'var(--color-white)' }}>
          WE ELEVATE CELEBRATIONS.
        </p>
        <div style={{ height: '2rem' }} />
        <p className="reveal-line text-display" style={{ color: 'var(--color-cloud)' }}>
          WELCOME TO
        </p>
        <p className="reveal-line text-display">
          <span style={{ background: 'linear-gradient(135deg, #3b82f6, #a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            SUBHADRA BAND & DJ.
          </span>
        </p>
      </div>
    </section>
  );
}
