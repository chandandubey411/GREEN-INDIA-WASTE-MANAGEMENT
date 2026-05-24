// src/components/GreenCircleStats.jsx
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  FaRecycle, FaCity, FaUsers, FaLeaf,
  FaArrowUp, FaCheckCircle
} from 'react-icons/fa';

const floatingCards = [
  {
    icon: FaRecycle,
    label: 'WASTE RECYCLED',
    value: '+50K Tons',
    color: '#22c55e',
    bg: '#14532d',
    position: { top: '8%', left: '2%' },
    delay: 0,
    floatClass: 'float-card',
  },
  {
    icon: FaCity,
    label: 'CITIES COVERED',
    value: '120+ Cities',
    color: '#4ade80',
    bg: '#166534',
    position: { top: '8%', right: '2%' },
    delay: 0.3,
    floatClass: 'float-card-delayed',
  },
  {
    icon: FaUsers,
    label: 'HAPPY CLIENTS',
    value: '12,000+',
    color: '#86efac',
    bg: '#15803d',
    position: { bottom: '12%', left: '2%' },
    delay: 0.6,
    floatClass: 'float-card',
  },
  {
    icon: FaLeaf,
    label: 'CO₂ SAVED',
    value: '30K+ Tons',
    color: '#a7f3d0',
    bg: '#064e3b',
    position: { bottom: '12%', right: '2%' },
    delay: 0.9,
    floatClass: 'float-card-delayed',
  },
];

const GreenCircleStats = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      ref={ref}
      className="relative py-24 overflow-hidden"
      style={{
        background:
          'radial-gradient(ellipse at 60% 50%, #052e16 0%, #064e3b 30%, #022c22 60%, #020d09 100%)',
      }}
    >
      {/* ── Background star particles ── */}
      {[...Array(28)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: `${2 + (i % 3)}px`,
            height: `${2 + (i % 3)}px`,
            left: `${(i * 37) % 100}%`,
            top: `${(i * 53) % 100}%`,
            background: `rgba(134,239,172,${0.08 + (i % 5) * 0.04})`,
          }}
          animate={{ opacity: [0.2, 0.8, 0.2], scale: [1, 1.4, 1] }}
          transition={{
            duration: 2.5 + (i % 4),
            repeat: Infinity,
            delay: i * 0.18,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* ── Wide green ambient glow ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 55% at 50% 50%, rgba(34,197,94,0.12) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <div className="w-10 h-0.5 bg-green-500" />
            <span className="text-green-400 text-sm font-bold tracking-[0.2em] uppercase">
              Our Impact
            </span>
            <div className="w-10 h-0.5 bg-green-500" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black font-display text-white leading-tight"
          >
            A <span className="text-gradient">360°</span> Green{' '}
            <span className="text-green-400">Solution</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-green-200/50 text-lg mt-4 max-w-xl mx-auto"
          >
            End-to-end waste management — from your doorstep to a cleaner planet.
          </motion.p>
        </div>

        {/* ─── Main Visual ─── */}
        <div className="relative flex items-center justify-center" style={{ minHeight: '480px' }}>

          {/* Floating Cards */}
          {floatingCards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.7 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: card.delay + 0.4, duration: 0.6, type: 'spring' }}
                whileHover={{ scale: 1.07, y: -6 }}
                className={`absolute z-20 cursor-default ${card.floatClass}`}
                style={card.position}
              >
                <div
                  className="flex items-center gap-3 px-5 py-4 rounded-2xl border border-white/10 backdrop-blur-sm shadow-2xl"
                  style={{
                    background: `linear-gradient(135deg, ${card.bg}ee, ${card.bg}99)`,
                    boxShadow: `0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)`,
                    minWidth: '190px',
                  }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: `${card.color}22`,
                      border: `1px solid ${card.color}44`,
                    }}
                  >
                    <Icon style={{ color: card.color }} className="text-lg" />
                  </div>
                  <div>
                    <div
                      className="text-[10px] font-bold tracking-widest uppercase mb-0.5"
                      style={{ color: `${card.color}99` }}
                    >
                      {card.label}
                    </div>
                    <div className="text-white font-black text-lg leading-none">
                      {card.value}
                    </div>
                  </div>
                  <FaArrowUp
                    className="ml-auto text-xs"
                    style={{ color: card.color }}
                  />
                </div>
              </motion.div>
            );
          })}

          {/* ── Central Orb ── */}
          <div className="relative flex items-center justify-center">
            {/* Outermost ring – slow rotate */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              className="absolute rounded-full border border-green-700/40"
              style={{ width: 380, height: 380 }}
            />

            {/* Middle ring – counter rotate, dashed */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute rounded-full"
              style={{
                width: 300,
                height: 300,
                border: '1.5px dashed rgba(74,222,128,0.25)',
              }}
            />

            {/* Inner ring – slow rotate with glow */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
              className="absolute rounded-full"
              style={{
                width: 220,
                height: 220,
                border: '2px solid rgba(34,197,94,0.35)',
                boxShadow: '0 0 40px rgba(34,197,94,0.15)',
              }}
            >
              {/* Rotating dot on inner ring */}
              <div
                className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-green-400 shadow-lg"
                style={{ boxShadow: '0 0 12px 4px rgba(74,222,128,0.6)' }}
              />
            </motion.div>

            {/* Glow bloom */}
            <motion.div
              animate={{ scale: [1, 1.12, 1], opacity: [0.5, 0.9, 0.5] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute rounded-full"
              style={{
                width: 160,
                height: 160,
                background:
                  'radial-gradient(circle, rgba(34,197,94,0.45) 0%, rgba(16,185,129,0.2) 50%, transparent 80%)',
                filter: 'blur(12px)',
              }}
            />

            {/* Core orb */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.8, type: 'spring', bounce: 0.3 }}
              className="relative z-10 w-44 h-44 rounded-full flex flex-col items-center justify-center"
              style={{
                background:
                  'radial-gradient(circle at 35% 35%, rgba(74,222,128,0.25) 0%, rgba(22,101,52,0.8) 60%, rgba(2,44,34,0.95) 100%)',
                border: '2px solid rgba(74,222,128,0.4)',
                boxShadow:
                  '0 0 60px rgba(34,197,94,0.3), 0 0 120px rgba(34,197,94,0.12), inset 0 2px 4px rgba(255,255,255,0.1)',
              }}
            >
              <span
                className="text-5xl font-black font-display leading-none"
                style={{
                  background: 'linear-gradient(135deg, #86efac, #22c55e, #4ade80)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textShadow: 'none',
                  filter: 'drop-shadow(0 0 8px rgba(74,222,128,0.5))',
                }}
              >
                360°
              </span>
              <span className="text-green-300/60 text-xs font-semibold tracking-widest uppercase mt-1">
                Full Cover
              </span>
            </motion.div>
          </div>
        </div>

        {/* ─── Bottom CTA row ─── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <div
            className="flex flex-wrap justify-center gap-6 px-8 py-5 rounded-2xl border border-white/10"
            style={{
              background: 'rgba(255,255,255,0.04)',
              backdropFilter: 'blur(12px)',
            }}
          >
            {[
              { label: 'ISO 14001 Certified', color: '#4ade80' },
              { label: 'Carbon Neutral', color: '#86efac' },
              { label: '98% Diversion Rate', color: '#22c55e' },
              { label: 'AI Powered', color: '#a7f3d0' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + i * 0.1 }}
                className="flex items-center gap-2"
              >
                <FaCheckCircle style={{ color: item.color }} className="text-sm" />
                <span className="text-white/70 text-sm font-medium">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GreenCircleStats;
