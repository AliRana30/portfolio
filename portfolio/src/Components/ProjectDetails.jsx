import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Target, Zap, Code2, CheckCircle, Github, AlertCircle, Lightbulb } from 'lucide-react';
import { SiReact, SiNodedotjs, SiMongodb, SiExpress, SiTailwindcss, SiJsonwebtokens, SiCloudinary, SiNextdotjs, SiRedis, SiSocketdotio, SiStripe, SiRedux, SiPaypal, SiAmazons3, SiShadcnui, SiFramer } from 'react-icons/si';
import { useParams, useNavigate } from 'react-router-dom';

const ProjectDetails = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const { id } = useParams(); 
  const navigate = useNavigate();
  
  const projects = {
    noretmy: {
      id: 'noretmy',
      title: "Noretmy",
      description: "A production-level freelancing marketplace combining Fiverr's gig model with Upwork's milestone-based project flow, featuring real-time chat, automated seller leveling, and secure multi-payment gateway integration.",
      image: "Noretmy.png",
      tech: ["Next.js", "Node.js", "MongoDB", "Express", "Redux Toolkit", "Socket.io", "Stripe", "PayPal", "AWS S3", "Cloudinary", "Framer Motion", "Tailwind CSS", "Shadcn/UI"],
      link: "https://noretmy.vercel.app/",
      githubLink: "#",
      category: "Full-Stack",
      featured: true,
      purpose: "Noretmy was engineered to solve the fragmentation in freelance platforms by merging gig-based services with milestone-driven project management. The goal was to build a robust system that handles the entire lifecycle of a freelance contract—from service listing and job posting to secure escrow-style payments, real-time collaboration, and automated performance tracking. It focuses on closing the operational gaps found in basic marketplace clones, such as formal dispute handling, VAT calculations, and dynamic seller leveling.",
      keyFeatures: [
        "Gig-based services and milestone-driven job posts",
        "Secure milestone-based payment release system (Escrow logic)",
        "Real-time chat with file sharing via Socket.io",
        "Automated seller badge leveling system via Cron jobs",
        "Dual payment gateway integration (Stripe & PayPal)",
        "Formal withdrawal request flow for freelancers",
        "AWS S3 and Cloudinary for media management",
        "Redux Toolkit for advanced state management",
        "Server-side VAT calculation and timeline extensions",
        "Interactive UI with Framer Motion and Shadcn/UI"
      ],
      challenges: [
        {
          challenge: "Escrow-style Milestone Payments",
          solution: "Implemented a custom payment flow where funds are held at the order level and released to the seller only upon client approval of specific milestones, with built-in dispute logic handled via the admin panel."
        },
        {
          challenge: "Automated Seller Leveling System",
          solution: "Built a Node-based cron job service that runs nightly to recalculate seller metrics (delivery rate, ratings, order volume) and automatically upgrades or downgrades seller badges (Level 1, Level 2, Pro)."
        },
        {
          challenge: "Real-time Multi-user Collaboration",
          solution: "Leveraged Socket.io for a persistent chat system that supports real-time message delivery, online status indicators, and secure file attachments stored on AWS S3."
        },
        {
          challenge: "Complex Business Logic (VAT & Extensions)",
          solution: "Developed server-side modules to handle dynamic VAT calculation based on user location and an extension request system that recalibrates order timelines only after mutual agreement."
        }
      ]
    },
    'sonicwave-pro': {
      id: 'sonicwave-pro',
      title: "SonicWave Pro",
      description: "A premium scrollytelling product page built with Next.js 14, TypeScript, Framer Motion, and Canvas-based frame sequencing for cinematic product reveal.",
      image: "SonicWave.png",
      tech: ["Next.js", "TypeScript", "Framer Motion", "GSAP", "Tailwind CSS", "Canvas API", "ScrollTrigger", "App Router"],
      link: "https://sonicwave-animate.vercel.app/",
      githubLink: "#",
      category: "Frontend",
      featured: true,
      purpose: "Built SonicWave Pro as an immersive, high-fidelity brand storytelling experience where product identity is revealed progressively through scroll. The objective was to combine cinematic motion design, frame-perfect canvas rendering, and premium visual styling into a responsive and performance-aware landing page that feels modern, intentional, and interactive on every screen size.",
      keyFeatures: [
        "Canvas-driven frame sequence animation synced to scroll progress",
        "Promise-based preloading pipeline for all frames with loading feedback",
        "Retina-aware canvas rendering and requestAnimationFrame draw scheduling",
        "Sticky navigation with animated active link indicator",
        "Hero section with staggered reveal and dynamic scroll prompt",
        "Glassmorphism overlays that enter/exit at timeline checkpoints",
        "Animated features grid with viewport-triggered stagger transitions",
        "Infinite marquee separator and specs comparison section",
        "Magnetic CTA interactions with branded gradient accents",
        "Custom cursor and nuanced micro-motion for premium feel"
      ],
      challenges: [
        {
          challenge: "Smooth Frame Scrubbing During Fast Scroll",
          solution: "Mapped scroll progress to frame index through a spring-smoothed motion value and rendered updates inside requestAnimationFrame to avoid jank and flicker."
        },
        {
          challenge: "Canvas Sharpness and Responsive Fit Across Devices",
          solution: "Implemented devicePixelRatio-aware canvas sizing and contain-style draw calculations so frames stay sharp and visually centered on mobile, tablet, and desktop."
        },
        {
          challenge: "Heavy Asset Preload Without Visible Hitches",
          solution: "Preloaded the sequence using Promise.all, tracked loading progress, and gated reveal behind a branded loader so playback begins only when frames are ready."
        },
        {
          challenge: "Complex Motion Layering While Maintaining Performance",
          solution: "Split animation responsibilities between Framer Motion transforms, CSS compositing, and lightweight section triggers to keep interactions fluid without layout thrash."
        }
      ]
    },
    campuscore: {
      id: 'campuscore',
      title: "CampusCore LMS",
      description: "Production-oriented LMS built for scalability, security, and real-world EdTech requirements across content, payments, notifications, and analytics.",
      image: "LMS-homepage.jpg",
      tech: ["Next.js", "Node.js", "MongoDB", "Express", "Redis", "Stripe", "Cloudinary", "Socket.io", "JWT", "Tailwind CSS"],
      link: "https://lms-e-learning-system.vercel.app/",
      githubLink: "https://github.com/AliRana30/LMS",
      category: "Full-Stack",
      featured: true,
      purpose: "Designed and developed CampusCore as a production-oriented LMS focused on scalability, secure delivery, and practical EdTech workflows. The platform handles the full lifecycle of online learning, including instructor-side course publishing and monetization, student-side enrollments and progress access, and platform-level administration through analytics dashboards. It emphasizes secure content delivery, resilient payment flows, role-based access, and performance optimization so the system can support real users and real business operations.",
      keyFeatures: [
        "Course creation and management with secure VDOCipher video streaming",
        "Paid enrollments with Stripe payment integration",
        "Multi-authentication support (Email, Google, GitHub OAuth)",
        "Real-time notifications using Socket.io",
        "Role-based admin dashboard with analytics for users, courses, and orders",
        "Q&A module with threaded discussions",
        "Course reviews and rating system",
        "Redis-based caching for performance optimization",
        "Email notifications via Nodemailer",
        "Dark and light theme support",
        "Fully responsive, cross-device UI"
      ],
      challenges: [
        {
          challenge: "Cross-Origin Authentication",
          solution: "Configured cookies with sameSite: 'none' and secure: true for production, enabling cross-origin authentication between Vercel frontend and Render backend"
        },
        {
          challenge: "Email Template Resolution in Production",
          solution: "Fixed template path resolution using __dirname instead of process.cwd() ensuring EJS templates are found correctly in the build directory"
        },
        {
          challenge: "Real-time Notification System",
          solution: "Implemented Socket.io for instant notifications when students purchase courses or post questions, with Redis for pub/sub in production"
        },
        {
          challenge: "Stripe Payment Integration",
          solution: "Built secure payment flow with payment intent creation, client-side confirmation, and server-side verification before order creation"
        }
      ]
    },
    multimart: {
      id: 'multimart',
      title: "MultiMart",
      description: "A comprehensive full-stack multivendor e-commerce platform where vendors can list products, manage inventory, and customers can shop across multiple stores with secure payments",
      image: "multivendor.jpg",
      tech: ["React", "Node.js", "MongoDB", "Express", "Multer", "Tailwind CSS", "JWT"],
      link: "http://multimarts.vercel.app/",
      githubLink: "https://github.com/AliRana30/multimart",
      category: "Full-Stack",
      featured: true,
      purpose: "To create a complete multivendor marketplace that empowers small businesses to sell online while providing customers with a diverse shopping experience across multiple vendors.",
      keyFeatures: [
        "Multi-vendor product management with role-based access",
        "Secure payment processing with order confirmation",
        "Real-time inventory tracking and stock management",
        "Vendor dashboard with sales analytics and insights",
        "Advanced product filtering and search capabilities",
        "Complete order lifecycle management system",
        "Image optimization using Cloudinary CDN",
        "Fully responsive design across all devices"
      ],
      challenges: [
        {
          challenge: "Complex Multi-Vendor Architecture",
          solution: "Implemented role-based authentication system with separate dashboards for vendors and customers, using JWT tokens and middleware for access control"
        },
        {
          challenge: "Payment Processing Integration",
          solution: "Built secure payment gateway integration with proper error handling and order confirmation workflow"
        },
        {
          challenge: "Inventory Synchronization",
          solution: "Built real-time inventory management using MongoDB transactions to prevent overselling and maintain data consistency across vendors"
        },
        {
          challenge: "Image Storage & Performance",
          solution: "Leveraged Cloudinary for automatic image optimization, lazy loading, and responsive image delivery to reduce load times"
        }
      ]
    },
    moviemate: {
      id: 'moviemate',
      title: "MovieMate",
      description: "A movie discovery platform that helps users find and explore movies with detailed information, reviews, and recommendations",
      image: "moviemate.jpg",
      tech: ["React", "Node.js", "API Integration", "MongoDB", "Tailwind CSS", "JWT", "Express"],
      link: "https://moviemate-app-psi.vercel.app/",
      githubLink: "https://github.com/AliRana30/moviemate",
      category: "Full-Stack",
      featured: false,
      purpose: "To create an intuitive platform for movie enthusiasts to discover, explore, and get detailed information about movies with personalized recommendations.",
      keyFeatures: [
        "Advanced movie search with multiple filter options",
        "Detailed movie information with cast and crew",
        "Personalized recommendations based on preferences",
        "User rating and review system",
        "Watchlist functionality with local storage",
        "Real-time movie data from external APIs"
      ],
      challenges: [
        {
          challenge: "API Rate Limiting",
          solution: "Implemented caching strategy to store frequently accessed movie data, reducing API calls by 70% and improving response times"
        },
        {
          challenge: "Search Performance",
          solution: "Built indexed MongoDB collections with text search and optimized queries to deliver results under 200ms"
        },
        {
          challenge: "User Personalization",
          solution: "Created recommendation algorithm analyzing user watch history and ratings to suggest relevant content"
        }
      ]
    },
    promptly: {
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
        "Natural language understanding and processing",
        "Context-aware multi-turn conversations",
        "Real-time streaming response generation",
        "User session and conversation history",
        "Customizable AI behavior and personality",
        "Secure user authentication"
      ],
      challenges: [
        {
          challenge: "Response Latency",
          solution: "Implemented streaming responses with real-time updates to display AI output as it generates, improving perceived performance"
        },
        {
          challenge: "Context Management",
          solution: "Built efficient conversation history system storing only relevant context to maintain coherent multi-turn dialogues"
        },
        {
          challenge: "API Cost Optimization",
          solution: "Created intelligent caching for similar queries and implemented token counting to optimize API usage costs"
        }
      ]
    },
    "rental-car": {
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
        "Comprehensive car catalog with detailed specifications",
        "Real-time availability and booking calendar",
        "Dynamic pricing based on rental duration",
        "User account with booking history",
        "Mobile-responsive booking interface",
        "Secure payment processing"
      ],
      challenges: [
        {
          challenge: "Booking Conflicts",
          solution: "Implemented date range validation and real-time availability checking to prevent double bookings"
        },
        {
          challenge: "Pricing Calculations",
          solution: "Built flexible pricing engine handling seasonal rates, duration discounts, and additional service charges"
        },
        {
          challenge: "Mobile Experience",
          solution: "Designed touch-optimized interface with simplified booking flow specifically for mobile users"
        }
      ]
    }
  };

  const project = projects[id];

  const getTechIcon = (tech) => {
    const iconMap = {
      'react': <SiReact className="w-4 h-4 md:w-5 md:h-5" />,
      'next.js': <SiNextdotjs className="w-4 h-4 md:w-5 md:h-5" />,
      'node.js': <SiNodedotjs className="w-4 h-4 md:w-5 md:h-5" />,
      'mongodb': <SiMongodb className="w-4 h-4 md:w-5 md:h-5" />,
      'express': <SiExpress className="w-4 h-4 md:w-5 md:h-5" />,
      'tailwind css': <SiTailwindcss className="w-4 h-4 md:w-5 md:h-5" />,
      'multer': <SiCloudinary className="w-4 h-4 md:w-5 md:h-5" />,
      'cloudinary': <SiCloudinary className="w-4 h-4 md:w-5 md:h-5" />,
      'jwt': <SiJsonwebtokens className="w-4 h-4 md:w-5 md:h-5" />,
      'redis': <SiRedis className="w-4 h-4 md:w-5 md:h-5" />,
      'socket.io': <SiSocketdotio className="w-4 h-4 md:w-5 md:h-5" />,
      'stripe': <SiStripe className="w-4 h-4 md:w-5 md:h-5" />,
      'redux toolkit': <SiRedux className="w-4 h-4 md:w-5 md:h-5" />,
      'paypal': <SiPaypal className="w-4 h-4 md:w-5 md:h-5" />,
      'aws s3': <SiAmazons3 className="w-4 h-4 md:w-5 md:h-5" />,
      'shadcn/ui': <SiShadcnui className="w-4 h-4 md:w-5 md:h-5" />,
      'framer motion': <SiFramer className="w-4 h-4 md:w-5 md:h-5" />
    };
    
    return iconMap[tech.toLowerCase()] || <Code2 className="w-4 h-4 md:w-5 md:h-5" />;
  };

  const getTechColor = (tech) => {
    const colorMap = {
      'react': 'text-[#61DAFB]',
      'next.js': 'text-black',
      'typescript': 'text-[#3178C6]',
      'framer motion': 'text-[#0055FF]',
      'gsap': 'text-[#88CE02]',
      'canvas api': 'text-[#0F172A]',
      'scrolltrigger': 'text-[#84CC16]',
      'app router': 'text-gray-700',
      'node.js': 'text-[#339933]',
      'mongodb': 'text-[#47A248]',
      'express': 'text-gray-700',
      'api integration': 'text-purple-600',
      'ai api': 'text-indigo-600',
      'tailwind css': 'text-[#06B6D4]',
      'cloudinary': 'text-[#3448C5]',
      'jwt': 'text-pink-600',
      'redis': 'text-[#DC382D]',
      'socket.io': 'text-black',
      'stripe': 'text-[#635BFF]',
      'redux toolkit': 'text-[#764ABC]',
      'paypal': 'text-[#00457C]',
      'aws s3': 'text-[#FF9900]',
      'shadcn/ui': 'text-gray-700'
    };
    
    return colorMap[tech.toLowerCase()] || 'text-gray-600';
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-xl md:text-2xl font-bold text-black mb-4">Project not found</h1>
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

      <div className="min-h-screen bg-white relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-4 md:right-10 w-48 md:w-72 h-48 md:h-72 border border-gray-100 rotate-12"></div>
          <div className="absolute bottom-20 left-4 md:left-10 w-32 md:w-48 h-32 md:h-48 border border-gray-100 rounded-full"></div>
        </div>

        <div className="relative z-10">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8 max-w-7xl"
          >
            <button 
              onClick={() => navigate('/')}
              className="inline-flex items-center gap-2 text-gray-600 hover:text-black transition-colors group text-sm md:text-base"
            >
              <ArrowLeft className="w-4 h-4 md:w-5 md:h-5 group-hover:-translate-x-1 transition-transform" />
              <span className="font-medium">Back to Projects</span>
            </button>
          </motion.div>

          {/* Hero Section */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl pb-8 md:pb-12">
            <div className="grid lg:grid-cols-5 gap-8 md:gap-12">
              {/* Left: Image */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="lg:col-span-2"
              >
                <div className="relative aspect-video bg-gray-100 overflow-hidden border border-gray-200">
                  <img 
                    src={`/${project.image}`} 
                    alt={project.title}
                    className="w-full h-full object-cover object-top"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/600x400/f3f4f6/374151?text=Project';
                    }}
                  />
                  {project.featured && (
                    <div className="absolute top-3 left-3 md:top-4 md:left-4 bg-black text-white px-2 py-1 md:px-3 md:py-1.5 text-xs font-medium mono">
                      FEATURED
                    </div>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 mt-4 md:mt-6">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-black text-white px-4 py-2.5 md:px-5 md:py-3 hover:bg-gray-800 transition-all font-medium text-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 border-2 border-black text-black hover:bg-black hover:text-white px-4 py-2.5 md:px-5 md:py-3 transition-all font-medium text-sm"
                  >
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </a>
                </div>
              </motion.div>

              {/* Right: Content */}
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="lg:col-span-3 space-y-6 md:space-y-8"
              >
                {/* Title */}
                <div>
                  <div className="inline-block px-2.5 py-1 md:px-3 md:py-1 bg-gray-100 text-gray-700 text-xs font-medium mono mb-3 md:mb-4">
                    {project.category}
                  </div>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-3 md:mb-4 break-words">
                    {project.title}
                  </h1>
                  <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div>
                  <h3 className="text-xs md:text-sm font-semibold text-black mb-3 md:mb-4 tracking-wide uppercase">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2 md:gap-3">
                    {project.tech.map((tech) => (
                      <div
                        key={tech}
                        className={`flex items-center gap-1.5 md:gap-2 px-2.5 py-1.5 md:px-3 md:py-2 border border-gray-200 bg-white hover:border-gray-400 transition-all ${getTechColor(tech)}`}
                      >
                        {getTechIcon(tech)}
                        <span className="text-xs md:text-sm font-medium text-gray-700">{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Tabs Section */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="border border-gray-200 bg-white mb-6 md:mb-8 overflow-x-auto px-4 md:px-6">
              <div className="flex gap-4 md:gap-8 min-w-max sm:min-w-0">
                {['overview', 'features', 'challenges'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`py-3 md:py-4 text-xs md:text-sm font-medium uppercase tracking-wide transition-all relative whitespace-nowrap ${
                      activeTab === tab 
                        ? 'text-black' 
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    {tab}
                    {activeTab === tab && (
                      <motion.div 
                        layoutId="activeTab"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-black"
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="pb-12 md:pb-20"
            >
              {activeTab === 'overview' && (
                <div className="space-y-6 md:space-y-8 max-w-4xl">
                  <div>
                    <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                      <Target className="w-4 h-4 md:w-5 md:h-5 text-black flex-shrink-0" />
                      <h3 className="text-lg md:text-xl font-semibold text-black">Project Purpose</h3>
                    </div>
                    <p className="text-sm md:text-base text-gray-700 leading-relaxed bg-gradient-to-br from-gray-50 to-white p-4 md:p-6 border border-gray-200 border-l-4 border-l-black shadow-sm">
                      {project.purpose}
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-3 md:gap-6 pt-4 md:pt-6">
                    <div className="text-center p-4 md:p-6 border border-gray-200 bg-white hover:border-gray-400 hover:shadow-md transition-all duration-300">
                      <div className="text-2xl md:text-3xl font-bold text-black mb-1 md:mb-2">{project.tech.length}</div>
                      <div className="text-xs md:text-sm text-gray-600 font-medium mono uppercase">Technologies</div>
                    </div>
                    <div className="text-center p-4 md:p-6 border border-gray-200 bg-white hover:border-gray-400 hover:shadow-md transition-all duration-300">
                      <div className="text-2xl md:text-3xl font-bold text-black mb-1 md:mb-2">{project.keyFeatures.length}</div>
                      <div className="text-xs md:text-sm text-gray-600 font-medium mono uppercase">Features</div>
                    </div>
                    <div className="text-center p-4 md:p-6 border border-gray-200 bg-white hover:border-gray-400 hover:shadow-md transition-all duration-300">
                      <div className="text-2xl md:text-3xl font-bold text-black mb-1 md:mb-2">{project.challenges.length}</div>
                      <div className="text-xs md:text-sm text-gray-600 font-medium mono uppercase">Challenges</div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'features' && (
                <div className="max-w-4xl">
                  <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                    <Zap className="w-4 h-4 md:w-5 md:h-5 text-black flex-shrink-0" />
                    <h3 className="text-lg md:text-xl font-semibold text-black">Key Features</h3>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-3 md:gap-4">
                    {project.keyFeatures.map((feature, index) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-2 md:gap-3 p-3 md:p-4 border border-gray-200 hover:border-gray-400 transition-all bg-white hover:shadow-md"
                      >
                        <div className="flex-shrink-0 w-4 h-4 md:w-5 md:h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                          <CheckCircle className="w-3 h-3 md:w-3.5 md:h-3.5 text-green-600" />
                        </div>
                        <div className="space-y-1">
                          <div className="text-[10px] md:text-xs text-gray-500 mono">FEATURE {String(index + 1).padStart(2, '0')}</div>
                          <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                          {feature}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'challenges' && (
                <div className="max-w-5xl">
                  <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                    <Lightbulb className="w-4 h-4 md:w-5 md:h-5 text-black flex-shrink-0" />
                    <h3 className="text-lg md:text-xl font-semibold text-black">Challenges & Solutions</h3>
                  </div>

                  <div className="space-y-4 md:space-y-6">
                    {project.challenges.map((item, index) => (
                      <motion.div
                        key={item.challenge}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="border border-gray-200 hover:border-gray-400 transition-all overflow-hidden bg-white hover:shadow-md"
                      >
                        <div className="px-4 md:px-6 py-2 border-b border-gray-200 bg-gray-50">
                          <span className="text-[10px] md:text-xs text-gray-500 mono">CASE {String(index + 1).padStart(2, '0')}</span>
                        </div>
                        <div className="grid md:grid-cols-2">
                          <div className="p-4 md:p-6 border-b md:border-b-0 md:border-r border-gray-200 bg-red-50/70">
                            <div className="flex items-start gap-2 md:gap-3">
                              <AlertCircle className="w-4 h-4 md:w-5 md:h-5 text-red-600 flex-shrink-0 mt-0.5" />
                              <div>
                                <h4 className="font-semibold text-black mb-1 md:mb-2 text-sm md:text-base">Challenge</h4>
                                <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                                  {item.challenge}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="p-4 md:p-6 bg-green-50/70">
                            <div className="flex items-start gap-2 md:gap-3">
                              <Lightbulb className="w-4 h-4 md:w-5 md:h-5 text-green-600 flex-shrink-0 mt-0.5" />
                              <div>
                                <h4 className="font-semibold text-black mb-1 md:mb-2 text-sm md:text-base">Solution</h4>
                                <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                                  {item.solution}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetails;