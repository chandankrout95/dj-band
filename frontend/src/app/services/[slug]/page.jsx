'use client';

import { useParams, useRouter } from 'next/navigation';
import {
  CheckCircle2,
  Sparkles,
  Phone,
  MessageCircle,
  ArrowRight,
  ShieldCheck,
  Zap,
  Music2,
  Calendar,
  Layers,
} from 'lucide-react';
import DetailPageLayout from '@/components/DetailPageLayout';
import { SERVICES } from '@/components/Services';

export default function ServiceDetailPage() {
  const params = useParams();
  const router = useRouter();
  const service = SERVICES.find((s) => s.slug === params.slug);

  if (!service) {
    return (
      <DetailPageLayout
        backHref="/#services"
        backLabel="Back to Services"
        heroImage="/frames/ezgif-frame-015.jpg"
        title="Service Not Found"
      >
        <div style={{ textAlign: 'center', padding: '4rem 0' }}>
          <p style={{ color: 'var(--color-silver)', fontSize: '1.2rem', marginBottom: '2rem' }}>
            The requested service could not be found.
          </p>
          <a href="/#services" className="btn-primary" style={{ padding: '0.8rem 2rem' }}>
            Browse All Services
          </a>
        </div>
      </DetailPageLayout>
    );
  }

  // Other services for quick navigation
  const otherServices = SERVICES.filter((s) => s.slug !== service.slug);

  const whatsappMessage = encodeURIComponent(
    `Hello Subhadra Band & DJ, I would like to inquire about booking the "${service.title}" service for my event.`
  );

  return (
    <DetailPageLayout
      backHref="/#services"
      backLabel="Back to All Services"
      heroImage={service.image}
      heroAlt={service.title}
      tag={`Service ${service.num} • ${service.badge || 'Signature Event'}`}
      title={service.title}
      subtitle={service.desc}
    >
      {/* Overview & Quick Highlights Strip */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '1.5rem',
          padding: '2rem',
          background: 'rgba(255, 255, 255, 0.02)',
          border: '1px solid rgba(255, 255, 255, 0.07)',
          borderRadius: '18px',
          marginBottom: '4.5rem',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
          <div
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '50%',
              background: 'rgba(59, 130, 246, 0.12)',
              border: '1px solid rgba(59, 130, 246, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--color-electric)',
            }}
          >
            <Music2 size={20} />
          </div>
          <div>
            <span style={{ fontSize: '0.7rem', color: 'var(--color-mist)', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block' }}>
              Sound &amp; DJ
            </span>
            <span style={{ color: '#fff', fontSize: '0.95rem', fontWeight: 700 }}>
              Customized Setlists
            </span>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
          <div
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '50%',
              background: 'rgba(168, 85, 247, 0.12)',
              border: '1px solid rgba(168, 85, 247, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--color-purple)',
            }}
          >
            <Zap size={20} />
          </div>
          <div>
            <span style={{ fontSize: '0.7rem', color: 'var(--color-mist)', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block' }}>
              Special FX
            </span>
            <span style={{ color: '#fff', fontSize: '0.95rem', fontWeight: 700 }}>
              Cold Pyros &amp; Fog
            </span>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
          <div
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '50%',
              background: 'rgba(34, 197, 94, 0.12)',
              border: '1px solid rgba(34, 197, 94, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#22c55e',
            }}
          >
            <ShieldCheck size={20} />
          </div>
          <div>
            <span style={{ fontSize: '0.7rem', color: 'var(--color-mist)', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block' }}>
              Execution
            </span>
            <span style={{ color: '#fff', fontSize: '0.95rem', fontWeight: 700 }}>
              100% On-Time &amp; Verified
            </span>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
          <div
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '50%',
              background: 'rgba(245, 158, 11, 0.12)',
              border: '1px solid rgba(245, 158, 11, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#f59e0b',
            }}
          >
            <Calendar size={20} />
          </div>
          <div>
            <span style={{ fontSize: '0.7rem', color: 'var(--color-mist)', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block' }}>
              Availability
            </span>
            <span style={{ color: '#fff', fontSize: '0.95rem', fontWeight: 700 }}>
              All Odisha &amp; Bhubaneswar
            </span>
          </div>
        </div>
      </div>

      {/* About This Service Narrative */}
      <div style={{ marginBottom: '5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.8rem' }}>
          <Sparkles size={16} style={{ color: 'var(--color-electric)' }} />
          <span className="text-label" style={{ fontSize: '0.75rem' }}>
            Service Overview
          </span>
        </div>
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.6rem, 3.2vw, 2.4rem)',
            fontWeight: 800,
            color: '#fff',
            marginBottom: '1.25rem',
          }}
        >
          COMPREHENSIVE{' '}
          <span style={{ color: 'var(--color-electric)' }}>{service.title.toUpperCase()}</span>
        </h2>
        <div
          style={{
            width: '80px',
            height: '3px',
            background: 'linear-gradient(90deg, var(--color-electric), var(--color-purple))',
            borderRadius: '2px',
            marginBottom: '2rem',
          }}
        />
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(1.05rem, 1.8vw, 1.25rem)',
            color: 'var(--color-cloud)',
            lineHeight: 1.8,
            maxWidth: '900px',
          }}
        >
          {service.fullDesc}
        </p>
      </div>

      {/* SUB-ACTIVITIES & WHAT WE DO IN THIS SERVICE */}
      {service.activities && service.activities.length > 0 && (
        <div style={{ marginBottom: '6rem' }}>
          <div style={{ textAlign: 'left', marginBottom: '3.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.8rem' }}>
              <Layers size={18} style={{ color: 'var(--color-purple)' }} />
              <span className="text-label" style={{ fontSize: '0.75rem' }}>
                Key Sub-Events &amp; Offerings
              </span>
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
                fontWeight: 800,
                color: '#fff',
                marginBottom: '0.8rem',
              }}
            >
              WHAT WE DO IN <span style={{ color: 'var(--color-purple)' }}>THIS SERVICE</span>
            </h2>
            <p style={{ color: 'var(--color-silver)', fontSize: '1rem', maxWidth: '700px', lineHeight: 1.6 }}>
              A detailed breakdown of the specialized activities, arrangements, and technical setups included in this service.
            </p>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '2.5rem',
            }}
          >
            {service.activities.map((act, index) => (
              <div
                key={index}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                  gap: '2rem',
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  padding: '1.5rem',
                  alignItems: 'center',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(168, 85, 247, 0.35)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.5)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
                }}
              >
                {/* Visual Image */}
                <div
                  style={{
                    position: 'relative',
                    height: '260px',
                    borderRadius: '14px',
                    overflow: 'hidden',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                  }}
                >
                  <img
                    src={act.image}
                    alt={act.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease',
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.06)')}
                    onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                  />
                  {act.tag && (
                    <span
                      style={{
                        position: 'absolute',
                        top: '12px',
                        left: '12px',
                        background: 'rgba(0, 0, 0, 0.8)',
                        backdropFilter: 'blur(8px)',
                        color: 'var(--color-electric)',
                        fontSize: '0.65rem',
                        fontWeight: 700,
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        padding: '5px 12px',
                        borderRadius: '20px',
                        border: '1px solid rgba(59, 130, 246, 0.3)',
                      }}
                    >
                      {act.tag}
                    </span>
                  )}
                  <span
                    style={{
                      position: 'absolute',
                      bottom: '12px',
                      right: '12px',
                      background: 'rgba(0, 0, 0, 0.75)',
                      color: 'var(--color-cloud)',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      padding: '4px 10px',
                      borderRadius: '12px',
                    }}
                  >
                    0{index + 1}
                  </span>
                </div>

                {/* Content & Highlights */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(1.25rem, 2.4vw, 1.6rem)',
                      fontWeight: 700,
                      color: '#ffffff',
                      lineHeight: 1.3,
                    }}
                  >
                    {act.title}
                  </h3>

                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.92rem',
                      color: 'var(--color-cloud)',
                      lineHeight: 1.7,
                    }}
                  >
                    {act.desc}
                  </p>

                  {act.highlights && (
                    <div style={{ marginTop: '0.5rem' }}>
                      <span
                        style={{
                          fontSize: '0.7rem',
                          fontWeight: 700,
                          letterSpacing: '0.15em',
                          textTransform: 'uppercase',
                          color: 'var(--color-mist)',
                          display: 'block',
                          marginBottom: '0.6rem',
                        }}
                      >
                        Highlights &amp; Equipment:
                      </span>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                        {act.highlights.map((h, hIdx) => (
                          <span
                            key={hIdx}
                            style={{
                              fontSize: '0.75rem',
                              color: 'var(--color-cloud)',
                              background: 'rgba(255, 255, 255, 0.04)',
                              border: '1px solid rgba(255, 255, 255, 0.1)',
                              padding: '4px 10px',
                              borderRadius: '8px',
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '0.4rem',
                            }}
                          >
                            <span style={{ color: 'var(--color-electric)' }}>✓</span> {h}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* WHAT'S INCLUDED / SERVICE FEATURES */}
      <div style={{ marginBottom: '6rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.8rem' }}>
          <CheckCircle2 size={18} style={{ color: '#22c55e' }} />
          <span className="text-label" style={{ fontSize: '0.75rem' }}>
            Package Checklist
          </span>
        </div>
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
            fontWeight: 800,
            color: '#fff',
            marginBottom: '1.25rem',
          }}
        >
          WHAT&apos;S <span style={{ color: '#22c55e' }}>INCLUDED</span> IN THE PACKAGE
        </h2>
        <div
          style={{
            width: '80px',
            height: '3px',
            background: 'linear-gradient(90deg, #22c55e, var(--color-electric))',
            borderRadius: '2px',
            marginBottom: '2.5rem',
          }}
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.25rem',
          }}
        >
          {service.features.map((feature, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '1rem',
                padding: '1.4rem 1.6rem',
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.07)',
                borderRadius: '14px',
                transition: 'all 0.3s ease',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = 'rgba(34, 197, 94, 0.35)';
                e.currentTarget.style.background = 'rgba(34, 197, 94, 0.03)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.07)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.02)';
              }}
            >
              <CheckCircle2
                size={22}
                style={{
                  color: '#22c55e',
                  flexShrink: 0,
                  marginTop: '2px',
                }}
              />
              <span
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.95rem',
                  color: 'var(--color-white)',
                  lineHeight: 1.5,
                  fontWeight: 500,
                }}
              >
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* DIRECT INQUIRY CARD */}
      <div
        style={{
          background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.12), rgba(168, 85, 247, 0.12))',
          border: '1px solid rgba(59, 130, 246, 0.3)',
          borderRadius: '20px',
          padding: '3rem 2.5rem',
          textAlign: 'center',
          marginBottom: '6rem',
          boxShadow: '0 20px 50px rgba(59, 130, 246, 0.1)',
        }}
      >
        <span
          style={{
            fontSize: '0.75rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--color-electric)',
            fontWeight: 700,
            display: 'block',
            marginBottom: '0.8rem',
          }}
        >
          Book Your Event Dates
        </span>
        <h3
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.6rem, 3.2vw, 2.4rem)',
            fontWeight: 800,
            color: '#fff',
            marginBottom: '1rem',
          }}
        >
          Ready to Book {service.title}?
        </h3>
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1rem',
            color: 'var(--color-cloud)',
            maxWidth: '650px',
            margin: '0 auto 2.5rem',
            lineHeight: 1.7,
          }}
        >
          Dates fill fast during peak wedding and festival seasons across Bhubaneswar. Connect with us directly to lock in your date, discuss custom setlists, and get a customized quote.
        </p>

        <div
          style={{
            display: 'flex',
            gap: '1.25rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          <a
            href="tel:+919861060200"
            className="btn-primary"
            style={{
              padding: '1rem 2.4rem',
              fontSize: '0.9rem',
              fontWeight: 700,
              borderRadius: '50px',
              background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
              color: '#ffffff',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              textDecoration: 'none',
              boxShadow: '0 10px 30px rgba(59, 130, 246, 0.4)',
            }}
          >
            <Phone size={18} />
            <span>Call 098610 60200</span>
          </a>

          <a
            href={`https://wa.me/919861060200?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: '1rem 2.4rem',
              fontSize: '0.9rem',
              fontWeight: 700,
              borderRadius: '50px',
              background: 'linear-gradient(135deg, #22c55e 0%, #15803d 100%)',
              color: '#ffffff',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              textDecoration: 'none',
              boxShadow: '0 10px 30px rgba(34, 197, 94, 0.35)',
            }}
          >
            <MessageCircle size={18} />
            <span>Inquire on WhatsApp</span>
          </a>
        </div>
      </div>

      {/* EXPLORE OTHER SERVICES */}
      <div>
        <div style={{ marginBottom: '2.5rem' }}>
          <span className="text-label" style={{ fontSize: '0.75rem', display: 'block', marginBottom: '0.5rem' }}>
            Explore More
          </span>
          <h3
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.4rem, 2.6vw, 2rem)',
              fontWeight: 700,
              color: '#fff',
            }}
          >
            OTHER SERVICES YOU MAY LIKE
          </h3>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {otherServices.map((other) => (
            <div
              key={other.slug}
              onClick={() => router.push(`/services/${other.slug}`)}
              style={{
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                borderRadius: '14px',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                display: 'flex',
                flexDirection: 'column',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.3)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.06)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div style={{ height: '140px', overflow: 'hidden', position: 'relative' }}>
                <img
                  src={other.image}
                  alt={other.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <span
                  style={{
                    position: 'absolute',
                    top: '10px',
                    left: '10px',
                    background: 'rgba(0,0,0,0.75)',
                    color: 'var(--color-electric)',
                    fontSize: '0.65rem',
                    fontWeight: 700,
                    padding: '3px 8px',
                    borderRadius: '10px',
                  }}
                >
                  {other.num}
                </span>
              </div>
              <div style={{ padding: '1.25rem', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h4 style={{ color: '#fff', fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.4rem', fontFamily: 'var(--font-display)' }}>
                    {other.title}
                  </h4>
                  <p style={{ color: 'var(--color-silver)', fontSize: '0.8rem', lineHeight: 1.5, marginBottom: '1rem' }}>
                    {other.desc}
                  </p>
                </div>
                <div style={{ color: 'var(--color-electric)', fontSize: '0.75rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.3rem', textTransform: 'uppercase' }}>
                  <span>Explore Service</span>
                  <ArrowRight size={13} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DetailPageLayout>
  );
}
