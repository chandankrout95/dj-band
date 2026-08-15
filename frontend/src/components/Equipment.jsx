import { useEffect, useRef } from 'react';
import { staggerReveal } from '../animations/gsapAnimations';

const EQUIPMENT = [
  { icon: '🎺', label: 'Brass Band & Dhol' },
  { icon: '🎧', label: 'Pro DJ Consoles' },
  { icon: '🔊', label: 'High-Power Bass Sound' },
  { icon: '✦', label: 'Moving Head Lights' },
  { icon: '⟐', label: 'Laser Lighting' },
  { icon: '⬡', label: 'Stage & Truss Setup' },
];

export default function Equipment() {
  const gridRef = useRef(null);

  useEffect(() => {
    const anim = staggerReveal(gridRef.current, '.equipment-card', {
      y: 40,
      stagger: 0.1,
      start: 'top 78%',
    });

    return () => anim?.scrollTrigger?.kill();
  }, []);

  return (
    <section
      className="section"
      style={{ background: 'var(--color-abyss)', position: 'relative' }}
      aria-label="Equipment"
    >
      <div className="section-inner">
        <span className="text-label" style={{ display: 'block', marginBottom: '1.5rem' }}>
          Equipment
        </span>
        <h2 className="text-display" style={{ marginBottom: '5rem' }}>
          BUILT FOR
          <br />
          <span style={{ background: 'linear-gradient(135deg, #3b82f6, #a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            IMPACT.
          </span>
        </h2>

        <div
          ref={gridRef}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: '1px',
            background: 'rgba(255,255,255,0.03)',
          }}
        >
          {EQUIPMENT.map((item) => (
            <div key={item.label} className="equipment-card" style={{ background: 'var(--color-abyss)' }}>
              <div className="equipment-icon">{item.icon}</div>
              <div className="equipment-card-title">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
