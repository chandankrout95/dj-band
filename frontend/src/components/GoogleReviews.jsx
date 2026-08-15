import { useState, useEffect, useRef } from 'react';
import { staggerReveal } from '../animations/gsapAnimations';

const REVIEWS = [
  {
    id: 1,
    author: 'PREMANANDA NAYAK',
    meta: '3 reviews • a month ago',
    rating: 5,
    likes: 1,
    comment:
      'The band, DJ, and lighting team were absolutely amazing and exceeded our expectations. They created a fantastic atmosphere throughout the event with great music, excellent sound quality, and beautiful lighting. The entire team was highly professional, cooperative, and accommodating, ensuring that everything ran smoothly from start to finish. They were attentive to our requests, coordinated well, and made our celebration even more memorable. We are truly grateful for their efforts and would highly recommend them to anyone looking for quality service for their special occasions.',
    ownerReply:
      'Thank you so much sir for taking the time to share such a beautiful review! We are absolutely thrilled to hear that the band, DJ, and lighting team exceeded your expectations and helped make your celebration so memorable. Ensuring everything runs smoothly and making our clients happy is always our top priority. Knowing that you felt supported and happy from start to finish means the world to us. Lastly, thank you for recommending us, and we wish you a lifetime of happy memories!',
    ownerReplyTime: 'a month ago',
  },
  {
    id: 2,
    author: 'Kanhucharan Jena',
    meta: '1 review • 3 weeks ago',
    isNew: true,
    rating: 5,
    likes: 1,
    comment:
      "Best Band service I have come across google for my brother's marriage. Brass Band members were playing old classics songs. Dj Service was awesome. Members of band & dj were good. Made my day. Thank You Narayan Babu.",
    ownerReply:
      "Thank you Sir, for sharing your gracious feedback. We take immense pride in delivering top-notch music and entertainment services, and we are delighted that our team helped make your brother's marriage celebration memorable. Regards, Subhadra Band & DJ.",
    ownerReplyTime: '3 weeks ago',
  },
  {
    id: 3,
    author: 'D R Dash',
    meta: '5 reviews • 4 photos • 8 months ago',
    rating: 5,
    likes: 1,
    photos: 3,
    comment:
      "Excellent Intime Service. Quality of DJ, Brass Band, Dhol and Telingi was very professional and Satisfactory. I am very much Satisfied with the Service of Subhadra band DJ that has made our son's wedding celebration truly special.",
    ownerReply:
      "Dear Sir, We're thrilled to hear that you had an amazing experience with our team, Subhadra Band & DJ! Thank you for your kind words about our team and services. We're glad that our team could make your son's wedding celebration truly special. Your feedback means the world to us! We look forward to serving you again. 🙏 Best regards, Subhadra Band DJ Team",
    ownerReplyTime: '8 months ago',
  },
  {
    id: 4,
    author: 'Priya Dash',
    meta: 'Local Guide • 14 reviews • 1 photo • 2 months ago',
    rating: 5,
    likes: 1,
    isLocalGuide: true,
    comment:
      'The services with particular and time bound was outstanding. Sound system and quality of service from horse, DJ and lightening was out of my expectation. The owner is highly responsible and authentic. Everybody should avail.',
    ownerReply:
      'We sincerely appreciate your outstanding review. Thank you for recognizing our punctuality and the quality of our entertainment and vendor services. Our team is dedicated to authenticity and care. Thank you for recommending us to everyone!',
    ownerReplyTime: '2 months ago',
  },
  {
    id: 5,
    author: 'mamata pradhan',
    meta: '3 reviews • 1 photo • 3 months ago',
    rating: 5,
    likes: 1,
    comment:
      'From the very beginning, they were organized, professional, and listened to all our song requests. On the night of the event, they read the crowd perfectly and kept the dance floor packed all night. The flow was completely seamless.',
    ownerReply:
      "Wow, thanks for sharing your experience! 😊 We're thrilled that your guests got just the right vibe and enjoyed the party. Looking forward to doing it again sometime 🙏 Regards : Team Subhadra Band & DJ",
    ownerReplyTime: '3 months ago',
  },
  {
    id: 6,
    author: 'NIRANJAN SAMANTARAY',
    meta: '2 reviews • 6 months ago',
    rating: 5,
    likes: 0,
    comment:
      'Excellent light, sound and band. Very punctual and sincere in performance. I have extremely good experience with the DJ party.',
    ownerReply: null,
  },
];

