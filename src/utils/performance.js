/**
 * Performance & Optimization Utilities
 * Helpful for scroll performance, animations, and lazy loading
 */

/**
 * Debounce function for scroll/resize events
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in ms
 * @returns {Function} - Debounced function
 */
export const debounce = (func, wait = 150) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

/**
 * Throttle function for high-frequency events
 * @param {Function} func - Function to throttle
 * @param {number} limit - Limit in ms
 * @returns {Function} - Throttled function
 */
export const throttle = (func, limit = 150) => {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

/**
 * Check if element is in viewport
 * @param {HTMLElement} element - Element to check
 * @param {number} offset - Offset in px
 * @returns {boolean}
 */
export const isInViewport = (element, offset = 0) => {
  if (!element) return false;
  const rect = element.getBoundingClientRect();
  return (
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) - offset &&
    rect.bottom >= offset
  );
};

/**
 * Prefetch a resource
 * @param {string} url - URL to prefetch
 */
export const prefetch = (url) => {
  const link = document.createElement('link');
  link.rel = 'prefetch';
  link.href = url;
  document.head.appendChild(link);
};

/**
 * Safe GSAP animation cleanup
 * @param {object} timeline - GSAP timeline
 * @param {object} scrollTrigger - ScrollTrigger instance
 */
export const cleanupGSAP = (timeline, scrollTrigger) => {
  if (timeline) timeline.kill();
  if (scrollTrigger) scrollTrigger.kill();
};

/**
 * Detect reduced motion preference
 * @returns {boolean}
 */
export const prefersReducedMotion = () => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};
