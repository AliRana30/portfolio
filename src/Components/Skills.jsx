import { motion } from 'framer-motion';
import { SiMongodb, SiExpress, SiReact, SiNodedotjs, SiTailwindcss, SiGit, SiJavascript,SiVscodium } from 'react-icons/si';
import { Sparkles, Code, Database,  Zap } from 'lucide-react';
import { BsTools } from 'react-icons/bs';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React", icon: <SiReact className="text-blue-400" size={40} />, level: 90 },
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" size={40} />, level: 85 },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-blue-500" size={40} />, level: 88 }
      ]
    },
    {
      title: "Backend Development",
      icon: <Database className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Node.js", icon: <SiNodedotjs className="text-green-600" size={40} />, level: 85 },
        { name: "Express.js", icon: <SiExpress className="text-gray-500" size={40} />, level: 80 },
        { name: "MongoDB", icon: <SiMongodb className="text-green-500" size={40} />, level: 82 }
      ]
    },
    {
      title: "Development Tools",
      icon: <BsTools className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "Git", icon: <SiGit className="text-orange-500" size={40} />, level: 88 },
        { name: "VS Code", icon: <SiVscodium className="text-blue-600" size={40} />, level: 92 }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const categoryVariants = {
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

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50/50 to-purple-50/50 dark:from-gray-900 dark:via-blue-900/10 dark:to-purple-900/10" />
      <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-blue-400/5 to-purple-400/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-pink-400/5 to-blue-400/5 rounded-full blur-3xl" />

      <section id="skills" className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
         
            
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent">
              My Skills
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6">
              A comprehensive toolkit of modern technologies and frameworks
            </p>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"
            />
          </motion.div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-12"
          >
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={categoryVariants}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50"
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-8">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    className={`p-4 rounded-2xl bg-gradient-to-r ${category.color} text-white shadow-lg`}
                  >
                    {category.icon}
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {category.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <div className={`w-12 h-1 bg-gradient-to-r ${category.color} rounded-full`} />
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {category.skills.length} Technologies
                      </span>
                    </div>
                  </div>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      variants={skillVariants}
                      whileHover={{ 
                        y: -10, 
                        scale: 1.05,
                        transition: { duration: 0.2 }
                      }}
                      className="group bg-white dark:bg-gray-700 p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-600 relative overflow-hidden"
                    >
                      {/* Background glow */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-900/10 dark:to-purple-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Content */}
                      <div className="relative z-10">
                        {/* Icon */}
                        <motion.div
                          animate={{ 
                            rotate: [0, 5, -5, 0],
                            scale: [1, 1.05, 1]
                          }}
                          transition={{ 
                            duration: 2, 
                            repeat: Infinity, 
                            repeatDelay: 3 + skillIndex 
                          }}
                          className="mb-4 flex justify-center"
                        >
                          {skill.icon}
                        </motion.div>
                        
                        {/* Skill name */}
                        <h4 className="text-lg font-semibold text-center mb-4 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                          {skill.name}
                        </h4>
                        
                        {/* Progress bar */}
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600 dark:text-gray-300">Proficiency</span>
                            <span className="text-sm font-semibold text-gray-900 dark:text-white">{skill.level}%</span>
                          </div>
                          <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2 overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              transition={{ duration: 1, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                              className={`h-full bg-gradient-to-r ${category.color} rounded-full shadow-sm`}
                            />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Skills Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl p-8 border border-blue-500/20 backdrop-blur-sm">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <Sparkles className="w-8 h-8 text-white" />
              </motion.div>
              
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Always Learning
              </h3>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6">
                Technology evolves rapidly, and so do I. I'm constantly exploring new frameworks, 
                libraries, and best practices to stay at the forefront of web development.
              </p>
              
              <div className="flex flex-wrap justify-center gap-3">
                {["TypeScript", "Next.js", "GraphQL", "Docker", "AWS", "Testing"].map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="px-4 py-2 bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 border border-gray-200/50 dark:border-gray-600/50 hover:border-blue-400/50 transition-all duration-300 cursor-default"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Skills;