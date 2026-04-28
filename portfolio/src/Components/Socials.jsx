import { SiLinkedin, SiGithub, SiLeetcode, SiGmail } from 'react-icons/si';
import { ArrowUpRight, MessageSquare, Share2, Terminal, Code2 } from 'lucide-react';

const Socials = () => {
  const socialLinks = [
    {
      icon: SiGmail,
      title: "Gmail",
      subtitle: "Professional Inquiries",
      value: "alimahmoodrana82@gmail.com",
      link: "mailto:alimahmoodrana82@gmail.com",
      description: "Send an email",
      color: '#EA4335',
      bgColor: 'bg-[#EA4335]10'
    },
    {
      icon: SiLinkedin,
      title: "LinkedIn",
      subtitle: "Professional Network",
      value: "Ali Mahmood Rana",
      link: "https://www.linkedin.com/in/ali-mahmood-rana-7093322a7/",
      description: "Connect with me",
      color: '#0A66C2',
      bgColor: 'bg-[#0A66C2]10'
    },
    {
      icon: SiGithub,
      title: "GitHub",
      subtitle: "Open Source Projects",
      value: "AliRana30",
      link: "https://github.com/AliRana30",
      description: "Explore my code",
      color: '#181717',
      bgColor: 'bg-gray-100'
    },
    {
      icon: SiLeetcode,
      title: "LeetCode",
      subtitle: "Algorithmic Prowess",
      value: "AliRana28",
      link: "https://leetcode.com/u/AliRana28/",
      description: "View my solutions",
      color: '#FFA116',
      bgColor: 'bg-[#FFA116]10'
    }
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
      
      <div className="relative bg-white">
        {/* Minimal geometric background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-32 left-8 md:left-20 w-48 md:w-64 h-48 md:h-64 border border-gray-100 rotate-45"></div>
          <div className="absolute bottom-40 right-8 md:right-16 w-32 md:w-40 h-32 md:h-40 border border-gray-100 rounded-full"></div>
          <div className="absolute top-1/2 right-1/3 w-2 h-16 md:h-24 bg-gray-100 rotate-12"></div>
        </div>

        <section id="socials" className="py-12 md:py-24 relative z-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="mb-12 md:mb-20">
              <div className="flex items-center gap-4 mb-6 md:mb-8">
                <div className="w-8 md:w-12 h-[1px] bg-black"></div>
                <span className="text-xs md:text-sm font-medium text-gray-500 tracking-wider uppercase mono">Get In Touch</span>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-light leading-tight mb-8">
                <span className="font-extralight text-gray-700">Let's Connect &</span>
                <br />
                <span className="font-bold text-black">Collaborate</span>
              </h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative bg-white border border-gray-100 p-8 transition-all duration-300 overflow-hidden"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = social.color;
                      e.currentTarget.style.boxShadow = `0 15px 30px -5px ${social.color}20`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = '#f3f4f6';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <div className="relative z-10 flex flex-col items-center text-center">
                      <div className={`w-16 h-16 mb-6 flex items-center justify-center rounded-2xl transition-all duration-300 group-hover:bg-transparent ${social.bgColor}`}>
                        <IconComponent size={32} style={{ color: social.color }} />
                      </div>
                      
                      <h3 className="text-xl font-bold text-black mb-2">
                        {social.title}
                      </h3>
                      
                      <p className="text-sm text-gray-500 mb-6 font-medium max-w-[150px]">
                        {social.subtitle}
                      </p>
                      
                      <div className="w-full h-[1px] bg-gray-100 mb-6 transition-colors group-hover:bg-gray-200"></div>

                      <div className="flex items-center justify-center gap-2 text-sm font-semibold text-gray-400 group-hover:text-black transition-all duration-300">
                        <span className="mono uppercase tracking-tighter">Connect</span>
                        <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:rotate-45" />
                      </div>
                    </div>

                    {/* Background glow effect */}
                    <div 
                      className="absolute -bottom-10 -right-10 w-24 h-24 blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                      style={{ backgroundColor: social.color }}
                    ></div>
                  </a>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Socials;