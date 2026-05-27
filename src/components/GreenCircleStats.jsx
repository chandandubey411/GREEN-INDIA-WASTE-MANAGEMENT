// src/components/GreenCircleStats.jsx
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  FaRecycle, FaCity, FaUsers, FaLeaf,
  FaTruck, FaShieldAlt, FaLock, FaMedal,
  FaArrowRight,
} from 'react-icons/fa';

/* ── Stat cards ─────────────────────────────────────── */
const statCards = [
  {
    icon: FaRecycle,
    label: 'WASTE RECYCLED',
    value: '50K Tons',
    sub: 'Diverted from Landfills',
    color: '#4ade80',
    bg: 'rgba(20,83,45,0.85)',
    position: 'top-left',
  },
  {
    icon: FaCity,
    label: 'CITIES SERVED',
    value: '120+ Cities',
    sub: 'Across India',
    color: '#86efac',
    bg: 'rgba(22,101,52,0.85)',
    position: 'top-right',
  },
  {
    icon: FaUsers,
    label: 'HAPPY CLIENTS',
    value: '12,000+',
    sub: 'Trust Us Nationwide',
    color: '#a7f3d0',
    bg: 'rgba(21,128,61,0.85)',
    position: 'bottom-left',
  },
  {
    icon: FaLeaf,
    label: 'CO₂ SAVED',
    value: '30K+ Tons',
    sub: 'Carbon Emissions Reduced',
    color: '#6ee7b7',
    bg: 'rgba(6,78,59,0.85)',
    position: 'bottom-right',
  },
];

/* ── Bottom features ─────────────────────────────────── */
const features = [
  { icon: FaTruck,     label: 'Same-Day\nPickup Available' },
  { icon: FaRecycle,   label: '98% Landfill\nDiversion' },
  { icon: FaShieldAlt, label: 'Data Secure &\nCompliant' },
  { icon: FaMedal,     label: 'ISO 14001\nCertified' },
  { icon: FaLeaf,      label: 'Carbon Neutral\nOperations' },
];

/* ── Orbiting icon positions ─────────────────────────── */
const orbitIcons = [FaLeaf, FaCity, FaRecycle, FaTruck];

