import { motion } from 'framer-motion';
import { ExternalLink, ArrowUpRight, Eye } from 'lucide-react';
import { SiReact, SiNodedotjs, SiMongodb, SiExpress, SiTailwindcss, SiStripe, SiCloudinary, SiJsonwebtokens } from 'react-icons/si';
import { Lock, Bell, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Projects = () => {
  const projects = [
    {
      id: 'multimart',
      title: "MultiMart",
      description: "A comprehensive full-stack multivendor e-commerce platform where vendors can list products, manage inventory, and customers can shop across multiple stores with secure payments",
      image: "multivendor.jpg",
      tech: ["React", "Node.js", "MongoDB", "Express","API Integration", "JWT" ,"Tailwind CSS","Tailwind CSS"],
      link: "http://multimarts.vercel.app/",
      githubLink: "https://github.com/AliRana30/multimart",
      category: "Full-Stack",
      featured: true,
      purpose: "To create a complete multivendor marketplace that empowers small businesses to sell online while providing customers with a diverse shopping experience across multiple vendors.",
      keyFeatures: [
        "Multi-vendor product management",
        "Secure Stripe payment integration",
        "Real-time inventory tracking",
        "Vendor dashboard with analytics",
        "Advanced product search and filtering",
        "Order management system",
        "Image optimization with Cloudinary",
        "Responsive design for all devices"
      ]
    },
    {
      id: 'moviemate',
      title: "MovieMate",
      description: "A movie discovery platform that helps users find and explore movies with detailed information, reviews, and recommendations",
      image: "moviemate.jpg",
      tech: ["React", "Node.js", "API Integration", "MongoDB", "Tailwind CSS", "JWT" , "Express"],
      link: "https://moviemate-app-psi.vercel.app/",
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
    {
      id: 'promptly',
      title: "Promptly (AI Assistant)",
      description: "An advanced AI-powered assistant that provides intelligent responses, helps with problem-solving, and offers personalized assistance for various tasks",
      image: "AIAssistant.jpg",
      tech: ["React", "Node.js", "AI API", "MongoDB", "Express", "Tailwind CSS", "JWT"],
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
      title: "DriveEase",
      description: "A React-based car rental website that allows users to rent cars from the comfort of their home, featuring modern UI/UX and seamless booking experience",
      image: "Drive-Ease.png",
      tech: ["React", "Node.js", "MongoDB", "API Integration", "Tailwind CSS", "JWT"],
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
    
    const iconMap = {
      'react': <SiReact className="w-4 h-4" />,
      'node.js': <SiNodedotjs className="w-4 h-4" />,
      'mongodb': <SiMongodb className="w-4 h-4" />,
      'express': <SiExpress className="w-4 h-4" />,
      'tailwind css': <SiTailwindcss className="w-4 h-4" />,
      'stripe': <SiStripe className="w-4 h-4" />,
      'cloudinary': <SiCloudinary className="w-4 h-4" />,
      'jwt': <SiJsonwebtokens className="w-4 h-4" />,
      'bcrypt': <Lock className="w-4 h-4" />,
      'react-hot-toast': <Bell className="w-4 h-4" />
    };
    
    return iconMap[techLower] || <Zap className="w-4 h-4" />;
  };

  const getTechColor = (tech) => {
    const techLower = tech.toLowerCase();
    
    const colorMap = {
      'react': 'text-[#61DAFB] border-gray-200',
      'node.js': 'text-[#339933] border-gray-200',
      'mongodb': 'text-[#47A248] border-gray-200',
      'express': 'text-gray-700 border-gray-200',
      'api integration': 'text-purple-600 border-gray-200',
      'ai api': 'text-indigo-600 border-gray-200',
      'tailwind css': 'text-[#06B6D4] border-gray-200',
      'stripe': 'text-[#635BFF] border-gray-200',
      'cloudinary': 'text-[#3448C5] border-gray-200',
      'jwt': 'text-pink-600 border-gray-200',
      'bcrypt': 'text-red-600 border-gray-200',
      'react-hot-toast': 'text-amber-600 border-gray-200'
    };
    
    return colorMap[techLower] || 'text-gray-600 border-gray-200';
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
              
              <h2 className="text-3xl md:text-3xl font-light leading-tight mb-6">
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
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {projects.map((project, index) => (
                <motion.div 
                  key={index}
                  variants={cardVariants}
                  className="group bg-white border border-gray-200 hover:border-gray-400 transition-all duration-300 overflow-hidden relative"
                >
                  {/* Featured badge */}
                  {project.featured && (
                    <div className="absolute top-4 left-4 z-10">
                      <div className="bg-black text-white px-3 py-1.5 text-xs font-medium mono">
                        FEATURED
                      </div>
                    </div>
                  )}

                  {/* Category badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <div className="bg-white/95 backdrop-blur-sm border border-gray-300 text-black px-3 py-1.5 text-xs font-medium mono">
                      {project.category}
                    </div>
                  </div>

                  {/* Image container */}
                  <div className="relative h-56 overflow-hidden bg-gray-100">
                    <img 
                      src={`/${project.image}`} 
                      alt={project.title} 
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/600x400/e5e7eb/374151?text=Project+Image';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Overlay button */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white hover:bg-gray-100 text-black p-3 border border-gray-300 transition-colors duration-200"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-semibold text-black">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                    
                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tech.slice(0, 16).map((tech) => (
                        <div
                          key={tech}
                          className={`flex items-center gap-1.5 px-2.5 py-1 border bg-white text-xs font-medium mono transition-all duration-200 hover:border-gray-400 ${getTechColor(tech)}`}
                        >
                          {getTechIcon(tech)}
                          <span className="text-gray-700">{tech}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* CTA Buttons */}
                    <div className="pt-4 flex gap-3">
                      <Link
                        to={`/project/${project.id}`}
                        className="flex-1 inline-flex items-center justify-center gap-2 border-2 border-black text-black px-4 py-2.5 hover:bg-black hover:text-white transition-all duration-300 font-medium"
                      >
                        <Eye className="w-4 h-4" />
                        <span>Details</span>
                      </Link>
                      
                      <Link 
                        to={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 bg-black text-white px-4 py-2.5 hover:bg-gray-800 transition-all duration-300 font-medium group/link"
                      >
                        <span>Live Demo</span>
                        <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform duration-200" />
                      </Link>

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