import { motion } from 'framer-motion';
import { Award, Calendar, ExternalLink, CheckCircle } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: "Web Development Remote Internship",
      issuer: "Cogno-Rise Info-Tech",
      date: "2024",
      image: "Internship.PNG",
      description: "Comprehensive web development training covering modern frameworks and best practices",
      skills: ["JavaScript", "HTML/CSS"],
      credentialUrl: "#"
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
              
              <h2 className="text-4xl md:text-5xl font-light leading-tight mb-6">
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
                <motion.div 
                  key={cert.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-white border border-gray-200 hover:border-black transition-all duration-300 overflow-hidden"
                >
                  {/* Certificate Image */}
                  <div className="relative h-48 bg-gray-100 overflow-hidden">
                    <img 
                      src={cert.image} 
                      alt={cert.title}
                      className="w-full h-full object-cover group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                    />
                    <div className="absolute top-4 right-4">
                      <div className="bg-white/90 p-2">
                        <Award className="text-black w-5 h-5" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <div className="flex items-start justify-between">
                      <h3 className="text-lg font-bold text-black group-hover:text-black transition-colors duration-300 leading-tight">
                        {cert.title}
                      </h3>
                      <CheckCircle className="text-gray-400 w-5 h-5 flex-shrink-0 ml-2" />
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Calendar className="text-gray-500 w-4 h-4" />
                      <span className="text-gray-600 font-medium text-sm">{cert.issuer}</span>
                    </div>

                    <p className="text-gray-600 text-sm leading-relaxed font-light">
                      {cert.description}
                    </p>

                    {/* Skills Tags */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {cert.skills.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="px-3 py-1 border border-gray-200 text-gray-700 text-xs font-medium mono"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <span className="text-sm text-gray-500 font-medium mono">
                        {cert.date}
                      </span>
                      <a
                        href={cert.credentialUrl}
                        className="flex items-center gap-2 text-black hover:gap-3 text-sm font-medium transition-all duration-300 group/link"
                      >
                        View
                        <ExternalLink className="w-3 h-3 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform duration-200" />
                      </a>
                    </div>
                  </div>
                </motion.div>
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
          </div>
        </section>
      </div>
    </>
  );
};

export default Certifications;