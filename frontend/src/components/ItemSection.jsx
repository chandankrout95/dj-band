'use client';

import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Music, Disc, Volume2, Sparkles, Layers, Zap, ArrowRight } from 'lucide-react';
import { staggerReveal } from '../animations/gsapAnimations';

export const ITEMS = [
  {
    id: 'brass-band',
    Icon: Music,
    title: 'Brass Band & Traditional Dhol',
    tag: 'Baraat & Processions',
    desc: 'Grand royal brass band with trained musicians, ceremonial uniform, and energetic dhol drummers tailored for wedding baraats.',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=800&auto=format&fit=crop',
    fullDesc:
      'Our brass band ensemble features 12–20 trained musicians in full ceremonial uniforms, performing a curated mix of classic Bollywood wedding songs, traditional Odia melodies, and high-energy celebration tunes. Complemented by powerful dhol and nagada drummers, this is the quintessential baraat experience that fills every street with joy.',
    specs: [
      '12–20 trained uniformed musicians',
      'Traditional dhol & nagada ensemble',
      'Bollywood & Odia repertoire',
      'LED-lit evening processions',
      'Coordinated with horse/chariot',
      'Available across Odisha',
    ],
  },
  {
    id: 'dj-console',
    Icon: Disc,
    title: 'Professional DJ Consoles',
    tag: 'High-Energy DJ Nights',
    desc: 'State-of-the-art Pioneer controllers, digital mixers, cordless mics, and custom live mixing setups for non-stop dancing.',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=800&auto=format&fit=crop',
    fullDesc:
      'Our DJ setups feature industry-standard Pioneer CDJ-3000 controllers and DJM-900NXS2 mixers, delivering flawless sound quality and seamless transitions. Each console comes with cordless microphones for announcements, custom LED panels, and a massive library of tracks spanning Bollywood, EDM, hip-hop, regional hits, and classic party anthems.',
    specs: [
      'Pioneer CDJ-3000 & DJM-900NXS2',
      'Wireless microphone systems',
      'Custom LED display panels',
      '50,000+ track library',
      'Live mixing & beat matching',
      'Event MC / emcee services',
    ],
  },
  {
    id: 'sound-system',
    Icon: Volume2,
    title: 'High-Power Sound & Subwoofers',
    tag: 'Pro Audio Systems',
    desc: 'Crystal-clear line array speaker systems, heavy bass subwoofers, and acoustic audio distribution for venues of all sizes.',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=800&auto=format&fit=crop',
    fullDesc:
      'Our sound systems are engineered for pristine audio at any scale. From intimate indoor venues to massive outdoor arenas, we deploy line array speakers for uniform coverage, heavy 18" and 21" subwoofers for deep bass, and digital mixing consoles for multi-channel control. Every setup undergoes venue acoustic assessment for optimal placement.',
    specs: [
      'JBL/QSC line array systems',
      '18" & 21" bass subwoofers',
      'Digital mixing consoles',
      'Multi-zone audio distribution',
      'Feedback elimination systems',
      'Venue acoustic assessment',
    ],
  },
  {
    id: 'moving-lights',
    Icon: Sparkles,
    title: 'Moving Head & Laser FX',
    tag: 'Atmospheric Lighting',
    desc: 'DMX-programmed moving head beams, RGB laser scanners, ambient LED washes, and heavy fog machines for visual magic.',
    image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=800&auto=format&fit=crop',
    fullDesc:
      'Create an unforgettable visual spectacle with our premium lighting equipment. Our DMX-programmed moving heads deliver precise beam effects with rapid pan/tilt movement. Combined with RGB laser scanners, atmospheric fog machines, and LED wash lights, we transform any venue into an immersive visual experience that matches the energy of your event.',
    specs: [
      'DMX-512 moving head beams',
      'RGB laser scanner effects',
      'Heavy-duty fog & haze machines',
      'LED wash & uplighting',
      'Custom DMX programming',
      'Intelligent lighting design',
    ],
  },
  {
    id: 'stage-truss',
    Icon: Layers,
    title: 'Stage Truss & Ambient Rig',
    tag: 'Stage Setup',
    desc: 'Heavy-duty aluminium truss framing, custom stage backdrops, LED framing, and architectural venue lighting.',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=800&auto=format&fit=crop',
    fullDesc:
      'Our stage infrastructure includes heavy-duty aluminium truss systems capable of supporting extensive lighting rigs, LED panels, and custom backdrops. We design and build stage setups tailored to your venue dimensions and event theme, creating a professional performance environment that impresses every guest.',
    specs: [
      'Heavy-duty aluminium truss',
      'Custom stage backdrops',
      'LED panel framing',
      'Architectural venue lighting',
      'Modular stage platforms',
      'Professional rigging & safety',
    ],
  },
  {
    id: 'power-backup',
    Icon: Zap,
    title: 'Silent Power Generator',
    tag: 'Uninterrupted Power',
    desc: 'Mobile silent generator backup ensuring seamless continuous sound and lighting performance throughout your event.',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=800&auto=format&fit=crop',
    fullDesc:
      'Never worry about power interruptions during your event. Our mobile silent generators provide reliable backup power that kicks in seamlessly, ensuring your sound, lighting, and DJ equipment run without a single hiccup. Designed for noise-sensitive environments, our generators operate at whisper-quiet levels so the music is all your guests hear.',
    specs: [
      'Silent-operation generators',
      'Automatic transfer switching',
      '25–100 KVA capacity range',
      'Fuel-efficient diesel engines',
      'On-site operator included',
      '24/7 power monitoring',
    ],
  },
];

