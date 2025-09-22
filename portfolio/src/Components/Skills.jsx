import { motion } from 'framer-motion';
import { SiMongodb, SiExpress, SiReact, SiNodedotjs, SiTailwindcss, SiGit, SiJavascript, SiVscodium } from 'react-icons/si';
import { Code, Database, Settings, Layers } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Full-Stack",
      icon: <Code className="w-5 h-5" />,
      skills: [
        { name: "React", icon: <SiReact className="text-gray-800" size={32} />, level: 90 },
        { name: "JavaScript", icon: <SiJavascript className="text-gray-800" size={32} />, level: 85 },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-gray-800" size={32} />, level: 88 }
      ]
    },
    {
      title: "Backend",
      icon: <Database className="w-5 h-5" />,
      skills: [
        { name: "Node.js", icon: <SiNodedotjs className="text-gray-800" size={32} />, level: 85 },
        { name: "Express.js", icon: <SiExpress className="text-gray-800" size={32} />, level: 80 },
        { name: "MongoDB", icon: <SiMongodb className="text-gray-800" size={32} />, level: 82 }
      ]
    },
    {
      title: "Tools",
      icon: <Settings className="w-5 h-5" />,
      skills: [
        { name: "Git", icon: <SiGit className="text-gray-800" size={32} />, level: 88 },
        { name: "VS Code", icon: <SiVscodium className="text-gray-800" size={32} />, level: 92 }
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

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.9 },
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
      
      <div className="relative bg-gray-50">
        {/* Minimal geometric background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-32 right-24 w-56 h-56 border border-gray-200 rotate-12"></div>
          <div className="absolute bottom-24 left-20 w-32 h-32 border border-gray-200 rounded-full"></div>
          <div className="absolute top-2/3 right-1/3 w-2 h-24 bg-gray-200 rotate-45"></div>
        </div>

        <section id="skills" className="py-24 relative z-10">
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
                <span className="text-sm font-medium text-gray-500 tracking-wider uppercase mono">Skills & Expertise</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-light leading-tight mb-6">
                <span className="font-extralight text-gray-700">Technical</span>
                <br />
                <span className="font-bold text-black">Proficiency</span>
              </h2>
              
              <p className="text-lg text-gray-600 font-light max-w-2xl">
                A comprehensive toolkit of modern technologies and frameworks for building scalable web applications.
              </p>
            </motion.div>
            
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {skillCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.title}
                  variants={categoryVariants}
                  className="bg-white border border-gray-200 p-8"
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-12">
                    <div className="p-3 bg-black text-white">
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-black mb-1">
                        {category.title}
                      </h3>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-[1px] bg-black"></div>
                        <span className="text-sm text-gray-500 mono">
                          {category.skills.length} Technologies
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        variants={skillVariants}
                        className="group bg-gray-50 p-6 border border-gray-200 hover:border-black hover:bg-white transition-all duration-300"
                      >
                        {/* Icon */}
                        <div className="mb-6 flex justify-center">
                          {skill.icon}
                        </div>
                        
                        {/* Skill name */}
                        <h4 className="text-lg font-semibold text-center mb-6 text-black group-hover:text-black transition-colors duration-300">
                          {skill.name}
                        </h4>
                        
                        {/* Progress bar */}
                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600 font-medium">Proficiency</span>
                            <span className="text-sm font-bold text-black mono">{skill.level}%</span>
                          </div>
                          <div className="w-full bg-gray-200 h-2 overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              transition={{ duration: 1, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                              className="h-full bg-black"
                            />
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              viewport={{ once: true }}
              className="mt-20 text-center"
            >
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Skills;