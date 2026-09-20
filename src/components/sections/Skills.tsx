'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import SectionTitle from '@/components/ui/SectionTitle';

const categories = [
  {
    title: 'Core Backend & Development', icon: '⚙️', color: '#6366f1',
    skills: ['Java 8/17/21', 'Spring Boot 3', 'PL/SQL Developer', 'Oracle PL/SQL', 'Spring Security', 'Spring MVC', 'JPA/Hibernate', 'Spring WebFlux', 'REST API', 'Multithreading'],
  },
  {
    title: 'Architecture & AI', icon: '🏗️', color: '#8b5cf6',
    skills: ['Microservices', 'Apache Kafka', 'gRPC + Protobuf', 'Spring AI', 'AI Agents', 'Spring Cloud', 'JWT + OAuth 2.0', 'RBAC', 'GitHub Copilot'],
  },
  {
    title: 'Databases & PL/SQL', icon: '🗄️', color: '#06b6d4',
    skills: ['Oracle DB', 'PL/SQL Stored Procedures', 'PL/SQL Packages & Triggers', 'PostgreSQL', 'Redis', 'PL/SQL Query Optimization', 'Indexes & Cursors', 'Schema Design'],
  },
  {
    title: 'DevOps & Cloud', icon: '☁️', color: '#10b981',
    skills: ['Docker', 'Jenkins', 'AWS', 'GCP', 'Git', 'Postman', 'Agile / JIRA'],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="skills" className="section-padding" style={{ background: 'var(--bg-surface)' }}>
      <div className="section-inner">
        <SectionTitle tag="Technical Arsenal" title="Skills &" highlight="Expertise" />

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {categories.map(({ title, icon, color, skills }, ci) => (
            <motion.div key={title}
              initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 * ci, duration: 0.5 }}
              whileHover={{ y: -2, boxShadow: `0 12px 40px ${color}12` }}
              className="card p-5 rounded-2xl transition-all duration-300">

              <div className="flex items-center gap-3 mb-4">
                <span className="text-xl">{icon}</span>
                <span className="font-bold text-sm" style={{ color: 'var(--text-primary)' }}>{title}</span>
                <span className="ml-auto text-[10px] px-2 py-0.5 rounded-full"
                  style={{ background: `${color}10`, color, border: `1px solid ${color}20` }}>
                  {skills.length}
                </span>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {skills.map((skill, si) => (
                  <motion.span key={skill}
                    initial={{ opacity: 0, scale: 0.8 }} animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.03 * si + 0.15 * ci }}
                    whileHover={{ scale: 1.08 }}
                    className="text-xs px-2.5 py-1 rounded-full cursor-default transition-colors duration-150"
                    style={{ color, background: `${color}0d`, border: `1px solid ${color}25` }}>
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
