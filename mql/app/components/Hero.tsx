import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <main className="relative z-10 flex-grow flex flex-col items-center pt-24 pb-40 px-6 sm:px-8 md:px-12 lg:px-16">
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
          {/* Dashboard Layout */}
          <div className="flex h-[600px] md:h-[700px]">
            {/* Sidebar */}
            <aside className="w-64 border-r border-white/5 bg-[#080808] hidden md:flex flex-col p-4">
              <div className="mb-8 px-2 flex items-center gap-2 opacity-50">
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                  />
                </svg>
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em]">
                  Workspace
                </span>
              </div>

              <div className="space-y-1">
                <a
                  href="#"
                  className="flex items-center gap-3 px-3 py-2 rounded-md bg-yellow-300/10 text-yellow-300 text-sm font-medium tracking-tight"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                  Overview
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 px-3 py-2 rounded-md text-neutral-500 hover:text-neutral-200 hover:bg-white/5 text-sm font-normal tracking-tight transition-colors"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                    />
                  </svg>
                  Requests
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 px-3 py-2 rounded-md text-neutral-500 hover:text-neutral-200 hover:bg-white/5 text-sm font-normal tracking-tight transition-colors"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                  Policies
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 px-3 py-2 rounded-md text-neutral-500 hover:text-neutral-200 hover:bg-white/5 text-sm font-normal tracking-tight transition-colors"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
                    />
                  </svg>
                  API Keys
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 px-3 py-2 rounded-md text-neutral-500 hover:text-neutral-200 hover:bg-white/5 text-sm font-normal tracking-tight transition-colors"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                  Analytics
                </a>
              </div>
              <div className="mt-auto pt-4 border-t border-white/5">
                <a
                  href="#"
                  className="flex items-center gap-3 px-3 py-2 rounded-md text-neutral-500 hover:text-neutral-200 text-sm font-normal tracking-tight transition-colors"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  Settings
                </a>
              </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col bg-[#050505]">
              {/* Header */}
              <header className="h-14 border-b border-white/5 flex items-center justify-between px-6 bg-[#0A0A0A]">
                <div className="flex items-center gap-2 text-xs text-neutral-500 tracking-wide">
                  <span className="hover:text-neutral-300 cursor-pointer">
                    Dashboard
                  </span>
                  <svg
                    className="w-3 h-3 opacity-40"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  <span className="text-white font-medium">Overview</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 text-[10px] font-medium tracking-wide text-neutral-400 bg-white/[0.03] px-2.5 py-1 rounded-full border border-white/5 uppercase">
                    <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse"></span>
                    Operational
                  </div>
                </div>
              </header>

              {/* Dashboard Content */}
              <div className="p-8 overflow-y-auto">
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  {/* Card 1 */}
                  <div className="bg-neutral-900/40 border border-white/5 p-5 rounded-xl">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xs font-medium text-neutral-400 uppercase tracking-wider">
                        Requests
                      </h3>
                      <svg
                        className="w-4 h-4 text-neutral-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                        />
                      </svg>
                    </div>
                    <div className="flex items-end gap-2">
                      <span className="text-3xl font-semibold text-white tracking-tighter">
                        1.2M
                      </span>
                      <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded mb-1.5 tracking-tight">
                        +12.5%
                      </span>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className="bg-neutral-900/40 border border-white/5 p-5 rounded-xl relative overflow-hidden group">
                    <div className="absolute inset-0 bg-yellow-300/[0.03] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="flex justify-between items-start mb-4 relative z-10">
                      <h3 className="text-xs font-medium text-neutral-400 uppercase tracking-wider">
                        Cost Saved
                      </h3>
                      <svg
                        className="w-4 h-4 text-yellow-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div className="flex items-end gap-2 relative z-10">
                      <span className="text-3xl font-semibold text-yellow-300 tracking-tighter">
                        $4,203
                      </span>
                      <span className="text-[10px] font-medium text-neutral-500 mb-1.5 tracking-wide">
                        THIS MONTH
                      </span>
                    </div>
                  </div>

                  {/* Card 3 */}
                  <div className="bg-neutral-900/40 border border-white/5 p-5 rounded-xl">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xs font-medium text-neutral-400 uppercase tracking-wider">
                        Avg Latency
                      </h3>
                      <svg
                        className="w-4 h-4 text-neutral-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div className="flex items-end gap-2">
                      <span className="text-3xl font-semibold text-white tracking-tighter">
                        142
                        <span className="text-lg text-neutral-500 font-normal ml-0.5">
                          ms
                        </span>
                      </span>
                      <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded mb-1.5 tracking-tight">
                        -24ms
                      </span>
                    </div>
                  </div>
                </div>

                {/* Chart Section */}
                <div className="bg-neutral-900/20 border border-white/5 rounded-xl p-6 mb-8 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

                  <div className="relative z-10 flex justify-between items-center mb-8">
                    <h3 className="text-xs font-medium text-white uppercase tracking-wider">
                      Traffic Volume
                    </h3>
                    <div className="flex gap-1">
                      <button className="px-2.5 py-1 text-[10px] font-semibold tracking-wide text-yellow-300 bg-yellow-300/10 rounded border border-yellow-300/20">
                        24H
                      </button>
                      <button className="px-2.5 py-1 text-[10px] font-semibold tracking-wide text-neutral-500 hover:text-neutral-300 transition-colors">
                        7D
                      </button>
                      <button className="px-2.5 py-1 text-[10px] font-semibold tracking-wide text-neutral-500 hover:text-neutral-300 transition-colors">
                        30D
                      </button>
                    </div>
                  </div>

                  <div className="relative z-10 h-48 flex items-end justify-between gap-1">
                    <div
                      className="w-full bg-neutral-800/60 hover:bg-yellow-300/40 transition-colors rounded-t-sm"
                      style={{ height: "30%" }}
                    ></div>
                    <div
                      className="w-full bg-neutral-800/60 hover:bg-yellow-300/40 transition-colors rounded-t-sm"
                      style={{ height: "45%" }}
                    ></div>
                    <div
                      className="w-full bg-neutral-800/60 hover:bg-yellow-300/40 transition-colors rounded-t-sm"
                      style={{ height: "35%" }}
                    ></div>
                    <div
                      className="w-full bg-neutral-800/60 hover:bg-yellow-300/40 transition-colors rounded-t-sm"
                      style={{ height: "60%" }}
                    ></div>
                    <div
                      className="w-full bg-neutral-800/60 hover:bg-yellow-300/40 transition-colors rounded-t-sm"
                      style={{ height: "75%" }}
                    ></div>
                    <div
                      className="w-full bg-neutral-800/60 hover:bg-yellow-300/40 transition-colors rounded-t-sm"
                      style={{ height: "50%" }}
                    ></div>
                    <div
                      className="w-full bg-neutral-800/60 hover:bg-yellow-300/40 transition-colors rounded-t-sm"
                      style={{ height: "80%" }}
                    ></div>
                    <div
                      className="w-full bg-neutral-800/60 hover:bg-yellow-300/40 transition-colors rounded-t-sm"
                      style={{ height: "95%" }}
                    ></div>
                    <div
                      className="w-full bg-yellow-300 hover:bg-yellow-200 transition-colors rounded-t-sm shadow-[0_0_20px_rgba(253,224,71,0.2)]"
                      style={{ height: "65%" }}
                    ></div>
                    <div
                      className="w-full bg-neutral-800/60 hover:bg-yellow-300/40 transition-colors rounded-t-sm"
                      style={{ height: "55%" }}
                    ></div>
                    <div
                      className="w-full bg-neutral-800/60 hover:bg-yellow-300/40 transition-colors rounded-t-sm"
                      style={{ height: "40%" }}
                    ></div>
                    <div
                      className="w-full bg-neutral-800/60 hover:bg-yellow-300/40 transition-colors rounded-t-sm"
                      style={{ height: "30%" }}
                    ></div>
                    <div
                      className="w-full bg-neutral-800/60 hover:bg-yellow-300/40 transition-colors rounded-t-sm"
                      style={{ height: "45%" }}
                    ></div>
                    <div
                      className="w-full bg-neutral-800/60 hover:bg-yellow-300/40 transition-colors rounded-t-sm"
                      style={{ height: "35%" }}
                    ></div>
                    <div
                      className="w-full bg-neutral-800/60 hover:bg-yellow-300/40 transition-colors rounded-t-sm"
                      style={{ height: "25%" }}
                    ></div>
                  </div>

                  <div className="flex justify-between text-[10px] text-neutral-600 font-mono mt-3 uppercase tracking-widest relative z-10">
                    <span>00:00</span>
                    <span>06:00</span>
                    <span>12:00</span>
                    <span>18:00</span>
                    <span>23:59</span>
                  </div>
                </div>

                {/* Logs Table */}
                <div className="border border-white/5 rounded-xl overflow-hidden shadow-lg">
                  <div className="bg-neutral-900/40 px-5 py-3 border-b border-white/5 flex justify-between items-center">
                    <h3 className="text-xs font-medium text-neutral-300 uppercase tracking-wider">
                      Live Logs
                    </h3>
                    <svg
                      className="w-4 h-4 text-neutral-600 cursor-pointer hover:text-white transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                      />
                    </svg>
                  </div>
                  <div className="bg-[#080808]">
                    <table className="w-full text-left text-xs">
                      <thead className="text-[10px] text-neutral-500 font-medium uppercase tracking-[0.1em] border-b border-white/5">
                        <tr>
                          <th className="px-5 py-3 font-normal">Model</th>
                          <th className="px-5 py-3 font-normal">Tokens</th>
                          <th className="px-5 py-3 font-normal">Status</th>
                          <th className="px-5 py-3 font-normal text-right">
                            Time
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5">
                        <tr className="group hover:bg-white/[0.02] transition-colors">
                          <td className="px-5 py-3">
                            <div className="flex items-center gap-2">
                              <span className="text-neutral-300 font-mono text-[11px] tracking-tight">
                                gpt-4-turbo
                              </span>
                            </div>
                          </td>
                          <td className="px-5 py-3 text-neutral-400 font-mono text-[11px] tracking-tight">
                            8,192
                          </td>
                          <td className="px-5 py-3">
                            <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 tracking-wide">
                              200 OK
                            </span>
                          </td>
                          <td className="px-5 py-3 text-right text-neutral-500 text-[11px] tracking-tight">
                            Just now
                          </td>
                        </tr>
                        <tr className="group hover:bg-white/[0.02] transition-colors">
                          <td className="px-5 py-3">
                            <div className="flex items-center gap-2">
                              <span className="text-neutral-300 font-mono text-[11px] tracking-tight">
                                claude-3-opus
                              </span>
                            </div>
                          </td>
                          <td className="px-5 py-3 text-neutral-400 font-mono text-[11px] tracking-tight">
                            4,021
                          </td>
                          <td className="px-5 py-3">
                            <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 tracking-wide">
                              200 OK
                            </span>
                          </td>
                          <td className="px-5 py-3 text-right text-neutral-500 text-[11px] tracking-tight">
                            2m ago
                          </td>
                        </tr>
                        <tr className="group hover:bg-white/[0.02] transition-colors">
                          <td className="px-5 py-3">
                            <div className="flex items-center gap-2">
                              <span className="text-neutral-300 font-mono text-[11px] tracking-tight">
                                gpt-3.5-turbo
                              </span>
                            </div>
                          </td>
                          <td className="px-5 py-3 text-neutral-400 font-mono text-[11px] tracking-tight">
                            1,204
                          </td>
                          <td className="px-5 py-3">
                            <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold bg-yellow-300/10 text-yellow-300 border border-yellow-300/20 tracking-wide">
                              429 RATE
                            </span>
                          </td>
                          <td className="px-5 py-3 text-right text-neutral-500 text-[11px] tracking-tight">
                            5m ago
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
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
