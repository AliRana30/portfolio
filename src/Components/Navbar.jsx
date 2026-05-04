import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { FaGithub, FaLinkedin, FaEnvelope, FaBars, FaTimes, FaDownload } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
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
    { name: "Open Source", to: "openSource" },
    { name: "Education", to: "education" },
    { name: "Certifications", to: "certifications" },
    { name: "Socials", to: "socials" }
  ];

  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/AliRana30", label: "GitHub" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/ali-mahmood-rana-7093322a7/", label: "LinkedIn" },
    { icon: FaEnvelope, href: "https://mail.google.com/mail/?view=cm&to=alimahmoodrana82@gmail.com", label: "Email" }
  ];

  return (
    <>
      <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled
        ? 'bg-primary/80 backdrop-blur-xl border-b border-subtle shadow-lg'
        : 'bg-transparent'
        }`}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center h-20 relative">
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-7 lg:gap-9">
              {navLinks.map((link) => (
                <ScrollLink
                  key={link.name}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-80}
                  onSetActive={() => setActiveSection(link.to)}
                  className={`text-xs font-semibold uppercase tracking-widest px-2 py-1 transition-all duration-300 cursor-pointer hover:text-primary ${activeSection === link.to
                    ? 'text-primary border-b border-primary/40'
                    : 'text-secondary'
                    }`}
                >
                  {link.name}
                </ScrollLink>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-6">

              <div className="w-[1px] h-6 bg-border-subtle" />

              <button
                onClick={handleResumeDownload}
                className="flex items-center gap-2 px-6 py-2.5 rounded-full border border-subtle bg-elevated text-primary hover:bg-primary transition-all duration-300 font-bold text-[10px] uppercase tracking-widest"
              >
                <FaDownload className="w-2.5 h-2.5" />
                <span>CV</span>
              </button>
            </div>

            {/* Mobile Navigation Toggle */}
            <div className="lg:hidden flex items-center gap-4">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-secondary hover:text-primary transition-colors duration-200"
                aria-label="Toggle navigation menu"
              >
                {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`lg:hidden transition-all duration-500 ease-[0.22, 1, 0.36, 1] ${isOpen
          ? 'max-h-screen opacity-100'
          : 'max-h-0 opacity-0 overflow-hidden'
          }`}>
          <div className="bg-surface border-t border-subtle shadow-2xl h-screen">
            <div className="px-8 py-12 space-y-6">
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
                  className={`block text-2xl font-bold transition-all duration-300 cursor-pointer ${activeSection === link.to
                    ? 'text-primary translate-x-2'
                    : 'text-secondary hover:text-primary hover:translate-x-1'
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
                className="w-full flex items-center justify-center gap-3 px-6 py-5 mt-10 border border-default bg-elevated text-primary hover:bg-primary transition-all duration-300 font-bold rounded-xl text-xs uppercase tracking-widest shadow-sm"
              >
                <FaDownload className="w-4 h-4" />
                <span>Download Resume</span>
              </button>

              <div className="pt-12 border-t border-subtle">
                <div className="flex justify-start space-x-8">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className="text-secondary hover:text-primary transition-all duration-300"
                      >
                        <IconComponent className="w-7 h-7" />
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