import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCES } from '../constants';

const Experience: React.FC = () => {
  return (
    <div className="min-h-screen py-32 px-4 sm:px-6 lg:px-8 bg-primary relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-24 pl-4 border-l-2 border-accent"
        >
          <span className="text-accent font-mono text-sm tracking-wider uppercase mb-4 block">Career Path</span>
          <h2 className="text-5xl md:text-7xl font-display font-bold text-white">
            Professional <br/> <span className="text-slate-700">Experience</span>
          </h2>
        </motion.div>

        <div className="space-y-16">
          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                 {/* Date & Role - Left Side */}
                <div className="md:col-span-4">
                    <div className="sticky top-32">
                        <span className="text-5xl font-display font-bold text-white/10 group-hover:text-white/20 transition-colors">
                            0{index + 1}
                        </span>
                        <h3 className="text-2xl font-bold text-white mt-2 mb-1">{exp.company}</h3>
                        <p className="text-accent font-medium mb-4">{exp.role}</p>
                        <p className="text-slate-500 font-mono text-sm uppercase tracking-wider">{exp.period}</p>
                    </div>
                </div>

                {/* Content - Right Side */}
                <div className="md:col-span-8">
                    <div className="p-8 rounded-2xl bg-secondary/50 border border-white/5 hover:border-white/10 hover:bg-secondary transition-all duration-300">
                         <p className="text-slate-300 text-lg leading-relaxed mb-8 font-light">
                            {exp.description}
                        </p>

                        <div className="space-y-4 mb-8">
                            {exp.achievements.map((item, i) => (
                                <div key={i} className="flex items-start gap-4">
                                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0"></span>
                                    <p className="text-slate-400 text-sm leading-relaxed">{item}</p>
                                </div>
                            ))}
                        </div>

                         <div className="flex flex-wrap gap-2">
                            {exp.tech.map((t) => (
                            <span key={t} className="px-3 py-1 text-xs font-semibold text-slate-400 bg-white/5 rounded-full border border-white/5">
                                {t}
                            </span>
                            ))}
                        </div>
                    </div>
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