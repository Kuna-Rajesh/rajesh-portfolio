'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import SectionTitle from '@/components/ui/SectionTitle';

const highlights = [
  { icon: '⚡', stat: '70%',   desc: 'faster APIs',          sub: 'Spring Boot & JPA' },
  { icon: '🗄️', stat: '100+',  desc: 'PL/SQL procedures',    sub: '50K+ daily transactions' },
  { icon: '🤖', stat: '30%',   desc: 'query throughput gain', sub: 'Oracle AI Agent' },
  { icon: '🌍', stat: '4+',    desc: 'zero-downtime releases',sub: 'Onsite — Johannesburg' },
];

const bullets = [
  'Optimized 5+ core insurance & financial modules — achieved 70% API response time reduction',
  'Engineered 100+ high-performance PL/SQL stored procedures, packages, functions, and triggers in Oracle DB handling 50K+ daily transactions',
  'Architected scalable Spring Boot microservices & PL/SQL query optimizations, reducing database latency and locks',
  'Built Oracle Database AI Agent using Spring AI for natural language schema querying and PL/SQL diagnostic insights',
  'Led zero-downtime deployments in Johannesburg as Onsite Technical Lead, cutting defect rates by 35%',
  'Won Star of the Month for resolving a critical production database & application outage affecting 5,000+ policyholders',
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="experience" className="section-padding" style={{ background: 'var(--bg-base)' }}>
      <div className="section-inner">
        <SectionTitle tag="Career" title="Work" highlight="Experience" />

        <div ref={ref} className="max-w-3xl mx-auto">
          {/* Company card */}
          <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}
            className="rounded-2xl overflow-hidden"
            style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-color)' }}>

            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-6"
              style={{ borderBottom: '1px solid var(--border-color)', background: 'var(--bg-elevated)' }}>
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center text-sm font-black text-white flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg,#6366f1,#8b5cf6)' }}>TCS</div>
                <div>
                  <h3 className="font-bold" style={{ color: 'var(--text-primary)' }}>Tata Consultancy Services</h3>
                  <p className="text-sm gradient-text font-semibold">System Engineer · Java Backend &amp; PL/SQL Developer</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 sm:justify-end text-xs" style={{ color: 'var(--text-muted)' }}>
                <span className="px-2.5 py-1 rounded-full font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">● Current</span>
                <span className="px-2.5 py-1 rounded-full" style={{ background: 'var(--bg-base)', border: '1px solid var(--border-color)' }}>Jun 2023 – Present</span>
                <span className="px-2.5 py-1 rounded-full" style={{ background: 'var(--bg-base)', border: '1px solid var(--border-color)' }}>Johannesburg, SA</span>
              </div>
            </div>

            {/* Key metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-px" style={{ background: 'var(--border-color)' }}>
              {highlights.map(({ icon, stat, desc, sub }) => (
                <div key={desc} className="p-4 text-center" style={{ background: 'var(--bg-surface)' }}>
                  <div className="text-2xl mb-1">{icon}</div>
                  <div className="text-xl font-black gradient-text">{stat}</div>
                  <div className="text-xs font-semibold mt-0.5" style={{ color: 'var(--text-primary)' }}>{desc}</div>
                  <div className="text-[10px] mt-0.5" style={{ color: 'var(--text-muted)' }}>{sub}</div>
                </div>
              ))}
            </div>

            {/* Bullets */}
            <div className="p-6">
              <ul className="space-y-3">
                {bullets.map((b, i) => (
                  <motion.li key={i}
                    initial={{ opacity: 0, x: -12 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.06 * i + 0.3 }}
                    className="flex items-start gap-3 text-sm" style={{ color: 'var(--text-secondary)' }}>
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#6366f1' }} />
                    {b}
                  </motion.li>
                ))}
              </ul>

              {/* Awards */}
              <div className="flex flex-wrap gap-2 mt-5 pt-5" style={{ borderTop: '1px solid var(--border-color)' }}>
                {[
                  { text: '⭐ Star of the Month', c: '#f59e0b' },
                  { text: '🏆 Spot on the Team', c: '#6366f1' },
                ].map(({ text, c }) => (
                  <span key={text} className="text-xs font-semibold px-3 py-1.5 rounded-full"
                    style={{ color: c, background: `${c}12`, border: `1px solid ${c}30` }}>{text}</span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
