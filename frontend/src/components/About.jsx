import { useEffect, useRef } from 'react';
import { fadeInUp } from '../animations/gsapAnimations';

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const els = sectionRef.current.querySelectorAll('.about-animate');
    const triggers = [];

    els.forEach((el, i) => {
      triggers.push(
        fadeInUp(el, {
          y: 50,
          duration: 1,
          delay: i * 0.1,
          trigger: sectionRef.current,
          start: 'top 70%',
        })
      );
    });

    return () => triggers.forEach((t) => t?.scrollTrigger?.kill());
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="section"
      style={{
        background: 'var(--color-abyss)',
        position: 'relative',
      }}
      aria-label="About"
    >
      <div
        className="section-glow"
        style={{
          top: '20%',
          right: '-200px',
          background: 'radial-gradient(circle, rgba(168,85,247,0.08), transparent 70%)',
        }}
      />

      <div className="section-inner" style={{ position: 'relative', zIndex: 1 }}>
        {/* Label */}
        <div className="about-animate" style={{ marginBottom: '1.5rem' }}>
          <span className="text-label">About Subhadra Band &amp; DJ</span>
        </div>

        {/* Heading */}
        <h2
          className="about-animate text-display"
          style={{ marginBottom: '3.5rem', maxWidth: '800px', lineHeight: 1.05 }}
        >
          PREMIER
          <br />
          CELEBRATION
          <br />
          <span style={{ color: 'var(--color-purple)' }}>SERVICES.</span>
        </h2>

        {/* Divider */}
        <div className="about-animate divider" style={{ marginBottom: '3.5rem' }} />

        {/* Content Grid */}
        <div
          className="about-animate"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '3.5rem',
            marginBottom: '4rem',
          }}
        >
          <div>
            <p
              className="text-heading"
              style={{ fontSize: 'clamp(1.3rem, 2.2vw, 1.8rem)', lineHeight: 1.4, fontWeight: 600, color: 'var(--color-white)' }}
            >
              Supplier of band &amp; DJ services for weddings &amp; other celebrations from formal, family &amp; corporate events to parties.
            </p>
          </div>
          <div>
            <p className="text-body-lg" style={{ lineHeight: 1.7 }}>
              Based at Rath Road, Bhubaneswar, Subhadra Band &amp; DJ provides grand musical processions, high-energy DJ setups, and modern visual lighting that turn every gathering into a spectacular milestone.
            </p>
            <p className="text-body-lg" style={{ marginTop: '1.5rem', lineHeight: 1.7 }}>
              From traditional wedding baraats to vibrant corporate galas, private parties, and cultural celebrations, we bring unmatched passion, crystal-clear sound, and captivating energy to every stage.
            </p>
          </div>
        </div>

        {/* Key Highlights / Stats Bar */}
        <div
          className="about-animate"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.5rem',
            padding: '2rem 2.5rem',
            background: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '16px',
            marginBottom: '4.5rem',
          }}
        >
          <div>
            <span style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--color-electric)', fontFamily: 'var(--font-display)' }}>
              15+
            </span>
            <p style={{ fontSize: '0.85rem', color: 'var(--color-mist)', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '0.2rem' }}>
              Years of Musical Excellence
            </p>
          </div>
          <div>
            <span style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--color-purple)', fontFamily: 'var(--font-display)' }}>
              500+
            </span>
            <p style={{ fontSize: '0.85rem', color: 'var(--color-mist)', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '0.2rem' }}>
              Successful Celebrations
            </p>
          </div>
          <div>
            <span style={{ fontSize: '2.2rem', fontWeight: 800, color: '#22c55e', fontFamily: 'var(--font-display)' }}>
              4.9 ★
            </span>
            <p style={{ fontSize: '0.85rem', color: 'var(--color-mist)', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '0.2rem' }}>
              Verified Google Rating
            </p>
          </div>
        </div>

        {/* Location Map Section */}
        <div
          className="about-animate"
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            paddingTop: '3.5rem',
          }}
        >
          <div style={{ marginBottom: '2.5rem' }}>
            <span className="text-label" style={{ display: 'block', marginBottom: '0.75rem' }}>
              Visit Our Office in Bhubaneswar
            </span>
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
                fontWeight: 700,
                color: 'var(--color-white)',
              }}
            >
              LOCATION &amp; MAP DIRECTIONS
            </h3>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2.5rem',
              alignItems: 'center',
            }}
          >
            {/* Embedded Google Map */}
            <div
              style={{
                position: 'relative',
                borderRadius: '16px',
                overflow: 'hidden',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.6)',
                height: '340px',
              }}
            >
              <iframe
                title="Subhadra Band & DJ Google Map Location"
                src="https://maps.google.com/maps?q=Rath%20Road,%20Rameswar%20Patna%20Rd,%20near%20Barik%20Sahi,%20chhack,%20Bhubaneswar,%20Odisha%20751002&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'contrast(1.05) hue-rotate(180deg) invert(0.9)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Map Details Card */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
              }}
            >
              <div>
                <span className="text-label" style={{ display: 'block', marginBottom: '0.4rem' }}>
                  Office Address
                </span>
                <p style={{ color: 'var(--color-cloud)', fontSize: '1.05rem', lineHeight: 1.6 }}>
                  📍 Rath Road, Rameswar Patna Rd, near Barik Sahi, chhack, Bhubaneswar, Odisha 751002
                </p>
              </div>

              <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
                <div>
                  <span className="text-label" style={{ display: 'block', marginBottom: '0.4rem' }}>
                    Drive / Travel Time
                  </span>
                  <p style={{ color: 'var(--color-electric)', fontWeight: 600, fontSize: '0.95rem' }}>
                    🚗 3 hrs 13 mins
                  </p>
                </div>

                <div>
                  <span className="text-label" style={{ display: 'block', marginBottom: '0.4rem' }}>
                    Operating Hours
                  </span>
                  <p style={{ color: 'var(--color-white)', fontWeight: 600, fontSize: '0.95rem' }}>
                    🟢 Open · Closes 11 pm
                  </p>
                </div>
              </div>

              <div style={{ marginTop: '0.5rem' }}>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Rath+Road,+Rameswar+Patna+Rd,+near+Barik+Sahi,+chhack,+Bhubaneswar,+Odisha+751002"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.85rem 1.8rem' }}
                >
                  <span>🗺️ Get Map Directions</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
