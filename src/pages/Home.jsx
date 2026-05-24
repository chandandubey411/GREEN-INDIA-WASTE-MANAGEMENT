import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Impact from '../components/Impact';
import GreenCircleStats from '../components/GreenCircleStats';
import Testimonials from '../components/Testimonials';
import { FaRecycle, FaMobileAlt, FaIndustry, FaTruck, FaLeaf, FaArrowRight, FaNewspaper, FaCheckCircle } from 'react-icons/fa';
import { blogs } from '../data/index';

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const serviceHighlights = [
  { icon: <FaRecycle />, title: 'Plastic Recycling', color: '#22c55e', desc: 'End-to-end plastic waste solutions for homes and industries.' },
  { icon: <FaMobileAlt />, title: 'E-Waste Disposal', color: '#3b82f6', desc: 'Certified, safe recycling of all electronic devices.' },
  { icon: <FaIndustry />, title: 'Industrial Waste', color: '#f59e0b', desc: 'Compliance-ready industrial waste management plans.' },
  { icon: <FaTruck />, title: 'Doorstep Pickup', color: '#8b5cf6', desc: 'Scheduled doorstep collections across 120+ cities.' },
];

const trustItems = [
  '🏆 ISO 14001 Certified',
  '🌱 Carbon Neutral Operations',
  '🤖 AI-Powered Tracking',
  '🚛 Same-Day Pickup Available',
  '♻️ 98% Landfill Diversion',
  '🇮🇳 Operating in 120+ Indian Cities',
  '⭐ 4.9 Rated by 12,000+ Clients',
  '🔒 Data Secure & Compliant',
];

const Home = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>

      {/* Section 1 — Hero */}
      <Hero />

      {/* ── Animated Trust / Marquee Bar ── */}
      <div className="w-full overflow-hidden bg-green-700 py-3 border-y border-green-600">
        <div className="flex whitespace-nowrap marquee-track">
          {[...trustItems, ...trustItems].map((item, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-2 px-8 text-sm text-white/90 font-semibold"
            >
              {item}
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-300 mx-2" />
            </span>
          ))}
        </div>
      </div>

      {/* Section 2 — Impact Stats */}
      <Impact />

      {/* Section 2b — 360° Green Circle Stats */}
      <GreenCircleStats />

      {/* Section 3 — Services Highlight */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background grid */}
        <div className="absolute inset-0 hero-grid-pattern opacity-30 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div {...fadeUp} className="text-center mb-14">
            <div className="inline-flex items-center gap-2 mb-3">
              <div className="w-8 h-0.5 bg-green-500" />
              <span className="text-green-600 text-sm font-semibold uppercase tracking-widest">What We Do</span>
              <div className="w-8 h-0.5 bg-green-500" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-2 font-display">
              Our Core <span className="text-green-600">Services</span>
            </h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-lg">
              From household pickups to large-scale industrial management — we handle every category of waste with precision and care.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {serviceHighlights.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative bg-white border border-green-100 rounded-3xl p-6 flex flex-col gap-4 cursor-default shadow-sm hover:shadow-xl hover:shadow-green-100/60 transition-all duration-400 card-shine gradient-border-card overflow-hidden"
              >
                {/* Hover gradient bg */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
                  style={{ background: `radial-gradient(ellipse at top left, ${s.color}0d, transparent 65%)` }}
                />
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl relative z-10 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: s.color + '1a', color: s.color, border: `1px solid ${s.color}30` }}
                >
                  {s.icon}
                </div>
                <h3 className="text-gray-900 font-bold text-lg relative z-10">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed relative z-10">{s.desc}</p>
                <div
                  className="flex items-center gap-1.5 text-xs font-semibold relative z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -mt-1"
                  style={{ color: s.color }}
                >
                  <FaCheckCircle />
                  Learn more
                </div>

                {/* Bottom color bar */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                  style={{ background: `linear-gradient(90deg, ${s.color}, transparent)` }}
                />
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeUp} className="text-center">
            <Link to="/services">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 15px 40px rgba(22,163,74,0.25)' }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-700 hover:to-emerald-600 text-white font-bold rounded-full transition-all duration-300 shadow-lg shadow-green-400/20"
              >
                <FaLeaf />
                View All Services
                <FaArrowRight />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Section 4 — Testimonials */}
      <Testimonials />

      {/* Section 5 — Blog Preview */}
      <section className="py-20 bg-green-50/60 relative overflow-hidden">
        <div className="absolute inset-0 hero-grid-pattern opacity-30 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div {...fadeUp} className="text-center mb-14">
            <div className="inline-flex items-center gap-2 mb-3">
              <div className="w-8 h-0.5 bg-green-500" />
              <span className="text-green-600 text-sm font-semibold uppercase tracking-widest">Latest Insights</span>
              <div className="w-8 h-0.5 bg-green-500" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-2 font-display">
              Green India <span className="text-green-600">Blog</span>
            </h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto">Stay updated with the latest news, tips, and sustainability guides from our experts.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {blogs.map((post, i) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="group bg-white border border-green-100 rounded-3xl overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl hover:shadow-green-100/50 transition-all duration-400"
              >
                <div className="overflow-hidden h-48 relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-600"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-3 left-3">
                    <span className="text-xs px-3 py-1 rounded-full bg-white/90 text-green-700 font-semibold backdrop-blur-sm shadow">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-gray-400 text-xs">{post.readTime}</span>
                    <span className="w-1 h-1 rounded-full bg-gray-300 inline-block" />
                    <span className="text-gray-400 text-xs">{post.date}</span>
                  </div>
                  <h3 className="text-gray-900 font-bold text-base leading-snug mb-2 group-hover:text-green-600 transition-colors duration-300">{post.title}</h3>
                  <p className="text-gray-500 text-sm line-clamp-2">{post.excerpt}</p>
                  <div className="mt-4 flex items-center gap-1.5 text-green-600 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Read More <FaArrowRight className="text-xs" />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

    </motion.div>
  );
};

export default Home;
