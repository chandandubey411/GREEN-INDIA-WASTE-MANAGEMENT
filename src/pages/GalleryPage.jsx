import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaChevronLeft, FaChevronRight, FaExpand, FaSearch, FaImages } from 'react-icons/fa';
import { galleryImages } from '../data/index';

const categories = ['All', ...Array.from(new Set(galleryImages.map(img => img.category)))];

const GalleryPage = () => {
  const [filter, setFilter] = useState('All');
  const [lightbox, setLightbox] = useState(null); // index in filtered
  const [search, setSearch] = useState('');

  const filtered = galleryImages.filter(img => {
    const matchCat = filter === 'All' || img.category === filter;
    const matchSearch = img.alt.toLowerCase().includes(search.toLowerCase()) || img.category.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const openLightbox = (idx) => setLightbox(idx);
  const closeLightbox = () => setLightbox(null);
  const prevImg = useCallback(() => setLightbox(i => (i - 1 + filtered.length) % filtered.length), [filtered.length]);
  const nextImg = useCallback(() => setLightbox(i => (i + 1) % filtered.length), [filtered.length]);

  // Keyboard navigation
  useEffect(() => {
    if (lightbox === null) return;
    const handler = (e) => {
      if (e.key === 'ArrowLeft') prevImg();
      if (e.key === 'ArrowRight') nextImg();
      if (e.key === 'Escape') closeLightbox();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [lightbox, prevImg, nextImg]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    document.body.style.overflow = lightbox !== null ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [lightbox]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="bg-white"
    >
      {/* ─── Hero ─────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-green-800 via-emerald-700 to-green-900 overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-green-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-10 w-96 h-96 bg-emerald-300/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-green-200 text-sm font-medium mb-6 backdrop-blur">
              <FaImages /> Our Gallery
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white font-display leading-tight mb-4">
              A Vision for a <span className="text-green-300">Greener</span> India
            </h1>
            <p className="text-green-100/80 text-lg max-w-2xl mx-auto">
              A curated collection showcasing our recycling facilities, operations, team, and the environment we protect every day.
            </p>
          </motion.div>

          {/* Search */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="relative max-w-md mx-auto mt-8"
          >
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-green-300/70" />
            <input
              type="text"
              placeholder="Search photos..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-white/10 border border-white/20 rounded-full pl-10 pr-5 py-3 text-white placeholder-green-200/50 focus:outline-none focus:border-green-300 backdrop-blur transition"
            />
          </motion.div>
        </div>
      </section>

      {/* ─── Filter Tabs ───────────────────────────────── */}
      <section className="py-8 bg-white border-b border-green-100 sticky top-16 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat, i) => (
              <motion.button
                key={cat}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  filter === cat
                    ? 'bg-green-600 text-white shadow-lg shadow-green-300/40 scale-105'
                    : 'bg-green-50 text-green-700 border border-green-200 hover:bg-green-100'
                }`}
              >
                {cat}
                <span className={`ml-2 text-xs px-1.5 py-0.5 rounded-full ${filter === cat ? 'bg-white/20' : 'bg-green-200 text-green-700'}`}>
                  {cat === 'All' ? galleryImages.length : galleryImages.filter(img => img.category === cat).length}
                </span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Gallery Grid ──────────────────────────────── */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          {filtered.length === 0 ? (
            <div className="text-center py-20 text-gray-400">
              <FaImages className="text-6xl mx-auto mb-4 text-green-200" />
              <p className="text-lg">No photos match your search.</p>
            </div>
          ) : (
            <>
              <div className="mb-6 flex items-center justify-between">
                <p className="text-gray-500 text-sm">
                  Showing <span className="font-semibold text-green-700">{filtered.length}</span> photos
                  {filter !== 'All' && <> in <span className="font-semibold text-green-700">{filter}</span></>}
                </p>
                <p className="text-gray-400 text-xs hidden sm:block">Click any photo to enlarge • Use ← → keys to navigate</p>
              </div>

              <motion.div
                layout
                className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4"
              >
                <AnimatePresence>
                  {filtered.map((img, idx) => (
                    <motion.div
                      key={img.id}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.35, delay: idx * 0.03 }}
                      className="group relative overflow-hidden rounded-2xl bg-green-100 cursor-pointer shadow-sm hover:shadow-xl hover:shadow-green-200/50 transition-shadow duration-300"
                      style={{ aspectRatio: '4/3' }}
                      onClick={() => openLightbox(idx)}
                    >
                      <img
                        src={img.src}
                        alt={img.alt}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-green-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Info overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                        <p className="text-white font-semibold text-sm truncate">{img.alt}</p>
                        <span className="text-green-300 text-xs">{img.category}</span>
                      </div>

                      {/* Expand icon */}
                      <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center text-green-700 opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
                        <FaExpand className="text-xs" />
                      </div>

                      {/* Category badge */}
                      <div className="absolute top-3 left-3">
                        <span className="bg-green-600/90 text-white text-xs px-2 py-0.5 rounded-full backdrop-blur font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          {img.category}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            </>
          )}
        </div>
      </section>

      {/* ─── Lightbox ──────────────────────────────────── */}
      <AnimatePresence>
        {lightbox !== null && filtered[lightbox] && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[200] flex items-center justify-center lightbox-overlay"
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition z-10 backdrop-blur"
              onClick={closeLightbox}
            >
              <FaTimes />
            </button>

            {/* Counter */}
            <div className="absolute top-5 left-5 text-white/80 text-sm bg-black/30 rounded-full px-4 py-2 backdrop-blur">
              {lightbox + 1} / {filtered.length}
            </div>

            {/* Prev */}
            <motion.button
              whileHover={{ scale: 1.1, x: -3 }}
              whileTap={{ scale: 0.95 }}
              className="absolute left-4 md:left-8 w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition backdrop-blur z-10"
              onClick={(e) => { e.stopPropagation(); prevImg(); }}
            >
              <FaChevronLeft />
            </motion.button>

            {/* Image */}
            <motion.div
              key={lightbox}
              initial={{ opacity: 0, scale: 0.92, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 10 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl max-h-[85vh] mx-16"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filtered[lightbox].src}
                alt={filtered[lightbox].alt}
                className="max-w-full max-h-[78vh] object-contain rounded-2xl shadow-2xl"
              />
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent rounded-b-2xl px-6 py-4">
                <p className="text-white font-bold text-lg">{filtered[lightbox].alt}</p>
                <span className="text-green-400 text-sm font-medium">{filtered[lightbox].category}</span>
              </div>
            </motion.div>

            {/* Next */}
            <motion.button
              whileHover={{ scale: 1.1, x: 3 }}
              whileTap={{ scale: 0.95 }}
              className="absolute right-4 md:right-8 w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition backdrop-blur z-10"
              onClick={(e) => { e.stopPropagation(); nextImg(); }}
            >
              <FaChevronRight />
            </motion.button>

            {/* Thumbnail strip */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1.5 px-4 overflow-x-auto">
              {filtered.map((img, i) => (
                <button
                  key={img.id}
                  onClick={(e) => { e.stopPropagation(); setLightbox(i); }}
                  className={`flex-shrink-0 w-12 h-9 rounded-lg overflow-hidden border-2 transition-all ${
                    i === lightbox ? 'border-green-400 scale-110 shadow-lg' : 'border-white/20 opacity-50 hover:opacity-80'
                  }`}
                >
                  <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.div>
  );
};

export default GalleryPage;
