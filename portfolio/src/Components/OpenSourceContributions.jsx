import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, GitBranch } from 'lucide-react';
import { SiApache } from 'react-icons/si';
import { use3DTilt } from '../hooks/use3DAnimations';

const ContributionCard = ({ contribution, cardVariants }) => {
  const cardRef = use3DTilt({ maxRotation: 6, perspective: 1000 });

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      className="contribution-card transition-all duration-300"
      style={{
        perspective: '1000px',
        transformStyle: 'preserve-3d'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-5px)';
        e.currentTarget.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.1)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.05)';
      }}
    >
      <div className="contribution-card-inner">
        <div className="relative bg-white border border-gray-200 hover:border-gray-300 p-8 transition-all duration-300">
          <div className="contribution-border-glow"></div>

          <div className="flex gap-3 mb-6">
            <span className="inline-block px-4 py-2 bg-gray-100 text-gray-800 text-xs font-semibold border border-gray-200 hover:border-gray-400 transition-colors">
              {contribution.repo} {contribution.prNumber}
            </span>
            <span className="inline-block px-4 py-2 bg-gray-50 text-gray-700 text-xs font-semibold border border-gray-200">
              {contribution.language}
            </span>
          </div>

          <p className="text-gray-700 font-light leading-relaxed mb-6">
            {contribution.description}
          </p>

          <motion.a
            href={contribution.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ x: 2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-4 py-2 text-sm border border-gray-200 text-black font-medium hover:border-black hover:bg-gray-50 transition-all duration-200 group"
          >
            <GitBranch className="w-4 h-4" />
            View PR
            <ExternalLink className="w-4 h-4 group-hover:rotate-45 group-hover:scale-110 transition-all duration-200" />
          </motion.a>

          <div className="absolute top-8 right-8 opacity-5 transition-opacity">
            <GitBranch className="w-12 h-12" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const OpenSourceContributions = () => {
  const contributions = [
    {
      id: 1,
      repo: 'Apache Arrow',
      prNumber: '#49171',
      language: 'C++',
      description:
        'Removed deprecated decimal factory APIs from the C++ module, improving codebase maintainability and ensuring build stability with no regressions.',
      link: 'https://github.com/apache/arrow/pull/49171'
    },
    {
      id: 2,
      repo: 'Apache Arrow',
      prNumber: '#49105',
      language: 'C++',
      description:
        'Fixed a segmentation fault in SparseCSFIndex equality comparison logic. Added dimension validation checks and automated test coverage for sparse tensor comparisons, improving memory safety.',
      link: 'https://github.com/apache/arrow/pull/49105'
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

        .contribution-card {
          perspective: 1200px;
          transition: all 0.3s ease;
        }

        .contribution-card:hover {
          transform: translateY(-8px);
        }

        .contribution-card-inner {
          transform-style: preserve-3d;
          transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .contribution-card:hover .contribution-card-inner {
          transform: rotateX(5deg) rotateY(-5deg);
        }

        .contribution-border-glow {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(100, 200, 255, 0.2) 0%, rgba(100, 200, 255, 0.05) 100%);
          border-radius: 12px;
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }

        .contribution-card:hover .contribution-border-glow {
          opacity: 1;
        }
      `}</style>

      <div className="relative bg-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-32 right-24 w-56 h-56 border border-gray-200 rotate-12"></div>
          <div className="absolute bottom-24 left-20 w-32 h-32 border border-gray-200 rounded-full"></div>
          <div className="absolute top-2/3 left-1/3 w-2 h-24 bg-gray-200 rotate-45"></div>
        </div>

        <section id="openSource" className="py-24 relative z-10">
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
                <span className="text-sm font-medium text-gray-500 tracking-wider uppercase mono">Open Source</span>
              </div>

              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-3xl md:text-4xl font-light leading-tight mb-6 section-heading">
                    <span className="font-extralight text-gray-700">Open Source</span>
                    <br />
                    <span className="font-bold text-black">Contributions</span>
                  </h2>

                  <p className="text-lg text-gray-600 font-light max-w-2xl">
                    Contributing to meaningful open source projects that impact the developer community.
                  </p>
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-gray-600 opacity-75 hover:opacity-100 transition-opacity duration-300"
                >
                  <SiApache size={48} />
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {contributions.map((contribution) => (
                <ContributionCard key={contribution.id} contribution={contribution} cardVariants={cardVariants} />
              ))}
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default OpenSourceContributions;
