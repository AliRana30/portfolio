import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowUpRight, Code, Database, Globe } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "MovieMate",
      description: "A movie discovery platform that helps users find and explore movies with detailed information, reviews, and recommendations",
      image: "moviemate.jpg",
      tech: ["React", "Node.js", "API Integration", "MongoDB"],
      link: "https://drive-ease-rental.netlify.app/",
      category: "Frontend",
      featured: false
    },
    {
      title: "Promptly (AI Assistant)",
      description: "An advanced AI-powered assistant that provides intelligent responses, helps with problem-solving, and offers personalized assistance for various tasks",
      image: "AIAssistant.jpg",
      tech: ["React", "Node.js", "AI API", "MongoDB", "Express"],
      link: "https://assitant-livid.vercel.app/",
      category: "Full-Stack",
      featured: true
    },
      {
      title: "Rental-Car App",
      description: "A React-based rent a car website that allows users to rent cars with comfort of their home, featuring modern UI/UX",
      image: "Drive-Ease.png",
      tech: ["React", "API Integration", "JavaScript"],
      link: "https://drive-ease-rental.netlify.app/",
      category: "Full-Stack",
      featured: false
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

  const cardVariants = {
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

  const getTechIcon = (tech) => {
    switch (tech.toLowerCase()) {
      case 'react': return <Code className="w-3 h-3" />;
      case 'mongodb': return <Database className="w-3 h-3" />;
      case 'node.js': return <Globe className="w-3 h-3" />;
      default: return <Code className="w-3 h-3" />;
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
          <div className="absolute top-24 left-16 w-64 h-64 border border-gray-100 rotate-45"></div>
          <div className="absolute bottom-32 right-20 w-40 h-40 border border-gray-100 rounded-full"></div>
          <div className="absolute top-1/2 right-1/4 w-2 h-32 bg-gray-100 rotate-12"></div>
        </div>

        <section id="projects" className="py-24 relative z-10">
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
                <span className="text-sm font-medium text-gray-500 tracking-wider uppercase mono">Projects</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-light leading-tight mb-6">
                <span className="font-extralight text-gray-700">Featured</span>
                <br />
                <span className="font-bold text-black">Projects</span>
              </h2>
              
              <p className="text-lg text-gray-600 font-light max-w-2xl">
                Explore my latest work showcasing modern web development with cutting-edge technologies.
              </p>
            </motion.div>
            
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {projects.map((project, index) => (
                <motion.div 
                  key={index}
                  variants={cardVariants}
                  className="group bg-white border border-gray-200 hover:border-black transition-all duration-300 overflow-hidden"
                >
                  {/* Featured badge */}
                  {project.featured && (
                    <div className="absolute top-4 left-4 z-10">
                      <div className="bg-black text-white px-3 py-1 text-xs font-medium mono">
                        FEATURED
                      </div>
                    </div>
                  )}

                  {/* Category badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <div className="bg-white/90 border border-gray-300 text-black px-3 py-1 text-xs font-medium mono">
                      {project.category}
                    </div>
                  </div>

                  {/* Image container with fixed dimensions */}
                  <div className="relative h-64 overflow-hidden bg-gray-100">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover object-center group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                    
                    {/* Overlay button */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-black/90 hover:bg-black text-white p-4 transition-colors duration-200"
                      >
                        <ExternalLink className="w-6 h-6" />
                      </a>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-bold text-black group-hover:text-black transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed font-light line-clamp-3">
                      {project.description}
                    </p>
                    
                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tech.map((tech, techIndex) => (
                        <div
                          key={tech}
                          className="flex items-center gap-1 px-3 py-1 border border-gray-200 text-gray-700 text-xs font-medium mono hover:border-black transition-colors duration-200"
                        >
                          {getTechIcon(tech)}
                          {tech}
                        </div>
                      ))}
                    </div>
                    
                    {/* CTA */}
                    <div className="pt-4 border-t border-gray-100">
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-black hover:gap-4 transition-all duration-300 font-medium group/link"
                      >
                        <span>View Project</span>
                        <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform duration-200" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Portfolio note */}
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

export default Projects