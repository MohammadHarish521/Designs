
const Marquee = () => {
  return (
    <>
      {/* Connector Section (Hero -> Marquee) */}
      <div className="relative h-16 w-full overflow-hidden pointer-events-none z-10">
        {/* Central Line */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-px bg-gradient-to-b from-slate-200 via-slate-300 to-slate-200"></div>
        {/* Flowing Dot */}
        <div
          className="absolute left-1/2 -translate-x-1/2 top-0 w-1 h-2 bg-slate-900 rounded-full animate-float"
          style={{ animationDuration: '2s' }}
        ></div>
      </div>

      {/* Marquee */}
      <div className="w-full border-y border-slate-100 bg-white/40 backdrop-blur-sm py-10 overflow-hidden relative z-20">
        <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white z-10"></div>
        <div className="flex items-center justify-center gap-16 md:gap-32 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
          <iconify-icon
            icon="simple-icons:stripe"
            width="50"
            class="shrink-0"
          ></iconify-icon>
          <iconify-icon
            icon="simple-icons:vercel"
            width="70"
            class="shrink-0"
          ></iconify-icon>
          <iconify-icon
            icon="simple-icons:linear"
            width="70"
            class="shrink-0"
          ></iconify-icon>
          <iconify-icon
            icon="simple-icons:notion"
            width="30"
            class="shrink-0"
          ></iconify-icon>
          <iconify-icon
            icon="simple-icons:airbnb"
            width="70"
            class="shrink-0"
          ></iconify-icon>
          <iconify-icon
            icon="simple-icons:raycast"
            width="70"
            class="shrink-0"
          ></iconify-icon>
        </div>
      </div>
    </>
  );
};

export default Marquee;
