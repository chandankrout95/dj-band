import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function LoadingScreen({ progress, isLoaded, onComplete }) {
  const screenRef = useRef(null);
  const hasCompleted = useRef(false);

  useEffect(() => {
    if (isLoaded && !hasCompleted.current) {
      hasCompleted.current = true;
      const tl = gsap.timeline({
        onComplete: () => onComplete?.(),
      });

      tl.to('.loading-percentage', {
        scale: 1.1,
        duration: 0.3,
        ease: 'power2.out',
      })
        .to('.loading-percentage', {
          scale: 1,
          duration: 0.2,
        })
        .to(
          '.loading-text',
          {
            opacity: 0,
            duration: 0.3,
          },
          '-=0.2'
        )
        .to(screenRef.current, {
          opacity: 0,
          duration: 0.8,
          ease: 'power2.inOut',
          delay: 0.3,
        })
        .set(screenRef.current, { display: 'none' });
    }
  }, [isLoaded, onComplete]);

  const statusText = progress < 30
    ? 'INITIALIZING LIGHTS...'
    : progress < 60
      ? 'LOADING EXPERIENCE...'
      : progress < 90
        ? 'PREPARING VISUALS...'
        : 'READY';

  return (
    <div ref={screenRef} className="loading-screen" aria-label="Loading">
      <div className="loading-percentage">{progress}%</div>
      <div className="loading-progress-track">
        <div
          className="loading-progress-bar"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="loading-text">{statusText}</div>
    </div>
  );
}
