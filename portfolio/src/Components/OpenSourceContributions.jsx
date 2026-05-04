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
      whileHover={{ y: -6, boxShadow: '0 15px 40px rgba(0,0,0,0.06), 0 0 0 1px var(--border-subtle)' }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="contribution-card transition-all duration-300"
      style={{
        perspective: '1000px',
        transformStyle: 'preserve-3d'
      }}
    >
      <div className="contribution-card-inner">
        <div className="relative bg-surface border border-subtle p-10 transition-all duration-500 shadow-xl">
          <div className="contribution-border-glow"></div>

          <div className="flex flex-wrap gap-4 mb-8">
            <span className="inline-block px-5 py-2 bg-elevated text-primary text-[10px] font-bold uppercase tracking-widest border border-subtle hover:border-default transition-colors mono">
              {contribution.repo} {contribution.prNumber}
            </span>
            <span className="inline-block px-5 py-2 bg-elevated text-secondary text-[10px] font-bold uppercase tracking-widest border border-subtle mono">
              {contribution.language}
            </span>
          </div>

          <p className="text-secondary font-light leading-relaxed mb-8 text-base">
            {contribution.description}
          </p>

          <motion.a
            href={contribution.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ x: 2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 px-6 py-2.5 text-[11px] font-black uppercase tracking-[0.2em] border border-default text-primary hover:bg-primary transition-all duration-300 group mono"
          >
            <GitBranch className="w-4 h-4" />
            View Pull Request
            <ExternalLink className="w-4 h-4 group-hover:rotate-45 transition-all duration-200" />
          </motion.a>

          <div className="absolute top-10 right-10 opacity-5 transition-opacity pointer-events-none">
            <GitBranch className="w-16 h-16 text-primary" />
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
        staggerChildren: 0.08
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
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <div className="relative bg-primary">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-32 right-24 w-56 h-56 border border-subtle rotate-12"></div>
          <div className="absolute bottom-24 left-20 w-32 h-32 border border-subtle rounded-full"></div>
          <div className="absolute top-2/3 left-1/3 w-2 h-24 bg-border-subtle rotate-45"></div>
        </div>

        <section id="openSource" className="py-24 relative z-10">
          <div className="container mx-auto px-8 max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true, amount: 0.2 }}
              className="mb-20"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-[1.5px] bg-black"></div>
                <span className="text-sm font-medium text-secondary tracking-wider uppercase mono">Open Source</span>
              </div>

              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-3xl md:text-4xl font-light leading-tight mb-6 section-heading">
                    <span className="font-extralight text-secondary">Open Source</span>
                    <br />
                    <span className="font-bold text-primary">Contributions</span>
                  </h2>

                  <p className="text-lg text-secondary font-light max-w-2xl leading-relaxed">
                    Contributing to meaningful open source projects that impact the developer community.
                  </p>
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  viewport={{ once: true, amount: 0.2 }}
                  className="text-primary opacity-20 hover:opacity-50 transition-opacity duration-300"
                >
                  <SiApache size={48} />
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {contributions.map((contribution) => (
                <ContributionCard key={contribution.id} contribution={contribution} cardVariants={cardVariants} />
              ))}
            </motion.div>
          </div>
        </section>
      </div>
  );
};

export default OpenSourceContributions;
