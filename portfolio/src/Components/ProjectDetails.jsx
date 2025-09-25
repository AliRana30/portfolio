import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Target, Zap, Code2, CheckCircle, Globe } from 'lucide-react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const ProjectDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { name } = useParams();
  
  const project = location.state?.project || getProjectByName(name);
  
  function getProjectByName(projectName) {
    const projects = {
      'moviemate': {
        id: 'moviemate',
        title: "MovieMate",
        description: "A movie discovery platform that helps users find and explore movies with detailed information, reviews, and recommendations",
        image: "moviemate.jpg",
        tech: ["React", "Node.js", "API Integration", "MongoDB", "Tailwind CSS", "bcrypt", "JWT", "react-hot-toast"],
        link: "https://drive-ease-rental.netlify.app/",
        githubLink: "https://github.com/AliRana30/moviemate",
        category: "Full-Stack",
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
      'promptly': {
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
      'rental-car': {
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
    };
    
    return projects[projectName];
  }

  const getTechIcon = (tech) => {
    const techLower = tech.toLowerCase();
    
    if (techLower === 'react') {
      return (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 10.11c1.03 0 1.87.84 1.87 1.89s-.84 1.89-1.87 1.89-1.87-.84-1.87-1.89.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 01-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9s-1.17 0-1.71.03c-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03s1.17 0 1.71-.03c.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68s-1.83 2.93-4.37 3.68c.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.37 1.95-1.47-.84-1.63-3.05-1.01-5.63-2.54-.75-4.37-1.99-4.37-3.68s1.83-2.93 4.37-3.68c-.62-2.58-.46-4.79 1.01-5.63 1.46-.84 3.45.12 5.37 1.95 1.92-1.83 3.91-2.79 5.37-1.95z"/>
        </svg>
      );
    }
    
    if (techLower === 'node.js') {
      return (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 1.85c-.27 0-.55.07-.78.2l-7.44 4.3c-.48.28-.78.8-.78 1.36v8.58c0 .56.3 1.08.78 1.36l1.95 1.12c.95.46 1.27.46 1.71.46.85 0 1.31-.52 1.31-1.36V9.47c0-.09-.07-.16-.16-.16H7.75c-.09 0-.16.07-.16.16v8.4c0 .45-.47.85-1.13.85-.3 0-.65-.13-1.31-.46L4.16 17.14c-.26-.15-.42-.43-.42-.73V7.83c0-.3.16-.58.42-.73L11.6 2.8c.26-.15.58-.15.84 0l7.44 4.3c.26.15.42.43.42.73v8.58c0 .3-.16.58-.42.73l-7.44 4.3c-.26.15-.58.15-.84 0z"/>
        </svg>
      );
    }
    
    if (techLower === 'mongodb') {
      return (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-3.032.284-6.685.639-9.815.315-2.778.83-5.25 1.47-6.123.744-.948 1.36-.974 2.31-.974.773 0 1.366.377 1.774.974.64.873 1.155 3.345 1.47 6.123.355 3.13.525 6.783.639 9.815z"/>
        </svg>
      );
    }
    
    if (techLower === 'express') {
      return (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957c-2.864 1.607-6.509.018-8.2-2.539a6.602 6.602 0 01-.885-3.077zm3.568-2.277h5.947a2.95 2.95 0 00-2.64-3.24c-1.50-.007-3.307 1.317-3.307 3.24z"/>
        </svg>
      );
    }
    
    if (techLower === 'javascript') {
      return (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/>
        </svg>
      );
    }

    if (techLower === 'tailwind css') {
      return (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
        </svg>
      );
    }

    if (techLower === 'bcrypt') {
      return (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
        </svg>
      );
    }

    if (techLower === 'jwt') {
      return (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M7 2a2 2 0 0 0-.091 3.914L7 5v5a2 2 0 0 0 1.515 1.856L8 12V7.828l6.415 3.967-1.48 1.48A2 2 0 0 0 17 14v5l.091-.006A2 2 0 0 0 19 19h2a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2h-2a2 2 0 0 0-1.104 1.768l-.004.232V5l.209-.006A2 2 0 0 0 17 2h-2a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2z"/>
        </svg>
      );
    }

    if (techLower === 'react-hot-toast') {
      return (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 10.36 6 12.92 6 16v1h2v-1c0-2.14 1.34-3.96 3.18-4.7l.72-.28c.73-.28 1.43 0 2.1.54.68.54 1.12 1.27 1.12 2.07v1h2v-1zm-8-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
        </svg>
      );
    }
    
    if (techLower === 'api integration' || techLower === 'ai api') {
      return <Globe className="w-6 h-6" />;
    }
    
    // Default icon for other technologies
    return <Code2 className="w-6 h-6" />;
  };

  const getTechColor = (tech) => {
    const techLower = tech.toLowerCase();
    
    switch (techLower) {
      case 'react': return 'text-blue-600 border-blue-200 bg-blue-50 dark:bg-blue-900 dark:text-blue-200 dark:border-blue-700';
      case 'node.js': return 'text-green-600 border-green-200 bg-green-50 dark:bg-green-900 dark:text-green-200 dark:border-green-700';
      case 'mongodb': return 'text-green-700 border-green-200 bg-green-50 dark:bg-green-900 dark:text-green-200 dark:border-green-700';
      case 'express': return 'text-gray-700 border-gray-200 bg-gray-50 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600';
      case 'javascript': return 'text-yellow-600 border-yellow-200 bg-yellow-50 dark:bg-yellow-900 dark:text-yellow-200 dark:border-yellow-700';
      case 'api integration': return 'text-purple-600 border-purple-200 bg-purple-50 dark:bg-purple-900 dark:text-purple-200 dark:border-purple-700';
      case 'ai api': return 'text-indigo-600 border-indigo-200 bg-indigo-50 dark:bg-indigo-900 dark:text-indigo-200 dark:border-indigo-700';
      case 'tailwind css': return 'text-cyan-500 border-cyan-200 bg-cyan-50 dark:bg-cyan-900 dark:text-cyan-200 dark:border-cyan-700';
      case 'bcrypt': return 'text-red-600 border-red-200 bg-red-50 dark:bg-red-900 dark:text-red-200 dark:border-red-700';
      case 'jwt': return 'text-green-600 border-green-200 bg-green-50 dark:bg-green-900 dark:text-green-200 dark:border-green-700';
      case 'react-hot-toast': return 'text-amber-600 border-amber-200 bg-amber-50 dark:bg-amber-900 dark:text-amber-200 dark:border-amber-700';
      default: return 'text-gray-600 border-gray-200 bg-gray-50 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600';
    }
  };

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">Project not found</h1>
          <button 
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 hover:bg-gray-800 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </button>
        </div>
      </div>
    );
  }

  useEffect(()=>{
    scrollTo(0,0);
  },[])

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

      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 relative overflow-hidden">
        {/* Minimal geometric background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-32 right-16 w-96 h-96 border border-gray-200 dark:border-gray-700 rotate-12"></div>
          <div className="absolute bottom-20 left-20 w-64 h-64 border border-gray-200 dark:border-gray-700 rounded-full"></div>
          <div className="absolute top-1/3 left-1/3 w-2 h-40 bg-gray-200 dark:bg-gray-700 rotate-45"></div>
        </div>

        <div className="relative z-10">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="container mx-auto px-8 py-8"
          >
            <button 
              onClick={() => navigate('/')}
              className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-200 mb-8 group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-200" />
              <span className="font-medium">Back to Portfolio</span>
            </button>
          </motion.div>

          {/* Main Content */}
          <div className="container mx-auto px-8 max-w-6xl pb-20">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Left Column - Image */}
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <div className="relative overflow-hidden bg-gray-200 dark:bg-gray-800 aspect-video">
                  <img 
                    src={`/${project.image}`} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/600x400/e5e7eb/374151?text=Project+Image';
                    }}
                  />
                  {project.featured && (
                    <div className="absolute top-4 left-4">
                      <div className="bg-black text-white px-3 py-1 text-xs font-medium mono">
                        FEATURED
                      </div>
                    </div>
                  )}
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/90 dark:bg-gray-800/90 border border-gray-300 dark:border-gray-600 text-black dark:text-white px-3 py-1 text-xs font-medium mono">
                      {project.category}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-3 bg-black text-white px-6 py-4 hover:bg-gray-800 transition-all duration-300 font-medium group"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span>View Live Project</span>
                  </a>
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-3 border border-gray-300 dark:border-gray-600 text-black dark:text-white hover:border-black dark:hover:border-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black px-6 py-4 transition-all duration-300 font-medium"
                  >
                    <Code2 className="w-5 h-5" />
                    <span>View Code</span>
                  </a>
                </div>
              </motion.div>

              {/* Right Column - Content */}
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-8"
              >
                {/* Project Title & Description */}
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-6 leading-tight">
                    {project.title}
                  </h1>
                  <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed font-light">
                    {project.description}
                  </p>
                </div>

                {/* Technologies Used */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <Code2 className="w-6 h-6 text-black dark:text-white" />
                    <h3 className="text-xl font-bold text-black dark:text-white">Technologies Used</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {project.tech.map((tech, index) => (
                      <motion.div
                        key={tech}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                        className={`flex items-center gap-4 p-4 border-2 transition-all duration-300 hover:shadow-md ${getTechColor(tech)}`}
                      >
                        {getTechIcon(tech)}
                        <span className="font-semibold">{tech}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Project Purpose */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Target className="w-6 h-6 text-black dark:text-white" />
                    <h3 className="text-xl font-bold text-black dark:text-white">Project Purpose</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-light bg-gray-50 dark:bg-gray-800 p-6 border-l-4 border-black dark:border-white">
                    {project.purpose}
                  </p>
                </div>

                {/* Key Features */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <Zap className="w-6 h-6 text-black dark:text-white" />
                    <h3 className="text-xl font-bold text-black dark:text-white">Key Features</h3>
                  </div>
                  
                  <div className="space-y-3">
                    {project.keyFeatures.map((feature, index) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 + index * 0.1 }}
                        className="flex items-start gap-4 group"
                      >
                        <div className="flex-shrink-0 w-6 h-6 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mt-1 group-hover:bg-green-600 dark:group-hover:bg-green-400 group-hover:text-white dark:group-hover:text-black transition-colors duration-200">
                          <CheckCircle className="w-4 h-4" />
                        </div>
                        <p className="text-gray-700 dark:text-gray-300 font-medium group-hover:text-black dark:group-hover:text-white transition-colors duration-200">
                          {feature}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Project Stats */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                  className="border-t border-gray-200 dark:border-gray-700 pt-8 grid grid-cols-2 gap-8"
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold text-black dark:text-white mb-2">
                      {project.tech.length}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 font-medium mono uppercase tracking-wide">
                      Technologies
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-black dark:text-white mb-2">
                      {project.keyFeatures.length}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 font-medium mono uppercase tracking-wide">
                      Key Features
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetails;