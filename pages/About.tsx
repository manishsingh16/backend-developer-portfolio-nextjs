import React from 'react';
import { motion } from 'framer-motion';
import { SKILL_CATEGORIES } from '../constants';
import { Server, Database, Code, Shield, Cpu } from 'lucide-react';

const About: React.FC = () => {
  const icons = [<Server key="1" size={24}/>, <Database key="2" size={24}/>, <Code key="3" size={24}/>, <Shield key="4" size={24}/>];

  return (
    <div className="min-h-screen py-32 px-4 sm:px-6 lg:px-8 bg-primary">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-20"
        >
          <h2 className="text-6xl md:text-8xl font-display font-bold text-white mb-6">
            About <span className="text-slate-800">Me.</span>
          </h2>
          <div className="h-px w-full bg-gradient-to-r from-slate-800 to-transparent"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h3 className="text-3xl font-display font-bold text-white mb-8">
              Engineer at Heart. <br/> <span className="text-accent">Problem Solver</span> by Trade.
            </h3>
            
            <div className="space-y-6 text-lg text-slate-400 leading-relaxed font-light">
                <p>
                I am a seasoned <strong>Software Developer</strong> with a passion for the unseen machinery that powers the modern web. With over 3 years of experience, I specialize in architecting backend systems that are secure, scalable, and efficient.
                </p>
                <p>
                Currently at <strong>Mamily</strong>, I'm diving deep into health-tech, ensuring sensitive data is handled with the utmost integrity. My background with <strong>JPR Technosoft</strong> gave me the leadership skills to mentor teams and deliver enterprise solutions.
                </p>
                <p>
                I believe in writing code that not only works but is also maintainable and clean. My toolkit is centered around <strong>Node.js</strong> and <strong>Laravel</strong>, but my mindset is language-agnostic: I use the best tool for the job.
                </p>
            </div>

             {/* Education */}
            <div className="mt-12 pt-12 border-t border-slate-800">
                <div className="flex items-start gap-4">
                    <div className="p-3 bg-white/5 rounded-full text-white">
                        <Cpu size={24} />
                    </div>
                    <div>
                        <h4 className="text-xl font-bold text-white mb-1">Bachelor of Engineering</h4>
                        <p className="text-slate-400 mb-1">Computer Science & Engineering</p>
                        <p className="text-sm text-slate-500">Aligarh College of Engineering & Technology</p>
                    </div>
                </div>
            </div>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 gap-6">
            {SKILL_CATEGORIES.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + (index * 0.1), duration: 0.5 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-neon/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="glass-panel p-8 rounded-xl relative border border-white/5 group-hover:border-white/10 transition-colors">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="p-2 bg-white/5 rounded-lg text-white group-hover:text-accent transition-colors">
                            {icons[index % icons.length]}
                        </div>
                        <h4 className="text-xl font-bold text-white font-display tracking-wide">{category.title}</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill) => (
                            <span 
                            key={skill} 
                            className="px-3 py-1.5 bg-black/40 border border-slate-800 rounded-lg text-sm text-slate-300 font-medium group-hover:border-slate-600 transition-colors"
                            >
                            {skill}
                            </span>
                        ))}
                    </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;