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
        <a href="#" className="navbar-logo" onClick={handleLogoClick}>
          SUBHADRA <span>BAND & DJ</span>
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
