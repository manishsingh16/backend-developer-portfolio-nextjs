import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCES } from '../constants';
import { Calendar, Briefcase, ChevronRight } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <div className="min-h-screen py-32 px-4 sm:px-6 lg:px-8 bg-primary relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-20"
        >
          <span className="text-accent font-mono text-sm tracking-wider uppercase mb-2 block">Career Path</span>
          <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-4">
            Professional <br/> <span className="opacity-50">Experience</span>
          </h2>
        </motion.div>

        <div className="space-y-12">
          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 md:pl-0"
            >
              {/* Timeline Line (Mobile) */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-slate-800 md:hidden"></div>
              <div className="absolute left-[-5px] top-6 w-2.5 h-2.5 rounded-full bg-accent md:hidden"></div>

              <div className="glass-panel p-8 md:p-10 rounded-2xl group hover:border-accent/30 transition-all duration-300">
                <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-8">
                  <div>
                    <h3 className="text-3xl font-display font-bold text-white mb-2 group-hover:text-accent transition-colors">
                      {exp.company}
                    </h3>
                    <div className="flex items-center gap-3 text-lg text-slate-300">
                      <span className="font-medium text-neon">{exp.role}</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-600"></span>
                      <span className="text-slate-500 text-base">{exp.period}</span>
                    </div>
                  </div>
                  
                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-2 justify-start md:justify-end max-w-xs">
                    {exp.tech.slice(0, 4).map((t) => (
                      <span key={t} className="px-2.5 py-1 text-xs font-medium text-slate-400 bg-white/5 rounded border border-white/5">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-2xl">
                  {exp.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {exp.achievements.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                        <div className="mt-1.5 min-w-[6px] h-[6px] rounded-full bg-accent/50"></div>
                        <p className="text-slate-300 text-sm leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;