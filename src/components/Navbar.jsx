import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaLeaf, FaPhone } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import { navLinks } from '../data';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-xl shadow-xl shadow-green-200/30 py-2 border-b border-green-100'
            : 'bg-white/60 backdrop-blur-xl py-4 border-b border-green-100/10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">

          {/* Logo */}
          <Link to="/" onClick={() => setMobileOpen(false)}>
            <motion.div whileHover={{ scale: 1.04 }} className="flex items-center gap-3">
              <div className="w-11 h-11 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg shadow-green-400/30">
                <FaLeaf className="text-white text-lg" />
              </div>
              <div className="hidden sm:block">
                <div className="font-bold text-xl font-display leading-tight text-gray-900">
                  Green<span className="text-green-500">India</span>
                </div>
                <p className="text-xs leading-none text-green-600 font-semibold">Waste Management</p>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`relative px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300 ${
                    isActive
                      ? 'text-green-700'
                      : 'text-gray-700 hover:text-green-700'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavPill"
                      className="absolute inset-0 bg-green-100 rounded-full border border-green-300/50"
                      transition={{ type: 'spring', bounce: 0.25, duration: 0.5 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </Link>
              );
            })}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <a href="tel:+919650380888" className="hidden md:flex items-center gap-2 text-sm font-semibold text-green-700 hover:text-green-600 transition-colors">
              <FaPhone className="text-xs" /> +91 9650380888
            </a>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.95 }}
                className="hidden md:flex btn-primary text-sm px-5 py-2.5 btn-glow"
              >
                Book Pickup
              </motion.button>
            </Link>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden w-10 h-10 rounded-xl flex items-center justify-center transition-all bg-green-50 border border-green-200 text-green-700 hover:bg-green-100"
            >
              {mobileOpen ? <FaTimes /> : <FaBars />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
            <div className="absolute right-0 top-0 bottom-0 w-80 bg-white border-l border-green-100 shadow-2xl flex flex-col pt-24 px-8">
              <div className="flex flex-col gap-2">
                {navLinks.map((link, i) => {
                  const isActive = location.pathname === link.href;
                  return (
                    <Link key={link.name} to={link.href} onClick={() => setMobileOpen(false)}>
                      <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.08 }}
                        className={`py-3 px-4 rounded-xl text-base font-semibold transition-all ${
                          isActive
                            ? 'text-green-700 bg-green-50 border border-green-200'
                            : 'text-gray-700 hover:text-green-700 hover:bg-green-50'
                        }`}
                      >
                        {link.name}
                      </motion.div>
                    </Link>
                  );
                })}
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-8 space-y-3"
              >
                <a href="tel:+919650380888" className="flex items-center gap-2 text-green-700 font-semibold px-4 py-3 bg-green-50 rounded-xl border border-green-200">
                  <FaPhone /> +91 9650380888
                </a>
                <Link to="/contact" onClick={() => setMobileOpen(false)}>
                  <button className="btn-primary w-full text-center">Book Pickup</button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
