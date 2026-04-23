import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const ArrowCursorSVG = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ filter: 'drop-shadow(2px 2px 2px rgba(0,0,0,0.2))' }}
  >
    <path
      d="M4 4L14 28L19 19L28 14L4 4Z"
      fill="white"
      stroke="black"
      strokeWidth="2.5"
      strokeLinejoin="round"
    />
  </svg>
);

const CustomCursor = () => {
  const [isPointer, setIsPointer] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  const rawX = useMotionValue(-100);
  const rawY = useMotionValue(-100);
  
  const springConfig = { stiffness: 450, damping: 40, mass: 0.5 };
  const cursorX = useSpring(rawX, springConfig);
  const cursorY = useSpring(rawY, springConfig);

  useEffect(() => {
    const touchQuery = window.matchMedia('(hover: none)');
    const handleTouchChange = (e) => setIsMobile(e.matches);
    setIsMobile(touchQuery.matches);
    touchQuery.addEventListener('change', handleTouchChange);

    const handleMouseMove = (e) => {
      rawX.set(e.clientX);
      rawY.set(e.clientY);

      const target = e.target;
      const isInteractive = target.closest('a, button, [data-cursor="pointer"], .cursor-pointer');
      setIsPointer(!!isInteractive);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      touchQuery.removeEventListener('change', handleTouchChange);
    };
  }, [rawX, rawY]);

  if (isMobile) return null;

  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        zIndex: 99999,
        x: cursorX,
        y: cursorY,
        translateX: '-12%',
        translateY: '-12%',
      }}
      animate={{
        scale: isPointer ? 1.25 : 1,
        rotate: isPointer ? -15 : 0,
      }}
      transition={{
        type: 'spring',
        stiffness: 500,
        damping: 30
      }}
    >
      <ArrowCursorSVG />
    </motion.div>
  );
};

export default CustomCursor;
