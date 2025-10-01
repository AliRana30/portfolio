import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Code, ArrowUpRight } from 'lucide-react';

const Socials = () => {
  const socialLinks = [
    {
      icon: Mail,
      title: "Email",
      subtitle: "Let's discuss your project",
      value: "alimahmoodrana82@gmail.com",
      link: "https://mail.google.com/mail/?view=cm&to=alimahmoodrana82@gmail.com",
      description: "Send me an email",
      iconColor: "text-red-500",
      hoverBg: "group-hover:bg-red-500"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      subtitle: "Connect professionally",
      value: "Ali Mahmood Rana",
      link: "https://www.linkedin.com/in/ali-mahmood-rana-7093322a7/",
      description: "Let's connect",
      iconColor: "text-blue-600",
      hoverBg: "group-hover:bg-blue-600"
    },
    {
      icon: Github,
      title: "GitHub",
      subtitle: "Explore my repositories",
      value: "AliRana30",
      link: "https://github.com/AliRana30",
      description: "Check out my code",
      iconColor: "text-gray-800",
      hoverBg: "group-hover:bg-gray-800"
    },
    {
      icon: Code,
      title: "LeetCode",
      subtitle: "View coding solutions",
      value: "AliRana28",
      link: "https://leetcode.com/u/AliRana28/",
      description: "See my problem solving",
      iconColor: "text-orange-500",
      hoverBg: "group-hover:bg-orange-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
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
      
      <div className="relative bg-white">
        {/* Minimal geometric background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-32 left-8 md:left-20 w-48 md:w-64 h-48 md:h-64 border border-gray-100 rotate-45"></div>
          <div className="absolute bottom-40 right-8 md:right-16 w-32 md:w-40 h-32 md:h-40 border border-gray-100 rounded-full"></div>
          <div className="absolute top-1/2 right-1/3 w-2 h-16 md:h-24 bg-gray-100 rotate-12"></div>
        </div>

        <section id="socials" className="py-12 md:py-24 relative z-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12 md:mb-20"
            >
              <div className="flex items-center gap-4 mb-6 md:mb-8">
                <div className="w-8 md:w-12 h-[1px] bg-black"></div>
                <span className="text-xs md:text-sm font-medium text-gray-500 tracking-wider uppercase mono">Get In Touch</span>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-light leading-tight mb-8">
                <span className="font-extralight text-gray-700">Let's Connect &</span>
                <br />
                <span className="font-bold text-black">Collaborate</span>
              </h2>
            </motion.div>
            
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
            >
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={cardVariants}
                    className="group bg-white border border-gray-200 hover:border-black p-6 md:p-8 transition-all duration-300 overflow-hidden"
                  >
                    <div className="text-center space-y-3 md:space-y-4">
                      <div className={`w-14 md:w-16 h-14 md:h-16 mx-auto bg-gray-100 ${social.hoverBg} transition-colors duration-300 flex items-center justify-center`}>
                        <IconComponent className={`${social.iconColor} group-hover:text-white w-6 h-6 transition-colors duration-300`} />
                      </div>
                      
                      <h3 className="text-base md:text-lg font-bold text-black transition-colors duration-300">
                        {social.title}
                      </h3>
                      
                      <p className="text-xs md:text-sm text-gray-500 font-medium">
                        {social.subtitle}
                      </p>
                      
                      <p className="text-gray-700 font-semibold text-xs md:text-sm mono break-all px-2">
                        {social.value}
                      </p>
                      
                      <div className="flex items-center justify-center gap-2 text-xs md:text-sm text-gray-600 group-hover:text-black transition-colors duration-300 group-hover:gap-3 transition-all duration-300">
                        <span>{social.description}</span>
                        <ArrowUpRight className="w-4 h-4 flex-shrink-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
                      </div>
                    </div>
                  </motion.a>
                );
              })}
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Socials;