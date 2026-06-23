import { useEffect, useRef, useCallback } from 'react';
import { prefersReducedMotion } from '../utils/performance';

/**
 * Custom hook for GSAP animations with accessibility
 * @param {Function} animationFn - Animation function using GSAP
 * @param {Array} dependencies - Dependency array
 * @returns {Object} - Ref and animation state
 */
export const useGSAPAnimation = (animationFn, dependencies = []) => {
  const ref = useRef(null);
  const timelineRef = useRef(null);

  useEffect(() => {
    // Skip animations if user prefers reduced motion
    if (prefersReducedMotion()) {
      return;
    }

    if (window.gsap && ref.current) {
      const cleanup = animationFn(ref.current, timelineRef);
      return () => {
        if (cleanup) cleanup();
      };
    }
  }, [animationFn, dependencies]);

  return ref;
};

/**
 * Custom hook for handling scroll animations safely
 * @param {Function} callback - Callback when element is in view
 * @param {Object} options - IntersectionObserver options
 * @returns {Object} - Ref to observe
 */
export const useScrollAnimation = (callback, options = {}) => {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    const observerOptions = {
      threshold: 0.1,
      ...options,
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        callback();
        observer.unobserve(entry.target);
      }
    }, observerOptions);

    const currentRef = ref.current;
    observer.observe(currentRef);

    return () => {
      observer.unobserve(currentRef);
      observer.disconnect();
    };
  }, [callback, options]);

  return ref;
};

/**
 * Custom hook for carousel auto-scroll with pause on hover
 * @param {number} interval - Auto-scroll interval in ms
 * @returns {Object} - {isHovered, hoverRef}
 */
export const useCarouselAutoScroll = (interval = 4000) => {
  const hoverRef = useRef(false);
  const intervalRef = useRef(null);

  const startAutoScroll = useCallback((callback) => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      if (!hoverRef.current) {
        callback();
      }
    }, interval);
  }, [interval]);

  const stopAutoScroll = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  }, []);

  useEffect(() => {
    return () => stopAutoScroll();
  }, [stopAutoScroll]);

  return {
    hoverRef,
    startAutoScroll,
    stopAutoScroll,
  };
};
