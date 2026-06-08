// src/pages/AboutPage.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLeaf, FaUsers, FaAward, FaHandshake, FaBullseye, FaHeart, FaGlobe, FaChartLine, FaCheckCircle, FaShieldAlt, FaTruck, FaFileAlt, FaRecycle, FaTools, FaCertificate, FaBuilding, FaLock } from 'react-icons/fa';
import Gallery from '../components/Gallery';

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const team = [
  { name: 'Mr. Sonu Kumar', role: 'Director & Founder', img: '/sonu-kumar.jpg', bio: 'Possesses extensive industry knowledge and years of valuable experience in the field of waste management and material recycling.' },
  { name: 'Arjun Sharma', role: 'Operations Lead', img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&crop=face', bio: '12+ years in environmental logistics and scaling waste management operations across metros.' },
  { name: 'Priya Nair', role: 'Chief Technical Director', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=face', bio: 'Expert in scaling automated recycling systems and smart CPCB compliance trackers.' },
  { name: 'Deepa Krishnan', role: 'Sustainability Manager', img: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=200&h=200&fit=crop&crop=face', bio: 'Drives environmental compliance, EPR documentation and legal authorization.' },
];

const milestones = [
  { year: '2023', event: 'Founded Green India Waste Management with a clear vision for sustainable e-waste solutions.' },
  { year: '2024', event: 'Obtained ISO 9001:2015 registration and state-level HSPCB Consent to Establish.' },
  { year: '2025', event: 'Scaled waste collection operations to cover multiple municipal clusters across India.' },
  { year: '2026', event: 'Established state-of-the-art red category dismantling plant in Sonipat, Haryana.' },
];

const values = [
  { icon: <FaLeaf />, color: '#16a34a', title: 'Sustainability First', desc: 'Every decision we make is evaluated through the lens of environmental footprint and green compliance.' },
  { icon: <FaUsers />, color: '#059669', title: 'Community Driven', desc: 'We work alongside local waste pickers and communities, integrating green livelihoods.' },
  { icon: <FaHeart />, color: '#dc2626', title: 'Passion for Planet', desc: 'Our team is united by genuine love for the Earth and commitment to protecting it.' },
  { icon: <FaAward />, color: '#d97706', title: 'Excellence Always', desc: 'We set and exceed industrial recycling benchmarks in every service we deliver.' },
  { icon: <FaGlobe />, color: '#7c3aed', title: 'Circular Economy', desc: 'We champion zero-waste thinking, turning every obsolete device into secondary raw materials.' },
  { icon: <FaHandshake />, color: '#0d9488', title: 'Transparent Partnerships', desc: 'Honest reporting, EPR credit verification and full audit accountability.' },
];

const AboutPage = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }} className="bg-white">

      {/* Section 1 — Hero Banner */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-green-50 via-emerald-50/50 to-white overflow-hidden border-b border-green-100">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-80 h-80 bg-green-300 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-60 h-60 bg-emerald-300 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto">
            <span className="text-green-600 text-sm font-semibold uppercase tracking-widest bg-green-100/70 px-4 py-1.5 rounded-full border border-green-200">Who We Are</span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mt-6 font-display leading-tight">
              Building a <span className="text-green-600">Greener India</span><br />For Future Generations
            </h1>
            <p className="text-gray-600 text-lg mt-6 leading-relaxed">
              Green India Waste Management is a fast-growing, certified leader in eco-friendly recycling. We specialize in transforming e-waste into sustainable opportunities with advanced technology and strict legal compliance.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mt-10 md:mt-16"
          >
            {[
              { label: 'ISO 9001:2015 Certified', value: '✓ ISO', icon: <FaCertificate /> },
              { label: 'Cities Covered', value: '120+', icon: <FaGlobe /> },
              { label: 'Active Clients', value: '12K+', icon: <FaUsers /> },
              { label: 'Waste Recycled', value: '50K+', icon: <FaLeaf /> },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="bg-white border border-green-100 rounded-2xl md:rounded-3xl p-4 md:p-6 text-center shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="text-green-600 text-xl md:text-2xl flex justify-center mb-2">{s.icon}</div>
                <div className="text-2xl md:text-3xl font-extrabold text-gray-900 font-display leading-tight">{s.value}</div>
                <div className="text-gray-500 text-xs md:text-sm mt-1 leading-snug">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section 2 — Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeUp}>
              <span className="text-green-600 text-sm font-semibold uppercase tracking-widest bg-green-50 px-3 py-1 rounded-md border border-green-100">Our Purpose</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-4 mb-6 font-display">Mission &amp; Vision</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-green-100 text-green-700 flex items-center justify-center text-xl shadow-sm">
                    <FaBullseye />
                  </div>
                  <div>
                    <h3 className="text-gray-900 font-bold text-lg mb-2">Our Mission</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">To provide accessible, affordable, and fully compliant waste management solutions that keep Indian cities clean, protect natural resources, and generate sustainable raw products.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center text-xl shadow-sm">
                    <FaGlobe />
                  </div>
                  <div>
                    <h3 className="text-gray-900 font-bold text-lg mb-2">Our Vision</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">A Zero-Landfill India where every electronic asset, plastic piece, and metal scrap is fully recovered, dismantled, and safely processed to close the circular loop.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=700&h=500&fit=crop"
                alt="Recycling Plant"
                className="rounded-3xl w-full object-cover h-80 shadow-lg border border-green-100"
              />
              <div className="absolute -bottom-4 -left-4 bg-green-600 text-white rounded-2xl px-6 py-4 shadow-lg shadow-green-200/50 border border-green-500">
                <div className="font-bold text-2xl">ISO 9001:2015</div>
                <div className="text-green-100 text-xs">Registered &amp; Certified</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 3 — Our Values */}
      <section className="py-20 bg-green-50/40 border-y border-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-14">
            <span className="text-green-600 text-sm font-semibold uppercase tracking-widest">What We Stand For</span>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mt-2 font-display">Our Core <span className="text-green-600">Values</span></h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.03 }}
                className="bg-white border border-green-100 rounded-3xl p-6 shadow-sm hover:shadow-lg hover:shadow-green-100/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl mb-4 shadow-sm" style={{ backgroundColor: v.color + '15', color: v.color }}>
                  {v.icon}
                </div>
                <h3 className="text-gray-900 font-bold text-lg mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 — Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-14">
            <span className="text-green-600 text-sm font-semibold uppercase tracking-widest">Our Journey</span>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mt-2 font-display">Company <span className="text-green-600">Milestones</span></h2>
          </motion.div>
          <div className="relative">
            {/* Vertical line — left on mobile, center on desktop */}
            <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-green-200" />

            <div className="space-y-8 md:space-y-12">
              {milestones.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`
                    flex items-start gap-4
                    md:items-center md:gap-8
                    ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}
                  `}
                >
                  {/* Mobile: dot + card side by side | Desktop: full alternating */}

                  {/* Dot — only on mobile inline */}
                  <div className="flex-shrink-0 mt-1 md:hidden w-5 h-5 rounded-full bg-green-500 border-4 border-white shadow z-10 relative" />

                  {/* Card */}
                  <div className={`flex-1 md:text-${i % 2 === 0 ? 'right' : 'left'}`}>
                    <div className="inline-block bg-green-50/60 border border-green-200/50 rounded-2xl p-4 md:p-5 shadow-sm w-full md:w-auto">
                      <div className="text-green-700 font-bold text-base mb-1 font-display">{m.year}</div>
                      <p className="text-gray-700 text-sm leading-relaxed">{m.event}</p>
                    </div>
                  </div>

                  {/* Desktop only: center dot */}
                  <div className="hidden md:block flex-shrink-0 w-5 h-5 rounded-full bg-green-500 border-4 border-white shadow z-10 relative" />

                  {/* Desktop only: empty spacer */}
                  <div className="hidden md:block flex-1" />
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Section 5 — Leadership */}
      <section className="py-24 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
        {/* Decorative background grids/blobs */}
        <div className="absolute top-1/3 left-1/10 w-96 h-96 bg-green-150/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-5 w-[400px] h-[400px] bg-emerald-100/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 hero-grid-pattern opacity-10 pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div {...fadeUp} className="text-center mb-16">
            <span className="text-green-700 text-xs font-bold tracking-[0.25em] uppercase bg-green-50/80 border border-green-100 px-4 py-2 rounded-full backdrop-blur-sm">
              Executive Leadership
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-6 font-display tracking-tight">
              Our Visionary <span className="text-green-600">Leader</span>
            </h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
              Driving Green India toward a circular economy with deep expertise, sustainable operations, and compliance excellence.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: 'spring', damping: 25 }}
            className="flex justify-center w-full"
          >
            {/* The main leader card */}
            <div className="relative group bg-slate-900 text-white rounded-[32px] p-8 md:p-12 shadow-2xl shadow-slate-900/35 overflow-hidden flex flex-col md:flex-row items-center md:items-stretch gap-8 md:gap-12 max-w-4xl w-full border border-slate-800">
              
              {/* Outer glow overlay behind card on hover */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-emerald-600 rounded-[32px] opacity-0 group-hover:opacity-30 transition-opacity duration-700 blur-xl pointer-events-none -z-10" />

              {/* Radial gradient reflection */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.15),transparent_55%)] pointer-events-none" />

              {/* Left Column: Photo Card */}
              <div className="flex-shrink-0 relative flex flex-col items-center justify-center">
                {/* Photo frame with double layer glow */}
                <div className="relative rounded-2xl p-1.5 bg-gradient-to-br from-green-500 via-emerald-400 to-green-600 shadow-2xl w-56 h-72 sm:w-60 sm:h-80 md:w-64 md:h-[360px] overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
                  <img
                    src="/sonu-kumar.jpg"
                    alt="Mr. Sonu Kumar — Director & Founder"
                    className="w-full h-full rounded-xl object-cover object-top filter brightness-[0.93] contrast-[1.05] group-hover:brightness-100 transition-all duration-500"
                  />
                  {/* Glass gradient overlay on image bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-65" />
                  
                  {/* Title Badge on Image */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-xl text-center shadow-lg">
                    <p className="text-[10px] font-extrabold uppercase tracking-widest text-green-300">Director &amp; Founder</p>
                    <p className="text-white text-xs font-bold mt-0.5">Sonu Kumar</p>
                  </div>
                </div>
              </div>

              {/* Right Column: Bio info */}
              <div className="flex-1 flex flex-col justify-between pt-2">
                <div>
                  {/* Name, role & LinkedIn */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-white/10">
                    <div>
                      <span className="text-[10px] font-extrabold tracking-widest uppercase text-green-400 px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full">
                        Board of Directors
                      </span>
                      <h3 className="text-white font-black text-3xl md:text-4xl font-display tracking-tight mt-3">Mr. Sonu Kumar</h3>
                      <p className="text-slate-400 text-xs mt-1 font-semibold uppercase tracking-wider">Director — Green India Waste Management</p>
                    </div>
                    {/* LinkedIn button */}
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-shrink-0 w-11 h-11 rounded-full bg-white/5 border border-white/15 hover:border-green-400 flex items-center justify-center text-slate-300 hover:text-green-400 hover:bg-green-500/10 transition-all duration-300 shadow"
                    >
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                  </div>

                  {/* Biography text */}
                  <div className="text-slate-300 text-sm leading-relaxed space-y-4 text-justify">
                    <p>
                      Mr. Sonu Kumar possesses extensive industry knowledge and years of valuable experience in the field of waste management and material recycling.
                    </p>
                    <p>
                      With deep expertise in identifying, segregating, and recycling E-waste materials through environmentally responsible methods, he has played a significant role in promoting sustainable waste management practices. His strong leadership, operational excellence, and commitment to eco-friendly solutions continue to drive the company toward growth and innovation.
                    </p>
                  </div>
                </div>

                {/* Key Quote bubble */}
                <div className="mt-8 relative p-5 rounded-2xl bg-white/5 border border-white/10 overflow-hidden">
                  <div className="absolute top-0 right-0 text-7xl font-serif text-green-500/10 select-none pointer-events-none translate-x-2 -translate-y-4">
                    “
                  </div>
                  <p className="text-green-300 text-xs md:text-sm font-medium leading-relaxed italic relative z-10">
                    "Under his guidance, Green India Waste Management is committed to delivering safe, efficient, and sustainable recycling solutions for a cleaner and greener future."
                  </p>
                </div>

                {/* Bottom tags */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {['Founder', 'Green Tech', 'Circular Economy', 'Compliance', '18+ Years Exp'].map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-extrabold uppercase tracking-wide bg-slate-800 border border-slate-700 text-green-400 px-3.5 py-1.5 rounded-xl shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 6 — Official Registrations & Licenses */}
      <section className="py-24 bg-gradient-to-b from-white via-slate-50/50 to-white border-t border-slate-100 relative overflow-hidden">
        {/* Background grids and glowing blobs */}
        <div className="absolute inset-0 hero-grid-pattern opacity-5 pointer-events-none" />
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-green-100/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-emerald-100/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            {/* Left Side: Compliance & National Authority Card */}
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <div className="bg-gradient-to-br from-green-50/80 via-white to-emerald-50/40 border border-green-100/80 rounded-[32px] p-8 shadow-xl shadow-green-100/10 space-y-8 relative overflow-hidden">
                {/* Decorative radial gradient reflection */}
                <div className="absolute -top-10 -right-10 w-36 h-36 bg-green-200/20 rounded-full blur-2xl pointer-events-none" />
                
                <div>
                  <span className="text-green-700 text-[10px] font-extrabold uppercase tracking-[0.25em] bg-green-100/70 border border-green-200/50 px-4 py-1.5 rounded-full inline-block">
                    Official Approvals
                  </span>
                  <h2 className="text-3xl md:text-4xl font-black text-gray-900 font-display tracking-tight mt-5 mb-4 leading-tight">
                    Authorized &amp; <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Compliant</span>
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Green India Waste Management holds all mandatory registrations, central and state pollution control boards (PCB) consents, and federal licenses to perform eco-friendly recycling operations.
                  </p>
                </div>

                {/* National Emblem & Government Badge */}
                <div className="bg-white/60 backdrop-blur-sm border border-green-100/70 rounded-2xl p-5 flex items-center gap-5 shadow-sm hover:shadow-md transition-all duration-350">
                  <div className="w-14 h-14 flex-shrink-0 bg-white rounded-xl p-2.5 border border-slate-100 shadow-sm flex items-center justify-center">
                    <img
                      src="/gov-logo.svg"
                      alt="Emblem of India"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h4 className="text-gray-900 font-bold text-sm leading-snug">Government of India Registered</h4>
                    <p className="text-gray-500 text-[11px] mt-1 leading-relaxed">
                      100% compliant with CPCB e-waste management rules, MSME standards, and authorized for state & central government auctions.
                    </p>
                  </div>
                </div>

                {/* Checklist items */}
                <div className="space-y-4 pt-6 border-t border-slate-100">
                  <h4 className="text-gray-900 font-extrabold text-[11px] tracking-wider uppercase text-slate-400">Our Statutory Promises</h4>
                  <ul className="space-y-3.5">
                    {[
                      { icon: <FaCheckCircle />, text: '100% Compliance with E-Waste Rules 2016 & 2018', color: '#16a34a' },
                      { icon: <FaTruck />, text: 'Safe & Secure E-Waste Collection & Transportation', color: '#0d9488' },
                      { icon: <FaFileAlt />, text: 'Complete Documentation & Legal Compliance with Government of India', color: '#059669' },
                      { icon: <FaLock />, text: 'Secure Data Destruction & Confidentiality', color: '#b45309' },
                      { icon: <FaShieldAlt />, text: 'Accurate Record Maintenance & CPCB Audit Reporting', color: '#0369a1' },
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3.5 group cursor-default">
                        <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 text-xs mt-0.5 transition-transform duration-300 group-hover:scale-110" style={{ backgroundColor: item.color + '12', color: item.color, border: `1px solid ${item.color}20` }}>
                          {item.icon}
                        </div>
                        <span className="text-gray-600 leading-relaxed text-xs font-semibold group-hover:text-green-800 transition-colors duration-300">{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Side: Interactive Certificates Grid */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
                <h4 className="text-gray-900 font-black text-lg flex items-center gap-2.5">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-green-50 text-green-600 border border-green-100">
                    <FaCertificate className="animate-pulse" />
                  </span>
                  Click to View or Download Documents
                </h4>
                <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest bg-slate-50 border border-slate-100 px-3 py-1 rounded-full w-fit">
                  7 Official Documents
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {[
                  {
                    title: 'Form GST REG-06',
                    issuer: 'Government of India',
                    image: '/gst-certificate.png',
                    type: 'GST License',
                    regNo: '06BFWPK5740M3ZO',
                    desc: 'Official Goods and Services Tax registration under Government of India.'
                  },
                  {
                    title: 'Import Export Certificate (IEC)',
                    issuer: 'Directorate General of Foreign Trade (DGFT)',
                    image: '/iec-certificate.png',
                    type: 'IEC License',
                    regNo: 'BFWPK5740M',
                    desc: 'Official Importer-Exporter Code certificate issued by the Ministry of Commerce & Industry, Government of India.'
                  },
                  {
                    title: 'HSPCB Consent to Establish',
                    issuer: 'Haryana Pollution Board',
                    image: '/pcb-certificate.png',
                    type: 'PCB Consent',
                    regNo: 'RED Category - AIR/WATER',
                    desc: 'Statutory board consent for safe e-waste and recycling processing in Sonipat.'
                  },
                  {
                    title: 'MSTC Buyer Registration',
                    issuer: 'MSTC Limited (A Govt. of India Enterprise)',
                    image: '/mstc-license.jpg',
                    type: 'MSTC License',
                    regNo: 'Ref No: 633556',
                    desc: 'Authorized buyer certificate for central and state government e-waste auctions.'
                  },
                  {
                    title: 'Udyam Registration',
                    issuer: 'Ministry of MSME',
                    image: '/msme-certificate.png',
                    type: 'MSME / Udyam',
                    regNo: 'UDYAM-HR-05-0028158',
                    desc: 'Ministry of Micro, Small and Medium Enterprises manufacturing enterprise license.'
                  },
                  {
                    title: 'ISO 9001:2015',
                    issuer: 'ICV Assessments Pvt. Ltd.',
                    image: '/iso-certificate.png',
                    type: 'ISO Quality standard',
                    regNo: 'IN/98525582/1415',
                    desc: 'Certified Quality Management System for waste collection, treatment, disposal, materials recovery, hazardous waste collection, remediation, and recycling.'
                  },
                  {
                    title: 'Company Presentation (PPT)',
                    issuer: 'Green India Waste Management',
                    image: null,
                    type: 'Company Document',
                    regNo: 'Download PDF',
                    desc: 'Download our official company profile and recycling capabilities presentation document (PDF).',
                    downloadUrl: '/ppt.pdf'
                  }
                ].map((cert, idx) => (
                  <div
                    key={idx}
                    onClick={() => {
                      if (cert.downloadUrl) {
                        const link = document.createElement('a');
                        link.href = cert.downloadUrl;
                        link.download = cert.downloadUrl.split('/').pop();
                        link.click();
                      } else if (cert.image) {
                        setSelectedCert(cert);
                      }
                    }}
                    className={`group bg-white border border-slate-150 rounded-2xl p-5 shadow-sm hover:shadow-xl hover:shadow-green-150/15 hover:border-green-300 transition-all duration-350 flex flex-col justify-between relative overflow-hidden border-b-4 hover:border-b-green-600 ${
                      (cert.image || cert.downloadUrl) ? 'cursor-pointer' : ''
                    } ${idx === 6 ? 'sm:col-span-2' : ''}`}
                    style={{ minHeight: '220px' }}
                  >
                    {/* Hover light glow overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-green-50/10 via-transparent to-emerald-50/5 opacity-0 group-hover:opacity-100 transition-opacity duration-350 pointer-events-none" />

                    <div className="relative z-10 space-y-3">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[9px] font-extrabold text-green-700 bg-green-50 border border-green-100 px-2.5 py-1 rounded-md uppercase tracking-wider">
                          {cert.type}
                        </span>
                        {cert.downloadUrl ? (
                          <span className="text-[9px] text-green-600 font-extrabold bg-green-50/80 border border-green-100 px-2 py-0.5 rounded-full">
                            PDF Download
                          </span>
                        ) : cert.image ? (
                          <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" /> Click to View
                          </span>
                        ) : (
                          <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-300" /> Standards
                          </span>
                        )}
                      </div>
                      
                      <div>
                        <h3 className="text-gray-900 font-black text-base leading-snug group-hover:text-green-700 transition-colors duration-300">
                          {cert.title}
                        </h3>
                        <div className="text-[10px] text-gray-400 font-bold mt-0.5">{cert.issuer}</div>
                      </div>

                      {cert.regNo && (
                        <div className="text-[9px] font-mono font-bold bg-slate-50 text-slate-600 px-2 py-0.5 rounded border border-slate-150 inline-block">
                          {cert.regNo}
                        </div>
                      )}

                      <p className="text-gray-500 text-xs leading-relaxed text-justify line-clamp-3">
                        {cert.desc}
                      </p>
                    </div>

                    {/* Preview box / Footer */}
                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between relative z-10">
                      {cert.downloadUrl ? (
                        <>
                          <div className="w-12 h-9 rounded-lg bg-green-50 border border-green-100/80 flex items-center justify-center text-green-600 text-xs shadow-sm transition-transform duration-300 group-hover:scale-105">
                            <FaFileAlt />
                          </div>
                          <span className="text-xs text-green-600 font-extrabold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                            Download Document ↓
                          </span>
                        </>
                      ) : cert.image ? (
                        <>
                          <div className="w-12 h-9 rounded-lg bg-slate-50 overflow-hidden border border-slate-100 flex items-center justify-center shadow-sm transition-transform duration-300 group-hover:scale-105">
                            <img
                              src={cert.image}
                              alt={cert.title}
                              className="w-full h-full object-cover opacity-65 group-hover:opacity-100 transition-all duration-300"
                            />
                          </div>
                          <span className="text-xs text-green-600 font-extrabold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                            View Document →
                          </span>
                        </>
                      ) : (
                        <div className="w-full py-1.5 text-center bg-slate-50 rounded-lg text-[9px] font-extrabold text-slate-500 border border-slate-100 uppercase tracking-wider cursor-default">
                          Verified ISO Standards
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Dynamic Lightbox Modal */}
        {selectedCert && (
          <div className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl max-w-2xl w-full max-h-[90vh] flex flex-col border border-slate-150">
              {/* Modal Header */}
              <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50">
                <div className="flex items-center gap-3">
                  <img
                    src="/gov-logo.svg"
                    alt="Gov"
                    className="w-6 h-6 object-contain"
                  />
                  <div>
                    <h3 className="text-gray-900 font-bold text-base leading-tight">{selectedCert.title}</h3>
                    <span className="text-gray-400 text-xs">{selectedCert.issuer}</span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="w-8 h-8 rounded-full bg-white hover:bg-slate-100 border border-slate-200 flex items-center justify-center text-gray-500 hover:text-gray-900 transition-all font-bold text-sm"
                >
                  ✕
                </button>
              </div>
              {/* Modal Image container */}
              <div className="p-4 overflow-y-auto bg-slate-100 flex items-center justify-center min-h-[300px]">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="max-h-[60vh] w-auto object-contain rounded-lg border shadow-sm"
                />
              </div>
              {/* Modal Footer */}
              <div className="p-4 border-t border-slate-100 flex items-center justify-between bg-white">
                <span className="text-[10px] text-gray-400 font-mono">{selectedCert.regNo}</span>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="bg-green-600 hover:bg-green-700 text-white font-semibold text-xs px-5 py-2 rounded-xl transition-all shadow-md shadow-green-150"
                >
                  Close Preview
                </button>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Section 7 — Gallery */}
      <Gallery />

    </motion.div>
  );
};

export default AboutPage;
