

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-5 md:px-12 flex justify-between items-center glass-panel border-b border-slate-100/50">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white shadow-lg shadow-slate-900/20">
          <span className="font-serif italic font-bold text-lg">V</span>
        </div>
        <span className="text-xs font-medium tracking-tight text-slate-500 uppercase">
          Vol. 4 Report
        </span>
      </div>
      <div className="hidden md:flex gap-8">
        <a
          href="#"
          className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors"
        >
          Insights
        </a>
        <a
          href="#"
          className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors"
        >
          Methodology
        </a>
        <a
          href="#"
          className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors"
        >
          Download
        </a>
      </div>
      <button className="bg-slate-900 text-white px-4 py-2 rounded-lg text-xs font-medium tracking-wide hover:bg-slate-800 transition-all hover:shadow-lg hover:shadow-slate-900/20">
        Get Access
      </button>
    </nav>
  );
};

export default Navbar;
