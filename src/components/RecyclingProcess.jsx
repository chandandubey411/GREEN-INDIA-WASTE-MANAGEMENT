// src/components/RecyclingProcess.jsx
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  FaTruck, FaSortAmountDown, FaRecycle, FaSync, FaGlobe,
  FaArrowRight, FaArrowDown, FaCheckCircle, FaLeaf
} from 'react-icons/fa';
import { recyclingSteps } from '../data';

const iconMap = { FaTruck, FaSortAmountDown, FaRecycle, FaSync, FaGlobe };

// Arrow between grid cells
const ArrowRight = ({ color, delay }) => (
  <motion.div
    initial={{ opacity: 0, x: -10 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.4 }}
    className="hidden md:flex items-center justify-center"
  >
    <motion.div
      animate={{ x: [0, 5, 0] }}
      transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
    >
      <FaArrowRight className="text-xl" style={{ color }} />
    </motion.div>
  </motion.div>
);

const ArrowDown = ({ color, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: -10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.4 }}
    className="flex md:hidden items-center justify-center py-2"
  >
    <motion.div
      animate={{ y: [0, 5, 0] }}
      transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
    >
      <FaArrowDown className="text-xl" style={{ color }} />
    </motion.div>
  </motion.div>
);

const StepCard = ({ step, index, isActive, onClick }) => {
  const Icon = iconMap[step.icon];
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, scale: 0.92 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.55, delay: index * 0.12, type: 'spring', bounce: 0.3 }}
      whileHover={{ y: -8, scale: 1.03 }}
      onClick={onClick}
      className="relative group cursor-pointer rounded-2xl p-6 border transition-all duration-400"
      style={{
        background: isActive
          ? `linear-gradient(135deg, ${step.color}18, ${step.color}08)`
          : 'rgba(255,255,255,0.96)',
        border: isActive
          ? `2px solid ${step.color}60`
          : '2px solid #e5f5ec',
        boxShadow: isActive
          ? `0 12px 40px ${step.color}22, 0 2px 12px rgba(0,0,0,0.06)`
          : '0 2px 16px rgba(0,0,0,0.05)',
      }}
    >
      {/* Glow bloom on hover */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: `radial-gradient(ellipse at 30% 30%, ${step.color}12, transparent 65%)` }}
      />

      {/* Top row: icon + number */}
      <div className="flex items-start justify-between mb-5">
        {/* Icon */}
        <motion.div
          whileHover={{ rotate: [0, -10, 10, 0] }}
          transition={{ duration: 0.5 }}
          className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-md"
          style={{
            background: `linear-gradient(135deg, ${step.color}22, ${step.color}0d)`,
            border: `1.5px solid ${step.color}40`,
          }}
        >
          {Icon && (
            <Icon
              className="text-2xl"
              style={{ color: step.color, filter: `drop-shadow(0 0 6px ${step.color}80)` }}
            />
          )}
        </motion.div>

        {/* Step number */}
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: index * 0.12 + 0.3, type: 'spring' }}
          className="text-5xl font-black font-display leading-none select-none"
          style={{ color: `${step.color}30` }}
        >
          {step.step}
        </motion.span>
      </div>

      {/* Title */}
      <h3
        className="text-gray-800 font-bold text-lg font-display mb-2 group-hover:translate-x-0.5 transition-transform duration-300"
        style={{ color: isActive ? step.color : undefined }}
      >
        {step.title}
      </h3>

      {/* Description */}
      <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>

      {/* Active indicator */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="absolute top-3 right-3 w-5 h-5 rounded-full flex items-center justify-center"
            style={{ background: step.color }}
          >
            <FaCheckCircle className="text-white text-[10px]" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom color bar */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ delay: index * 0.12 + 0.5, duration: 0.6, ease: 'easeOut' }}
        className="absolute bottom-0 left-4 right-4 h-0.5 rounded-full origin-left"
        style={{ background: `linear-gradient(90deg, ${step.color}, transparent)` }}
      />
    </motion.div>
  );
};

