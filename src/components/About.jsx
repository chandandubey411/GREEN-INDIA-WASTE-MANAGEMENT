// src/components/About.jsx
import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaCheckCircle, FaAward, FaUsers, FaRecycle, FaCity, FaLeaf } from 'react-icons/fa';

const CountUp = ({ end, suffix = '', duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, end, duration]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
};

const counters = [
  { icon: FaRecycle, label: 'Waste Recycled', end: 50000, suffix: '+ Tons', color: '#22c55e' },
  { icon: FaUsers, label: 'Happy Clients', end: 12000, suffix: '+', color: '#3b82f6' },
  { icon: FaCity, label: 'Cities Covered', end: 120, suffix: '+', color: '#8b5cf6' },
  { icon: FaLeaf, label: 'CO₂ Saved (Tons)', end: 30000, suffix: '+', color: '#f59e0b' },
];

const highlights = [
  'Government Certified & ISO 14001:2015',
  'AI-powered waste classification system',
  'Same-day collection in 50+ major cities',
  'Zero-landfill commitment by 2027',
];

const About = () => {
  return (
    <section id="about" className="section-padding bg-slate-950">
      <div className="max-w-7xl mx-auto">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-2 mb-4"
        >
          <div className="w-8 h-0.5 bg-primary-500" />
          <span className="text-primary-400 text-sm font-semibold tracking-wider uppercase">About Us</span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Images */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="relative rounded-2xl overflow-hidden h-48 md:h-64"
              >
                <img
                  src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=400&h=300&fit=crop"
                  alt="Recycling facility"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
              </motion.div>
              <div className="flex flex-col gap-4">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="relative rounded-2xl overflow-hidden h-20 md:h-28"
                >
                  <img
                    src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=300&h=200&fit=crop"
                    alt="Eco environment"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="relative rounded-2xl overflow-hidden h-28"
                >
                  <img
                    src="https://images.unsplash.com/photo-1611270629569-8b357cb88da9?w=300&h=200&fit=crop"
                    alt="Plastic recycling"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
            </div>

            {/* Experience Badge */}
            <motion.div
              initial={{ scale: 0, rotate: -10 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4, type: 'spring' }}
              className="absolute -bottom-6 -right-4 bg-gradient-to-br from-primary-500 to-emerald-600 rounded-2xl p-5 shadow-2xl shadow-primary-500/30 text-center"
            >
              <div className="text-4xl font-black text-white font-display">10+</div>
              <div className="text-white/90 text-sm font-medium">Years of</div>
              <div className="text-white font-bold">Excellence</div>
            </motion.div>

            {/* Award Badge */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6, type: 'spring' }}
              className="absolute -top-4 -left-4 glass rounded-2xl p-4 flex items-center gap-3 shadow-xl"
            >
              <div className="w-10 h-10 rounded-full bg-yellow-500/20 flex items-center justify-center">
                <FaAward className="text-yellow-400 text-lg" />
              </div>
              <div>
                <div className="text-white font-bold text-sm">Best Platform</div>
                <div className="text-white/60 text-xs">2025 Green Award</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-black font-display text-white mb-6 leading-tight">
              A <span className="text-gradient">Great Opportunity</span> For Sustainable{' '}
              <span className="text-primary-400">India</span>
            </h2>

            <p className="text-white/60 text-lg leading-relaxed mb-6">
              Green India Waste Management is India's most trusted AI-powered waste management platform.
              Since 2015, we have transformed how cities, businesses, and households handle waste —
              turning it from a problem into a resource for a circular economy.
            </p>

            <p className="text-white/60 leading-relaxed mb-8">
              Our cutting-edge technology, combined with a network of 500+ certified recycling partners,
              ensures that every ton of waste we collect finds its highest-value destination.
            </p>

            {/* Highlights */}
            <div className="space-y-3 mb-10">
              {highlights.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <FaCheckCircle className="text-primary-400 flex-shrink-0" />
                  <span className="text-white/80">{item}</span>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(34,197,94,0.3)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary"
            >
              Explore Our Services →
            </motion.button>
          </motion.div>
        </div>

        {/* Counters */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 md:mt-20">
          {counters.map((counter, i) => (
            <motion.div
              key={counter.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative p-6 rounded-2xl border border-white/10 bg-white/5 text-center group overflow-hidden cursor-default"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `radial-gradient(circle at center, ${counter.color}10, transparent)` }}
              />
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: `${counter.color}20`, border: `1px solid ${counter.color}30` }}
              >
                <counter.icon style={{ color: counter.color }} className="text-2xl" />
              </div>
              <div
                className="text-3xl md:text-4xl font-black font-display mb-2 counter-number"
                style={{ color: counter.color }}
              >
                <CountUp end={counter.end} suffix={counter.suffix} />
              </div>
              <div className="text-white/60 text-sm">{counter.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
