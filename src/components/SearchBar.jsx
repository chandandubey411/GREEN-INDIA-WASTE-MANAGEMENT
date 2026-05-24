// src/components/SearchBar.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaMapMarkerAlt, FaCalendarAlt, FaRecycle } from 'react-icons/fa';
import { wasteTypes, cities } from '../data';

const SearchBar = () => {
  const [wasteType, setWasteType] = useState('');
  const [city, setCity] = useState('');
  const [date, setDate] = useState('');
  const [searched, setSearched] = useState(false);

  const handleSearch = () => {
    if (wasteType || city || date) {
      setSearched(true);
      setTimeout(() => setSearched(false), 3000);
    }
  };

  return (
    <section id="search-bar" className="relative z-20 -mt-10 px-4 md:px-8 lg:px-16 xl:px-24 mb-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-6xl mx-auto"
      >
        <div className="bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-2xl shadow-black/40">
          {/* Header */}
          <div className="flex items-center gap-2 mb-4">
            <div className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-primary-400 animate-pulse" />
            </div>
            <span className="text-white/60 text-sm">Find waste management services near you</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {/* Waste Type */}
            <div className="relative group">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-primary-400 z-10">
                <FaRecycle className="text-sm" />
              </div>
              <select
                value={wasteType}
                onChange={(e) => setWasteType(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-3.5 text-white/80 text-sm focus:outline-none focus:border-primary-500 focus:bg-white/10 transition-all appearance-none cursor-pointer"
              >
                <option value="" className="bg-slate-900">Waste Type</option>
                {wasteTypes.map(type => (
                  <option key={type} value={type} className="bg-slate-900">{type}</option>
                ))}
              </select>
            </div>

            {/* City */}
            <div className="relative group">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-primary-400 z-10">
                <FaMapMarkerAlt className="text-sm" />
              </div>
              <select
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-3.5 text-white/80 text-sm focus:outline-none focus:border-primary-500 focus:bg-white/10 transition-all appearance-none cursor-pointer"
              >
                <option value="" className="bg-slate-900">Select City</option>
                {cities.map(c => (
                  <option key={c} value={c} className="bg-slate-900">{c}</option>
                ))}
              </select>
            </div>

            {/* Date */}
            <div className="relative group">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-primary-400 z-10 pointer-events-none">
                <FaCalendarAlt className="text-sm" />
              </div>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                min={new Date().toISOString().split('T')[0]}
                className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-3.5 text-white/80 text-sm focus:outline-none focus:border-primary-500 focus:bg-white/10 transition-all [color-scheme:dark]"
              />
            </div>

            {/* Search Button */}
            <motion.button
              whileHover={{ scale: 1.02, boxShadow: '0 10px 30px rgba(34,197,94,0.3)' }}
              whileTap={{ scale: 0.97 }}
              onClick={handleSearch}
              className="bg-gradient-to-r from-primary-500 to-emerald-600 text-white font-semibold rounded-xl px-6 py-3.5 flex items-center justify-center gap-2 hover:from-primary-600 hover:to-emerald-700 transition-all"
            >
              <FaSearch />
              {searched ? '✓ Available!' : 'Search'}
            </motion.button>
          </div>

          {/* Quick Tags */}
          <div className="flex flex-wrap gap-2 mt-4">
            {['Plastic Pickup', 'E-Waste', 'Scrap Collection', 'Organic Waste'].map(tag => (
              <motion.button
                key={tag}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setWasteType(tag.replace(' Pickup', ''))}
                className="text-xs px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/60 hover:border-primary-500/50 hover:text-primary-400 transition-all"
              >
                {tag}
              </motion.button>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default SearchBar;
