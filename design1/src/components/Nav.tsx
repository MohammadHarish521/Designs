function Nav() {
  return (
    <nav className="w-full max-w-[1400px] mx-auto px-6 md:px-12 py-8 flex items-center justify-between z-50 relative">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-white group cursor-default">
          <span className="font-inter font-medium text-sm group-hover:scale-110 transition-transform">
            E
          </span>
        </div>
        <span className="text-sm font-medium tracking-tight text-neutral-300">
          Exceptional
        </span>
      </div>

      <div className="hidden md:flex items-center gap-8 text-xs font-medium tracking-wide text-neutral-500">
        <a href="#" className="hover:text-white transition-colors duration-300">
          Index
        </a>
        <a href="#" className="hover:text-white transition-colors duration-300">
          Curated
        </a>
        <a href="#" className="hover:text-white transition-colors duration-300">
          Submit
        </a>
      </div>

      <button className="md:hidden text-white">
        <iconify-icon
          icon="solar:hamburger-menu-broken"
          width="24"
        ></iconify-icon>
      </button>
    </nav>
  )
}

export default Nav

