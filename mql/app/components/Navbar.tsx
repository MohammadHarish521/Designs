'use client';

import { Moon, Sun, Waves } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check initial theme preference
    if (document.documentElement.classList.contains('dark')) {
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark');
    setIsDark(!isDark);
  };

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-neutral-200/60 dark:border-neutral-800/60 bg-neutral-50/80 dark:bg-neutral-950/80 backdrop-blur-md transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-6 h-6 bg-amber-400 dark:bg-amber-300 rounded-sm flex items-center justify-center text-neutral-900 transition-colors">
            <Waves size={14} />
          </div>
          <span className="font-semibold tracking-tight text-sm text-neutral-900 dark:text-white">
            MQL Gateway
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a
            href="#platform"
            className="text-xs font-medium text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors"
          >
            Features
          </a>
          <a
            href="#platform"
            className="text-xs font-medium text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors"
          >
            Usage
          </a>
          <a
            href="#security"
            className="text-xs font-medium text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors"
          >
            Security
          </a>
          <a
            href="#"
            className="text-xs font-medium text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors"
          >
            Docs
          </a>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors flex items-center justify-center"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a
            href="#"
            className="hidden md:block text-xs font-medium text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors"
          >
            Pricing
          </a>
          <a
            href="#"
            className="bg-amber-400 hover:bg-amber-300 text-neutral-900 text-xs font-semibold px-4 py-2 rounded-full transition-colors tracking-wide shadow-accent"
          >
            Start Free
          </a>
        </div>
      </div>
    </nav>
  );
}
