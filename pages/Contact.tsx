import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { EMAIL, PHONE, LOCATION, LINKEDIN } from '../constants';
import { Mail, Phone, MapPin, Linkedin, Send, Terminal } from 'lucide-react';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate sending
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitted(true);
        }, 1500);
    };

    return (
        <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-primary">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    
                    {/* Info Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl font-bold text-white mb-6">
                            Let's Build Something <br/> <span className="text-accent">Scalable.</span>
                        </h2>
                        <p className="text-slate-400 mb-12 text-lg">
                            Whether you need a robust backend architecture, API optimization, or a full-stack consultation, I'm ready to help you achieve your technical goals.
                        </p>

                        <div className="space-y-8">
                            <a href={`mailto:${EMAIL}`} className="flex items-center gap-4 group">
                                <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center group-hover:bg-accent transition-colors">
                                    <Mail className="text-white w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500">Email</p>
                                    <p className="text-lg text-white font-medium">{EMAIL}</p>
                                </div>
                            </a>
                            
                            <a href={`tel:${PHONE}`} className="flex items-center gap-4 group">
                                <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center group-hover:bg-neon transition-colors">
                                    <Phone className="text-white w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500">Phone</p>
                                    <p className="text-lg text-white font-medium">{PHONE}</p>
                                </div>
                            </a>

                            <div className="flex items-center gap-4 group">
                                <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center">
                                    <MapPin className="text-white w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500">Location</p>
                                    <p className="text-lg text-white font-medium">{LOCATION}</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 p-6 glass-panel rounded-xl border border-slate-700/50">
                            <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                                <Terminal size={18} className="text-neon" /> 
                                Connect on Socials
                            </h4>
                            <a 
                                href={LINKEDIN} 
                                target="_blank" 
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-[#0077b5] text-white rounded-lg hover:bg-[#006396] transition-colors font-medium"
                            >
                                <Linkedin size={20} /> LinkedIn Profile
                            </a>
                        </div>
                    </motion.div>

                    {/* Form Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-secondary/30 backdrop-blur-xl p-8 rounded-2xl border border-white/5"
                    >
                        {submitted ? (
                            <div className="h-full flex flex-col items-center justify-center text-center py-20">
                                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4">
                                    <Send className="text-green-400 w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                                <p className="text-slate-400">I'll get back to you as soon as possible.</p>
                                <button 
                                    onClick={() => setSubmitted(false)}
                                    className="mt-6 text-accent hover:underline"
                                >
                                    Send another message
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        required
                                        className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                                        placeholder="John Doe"
                                        value={formData.name}
                                        onChange={e => setFormData({...formData, name: e.target.value})}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                                        placeholder="john@example.com"
                                        value={formData.email}
                                        onChange={e => setFormData({...formData, email: e.target.value})}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                                    <textarea
                                        id="message"
                                        required
                                        rows={4}
                                        className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                                        placeholder="Tell me about your project..."
                                        value={formData.message}
                                        onChange={e => setFormData({...formData, message: e.target.value})}
                                    />
                                </div>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-gradient-to-r from-accent to-blue-600 text-white font-bold py-4 rounded-lg hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                >
                                    {isSubmitting ? 'Sending...' : (
                                        <>Send Message <Send size={18} /></>
                                    )}
                                </button>
                            </form>
                        )}
                    </motion.div>

                </div>
            </div>
        </div>
    );
};

export default Contact;
