import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { ChevronDown, Code, Database, Globe, ArrowRight } from 'lucide-react';

const Hero = () => {
  const profileImage = "me.jpg";
  
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
      `}</style>
      
      <div className="relative min-h-screen bg-white mt-10">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-64 h-64 border border-gray-100 rotate-45"></div>
          <div className="absolute bottom-40 left-10 w-32 h-32 border border-gray-100 rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-2 h-20 bg-gray-100 rotate-12"></div>
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
                <h1 className="text-5xl md:text-6xl lg:text-5xl font-light leading-[0.9] mb-4">
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
              <div className="relative">
                <div className="relative w-72 h-72 md:w-80 md:h-80 overflow-hidden bg-gray-100 shadow-2xl">
                  <div className="absolute inset-0 border-8 border-white z-10"></div>
                  <img
                    src={profileImage}
                    alt="Ali - Full Stack Developer"
                    className="w-full h-full object-cover hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                
              </div>
            </motion.div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-0 left-12"
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