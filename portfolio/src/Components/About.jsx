import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Code, Database, Globe, ArrowRight, User, Award, Coffee, Clock } from 'lucide-react';

const About = () => {
  const stats = [
    { number: "5+", label: "Projects", icon: <Code className="w-5 h-5" /> },
    { number: "1+", label: "Years", icon: <Clock className="w-5 h-5" /> },
    { number: "100%", label: "Delivery", icon: <Award className="w-5 h-5" /> },
    { number: "24/7", label: "Support", icon: <Coffee className="w-5 h-5" /> }
  ];

  const techHighlights = [
    { 
      name: "Frontend", 
      icon: <Code className="w-6 h-6" />, 
      description: "React, JavaScript, Tailwind CSS"
    },
    { 
      name: "Backend", 
      icon: <Database className="w-6 h-6" />, 
      description: "Node.js, Express, MongoDB"
    },
    { 
      name: "Full Stack", 
      icon: <Globe className="w-6 h-6" />, 
      description: "MERN Stack Development"
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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
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
          <div className="absolute top-40 right-32 w-48 h-48 border border-gray-100"></div>
          <div className="absolute bottom-32 left-16 w-24 h-24 border border-gray-100 rounded-full"></div>
          <div className="absolute top-1/3 left-1/3 w-1 h-16 bg-gray-100 rotate-45"></div>
        </div>

        <section id="about" className="py-24 relative z-10">
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
                <span className="text-sm font-medium text-gray-500 tracking-wider uppercase mono">About Me</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-light leading-tight mb-6">
                <span className="font-extralight text-gray-700">Crafting</span>
                <br />
                <span className="font-bold text-black">Digital Experiences</span>
              </h2>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Left Column - Content */}
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-12"
              >
                <motion.div variants={itemVariants} className="space-y-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 border border-gray-200 mono">
                    <User className="w-4 h-4 text-gray-600" />
                    <span className="text-sm text-gray-700">MERN Stack Developer</span>
                  </div>
                  
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p className="text-lg font-light">
                      I'm a passionate Full Stack Web Developer specializing in the MERN stack. With a strong foundation in MongoDB, Express.js, React, and Node.js, I build responsive and dynamic web applications.
                    </p>
                    <p className="text-lg font-light">
                      My journey in web development started with curiosity for creating interactive interfaces, which evolved into developing full-featured applications. I enjoy solving complex problems and learning new technologies.
                    </p>
                  </div>
                </motion.div>

                {/* Skills Grid */}
                <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
                  {["Problem Solving", "Team Work", "Clean Code", "User Focus"].map((skill, index) => (
                    <div key={skill} className="flex items-center gap-3 text-gray-700">
                      <div className="w-1 h-1 bg-black"></div>
                      <span className="font-medium text-sm">{skill}</span>
                    </div>
                  ))}
                </motion.div>
                
                {/* Social Links */}
                <motion.div variants={itemVariants} className="flex gap-6 pt-8">
                  <a
                    href="https://github.com/Alirana30"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-6 py-3 bg-black text-white hover:bg-gray-800 transition-colors duration-200 font-medium"
                  >
                    <FaGithub />
                    <span>GitHub</span>
                  </a>
                  
                  <a
                    href="https://www.linkedin.com/in/ali-mahmood-rana-7093322a7/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-6 py-3 border-2 border-black text-black hover:bg-black hover:text-white transition-all duration-200 font-medium"
                  >
                    <FaLinkedin />
                    <span>LinkedIn</span>
                  </a>
                </motion.div>
              </motion.div>

              {/* Right Column - Stats & Tech */}
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-8"
              >
                {/* Stats Grid */}
                <motion.div variants={itemVariants} className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <div
                      key={stat.label}
                      className="text-center p-6 border border-gray-200 hover:border-black transition-colors duration-200"
                    >
                      <div className="text-gray-700 mb-3 flex justify-center">
                        {stat.icon}
                      </div>
                      <div className="text-2xl font-bold text-black mb-2 mono">
                        {stat.number}
                      </div>
                      <div className="text-sm text-gray-600 font-medium">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </motion.div>

                {/* Tech Highlights */}
                <motion.div variants={itemVariants} className="space-y-4">
                  <h3 className="text-lg font-semibold text-black mb-6">Technology Stack</h3>
                  {techHighlights.map((tech, index) => (
                    <div
                      key={tech.name}
                      className="flex items-start gap-4 p-4 border border-gray-200 hover:border-black transition-colors duration-200"
                    >
                      <div className="p-2 bg-gray-100 text-gray-700">
                        {tech.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-black mb-1">
                          {tech.name}
                        </h4>
                        <p className="text-gray-600 text-sm font-light">
                          {tech.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </motion.div>

                {/* CTA */}
                <motion.div variants={itemVariants} className="pt-8">
                  <a 
                    href="#projects"
                    className="inline-flex items-center gap-3 text-black hover:gap-5 transition-all duration-300 font-medium group"
                  >
                    <span>View My Work</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </a>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;