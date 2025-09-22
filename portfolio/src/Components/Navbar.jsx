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

  const handleResumeDownload = () => {
    const resumeUrl = "/Ali Mahmood's CV.pdf";
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = "Ali Mahmood's CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const navLinks = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Projects", to: "projects" },
    { name: "Certifications", to: "certifications" },
    { name: "Contact", to: "socials" }
  ];

  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/AliRana30", label: "GitHub" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/ali-mahmood-rana-7093322a7/", label: "LinkedIn" },
    { icon: FaEnvelope, href: "https://mail.google.com/mail/?view=cm&to=alimahmoodrana82@gmail.com", label: "Email" }
  ];

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
      
      <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-sm border-b border-gray-200' 
          : 'bg-white/90 backdrop-blur-sm'
      }`}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <ScrollLink
                to="home"
                smooth={true}
                duration={500}
                className="cursor-pointer"
              >
                <h1 className="text-2xl font-bold text-black hover:text-gray-700 transition-colors mono">
                  Ali.dev
                </h1>
              </ScrollLink>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <ScrollLink
                  key={link.name}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-80}
                  onSetActive={() => setActiveSection(link.to)}
                  className={`text-sm font-medium transition-all duration-200 cursor-pointer hover:text-black ${
                    activeSection === link.to
                      ? 'text-black border-b-2 border-black pb-1'
                      : 'text-gray-600'
                  }`}
                >
                  {link.name}
                </ScrollLink>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-4">
              <button
                onClick={handleResumeDownload}
                className="flex items-center gap-2 px-4 py-3 bg-black text-white hover:bg-gray-800 transition-colors duration-200 font-medium text-sm"
              >
                <FaDownload className="w-2 h-2" />
                <span>Resume</span>
              </button>

              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="p-2 text-gray-600 hover:text-black transition-colors duration-200"
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
                className="p-2 text-gray-700 hover:text-black transition-colors duration-200"
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
          <div className="bg-white border-t border-gray-200">
            <div className="px-6 py-6 space-y-4">
              {navLinks.map((link) => (
                <ScrollLink
                  key={link.name}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-80}
                  onClick={() => setIsOpen(false)}
                  onSetActive={() => setActiveSection(link.to)}
                  className={`block px-4 py-3 text-base font-medium transition-colors duration-200 cursor-pointer border-l-4 ${
                    activeSection === link.to
                      ? 'text-black border-black bg-gray-50'
                      : 'text-gray-600 border-transparent hover:text-black hover:border-gray-300'
                  }`}
                >
                  {link.name}
                </ScrollLink>
              ))}
              
              <button
                onClick={() => {
                  handleResumeDownload();
                  setIsOpen(false);
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 mt-6 bg-black text-white hover:bg-gray-800 transition-colors duration-200 font-medium"
              >
                <FaDownload className="w-4 h-4" />
                <span>Download Resume</span>
              </button>
              
              <div className="pt-4 border-t border-gray-200">
                <p className="text-sm font-medium text-gray-500 mb-4 mono">Connect</p>
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
                        className="p-3 text-gray-600 hover:text-black hover:bg-gray-50 transition-all duration-200"
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
    </>
  );
};

export default Navbar;