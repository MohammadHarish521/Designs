function ToolsList() {
  const tools = [
    { name: 'Framer', category: 'Visual Builder', icon: 'solar:screencast-2-linear' },
    { name: 'Spline', category: '3D Web', icon: 'solar:box-linear' },
    { name: 'Inter Variable', category: 'Typography', icon: 'solar:text-square-linear' },
    { name: 'Tailwind', category: 'Utility CSS', icon: 'solar:wind-linear' },
  ]

  return (
    <section className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-neutral-900 py-24 relative">
      {/* Connector Line */}
      <div className="absolute -top-12 left-[12%] w-px h-24 bg-gradient-to-b from-neutral-800 to-transparent hidden md:block"></div>

      <div className="md:col-span-4">
        <h3 className="text-lg text-white font-normal font-inter tracking-tight mb-2">
          Essential Stack
        </h3>
        <p className="text-xs text-neutral-500 font-light max-w-xs leading-relaxed">
          The technologies powering the next generation of digital
          experiences.
        </p>
      </div>

      <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {tools.map((tool, index) => (
          <div
            key={index}
            className="flex items-center gap-4 p-4 border border-neutral-900 rounded hover:bg-neutral-900/40 transition-colors group bg-[#050505] z-10"
          >
            <div className="text-neutral-600 group-hover:text-white transition-colors">
              <iconify-icon
                icon={tool.icon}
                width="22"
              ></iconify-icon>
            </div>
            <div>
              <div className="text-sm text-neutral-300 font-medium">{tool.name}</div>
              <div className="text-[10px] text-neutral-600">{tool.category}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ToolsList

