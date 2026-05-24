// src/components/Contact.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock,
  FaWhatsapp, FaCheckCircle, FaPaperPlane,
} from 'react-icons/fa';

const contactInfo = [
  {
    icon: FaMapMarkerAlt,
    title: 'Head Office',
    value: '42, Green Towers, Connaught Place, New Delhi – 110001',
    color: '#22c55e',
  },
  {
    icon: FaPhone,
    title: 'Call Us',
    value: '+91 98765 43210',
    color: '#3b82f6',
  },
  {
    icon: FaEnvelope,
    title: 'Email Us',
    value: 'hello@greenindiawm.com',
    color: '#8b5cf6',
  },
  {
    icon: FaClock,
    title: 'Working Hours',
    value: 'Mon–Sat: 8 AM – 8 PM | Sun: 9 AM – 5 PM',
    color: '#f59e0b',
  },
];

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setForm({ name: '', email: '', phone: '', service: '', message: '' });
    }, 1800);
  };

  return (
    <section id="contact" className="section-padding bg-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <div className="w-8 h-0.5 bg-primary-500" />
            <span className="text-primary-400 text-sm font-semibold tracking-wider uppercase">Get In Touch</span>
            <div className="w-8 h-0.5 bg-primary-500" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black font-display text-white mb-4"
          >
            Book a <span className="text-gradient">Free Pickup</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 text-lg max-w-xl mx-auto"
          >
            Schedule a pickup, ask a question, or get a free quote — we'll respond within 2 hours.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left - Info */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            {contactInfo.map((info, i) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ x: 5 }}
                className="flex items-start gap-4 p-5 rounded-2xl bg-slate-800/60 border border-white/10 hover:border-primary-500/30 transition-all duration-300"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${info.color}20`, border: `1px solid ${info.color}30` }}
                >
                  <info.icon style={{ color: info.color }} className="text-lg" />
                </div>
                <div>
                  <div className="text-white/50 text-xs font-semibold uppercase tracking-wider mb-1">{info.title}</div>
                  <div className="text-white font-medium text-sm leading-relaxed">{info.value}</div>
                </div>
              </motion.div>
            ))}

            {/* WhatsApp */}
            <motion.a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.03 }}
              className="flex items-center gap-3 p-4 rounded-2xl bg-green-500/10 border border-green-500/30 hover:bg-green-500/20 transition-all cursor-pointer"
            >
              <FaWhatsapp className="text-green-400 text-2xl" />
              <div>
                <div className="text-white font-semibold">Chat on WhatsApp</div>
                <div className="text-white/50 text-xs">Instant response available</div>
              </div>
            </motion.a>

            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="relative rounded-2xl overflow-hidden h-48 border border-white/10"
            >
              <img
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=600&h=300&fit=crop"
                alt="Map"
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-slate-900/50">
                <div className="text-center">
                  <FaMapMarkerAlt className="text-primary-400 text-3xl mx-auto mb-2 animate-bounce" />
                  <div className="text-white font-semibold text-sm">New Delhi, India</div>
                  <div className="text-white/50 text-xs">120+ service locations</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3"
          >
            <div className="bg-slate-800/60 border border-white/10 rounded-2xl p-8">
              {submitted ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center py-16"
                >
                  <div className="w-20 h-20 rounded-full bg-primary-500/20 flex items-center justify-center mx-auto mb-6">
                    <FaCheckCircle className="text-primary-400 text-4xl" />
                  </div>
                  <h3 className="text-white text-2xl font-bold font-display mb-3">Request Submitted!</h3>
                  <p className="text-white/60 mb-6">
                    Our team will contact you within 2 hours to confirm your pickup.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-primary"
                  >
                    Submit Another Request
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-white text-xl font-bold font-display mb-6">Schedule Pickup / Get Quote</h3>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      { name: 'name', placeholder: 'Your Full Name', type: 'text' },
                      { name: 'email', placeholder: 'Email Address', type: 'email' },
                      { name: 'phone', placeholder: 'Phone Number', type: 'tel' },
                    ].map(({ name, placeholder, type }) => (
                      <input
                        key={name}
                        type={type}
                        name={name}
                        value={form[name]}
                        onChange={handleChange}
                        placeholder={placeholder}
                        required={name !== 'phone'}
                        className="bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-primary-500 transition-colors placeholder-white/30 w-full"
                      />
                    ))}

                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white/80 text-sm focus:outline-none focus:border-primary-500 transition-colors appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-slate-800">Select Service</option>
                      {['Plastic Waste Pickup', 'E-Waste Recycling', 'Industrial Waste', 'Scrap Collection', 'Organic Waste', 'Custom Solution'].map(s => (
                        <option key={s} value={s} className="bg-slate-800">{s}</option>
                      ))}
                    </select>
                  </div>

                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your waste management needs, quantity, frequency..."
                    rows={5}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-primary-500 transition-colors placeholder-white/30 resize-none"
                  />

                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={{ scale: 1.02, boxShadow: '0 15px 35px rgba(34,197,94,0.3)' }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full btn-primary py-4 flex items-center justify-center gap-2 disabled:opacity-70"
                  >
                    {loading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane className="text-sm" />
                        Submit Request
                      </>
                    )}
                  </motion.button>

                  <p className="text-white/40 text-xs text-center">
                    By submitting, you agree to our privacy policy. We'll never spam you.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
