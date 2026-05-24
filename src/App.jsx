import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AIChatbot from './components/AIChatbot';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import RecyclingPage from './pages/RecyclingPage';
import ContactPage from './pages/ContactPage';
import GalleryPage from './pages/GalleryPage';
import './App.css';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/recycling" element={<RecyclingPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      const progressEl = document.getElementById('scroll-progress');
      if (progressEl) progressEl.style.width = scrolled + '%';
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-white">
        <AnimatePresence>
          {loading ? (
            <motion.div
              key="loader"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-gradient-to-br from-green-50 via-emerald-50/30 to-white"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                className="w-20 h-20 relative flex items-center justify-center mb-6"
              >
                <div className="absolute inset-0 border-4 border-green-100 rounded-full" />
                <div className="absolute inset-0 border-4 border-green-500 rounded-full border-t-transparent" />
                <span className="text-3xl">🌿</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-gray-900 font-bold font-display tracking-widest uppercase text-base"
              >
                Green India
              </motion.div>
              <div className="text-green-600 text-sm font-medium mt-1 mb-4">Waste Management</div>
              <div className="flex gap-2 mt-1">
                <div className="w-2 h-2 bg-green-500 rounded-full loader-dot" />
                <div className="w-2 h-2 bg-green-500 rounded-full loader-dot" />
                <div className="w-2 h-2 bg-green-500 rounded-full loader-dot" />
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative flex-1 flex flex-col"
            >
              <div id="scroll-progress" className="fixed top-0 left-0 h-1 bg-gradient-to-r from-green-600 to-emerald-400 z-[100] w-0 transition-all duration-150" />
              <Navbar />
              <main className="flex-1">
                <AnimatedRoutes />
              </main>
              <Footer />
              <AIChatbot />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;
