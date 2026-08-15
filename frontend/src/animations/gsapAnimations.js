import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Fade element up into view on scroll
 */
export function fadeInUp(element, options = {}) {
  const {
    y = 60,
    duration = 1,
    delay = 0,
    trigger,
    start = 'top 85%',
  } = options;

  return gsap.fromTo(
    element,
    { y, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration,
      delay,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: trigger || element,
        start,
        toggleActions: 'play none none none',
      },
    }
  );
}

/**
 * Stagger reveal children elements
 */
export function staggerReveal(container, childSelector, options = {}) {
  const {
    y = 50,
    duration = 0.8,
    stagger = 0.15,
    start = 'top 80%',
  } = options;

  const children = container.querySelectorAll(childSelector);

  return gsap.fromTo(
    children,
    { y, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration,
      stagger,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: container,
        start,
        toggleActions: 'play none none none',
      },
    }
  );
}

/**
 * Counter animation for stats
 */
export function counterAnimation(element, endValue, options = {}) {
  const { duration = 2, start = 'top 80%' } = options;
  const obj = { value: 0 };

  return gsap.to(obj, {
    value: endValue,
    duration,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: element,
      start,
      toggleActions: 'play none none none',
    },
    onUpdate: () => {
      element.textContent = Math.round(obj.value);
    },
  });
}

/**
 * Text line reveal animation
 */
export function textLineReveal(container, options = {}) {
  const {
    duration = 1,
    stagger = 0.2,
    start = 'top 80%',
  } = options;

  const lines = container.querySelectorAll('.reveal-line');

  lines.forEach((line) => {
    const wrapper = document.createElement('div');
    wrapper.style.overflow = 'hidden';
    line.parentNode.insertBefore(wrapper, line);
    wrapper.appendChild(line);
  });

  return gsap.fromTo(
    lines,
    { y: '110%', opacity: 0 },
    {
      y: '0%',
      opacity: 1,
      duration,
      stagger,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: container,
        start,
        toggleActions: 'play none none none',
      },
    }
  );
}

/**
 * Horizontal scroll animation
 */
export function horizontalScroll(container, scrollElement, options = {}) {
  const { start = 'top top', end } = options;

  const scrollWidth = scrollElement.scrollWidth - window.innerWidth;

  return gsap.to(scrollElement, {
    x: -scrollWidth,
    ease: 'none',
    scrollTrigger: {
      trigger: container,
      start,
      end: end || `+=${scrollWidth}`,
      pin: true,
      scrub: 1,
    },
  });
}
