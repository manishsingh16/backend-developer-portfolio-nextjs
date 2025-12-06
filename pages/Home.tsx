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
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="inline-block px-4 py-1.5 mb-8 border border-white/10 rounded-full bg-white/5 backdrop-blur-md">
                <span className="text-accent font-medium text-sm tracking-wide">Available for Hire</span>
              </div>
              
              <h1 className="text-6xl md:text-8xl font-display font-bold text-white leading-[1.1] mb-8">
                Backend <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-slate-200 to-slate-500">
                  Architect.
                </span>
              </h1>

              <div className="mb-10 max-w-lg">
                 <p className="text-xl md:text-2xl text-slate-400 leading-relaxed font-light">
                  Hi, I'm <strong className="text-white font-semibold">Manish Kumar Singh</strong>. 
                  I build secure, scalable, and high-performance systems using <span className="text-accent">Node.js</span> & <span className="text-neon">Laravel</span>.
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
                  className="px-8 py-4 glass-panel text-white font-medium text-lg rounded-full hover:bg-white/10 transition-all flex items-center gap-2 border border-white/10"
                >
                  Download CV <Download size={20} />
                </a>
              </div>

              <div className="mt-16 flex items-center gap-8">
                <div className="flex gap-6">
                    <a href={LINKEDIN} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors transform hover:-translate-y-1 duration-300">
                    <Linkedin size={28} />
                    </a>
                    <a href={`mailto:${EMAIL}`} className="text-slate-400 hover:text-white transition-colors transform hover:-translate-y-1 duration-300">
                    <Mail size={28} />
                    </a>
                </div>
                <div className="h-px w-24 bg-gradient-to-r from-slate-700 to-transparent"></div>
                <span className="text-slate-500 font-mono text-xs uppercase tracking-widest">Aligarh, India</span>
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