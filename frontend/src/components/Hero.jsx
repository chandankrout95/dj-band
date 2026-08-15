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
    if (!images || images.length === 0) return;

    const ctx = gsap.context(() => {
      // Fade out scroll indicator on scroll
      gsap.to(scrollIndicatorRef.current, {
        opacity: 0,
        y: 20,
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: '+=200',
          scrub: true,
        },
      });

      const totalScrollDist = 151 * 35;

      // Text animations mapped to scroll progress
      // LIGHT. → 0-20%
      gsap.fromTo(
        text1Ref.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: heroRef.current,
            start: `top+=${totalScrollDist * 0.02} top`,
            end: `top+=${totalScrollDist * 0.1} top`,
            scrub: true,
          },
        }
      );
      gsap.to(text1Ref.current, {
        opacity: 0,
        y: -30,
        scrollTrigger: {
          trigger: heroRef.current,
          start: `top+=${totalScrollDist * 0.15} top`,
          end: `top+=${totalScrollDist * 0.22} top`,
          scrub: true,
        },
      });

      // SOUND. → 25-45%
      gsap.fromTo(
        text2Ref.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: heroRef.current,
            start: `top+=${totalScrollDist * 0.25} top`,
            end: `top+=${totalScrollDist * 0.33} top`,
            scrub: true,
          },
        }
      );
      gsap.to(text2Ref.current, {
        opacity: 0,
        y: -30,
        scrollTrigger: {
          trigger: heroRef.current,
          start: `top+=${totalScrollDist * 0.38} top`,
          end: `top+=${totalScrollDist * 0.45} top`,
          scrub: true,
        },
      });

      // ENERGY. → 48-68%
      gsap.fromTo(
        text3Ref.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: heroRef.current,
            start: `top+=${totalScrollDist * 0.48} top`,
            end: `top+=${totalScrollDist * 0.55} top`,
            scrub: true,
          },
        }
      );
      gsap.to(text3Ref.current, {
        opacity: 0,
        y: -30,
        scrollTrigger: {
          trigger: heroRef.current,
          start: `top+=${totalScrollDist * 0.6} top`,
          end: `top+=${totalScrollDist * 0.68} top`,
          scrub: true,
        },
      });

      // CREATE THE NIGHT. → 72-100%
      gsap.fromTo(
        text4Ref.current,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          scrollTrigger: {
            trigger: heroRef.current,
            start: `top+=${totalScrollDist * 0.72} top`,
            end: `top+=${totalScrollDist * 0.82} top`,
            scrub: true,
          },
        }
      );
      gsap.to(text4Ref.current, {
        opacity: 0,
        scrollTrigger: {
          trigger: heroRef.current,
          start: `top+=${totalScrollDist * 0.9} top`,
          end: `top+=${totalScrollDist * 0.98} top`,
          scrub: true,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, [images]);

  return (
    <section ref={heroRef} id="hero" aria-label="Hero">
      <ScrollSequence images={images} />

      {/* Overlay Text */}
      <div className="hero-overlay-text">
        <h1
          ref={text1Ref}
          className="text-hero"
          style={{ opacity: 0, position: 'absolute', textAlign: 'center' }}
        >
          SUBHADRA.
        </h1>
        <p
          ref={text2Ref}
          className="text-hero"
          style={{ opacity: 0, position: 'absolute', textAlign: 'center' }}
        >
          BAND & DJ.
        </p>
        <p
          ref={text3Ref}
          className="text-hero"
          style={{ opacity: 0, position: 'absolute', textAlign: 'center' }}
        >
          CELEBRATE.
        </p>
        <p
          ref={text4Ref}
          className="text-hero"
          style={{
            opacity: 0,
            position: 'absolute',
            fontSize: 'clamp(2rem, 5vw, 5.5rem)',
            textAlign: 'center',
            lineHeight: 1.1,
          }}
        >
          SUBHADRA
          <br />
          <span style={{ color: 'var(--color-electric)' }}>BAND & DJ</span>
        </p>
      </div>

      {/* Bottom darkening gradient */}
      <div className="hero-bottom-fade" />

      {/* Scroll Indicator */}
      <div ref={scrollIndicatorRef} className="scroll-indicator">
        <span className="scroll-indicator-text">Scroll to experience</span>
        <div className="scroll-indicator-arrow" />
      </div>
    </section>
  );
}
