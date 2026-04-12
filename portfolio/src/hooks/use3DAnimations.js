import { useEffect, useRef } from 'react';

/**
 * Apply 3D mouse-following tilt effect to a card
 * @param {HTMLElement} element - The element to apply tilt to
 * @param {Object} options - Configuration
 * @param {number} options.maxRotation - Max rotation in degrees (default: 6)
 * @param {number} options.perspective - Perspective value in px (default: 1000)
 * @param {number} options.ease - Transition ease on leave (default: 'ease 0.4s')
 */
export const apply3DTilt = (element, options = {}) => {
  if (!element) return;

  const { maxRotation = 6, perspective = 1000, ease = 'ease 0.4s' } = options;

  const handleMouseMove = (e) => {
    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const rotateX = (y / (rect.height / 2)) * maxRotation;
    const rotateY = -(x / (rect.width / 2)) * maxRotation;

    element.style.transition = 'none';
    element.style.transform = `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = () => {
    element.style.transition = `transform ${ease}`;
    element.style.transform = `perspective(${perspective}px) rotateX(0deg) rotateY(0deg)`;
  };

  element.addEventListener('mousemove', handleMouseMove);
  element.addEventListener('mouseleave', handleMouseLeave);

  return () => {
    element.removeEventListener('mousemove', handleMouseMove);
    element.removeEventListener('mouseleave', handleMouseLeave);
  };
};

/**
 * Hook for applying 3D tilt to an element
 */
export const use3DTilt = (options = {}) => {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    return apply3DTilt(ref.current, options);
  }, [options]);

  return ref;
};

/**
 * Observe element scroll into view and trigger callback
 * @param {HTMLElement} element - Element to observe
 * @param {Function} callback - Called when element comes into view
 * @param {Object} options - IntersectionObserver options
 */
export const observeScroll = (element, callback, options = {}) => {
  if (!element) return;

  const defaultOptions = {
    threshold: 0.15,
    ...options
  };

  const observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      callback();
      observer.unobserve(entry.target);
    }
  }, defaultOptions);

  observer.observe(element);
  return observer;
};

/**
 * Hook for scroll into view with animation trigger
 */
export const useScrollReveal = (options = {}) => {
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          entry.target.classList.add('scroll-reveal-visible');
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.15,
        ...options
      }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [options]);

  return ref;
};

/**
 * Animate a number from 0 to target value
 * @param {HTMLElement} element - Element to update
 * @param {number} target - Target value
 * @param {number} duration - Animation duration in ms
 * @param {Function} formatter - Optional formatter for display value
 */
export const animateCountUp = (element, target, duration = 1000, formatter = (val) => val) => {
  if (!element) return;

  const start = Date.now();
  const startValue = 0;

  const animate = () => {
    const now = Date.now();
    const progress = Math.min((now - start) / duration, 1);
    const value = Math.floor(startValue + (target - startValue) * progress);
    element.textContent = formatter(value);

    if (progress < 1) {
      requestAnimationFrame(animate);
    }
  };

  animate();
};

export default {
  apply3DTilt,
  use3DTilt,
  observeScroll,
  useScrollReveal,
  animateCountUp
};
