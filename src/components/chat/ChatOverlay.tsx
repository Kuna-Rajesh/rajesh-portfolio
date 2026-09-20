'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect, useCallback } from 'react';
import { X, Send, Bot, User, Loader2, AlertCircle } from 'lucide-react';
import {
  ChatMessage,
  INITIAL_MESSAGE,
  getBotResponse,
} from './chatData';
import Toast from '@/components/ui/Toast';

const APPS_SCRIPT_URL = process.env.NEXT_PUBLIC_APPS_SCRIPT_URL || '';

interface ContactForm {
  name: string;
  contact: string;
  message: string;
}

function renderMarkdown(text: string): string {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/•/g, '•')
    .replace(/\n/g, '<br/>');
}

function TypingIndicator() {
  return (
    <div className="flex items-end gap-2 mb-4">
      <div
        className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
        style={{ background: 'linear-gradient(135deg, #6366f1, #06b6d4)' }}
      >
        <Bot className="w-3.5 h-3.5 text-white" />
      </div>
      <div
        className="px-4 py-3 rounded-2xl rounded-bl-sm"
        style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border-color)' }}
      >
        <div className="flex gap-1 items-center h-4">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: '#6366f1' }}
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

interface ChatOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ChatOverlay({ isOpen, onClose }: ChatOverlayProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '0',
      role: 'bot',
      content: INITIAL_MESSAGE,
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [contactForm, setContactForm] = useState<ContactForm>({ name: '', contact: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [formErrors, setFormErrors] = useState<Partial<ContactForm>>({});

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, scrollToBottom]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  const addMessage = useCallback((role: 'bot' | 'user', content: string) => {
    setMessages((prev) => [
      ...prev,
      { id: Date.now().toString(), role, content, timestamp: new Date() },
    ]);
  }, []);

  const sendMessage = useCallback(async () => {
    const trimmed = input.trim();
    if (!trimmed || isTyping) return;

    setInput('');
    addMessage('user', trimmed);
    setIsTyping(true);

    // Simulate realistic typing delay
    await new Promise((r) => setTimeout(r, 800 + Math.random() * 700));

    const response = getBotResponse(trimmed);
    setIsTyping(false);

    if (response === '__SHOW_CONTACT_FORM__') {
      addMessage(
        'bot',
        `I'd love to connect you with Rajesh! 😊 Please fill in your details below and he'll get back to you promptly.`
      );
      setShowContactForm(true);
    } else {
      addMessage('bot', response);
    }
  }, [input, isTyping, addMessage]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const lastSentCountRef = useRef(0);

  const sendChatTranscriptToEmail = useCallback(() => {
    const userMessages = messages.filter((m) => m.role === 'user');
    if (userMessages.length === 0 || userMessages.length <= lastSentCountRef.current) return;

    lastSentCountRef.current = userMessages.length;

    const formattedTranscript = messages
      .map((m) => `${m.role === 'user' ? '👤 Visitor' : '🤖 Rajesh AI'}: ${m.content.replace(/<br\/>/g, '\n')}`)
      .join('\n\n');

    const name = contactForm.name.trim() || 'Portfolio Guest';
    const contact = contactForm.contact.trim() || 'Not Provided';

    const payload = {
      name,
      contact,
      email: contact.includes('@') ? contact : 'rajeshkuna70@gmail.com',
      to_email: 'rajeshkuna70@gmail.com',
      recipient: 'rajeshkuna70@gmail.com',
      message: `[Complete AI Chat Session Transcript]\n\n${formattedTranscript}`,
      _subject: `Full AI Chat Session Transcript from ${name}`,
    };

    try {
      // 1. Send to Formspree endpoint (delivers to default mail rajeshkuna70@gmail.com)
      fetch('https://formspree.io/f/mqaevepk', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(payload),
      }).catch(() => { });

      // 2. Send via Google Apps Script endpoint if configured in env
      if (APPS_SCRIPT_URL) {
        fetch(APPS_SCRIPT_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'text/plain' },
          body: JSON.stringify({
            name,
            contact,
            to_email: 'rajeshkuna70@gmail.com',
            transcript: formattedTranscript,
            message: formattedTranscript,
            _subject: `Full AI Chat Session Transcript from ${name}`,
          }),
        }).catch(() => { });
      }
    } catch {
      // Ignore background fetch errors
    }
  }, [messages, contactForm]);

  const handleCloseChat = () => {
    sendChatTranscriptToEmail();
    onClose();
  };

  useEffect(() => {
    const handleUnload = () => {
      const userMessages = messages.filter((m) => m.role === 'user');
      if (userMessages.length > 0 && userMessages.length > lastSentCountRef.current) {
        lastSentCountRef.current = userMessages.length;
        const formattedTranscript = messages
          .map((m) => `${m.role === 'user' ? '👤 Visitor' : '🤖 Rajesh AI'}: ${m.content}`)
          .join('\n\n');

        const payload = {
          name: contactForm.name.trim() || 'Portfolio Visitor (Tab Closed)',
          contact: contactForm.contact.trim() || 'Not Provided',
          message: `[AI Chat Session Transcript - Page Exit]\n\n${formattedTranscript}`,
          _subject: `AI Chat Transcript - Portfolio Visitor Session`,
        };

        if (navigator.sendBeacon) {
          const blob = new Blob([JSON.stringify(payload)], { type: 'application/json' });
          navigator.sendBeacon('https://formspree.io/f/mqaevepk', blob);
        }
      }
    };

    window.addEventListener('beforeunload', handleUnload);
    return () => window.removeEventListener('beforeunload', handleUnload);
  }, [messages, contactForm]);

  const validateForm = (): boolean => {
    const errors: Partial<ContactForm> = {};
    if (!contactForm.name.trim()) errors.name = 'Name is required';
    if (!contactForm.contact.trim()) errors.contact = 'Email or LinkedIn is required';
    if (!contactForm.message.trim()) errors.message = 'Message is required';
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const submitContactForm = async () => {
    if (!validateForm()) return;

    setIsSubmitting(true);

    sendChatTranscriptToEmail();

    setIsSubmitting(false);
    setShowContactForm(false);
    setContactForm({ name: '', contact: '', message: '' });

    addMessage(
      'bot',
      `🎉 Thank you, **${contactForm.name}**! Your message and conversation history have been sent to Rajesh. He typically responds within **24 hours**.\n\nIs there anything else I can help you with?`
    );

    setShowToast(true);
    setTimeout(() => setShowToast(false), 5000);
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="chat-overlay"
            initial={{ opacity: 0, scale: 0.85, y: 40, transformOrigin: 'bottom right' }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 40 }}
            transition={{ type: 'spring', stiffness: 300, damping: 28 }}
            className="fixed bottom-22 sm:bottom-24 right-3 sm:right-6 z-[9998] flex flex-col rounded-3xl overflow-hidden shadow-2xl"
            style={{
              width: 'min(480px, calc(100vw - 24px))',
              height: 'min(600px, calc(100vh - 120px))',
              background: 'var(--bg-surface)',
              border: '1px solid rgba(99,102,241,0.25)',
              boxShadow: '0 25px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(99,102,241,0.1)',
            }}
          >
            {/* ── Header ── */}
            <div
              className="flex items-center gap-3 p-4 flex-shrink-0"
              style={{
                background: 'linear-gradient(135deg, rgba(99,102,241,0.15), rgba(6,182,212,0.1))',
                borderBottom: '1px solid rgba(99,102,241,0.15)',
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #6366f1, #06b6d4)', boxShadow: '0 0 15px rgba(99,102,241,0.4)' }}
              >
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-bold" style={{ color: 'var(--text-primary)' }}>
                  Rajesh&apos;s AI Assistant
                </h3>
                <div className="flex items-center gap-1.5 text-xs" style={{ color: 'var(--text-muted)' }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Online · Typically replies instantly
                </div>
              </div>
              <button
                onClick={handleCloseChat}
                className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                style={{
                  background: 'var(--bg-elevated)',
                  color: 'var(--text-muted)',
                  border: '1px solid var(--border-color)',
                }}
                aria-label="Close chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* ── Messages ── */}
            <div className="flex-1 overflow-y-auto p-4 space-y-1" style={{ scrollbarWidth: 'thin' }}>
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex items-end gap-2 mb-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
                >
                  {/* Avatar */}
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                    style={
                      msg.role === 'bot'
                        ? { background: 'linear-gradient(135deg, #6366f1, #06b6d4)' }
                        : { background: 'linear-gradient(135deg, #10b981, #06b6d4)' }
                    }
                  >
                    {msg.role === 'bot'
                      ? <Bot className="w-3.5 h-3.5 text-white" />
                      : <User className="w-3.5 h-3.5 text-white" />
                    }
                  </div>

                  {/* Bubble */}
                  <div
                    className={`max-w-[78%] px-4 py-3 text-sm leading-relaxed ${msg.role === 'user'
                        ? 'rounded-2xl rounded-br-sm'
                        : 'rounded-2xl rounded-bl-sm'
                      }`}
                    style={
                      msg.role === 'user'
                        ? {
                          background: 'linear-gradient(135deg, #6366f1, #06b6d4)',
                          color: '#fff',
                        }
                        : {
                          background: 'var(--bg-elevated)',
                          color: 'var(--text-primary)',
                          border: '1px solid var(--border-color)',
                        }
                    }
                    dangerouslySetInnerHTML={{ __html: renderMarkdown(msg.content) }}
                  />
                </motion.div>
              ))}

              {isTyping && <TypingIndicator />}

              {/* ── Contact Form (inline in chat) ── */}
              <AnimatePresence>
                {showContactForm && (
                  <motion.div
                    key="contact-form"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    className="rounded-2xl p-4 mt-2"
                    style={{
                      background: 'var(--bg-elevated)',
                      border: '1px solid rgba(99,102,241,0.25)',
                    }}
                  >
                    <p className="text-xs font-bold mb-3 gradient-text">Leave your details</p>

                    <div className="space-y-3">
                      {/* Name */}
                      <div>
                        <input
                          type="text"
                          placeholder="Your Name *"
                          value={contactForm.name}
                          onChange={(e) => setContactForm((f) => ({ ...f, name: e.target.value }))}
                          className="w-full px-3 py-2.5 rounded-xl text-sm outline-none transition-all duration-200"
                          style={{
                            background: 'var(--bg-surface)',
                            color: 'var(--text-primary)',
                            border: `1px solid ${formErrors.name ? '#ef4444' : 'var(--border-color)'}`,
                          }}
                        />
                        {formErrors.name && (
                          <p className="text-[10px] text-red-400 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" /> {formErrors.name}
                          </p>
                        )}
                      </div>

                      {/* Email/LinkedIn */}
                      <div>
                        <input
                          type="text"
                          placeholder="Email or LinkedIn URL *"
                          value={contactForm.contact}
                          onChange={(e) => setContactForm((f) => ({ ...f, contact: e.target.value }))}
                          className="w-full px-3 py-2.5 rounded-xl text-sm outline-none transition-all duration-200"
                          style={{
                            background: 'var(--bg-surface)',
                            color: 'var(--text-primary)',
                            border: `1px solid ${formErrors.contact ? '#ef4444' : 'var(--border-color)'}`,
                          }}
                        />
                        {formErrors.contact && (
                          <p className="text-[10px] text-red-400 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" /> {formErrors.contact}
                          </p>
                        )}
                      </div>

                      {/* Message */}
                      <div>
                        <textarea
                          placeholder="Your message or opportunity details *"
                          value={contactForm.message}
                          onChange={(e) => setContactForm((f) => ({ ...f, message: e.target.value }))}
                          rows={3}
                          className="w-full px-3 py-2.5 rounded-xl text-sm outline-none resize-none transition-all duration-200"
                          style={{
                            background: 'var(--bg-surface)',
                            color: 'var(--text-primary)',
                            border: `1px solid ${formErrors.message ? '#ef4444' : 'var(--border-color)'}`,
                          }}
                        />
                        {formErrors.message && (
                          <p className="text-[10px] text-red-400 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" /> {formErrors.message}
                          </p>
                        )}
                      </div>

                      <div className="flex gap-2">
                        <button
                          onClick={submitContactForm}
                          disabled={isSubmitting}
                          className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold text-white transition-all duration-200 hover:opacity-90 disabled:opacity-60"
                          style={{ background: 'linear-gradient(135deg, #6366f1, #06b6d4)' }}
                        >
                          {isSubmitting ? (
                            <><Loader2 className="w-3.5 h-3.5 animate-spin" /> Sending...</>
                          ) : (
                            <><Send className="w-3.5 h-3.5" /> Send Message</>
                          )}
                        </button>
                        <button
                          onClick={() => setShowContactForm(false)}
                          className="px-3 py-2.5 rounded-xl text-xs font-bold transition-all duration-200 hover:opacity-80"
                          style={{
                            background: 'var(--bg-surface)',
                            color: 'var(--text-secondary)',
                            border: '1px solid var(--border-color)',
                          }}
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div ref={messagesEndRef} />
            </div>

            {/* ── Input Bar ── */}
            <div
              className="flex-shrink-0 p-3"
              style={{ borderTop: '1px solid var(--border-color)', background: 'var(--bg-surface)' }}
            >
              {/* Quick Suggestion Pills */}
              <div className="flex gap-1.5 flex-wrap mb-2.5">
                {['TCS Experience', 'PL/SQL Experience', 'OmniSaina project', 'Core skills', 'Schedule interview'].map((suggestion) => (
                  <button
                    key={suggestion}
                    onClick={() => {
                      setInput(suggestion);
                      inputRef.current?.focus();
                    }}
                    className="text-[10px] px-2.5 py-1 rounded-full transition-all duration-200 hover:opacity-80"
                    style={{
                      background: 'linear-gradient(135deg, rgba(99,102,241,0.1), rgba(6,182,212,0.1))',
                      color: '#6366f1',
                      border: '1px solid rgba(99,102,241,0.25)',
                    }}
                  >
                    {suggestion}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask me anything about Rajesh..."
                  className="flex-1 px-4 py-2.5 rounded-xl text-sm outline-none transition-all duration-200"
                  style={{
                    background: 'var(--bg-elevated)',
                    color: 'var(--text-primary)',
                    border: '1px solid var(--border-color)',
                  }}
                  aria-label="Chat input"
                />
                <motion.button
                  onClick={sendMessage}
                  disabled={!input.trim() || isTyping}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.92 }}
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-200 disabled:opacity-40"
                  style={{ background: 'linear-gradient(135deg, #6366f1, #06b6d4)' }}
                  aria-label="Send message"
                >
                  <Send className="w-4 h-4 text-white" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Toast
        message="✅ Message sent! Rajesh will reach out within 24 hours."
        visible={showToast}
        onClose={() => setShowToast(false)}
      />
    </>
  );
}
