import {
  FiArrowRight,
  FiBarChart2,
  FiChevronRight,
  FiClock,
  FiDollarSign,
  FiHome,
  FiKey,
  FiMoreHorizontal,
  FiRepeat,
  FiServer,
  FiSettings,
  FiShield,
} from "react-icons/fi";
import { PiSparkleFill } from "react-icons/pi";
import {
  SiAnthropic,
  SiLinear,
  SiOpenai,
  SiStripe,
  SiSupabase,
  SiVercel,
} from "react-icons/si";

const chartBars = [30, 45, 35, 60, 75, 50, 80, 95, 65, 55, 40, 30, 45, 35, 25];
const liveLogs = [
  {
    model: "gpt-4-turbo",
    tokens: "8,192",
    status: "200 OK",
    statusTone: "success",
    time: "Just now",
    icon: SiOpenai,
  },
  {
    model: "claude-3-opus",
    tokens: "4,021",
    status: "200 OK",
    statusTone: "success",
    time: "2m ago",
    icon: SiAnthropic,
  },
  {
    model: "gpt-3.5-turbo",
    tokens: "1,204",
    status: "429 RATE",
    statusTone: "warn",
    time: "5m ago",
    icon: SiOpenai,
  },
];

export default function Hero() {
  return (
    <main className="relative z-10 grow flex flex-col items-center pt-12 pb-24 px-6 sm:px-8">
      {/* Background layer */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-black">
        {/* Black Basic Grid Background with parallax fade and center brightness */}
        <div
          className="absolute inset-0 z-0 animate-grid-fade"
          style={{
            background: "#000000",
            backgroundImage: `
        radial-gradient(circle at center, rgba(75, 85, 99, 0.15) 0%, transparent 70%),
        linear-gradient(to right, rgba(75, 85, 99, 0.3) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(75, 85, 99, 0.3) 1px, transparent 1px),
        url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.02'/%3E%3C/svg%3E")
      `,
            backgroundSize: "40px 40px, 40px 40px, 40px 40px, 200px 200px",
          }}
        />

        {/* Infra Background Graphs */}
        <div className="absolute inset-0 opacity-40 overflow-hidden">
          {/* Top Sine Wave */}
          <svg
            className="infra-graph top-20"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              className="infra-path"
              d="M0,160L48,144C96,128,192,96,288,106.7C384,117,480,171,576,165.3C672,160,768,96,864,96C960,96,1056,160,1152,186.7C1248,213,1344,203,1392,197.3L1440,192"
              strokeDasharray="8 8"
            ></path>
            <path
              className="beam-travel"
              d="M0,160L48,144C96,128,192,96,288,106.7C384,117,480,171,576,165.3C672,160,768,96,864,96C960,96,1056,160,1152,186.7C1248,213,1344,203,1392,197.3L1440,192"
            ></path>
          </svg>

          {/* Middle Digital Step */}
          <svg
            className="infra-graph top-1/3 scale-y-150"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              className="infra-path"
              d="M0,224L60,224L60,128L120,128L120,256L180,256L180,160L240,160L240,192L300,192L300,96L360,96"
              style={{ animationDuration: "80s" }}
              strokeOpacity="0.5"
            ></path>
            <path
              className="beam-travel"
              style={{ animationDuration: "5s", animationDelay: "1s" }}
              d="M0,224L60,224L60,128L120,128L120,256L180,256L180,160L240,160L240,192L300,192L300,96L360,96"
            ></path>
          </svg>

          {/* Bottom Network Pulse */}
          <svg
            className="infra-graph bottom-0 h-96 opacity-30"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              className="infra-path"
              d="M0,64L40,90L80,64L120,110L160,64L200,90L240,64L280,130L320,64"
              stroke="rgba(253, 224, 71, 0.1)"
              strokeWidth="2"
            ></path>
            <path
              className="beam-travel"
              style={{ animationDuration: "3s", animationDelay: "2s" }}
              d="M0,64L40,90L80,64L120,110L160,64L200,90L240,64L280,130L320,64"
            ></path>
          </svg>
        </div>

        <div className="beam-glow opacity-0"></div>
        <div className="shooting-beam"></div>
        <div className="shooting-beam"></div>
        <div className="shooting-beam"></div>
      </div>

      {/* Badge */}
      <div className="mt-8 mb-5 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-yellow-500/30 bg-yellow-500/10 text-yellow-300 text-[10px] font-bold tracking-widest uppercase shadow-[0_0_10px_rgba(234,179,8,0.2)] animate-fade-in">
        <PiSparkleFill className="w-3 h-3" />
        New Gateway 1.0
      </div>

      {/* Headline */}
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium text-center tracking-tighter text-white mb-6 max-w-5xl mx-auto leading-[1.05] drop-shadow-2xl animate-headline-fade">
        <span className="inline-block animate-headline-stagger">
          Scale AI safely without
        </span>
        <br className="md:block" />
        <span className="inline-block mt-2 relative group">
          <span className="font-mono font-normal text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-300 tracking-tighter relative z-10 animate-shimmer">
            touching_code
          </span>
          <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-yellow-400/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
        </span>
      </h1>

      {/* Subheadline */}
      <p className="text-lg md:text-xl text-neutral-400 text-center max-w-2xl mx-auto mb-10 font-light leading-relaxed tracking-wide animate-fade-in-delay">
        Full visibility, cost control, and security policies for LLM APIs.
        Integrate once, manage permissions everywhere.
      </p>

      {/* CTA with focal glow */}
      <div className="relative flex flex-col sm:flex-row gap-5 mb-20 animate-fade-in-delay-2">
        {/* Focal glow behind CTA */}
        <div className="absolute -inset-8 bg-gradient-radial from-yellow-400/10 via-yellow-400/5 to-transparent blur-2xl opacity-60 -z-10"></div>
        <button className="group relative inline-flex items-center justify-center gap-2.5 bg-[#FDE047] text-black px-8 py-4 rounded-full text-sm font-semibold tracking-tight hover:bg-[#fef08a] transition-all shadow-[0_0_30px_rgba(253,224,71,0.4)] hover:shadow-[0_0_50px_rgba(253,224,71,0.6)] min-h-[44px]">
          Start Integrating
          <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
        <button className="inline-flex items-center justify-center gap-2.5 bg-neutral-900 border border-neutral-800 text-neutral-300 px-8 py-4 rounded-full text-sm font-medium tracking-tight hover:border-neutral-600 hover:text-white transition-all backdrop-blur-md min-h-[44px]">
          Book a Demo
        </button>
      </div>

      {/* Dashboard Preview */}
      <div className="relative w-full max-w-6xl mx-auto perspective-1000 scale-[1.03] animate-dashboard-slide">
        {/* Rim light effect */}
        <div className="absolute -inset-px bg-gradient-to-b from-white/20 via-transparent to-transparent rounded-xl opacity-30 -z-10"></div>
        <div className="absolute -inset-1 bg-gradient-to-t from-yellow-300/10 to-transparent blur-3xl opacity-20 rounded-3xl"></div>
        <div className="relative bg-[#0A0A0A] border border-white/10 rounded-xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] overflow-hidden group ring-1 ring-white/5">
          <div className="border-beam z-20"></div>
          <div className="flex h-[600px] md:h-[700px]">
            {/* Sidebar */}
            <aside className="w-64 border-r border-white/5 bg-[#080808] hidden md:flex flex-col p-5">
              <div className="mb-10 px-2 flex items-center gap-2 opacity-50">
                <PiSparkleFill className="w-3.5 h-3.5" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em]">
                  Workspace
                </span>
              </div>
              <div className="space-y-2">
                <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-md bg-yellow-400/15 text-yellow-300 text-sm font-medium tracking-tight border border-yellow-400/20 shadow-[0_0_10px_rgba(253,224,71,0.1)]">
                  <FiHome className="w-4 h-4" />
                  Overview
                </button>
                <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-neutral-400 hover:text-neutral-200 hover:bg-white/5 text-sm font-normal tracking-tight transition-colors">
                  <FiRepeat className="w-4 h-4" />
                  Requests
                </button>
                <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-neutral-400 hover:text-neutral-200 hover:bg-white/5 text-sm font-normal tracking-tight transition-colors">
                  <FiShield className="w-4 h-4" />
                  Policies
                </button>
                <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-neutral-400 hover:text-neutral-200 hover:bg-white/5 text-sm font-normal tracking-tight transition-colors">
                  <FiKey className="w-4 h-4" />
                  API Keys
                </button>
                <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-neutral-400 hover:text-neutral-200 hover:bg-white/5 text-sm font-normal tracking-tight transition-colors">
                  <FiBarChart2 className="w-4 h-4" />
                  Analytics
                </button>
              </div>
              <div className="mt-auto pt-6 border-t border-white/5">
                <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-neutral-400 hover:text-neutral-200 text-sm font-normal tracking-tight transition-colors">
                  <FiSettings className="w-4 h-4" />
                  Settings
                </button>
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
                  <FiChevronRight className="w-3 h-3 opacity-40" />
                  <span className="text-white font-medium">Overview</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 text-[10px] font-medium tracking-wide text-neutral-400 bg-white/3 px-2.5 py-1 rounded-full border border-white/5 uppercase">
                    <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse"></span>
                    Operational
                  </div>
                </div>
              </header>

              {/* Dashboard Body */}
              <div className="p-8 overflow-y-auto custom-scrollbar">
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <div className="bg-neutral-900/40 border border-white/5 p-5 rounded-xl">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xs font-medium text-neutral-400 uppercase tracking-wider">
                        Requests
                      </h3>
                      <FiServer className="w-4 h-4 text-neutral-600" />
                    </div>
                    <div className="flex items-end gap-2">
                      <span className="font-mono text-3xl font-semibold text-white tracking-tighter">
                        1.2M
                      </span>
                      <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded mb-1.5 tracking-tight">
                        +12.5%
                      </span>
                    </div>
                  </div>
                  <div className="bg-neutral-900/40 border border-white/5 p-5 rounded-xl relative overflow-hidden group">
                    <div className="absolute inset-0 bg-yellow-300/3 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="flex justify-between items-start mb-4 relative z-10">
                      <h3 className="text-xs font-medium text-neutral-400 uppercase tracking-wider">
                        Cost Saved
                      </h3>
                      <FiDollarSign className="w-4 h-4 text-yellow-300" />
                    </div>
                    <div className="flex items-end gap-2 relative z-10">
                      <span className="font-mono text-3xl font-semibold text-yellow-300 tracking-tighter">
                        $4,203
                      </span>
                      <span className="text-[10px] font-medium text-neutral-500 mb-1.5 tracking-wide">
                        THIS MONTH
                      </span>
                    </div>
                  </div>
                  <div className="bg-neutral-900/40 border border-white/5 p-5 rounded-xl">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xs font-medium text-neutral-400 uppercase tracking-wider">
                        Avg Latency
                      </h3>
                      <FiClock className="w-4 h-4 text-neutral-600" />
                    </div>
                    <div className="flex items-end gap-2">
                      <span className="font-mono text-3xl font-semibold text-white tracking-tighter">
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
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]"></div>
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
                    {chartBars.map((height, index) => {
                      const highlighted = index === 8;
                      return (
                        <div
                          key={index}
                          className={`w-full rounded-t-sm transition-colors bar border-t ${
                            highlighted
                              ? "bg-yellow-300 hover:bg-yellow-200 shadow-[0_0_20px_rgba(253,224,71,0.2)] border-yellow-400/50"
                              : "bg-neutral-700/80 hover:bg-neutral-600/80 border-neutral-600/30"
                          }`}
                          style={{
                            height: `${height}%`,
                            animationDelay: `${0.05 * index}s`,
                          }}
                        />
                      );
                    })}
                  </div>
                  <div className="flex justify-between text-[10px] text-neutral-500 font-mono mt-4 uppercase tracking-widest relative z-10">
                    <span className="opacity-80">00:00</span>
                    <span className="opacity-80">06:00</span>
                    <span className="opacity-80">12:00</span>
                    <span className="opacity-80">18:00</span>
                    <span className="opacity-80">23:59</span>
                  </div>
                </div>

                {/* Logs Table */}
                <div className="border border-white/5 rounded-xl overflow-hidden shadow-lg">
                  <div className="bg-neutral-900/40 px-5 py-3 border-b border-white/5 flex justify-between items-center">
                    <h3 className="text-xs font-medium text-neutral-300 uppercase tracking-wider">
                      Live Logs
                    </h3>
                    <FiMoreHorizontal className="w-4 h-4 text-neutral-600 cursor-pointer hover:text-white transition-colors" />
                  </div>
                  <div className="bg-[#080808]">
                    <table className="w-full text-left text-xs">
                      <thead className="text-[10px] text-neutral-500 font-medium uppercase tracking-widest border-b border-white/5">
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
                        {liveLogs.map(
                          ({
                            model,
                            tokens,
                            status,
                            statusTone,
                            time,
                            icon: Icon,
                          }) => (
                            <tr
                              key={model}
                              className="group hover:bg-white/2 transition-colors"
                            >
                              <td className="px-5 py-3">
                                <div className="flex items-center gap-2">
                                  <Icon className="w-3.5 h-3.5 text-white opacity-80" />
                                  <span className="text-neutral-300 font-mono text-[11px] tracking-tight">
                                    {model}
                                  </span>
                                </div>
                              </td>
                              <td className="px-5 py-3 text-neutral-400 font-mono text-[11px] tracking-tight">
                                {tokens}
                              </td>
                              <td className="px-5 py-3">
                                <span
                                  className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold border tracking-wide ${
                                    statusTone === "success"
                                      ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                                      : "bg-yellow-300/10 text-yellow-300 border-yellow-300/20"
                                  }`}
                                >
                                  {status}
                                </span>
                              </td>
                              <td className="px-5 py-3 text-right text-neutral-500 text-[11px] tracking-tight">
                                {time}
                              </td>
                            </tr>
                          )
                        )}
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
          <SiVercel className="text-neutral-500 hover:text-white transition-colors w-5 h-5" />
          <SiStripe className="text-neutral-500 hover:text-white transition-colors w-11 h-5" />
          <SiLinear className="text-neutral-500 hover:text-white transition-colors w-5 h-5" />
          <SiSupabase className="text-neutral-500 hover:text-white transition-colors w-5 h-5" />
        </div>
      </div>
    </main>
  );
}
