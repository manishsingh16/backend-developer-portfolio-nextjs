import React from 'react';
import { motion } from 'framer-motion';
import { SKILL_CATEGORIES } from '../constants';
import { Server, Database, Code, Shield } from 'lucide-react';

const About: React.FC = () => {
  const icons = [<Server key="1"/>, <Database key="2"/>, <Code key="3"/>, <Shield key="4"/>];

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-primary">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Beyond the <span className="text-accent">Code</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-neon mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="glass-panel p-8 rounded-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Code size={120} className="text-white" />
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-2 h-8 bg-accent rounded-sm"></span>
              Professional Summary
            </h3>
            
            <p className="text-slate-300 leading-relaxed mb-6">
              I am a results-driven <strong>Software Developer</strong> with over 3 years of hands-on experience designing and optimizing backend systems. My expertise lies in building scalable architectures using <strong>Node.js</strong> and <strong>Laravel</strong>, ensuring high availability and low latency for mission-critical applications.
            </p>
            <p className="text-slate-300 leading-relaxed mb-6">
              Currently, at <strong>Mamily</strong>, I focus on healthcare technology, solving complex problems related to data security and real-time processing. Previously, at <strong>JPR Technosoft</strong>, I led development teams to deliver enterprise logic for logistics and on-demand services.
            </p>
            <p className="text-slate-300 leading-relaxed">
              I don't just write code; I engineer solutions that drive business growth, optimize performance, and provide seamless user experiences through robust API integration.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 gap-6">
            {SKILL_CATEGORIES.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + (index * 0.1), duration: 0.5 }}
                className="bg-secondary/50 p-6 rounded-xl border border-slate-700 hover:border-accent transition-colors group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-slate-800 rounded-lg text-accent group-hover:text-neon transition-colors">
                    {icons[index % icons.length]}
                  </div>
                  <h4 className="text-xl font-bold text-white">{category.title}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span 
                      key={skill} 
                      className="px-3 py-1 bg-primary border border-slate-700 rounded-full text-sm text-slate-300 group-hover:border-accent/30 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education/Timeline snippet */}
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 glass-panel p-8 rounded-2xl"
        >
             <h3 className="text-2xl font-bold text-white mb-8 text-center">Education</h3>
             <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-neon/20 flex items-center justify-center text-neon font-bold">
                        B.E
                    </div>
                    <div>
                        <h4 className="text-lg font-bold text-white">Bachelor of Engineering</h4>
                        <p className="text-slate-400">Computer Science & Engineering</p>
                    </div>
                </div>
                 <div className="flex items-center gap-4">
                    <div className="text-right md:text-left">
                        <h4 className="text-lg font-bold text-white">Aligarh College of Eng. & Tech</h4>
                        <p className="text-slate-400">Uttar Pradesh, India</p>
                    </div>
                </div>
             </div>
        </motion.div>

      </div>
    </div>
  );
};

export default About;
