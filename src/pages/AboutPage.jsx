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
  { name: 'Mr. Mr. Sonu Kumar', role: 'Director & Founder', img: '/sonu-kumar.jpg', bio: 'Visionary entrepreneur with an unwavering commitment to green tech and circular economy.' },
  { name: 'Arjun Sharma', role: 'Operations Lead', img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&crop=face', bio: '12+ years in environmental logistics and scaling waste management operations across metros.' },
  { name: 'Priya Nair', role: 'Chief Technical Director', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=face', bio: 'Expert in scaling automated recycling systems and smart CPCB compliance trackers.' },
  { name: 'Deepa Krishnan', role: 'Sustainability Manager', img: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=200&h=200&fit=crop&crop=face', bio: 'Drives environmental compliance, EPR documentation and legal authorization.' },
];

const milestones = [
  { year: '2023', event: 'Founded Green India Waste Management with a clear vision for sustainable e-waste solutions.' },
  { year: '2024', event: 'Obtained ISO 9001:2015 registration and state-level HSPCB Consent to Establish.' },
  { year: '2025', event: 'Scaled doorstep waste collection to cover multiple municipal clusters.' },
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
      <section className="py-20 bg-slate-50/70 border-y border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-12">
            <span className="text-green-600 text-sm font-semibold uppercase tracking-widest bg-green-50 px-3 py-1 rounded border border-green-100">Leadership</span>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mt-4 font-display">
              Our <span className="text-green-600">Leader</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="bg-white border border-slate-100 rounded-3xl p-6 md:p-10 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-10 max-w-3xl w-full">

              {/* Photo — bigger with decorative ring */}
              <div className="flex-shrink-0 relative">
                {/* Decorative glow ring */}
                <div className="absolute -inset-1.5 rounded-3xl"
                  style={{ background: 'linear-gradient(135deg, #16a34a, #4ade80, #059669)', padding: '2px', borderRadius: '1.5rem' }}>
                  <div className="w-full h-full rounded-3xl bg-white" />
                </div>
                <img
                  src="/sonu-kumar.jpg"
                  alt="Sonu Kumar — Director & CEO"
                  className="relative w-48 h-60 sm:w-52 sm:h-64 md:w-56 md:h-72 rounded-3xl object-cover object-top shadow-xl border-2 border-white"
                  style={{ boxShadow: '0 20px 50px rgba(22,163,74,0.2), 0 8px 20px rgba(0,0,0,0.1)' }}
                />
                {/* Badge on image */}
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-green-600 text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg whitespace-nowrap"
                  style={{ boxShadow: '0 4px 14px rgba(22,163,74,0.4)' }}>
                  Director & CEO
                </div>
              </div>

              {/* Info */}
              <div className="flex-1 text-center md:text-left pt-4">
                <div className="mb-4">
                  <h3 className="text-gray-900 font-extrabold text-3xl md:text-4xl font-display">Sonu Kumar</h3>
                  <p className="text-green-600 text-sm font-semibold tracking-wider uppercase mt-2">Founder &amp; Director — Green India Waste Management</p>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed italic border-l-4 border-green-200 pl-4 mt-4">
                  "Driving Green India Waste Management's vision towards a sustainable, zero-waste future through responsible resource recovery, robust CPCB compliance, and green tech innovation."
                </p>

                <div className="mt-6 pt-5 border-t border-slate-100 flex flex-wrap justify-center md:justify-start gap-2">
                  {['Founder', 'Green Tech', 'Circular Economy', 'Compliance'].map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-green-50 border border-green-100 text-green-700 font-semibold px-3 py-1.5 rounded-full"
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
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            {/* Left Side: Compliance & National Authority */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-green-600 text-xs font-bold uppercase tracking-widest bg-green-50 px-3 py-1 rounded border border-green-100">
                  Official Approvals
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 font-display mt-4 mb-4">
                  Authorized &amp; <span className="text-green-600">Compliant</span>
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Green India Waste Management holds all mandatory registrations, central and state pollution control boards (PCB) consents, and federal licenses to perform eco-friendly recycling operations.
                </p>
              </div>

              {/* National Emblem & Government Badge */}
              <div className="bg-slate-50 border border-slate-150 rounded-2xl p-5 flex items-center gap-5">
                <div className="w-16 h-16 flex-shrink-0 bg-white rounded-xl p-2 border border-slate-200/60 shadow-sm flex items-center justify-center">
                  <img
                    src="/gov-logo.svg"
                    alt="Emblem of India"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h4 className="text-gray-900 font-extrabold text-sm leading-snug">Government of India Registered</h4>
                  <p className="text-gray-500 text-[11px] mt-0.5 leading-relaxed">
                    100% compliant with e-waste management rules, MSME standards, GST frameworks, and MSTC rules.
                  </p>
                </div>
              </div>

              {/* Checklist items */}
              <div className="space-y-4">
                <h4 className="text-gray-950 font-bold text-sm tracking-wider uppercase">Our Statutory Promises</h4>
                <ul className="space-y-3">
                  {[
                    { icon: <FaCheckCircle />, text: '100% Compliance with E-Waste Rules 2016 & 2018', color: '#16a34a' },
                    { icon: <FaTruck />, text: 'Safe & Secure E-Waste Collection & Transportation', color: '#0d9488' },
                    { icon: <FaFileAlt />, text: 'Complete Documentation & Legal Compliance with Government of India', color: '#059669' },
                    { icon: <FaLock />, text: 'Secure Data Destruction & Confidentiality', color: '#b45309' },
                    { icon: <FaShieldAlt />, text: 'Accurate Record Maintenance & CPCB Audit Reporting', color: '#0369a1' },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0 text-xs mt-0.5" style={{ backgroundColor: item.color + '15', color: item.color }}>
                        {item.icon}
                      </div>
                      <span className="text-gray-700 leading-relaxed text-xs font-medium">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Side: Interactive Certificates Grid */}
            <div className="lg:col-span-7">
              <h4 className="text-gray-900 font-bold text-base mb-6 flex items-center gap-2">
                <FaCertificate className="text-green-600" /> Click to View Official Documents
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                    title: 'ISO 9001 & 14001:2015',
                    issuer: 'QMS & EMS Certification',
                    image: null,
                    type: 'ISO Quality & Green standard',
                    regNo: 'International Standards',
                    desc: 'Certified Quality Management System and Environmental Protection standards.'
                  }
                ].map((cert, idx) => (
                  <div
                    key={idx}
                    onClick={() => {
                      if (cert.image) setSelectedCert(cert);
                    }}
                    className={`bg-white border border-slate-100 rounded-2xl p-5 shadow-sm transition-all duration-300 hover:border-green-200 hover:shadow-md ${cert.image ? 'cursor-pointer group' : ''} flex flex-col justify-between`}
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-[9px] font-bold text-green-700 bg-green-50 border border-green-100 px-2.5 py-1 rounded-md uppercase tracking-wider">
                          {cert.type}
                        </span>
                      </div>
                      <h3 className="text-gray-900 font-extrabold text-base mt-3 mb-1 leading-snug">{cert.title}</h3>
                      <div className="text-[10px] text-gray-400 font-medium mb-2">{cert.issuer}</div>
                      <div className="text-[10px] font-mono bg-slate-50 text-slate-600 px-2 py-0.5 rounded border border-slate-100/50 inline-block">
                        {cert.regNo}
                      </div>
                      <p className="text-gray-500 text-xs mt-3 leading-relaxed">{cert.desc}</p>
                    </div>

                    {/* Preview box */}
                    <div className="mt-5 pt-3 border-t border-slate-50 flex items-center justify-between">
                      {cert.image ? (
                        <>
                          <div className="w-14 h-10 rounded bg-slate-50 overflow-hidden border border-slate-100 flex items-center justify-center">
                            <img
                              src={cert.image}
                              alt={cert.title}
                              className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity"
                            />
                          </div>
                          <span className="text-xs text-green-600 font-bold flex items-center gap-1 group-hover:text-green-700">
                            View Document →
                          </span>
                        </>
                      ) : (
                        <div className="w-full py-1 text-center bg-slate-50 rounded text-[9px] font-bold text-slate-500 border border-slate-100">
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
