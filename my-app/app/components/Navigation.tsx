"use client";

import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";

export default function Navigation() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("theme");
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      return stored === "dark" || (!stored && prefersDark);
    }
    return false;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-neutral-200/60 dark:border-neutral-800/60 bg-neutral-50/80 dark:bg-neutral-950/80 backdrop-blur-md transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-6 h-6 bg-neutral-900 dark:bg-white rounded-sm flex items-center justify-center text-white dark:text-neutral-900 transition-colors">
            <Icon icon="lucide:waves" width={14} />
          </div>
          <span className="font-semibold tracking-tight text-sm text-neutral-900 dark:text-white">
            Digilab
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a
            href="#research"
            className="text-xs font-medium text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors"
          >
            Research
          </a>
          <a
            href="#platform"
            className="text-xs font-medium text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors"
          >
            Platform
          </a>
          <a
            href="#collective"
            className="text-xs font-medium text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors"
          >
            Collective
          </a>
          <a
            href="#methodology"
            className="text-xs font-medium text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors"
          >
            Methodology
          </a>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors flex items-center justify-center"
          >
            <Icon icon={isDark ? "lucide:sun" : "lucide:moon"} width={18} />
          </button>
          <a
            href="#"
            className="hidden md:block text-xs font-medium text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors"
          >
            Log in
          </a>
          <a
            href="#"
            className="bg-neutral-900 hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200 text-white text-xs font-medium px-4 py-2 rounded-full transition-colors tracking-wide"
          >
            Request Access
          </a>
        </div>
      </div>
    </nav>
  );
}
