// src/components/Footer.jsx
import { motion } from 'framer-motion';
import {
  FaLeaf, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube,
  FaTruck, FaRecycle, FaShieldAlt, FaMedal, FaBuilding, FaArrowRight,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const footerLinks = {
  company: [
    { name: 'About Us',        href: '/about' },
    { name: 'Our Mission',     href: '/about' },
    { name: 'How It Works',    href: '/services' },
    { name: 'Careers',         href: '#' },
    { name: 'Blog',            href: '#' },
    { name: 'Partner With Us', href: '/contact' },
  ],
  services: [
    { name: 'E-Waste Management',   href: '/services' },
    { name: 'Plastic Recycling',    href: '/services' },
    { name: 'Dry Waste Collection', href: '/services' },
    { name: 'Organic Waste',        href: '/services' },
    { name: 'Bulk Waste Collection', href: '/services' },
    { name: 'Corporate Solutions',  href: '/services' },
  ],
  legal: [
    { name: 'Privacy Policy',       href: '#' },
    { name: 'Terms & Conditions',   href: '#' },
    { name: 'Refund & Cancellation',href: '#' },
    { name: 'Data Security',        href: '#' },
    { name: 'Compliance',           href: '#' },
  ],
};

const socials = [
  { Icon: FaFacebookF,  href: '#', label: 'Facebook' },
  { Icon: FaInstagram,  href: '#', label: 'Instagram' },
  { Icon: FaLinkedinIn, href: '#', label: 'LinkedIn' },
  { Icon: FaTwitter,    href: '#', label: 'Twitter' },
  { Icon: FaYoutube,    href: '#', label: 'YouTube' },
];

const trustBadges = [
  { icon: FaRecycle,   title: 'Smart\nWaste Collection',    sub: 'AI-powered collection\nand sorting' },
  { icon: FaRecycle,   title: '98% Landfill\nDiversion',      sub: 'We keep waste out\nof landfills' },
  { icon: FaShieldAlt, title: 'Data Secure &\nCompliant',     sub: 'Your data is safe\nwith us' },
  { icon: FaMedal,     title: 'ISO 14001\nCertified',         sub: 'Internationally recognized\nstandards' },
  { icon: FaLeaf,      title: 'Carbon Neutral\nOperations',   sub: 'For a cleaner\ntomorrow' },
];

const FooterLinkItem = ({ link }) => {
  const cls = 'flex items-center gap-2 text-green-200/55 hover:text-green-300 text-sm transition-all duration-200 group py-1';
  const inner = (
    <>
      <FaArrowRight className="text-[8px] opacity-0 group-hover:opacity-100 transition-opacity -ml-1 group-hover:ml-0 text-green-400" />
      {link.name}
    </>
  );
  return (
    <li>
      {link.href.startsWith('/') ? (
        <Link to={link.href} className={cls}>{inner}</Link>
      ) : (
        <a href={link.href} className={cls}>{inner}</a>
      )}
    </li>
  );
};

const Footer = () => {
  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #052e16 0%, #064e3b 40%, #022c22 80%, #020d09 100%)' }}
    >
      {/* Top border glow */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(74,222,128,0.5), transparent)' }} />

      {/* Background leaf decorations */}
      {[
        { top: '5%',  right: '2%',  size: 120, opacity: 0.06 },
        { top: '30%', right: '0%',  size: 160, opacity: 0.05 },
        { top: '60%', right: '3%',  size: 100, opacity: 0.07 },
        { top: '15%', left: '-2%',  size: 90,  opacity: 0.04 },
      ].map((l, i) => (
        <div
          key={i}
          className="absolute pointer-events-none select-none"
          style={{
            top: l.top, right: l.right, left: l.left,
            fontSize: l.size, opacity: l.opacity, color: '#4ade80',
          }}
        >
          🌿
        </div>
      ))}

      {/* Ambient glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(34,197,94,0.07) 0%, transparent 70%)' }} />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(16,185,129,0.06) 0%, transparent 70%)' }} />

      {/* ── Main grid ── */}
      <div className="max-w-screen-xl mx-auto px-4 md:px-6 relative z-10 pt-14 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* ── Brand column ── */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <div className="flex items-center gap-2 mb-5">
              <img src="/logo.png" alt="Green India Logo" className="h-14 md:h-16 object-contain" />
            </div>

            {/* Tagline */}
            <p className="text-green-100/50 text-sm leading-relaxed mb-5 max-w-[220px]">
              Building a cleaner, greener and sustainable India through responsible waste management and smart recycling solutions.
            </p>

            {/* Features list */}
            <div className="space-y-2 mb-6">
              {['Smart Waste Collection', 'Eco-Friendly Recycling Across 120+ Cities', 'Eco-Friendly • Reliable • Responsible'].map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <FaLeaf className="text-green-500 text-[10px] mt-1 flex-shrink-0" />
                  <span className="text-green-200/60 text-xs leading-relaxed">{item}</span>
                </div>
              ))}
            </div>

            {/* Socials */}
            <div className="flex gap-2.5">
              {socials.map(({ Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-9 h-9 rounded-full flex items-center justify-center text-green-300/60 hover:text-green-400 transition-all"
                  style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(74,222,128,0.18)' }}
                >
                  <Icon className="text-xs" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* ── Company links ── */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <FaBuilding className="text-green-500 text-sm" />
              <h4 className="text-white font-bold text-sm uppercase tracking-[0.12em]">Company</h4>
            </div>
            <ul className="space-y-0.5">
              {footerLinks.company.map(link => <FooterLinkItem key={link.name} link={link} />)}
            </ul>
          </div>

          {/* ── Services links ── */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <FaRecycle className="text-green-500 text-sm" />
              <h4 className="text-white font-bold text-sm uppercase tracking-[0.12em]">Services</h4>
            </div>
            <ul className="space-y-0.5">
              {footerLinks.services.map(link => <FooterLinkItem key={link.name} link={link} />)}
            </ul>
          </div>

          {/* ── Legal links ── */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <FaShieldAlt className="text-green-500 text-sm" />
              <h4 className="text-white font-bold text-sm uppercase tracking-[0.12em]">Legal</h4>
            </div>
            <ul className="space-y-0.5">
              {footerLinks.legal.map(link => <FooterLinkItem key={link.name} link={link} />)}
            </ul>
          </div>
        </div>

        {/* ── Trust badges strip ── */}
        <div
          className="rounded-2xl border border-white/10 mb-6 overflow-hidden"
          style={{ background: 'rgba(255,255,255,0.03)' }}
        >
          <div className="grid grid-cols-2 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {trustBadges.map((badge, i) => {
              const Icon = badge.icon;
              return (
                <div key={i} className="flex items-start gap-3 px-5 py-5">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: 'rgba(34,197,94,0.15)', border: '1px solid rgba(74,222,128,0.25)' }}
                  >
                    <Icon className="text-green-400 text-sm" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-xs leading-tight whitespace-pre-line">{badge.title}</p>
                    <p className="text-green-200/40 text-[10px] leading-tight mt-1 whitespace-pre-line">{badge.sub}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Bottom copyright bar ── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-white/10">
          <div className="flex items-center gap-2">
            <div
              className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{ background: 'rgba(22,163,74,0.3)', border: '1px solid rgba(74,222,128,0.3)' }}
            >
              <FaLeaf className="text-green-400 text-xs" />
            </div>
            <div>
              <p className="text-green-200/40 text-xs">
                © 2025 GreenIndia Waste Management.
              </p>
              <p className="text-green-200/30 text-[10px]">All rights reserved.</p>
            </div>
          </div>

          <div className="text-center">
            <div className="flex items-center gap-1.5 justify-center mb-0.5">
              <FaLeaf className="text-green-500 text-[10px]" />
              <span className="text-green-200/40 text-xs">Proudly Made in India 🇮🇳</span>
            </div>
            <p className="text-green-500/70 text-[11px] font-semibold">Let's build a greener India together.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
