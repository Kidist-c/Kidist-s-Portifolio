/**
 * Custom hook wrapping IntersectionObserver for scroll-triggered animations.
 * Returns a ref to attach to an element and whether it has intersected.
 */

import { useEffect, useRef, useState, RefObject } from 'react';

interface IntersectionOptions {
  threshold?: number;
  rootMargin?: string;
  /** If true, once element is visible it stays visible */
  once?: boolean;
}

interface IntersectionResult<T extends Element> {
  ref: RefObject<T | null>;
  isVisible: boolean;
  hasAnimated: boolean;
}

export const useIntersectionObserver = <T extends Element = HTMLDivElement>(
  options: IntersectionOptions = {}
): IntersectionResult<T> => {
  const { threshold = 0.1, rootMargin = '0px 0px -60px 0px', once = true } = options;
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const visible = entry.isIntersecting;
        setIsVisible(visible);
        if (visible && !hasAnimated) {
          setHasAnimated(true);
        }
        if (once && visible) {
          observer.unobserve(element);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once, hasAnimated]);

  return { ref, isVisible, hasAnimated };
};
