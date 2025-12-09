function RecentArrivals() {
  const items = [
    { name: 'Eriksson', year: '2024', icon: 'solar:box-minimalistic-linear' },
    { name: 'Linearity', year: '2023', icon: 'solar:layers-minimalistic-linear' },
    { name: 'Refraction', year: '2024', icon: 'solar:object-scan-linear' },
  ]

  return (
    <section className="pb-32">
      <div className="flex items-end justify-between mb-12">
        <h2 className="font-inter text-2xl font-normal text-white tracking-tight">
          Recent <span className="text-neutral-600">Arrivals</span>
        </h2>
        <a
          href="#"
          className="text-xs text-neutral-500 hover:text-white transition-colors border-b border-transparent hover:border-neutral-700 pb-0.5 flex items-center gap-1"
        >
          View Archive
          <iconify-icon
            icon="solar:arrow-right-linear"
            width="12"
          ></iconify-icon>
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {items.map((item, index) => (
          <a key={index} href="#" className="group block">
            <div className="aspect-square bg-neutral-900/20 border border-neutral-800/50 rounded hover:border-neutral-700 transition-colors relative overflow-hidden flex items-center justify-center">
              <div className="text-neutral-800 group-hover:text-neutral-600 transition-colors group-hover:scale-110 duration-500">
                <iconify-icon
                  icon={item.icon}
                  width="48"
                ></iconify-icon>
              </div>
            </div>
            <div className="mt-3 flex items-center justify-between">
              <span className="text-sm text-neutral-300 font-medium font-inter tracking-tight">
                {item.name}
              </span>
              <span className="text-[10px] text-neutral-600 font-mono">{item.year}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

export default RecentArrivals

