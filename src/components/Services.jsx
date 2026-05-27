// src/components/Services.jsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaRecycle, FaMobileAlt, FaIndustry, FaTruck, FaBoxes, FaLeaf, FaArrowRight, FaImages, FaTimes, FaExpand } from 'react-icons/fa';
import { services, galleryImages } from '../data';

const iconMap = { FaRecycle, FaMobileAlt, FaIndustry, FaTruck, FaBoxes, FaLeaf };

const ServiceCard = ({ service, index }) => {
  const Icon = iconMap[service.icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group relative bg-white border border-green-100 rounded-3xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl hover:shadow-green-200/30 transition-all duration-500 card-shine"
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        {(() => {
          const isMachine = service.image.startsWith('/') && service.image.endsWith('.jpg') && !service.image.includes('sonu-kumar') && !service.image.includes('mstc-license');
          const isTopTextImg = service.image.includes('recycling-unit-header');
          return (
            <img
              src={service.image}
              alt={service.title}
              className={`w-full h-full object-cover transition-transform duration-700 ${
                isTopTextImg 
                  ? 'scale-[1.65] origin-center object-center group-hover:scale-[1.70]'
                  : isMachine 
                  ? 'scale-[1.25] origin-top object-top group-hover:scale-[1.30]' 
                  : 'group-hover:scale-110'
              }`}
              loading="lazy"
            />
          );
        })()}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent opacity-0 group-hover:opacity-20 transition-all duration-500" />
        {/* Icon on Image */}
        <div
          className="absolute top-4 right-4 w-12 h-12 rounded-2xl flex items-center justify-center backdrop-blur shadow-md"
          style={{ backgroundColor: `${service.color}15`, border: `1px solid ${service.color}30` }}
        >
          {Icon && <Icon style={{ color: service.color }} className="text-xl" />}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center"
            style={{ backgroundColor: `${service.color}12` }}
          >
            {Icon && <Icon style={{ color: service.color }} className="text-base" />}
          </div>
          <h3 className="text-gray-900 font-bold text-lg font-display tracking-tight group-hover:text-green-700 transition-colors duration-300">{service.title}</h3>
        </div>

        <p className="text-gray-500 text-sm leading-relaxed mb-6">{service.description}</p>

        <motion.button
          whileHover={{ gap: '12px' }}
          className="flex items-center gap-2 text-green-600 font-semibold text-sm hover:text-green-700 transition-all group/btn"
        >
          Learn More
          <FaArrowRight className="text-xs transition-transform group-hover/btn:translate-x-1" />
        </motion.button>
      </div>

      {/* Hover Glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"
        style={{ boxShadow: `inset 0 0 40px ${service.color}08` }}
      />
    </motion.div>
  );
};

const Services = () => {
  const preview = galleryImages.slice(0, 8);
  const [lightbox, setLightbox] = useState(null);

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <div className="w-8 h-0.5 bg-green-500" />
            <span className="text-green-600 text-sm font-semibold tracking-wider uppercase">Our Services</span>
            <div className="w-8 h-0.5 bg-green-500" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black font-display text-gray-900 mb-4"
          >
            Explore <span className="text-green-600">Smart Solutions</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Comprehensive waste management services designed to handle every type of waste
            efficiently, responsibly, and sustainably.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>

        {/* Section ─── Operations Gallery Preview */}
        <div className="border-t border-green-100 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-green-600 text-sm font-semibold uppercase tracking-widest">Our Operations</span>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 font-display">
              Recycling &amp; Disposal <span className="text-green-600">in Action</span>
            </h3>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
              Take a look at our state-of-the-art facilities, manual segregation processes, and sustainable operations.
            </p>
          </motion.div>

          {/* 8-image grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-10">
            {preview.map((img, idx) => {
              const isMachine = img.alt.toLowerCase().includes('shredder') || 
                                img.alt.toLowerCase().includes('bandsaw') || 
                                img.alt.toLowerCase().includes('trommel') || 
                                img.alt.toLowerCase().includes('strip') || 
                                img.alt.toLowerCase().includes('collector') || 
                                img.alt.toLowerCase().includes('panel') || 
                                img.alt.toLowerCase().includes('station') || 
                                img.alt.toLowerCase().includes('exhaust') || 
                                img.alt.toLowerCase().includes('scrubber');
              return (
                <motion.div
                  key={img.id}
                  initial={{ opacity: 0, scale: 0.93 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05, duration: 0.4 }}
                  className="group relative overflow-hidden rounded-2xl cursor-pointer shadow-sm hover:shadow-lg hover:shadow-green-100/50 transition-shadow duration-300"
                  style={{ aspectRatio: '4/3' }}
                  onClick={() => setLightbox(idx)}
                >
                  <img 
                    src={img.src} 
                    alt={img.alt} 
                    loading="lazy" 
                    className={`w-full h-full object-cover transition-transform duration-500 ${
                      isMachine 
                        ? 'scale-[1.25] origin-top object-top group-hover:scale-[1.30]' 
                        : 'group-hover:scale-110'
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/95 flex items-center justify-center text-green-700 opacity-0 group-hover:opacity-100 transition-all scale-75 group-hover:scale-100 shadow">
                    <FaExpand className="text-[10px]" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <p className="text-white text-xs font-bold truncate">{img.alt}</p>
                    <span className="text-green-300 text-[10px] font-semibold">{img.category}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* View All CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link to="/gallery">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="btn-outline inline-flex items-center gap-2 text-base px-8 py-3.5"
              >
                <FaImages /> View More Operations Photos <FaArrowRight />
              </motion.button>
            </Link>
          </motion.div>
        </div>

        {/* Bottom Custom Solutions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-20 p-8 rounded-3xl bg-green-50/60 border border-green-100"
        >
          <p className="text-gray-600 mb-4 font-semibold">Can't find what you're looking for?</p>
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              Contact Us for Custom Solutions
            </motion.button>
          </Link>
        </motion.div>
      </div>

      {/* Operations Lightbox modal */}
      <AnimatePresence>
        {lightbox !== null && preview[lightbox] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center lightbox-overlay"
            onClick={() => setLightbox(null)}
          >
            <button className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white z-10 backdrop-blur hover:bg-white/20" onClick={() => setLightbox(null)}>
              <FaTimes />
            </button>
            <motion.div
              key={lightbox}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-4xl mx-8"
              onClick={e => e.stopPropagation()}
            >
              <img src={preview[lightbox].src} alt={preview[lightbox].alt} className="max-w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent rounded-b-2xl px-6 py-4">
                <p className="text-white font-bold">{preview[lightbox].alt}</p>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-green-400 text-sm">{preview[lightbox].category}</span>
                  <Link to="/gallery" className="text-green-300 text-sm hover:text-white flex items-center gap-1">
                    View full gallery <FaArrowRight className="text-xs" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Services;
