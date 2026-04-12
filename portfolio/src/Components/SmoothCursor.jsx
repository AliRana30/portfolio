import { useEffect, useRef, useState } from 'react';

const SmoothCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const frameRef = useRef(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    setEnabled(isFinePointer);

    if (!isFinePointer) {
      document.documentElement.classList.remove('custom-cursor-enabled');
      return undefined;
    }

    document.documentElement.classList.add('custom-cursor-enabled');

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;

    const move = (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;

      const interactive = event.target.closest('a, button, input, textarea, select, [role="button"], .cursor-pointer');
      if (ringRef.current) {
        ringRef.current.classList.toggle('cursor-ring-active', Boolean(interactive));
      }
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
      }

      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
      }

      frameRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', move, { passive: true });
    frameRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', move);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      document.documentElement.classList.remove('custom-cursor-enabled');
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div ref={ringRef} className="custom-cursor-ring" />
      <div ref={dotRef} className="custom-cursor-dot" />
    </>
  );
};

export default SmoothCursor;
