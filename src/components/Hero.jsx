// src/components/Hero.jsx
import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaArrowRight, FaRecycle, FaUsers, FaCity,
  FaLeaf, FaPlay, FaCheckCircle, FaTimes,
  FaPaperPlane, FaPhone, FaEnvelope, FaChevronLeft, FaChevronRight,
} from 'react-icons/fa';

/* ─── Carousel slides ─────────────────────────────────────── */
const slides = [
  {
    src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1800&h=900&fit=crop',
    headline: "Let's Take Action To",
    subheadline: 'Eliminate Pollution',
    caption: 'Join India\'s largest AI-powered waste network — cleaner cities, greener future.',
    tag: 'Zero Waste Mission',
    color: '#22c55e',
  },
  {
    src: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=1800&h=900&fit=crop',
    headline: 'Smart Recycling For',
    subheadline: 'Cleaner India',
    caption: 'Serving 120+ cities with AI-powered collection, recycling & responsible disposal.',
    tag: 'Smart Recycling',
    color: '#10b981',
  },
  {
    src: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1800&h=900&fit=crop',
    headline: 'Building a Sustainable',
    subheadline: 'Tomorrow Today',
    caption: '50,000+ tons recycled. 12,000+ happy clients. Zero-landfill by 2027.',
    tag: 'Eco Certified',
    color: '#059669',
  },
  {
    src: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1800&h=900&fit=crop',
    headline: 'Protecting Nature By',
    subheadline: 'Proper Waste Management',
    caption: 'Government certified, ISO 14001:2015 compliant waste management solutions.',
    tag: 'ISO Certified',
    color: '#16a34a',
  },
];

/* ─── Stats ──────────────────────────────────────────────── */
const stats = [
  { icon: FaRecycle, value: '50K+', label: 'Tons Recycled' },
  { icon: FaUsers,   value: '12K+', label: 'Happy Clients'  },
  { icon: FaCity,    value: '120+', label: 'Cities Covered' },
];

