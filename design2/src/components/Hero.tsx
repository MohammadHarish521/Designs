
const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-24 overflow-hidden">
      {/* Hero Pathways (SVG Background) */}
      <svg
        className="absolute inset-0 w-full h-full z-0 pointer-events-none opacity-40"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="line-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#cbd5e1" stopOpacity="0"></stop>
            <stop offset="50%" stopColor="#94a3b8" stopOpacity="0.5"></stop>
            <stop offset="100%" stopColor="#cbd5e1" stopOpacity="0"></stop>
          </linearGradient>
        </defs>
        {/* Vertical Flow Lines */}
        <path
          d="M200,0 L200,300 C200,400 500,400 500,600 L500,1000"
          fill="none"
          stroke="url(#line-gradient)"
          strokeWidth="1"
          strokeDasharray="4 4"
        ></path>
        <path
          d="M1240,0 L1240,300 C1240,400 940,400 940,600 L940,1000"
          fill="none"
          stroke="url(#line-gradient)"
          strokeWidth="1"
          strokeDasharray="4 4"
        ></path>

        {/* Animated Nodes */}
        <circle
          cx="200"
          cy="200"
          r="3"
          fill="#94a3b8"
          className="animate-pulse"
        ></circle>
        <circle
          cx="1240"
          cy="250"
          r="3"
          fill="#94a3b8"
          className="animate-pulse"
          style={{ animationDelay: '1s' }}
        ></circle>
      </svg>

      {/* Floating Elements (Avatars & Data Points) */}
      <div className="absolute inset-0 pointer-events-none z-10 max-w-7xl mx-auto hidden md:block">
        {/* Left Data Node */}
        <div className="absolute top-[30%] left-10 lg:left-0 reveal-delay-2 animate-float-subtle">
          <div className="flex items-center gap-3 p-2 pr-4 bg-white/80 backdrop-blur rounded-full border border-slate-200 shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop"
              className="w-10 h-10 rounded-full object-cover"
              alt=""
            />
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">
                Source
              </span>
              <span className="text-xs font-medium text-slate-700">
                Consumer Data
              </span>
            </div>
          </div>
          {/* Connector Line */}
          <svg
            className="absolute top-1/2 left-full w-24 h-20 -translate-y-1/2 pointer-events-none"
            style={{ overflow: 'visible' }}
          >
            <path
              d="M0,0 C40,0 40,40 80,40"
              fill="none"
              stroke="#cbd5e1"
              strokeWidth="1"
            ></path>
            <circle cx="80" cy="40" r="2" fill="#94a3b8"></circle>
          </svg>
        </div>

        {/* Right Data Node */}
        <div
          className="absolute bottom-[30%] right-10 lg:right-0 reveal-delay-2 animate-float-subtle"
          style={{ animationDelay: '1.5s' }}
        >
          <div className="flex items-center gap-3 p-2 pl-4 bg-white/80 backdrop-blur rounded-full border border-slate-200 shadow-sm flex-row-reverse text-right">
            <div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600">
              <iconify-icon icon="lucide:activity" width="18"></iconify-icon>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">
                Velocity
              </span>
              <span className="text-xs font-medium text-slate-700">
                +24% Growth
              </span>
            </div>
          </div>
          {/* Connector Line */}
          <svg
            className="absolute top-1/2 right-full w-24 h-20 -translate-y-1/2 pointer-events-none"
            style={{ overflow: 'visible' }}
          >
            <path
              d="M0,0 C-40,0 -40,-40 -80,-40"
              fill="none"
              stroke="#cbd5e1"
              strokeWidth="1"
            ></path>
            <circle cx="-80" cy="-40" r="2" fill="#94a3b8"></circle>
          </svg>
        </div>
      </div>

      <div className="relative z-20 text-center max-w-4xl px-4">
        {/* Badge */}
        <div className="reveal-delay-1 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 mb-8 shadow-sm cursor-default">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-[11px] font-semibold text-slate-500 tracking-wide uppercase">
            Report 2024 is Live
          </span>
        </div>

        {/* Main Title */}
        <h1 className="reveal-delay-2 flex flex-col items-center leading-[0.9] tracking-tighter text-slate-900 mb-8">
          <span className="text-6xl md:text-8xl font-medium tracking-tighter">
            The digital
          </span>
          <div className="flex items-center gap-4 mt-1 md:mt-3 relative">
            <span className="text-6xl md:text-8xl font-medium italic font-serif text-slate-800 z-10">
              landscape
            </span>

            {/* Decorative Graphic behind text */}
            <div className="absolute -right-12 -top-8 w-24 h-24 bg-gradient-to-br from-[#a3ff00]/30 to-transparent blur-2xl rounded-full -z-10"></div>

            {/* Version Box */}
            <div className="relative group ml-2 md:ml-6 rotate-6 hover:rotate-0 transition-transform duration-500">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-300 to-lime-300 rounded blur opacity-40 group-hover:opacity-75 transition"></div>
              <div className="relative px-3 py-1 bg-white rounded border border-slate-200">
                <span className="text-sm md:text-lg font-bold text-slate-900 font-serif italic">
                  Vol. 4
                </span>
              </div>
            </div>
          </div>
        </h1>

        <p className="reveal-delay-3 text-slate-500 text-lg md:text-xl max-w-xl mx-auto font-light leading-relaxed mb-10">
          Analyzing the shifts in consumer behavior and technology adoption across
          the modern web ecosystem.
        </p>

        {/* Control Interface */}
        <div className="reveal-delay-3 p-2 bg-white/60 backdrop-blur-md border border-slate-200 rounded-2xl shadow-xl shadow-slate-200/40 inline-flex flex-col md:flex-row items-center gap-2 md:gap-4 mx-auto w-full md:w-auto max-w-md md:max-w-none">
          {/* Dropdown Trigger */}
          <div className="flex items-center justify-between w-full md:w-auto px-4 py-2.5 bg-white rounded-xl border border-slate-100 hover:border-slate-200 transition-colors cursor-pointer min-w-[160px] group">
            <div className="flex flex-col items-start">
              <span className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">
                Region
              </span>
              <span className="text-sm font-medium text-slate-900 group-hover:text-emerald-600 transition-colors">
                Global Analysis
              </span>
            </div>
            <iconify-icon
              icon="lucide:chevron-down"
              class="text-slate-400 group-hover:text-slate-600"
            ></iconify-icon>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px h-8 bg-slate-200"></div>
          <div className="block md:hidden w-full h-px bg-slate-200"></div>

          {/* Slider */}
          <div className="flex items-center gap-4 px-4 w-full md:w-auto">
            <span className="text-xs font-medium text-slate-500">Q1</span>
            <div className="relative w-full md:w-48 h-1.5 bg-slate-100 rounded-full overflow-hidden">
              <div className="absolute inset-y-0 left-0 w-2/3 bg-slate-800 rounded-full"></div>
              {/* Animated stripes on bar */}
              <div className="absolute inset-0 w-full h-full bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%,transparent_100%)] bg-[length:10px_10px] animate-pulse"></div>
            </div>
            <span className="text-xs font-medium text-slate-900">Q4</span>
          </div>

          {/* Action */}
          <button className="w-full md:w-12 h-10 md:h-12 flex items-center justify-center rounded-xl bg-slate-900 text-white hover:bg-[#a3ff00] hover:text-slate-900 transition-all duration-300 shadow-md">
            <iconify-icon icon="lucide:arrow-right" width="20"></iconify-icon>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
