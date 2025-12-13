import { Icon } from "@iconify/react";

export default function Testimonial() {
  return (
    <section className="py-24 px-6 border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
      <div className="max-w-4xl mx-auto text-center">
        <Icon
          icon="lucide:quote"
          width={32}
          className="text-neutral-300 dark:text-neutral-700 mb-8 mx-auto"
        />
        <blockquote className="text-2xl md:text-4xl font-medium tracking-tight text-neutral-900 dark:text-white leading-tight">
          &quot;Digilab&apos;s sensor network allowed us to identify three avian
          species previously thought extinct in the Andean cloud forests.
          It&apos;s not just data; it&apos;s a lifeline.&quot;
        </blockquote>
        <div className="mt-8 flex items-center justify-center gap-4">
          <div className="w-10 h-10 rounded-full bg-neutral-200 dark:bg-neutral-800 grayscale overflow-hidden">
            <img
              src="https://ui-avatars.com/api/?name=Elena+R&background=random&color=fff"
              alt="User"
            />
          </div>
          <div className="text-left">
            <div className="text-sm font-semibold text-neutral-900 dark:text-white">
              Dr. Elena Rodriguez
            </div>
            <div className="text-xs text-neutral-500 dark:text-neutral-400 font-mono">
              Senior Ecologist, Andean Alliance
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
