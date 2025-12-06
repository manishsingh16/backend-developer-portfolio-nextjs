import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Linkedin, Mail } from 'lucide-react';
import Hero3D from '../components/Hero3D';
import { NavLink } from 'react-router-dom';
import { EMAIL, LINKEDIN } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-primary">
      {/* 3D Background */}
      <Hero3D />

      {/* Overlay Content */}
      <div className="absolute inset-0 z-10 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-block px-3 py-1 mb-6 border border-accent/30 rounded-full bg-accent/10 backdrop-blur-sm">
                <span className="text-accent font-mono text-sm">Open to Opportunities</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
                Architecting <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-neon">
                  Scalable Backends
                </span>
              </h1>

              <div className="h-20 sm:h-24">
                 <p className="text-xl text-slate-400 max-w-lg mb-8 leading-relaxed">
                  I am <strong className="text-white">Manish Kumar Singh</strong>. 
                  Building high-performance APIs, secure databases, and robust microservices using 
                  <span className="text-accent"> Node.js</span> and <span className="text-neon">Laravel</span>.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 mt-8">
                <NavLink
                  to="/contact"
                  className="px-8 py-4 bg-accent hover:bg-cyan-400 text-primary font-bold rounded-lg transition-all transform hover:scale-105 flex items-center gap-2"
                >
                  Hire Me <ArrowRight size={20} />
                </NavLink>
                
                <a
                  href="/resume.pdf" // Placeholder path
                  className="px-8 py-4 glass-panel text-white font-medium rounded-lg hover:bg-white/10 transition-all flex items-center gap-2 border border-white/20"
                >
                  Resume <Download size={20} />
                </a>
              </div>

              <div className="mt-12 flex items-center gap-6">
                <a href={LINKEDIN} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-accent transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href={`mailto:${EMAIL}`} className="text-slate-400 hover:text-accent transition-colors">
                  <Mail size={24} />
                </a>
                <div className="h-px w-20 bg-slate-700"></div>
                <span className="text-slate-500 font-mono text-sm">BASED IN INDIA</span>
              </div>
            </motion.div>

            {/* Empty column to let the 3D element shine on the right side */}
            <div className="hidden lg:block"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
