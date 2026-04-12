import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-gray-50 py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="mb-4 text-gray-700">© {currentYear} Ali Mahmood. All rights reserved.</p>
        <div className="flex justify-center space-x-6">
          <a href="https://www.linkedin.com/in/ali-mahmood-rana-7093322a7/" target="_blank" rel="noopener noreferrer" className="text-gray-700 transition-all duration-200 hover:-translate-y-1 hover:text-black" title="LinkedIn">
            <FaLinkedin size={24} />
          </a>
          <a href="https://github.com/AliRana30" target="_blank" rel="noopener noreferrer" className="text-gray-700 transition-all duration-200 hover:-translate-y-1 hover:text-black" title="GitHub">
            <FaGithub size={24} />
          </a>
          <a href="https://leetcode.com/u/AliRana28/" target="_blank" rel="noopener noreferrer" className="text-gray-700 transition-all duration-200 hover:-translate-y-1 hover:text-black" title="LeetCode">
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226c-.5.505-.954.909-1.382 1.27-.031 0-.032.027-.061.027-.106-6.597-5.107-10.905-10.14-10.905C903.6 0 0 7.267 0 14.634c0 3.592 1.091 7.9 7.116 7.9h4.924v-7.996h-4.924V8.231h4.924V5.51c.046-4.467 3.461-8.449 7.48-8.449 2.101 0 3.454.228 4.308.335v5.047h-.031c-.245 0-.609.022-.857.022-2.27 0-2.805 1.058-2.805 2.602v3.528h5.51l-.587 3.851h-4.923v8.023c8.217-.062 11.192-5.694 11.192-13.532 0-7.995-5.571-13.736-12.46-13.736z" />
            </svg>
          </a>
          <a href="mailto:alimahmoodrana82@gmail.com" className="text-gray-700 transition-all duration-200 hover:-translate-y-1 hover:text-black" title="Email">
            <FaEnvelope size={24} />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
