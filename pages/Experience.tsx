import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCES } from '../constants';
import { Calendar, Briefcase, CheckCircle } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-primary">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Professional <span className="text-neon">Journey</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A track record of building scalable systems and leading technical teams.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 h-full w-0.5 bg-slate-800 hidden md:block"></div>

          <div className="space-y-16">
            {EXPERIENCES.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Content Card */}
                <div className="md:w-1/2">
                  <div className="glass-panel p-6 rounded-2xl border-t border-l border-white/10 hover:border-accent/30 transition-all duration-300 relative group">
                    {/* Decorative glow */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-accent to-neon rounded-2xl opacity-0 group-hover:opacity-20 transition duration-500 blur-lg"></div>
                    
                    <div className="relative z-10">
                      <div className="flex flex-wrap justify-between items-start mb-4 gap-2">
                        <div>
                          <h3 className="text-2xl font-bold text-white group-hover:text-accent transition-colors">
                            {exp.company}
                          </h3>
                          <p className="text-lg text-neon font-medium">{exp.role}</p>
                        </div>
                        <div className="flex items-center gap-2 px-3 py-1 bg-slate-900/50 rounded-full text-sm text-slate-300">
                          <Calendar size={14} />
                          {exp.period}
                        </div>
                      </div>

                      <p className="text-slate-300 mb-6 leading-relaxed border-l-2 border-slate-700 pl-4">
                        {exp.description}
                      </p>

                      <div className="space-y-3 mb-6">
                        {exp.achievements.map((item, i) => (
                          <div key={i} className="flex gap-3 items-start">
                            <CheckCircle size={18} className="text-accent mt-1 flex-shrink-0" />
                            <span className="text-sm text-slate-400">{item}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-700/50">
                        {exp.tech.map((t) => (
                          <span key={t} className="px-2 py-1 bg-slate-800 rounded text-xs font-mono text-slate-300">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Timeline Dot (Center) */}
                <div className="hidden md:flex flex-col items-center justify-center w-12 relative z-10">
                  <div className="w-4 h-4 rounded-full bg-primary border-4 border-accent shadow-[0_0_15px_rgba(6,182,212,0.5)]"></div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="md:w-1/2 hidden md:block"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
