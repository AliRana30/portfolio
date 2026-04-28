import { motion } from 'framer-motion';
import { SiMongodb, SiExpress, SiReact, SiNodedotjs, SiTailwindcss, SiGit, SiJavascript, SiNextdotjs, SiRedux, SiDocker, SiRedis, SiGithubactions, SiFigma, SiFramer, SiShadcnui } from 'react-icons/si';
import { Code, Database, Settings, Layout, Zap } from 'lucide-react';

const SkillCard = ({ skill, skillVariants }) => {
  return (
    <motion.div
      variants={skillVariants}
      className="group relative bg-white p-5 border border-gray-100 transition-all duration-300"
      data-cursor="pointer"
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = skill.hexColor || '#000';
        e.currentTarget.style.boxShadow = `0 10px 25px -5px ${skill.hexColor}20`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = '#f3f4f6';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      <div className="flex items-center gap-4">
        <div className={`p-3 rounded-xl transition-all duration-300 group-hover:scale-110 ${skill.bgColor || 'bg-gray-50'}`}>
          <div className={skill.iconColor}>{skill.icon}</div>
        </div>

        <div>
          <h4 className="text-base font-semibold text-gray-900 group-hover:text-black transition-colors">
            {skill.name}
          </h4>

        </div>
      </div>

      {/* Decorative corner accent */}
      <div
        className="absolute top-0 right-0 w-8 h-8 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at top right, ${skill.hexColor}, transparent)`
        }}
      ></div>
    </motion.div>
  );
};

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Code className="w-5 h-5" />,
      skills: [
        { name: "React", icon: <SiReact size={28} />, iconColor: 'text-[#61DAFB]', hexColor: '#61DAFB', bgColor: 'bg-[#61DAFB]10' },
        { name: "JavaScript", icon: <SiJavascript size={28} />, iconColor: 'text-[#F7DF1E]', hexColor: '#F7DF1E', bgColor: 'bg-[#F7DF1E]10' },
        { name: "Next.js", icon: <SiNextdotjs size={28} />, iconColor: 'text-black', hexColor: '#000000', bgColor: 'bg-gray-100' }
      ]
    },
    {
      title: "Backend",
      icon: <Database className="w-5 h-5" />,
      skills: [
        { name: "Node.js", icon: <SiNodedotjs size={28} />, iconColor: 'text-[#339933]', hexColor: '#339933', bgColor: 'bg-[#339933]10' },
        { name: "Express.js", icon: <SiExpress size={28} />, iconColor: 'text-[#444444]', hexColor: '#444444', bgColor: 'bg-gray-100' },
        { name: "MongoDB", icon: <SiMongodb size={28} />, iconColor: 'text-[#47A248]', hexColor: '#47A248', bgColor: 'bg-[#47A248]10' }
      ]
    },
    {
      title: "Infrastructure",
      icon: <Zap className="w-5 h-5" />,
      skills: [
        { name: "Docker", icon: <SiDocker size={28} />, iconColor: 'text-[#2496ED]', hexColor: '#2496ED', bgColor: 'bg-[#2496ED]10' },
        { name: "Redis", icon: <SiRedis size={28} />, iconColor: 'text-[#DC382D]', hexColor: '#DC382D', bgColor: 'bg-[#DC382D]10' },
        { name: "GitHub Actions", icon: <SiGithubactions size={28} />, iconColor: 'text-[#2088FF]', hexColor: '#2088FF', bgColor: 'bg-[#2088FF]10' }
      ]
    },
    {
      title: "Workflow",
      icon: <Settings className="w-5 h-5" />,
      skills: [
        { name: "Redux / RTK", icon: <SiRedux size={28} />, iconColor: 'text-[#764ABC]', hexColor: '#764ABC', bgColor: 'bg-[#764ABC]10' },
        { name: "Tailwind CSS", icon: <SiTailwindcss size={28} />, iconColor: 'text-[#06B6D4]', hexColor: '#06B6D4', bgColor: 'bg-[#06B6D4]10' },
        { name: "Git", icon: <SiGit size={28} />, iconColor: 'text-[#F05032]', hexColor: '#F05032', bgColor: 'bg-[#F05032]10' }
      ]
    },
    {
      title: "UI & Design",
      icon: <Layout className="w-5 h-5" />,
      skills: [
        { name: "Figma", icon: <SiFigma size={28} />, iconColor: 'text-[#F24E1E]', hexColor: '#F24E1E', bgColor: 'bg-[#F24E1E]10' },
        { name: "Framer Motion", icon: <SiFramer size={28} />, iconColor: 'text-[#0055FF]', hexColor: '#0055FF', bgColor: 'bg-[#0055FF]10' },
        { name: "Shadcn/UI", icon: <SiShadcnui size={28} />, iconColor: 'text-black', hexColor: '#000000', bgColor: 'bg-gray-100' }
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
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
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

        <section id="skills" className="pt-8 pb-16 md:pt-12 md:pb-24 relative z-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true, amount: 0.1 }}
              className="mb-12 md:mb-20"
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
              viewport={{ once: true, amount: 0.1 }}
            >
              {skillCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.title}
                  variants={categoryVariants}
                  className="bg-white border border-gray-100 p-8 md:p-10 mb-8 last:mb-0"
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-12">
                    <motion.div
                      className="p-3 border border-black text-black bg-white"
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