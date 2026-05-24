// src/pages/ServicesPage.jsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FaRecycle, FaMobileAlt, FaIndustry, FaTruck, FaBoxes, FaLeaf,
  FaCheckCircle, FaArrowRight, FaPhone, FaShieldAlt, FaDesktop,
  FaLock, FaFileAlt, FaRedo, FaCertificate, FaImages
} from 'react-icons/fa';
import { services, galleryImages } from '../data/index';

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const iconMap = {
  FaRecycle: <FaRecycle />, FaMobileAlt: <FaMobileAlt />, FaIndustry: <FaIndustry />,
  FaTruck: <FaTruck />, FaBoxes: <FaBoxes />, FaLeaf: <FaLeaf />,
};

// From image: Our Services
const coreServices = [
  {
    icon: <FaDesktop />, color: '#2563eb', title: 'IT Assets Disposal',
    desc: 'Secure and environmentally responsible management of outdated IT equipment through dismantling, recycling, resale, and safe disposal while ensuring complete compliance.',
    tag: 'Compliance Assured',
  },
  {
    icon: <FaRecycle />, color: '#16a34a', title: 'E-Waste Recycling',
    desc: 'Proper collection, dismantling, and recycling of electronic waste to recover valuable copper, gold and reduce environmental pollution caused by hazardous substances.',
    tag: 'Certified Operations',
  },
  {
    icon: <FaLock />, color: '#7c3aed', title: 'Data Destruction',
    desc: 'Certified data destruction services ensuring complete removal of sensitive and confidential information from storage drives to prevent unauthorized access.',
    tag: 'Certified & Secure',
  },
  {
    icon: <FaFileAlt />, color: '#d97706', title: 'EPR Services',
    desc: 'Extended Producer Responsibility solutions helping companies comply with CPCB regulations through certified e-waste collection, documentation, and filing.',
    tag: 'CPCB Compliant',
  },
];

// From image: Why EPR Important
const eprCycleSteps = [
  { label: 'EPR Credit', color: '#16a34a' },
  { label: 'Manufacturer (PIBO)', color: '#d97706' },
  { label: 'Market (Consumer)', color: '#2563eb' },
  { label: 'End of Life / Upgrade', color: '#64748b' },
  { label: 'Collection', color: '#ea580c' },
  { label: 'Recycle / Repurpose', color: '#16a34a' },
];

// Existing process steps
const processSteps = [
  { step: '01', title: 'Book Online', desc: 'Schedule a pickup in under 2 minutes via our form or simple call.', color: '#16a34a' },
  { step: '02', title: 'We Arrive', desc: 'Our trained, professional team arrives at your doorstep at the scheduled time.', color: '#2563eb' },
  { step: '03', title: 'Collect & Sort', desc: 'Waste is safely collected and sorted by category on the spot.', color: '#7c3aed' },
  { step: '04', title: 'Certify & Recycle', desc: 'Receive a digital destruction certificate and your waste is processed.', color: '#d97706' },
];

const plans = [
  {
    name: 'Household Scrap', price: 'Free', per: ' / pickup', color: '#16a34a',
    features: ['Instant cash for scrap', 'Plastic, Paper & Metal', 'Doorstep pickup', 'Eco-friendly disposal report'],
  },
  {
    name: 'Corporate Compliance', price: 'Custom', per: ' pricing', color: '#2563eb', popular: true,
    features: ['Scheduled pickups', 'E-waste, ITAD & Shredding', 'Safe Data destruction', 'Certified disposal certificate', 'Audited compliance reports'],
  },
  {
    name: 'Industrial / EPR', price: 'Custom', per: ' quote', color: '#7c3aed',
    features: ['Unlimited collections', 'Hazardous & metal scraps', 'EPR credit generation & filing', 'Monthly CPCB portal updates', 'Dedicated on-site logistics'],
  },
];

const certifications = [
  'ISO 9001:2015 Quality Management System',
  'ISO 14001:2015 Environmental System',
  'Ministry of Environment CPCB Registered',
  'E-Waste (Management) Rules Compliant',
  'Hazardous Waste Handling Authorization',
  'MSME Registered Green Enterprise',
  'EPR Authorized Service Partner',
  'Data Destruction Certified',
  'GST & TDS/TCS Compliant Operator',
];