export default function ItemSection() {
  const gridRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const anim = staggerReveal(gridRef.current, '.item-card', {
      y: 40,
      stagger: 0.1,
      start: 'top 78%',
    });

    return () => anim?.scrollTrigger?.kill();
  }, []);

  const handleCardClick = (id) => {
    router.push(`/equipments/${id}`);
  };

  return (
    <section
      id="equipments"
      className="section"
      style={{ background: 'var(--color-abyss)', position: 'relative' }}
      aria-label="Our Items & Equipment"
    >
      <div
        className="section-glow"
        style={{
          top: '10%',
          left: '-150px',
          background: 'radial-gradient(circle, rgba(59,130,246,0.06), transparent 70%)',
        }}
      />

      <div className="section-inner" style={{ position: 'relative', zIndex: 1 }}>
        <span className="text-label" style={{ display: 'block', marginBottom: '1.5rem' }}>
          Equipment & Items
        </span>
        <h2 className="text-display" style={{ marginBottom: '4rem' }}>
          OUR <span style={{ color: 'var(--color-electric)' }}>EQUIPMENT.</span>
        </h2>

        <div
          ref={gridRef}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
          }}
        >
          {ITEMS.map((item) => {
            const ItemIcon = item.Icon;
            return (
              <div
                key={item.id}
                className="item-card"
                onClick={() => handleCardClick(item.id)}
                style={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                  display: 'flex',
                  flexDirection: 'column',
                  cursor: 'pointer',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.border = '1px solid rgba(59, 130, 246, 0.3)';
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.4)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.06)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div
                  style={{
                    position: 'relative',
                    height: '180px',
                    overflow: 'hidden',
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.08)')}
                    onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                  />
                  <span
                    style={{
                      position: 'absolute',
                      top: '12px',
                      right: '12px',
                      background: 'rgba(0, 0, 0, 0.75)',
                      backdropFilter: 'blur(8px)',
                      color: 'var(--color-electric)',
                      fontSize: '0.65rem',
                      fontWeight: 600,
                      letterSpacing: '0.15em',
                      padding: '4px 10px',
                      borderRadius: '20px',
                      border: '1px solid rgba(59, 130, 246, 0.3)',
                      textTransform: 'uppercase',
                    }}
                  >
                    {item.tag}
                  </span>
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '12px',
                      left: '12px',
                      background: 'rgba(0,0,0,0.75)',
                      width: '42px',
                      height: '42px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backdropFilter: 'blur(6px)',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                    }}
                  >
                    {ItemIcon && <ItemIcon size={20} style={{ color: 'var(--color-electric)' }} />}
                  </div>
                </div>

                <div style={{ padding: '1.5rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.25rem',
                      fontWeight: 700,
                      color: 'var(--color-white)',
                      marginBottom: '0.75rem',
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.88rem',
                      color: 'var(--color-silver)',
                      lineHeight: 1.6,
                      flexGrow: 1,
                    }}
                  >
                    {item.desc}
                  </p>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      marginTop: '1.25rem',
                      color: 'var(--color-electric)',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                    }}
                  >
                    <span>View Details</span>
                    <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
