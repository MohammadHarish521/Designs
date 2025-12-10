export default function Metrics() {
  return (
    <section className="border-y border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 relative z-20">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-neutral-200 dark:divide-neutral-800">
        <div className="p-8 text-center group">
          <div className="font-mono text-xs text-neutral-400 dark:text-neutral-500 uppercase tracking-widest mb-2 group-hover:text-amber-500 transition-colors">
            Requests Proxied
          </div>
          <div className="text-3xl font-semibold tracking-tight text-neutral-900 dark:text-white">
            48M+
          </div>
        </div>
        <div className="p-8 text-center group">
          <div className="font-mono text-xs text-neutral-400 dark:text-neutral-500 uppercase tracking-widest mb-2 group-hover:text-amber-500 transition-colors">
            Spend Guarded
          </div>
          <div className="text-3xl font-semibold tracking-tight text-neutral-900 dark:text-white">
            $12.4M
          </div>
        </div>
        <div className="p-8 text-center group">
          <div className="font-mono text-xs text-neutral-400 dark:text-neutral-500 uppercase tracking-widest mb-2 group-hover:text-amber-500 transition-colors">
            Active Orgs
          </div>
          <div className="text-3xl font-semibold tracking-tight text-neutral-900 dark:text-white">
            620
          </div>
        </div>
        <div className="p-8 text-center group">
          <div className="font-mono text-xs text-neutral-400 dark:text-neutral-500 uppercase tracking-widest mb-2 group-hover:text-amber-500 transition-colors">
            Latency Saved
          </div>
          <div className="text-3xl font-semibold tracking-tight text-neutral-900 dark:text-white">
            37%
          </div>
        </div>
      </div>
    </section>
  );
}
