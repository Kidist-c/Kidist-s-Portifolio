/**
 * Custom hook that tracks window scroll progress (0–1).
 * Returns the scroll percentage and whether the user has scrolled past a threshold.
 */

import { useState, useEffect } from 'react';

interface ScrollState {
  /** Scroll progress from 0 (top) to 1 (bottom) */
  progress: number;
  /** True when scrolled past `threshold` pixels */
  isPast: boolean;
  /** Current scroll Y position in pixels */
  scrollY: number;
}

/**
 * @param threshold - Pixel offset to trigger `isPast`. Defaults to 80.
 */
export const useScrollProgress = (threshold = 80): ScrollState => {
  const [state, setState] = useState<ScrollState>({
    progress: 0,
    isPast: false,
    scrollY: 0,
  });

  useEffect(() => {
    const handleScroll = (): void => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? scrollY / docHeight : 0;

      setState({
        progress: Math.min(1, Math.max(0, progress)),
        isPast: scrollY > threshold,
        scrollY,
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return state;
};
