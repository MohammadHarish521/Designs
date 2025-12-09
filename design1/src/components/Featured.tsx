function Featured() {
  return (
    <section className="relative py-12 md:py-24 border-t border-neutral-900/50">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
        {/* Card 1 */}
        <div className="group cursor-pointer">
          <div className="w-full aspect-[16/10] bg-[#0A0A0A] rounded-lg overflow-hidden relative border border-white/5 transition-all duration-700 hover:border-white/10">
            <div className="absolute inset-0 bg-neutral-900/20 group-hover:bg-neutral-900/40 transition-colors duration-700"></div>
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#333_1px,transparent_1px)] [background-size:16px_16px]"></div>

            {/* Abstract UI Representation */}
            <div className="absolute inset-8 border border-neutral-800/50 border-dashed rounded opacity-50 flex items-center justify-center">
              <div className="text-center space-y-3">
                <iconify-icon
                  icon="solar:gallery-wide-linear"
                  className="text-neutral-700"
                  width="32"
                ></iconify-icon>
              </div>
            </div>
            <div className="absolute bottom-6 left-6">
              <div className="px-2 py-1 rounded border border-neutral-800 text-[10px] text-neutral-400 uppercase tracking-wider font-mono bg-black/50 backdrop-blur inline-flex items-center gap-2">
                <iconify-icon
                  icon="solar:folder-linear"
                  width="10"
                ></iconify-icon>
                Studio
              </div>
            </div>
          </div>
          <div className="mt-6 flex justify-between items-start">
            <div>
              <h3 className="text-neutral-200 text-lg font-normal font-inter tracking-tight group-hover:text-white transition-colors">
                Mono & Co.
              </h3>
              <p className="text-xs text-neutral-600 mt-1 font-light">
                Swiss-style design agency portfolio
              </p>
            </div>
            <iconify-icon
              icon="solar:arrow-right-up-linear"
              className="text-neutral-700 group-hover:text-white transition-colors"
              width="20"
            ></iconify-icon>
          </div>
        </div>

        {/* Card 2 */}
        <div className="group cursor-pointer md:mt-24">
          <div className="w-full aspect-[16/10] bg-[#0A0A0A] rounded-lg overflow-hidden relative border border-white/5 transition-all duration-700 hover:border-white/10">
            <div className="absolute inset-0 bg-neutral-900/20 group-hover:bg-neutral-900/40 transition-colors duration-700"></div>
            {/* Abstract UI Representation */}
            <div className="absolute right-8 top-8 bottom-8 w-1/3 border-l border-neutral-800/50 flex flex-col justify-center px-4 gap-2">
              <div className="w-8 h-8 rounded-full border border-neutral-800/50 mb-2"></div>
              <div className="w-full h-1 bg-neutral-800/50 rounded-full"></div>
              <div className="w-2/3 h-1 bg-neutral-800/50 rounded-full"></div>
            </div>
            <div className="absolute bottom-6 left-6">
              <div className="px-2 py-1 rounded border border-neutral-800 text-[10px] text-neutral-400 uppercase tracking-wider font-mono bg-black/50 backdrop-blur inline-flex items-center gap-2">
                <iconify-icon
                  icon="solar:code-circle-linear"
                  width="10"
                ></iconify-icon>
                WebGL
              </div>
            </div>
          </div>
          <div className="mt-6 flex justify-between items-start">
            <div>
              <h3 className="text-neutral-200 text-lg font-normal font-inter tracking-tight group-hover:text-white transition-colors">
                Apex Labs
              </h3>
              <p className="text-xs text-neutral-600 mt-1 font-light">
                Interactive immersive experience
              </p>
            </div>
            <iconify-icon
              icon="solar:arrow-right-up-linear"
              className="text-neutral-700 group-hover:text-white transition-colors"
              width="20"
            ></iconify-icon>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Featured

