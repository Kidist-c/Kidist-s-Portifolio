/**
 * ScrollProgressBar - thin progress bar at the top of the viewport
 * showing how far the user has scrolled.
 */

import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import './ScrollProgressBar.css';

export const ScrollProgressBar: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      className="scroll-progress"
      style={{ scaleX }}
      aria-hidden="true"
    />
  );
};
