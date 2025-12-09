function Hero() {
  return (
    <section className="pt-20 pb-32 md:pt-32 md:pb-48 relative grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      {/* Left: Content */}
      <div className="flex flex-col gap-8 relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 border border-neutral-800 bg-neutral-900/30 rounded-full px-3 py-1 w-fit backdrop-blur-sm">
          <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-[10px] font-medium text-neutral-400 uppercase tracking-widest">
            Issue 042
          </span>
        </div>

        <h1 className="font-inter text-5xl md:text-8xl font-normal text-white tracking-tighter leading-[1.05]">
          Crafted digital <br />
          <span className="text-neutral-600">identities.</span>
        </h1>

        <p className="text-base md:text-lg text-neutral-500 font-light max-w-md leading-relaxed">
          A design gallery celebrating minimal aesthetics, thoughtful
          typography, and interactions.
        </p>

        <div className="flex items-center gap-6 mt-4">
          <button className="group relative px-6 py-3 bg-white hover:bg-neutral-200 text-black text-sm font-medium rounded-full transition-all flex items-center gap-2">
            <span>Explore Collection</span>
            <iconify-icon
              icon="solar:arrow-right-linear"
              className="group-hover:translate-x-0.5 transition-transform"
              width="18"
            ></iconify-icon>
          </button>
          <button className="text-neutral-500 hover:text-white transition-colors p-3 rounded-full hover:bg-neutral-900">
            <iconify-icon
              icon="solar:magnifer-linear"
              width="20"
            ></iconify-icon>
          </button>
        </div>
      </div>

      {/* Right: Noodles & Beams Graphic */}
      <div className="absolute md:relative right-0 top-0 w-full h-full md:h-[600px] pointer-events-none -z-10 md:z-0 opacity-40 md:opacity-100 overflow-visible">
        <svg
          className="w-full h-full"
          viewBox="0 0 600 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="grad-beam" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop
                offset="0%"
                style={{ stopColor: 'white', stopOpacity: 0 }}
              ></stop>
              <stop
                offset="50%"
                style={{ stopColor: 'white', stopOpacity: 1 }}
              ></stop>
              <stop
                offset="100%"
                style={{ stopColor: 'white', stopOpacity: 0 }}
              ></stop>
            </linearGradient>
          </defs>

          {/* Noodle 1 */}
          <path
            d="M50 -50 C 50 150, 200 150, 200 300 C 200 450, 350 450, 350 650"
            stroke="#171717"
            strokeWidth="1.5"
            fill="none"
          ></path>
          <path
            d="M50 -50 C 50 150, 200 150, 200 300 C 200 450, 350 450, 350 650"
            stroke="url(#grad-beam)"
            strokeWidth="1.5"
            fill="none"
            className="animate-beam glow-filter"
            strokeLinecap="round"
          ></path>

          {/* Noodle 2 */}
          <path
            d="M150 -50 C 150 100, 400 200, 400 400 C 400 550, 500 550, 500 700"
            stroke="#171717"
            strokeWidth="1.5"
            fill="none"
          ></path>
          <path
            d="M150 -50 C 150 100, 400 200, 400 400 C 400 550, 500 550, 500 700"
            stroke="url(#grad-beam)"
            strokeWidth="1.5"
            fill="none"
            className="animate-beam-delayed glow-filter"
            strokeLinecap="round"
          ></path>

          {/* Noodle 3 */}
          <path
            d="M600 100 C 450 100, 450 300, 300 300 C 150 300, 150 500, 0 500"
            stroke="#171717"
            strokeWidth="1.5"
            fill="none"
          ></path>
          <path
            d="M600 100 C 450 100, 450 300, 300 300 C 150 300, 150 500, 0 500"
            stroke="url(#grad-beam)"
            strokeWidth="1.5"
            fill="none"
            className="animate-beam-fast glow-filter"
            strokeLinecap="round"
          ></path>

          {/* Floating Elements on Grid Points */}
          <circle
            cx="200"
            cy="300"
            r="3"
            fill="#171717"
            stroke="#262626"
          ></circle>
          <circle
            cx="400"
            cy="400"
            r="3"
            fill="#171717"
            stroke="#262626"
          ></circle>
          <circle
            cx="300"
            cy="300"
            r="4"
            fill="#0A0A0A"
            stroke="#404040"
          ></circle>
        </svg>

        {/* Decorative blurred glow behind noodles */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-neutral-800/20 blur-[100px] rounded-full pointer-events-none"></div>
      </div>
    </section>
  )
}

export default Hero

