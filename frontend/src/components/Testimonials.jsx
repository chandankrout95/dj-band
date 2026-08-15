import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TESTIMONIALS = [
  {
    quote:
      'An incredible atmosphere from start to finish. The lighting completely transformed the venue into something magical.',
    author: 'Client Name',
    event: 'Wedding Reception',
  },
  {
    quote:
      'The energy was unreal. Every single person was on the dance floor all night. Best DJ experience we\'ve ever had.',
    author: 'Client Name',
    event: 'Private Party',
  },
  {
    quote:
      'Professional, creative, and absolutely stunning visuals. They turned our corporate event into a full production.',
    author: 'Client Name',
    event: 'Corporate Gala',
  },
  {
    quote:
      'The sound quality was crystal clear and the lighting show was beyond anything we imagined. Truly unforgettable.',
    author: 'Client Name',
    event: 'College Festival',
  },
];

export default function Testimonials() {
  const sectionRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const scrollEl = scrollRef.current;
      if (!scrollEl) return;

      const scrollWidth = scrollEl.scrollWidth - scrollEl.clientWidth;

      if (scrollWidth > 0) {
        gsap.to(scrollEl, {
          scrollLeft: scrollWidth,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 30%',
            end: `+=${scrollWidth}`,
            scrub: 1,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section"
      style={{ background: 'var(--color-abyss)', overflow: 'hidden' }}
      aria-label="Testimonials"
    >
      <div className="section-inner" style={{ marginBottom: '3rem' }}>
        <span className="text-label" style={{ display: 'block', marginBottom: '1.5rem' }}>
          Testimonials
        </span>
        <h2 className="text-display">
          WHAT THEY
          <br />
          <span style={{ color: 'var(--color-silver)' }}>SAY.</span>
        </h2>
      </div>

      <div
        ref={scrollRef}
        style={{
          display: 'flex',
          gap: '1.5rem',
          overflowX: 'auto',
          paddingLeft: 'max(2rem, calc((100vw - 1200px) / 2))',
          paddingRight: '2rem',
          paddingBottom: '1rem',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        {TESTIMONIALS.map((t, i) => (
          <div key={i} className="testimonial-card">
            <p className="testimonial-quote">&ldquo;{t.quote}&rdquo;</p>
            <div>
              <p className="testimonial-author">— {t.author}</p>
              <p
                className="text-label"
                style={{ marginTop: '0.5rem', fontSize: '0.65rem' }}
              >
                {t.event}
              </p>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        div::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  );
}
