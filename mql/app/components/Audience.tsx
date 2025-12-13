'use client';

import { FiBriefcase, FiCpu, FiUsers } from 'react-icons/fi';

type AudienceCard = {
  title: string;
  description: string;
  bullets: string[];
  icon: React.ElementType;
};

const cards: AudienceCard[] = [
  {
    title: 'Enterprise Teams',
    description:
      'Give each department their own budget. Track spending by team. RBAC for sensitive data.',
    bullets: [
      'Org-level budget controls',
      'Per-user or per-project keys',
      'Compliance filters (HIPAA/PCI)',
    ],
    icon: FiBriefcase,
  },
  {
    title: 'Startups',
    description:
      'Stop manually tracking API costs in spreadsheets. Set hard limits before bills explode.',
    bullets: ['Auto cost tracking per feature', 'Hard dollar caps per key', 'Real-time budget alerts'],
    icon: FiUsers,
  },
  {
    title: 'AI Agencies',
    description:
      'Manage multiple client keys. Track costs per client. Prevent data leakage between projects.',
    bullets: ['Per-client proxy keys', 'Automated usage reporting', 'PII filtering for compliance'],
    icon: FiCpu,
  },
];

export default function Audience() {
  return (
    <section id="audience" className="py-24 px-6 bg-neutral-900 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-white mb-4">
            Who Is This For?
          </h2>
          <p className="text-neutral-400 text-lg font-light">Real problems this solves</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((c) => (
            <div
              key={c.title}
              className="group relative bg-neutral-900/40 rounded-2xl border border-neutral-800 p-8 hover:border-neutral-700 transition-colors overflow-hidden"
            >
              <div className="border-beam z-10 opacity-40 group-hover:opacity-90 transition-opacity duration-300" />
              <div className="relative z-20">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white">
                    <c.icon size={18} />
                  </div>
                  <h3 className="text-xl font-semibold tracking-tight text-white">{c.title}</h3>
                </div>

                <p className="text-neutral-400 leading-relaxed mb-6">{c.description}</p>

                <ul className="space-y-3 text-sm text-neutral-400">
                  {c.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <span className="mt-2 h-1 w-1 rounded-full bg-neutral-600 flex-shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


