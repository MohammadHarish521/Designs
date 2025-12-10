
const CTA = () => {
  return (
    <>
      {/* Transition Noodle (Grid -> CTA) */}
      <div className="relative h-32 w-full overflow-hidden pointer-events-none max-w-6xl mx-auto">
        <svg
          className="absolute top-0 left-0 w-full h-full text-slate-300"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
        >
          {/* Left Line */}
          <path
            d="M200,0 L200,50 L500,50"
            fill="none"
            stroke="currentColor"
            strokeDasharray="4 4"
            strokeWidth="1"
          ></path>
          {/* Right Line */}
          <path
            d="M800,0 L800,50 L500,50 L500,100"
            fill="none"
            stroke="currentColor"
            strokeDasharray="4 4"
            strokeWidth="1"
          ></path>

          {/* Convergence Point */}
          <circle
            cx="500"
            cy="50"
            r="3"
            className="text-slate-400 fill-current animate-pulse"
          ></circle>
        </svg>
      </div>

      {/* CTA Section */}
      <section className="relative py-24 px-6 border-t border-slate-100 bg-white">
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-slate-50 border border-slate-100 rounded-2xl mb-8 text-slate-900 shadow-sm">
            <iconify-icon icon="lucide:send" width="24"></iconify-icon>
          </div>

          <h2 className="text-4xl md:text-5xl font-medium tracking-tighter text-slate-900 mb-6">
            Ready to explore the <br />
            <span className="font-serif italic text-slate-400">
              next frontier?
            </span>
          </h2>

          <p className="text-slate-500 text-base md:text-lg mb-10 max-w-lg mx-auto leading-relaxed">
            Get full access to the Vol. 4 report including all datasets, vector
            graphics, and raw analysis.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <button className="group w-full md:w-auto px-8 py-3.5 bg-slate-900 text-white rounded-xl font-medium tracking-tight hover:bg-slate-800 hover:-translate-y-1 transition-all shadow-xl shadow-slate-900/10 flex items-center justify-center gap-2">
              Download Report
              <iconify-icon
                icon="lucide:download"
                width="16"
                class="group-hover:translate-y-0.5 transition-transform"
              ></iconify-icon>
            </button>
            <button className="w-full md:w-auto px-8 py-3.5 bg-white border border-slate-200 text-slate-700 rounded-xl font-medium tracking-tight hover:bg-slate-50 transition-colors">
              View Sample
            </button>
          </div>

          <div className="mt-10 flex items-center justify-center gap-6 text-xs text-slate-400 border-t border-slate-50 pt-8 max-w-xs mx-auto">
            <div className="flex items-center gap-2">
              <iconify-icon
                icon="lucide:check-circle"
                width="14"
                class="text-emerald-500"
              ></iconify-icon>
              <span>Free for personal use</span>
            </div>
            <div className="flex items-center gap-2">
              <iconify-icon
                icon="lucide:shield"
                width="14"
                class="text-emerald-500"
              ></iconify-icon>
              <span>Secure SSL</span>
            </div>
          </div>
        </div>

        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-radial from-slate-100 to-transparent blur-[80px] -z-10 pointer-events-none opacity-60"></div>
      </section>
    </>
  );
};

export default CTA;
