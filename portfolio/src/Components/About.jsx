import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiRedux,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiRedis,
  SiDocker,
  SiGithubactions,
  SiTailwindcss,
  SiGit,
  SiCplusplus,
  SiPython,
  SiDjango,
  SiSocketdotio,
  SiStripe,
  SiCloudinary,
  SiJsonwebtokens,
  SiPaypal,
  SiAmazons3,
  SiFramer,
  SiShadcnui,
  SiFigma,
} from 'react-icons/si';

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const stackVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

// Project cards removed in favor of summarized Technical Excellence section

const masterTechStack = [
  [
    { label: 'JavaScript', icon: <SiJavascript className="w-4 h-4" />, color: 'text-[#F7DF1E]' },
    { label: 'TypeScript', icon: <SiTypescript className="w-4 h-4" />, color: 'text-[#3178C6]' },
    { label: 'React', icon: <SiReact className="w-4 h-4" />, color: 'text-[#61DAFB]' },
    { label: 'RTK Query', icon: <SiRedux className="w-4 h-4" />, color: 'text-[#764ABC]' },
  ],
  [
    { label: 'Next.js', icon: <SiNextdotjs className="w-4 h-4" />, color: 'text-black' },
    { label: 'Node.js', icon: <SiNodedotjs className="w-4 h-4" />, color: 'text-[#339933]' },
    { label: 'Express', icon: <SiExpress className="w-4 h-4" />, color: 'text-gray-200' },
    { label: 'MongoDB', icon: <SiMongodb className="w-4 h-4" />, color: 'text-[#47A248]' },
  ],
  [
    { label: 'Redis', icon: <SiRedis className="w-4 h-4" />, color: 'text-[#DC382D]' },
    { label: 'Docker', icon: <SiDocker className="w-4 h-4" />, color: 'text-[#2496ED]' },
    { label: 'GitHub Actions', icon: <SiGithubactions className="w-4 h-4" />, color: 'text-[#2088FF]' },
    { label: 'Tailwind CSS', icon: <SiTailwindcss className="w-4 h-4" />, color: 'text-[#06B6D4]' },
  ],
  [
    { label: 'Git', icon: <SiGit className="w-4 h-4" />, color: 'text-[#F05032]' },
    { label: 'Figma', icon: <SiFigma className="w-4 h-4" />, color: 'text-[#F24E1E]' },
    { label: 'Python', icon: <SiPython className="w-4 h-4" />, color: 'text-[#3776AB]' },
    { label: 'Django', icon: <SiDjango className="w-4 h-4" />, color: 'text-[#2BA977]' },
  ],
];

