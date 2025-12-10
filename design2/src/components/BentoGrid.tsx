
const BentoGrid = () => {
  return (
    <section className="relative max-w-6xl mx-auto px-6 py-24 z-20">
      {/* Background Grid Connector Lines */}
      <svg className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none overflow-visible">
        {/* Line connecting top center to first card */}
        <path
          d="M570,-40 L570,20 L300,20 L300,50"
          fill="none"
          stroke="#e2e8f0"
          strokeWidth="1"
          className="hidden md:block"
        ></path>
        <circle
          cx="570"
          cy="-40"
          r="3"
          fill="#cbd5e1"
          className="hidden md:block"
        ></circle>
      </svg>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[320px]">
        {/* Large Main Graph Card */}
        <div className="md:col-span-2 row-span-1 bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 relative overflow-hidden group">
          {/* Hover Glow */}
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-slate-50 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

          <div className="relative z-10 h-full flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 bg-slate-50 border border-slate-100 rounded-lg flex items-center justify-center text-slate-700">
                    <iconify-icon
                      icon="lucide:bar-chart-2"
                      width="16"
                    ></iconify-icon>
                  </div>
                  <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                    Live Data
                  </span>
                </div>
                <h3 className="text-2xl font-medium tracking-tight text-slate-900">
                  Adoption Velocity
                </h3>
                <p className="text-slate-500 text-sm mt-1">
                  Market penetration speed per quarter.
                </p>
              </div>
              <div className="text-right">
                <span className="text-3xl font-semibold tracking-tight text-slate-900">
                  +42%
                </span>
                <p className="text-[10px] text-slate-400 uppercase tracking-wider font-medium">
                  Year over Year
                </p>
              </div>
            </div>

            {/* Enhanced Chart Visual */}
            <div className="w-full h-32 flex items-end gap-1.5 mt-4 relative">
              {/* Horizontal Grid Lines */}
              <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                <div className="w-full h-px bg-slate-50 dashed"></div>
                <div className="w-full h-px bg-slate-50 dashed"></div>
                <div className="w-full h-px bg-slate-50 dashed"></div>
              </div>

              {/* Bars */}
              <div className="w-full bg-slate-50 border border-slate-100 h-[30%] rounded-t-sm transition-all duration-500 group-hover:bg-slate-100"></div>
              <div className="w-full bg-slate-100 border border-slate-200 h-[45%] rounded-t-sm transition-all duration-500 group-hover:bg-slate-200 delay-75"></div>
              <div className="w-full bg-slate-200 border border-slate-300 h-[35%] rounded-t-sm transition-all duration-500 group-hover:bg-slate-300 delay-100"></div>
              <div className="w-full bg-slate-300 border border-slate-400 h-[55%] rounded-t-sm transition-all duration-500 group-hover:bg-slate-400 delay-150"></div>
              <div className="w-full bg-[#a3ff00] border border-lime-400 h-[75%] rounded-t-sm shadow-[0_0_20px_rgba(163,255,0,0.3)] relative group-hover:h-[85%] transition-all duration-700 ease-out delay-200">
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                  Q4
                </div>
              </div>
              <div className="w-full bg-slate-100 h-[40%] rounded-t-sm"></div>
            </div>
          </div>
        </div>

        {/* Dark Stats Card */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 shadow-xl flex flex-col justify-between relative overflow-hidden group">
          {/* Mesh Gradient Background */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-slate-800 via-slate-900 to-slate-950"></div>
          {/* Animated Pulse Circle */}
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-indigo-500/20 rounded-full blur-2xl group-hover:bg-indigo-500/30 transition-colors"></div>

          <div className="relative z-10">
            <div className="flex justify-between items-start mb-6">
              <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center">
                <iconify-icon
                  icon="lucide:users"
                  width="20"
                  class="text-slate-300"
                ></iconify-icon>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-xs text-slate-400">Active</span>
              </div>
            </div>

            <div className="space-y-1">
              <div className="text-5xl font-medium tracking-tighter">2.4M</div>
              <div className="text-slate-400 text-sm">Total Sessions</div>
            </div>
          </div>

          <div className="relative z-10 pt-6 border-t border-slate-800">
            <div className="flex justify-between items-center">
              <span className="text-xs text-slate-400">Retention</span>
              <span className="text-xs font-mono text-[#a3ff00]">98.2%</span>
            </div>
            <div className="w-full bg-slate-800 h-1 mt-2 rounded-full overflow-hidden">
              <div className="bg-[#a3ff00] h-full w-[98%] rounded-full"></div>
            </div>
          </div>
        </div>

        {/* List Card with Connectors */}
        <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm flex flex-col justify-between group hover:border-slate-300 transition-colors relative">
          {/* Decorative Connector Top */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[1px] w-12 h-[2px] bg-slate-200 group-hover:bg-slate-300 transition-colors"></div>

          <div>
            <h3 className="text-lg font-medium tracking-tight mb-6 flex items-center gap-2">
              <iconify-icon
                icon="lucide:layers"
                width="18"
                class="text-slate-400"
              ></iconify-icon>
              Top Vectors
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-sm text-slate-600 group/item hover:text-slate-900 transition-colors cursor-default">
                <div className="w-8 h-8 rounded-lg bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-600 group-hover/item:scale-110 transition-transform">
                  <iconify-icon
                    icon="lucide:smartphone"
                    width="14"
                  ></iconify-icon>
                </div>
                <span className="font-medium">Mobile First</span>
                <span className="ml-auto text-slate-400 font-mono text-xs bg-slate-50 px-2 py-1 rounded">
                  45%
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-600 group/item hover:text-slate-900 transition-colors cursor-default">
                <div className="w-8 h-8 rounded-lg bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600 group-hover/item:scale-110 transition-transform">
                  <iconify-icon icon="lucide:cpu" width="14"></iconify-icon>
                </div>
                <span className="font-medium">AI Models</span>
                <span className="ml-auto text-slate-400 font-mono text-xs bg-slate-50 px-2 py-1 rounded">
                  32%
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-600 group/item hover:text-slate-900 transition-colors cursor-default">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 group-hover/item:scale-110 transition-transform">
                  <iconify-icon icon="lucide:leaf" width="14"></iconify-icon>
                </div>
                <span className="font-medium">Eco Tech</span>
                <span className="ml-auto text-slate-400 font-mono text-xs bg-slate-50 px-2 py-1 rounded">
                  23%
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Infrastructure Card with Isometric Visual */}
        <div className="md:col-span-2 bg-gradient-to-br from-slate-50 via-white to-slate-50 border border-slate-200 rounded-3xl p-8 flex items-center justify-between relative overflow-hidden group">
          <div className="relative z-10 max-w-sm">
            <div className="inline-flex items-center gap-2 px-2 py-1 rounded border border-slate-200 bg-white mb-4">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></div>
              <span className="text-[10px] uppercase font-semibold text-slate-500 tracking-wide">
                System Status
              </span>
            </div>
            <h3 className="text-2xl font-medium tracking-tight mb-2 text-slate-900">
              Edge Infrastructure
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-8">
              Optimized for distributed systems with sub-millisecond latency
              across global regions.
            </p>

            <div className="flex gap-8">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">
                  Latency
                </span>
                <span className="text-xl font-medium font-mono text-slate-900">
                  12ms
                </span>
              </div>
              <div className="w-px h-10 bg-slate-200"></div>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">
                  Uptime
                </span>
                <span className="text-xl font-medium font-mono text-slate-900">
                  99.99%
                </span>
              </div>
            </div>
          </div>

          {/* Isometric Server Illustration */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-80 h-80 opacity-90 transition-transform duration-700 group-hover:scale-105">
            {/* Base Plate */}
            <div className="absolute top-[40%] right-[10%] w-48 h-48 bg-white border border-slate-200 rounded-2xl shadow-2xl transform rotate-x-60 rotate-z-45 translate-x-4 skew-y-12"></div>
            {/* Middle Plate */}
            <div className="absolute top-[35%] right-[15%] w-48 h-48 bg-white border border-slate-200 rounded-2xl shadow-xl transform rotate-x-60 rotate-z-45 translate-x-4 skew-y-12 z-10 transition-all duration-500 group-hover:-translate-y-4">
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-50 to-transparent"></div>
            </div>
            {/* Top Plate */}
            <div className="absolute top-[30%] right-[20%] w-48 h-48 bg-white border border-slate-200 rounded-2xl shadow-lg transform rotate-x-60 rotate-z-45 translate-x-4 skew-y-12 z-20 flex items-center justify-center transition-all duration-500 group-hover:-translate-y-8">
              <div className="transform -rotate-45 -skew-y-12">
                <iconify-icon
                  icon="lucide:server"
                  width="48"
                  class="text-slate-300"
                ></iconify-icon>
              </div>
            </div>
            {/* Connecting Data Lines */}
            <svg className="absolute top-0 right-0 w-full h-full z-30 pointer-events-none">
              <path
                d="M100,100 L200,150"
                stroke="#a3ff00"
                strokeWidth="2"
                className="animate-flow"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
