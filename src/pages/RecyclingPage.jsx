import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FaRecycle, FaTruck, FaSortAmountDown, FaSync, FaGlobe, FaLeaf,
  FaIndustry, FaCheckCircle, FaTools, FaMicrochip, FaTrash,
  FaExclamationTriangle, FaUsers, FaLock, FaMoneyBillWave, FaShoppingCart,
  FaTree, FaBolt, FaWater, FaBuilding, FaShieldAlt, FaCog, FaFire,
  FaWind, FaBroadcastTower, FaFilter, FaCut
} from 'react-icons/fa';

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

// From image: Our Recycling Unit — 4-step flow
const recyclingUnitSteps = [
  { step: 'COLLECT', icon: <FaTruck />, color: '#22c55e', desc: 'E-waste is collected from various sources.' },
  { step: 'SORT', icon: <FaSortAmountDown />, color: '#3b82f6', desc: 'Material is carefully sorted manually & mechanically.' },
  { step: 'RECYCLE', icon: <FaRecycle />, color: '#8b5cf6', desc: 'Advanced technology recovers valuable materials.' },
  { step: 'REUSE', icon: <FaSync />, color: '#f59e0b', desc: 'Recovered materials are reused to create a better future.' },
];

// From image: Our Recycling Unit — 5 pillars
const recyclingPillars = [
  { icon: <FaShieldAlt />, label: 'Environment Friendly' },
  { icon: <FaRecycle />, label: 'Resource Recovery' },
  { icon: <FaBolt />, label: 'High Efficiency & Technology' },
  { icon: <FaUsers />, label: 'Skilled Workforce & Safety' },
  { icon: <FaGlobe />, label: 'Sustainable Future' },
];

// From image: Advanced Recycling Plant Machines & Buildings
const machines = [
  /* ── BUILDINGS ─────────────────────────────────────────── */
  {
    name: 'Green India Head Office',
    icon: <FaBuilding />,
    color: '#16a34a',
    image: '/office-building.jpg',
    desc: 'Our registered head office at Springboard Business Hub, Sec-18, Gurgaon — the command centre for operations across 120+ cities.',
    label: 'BUILDING',
  },
  {
    name: 'Recycling Plant Gate',
    icon: <FaIndustry />,
    color: '#15803d',
    image: '/plant-gate.jpg',
    desc: 'Main entrance of Green India Waste Management plant at Plot No-169, Sec-53, PH-III, HSIIDC Kundli, Sonipat, Haryana-131028.',
    label: 'PLANT',
  },
  {
    name: 'Recycling Plant Unit',
    icon: <FaIndustry />,
    color: '#06b6d4',
    image: '/recycling-unit-header.jpg',
    desc: 'Our full-scale red category dismantling plant in HSIIDC Kundli, Sonipat — equipped for complete e-waste processing and resource recovery.',
    label: 'PLANT',
  },

  /* ── MACHINES ───────────────────────────────────────────── */

  {
    name: 'Conveyor Belt System',
    icon: <FaTools />,
    color: '#3b82f6',
    image: '/conveyor-belt.jpg',
    desc: 'Heavy-duty inclined conveyor belt transporting sorted e-waste materials between processing stations with maximum efficiency.',
    label: 'MACHINE',
  },
  {
    name: 'Incinerator Machine',
    icon: <FaFire />,
    color: '#f59e0b',
    image: '/incinerator-machine.jpg',
    desc: 'Industrial-grade incinerator for safe high-temperature treatment of non-recyclable materials, reducing hazardous waste volume and toxicity.',
    label: 'MACHINE',
  },
  {
    name: 'Baghouse Dust Collector',
    icon: <FaWind />,
    color: '#8b5cf6',
    image: '/baghouse-dust-collector.jpg',
    desc: 'Heavy-duty bag filter system capturing fine particulate matter and industrial dust, ensuring clean air emissions and HSPCB compliance.',
    label: 'MACHINE',
  },
  {
    name: 'Dust Collection Unit',
    icon: <FaFilter />,
    color: '#f97316',
    image: '/dust-collection-unit.jpg',
    desc: 'Compact bag-type dust collection unit with yellow steel frame, white cylindrical filters and conical hopper — ideal for fine airborne particulates.',
    label: 'MACHINE',
  },
  {
    name: 'Gas Scrubber Unit',
    icon: <FaBroadcastTower />,
    color: '#14b8a6',
    image: '/gas-scrubber-unit.jpg',
    desc: 'Dual-vessel gas scrubber unit with beige pressure tanks and yellow plumbing — removes harmful gases from incinerator exhaust for clean-air compliance.',
    label: 'MACHINE',
  },
  {
    name: 'Shredder Machine',
    icon: <FaCog />,
    color: '#6366f1',
    image: '/shredder-machine.jpg',
    desc: 'Heavy-duty single-shaft industrial shredder by Pathak Industries — designed for high-torque shredding of e-waste, cables, and bulky recyclable materials.',
    label: 'MACHINE',
  },
];


