import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Terminal } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Experience', path: '/experience' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 border-b ${
        scrolled ? 'bg-primary/80 backdrop-blur-xl border-white/5 py-4' : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2 group">
            <span className="text-xl font-display font-bold text-white tracking-tight">
              Manish<span className="text-slate-500">.Dev</span>
            </span>
          </NavLink>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium tracking-wide transition-colors duration-300 ${
                    isActive ? 'text-white' : 'text-slate-500 hover:text-slate-300'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            
            <NavLink 
                to="/contact"
                className="px-5 py-2 rounded-full bg-white text-black text-sm font-bold hover:bg-slate-200 transition-colors"
            >
                Hire Me
            </NavLink>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-accent transition-colors p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-primary border-b border-slate-800 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `block text-2xl font-display font-bold ${
                      isActive
                        ? 'text-white'
                        : 'text-slate-500'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;