import { FiMessageSquare } from 'react-icons/fi';

export default function Testimonial() {
  return (
    <section className="relative z-20 py-24 px-6 border-t border-neutral-800 bg-black">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center mb-8">
          <FiMessageSquare size={32} className="text-amber-300" />
        </div>
        <blockquote className="text-2xl md:text-4xl font-medium tracking-tight text-white leading-tight">
          "MQL let us give every team their own budget, kill leaked keys in
          seconds, and keep OpenAI-compatible code. Finance stopped living in
          spreadsheets overnight."
        </blockquote>
        <div className="mt-8 flex items-center justify-center gap-4">
          <div className="w-10 h-10 rounded-full bg-neutral-800 grayscale overflow-hidden">
            {/* Using a placeholder since the original used ui-avatars.com */}
            <div className="w-full h-full flex items-center justify-center bg-gray-700 text-sm font-semibold text-gray-300">
              LS
            </div>
          </div>
          <div className="text-left">
            <div className="text-sm font-semibold text-white">
              Laura Singh
            </div>
            <div className="text-xs text-neutral-400 font-mono">
              Head of Platform Finance, Skylink AI
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
