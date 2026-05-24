import { motion } from 'framer-motion';
import { FaLeaf, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube, FaArrowUp, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const footerLinks = {
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Recycling Unit', href: '/recycling' },
    { name: 'Contact Us', href: '/contact' },
  ],
  services: [
    { name: 'E-Waste Management', href: '/services' },
    { name: 'IT Asset Disposal', href: '/services' },
    { name: 'Data Destruction', href: '/services' },
    { name: 'EPR Compliance', href: '/services' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'E-Waste Rules 2016', href: '#' },
    { name: 'EPR Guidelines', href: '#' },
  ],
};

const socials = [
  { Icon: FaFacebookF, href: '#', label: 'Facebook' },
  { Icon: FaInstagram, href: '#', label: 'Instagram' },
  { Icon: FaLinkedinIn, href: '#', label: 'LinkedIn' },
  { Icon: FaYoutube, href: '#', label: 'YouTube' },
  { Icon: FaTwitter, href: '#', label: 'Twitter' },
];

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative bg-gradient-to-br from-green-950 via-green-900 to-emerald-950 pt-20 overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-green-400/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-emerald-300/5 rounded-full blur-3xl" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-400/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">

        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center shadow-xl shadow-green-400/20">
                <FaLeaf className="text-white text-xl" />
              </div>
              <div>
                <div className="text-white font-bold text-xl font-display">
                  Green<span className="text-green-400">India</span>™
                </div>
                <p className="text-green-400/70 text-xs">Waste Management</p>
              </div>
            </div>
            <p className="text-green-100/60 leading-relaxed text-sm mb-6 max-w-xs">
              India's most trusted certified e-waste recycler. Turning waste into resources, building a cleaner & greener future.
            </p>

            {/* Contact snippets */}
            <div className="space-y-2 mb-6">
              <a href="tel:+919650380888" className="flex items-center gap-2 text-green-300/80 hover:text-green-300 text-sm transition-colors">
                <FaPhone className="text-xs" /> +91 9650380888
              </a>
              <a href="mailto:info@greenindiawm.com" className="flex items-center gap-2 text-green-300/80 hover:text-green-300 text-sm transition-colors">
                <FaEnvelope className="text-xs" /> info@greenindiawm.com
              </a>
              <div className="flex items-start gap-2 text-green-300/80 text-sm">
                <FaMapMarkerAlt className="text-xs mt-1 flex-shrink-0" /> Springboard Business Hub, Sec-18, Gurgaon — 122001
              </div>
            </div>

            {/* Socials */}
            <div className="flex gap-2">
              {socials.map(({ Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-9 h-9 rounded-full bg-white/5 border border-green-400/20 flex items-center justify-center text-green-300/70 hover:text-green-400 hover:border-green-400/60 hover:bg-green-400/10 transition-all"
                >
                  <Icon className="text-xs" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          {[
            { title: 'Company', links: footerLinks.company },
            { title: 'Services', links: footerLinks.services },
            { title: 'Legal', links: footerLinks.legal },
          ].map(({ title, links }) => (
            <div key={title}>
              <h4 className="text-white font-bold font-display mb-5 text-sm uppercase tracking-wider">{title}</h4>
              <ul className="space-y-3">
                {links.map(link => (
                  <li key={link.name}>
                    {link.href.startsWith('/') ? (
                      <Link to={link.href} className="text-green-200/60 hover:text-green-400 text-sm transition-colors flex items-center gap-2 group">
                        <span className="w-1 h-1 rounded-full bg-green-500/0 group-hover:bg-green-400 transition-all" />
                        {link.name}
                      </Link>
                    ) : (
                      <a href={link.href} className="text-green-200/60 hover:text-green-400 text-sm transition-colors flex items-center gap-2 group">
                        <span className="w-1 h-1 rounded-full bg-green-500/0 group-hover:bg-green-400 transition-all" />
                        {link.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Certifications strip */}
        <div className="border-t border-green-400/10 py-6 flex flex-wrap items-center justify-center gap-4 mb-0">
          {['ISO 9001:2015', 'ISO 14001:2015', 'MSME Certified', 'HSPCB Approved', 'GST Registered', 'Swachh Bharat'].map((cert) => (
            <span key={cert} className="text-green-300/50 text-xs border border-green-400/15 rounded-full px-3 py-1">{cert}</span>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-green-400/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-green-200/40 text-xs text-center sm:text-left">
            © 2026 Green India Waste Management Pvt. Ltd. · www.greenindiawm.com · All rights reserved.
          </p>
          <p className="text-green-200/30 text-xs">🌱 100% Compliant · Certified Recycler · Building a Greener India</p>
        </div>
      </div>

      {/* Back to top */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="absolute bottom-8 right-6 md:right-10 w-11 h-11 rounded-full bg-green-500 flex items-center justify-center text-white shadow-xl shadow-green-500/30 hover:bg-green-600 transition-colors z-20"
      >
        <FaArrowUp className="text-sm" />
      </motion.button>
    </footer>
  );
};

export default Footer;
