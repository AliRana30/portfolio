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

const projectCards = [
  {
    number: '01',
    name: 'CampusCore',
    link: 'https://lms-e-learning-system.vercel.app/',
    subtitle: 'Full-Stack Learning Management System',
    description:
      "Most LMS platforms solve for either instructors or students - not both. CampusCore was built to close that gap. Instructors publish courses with secure VDOCipher video streaming and collect enrollments through a full Stripe payment flow. Students get threaded Q&A, progress tracking, real-time notifications, and a review system. Role-based admin dashboards surface live analytics on users, revenue, and course performance. Under the hood: Redis caching cuts repeat query load, and a Socket.io + Redis pub/sub layer handles notifications at scale without polling. Cross-origin auth between Vercel and Render was solved with same-site cookie configuration - a production detail most tutorials skip entirely.",
    tech: [
      { label: 'Next.js', icon: <SiNextdotjs className="w-4 h-4" />, color: 'text-black' },
      { label: 'Node.js', icon: <SiNodedotjs className="w-4 h-4" />, color: 'text-[#339933]' },
      { label: 'Express', icon: <SiExpress className="w-4 h-4" />, color: 'text-gray-200' },
      { label: 'MongoDB', icon: <SiMongodb className="w-4 h-4" />, color: 'text-[#47A248]' },
      { label: 'Redis', icon: <SiRedis className="w-4 h-4" />, color: 'text-[#DC382D]' },
      { label: 'Socket.io', icon: <SiSocketdotio className="w-4 h-4" />, color: 'text-gray-700' },
      { label: 'Stripe', icon: <SiStripe className="w-4 h-4" />, color: 'text-[#635BFF]' },
      { label: 'Cloudinary', icon: <SiCloudinary className="w-4 h-4" />, color: 'text-[#3448C5]' },
      { label: 'JWT', icon: <SiJsonwebtokens className="w-4 h-4" />, color: 'text-pink-400' },
      { label: 'Tailwind CSS', icon: <SiTailwindcss className="w-4 h-4" />, color: 'text-[#06B6D4]' },
    ],
  },
  {
    number: '02',
    name: 'MultiMart',
    link: 'https://multimarts.vercel.app/',
    subtitle: 'Multivendor E-Commerce Platform',
    description:
      "SingleStore e-commerce is easy to build. Multivendor isn't. MultiMart handles the complexity of a shared marketplace where vendors independently manage inventory, orders, and storefronts while customers interact with a single unified shopping experience. Role-separated dashboards keep vendor and customer flows completely isolated. Stripe handles payments with webhook-verified order status. Cloudinary manages product media with transformation on upload. The UI is fully responsive and built to hold up as vendor count scales - not just as a demo with three test accounts.",
    tech: [
      { label: 'React', icon: <SiReact className="w-4 h-4" />, color: 'text-[#61DAFB]' },
      { label: 'Node.js', icon: <SiNodedotjs className="w-4 h-4" />, color: 'text-[#339933]' },
      { label: 'Express', icon: <SiExpress className="w-4 h-4" />, color: 'text-gray-200' },
      { label: 'MongoDB', icon: <SiMongodb className="w-4 h-4" />, color: 'text-[#47A248]' },
      { label: 'Stripe', icon: <SiStripe className="w-4 h-4" />, color: 'text-[#635BFF]' },
      { label: 'Cloudinary', icon: <SiCloudinary className="w-4 h-4" />, color: 'text-[#3448C5]' },
      { label: 'Tailwind CSS', icon: <SiTailwindcss className="w-4 h-4" />, color: 'text-[#06B6D4]' },
    ],
  },
  {
    number: '03',
    name: 'Noretmy',
    link: 'https://noretmy.vercel.app/',
    subtitle: 'Production Freelancing Marketplace',
    description:
      "Noretmy combines Fiverr's gig model with Upwork's milestone-based project flow - then goes further. Sellers list services or respond to client job posts. Orders break into funded milestones: money is held, released per stage, and disputed through an admin panel - not just a checkbox workflow. Real-time chat with file attachments is built in via Socket.io. A Node cron job runs nightly to recalculate seller badge levels (Level 1, Level 2, Pro) based on order volume, delivery rate, and ratings - no admin touch needed. Stripe and PayPal both handle payouts, with a formal withdrawal request flow for freelancers. VAT calculation, timeline extension logic, and promotion slots are all handled server-side - the kind of business logic that exposes gaps in systems that look complete on the surface.",
    tech: [
      { label: 'Next.js 14', icon: <SiNextdotjs className="w-4 h-4" />, color: 'text-black' },
      { label: 'Node.js', icon: <SiNodedotjs className="w-4 h-4" />, color: 'text-[#339933]' },
      { label: 'Express', icon: <SiExpress className="w-4 h-4" />, color: 'text-gray-200' },
      { label: 'MongoDB', icon: <SiMongodb className="w-4 h-4" />, color: 'text-[#47A248]' },
      { label: 'Redux Toolkit', icon: <SiRedux className="w-4 h-4" />, color: 'text-[#764ABC]' },
      { label: 'Socket.io', icon: <SiSocketdotio className="w-4 h-4" />, color: 'text-gray-700' },
      { label: 'Stripe', icon: <SiStripe className="w-4 h-4" />, color: 'text-[#635BFF]' },
      { label: 'PayPal', icon: <SiPaypal className="w-4 h-4" />, color: 'text-[#00457C]' },
      { label: 'AWS S3', icon: <SiAmazons3 className="w-4 h-4" />, color: 'text-[#FF9900]' },
      { label: 'Cloudinary', icon: <SiCloudinary className="w-4 h-4" />, color: 'text-[#3448C5]' },
      { label: 'Framer Motion', icon: <SiFramer className="w-4 h-4" />, color: 'text-[#0055FF]' },
      { label: 'Tailwind CSS', icon: <SiTailwindcss className="w-4 h-4" />, color: 'text-[#06B6D4]' },
      { label: 'Shadcn/UI', icon: <SiShadcnui className="w-4 h-4" />, color: 'text-gray-700' },
    ],
  },
];

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
      <section id="about" className="py-14 md:py-24 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
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

            {projectCards.map((project) => (
              <motion.div key={project.number} variants={sectionVariants} className="w-full border border-gray-200 bg-white p-6 md:p-8">
                <div className="text-xs text-gray-500 mb-3 mono">{project.number}</div>

                <h3 className="inline-flex items-center gap-2 text-xl md:text-2xl font-bold text-black">
                  <span>{project.name}</span>
                </h3>

                <p className="mt-2 text-sm md:text-base text-gray-600">{project.subtitle}</p>
                <p className="mt-5 mb-5 text-sm md:text-base leading-relaxed text-gray-700">{project.description}</p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {project.tech.map((item) => (
                    <span key={item.label} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-gray-300 bg-white text-sm text-gray-800">
                      <span className={item.color}>{item.icon}</span>
                      <span>{item.label}</span>
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}

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
