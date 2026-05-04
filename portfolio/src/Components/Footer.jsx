import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-subtle bg-primary py-12">
      <div className="container mx-auto px-4 text-center">
        <p className="mb-6 text-secondary font-light">© {currentYear} Ali Mahmood. All rights reserved.</p>
        <div className="flex justify-center space-x-8">
          <a href="https://www.linkedin.com/in/ali-mahmood-rana-7093322a7/" target="_blank" rel="noopener noreferrer" className="text-secondary transition-all duration-300 hover:-translate-y-1 hover:text-primary" title="LinkedIn">
            <FaLinkedin size={22} />
          </a>
          <a href="https://github.com/AliRana30" target="_blank" rel="noopener noreferrer" className="text-secondary transition-all duration-300 hover:-translate-y-1 hover:text-primary" title="GitHub">
            <FaGithub size={22} />
          </a>
          <a href="https://leetcode.com/u/AliRana28/" target="_blank" rel="noopener noreferrer" className="text-secondary transition-all duration-300 hover:-translate-y-1 hover:text-primary" title="LeetCode">
            <SiLeetcode size={22} />
          </a>
          <a href="mailto:alimahmoodrana82@gmail.com" className="text-secondary transition-all duration-300 hover:-translate-y-1 hover:text-primary" title="Email">
            <FaEnvelope size={22} />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
