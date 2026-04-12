import { motion } from 'framer-motion';
import { Award, Calendar, ExternalLink, CheckCircle, Eye, X } from 'lucide-react';
import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

const CertificationCard = ({ cert, index, onOpen, onViewDetails }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group border border-gray-200 bg-white p-4 transition-all duration-300 hover:border-black hover:shadow-sm"
    >
      <div>
        <button type="button" className="group/image relative mb-5 block h-48 w-full overflow-hidden border border-gray-200" onClick={onOpen}>
          <img src={`/${cert.image}`} alt={cert.title} className="h-full w-full object-cover transition-transform duration-300 group-hover/image:scale-[1.02]" />
          <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover/image:bg-black/25">
            <Eye className="h-6 w-6 text-white opacity-0 transition-opacity duration-300 group-hover/image:opacity-100" />
          </div>
          <div className="absolute right-3 top-3 bg-white p-2">
            <Award className="h-5 w-5 text-black" />
          </div>
        </button>

        <div className="space-y-4">
          <div className="flex items-start justify-between gap-2">
            <h3 className="leading-tight text-black text-lg font-bold">
              {cert.title}
            </h3>
            <CheckCircle className="h-5 w-5 flex-shrink-0 text-gray-400" />
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Calendar className="h-4 w-4" />
            <span>{cert.issuer}</span>
          </div>

          <p className="text-sm leading-relaxed text-gray-600">{cert.description}</p>

          <div className="flex flex-wrap gap-2">
            {cert.skills.map((skill) => (
              <span key={skill} className="mono border border-gray-200 px-3 py-1 text-xs font-medium text-gray-700">
                {skill}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between border-t border-gray-100 pt-4">
            <span className="mono text-sm font-medium text-gray-500">{cert.date}</span>
            <button
              type="button"
              onClick={onViewDetails}
              className="group/link inline-flex items-center gap-2 text-sm font-medium text-black transition-all duration-200 hover:gap-3"
            >
              View Details
              <ExternalLink className="h-3 w-3 transition-transform duration-200 group-hover/link:rotate-45" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Certifications = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [selectedCert, setSelectedCert] = useState(null);
  
  const certifications = [
    {
      id: 1,
      title: "Web Development Remote Internship",
      issuer: "Cogno-Rise Info-Tech",
      date: "2024",
      image: "Internship.PNG",
      description: "Comprehensive web development training covering modern frameworks and best practices",
      skills: ["JavaScript", "HTML/CSS"],
      credentialUrl: "#",
      details: "Completed a remote internship focused on practical web development workflows. Built responsive interfaces, worked with reusable components, and practiced clean coding standards, debugging, and deployment-oriented thinking in team-style tasks."
    },
    {
      id: 2,
      title: "Quiz Competition Winner",
      issuer: "University of South Asia",
      date: "2025",
      image: "Quiz_Competition.jpg",
      description: "Won university-wide quiz competition demonstrating excellence in Object-Oriented Programming, Data Structures & Algorithms, Database Management Systems, and general knowledge concepts",
      skills: ["OOP", "DSA", "DBMS", "Problem Solving"],
      credentialUrl: "#",
      details: "Secured top position in a competitive university quiz event by solving high-pressure conceptual and problem-solving rounds across OOP, DSA, DBMS, and logical reasoning. Demonstrated strong fundamentals, speed, and analytical accuracy."
    }
  ];

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
      
      <div className="relative bg-gray-50">
        {/* Minimal geometric background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-32 w-48 h-48 border border-gray-200 rotate-12"></div>
          <div className="absolute bottom-32 left-24 w-32 h-32 border border-gray-200 rounded-full"></div>
          <div className="absolute top-2/3 left-1/3 w-2 h-20 bg-gray-200 rotate-45"></div>
        </div>

        <section id="certifications" className="py-24 relative z-10">
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
                <span className="text-sm font-medium text-gray-500 tracking-wider uppercase mono">Achievements</span>
              </div>
              
              <h2 className="text-3xl md:text-3xl font-light leading-tight mb-6 section-heading">
                <span className="font-extralight text-gray-700">Professional</span>
                <br />
                <span className="font-bold text-black">Certifications</span>
              </h2>
              
              <p className="text-lg text-gray-600 font-light max-w-2xl">
                Professional achievements and continuous learning milestones.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {certifications.map((cert, index) => (
                <CertificationCard
                  key={cert.id}
                  cert={cert}
                  index={index}
                  onOpen={() => {
                    setLightboxIndex(index);
                    setLightboxOpen(true);
                  }}
                  onViewDetails={() => setSelectedCert(cert)}
                />
              ))}
            </div>

            {/* Learning commitment */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
              className="mt-12 text-center"
            >
            </motion.div>

            <Lightbox
              open={lightboxOpen}
              close={() => setLightboxOpen(false)}
              index={lightboxIndex}
              slides={certifications.map((cert) => ({ src: `/${cert.image}`, title: cert.title }))}
            />

            {selectedCert && (
              <div
                className="fixed inset-0 z-[60] grid place-items-center bg-black/60 p-4"
                onClick={() => setSelectedCert(null)}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  onClick={(e) => e.stopPropagation()}
                  className="w-full max-w-xl max-h-[82vh] overflow-hidden border border-gray-200 bg-white"
                >
                  <div className="flex items-start justify-between border-b border-gray-200 px-5 py-4 md:px-6">
                    <div>
                      <p className="mono text-xs uppercase tracking-wide text-gray-500">Certification Details</p>
                      <h3 className="mt-1 text-xl font-bold text-black">{selectedCert.title}</h3>
                    </div>
                    <button
                      type="button"
                      onClick={() => setSelectedCert(null)}
                      className="border border-gray-300 p-2 text-gray-600 hover:border-black hover:text-black"
                      aria-label="Close details"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>

                  <div className="space-y-5 overflow-y-auto px-5 py-5 md:px-6 max-h-[56vh]">
                    <img src={`/${selectedCert.image}`} alt={selectedCert.title} className="h-44 w-full border border-gray-200 object-cover" />

                    <div className="grid gap-3 text-sm text-gray-700 md:grid-cols-2">
                      <p><span className="font-semibold text-black">Issuer:</span> {selectedCert.issuer}</p>
                      <p><span className="font-semibold text-black">Year:</span> {selectedCert.date}</p>
                    </div>

                    <p className="text-sm leading-relaxed text-gray-700">
                      {selectedCert.details || selectedCert.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {selectedCert.skills.map((skill) => (
                        <span key={skill} className="mono border border-gray-200 px-3 py-1 text-xs font-medium text-gray-700">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-end gap-3 border-t border-gray-200 px-5 py-4 md:px-6">
                    <button
                      type="button"
                      onClick={() => setSelectedCert(null)}
                      className="border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:border-black hover:text-black"
                    >
                      Close
                    </button>
                  </div>
                </motion.div>
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default Certifications;