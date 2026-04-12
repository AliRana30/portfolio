import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { ChevronDown, ArrowRight } from 'lucide-react';

const Hero = () => {
  const profileImage = "/my_image.png";
  
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  
  const roles = ['Full Stack Developer', 'MERN Stack Developer', 'Problem Solver'];
  
  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 80 : 120;
    
    const timeout = setTimeout(() => {
      if (!isDeleting && currentIndex < currentRole.length) {
        setDisplayedText(currentRole.substring(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      } else if (isDeleting && currentIndex > 0) {
        setDisplayedText(currentRole.substring(0, currentIndex - 1));
        setCurrentIndex(currentIndex - 1);
      } else if (!isDeleting && currentIndex === currentRole.length) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentIndex === 0) {
        setIsDeleting(false);
        setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
      }
    }, typingSpeed);
    
    return () => clearTimeout(timeout);
  }, [currentIndex, isDeleting, roleIndex, roles]);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');
        
        * {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }
        
        .mono {
          font-family: 'JetBrains Mono', 'Fira Code', monospace;
        }

        /* Floating background dots */
        .floating-dots {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
        }

        .floating-dot {
          position: absolute;
          width: 4px;
          height: 4px;
          background: currentColor;
          border-radius: 50%;
          opacity: 0.07;
        }

        .dot-1 { animation: float1 8s ease-in-out infinite; top: 10%; left: 8%; }
        .dot-2 { animation: float2 10s ease-in-out infinite; top: 20%; left: 85%; }
        .dot-3 { animation: float3 12s ease-in-out infinite; top: 50%; left: 15%; }
        .dot-4 { animation: float4 9s ease-in-out infinite; top: 60%; left: 80%; }
        .dot-5 { animation: float5 11s ease-in-out infinite; top: 70%; left: 30%; }
        .dot-6 { animation: float6 13s ease-in-out infinite; top: 15%; left: 50%; }
        .dot-7 { animation: float7 7s ease-in-out infinite; top: 75%; left: 60%; }

        @keyframes float1 { 0%, 100% { transform: translateY(0) translateX(0); } 50% { transform: translateY(-20px) translateX(10px); } }
        @keyframes float2 { 0%, 100% { transform: translateY(0) translateX(0); } 50% { transform: translateY(15px) translateX(-8px); } }
        @keyframes float3 { 0%, 100% { transform: translateY(0) translateX(0); } 50% { transform: translateY(-25px) translateX(-12px); } }
        @keyframes float4 { 0%, 100% { transform: translateY(0) translateX(0); } 50% { transform: translateY(18px) translateX(15px); } }
        @keyframes float5 { 0%, 100% { transform: translateY(0) translateX(0); } 50% { transform: translateY(-15px) translateX(8px); } }
        @keyframes float6 { 0%, 100% { transform: translateY(0) translateX(0); } 50% { transform: translateY(20px) translateX(-10px); } }
        @keyframes float7 { 0%, 100% { transform: translateY(0) translateX(0); } 50% { transform: translateY(-18px) translateX(12px); } }

        /* Bounce animation for scroll indicator */
        @keyframes gentleBounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        .scroll-indicator {
          animation: gentleBounce 2s ease-in-out infinite;
        }

        @keyframes heroFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
      `}</style>
      
      <div className="relative min-h-screen bg-white mt-10">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-64 h-64 border border-gray-100 rotate-45"></div>
          <div className="absolute bottom-40 left-10 w-32 h-32 border border-gray-100 rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-2 h-20 bg-gray-100 rotate-12"></div>
          
          {/* Floating background dots */}
          <div className="floating-dots text-gray-800">
            <div className="floating-dot dot-1"></div>
            <div className="floating-dot dot-2"></div>
            <div className="floating-dot dot-3"></div>
            <div className="floating-dot dot-4"></div>
            <div className="floating-dot dot-5"></div>
            <div className="floating-dot dot-6"></div>
            <div className="floating-dot dot-7"></div>
          </div>
        </div>
        
        <section 
          id="home" 
          className="pt-16 md:pt-0 min-h-screen flex items-center justify-center relative z-10"
        >
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="container mx-auto px-8 py-16 flex flex-col lg:flex-row items-center justify-between max-w-6xl"
          >
            {/* Text Content */}
            <div className="w-full lg:w-3/5 text-left mb-16 lg:mb-0 lg:pr-12">
              <motion.div 
                variants={itemVariants}
                className="mb-6"
              >
                <h1 className="text-5xl md:text-6xl lg:text-5xl font-light leading-[0.9] mb-4 section-heading">
                  <span className="block font-bold text-gray-900">Ali Mahmood</span>
                </h1>
              </motion.div>

              <motion.div 
                variants={itemVariants}
                className="mb-8"
              >
                <div className="text-2xl md:text-3xl lg:text-4xl font-medium text-gray-700 min-h-[1.2em]">
                  <span>{displayedText}</span>
                  <span className="animate-pulse text-black font-light">|</span>
                </div>
              </motion.div>

              <motion.p 
                variants={itemVariants}
                className="text-lg text-gray-600 mb-10 max-w-lg leading-relaxed font-light"
              >
                I build modern web applications with clean code and thoughtful design. 
                Specializing in the MERN stack to create digital experiences that matter.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div 
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4"
              >
                <ScrollLink
                  to="projects"
                  smooth={true}
                  duration={500}
                  className="group px-8 py-4 bg-black text-white hover:bg-gray-800 transition-colors duration-200 cursor-pointer font-medium flex items-center gap-3 w-fit"
                >
                  <span>View My Work</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </ScrollLink>
                
                <ScrollLink
                  to="socials"
                  smooth={true}
                  duration={500}
                  className="px-8 py-4 border-2 border-black text-black hover:bg-black hover:text-white transition-all duration-200 cursor-pointer font-medium flex items-center justify-center w-fit"
                >
                  Get In Touch
                </ScrollLink>
              </motion.div>
            </div>

            {/* Profile Image */}
            <motion.div 
              variants={itemVariants}
              className="w-full lg:w-2/5 flex justify-center lg:justify-end"
            >
              <div
                className="relative w-72 h-72 md:w-80 md:h-80 bg-white p-2 border border-gray-200 hover:shadow-md transition-all duration-300"
                style={{
                  borderRadius: '38% 62% 55% 45% / 44% 36% 64% 56%',
                  animation: 'heroFloat 4.2s ease-in-out infinite'
                }}
              >
                <img
                  src={profileImage}
                  alt="Ali Mahmood Rana"
                  className="w-full h-full object-cover"
                  style={{ borderRadius: '36% 64% 48% 52% / 52% 38% 62% 48%' }}
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-0 left-12 scroll-indicator"
          >
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              className="flex items-center text-gray-500 hover:text-black transition-colors cursor-pointer group"
            >
              <div className="flex flex-col items-center">
                <div className="w-[1px] h-16 bg-gray-300 mb-4 group-hover:bg-black transition-colors"></div>
                <ChevronDown className="w-4 h-4" />
              </div>
              <span className="text-sm font-medium ml-4 mono">SCROLL</span>
            </ScrollLink>
          </motion.div>

        </section>
      </div>
    </>
  );
};

export default Hero;