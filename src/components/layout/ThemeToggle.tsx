'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="w-10 h-10" />;

  const isDark = theme === 'dark';

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label="Toggle theme"
      className="relative w-10 h-10 rounded-full flex items-center justify-center overflow-hidden
                 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2
                 focus:ring-brand-primary/50"
      style={{
        background: isDark
          ? 'linear-gradient(135deg, #1a2235, #111827)'
          : 'linear-gradient(135deg, #fef3c7, #fde68a)',
        border: `1px solid ${isDark ? 'rgba(99,102,241,0.3)' : 'rgba(251,191,36,0.5)'}`,
        boxShadow: isDark
          ? '0 0 15px rgba(99,102,241,0.2)'
          : '0 0 15px rgba(251,191,36,0.3)',
      }}
    >
      <span
        className="transition-all duration-500"
        style={{
          transform: isDark ? 'rotate(0deg) scale(1)' : 'rotate(180deg) scale(0)',
          opacity: isDark ? 1 : 0,
          position: 'absolute',
        }}
      >
        <Moon className="w-4 h-4 text-brand-primary" />
      </span>
      <span
        className="transition-all duration-500"
        style={{
          transform: isDark ? 'rotate(-180deg) scale(0)' : 'rotate(0deg) scale(1)',
          opacity: isDark ? 0 : 1,
          position: 'absolute',
        }}
      >
        <Sun className="w-4 h-4 text-amber-500" />
      </span>
    </button>
  );
}
