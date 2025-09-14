import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Code } from 'lucide-react';

const Socials = () => {
  const socialLinks = [
    {
      icon: Mail,
      title: "Email",
      subtitle: "Let's discuss your project",
      value: "alimahmoodrana82@gmail.com",
      link: "https://mail.google.com/mail/?view=cm&to=alimahmoodrana82@gmail.com",
      color: "from-red-500 to-red-600",
      hoverColor: "hover:shadow-red-200",
      description: "Send me an email"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      subtitle: "Connect professionally",
      value: "Ali Mahmood Rana",
      link: "https://www.linkedin.com/in/ali-mahmood-rana-7093322a7/",
      color: "from-blue-600 to-blue-700",
      hoverColor: "hover:shadow-blue-200",
      description: "Let's connect on LinkedIn"
    },
    {
      icon: Github,
      title: "GitHub",
      subtitle: "Explore my repositories",
      value: "AliRana30",
      link: "https://github.com/AliRana30",
      color: "from-gray-700 to-gray-900",
      hoverColor: "hover:shadow-gray-200",
      description: "Check out my code"
    },
    {
      icon: Code,
      title: "LeetCode",
      subtitle: "View coding solutions",
      value: "AliRana28",
      link: "https://leetcode.com/u/AliRana28/",
      color: "from-orange-500 to-orange-600",
      hoverColor: "hover:shadow-orange-200",
      description: "See my problem solving"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="socials" className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-pink-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Let's Connect & Collaborate
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 max-w-3xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? I'm always excited to work on innovative projects and connect with amazing people. 
            Let's create something incredible together!
          </p>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 100 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 mx-auto rounded-full"
          />
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
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
                whileHover={{ y: -10, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl ${social.hoverColor} hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700 overflow-hidden`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${social.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                <div className="relative z-10 text-center">
                  <motion.div 
                    className={`w-20 h-20 mx-auto mb-4 bg-gradient-to-br ${social.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}
                    whileHover={{ rotate: 5 }}
                  >
                    <IconComponent className="text-white text-2xl" />
                  </motion.div>
                  
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                    {social.title}
                  </h3>
                  
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-3 font-medium">
                    {social.subtitle}
                  </p>
                  
                  <p className="text-gray-700 dark:text-gray-300 font-semibold mb-4">
                    {social.value}
                  </p>
                  
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    <span>{social.description}</span>
                    <motion.svg 
                      className="w-4 h-4" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </motion.svg>
                  </div>
                </div>

                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/10 to-transparent rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.a>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-2xl border border-gray-100 dark:border-gray-700 max-w-4xl mx-auto">
            <motion.div
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-lg font-semibold text-gray-700 dark:text-gray-300">Open to New Opportunities</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-4">
                Ready to Start Your Next Project?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
                Whether you need a full-stack developer, want to collaborate on an exciting project, 
                or just want to say hello - I'd love to hear from you!
              </p>
            </motion.div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://mail.google.com/mail/?view=cm&to=alimahmoodrana82@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <Mail className="text-lg" />
                Send Email
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/ali-mahmood-rana-7093322a7/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 border-2 border-blue-600 dark:border-blue-400 rounded-xl hover:bg-blue-50 dark:hover:bg-gray-600 transition-all duration-300 font-semibold flex items-center justify-center gap-2"
              >
                <Linkedin className="text-lg" />
                Connect on LinkedIn
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Socials;