const About = () => {
  return (
    <div className="relative bg-white">
      <section id="about" className="pt-14 pb-8 md:pt-24 md:pb-12 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={stackVariants}
            className="space-y-6"
          >
            <motion.div variants={sectionVariants} className="mb-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-[1px] bg-black"></div>
                <span className="text-sm font-medium text-gray-500 tracking-wider uppercase mono">Introduction</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-light leading-tight section-heading text-black">
                <span className="font-extralight text-gray-700">About</span> <span className="font-bold">Me</span>
              </h2>
            </motion.div>

            <motion.div variants={sectionVariants} className="w-full border border-gray-200 bg-white p-6 md:p-8 mb-12">
              <div className="space-y-6 text-sm md:text-base leading-relaxed text-gray-700">
                <div>
                  <h4 className="text-black font-semibold text-lg mb-2 mono">→ Who I Am</h4>
                  <p>I am Ali Mahmood, a Full-Stack Software Engineer who bridges the gap between premium, high-end UI design and robust, scalable backend architecture. I don't just write code; I architect end-to-end solutions, specializing in complex marketplaces, real-time AI assistants, and production-ready Learning Management Systems.</p>
                </div>

                <div>
                  <h4 className="text-black font-semibold text-lg mb-2 mono">→ Why Me</h4>
                  <p>Hiring multiple specialists often leads to fragmented communication, design compromises, and integration headaches. I provide a single point of ownership. From translating pixel-perfect Figma designs using Framer Motion to engineering secure Node.js APIs with Stripe, WebSockets, and Redis—I handle the entire lifecycle. You get consistent quality, predictable timelines, and zero handoff friction.</p>
                </div>

                <div>
                  <p>Beyond client work, I am an active open-source contributor. My patches have landed in foundational projects like Apache Arrow (C++), tackling deprecated API removals and sparse tensor safety—proving my commitment to writing code that holds up under enterprise-level scrutiny.</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={sectionVariants} className="w-full border border-gray-200 bg-white p-6 md:p-8 mb-12">
              <div className="space-y-8 text-sm md:text-base leading-relaxed text-gray-700">
                <div>
                  <h4 className="text-black font-semibold text-lg mb-4 mono">→ Technical Excellence</h4>
                  <div className="space-y-6">
                    <p>
                      <a href="https://noretmy.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-black font-bold hover:underline">Noretmy</a> is a high-performance, production-ready freelancing ecosystem that bridges the gap between gig-based models like Fiverr and milestone-driven project flows like Upwork. Built with a focus on enterprise-grade business logic, it features a sophisticated fund-holding system where payments are securely held and released only upon client-verified milestone completion. Real-time communication is powered by a custom Socket.io implementation supporting instant file sharing, while an automated Node.js cron job recalculates freelancer authority levels nightly based on delivery rates and ratings, ensuring the platform remains self-governing and scalable.
                    </p>
                    <p>
                      <a href="https://lms-e-learning-system.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-black font-bold hover:underline">CampusCore</a> is a robust Learning Management System engineered to solve the core challenges of modern EdTech, specifically secure content delivery and low-latency user interactions. By integrating VDOCipher, it provides top-tier encrypted video streaming that prevents unauthorized downloads, while a comprehensive Stripe integration manages the entire student enrollment lifecycle from checkout to revenue analytics. Under the hood, a high-performance Redis caching layer minimizes database load for frequently accessed course data, and a Socket.io pub/sub architecture ensures students receive real-time notifications for threaded Q&A and grade updates without page refreshes.
                    </p>
                    <p>
                      <a href="https://multimarts.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-black font-bold hover:underline">MultiMart</a> is a comprehensive full-stack multivendor marketplace designed to manage the high complexity of shared inventory and independent vendor operations. It provides a seamless experience for both sellers and buyers through role-separated dashboards that keep vendor inventory management completely isolated from the customer storefront. The platform leverages webhook-verified Stripe payments to ensure transaction integrity across multiple disparate vendor accounts, while Cloudinary's dynamic media transformation optimizes product imagery on the fly, ensuring a fast and responsive shopping experience even as the platform scales to hundreds of independent storefronts.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={sectionVariants} className="w-full border border-gray-200 bg-white p-6 md:p-8 mb-12">
              <div className="space-y-6 text-sm md:text-base leading-relaxed text-gray-700">
                <div>
                  <h4 className="text-black font-semibold text-lg mb-2 mono">→ Problem Solving</h4>
                  <p>
                    I am a passionate problem solver who views algorithmic efficiency as the cornerstone of great software engineering. My deep understanding of complex data structures and optimized algorithms allows me to write code that is not only functional but performant at scale. You can track my daily progress and problem-solving journey on <a href="https://leetcode.com/u/AliRana28/" target="_blank" rel="noopener noreferrer" className="text-black font-bold hover:underline">LeetCode</a> where I have tackled hundreds of challenges ranging from dynamic programming and graph theory to system design patterns. This commitment to continuous learning on LeetCode ensures that my engineering decisions are always backed by a rigorous, logic-first approach to solving real-world production bottlenecks.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={sectionVariants} className="pt-12 mb-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-[1px] bg-black"></div>
                <span className="text-sm font-medium text-gray-500 tracking-wider uppercase mono">Capabilities</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-light leading-tight section-heading text-black">
                <span className="font-extralight text-gray-700">Tech</span> <span className="font-bold">Stack</span>
              </h2>
            </motion.div>

            <motion.div variants={sectionVariants} className="w-full border border-gray-200 bg-white p-6 md:p-8">
              <div className="space-y-3.5">
                {masterTechStack.map((row, rowIndex) => (
                  <div key={rowIndex} className="flex flex-wrap gap-4">
                    {row.map((item) => (
                      <span key={item.label} className="inline-flex items-center gap-2 px-3.5 py-2 rounded-md border border-gray-300 bg-white text-sm text-gray-800">
                        <span className={item.color}>{item.icon}</span>
                        <span>{item.label}</span>
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
