import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../constants';
import { ExternalLink, Layers, ArrowUpRight } from 'lucide-react';
import { Project } from '../types';

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    }, 4000); // Change image every 4 seconds
    return () => clearInterval(timer);
  }, [project.images.length]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="group relative"
    >
      <div className="glass-panel p-4 rounded-2xl h-full flex flex-col transition-colors duration-500 hover:bg-white/[0.04]">
        {/* Image Carousel */}
        <div className="relative h-64 w-full rounded-xl overflow-hidden mb-6 bg-secondary">
            <div className="absolute inset-0 bg-black/20 z-10 group-hover:bg-black/0 transition-colors duration-500"></div>
            <AnimatePresence mode='wait'>
                <motion.img
                    key={currentImageIndex}
                    src={project.images[currentImageIndex]}
                    alt={project.title}
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0 w-full h-full object-cover"
                />
            </AnimatePresence>
            
            {/* Category Tag */}
            <div className="absolute top-4 left-4 z-20">
                <span className="px-3 py-1 text-xs font-bold tracking-widest text-black bg-white/90 backdrop-blur-md rounded-full uppercase">
                    {project.category}
                </span>
            </div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col px-2">
            <h3 className="text-2xl font-display font-bold text-white mb-3 group-hover:text-accent transition-colors">
                {project.title}
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
                {project.description}
            </p>

            <div className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t) => (
                        <span key={t} className="px-2 py-1 text-xs font-medium text-slate-300 border border-slate-700 rounded bg-slate-800/50">
                            {t}
                        </span>
                    ))}
                </div>

                <button className="w-full py-3 border border-slate-700 rounded-lg text-sm font-semibold text-white hover:bg-white hover:text-black transition-all flex items-center justify-center gap-2 group/btn">
                    View Case Study <ArrowUpRight size={16} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </button>
            </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  return (
    <div className="min-h-screen py-32 px-4 sm:px-6 lg:px-8 bg-primary">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 flex flex-col md:flex-row items-end justify-between gap-8">
          <div>
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-6xl md:text-8xl font-display font-bold text-white mb-6"
            >
              Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-neon">Work</span>
            </motion.h2>
            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl text-slate-400 max-w-xl"
            >
              A showcase of scalable backend architectures, high-performance APIs, and secure database designs.
            </motion.p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="hidden md:block"
          >
             <div className="w-24 h-24 rounded-full border border-slate-700 flex items-center justify-center animate-spin-slow">
                <Layers className="text-accent" size={32} />
             </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;