import { Icon } from "@iconify/react";

export default function BentoGrid() {
  return (
    <section
      id="platform"
      className="py-12 px-6 bg-neutral-50 dark:bg-neutral-950 relative z-10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-neutral-900 dark:text-white mb-4">
            Deep Learning for the Wild.
          </h2>
          <p className="text-neutral-500 dark:text-neutral-400 max-w-xl text-lg font-light">
            Our platform transforms raw audio data into actionable ecological
            insights using state-of-the-art transformer models.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[600px]">
          <div className="md:col-span-2 bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 p-8 relative overflow-hidden group">
            <div className="relative z-10">
              <div className="w-10 h-10 bg-neutral-100 dark:bg-neutral-800 rounded-lg flex items-center justify-center mb-6 text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-700">
                <Icon icon="lucide:globe" width={20} />
              </div>
              <h3 className="text-xl font-semibold tracking-tight text-neutral-900 dark:text-white mb-2">
                Geospatial Intelligence
              </h3>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 max-w-sm">
                Overlay acoustic data on satellite imagery to detect
                deforestation patterns before they become visible to the eye.
              </p>
            </div>
            <div className="absolute top-1/2 right-[-50px] md:right-0 w-[400px] h-[400px] bg-neutral-100 dark:bg-neutral-800 rounded-l-2xl border-t border-l border-neutral-200 dark:border-neutral-700 shadow-sm opacity-50 md:opacity-100 transition-transform group-hover:scale-[1.02] duration-500">
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
                      stroke="#e5e5e5"
                      className="dark:stroke-neutral-700"
                      strokeWidth="1"
                    />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
                <path
                  d="M50,150 Q150,50 250,150 T450,150"
                  fill="none"
                  stroke="#d4d4d4"
                  className="dark:stroke-neutral-600"
                  strokeWidth="2"
                />
                <circle
                  cx="150"
                  cy="120"
                  r="4"
                  fill="#171717"
                  className="dark:fill-white"
                />
                <circle
                  cx="280"
                  cy="200"
                  r="4"
                  fill="#171717"
                  className="dark:fill-white"
                />
                <circle cx="100" cy="250" r="4" fill="#ef4444" />
              </svg>
              <div className="absolute top-20 left-20 bg-white dark:bg-neutral-900 shadow-lg p-3 rounded border border-neutral-100 dark:border-neutral-700">
                <div className="text-[10px] font-mono text-neutral-400 uppercase">
                  Anomaly Detected
                </div>
                <div className="text-xs font-semibold mt-1 text-neutral-900 dark:text-white">
                  Chainsaw Activity (98%)
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-1 bg-neutral-900 dark:bg-neutral-800 rounded-2xl p-8 relative overflow-hidden flex flex-col justify-between text-white border border-transparent dark:border-neutral-700">
            <div className="relative z-10">
              <div className="w-10 h-10 bg-neutral-800 dark:bg-neutral-700 rounded-lg flex items-center justify-center mb-6 text-white border border-neutral-700 dark:border-neutral-600">
                <Icon icon="lucide:cpu" width={20} />
              </div>
              <h3 className="text-xl font-semibold tracking-tight mb-2">
                Edge Processing
              </h3>
              <p className="text-sm text-neutral-400">
                Deploy our lightweight models directly on low-power hardware in
                remote locations.
              </p>
            </div>
            <div className="mt-8 font-mono text-[10px] text-neutral-400 bg-neutral-800/50 dark:bg-neutral-900/50 p-4 rounded-lg border border-neutral-700/50">
              <div className="flex gap-1.5 mb-3">
                <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
                <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
                <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
              </div>
              <p>
                <span className="text-purple-400">const</span>{" "}
                <span className="text-blue-400">analyze</span> ={" "}
                <span className="text-yellow-300">async</span> (stream) =&gt;{" "}
                {"{"}
              </p>
              <p className="pl-4">
                <span className="text-purple-400">await</span> model.load(
                <span className="text-green-300">&apos;v2_lite&apos;</span>);
              </p>
              <p className="pl-4">
                <span className="text-purple-400">return</span> stream.detect(
                {"{"}
              </p>
              <p className="pl-8">
                sensitivity: <span className="text-orange-400">0.95</span>,
              </p>
              <p className="pl-8">
                mode:{" "}
                <span className="text-green-300">&apos;passive&apos;</span>
              </p>
              <p className="pl-4">{"});"}</p>
              <p>{"}"}</p>
            </div>
          </div>

          <div className="md:col-span-1 bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 p-8 group hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors">
            <div className="w-10 h-10 bg-neutral-100 dark:bg-neutral-800 rounded-lg flex items-center justify-center mb-6 text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-700">
              <Icon icon="lucide:audio-waveform" width={20} />
            </div>
            <h3 className="text-lg font-semibold tracking-tight text-neutral-900 dark:text-white mb-2">
              Spectrogram View
            </h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              Visualize frequency modulation over time.
            </p>
          </div>

          <div className="md:col-span-1 bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 p-8 group hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors">
            <div className="w-10 h-10 bg-neutral-100 dark:bg-neutral-800 rounded-lg flex items-center justify-center mb-6 text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-700">
              <Icon icon="lucide:database" width={20} />
            </div>
            <h3 className="text-lg font-semibold tracking-tight text-neutral-900 dark:text-white mb-2">
              Dataset API
            </h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              Access the world&apos;s largest bio-acoustic library.
            </p>
          </div>

          <div className="md:col-span-1 bg-[#F5F5F0] dark:bg-neutral-800 rounded-2xl border border-neutral-200 dark:border-neutral-700 p-8 flex flex-col justify-center items-center text-center">
            <h3 className="text-lg font-semibold tracking-tight text-neutral-900 dark:text-white mb-2">
              Join the Collective
            </h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">
              Contribute your local data.
            </p>
            <button className="px-4 py-2 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-full text-xs font-medium text-neutral-900 dark:text-white hover:border-neutral-400 dark:hover:border-neutral-500 transition-colors">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
