"use client";

import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { PiSparkleFill } from "react-icons/pi";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Works", href: "#works" },
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "Documents", href: "https://metriqual.com/docs" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-6 sm:px-10 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? "py-3 bg-neutral-950/80 backdrop-blur-md border-b border-white/5 shadow-lg shadow-black/5"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between relative">
        <a href="#" className="flex items-center gap-3 text-white z-50">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-yellow-300/40 bg-yellow-300/10 text-yellow-300 shadow-[0_0_24px_rgba(253,224,71,0.15)]">
            <PiSparkleFill className="h-4 w-4" />
          </span>
          <span className="text-sm font-semibold tracking-tight">MQL</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center gap-6 text-sm">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-neutral-300 hover:text-white transition-colors px-3 py-1.5 rounded-full border border-transparent hover:border-white/10"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4 z-50">
          <button className="hidden sm:block rounded-full border border-white/20 bg-white/5 px-5 py-1.5 text-white hover:bg-white/10 hover:border-white/30 transition-colors">
            Log in
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-neutral-300 hover:text-white transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      <div
        className={`absolute top-full left-0 right-0 bg-neutral-950 border-b border-white/5 md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-8 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-neutral-300 hover:text-white py-2 border-b border-white/5 last:border-0"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <button className="sm:hidden mt-4 w-full rounded-full border border-white/20 bg-white/5 px-5 py-3 text-white hover:bg-white/10 hover:border-white/30 transition-colors">
            Log in
          </button>
        </div>
      </div>
    </nav>
  );
}
