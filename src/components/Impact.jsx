// src/components/Impact.jsx
import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  FaRecycle, FaTree, FaLeaf, FaUsers,
  FaTruck, FaShieldAlt,
} from 'react-icons/fa';

/* ── Animated counter ─────────────────────────────── */
const AnimatedCounter = ({ end, suffix = '', duration = 2200 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, end, duration]);

  const fmt = (n) => n >= 1000 ? `${(n / 1000).toFixed(0)}K` : n.toLocaleString();
  return <span ref={ref}>{fmt(count)}{suffix}</span>;
};

/* ── Floating Leaf ────────────────────────────────── */
const FloatingLeaf = ({ style, delay = 0, size = 24, rotate = 0, opacity = 0.35 }) => (
  <motion.div
    className="absolute pointer-events-none select-none"
    style={{ ...style, fontSize: size, opacity }}
    animate={{ y: [0, -18, 0], rotate: [rotate, rotate + 12, rotate], x: [0, 6, 0] }}
    transition={{ duration: 4 + delay, repeat: Infinity, ease: 'easeInOut', delay }}
  >
    🌿
  </motion.div>
);

/* ── Stat cards ───────────────────────────────────── */
const stats = [
  {
    icon: FaRecycle,
    value: 50000,
    suffix: '+',
    display: '50K+',
    label: 'Tons Recycled',
    color: '#16a34a',
    bg: '#f0fdf4',
    border: '#bbf7d0',
    progress: 85,
    barColor: '#16a34a',
  },
  {
    icon: FaTree,
    value: 120000,
    suffix: '+',
    display: '120K+',
    label: 'Trees Saved',
    color: '#15803d',
    bg: '#f0fdf4',
    border: '#bbf7d0',
    progress: 72,
    barColor: '#15803d',
  },
  {
    icon: FaLeaf,
    value: 30000,
    suffix: '+ Tons',
    display: '30K+ Tons',
    label: 'Plastic Reduced',
    color: '#2563eb',
    bg: '#eff6ff',
    border: '#bfdbfe',
    progress: 68,
    barColor: '#2563eb',
  },
  {
    icon: FaUsers,
    value: 12000,
    suffix: '+',
    display: '12K+',
    label: 'Active Clients',
    color: '#7c3aed',
    bg: '#f5f3ff',
    border: '#ddd6fe',
    progress: 90,
    barColor: '#7c3aed',
  },
];

