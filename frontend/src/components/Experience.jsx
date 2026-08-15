import { useEffect, useRef } from 'react';
import { staggerReveal } from '../animations/gsapAnimations';

const EVENTS = [
  'WEDDINGS',
  'PRIVATE PARTIES',
  'COLLEGE EVENTS',
  'NIGHTLIFE',
  'CORPORATE EVENTS',
  'FESTIVALS',
];

export default function Experience() {
  const listRef = useRef(null);

  useEffect(() => {
    const anim = staggerReveal(listRef.current, '.event-category', {
      y: 30,
      stagger: 0.1,
      start: 'top 75%',
    });

    return () => anim?.scrollTrigger?.kill();
  }, []);

  return (
    <section
      id="experience"
      className="section"
      style={{ background: 'var(--color-abyss)', position: 'relative' }}
      aria-label="Experience"
    >
      <div
        className="section-glow"
        style={{
          top: '30%',
          right: '-150px',
          background: 'radial-gradient(circle, rgba(239,68,68,0.05), transparent 70%)',
        }}
      />

      <div className="section-inner" style={{ position: 'relative', zIndex: 1 }}>
        <span className="text-label" style={{ display: 'block', marginBottom: '1.5rem' }}>
          Events
        </span>
        <h2 className="text-display" style={{ marginBottom: '5rem', maxWidth: '700px' }}>
          MAKE YOUR EVENT
          <br />
          <span style={{ color: 'var(--color-cloud)' }}>UNFORGETTABLE.</span>
        </h2>

        <div ref={listRef} style={{ maxWidth: '600px' }}>
          {EVENTS.map((event) => (
            <div key={event} className="event-category">
              {event}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
