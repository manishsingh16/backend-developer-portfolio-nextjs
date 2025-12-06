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
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 border border-accent/20 rounded-full bg-accent/5 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                <span className="text-accent font-medium text-xs tracking-widest uppercase">Available for Hire</span>
              </div>
              
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold text-white leading-[0.9] mb-8 tracking-tight">
                Backend <br />
                <span className="text-gradient-accent">
                  Architect.
                </span>
              </h1>

              <div className="mb-12 max-w-lg border-l-2 border-white/10 pl-6">
                 <p className="text-xl md:text-2xl text-slate-400 leading-relaxed font-light">
                  I'm <span className="text-white font-medium">Manish Kumar Singh</span>. 
                  I build secure, scalable, and high-performance systems using <span className="text-white">Node.js</span> & <span className="text-white">Laravel</span>.
                </p>
              </div>

              <div className="flex flex-wrap gap-5">
                <NavLink
                  to="/contact"
                  className="px-8 py-4 bg-white text-black font-bold text-lg rounded-full hover:bg-slate-200 transition-all transform hover:scale-105 flex items-center gap-2"
                >
                  Start Project <ArrowRight size={20} />
                </NavLink>
                
                <a
                  href="/resume.pdf"
                  className="px-8 py-4 glass-panel text-white font-medium text-lg rounded-full hover:bg-white/10 transition-all flex items-center gap-2"
                >
                  Download CV <Download size={20} />
                </a>
              </div>

              <div className="mt-20 flex items-center gap-8">
                <div className="flex gap-6">
                    <a href={LINKEDIN} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white transition-colors transform hover:-translate-y-1 duration-300">
                    <Linkedin size={24} />
                    </a>
                    <a href={`mailto:${EMAIL}`} className="text-slate-500 hover:text-white transition-colors transform hover:-translate-y-1 duration-300">
                    <Mail size={24} />
                    </a>
                </div>
                <div className="h-px w-24 bg-gradient-to-r from-slate-800 to-transparent"></div>
                <span className="text-slate-600 font-mono text-xs uppercase tracking-widest">Aligarh, India</span>
              </div>
            </motion.div>

            {/* Empty column to let the 3D element shine on the right side */}
            <div className="hidden lg:block pointer-events-none"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;