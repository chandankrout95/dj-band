import { useEffect, useRef } from 'react';
import { Music, Disc, Volume2, Sparkles, Layers, Zap } from 'lucide-react';
import { staggerReveal } from '../animations/gsapAnimations';

const ITEMS = [
  {
    id: 'brass-band',
    Icon: Music,
    title: 'Brass Band & Traditional Dhol',
    tag: 'Baraat & Processions',
    desc: 'Grand royal brass band with trained musicians, ceremonial uniform, and energetic dhol drummers tailored for wedding baraats.',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'dj-console',
    Icon: Disc,
    title: 'Professional DJ Consoles',
    tag: 'High-Energy DJ Nights',
    desc: 'State-of-the-art Pioneer controllers, digital mixers, cordless mics, and custom live mixing setups for non-stop dancing.',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'sound-system',
    Icon: Volume2,
    title: 'High-Power Sound & Subwoofers',
    tag: 'Pro Audio Systems',
    desc: 'Crystal-clear line array speaker systems, heavy bass subwoofers, and acoustic audio distribution for venues of all sizes.',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'moving-lights',
    Icon: Sparkles,
    title: 'Moving Head & Laser FX',
    tag: 'Atmospheric Lighting',
    desc: 'DMX-programmed moving head beams, RGB laser scanners, ambient LED washes, and heavy fog machines for visual magic.',
    image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'stage-truss',
    Icon: Layers,
    title: 'Stage Truss & Ambient Rig',
    tag: 'Stage Setup',
    desc: 'Heavy-duty aluminium truss framing, custom stage backdrops, LED framing, and architectural venue lighting.',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'power-backup',
    Icon: Zap,
    title: 'Silent Power Generator',
    tag: 'Uninterrupted Power',
    desc: 'Mobile silent generator backup ensuring seamless continuous sound and lighting performance throughout your event.',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=800&auto=format&fit=crop',
  },
];

export default function ItemSection() {
  const gridRef = useRef(null);

  useEffect(() => {
    const anim = staggerReveal(gridRef.current, '.item-card', {
      y: 40,
      stagger: 0.1,
      start: 'top 78%',
    });

    return () => anim?.scrollTrigger?.kill();
  }, []);

  return (
    <section
      id="items"
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
          Services &amp; Equipment Items
        </span>
        <h2 className="text-display" style={{ marginBottom: '4rem' }}>
          OUR <span style={{ color: 'var(--color-electric)' }}>ITEMS.</span>
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
                style={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  transition: 'all 0.4s ease',
                  display: 'flex',
                  flexDirection: 'column',
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
                      transition: 'transform 0.5s ease',
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
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
