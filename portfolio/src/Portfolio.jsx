
import Certifications from './Components/Certifications';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import About from './Components/About';
import Hero from './Components/Hero';
import Socials from './Components/Socials';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';


const Portfolio = () => {
  

  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 min-h-screen">
      {/* Navigation */}
      <Navbar/>

      {/* Hero Section */}
       <Hero/>
      {/* About Section */}
       <About/>

      {/* Skills Section */}
        <Skills/>
      {/* Projects Section */}
     
           <Projects/>
      {/* Certifications Section */}
       <Certifications/>

      {/* Socials Section */}
       <Socials/>

      {/* Footer */}
      <Footer/>
    </div>
  );
};

export default Portfolio;