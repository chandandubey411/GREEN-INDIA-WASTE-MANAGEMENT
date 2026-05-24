// src/components/Testimonials.jsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaStar, FaChevronLeft, FaChevronRight, FaQuoteLeft } from 'react-icons/fa';
import { testimonials } from '../data';

const StarRating = ({ rating }) => (
  <div className="flex gap-1">
    {[...Array(5)].map((_, i) => (
      <FaStar key={i} className={i < rating ? 'text-yellow-400' : 'text-gray-200'} size={14} />
    ))}
  </div>
);

const Testimonials = () => {
  const [active, setActive] = useState(0);
  const [dir, setDir] = useState(1);

  const next = () => { setDir(1); setActive((p) => (p + 1) % testimonials.length); };
  const prev = () => { setDir(-1); setActive((p) => (p - 1 + testimonials.length) % testimonials.length); };

  return (
    <section className="py-20 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <div className="w-8 h-0.5 bg-green-500" />
            <span className="text-green-600 text-sm font-semibold tracking-wider uppercase">Testimonials</span>
            <div className="w-8 h-0.5 bg-green-500" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black font-display text-gray-900 mb-4"
          >
            Our Clients <span className="text-green-600">Amazing Reviews</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Featured testimonial */}
          <div className="lg:col-span-2">
            <div className="relative h-full min-h-[320px] overflow-hidden rounded-3xl bg-white border border-green-100 shadow-lg p-8 md:p-10">
              <FaQuoteLeft className="text-6xl text-green-200 mb-6" />
              <AnimatePresence mode="wait" custom={dir}>
                <motion.div
                  key={active}
                  custom={dir}
                  initial={{ opacity: 0, x: dir * 60 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: dir * -60 }}
                  transition={{ duration: 0.4 }}
                >
                  <p className="text-gray-700 text-xl leading-relaxed mb-8 font-light italic">
                    "{testimonials[active].review}"
                  </p>
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonials[active].image}
                      alt={testimonials[active].name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-green-400/40"
                    />
                    <div>
                      <div className="text-gray-900 font-bold text-lg">{testimonials[active].name}</div>
                      <div className="text-gray-400 text-sm mb-1">{testimonials[active].role}</div>
                      <StarRating rating={testimonials[active].rating} />
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Nav */}
              <div className="absolute bottom-8 right-8 flex gap-3">
                <motion.button
                  whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={prev}
                  className="w-10 h-10 rounded-full bg-green-50 border border-green-200 flex items-center justify-center text-green-700 hover:bg-green-100 transition-colors"
                >
                  <FaChevronLeft className="text-sm" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={next}
                  className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center text-white hover:bg-green-700 transition-colors"
                >
                  <FaChevronRight className="text-sm" />
                </motion.button>
              </div>

              {/* Dots */}
              <div className="absolute bottom-10 left-10 flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => { setDir(i > active ? 1 : -1); setActive(i); }}
                    className={`rounded-full transition-all duration-300 ${i === active ? 'w-6 h-2 bg-green-500' : 'w-2 h-2 bg-gray-300'}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Side cards */}
          <div className="flex flex-col gap-4">
            {testimonials.slice(0, 2).map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ scale: 1.02, y: -4 }}
                onClick={() => { setDir(1); setActive(i); }}
                className={`p-5 rounded-2xl border cursor-pointer transition-all duration-300 ${
                  active === i
                    ? 'bg-green-50 border-green-400 shadow-green-sm'
                    : 'bg-white border-green-100 hover:border-green-300'
                }`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <img src={t.image} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <div className="text-gray-900 font-bold text-sm">{t.name}</div>
                    <div className="text-gray-400 text-xs">{t.role}</div>
                  </div>
                  <div className="ml-auto"><StarRating rating={t.rating} /></div>
                </div>
                <p className="text-gray-500 text-sm line-clamp-2">"{t.review}"</p>
              </motion.div>
            ))}

            {/* Rating card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="p-5 rounded-2xl bg-gradient-to-br from-green-600 to-emerald-700 border border-green-400/30 text-center shadow-xl"
            >
              <div className="text-4xl font-black font-display text-white mb-1">4.9★</div>
              <div className="text-white font-semibold mb-1">Overall Rating</div>
              <div className="text-green-200/80 text-sm">Based on 3,400+ reviews</div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