const GreenCircleStats = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const navigate = useNavigate();

  return (
    <section
      ref={ref}
      className="relative py-16 md:py-24 overflow-hidden"
      style={{
        background:
          'radial-gradient(ellipse at 50% 0%, #064e3b 0%, #022c22 40%, #020d09 100%)',
      }}
    >
      {/* ── Floating leaf decorations ── */}
      {[
        { top: '12%', left: '3%', size: 32, rot: -20, delay: 0 },
        { top: '40%', left: '1%', size: 22, rot: 10, delay: 1.2 },
        { top: '70%', left: '4%', size: 18, rot: -5, delay: 2.0 },
        { top: '15%', right: '3%', size: 28, rot: 15, delay: 0.6 },
        { top: '50%', right: '2%', size: 20, rot: -12, delay: 1.8 },
        { top: '75%', right: '5%', size: 24, rot: 8, delay: 0.3 },
      ].map((l, i) => (
        <motion.div
          key={i}
          className="absolute pointer-events-none select-none text-2xl"
          style={{
            top: l.top,
            left: l.left,
            right: l.right,
            fontSize: l.size,
            opacity: 0.5,
          }}
          animate={{ y: [0, -14, 0], rotate: [l.rot, l.rot + 10, l.rot] }}
          transition={{ duration: 4 + l.delay, repeat: Infinity, ease: 'easeInOut', delay: l.delay }}
        >
          🌿
        </motion.div>
      ))}

      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 55% 50% at 50% 50%, rgba(34,197,94,0.10) 0%, transparent 70%)',
        }}
      />

      {/* Star particles */}
      {[...Array(18)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: `${1.5 + (i % 3)}px`,
            height: `${1.5 + (i % 3)}px`,
            left: `${(i * 41) % 100}%`,
            top: `${(i * 57) % 100}%`,
            background: `rgba(134,239,172,${0.06 + (i % 5) * 0.04})`,
          }}
          animate={{ opacity: [0.1, 0.7, 0.1], scale: [1, 1.5, 1] }}
          transition={{ duration: 2.5 + (i % 4), repeat: Infinity, delay: i * 0.2, ease: 'easeInOut' }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">

        {/* ── Header ── */}
        <div className="text-center mb-10 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 mb-4"
          >
            <div className="w-10 h-px bg-green-500" />
            <FaLeaf className="text-green-500 text-xs" />
            <span className="text-green-400 text-xs font-bold tracking-[0.22em] uppercase">Our Impact</span>
            <div className="w-10 h-px bg-green-500" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-black font-display text-white leading-tight mb-4"
          >
            A{' '}
            <span style={{
              background: 'linear-gradient(135deg, #4ade80, #22c55e)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>360°</span>{' '}
            Green{' '}
            <span className="text-green-400">Solution</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-green-200/50 text-base md:text-lg max-w-lg mx-auto"
          >
            End-to-end waste management — from your doorstep
            <br className="hidden md:block" />
            to a{' '}
            <span className="text-green-400 font-semibold">cleaner planet.</span>
          </motion.p>
        </div>

        {/* ── MOBILE: 2×2 grid ── */}
        <div className="lg:hidden mb-10">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.7, type: 'spring', bounce: 0.3 }}
            className="flex flex-col items-center justify-center mx-auto mb-8 rounded-full"
            style={{
              width: 140,
              height: 140,
              background: 'radial-gradient(circle at 35% 35%, rgba(74,222,128,0.25) 0%, rgba(22,101,52,0.8) 60%, rgba(2,44,34,0.95) 100%)',
              border: '2px solid rgba(74,222,128,0.4)',
              boxShadow: '0 0 50px rgba(34,197,94,0.3)',
            }}
          >
            <span
              className="text-4xl font-black font-display"
              style={{
                background: 'linear-gradient(135deg, #86efac, #22c55e)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >360°</span>
            <span className="text-green-300/60 text-[9px] font-bold tracking-widest uppercase mt-1">Full Cover</span>
          </motion.div>

          <div className="grid grid-cols-2 gap-3">
            {statCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-start gap-2.5 px-3.5 py-4 rounded-2xl border border-white/10"
                  style={{ background: card.bg, boxShadow: '0 4px 20px rgba(0,0,0,0.3)' }}
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: `${card.color}22`, border: `1px solid ${card.color}44` }}
                  >
                    <Icon style={{ color: card.color }} className="text-sm" />
                  </div>
                  <div>
                    <div className="text-[9px] font-bold tracking-widest uppercase mb-0.5" style={{ color: `${card.color}99` }}>{card.label}</div>
                    <div className="text-white font-black text-sm leading-none">{card.value}</div>
                    <div className="text-white/40 text-[9px] mt-0.5">{card.sub}</div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ── DESKTOP: Orb + floating cards ── */}
        <div className="hidden lg:block relative" style={{ minHeight: 480 }}>
          {/* Floating stat cards */}
          {[
            { ...statCards[0], x: '3%',  y: '6%'  },
            { ...statCards[1], x: undefined, right: '3%', y: '6%'  },
            { ...statCards[2], x: '3%',  y: undefined, bottom: '10%' },
            { ...statCards[3], x: undefined, right: '3%', y: undefined, bottom: '10%' },
          ].map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.75 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.4 + i * 0.15, duration: 0.6, type: 'spring' }}
                whileHover={{ scale: 1.06, y: -5 }}
                className={`absolute z-20 cursor-default ${i % 2 === 0 ? 'float-card' : 'float-card-delayed'}`}
                style={{
                  top: card.y,
                  left: card.x,
                  right: card.right,
                  bottom: card.bottom,
                }}
              >
                <div
                  className="flex items-center gap-3 pl-4 pr-6 py-4 rounded-2xl border border-white/10 backdrop-blur-sm"
                  style={{
                    background: card.bg,
                    boxShadow: '0 8px 32px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.06)',
                    minWidth: 210,
                  }}
                >
                  {/* Icon */}
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${card.color}22`, border: `1px solid ${card.color}44` }}
                  >
                    <Icon style={{ color: card.color }} className="text-lg" />
                  </div>

                  {/* Text */}
                  <div className="flex-1">
                    <div
                      className="text-[9px] font-bold tracking-[0.16em] uppercase mb-0.5"
                      style={{ color: `${card.color}88` }}
                    >
                      {card.label}
                    </div>
                    <div className="text-white font-black text-lg leading-tight">{card.value}</div>
                    <div className="text-white/40 text-[10px] mt-0.5">{card.sub}</div>
                  </div>

                  {/* Arrow */}
                  <FaArrowRight style={{ color: card.color }} className="text-xs ml-1 opacity-60" />
                </div>

                {/* Connector line to center */}
                <div
                  className="absolute pointer-events-none"
                  style={{
                    width: 60,
                    height: 1,
                    background: `linear-gradient(${i < 2 ? '90deg' : '270deg'}, transparent, ${card.color}40)`,
                    top: '50%',
                    [i % 2 === 0 ? 'right' : 'left']: -60,
                  }}
                />
              </motion.div>
            );
          })}

          {/* ── Central orb ── */}
          <div className="flex items-center justify-center" style={{ minHeight: 480 }}>
            <div className="relative flex items-center justify-center">
              {/* Outer ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
                className="absolute rounded-full border border-green-800/50"
                style={{ width: 400, height: 400 }}
              />
              {/* Middle dashed ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                className="absolute rounded-full"
                style={{ width: 310, height: 310, border: '1.5px dashed rgba(74,222,128,0.22)' }}
              />
              {/* Inner ring with dot */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                className="absolute rounded-full"
                style={{
                  width: 230,
                  height: 230,
                  border: '2px solid rgba(34,197,94,0.38)',
                  boxShadow: '0 0 40px rgba(34,197,94,0.12)',
                }}
              >
                {/* Orbiting icons */}
                {orbitIcons.map((OIcon, idx) => (
                  <motion.div
                    key={idx}
                    className="absolute"
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: '50%',
                      background: 'rgba(34,197,94,0.2)',
                      border: '1px solid rgba(74,222,128,0.4)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      top: '50%',
                      left: '50%',
                      transform: `rotate(${idx * 90}deg) translateX(115px) rotate(-${idx * 90}deg)`,
                      marginTop: -14,
                      marginLeft: -14,
                    }}
                  >
                    <OIcon className="text-green-400 text-xs" />
                  </motion.div>
                ))}
              </motion.div>

              {/* Glow pulse */}
              <motion.div
                animate={{ scale: [1, 1.14, 1], opacity: [0.4, 0.85, 0.4] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute rounded-full"
                style={{
                  width: 170,
                  height: 170,
                  background: 'radial-gradient(circle, rgba(34,197,94,0.42) 0%, rgba(16,185,129,0.18) 50%, transparent 80%)',
                  filter: 'blur(14px)',
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
                    'radial-gradient(circle at 35% 35%, rgba(74,222,128,0.28) 0%, rgba(22,101,52,0.85) 60%, rgba(2,44,34,0.98) 100%)',
                  border: '2px solid rgba(74,222,128,0.45)',
                  boxShadow:
                    '0 0 60px rgba(34,197,94,0.32), 0 0 120px rgba(34,197,94,0.12), inset 0 2px 4px rgba(255,255,255,0.08)',
                }}
              >
                <span
                  className="text-5xl font-black font-display leading-none"
                  style={{
                    background: 'linear-gradient(135deg, #86efac, #22c55e, #4ade80)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    filter: 'drop-shadow(0 0 10px rgba(74,222,128,0.55))',
                  }}
                >
                  360°
                </span>
                <span className="text-green-300/55 text-[11px] font-bold tracking-[0.18em] uppercase mt-1.5">
                  Full Cover
                </span>
              </motion.div>
            </div>
          </div>
        </div>

        {/* ── Bottom features bar ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 md:mt-14 rounded-2xl border border-white/10 overflow-hidden"
          style={{ background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(12px)' }}
        >
          <div className="grid grid-cols-2 md:grid-cols-5 divide-x divide-white/10">
            {features.map((feat, i) => {
              const Icon = feat.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.08 }}
                  className="flex items-center gap-3 px-5 py-4"
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(34,197,94,0.15)', border: '1px solid rgba(74,222,128,0.25)' }}
                  >
                    <Icon className="text-green-400 text-sm" />
                  </div>
                  <p className="text-green-100/70 text-xs font-semibold leading-tight whitespace-pre-line">
                    {feat.label}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* ── CTA button ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="flex justify-center mt-10"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 20px 50px rgba(34,197,94,0.4)' }}
            whileTap={{ scale: 0.97 }}
            onClick={() => navigate('/contact')}
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full font-bold text-white text-sm"
            style={{
              background: 'linear-gradient(135deg, #16a34a 0%, #059669 100%)',
              boxShadow: '0 8px 30px rgba(22,163,74,0.35)',
            }}
          >
            Partner for a Greener Tomorrow
            <FaLeaf className="text-sm" />
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
};

export default GreenCircleStats;
