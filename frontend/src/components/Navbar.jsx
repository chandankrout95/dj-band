import { useState, useEffect, useRef, useCallback } from 'react';

const NAV_LINKS = [
  { label: 'Items', href: '#items' },
  { label: 'Old Events', href: '#gallery' },
  { label: 'About', href: '#about' },
  { label: 'Connect', href: '#contact' },
];

export default function Navbar({ lenisRef }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = useCallback(
    (e, href) => {
      e.preventDefault();
      setMobileOpen(false);
      const target = document.querySelector(href);
      if (target && lenisRef?.current) {
        lenisRef.current.scrollTo(target, { offset: -80 });
      } else if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    },
    [lenisRef]
  );

  const handleLogoClick = useCallback(
    (e) => {
      e.preventDefault();
      setMobileOpen(false);
      if (lenisRef?.current) {
        lenisRef.current.scrollTo(0);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    },
    [lenisRef]
  );

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <>
      <nav
        ref={navRef}
        className={`navbar ${scrolled ? 'scrolled' : ''}`}
        role="navigation"
        aria-label="Main navigation"
      >
        <a
          href="#"
          className="navbar-logo"
          onClick={handleLogoClick}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2px',
            lineHeight: 1.1,
            textDecoration: 'none',
          }}
        >
          <span
            style={{
              fontSize: 'clamp(1.4rem, 2.5vw, 1.85rem)',
              fontWeight: 900,
              letterSpacing: '0.02em',
              background: 'linear-gradient(135deg, #ffffff 0%, #3b82f6 50%, #a855f7 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              display: 'block',
            }}
          >
            ସୁଭଦ୍ରା ବ୍ୟାଣ୍ଡ୍ &amp; ଡିଜେ
          </span>
          <span
            style={{
              fontSize: '0.72rem',
              color: 'var(--color-silver)',
              fontWeight: 600,
              letterSpacing: '0.18em',
              display: 'block',
            }}
          >
            SUBHADRA BAND &amp; DJ
          </span>
        </a>

        <ul className="navbar-links">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={(e) => handleNavClick(e, link.href)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className={`mobile-menu-btn ${mobileOpen ? 'active' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div
        className={`mobile-menu-overlay ${mobileOpen ? 'active' : ''}`}
        role="dialog"
        aria-label="Mobile navigation"
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => handleNavClick(e, link.href)}
          >
            {link.label}
          </a>
        ))}
      </div>
    </>
  );
}