/* ─── Pickup Modal Form ───────────────────────────────────── */
const PickupModal = ({ onClose }) => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', city: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setDone(true); }, 1800);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[300] flex items-center justify-center p-4"
      style={{ backdropFilter: 'blur(14px) brightness(0.3)' }}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.85, opacity: 0, y: 40 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ type: 'spring', damping: 22, stiffness: 260 }}
        className="relative w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        style={{ background: 'linear-gradient(145deg, #ffffff 0%, #f0fdf4 100%)' }}
      >
        {/* Header */}
        <div
          className="relative px-8 pt-8 pb-6 text-white overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #15803d 0%, #059669 60%, #10b981 100%)' }}
        >
          <div className="absolute inset-0 opacity-20"
            style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
          >
            <FaTimes className="text-sm" />
          </button>
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-xl bg-white/25 flex items-center justify-center">
                <FaRecycle className="text-white text-sm" />
              </div>
              <span className="text-white/80 text-xs font-semibold uppercase tracking-widest">Green India</span>
            </div>
            <h3 className="text-2xl font-black font-display">Book Free Pickup</h3>
            <p className="text-white/75 text-sm mt-1">We'll respond within 2 hours • Same-day available</p>
          </div>
        </div>

        {/* Body */}
        <div className="px-8 py-7">
          {done ? (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center py-8"
            >
              <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-5">
                <FaCheckCircle className="text-green-500 text-4xl" />
              </div>
              <h4 className="text-gray-900 text-xl font-black font-display mb-2">Pickup Booked! 🎉</h4>
              <p className="text-gray-500 text-sm mb-6">Our team will call you within 2 hours to confirm your pickup slot.</p>
              <button onClick={onClose} className="btn-hero-primary px-8 py-3 text-sm">
                Done
              </button>
            </motion.div>
          ) : (
            <form onSubmit={submit} className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                {[
                  { name: 'name',  placeholder: 'Full Name',     type: 'text'  },
                  { name: 'phone', placeholder: 'Phone Number',  type: 'tel'   },
                  { name: 'email', placeholder: 'Email Address', type: 'email' },
                  { name: 'city',  placeholder: 'Your City',     type: 'text'  },
                ].map(({ name, placeholder, type }) => (
                  <input
                    key={name}
                    name={name}
                    type={type}
                    value={form[name]}
                    onChange={handle}
                    placeholder={placeholder}
                    required={name !== 'email'}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 text-sm focus:outline-none focus:border-green-500 focus:bg-white transition-all placeholder-gray-400"
                  />
                ))}
              </div>

              <select
                name="service"
                value={form.service}
                onChange={handle}
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-700 text-sm focus:outline-none focus:border-green-500 focus:bg-white transition-all appearance-none cursor-pointer"
              >
                <option value="">Select Waste Type</option>
                {['Plastic Waste', 'E-Waste / Electronics', 'Industrial Waste', 'Scrap Metal', 'Organic Waste', 'Mixed / Other'].map(s => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>

              <textarea
                name="message"
                value={form.message}
                onChange={handle}
                placeholder="Additional details (quantity, frequency, special instructions...)"
                rows={3}
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 text-sm focus:outline-none focus:border-green-500 focus:bg-white transition-all placeholder-gray-400 resize-none"
              />

              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: 1.02, boxShadow: '0 16px 40px rgba(22,163,74,0.35)' }}
                whileTap={{ scale: 0.98 }}
                className="w-full btn-hero-primary py-3.5 flex items-center justify-center gap-2 text-sm disabled:opacity-70"
              >
                {loading ? (
                  <><div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" /> Processing...</>
                ) : (
                  <><FaPaperPlane className="text-xs" /> Confirm Free Pickup</>
                )}
              </motion.button>

              <div className="flex items-center justify-center gap-6 pt-1">
                <div className="flex items-center gap-1.5 text-gray-400 text-xs">
                  <FaPhone className="text-[10px]" /> +91 98765 43210
                </div>
                <div className="flex items-center gap-1.5 text-gray-400 text-xs">
                  <FaEnvelope className="text-[10px]" /> hello@greenindiawm.com
                </div>
              </div>
            </form>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

/* ─── Main Hero ───────────────────────────────────────────── */
const Hero = () => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = useCallback((idx) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrent(idx);
    setTimeout(() => setIsTransitioning(false), 900);
  }, [isTransitioning]);

  const next = () => goTo((current + 1) % slides.length);
  const prev = () => goTo((current - 1 + slides.length) % slides.length);

  useEffect(() => {
    if (showModal) return;
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [current, showModal, isTransitioning]);

  const goToServices = () => {
    navigate('/services');
  };

  return (
    <>
      <section id="home" className="relative w-full overflow-hidden" style={{ height: '100vh', minHeight: 600 }}>

        {/* ── Background image carousel ── */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="sync">
            <motion.img
              key={current}
              src={slides[current].src}
              alt={slides[current].subheadline}
              initial={{ opacity: 0, scale: 1.06 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.0, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="absolute inset-0 w-full h-full object-cover"
              loading="eager"
            />
          </AnimatePresence>

          {/* Dark gradient overlay */}
          <div className="absolute inset-0"
            style={{ background: 'linear-gradient(110deg, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.55) 50%, rgba(0,0,0,0.25) 100%)' }} />

          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-32"
            style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.5), transparent)' }} />
        </div>

        {/* ── Progress bar ── */}
        <div className="absolute top-0 left-0 right-0 h-[3px] z-20 bg-white/10">
          <motion.div
            key={current}
            className="h-full"
            style={{ background: slides[current].color }}
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 5.0, ease: 'linear' }}
          />
        </div>

        {/* ── Main content ── */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 w-full pt-16 md:pt-20">

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 36 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="max-w-3xl"
              >
                {/* Slide tag pill */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                  className="inline-flex items-center gap-2 rounded-full px-3 py-1 mb-3 md:mb-6 text-xs font-bold text-white border border-white/20"
                  style={{ background: `${slides[current].color}cc`, backdropFilter: 'blur(8px)' }}
                >
                  <FaLeaf className="text-[10px]" />
                  {slides[current].tag}
                </motion.div>

                {/* Main headline */}
                <h1 className="font-black font-display text-white leading-[1.1] md:leading-[1.06] mb-2 md:mb-4"
                  style={{ fontSize: 'clamp(2rem, 7vw, 5.2rem)' }}>
                  {slides[current].headline}
                  <br />
                  <span style={{ color: slides[current].color }}>
                    {slides[current].subheadline}
                  </span>
                </h1>

                {/* Caption */}
                <p className="text-white/75 text-sm md:text-lg leading-relaxed mb-4 md:mb-10 max-w-xl font-light">
                  {slides[current].caption}
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row flex-wrap gap-3 mb-4 md:mb-12">
                  {/* Book Pickup — opens modal */}
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: '0 20px 50px rgba(22,163,74,0.45)' }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setShowModal(true)}
                    className="flex items-center justify-center gap-2.5 font-bold text-white px-6 py-3.5 md:py-4 rounded-full text-sm md:text-[15px] transition-all w-full sm:w-auto"
                    style={{ background: `linear-gradient(135deg, #16a34a, #059669)`, boxShadow: '0 8px 30px rgba(22,163,74,0.35)' }}
                  >
                    <FaRecycle className="text-sm" />
                    Book Free Pickup
                    <FaArrowRight className="text-xs" />
                  </motion.button>

                  {/* Explore Services — navigates to /services page */}
                  <motion.button
                    whileHover={{ scale: 1.05, background: 'rgba(255,255,255,0.25)' }}
                    whileTap={{ scale: 0.97 }}
                    onClick={goToServices}
                    className="flex items-center justify-center gap-2.5 font-bold text-white px-6 py-3.5 md:py-4 rounded-full text-sm md:text-[15px] border-2 border-white/40 transition-all w-full sm:w-auto"
                    style={{ background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(10px)' }}
                  >
                    <span className="w-7 h-7 rounded-full bg-white/25 flex items-center justify-center">
                      <FaPlay className="text-[8px] ml-0.5" />
                    </span>
                    Explore Services
                  </motion.button>
                </div>

                {/* Stats row — horizontal scroll on mobile */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="flex gap-4 md:gap-6 overflow-x-auto pb-1 no-scrollbar"
                >
                  {stats.map((s, i) => (
                    <div key={i} className="flex items-center gap-2 flex-shrink-0">
                      <div className="w-8 h-8 md:w-9 md:h-9 rounded-xl flex items-center justify-center"
                        style={{ background: `${slides[current].color}25`, border: `1px solid ${slides[current].color}50` }}>
                        <s.icon style={{ color: slides[current].color }} className="text-xs md:text-sm" />
                      </div>
                      <div>
                        <div className="text-white font-black text-base md:text-lg leading-none font-display">{s.value}</div>
                        <div className="text-white/55 text-[10px] md:text-[11px] font-medium mt-0.5">{s.label}</div>
                      </div>
                      {i < stats.length - 1 && (
                        <div className="w-px h-7 bg-white/15 ml-1 md:ml-2" />
                      )}
                    </div>
                  ))}
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* ── Arrow controls ── */}
        <button
          onClick={prev}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full border border-white/25 hidden md:flex items-center justify-center text-white transition-all hover:bg-white/20"
          style={{ backdropFilter: 'blur(8px)', background: 'rgba(0,0,0,0.25)' }}
        >
          <FaChevronLeft className="text-sm" />
        </button>
        <button
          onClick={next}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full border border-white/25 hidden md:flex items-center justify-center text-white transition-all hover:bg-white/20"
          style={{ backdropFilter: 'blur(8px)', background: 'rgba(0,0,0,0.25)' }}
        >
          <FaChevronRight className="text-sm" />
        </button>

        {/* ── Dot indicators ── */}
        <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5">
          {slides.map((slide, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className="transition-all duration-400 rounded-full"
              style={{
                width: i === current ? 28 : 8,
                height: 8,
                background: i === current ? slide.color : 'rgba(255,255,255,0.4)',
              }}
            />
          ))}
        </div>

        {/* ── Slide counter ── */}
        <div className="absolute bottom-4 md:bottom-8 right-6 md:right-10 z-20 text-white/50 text-xs font-mono font-bold">
          {String(current + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
        </div>

        {/* ── Scroll cue ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-8 z-20 hidden md:flex flex-col items-center gap-1.5"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity }}
            className="w-5 h-8 rounded-full border border-white/30 flex items-start justify-center pt-1"
          >
            <div className="w-1 h-2 rounded-full bg-white/60" />
          </motion.div>
          <span className="text-[9px] text-white/40 tracking-[0.2em] uppercase font-bold">Scroll</span>
        </motion.div>
      </section>

      {/* ── Pickup Modal ── */}
      <AnimatePresence>
        {showModal && <PickupModal onClose={() => setShowModal(false)} />}
      </AnimatePresence>
    </>
  );
};

export default Hero;
