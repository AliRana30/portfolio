import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Code, ArrowUpRight, MessageCircle } from 'lucide-react';

const Socials = () => {
  const socialLinks = [
    {
      icon: Mail,
      title: "Email",
      subtitle: "Let's discuss your project",
      value: "alimahmoodrana82@gmail.com",
      link: "https://mail.google.com/mail/?view=cm&to=alimahmoodrana82@gmail.com",
      description: "Send me an email"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      subtitle: "Connect professionally",
      value: "Ali Mahmood Rana",
      link: "https://www.linkedin.com/in/ali-mahmood-rana-7093322a7/",
      description: "Let's connect"
    },
    {
      icon: Github,
      title: "GitHub",
      subtitle: "Explore my repositories",
      value: "AliRana30",
      link: "https://github.com/AliRana30",
      description: "Check out my code"
    },
    {
      icon: Code,
      title: "LeetCode",
      subtitle: "View coding solutions",
      value: "AliRana28",
      link: "https://leetcode.com/u/AliRana28/",
      description: "See my problem solving"
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
          <div className="absolute top-32 left-20 w-64 h-64 border border-gray-100 rotate-45"></div>
          <div className="absolute bottom-40 right-16 w-40 h-40 border border-gray-100 rounded-full"></div>
          <div className="absolute top-1/2 right-1/3 w-2 h-24 bg-gray-100 rotate-12"></div>
        </div>

        <section id="socials" className="py-24 relative z-10">
          <div className="container mx-auto px-8 max-w-6xl">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-[1px] bg-black"></div>
                <span className="text-sm font-medium text-gray-500 tracking-wider uppercase mono">Get In Touch</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-light leading-tight mb-8">
                <span className="font-extralight text-gray-700">Let's Connect &</span>
                <br />
                <span className="font-bold text-black">Collaborate</span>
              </h2>
              
              <p className="text-lg text-gray-600 font-light max-w-3xl leading-relaxed">
                Ready to bring your ideas to life? I'm always excited to work on innovative projects and connect with amazing people. Let's create something incredible together.
              </p>
            </motion.div>
            
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
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
                    className="group bg-white border border-gray-200 hover:border-black p-8 transition-all duration-300 overflow-hidden"
                  >
                    <div className="text-center space-y-4">
                      <div className="w-16 h-16 mx-auto bg-gray-100 group-hover:bg-black transition-colors duration-300 flex items-center justify-center">
                        <IconComponent className="text-gray-700 group-hover:text-white w-6 h-6 transition-colors duration-300" />
                      </div>
                      
                      <h3 className="text-lg font-bold text-black transition-colors duration-300">
                        {social.title}
                      </h3>
                      
                      <p className="text-sm text-gray-500 font-medium">
                        {social.subtitle}
                      </p>
                      
                      <p className="text-gray-700 font-semibold text-sm mono">
                        {social.value}
                      </p>
                      
                      <div className="flex items-center justify-center gap-2 text-sm text-gray-600 group-hover:text-black transition-colors duration-300 group-hover:gap-3 transition-all duration-300">
                        <span>{social.description}</span>
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
                      </div>
                    </div>
                  </motion.a>
                );
              })}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              viewport={{ once: true }}
              className="mt-20"
            >
              <div className="bg-gray-50 border border-gray-200 p-12 text-center">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-lg font-semibold text-gray-700">Open to New Opportunities</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-black mb-6">
                  Ready to Start Your Next Project?
                </h3>
                <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8 font-light">
                  Whether you need a full-stack developer, want to collaborate on an exciting project, 
                  or just want to say hello - I'd love to hear from you.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://mail.google.com/mail/?view=cm&to=alimahmoodrana82@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 bg-black text-white hover:bg-gray-800 transition-colors duration-300 font-medium flex items-center justify-center gap-2"
                  >
                    <Mail className="w-5 h-5" />
                    Send Email
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ali-mahmood-rana-7093322a7/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 bg-white border-2 border-black text-black hover:bg-black hover:text-white transition-all duration-300 font-medium flex items-center justify-center gap-2"
                  >
                    <Linkedin className="w-5 h-5" />
                    Connect on LinkedIn
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Footer note */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1 }}
              viewport={{ once: true }}
              className="mt-12 text-center"
            >
              <div className="flex items-center justify-center gap-4">
                <div className="w-8 h-[1px] bg-gray-300"></div>
                <p className="text-sm text-gray-500 mono">Available for freelance work</p>
                <div className="w-8 h-[1px] bg-gray-300"></div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Socials;