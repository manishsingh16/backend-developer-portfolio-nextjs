import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Landing from './pages/Landing';

// Scroll to top on route change component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const Footer: React.FC = () => {
    return (
        <footer className="bg-slate-950 border-t border-slate-800 py-8 text-center text-slate-500 text-sm relative z-10">
            <p>© {new Date().getFullYear()} Manish Kumar Singh. Built with React, Tailwind & Three.js.</p>
        </footer>
    );
}

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="bg-primary min-h-screen text-slate-200 font-sans selection:bg-accent selection:text-primary">
        <Navbar />
        <Routes>
          {/* Root route now shows the All-in-One Landing Page */}
          <Route path="/" element={<Landing />} />
          
          {/* Individual routes are kept for direct linking and SEO */}
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;