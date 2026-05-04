import { motion } from 'framer-motion';
import { SiMongodb, SiExpress, SiReact, SiNodedotjs, SiTailwindcss, SiGit, SiJavascript, SiNextdotjs, SiRedux, SiDocker, SiRedis, SiGithubactions, SiFigma, SiFramer, SiShadcnui } from 'react-icons/si';
import { Code, Database, Settings, Layout, Zap } from 'lucide-react';

const SkillCard = ({ skill, skillVariants }) => {
  return (
    <motion.div
      variants={skillVariants}
      className="group relative bg-elevated p-6 border border-subtle transition-all duration-500 hover:border-default"
      data-cursor="pointer"
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = `0 15px 35px -5px ${skill.hexColor}25`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      <div className="flex items-center gap-5">
        <div className={`p-4 rounded-2xl transition-all duration-500 bg-surface border border-subtle group-hover:border-default shadow-inner`}>
          <div className={skill.iconColor}>{skill.icon}</div>
        </div>

        <div>
          <h4 className="text-sm font-bold tracking-wider uppercase text-primary transition-colors duration-300">
            {skill.name}
          </h4>
        </div>
      </div>

      {/* Decorative corner accent */}
      <div
        className="absolute top-0 right-0 w-12 h-12 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
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
        { name: "Next.js", icon: <SiNextdotjs size={28} />, iconColor: 'text-primary', hexColor: '#888888', bgColor: 'bg-elevated' }
      ]
    },
    {
      title: "Backend",
      icon: <Database className="w-5 h-5" />,
      skills: [
        { name: "Node.js", icon: <SiNodedotjs size={28} />, iconColor: 'text-[#339933]', hexColor: '#339933', bgColor: 'bg-[#339933]10' },
        { name: "Express.js", icon: <SiExpress size={28} />, iconColor: 'text-secondary', hexColor: '#888888', bgColor: 'bg-elevated' },
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
        { name: "Shadcn/UI", icon: <SiShadcnui size={28} />, iconColor: 'text-primary', hexColor: '#888888', bgColor: 'bg-elevated' }
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
    <div className="relative bg-primary">
      {/* Minimal geometric background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-32 right-24 w-56 h-56 border border-subtle rotate-12"></div>
        <div className="absolute bottom-24 left-20 w-32 h-32 border border-subtle rounded-full"></div>
        <div className="absolute top-2/3 right-1/3 w-2 h-24 bg-border-default rotate-45"></div>
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
                <div className="w-12 h-[1.5px] bg-black"></div>
                <span className="text-sm font-medium text-secondary tracking-wider uppercase mono">Skills & Expertise</span>
              </div>

              <h2 className="text-3xl md:text-3xl font-light leading-tight mb-6 section-heading">
                <span className="font-extralight text-secondary">Technical</span>
                <br />
                <span className="font-bold text-primary">Proficiency</span>
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
                  className="bg-surface border border-subtle p-8 md:p-12 mb-10 last:mb-0 shadow-xl"
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-6 mb-16">
                    <motion.div
                      className="p-4 border border-default text-primary bg-elevated rounded-2xl backdrop-blur-sm"
                      transition={{ duration: 0.2 }}
                    >
                      {category.icon}
                    </motion.div>
                    <div>
                      <h3 className="text-3xl font-bold text-primary mb-2 tracking-tight">
                        {category.title}
                      </h3>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-[1.5px] bg-black"></div>
                        <span className="text-xs text-secondary uppercase tracking-[0.2em] font-bold mono">
                          {category.skills.length} Stack
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.skills.map((skill) => (
                      <SkillCard key={skill.name} skill={skill} skillVariants={skillVariants} />
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </div>
  );
};

export default Skills;