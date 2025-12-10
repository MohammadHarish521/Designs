import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <main className="relative z-10 flex-grow flex flex-col items-center pt-16 pb-32 px-6 sm:px-8">
      {/* Badge */}
      <div className="mb-10 animate-fade-in-up">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-yellow-300/20 bg-yellow-300/[0.08] text-[11px] font-medium text-yellow-300 tracking-wider shadow-[0_0_20px_rgba(253,224,71,0.1)] backdrop-blur-sm">
          <Sparkles className="w-3 h-3" />
          <span className="tracking-widest uppercase">New Gateway 1.0</span>
        </span>
      </div>

      {/* Headline */}
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium text-center tracking-tighter text-white mb-8 max-w-5xl mx-auto leading-[0.95] drop-shadow-2xl">
        Scale AI safely without <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-b from-yellow-200 to-yellow-400">
          touching code.
        </span>
      </h1>

      {/* Subheadline */}
      <p className="text-lg md:text-xl text-neutral-400 text-center max-w-2xl mx-auto mb-12 font-light leading-relaxed tracking-wide">
        Full visibility, cost control, and security policies for LLM APIs.
        Integrate once, manage permissions everywhere.
      </p>

      {/* CTA */}
      <div className="flex flex-col sm:flex-row gap-5 mb-24">
        <button className="group relative inline-flex items-center justify-center gap-2.5 bg-[#FDE047] text-black px-8 py-3.5 rounded-full text-sm font-semibold tracking-tight hover:bg-[#fef08a] transition-all shadow-[0_0_25px_rgba(253,224,71,0.3)] hover:shadow-[0_0_40px_rgba(253,224,71,0.5)]">
          Start Integrating
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
        <button className="inline-flex items-center justify-center gap-2.5 bg-neutral-900 border border-neutral-800 text-neutral-300 px-8 py-3.5 rounded-full text-sm font-medium tracking-tight hover:border-neutral-600 hover:text-white transition-all backdrop-blur-md">
          Book a Demo
        </button>
      </div>

      {/* Dashboard Preview */}
      <div className="relative w-full max-w-6xl mx-auto perspective-1000">
        {/* Glow behind dashboard */}
        <div className="absolute -inset-1 bg-gradient-to-t from-yellow-300/10 to-transparent blur-3xl opacity-20 rounded-3xl"></div>
        <div className="relative bg-[#0A0A0A] border border-white/10 rounded-xl shadow-2xl overflow-hidden group ring-1 ring-white/5">
          {/* Dashboard content placeholder */}
          <div className="flex h-[600px] md:h-[700px] items-center justify-center">
            <p className="text-neutral-500 text-sm">Dashboard Preview</p>
          </div>
        </div>
      </div>

      {/* Trust Logos */}
      <div className="mt-28 opacity-40 hover:opacity-100 transition-all duration-700">
        <p className="text-center text-[10px] text-neutral-500 mb-8 font-semibold uppercase tracking-[0.3em]">
          Trusted by engineering teams at
        </p>
        <div className="flex flex-wrap justify-center gap-14 items-center grayscale hover:grayscale-0 transition-all duration-500">
          {/* Logo placeholders - you'll need to add iconify or actual logo components */}
          <span className="text-neutral-600 text-xs">Vercel</span>
          <span className="text-neutral-600 text-xs">Stripe</span>
          <span className="text-neutral-600 text-xs">Linear</span>
          <span className="text-neutral-600 text-xs">Supabase</span>
        </div>
      </div>
    </main>
  );
}
