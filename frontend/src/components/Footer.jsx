import { useCallback } from 'react';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
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
              LUM<span style={{ color: 'var(--color-electric)' }}>I</span>X
            </a>
            <p style={{ color: 'var(--color-mist)', fontSize: '0.75rem', marginTop: '0.5rem', letterSpacing: '0.1em' }}>
              PREMIUM DJ & LIGHTING PRODUCTION
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
          <p>© {new Date().getFullYear()} LUMIX ENTERTAINMENT. ALL RIGHTS RESERVED.</p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-link">
              Instagram
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer-link">
              Facebook
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="footer-link">
              YouTube
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