// From image: Why Recycling Matters
const whyRecyclingMatters = [
  'Conserves Natural Resources',
  'Saves Energy',
  'Reduces Pollution',
  'Creates a Cleaner Environment',
  'Supports a Sustainable Future',
];

// From image: 4Rs commitment
const fourRs = [
  { label: 'REDUCE', icon: <FaTrash />, color: '#ef4444', desc: 'Reduce the amount of waste we create.' },
  { label: 'REUSE', icon: <FaSync />, color: '#3b82f6', desc: 'Reuse materials whenever possible.' },
  { label: 'RECYCLE', icon: <FaRecycle />, color: '#22c55e', desc: 'Recycle more and conserve our future.' },
  { label: 'SUSTAIN', icon: <FaGlobe />, color: '#8b5cf6', desc: 'Sustain the environment for future generations.' },
];

// From image: 9 Benefits of E-Waste Recycling
const eWasteBenefits = [
  { num: '01', icon: <FaTree />, color: '#22c55e', title: 'Conserves Natural Resources', desc: 'Recycling e-waste recovers valuable materials and reduces the need for extracting new raw resources.' },
  { num: '02', icon: <FaLeaf />, color: '#4ade80', title: 'Reduces Environmental Pollution', desc: 'Proper recycling prevents harmful chemicals and toxins from contaminating soil, water and air.' },
  { num: '03', icon: <FaBolt />, color: '#f59e0b', title: 'Saves Energy', desc: 'Recycling materials uses significantly less energy compared to producing new products from virgin resources.' },
  { num: '04', icon: <FaTrash />, color: '#3b82f6', title: 'Reduces Landfill Waste', desc: 'Diverts e-waste from landfills, reducing the burden on waste management systems and extending landfill life.' },
  { num: '05', icon: <FaMicrochip />, color: '#8b5cf6', title: 'Recovers Valuable Materials', desc: 'Metals like gold, silver, copper and other valuable materials are recovered and reused in new products.' },
  { num: '06', icon: <FaUsers />, color: '#06b6d4', title: 'Creates Jobs & Supports Green Economy', desc: 'E-waste recycling and reuse create employment opportunities and promote innovation in sustainable technologies.' },
  { num: '07', icon: <FaWater />, color: '#ef4444', title: 'Reduces Greenhouse Gas Emissions', desc: 'Recycling and reusing e-waste reduces the carbon footprint associated with manufacturing new products.' },
  { num: '08', icon: <FaTools />, color: '#f97316', title: 'Extends Product Life Through Reuse', desc: 'Reusing functional devices extends their life cycle and maximizes the value of resources already in use.' },
  { num: '09', icon: <FaGlobe />, color: '#14b8a6', title: 'Builds a Sustainable Future', desc: 'E-waste recycling and reuse contribute to a cleaner and healthier, sustainable planet for future generations.' },
];

// From image: 9 Challenges
const eWasteChallenges = [
  { num: '1', color: '#f59e0b', title: 'Lack of Awareness', desc: 'Limited awareness among consumers, businesses and stakeholders about the importance and impact of e-waste management.' },
  { num: '2', color: '#ef4444', title: 'Inadequate Collection Infrastructure', desc: 'Insufficient collection centers, logistics and reverse supply chain systems lead to low collection rates.' },
  { num: '3', color: '#8b5cf6', title: 'Informal Sector Dominance', desc: 'A large portion of e-waste is handled by informal players using unsafe methods, causing environmental and health hazards.' },
  { num: '4', color: '#3b82f6', title: 'Lack of Standardized Policies & Enforcement', desc: 'Inconsistent policies, weak enforcement and complex regulations hinder effective implementation.' },
  { num: '5', color: '#f97316', title: 'High Cost of Compliance', desc: 'Implementing proper e-waste management systems and technologies involves high operational and compliance costs.' },
  { num: '6', color: '#06b6d4', title: 'Data Security Concerns', desc: 'Ensuring secure data destruction and protecting sensitive information during disposal is a major challenge.' },
  { num: '7', color: '#22c55e', title: 'Limited Recycling Capacity & Technology', desc: 'Lack of advanced recycling facilities and technology results in low recovery of valuable materials.' },
  { num: '8', color: '#4ade80', title: 'Lack of Financial Incentives', desc: 'Limited subsidies, incentives and economic benefits reduce motivation for businesses and consumers to follow sustainable practices.' },
  { num: '9', color: '#a78bfa', title: 'Consumer Behavior & Upgradation Trend', desc: 'Rapid technology upgrades and consumer behavior lead to increased e-waste generation and shorter product life cycles.' },
];

