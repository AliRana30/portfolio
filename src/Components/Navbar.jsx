import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { FaGithub, FaLinkedin, FaEnvelope, FaBars, FaTimes, FaDownload } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle resume download
  const handleResumeDownload = () => {
    const resumeUrl = "/Ali Mahmood's CV.pdf";
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = "Ali Mahmood's CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Navigation links
  const navLinks = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Projects", to: "projects" },
    { name: "Certifications", to: "certifications" },
    { name: "Socials", to: "socials" }
  ];

  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/AliRana30", label: "GitHub" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/ali-mahmood-rana-7093322a7/", label: "LinkedIn" },
    { icon: FaEnvelope, href: "https://mail.google.com/mail/?view=cm&to=alimahmoodrana82@gmail.com", label: "Email" }
  ];

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg border-b border-gray-200/20 dark:border-gray-700/20' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <ScrollLink
              to="home"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent hover:from-purple-600 hover:via-pink-600 hover:to-red-600 transition-all duration-300">
                Ali Mahmood
              </h1>
            </ScrollLink>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {navLinks.map((link) => (
                <ScrollLink
                  key={link.name}
                  to={link.to}
                  smooth={true}
                  duration={1500}
                  spy={true}
                  offset={-70}
                  onSetActive={() => setActiveSection(link.to)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                    activeSection === link.to
                      ? scrolled
                        ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30'
                        : 'text-gray-900 dark:text-white bg-white/20 backdrop-blur-sm'
                      : scrolled
                        ? 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800/50'
                        : 'text-gray-800 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-white/20 dark:hover:bg-white/10 backdrop-blur-sm'
                  }`}
                >
                  {link.name}
                </ScrollLink>
              ))}
            </div>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-3">
            {/* CV Download Button */}
            <button
              onClick={handleResumeDownload}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                scrolled
                  ? 'text-white bg-blue-600 hover:bg-blue-700 shadow-md hover:shadow-lg'
                  : 'text-white bg-blue-600/90 hover:bg-blue-700 backdrop-blur-sm shadow-md hover:shadow-lg'
              }`}
            >
              <FaDownload className="w-4 h-4" />
              <span>CV</span>
            </button>

            {/* Social Links */}
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`p-2 rounded-full transition-all duration-300 hover:scale-105 ${
                    scrolled
                      ? 'text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30'
                      : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-white/20 dark:hover:bg-white/10 backdrop-blur-sm'
                  }`}
                >
                  <IconComponent className="w-5 h-5" />
                </a>
              );
            })}
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg transition-all duration-300 ${
                scrolled
                  ? 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800/50'
                  : 'text-gray-800 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-white/20 dark:hover:bg-white/10 backdrop-blur-sm'
              }`}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${
        isOpen 
          ? 'max-h-screen opacity-100' 
          : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-t border-gray-200/20 dark:border-gray-700/20 shadow-lg">
          <div className="px-4 py-6 space-y-3">
            {navLinks.map((link) => (
              <ScrollLink
                key={link.name}
                to={link.to}
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
                onClick={() => setIsOpen(false)}
                onSetActive={() => setActiveSection(link.to)}
                className={`block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 cursor-pointer border-l-4 ${
                  activeSection === link.to
                    ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 border-blue-600 dark:border-blue-400'
                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800/50 border-transparent hover:border-blue-300 dark:hover:border-blue-500'
                }`}
              >
                {link.name}
              </ScrollLink>
            ))}
            
            {/* Mobile Resume Download */}
            <button
              onClick={() => {
                handleResumeDownload();
                setIsOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 mt-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors duration-300 font-medium"
            >
              <FaDownload className="w-4 h-4" />
              <span>Download Resume</span>
            </button>
            
            {/* Mobile Social Links */}
            <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3 px-4">Connect with me</p>
              <div className="flex justify-center space-x-6">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="p-3 rounded-full text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all duration-300"
                    >
                      <IconComponent className="w-6 h-6" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;