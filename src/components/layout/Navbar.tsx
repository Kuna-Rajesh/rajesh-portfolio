'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

const links = [
  { label: 'Home',       href: '#home' },
  { label: 'About',      href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Education',  href: '#education' },
  { label: 'Contact',    href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [open, setOpen]           = useState(false);
  const [active, setActive]       = useState('home');

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); }),
      { threshold: 0.35 }
    );
    links.forEach(({ href }) => { const el = document.querySelector(href); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -64, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-8 pt-3"
      >
        <div
          className="w-full max-w-[1100px] mx-auto px-6 flex items-center justify-between h-14 rounded-2xl transition-all duration-300"
          style={{
            background:           scrolled ? 'var(--nav-bg)' : 'rgba(14, 14, 26, 0.75)',
            backdropFilter:       'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            border:               '1px solid var(--border-color)',
            boxShadow:            scrolled ? '0 10px 30px rgba(0,0,0,0.3)' : '0 4px 20px rgba(0,0,0,0.2)',
          }}
        >

          {/* Left: Brand Logo */}
          <motion.a href="#home" whileHover={{ scale: 1.04 }} className="flex items-center gap-2.5 flex-shrink-0">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-black flex-shrink-0"
              style={{ background: 'linear-gradient(135deg,#6366f1,#8b5cf6)' }}>
              RK
            </div>
            <span className="font-bold text-sm hidden sm:block tracking-tight" style={{ color: 'var(--text-primary)' }}>
              Rajesh <span className="gradient-text">Kuna</span>
            </span>
          </motion.a>

          {/* Center: Navigation Links */}
          <div className="hidden lg:flex items-center gap-7">
            {links.map(({ label, href }) => {
              const isActive = active === href.replace('#', '');
              return (
                <motion.a key={href} href={href} whileHover={{ y: -1 }}
                  className="text-xs font-semibold tracking-wide transition-colors duration-200 uppercase"
                  style={{ color: isActive ? '#6366f1' : 'var(--text-secondary)' }}>
                  {label}
                </motion.a>
              );
            })}
          </div>

          {/* Right: Theme Toggle & Resume — Flush to Top Right */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <ThemeToggle />
            <motion.a href="/Rajesh_Kuna_Resume.pdf" download whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}
              className="hidden sm:flex items-center gap-1.5 px-4 py-1.5 rounded-xl text-xs font-bold text-white shadow-sm flex-shrink-0 whitespace-nowrap"
              style={{ background: 'linear-gradient(135deg,#6366f1,#8b5cf6)' }}>
              <Download className="w-3.5 h-3.5" /> Resume
            </motion.a>
            <button className="lg:hidden p-1.5 rounded-lg" style={{ color: 'var(--text-muted)' }}
              onClick={() => setOpen(!open)} aria-label="menu">
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div key="mob" initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="fixed top-20 inset-x-4 z-40 border rounded-2xl glass p-3"
            style={{ borderColor: 'var(--border-color)' }}>
            <div className="flex flex-col gap-1">
              {links.map(({ label, href }) => (
                <a key={href} href={href} onClick={() => setOpen(false)}
                  className="px-4 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wide hover:bg-white/5 transition-colors"
                  style={{ color: 'var(--text-primary)' }}>
                  {label}
                </a>
              ))}
              <a href="/Rajesh_Kuna_Resume.pdf" download
                className="mt-2 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-white"
                style={{ background: 'linear-gradient(135deg,#6366f1,#8b5cf6)' }}>
                <Download className="w-3.5 h-3.5" /> Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
