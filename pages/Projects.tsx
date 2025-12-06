import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import { ExternalLink, Layers } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-primary">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
              Featured <span className="text-accent">Work</span>
            </h2>
            <p className="text-slate-400">A collection of complex backend architectures and applications.</p>
          </div>
          <div className="h-px flex-1 bg-slate-800 mx-8 hidden md:block"></div>
          <div className="text-slate-500 font-mono text-sm">
            TOTAL PROJECTS: {PROJECTS.length}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="glass-panel rounded-xl overflow-hidden flex flex-col group h-full"
            >
              {/* Image Placeholder with Overlay */}
              <div className="h-48 bg-slate-800 relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent"></div>
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur px-3 py-1 rounded-full border border-white/10">
                    <span className="text-xs font-bold text-accent uppercase tracking-wider">{project.category}</span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="mt-auto pt-4 border-t border-slate-700/50">
                   <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map(t => (
                        <span key={t} className="text-xs text-neon bg-neon/10 px-2 py-1 rounded">
                            {t}
                        </span>
                    ))}
                   </div>
                   
                   <button className="w-full py-2 flex items-center justify-center gap-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded transition-all">
                       <Layers size={16}/> View Case Study
                   </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
