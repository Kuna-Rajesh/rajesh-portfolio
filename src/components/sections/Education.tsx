'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import SectionTitle from '@/components/ui/SectionTitle';

const education = [
  {
    icon: '🎓',
    degree: 'B.Tech in Computer Science & Engineering',
    school: 'SRKR Engineering College',
    period: '2019 – 2023',
    result: 'CGPA 8.72',
    color: '#6366f1',
    details: 'Specialized in Software Engineering, Data Structures, Relational Databases (RDBMS) & PL/SQL, and Distributed Systems.',
  },
  {
    icon: '📚',
    degree: 'Class XII (MPC)',
    school: 'Narayana Junior College',
    period: '2017 – 2019',
    result: '100% Score',
    color: '#8b5cf6',
    details: 'Mathematics, Physics, and Chemistry core. Top state board performance.',
  },
];

const certs = [
  { icon: '☁️', name: 'Google Cloud Facilitator', issuer: 'Google Cloud', year: '2023', color: '#4285f4' },
  { icon: '🟠', name: 'AWS Cloud Foundations', issuer: 'Amazon Web Services', year: '2023', color: '#ff9900' },
  { icon: '🤖', name: 'AWS Machine Learning Specialty', issuer: 'Amazon Web Services', year: '2023', color: '#10b981' },
];

const awards = [
  { icon: '⭐', title: 'Star of the Month Award', org: 'Tata Consultancy Services (TCS)', desc: 'Resolved critical production outage affecting 5,000+ policyholders.', color: '#f59e0b' },
  { icon: '🏆', title: 'Spot on the Team Award', org: 'Tata Consultancy Services (TCS)', desc: 'Led 4+ zero-downtime production microservices releases in Johannesburg.', color: '#6366f1' },
];

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="education" className="section-padding" style={{ background: 'var(--bg-surface)' }}>
      <div className="section-inner">
        <SectionTitle
          tag="Qualifications"
          title="Education &"
          highlight="Certifications"
          subtitle="Academic credentials, cloud certifications, and corporate awards."
        />

        <div ref={ref} className="w-full max-w-4xl mx-auto flex flex-col gap-10 sm:gap-12 md:gap-14">
          {/* Block 1: Education */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 pb-3 border-b border-white/5">
              <span className="text-2xl">🎓</span>
              <h3 className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>Education History</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {education.map((e, i) => (
                <motion.div
                  key={e.degree}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.1 * i }}
                  className="p-6 rounded-2xl card flex flex-col justify-between"
                  style={{ borderLeft: `4px solid ${e.color}` }}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span
                        className="text-xs font-bold px-3 py-1 rounded-full"
                        style={{ color: e.color, background: `${e.color}15` }}
                      >
                        {e.result}
                      </span>
                      <span className="text-xs" style={{ color: 'var(--text-muted)' }}>{e.period}</span>
                    </div>
                    <h4 className="text-base font-bold mb-1" style={{ color: 'var(--text-primary)' }}>{e.degree}</h4>
                    <p className="text-xs font-semibold gradient-text mb-2">{e.school}</p>
                    <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{e.details}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Block 2: Certifications */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 pb-3 border-b border-white/5">
              <span className="text-2xl">📋</span>
              <h3 className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>Cloud Certifications</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {certs.map((c, i) => (
                <motion.div
                  key={c.name}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.1 * i + 0.2 }}
                  className="p-5 rounded-2xl card flex items-center gap-3.5"
                >
                  <span className="text-2xl flex-shrink-0">{c.icon}</span>
                  <div>
                    <h4 className="text-xs font-bold" style={{ color: 'var(--text-primary)' }}>{c.name}</h4>
                    <p className="text-[11px] font-medium" style={{ color: 'var(--text-muted)' }}>{c.issuer} · {c.year}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Block 3: Awards */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 pb-3 border-b border-white/5">
              <span className="text-2xl">🏅</span>
              <h3 className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>Honors &amp; Corporate Recognition</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {awards.map((a, i) => (
                <motion.div
                  key={a.title}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.1 * i + 0.3 }}
                  className="p-6 rounded-2xl card"
                  style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border-color)' }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{a.icon}</span>
                    <div>
                      <h4 className="text-base font-bold" style={{ color: a.color }}>{a.title}</h4>
                      <p className="text-xs font-medium" style={{ color: 'var(--text-muted)' }}>{a.org}</p>
                    </div>
                  </div>
                  <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{a.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
