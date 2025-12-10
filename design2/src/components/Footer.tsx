
const Footer = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-6 h-6 bg-slate-900 rounded flex items-center justify-center text-white">
                <span className="font-serif italic font-bold text-xs">V</span>
              </div>
              <span className="font-medium tracking-tight text-slate-900">
                Vol. 4
              </span>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed pr-4">
              Curating the best insights from the digital world. Crafted with
              precision for the modern web.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4 text-slate-900">
              Platform
            </h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li>
                <a href="#" className="hover:text-slate-900 transition-colors">
                  Analytics
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-900 transition-colors">
                  Research
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-900 transition-colors">
                  Collaboration
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4 text-slate-900">
              Company
            </h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li>
                <a href="#" className="hover:text-slate-900 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-900 transition-colors">
                  Careers
                </a>
                <span className="text-[10px] bg-emerald-100 text-emerald-700 px-1.5 py-0.5 rounded font-medium ml-1">
                  Hiring
                </span>
              </li>
              <li>
                <a href="#" className="hover:text-slate-900 transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4 text-slate-900">
              Connect
            </h4>
            <div className="flex gap-4 text-slate-400">
              <a
                href="#"
                className="hover:text-slate-900 transition-colors p-2 bg-white rounded-lg border border-slate-200 shadow-sm"
              >
                <iconify-icon
                  icon="simple-icons:twitter"
                  width="16"
                ></iconify-icon>
              </a>
              <a
                href="#"
                className="hover:text-slate-900 transition-colors p-2 bg-white rounded-lg border border-slate-200 shadow-sm"
              >
                <iconify-icon
                  icon="simple-icons:github"
                  width="16"
                ></iconify-icon>
              </a>
              <a
                href="#"
                className="hover:text-slate-900 transition-colors p-2 bg-white rounded-lg border border-slate-200 shadow-sm"
              >
                <iconify-icon
                  icon="simple-icons:dribbble"
                  width="16"
                ></iconify-icon>
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-200 text-xs text-slate-500">
          <p>© 2024 Digital Landscape Report. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-slate-900 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-slate-900 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
