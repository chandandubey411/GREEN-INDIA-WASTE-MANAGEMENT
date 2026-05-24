// src/components/Hero.jsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowRight, FaRecycle, FaUsers, FaCity, FaLeaf, FaPlay, FaCheckCircle } from 'react-icons/fa';

const carouselImages = [
  {
    src: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&h=600&fit=crop',
    label: 'Smart Recycling',
    tag: 'Zero Waste',
  },
  {
    src: 'https://images.unsplash.com/photo-1611270629569-8b357cb88da9?w=800&h=600&fit=crop',
    label: 'Green Operations',
    tag: 'Eco Certified',
  },
  {
    src: 'https://images.unsplash.com/photo-1542601906897-44cc4f6e1a67?w=800&h=600&fit=crop',
    label: 'Clean India Mission',
    tag: 'Nationwide',
  },
  {
    src: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&h=600&fit=crop',
    label: 'Sustainable Future',
    tag: 'AI Powered',
  },
];

const stats = [
  { icon: FaRecycle, value: '50K+', label: 'Tons Recycled', color: '#16a34a' },
  { icon: FaUsers, value: '12K+', label: 'Happy Clients', color: '#059669' },
  { icon: FaCity, value: '120+', label: 'Cities Covered', color: '#0d9488' },
];

const badges = [
  'ISO Certified',
  'Carbon Neutral',
  'AI Powered',
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [prevImg, setPrevImg] = useState(null);

  useEffect(() => {
    const t = setInterval(() => {
      setPrevImg(current);
      setCurrent((p) => (p + 1) % carouselImages.length);
    }, 4500);
    return () => clearInterval(t);
  }, [current]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#f0fdf4]"
    >
      {/* ── Background grid pattern ── */}
      <div className="absolute inset-0 hero-grid-pattern opacity-60 z-0" />

      {/* ── Glowing Orbs ── */}
      <div className="absolute top-[-120px] left-[-100px] w-[500px] h-[500px] hero-orb hero-orb-1 z-0" />
      <div className="absolute bottom-[-80px] right-[10%] w-[380px] h-[380px] hero-orb hero-orb-2 z-0" />
      <div className="absolute top-[30%] left-[40%] w-[250px] h-[250px] hero-orb hero-orb-3 z-0" />

      {/* ── Floating Leaf Particles ── */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute z-0 text-green-400/20 select-none pointer-events-none"
          style={{
            left: `${5 + i * 8}%`,
            top: `${10 + ((i * 37) % 70)}%`,
            fontSize: `${10 + (i % 4) * 6}px`,
          }}
          animate={{
            y: [-15, 15, -15],
            rotate: [0, 180, 360],
            opacity: [0.15, 0.4, 0.15],
          }}
          transition={{
            duration: 5 + i * 0.7,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.3,
          }}
        >
          ♻
        </motion.div>
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full pt-28 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* ── LEFT: Text Content ── */}
          <div className="flex flex-col gap-6">

            {/* Badge Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap gap-2"
            >
              {badges.map((b, i) => (
                <motion.span
                  key={b}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                  className="inline-flex items-center gap-1.5 bg-white border border-green-200 rounded-full px-3 py-1 text-xs font-semibold text-green-700 shadow-sm"
                >
                  <FaCheckCircle className="text-green-500" />
                  {b}
                </motion.span>
              ))}
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-5xl md:text-6xl lg:text-7xl font-black font-display text-gray-900 leading-[1.08]"
            >
              Smart{' '}
              <span className="hero-gradient-text">Waste</span>
              <br />
              Solutions For
              <br />
              <span className="relative inline-block">
                Cleaner
                <span className="hero-underline" />
              </span>{' '}
              <span className="text-green-600">India</span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-gray-500 text-lg leading-relaxed max-w-lg"
            >
              AI-powered waste collection, recycling &amp; disposal across{' '}
              <strong className="text-gray-700">120+ cities</strong>. Join{' '}
              <strong className="text-gray-700">12,000+ clients</strong> building a
              sustainable India — one pickup at a time.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 20px 50px rgba(22,163,74,0.35)' }}
                whileTap={{ scale: 0.96 }}
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-hero-primary flex items-center gap-2"
              >
                <FaLeaf />
                Book Free Pickup
                <FaArrowRight className="text-sm" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-hero-outline flex items-center gap-2"
              >
                <span className="w-7 h-7 rounded-full bg-green-100 flex items-center justify-center">
                  <FaPlay className="text-green-600 text-[9px] ml-0.5" />
                </span>
                Explore Services
              </motion.button>
            </motion.div>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="flex gap-6 pt-2"
            >
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  whileHover={{ y: -4 }}
                  className="flex flex-col"
                >
                  <span className="text-2xl font-black font-display text-gray-900">{s.value}</span>
                  <span className="text-xs text-gray-500">{s.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT: Image Showcase ── */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:flex items-center justify-center"
          >
            {/* Main image card */}
            <div className="hero-img-frame">
              {/* Glow ring */}
              <div className="hero-glow-ring" />

              <div className="relative w-[420px] h-[480px] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-green-400/20">
                <AnimatePresence mode="sync">
                  <motion.img
                    key={current}
                    src={carouselImages[current].src}
                    alt={carouselImages[current].label}
                    initial={{ opacity: 0, scale: 1.06 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="eager"
                  />
                </AnimatePresence>

                {/* Image overlay label */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-6">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={current}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.4 }}
                    >
                      <span className="bg-green-500/80 text-white text-xs font-bold px-2.5 py-1 rounded-full backdrop-blur-sm">
                        {carouselImages[current].tag}
                      </span>
                      <p className="text-white font-bold text-lg mt-2">{carouselImages[current].label}</p>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Dot indicators */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                {carouselImages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`transition-all duration-400 rounded-full ${
                      i === current ? 'w-6 h-2 bg-green-500' : 'w-2 h-2 bg-green-300/60'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Floating stat card – top left */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: -20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="absolute -left-8 top-20 hero-float-card float-card"
            >
              <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center mb-2">
                <FaRecycle className="text-green-600 text-lg" />
              </div>
              <div className="text-xl font-black text-gray-900">50K+</div>
              <div className="text-xs text-gray-500 font-medium">Tons Recycled</div>
            </motion.div>

            {/* Floating stat card – bottom right */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ delay: 1.1, duration: 0.5 }}
              className="absolute -right-6 bottom-28 hero-float-card float-card-delayed"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center mb-2">
                <FaLeaf className="text-emerald-600 text-lg" />
              </div>
              <div className="text-xl font-black text-gray-900">4.9★</div>
              <div className="text-xs text-gray-500 font-medium">Client Rating</div>
            </motion.div>

            {/* Floating badge – top right */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.5 }}
              className="absolute right-4 top-8 hero-float-badge float-card"
            >
              <span className="text-green-600 font-bold text-xs">🌿 India's #1</span>
              <span className="text-gray-400 text-[10px] block">Waste Platform</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* ── Scroll Cue ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-green-400/50 flex items-start justify-center pt-1.5"
        >
          <div className="w-1.5 h-2.5 rounded-full bg-green-500 animate-bounce" />
        </motion.div>
        <span className="text-[10px] text-green-600/60 tracking-widest uppercase font-semibold">Scroll</span>
      </motion.div>
    </section>
  );
};

export default Hero;
