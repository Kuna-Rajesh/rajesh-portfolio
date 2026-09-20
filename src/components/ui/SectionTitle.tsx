'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface Props { tag: string; title: string; highlight?: string; subtitle?: string; }

export default function SectionTitle({ tag, title, highlight, subtitle }: Props) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}
      className="mb-14 text-center">

      <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase mb-4"
        style={{ color: '#6366f1' }}>
        — {tag} —
      </span>

      <h2 className="text-4xl sm:text-5xl font-black leading-tight" style={{ color: 'var(--text-primary)' }}>
        {title} {highlight && <span className="gradient-text">{highlight}</span>}
      </h2>

      {subtitle && (
        <p className="mt-4 text-sm sm:text-base max-w-lg mx-auto leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
