import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { EMAIL, PHONE, LOCATION, LINKEDIN } from '../constants';
import { Mail, Phone, MapPin, Linkedin, Send } from 'lucide-react';

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
        <div className="min-h-screen py-32 px-4 sm:px-6 lg:px-8 bg-primary">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="mb-20 text-center"
                >
                    <h2 className="text-6xl md:text-8xl font-display font-bold text-white mb-6 tracking-tight">
                        Get in <span className="text-accent">Touch.</span>
                    </h2>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light">
                         Have a project in mind? Let's discuss how we can build scalable solutions together.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    
                    {/* Info Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-10"
                    >
                        <div className="p-8 rounded-2xl bg-secondary border border-white/5">
                             <h3 className="text-2xl font-display font-bold text-white mb-8">Contact Information</h3>
                             <div className="space-y-8">
                                <a href={`mailto:${EMAIL}`} className="flex items-center gap-6 group">
                                    <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">Email</p>
                                        <p className="text-lg text-white font-medium">{EMAIL}</p>
                                    </div>
                                </a>
                                
                                <a href={`tel:${PHONE}`} className="flex items-center gap-6 group">
                                    <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">Phone</p>
                                        <p className="text-lg text-white font-medium">{PHONE}</p>
                                    </div>
                                </a>

                                <div className="flex items-center gap-6 group">
                                    <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">Location</p>
                                        <p className="text-lg text-white font-medium">{LOCATION}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <a 
                            href={LINKEDIN} 
                            target="_blank" 
                            rel="noreferrer"
                            className="block p-8 bg-[#0077b5] rounded-2xl hover:bg-[#006396] transition-colors text-center group"
                        >
                            <Linkedin size={32} className="text-white mx-auto mb-4 group-hover:scale-110 transition-transform" />
                            <span className="text-white font-bold text-xl">Connect on LinkedIn</span>
                        </a>
                    </motion.div>

                    {/* Form Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="p-8 md:p-10 rounded-2xl bg-secondary border border-white/5"
                    >
                        {submitted ? (
                            <div className="h-full flex flex-col items-center justify-center text-center py-20">
                                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                                    <Send className="text-green-400 w-10 h-10" />
                                </div>
                                <h3 className="text-3xl font-display font-bold text-white mb-2">Message Sent</h3>
                                <p className="text-slate-400 text-lg mb-8">Thank you for reaching out. I'll get back to you shortly.</p>
                                <button 
                                    onClick={() => setSubmitted(false)}
                                    className="text-white border-b border-white hover:border-transparent transition-all"
                                >
                                    Send another message
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-widest">Your Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        required
                                        className="w-full bg-primary border border-white/10 rounded-lg px-4 py-4 text-white focus:outline-none focus:border-white focus:ring-0 transition-all placeholder:text-slate-700"
                                        placeholder="John Doe"
                                        value={formData.name}
                                        onChange={e => setFormData({...formData, name: e.target.value})}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-widest">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        className="w-full bg-primary border border-white/10 rounded-lg px-4 py-4 text-white focus:outline-none focus:border-white focus:ring-0 transition-all placeholder:text-slate-700"
                                        placeholder="john@example.com"
                                        value={formData.email}
                                        onChange={e => setFormData({...formData, email: e.target.value})}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-widest">Message</label>
                                    <textarea
                                        id="message"
                                        required
                                        rows={6}
                                        className="w-full bg-primary border border-white/10 rounded-lg px-4 py-4 text-white focus:outline-none focus:border-white focus:ring-0 transition-all placeholder:text-slate-700 resize-none"
                                        placeholder="Tell me about your project..."
                                        value={formData.message}
                                        onChange={e => setFormData({...formData, message: e.target.value})}
                                    />
                                </div>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-white text-black font-bold text-lg py-4 rounded-lg hover:bg-slate-200 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-4"
                                >
                                    {isSubmitting ? 'Sending...' : (
                                        <>Send Message <Send size={20} /></>
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