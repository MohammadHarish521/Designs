function Footer() {
  return (
    <footer className="border-t border-neutral-900 bg-[#050505] mt-12">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-neutral-800 rounded-full"></div>
            <span className="text-xs text-neutral-500 font-medium uppercase tracking-widest">
              Exceptional
            </span>
          </div>
          <p className="text-[10px] text-neutral-600 max-w-xs leading-relaxed">
            Curating the internet's finest design engineering. <br />
            Updated weekly. No tracking.
          </p>
        </div>

        <div className="flex items-center gap-8">
          <a
            href="#"
            className="text-xs text-neutral-500 hover:text-white transition-colors"
          >
            Twitter
          </a>
          <a
            href="#"
            className="text-xs text-neutral-500 hover:text-white transition-colors"
          >
            Instagram
          </a>
          <a
            href="#"
            className="text-xs text-neutral-500 hover:text-white transition-colors"
          >
            RSS
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer

