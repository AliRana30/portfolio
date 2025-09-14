import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { ChevronDown, Code, Database, Globe } from 'lucide-react';

const Hero = () => {
  const profileImage = "me.jpg";
  
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  
  const roles = ['Full Stack Developer', 'MERN Stack Devloper',  'Problem Solver'];
  
  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 100 : 150;
    
    const timeout = setTimeout(() => {
      if (!isDeleting && currentIndex < currentRole.length) {
        setDisplayedText(currentRole.substring(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      } else if (isDeleting && currentIndex > 0) {
        setDisplayedText(currentRole.substring(0, currentIndex - 1));
        setCurrentIndex(currentIndex - 1);
      } else if (!isDeleting && currentIndex === currentRole.length) {
        setTimeout(() => setIsDeleting(true), 1500);
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
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const techStack = [
    { icon: <Globe className="w-5 h-5" />, name: "React" },
    { icon: <Database className="w-5 h-5" />, name: "MongoDB" },
    { icon: <Code className="w-5 h-5" />, name: "Node.js" }
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Simplified background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-blue-900/20 dark:to-indigo-900/30" />
      
      <section 
        id="home" 
        className="pt-8 md:pt-0 min-h-screen flex items-center justify-center relative z-10"
      >
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="container mx-auto px-6 py-12 flex flex-col lg:flex-row items-center justify-between relative z-10 max-w-7xl"
        >
          {/* Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0 lg:pr-8 mt-10">
            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              <span className="text-gray-900 dark:text-white">Hi, I'm </span>
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Ali
              </span>
              <br />
              <span className="text-gray-800 dark:text-gray-200 text-3xl md:text-5xl lg:text-5xl min-h-[1.2em] inline-block">
                {displayedText}
                <span className="animate-pulse text-blue-600">|</span>
              </span>
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl leading-relaxed mx-auto lg:mx-0"
            >
              I craft exceptional digital experiences using the MERN stack, turning innovative ideas into scalable web applications with modern design and seamless functionality.
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-3 justify-center lg:justify-start mb-10"
            >
              {techStack.map((tech, index) => (
                <div
                  key={tech.name}
                  className="flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full border border-gray-200/50 dark:border-gray-700/50 hover:border-blue-400/50 transition-colors duration-300 shadow-sm"
                >
                  <span className="text-blue-600 dark:text-blue-400">{tech.icon}</span>
                  <span className="text-gray-800 dark:text-gray-200 text-sm font-medium">{tech.name}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <ScrollLink
                to="projects"
                smooth={true}
                duration={500}
                className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 cursor-pointer font-semibold shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <span>View Projects</span>
                <span>→</span>
              </ScrollLink>
              
              <ScrollLink
                to="socials"
                smooth={true}
                duration={500}
                className="px-8 py-4 border-2 border-blue-600/50 dark:border-blue-400/50 text-blue-600 dark:text-blue-400 rounded-xl hover:bg-blue-600/10 dark:hover:bg-blue-400/10 hover:border-blue-600 dark:hover:border-blue-400 transition-all duration-300 cursor-pointer font-semibold backdrop-blur-sm flex items-center justify-center"
              >
                Contact Me
              </ScrollLink>
            </motion.div>
          </div>

          {/* Profile Image - Better positioned */}
          <motion.div 
            variants={itemVariants}
            className="w-full lg:w-1/2 flex justify-center lg:justify-center"
          >
            <div className="relative">
              {/* Simple profile image container */}
              <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-2xl bg-white dark:bg-gray-800 flex items-center justify-center">
                <img
                  src={profileImage}
                  alt="Ali - Full Stack Developer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            className="flex flex-col items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
          >
            <span className="text-sm mb-2 font-medium">Scroll down</span>
            <ChevronDown className="w-5 h-5" />
          </ScrollLink>
        </motion.div>
      </section>
    </div>
  );
};

export default Hero;