const ServicesPage = () => {
  const operationsImages = galleryImages.slice(8, 16);

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }} className="bg-white">

      {/* Section 1 — Page Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-green-50 via-emerald-50/50 to-white overflow-hidden border-b border-green-100">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 right-20 w-96 h-96 bg-green-200 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-emerald-200 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div {...fadeUp}>
            <span className="text-green-600 text-sm font-semibold uppercase tracking-widest bg-green-100/70 px-4 py-1.5 rounded-full border border-green-200">What We Offer</span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mt-6 font-display leading-tight">
              Complete <span className="text-green-600">E-Waste & Scrap</span><br />Management Solutions
            </h1>
            <p className="text-gray-600 text-lg mt-6 max-w-3xl mx-auto leading-relaxed">
              Timely Collection &amp; Safe Disposal of E-Waste Ensures a Cleaner, Safer, and Sustainable Environment.
              From IT assets disposition to EPR portal compliance, we process every scrap responsibly.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Link to="/contact">
                <motion.button whileHover={{ scale: 1.05 }} className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full transition-colors shadow-md shadow-green-100/50">
                  Book a Pickup
                </motion.button>
              </Link>
              <a href="tel:+919650380888">
                <motion.button whileHover={{ scale: 1.05 }} className="px-8 py-3 border border-green-500 text-green-600 hover:bg-green-50 font-semibold rounded-full transition-colors flex items-center gap-2 bg-white">
                  <FaPhone /> Call Us Directly
                </motion.button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 2 — Core 4 Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-14">
            <span className="text-green-600 text-sm font-semibold uppercase tracking-widest">Our Specializations</span>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mt-2 font-display">What We <span className="text-green-600">Specialize In</span></h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">Four core pillars of green compliance and recycling that protect corporate standards and natural ecosystems.</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {coreServices.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                whileHover={{ scale: 1.04, translateY: -6 }}
                className="bg-green-50/40 border border-green-100/80 rounded-3xl p-6 flex flex-col gap-4 group hover:shadow-lg hover:shadow-green-100/30 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shadow-sm bg-white" style={{ color: s.color }}>
                  {s.icon}
                </div>
                <div>
                  <span className="text-xs px-2.5 py-1 rounded-full font-semibold mb-2 inline-block bg-white border border-green-100" style={{ color: s.color }}>{s.tag}</span>
                  <h3 className="text-gray-900 font-extrabold text-base mt-1 group-hover:text-green-700 transition-colors">{s.title}</h3>
                </div>
                <p className="text-gray-500 text-xs leading-relaxed flex-1">{s.desc}</p>
                <Link to="/contact" className="inline-flex items-center gap-2 text-xs font-bold hover:gap-3 transition-all" style={{ color: s.color }}>
                  Request Service <FaArrowRight className="text-[10px]" />
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.p {...fadeUp} className="text-center text-green-700 font-medium italic border border-green-200 bg-green-50/50 rounded-2xl py-4 px-6 max-w-2xl mx-auto text-sm shadow-sm">
            🌿 "Timely Collection &amp; Safe Disposal of E-Waste Ensures a Cleaner, Safer, and Sustainable Environment"
          </motion.p>
        </div>
      </section>

      {/* Section 3 — All Services */}
      <section className="py-20 bg-green-50/30 border-y border-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-14">
            <span className="text-green-600 text-sm font-semibold uppercase tracking-widest">Full Portfolio</span>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mt-2 font-display">Everything We <span className="text-green-600">Handle</span></h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.03, translateY: -4 }}
                className="bg-white border border-green-100 rounded-3xl overflow-hidden group shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="relative overflow-hidden h-48">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent" />
                  <div className="absolute bottom-4 left-4 w-10 h-10 rounded-xl flex items-center justify-center text-lg bg-white shadow-sm" style={{ color: service.color }}>
                    {iconMap[service.icon]}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-gray-900 font-extrabold text-lg mb-2">{service.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed mb-4">{service.description}</p>
                  <Link to="/contact" className="inline-flex items-center gap-2 text-green-600 text-xs font-bold hover:gap-3 transition-all">
                    Request Service <FaArrowRight className="text-[10px]" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 — EPR: Why It's Important */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp}>
              <span className="text-green-600 text-sm font-semibold uppercase tracking-widest bg-green-50 px-3 py-1 rounded border border-green-100">Extended Producer Responsibility</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-4 mb-6 font-display">
                Why <span className="text-green-600">EPR</span> Is Important
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                EPR (Extended Producer Responsibility) is a critical policy framework that holds electronics manufacturers and brand owners accountable for the entire lifecycle of their products, particularly end-of-life recycling and safe e-waste extraction.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mb-8">
                EPR actively diverts hazardous toxins from municipal dumps, reduces carbon footprints by replacing virgin mining with recycled metal, and ensures strict regulatory compliance on the official CPCB portal.
              </p>
              <div className="space-y-3">
                {[
                  { text: 'Reduces environmental pollution from e-waste toxins', color: '#16a34a' },
                  { text: 'Conserves precious natural resources and raw elements', color: '#2563eb' },
                  { text: 'Promotes circular economy and green manufacturing', color: '#7c3aed' },
                  { text: 'Ensures strict compliance with HSPCB & CPCB rules', color: '#d97706' },
                  { text: 'Supports official India Swachh Bharat missions', color: '#dc2626' },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <FaCheckCircle className="text-sm flex-shrink-0" style={{ color: item.color }} />
                    <span className="text-gray-700 text-xs font-semibold">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* EPR Cycle Visual */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-green-50/50 border border-green-200/50 rounded-3xl p-8 shadow-sm"
            >
              <h3 className="text-gray-900 font-bold text-lg mb-6 text-center">The EPR Lifecycle</h3>
              <div className="relative flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-white border-2 border-green-500 flex flex-col items-center justify-center text-center z-10 shadow-md">
                  <span className="text-green-600 font-extrabold text-xl leading-tight">EPR</span>
                  <span className="text-gray-500 text-[9px] font-semibold">Extended Producer</span>
                  <span className="text-gray-500 text-[9px] font-semibold">Responsibility</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 mt-6">
                {eprCycleSteps.map((step, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-2 bg-white rounded-xl px-3 py-2 border border-green-100 shadow-sm"
                  >
                    <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: step.color }} />
                    <span className="text-gray-700 text-xs font-semibold">{step.label}</span>
                  </motion.div>
                ))}
              </div>
              <div className="mt-6 bg-white border border-green-100 rounded-2xl p-4 text-center shadow-sm">
                <p className="text-gray-600 text-xs leading-relaxed font-medium">
                  ♻ EPR Credits → Manufacturer → Consumer → End of Life → Certified Recycling → EPR Credits
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 5 — How It Works */}
      <section className="py-20 bg-green-50/30 border-y border-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-14">
            <span className="text-green-600 text-sm font-semibold uppercase tracking-widest">Simple Process</span>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mt-2 font-display">How It <span className="text-green-600">Works</span></h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto">A transparent, completely legal, and eco-friendly waste management experience.</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="relative bg-white border border-green-100 rounded-3xl p-6 text-center shadow-sm"
              >
                <div className="text-5xl font-black mb-4 font-display" style={{ color: step.color + '22' }}>{step.step}</div>
                <h3 className="text-gray-900 font-bold text-base mb-2">{step.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6 — Pricing / Services Packages */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-14">
            <span className="text-green-600 text-sm font-semibold uppercase tracking-widest">Service Packages</span>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mt-2 font-display">Simple, Customized <span className="text-green-600">Solutions</span></h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto">Whether household, corporate offices, or large e-waste producers — we have fully compliant pricing plans.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                whileHover={{ scale: 1.03 }}
                className={`relative rounded-3xl p-8 border shadow-sm transition-all duration-300 bg-white ${plan.popular ? 'border-green-500 shadow-md ring-1 ring-green-100 bg-green-50/10' : 'border-green-100'}`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-600 text-white text-xs font-bold px-4 py-1 rounded-full shadow border border-green-500 uppercase tracking-widest">Recommended</div>
                )}
                <h3 className="text-xl font-extrabold text-gray-950 mb-1">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-6 border-b border-green-50 pb-4">
                  <span className="text-4xl font-black font-display" style={{ color: plan.color }}>{plan.price}</span>
                  <span className="text-gray-500 text-xs font-medium">{plan.per}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-3 text-gray-700 text-xs font-medium">
                      <FaCheckCircle style={{ color: plan.color }} className="flex-shrink-0 text-sm" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link to="/contact">
                  <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="w-full py-3 rounded-2xl font-bold transition-all text-white text-sm" style={{ backgroundColor: plan.color }}>
                    Get Started
                  </motion.button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7 — Licensed Certifications */}
      <section className="py-20 bg-green-50/30 border-t border-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-14">
            <span className="text-green-600 text-sm font-semibold uppercase tracking-widest">Trust &amp; Compliance</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2 font-display">Licensed &amp; <span className="text-green-600">Authorized</span></h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="flex items-center gap-3 bg-white border border-green-100 rounded-2xl px-5 py-4 shadow-sm"
              >
                <FaCheckCircle className="text-green-600 text-base flex-shrink-0" />
                <span className="text-gray-700 text-xs font-semibold">{cert}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </motion.div>
  );
};

export default ServicesPage;
