// src/components/Blog.jsx
import { motion } from 'framer-motion';
import { FaArrowRight, FaClock, FaTag } from 'react-icons/fa';
import { blogs } from '../data';

const categoryColors = {
  Technology: '#3b82f6',
  Recycling: '#22c55e',
  Lifestyle: '#f59e0b',
};

const BlogCard = ({ post, index }) => (
  <motion.article
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.12 }}
    whileHover={{ y: -8 }}
    className="group bg-slate-900 border border-white/10 rounded-2xl overflow-hidden hover:border-primary-500/30 transition-all duration-500 cursor-pointer"
  >
    {/* Image */}
    <div className="relative h-52 overflow-hidden">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
      {/* Category Badge */}
      <div
        className="absolute top-4 left-4 px-3 py-1 rounded-full text-white text-xs font-semibold"
        style={{ backgroundColor: `${categoryColors[post.category]}cc` }}
      >
        <FaTag className="inline mr-1 text-xs" />
        {post.category}
      </div>
    </div>

    {/* Content */}
    <div className="p-6">
      <div className="flex items-center gap-4 text-white/40 text-xs mb-3">
        <span>{post.date}</span>
        <span>•</span>
        <span className="flex items-center gap-1">
          <FaClock className="text-xs" />
          {post.readTime}
        </span>
      </div>

      <h3 className="text-white font-bold text-lg font-display mb-3 leading-snug group-hover:text-primary-400 transition-colors line-clamp-2">
        {post.title}
      </h3>
      <p className="text-white/60 text-sm leading-relaxed mb-5 line-clamp-3">
        {post.excerpt}
      </p>

      <div className="flex items-center gap-2 text-primary-400 font-semibold text-sm hover:text-primary-300 transition-colors">
        Read Article
        <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
      </div>
    </div>
  </motion.article>
);

const Blog = () => {
  return (
    <section className="section-padding bg-slate-950">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-4"
            >
              <div className="w-8 h-0.5 bg-primary-500" />
              <span className="text-primary-400 text-sm font-semibold tracking-wider uppercase">Latest News</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-black font-display text-white"
            >
              Latest <span className="text-gradient">News & Articles</span>
            </motion.h2>
          </div>

          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-outline whitespace-nowrap self-start md:self-auto"
          >
            View All Articles
          </motion.button>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((post, i) => (
            <BlogCard key={post.id} post={post} index={i} />
          ))}
        </div>

        {/* Newsletter CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 p-8 md:p-10 rounded-2xl border border-white/10 bg-slate-900/50"
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1">
              <h3 className="text-2xl font-bold font-display text-white mb-2">
                Stay Updated on Green News 🌱
              </h3>
              <p className="text-white/60">
                Get weekly eco tips, recycling guides, and sustainability news straight to your inbox.
              </p>
            </div>
            <div className="flex gap-3 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-primary-500 transition-colors placeholder-white/30"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary whitespace-nowrap px-5 py-3"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
