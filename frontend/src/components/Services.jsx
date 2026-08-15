import { useEffect, useRef } from 'react';
import { staggerReveal } from '../animations/gsapAnimations';

const SERVICES = [
  {
    num: '01',
    title: 'Wedding Band & Baraat',
    desc: 'Grand brass band, traditional dhol, and royal procession music for unforgettable wedding celebrations and festive baraat arrangements.',
  },
  {
    num: '02',
    title: 'High-Energy DJ Nights',
    desc: 'Top-tier DJ performances for weddings, anniversaries, corporate galas, and parties with custom setlists that keep the crowd dancing all night.',
  },
  {
    num: '03',
    title: 'Pro Sound Systems',
    desc: 'High-fidelity audio reinforcement with powerful subwoofers and crystal-clear sound distribution tailored for venues of all scales across Bhubaneswar.',
  },
  {
    num: '04',
    title: 'Event & Lighting Production',
    desc: 'Complete event production with moving heads, atmospheric stage lighting, laser shows, and seamless execution for formal and family celebrations.',
  },
];

export default function Services() {
  const sectionRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    const anim = staggerReveal(gridRef.current, '.service-card', {
      y: 60,
      stagger: 0.15,
      start: 'top 75%',
    });

    return () => anim?.scrollTrigger?.kill();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="section"
      style={{ background: 'var(--color-void)', position: 'relative' }}
      aria-label="Services"
    >
      <div
        className="section-glow"
        style={{
          bottom: '-200px',
          left: '-200px',
          background: 'radial-gradient(circle, rgba(59,130,246,0.06), transparent 70%)',
        }}
      />

      <div className="section-inner" style={{ position: 'relative', zIndex: 1 }}>
        <span className="text-label" style={{ display: 'block', marginBottom: '1.5rem' }}>
          Services
        </span>
        <h2 className="text-display" style={{ marginBottom: '5rem' }}>
          WHAT WE
          <br />
          BRING
        </h2>

        <div
          ref={gridRef}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1px',
            background: 'rgba(255,255,255,0.03)',
          }}
        >
          {SERVICES.map((service) => (
            <div key={service.num} className="service-card" style={{ background: 'var(--color-void)' }}>
              <div className="service-card-number">{service.num}</div>
              <h3 className="service-card-title">{service.title}</h3>
              <p className="service-card-desc">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
