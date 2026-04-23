import { useEffect, useRef, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const GlovedHandSVG = ({ isPointing = false }) => (
  <svg 
    viewBox="0 0 32 32" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
    style={{ transform: isPointing ? 'rotate(-12deg)' : 'rotate(0deg)', transition: 'transform 0.2s ease' }}
  >
    {/* Glove hand style close to reference image */}
    <path 
      d="M10 28V16l-3-1V9a2 2 0 014 0v5h1V6a2 2 0 014 0v8h1V8a2 2 0 014 0v6h1v-3a2 2 0 014 0v10c0 4-2 7-6 7h-4a6 6 0 01-6-6z" 
      stroke="#101010" 
      strokeWidth="2" 
      fill="#FFFFFF"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M15 22v4" stroke="#101010" strokeWidth="2" strokeLinecap="round" />
    <path d="M19 22v4" stroke="#101010" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const [enabled, setEnabled] = useState(false);
  const [isPointing, setIsPointing] = useState(false);
  const [scale, setScale] = useState(1);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springX = useSpring(mouseX, { stiffness: 300, damping: 28 });
  const springY = useSpring(mouseY, { stiffness: 300, damping: 28 });

  useEffect(() => {
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    setEnabled(isFinePointer);

    if (!isFinePointer) {
      return undefined;
    }

    const handleMouseMove = (event) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);

      // Check if hovering over interactive element
      const interactive = event.target.closest(
        'a, button, input, textarea, select, [role="button"], [data-cursor="pointer"], .cursor-pointer'
      );
      
      setIsPointing(Boolean(interactive));
      setScale(interactive ? 1.18 : 1);
    };

    const handleMouseLeave = () => {
      setIsPointing(false);
      setScale(1);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [mouseX, mouseY]);

  if (!enabled) return null;

  return (
    <motion.div
      ref={cursorRef}
      className="fixed top-0 left-0 w-9 h-9 pointer-events-none z-[9999]"
      style={{
        x: springX,
        y: springY,
        translateX: '-50%',
        translateY: '-50%',
      }}
    >
      <motion.div
        className="w-full h-full"
        animate={{ scale }}
        transition={{ duration: 0.15, ease: 'easeOut' }}
      >
        <GlovedHandSVG isPointing={isPointing} />
      </motion.div>
    </motion.div>
  );
};

const SmoothCursor = () => {
  useEffect(() => {
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;

    if (!isFinePointer) {
      document.documentElement.classList.remove('custom-cursor-enabled');
      return undefined;
    }

    document.documentElement.classList.add('custom-cursor-enabled');

    return () => {
      document.documentElement.classList.remove('custom-cursor-enabled');
    };
  }, []);

  return <CustomCursor />;
};

export default SmoothCursor;
