import { useEffect, useRef, useState } from 'react';

/**
 * Attaches an IntersectionObserver to a ref and returns whether
 * the element has scrolled into view. Once visible, stays visible.
 *
 * Usage:
 *   const { ref, isVisible } = useScrollFade();
 *   <div ref={ref} className={isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}>
 */
export function useScrollFade(threshold = 0.12) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el); // fire once
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}
