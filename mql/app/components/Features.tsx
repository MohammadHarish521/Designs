'use client';

import { FiActivity, FiCpu, FiShield, FiSliders, FiUsers, FiServer, FiGlobe } from 'react-icons/fi';

export default function Features() {
  return (
    <section id="features" className="py-24 px-6 bg-neutral-950 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-white mb-4">
            Features
          </h2>
          <p className="text-neutral-400 text-lg font-light">
            Built for teams managing AI costs at scale. Here&apos;s what you actually get.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* 1. Usage Limits & Governance (2 cols) */}
          <div className="md:col-span-2 bg-neutral-900 rounded-2xl border border-neutral-800 p-8 relative overflow-hidden group hover:border-neutral-700 transition-colors">
            <div className="relative z-10">
              <div className="w-10 h-10 bg-amber-400/10 rounded-lg flex items-center justify-center mb-6 text-amber-300 border border-amber-200/70">
                <FiSliders size={20} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold tracking-tight text-white mb-4">
                Usage Limits & Governance
              </h3>
              <p className="text-neutral-400 mb-6 leading-relaxed max-w-md">
                Set per-key request, token, or dollar limits. The gateway automatically blocks traffic when thresholds are reached.
              </p>
              
              {/* Visual: Budget Monitor */}
              <div className="mt-8 bg-neutral-950 rounded-xl p-5 border border-neutral-800 shadow-inner">
                <div className="flex justify-between text-xs mb-3 font-mono">
                  <span className="text-neutral-400">Monthly Budget (Project A)</span>
                  <span className="text-white">$450.00 <span className="text-neutral-600">/</span> $500.00</span>
                </div>
                <div className="h-3 bg-neutral-800 rounded-full overflow-hidden relative">
                  <div className="absolute inset-0 bg-neutral-800"></div>
                  <div className="h-full bg-gradient-to-r from-amber-500 to-amber-300 w-[90%] rounded-full relative z-10 shadow-[0_0_10px_rgba(251,191,36,0.5)]"></div>
                </div>
                <div className="flex justify-between mt-4 text-[10px] text-neutral-500 font-mono uppercase tracking-widest">
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                    Active
                  </div>
                  <div>90% Used</div>
                </div>
              </div>
            </div>
          </div>

          {/* 2. Organizations, Teams & Security (1 col) */}
          <div className="md:col-span-1 bg-neutral-900 rounded-2xl border border-neutral-800 p-8 relative overflow-hidden group hover:border-neutral-700 transition-colors">
            <div className="relative z-10 h-full flex flex-col">
              <div className="w-10 h-10 bg-amber-400/10 rounded-lg flex items-center justify-center mb-6 text-amber-300 border border-amber-200/70">
                <FiUsers size={20} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold tracking-tight text-white mb-4">
                Organizations & Teams
              </h3>
              <p className="text-neutral-400 text-sm mb-6">
                Manage teams with RBAC, encrypted keys, and strict data isolation.
              </p>
              
              {/* Visual: User Roles */}
              <div className="mt-auto space-y-3">
                <div className="flex items-center justify-between p-3 bg-neutral-950 rounded-lg border border-neutral-800">
                   <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-purple-500/20 text-purple-300 flex items-center justify-center text-xs font-semibold border border-purple-500/30">JD</div>
                      <div>
                        <div className="text-xs text-white font-medium">Jane Doe</div>
                        <div className="text-[10px] text-neutral-500">jane@mql.com</div>
                      </div>
                   </div>
                   <span className="text-[10px] bg-amber-500/10 text-amber-300 px-2 py-0.5 rounded border border-amber-500/20">Admin</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-neutral-950 rounded-lg border border-neutral-800 opacity-60">
                   <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-300 flex items-center justify-center text-xs font-semibold border border-blue-500/30">JS</div>
                      <div>
                        <div className="text-xs text-white font-medium">John Smith</div>
                        <div className="text-[10px] text-neutral-500">john@mql.com</div>
                      </div>
                   </div>
                   <span className="text-[10px] bg-neutral-800 text-neutral-400 px-2 py-0.5 rounded border border-neutral-700">Viewer</span>
                </div>
              </div>
            </div>
          </div>

          {/* 3. Analytics & Pricing (1 col) */}
          <div className="md:col-span-1 bg-neutral-900 rounded-2xl border border-neutral-800 p-8 relative overflow-hidden group hover:border-neutral-700 transition-colors">
            <div className="relative z-10 h-full flex flex-col">
              <div className="w-10 h-10 bg-amber-400/10 rounded-lg flex items-center justify-center mb-6 text-amber-300 border border-amber-200/70">
                <FiActivity size={20} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold tracking-tight text-white mb-4">
                Analytics & Pricing
              </h3>
              <p className="text-neutral-400 text-sm mb-6">
                Real-time visibility into token usage, cost, and latency with auto-synced pricing.
              </p>
              
              {/* Visual: Bar Chart */}
              <div className="mt-auto">
                 <div className="flex items-end gap-2 h-32 px-2 pb-2 border-b border-l border-neutral-800">
                    {[35, 60, 25, 65, 45, 80, 50].map((h, i) => (
                       <div 
                         key={i} 
                         className="flex-1 bg-neutral-800 group-hover:bg-amber-500/50 transition-all duration-500 rounded-t-sm relative group/bar"
                         style={{height: `${h}%`}}
                       >
                         <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-white opacity-0 group-hover/bar:opacity-100 transition-opacity bg-neutral-900 px-1 rounded border border-neutral-700">
                           {h}
                         </div>
                       </div>
                    ))}
                 </div>
                 <div className="flex justify-between text-[10px] text-neutral-600 mt-2 px-1 font-mono">
                    <span>Mon</span>
                    <span>Sun</span>
                 </div>
              </div>
            </div>
          </div>

          {/* 4. Smart Content (2 cols) */}
          <div className="md:col-span-2 bg-neutral-900 rounded-2xl border border-neutral-800 p-8 relative overflow-hidden group hover:border-neutral-700 transition-colors">
            <div className="relative z-10">
              <div className="w-10 h-10 bg-amber-400/10 rounded-lg flex items-center justify-center mb-6 text-amber-300 border border-amber-200/70">
                <FiShield size={20} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold tracking-tight text-white mb-4">
                Smart Content & Request Controls
              </h3>
              <p className="text-neutral-400 mb-6 leading-relaxed max-w-md">
                Filter PII, block leaked keys, and enforce compliance policies at the proxy level.
              </p>
              
              {/* Visual: Code Snippet */}
              <div className="mt-8 font-mono text-xs text-neutral-300 bg-neutral-950 p-5 rounded-xl border border-neutral-800 relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-2 opacity-20">
                    <FiShield className="w-24 h-24 rotate-12" />
                 </div>
                 <div className="relative z-10">
                   <div className="flex gap-1.5 mb-4 opacity-50">
                     <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                     <div className="w-2.5 h-2.5 rounded-full bg-amber-500"></div>
                     <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                   </div>
                   <div className="space-y-1.5">
                     <div><span className="text-purple-400">const</span> <span className="text-blue-400">policy</span> = <span className="text-yellow-300">{'{'}</span></div>
                     <div className="pl-4"><span className="text-neutral-400">"pii_filter"</span>: <span className="text-green-400">"enabled"</span>,</div>
                     <div className="pl-4"><span className="text-neutral-400">"detect"</span>: [<span className="text-orange-300">"email"</span>, <span className="text-orange-300">"ssn"</span>, <span className="text-orange-300">"phone"</span>],</div>
                     <div className="pl-4"><span className="text-neutral-400">"action"</span>: <span className="text-green-400">"redact_and_log"</span>,</div>
                     <div className="pl-4"><span className="text-neutral-400">"custom_regex"</span>: [<span className="text-orange-300">"PCI-DSS"</span>]</div>
                     <div><span className="text-yellow-300">{'}'}</span>;</div>
                   </div>
                 </div>
              </div>
            </div>
          </div>

          {/* 5. Gateway Layer (3 cols) */}
          <div className="md:col-span-3 bg-neutral-900 rounded-2xl border border-neutral-800 p-8 relative overflow-hidden group hover:border-neutral-700 transition-colors">
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-16">
               <div className="flex-1">
                 <div className="w-10 h-10 bg-amber-400/10 rounded-lg flex items-center justify-center mb-6 text-amber-300 border border-amber-200/70">
                    <FiCpu size={20} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-semibold tracking-tight text-white mb-2">
                    High-Performance Gateway
                  </h3>
                  <p className="text-neutral-400 leading-relaxed">
                    Zero-copy streaming, connection pooling, and low-latency response handling.
                  </p>
                  
                  <div className="mt-8 flex gap-4">
                     <div className="flex-1 bg-neutral-950 border border-neutral-800 p-3 rounded-lg text-center">
                        <div className="text-[10px] text-neutral-500 uppercase tracking-wider mb-1">Latency Added</div>
                        <div className="text-lg font-mono text-white font-medium">&lt; 5ms</div>
                     </div>
                     <div className="flex-1 bg-neutral-950 border border-neutral-800 p-3 rounded-lg text-center">
                        <div className="text-[10px] text-neutral-500 uppercase tracking-wider mb-1">Uptime</div>
                        <div className="text-lg font-mono text-green-400 font-medium">99.99%</div>
                     </div>
                  </div>
               </div>
               
               <div className="flex-1 w-full relative h-32 bg-neutral-950/50 rounded-xl border border-neutral-800 overflow-hidden flex items-center justify-center">
                   {/* Abstract Stream Visual */}
                   <div className="absolute inset-0 flex items-center justify-around opacity-30">
                      {[...Array(20)].map((_, i) => (
                        <div key={i} className="w-px h-full bg-neutral-800"></div>
                      ))}
                   </div>
                   <div className="relative z-10 w-full px-8">
                      <div className="flex items-center justify-between text-xs text-neutral-500 font-mono mb-2">
                         <span>Client</span>
                         <span className="text-amber-500">MQL Gateway</span>
                         <span>OpenAI</span>
                      </div>
                      <div className="h-1 bg-neutral-800 rounded-full overflow-hidden">
                         <div className="h-full w-1/3 bg-amber-500 animate-pulse rounded-full ml-[33%] shadow-[0_0_15px_rgba(245,158,11,0.5)]"></div>
                      </div>
                      <div className="flex justify-center mt-2">
                         <span className="text-[10px] text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20 animate-pulse">Streaming...</span>
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
