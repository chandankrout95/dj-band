import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TESTIMONIALS = [
  {
    quote:
      'Subhadra Band & DJ made our wedding baraat electrifying! The brass band music, dhol beats, and DJ set kept everyone dancing with immense joy.',
    author: 'Rajesh & Sweety',
    event: 'Grand Wedding Reception, Bhubaneswar',
  },
  {
    quote:
      'The sound quality, heavy bass, and light setup were phenomenal. Subhadra Band & DJ delivered the best celebration experience for our corporate party.',
    author: 'Sanjay Mohanty',
    event: 'Corporate Annual Event',
  },
  {
    quote:
      'Superb band performance and DJ music! Extremely professional, punctual, and high energy from start to finish. Highly recommended for family events.',
    author: 'Priyanka Das',
    event: 'Family Celebration',
  },
  {
    quote:
      'From Rath Road to the wedding venue, Subhadra Band & DJ gave us an unforgettable evening with top-notch audio and dazzling lights.',
    author: 'Amitabh Sahoo',
    event: 'Wedding & DJ Night',
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
