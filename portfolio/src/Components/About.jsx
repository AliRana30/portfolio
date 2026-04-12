import { motion } from 'framer-motion';
import { Code, Clock, Award, Coffee, Linkedin, Github, ExternalLink } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { animateCountUp } from '../hooks/use3DAnimations';
import { SiJavascript, SiTypescript, SiReact, SiRedux, SiNodedotjs, SiExpress, SiMongodb, SiNextdotjs, SiDocker, SiRedis, SiGithubactions, SiTailwindcss, SiGit, SiCplusplus, SiPython, SiDjango } from 'react-icons/si';

const About = () => {
  const statRefs = useRef([]);
  const [statsAnimated, setStatsAnimated] = useState(false);

  const stats = [
    { number: "10+", label: "Projects", icon: <Code className="w-5 h-5" /> },
    { number: "3+", label: "Years", icon: <Clock className="w-5 h-5" /> },
    { number: "100%", label: "Delivery", icon: <Award className="w-5 h-5" /> },
    { number: "24/7", label: "Support", icon: <Coffee className="w-5 h-5" /> }
  ];

  const techStack = [
    { name: 'JavaScript', icon: <SiJavascript className="w-4 h-4" />, color: 'text-[#F7DF1E]' },
    { name: 'TypeScript', icon: <SiTypescript className="w-4 h-4" />, color: 'text-[#3178C6]' },
    { name: 'React', icon: <SiReact className="w-4 h-4" />, color: 'text-[#61DAFB]' },
    { name: 'RTK Query', icon: <SiRedux className="w-4 h-4" />, color: 'text-[#764ABC]' },
    { name: 'Next.js', icon: <SiNextdotjs className="w-4 h-4" />, color: 'text-black' },
    { name: 'Node.js', icon: <SiNodedotjs className="w-4 h-4" />, color: 'text-[#339933]' },
    { name: 'Express', icon: <SiExpress className="w-4 h-4" />, color: 'text-gray-700' },
    { name: 'MongoDB', icon: <SiMongodb className="w-4 h-4" />, color: 'text-[#47A248]' },
    { name: 'Redis', icon: <SiRedis className="w-4 h-4" />, color: 'text-[#DC382D]' },
    { name: 'Docker', icon: <SiDocker className="w-4 h-4" />, color: 'text-[#2496ED]' },
    { name: 'GitHub Actions', icon: <SiGithubactions className="w-4 h-4" />, color: 'text-[#2088FF]' },
    { name: 'Tailwind', icon: <SiTailwindcss className="w-4 h-4" />, color: 'text-[#06B6D4]' },
    { name: 'Git', icon: <SiGit className="w-4 h-4" />, color: 'text-[#F05032]' },
    { name: 'C++', icon: <SiCplusplus className="w-4 h-4" />, color: 'text-[#00599C]' },
    { name: 'Python', icon: <SiPython className="w-4 h-4" />, color: 'text-[#3776AB]' },
    { name: 'Django', icon: <SiDjango className="w-4 h-4" />, color: 'text-[#092E20]' }
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
          <div className="absolute top-40 right-8 md:right-32 w-32 md:w-48 h-32 md:h-48 border border-gray-100"></div>
          <div className="absolute bottom-32 left-8 md:left-16 w-16 md:w-24 h-16 md:h-24 border border-gray-100 rounded-full"></div>
          <div className="absolute top-1/3 left-1/3 w-1 h-12 md:h-16 bg-gray-100 rotate-45"></div>
        </div>

        <section id="about" className="py-12 md:py-24 relative z-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12 md:mb-20"
            >
              <div className="flex items-center gap-4 mb-6 md:mb-8">
                <div className="w-8 md:w-12 h-[1px] bg-black"></div>
                <span className="text-xs md:text-sm font-medium text-gray-500 tracking-wider uppercase mono">About Me</span>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-light leading-tight mb-6 section-heading">
                <span className="font-extralight text-gray-700">About Me</span>
                <br />
                <span className="font-bold text-black">Building Solutions That Matter</span>
              </h2>
            </motion.div>

            {/* Experience Stats Row */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-12 md:mb-16"
              onViewportEnter={() => {
                if (!statsAnimated) {
                  setStatsAnimated(true);
                  statRefs.current.forEach((ref, index) => {
                    if (ref) {
                      setTimeout(() => {
                        const number = stats[index].number.replace(/[\D]/g, '');
                        if (number) {
                          animateCountUp(ref, parseInt(number), 1500, (val) => {
                            if (stats[index].number.includes('/')) {
                              return stats[index].number;
                            } else if (stats[index].number.includes('.')) {
                              return val / 10 + '+';
                            } else if (stats[index].number.includes('%')) {
                              return val + '%';
                            }
                            return val + '+';
                          });
                        }
                      }, index * 100);
                    }
                  });
                }
              }}
            >
              {stats.map((stat, index) => {
                return (
                  <div
                    key={stat.label}
                    ref={(el) => {
                      statRefs.current[index] = el?.querySelector('.stat-number');
                    }}
                    className="text-center p-4 md:p-6 border border-gray-200 hover:border-black hover:shadow-md transition-all duration-300 cursor-pointer group"
                  >
                    <div className="text-gray-700 mb-2 flex justify-center group-hover:scale-110 transition-transform duration-200">
                      {stat.icon}
                    </div>
                    <div className="text-xl md:text-2xl font-bold text-black mb-1 mono stat-number">
                      {stat.number}
                    </div>
                    <div className="text-xs text-gray-600 font-medium tracking-wide">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-start">
              {/* Left Column - About Me & Tech Stack */}
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-8"
              >
                <motion.div variants={itemVariants} className="space-y-6">
                  {/* About Me Box */}
                  <div className="p-6 md:p-8 border border-gray-200 bg-white hover:border-gray-300 transition-all duration-300"
                    style={{
                      animation: 'fadeInLeft 0.6s ease-out'
                    }}
                  >
                    <style jsx>{`
                      @keyframes fadeInLeft {
                        from {
                          opacity: 0;
                          transform: translateX(-30px);
                        }
                        to {
                          opacity: 1;
                          transform: translateX(0);
                        }
                      }
                    `}</style>

                    {/* Core Technologies */}
                    <div className="border-t border-gray-100">
                      <h3 className="text-xs md:text-sm font-semibold text-black mb-4 md:mb-5 tracking-wide uppercase">Tech Stack</h3>
                      <div className="flex flex-wrap gap-2">
                        {techStack.map((tech) => (
                          <span key={tech.name} className="tech-pill inline-flex items-center gap-1.5 px-2 md:px-3 py-1 md:py-1.5 text-xs font-medium text-gray-700 bg-gray-50 border border-gray-200 hover:border-gray-400 hover:bg-white transition-all duration-200 cursor-pointer"
                            style={{
                              transitionProperty: 'all',
                              transitionDuration: '0.15s'
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.transform = 'translateY(0) scale(1)';
                            }}
                          >
                            <span className={tech.color}>{tech.icon}</span>
                            <span>{tech.name}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Right Column - Project Insights */}
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-8"
              >
                <motion.div variants={itemVariants} className="border border-gray-200 bg-white p-5 md:p-6 hover:border-gray-400 hover:shadow-md transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xs md:text-sm font-semibold text-black tracking-wide uppercase">About Me</h3>
                    <span className="text-[10px] md:text-xs text-gray-500 mono">PROFILE</span>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Full-stack developer focused on scalable products, clear architecture, and shipping polished user experiences from idea to deployment.
                  </p>
                  <div className="mt-4 space-y-2 text-xs md:text-sm text-gray-600 leading-relaxed">
                    <p>I work end-to-end across product planning, architecture, implementation, and deployment with strong focus on maintainability.</p>
                    <p>My workflow emphasizes performance optimization, clean UI interactions, production debugging, and iterative delivery based on user feedback.</p>
                  </div>
                </motion.div>

                {/* Project Insights Boxes */}
                <motion.div variants={itemVariants} className="space-y-6">
                  <h3 className="text-xs md:text-sm font-semibold text-black mb-6 tracking-wide uppercase">Featured Projects</h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      {
                        title: "CampusCore LMS",
                        description: "Production-ready LMS covering secure streaming, enrollments, analytics, role-based dashboards, and real-time notifications for real EdTech workflows.",
                        link: "https://lms-e-learning-system.vercel.app/",
                        displayUrl: "lms-e-learning-system.vercel.app"
                      },
                      {
                        title: "MultiMart",
                        description: "A multivendor e-commerce platform where vendors manage inventory and customers shop across multiple stores. Built with MERN stack, it handles user authentication, vendor dashboards, and real-time order tracking.",
                        link: "http://multimarts.vercel.app/",
                        displayUrl: "multimarts.vercel.app"
                      },
                      {
                        title: "MovieMate",
                        description: "Movie discovery app with personalized recommendations. Aggregates data from multiple sources with clean interface, helping users find content based on their preferences.",
                        link: "https://moviemate-app-psi.vercel.app/",
                        displayUrl: "moviemate-app-psi.vercel.app"
                      },
                      {
                        title: "Promptly",
                        description: "AI assistant for everyday tasks. Provides intelligent responses, understands context, and adapts to communication style with real-time streaming capabilities.",
                        link: "https://assitant-livid.vercel.app/",
                        displayUrl: "assitant-livid.vercel.app"
                      }
                    ].map((project, index) => {
                      return (
                        <div
                          key={project.title}
                          className="group relative border border-gray-200 hover:border-gray-400 hover:shadow-md transition-all duration-300 bg-white cursor-pointer"
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-5px)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                          }}
                        >
                          <div className="p-4 md:p-5">
                            <div className="flex items-start justify-between mb-3">
                              <h4 className="font-semibold text-black text-sm">
                                {project.title}
                              </h4>
                              <span className="text-xs text-gray-400 mono">0{index + 1}</span>
                            </div>
                            <p className="text-xs text-gray-600 leading-relaxed mb-4 line-clamp-4">
                              {project.description}
                            </p>
                            <a 
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 text-xs font-medium text-black hover:text-gray-600 transition-colors group/link break-all"
                            >
                              <span className="mono truncate">{project.displayUrl}</span>
                              <ExternalLink className="w-3 h-3 flex-shrink-0 transition-all duration-200 group-hover/link:rotate-45 group-hover/link:scale-125" />
                            </a>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div variants={itemVariants} className="pt-8">
                  <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                    <a 
                      href="https://www.linkedin.com/in/ali-mahmood-rana-7093322a7/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded transition-colors duration-200 font-medium text-sm"
                    >
                      <Linkedin className="w-5 h-5" />
                      <span>LinkedIn</span>
                    </a>
                    <a 
                      href="https://github.com/AliRana30"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-gray-900 hover:bg-black text-white px-6 py-3 rounded transition-colors duration-200 font-medium text-sm"
                    >
                      <Github className="w-5 h-5" />
                      <span>GitHub</span>
                    </a>
                  </div>
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