// Material recovery
const materials = [
  { name: 'PET Plastic', type: 'Plastic', color: '#3b82f6', recoverRate: '92%', width: '92%', products: 'Polyester fibre, packaging, fleece' },
  { name: 'HDPE Plastic', type: 'Plastic', color: '#06b6d4', recoverRate: '88%', width: '88%', products: 'Pipes, bottles, buckets' },
  { name: 'Aluminium', type: 'Metal', color: '#f59e0b', recoverRate: '99%', width: '99%', products: 'New cans, vehicle parts, foil' },
  { name: 'Copper Wire', type: 'Metal', color: '#ef4444', recoverRate: '97%', width: '97%', products: 'New cables, electronics components' },
  { name: 'Organic Waste', type: 'Organic', color: '#22c55e', recoverRate: '100%', width: '100%', products: 'Compost, biogas, fertilizer' },
  { name: 'E-Waste PCBs', type: 'Electronic', color: '#8b5cf6', recoverRate: '85%', width: '85%', products: 'Recovered gold, copper, REE metals' },
];

// 8-step workflow
const workflowSteps = [
  { step: '1', title: 'Collection of E-Waste', desc: 'Scheduled collection or drop at our 120+ collection centers across India.', icon: <FaTruck />, color: '#ef4444' },
  { step: '2', title: 'Sorting of E-Waste', desc: 'Items sorted into: phones, laptops, PCBs, cables, batteries and more.', icon: <FaSortAmountDown />, color: '#f59e0b' },
  { step: '3', title: 'Processing of E-Waste', desc: 'Each category undergoes initial processing for downstream recovery.', icon: <FaIndustry />, color: '#22c55e' },
  { step: '4', title: 'Repairing of E-Waste', desc: 'Functional devices are inspected and repaired for refurbishment.', icon: <FaTools />, color: '#06b6d4' },
  { step: '5', title: 'Dismantling of E-Waste', desc: 'Non-repairable devices are carefully dismantled by trained technicians.', icon: <FaSync />, color: '#8b5cf6' },
  { step: '6', title: 'Recycling of E-Waste', desc: 'Separated materials sent to certified recyclers for processing.', icon: <FaRecycle />, color: '#22c55e' },
  { step: '7', title: 'Component Recovery', desc: 'Gold, silver, copper and rare earth elements recovered from PCBs.', icon: <FaMicrochip />, color: '#f97316' },
  { step: '8', title: 'Residual Disposal', desc: 'Non-recoverable waste safely disposed at authorized facilities.', icon: <FaTrash />, color: '#94a3b8' },
];

