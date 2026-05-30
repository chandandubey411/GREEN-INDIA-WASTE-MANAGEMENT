// src/components/Hero.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaRecycle, FaUsers, FaCity, FaShieldAlt,
  FaLeaf, FaPlay, FaCheckCircle, FaTimes,
  FaPaperPlane, FaPhone, FaEnvelope, FaHome,
  FaBuilding, FaIndustry, FaTruck,
} from 'react-icons/fa';

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
        <div className="px-8 py-7">
          {done ? (
            <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center py-8">
              <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-5">
                <FaCheckCircle className="text-green-500 text-4xl" />
              </div>
              <h4 className="text-gray-900 text-xl font-black font-display mb-2">Pickup Booked! 🎉</h4>
              <p className="text-gray-500 text-sm mb-6">Our team will call you within 2 hours to confirm your pickup slot.</p>
              <button onClick={onClose} className="btn-hero-primary px-8 py-3 text-sm">Done</button>
            </motion.div>
          ) : (
            <form onSubmit={submit} className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                {[
                  { name: 'name', placeholder: 'Full Name', type: 'text' },
                  { name: 'phone', placeholder: 'Phone Number', type: 'tel' },
                  { name: 'email', placeholder: 'Email Address', type: 'email' },
                  { name: 'city', placeholder: 'Your City', type: 'text' },
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
                <div className="flex items-center gap-1.5 text-gray-400 text-xs"><FaPhone className="text-[10px]" /> +91 9650380888</div>
                <div className="flex items-center gap-1.5 text-gray-400 text-xs"><FaEnvelope className="text-[10px]" /> hello@greenindiawm.com</div>
              </div>
            </form>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

/* ─── Stats bar items ─────────────────────────────────────── */
const statsBar = [
  { icon: FaRecycle, value: '50K+', label: 'Tons Recycled' },
  { icon: FaUsers,   value: '12K+', label: 'Happy Clients' },
  { icon: FaCity,    value: '120+', label: 'Cities Covered' },
  { icon: FaShieldAlt, value: '100%', label: 'Responsible Disposal' },
];

/* ─── Trust categories ────────────────────────────────────── */
const trustCategories = [
  { icon: FaHome,      label: 'Households',  sub: 'Clean & Green Homes' },
  { icon: FaBuilding,  label: 'Businesses',  sub: 'Sustainable Solutions' },
  { icon: FaUsers,     label: 'Communities', sub: 'Stronger Together' },
  { icon: FaIndustry,  label: 'Industries',  sub: 'Responsible Waste Mgmt.' },
];

/* ─── Waste Bin visual component ──────────────────────────── */
const WasteBins = () => (
  <div className="relative flex items-end justify-center gap-3 px-4 pb-4">
    {/* Green — WET WASTE */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="flex flex-col items-center"
    >
      <div
        className="relative rounded-t-lg rounded-b-xl flex flex-col items-center justify-between pt-4 pb-3 px-4"
        style={{ width: 110, height: 150, background: 'linear-gradient(160deg, #1a5e32 0%, #145228 100%)' }}
      >
        {/* Lid */}
        <div className="absolute -top-4 left-0 right-0 h-5 rounded-t-2xl" style={{ background: '#1a5e32' }} />
        {/* Icon */}
        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mt-2">
          <FaLeaf className="text-white text-lg" />
        </div>
        <div className="text-center">
          <p className="text-white font-black text-xs leading-tight">WET</p>
          <p className="text-white font-black text-xs leading-tight">WASTE</p>
        </div>
        {/* Bottom recycle */}
        <FaRecycle className="text-white/50 text-sm mt-1" />
      </div>
    </motion.div>

    {/* Blue — DRY WASTE */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.45 }}
      className="flex flex-col items-center"
    >
      <div
        className="relative rounded-t-lg rounded-b-xl flex flex-col items-center justify-between pt-4 pb-3 px-4"
        style={{ width: 110, height: 160, background: 'linear-gradient(160deg, #1d4ed8 0%, #1e3a8a 100%)' }}
      >
        <div className="absolute -top-4 left-0 right-0 h-5 rounded-t-2xl" style={{ background: '#1d4ed8' }} />
        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mt-2">
          <FaRecycle className="text-white text-lg" />
        </div>
        <div className="text-center">
          <p className="text-white font-black text-xs leading-tight">DRY</p>
          <p className="text-white font-black text-xs leading-tight">WASTE</p>
        </div>
        <FaRecycle className="text-white/50 text-sm mt-1" />
      </div>
    </motion.div>

    {/* Yellow — E-WASTE */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      className="flex flex-col items-center"
    >
      <div
        className="relative rounded-t-lg rounded-b-xl flex flex-col items-center justify-between pt-4 pb-3 px-4"
        style={{ width: 110, height: 145, background: 'linear-gradient(160deg, #ca8a04 0%, #a16207 100%)' }}
      >
        <div className="absolute -top-4 left-0 right-0 h-5 rounded-t-2xl" style={{ background: '#ca8a04' }} />
        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mt-2">
          <FaTruck className="text-white text-lg" />
        </div>
        <div className="text-center">
          <p className="text-white font-black text-xs leading-tight">E-</p>
          <p className="text-white font-black text-xs leading-tight">WASTE</p>
        </div>
        <FaRecycle className="text-white/50 text-sm mt-1" />
      </div>
    </motion.div>
  </div>
);

/* ─── Main Hero ───────────────────────────────────────────── */
const Hero = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* ══ HERO SECTION ══ */}
      <section
        id="home"
        className="relative w-full overflow-hidden bg-white"
        style={{ paddingTop: '88px' }}
      >
        {/* Subtle dot grid background */}
        <div className="absolute inset-0 hero-grid-pattern opacity-40 pointer-events-none" />

        {/* Green blobs */}
        <div className="hero-orb hero-orb-1 absolute w-[500px] h-[500px] -top-32 -right-24 opacity-30 pointer-events-none" />
        <div className="hero-orb hero-orb-2 absolute w-[350px] h-[350px] bottom-0 left-0 opacity-20 pointer-events-none" />

        <div className="w-full px-6 lg:px-10 xl:px-16 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 py-10 lg:py-14">

            {/* ── LEFT CONTENT ── */}
            <div className="flex-[1.2] relative">

              {/* Floating accent bar */}
              <div className="absolute -left-5 top-8 bottom-8 w-1 rounded-full hidden lg:block"
                style={{ background: 'linear-gradient(to bottom, #16a34a, #4ade80, transparent)' }} />

              {/* Tag pill */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 bg-green-50/80 border border-green-200/80 rounded-full px-4 py-1.5 mb-5"
              >
                <FaLeaf className="text-green-600 text-xs" />
                <span className="text-green-700 text-xs font-bold tracking-wide">Smart Recycling. Better Tomorrow.</span>
              </motion.div>

              {/* Main headline */}
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1] mb-5 tracking-tight font-display"
              >
                Smart Recycling<br />
                For<br />
                <span className="text-green-600">A Cleaner India</span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-gray-500 text-base md:text-lg leading-relaxed mb-7 max-w-lg font-medium"
              >
                Serving 120+ cities with AI-powered collection, recycling &amp; responsible disposal.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 mb-8"
              >
                <motion.button
                  whileHover={{ scale: 1.04, boxShadow: '0 20px 40px rgba(22,163,74,0.3)' }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setShowModal(true)}
                  id="hero-request-pickup-btn"
                  className="flex items-center justify-center gap-2.5 font-black text-white px-8 py-4 rounded-full text-sm transition-all"
                  style={{ background: 'linear-gradient(135deg, #16a34a, #059669)', boxShadow: '0 8px 30px rgba(22,163,74,0.25)' }}
                >
                  <FaTruck className="text-sm animate-pulse" />
                  Request Free Pickup →
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.04, borderColor: '#16a34a', color: '#16a34a' }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => navigate('/services')}
                  id="hero-explore-services-btn"
                  className="flex items-center justify-center gap-2.5 font-bold text-gray-850 px-8 py-4 rounded-full text-sm border-2 border-gray-200 bg-white transition-all shadow-sm"
                >
                  <span className="w-6 h-6 rounded-full bg-green-600 flex items-center justify-center flex-shrink-0 text-white text-[8px]">
                    <FaPlay className="ml-0.5" />
                  </span>
                  Explore Services
                </motion.button>
              </motion.div>

              {/* Trust strip */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="flex items-center gap-4 flex-wrap mb-8"
              >
                {['ISO 14001 Certified', 'AI-Powered Tracking', '98% Landfill Diversion'].map((item, i) => (
                  <div key={i} className="flex items-center gap-1.5 text-xs text-gray-500 font-medium">
                    <FaCheckCircle className="text-green-500 text-[10px]" />
                    {item}
                  </div>
                ))}
              </motion.div>

              {/* ── Feature Cards Row ── */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="grid grid-cols-2 sm:grid-cols-3 gap-3"
              >
                {[
                  { icon: FaTruck,     color: '#16a34a', bg: '#f0fdf4', border: '#bbf7d0', title: 'Doorstep Pickup',    sub: 'Same-day available' },
                  { icon: FaShieldAlt, color: '#0369a1', bg: '#f0f9ff', border: '#bae6fd', title: 'Data Secure',        sub: 'GDPR & ISO compliant' },
                  { icon: FaLeaf,      color: '#059669', bg: '#ecfdf5', border: '#a7f3d0', title: 'Carbon Neutral',     sub: 'Zero-emission ops' },
                ].map((card, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.03, y: -3 }}
                    className="flex items-center gap-3 rounded-2xl px-4 py-3.5 border transition-all duration-300 cursor-default"
                    style={{ background: card.bg, borderColor: card.border, boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}
                  >
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: card.color + '20', border: `1px solid ${card.border}` }}
                    >
                      <card.icon style={{ color: card.color }} className="text-sm" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-800 text-xs leading-tight">{card.title}</p>
                      <p className="text-gray-400 text-[10px] leading-tight mt-0.5">{card.sub}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* ── RIGHT VISUAL ── */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex-[0.95] relative flex items-center justify-center w-full"
            >
              {/* Right Visual Image Container */}
              <div className="relative w-full rounded-[32px] overflow-hidden shadow-2xl border border-slate-100 bg-white">
                <img
                  src="/waste-bins.png"
                  alt="Smart Waste Bins"
                  className="w-full h-80 md:h-[400px] lg:h-[460px] object-cover hover:scale-102 transition-transform duration-700 ease-out"
                />
                
                {/* Top right badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                  className="absolute top-6 right-6 w-24 h-24 rounded-full bg-white shadow-xl flex flex-col items-center justify-center text-center p-2 border-4 border-green-50/50"
                >
                  <div className="w-7 h-7 rounded-full bg-green-50 flex items-center justify-center mb-1">
                    <FaLeaf className="text-green-600 text-xs" />
                  </div>
                  <p className="text-gray-400 text-[8px] leading-tight font-extrabold uppercase tracking-wide">Committed to a</p>
                  <p className="text-green-600 font-black text-[10px] leading-tight mt-0.5 font-display uppercase tracking-wide">Greener<br />Tomorrow</p>
                </motion.div>

                {/* Bottom left floating stat card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.5 }}
                  className="absolute bottom-5 left-5 bg-white/95 backdrop-blur-md rounded-2xl px-4 py-3 shadow-xl border border-green-100"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-green-500 flex items-center justify-center flex-shrink-0">
                      <FaRecycle className="text-white text-sm" />
                    </div>
                    <div>
                      <p className="text-gray-900 font-black text-lg leading-none">50K+</p>
                      <p className="text-gray-500 text-[10px] font-semibold mt-0.5">Tons Recycled ✅</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* ── STATS BAR — FLOATING GLASSMORPHISM ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-full mt-4 md:mt-6 bg-gradient-to-r from-green-700/90 via-green-600/95 to-emerald-600/90 backdrop-blur-md border border-white/20 rounded-3xl p-2.5 sm:p-3 md:p-5 shadow-2xl relative mb-12"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-0">
              {statsBar.map((s, i) => {
                const Icon = s.icon;
                return (
                  <div
                    key={i}
                    className={`flex items-center gap-1.5 sm:gap-3.5 py-2.5 sm:py-3.5 px-1.5 sm:px-4 md:px-6 ${i < statsBar.length - 1 ? 'md:border-r border-white/10' : ''}`}
                  >
                    <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 shadow-inner">
                      <Icon className="text-white text-sm sm:text-lg" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-white font-black text-base sm:text-2xl leading-none font-display tracking-tight">{s.value}</div>
                      <div className="text-green-100 text-[9px] sm:text-[10px] md:text-xs font-bold mt-0.5 sm:mt-1 tracking-wider uppercase leading-tight">{s.label}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

        </div>


        {/* ══ TRUSTED BY SECTION ══ */}
        <div className="w-full bg-white border-t border-gray-100">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-6 py-6">
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">

              {/* Label */}
              <div className="flex items-center gap-2 flex-shrink-0">
                <FaLeaf className="text-green-500 text-xs" />
                <span className="text-gray-600 font-semibold text-sm">Trusted by Homes, Businesses &amp; Communities</span>
                <FaLeaf className="text-green-500 text-xs" />
              </div>

              {/* Divider */}
              <div className="hidden md:block w-px h-6 bg-gray-200" />

              {/* Categories */}
              <div className="flex flex-wrap items-center justify-center gap-5">
                {trustCategories.map((cat, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-green-50 border border-green-100 flex items-center justify-center">
                      <cat.icon className="text-green-600 text-xs" />
                    </div>
                    <div>
                      <p className="text-gray-800 font-bold text-xs leading-tight">{cat.label}</p>
                      <p className="text-gray-400 text-[10px] leading-tight">{cat.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pickup Modal ── */}
      <AnimatePresence>
        {showModal && <PickupModal onClose={() => setShowModal(false)} />}
      </AnimatePresence>
    </>
  );
};

export default Hero;
