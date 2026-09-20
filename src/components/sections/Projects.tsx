'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import SectionTitle from '@/components/ui/SectionTitle';
import { GitFork, ExternalLink, Bot } from 'lucide-react';

const projects = [
  {
    id: 'omnisaina',
    name: 'OmniSaina — AI Food',
    category: 'Enterprise Microservices & GenAI',
    desc: 'Distributed multi-vendor food aggregator platform engineered with Spring Boot 3, Spring WebFlux, and Spring AI. Implements scatter-gather pattern for real-time menu aggregation across multiple vendors with automated nutrition analytics.',
    link: 'https://github.com/kuna-rajesh',
    linkText: 'GitHub Repo',
    icon: '🍱',
    media: { type: 'video', url: '/omnisaina/demo.mp4' },
    metrics: [
      { icon: '⚡', value: '45%', label: 'Latency Cut', sub: 'Spring WebFlux' },
      { icon: '🛡️', value: '99.9%', label: 'SLA Uptime', sub: 'Spring Cloud Mesh' },
      { icon: '🚀', value: '30%', label: 'Faster Serial.', sub: 'gRPC & Protobuf' },
      { icon: '📡', value: 'Real-time', label: 'Streaming', sub: 'Apache Kafka' },
    ],
    bullets: [
      'Saina Bot — Integrated Spring AI & OpenAI for conversational food ordering',
      'Stateless OAuth 2.0 / JWT auth server with fine-grained RBAC',
      'Spring Cloud Gateway API router with Eureka discovery & circuit breaker',
      'Engineered Oracle PL/SQL stored procedures & batch routines for order processing',
    ],
    stack: ['Java 21', 'Spring Boot 3', 'Oracle PL/SQL', 'Spring AI', 'Kafka', 'gRPC', 'PostgreSQL'],
  },
  {
    id: 'rajesh-ai-assistant',
    name: 'Rajesh-AI Assistant',
    category: 'AI Portfolio Agent',
    desc: 'An interactive AI assistant built specifically for recruiters and hiring managers to query Rajesh’s experience, PL/SQL developer background, project architecture, and tech stack in real-time.',
    link: 'https://rajesh-ai-assistant.vercel.app',
    linkText: 'Live App',
    icon: '🤖',
    media: { type: 'iframe', url: '/rajesh-ai-assistant/index.html' },
    metrics: [
      { icon: '⚡', value: '<500ms', label: 'Response', sub: 'Streamed Tokens' },
      { icon: '🎯', value: '100%', label: 'Accuracy', sub: 'Ground Context' },
      { icon: '💬', value: '24/7', label: 'Availability', sub: 'Serverless Edge' },
      { icon: '🧠', value: 'GenAI', label: 'LLM Powered', sub: 'RAG Architecture' },
    ],
    bullets: [
      'Provides instantaneous answers about backend architecture, PL/SQL engineering, and expertise',
      'Designed with a modern chat glassmorphism UI supporting streaming',
      'Deployed on Vercel Edge runtime with zero cold-start latency',
    ],
    stack: ['Next.js 15', 'TypeScript', 'Tailwind', 'OpenAI', 'Framer Motion'],
  },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="projects" className="section-padding" style={{ background: 'var(--bg-base)' }}>
      <div className="section-inner">
        <SectionTitle
          tag="Featured Projects"
          title="Architectural Systems &"
          highlight="AI Innovations"
          subtitle="Production-grade enterprise architectures and intelligent GenAI agents built with modern tech stacks."
        />

        <div ref={ref} className="w-full max-w-6xl mx-auto flex flex-col gap-8 lg:gap-12">
          {projects.map((proj, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={proj.id}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: idx * 0.15 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
              >
                {/* Content Container */}
                <div className={`rounded-3xl overflow-hidden card flex flex-col ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  {/* Card Header */}
                  <div
                    className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                    style={{ borderBottom: '1px solid var(--border-color)', background: 'var(--bg-elevated)' }}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                        style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-color)' }}
                      >
                        {proj.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>{proj.name}</h3>
                        <p className="text-[11px] font-semibold gradient-text">{proj.category}</p>
                      </div>
                    </div>

                    <motion.a
                      href={proj.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.96 }}
                      className="flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white flex-shrink-0 shadow-md"
                      style={{ background: proj.id === 'rajesh-ai-assistant' ? 'linear-gradient(135deg,#06b6d4,#6366f1)' : 'linear-gradient(135deg,#6366f1,#8b5cf6)' }}
                    >
                      {proj.id === 'rajesh-ai-assistant' ? <Bot className="w-3.5 h-3.5" /> : <GitFork className="w-3.5 h-3.5" />}
                      {proj.linkText} <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                    </motion.a>
                  </div>

                  {/* Metrics Strip */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-px" style={{ background: 'var(--border-color)' }}>
                    {proj.metrics.map(({ icon, value, label, sub }) => (
                      <div key={label} className="p-3 text-center" style={{ background: 'var(--bg-surface)' }}>
                        <div className="text-lg mb-0.5">{icon}</div>
                        <div className="text-sm font-black gradient-text">{value}</div>
                        <div className="text-[11px] font-semibold" style={{ color: 'var(--text-primary)' }}>{label}</div>
                        <div className="text-[9px]" style={{ color: 'var(--text-muted)' }}>{sub}</div>
                      </div>
                    ))}
                  </div>

                  {/* Description & Bullets */}
                  <div className="p-5 flex-1 flex flex-col justify-between" style={{ background: 'var(--bg-surface)' }}>
                    <div>
                      <p className="text-xs leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
                        {proj.desc}
                      </p>
                      <ul className="space-y-2 mb-5">
                        {proj.bullets.map((b, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-xs" style={{ color: 'var(--text-secondary)' }}>
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#6366f1' }} />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-1.5 pt-4" style={{ borderTop: '1px solid var(--border-color)' }}>
                      {proj.stack.map((s) => (
                        <span
                          key={s}
                          className="text-[10px] px-2.5 py-1 rounded-full font-medium"
                          style={{ background: 'var(--bg-elevated)', color: 'var(--text-muted)', border: '1px solid var(--border-color)' }}
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Media Container */}
                <div 
                  className={`rounded-3xl overflow-hidden card relative w-full h-[350px] lg:h-auto flex items-center justify-center ${isEven ? 'lg:order-2' : 'lg:order-1'}`}
                  style={{ background: 'var(--bg-surface)' }}
                >
                  {proj.media.type === 'video' ? (
                    <video
                      src={proj.media.url}
                      autoPlay
                      loop
                      controls
                      playsInline
                      className="absolute inset-0 w-full h-full object-contain"
                      style={{ background: '#0a0a0f' }}
                    />
                  ) : (
                    <iframe
                      src={proj.media.url}
                      className="absolute inset-0 w-full h-full border-0"
                      title={`${proj.name} Preview`}
                      style={{ background: '#0a0a0f' }}
                    />
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
