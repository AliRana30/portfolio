import { motion } from 'framer-motion';
import { Code, Clock, Award, Coffee, Linkedin, Github, ExternalLink } from 'lucide-react';

const About = () => {
  const stats = [
    { number: "5+", label: "Projects", icon: <Code className="w-5 h-5" /> },
    { number: "1.5+", label: "Years", icon: <Clock className="w-5 h-5" /> },
    { number: "100%", label: "Delivery", icon: <Award className="w-5 h-5" /> },
    { number: "24/7", label: "Support", icon: <Coffee className="w-5 h-5" /> }
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
              
              <h2 className="text-2xl md:text-3xl font-light leading-tight mb-6">
                <span className="font-extralight text-gray-700">About Me</span>
                <br />
                <span className="font-bold text-black">Building Solutions That Matter</span>
              </h2>
            </motion.div>

            {/* Experience Stats Row */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-12 md:mb-16"
            >
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="text-center p-4 md:p-6 border border-gray-200 hover:border-black transition-colors duration-200"
                >
                  <div className="text-gray-700 mb-2 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-xl md:text-2xl font-bold text-black mb-1 mono">
                    {stat.number}
                  </div>
                  <div className="text-xs text-gray-600 font-medium tracking-wide">
                    {stat.label}
                  </div>
                </div>
              ))}
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
                  <div className="p-6 md:p-8 border border-gray-200 bg-white">
                    <div className="space-y-5 text-gray-700 leading-relaxed">
                      <p className="text-sm md:text-base">
                        I'm Ali Mahmood Rana, a full-stack developer building web applications that solve real problems. I create platforms that make everyday tasks simpler—from car rentals to movie discovery to e-commerce solutions.
                      </p>
                    </div>

                    {/* Core Technologies */}
                    <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-gray-100">
                      <h3 className="text-xs md:text-sm font-semibold text-black mb-4 md:mb-5 tracking-wide uppercase">Tech Stack</h3>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "C++", "JavaScript", "TypeScript", "Python", "Django", "HTML",
                          "CSS", "Tailwind", "React", "Redux", "Next.js",
                          "Node.js", "Express", "MongoDB", "Oracle", 
                          "Git", "GitHub", "VS Code", "Postman",
                          "Firebase", "Vercel", "Netlify"
                        ].map((tech, index) => (
                          <span key={index} className="px-2 md:px-3 py-1 md:py-1.5 text-xs font-medium text-gray-700 bg-gray-50 border border-gray-200 hover:border-gray-400 hover:bg-white transition-all">
                            {tech}
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
                {/* Project Insights Boxes */}
                <motion.div variants={itemVariants} className="space-y-6">
                  <h3 className="text-xs md:text-sm font-semibold text-black mb-6 tracking-wide uppercase">Featured Projects</h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      {
                        title: "MultiMart",
                        description: "A multivendor e-commerce platform where vendors manage inventory and customers shop across multiple stores. Built with MERN stack, it handles user authentication, vendor dashboards, and real-time order tracking.",
                        link: "http://multimarts.vercel.app/",
                        displayUrl: "multimarts.vercel.app"
                      },
                      {
                        title: "DriveEase",
                        description: "Car rental platform with transparent pricing and secure bookings. Features intuitive search filters, real-time availability, and booking management for both renters and owners.",
                        link: "https://drive-ease-rental.netlify.app/",
                        displayUrl: "drive-ease-rental.netlify.app"
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
                    ].map((project, index) => (
                      <div
                        key={project.title}
                        className="group relative border border-gray-200 hover:border-gray-400 transition-all duration-300 bg-white"
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
                            <ExternalLink className="w-3 h-3 flex-shrink-0 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                          </a>
                        </div>
                      </div>
                    ))}
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