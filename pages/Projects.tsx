import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import { ArrowUpRight, Layers } from 'lucide-react';
import { Project } from '../types';

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
      className="group w-full"
    >
      <div className="relative overflow-hidden rounded-2xl bg-secondary border border-white/5 hover:border-white/10 transition-all duration-300">
        
        {/* Image Section */}
        <div className="relative h-64 overflow-hidden">
          <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent z-10 transition-colors duration-500"></div>
          <img
            src={project.images[0]}
            alt={project.title}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
          />
          <div className="absolute top-4 left-4 z-20">
             <span className="px-3 py-1 text-[10px] font-bold tracking-widest text-black bg-white rounded-full uppercase">
                {project.category}
             </span>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6">
            <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-display font-bold text-white group-hover:text-accent transition-colors">
                    {project.title}
                </h3>
                <a href={project.link || "#"} className="p-2 bg-white/5 rounded-full text-slate-400 group-hover:bg-white group-hover:text-black transition-all">
                    <ArrowUpRight size={18} />
                </a>
            </div>
            
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
                {project.description}
            </p>

            <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                {project.tech.map((t) => (
                    <span key={t} className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                        #{t}
                    </span>
                ))}
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
        <div className="mb-24 flex flex-col md:flex-row items-end justify-between gap-8 border-b border-white/10 pb-12">
          <div>
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-6xl md:text-8xl font-display font-bold text-white mb-6 tracking-tight"
            >
              Selected <span className="text-gradient-accent">Works</span>
            </motion.h2>
            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl text-slate-400 max-w-xl font-light"
            >
              Engineering robust digital solutions. Scalable backend architectures and high-performance APIs.
            </motion.p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="hidden md:block"
          >
             <Layers className="text-slate-800" size={64} strokeWidth={1} />
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