import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Code, Database, Globe, Rocket, Heart, Coffee, Monitor } from 'lucide-react';

const About = () => {
  const stats = [
    { number: "5+", label: "Projects Completed", icon: <Rocket className="w-6 h-6" /> },
    { number: "1+", label: "Years Experience", icon: <Code className="w-6 h-6" /> },
    { number: "On time", label: "Project Delivery", icon: <Heart className="w-6 h-6" /> },
    { number: "24/7", label: "Available Support", icon: <Coffee className="w-6 h-6" /> }
  ];

  const techHighlights = [
    { 
      name: "Frontend", 
      icon: <Monitor className="w-8 h-8" />, 
      color: "from-blue-400 to-cyan-400",
      description: "React, JavaScript, Tailwind CSS"
    },
    { 
      name: "Backend", 
      icon: <Database className="w-8 h-8" />, 
      color: "from-green-400 to-emerald-400",
      description: "Node.js, Express, MongoDB"
    },
    { 
      name: "Full Stack", 
      icon: <Globe className="w-8 h-8" />, 
      color: "from-purple-400 to-pink-400",
      description: "MERN Stack Development"
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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
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
    <div className="relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 dark:from-gray-800 dark:via-blue-900/20 dark:to-purple-900/20" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-gradient-to-r from-pink-400/10 to-blue-400/10 rounded-full blur-3xl" />

      <section id="about" className="py-20 relative z-10 ">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent">
              About Me
            </h2>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"
            />
          </motion.div>

          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Interactive Elements Section (replacing image) */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="w-full lg:w-1/2 space-y-8"
            >
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50 text-center group"
                  >
                    <motion.div
                      animate={{ 
                        rotate: [0, 10, -10, 0],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity, 
                        repeatDelay: 3 
                      }}
                      className="text-blue-500 mb-2 flex justify-center"
                    >
                      {stat.icon}
                    </motion.div>
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: index * 0.2, type: "spring" }}
                      className="text-2xl font-bold text-gray-900 dark:text-white mb-1"
                    >
                      {stat.number}
                    </motion.div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Tech Highlights */}
              <div className="space-y-4">
                {techHighlights.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    variants={itemVariants}
                    whileHover={{ x: 10 }}
                    className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50 group"
                  >
                    <div className="flex items-center gap-4">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className={`p-3 rounded-xl bg-gradient-to-r ${tech.color} text-white shadow-lg`}
                      >
                        {tech.icon}
                      </motion.div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                          {tech.name}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                          {tech.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Text Section */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 space-y-6"
            >
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-blue-500/20 backdrop-blur-sm"
              >
                <Code className="w-4 h-4 text-blue-500" />
                <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">MERN Stack Developer</span>
              </motion.div>
              
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white"
              >
                Crafting Digital Experiences
              </motion.h3>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed"
              >
                <p className="text-lg">
                  I'm a passionate Full Stack Web Developer specializing in the MERN stack. With a strong foundation in MongoDB, Express.js, React, and Node.js, I build responsive and dynamic web applications that deliver exceptional user experiences.
                </p>
                <p className="text-lg">
                  My journey in web development started with a curiosity for creating interactive interfaces, which evolved into a professional pursuit of developing full-featured applications. I enjoy solving complex problems and continuously learning new technologies.
                </p>
     
              </motion.div>

              {/* Skills showcase */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="grid grid-cols-2 gap-4 my-8"
              >
                {["Problem Solving", "Team Collaboration", "Clean Code", "User Experience"].map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.9 + index * 0.1 }}
                    className="flex items-center gap-2 text-gray-700 dark:text-gray-300"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
                    <span className="font-medium">{skill}</span>
                  </motion.div>
                ))}
              </motion.div>
              
              {/* Social Links */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="flex flex-wrap gap-4 pt-4"
              >
                <motion.a
                  href="https://github.com/Alirana30"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 text-white rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl group"
                >
                  <FaGithub className="group-hover:rotate-12 transition-transform duration-300" />
                  <span className="font-medium">GitHub</span>
                </motion.a>
                
                <motion.a
                  href="https://www.linkedin.com/in/ali-mahmood-rana-7093322a7/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl group"
                >
                  <FaLinkedin className="group-hover:rotate-12 transition-transform duration-300" />
                  <span className="font-medium">LinkedIn</span>
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;