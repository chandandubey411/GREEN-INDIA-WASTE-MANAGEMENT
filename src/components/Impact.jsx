// src/components/Impact.jsx
import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaRecycle, FaTree, FaLeaf, FaUsers } from 'react-icons/fa';
import { impactStats } from '../data';

const iconMap = { FaRecycle, FaTree, FaLeaf, FaUsers };

const AnimatedCounter = ({ end, suffix, duration = 2500 }) => {
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

  const format = (n) => {
    if (n >= 1000) return `${(n / 1000).toFixed(0)}K`;
    return n.toLocaleString();
  };

  return <span ref={ref}>{format(count)}{suffix}</span>;
};

const Impact = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-br from-green-800 via-green-700 to-emerald-800">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-green-300/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '50px 50px' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <div className="w-8 h-0.5 bg-green-300" />
            <span className="text-green-200 text-sm font-semibold tracking-wider uppercase">Live Impact</span>
            <div className="w-8 h-0.5 bg-green-300" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black font-display text-white mb-4"
          >
            Our <span className="text-green-300">Environmental Impact</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-green-100/70 text-lg max-w-xl mx-auto"
          >
            Every pickup matters. See how our collective effort is shaping a cleaner India.
          </motion.p>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {impactStats.map((stat, i) => {
            const Icon = iconMap[stat.icon];
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                whileHover={{ y: -6 }}
                className="relative p-6 rounded-2xl border border-white/20 overflow-hidden group cursor-default bg-white/10 backdrop-blur"
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `radial-gradient(circle at 30% 30%, ${stat.color}25, transparent)` }}
                />
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: `${stat.color}30`, border: `1px solid ${stat.color}50` }}
                >
                  {Icon && <Icon style={{ color: stat.color }} className="text-2xl" />}
                </div>
                <div className="text-4xl font-black font-display mb-1 counter-number" style={{ color: stat.color }}>
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-white/80 font-medium mb-4">{stat.label}</div>
                <div className="relative h-1.5 bg-white/15 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: '0%' }}
                    whileInView={{ width: `${stat.progress}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: i * 0.1 + 0.3, ease: 'easeOut' }}
                    className="absolute top-0 left-0 h-full rounded-full"
                    style={{ backgroundColor: stat.color }}
                  />
                </div>
                <div className="flex justify-between mt-1">
                  <span className="text-xs text-white/40">0</span>
                  <span className="text-xs" style={{ color: stat.color }}>{stat.progress}%</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Big Impact Statement */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="relative overflow-hidden rounded-3xl p-10 md:p-16 border border-white/20 bg-white/10 backdrop-blur"
        >
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 right-0 text-9xl font-black text-white select-none">♻</div>
          </div>
          <div className="relative grid md:grid-cols-3 gap-8 text-center">
            {[
              { value: '98%', label: 'Waste Diverted from Landfill' },
              { value: '₹50Cr+', label: 'Value Created from Waste' },
              { value: '2027', label: 'Zero-Landfill Target Year' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 + 0.4 }}
              >
                <div className="text-5xl font-black font-display text-green-300 mb-2">{item.value}</div>
                <div className="text-white/70">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Impact;
