import { motion } from 'framer-motion';
import { FaAward, FaCalendarAlt, FaCertificate, FaExternalLinkAlt } from 'react-icons/fa';


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
    <section id="certifications" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            My Certifications
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Professional achievements and continuous learning milestones
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div 
              key={cert.id}
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700">
                {/* Certificate Image */}
                <div className="relative overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 h-48">
                  <img 
                    src={cert.image} 
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full p-2">
                      <FaCertificate className="text-blue-600 text-xl" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white group-hover:text-blue-600 transition-colors duration-300">
                      {cert.title}
                    </h3>
                    <FaAward className="text-yellow-500 text-lg flex-shrink-0 ml-2" />
                  </div>
                  
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                      <FaCalendarAlt className="text-blue-600 text-sm" />
                    </div>
                    <span className="text-gray-600 dark:text-gray-300 font-medium">{cert.issuer}</span>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
                    {cert.description}
                  </p>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {cert.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs font-medium rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                    <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                      {cert.date}
                    </span>
                    <motion.a
                      href={cert.credentialUrl}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors duration-300"
                    >
                      View Credential
                      <FaExternalLinkAlt className="text-xs" />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h4 className="text-3xl font-bold text-blue-600 mb-2">1+</h4>
              <p className="text-gray-600 dark:text-gray-300">Certifications Earned</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-purple-600 mb-2">2025</h4>
              <p className="text-gray-600 dark:text-gray-300">Latest Achievement</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-green-600 mb-2">100%</h4>
              <p className="text-gray-600 dark:text-gray-300">Completion Rate</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;