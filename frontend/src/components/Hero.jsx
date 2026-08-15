import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollSequence from './ScrollSequence';

gsap.registerPlugin(ScrollTrigger);

export default function Hero({ images }) {
  const heroRef = useRef(null);
  const scrollIndicatorRef = useRef(null);
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);
  const text3Ref = useRef(null);
  const text4Ref = useRef(null);

  useEffect(() => {
    const totalScrollDist = 151 * 35; // ~5285px

    const ctx = gsap.context(() => {
      // Create master scrubbed timeline for sequential text reveals
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: `+=${totalScrollDist}`,
          scrub: 0.5,
          onRefresh: () => {
            // Force refresh scroll trigger bounds
          },
        },
      });

      // 0. Fade out scroll indicator on initial scroll start
      tl.to(scrollIndicatorRef.current, { opacity: 0, y: 20, duration: 0.05 }, 0);

      // 1. Text 1: "SUBHADRA." (Visible on start -> Holds -> Fades/Slides Out)
      tl.to(
        text1Ref.current,
        { opacity: 0, y: -60, filter: 'blur(10px)', duration: 0.08, ease: 'power2.in' },
        0.20
      );

      // 2. Text 2: "BAND & DJ." (Reveals -> Holds -> Fades/Slides Out)
      tl.fromTo(
        text2Ref.current,
        { opacity: 0, y: 80, filter: 'blur(10px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.1, ease: 'power2.out' },
        0.25
      ).to(
        text2Ref.current,
        { opacity: 0, y: -60, filter: 'blur(10px)', duration: 0.08, ease: 'power2.in' },
        0.45
      );

      // 3. Text 3: "CELEBRATE." (Reveals -> Holds -> Fades/Slides Out)
      tl.fromTo(
        text3Ref.current,
        { opacity: 0, y: 80, filter: 'blur(10px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.1, ease: 'power2.out' },
        0.50
      ).to(
        text3Ref.current,
        { opacity: 0, y: -60, filter: 'blur(10px)', duration: 0.08, ease: 'power2.in' },
        0.70
      );

      // 4. Text 4: "SUBHADRA BAND & DJ" (Reveals -> Holds -> Fades/Slides Out)
      tl.fromTo(
        text4Ref.current,
        { opacity: 0, y: 80, scale: 0.9, filter: 'blur(10px)' },
        { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)', duration: 0.12, ease: 'power2.out' },
        0.75
      ).to(
        text4Ref.current,
        { opacity: 0, y: -40, filter: 'blur(8px)', duration: 0.08, ease: 'power2.in' },
        0.93
      );
    }, heroRef);

    // Refresh ScrollTrigger to recalculate dimensions
    ScrollTrigger.refresh();

    return () => ctx.revert();
  }, [images]);

  return (
    <section ref={heroRef} id="hero" aria-label="Hero">
      <ScrollSequence images={images}>
        {/* Semi-transparent dark overlay for high text contrast */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(circle at center, rgba(0, 0, 0, 0.55) 0%, rgba(0, 0, 0, 0.85) 100%)',
            pointerEvents: 'none',
            zIndex: 1,
          }}
        />

        {/* Overlay Text pinned directly on top of canvas */}
        <div className="hero-overlay-text" style={{ zIndex: 10 }}>
          {/* Stage 1: Landing Page Default (SUBHADRA BAND & DJ) */}
          <div
            ref={text1Ref}
            style={{
              opacity: 1,
              position: 'absolute',
              textAlign: 'center',
              lineHeight: 1.1,
            }}
          >
            <h1
              className="text-hero"
              style={{
                fontSize: 'clamp(2.5rem, 6.5vw, 6.5rem)',
                textShadow: '0 10px 40px rgba(0, 0, 0, 0.9), 0 0 80px rgba(59, 130, 246, 0.4)',
              }}
            >
              SUBHADRA BAND &amp; DJ
            </h1>
            <span
              className="text-label"
              style={{
                display: 'inline-block',
                marginTop: '0.8rem',
                background: 'rgba(0, 0, 0, 0.75)',
                backdropFilter: 'blur(12px)',
                padding: '0.5rem 1.4rem',
                borderRadius: '30px',
                border: '1px solid rgba(59, 130, 246, 0.3)',
                color: 'var(--color-electric)',
                fontSize: '0.78rem',
                letterSpacing: '0.2em',
                fontWeight: 600,
              }}
            >
              PREMIER EVENT &amp; BARAAT SUPPLIER
            </span>
          </div>

          {/* Stage 2: Professional Sound & Lights */}
          <div
            ref={text2Ref}
            style={{
              opacity: 0,
              position: 'absolute',
              textAlign: 'center',
              lineHeight: 1.1,
            }}
          >
            <h2
              className="text-hero"
              style={{
                fontSize: 'clamp(2.2rem, 5.5vw, 5.5rem)',
                textShadow: '0 10px 40px rgba(0, 0, 0, 0.9), 0 0 80px rgba(168, 85, 247, 0.4)',
              }}
            >
              PROFESSIONAL SOUND &amp; LIGHTS
            </h2>
            <span
              className="text-label"
              style={{
                display: 'inline-block',
                marginTop: '0.8rem',
                background: 'rgba(0, 0, 0, 0.75)',
                backdropFilter: 'blur(12px)',
                padding: '0.5rem 1.4rem',
                borderRadius: '30px',
                border: '1px solid rgba(168, 85, 247, 0.3)',
                color: 'var(--color-purple)',
                fontSize: '0.78rem',
                letterSpacing: '0.2em',
                fontWeight: 600,
              }}
            >
              PUNCTUAL &amp; AUTHENTIC SERVICE
            </span>
          </div>

          {/* Stage 3: Best Baraat & DJ Experience */}
          <div
            ref={text3Ref}
            style={{
              opacity: 0,
              position: 'absolute',
              textAlign: 'center',
              lineHeight: 1.1,
            }}
          >
            <h2
              className="text-hero"
              style={{
                fontSize: 'clamp(2.2rem, 5.5vw, 5.5rem)',
                textShadow: '0 10px 40px rgba(0, 0, 0, 0.9), 0 0 80px rgba(34, 197, 94, 0.4)',
              }}
            >
              BEST BARAAT &amp; DJ EXPERIENCE
            </h2>
            <span
              className="text-label"
              style={{
                display: 'inline-block',
                marginTop: '0.8rem',
                background: 'rgba(0, 0, 0, 0.75)',
                backdropFilter: 'blur(12px)',
                padding: '0.5rem 1.4rem',
                borderRadius: '30px',
                border: '1px solid rgba(34, 197, 94, 0.3)',
                color: '#22c55e',
                fontSize: '0.78rem',
                letterSpacing: '0.2em',
                fontWeight: 600,
              }}
            >
              ELECTRIFYING EVENT ATMOSPHERE
            </span>
          </div>

          {/* Stage 4: Grand Finale (The Best Experience Ever) */}
          <div
            ref={text4Ref}
            style={{
              opacity: 0,
              position: 'absolute',
              textAlign: 'center',
              lineHeight: 1.1,
            }}
          >
            <span
              className="text-hero"
              style={{
                fontSize: 'clamp(2.2rem, 6vw, 6.5rem)',
                background: 'linear-gradient(135deg, #ffffff 0%, #3b82f6 50%, #a855f7 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                display: 'block',
                filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.9))',
              }}
            >
              THE BEST EXPERIENCE EVER
            </span>
            <span
              className="text-label"
              style={{
                display: 'inline-block',
                marginTop: '1rem',
                background: 'rgba(0, 0, 0, 0.75)',
                backdropFilter: 'blur(12px)',
                padding: '0.6rem 1.5rem',
                borderRadius: '30px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: 'var(--color-cloud)',
                fontSize: '0.8rem',
                letterSpacing: '0.2em',
              }}
            >
              SUBHADRA BAND &amp; DJ • BHUBANESWAR
            </span>
          </div>
        </div>

        {/* Bottom darkening gradient */}
        <div className="hero-bottom-fade" />

        {/* Scroll Indicator */}
        <div ref={scrollIndicatorRef} className="scroll-indicator">
          <span className="scroll-indicator-text">Scroll to experience</span>
          <div className="scroll-indicator-arrow" />
        </div>
      </ScrollSequence>
    </section>
  );
}
