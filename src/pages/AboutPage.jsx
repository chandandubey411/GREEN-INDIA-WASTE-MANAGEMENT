// src/pages/AboutPage.jsx
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
  { name: 'Mr. Mr. Sonu Kumar', role: 'Director & Founder', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&crop=face', bio: 'Visionary entrepreneur with an unwavering commitment to green tech and circular economy.' },
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
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
          >
            {[
              { label: 'ISO 9001:2015', value: 'Certified', icon: <FaCertificate /> },
              { label: 'Cities Covered', value: '120+', icon: <FaGlobe /> },
              { label: 'Active Clients', value: '12K+', icon: <FaUsers /> },
              { label: 'Waste Recycled', value: '50K+ Tons', icon: <FaLeaf /> },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="bg-white border border-green-100 rounded-3xl p-6 text-center shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="text-green-600 text-2xl flex justify-center mb-2">{s.icon}</div>
                <div className="text-3xl font-extrabold text-gray-900 font-display">{s.value}</div>
                <div className="text-gray-500 text-sm mt-1">{s.label}</div>
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
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-green-200" />
            <div className="space-y-12">
              {milestones.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`flex items-center gap-8 ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`flex-1 ${i % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <div className="inline-block bg-green-50/60 border border-green-200/50 rounded-2xl p-5 shadow-sm">
                      <div className="text-green-700 font-bold text-base mb-1 font-display">{m.year}</div>
                      <p className="text-gray-700 text-sm leading-relaxed">{m.event}</p>
                    </div>
                  </div>
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500 border-4 border-white shadow z-10 relative" />
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 — Team */}
      <section className="py-20 bg-green-50/40 border-y border-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-14">
            <span className="text-green-600 text-sm font-semibold uppercase tracking-widest">The People</span>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mt-2 font-display">Meet Our <span className="text-green-600">Leaders</span></h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.04 }}
                className="bg-white border border-green-100 rounded-3xl p-6 text-center shadow-sm hover:shadow-md transition-all duration-300"
              >
                <img src={member.img} alt={member.name} className="w-24 h-24 rounded-full mx-auto mb-4 object-cover ring-4 ring-green-100" />
                <h3 className="text-gray-900 font-extrabold text-base mb-1">{member.name}</h3>
                <p className="text-green-600 text-xs font-semibold uppercase tracking-wider mb-3">{member.role}</p>
                <p className="text-gray-500 text-xs leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6 — Why Green India Waste Management? */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-green-600 text-sm font-semibold uppercase tracking-widest bg-green-50 px-3 py-1 rounded border border-green-100">Our Promise</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-4 mb-8 font-display">
                Why <span className="text-green-600">Green India</span> Waste Management?
              </h2>
              <ul className="space-y-4">
                {[
                  { icon: <FaCheckCircle />, text: '100% Compliance with E-Waste Rules 2016 & 2018', color: '#16a34a' },
                  { icon: <FaTruck />, text: 'Safe & Secure E-Waste Collection & Transportation', color: '#0d9488' },
                  { icon: <FaFileAlt />, text: 'Complete Documentation & Legal Compliance with Government of India', color: '#059669' },
                  { icon: <FaLeaf />, text: 'Environment-Friendly Recycling Processes', color: '#15803d' },
                  { icon: <FaLock />, text: 'Secure Data Destruction & Confidentiality', color: '#b45309' },
                  { icon: <FaBuilding />, text: 'Accurate Record Maintenance & Reporting', color: '#0369a1' },
                  { icon: <FaTools />, text: 'Advanced Recycling Infrastructure', color: '#be123c' },
                  { icon: <FaCertificate />, text: 'GST, Labour Law & TDS/TCS Compliance', color: '#c2410c' },
                  { icon: <FaUsers />, text: 'Skilled Workforce & Professional Operations', color: '#6d28d9' },
                  { icon: <FaGlobe />, text: 'Commitment to a Cleaner & Greener Future', color: '#0f766e' },
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 text-sm mt-0.5" style={{ backgroundColor: item.color + '15', color: item.color }}>
                      {item.icon}
                    </div>
                    <span className="text-gray-700 leading-relaxed text-sm">{item.text}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-6"
            >
              {/* Certification badges */}
              <div className="bg-green-50/40 border border-green-100 rounded-3xl p-6">
                <h3 className="text-gray-900 font-bold text-lg mb-4 flex items-center gap-2"><FaCertificate className="text-green-600" /> Our Certifications</h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { name: 'ISO 9001:2015', desc: 'Quality Management System', color: '#2563eb' },
                    { name: 'MSME Certified', desc: 'Micro, Small & Medium Enterprise', color: '#ea580c' },
                    { name: 'GST Registered', desc: 'Goods & Services Tax Compliant', color: '#16a34a' },
                    { name: 'HSPCB Approved', desc: 'Haryana State Pollution Control Board', color: '#7c3aed' },
                    { name: 'Swachh Bharat', desc: 'Clean India Mission Partner', color: '#e11d48' },
                    { name: 'ISO 14001:2015', desc: 'Environmental Management System', color: '#0891b2' },
                  ].map((cert, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="rounded-2xl p-3 border shadow-sm bg-white" style={{ borderColor: cert.color + '25' }}
                    >
                      <div className="font-extrabold text-sm" style={{ color: cert.color }}>{cert.name}</div>
                      <div className="text-gray-500 text-[10px] mt-0.5">{cert.desc}</div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* HSPCB PCB Certification box */}
              <div className="bg-green-50/60 border border-green-200/50 rounded-3xl p-6">
                <h3 className="text-gray-900 font-bold text-lg mb-4 flex items-center gap-2"><FaShieldAlt className="text-green-600" /> PCB Certifications</h3>
                <div className="space-y-3 text-sm">
                  <div className="bg-white border border-green-100 rounded-2xl p-4 shadow-sm">
                    <div className="text-green-700 font-bold mb-1">HSPCB — Consent to Establish</div>
                    <div className="text-gray-600 text-xs leading-relaxed">Haryana State Pollution Control Board has granted consent to establish M/s Green India Waste Management at Sonipat, Haryana — 131028.</div>
                    <div className="mt-2 flex flex-wrap gap-2 text-xs">
                      <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">AIR/WATER Consent</span>
                      <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-medium">Valid: 2024–2029</span>
                      <span className="bg-red-100 text-red-700 px-2 py-0.5 rounded-full font-medium">Category: RED</span>
                    </div>
                  </div>
                  <div className="bg-white border border-green-100 rounded-2xl p-4 shadow-sm">
                    <div className="text-green-700 font-bold mb-1">HSPCB — Hazardous Waste Authorization</div>
                    <div className="text-gray-600 text-xs leading-relaxed">Grant of Authorization under Hazardous and Other Wastes Rules, 2016 for safe Electronic waste and precious metals recovery.</div>
                    <div className="mt-2 flex flex-wrap gap-2 text-xs">
                      <span className="bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full font-medium">Electronic Industry</span>
                      <span className="bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full font-medium">Precious Residues</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 7 — Gallery */}
      <Gallery />

    </motion.div>
  );
};

export default AboutPage;
