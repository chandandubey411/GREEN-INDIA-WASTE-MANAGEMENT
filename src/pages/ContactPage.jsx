import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaWhatsapp, FaCheckCircle, FaSpinner, FaTruck, FaUser, FaCity, FaTrash } from 'react-icons/fa';
import { cities, wasteTypes } from '../data/index';

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const offices = [
  { city: 'Head Office — Gurgaon', address: 'Springboard Business Hub, Sector-18, Gurgaon — 122001, Haryana', phone: '+91 9650380888', email: 'info@greenindiawm.com' },
  { city: 'Recycling Plant — Sonipat', address: 'Plot No. 169, Sector-53, Ph-II, HSIIDC Kundli, Sonipat, Haryana — 131028', phone: '+91 9650380888', email: 'info@greenindiawm.com' },
];

const faqs = [
  { q: 'How do I schedule a collection?', a: 'Fill out the form on this page or call our toll-free number 1800-123-4567. We will confirm your slot within 2 hours.' },
  { q: 'What waste do you not accept?', a: 'We do not accept radioactive waste, biological/medical waste, or explosives. All other waste types are handled with proper protocols.' },
  { q: 'How soon can you come?', a: 'We offer same-day collection in Delhi, Mumbai, and Bangalore for requests placed before 12 PM. Next-day collection is available in all 120+ cities.' },
  { q: 'Do I get paid for recyclable scrap?', a: 'Yes! Metal, paper, and high-grade plastic scrap fetches instant cash payment. Check our Scrap Price List for current rates.' },
  { q: 'Will I get a certificate for my waste?', a: 'Absolutely. All commercial, business, and industrial clients receive a Waste Disposal Certificate within 24 hours via email.' },
];

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', city: '', wasteType: '', message: '', date: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [openFaq, setOpenFaq] = useState(null);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const payload = {
        access_key: '488d25a3-3ff3-4651-9be5-d68067b762bf',
        subject: `New Collection Booking from ${formData.name} — ${formData.city}`,
        from_name: formData.name || 'Green India Website',
        // replyto: set to the submitter's address so Gmail threads it as a
        // person-to-person message and delivers to Primary (not Updates).
        replyto: formData.email || '',
        name: formData.name,
        phone: formData.phone,
        email: formData.email || 'Not provided',
        city: formData.city,
        waste_type: formData.wasteType,
        preferred_date: formData.date,
        message: formData.message || 'No additional details.',
        botcheck: false,
      };

      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (data.success) {
        setSubmitted(true);
      } else {
        setError(data.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Network error. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }}>

      {/* Section 1 — Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-green-50 via-emerald-50/40 to-white overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 right-20 w-96 h-96 bg-primary-300 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-emerald-200 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div {...fadeUp}>
            <span className="text-primary-700 text-sm font-semibold uppercase tracking-widest">Get In Touch</span>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mt-3 font-display leading-tight">
              Contact <span className="text-primary-600">Green India</span>
            </h1>
            <p className="text-gray-600 text-lg mt-6 max-w-2xl mx-auto">
              Please entrust us with your business opportunity. Together, we can work towards a more sustainable and environmentally-friendly future.
            </p>
          </motion.div>

          {/* Quick Contact Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-14"
          >
            {[
              { icon: <FaPhone />, label: 'Call Us', value: '+91 9650380888', color: '#16a34a', href: 'tel:+919650380888' },
              { icon: <FaWhatsapp />, label: 'WhatsApp', value: '+91 9650380888', color: '#25D366', href: 'https://wa.me/919650380888' },
              { icon: <FaEnvelope />, label: 'Email', value: 'info@greenindiawm.com', color: '#2563eb', href: 'mailto:info@greenindiawm.com' },
              { icon: <FaClock />, label: 'Hours', value: '24/7 Support', color: '#d97706', href: '#' },
            ].map((item, i) => (
              <motion.a
                key={i}
                href={item.href}
                whileHover={{ scale: 1.04 }}
                className="bg-white/80 border border-primary-200 shadow-green-sm rounded-2xl p-5 backdrop-blur text-center block"
              >
                <div className="text-2xl flex justify-center mb-2" style={{ color: item.color }}>{item.icon}</div>
                <div className="text-gray-500 text-xs mb-1">{item.label}</div>
                <div className="text-gray-800 font-semibold text-sm">{item.value}</div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section 2 — Booking Form */}
      <section className="py-20 bg-green-50/40 border-t border-b border-green-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            
            {/* Form */}
            <div className="lg:col-span-3">
              <motion.div {...fadeUp}>
                <span className="text-primary-600 text-sm font-semibold uppercase tracking-widest">Book a Collection</span>
                <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-8 font-display">Schedule Your <span className="text-primary-600">Waste Collection</span></h2>
              </motion.div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white border border-primary-200 shadow-green-md rounded-2xl p-12 text-center"
                >
                  <FaCheckCircle className="text-primary-600 text-6xl mx-auto mb-4" />
                  <h3 className="text-gray-900 font-bold text-2xl mb-2">Booking Confirmed!</h3>
                  <p className="text-gray-600">Thank you, {formData.name}! Our team will contact you within 2 hours to confirm your collection details.</p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    onClick={() => { setSubmitted(false); setFormData({ name: '', phone: '', email: '', city: '', wasteType: '', message: '', date: '' }); }}
                    className="mt-6 px-8 py-3 bg-primary-500 text-white rounded-full font-semibold shadow-green-sm"
                  >
                    Book Another Collection
                  </motion.button>
                </motion.div>
              ) : (
                <motion.form
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  {/* Web3Forms requires the access_key to be present in the payload.
                      We send it via the JS payload, but keeping it here as a hidden
                      field serves as a visible reminder / fallback. */}
                  <input type="hidden" name="access_key" value={import.meta.env.VITE_WEB3FORMS_KEY || ''} />

                  {/* Error banner */}
                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-start gap-3 bg-red-50 border border-red-200 text-red-700 text-sm rounded-xl px-4 py-3"
                    >
                      <span className="font-bold mt-0.5">⚠</span>
                      <span>{error}</span>
                    </motion.div>
                  )}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="relative">
                      <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type="text" name="name" placeholder="Your Full Name" required value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-white border border-gray-300 rounded-xl pl-10 pr-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition"
                      />
                    </div>
                    <div className="relative">
                      <FaPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type="tel" name="phone" placeholder="Phone Number" required value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-white border border-gray-300 rounded-xl pl-10 pr-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition"
                      />
                    </div>
                  </div>
                  <div className="relative">
                    <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="email" name="email" placeholder="Email Address" value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-white border border-gray-300 rounded-xl pl-10 pr-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="relative">
                      <FaCity className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                      <select
                        name="city" required value={formData.city} onChange={handleChange}
                        className="w-full bg-white border border-gray-300 rounded-xl pl-10 pr-4 py-3 text-gray-800 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition appearance-none"
                      >
                        <option value="">Select City</option>
                        {cities.map(c => <option key={c} value={c}>{c}</option>)}
                      </select>
                    </div>
                    <div className="relative">
                      <FaTrash className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                      <select
                        name="wasteType" required value={formData.wasteType} onChange={handleChange}
                        className="w-full bg-white border border-gray-300 rounded-xl pl-10 pr-4 py-3 text-gray-800 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition appearance-none"
                      >
                        <option value="">Waste Type</option>
                        {wasteTypes.map(w => <option key={w} value={w}>{w}</option>)}
                      </select>
                    </div>
                  </div>
                  <div className="relative">
                    <FaClock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="date" name="date" required value={formData.date} onChange={handleChange}
                      className="w-full bg-white border border-gray-300 rounded-xl pl-10 pr-4 py-3 text-gray-800 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition"
                    />
                  </div>
                  <textarea
                    name="message" placeholder="Additional details or instructions..." rows={4} value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition resize-none"
                  />
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 bg-primary-500 hover:bg-primary-600 text-white font-bold rounded-xl transition-colors flex items-center justify-center gap-2 text-lg shadow-green-sm"
                  >
                    {loading ? <><FaSpinner className="animate-spin" /> Processing...</> : <><FaTruck /> Confirm Collection Booking</>}
                  </motion.button>
                </motion.form>
              )}
            </div>

            {/* Sidebar info */}
            <div className="lg:col-span-2 space-y-6">
              <motion.div {...fadeUp} className="bg-white border border-primary-200 shadow-green-sm rounded-2xl p-6">
                <h3 className="text-gray-900 font-bold text-lg mb-4 flex items-center gap-2"><FaTruck className="text-primary-600" /> Why Book With Us?</h3>
                <ul className="space-y-3">
                  {['Free first collection for new users', 'Same-day service in 3 metros', 'Digital waste certificate included', 'Cash payment for scrap items', '24/7 customer support'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-750 text-sm">
                      <FaCheckCircle className="text-primary-600 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-br from-primary-600 to-emerald-600 rounded-2xl p-6 text-white shadow-green-md"
              >
                <FaWhatsapp className="text-4xl mb-3" />
                <h3 className="font-bold text-xl mb-2">Chat on WhatsApp</h3>
                <p className="text-primary-100 text-sm mb-4">Get instant response from our team. Available 24/7 for quick queries and urgent collections.</p>
                <a href="https://wa.me/919650380888" target="_blank" rel="noopener noreferrer">
                  <motion.button whileHover={{ scale: 1.04 }} className="w-full bg-white text-primary-600 font-bold py-2.5 rounded-xl shadow-green-sm">
                    Open WhatsApp Chat
                  </motion.button>
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 — Office Locations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-14">
            <span className="text-primary-600 text-sm font-semibold uppercase tracking-widest">Find Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 font-display">Our <span className="text-primary-600">Offices</span></h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {offices.map((office, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-green-50/30 border border-primary-200/80 shadow-green-sm rounded-2xl p-6 hover:shadow-green-md hover:bg-white hover:border-primary-400 transition-all"
              >
                <h3 className="text-gray-800 font-bold text-lg mb-4 flex items-center gap-2">
                  <FaMapMarkerAlt className="text-primary-600" /> {office.city}
                </h3>
                <p className="text-gray-600 text-sm mb-3">{office.address}</p>
                <a href={`tel:${office.phone}`} className="flex items-center gap-2 text-primary-600 text-sm hover:text-primary-700 mb-1 font-semibold">
                  <FaPhone /> {office.phone}
                </a>
                <a href={`mailto:${office.email}`} className="flex items-center gap-2 text-gray-600 text-sm hover:text-primary-600 font-medium">
                  <FaEnvelope /> {office.email}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 — FAQ */}
      <section className="py-20 bg-green-50/40 border-t border-green-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-14">
            <span className="text-primary-600 text-sm font-semibold uppercase tracking-widest">FAQs</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 font-display">Frequently Asked <span className="text-primary-600">Questions</span></h2>
          </motion.div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-primary-200/80 rounded-xl overflow-hidden shadow-green-sm hover:shadow-green-md hover:border-primary-400 transition-all"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between text-gray-800 font-semibold hover:text-primary-700 transition-colors"
                >
                  {faq.q}
                  <span className={`text-primary-600 text-xl transition-transform duration-300 ${openFaq === i ? 'rotate-45' : ''}`}>+</span>
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: openFaq === i ? 'auto' : 0, opacity: openFaq === i ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-5 text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </motion.div>
  );
};

export default ContactPage;
