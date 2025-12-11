export default function Footer() {
  return (
    <footer className="relative z-20 bg-black text-white pt-24 pb-12 px-6 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start mb-20">
          <div className="max-w-lg">
            <h2 className="text-3xl font-semibold tracking-tighter mb-6">
              Ready to get control of your AI costs?
            </h2>
            <p className="text-neutral-400 font-light mb-8">
              Start free with OpenAI-compatible endpoints, then scale with org
              budgets, PII filtering, and webhook alerts.
            </p>

            {/* Input Group */}
            <div className="flex w-full max-w-sm items-center space-x-2">
              <input
                type="email"
                placeholder="you@company.com"
                className="flex-1 h-10 rounded-md border border-neutral-700 bg-neutral-800 px-3 py-2 text-sm placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-600 focus:ring-offset-2 focus:ring-offset-neutral-900"
              />
              <button
                type="submit"
                className="h-10 px-4 py-2 bg-amber-400 text-neutral-900 text-sm font-semibold rounded-md hover:bg-amber-300 transition-colors shadow-accent"
              >
                Get a proxy key
              </button>
            </div>
          </div>

          <div className="mt-12 md:mt-0 grid grid-cols-2 md:grid-cols-3 gap-12 text-sm text-neutral-400">
            <div className="flex flex-col gap-4">
              <span className="font-medium text-white">Platform</span>
              <a href="#" className="hover:text-white transition-colors">
                Limits & Budgets
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Analytics
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Filters
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Webhooks
              </a>
            </div>
            <div className="flex flex-col gap-4">
              <span className="font-medium text-white">Company</span>
              <a href="#" className="hover:text-white transition-colors">
                Pricing
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Customers
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Careers
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Contact
              </a>
            </div>
            <div className="hidden md:flex flex-col gap-4">
              <span className="font-medium text-white">Legal</span>
              <a href="#" className="hover:text-white transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Open Source
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-neutral-500 pt-8 border-t border-neutral-800">
          <div>© 2024 MQL Gateway Inc. All rights reserved.</div>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-neutral-400 transition-colors">
              Twitter
            </a>
            <a href="#" className="hover:text-neutral-400 transition-colors">
              GitHub
            </a>
            <a href="#" className="hover:text-neutral-400 transition-colors">
              Discord
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
