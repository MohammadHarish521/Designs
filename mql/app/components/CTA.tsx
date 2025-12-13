'use client';

import { FiArrowRight, FiBookOpen, FiMessageSquare } from 'react-icons/fi';

export default function CTA() {
  return (
    <section className="py-24 px-6 bg-neutral-950 relative z-10 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div className="text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
            <h2 className="text-4xl md:text-6xl font-semibold tracking-tighter text-white leading-[1.05]">
              Ready to Get Control of Your AI Costs?
            </h2>
            <p className="mt-6 text-neutral-400 text-lg font-light">
              Start tracking, limiting, and managing your AI API usage in minutes.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4">
              <a
                href="#"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-white text-black px-7 py-3 text-sm font-semibold hover:bg-neutral-200 transition-colors"
              >
                Create Free Account <FiArrowRight />
              </a>
              <a
                href="https://metriqual.com/docs"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-white/20 bg-white/5 text-white px-7 py-3 text-sm font-semibold hover:bg-white/10 hover:border-white/30 transition-colors"
              >
                <FiBookOpen /> View Documentation
              </a>
            </div>

            <p className="mt-8 text-[13px] text-neutral-500">
              No credit card required • Deploy in 5 minutes • Open source backend
            </p>
          </div>

          <div className="relative max-w-xl mx-auto w-full">
            <div className="border-beam z-10 opacity-70" />
            <div className="relative z-20 rounded-2xl border border-neutral-800 bg-neutral-900/40 p-8 md:p-9 overflow-hidden">
              <div className="flex items-center gap-3 text-amber-300 mb-6">
                <FiMessageSquare size={22} />
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-neutral-400">
                  Customer story
                </span>
              </div>
              <blockquote className="text-xl md:text-2xl font-medium tracking-tight text-white leading-snug">
                "MQL let us give every team their own budget, kill leaked keys in seconds, and keep
                OpenAI-compatible code. Finance stopped living in spreadsheets overnight."
              </blockquote>
              <div className="mt-7 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-neutral-800 grayscale overflow-hidden flex items-center justify-center">
                  <div className="w-full h-full flex items-center justify-center bg-gray-700 text-sm font-semibold text-gray-300">
                    LS
                  </div>
                </div>
                <div className="text-left">
                  <div className="text-sm font-semibold text-white">Laura Singh</div>
                  <div className="text-xs text-neutral-400 font-mono">
                    Head of Platform Finance, Skylink AI
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


