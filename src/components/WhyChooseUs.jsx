// src/components/WhyChooseUs.jsx
import { motion } from 'framer-motion';
import { FaLeaf, FaBrain, FaBolt, FaShieldAlt, FaCertificate, FaHeadset } from 'react-icons/fa';
import { whyChooseUs } from '../data';

const iconMap = { FaLeaf, FaBrain, FaBolt, FaShieldAlt, FaCertificate, FaHeadset };

const FeatureCard = ({ item, index }) => {
  const Icon = iconMap[item.icon];
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="group relative p-6 bg-slate-900/60 border border-white/10 rounded-2xl transition-all duration-500 overflow-hidden cursor-default neon-hover"
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `radial-gradient(ellipse at top left, ${item.color}12, transparent 60%)` }}
      />

      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 relative"
        style={{ backgroundColor: `${item.color}20`, border: `1px solid ${item.color}30` }}
      >
        {Icon && <Icon style={{ color: item.color }} className="text-2xl" />}
      </div>

      <h3 className="text-white font-bold text-xl font-display mb-3">{item.title}</h3>
      <p className="text-white/60 text-sm leading-relaxed">{item.description}</p>

      {/* Bottom accent */}
      <div
        className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `linear-gradient(90deg, transparent, ${item.color}, transparent)` }}
      />
    </motion.div>
  );
};

const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 items-end mb-16">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-4"
            >
              <div className="w-8 h-0.5 bg-primary-500" />
              <span className="text-primary-400 text-sm font-semibold tracking-wider uppercase">Why Choose Us</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-black font-display text-white leading-tight"
            >
              Why Green India Is The{' '}
              <span className="text-gradient">Smart Choice</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 text-lg leading-relaxed"
          >
            We combine world-class technology with deep environmental commitment to deliver
            waste management services that are faster, greener, and more transparent than ever before.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChooseUs.map((item, i) => (
            <FeatureCard key={item.title} item={item} index={i} />
          ))}
        </div>

        {/* Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 relative overflow-hidden rounded-3xl p-8 md:p-12"
          style={{
            background: 'linear-gradient(135deg, #064e3b 0%, #14532d 50%, #15803d 100%)',
          }}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full border border-white/30"
                style={{
                  width: `${100 + i * 80}px`,
                  height: `${100 + i * 80}px`,
                  right: `-${i * 30}px`,
                  top: `50%`,
                  transform: 'translateY(-50%)',
                }}
              />
            ))}
          </div>

          <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-3xl font-black font-display text-white mb-3">
                Ready to Make India Cleaner?
              </h3>
              <p className="text-white/70 text-lg">
                Join 12,000+ clients already building a sustainable future.
              </p>
            </div>
            <div className="flex gap-4 flex-shrink-0">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-primary-700 font-bold px-8 py-4 rounded-full hover:bg-primary-50 transition-all"
              >
                Get Started Free
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.querySelector('#ai-assistant')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-white/50 text-white font-bold px-8 py-4 rounded-full hover:border-white transition-all"
              >
                Try AI Assistant
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
