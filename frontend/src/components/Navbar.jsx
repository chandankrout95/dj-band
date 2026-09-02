'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Equipments', href: '#equipments' },
  { label: 'Golden Memories', href: '#golden-memories' },
  { label: 'Contact Us', href: '#contact-us' },
  { label: 'About Us', href: '#about-us' },
  { label: 'Reviews', href: '#reviews' },
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

  // Phone back button closes menu: push a history entry when menu opens,
  // listen to popstate to close it
  useEffect(() => {
    if (mobileOpen) {
      window.history.pushState({ mobileMenu: true }, '');
    }

    const handlePopState = () => {
      if (mobileOpen) {
        setMobileOpen(false);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [mobileOpen]);

  // Close via X button — also pops the history entry we pushed
  const handleCloseMenu = useCallback(() => {
    setMobileOpen(false);
    if (window.history.state?.mobileMenu) {
      window.history.back();
    }
  }, []);

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
            alignItems: 'center',
            flexDirection: 'column',
            gap: '2px',
            lineHeight: 1.1,
            textDecoration: 'none',
          }}
        >
          <span
            style={{
              fontSize: 'clamp(1.2rem, 2.2vw, 1.55rem)',
              fontWeight: 900,
              letterSpacing: '0.02em',
              background: 'linear-gradient(135deg, #ffffff 0%, #3b82f6 50%, #a855f7 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              display: 'block',
            }}
          >
            ସୁଭଦ୍ରା
          </span>
          <span
            style={{
              fontSize: 'clamp(0.95rem, 1.8vw, 1.25rem)',
              fontWeight: 800,
              letterSpacing: '0.04em',
              color: 'var(--color-electric)',
              display: 'block',
            }}
          >
            ବ୍ୟାଣ୍ଡ୍ &amp; ଡିଜେ
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
        {/* X Close Button */}
        <button
          onClick={handleCloseMenu}
          aria-label="Close menu"
          style={{
            position: 'absolute',
            top: 'clamp(1.2rem, 3vw, 2rem)',
            right: 'clamp(1.2rem, 3vw, 2rem)',
            background: 'rgba(255, 255, 255, 0.08)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            borderRadius: '50%',
            width: '44px',
            height: '44px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: 'rgba(255, 255, 255, 0.85)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            transition: 'all 0.3s ease',
            zIndex: 10,
          }}
        >
          <X size={22} strokeWidth={2.5} />
        </button>

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
