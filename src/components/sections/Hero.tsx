'use client';

import { motion, Variants } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ArrowDown, GitFork, Link2, Mail, Bot, Download, Sparkles } from 'lucide-react';

const roles = ['Java Backend & PL/SQL Developer', 'Spring Boot Architect', 'Oracle PL/SQL Specialist', 'AI Integration Engineer', 'Microservices Expert'];

const particles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  size: 2 + Math.random() * 3,
  x: Math.random() * 100,
  delay: Math.random() * 8,
  duration: 8 + Math.random() * 12,
}));

function Particles() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full opacity-25"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            bottom: '-10px',
            background: p.id % 2 === 0 ? '#6366f1' : '#8b5cf6',
            animation: `particle-rise ${p.duration}s ${p.delay}s linear infinite`,
          }}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const target = roles[roleIdx];
    let t: ReturnType<typeof setTimeout>;
    if (typing) {
      t = displayed.length < target.length
        ? setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 60)
        : setTimeout(() => setTyping(false), 2000);
    } else {
      t = displayed.length > 0
        ? setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30)
        : (() => { setRoleIdx((i) => (i + 1) % roles.length); setTyping(true); return setTimeout(() => { }, 0); })();
    }
    return () => clearTimeout(t);
  }, [displayed, typing, roleIdx]);

  const container: Variants = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden py-28"
      style={{ background: 'var(--bg-base)' }}>

      {/* Calm ambient lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[600px] h-[600px] rounded-full blur-[140px] opacity-[0.08] animate-drift"
          style={{ background: '#6366f1', top: '15%', left: '50%', transform: 'translateX(-50%)' }} />
      </div>

      <Particles />

      {/* ── Centered content ── */}
      <div className="relative z-10 section-inner flex flex-col items-center text-center w-full">
        <motion.div variants={container} initial="hidden" animate="visible" className="flex flex-col items-center max-w-3xl">

          {/* Available pill */}
          <motion.div variants={item} className="mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold"
              style={{ background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.2)', color: '#6366f1' }}>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Available for Senior Java Backend &amp; Architecture Roles
            </span>
          </motion.div>

          {/* Centered Profile Avatar */}
          <motion.div variants={item} className="mb-8 relative">
            <div className="relative">
              <div className="absolute inset-0 rounded-full animate-spin-slow"
                style={{ background: 'conic-gradient(from 0deg,#6366f1,#8b5cf6,#06b6d4,#6366f1)', padding: '2px', margin: '-4px' }} />
              <div className="relative z-10 rounded-full overflow-hidden"
                style={{ width: '160px', height: '160px', boxShadow: '0 0 40px rgba(99,102,241,0.25)' }}>
                <img src="/profile.png" alt="Rajesh Kuna"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
              </div>
            </div>
          </motion.div>

          {/* Name */}
          <motion.div variants={item} className="mb-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight" style={{ color: 'var(--text-primary)' }}>
              Rajesh <span className="gradient-text">Kuna</span>
            </h1>
          </motion.div>

          {/* Typewriter role */}
          <motion.div variants={item} className="flex items-center justify-center gap-2 h-7 mb-6">
            <Sparkles className="w-4 h-4" style={{ color: '#6366f1' }} />
            <span className="text-base sm:text-lg font-semibold" style={{ color: 'var(--text-secondary)' }}>
              {displayed}
            </span>
            <span className="w-0.5 h-5 rounded-full animate-blink" style={{ background: '#6366f1' }} />
          </motion.div>

          {/* Bio */}
          <motion.p variants={item} className="text-sm sm:text-base leading-relaxed max-w-2xl mb-12" style={{ color: 'var(--text-secondary)' }}>
            System Engineer, Java Backend &amp; PL/SQL Developer at <strong style={{ color: 'var(--text-primary)' }}>TCS</strong> with 3+ years of experience building high-scale microservices, Spring Boot architectures, complex Oracle PL/SQL stored procedures, and AI Agents. Led onsite insurance transformations in Johannesburg, delivering <span className="gradient-text font-semibold">70% response time reductions</span> for 50K+ daily transactions.
          </motion.p>

          {/* Metrics Row — spacious padding */}
          <motion.div variants={item} className="grid grid-cols-3 gap-6 p-6 rounded-2xl mb-12 w-full max-w-xl"
            style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-color)' }}>
            {[
              { value: '3+ Yrs', label: 'TCS Experience' },
              { value: '70%', label: 'API Speedup' },
              { value: '50K+', label: 'Daily TXNs' },
            ].map(({ value, label }) => (
              <div key={label} className="flex flex-col items-center">
                <span className="text-2xl sm:text-3xl font-black gradient-text mb-1">{value}</span>
                <span className="text-xs font-medium" style={{ color: 'var(--text-muted)' }}>{label}</span>
              </div>
            ))}
          </motion.div>

          {/* Action Buttons — generous spacing, clean wrap */}
          <motion.div variants={item} className="flex flex-wrap justify-center items-center gap-4 mb-10">
            <motion.a href="#projects" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
              className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-xs font-bold text-white uppercase tracking-wider"
              style={{ background: 'linear-gradient(135deg,#6366f1,#8b5cf6)', boxShadow: '0 0 24px rgba(99,102,241,0.3)' }}>
              View Featured Work <ArrowDown className="w-4 h-4" />
            </motion.a>

            <motion.a href="https://rajesh-ai-assistant.vercel.app" target="_blank" rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
              className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-xs font-bold text-white uppercase tracking-wider"
              style={{ background: 'linear-gradient(135deg,#06b6d4,#6366f1)', boxShadow: '0 0 24px rgba(6,182,212,0.3)' }}>
              <Bot className="w-4 h-4" /> Try Rajesh-AI Assistant
            </motion.a>

            <motion.a href="/Rajesh_Kuna_Resume.pdf" download whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
              className="flex items-center gap-2 px-5 py-3.5 rounded-xl text-xs font-semibold uppercase tracking-wider"
              style={{ color: 'var(--text-primary)', background: 'var(--bg-elevated)', border: '1px solid var(--border-color)' }}>
              <Download className="w-4 h-4" /> Download CV
            </motion.a>
          </motion.div>

          {/* Social icons */}
          <motion.div variants={item} className="flex items-center justify-center gap-4">
            {[
              { href: 'https://github.com/kuna-rajesh', icon: GitFork, label: 'GitHub' },
              { href: 'https://linkedin.com/in/kuna-rajesh', icon: Link2, label: 'LinkedIn' },
              { href: 'mailto:rajeshkuna70@gmail.com', icon: Mail, label: 'Email' },
            ].map(({ href, icon: Icon, label }) => (
              <motion.a key={label} href={href} aria-label={label}
                target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                whileHover={{ scale: 1.12, y: -2 }} whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border-color)', color: 'var(--text-secondary)' }}>
                <Icon className="w-4 h-4" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
