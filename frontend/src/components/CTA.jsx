import { useEffect, useRef } from 'react';
import { fadeInUp } from '../animations/gsapAnimations';

export default function CTA() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const els = sectionRef.current.querySelectorAll('.cta-animate');
    const triggers = [];

    els.forEach((el, i) => {
      triggers.push(
        fadeInUp(el, {
          y: 40,
          duration: 1,
          delay: i * 0.15,
          trigger: sectionRef.current,
          start: 'top 65%',
        })
      );
    });

    return () => triggers.forEach((t) => t?.scrollTrigger?.kill());
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section"
      style={{
        background: 'var(--color-void)',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
      aria-label="Call to action"
    >
      {/* Background frame */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
        }}
      >
        <img
          src="/frames/ezgif-frame-100.jpg"
          alt=""
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.15,
            filter: 'blur(4px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(ellipse at center, rgba(0,0,0,0.4) 0%, var(--color-void) 80%)',
          }}
        />
      </div>

      <div style={{ position: 'relative', zIndex: 1 }}>
        <p
          className="cta-animate text-label"
          style={{ marginBottom: '2rem', opacity: 0 }}
        >
          Let&apos;s work together
        </p>

        <h2
          className="cta-animate text-display"
          style={{ marginBottom: '4rem', opacity: 0 }}
        >
          READY TO
          <br />
          CREATE THE
          <br />
          <span
            style={{
              background: 'linear-gradient(135deg, #3b82f6, #a855f7, #ef4444)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            NIGHT?
          </span>
        </h2>

        <div
          className="cta-animate"
          style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
            opacity: 0,
          }}
        >
          <a href="#contact" className="btn-primary">
            Book Your Event
          </a>
          <a href="#contact" className="btn-secondary">
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}
