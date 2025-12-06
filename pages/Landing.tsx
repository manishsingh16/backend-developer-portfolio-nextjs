import React from 'react';
import Home from './Home';
import About from './About';
import Experience from './Experience';
import Projects from './Projects';
import Contact from './Contact';

const Landing: React.FC = () => {
  return (
    <div className="flex flex-col w-full bg-primary">
      {/* Hero Section */}
      <section id="home" className="w-full">
        <Home />
      </section>
      
      {/* About Section */}
      {/* Negative margin top to reduce the gap caused by pt-24 in the component when stacked */}
      <section id="about" className="w-full -mt-20 md:-mt-0">
        <About />
      </section>
      
      {/* Experience Section */}
      <section id="experience" className="w-full">
        <Experience />
      </section>
      
      {/* Projects Section */}
      <section id="projects" className="w-full">
        <Projects />
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="w-full">
        <Contact />
      </section>
    </div>
  );
};

export default Landing;