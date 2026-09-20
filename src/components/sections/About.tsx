'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import SectionTitle from '@/components/ui/SectionTitle';
import { Mail, Phone, MapPin, Globe, GitFork } from 'lucide-react';

const facts = [
  { value: '3+', label: 'Years at TCS', color: '#6366f1' },
  { value: '70%', label: 'API Speed Boost', color: '#8b5cf6' },
  { value: '50K+', label: 'Daily Transactions', color: '#06b6d4' },
  { value: '4+', label: 'Zero-Downtime Releases', color: '#10b981' },
];

const contacts = [
  { icon: Mail, label: 'Email', value: 'rajeshkuna70@gmail.com', href: 'mailto:rajeshkuna70@gmail.com' },
  { icon: Phone, label: 'Phone', value: '+91 9553941055', href: 'tel:+919553941055' },
  { icon: MapPin, label: 'Location', value: 'Hyderabad, India', href: null },
  { icon: Globe, label: 'LinkedIn', value: 'kuna-rajesh', href: 'https://linkedin.com/in/kuna-rajesh' },
  { icon: GitFork, label: 'GitHub', value: 'kuna-rajesh', href: 'https://github.com/kuna-rajesh' },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="about" className="section-padding" style={{ background: 'var(--bg-surface)' }}>
      <div className="section-inner">
        <SectionTitle tag="About Me" title="Building Systems," highlight="Driving Impact" />

        <div ref={ref} className="max-w-2xl mx-auto text-center mb-12">
          <motion.p initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}
            className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            Java Backend &amp; PL/SQL Developer with 3+ years at TCS — growing from offshore contributor to
            <strong style={{ color: 'var(--text-primary)' }}> onsite technical lead</strong> in Johannesburg for
            a Banking &amp; Insurance client. Specialized in Spring Boot microservices, Oracle PL/SQL stored procedures &amp; packages, database query optimization, and GenAI.
          </motion.p>

          <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-2 mt-5">
            {[{ text: '⭐ Star of the Month', c: '#10b981', bg: 'rgba(16,185,129,0.08)' },
            { text: '🏆 Spot on the Team', c: '#6366f1', bg: 'rgba(99,102,241,0.08)' }].map(({ text, c, bg }) => (
              <span key={text} className="text-xs font-semibold px-3 py-1.5 rounded-full"
                style={{ color: c, background: bg, border: `1px solid ${c}25` }}>{text}</span>
            ))}
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          {facts.map(({ value, label, color }, i) => (
            <motion.div key={label}
              initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.08 * i + 0.1 }}
              className="text-center p-5 rounded-2xl card">
              <div className="text-3xl font-black mb-1" style={{ color }}>{value}</div>
              <div className="text-xs" style={{ color: 'var(--text-muted)' }}>{label}</div>
            </motion.div>
          ))}
        </div>

        {/* Contact chips */}
        <motion.div initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.4 }}
          className="flex flex-wrap justify-center gap-3">
          {contacts.map(({ icon: Icon, label, value, href }) => (
            <div key={label}>
              {href ? (
                <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium hover:border-[#6366f1]/40 transition-all"
                  style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border-color)', color: 'var(--text-secondary)' }}>
                  <Icon className="w-3.5 h-3.5" style={{ color: '#6366f1' }} /> {value}
                </a>
              ) : (
                <span className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium"
                  style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border-color)', color: 'var(--text-secondary)' }}>
                  <Icon className="w-3.5 h-3.5" style={{ color: '#6366f1' }} /> {value}
                </span>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
