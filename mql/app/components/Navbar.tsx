'use client';

import { useState, useEffect } from 'react';
import { PiSparkleFill } from 'react-icons/pi';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-6 sm:px-10 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-neutral-950/80 backdrop-blur-md border-b border-white/5 shadow-lg shadow-black/5'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="flex items-center justify-between relative">
        <a href="#" className="flex items-center gap-3 text-white">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-yellow-300/40 bg-yellow-300/10 text-yellow-300 shadow-[0_0_24px_rgba(253,224,71,0.15)]">
            <PiSparkleFill className="h-4 w-4" />
          </span>
          <span className="text-sm font-semibold tracking-tight">MQL</span>
        </a>

        <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center gap-6 text-sm">
          <a href="#works" className="text-neutral-300 hover:text-white transition-colors px-3 py-1.5 rounded-full border border-transparent hover:border-white/10">
            Works
          </a>
          <a href="#features" className="text-neutral-300 hover:text-white transition-colors px-3 py-1.5 rounded-full border border-transparent hover:border-white/10">
            Features
          </a>
          <a href="#pricing" className="text-neutral-300 hover:text-white transition-colors px-3 py-1.5 rounded-full border border-transparent hover:border-white/10">
            Pricing
          </a>
          <a href="#documents" className="text-neutral-300 hover:text-white transition-colors px-3 py-1.5 rounded-full border border-transparent hover:border-white/10">
            Documents
          </a>
        </div>

        <button className="rounded-full border border-white/20 bg-white/5 px-5 py-1.5 text-white hover:bg-white/10 hover:border-white/30 transition-colors">
          Log in
        </button>
      </div>
    </nav>
  );
}
