import { useRef, useEffect, useState } from 'react';

/**
 * Hook for 3D tilt effect on mouse move
 * @param {number} maxAngle - Maximum rotation angle in degrees (default: 10)
 * @returns {Object} - ref to attach to container, rotation values for transform
 */
export const useMouse3D = (maxAngle = 10) => {
  const ref = useRef(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const x = e.clientX - (rect.left + rect.width / 2);
      const y = e.clientY - (rect.top + rect.height / 2);

      const normalizedX = (x / (rect.width / 2)) * maxAngle;
      const normalizedY = -(y / (rect.height / 2)) * maxAngle;

      setRotation({ x: normalizedY, y: normalizedX });
    };

    const handleMouseLeave = () => {
      setRotation({ x: 0, y: 0 });
    };

    const element = ref.current;
    if (element) {
      element.addEventListener('mousemove', handleMouseMove);
      element.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        element.removeEventListener('mousemove', handleMouseMove);
        element.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, [maxAngle]);

  return { ref, rotation };
};

export default useMouse3D;
