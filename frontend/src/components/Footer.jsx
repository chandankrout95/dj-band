import { useCallback } from 'react';

const NAV_LINKS = [
  { label: 'Items', href: '#items' },
  { label: 'Old Events', href: '#gallery' },
  { label: 'About', href: '#about' },
  { label: 'Connect', href: '#contact' },
];

export default function Footer({ lenisRef }) {
  const scrollToTop = useCallback(() => {
    if (lenisRef?.current) {
      lenisRef.current.scrollTo(0);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [lenisRef]);

  const handleNavClick = useCallback(
    (e, href) => {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target && lenisRef?.current) {
        lenisRef.current.scrollTo(target, { offset: -80 });
      } else if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    },
    [lenisRef]
  );

  return (
    <footer className="footer" style={{ background: 'var(--color-void)' }}>
      <div
        className="section-inner"
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '3rem',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '2rem',
          }}
        >
          <div>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.5rem',
                fontWeight: 800,
                letterSpacing: '0.1em',
                textDecoration: 'none',
                color: 'var(--color-white)',
              }}
            >
              SUBHADRA <span style={{ color: 'var(--color-electric)' }}>BAND & DJ</span>
            </a>
            <p style={{ color: 'var(--color-mist)', fontSize: '0.75rem', marginTop: '0.5rem', letterSpacing: '0.1em' }}>
              SUPPLIER OF BAND & DJ SERVICES FOR WEDDINGS & CELEBRATIONS
            </p>
            <p style={{ color: 'var(--color-silver)', fontSize: '0.75rem', marginTop: '0.25rem' }}>
              Rath Road, near Barik Sahi, Bhubaneswar, Odisha 751002 | Phone: 098610 60200
            </p>
          </div>

          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="footer-link"
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            onClick={scrollToTop}
            className="back-to-top"
            aria-label="Back to top"
            title="Back to top"
          >
            ↑
          </button>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
            borderTop: '1px solid rgba(255,255,255,0.03)',
            paddingTop: '2rem',
            fontSize: '0.7rem',
            color: 'var(--color-mist)',
          }}
        >
          <p>© {new Date().getFullYear()} SUBHADRA BAND & DJ. ALL RIGHTS RESERVED.</p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="tel:09861060200" className="footer-link">
              Call: 098610 60200
            </a>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Rath+Road,+Rameswar+Patna+Rd,+near+Barik+Sahi,+chhack,+Bhubaneswar,+Odisha+751002"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              Location & Directions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
