export default function Metrics() {
  const metrics = [
    { label: "Hours Recorded", value: "2.5M+" },
    { label: "Species ID'd", value: "14,200" },
    { label: "Data Points", value: "850B" },
    { label: "Sensors Active", value: "894" },
  ];

  return (
    <section className="border-y border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 relative z-20">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-neutral-200 dark:divide-neutral-800">
        {metrics.map((metric, index) => (
          <div key={index} className="p-8 text-center group">
            <div className="font-mono text-xs text-neutral-400 dark:text-neutral-500 uppercase tracking-widest mb-2 group-hover:text-emerald-500 transition-colors">
              {metric.label}
            </div>
            <div className="text-3xl font-semibold tracking-tight text-neutral-900 dark:text-white">
              {metric.value}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
