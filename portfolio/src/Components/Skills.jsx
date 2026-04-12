import { motion } from 'framer-motion';
import { SiMongodb, SiExpress, SiReact, SiNodedotjs, SiTailwindcss, SiGit, SiJavascript, SiNextdotjs, SiRedux, SiDocker, SiRedis, SiGithubactions } from 'react-icons/si';
import { Code, Database, Settings } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { use3DTilt } from '../hooks/use3DAnimations';

const SkillCard = ({ skill, skillVariants }) => {
  const tiltRef = use3DTilt({ maxRotation: 8, perspective: 800 });
  const progressRef = useRef(null);
  const [progressWidth, setProgressWidth] = useState(0);

  useEffect(() => {
    if (!progressRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        const startTime = Date.now();
        const duration = 1000;

        const animate = () => {
          const now = Date.now();
          const progress = Math.min((now - startTime) / duration, 1);
          setProgressWidth(progress * skill.level);

          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };

        animate();
        observer.unobserve(entry.target);
      },
      { threshold: 0.15 }
    );

    observer.observe(progressRef.current);
    return () => observer.disconnect();
  }, [skill.level]);

  return (
    <motion.div
      variants={skillVariants}
      className="group bg-gray-50 hover:bg-white p-6 border border-gray-200 hover:border-black transition-all duration-300 skill-badge cursor-pointer"
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-6px)';
        e.currentTarget.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.1)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.05)';
      }}
    >
      <div ref={tiltRef} style={{ perspective: '800px', transformStyle: 'preserve-3d' }}>
        <div className="mb-6 flex justify-center group-hover:scale-110 transition-transform duration-200">
          <div className={skill.iconColor}>{skill.icon}</div>
        </div>

        <h4 className="text-lg font-semibold text-center mb-6 text-black transition-colors duration-300">
          {skill.name}
        </h4>

        <div className="space-y-3" ref={progressRef}>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600 font-medium">Proficiency</span>
            <span className="text-sm font-bold text-black mono">{Math.round(progressWidth)}%</span>
          </div>
          <div className="w-full bg-gray-200 h-2 overflow-hidden border border-gray-200">
            <div
              style={{
                width: `${progressWidth}%`,
                transition: 'width 1s ease-out'
              }}
              className={`h-full ${skill.barColor}`}
            />
          </div>
        </div>
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
        { name: "React", icon: <SiReact size={32} />, level: 90, iconColor: 'text-[#61DAFB]', barColor: 'bg-[#61DAFB]' },
        { name: "JavaScript", icon: <SiJavascript size={32} />, level: 85, iconColor: 'text-[#F7DF1E]', barColor: 'bg-[#E9D200]' },
        { name: "Next.js", icon: <SiNextdotjs size={32} />, level: 82, iconColor: 'text-black', barColor: 'bg-black' }
      ]
    },
    {
      title: "Backend",
      icon: <Database className="w-5 h-5" />,
      skills: [
        { name: "Node.js", icon: <SiNodedotjs size={32} />, level: 85, iconColor: 'text-[#339933]', barColor: 'bg-[#339933]' },
        { name: "Express.js", icon: <SiExpress size={32} />, level: 80, iconColor: 'text-[#444444]', barColor: 'bg-[#444444]' },
        { name: "MongoDB", icon: <SiMongodb size={32} />, level: 82, iconColor: 'text-[#47A248]', barColor: 'bg-[#47A248]' }
      ]
    },
    {
      title: "Tools",
      icon: <Settings className="w-5 h-5" />,
      skills: [
        { name: "Docker", icon: <SiDocker size={32} />, level: 50, iconColor: 'text-[#2496ED]', barColor: 'bg-[#2496ED]' },
        { name: "Redis", icon: <SiRedis size={32} />, level: 70, iconColor: 'text-[#DC382D]', barColor: 'bg-[#DC382D]' },
        { name: "GitHub Actions", icon: <SiGithubactions size={32} />, level: 75, iconColor: 'text-[#2088FF]', barColor: 'bg-[#2088FF]' }
      ]
    },
    {
      title: "State & Workflow",
      icon: <Settings className="w-5 h-5" />,
      skills: [
        { name: "RTK Query", icon: <SiRedux size={32} />, level: 80, iconColor: 'text-[#764ABC]', barColor: 'bg-[#764ABC]' },
        { name: "Tailwind CSS", icon: <SiTailwindcss size={32} />, level: 88, iconColor: 'text-[#06B6D4]', barColor: 'bg-[#06B6D4]' },
        { name: "Git/GitHub", icon: <SiGit size={32} />, level: 88, iconColor: 'text-[#F05032]', barColor: 'bg-[#F05032]' }
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
              viewport={{ once: true }}
            >
              {skillCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.title}
                  variants={categoryVariants}
                  className="bg-white border border-gray-200 p-8 mb-6 last:mb-0 hover:border-gray-300 transition-all duration-300"
                  style={{
                    transitionProperty: 'all',
                    transitionDuration: '0.3s'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-3px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-12">
                    <div className="p-3 border border-black text-black bg-white">
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