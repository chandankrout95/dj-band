'use client';

import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowRight, Sparkles } from 'lucide-react';
import { staggerReveal } from '../animations/gsapAnimations';

export const SERVICES = [
  {
    num: '01',
    slug: 'barat',
    title: 'Barat & Wedding Procession',
    badge: 'Royal Celebration',
    desc: 'Grand uniformed brass band, mobile street DJ sound trucks, high-energy dhol-tasha, and spectacular cold pyro shows for an unforgettable baraat.',
    image: '/frames/ezgif-frame-015.jpg',
    fullDesc:
      'Make your wedding procession the most magnificent event of a lifetime with Subhadra Band & DJ. Our grand royal brass band, high-bass mobile DJ sound systems, energetic dhol-tasha ensembles, and dazzling safe cold pyro fireworks turn every street into an electrifying royal festival across Bhubaneswar and Odisha.',
    activities: [
      {
        title: 'Groom Royal Function & Ghodi Procession',
        tag: 'Royal Entry',
        image: '/frames/ezgif-frame-001.jpg',
        desc: 'Majestic groom entrance accompanied by decorated royal buggies/vintage chariots, royal umbrella (chhatri) attendants, and triumphant ceremonial fanfare.',
        highlights: [
          'Decorated Royal Buggy & Chariot Support',
          'Uniformed Royal Chhatri Attendants',
          'Authentic Wedding Melodies & Fanfare',
          'Coordinated Procession Timing',
        ],
      },
      {
        title: 'High-Energy Mobile Street Dance Floor',
        tag: 'Street DJ Party',
        image: '/frames/ezgif-frame-035.jpg',
        desc: 'Transform the procession route into an open-air dance club with mobile high-wattage bass sound trucks, DMX moving lights, and crowd-engaging live DJ mixing.',
        highlights: [
          'High-Wattage Bass Subwoofer Stack',
          'Wireless Live DJ Mixing Console',
          'Overhead DMX Moving Lighting Rig',
          'Crowd-Engaging Emcee & DJ Performance',
        ],
      },
      {
        title: 'Traditional Dhol Tasha & Nagada Beats',
        tag: 'Folk & Rhythm',
        image: '/frames/ezgif-frame-025.jpg',
        desc: 'Thunderous beats delivered by skilled dhol-tasha and nagada players that get every family member, friend, and guest dancing with unbounded joy.',
        highlights: [
          'Live Dhol Tasha Ensemble',
          'Acrobatic Drumming Sequences',
          'Synchronized Rhythmic Beats',
          'Traditional Festive Costumes',
        ],
      },
      {
        title: 'Pyro Sparklers & Cold Fire Fountain Show',
        tag: 'Special Effects',
        image: '/frames/ezgif-frame-090.jpg',
        desc: 'Safe, smokeless indoor/outdoor cold pyro sparkler fountains, handheld pyro guns, CO2 smoke jets, and celebratory confetti cannons for cinematic wedding memories.',
        highlights: [
          '100% Safe Indoor/Outdoor Cold Pyros',
          'High-Reach Pyro Fountain Jets',
          'CO2 Smoke Jet Blasters',
          'Gold & Silver Confetti Cannons',
        ],
      },
      {
        title: 'Barmala & Welcome Gateway Transition',
        tag: 'Gateway Welcome',
        image: '/frames/ezgif-frame-115.jpg',
        desc: 'Seamless transition as the baraat reaches the venue with milni ceremony brass tunes, traditional shehnai, and energetic entrance cues leading to the stage.',
        highlights: [
          'Milni Ceremony Brass Tunes',
          'Traditional Shehnai Welcome',
          'Toran Gateway Fanfare',
          'Stage Hand-off Coordination',
        ],
      },
    ],
    features: [
      'Full uniformed brass band ensemble (12–20 master musicians)',
      'High-power mobile DJ sound truck with line array audio',
      'Live traditional dhol-tasha & Punjabi dhol drummers',
      'Automated cold pyro sparklers & handheld pyro cannons',
      'Decorated royal chariot & umbrella arrangements',
      'Complete end-to-end procession route coordination',
    ],
  },
  {
    num: '02',
    slug: 'corporate-events',
    title: 'Corporate Events & Galas',
    badge: 'Executive & Pro',
    desc: 'High-fidelity audio reinforcement, intelligent DMX stage lighting, award night DJ setups, and conference acoustics tailored for premier venues.',
    image: '/frames/ezgif-frame-065.jpg',
    fullDesc:
      'From annual galas and dealer meets to product launches and award ceremonies, Subhadra Band & DJ provides world-class audio-visual production, crisp speech acoustics, intelligent stage lighting, and sophisticated afterparty entertainment for corporate organizations across Odisha.',
    activities: [
      {
        title: 'Keynote & Conference Sound Engineering',
        tag: 'Acoustic Clarity',
        image: '/frames/ezgif-frame-045.jpg',
        desc: 'Crystal-clear speech reproduction with feedback-free wireless collar, lapel, and podium microphones, distributed line-array speakers, and digital mixers.',
        highlights: [
          'Zero-Feedback Acoustic Tuning',
          'Wireless Collar, Podium & Handheld Mics',
          'Digital Multi-Channel Mixers',
          'On-Site Dedicated Sound Engineers',
        ],
      },
      {
        title: 'Annual Gala & Award Night DJ Performance',
        tag: 'Award Stings & DJ',
        image: '/frames/ezgif-frame-070.jpg',
        desc: 'Curated walk-up stings and celebratory fanfare during award distributions followed by an electrifying corporate party DJ set that keeps employees celebrating.',
        highlights: [
          'Custom Award Walk-Up Stings & Intros',
          'Curated Corporate & Party Setlists',
          'Pioneer Flagship DJ Systems',
          'Seamless Event Flow Synchronization',
        ],
      },
      {
        title: 'Architectural Stage Trussing & Intelligent Lighting',
        tag: 'Brand Ambiance',
        image: '/frames/ezgif-frame-125.jpg',
        desc: 'Aluminium truss structures, custom brand logo gobo projections, motorized moving head beams, and color-coded LED stage washes matching corporate branding.',
        highlights: [
          'Custom Gobo Brand Logo Projections',
          'DMX Automated Moving Heads',
          'Corporate Brand-Matched LED Washes',
          'Sleek Aluminium Stage Truss Setup',
        ],
      },
      {
        title: 'Product Launch & Brand Reveal Special FX',
        tag: 'Impactful Reveals',
        image: '/frames/ezgif-frame-090.jpg',
        desc: 'Make milestone announcements unforgettable with synchronized laser reveal sequences, dense low-lying fog, CO2 cryo jets, and metallic streamer drops.',
        highlights: [
          'Laser Grid Brand Reveal Sequences',
          'Low-Lying Fog & Smoke Jets',
          'Metallic Confetti & Streamer Cannons',
          'Dramatic Countdown Lighting Cues',
        ],
      },
    ],
    features: [
      'Line array audio distribution designed for zero acoustic echo',
      'Interference-free wireless lapel, headset & handheld microphones',
      'Corporate award night stings & custom entrance fanfares',
      'High-impact DMX moving head & brand gobo lighting',
      'Laser show & CO2 jet production for product unveilings',
      'Full technical crew and stage production management',
    ],
  },
  {
    num: '03',
    slug: 'dj-setup-in-college',
    title: 'DJ Setup in College & Fests',
    badge: 'Fest & EDM Vibes',
    desc: 'Massive concert sound walls, heavy bass subwoofer stacks, laser shows, CO2 cryo jets, and live dhol-DJ fusion built for mega campus crowds.',
    image: '/frames/ezgif-frame-035.jpg',
    fullDesc:
      'Turn your college annual fest, fresher party, farewell night, or technical symposium into an explosive festival-grade EDM arena. Subhadra Band & DJ brings concert-grade sound stacks, dazzling 360-degree laser grids, blinding strobes, and blast-worthy CO2 cannons designed for 2,000+ energized students.',
    activities: [
      {
        title: 'College Fest EDM & Bollywood Mega Console',
        tag: 'Mainstage DJ',
        image: '/frames/ezgif-frame-140.jpg',
        desc: 'Pioneer CDJ & DJM setups delivering non-stop electronic drops, commercial Bollywood, Punjabi bangers, hip-hop, and trending student anthems.',
        highlights: [
          'Pioneer Flagship DJ Consoles',
          'Live Remixing & Beat-Drop Synchronization',
          'Genre-Spanning Curated Setlists',
          'High-Energy Stage Interaction',
        ],
      },
      {
        title: 'High-Power Line Array & Bass Subwoofer Stack',
        tag: 'Concert Sound',
        image: '/frames/ezgif-frame-045.jpg',
        desc: 'Concert-grade line array towers and dual 18" & 21" subwoofers tuned to deliver deep, chest-thumping bass across vast campus grounds and auditoriums.',
        highlights: [
          'Multi-Tower Line Array Speakers',
          'Dual 18" & 21" Bass Subwoofers',
          'Uniform Coverage for 2,000+ Crowds',
          'Distortion-Free High-Volume Clarity',
        ],
      },
      {
        title: 'Laser Grid & 360-Degree Moving Head Light Show',
        tag: 'Visual Energy',
        image: '/frames/ezgif-frame-125.jpg',
        desc: 'Multi-colored aerial laser beams, high-speed moving head beam fixtures, stage blinders, and strobes synchronized to peak musical drops.',
        highlights: [
          'RGB Aerial Laser Beam Grids',
          'Synchronized DMX Moving Lights',
          'High-Intensity Crowd Blinders & Strobes',
          'Stage Atmosphere Design',
        ],
      },
      {
        title: 'CO2 Cryo Fog Cannons & Smoke Blast',
        tag: 'Festival Drops',
        image: '/frames/ezgif-frame-070.jpg',
        desc: 'Blast ice-cold clouds of CO2 fog directly over the dancing crowd during peak drops, creating authentic international festival vibes.',
        highlights: [
          'High-Pressure CO2 Cryo Jets',
          'Dense Atmospheric Stage Fog',
          'Instant Beat-Drop Enhancement',
          'Safe Operator-Controlled Systems',
        ],
      },
      {
        title: 'DJ + Live Dhol Jugalbandi Fusion',
        tag: 'Live Fusion',
        image: '/frames/ezgif-frame-025.jpg',
        desc: 'The ultimate crowd favorite where live acoustic dhol drummers step onto the stage to jam along with electronic club beats, electrifying the student audience.',
        highlights: [
          'Live Dhol Players on Stage',
          'Electronic & Folk Fusion Beats',
          'Interactive Campus Dance Battles',
          'Unmatched Adrenaline Spikes',
        ],
      },
    ],
    features: [
      'Pioneer CDJ-3000 & DJM-A9 concert audio rigs',
      'Dual 18"/21" heavy subwoofer ground stacks for massive bass',
      'Synchronized multi-color aerial laser projection grids',
      'High-pressure CO2 cryo cannons for dramatic drop moments',
      'Live stage dhol-DJ fusion jugalbandi performance',
      'Silent generator power backup ensuring zero fest downtime',
    ],
  },
  {
    num: '04',
    slug: 'ring-ceremony',
    title: 'Ring Ceremony & Engagement',
    badge: 'Romantic & Elegant',
    desc: 'Fairytale couple entries on clouds, warm pastel ambient lighting, soulful romantic melodies, and stage spotlights for your engagement milestone.',
    image: '/frames/ezgif-frame-080.jpg',
    fullDesc:
      'Celebrate your engagement and ring exchange with magical romance and refined elegance. Subhadra Band & DJ crafts intimate, picture-perfect settings with ethereal dry-ice cloud entries, warm golden lighting washes, heartfelt romantic soundtracks, and precision stage spotlights for the ring exchange.',
    activities: [
      {
        title: 'Romantic Couple Entry on Clouds',
        tag: 'Magical Entry',
        image: '/frames/ezgif-frame-100.jpg',
        desc: 'Walk into your engagement venue surrounded by a dense blanket of dry-ice white low fog with gentle cold pyro sparkler fountains framing the pathway.',
        highlights: [
          'Dry Ice Low-Lying Cloud Fog',
          'Indoor-Safe Cold Pyro Fountains',
          'Romantic Background Entry Score',
          'Spotlight Couple Tracking',
        ],
      },
      {
        title: 'Ring Exchange Spotlight & Fanfare',
        tag: 'The Big Moment',
        image: '/frames/ezgif-frame-035.jpg',
        desc: 'Precision pin-spot stage lighting and celebratory musical crescendo timed to perfection at the exact second the rings are exchanged, accompanied by rose petal showers.',
        highlights: [
          'Synchronized Ring Exchange Music',
          'Stage Focus Pin-Spot Lighting',
          'Rose Petal & Confetti Blast',
          'Audio Recording Support',
        ],
      },
      {
        title: 'Soulful Acoustic & Romantic DJ Set',
        tag: 'Intimate Music',
        image: '/frames/ezgif-frame-045.jpg',
        desc: 'A curated blend of soulful Bollywood acoustic covers, romantic ballads, and soft lounge melodies creating an intimate, heartfelt environment for family and friends.',
        highlights: [
          'Curated Romantic Love Melodies',
          'Acoustic Sound Clarity & Warmth',
          'Balanced Volume for Conversation',
          'Custom Couple Playlist Support',
        ],
      },
      {
        title: 'Ambient Pastel & Warm Wash Stage Lighting',
        tag: 'Warm Aesthetics',
        image: '/frames/ezgif-frame-090.jpg',
        desc: 'Soft pastel washes, fairy-light backdrops, and warm golden uplighting designed to make engagement photography and cinematography look stunning.',
        highlights: [
          'Warm Golden & Pastel Color Palette',
          'Flicker-Free Camera Lighting',
          'Stage Backdrop Accents',
          'Dimmable Ambient Control',
        ],
      },
      {
        title: 'Family Performances & Dance Celebration',
        tag: 'Family Dance',
        image: '/frames/ezgif-frame-140.jpg',
        desc: 'High-quality wireless mics, emcee coordination, and upbeat family dance playlists that transition the evening from heartfelt ceremony to a fun dance party.',
        highlights: [
          'Multiple Cordless Handheld Mics',
          'Family Sangeet Music Tracks',
          'Custom Choreography Audio Cues',
          'Interactive Dance Session',
        ],
      },
    ],
    features: [
      'Walking-on-clouds dry ice low fog machine for couple entry',
      'Indoor-safe cold pyro sparkler fountains for ring exchange',
      'Warm pastel & golden stage wash lighting for photography',
      'Curated romantic Bollywood & acoustic love song playlists',
      'Wireless microphones for family speeches and emcee hosting',
      'Seamless transition into celebratory family sangeet dance',
    ],
  },
  {
    num: '05',
    slug: 'barmala',
    title: 'Barmala (Varmala) Ceremony',
    badge: 'Signature Ceremony',
    desc: 'Grand revolving & hydraulic stage audio-visuals, dry ice cloud effects, synchronized cold pyro fountains, and royal shehnai fanfares.',
    image: '/frames/ezgif-frame-090.jpg',
    fullDesc:
      'The Varmala (Jaimala) is the crown jewel of every Indian wedding. Subhadra Band & DJ transforms this sacred ceremony into a grand cinematic masterpiece with revolving / hydraulic stage audio coordination, celestial low-lying dry ice clouds, synchronized cold sparkler fountains, and royal shehnai fanfares.',
    activities: [
      {
        title: 'Grand Varmala Stage & Revolving Audio-Visuals',
        tag: 'Stage Concept',
        image: '/frames/ezgif-frame-115.jpg',
        desc: 'Elevate the most sacred wedding milestone with specialized sound coordination, hydraulic/revolving stage synchronization, and royal background orchestration.',
        highlights: [
          'Stage Audio Synchronization',
          'Dramatic Musical Build-Up',
          'Royal Wedding Fanfare Cues',
          'Multi-Angle Spotlight Control',
        ],
      },
      {
        title: 'Dry Ice Low-Fog Cloud Machine (Walking on Clouds)',
        tag: 'Celestial Stage',
        image: '/frames/ezgif-frame-080.jpg',
        desc: 'Thick, pure white dry ice clouds carpet the entire stage floor, creating a heavenly celestial ambience as the bride and groom exchange garlands.',
        highlights: [
          'Pure White Dense Stage Fog',
          '100% Odorless & Non-Toxic',
          'Zero Residue on Stage & Attire',
          'Dreamy Cinematic Video Output',
        ],
      },
      {
        title: 'Synchronized Cold Pyro Sparkler Fountains',
        tag: 'Sparkler Grandeur',
        image: '/frames/ezgif-frame-090.jpg',
        desc: 'Multiple automated cold spark machines surrounding the stage burst upward in unison at the exact moment of garland exchange for breathtaking photos.',
        highlights: [
          'Simultaneous Multi-Pyro Triggering',
          'Safe Cold Spark Tech (No Burn/Smoke)',
          'Adjustable Spark Heights (2m to 5m)',
          'Programmable Duration',
        ],
      },
      {
        title: 'Rose Petal Cannons & Confetti Showers',
        tag: 'Floral Shower',
        image: '/frames/ezgif-frame-015.jpg',
        desc: 'High-pressure air cannons shower fresh red and pink rose petals alongside gold/silver metallic confetti over the couple, sealing the moment in royal grandeur.',
        highlights: [
          'High-Capacity Floral Petal Blasters',
          'Gold & Silver Metallic Confetti',
          'Even Stage Coverage',
          'Photographer-Friendly Dispersion',
        ],
      },
      {
        title: 'Royal Shehnai & Festive Musical Crescendo',
        tag: 'Traditional Soul',
        image: '/frames/ezgif-frame-001.jpg',
        desc: 'Live royal shehnai tunes and celebratory traditional Odia & Vedic wedding musical chants that imbue the sacred Varmala rituals with timeless devotion and joy.',
        highlights: [
          'Traditional Royal Shehnai Strains',
          'Mangala Vadya & Sankha Cues',
          'Vedic Ceremony Sound Balancing',
          'Grand Celebration Climax',
        ],
      },
    ],
    features: [
      'Hydraulic / revolving stage audio & visual cue synchronization',
      'Dense dry-ice cloud fog machine covering the entire stage',
      'Surround cold pyro sparklers triggered at the garland exchange',
      'High-velocity fresh rose petal and gold confetti cannons',
      'Royal shehnai fanfare & Vedic ceremony musical soundtrack',
      'Custom spotlighting to make wedding photography sparkle',
    ],
  },
];

