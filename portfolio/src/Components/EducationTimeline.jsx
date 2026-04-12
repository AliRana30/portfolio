import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Eye } from 'lucide-react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { use3DTilt } from '../hooks/use3DAnimations';

const CertificateCard = ({ cert, index, onOpen }) => {
  const tiltRef = use3DTilt({ maxRotation: 8, perspective: 800 });

  return (
    <motion.button
      type="button"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group w-full text-left border border-gray-200 bg-white p-4 transition-all duration-300 hover:border-black"
      onClick={onOpen}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-6px)';
        e.currentTarget.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.12)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.06)';
      }}
    >
      <div ref={tiltRef} style={{ perspective: '800px', transformStyle: 'preserve-3d' }}>
        <div className="relative overflow-hidden border border-gray-200 bg-gray-100">
          <img src={`/${cert.image}`} alt={cert.name} className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]" />
          <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/25">
            <Eye className="h-6 w-6 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </div>
        </div>
        <p className="mt-3 inline-block text-sm font-medium text-black border-b border-transparent transition-all duration-200 group-hover:border-black">
          {cert.name}
        </p>
      </div>
    </motion.button>
  );
};

const EducationTimeline = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const timelineEntries = [
    {
      id: 1,
      title: 'University of South Asia',
      subtitle: 'BS Computer Science',
      duration: 'Dec 2022 - Present',
      location: 'Lahore, Pakistan',
      description: 'CGPA: 3.55, Fall 2026.',
      badge: 'Current'
    },
    {
      id: 2,
      title: 'DevWeekends Fellowship',
      subtitle: 'Full Stack Developer Fellow',
      duration: 'Jun 2025 - Aug 2025',
      location: 'Remote',
      description: 'Built production full-stack systems with secure auth, APIs, and performance-focused patterns.',
      badge: 'Fellowship'
    },
    {
      id: 3,
      title: 'Graphic Design Certification',
      subtitle: 'Peak Solutions College',
      duration: 'Dec 2022',
      location: 'Lahore, Pakistan',
      description: 'Completed professional design training with practical project delivery.',
      badge: 'Certificate'
    }
  ];


  useEffect(() => {
    const targets = document.querySelectorAll('.edu-reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('edu-reveal-visible');
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.15 }
    );

    targets.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative bg-gray-50">
      <style jsx>{`
        .edu-reveal {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.5s ease-out, transform 0.5s ease-out;
        }

        .edu-reveal-visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-32 right-24 h-56 w-56 border border-gray-200 rotate-12" />
        <div className="absolute bottom-24 left-20 h-32 w-32 border border-gray-200 rounded-full" />
      </div>

      <section id="education" className="relative z-10 py-24">
        <div className="container mx-auto max-w-6xl px-8">
          <div className="mb-20 edu-reveal">
            <div className="mb-8 flex items-center gap-4">
              <div className="h-[1px] w-12 bg-black" />
              <span className="mono text-sm font-medium uppercase tracking-wider text-gray-500">Education</span>
            </div>

            <h2 className="section-heading mb-6 text-3xl font-light leading-tight md:text-4xl">
              <span className="font-extralight text-gray-700">Education and</span>
              <br />
              <span className="font-bold text-black">Certifications</span>
            </h2>

            <p className="max-w-2xl text-lg font-light text-gray-600">
              A timeline of formal education and verified milestones with certificate previews.
            </p>
          </div>

          <div className="mb-20 border-l-2 border-gray-200 pl-8">
            {timelineEntries.map((entry, index) => (
              <motion.div
                key={entry.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="edu-reveal relative mb-10 last:mb-0"
              >
                <span className="absolute -left-[42px] top-1 h-4 w-4 rounded-full border-2 border-black bg-white" />

                <div className="border border-gray-200 bg-white p-6 transition-colors duration-300 hover:border-black">
                  <div className="mb-4 flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-semibold text-black">{entry.title}</h3>
                      <p className="text-sm font-medium text-gray-600">{entry.subtitle}</p>
                    </div>
                    <span className="border border-gray-300 px-3 py-1 text-xs font-medium text-gray-700">{entry.badge}</span>
                  </div>

                  <div className="mb-3 flex flex-wrap items-center gap-3 text-sm text-gray-600">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {entry.duration}
                    </span>
                    <span>•</span>
                    <span>{entry.location}</span>
                  </div>

                  <p className="leading-relaxed text-gray-700">{entry.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        
        </div>
      </section>

    </div>
  );
};

export default EducationTimeline;
