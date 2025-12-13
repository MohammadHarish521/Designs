'use client';

import { FiActivity, FiCpu, FiShield, FiSliders, FiUsers, FiServer, FiGlobe } from 'react-icons/fi';

export default function Features() {
  return (
    <section id="features" className="py-24 px-6 bg-neutral-950 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-white mb-4">
            Everything you need to scale
          </h2>
          <p className="text-neutral-400 text-lg font-light leading-relaxed">
            Built for teams managing AI costs at scale. Powerful governance, security, and observability out of the box.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
          {/* 1. Usage Limits & Governance (Span 4) */}
          <div className="md:col-span-4 bg-neutral-900/50 rounded-2xl border border-neutral-800 p-6 relative overflow-hidden group hover:border-neutral-700 transition-colors">
            <div className="relative z-10">
              <div className="w-10 h-10 bg-amber-400/10 rounded-lg flex items-center justify-center mb-4 text-amber-300 border border-amber-200/20">
                <FiSliders size={20} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold tracking-tight text-white mb-3">
                Usage Limits & Governance
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed max-w-lg mb-6">
                Set granular per-key request, token, or dollar limits. The gateway automatically blocks traffic when thresholds are reached.
              </p>
              
              {/* Visual: Budget Monitor */}
              <div className="bg-neutral-950 rounded-xl p-4 border border-neutral-800">
                <div className="flex justify-between text-xs mb-3 font-mono">
                  <span className="text-neutral-400">Monthly Budget</span>
                  <span className="text-white font-medium">$450.00 <span className="text-neutral-600">/</span> $500.00</span>
                </div>
                <div className="h-3 bg-neutral-800 rounded-full overflow-hidden relative">
                  <div className="absolute inset-0 bg-neutral-800"></div>
                  <div className="h-full bg-gradient-to-r from-amber-500 to-amber-300 w-[90%] rounded-full relative z-10 shadow-[0_0_10px_rgba(251,191,36,0.3)]"></div>
                </div>
                <div className="flex justify-between mt-3 text-[10px] text-neutral-500 font-mono uppercase tracking-widest">
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                    Active
                  </div>
                  <div>90% Used</div>
                </div>
              </div>
            </div>
          </div>

          {/* 2. Organizations, Teams & Security (Span 2) */}
          <div className="md:col-span-2 bg-neutral-900/50 rounded-2xl border border-neutral-800 p-6 relative overflow-hidden group hover:border-neutral-700 transition-colors">
            <div className="relative z-10">
              <div className="w-10 h-10 bg-amber-400/10 rounded-lg flex items-center justify-center mb-4 text-amber-300 border border-amber-200/20">
                <FiUsers size={20} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold tracking-tight text-white mb-3">
                Organizations
              </h3>
              <p className="text-neutral-400 text-sm mb-6">
                Manage teams with RBAC, encrypted keys, and strict isolation.
              </p>
              
              {/* Visual: User Roles */}
              <div className="space-y-2">
                <div className="flex items-center justify-between p-3 bg-neutral-950 rounded-lg border border-neutral-800">
                   <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full bg-purple-500/20 text-purple-300 flex items-center justify-center text-xs font-semibold border border-purple-500/30">JD</div>
                      <div>
                        <div className="text-xs text-white font-medium">Jane Doe</div>
                        <div className="text-[10px] text-neutral-500">Admin</div>
                      </div>
                   </div>
                   <div className="w-2 h-2 rounded-full bg-green-500"></div>
                </div>
                <div className="flex items-center justify-between p-3 bg-neutral-950 rounded-lg border border-neutral-800 opacity-60">
                   <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-300 flex items-center justify-center text-xs font-semibold border border-blue-500/30">JS</div>
                      <div>
                        <div className="text-xs text-white font-medium">John Smith</div>
                        <div className="text-[10px] text-neutral-500">Viewer</div>
                      </div>
                   </div>
                   <div className="w-2 h-2 rounded-full bg-neutral-600"></div>
                </div>
              </div>
            </div>
          </div>

          {/* 3. Analytics & Pricing (Span 2) */}
          <div className="md:col-span-2 bg-neutral-900/50 rounded-2xl border border-neutral-800 p-6 relative overflow-hidden group hover:border-neutral-700 transition-colors">
            <div className="relative z-10">
              <div className="w-10 h-10 bg-amber-400/10 rounded-lg flex items-center justify-center mb-4 text-amber-300 border border-amber-200/20">
                <FiActivity size={20} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold tracking-tight text-white mb-3">
                Analytics
              </h3>
              <p className="text-neutral-400 text-sm mb-6">
                Real-time visibility into usage, cost, and latency.
              </p>
              
              {/* Visual: Bar Chart */}
              <div className="pt-2">
                 <div className="flex items-end gap-1.5 h-24 px-2 pb-2 border-b border-l border-neutral-800">
                    {[35, 60, 25, 65, 45, 80, 50].map((h, i) => (
                       <div 
                         key={i} 
                         className="flex-1 bg-neutral-800 group-hover:bg-amber-500/50 transition-all duration-500 rounded-t-sm relative group/bar"
                         style={{height: `${h}%`}}
                       >
                       </div>
                    ))}
                 </div>
              </div>
            </div>
          </div>

          {/* 4. Smart Content (Span 4) */}
          <div className="md:col-span-4 bg-neutral-900/50 rounded-2xl border border-neutral-800 p-6 relative overflow-hidden group hover:border-neutral-700 transition-colors">
            <div className="relative z-10">
              <div className="w-10 h-10 bg-amber-400/10 rounded-lg flex items-center justify-center mb-4 text-amber-300 border border-amber-200/20">
                <FiShield size={20} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold tracking-tight text-white mb-3">
                Smart Content Controls
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed max-w-lg mb-6">
                Filter PII, block leaked keys, and enforce compliance policies at the proxy level.
              </p>
              
              {/* Visual: Code Snippet */}
              <div className="font-mono text-xs text-neutral-300 bg-neutral-950 p-4 rounded-xl border border-neutral-800 relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-3 opacity-10 pointer-events-none">
                    <FiShield className="w-24 h-24 -rotate-12" />
                 </div>
                 <div className="relative z-10">
                   <div className="flex gap-1.5 mb-3 opacity-50">
                     <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                     <div className="w-2.5 h-2.5 rounded-full bg-amber-500"></div>
                     <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                   </div>
                   <div className="space-y-1.5">
                     <div><span className="text-purple-400">const</span> <span className="text-blue-400">policy</span> = <span className="text-yellow-300">{'{'}</span></div>
                     <div className="pl-4"><span className="text-neutral-400">"pii_filter"</span>: <span className="text-green-400">"enabled"</span>,</div>
                     <div className="pl-4"><span className="text-neutral-400">"detect"</span>: [<span className="text-orange-300">"email"</span>, <span className="text-orange-300">"ssn"</span>],</div>
                     <div className="pl-4"><span className="text-neutral-400">"action"</span>: <span className="text-green-400">"redact_and_log"</span></div>
                     <div><span className="text-yellow-300">{'}'}</span>;</div>
                   </div>
                 </div>
              </div>
            </div>
          </div>

          {/* 5. Gateway Layer (Span 6 - Full Width) */}
          <div className="md:col-span-6 bg-neutral-900/50 rounded-2xl border border-neutral-800 p-5 relative overflow-hidden group hover:border-neutral-700 transition-colors">
            <div className="relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start md:items-center">
                {/* Copy */}
                <div className="md:col-span-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-amber-400/10 rounded-lg flex items-center justify-center text-amber-300 border border-amber-200/20">
                      <FiCpu size={20} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-xl font-semibold tracking-tight text-white">
                      High-Performance Gateway
                    </h3>
                  </div>
                  <p className="text-neutral-400 text-sm leading-relaxed">
                    Zero-copy streaming, connection pooling, and low-latency response handling.
                  </p>
                </div>

                {/* Metrics */}
                <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-1 gap-3 md:self-center">
                  <div className="bg-neutral-950 border border-neutral-800 p-3 rounded-lg">
                    <div className="text-[10px] text-neutral-500 uppercase tracking-wider mb-1.5">Latency</div>
                    <div className="text-lg font-mono text-white font-semibold">&lt; 5ms</div>
                  </div>
                  <div className="bg-neutral-950 border border-neutral-800 p-3 rounded-lg">
                    <div className="text-[10px] text-neutral-500 uppercase tracking-wider mb-1.5">Uptime</div>
                    <div className="text-lg font-mono text-green-400 font-semibold">99.99%</div>
                  </div>
                </div>

                {/* Flow Preview (no fixed height) */}
                <div className="md:col-span-3 bg-neutral-950/50 rounded-xl border border-neutral-800 p-3 md:self-center">
                  <div className="flex items-center justify-between text-[10px] text-neutral-500 font-mono uppercase tracking-widest">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                      Client
                    </span>
                    <span className="flex items-center gap-1.5 text-amber-500">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                      Gateway
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                      Provider
                    </span>
                  </div>

                  <div className="mt-3 relative h-2 bg-neutral-800/50 rounded-full overflow-hidden">
                    <div
                      className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-amber-500/40 to-green-500/20 animate-shimmer"
                      style={{ backgroundSize: '200% 100%' }}
                    />
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-full bg-gradient-to-r from-transparent via-amber-500 to-transparent rounded-full animate-pulse shadow-[0_0_20px_rgba(245,158,11,0.35)]" />
                  </div>

                  <div className="mt-3 flex justify-center">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 border border-amber-500/20 rounded-full">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                      <span className="text-[10px] text-amber-400 font-medium uppercase tracking-wider">Streaming</span>
                    </div>
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
