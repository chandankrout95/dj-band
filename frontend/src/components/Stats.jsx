import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const STATS = [
  { value: 100, suffix: '+', label: 'Events' },
  { value: 50, suffix: '+', label: 'Venues' },
  { value: 10, suffix: '+', label: 'Years Experience' },
  { value: null, display: '∞', label: 'Energy' },
];

export default function Stats() {
  const sectionRef = useRef(null);
  const counterRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      counterRefs.current.forEach((el, i) => {
        if (!el) return;
        const stat = STATS[i];

        if (stat.value === null) {
          // Infinity symbol — just fade in
          gsap.fromTo(
            el,
            { opacity: 0, scale: 0.8 },
            {
              opacity: 1,
              scale: 1,
              duration: 1,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 75%',
                toggleActions: 'play none none none',
              },
            }
          );
        } else {
          // Animated counter
          const obj = { value: 0 };
          gsap.to(obj, {
            value: stat.value,
            duration: 2,
            delay: i * 0.2,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 75%',
              toggleActions: 'play none none none',
            },
            onUpdate: () => {
              el.textContent = Math.round(obj.value) + stat.suffix;
            },
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section"
      style={{
        background: 'var(--color-void)',
        borderTop: '1px solid rgba(255,255,255,0.03)',
        borderBottom: '1px solid rgba(255,255,255,0.03)',
      }}
      aria-label="Statistics"
    >
      <div className="section-inner">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '3rem',
            textAlign: 'center',
          }}
        >
          {STATS.map((stat, i) => (
            <div key={stat.label} className="stat-item">
              <div
                className="stat-number"
                ref={(el) => (counterRefs.current[i] = el)}
              >
                {stat.display || `0${stat.suffix}`}
              </div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
