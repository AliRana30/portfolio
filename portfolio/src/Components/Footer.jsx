import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <div>
        <footer className="py-8 bg-gray-800 dark:bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4">© {new Date().getFullYear()} Ali Mahmood. All rights reserved.</p>
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
              <FaGithub size={24} />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
              <FaLinkedin size={24} />
            </a>
            <a href="mailto:contact@myportfolio.com" className="hover:text-blue-400 transition-colors">
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
