import { useEffect, useRef, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TOTAL_FRAMES = 151;

export default function ScrollSequence({ images, children }) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const frameIndexRef = useRef(0);
  const rafRef = useRef(null);

  const drawFrame = useCallback(
    (index) => {
      const canvas = canvasRef.current;
      if (!canvas || !images || images.length === 0) return;

      const ctx = canvas.getContext('2d');
      const img = images[index];
      if (!img) return;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = window.innerWidth;
      const h = window.innerHeight;

      // Update physical canvas size if viewport changed
      const targetCw = Math.floor(w * dpr);
      const targetCh = Math.floor(h * dpr);

      if (canvas.width !== targetCw || canvas.height !== targetCh) {
        canvas.width = targetCw;
        canvas.height = targetCh;
        canvas.style.width = `${w}px`;
        canvas.style.height = `${h}px`;
      }

      const cw = canvas.width;
      const ch = canvas.height;

      // Calculate object-fit: cover scaling in canvas buffer coordinates
      const imgRatio = img.width / img.height;
      const canvasRatio = cw / ch;

      let drawW, drawH, drawX, drawY;

      if (imgRatio > canvasRatio) {
        drawH = ch;
        drawW = ch * imgRatio;
        drawX = (cw - drawW) / 2;
        drawY = 0;
      } else {
        drawW = cw;
        drawH = cw / imgRatio;
        drawX = 0;
        drawY = (ch - drawH) / 2;
      }

      ctx.clearRect(0, 0, cw, ch);
      ctx.drawImage(img, drawX, drawY, drawW, drawH);
    },
    [images]
  );

  useEffect(() => {
    if (!images || images.length === 0) return;

    // Draw initial frame
    drawFrame(0);

    // Handle resize
    const handleResize = () => {
      drawFrame(frameIndexRef.current);
    };
    window.addEventListener('resize', handleResize);

    // ScrollTrigger for frame animation
    const scrollHeight = TOTAL_FRAMES * 35; // ~35px per frame = 5285px ≈ 500vh

    const trigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top top',
      end: `+=${scrollHeight}`,
      pin: true,
      scrub: 0.5,
      onUpdate: (self) => {
        const newIndex = Math.min(
          Math.floor(self.progress * (images.length - 1)),
          images.length - 1
        );

        if (newIndex !== frameIndexRef.current) {
          frameIndexRef.current = newIndex;
          if (rafRef.current) cancelAnimationFrame(rafRef.current);
          rafRef.current = requestAnimationFrame(() => drawFrame(newIndex));
        }
      },
    });

    return () => {
      trigger.kill();
      window.removeEventListener('resize', handleResize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [images, drawFrame]);

  return (
    <div ref={containerRef} className="hero-canvas-wrapper">
      <canvas
        ref={canvasRef}
        className="hero-canvas"
        aria-label="DJ lighting rig animation controlled by scroll"
        role="img"
      />
      <div className="hero-vignette" />
      <div className="hero-grain" />
      {children}
    </div>
  );
}
