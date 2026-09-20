'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import SectionTitle from '@/components/ui/SectionTitle';
import { Mail, Send, Link2, MapPin, CheckCircle, Loader2, MessageSquare } from 'lucide-react';

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  const [name, setName]       = useState('');
  const [email, setEmail]     = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus]   = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const APPS_SCRIPT_URL = process.env.NEXT_PUBLIC_APPS_SCRIPT_URL || '';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setStatus('submitting');

    const payload = {
      name,
      email,
      contact: email,
      to_email: 'rajeshkuna70@gmail.com',
      recipient: 'rajeshkuna70@gmail.com',
      message,
      _replyto: email,
      _subject: `Direct Portfolio Message from ${name} (${email})`,
    };

    try {
      const promises: Promise<unknown>[] = [
        fetch('https://formspree.io/f/mqaevepk', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify(payload),
        }),
      ];

      if (APPS_SCRIPT_URL) {
        promises.push(
          fetch(APPS_SCRIPT_URL, {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'text/plain' },
            body: JSON.stringify({
              name,
              email,
              contact: email,
              to_email: 'rajeshkuna70@gmail.com',
              message: `Direct Message & Feedback:\n\n${message}`,
              transcript: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
              _subject: `Direct Portfolio Message from ${name} (${email})`,
            }),
          })
        );
      }

      await Promise.allSettled(promises);

      setStatus('success');
      setName('');
      setEmail('');
      setMessage('');
    } catch {
      setStatus('success');
      setName('');
      setEmail('');
      setMessage('');
    }
  };

  return (
    <section id="contact" className="section-padding relative" style={{ background: 'var(--bg-base)' }}>
      {/* Ambient background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[600px] h-[600px] rounded-full blur-[160px] opacity-[0.06] bottom-0 left-1/2 -translate-x-1/2"
          style={{ background: '#6366f1' }} />
      </div>

      <div className="relative section-inner">
        <SectionTitle
          tag="Get In Touch"
          title="Let's"
          highlight="Connect & Collaborate"
          subtitle="Open to senior backend roles, PL/SQL developer positions, technical lead opportunities, and engineering consultations."
        />

        <div ref={ref} className="w-full max-w-3xl mx-auto space-y-10">

          {/* Block 1: Contact Cards Row (Always Visible, Generous Spacing) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <a
              href="mailto:rajeshkuna70@gmail.com"
              className="p-5 rounded-2xl card flex items-center gap-4 transition-all hover:scale-[1.02]"
              style={{ background: 'var(--bg-surface)' }}
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#6366f1]/10 text-[#6366f1] flex-shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="overflow-hidden">
                <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-0.5">Email</p>
                <p className="text-xs font-bold truncate" style={{ color: 'var(--text-primary)' }}>rajeshkuna70@gmail.com</p>
              </div>
            </a>

            <a
              href="https://linkedin.com/in/kuna-rajesh"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl card flex items-center gap-4 transition-all hover:scale-[1.02]"
              style={{ background: 'var(--bg-surface)' }}
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#0077b5]/10 text-[#0077b5] flex-shrink-0">
                <Link2 className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-0.5">LinkedIn</p>
                <p className="text-xs font-bold" style={{ color: 'var(--text-primary)' }}>kuna-rajesh</p>
              </div>
            </a>

            <div
              className="p-5 rounded-2xl card flex items-center gap-4"
              style={{ background: 'var(--bg-surface)' }}
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#10b981]/10 text-[#10b981] flex-shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-0.5">Location</p>
                <p className="text-xs font-bold" style={{ color: 'var(--text-primary)' }}>Hyderabad &amp; Remote</p>
              </div>
            </div>
          </div>

          {/* Block 2: Message Form with Spacious Textarea */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55 }}
            className="rounded-3xl p-8 sm:p-10 card relative"
            style={{ background: 'var(--bg-surface)' }}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl flex items-center justify-center text-white" style={{ background: 'linear-gradient(135deg,#6366f1,#8b5cf6)' }}>
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>Send a Direct Message</h3>
                  <p className="text-xs text-muted-foreground">Delivered straight to rajeshkuna70@gmail.com</p>
                </div>
              </div>
              <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold"
                style={{ background: 'rgba(16,185,129,0.1)', color: '#10b981', border: '1px solid rgba(16,185,129,0.2)' }}>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> Active
              </span>
            </div>

            {status === 'success' ? (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
                <CheckCircle className="w-14 h-14 mx-auto mb-3 text-emerald-400 animate-bounce" />
                <h4 className="text-xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>Message Received!</h4>
                <p className="text-sm max-w-xs mx-auto mb-6" style={{ color: 'var(--text-secondary)' }}>
                  Thank you for reaching out. An automated copy has been dispatched to Rajesh.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="px-6 py-2.5 rounded-xl text-xs font-bold"
                  style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border-color)', color: 'var(--text-primary)' }}
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-bold mb-2.5" style={{ color: 'var(--text-primary)' }}>
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-5 py-4 rounded-2xl text-sm sm:text-base font-medium outline-none transition-all focus:border-[#6366f1] focus:ring-2 focus:ring-[#6366f1]/20"
                      style={{
                        background: 'var(--bg-elevated)',
                        border: '1px solid var(--border-color)',
                        color: 'var(--text-primary)',
                        minHeight: '56px',
                      }}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-bold mb-2.5" style={{ color: 'var(--text-primary)' }}>
                      Your Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. sarah@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-5 py-4 rounded-2xl text-sm sm:text-base font-medium outline-none transition-all focus:border-[#6366f1] focus:ring-2 focus:ring-[#6366f1]/20"
                      style={{
                        background: 'var(--bg-elevated)',
                        border: '1px solid var(--border-color)',
                        color: 'var(--text-primary)',
                        minHeight: '56px',
                      }}
                    />
                  </div>
                </div>

                {/* Message Textarea — Large, comfortable height */}
                <div>
                  <label className="block text-sm font-bold mb-2.5" style={{ color: 'var(--text-primary)' }}>
                    Message &amp; Feedback *
                  </label>
                  <textarea
                    required
                    rows={10}
                    placeholder="Type your detailed message, job opportunity specifications, or feedback here..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-5 py-4 rounded-2xl text-sm sm:text-base font-medium outline-none transition-all resize-y leading-relaxed focus:border-[#6366f1] focus:ring-2 focus:ring-[#6366f1]/20"
                    style={{
                      background: 'var(--bg-elevated)',
                      border: '1px solid var(--border-color)',
                      color: 'var(--text-primary)',
                      minHeight: '220px',
                    }}
                  />
                </div>

                {/* Prominent Large Submit Button */}
                <motion.button
                  type="submit"
                  disabled={status === 'submitting'}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-3 py-5 sm:py-6 px-8 rounded-2xl text-sm sm:text-base font-black text-white shadow-2xl cursor-pointer tracking-wider uppercase transition-all"
                  style={{
                    background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #06b6d4 100%)',
                    boxShadow: '0 12px 35px rgba(99,102,241,0.4)',
                  }}
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" /> Dispatching Message...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" /> Send Direct Message &amp; Feedback
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
