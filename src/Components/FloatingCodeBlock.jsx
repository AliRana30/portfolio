import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const FloatingCodeBlock = ({ disableTilt = false }) => {
  const [displayedCode, setDisplayedCode] = useState('');
  const [codeIndex, setCodeIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const codeSnippet = `const ali = {
  role: "Software Engineer",
  location: "Lahore, PK",
  openSource: true,
  solving: "real problems"
}`;

  // Typing animation
  useEffect(() => {
    if (codeIndex < codeSnippet.length) {
      const timeout = setTimeout(() => {
        setDisplayedCode(codeSnippet.substring(0, codeIndex + 1));
        setCodeIndex(codeIndex + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [codeIndex]);

  // Mouse parallax effect - max 8deg rotation
  useEffect(() => {
    if (disableTilt) return undefined;

    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        // Map to max ±8 degrees
        const rotateX = (y / (rect.height / 2)) * 8;
        const rotateY = -(x / (rect.width / 2)) * 8;
        
        setMousePosition({ rotateX, rotateY });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [disableTilt]);

  // Continuous floating animation - translateY -10px and back, 4s ease-in-out
  const floatingVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div
      ref={containerRef}
      variants={floatingVariants}
      animate="animate"
      style={{
        rotateX: disableTilt ? 0 : mousePosition.rotateX,
        rotateY: disableTilt ? 0 : mousePosition.rotateY,
        transformPerspective: 1000,
        boxShadow: '0 10px 30px rgba(100, 200, 255, 0.15), 0 0 40px rgba(100, 200, 255, 0.08)',
        transformStyle: 'preserve-3d'
      }}
      onMouseEnter={(e) => {
        if (e.currentTarget) {
          e.currentTarget.style.boxShadow = '0 20px 40px rgba(100, 200, 255, 0.25), 0 0 60px rgba(100, 200, 255, 0.15)';
        }
      }}
      onMouseLeave={(e) => {
        if (e.currentTarget) {
          e.currentTarget.style.boxShadow = '0 10px 30px rgba(100, 200, 255, 0.15), 0 0 40px rgba(100, 200, 255, 0.08)';
        }
      }}
      className="relative transition-shadow duration-300"
    >
      <div className="code-block">
        <div className="code-block-inner">
          <div className="code-tab">
            <div className="code-tab-indicator"></div>
            <span className="code-tab-label">alimahmood.js</span>
          </div>
          <div className="code-content">
            {displayedCode}
            <span className="cursor"></span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FloatingCodeBlock;