const Impact = () => {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden bg-white">
      {/* ── Main section ── */}
      <div className="relative py-20 overflow-hidden">
        {/* Nature background image overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1448375240586-882707db888b?w=1800&h=900&fit=crop')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.08,
          }}
        />
        {/* Soft gradient overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at 80% 50%, rgba(220,252,231,0.6) 0%, rgba(255,255,255,0.9) 60%, rgba(255,255,255,1) 100%)',
          }}
        />

        {/* Floating leaves */}
        <FloatingLeaf style={{ top: '8%', left: '3%' }}  delay={0}   size={28} rotate={-20} opacity={0.4} />
        <FloatingLeaf style={{ top: '20%', left: '8%' }} delay={1.2} size={20} rotate={15}  opacity={0.3} />
        <FloatingLeaf style={{ top: '60%', left: '2%' }} delay={2.5} size={22} rotate={-10} opacity={0.35} />
        <FloatingLeaf style={{ top: '80%', left: '6%' }} delay={0.8} size={16} rotate={25}  opacity={0.25} />
        <FloatingLeaf style={{ top: '10%', right: '4%' }} delay={1.5} size={26} rotate={10}  opacity={0.4} />
        <FloatingLeaf style={{ top: '35%', right: '2%' }} delay={0.5} size={18} rotate={-15} opacity={0.3} />
        <FloatingLeaf style={{ top: '65%', right: '5%' }} delay={2.0} size={24} rotate={20}  opacity={0.35} />
        <FloatingLeaf style={{ top: '85%', right: '8%' }} delay={1.0} size={16} rotate={-5}  opacity={0.25} />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* ── Header ── */}
          <div className="text-center mb-14">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 mb-4"
            >
              <div className="w-8 h-px bg-green-500" />
              <FaLeaf className="text-green-600 text-xs" />
              <span className="text-green-700 text-xs font-bold tracking-[0.2em] uppercase">Live Impact</span>
              <FaLeaf className="text-green-600 text-xs" />
              <div className="w-8 h-px bg-green-500" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-black font-display text-gray-900 mb-4"
            >
              Our{' '}
              <span className="text-green-600">Environmental</span>{' '}
              <span className="text-gray-900">Impact</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-500 text-base max-w-md mx-auto leading-relaxed"
            >
              Every collection matters. See how our collective effort is shaping
              a cleaner India.
            </motion.p>
          </div>

          {/* ── Stat Cards ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
            {stats.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -6, boxShadow: `0 20px 40px ${s.color}18` }}
                  className="relative bg-white rounded-2xl p-6 border overflow-hidden cursor-default transition-all duration-300"
                  style={{
                    borderColor: s.border,
                    boxShadow: `0 4px 20px ${s.color}0d`,
                  }}
                >
                  {/* Watermark icon */}
                  <div
                    className="absolute -bottom-3 -right-3 text-8xl opacity-[0.04] pointer-events-none"
                    style={{ color: s.color }}
                  >
                    <Icon />
                  </div>

                  {/* Icon badge */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{ background: s.bg, border: `1.5px solid ${s.border}` }}
                  >
                    <Icon style={{ color: s.color }} className="text-lg" />
                  </div>

                  {/* Value */}
                  <div
                    className="text-3xl md:text-4xl font-black font-display mb-1 leading-none"
                    style={{ color: s.color }}
                  >
                    <AnimatedCounter end={s.value} suffix={s.suffix.includes('Tons') ? '' : s.suffix} />
                    {s.suffix.includes('Tons') ? ' Tons' : ''}
                  </div>

                  {/* Label */}
                  <div className="text-gray-500 text-sm font-medium mb-5">{s.label}</div>

                  {/* Progress bar */}
                  <div className="relative h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: '0%' }}
                      whileInView={{ width: `${s.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.4, delay: i * 0.1 + 0.4, ease: 'easeOut' }}
                      className="absolute top-0 left-0 h-full rounded-full"
                      style={{ background: s.barColor }}
                    />
                  </div>
                  <div className="flex justify-between mt-1.5">
                    <span className="text-[10px] text-gray-400">0</span>
                    <span className="text-[10px] font-semibold" style={{ color: s.barColor }}>{s.progress}%</span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* ── CTA Banner ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-between gap-6 bg-white border border-green-100 rounded-2xl px-6 py-5"
            style={{ boxShadow: '0 4px 24px rgba(22,163,74,0.08)' }}
          >
            {/* Left: icon + text */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-green-50 border border-green-100 flex items-center justify-center flex-shrink-0">
                <FaLeaf className="text-green-600 text-2xl" />
              </div>
              <div>
                <p className="text-gray-900 font-bold text-base leading-tight">
                  Together, We Create
                </p>
                <p className="font-bold text-base leading-tight">
                  <span className="text-green-600">A Cleaner, Greener</span>{' '}
                  <span className="text-gray-900">India</span>
                </p>
              </div>
            </div>

            {/* Middle: description */}
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs text-center sm:text-left hidden md:block">
              Our mission goes beyond waste management —<br />
              we're building a sustainable future for generations to come.
            </p>

            {/* Right: button */}
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 12px 30px rgba(22,163,74,0.25)' }}
              whileTap={{ scale: 0.97 }}
              onClick={() => navigate('/about')}
              className="flex items-center gap-2 px-6 py-2.5 rounded-full border-2 border-green-600 text-green-700 font-bold text-sm transition-all hover:bg-green-50 flex-shrink-0"
            >
              <FaLeaf className="text-xs" />
              Know More
              <span className="text-base leading-none ml-1">›</span>
            </motion.button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Impact;
