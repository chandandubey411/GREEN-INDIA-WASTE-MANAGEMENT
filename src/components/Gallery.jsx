import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaImages, FaArrowRight, FaTimes, FaExpand } from 'react-icons/fa';
import { galleryImages } from '../data/index';

const Gallery = () => {
  const preview = galleryImages.slice(0, 8);
  const [lightbox, setLightbox] = useState(null);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-green-600 text-sm font-semibold uppercase tracking-widest">Our Work</span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-2 font-display">
            Photo <span className="text-green-600">Gallery</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">A glimpse into our facilities, operations, and the green mission we live every day.</p>
        </motion.div>

        {/* 8-image preview grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-10">
          {preview.map((img, idx) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.06, duration: 0.4 }}
              className="group relative overflow-hidden rounded-2xl cursor-pointer shadow-sm hover:shadow-xl hover:shadow-green-200/40 transition-shadow duration-300"
              style={{ aspectRatio: '4/3' }}
              onClick={() => setLightbox(idx)}
            >
              <img src={img.src} alt={img.alt} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center text-green-700 opacity-0 group-hover:opacity-100 transition-all scale-75 group-hover:scale-100">
                <FaExpand className="text-xs" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-white text-sm font-semibold">{img.alt}</p>
                <span className="text-green-300 text-xs">{img.category}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Show More / View All */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-3 bg-green-50 border border-green-200 rounded-2xl px-6 py-4 mb-6">
            <FaImages className="text-green-600 text-2xl" />
            <div className="text-left">
              <div className="font-bold text-gray-900">Explore Our Gallery</div>
              <div className="text-gray-500 text-sm">Browse our complete collection with filters</div>
            </div>
          </div>
          <br />
          <Link to="/gallery">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="btn-primary inline-flex items-center gap-2 text-base px-8 py-4 btn-glow"
            >
              <FaImages /> View Full Gallery <FaArrowRight />
            </motion.button>
          </Link>
        </motion.div>
      </div>

      {/* Quick lightbox for preview */}
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

export default Gallery;