const RecyclingPage = () => {
  const [selectedMachine, setSelectedMachine] = useState(null);

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }}>

      {/* Section 1 — Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-green-50 via-emerald-50/40 to-white overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-20 w-80 h-80 bg-emerald-300 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-20 w-60 h-60 bg-cyan-200 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left text column */}
            <motion.div {...fadeUp} className="lg:w-1/2 text-left space-y-6">
              <span className="text-primary-700 text-sm font-bold uppercase tracking-widest bg-green-100/70 border border-green-200/80 px-4 py-1.5 rounded-full">
                E-Waste Recycling &amp; Reuse
              </span>
              <h1 className="text-4xl md:text-5xl font-black text-gray-900 font-display leading-tight">
                <span className="text-primary-600 font-display">A Small Action,</span><br />A Big Impact
              </h1>
              <p className="text-gray-600 text-base leading-relaxed">
                Our advanced recycling facility is equipped with the latest technology to convert waste into valuable resources.
                Together, let's reduce waste, protect nature and build a sustainable future.
              </p>
              <div className="bg-primary-50 border border-primary-200 rounded-2xl px-5 py-3 inline-block">
                <span className="text-primary-700 font-semibold italic text-sm">"Don't Waste Today, Recycle for a Better Tomorrow"</span>
              </div>
            </motion.div>

            {/* Right image column: Recycling Unit Header Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:w-1/2 w-full"
            >
              <div className="relative group rounded-3xl overflow-hidden shadow-xl border border-slate-100 bg-white">
                <img
                  src="/recycling-unit-header.jpg"
                  alt="Recycling Unit"
                  className="w-full h-80 md:h-[350px] object-cover scale-[1.65] origin-center object-center group-hover:scale-[1.70] transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="text-[10px] font-bold uppercase tracking-widest bg-green-600 px-3 py-1 rounded-md">
                    Our Plant
                  </span>
                  <h3 className="text-lg font-extrabold font-display mt-2">Green India Recycling Unit</h3>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16"
          >
            {[
              { stat: '70%', label: 'Less energy to recycle aluminium vs. virgin production' },
              { stat: '17', label: 'Trees saved per ton of recycled paper' },
              { stat: '6,000L', label: 'Water saved per ton of recycled paper' },
              { stat: '60%', label: 'CO₂ reduction from recycled vs. new plastics' },
            ].map((f, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-white border border-primary-100 rounded-2xl p-5 shadow-green-sm text-center">
                <div className="text-2xl md:text-3xl font-extrabold font-display text-primary-600">{f.stat}</div>
                <div className="text-gray-600 text-xs mt-2">{f.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section 2 — Our Recycling Unit (from image) */}
      <section className="py-20 bg-green-50/40 border-t border-b border-green-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-14">
            <span className="text-primary-600 text-sm font-semibold uppercase tracking-widest">Our Facility</span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-2 font-display">
              Our <span className="text-primary-600">Recycling Unit</span>
            </h2>
            <p className="text-gray-600 mt-3 text-lg italic">Turning Waste into Resource, Building a Sustainable Future</p>
          </motion.div>

          {/* Collect → Sort → Recycle → Reuse */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {recyclingUnitSteps.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                whileHover={{ scale: 1.04, translateY: -4 }}
                className="relative bg-white border border-primary-200 shadow-green-sm rounded-2xl p-6 text-center hover:border-primary-400 hover:shadow-green-md transition-all"
              >
                <div className="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center text-2xl mb-4" style={{ backgroundColor: s.color + '22', color: s.color }}>
                  {s.icon}
                </div>
                <h3 className="text-gray-800 font-extrabold text-lg tracking-wide mb-2">{s.step}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
                {i < recyclingUnitSteps.length - 1 && (
                  <div className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-8 h-8 rounded-full bg-primary-50 border border-primary-200 items-center justify-center text-primary-600 z-10 font-bold">→</div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Two feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-2xl overflow-hidden h-48 group shadow-green-sm"
            >
              <img src="https://images.unsplash.com/photo-1604187351574-c75ca79f5807?w=700&h=300&fit=crop" alt="Manual & Automated Sorting" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="text-white font-bold">| Manual &amp; Automated Sorting for Better Efficiency</span>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-2xl overflow-hidden h-48 group shadow-green-sm"
            >
              <img src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=700&h=300&fit=crop" alt="Advanced Processing" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="text-white font-bold">| Advanced Processing for Maximum Recovery</span>
              </div>
            </motion.div>
          </div>

          {/* 5 Pillars */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white border border-primary-200 shadow-green-sm rounded-2xl p-6"
          >
            <div className="flex flex-wrap justify-center gap-4">
              {recyclingPillars.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-2 bg-primary-50 border border-primary-200/60 rounded-full px-5 py-2"
                >
                  <span className="text-primary-600 text-sm">{p.icon}</span>
                  <span className="text-gray-700 text-sm font-medium">{p.label}</span>
                </motion.div>
              ))}
            </div>
            <p className="text-center text-primary-700 font-semibold italic mt-4 text-sm">🌿 Responsible Today — Sustainable Tomorrow</p>
          </motion.div>
        </div>
      </section>

      {/* Section 3 — Advanced Recycling Plant Machines */}
      <section className="py-20 bg-slate-50/50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-14">
            <span className="text-primary-600 text-sm font-semibold uppercase tracking-widest bg-green-50 px-3 py-1 rounded border border-green-100">
              State-of-the-Art Infrastructure
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mt-4 font-display">
              Our Advanced <span className="text-primary-600 font-display">Recycling Machines</span>
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-sm leading-relaxed">
              Recycle Today, For a Better Tomorrow. Our plant runs on cutting-edge machinery for maximum recovery, high precision, and compliance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {machines.map((machine, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-md hover:border-green-200 transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Image header with interactive click and full-hover overlay */}
                <div 
                  onClick={() => setSelectedMachine(machine)}
                  className="relative h-48 overflow-hidden bg-slate-50 border-b border-slate-100 cursor-pointer group/img"
                >
                  <img
                    src={machine.image}
                    alt={machine.name}
                    className="w-full h-full object-cover object-top scale-[1.25] origin-top group-hover/img:scale-[1.30] transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/30 flex items-center justify-center transition-all duration-300">
                    <span className="text-white text-xs font-bold px-3 py-1.5 rounded-xl bg-green-600/90 opacity-0 group-hover/img:opacity-100 transform translate-y-2 group-hover/img:translate-y-0 transition-all duration-300 shadow-md">
                      View Full Image
                    </span>
                  </div>
                  <div className="absolute top-3 left-3 flex items-center gap-1.5">
                    <div className="bg-green-600 text-white w-8 h-8 rounded-lg flex items-center justify-center text-sm shadow-md">
                      {machine.icon}
                    </div>
                    {machine.label && (
                      <span className="text-white text-[9px] font-extrabold uppercase tracking-widest bg-black/50 backdrop-blur px-2 py-1 rounded-md">
                        {machine.label}
                      </span>
                    )}
                  </div>
                </div>

                {/* Info Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-gray-900 font-extrabold text-sm mb-2 uppercase tracking-wide leading-snug">
                      {machine.name}
                    </h3>
                    <p className="text-gray-500 text-xs leading-relaxed">
                      {machine.desc}
                    </p>
                  </div>
                  
                  {/* Verified tag & View Image action */}
                  <div className="mt-4 pt-4 border-t border-slate-50 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedMachine(machine)}
                      className="text-[10px] text-green-600 hover:text-green-700 font-extrabold flex items-center gap-1 transition-colors"
                    >
                      View Image →
                    </button>
                    <span className="text-[10px] text-slate-400 font-medium">
                      ✓ Active Unit
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Our Commitment + 4Rs */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            <motion.div
              {...fadeUp}
              className="lg:col-span-2 bg-gradient-to-br from-primary-50 to-emerald-50 border border-primary-200 rounded-2xl p-6 shadow-green-sm"
            >
              <FaLeaf className="text-primary-600 text-3xl mb-3" />
              <h3 className="text-gray-900 font-bold text-lg mb-3">Our Commitment</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We are committed to responsible recycling, zero waste to landfill and continuous improvement for a greener planet.
              </p>
              <div className="mt-4 border-t border-primary-200 pt-4">
                <p className="text-primary-700 font-bold text-center text-lg">TOGETHER WE CAN MAKE A DIFFERENCE!</p>
              </div>
            </motion.div>

            <div className="lg:col-span-3 grid grid-cols-2 gap-4">
              {fourRs.map((r, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white border border-primary-100 hover:border-primary-200 shadow-green-sm hover:shadow-green-md transition-all rounded-2xl p-5 text-center"
                >
                  <div className="w-12 h-12 mx-auto rounded-full flex items-center justify-center text-xl mb-2" style={{ backgroundColor: r.color + '22', color: r.color }}>
                    {r.icon}
                  </div>
                  <div className="text-primary-600 font-extrabold tracking-widest text-sm mb-1" style={{ color: r.color }}>{r.label}</div>
                  <p className="text-gray-600 text-xs">{r.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Why Recycling Matters */}
          <motion.div
            {...fadeUp}
            className="mt-8 bg-green-50/50 border border-primary-200 rounded-2xl p-8 shadow-green-sm"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-gray-900 font-bold text-2xl mb-5">Why Recycling Matters?</h3>
                <ul className="space-y-3">
                  {whyRecyclingMatters.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-3 text-gray-700"
                    >
                      <FaCheckCircle className="text-primary-600 flex-shrink-0" />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative"
              >
                <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=500&h=320&fit=crop" alt="Nature" className="rounded-2xl w-full object-cover h-48 shadow-green-sm" />
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-emerald-900/20 rounded-2xl" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 4 — 8-Step Workflow — 3D Edition */}
      <section className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0a0f1e 0%, #0d1a0f 40%, #071a2e 100%)' }}>

        {/* Grid texture overlay */}
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        {/* Ambient glow blobs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(34,197,94,0.12) 0%, transparent 70%)', filter: 'blur(40px)' }} />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.10) 0%, transparent 70%)', filter: 'blur(40px)' }} />
        <div className="absolute top-1/2 left-0 w-64 h-64 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)', filter: 'blur(30px)' }} />

        {/* Floating dots */}
        {[...Array(12)].map((_, i) => (
          <div key={i} className="absolute w-1 h-1 rounded-full opacity-30 pointer-events-none"
            style={{ background: ['#22c55e','#3b82f6','#f59e0b','#8b5cf6'][i % 4], left: `${8 + (i * 8)}%`, top: `${15 + (i % 3) * 30}%`, animation: `floatCard ${3 + (i % 3)}s ease-in-out ${i * 0.4}s infinite` }} />
        ))}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Header */}
          <motion.div {...fadeUp} className="text-center mb-16">
            <span className="inline-flex items-center gap-2 text-green-400 text-xs font-bold uppercase tracking-[0.2em] bg-green-400/10 border border-green-400/20 px-4 py-2 rounded-full mb-4">
              <FaRecycle className="text-green-400" /> Our Process
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-white mt-3 font-display">
              Our <span style={{ background: 'linear-gradient(135deg, #22c55e, #4ade80)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Work Flow</span>
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-base">
              A transparent 8-step journey ensuring maximum recovery and zero harm to the environment.
            </p>
          </motion.div>

          {/* Row 1 — Steps 1–4 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-4">
            {workflowSteps.slice(0, 4).map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50, rotateX: 15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.13, duration: 0.6, ease: 'easeOut' }}
                whileHover={{ y: -10, scale: 1.03, rotateY: 3 }}
                style={{
                  transformStyle: 'preserve-3d',
                  perspective: '800px',
                  background: 'linear-gradient(145deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.03) 100%)',
                  borderTop: `3px solid ${step.color}`,
                  boxShadow: `0 20px 60px rgba(0,0,0,0.5), 0 8px 20px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.08), 0 0 0 1px rgba(255,255,255,0.06)`,
                }}
                className="relative rounded-2xl p-6 text-center backdrop-blur-sm border border-white/[0.08] cursor-default overflow-hidden"
              >
                {/* Card inner glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: `radial-gradient(circle at 50% 0%, ${step.color}15 0%, transparent 70%)` }} />

                {/* 3D Step Number badge */}
                <div className="absolute top-4 right-4">
                  <div className="w-8 h-8 rounded-xl flex items-center justify-center text-xs font-black"
                    style={{
                      background: `linear-gradient(135deg, ${step.color}, ${step.color}99)`,
                      boxShadow: `0 4px 12px ${step.color}50, 0 2px 4px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.3)`,
                      color: '#fff',
                    }}>
                    {step.step}
                  </div>
                </div>

                {/* Icon with 3D box */}
                <div className="relative mx-auto mb-5 w-16 h-16">
                  <div className="absolute inset-0 rounded-2xl translate-y-1.5 translate-x-1.5"
                    style={{ background: step.color + '30', filter: 'blur(4px)' }} />
                  <div className="relative w-16 h-16 rounded-2xl flex items-center justify-center text-2xl"
                    style={{
                      background: `linear-gradient(145deg, ${step.color}28, ${step.color}10)`,
                      border: `1px solid ${step.color}40`,
                      boxShadow: `0 8px 24px ${step.color}25, inset 0 1px 0 rgba(255,255,255,0.15)`,
                      color: step.color,
                    }}>
                    {step.icon}
                  </div>
                </div>

                <h3 className="text-white font-bold text-sm mb-2 leading-snug">{step.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{step.desc}</p>

                {/* Bottom color bar */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-2xl"
                  style={{ background: `linear-gradient(90deg, transparent, ${step.color}80, transparent)` }} />

                {/* Arrow connector */}
                {i < 3 && (
                  <div className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-7 h-7 rounded-full items-center justify-center z-20 text-xs font-bold"
                    style={{
                      background: `linear-gradient(135deg, ${step.color}, ${step.color}80)`,
                      boxShadow: `0 4px 12px ${step.color}50`,
                      color: '#fff',
                    }}>
                    →
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Down arrow connector */}
          <div className="flex justify-end pr-[calc(25%-1.25rem)] mb-4">
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold"
              style={{
                background: 'linear-gradient(135deg, #22c55e, #059669)',
                boxShadow: '0 6px 20px rgba(34,197,94,0.4)',
                color: '#fff',
              }}>
              ↓
            </motion.div>
          </div>

          {/* Row 2 — Steps 5–8 (reversed) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {workflowSteps.slice(4).reverse().map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50, rotateX: 15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.13, duration: 0.6, ease: 'easeOut' }}
                whileHover={{ y: -10, scale: 1.03, rotateY: -3 }}
                style={{
                  transformStyle: 'preserve-3d',
                  perspective: '800px',
                  background: 'linear-gradient(145deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.03) 100%)',
                  borderTop: `3px solid ${step.color}`,
                  boxShadow: `0 20px 60px rgba(0,0,0,0.5), 0 8px 20px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.08), 0 0 0 1px rgba(255,255,255,0.06)`,
                }}
                className="relative rounded-2xl p-6 text-center backdrop-blur-sm border border-white/[0.08] cursor-default overflow-hidden"
              >
                <div className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: `radial-gradient(circle at 50% 0%, ${step.color}15 0%, transparent 70%)` }} />

                {/* 3D Step badge */}
                <div className="absolute top-4 right-4">
                  <div className="w-8 h-8 rounded-xl flex items-center justify-center text-xs font-black"
                    style={{
                      background: `linear-gradient(135deg, ${step.color}, ${step.color}99)`,
                      boxShadow: `0 4px 12px ${step.color}50, 0 2px 4px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.3)`,
                      color: '#fff',
                    }}>
                    {step.step}
                  </div>
                </div>

                {/* Icon */}
                <div className="relative mx-auto mb-5 w-16 h-16">
                  <div className="absolute inset-0 rounded-2xl translate-y-1.5 translate-x-1.5"
                    style={{ background: step.color + '30', filter: 'blur(4px)' }} />
                  <div className="relative w-16 h-16 rounded-2xl flex items-center justify-center text-2xl"
                    style={{
                      background: `linear-gradient(145deg, ${step.color}28, ${step.color}10)`,
                      border: `1px solid ${step.color}40`,
                      boxShadow: `0 8px 24px ${step.color}25, inset 0 1px 0 rgba(255,255,255,0.15)`,
                      color: step.color,
                    }}>
                    {step.icon}
                  </div>
                </div>

                <h3 className="text-white font-bold text-sm mb-2 leading-snug">{step.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{step.desc}</p>

                <div className="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-2xl"
                  style={{ background: `linear-gradient(90deg, transparent, ${step.color}80, transparent)` }} />

                {i < 3 && (
                  <div className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-7 h-7 rounded-full items-center justify-center z-20 text-xs font-bold"
                    style={{
                      background: `linear-gradient(135deg, ${step.color}, ${step.color}80)`,
                      boxShadow: `0 4px 12px ${step.color}50`,
                      color: '#fff',
                    }}>
                    ←
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Bottom pillar badges */}
          <motion.div {...fadeUp} className="flex flex-wrap justify-center gap-3 mt-14">
            {['Environment Protection', 'Resource Conservation', 'Sustainable Future', 'Building a Cleaner & Greener India'].map((pillar, i) => (
              <div key={i} className="flex items-center gap-2 rounded-full px-5 py-2.5 border transition-all duration-300"
                style={{
                  background: 'rgba(34,197,94,0.08)',
                  borderColor: 'rgba(34,197,94,0.25)',
                  boxShadow: '0 4px 16px rgba(34,197,94,0.1)',
                }}>
                <FaCheckCircle className="text-green-400 text-xs flex-shrink-0" />
                <span className="text-gray-300 text-sm font-medium">{pillar}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>


      {/* Section 5 — 9 Benefits of E-Waste Recycling */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-14">
            <span className="text-primary-600 text-sm font-semibold uppercase tracking-widest">Why Recycle E-Waste?</span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-2 font-display">
              9 Benefits of <span className="text-primary-600">E-Waste Recycling</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {eWasteBenefits.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                whileHover={{ scale: 1.03, translateY: -4 }}
                className="bg-green-50/30 border border-primary-100 hover:border-primary-300 hover:bg-white hover:shadow-green-md transition-all shadow-green-sm rounded-2xl p-6 flex gap-4"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xl" style={{ backgroundColor: b.color + '22', color: b.color }}>{b.icon}</div>
                </div>
                <div>
                  <div className="text-xs font-bold mb-1" style={{ color: b.color }}>Benefit {b.num}</div>
                  <h3 className="text-gray-800 font-bold mb-2">{b.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{b.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6 — 9 Challenges */}
      <section className="py-20 bg-green-50/40 border-t border-b border-green-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-14">
            <span className="text-primary-600 text-sm font-semibold uppercase tracking-widest">The Reality</span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-2 font-display">
              Challenges in <span className="text-primary-600">E-Waste Management</span>
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Green India directly addresses every challenge with technology, partnerships, and on-ground operations.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {eWasteChallenges.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white border border-primary-200/60 shadow-green-sm hover:border-primary-400 hover:shadow-green-md transition-all rounded-2xl p-5 flex gap-4"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold border-2" style={{ borderColor: c.color + '44', color: c.color, backgroundColor: c.color + '11' }}>
                  {c.num}
                </div>
                <div>
                  <h3 className="text-gray-800 font-bold text-sm mb-1">{c.title}</h3>
                  <p className="text-gray-600 text-xs leading-relaxed">{c.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div {...fadeUp} className="mt-10 bg-gradient-to-r from-green-50 to-emerald-50 border border-primary-200 shadow-green-sm rounded-2xl p-8 text-center">
            <h3 className="text-gray-900 font-bold text-xl mb-3">How Green India Addresses These Challenges</h3>
            <p className="text-gray-700 max-w-3xl mx-auto text-sm leading-relaxed">
              Through AI-powered sorting, 120+ city coverage, government-certified processes, certified data destruction, and extensive community awareness programs — Green India directly combats every one of these 9 challenges.
            </p>
            <Link to="/contact" className="inline-block mt-6">
              <motion.button whileHover={{ scale: 1.05 }} className="px-8 py-3 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-full shadow-green-sm transition-colors">
                Be Part of the Solution
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Section 7 — Material Recovery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-14">
            <span className="text-primary-600 text-sm font-semibold uppercase tracking-widest">Material Science</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 font-display">What We <span className="text-primary-600">Recover</span></h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {materials.map((mat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.03 }}
                className="bg-green-50/30 border border-primary-100 hover:border-primary-300 hover:bg-white hover:shadow-green-md transition-all shadow-green-sm rounded-2xl p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-gray-800 font-bold text-lg">{mat.name}</h3>
                    <span className="text-xs px-3 py-1 rounded-full font-medium" style={{ backgroundColor: mat.color + '22', color: mat.color }}>{mat.type}</span>
                  </div>
                  <div className="text-2xl font-extrabold font-display" style={{ color: mat.color }}>{mat.recoverRate}</div>
                </div>
                <div className="w-full bg-primary-100 rounded-full h-1.5 mb-4">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: mat.width }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: i * 0.1 }}
                    className="h-1.5 rounded-full"
                    style={{ backgroundColor: mat.color }}
                  />
                </div>
                <div className="flex items-start gap-2 text-sm text-gray-600">
                  <FaCheckCircle className="text-primary-600 mt-0.5 flex-shrink-0" />
                  <span>Converted to: {mat.products}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8 — CTA */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-emerald-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl md:text-5xl font-bold text-white font-display mb-4">Ready to Recycle Responsibly?</h2>
            <p className="text-primary-100 text-lg mb-8">Join 12,000+ clients who trust Green India for certified, transparent e-waste recycling.</p>
            <Link to="/contact">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} className="px-10 py-4 bg-white text-primary-600 font-bold rounded-full text-lg shadow-xl">
                Schedule Your First Collection Free
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Dynamic Lightbox Modal for Recycling Machinery */}
      {selectedMachine && (
        <div className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl max-w-3xl w-full max-h-[90vh] flex flex-col border border-slate-150 animate-in fade-in zoom-in duration-200">
            {/* Modal Header */}
            <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-green-100 text-green-700 flex items-center justify-center text-lg shadow-sm">
                  {selectedMachine.icon}
                </div>
                <div>
                  <h3 className="text-gray-900 font-extrabold text-base leading-tight uppercase tracking-wide">{selectedMachine.name}</h3>
                  <span className="text-gray-400 text-xs font-semibold uppercase tracking-wider">Plant Recycling Equipment</span>
                </div>
              </div>
              <button
                onClick={() => setSelectedMachine(null)}
                className="w-8 h-8 rounded-full bg-white hover:bg-slate-100 border border-slate-200 flex items-center justify-center text-gray-500 hover:text-gray-900 transition-all font-bold text-sm"
              >
                ✕
              </button>
            </div>
            {/* Modal Image container - UNCROPPED for high definition original view */}
            <div className="p-4 overflow-y-auto bg-slate-100 flex items-center justify-center min-h-[300px] select-none">
              <img
                src={selectedMachine.image}
                alt={selectedMachine.name}
                className="max-h-[60vh] md:max-h-[65vh] w-auto object-contain rounded-2xl border shadow-md bg-white"
              />
            </div>
            {/* Modal Footer */}
            <div className="p-5 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white">
              <p className="text-gray-600 text-xs leading-relaxed max-w-md">
                {selectedMachine.desc}
              </p>
              <button
                onClick={() => setSelectedMachine(null)}
                className="bg-green-600 hover:bg-green-700 text-white font-bold text-xs px-6 py-2.5 rounded-xl transition-all shadow-md shadow-green-150 self-end sm:self-center"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}

    </motion.div>
  );
};

export default RecyclingPage;
