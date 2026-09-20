'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X } from 'lucide-react';
import ChatOverlay from './ChatOverlay';

export default function ChatFAB() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <ChatOverlay isOpen={isOpen} onClose={() => setIsOpen(false)} />

      {/* FAB Button */}
      <motion.button
        id="chat-fab"
        onClick={() => setIsOpen((o) => !o)}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, type: 'spring', stiffness: 300, damping: 20 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.92 }}
        className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-[9999] w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-2xl cursor-pointer"
        style={{
          background: 'linear-gradient(135deg, #6366f1, #06b6d4)',
          boxShadow: '0 0 35px rgba(99,102,241,0.6), 0 4px 25px rgba(0,0,0,0.4)',
        }}
        aria-label={isOpen ? 'Close chat' : 'Open chat with Rajesh AI'}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6 text-white" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageSquare className="w-6 h-6 text-white" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Notification dot */}
        {!isOpen && (
          <motion.div
            key="notif-dot"
            className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-emerald-400 flex items-center justify-center shadow-md"
            animate={{ scale: [1, 1.25, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <span className="text-[9px] text-white font-extrabold">AI</span>
          </motion.div>
        )}
      </motion.button>
    </>
  );
}
