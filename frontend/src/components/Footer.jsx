'use client';

import { useCallback } from 'react';
import { MapPin, Clock, Phone, ArrowUp, Navigation2 } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Items', href: '#items' },
  { label: 'Old Events', href: '#gallery' },
  { label: 'About', href: '#about' },
  { label: 'Connect', href: '#contact' },
  { label: 'Google Reviews', href: '#reviews' },
];

const SERVICES_LIST = [
  'Wedding Baraat Brass Band',
  'High-Energy DJ Nights',
  'Pro Audio & Subwoofer Systems',
  'Moving Head & Laser Lighting',
  'Stage Trussing & Rigging',
  'Silent Generator Backup',
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
    <footer
      className="footer"
      style={{
        background: 'var(--color-void)',
        position: 'relative',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        paddingTop: '5rem',
        paddingBottom: '3rem',
      }}
    >
      <div
        className="section-inner"
        style={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: '3.5rem',
        }}
      >
        {/* Top Architectural Columns Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '3rem',
          }}
        >
          {/* Column 1: Brand Info */}
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
                letterSpacing: '0.08em',
                textDecoration: 'none',
                color: 'var(--color-white)',
                display: 'block',
                marginBottom: '1rem',
              }}
            >
              SUBHADRA <span style={{ color: 'var(--color-electric)' }}>BAND &amp; DJ</span>
            </a>
            <p style={{ color: 'var(--color-silver)', fontSize: '0.85rem', lineHeight: 1.7, marginBottom: '1rem' }}>
              Supplier of band &amp; DJ services for weddings &amp; other celebrations from formal, family &amp; corporate events to parties.
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <span className="text-label" style={{ display: 'block', marginBottom: '1rem' }}>
              Navigation
            </span>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="footer-link"
                    style={{ fontSize: '0.85rem', color: 'var(--color-silver)' }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services Provided */}
          <div>
            <span className="text-label" style={{ display: 'block', marginBottom: '1rem' }}>
              Services Provided
            </span>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {SERVICES_LIST.map((srv) => (
                <li key={srv} style={{ fontSize: '0.82rem', color: 'var(--color-mist)' }}>
                  {srv}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Address & Hours */}
          <div>
            <span className="text-label" style={{ display: 'block', marginBottom: '1rem' }}>
              Location &amp; Hours
            </span>
            <p style={{ color: 'var(--color-cloud)', fontSize: '0.85rem', lineHeight: 1.6, marginBottom: '0.75rem', display: 'flex', alignItems: 'flex-start', gap: '0.4rem' }}>
              <MapPin size={16} style={{ color: 'var(--color-electric)', flexShrink: 0, marginTop: '2px' }} />
              <span>Rath Road, Rameswar Patna Rd, near Barik Sahi, chhack, Bhubaneswar, Odisha 751002</span>
            </p>
            <p style={{ color: 'var(--color-white)', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.25rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Clock size={16} style={{ color: '#22c55e' }} />
              <span>Open · Closes 11 pm</span>
            </p>
            <p style={{ fontSize: '0.72rem', color: 'var(--color-mist)', fontStyle: 'italic', marginBottom: '0.75rem' }}>
              * Indian Independence Day might affect hours.
            </p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Rath+Road,+Rameswar+Patna+Rd,+near+Barik+Sahi,+chhack,+Bhubaneswar,+Odisha+751002"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
              style={{ fontSize: '0.82rem', color: 'var(--color-electric)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
            >
              <Navigation2 size={14} />
              <span>Get Directions (3h 13m) →</span>
            </a>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1.5rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.03)',
            paddingTop: '2rem',
            fontSize: '0.75rem',
            color: 'var(--color-mist)',
          }}
        >
          <p>© {new Date().getFullYear()} SUBHADRA BAND &amp; DJ. ALL RIGHTS RESERVED.</p>

          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            <a href="tel:09861060200" className="footer-link" style={{ fontSize: '0.8rem', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
              <Phone size={14} />
              <span>098610 60200</span>
            </a>
            <button
              onClick={scrollToTop}
              className="back-to-top"
              aria-label="Back to top"
              title="Back to top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
