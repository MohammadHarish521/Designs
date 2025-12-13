"use client";

import { FiBarChart2, FiKey, FiRepeat } from "react-icons/fi";
import { PiCheckCircleFill, PiCopySimple } from "react-icons/pi";

export default function Works() {
  return (
    <section
      id="works"
      className="relative py-24 bg-neutral-950 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-white mb-4">
            Three steps to production-ready AI infrastructure
          </h2>
          <p className="text-neutral-400 text-lg font-light">
            Metriqual is a smart control layer that sits between your
            application and AI providers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
          {/* Step 1 */}
          <div className="group relative bg-neutral-900/50 border border-neutral-800 rounded-2xl p-6 hover:border-neutral-700 transition-colors">
            <div className="absolute -top-3 left-6 bg-neutral-950 border border-neutral-800 rounded-full px-3 py-1 text-xs font-mono text-neutral-400">
              Step 01
            </div>
            <div className="mb-6 flex items-center gap-4">
              <div className="h-10 w-10 rounded-lg bg-amber-400/10 flex items-center justify-center text-amber-300 border border-amber-200/70">
                <FiKey className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-medium text-white">
                Create a Proxy Key
              </h3>
            </div>
            <p className="text-neutral-400 text-sm mb-6 leading-relaxed">
              Store your OpenAI/Claude API keys in MQL. Set usage limits
              (requests, tokens, or dollars). Keys are encrypted and stored in
              PostgreSQL.
            </p>
            <div className="bg-neutral-950 rounded-lg p-4 border border-neutral-800 font-mono text-xs text-neutral-300 overflow-x-auto custom-scrollbar">
              <div className="flex items-center justify-between mb-2 text-neutral-500">
                <span>bash</span>
                <PiCopySimple className="cursor-pointer hover:text-white" />
              </div>
              <pre className="whitespace-pre text-neutral-400">
                <span className="text-purple-400">curl</span> -X POST
                https://api.metriqual.com/v1/proxy-keys \{"\n"}
                {"  "}-H{" "}
                <span className="text-green-400">
                  &quot;Authorization: Bearer YOUR_JWT_TOKEN&quot;
                </span>{" "}
                \{"\n"}
                {"  "}-d {"{"}
                {"\n"}
                {"    "}
                <span className="text-green-400">&quot;name&quot;</span>:{" "}
                <span className="text-yellow-200">
                  &quot;Your Proxy Key Name&quot;
                </span>
                ,{"\n"}
                {"    "}
                <span className="text-green-400">&quot;providers&quot;</span>: [
                {"{"}
                {"\n"}
                {"      "}
                <span className="text-green-400">
                  &quot;provider&quot;
                </span>:{" "}
                <span className="text-yellow-200">&quot;openai&quot;</span>,
                {"\n"}
                {"      "}
                <span className="text-green-400">
                  &quot;api_key&quot;
                </span>:{" "}
                <span className="text-yellow-200">&quot;sk-...&quot;</span>,
                {"\n"}
                {"      "}
                <span className="text-green-400">&quot;usage_limit&quot;</span>:
                1000
                {"\n"}
                {"    "}
                {"}"}
                {"]"}
                {"\n"}
                {"  "}
                {"}"}
                {"\n"}
              </pre>
            </div>
          </div>

          {/* Step 2 */}
          <div className="group relative bg-neutral-900/50 border border-neutral-800 rounded-2xl p-6 hover:border-neutral-700 transition-colors">
            <div className="absolute -top-3 left-6 bg-neutral-950 border border-neutral-800 rounded-full px-3 py-1 text-xs font-mono text-neutral-400">
              Step 02
            </div>
            <div className="mb-6 flex items-center gap-4">
              <div className="h-10 w-10 rounded-lg bg-blue-400/10 flex items-center justify-center text-blue-300 border border-blue-200/70">
                <FiRepeat className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-medium text-white">
                Swap Your Endpoint
              </h3>
            </div>
            <p className="text-neutral-400 text-sm mb-6 leading-relaxed">
              Point your OpenAI SDK to MQL&apos;s endpoint. Use your proxy key
              instead of the original API key. Zero code changes required.
            </p>
            <div className="bg-neutral-950 rounded-lg p-4 border border-neutral-800 font-mono text-xs text-neutral-300 overflow-x-auto custom-scrollbar">
              <div className="flex items-center justify-between mb-2 text-neutral-500">
                <span>.env</span>
                <PiCopySimple className="cursor-pointer hover:text-white" />
              </div>
              <div className="space-y-1">
                <div className="text-neutral-500 text-[10px] uppercase tracking-wider mb-1">
                  Before
                </div>
                <div className="text-neutral-400">
                  OPENAI_BASE_URL=
                  <span className="text-neutral-500">
                    https://api.openai.com/v1
                  </span>
                </div>
                <div className="my-2 border-t border-neutral-800/50"></div>
                <div className="text-neutral-500 text-[10px] uppercase tracking-wider mb-1">
                  After
                </div>
                <div className="text-white">
                  OPENAI_BASE_URL=
                  <span className="text-green-400">
                    https://api.metriqual.com/v1
                  </span>
                </div>
                <div className="text-white">
                  OPENAI_API_KEY=
                  <span className="text-yellow-200">pk_your_proxy_key</span>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="group relative bg-neutral-900/50 border border-neutral-800 rounded-2xl p-6 hover:border-neutral-700 transition-colors">
            <div className="absolute -top-3 left-6 bg-neutral-950 border border-neutral-800 rounded-full px-3 py-1 text-xs font-mono text-neutral-400">
              Step 03
            </div>
            <div className="mb-6 flex items-center gap-4">
              <div className="h-10 w-10 rounded-lg bg-purple-400/10 flex items-center justify-center text-purple-300 border border-purple-200/70">
                <FiBarChart2 className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-medium text-white">
                Monitor & Control
              </h3>
            </div>
            <p className="text-neutral-400 text-sm mb-6 leading-relaxed">
              View real-time analytics, set up filters, configure webhooks,
              invite team members. All from the dashboard.
            </p>
            <div className="grid grid-cols-1 gap-3">
              {[
                { label: "Analytics", desc: "Track costs & usage" },
                { label: "Filters", desc: "Block PII & sensitive data" },
                { label: "Teams", desc: "Manage orgs & members" },
                { label: "Webhooks", desc: "Get event notifications" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-3 p-2 rounded-lg hover:bg-neutral-800/50 transition-colors"
                >
                  <PiCheckCircleFill className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-medium text-white">
                      {item.label}
                    </div>
                    <div className="text-xs text-neutral-500">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Noodle / Beam Animation - Desktop Only */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10 hidden lg:block overflow-visible">
          <svg
            className="absolute top-0 left-0 w-full h-full overflow-visible"
            viewBox="0 0 1200 400"
            preserveAspectRatio="none"
          >
            {/* Main connecting path */}
            <path
              d="M 100 200 C 300 200, 300 200, 600 200 C 900 200, 900 200, 1100 200"
              fill="none"
              stroke="rgba(255,255,255,0.05)"
              strokeWidth="4"
              vectorEffect="non-scaling-stroke"
            />
            <path
              d="M 100 200 C 300 200, 300 200, 600 200 C 900 200, 900 200, 1100 200"
              fill="none"
              stroke="url(#beam-gradient)"
              strokeWidth="4"
              className="beam-travel"
              vectorEffect="non-scaling-stroke"
            />

            <defs>
              <linearGradient
                id="beam-gradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="transparent" />
                <stop offset="50%" stopColor="#facc15" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </section>
  );
}
