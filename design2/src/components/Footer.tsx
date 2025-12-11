
const Footer = () => {
  return (
    <footer className="relative bg-white border-t border-slate-100 pt-24 pb-12 px-6 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-t from-slate-50 to-transparent blur-3xl opacity-50 pointer-events-none"></div>

      <div className="relative max-w-6xl mx-auto z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-16">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white shadow-lg shadow-slate-900/20">
                <span className="font-serif italic font-bold text-lg">V</span>
              </div>
              <span className="font-medium tracking-tight text-slate-900">
                Vol. 4
              </span>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed pr-4 max-w-xs">
              Curating the best insights from the digital world. Crafted with
              precision for the modern web.
            </p>
          </div>

          {/* Platform Column */}
          <div>
            <h4 className="font-semibold text-sm mb-6 text-slate-900 tracking-tight">
              Platform
            </h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li>
                <a
                  href="#"
                  className="hover:text-slate-900 transition-colors inline-block"
                >
                  Analytics
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-slate-900 transition-colors inline-block"
                >
                  Research
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-slate-900 transition-colors inline-block"
                >
                  Collaboration
                </a>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-semibold text-sm mb-6 text-slate-900 tracking-tight">
              Company
            </h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li>
                <a
                  href="#"
                  className="hover:text-slate-900 transition-colors inline-block"
                >
                  About
                </a>
              </li>
              <li className="flex items-center gap-2 flex-wrap">
                <a
                  href="#"
                  className="hover:text-slate-900 transition-colors inline-block"
                >
                  Careers
                </a>
                <span className="text-[10px] bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded-full border border-emerald-100 font-semibold">
                  Hiring
                </span>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-slate-900 transition-colors inline-block"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Connect Column */}
          <div>
            <h4 className="font-semibold text-sm mb-6 text-slate-900 tracking-tight">
              Connect
            </h4>
            <div className="flex gap-3">
              <a
                href="#"
                className="group w-10 h-10 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center text-slate-600 hover:bg-white hover:border-slate-200 hover:shadow-md hover:shadow-slate-200/50 transition-all duration-300"
              >
                <iconify-icon
                  icon="simple-icons:twitter"
                  width="16"
                  class="group-hover:text-sky-500 transition-colors"
                ></iconify-icon>
              </a>
              <a
                href="#"
                className="group w-10 h-10 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center text-slate-600 hover:bg-white hover:border-slate-200 hover:shadow-md hover:shadow-slate-200/50 transition-all duration-300"
              >
                <iconify-icon
                  icon="simple-icons:github"
                  width="16"
                  class="group-hover:text-slate-900 transition-colors"
                ></iconify-icon>
              </a>
              <a
                href="#"
                className="group w-10 h-10 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center text-slate-600 hover:bg-white hover:border-slate-200 hover:shadow-md hover:shadow-slate-200/50 transition-all duration-300"
              >
                <iconify-icon
                  icon="simple-icons:dribbble"
                  width="16"
                  class="group-hover:text-pink-500 transition-colors"
                ></iconify-icon>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-100 text-xs text-slate-500">
          <p className="mb-4 md:mb-0">© 2024 Digital Landscape Report. All rights reserved.</p>
          <div className="flex gap-6">
            <a
              href="#"
              className="hover:text-slate-900 transition-colors font-medium"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-slate-900 transition-colors font-medium"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
