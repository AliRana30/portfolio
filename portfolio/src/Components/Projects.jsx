import { motion } from 'framer-motion';
import { ExternalLink, ArrowUpRight, Eye, Code2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Projects = () => {
  const navigate = useNavigate();

  const projects = [
    {
      id: 'moviemate',
      title: "MovieMate",
      description: "A movie discovery platform that helps users find and explore movies with detailed information, reviews, and recommendations",
      image: "moviemate.jpg",
      tech: ["React", "Node.js", "API Integration", "MongoDB", "Tailwind CSS", "bcrypt", "JWT", "react-hot-toast"],
      link: "https://drive-ease-rental.netlify.app/",
      githubLink: "https://github.com/AliRana30/moviemate",
      category: "Full-Stack ",
      featured: false,
      purpose: "To create an intuitive platform for movie enthusiasts to discover, explore, and get detailed information about movies with personalized recommendations.",
      keyFeatures: [
        "Advanced movie search and filtering",
        "Detailed movie information and reviews",
        "Personalized movie recommendations",
        "User ratings and watchlist functionality",
        "Responsive design for all devices"
      ]
    },
    {
      id: 'promptly',
      title: "Promptly (AI Assistant)",
      description: "An advanced AI-powered assistant that provides intelligent responses, helps with problem-solving, and offers personalized assistance for various tasks",
      image: "AIAssistant.jpg",
      tech: ["React", "Node.js", "AI API", "MongoDB", "Express", "Tailwind CSS", "bcrypt", "JWT", "react-hot-toast"],
      link: "https://assitant-livid.vercel.app/",
      githubLink: "https://github.com/AliRana30/AI_Assistant",
      category: "Full-Stack",
      featured: true,
      purpose: "To develop an intelligent AI assistant that can understand context, provide meaningful responses, and assist users with various tasks efficiently.",
      keyFeatures: [
        "Natural language processing",
        "Context-aware conversations",
        "Multi-task assistance capabilities",
        "Real-time response generation",
        "User session management",
        "Customizable AI personality"
      ]
    },
    {
      id: 'rental-car',
      title: "Rental-Car App",
      description: "A React-based rent a car website that allows users to rent cars with comfort of their home, featuring modern UI/UX",
      image: "Drive-Ease.png",
      tech: ["React", "API Integration", "JavaScript", "Node.js", "MongoDB", "Tailwind CSS", "bcrypt", "JWT", "react-hot-toast"],
      link: "https://drive-ease-rental.netlify.app/",
      githubLink: "https://github.com/AliRana30/Drive-Ease",
      category: "Full-Stack",
      featured: false,
      purpose: "To simplify car rental process by providing a user-friendly platform where customers can browse, select, and rent cars online with ease.",
      keyFeatures: [
        "Comprehensive car catalog",
        "Real-time availability checking",
        "Online booking system",
        "Price comparison tools",
        "User account management",
        "Mobile-responsive interface"
      ]
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
    const techLower = tech.toLowerCase();
    
    if (techLower === 'react') {
      return (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 10.11c1.03 0 1.87.84 1.87 1.89s-.84 1.89-1.87 1.89-1.87-.84-1.87-1.89.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 01-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9s-1.17 0-1.71.03c-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03s1.17 0 1.71-.03c.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68s-1.83 2.93-4.37 3.68c.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.37 1.95-1.47-.84-1.63-3.05-1.01-5.63-2.54-.75-4.37-1.99-4.37-3.68s1.83-2.93 4.37-3.68c-.62-2.58-.46-4.79 1.01-5.63 1.46-.84 3.45.12 5.37 1.95 1.92-1.83 3.91-2.79 5.37-1.95z"/>
        </svg>
      );
    }
    
    if (techLower === 'node.js') {
      return (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 1.85c-.27 0-.55.07-.78.2l-7.44 4.3c-.48.28-.78.8-.78 1.36v8.58c0 .56.3 1.08.78 1.36l1.95 1.12c.95.46 1.27.46 1.71.46.85 0 1.31-.52 1.31-1.36V9.47c0-.09-.07-.16-.16-.16H7.75c-.09 0-.16.07-.16.16v8.4c0 .45-.47.85-1.13.85-.3 0-.65-.13-1.31-.46L4.16 17.14c-.26-.15-.42-.43-.42-.73V7.83c0-.3.16-.58.42-.73L11.6 2.8c.26-.15.58-.15.84 0l7.44 4.3c.26.15.42.43.42.73v8.58c0 .3-.16.58-.42.73l-7.44 4.3c-.26.15-.58.15-.84 0z"/>
        </svg>
      );
    }
    
    if (techLower === 'mongodb') {
      return (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-3.032.284-6.685.639-9.815.315-2.778.83-5.25 1.47-6.123.744-.948 1.36-.974 2.31-.974.773 0 1.366.377 1.774.974.64.873 1.155 3.345 1.47 6.123.355 3.13.525 6.783.639 9.815z"/>
        </svg>
      );
    }
    
    if (techLower === 'express') {
      return (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957c-2.864 1.607-6.509.018-8.2-2.539a6.602 6.602 0 01-.885-3.077zm3.568-2.277h5.947a2.95 2.95 0 00-2.64-3.24c-1.50-.007-3.307 1.317-3.307 3.24z"/>
        </svg>
      );
    }
    
    if (techLower === 'javascript') {
      return (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/>
        </svg>
      );
    }

    if (techLower === 'tailwind css') {
      return (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
        </svg>
      );
    }

    if (techLower === 'bcrypt') {
      return (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
        </svg>
      );
    }

    if (techLower === 'jwt') {
      return (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M7 2a2 2 0 0 0-.091 3.914L7 5v5a2 2 0 0 0 1.515 1.856L8 12V7.828l6.415 3.967-1.48 1.48A2 2 0 0 0 17 14v5l.091-.006A2 2 0 0 0 19 19h2a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2h-2a2 2 0 0 0-1.104 1.768l-.004.232V5l.209-.006A2 2 0 0 0 17 2h-2a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2z"/>
        </svg>
      );
    }

    if (techLower === 'react-hot-toast') {
      return (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 10.36 6 12.92 6 16v1h2v-1c0-2.14 1.34-3.96 3.18-4.7l.72-.28c.73-.28 1.43 0 2.1.54.68.54 1.12 1.27 1.12 2.07v1h2v-1zm-8-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
        </svg>
      );
    }
    
    // Default icon for other technologies
    return (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
      </svg>
    );
  };

  const getTechColor = (tech) => {
    const techLower = tech.toLowerCase();
    
    switch (techLower) {
      case 'react': return 'text-blue-600 border-blue-200 bg-blue-50 hover:border-blue-400';
      case 'node.js': return 'text-green-600 border-green-200 bg-green-50 hover:border-green-400';
      case 'mongodb': return 'text-green-700 border-green-200 bg-green-50 hover:border-green-400';
      case 'express': return 'text-gray-700 border-gray-200 bg-gray-50 hover:border-gray-400';
      case 'javascript': return 'text-yellow-600 border-yellow-200 bg-yellow-50 hover:border-yellow-400';
      case 'api integration': return 'text-purple-600 border-purple-200 bg-purple-50 hover:border-purple-400';
      case 'ai api': return 'text-indigo-600 border-indigo-200 bg-indigo-50 hover:border-indigo-400';
      case 'tailwind css': return 'text-cyan-500 border-cyan-200 bg-cyan-50 hover:border-cyan-400';
      case 'bcrypt': return 'text-red-600 border-red-200 bg-red-50 hover:border-red-400';
      case 'jwt': return 'text-green-600 border-green-200 bg-green-50 hover:border-green-400';
      case 'react-hot-toast': return 'text-amber-600 border-amber-200 bg-amber-50 hover:border-amber-400';
      default: return 'text-gray-600 border-gray-200 bg-gray-50 hover:border-gray-400';
    }
  };

  const handleViewDetails = (projectId) => {
    navigate(`/project/${projectId}`, { state: { project: projects.find(p => p.id === projectId) } });
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
                  className="group bg-white border border-gray-200 hover:border-black transition-all duration-300 overflow-hidden relative"
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
                  <div className="relative h-48 overflow-hidden bg-gray-100">
                    <img 
                      src={`/${project.image}`} 
                      alt={project.title} 
                      className="w-full h-full object-cover object-center group-hover:grayscale-0 group-hover:scale-102 transition-all duration-500"
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/600x400/e5e7eb/374151?text=Project+Image';
                      }}
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
                    
                    {/* Tech stack with colors and icons */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tech.map((tech, techIndex) => (
                        <div
                          key={tech}
                          className={`flex items-center gap-2 px-3 py-1 border text-xs font-medium mono transition-all duration-200 ${getTechColor(tech)}`}
                        >
                          {getTechIcon(tech)}
                          {tech}
                        </div>
                      ))}
                    </div>
                    
                    {/* CTA Buttons */}
                    <div className="pt-4 border-t border-gray-100 flex flex-col gap-3">
                      <button 
                        onClick={() => handleViewDetails(project.id)}
                        className="inline-flex items-center justify-center gap-2 bg-black text-white px-4 py-2 hover:bg-gray-800 transition-all duration-300 font-medium group/details"
                      >
                        <Eye className="w-4 h-4" />
                        <span>View Details</span>
                      </button>
                      
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 border border-gray-300 text-black hover:border-black hover:bg-black hover:text-white px-4 py-2 transition-all duration-300 font-medium group/link"
                      >
                        <ExternalLink className="w-4 h-4" />
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

export default Projects;