export default function Services() {
  const sectionRef = useRef(null);
  const gridRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const anim = staggerReveal(gridRef.current, '.service-card', {
      y: 60,
      stagger: 0.12,
      start: 'top 75%',
    });

    return () => anim?.scrollTrigger?.kill();
  }, []);

  const handleCardClick = (slug) => {
    router.push(`/services/${slug}`);
  };

  return (
    <section
      ref={sectionRef}
      id="services"
      className="section"
      style={{ background: 'var(--color-void)', position: 'relative' }}
      aria-label="Our Core Event Services"
    >
      <div
        className="section-glow"
        style={{
          top: '20%',
          left: '-150px',
          background: 'radial-gradient(circle, rgba(59,130,246,0.08), transparent 70%)',
        }}
      />
      <div
        className="section-glow"
        style={{
          bottom: '-150px',
          right: '-150px',
          background: 'radial-gradient(circle, rgba(168,85,247,0.08), transparent 70%)',
        }}
      />

      <div className="section-inner" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '4rem' }}>
          <div>
            <span className="text-label" style={{ display: 'block', marginBottom: '1rem' }}>
              What We Bring To Your Occasions
            </span>
            <h2 className="text-display">
              OUR <span style={{ color: 'var(--color-electric)' }}>SERVICES.</span>
            </h2>
          </div>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.95rem',
              color: 'var(--color-silver)',
              maxWidth: '480px',
              lineHeight: 1.6,
            }}
          >
            Explore our specialized event production packages. Click on any service below to explore detailed breakdowns, sub-events, and inclusions.
          </p>
        </div>

        <div
          ref={gridRef}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: 'clamp(1.25rem, 3vw, 2rem)',
            width: '100%',
          }}
        >
          {SERVICES.map((service) => (
            <div
              key={service.num}
              className="service-card"
              onClick={() => handleCardClick(service.slug)}
              style={{
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.07)',
                borderRadius: '18px',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
                padding: 0,
                width: '100%',
                boxSizing: 'border-box',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.border = '1px solid rgba(59, 130, 246, 0.4)';
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 25px 50px rgba(59, 130, 246, 0.15), 0 10px 30px rgba(0,0,0,0.6)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.07)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
              }}
            >
              {/* Image & Badges */}
              <div
                style={{
                  position: 'relative',
                  height: '220px',
                  overflow: 'hidden',
                }}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.08)')}
                  onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                />

                {/* Number Badge */}
                <span
                  style={{
                    position: 'absolute',
                    top: '14px',
                    left: '14px',
                    background: 'rgba(0, 0, 0, 0.75)',
                    backdropFilter: 'blur(8px)',
                    color: 'var(--color-electric)',
                    fontSize: '0.72rem',
                    fontWeight: 800,
                    fontFamily: 'var(--font-display)',
                    letterSpacing: '0.1em',
                    padding: '5px 12px',
                    borderRadius: '20px',
                    border: '1px solid rgba(59, 130, 246, 0.3)',
                  }}
                >
                  {service.num}
                </span>

                {/* Service Tag */}
                {service.badge && (
                  <span
                    style={{
                      position: 'absolute',
                      top: '14px',
                      right: '14px',
                      background: 'rgba(0, 0, 0, 0.75)',
                      backdropFilter: 'blur(8px)',
                      color: '#ffffff',
                      fontSize: '0.65rem',
                      fontWeight: 600,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      padding: '5px 12px',
                      borderRadius: '20px',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                    }}
                  >
                    {service.badge}
                  </span>
                )}

                {/* Sub-Activities Count Pill */}
                {service.activities && (
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '12px',
                      left: '14px',
                      background: 'rgba(0, 0, 0, 0.8)',
                      backdropFilter: 'blur(8px)',
                      color: 'var(--color-cloud)',
                      fontSize: '0.7rem',
                      fontWeight: 600,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      padding: '4px 10px',
                      borderRadius: '20px',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                    }}
                  >
                    <Sparkles size={12} style={{ color: 'var(--color-electric)' }} />
                    <span>{service.activities.length} Sub-Events &amp; Activities</span>
                  </div>
                )}

                {/* Gradient Overlay */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '50%',
                    background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                    pointerEvents: 'none',
                  }}
                />
              </div>

              {/* Content */}
              <div
                style={{
                  padding: '1.75rem',
                  flexGrow: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.35rem',
                      fontWeight: 700,
                      color: 'var(--color-white)',
                      marginBottom: '0.75rem',
                      lineHeight: 1.2,
                    }}
                  >
                    {service.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.88rem',
                      color: 'var(--color-silver)',
                      lineHeight: 1.6,
                      marginBottom: '1.25rem',
                    }}
                  >
                    {service.desc}
                  </p>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: '1rem',
                    borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                  }}
                >
                  <span
                    style={{
                      color: 'var(--color-electric)',
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                    }}
                  >
                    Explore Details &amp; Activities
                    <ArrowRight size={15} />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
