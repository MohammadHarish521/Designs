import { Icon } from "@iconify/react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-12 md:pt-48 md:pb-16 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white/50 dark:bg-neutral-900/50 mb-8 backdrop-blur-sm shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-500 dark:text-neutral-400 font-medium">
            System Online • v2.4.0
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter text-neutral-900 dark:text-white leading-[1.1] mb-8">
          The operating system <br className="hidden md:block" />
          for{" "}
          <span className="text-neutral-400 dark:text-neutral-600">
            planetary preservation.
          </span>
        </h1>

        <p className="text-lg md:text-xl text-neutral-500 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed font-light tracking-tight mb-10">
          We decode bio-acoustic signals using proprietary neural networks to
          map, monitor, and protect ecosystem biodiversity in real-time.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <button className="h-12 px-8 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-sm font-medium hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all flex items-center gap-2">
            Start Monitoring
            <Icon icon="lucide:arrow-right" width={16} />
          </button>
          <button className="h-12 px-8 rounded-full border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-300 text-sm font-medium hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all bg-white dark:bg-neutral-900">
            Read the Manifesto
          </button>
        </div>

        <div className="mt-20 relative w-full max-w-4xl mx-auto h-64 md:h-96 border border-neutral-200 dark:border-neutral-800 rounded-2xl bg-white/40 dark:bg-neutral-900/40 overflow-hidden flex items-center justify-center z-10">
          <div
            className="absolute inset-0 opacity-50 dark:opacity-20"
            style={{
              backgroundImage:
                "linear-gradient(#e5e5e5 1px, transparent 1px), linear-gradient(90deg, #e5e5e5 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          ></div>

          <div className="flex items-center gap-1 h-32 relative z-10">
            {[12, 24, 16, 32, 20, 28, 14, 24, 16, 8, 10].map((height, i) => (
              <div
                key={i}
                className={`w-1 md:w-2 ${
                  i < 9
                    ? "bg-neutral-800 dark:bg-white"
                    : "bg-neutral-300 dark:bg-neutral-700"
                } rounded-full`}
                style={{
                  height: `${height * 4}px`,
                  animation: `pulse ${
                    [1, 1.2, 0.8, 1.5, 1.1, 1.3, 0.9, 1.2, 0.8, 2, 1.8][i]
                  }s ease-in-out infinite`,
                }}
              ></div>
            ))}
          </div>

          <div className="absolute bottom-6 left-6 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 px-3 py-1.5 rounded-md shadow-sm flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></div>
            <span className="font-mono text-[10px] uppercase text-neutral-500 dark:text-neutral-300">
              Live Input: Amazonia Basin 04
            </span>
          </div>
        </div>

        <div className="relative w-full h-12 overflow-visible flex justify-center">
          <svg
            className="absolute top-0 w-px h-24 overflow-visible"
            viewBox="0 0 2 100"
          >
            <line
              x1="1"
              y1="0"
              x2="1"
              y2="100"
              stroke="currentColor"
              className="text-neutral-200 dark:text-neutral-800 beam-line"
            />
            <line
              x1="1"
              y1="0"
              x2="1"
              y2="100"
              stroke="currentColor"
              className="text-neutral-900 dark:text-white beam-travel"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