const RecyclingProcess = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [activeStep, setActiveStep] = useState(null);

  // Build the grid: Row 1 (steps 0-3), Row 2 (steps 4, row-reversed)
  // For 5 steps → Row 1: [0,1,2,3,4] in a single scrollable row — or 3+2 grid
  // We'll do: top row steps 0-2 with arrows, then down arrow, then bottom row steps 3-4 (reversed like screenshot)
  const topRow = recyclingSteps.slice(0, 3);
  const bottomRow = [...recyclingSteps.slice(3)].reverse();

  return (
    <section
      id="recycling"
      className="py-24 relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #f0fdf4 0%, #dcfce7 40%, #f0fdf4 100%)',
      }}
    >
      {/* ── Dot grid bg ── */}
      <div className="absolute inset-0 hero-grid-pattern opacity-50 pointer-events-none" />

      {/* ── Floating orbs ── */}
      <div
        className="absolute -top-24 -left-24 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(134,239,172,0.35) 0%, transparent 70%)',
          filter: 'blur(40px)',
          animation: 'orbFloat1 10s ease-in-out infinite',
        }}
      />
      <div
        className="absolute -bottom-16 -right-16 w-72 h-72 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(52,211,153,0.25) 0%, transparent 70%)',
          filter: 'blur(40px)',
          animation: 'orbFloat2 13s ease-in-out infinite',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">

        {/* ── Header ── */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <div className="w-10 h-0.5 bg-green-500" />
            <span className="text-green-600 text-sm font-bold tracking-[0.2em] uppercase">
              Our Process
            </span>
            <div className="w-10 h-0.5 bg-green-500" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black font-display text-gray-900 mb-4"
          >
            The <span className="hero-gradient-text">Recycling</span> Journey
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            A transparent 5-step journey ensuring maximum recovery and zero harm to the environment.
          </motion.p>
        </div>

        {/* ── Animated progress bar ── */}
        <div ref={ref} className="relative mb-10 flex justify-center">
          <div className="relative w-full max-w-3xl h-1.5 bg-green-100 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: '0%' }}
              animate={inView ? { width: '100%' } : { width: '0%' }}
              transition={{ duration: 2, ease: 'easeOut', delay: 0.3 }}
              className="absolute top-0 left-0 h-full rounded-full"
              style={{
                background:
                  'linear-gradient(90deg, #22c55e, #3b82f6, #8b5cf6, #f59e0b, #14b8a6)',
              }}
            />
            {/* Moving glow dot */}
            <motion.div
              initial={{ left: '0%' }}
              animate={inView ? { left: '100%' } : { left: '0%' }}
              transition={{ duration: 2, ease: 'easeOut', delay: 0.3 }}
              className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-2 border-green-500 shadow-lg"
              style={{ boxShadow: '0 0 10px rgba(34,197,94,0.8)' }}
            />
          </div>
        </div>

        {/* ── Step Number Labels ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 2.1, duration: 0.4 }}
          className="flex justify-center gap-6 mb-10 flex-wrap"
        >
          {recyclingSteps.map((step, i) => (
            <button
              key={i}
              onClick={() => setActiveStep(activeStep === i ? null : i)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold border transition-all duration-300"
              style={{
                background: activeStep === i ? `${step.color}15` : 'white',
                borderColor: activeStep === i ? step.color : '#e5f5ec',
                color: activeStep === i ? step.color : '#9ca3af',
              }}
            >
              <span
                className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black text-white"
                style={{ background: step.color }}
              >
                {i + 1}
              </span>
              {step.title}
            </button>
          ))}
        </motion.div>

        {/* ── Row 1: Steps 1–3 ── */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center mb-4">
          {topRow.map((step, i) => (
            <>
              <StepCard
                key={step.step}
                step={step}
                index={i}
                isActive={activeStep === i}
                onClick={() => setActiveStep(activeStep === i ? null : i)}
              />
              {i < topRow.length - 1 && (
                <ArrowRight
                  key={`arrow-top-${i}`}
                  color={topRow[i + 1].color}
                  delay={i * 0.12 + 0.6}
                />
              )}
            </>
          ))}
        </div>

        {/* ── Down Arrow (between rows) ── */}
        <div className="hidden md:flex justify-end pr-[10%] mb-4">
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <FaArrowDown className="text-2xl text-green-500" />
            </motion.div>
          </motion.div>
        </div>

        {/* ── Row 2: Steps 4–5 (reversed direction) ── */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center mb-4">
          {/* Empty cells to push to right side */}
          <div className="hidden md:block" />
          <div className="hidden md:block" />

          {/* Left arrow for row 2 */}
          <ArrowRight color={bottomRow[1]?.color || '#22c55e'} delay={0.9} />

          {/* Step 5 (reversed) */}
          {bottomRow[1] && (
            <StepCard
              step={bottomRow[1]}
              index={recyclingSteps.indexOf(bottomRow[1])}
              isActive={activeStep === recyclingSteps.indexOf(bottomRow[1])}
              onClick={() => {
                const idx = recyclingSteps.indexOf(bottomRow[1]);
                setActiveStep(activeStep === idx ? null : idx);
              }}
            />
          )}

          {/* Step 4 */}
          {bottomRow[0] && (
            <StepCard
              step={bottomRow[0]}
              index={recyclingSteps.indexOf(bottomRow[0])}
              isActive={activeStep === recyclingSteps.indexOf(bottomRow[0])}
              onClick={() => {
                const idx = recyclingSteps.indexOf(bottomRow[0]);
                setActiveStep(activeStep === idx ? null : idx);
              }}
            />
          )}
        </div>

        {/* ── Active Step Detail Panel ── */}
        <AnimatePresence mode="wait">
          {activeStep !== null && (
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.97 }}
              transition={{ duration: 0.35 }}
              className="mt-8 p-6 rounded-2xl border flex items-start gap-5"
              style={{
                background: `linear-gradient(135deg, ${recyclingSteps[activeStep].color}12, white)`,
                borderColor: `${recyclingSteps[activeStep].color}40`,
                boxShadow: `0 8px 30px ${recyclingSteps[activeStep].color}18`,
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{
                  background: `${recyclingSteps[activeStep].color}20`,
                  border: `1.5px solid ${recyclingSteps[activeStep].color}40`,
                }}
              >
                {(() => {
                  const Icon = iconMap[recyclingSteps[activeStep].icon];
                  return Icon ? (
                    <Icon
                      className="text-xl"
                      style={{ color: recyclingSteps[activeStep].color }}
                    />
                  ) : null;
                })()}
              </div>
              <div>
                <div
                  className="text-xs font-bold uppercase tracking-widest mb-1"
                  style={{ color: recyclingSteps[activeStep].color }}
                >
                  Step {recyclingSteps[activeStep].step}
                </div>
                <h4 className="text-gray-800 font-bold text-lg font-display mb-1">
                  {recyclingSteps[activeStep].title}
                </h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {recyclingSteps[activeStep].description}
                </p>
              </div>
              <button
                onClick={() => setActiveStep(null)}
                className="ml-auto text-gray-300 hover:text-gray-500 text-lg font-bold transition-colors"
              >
                ×
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Bottom Badge Row ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-14 flex flex-wrap justify-center gap-3"
        >
          {[
            { label: 'Environment Protection', color: '#22c55e' },
            { label: 'Resource Conservation', color: '#3b82f6' },
            { label: 'Sustainable Future', color: '#8b5cf6' },
            { label: 'Building a Cleaner & Greener India', color: '#14b8a6' },
          ].map((badge, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + i * 0.08 }}
              whileHover={{ y: -3, scale: 1.04 }}
              className="inline-flex items-start gap-2.5 px-4 py-2.5 md:px-5 md:py-2.5 rounded-xl md:rounded-full border bg-white shadow-sm text-sm font-semibold cursor-default transition-all duration-300 max-w-full"
              style={{
                borderColor: `${badge.color}40`,
                color: badge.color,
              }}
            >
              <FaCheckCircle className="mt-1 md:mt-0.5 flex-shrink-0 text-sm" style={{ color: badge.color }} />
              <span className="leading-snug">{badge.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default RecyclingProcess;
