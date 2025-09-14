import React from 'react';
import { BiLinkExternal } from 'react-icons/bi';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Sparkles, Code2, Database, Globe } from 'lucide-react';

const Projects = () => {
  const projects = [
  
    {
      title: "MovieMate",
      description: "A movie discovery platform that helps users find and explore movies with detailed information, reviews, and recommendations",
      image: "moviemate.jpg",
      tech: ["React", "Node.js", "API Integration", "MongoDB"],
      link: "https://moviemate-app-psi.vercel.app/",
      category: "Full-Stack",
      featured: true
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
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const getTechIcon = (tech) => {
    switch (tech.toLowerCase()) {
      case 'react': return <Code2 className="w-4 h-4" />;
      case 'mongodb': return <Database className="w-4 h-4" />;
      case 'node.js': return <Globe className="w-4 h-4" />;
      default: return <Sparkles className="w-4 h-4" />;
    }
  };

  return (
    <div className="relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-blue-900/20 dark:to-indigo-900/30" />
      <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-pink-400/10 to-blue-400/10 rounded-full blur-3xl" />

      <section id="projects" className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6">
              Explore my latest work showcasing modern web development with cutting-edge technologies
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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          >
            {projects.map((project,index) => (
              <motion.div 
                key={index}
                variants={cardVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200/60 dark:border-gray-700/60 hover:border-blue-300/50 dark:hover:border-blue-500/50"
              >
                {/* Featured badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4 z-20">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      Featured
                    </div>
                  </div>
                )}

                {/* Category badge */}
                <div className="absolute top-4 right-4 z-20">
                  <div className="bg-black/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium">
                    {project.category}
                  </div>
                </div>

                {/* Image container */}
                <div className="relative h-72 overflow-hidden rounded-t-3xl">
                  <motion.img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    whileHover={{ scale: 1.1 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Overlay buttons */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-white/95 hover:bg-white text-gray-900 p-4 rounded-full shadow-xl backdrop-blur-sm transition-all duration-300 border border-white/20"
                    >
                      <ExternalLink className="w-6 h-6" />
                    </motion.a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <motion.div
                        key={tech}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: techIndex * 0.1 }}
                        className="flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium border border-blue-200/50 dark:border-blue-700/50 hover:shadow-md transition-all duration-300"
                      >
                        {getTechIcon(tech)}
                        {tech}
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* CTA */}
                  <motion.a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ x: 5 }}
                    className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-all duration-300 font-semibold group/link"
                  >
                    <span>View Project</span>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <BiLinkExternal className="group-hover/link:rotate-12 transition-transform duration-300" />
                    </motion.div>
                  </motion.a>
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </motion.div>
            ))}
          </motion.div>

          {/* Call to action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
    
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Projects;