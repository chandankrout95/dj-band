import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const WORDS = ['MOVING LIGHTS', 'PRECISION', 'COLOR', 'ENERGY'];

export default function LightingShowcase() {
  const sectionRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax on the image
      gsap.fromTo(
        imgRef.current,
        { scale: 1.1 },
        {
          scale: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        }
      );

      // Stagger text entries
      const words = sectionRef.current.querySelectorAll('.lighting-word');
      gsap.fromTo(
        words,
        { x: -60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 65%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="gallery"
      className="section"
      style={{
        background: 'var(--color-void)',
        position: 'relative',
        overflow: 'hidden',
      }}
      aria-label="Lighting Showcase"
    >
      {/* Background image using a frame from the sequence */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          overflow: 'hidden',
          zIndex: 0,
        }}
      >
        <img
          ref={imgRef}
          src="/frames/ezgif-frame-040.jpg"
          alt="DJ lighting rig showcase"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.3,
            filter: 'blur(2px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(to bottom, var(--color-void) 0%, transparent 30%, transparent 70%, var(--color-void) 100%)',
          }}
        />
      </div>

      <div
        className="section-inner"
        style={{ position: 'relative', zIndex: 1, minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
      >
        <span className="text-label" style={{ display: 'block', marginBottom: '1.5rem' }}>
          Showcase
        </span>
        <h2 className="text-display" style={{ marginBottom: '4rem' }}>
          LIGHT IN
          <br />
          MOTION.
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {WORDS.map((word) => (
            <span
              key={word}
              className="lighting-word"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                fontWeight: 700,
                letterSpacing: '0.1em',
                color: 'var(--color-ash)',
                opacity: 0,
              }}
            >
              {word}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
