import { motion } from 'framer-motion';
import { SiMongodb, SiExpress, SiReact, SiNodedotjs, SiTailwindcss, SiGit, SiJavascript, SiNextdotjs, SiRedux, SiDocker, SiRedis, SiGithubactions } from 'react-icons/si';
import { Code, Database, Settings } from 'lucide-react';
import { use3DTilt } from '../hooks/use3DAnimations';

const SkillCard = ({ skill, skillVariants }) => {
  const tiltRef = use3DTilt({ maxRotation: 8, perspective: 800 });

  return (
    <motion.div
      variants={skillVariants}
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="group bg-gray-50 hover:bg-white p-6 border border-gray-200 hover:border-black skill-badge"
      data-cursor="pointer"
      style={{
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.05)'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.1)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.05)';
      }}
    >
      <div ref={tiltRef} style={{ perspective: '800px', transformStyle: 'preserve-3d' }} className="min-h-[160px] flex flex-col items-center justify-center">
        <motion.div className="mb-5 flex justify-center" whileHover={{ scale: 1.15 }} transition={{ duration: 0.2 }}>
          <div className={skill.iconColor}>{skill.icon}</div>
        </motion.div>

        <h4 className="text-lg font-semibold text-center text-black transition-colors duration-300">
          {skill.name}
        </h4>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const skillCategories = [
    {
      title: "Full-Stack",
      icon: <Code className="w-5 h-5" />,
      skills: [
        { name: "React", icon: <SiReact size={32} />, iconColor: 'text-[#61DAFB]' },
        { name: "JavaScript", icon: <SiJavascript size={32} />, iconColor: 'text-[#F7DF1E]' },
        { name: "Next.js", icon: <SiNextdotjs size={32} />, iconColor: 'text-black' }
      ]
    },
    {
      title: "Backend",
      icon: <Database className="w-5 h-5" />,
      skills: [
        { name: "Node.js", icon: <SiNodedotjs size={32} />, iconColor: 'text-[#339933]' },
        { name: "Express.js", icon: <SiExpress size={32} />, iconColor: 'text-[#444444]' },
        { name: "MongoDB", icon: <SiMongodb size={32} />, iconColor: 'text-[#47A248]' }
      ]
    },
    {
      title: "Tools",
      icon: <Settings className="w-5 h-5" />,
      skills: [
        { name: "Docker", icon: <SiDocker size={32} />, iconColor: 'text-[#2496ED]' },
        { name: "Redis", icon: <SiRedis size={32} />, iconColor: 'text-[#DC382D]' },
        { name: "GitHub Actions", icon: <SiGithubactions size={32} />, iconColor: 'text-[#2088FF]' }
      ]
    },
    {
      title: "State & Workflow",
      icon: <Settings className="w-5 h-5" />,
      skills: [
        { name: "RTK Query", icon: <SiRedux size={32} />, iconColor: 'text-[#764ABC]' },
        { name: "Tailwind CSS", icon: <SiTailwindcss size={32} />, iconColor: 'text-[#06B6D4]' },
        { name: "Git/GitHub", icon: <SiGit size={32} />, iconColor: 'text-[#F05032]' }
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
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1]
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
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true, amount: 0.2 }}
              className="mb-20"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-[1px] bg-black"></div>
                <span className="text-sm font-medium text-gray-500 tracking-wider uppercase mono">Skills & Expertise</span>
              </div>
              
              <h2 className="text-3xl md:text-3xl font-light leading-tight mb-6 section-heading">
                <span className="font-extralight text-gray-700">Technical</span>
                <br />
                <span className="font-bold text-black">Proficiency</span>
              </h2>
         
            </motion.div>
            
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
              {skillCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.title}
                  variants={categoryVariants}
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  className="bg-white border border-gray-200 p-8 mb-6 last:mb-0 hover:border-gray-300"
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-12">
                    <motion.div 
                      className="p-3 border border-black text-black bg-white"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      {category.icon}
                    </motion.div>
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
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {category.skills.map((skill) => (
                      <SkillCard key={skill.name} skill={skill} skillVariants={skillVariants} />
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    viewport={{ once: true, amount: 0.2 }}
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