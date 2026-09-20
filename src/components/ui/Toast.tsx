'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, X } from 'lucide-react';

interface ToastProps {
  message: string;
  visible: boolean;
  onClose: () => void;
}

export default function Toast({ message, visible, onClose }: ToastProps) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="toast"
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 400, damping: 25 }}
          className="fixed bottom-24 right-4 z-[200] flex items-center gap-3 px-4 py-3 rounded-xl shadow-2xl"
          style={{
            background: 'linear-gradient(135deg, rgba(5,150,105,0.95), rgba(6,182,212,0.95))',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(255,255,255,0.15)',
            maxWidth: '320px',
          }}
        >
          <CheckCircle className="w-5 h-5 text-white flex-shrink-0" />
          <p className="text-sm text-white font-medium flex-1">{message}</p>
          <button
            onClick={onClose}
            className="text-white/70 hover:text-white transition-colors"
            aria-label="Close notification"
          >
            <X className="w-4 h-4" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