export default function GoogleReviews() {
  const [expandedReplies, setExpandedReplies] = useState({});
  const sectionRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    const anim = staggerReveal(gridRef.current, '.review-card', {
      y: 40,
      stagger: 0.1,
      start: 'top 75%',
    });

    return () => anim?.scrollTrigger?.kill();
  }, []);

  const toggleReply = (id) => {
    setExpandedReplies((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section
      ref={sectionRef}
      id="reviews"
      className="section"
      style={{
        background: 'var(--color-void)',
        position: 'relative',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
      }}
      aria-label="Google Reviews"
    >
      <div
        className="section-glow"
        style={{
          top: '20%',
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.08), transparent 70%)',
        }}
      />

      <div className="section-inner" style={{ position: 'relative', zIndex: 1 }}>
        {/* Google Reviews Badge Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              background: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              padding: '0.5rem 1.25rem',
              borderRadius: '30px',
              marginBottom: '1.5rem',
            }}
          >
            {/* Google Logo SVG Icon */}
            <svg width="20" height="20" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
              />
            </svg>
            <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-white)' }}>
              Verified Google Reviews
            </span>
            <span style={{ color: '#f59e0b', fontSize: '0.9rem' }}>★★★★★ 4.9</span>
          </div>

          <h2 className="text-display" style={{ marginBottom: '1.25rem' }}>
            WHAT OUR <span style={{ color: 'var(--color-electric)' }}>CLIENTS SAY.</span>
          </h2>

          <p className="text-body-lg" style={{ maxWidth: '650px', margin: '0 auto' }}>
            Real feedback and reviews shared by our clients on Google for Subhadra Band &amp; DJ services in Bhubaneswar.
          </p>
        </div>

        {/* Highlight Note */}
        {/* <div
          style={{
            background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.08), rgba(168, 85, 247, 0.08))',
            border: '1px solid rgba(59, 130, 246, 0.25)',
            borderRadius: '16px',
            padding: '1.75rem 2rem',
            marginBottom: '3.5rem',
            position: 'relative',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
            <span style={{ fontSize: '1.8rem' }}>🙏</span>
            <div>
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  letterSpacing: '0.15em',
                  color: 'var(--color-electric)',
                  textTransform: 'uppercase',
                  display: 'block',
                  marginBottom: '0.5rem',
                }}
              >
                Owner Appreciation Message — ସୁଭଦ୍ରା ବ୍ଯାଣ୍ଡ୍ ଆଣ୍ଡ ଡିଜେ
              </span>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.95rem',
                  color: 'var(--color-cloud)',
                  lineHeight: 1.7,
                  fontStyle: 'italic',
                }}
              >
                &ldquo;Thank you so much, Nabneet Babu 🙏. We&apos;re absolutely thrilled to hear that you enjoyed our services and that everything was up to your expectations. Your kind words about our team, from the DJ to the performers, mean a lot to us. We&apos;re grateful for the opportunity to be a part of your special day and make it memorable. Looking forward to serving you again! 😊&rdquo;
              </p>
            </div>
          </div>
        </div> */}

        {/* Reviews Cards Grid */}
        <div
          ref={gridRef}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem',
          }}
        >
          {REVIEWS.map((r) => (
            <div
              key={r.id}
              className="review-card"
              style={{
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.07)',
                borderRadius: '16px',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.3s ease',
              }}
            >
              <div>
                {/* User Header */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1rem',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.88rem' }}>
                    <div
                      style={{
                        width: '44px',
                        height: '44px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #3b82f6, #a855f7)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 700,
                        fontSize: '1.1rem',
                        color: '#fff',
                      }}
                    >
                      {r.author.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <h3
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: '1.05rem',
                          fontWeight: 700,
                          color: 'var(--color-white)',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                        }}
                      >
                        {r.author}
                        {r.isNew && (
                          <span
                            style={{
                              fontSize: '0.6rem',
                              background: '#22c55e',
                              color: '#000',
                              padding: '2px 6px',
                              borderRadius: '10px',
                              fontWeight: 700,
                            }}
                          >
                            NEW
                          </span>
                        )}
                      </h3>
                      <p style={{ fontSize: '0.72rem', color: 'var(--color-mist)' }}>
                        {r.meta}
                      </p>
                    </div>
                  </div>

                  <svg width="24" height="24" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                    />
                  </svg>
                </div>

                {/* Star Rating */}
                <div style={{ color: '#f59e0b', fontSize: '1.1rem', marginBottom: '1rem', display: 'flex', gap: '3px' }}>
                  {'★'.repeat(r.rating)}
                </div>

                {/* Comment Text */}
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.9rem',
                    color: 'var(--color-cloud)',
                    lineHeight: 1.7,
                    marginBottom: '1.25rem',
                  }}
                >
                  &ldquo;{r.comment}&rdquo;
                </p>

                {/* Likes Badge */}
                {r.likes > 0 && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', color: '#ef4444', marginBottom: '1rem' }}>
                    <span>❤️</span>
                    <span>{r.likes}</span>
                  </div>
                )}
              </div>

              {/* Owner Reply Toggle & Content */}
              {r.ownerReply && (
                <div
                  style={{
                    borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                    paddingTop: '1rem',
                    marginTop: '1rem',
                  }}
                >
                  <button
                    onClick={() => toggleReply(r.id)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'var(--color-electric)',
                      fontSize: '0.78rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      padding: 0,
                    }}
                  >
                    <span>{expandedReplies[r.id] ? '▼' : '►'}</span>
                    <span>ସୁଭଦ୍ରା ବ୍ଯାଣ୍ଡ୍ ଆଣ୍ଡ ଡିଜେ (Owner Response)</span>
                  </button>

                  {expandedReplies[r.id] && (
                    <div
                      style={{
                        marginTop: '0.75rem',
                        background: 'rgba(59, 130, 246, 0.05)',
                        borderLeft: '2px solid var(--color-electric)',
                        padding: '1rem 1.25rem',
                        borderRadius: '0 8px 8px 0',
                      }}
                    >
                      <div
                        style={{
                          fontSize: '0.7rem',
                          fontWeight: 700,
                          color: 'var(--color-mist)',
                          marginBottom: '0.4rem',
                        }}
                      >
                        ସୁଭଦ୍ରା ବ୍ଯାଣ୍ଡ୍ ଆଣ୍ଡ ଡିଜେ (owner) • {r.ownerReplyTime}
                      </div>
                      <p style={{ fontSize: '0.85rem', color: 'var(--color-silver)', lineHeight: 1.6 }}>
                        {r.ownerReply}
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
