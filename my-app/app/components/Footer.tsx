import { Icon } from "@iconify/react";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 dark:bg-black text-white pt-24 pb-12 px-6 border-t dark:border-neutral-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start mb-20">
          <div className="max-w-lg">
            <h2 className="text-3xl font-semibold tracking-tighter mb-6">
              Stay synchronized with nature.
            </h2>
            <p className="text-neutral-400 font-light mb-8">
              Get the latest research papers, hardware updates, and dataset
              releases delivered to your inbox.
            </p>
            <div className="flex w-full max-w-sm items-center space-x-2">
              <input
                type="email"
                placeholder="researcher@institute.edu"
                className="flex-1 h-10 rounded-md border border-neutral-700 bg-neutral-800 px-3 py-2 text-sm placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-600 focus:ring-offset-2 focus:ring-offset-neutral-900"
              />
              <button
                type="submit"
                className="h-10 px-4 py-2 bg-white text-neutral-900 text-sm font-medium rounded-md hover:bg-neutral-200 transition-colors"
              >
                Subscribe
              </button>
            </div>
          </div>

          <div className="mt-12 md:mt-0 grid grid-cols-2 md:grid-cols-3 gap-12 text-sm text-neutral-400">
            <div className="flex flex-col gap-4">
              <span className="font-medium text-white">Platform</span>
              <a href="#" className="hover:text-white transition-colors">
                Sensors
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Neural Net
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Dashboard
              </a>
              <a href="#" className="hover:text-white transition-colors">
                API
              </a>
            </div>
            <div className="flex flex-col gap-4">
              <span className="font-medium text-white">Company</span>
              <a href="#" className="hover:text-white transition-colors">
                Mission
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Careers
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Blog
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Contact
              </a>
            </div>
            <div className="flex flex-col gap-4">
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

        <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Icon icon="lucide:waves" width={16} className="text-neutral-500" />
            <span className="text-xs text-neutral-500 font-mono">
              © 2024 Digilab Inc.
            </span>
          </div>
          <div className="flex gap-6">
            <Icon
              icon="simple-icons:github"
              width={16}
              className="text-neutral-500 hover:text-white transition-colors cursor-pointer"
            />
            <Icon
              icon="simple-icons:twitter"
              width={16}
              className="text-neutral-500 hover:text-white transition-colors cursor-pointer"
            />
            <Icon
              icon="simple-icons:discord"
              width={16}
              className="text-neutral-500 hover:text-white transition-colors cursor-pointer"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
