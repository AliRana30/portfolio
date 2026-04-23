
import Certifications from './Components/Certifications';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import About from './Components/About';
import Hero from './Components/Hero';
import Socials from './Components/Socials';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import OpenSourceContributions from './Components/OpenSourceContributions';
import EducationTimeline from './Components/EducationTimeline';
import FloatingCodeBlock from './Components/FloatingCodeBlock';


const Portfolio = () => {
  

  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 min-h-screen">


      {/* Navigation */}
      <Navbar/>

      {/* Hero Section */}
       <Hero/>

      {/* Code Object Section */}
      <section className="relative z-10 bg-white py-8 md:py-12">
        <div className="container mx-auto px-6 max-w-6xl flex justify-center">
          <div className="w-full max-w-xl">
            <FloatingCodeBlock disableTilt={true} />
          </div>
        </div>
      </section>

      {/* About Section */}
       <About/>

      {/* Skills Section */}
        <Skills/>
      {/* Projects Section */}
     
           <Projects/>
      {/* Open Source Contributions Section */}
       <OpenSourceContributions/>

      {/* Education & Certifications Section */}
       <EducationTimeline/>

      {/* Legacy Certifications Section */}
       <Certifications/>

      {/* Socials Section */}
       <Socials/>

      {/* Footer */}
      <Footer/>
    </div>
  );
};

export default Portfolio;