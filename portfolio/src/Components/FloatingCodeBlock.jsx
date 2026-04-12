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
      <style jsx>{`
        .code-block {
          perspective: 1200px;
          transform-style: preserve-3d;
        }

        .code-block-inner {
          background: linear-gradient(135deg, rgba(0, 0, 0, 0.95) 0%, rgba(20, 20, 30, 0.95) 100%);
          border: 1px solid rgba(100, 200, 255, 0.3);
          box-shadow: 
            0 0 20px rgba(100, 200, 255, 0.2),
            0 0 40px rgba(100, 200, 255, 0.1),
            inset 0 0 20px rgba(100, 200, 255, 0.05);
          border-radius: 12px;
          overflow: hidden;
          backdrop-filter: blur(10px);
          transform: translateZ(0);
        }

        .code-tab {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 16px;
          border-bottom: 1px solid rgba(100, 200, 255, 0.2);
          background: rgba(0, 0, 0, 0.3);
          user-select: none;
        }

        .code-tab-indicator {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #64c8ff;
          box-shadow: 0 0 10px rgba(100, 200, 255, 0.5);
          animation: pulsingGlow 2s ease-in-out infinite;
        }

        @keyframes pulsingGlow {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 0 10px rgba(100, 200, 255, 0.5);
          }
          50% {
            transform: scale(1.3);
            box-shadow: 0 0 20px rgba(100, 200, 255, 0.8);
          }
        }

        .code-tab-label {
          font-family: 'JetBrains Mono', 'Fira Code', monospace;
          font-size: 13px;
          color: #64c8ff;
          font-weight: 500;
          letter-spacing: 0.5px;
        }

        .code-content {
          padding: 16px;
          font-family: 'JetBrains Mono', 'Fira Code', monospace;
          font-size: 14px;
          line-height: 1.6;
          color: #d4d4d4;
          overflow: hidden;
          min-height: 140px;
          white-space: pre-wrap;
          word-break: break-word;
        }

        .code-line {
          display: block;
        }

        .cursor {
          display: inline-block;
          width: 2px;
          height: 1em;
          background-color: #64c8ff;
          margin-left: 2px;
          animation: blinkCursor 0.8s step-end infinite;
        }

        @keyframes blinkCursor {
          0%, 49%, 100% {
            opacity: 1;
          }
          50%, 99% {
            opacity: 0;
          }
        }

        /* Syntax highlighting */
        .keyword { color: #569cd6; }
        .string { color: #ce9178; }
        .property { color: #9cdcfe; }
        .value { color: #ce9178; }
        .boolean { color: #569cd6; }
      `}</style>

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
