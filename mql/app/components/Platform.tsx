import { FiCpu, FiDatabase, FiGlobe } from 'react-icons/fi';
import { PiWaveformBold } from 'react-icons/pi';

export default function Platform() {
  return (
    <>
      {/* Connector (Noodle 2) */}
      <div className="w-full flex justify-center relative h-12 bg-neutral-950 overflow-visible z-0">
        <svg
          className="absolute -top-6 w-[600px] h-24 overflow-visible hidden md:block"
          viewBox="0 0 600 100"
          fill="none"
        >
          {/* Path connecting middle of metrics to Bento Grid */}
          <path
            d="M 300 -50 V 20 Q 300 50 200 50 H 100 Q 0 50 0 80 V 100"
            stroke="currentColor"
            className="text-neutral-800"
            strokeWidth="1"
            fill="none"
            vectorEffect="non-scaling-stroke"
          ></path>
          <path
            d="M 300 -50 V 20 Q 300 50 200 50 H 100 Q 0 50 0 80 V 100"
            stroke="currentColor"
            className="text-amber-300 beam-travel"
            strokeWidth="1.5"
            fill="none"
            vectorEffect="non-scaling-stroke"
          ></path>

          {/* Right branch */}
          <path
            d="M 300 -50 V 20 Q 300 50 400 50 H 500 Q 600 50 600 80 V 100"
            stroke="currentColor"
            className="text-neutral-800"
            strokeWidth="1"
            fill="none"
            vectorEffect="non-scaling-stroke"
          ></path>
          <path
            d="M 300 -50 V 20 Q 300 50 400 50 H 500 Q 600 50 600 80 V 100"
            stroke="currentColor"
            className="text-amber-300 beam-travel"
            strokeWidth="1.5"
            fill="none"
            vectorEffect="non-scaling-stroke"
            style={{ animationDelay: '1.5s' }}
          ></path>
        </svg>

        {/* Mobile Vertical Line */}
        <svg
          className="absolute -top-0 w-px h-16 overflow-visible md:hidden"
          viewBox="0 0 2 64"
        >
          <line
            x1="1"
            y1="0"
            x2="1"
            y2="64"
            stroke="currentColor"
            className="text-neutral-800 beam-line"
          ></line>
          <line
            x1="1"
            y1="0"
            x2="1"
            y2="64"
            stroke="currentColor"
            className="text-white beam-travel"
          ></line>
        </svg>
      </div>

      <section
        id="platform"
        className="py-12 px-6 bg-neutral-950 relative z-10"
      >
        <div id="security" className="absolute -top-24 h-px w-px" aria-hidden="true" />
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-white mb-4">
              Control, visibility, and safeguards in one proxy.
            </h2>
            <p className="text-neutral-400 max-w-xl text-lg font-light">
              Set per-key limits, enforce content policies, and stream without
              changing your OpenAI client code.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[600px]">
            {/* Large Card Left */}
            <div className="md:col-span-2 bg-neutral-900 rounded-2xl border border-neutral-800 p-8 relative overflow-hidden group">
              <div className="relative z-10">
                <div className="w-10 h-10 bg-amber-400/10 rounded-lg flex items-center justify-center mb-6 text-neutral-900 border border-amber-200/70">
                  <FiGlobe size={20} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-semibold tracking-tight text-white mb-2">
                  Usage Limits & Budget Caps
                </h3>
                <p className="text-sm text-neutral-400 max-w-sm">
                  Requests auto-block the moment they cross your dollar, request,
                  or token caps. Keys stay encrypted in PostgreSQL.
                </p>
              </div>

              {/* Visual: Limit Mockup */}
              <div className="absolute top-1/2 right-[-50px] md:right-0 w-[400px] h-[400px] bg-neutral-800 rounded-l-2xl border-t border-l border-neutral-700 shadow-sm opacity-70 md:opacity-100 transition-transform group-hover:scale-[1.02] duration-500">
                <svg
                  width="100%"
                  height="100%"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <pattern
                      id="grid"
                      width="40"
                      height="40"
                      patternUnits="userSpaceOnUse"
                    >
                      <path
                        d="M 40 0 L 0 0 0 40"
                        fill="none"
                        stroke="#f1f1e7"
                        className="stroke-neutral-700"
                        strokeWidth="1"
                      ></path>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)"></rect>
                  {/* Limit Blocks */}
                  <rect
                    x="60"
                    y="90"
                    width="120"
                    height="70"
                    rx="10"
                    fill="#ffffff"
                    stroke="#facc15"
                    strokeWidth="2"
                  ></rect>
                  <text
                    x="70"
                    y="125"
                    fill="#0f172a"
                    fontSize="12"
                    fontFamily="monospace"
                  >
                    usage_limit
                  </text>
                  <text
                    x="70"
                    y="145"
                    fill="#0f172a"
                    fontSize="12"
                    fontFamily="monospace"
                    fontWeight="bold"
                  >
                    100,000
                  </text>
                  <rect
                    x="240"
                    y="150"
                    width="140"
                    height="80"
                    rx="12"
                    fill="#fef9c3"
                    stroke="#facc15"
                    strokeWidth="2"
                  ></rect>
                  <text
                    x="255"
                    y="185"
                    fill="#854d0e"
                    fontSize="12"
                    fontFamily="monospace"
                  >
                    cost_limit_usd
                  </text>
                  <text
                    x="255"
                    y="205"
                    fill="#854d0e"
                    fontSize="12"
                    fontFamily="monospace"
                    fontWeight="bold"
                  >
                    $50.00
                  </text>
                  <line
                    x1="120"
                    y1="160"
                    x2="240"
                    y2="190"
                    stroke="#facc15"
                    strokeWidth="2"
                    strokeDasharray="4 3"
                  ></line>
                </svg>
                {/* Tooltip */}
                <div className="absolute top-20 left-20 bg-neutral-900 shadow-lg p-3 rounded border border-neutral-700">
                  <div className="text-[10px] font-mono text-neutral-400 uppercase">
                    Limit reached
                  </div>
                  <div className="text-xs font-semibold mt-1 text-white">
                    usage_limit hit • 429 returned
                  </div>
                </div>
              </div>
            </div>

            {/* Tall Card Right */}
            <div className="md:col-span-1 bg-neutral-800 rounded-2xl p-8 relative overflow-hidden flex flex-col justify-between text-white border border-neutral-700">
              <div className="relative z-10">
                <div className="h-10 w-10 rounded-lg bg-yellow-500/10 flex items-center justify-center mb-6 text-yellow-400 border border-yellow-500/20">
                  <FiCpu size={20} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-semibold tracking-tight mb-2">
                  Content & Key Filtering
                </h3>
                <p className="text-sm text-neutral-400">
                  Prevent PII, secrets, and prompt injections from ever reaching
                  providers. Handle redaction centrally.
                </p>
              </div>

              {/* Code Snippet Visual */}
              <div className="mt-8 font-mono text-[10px] text-neutral-300 bg-neutral-900/50 p-4 rounded-lg border border-neutral-700/50">
                <div className="flex gap-1.5 mb-3">
                  <div className="w-2 h-2 rounded-full bg-red-400/50"></div>
                  <div className="w-2 h-2 rounded-full bg-amber-400/50"></div>
                  <div className="w-2 h-2 rounded-full bg-green-400/50"></div>
                </div>
                <p className="text-amber-200">filters:</p>
                <p className="pl-4">
                  pii: <span className="text-green-300">"on"</span>
                </p>
                <p className="pl-4">
                  api_keys: <span className="text-green-300">"mask"</span>
                </p>
                <p className="pl-4">
                  prompt_injection: <span className="text-green-300">"block"</span>
                </p>
                <p className="pl-4">
                  custom_regex: <span className="text-blue-300">["PCI","HIPAA"]</span>
                </p>
                <p className="mt-3 text-amber-200">routing:</p>
                <p className="pl-4">
                  provider: <span className="text-blue-300">"openai"</span>
                </p>
                <p className="pl-4">
                  model: <span className="text-blue-300">"gpt-4o-mini"</span>
                </p>
              </div>
            </div>

            {/* Bottom Split */}
            <div className="md:col-span-1 bg-neutral-900 rounded-2xl border border-neutral-800 p-8 group hover:border-neutral-700 transition-colors">
              <div className="w-10 h-10 bg-amber-400/10 rounded-lg flex items-center justify-center mb-6 text-white border border-amber-200/70">
                <PiWaveformBold size={20} />
              </div>
              <h3 className="text-lg font-semibold tracking-tight text-white mb-2">
                Real-Time Analytics
              </h3>
              <p className="text-sm text-neutral-400">
                Tokens, requests, cost, and latency—logged to Postgres with
                time-series queries ready to ship.
              </p>
            </div>

            <div className="md:col-span-1 bg-neutral-900 rounded-2xl border border-neutral-800 p-8 group hover:border-neutral-700 transition-colors">
              <div className="w-10 h-10 bg-amber-400/10 rounded-lg flex items-center justify-center mb-6 text-white border border-amber-200/70">
                <FiDatabase size={20} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold tracking-tight text-white mb-2">
                Auto-Updated Pricing
              </h3>
              <p className="text-sm text-neutral-400">
                Pricing syncs from OpenAI and Anthropic APIs so cost math stays
                accurate by model.
              </p>
            </div>

            <div className="md:col-span-1 bg-neutral-800 rounded-2xl border border-neutral-700 p-8 flex flex-col justify-center items-center text-center">
              <h3 className="text-lg font-semibold tracking-tight text-white mb-2">
                Multi-Tenant Orgs
              </h3>
              <p className="text-sm text-neutral-400 mb-4">
                Invite teams with RBAC, per-project proxy keys, and webhook
                alerts when limits near capacity.
              </p>
              <button className="px-4 py-2 bg-neutral-900 border border-neutral-700 rounded-full text-xs font-medium text-white hover:border-neutral-500 transition-colors">
                View access controls
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
