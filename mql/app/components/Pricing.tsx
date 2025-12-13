'use client';

import { useState } from 'react';
import { FiCheck, FiCpu, FiDatabase, FiGlobe, FiLayers, FiPackage, FiServer, FiUser, FiUsers, FiZap } from 'react-icons/fi';

type PricingModel = 'usage' | 'subscription' | 'credits';

interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  icon: React.ElementType;
  popular?: boolean;
  cta: string;
  highlight?: boolean;
}

const pricingData: Record<PricingModel, PricingTier[]> = {
  usage: [
    {
      name: 'Free',
      price: '$0',
      description: 'Perfect for testing and small hobby projects.',
      features: [
        '+50% Markup on provider costs',
        '1,000 requests included',
        'Community support',
        'Basic rate limiting'
      ],
      icon: FiUser,
      cta: 'Start for free'
    },
    {
      name: 'Starter',
      price: '$29',
      description: 'For growing apps with consistent traffic.',
      features: [
        '+30% Markup on provider costs',
        '10,000 requests included',
        'Email support',
        'Advanced rate limiting'
      ],
      icon: FiZap,
      cta: 'Get started'
    },
    {
      name: 'Pro',
      price: '$99',
      description: 'For scaling production applications.',
      features: [
        '+20% Markup on provider costs',
        '100,000 requests included',
        'Priority support',
        'Custom cost alerts'
      ],
      icon: FiCpu,
      popular: true,
      cta: 'Get started'
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'Volume discounts and enterprise control.',
      features: [
        '+10% Markup on provider costs',
        'Unlimited requests',
        'Dedicated account manager',
        'SSO & SLA'
      ],
      icon: FiServer,
      cta: 'Contact us'
    }
  ],
  subscription: [
    {
      name: 'Free',
      price: '$0',
      description: 'Essential tools for individuals.',
      features: [
        '1,000 requests/mo',
        'Basic analytics',
        '1 Team member',
        'Community support'
      ],
      icon: FiUser,
      cta: 'Start for free'
    },
    {
      name: 'Pro',
      price: '$49',
      description: 'Advanced features for power users.',
      features: [
        '50,000 requests/mo',
        'Full analytics & filters',
        '5 Team members',
        'Priority email support'
      ],
      icon: FiZap,
      popular: true,
      cta: 'Get started'
    },
    {
      name: 'Team',
      price: '$149',
      description: 'Collaborative tools for growing teams.',
      features: [
        '200,000 requests/mo',
        'Multi-tenant architecture',
        'Unlimited team members',
        'Webhooks support'
      ],
      icon: FiUsers,
      cta: 'Get started'
    },
    {
      name: 'Enterprise',
      price: '$499',
      description: 'Security and control for large orgs.',
      features: [
        'Unlimited requests',
        'SSO Enforcement',
        '99.99% Uptime SLA',
        'Dedicated support channel'
      ],
      icon: FiGlobe,
      cta: 'Contact sales'
    }
  ],
  credits: [
    {
      name: 'Starter',
      price: '$10',
      description: 'Top up your account as you go.',
      features: [
        '10,000 credits',
        'Never expires',
        'Use across all models',
        'Basic support'
      ],
      icon: FiPackage,
      cta: 'Buy credits'
    },
    {
      name: 'Growth',
      price: '$50',
      description: 'More value for active users.',
      features: [
        '55,000 credits (10% bonus)',
        'Never expires',
        'Priority processing',
        'Email support'
      ],
      icon: FiLayers,
      popular: true,
      cta: 'Buy credits'
    },
    {
      name: 'Scale',
      price: '$200',
      description: 'Maximum value for high volume.',
      features: [
        '250,000 credits (25% bonus)',
        'Never expires',
        'Dedicated capacity',
        'Priority support'
      ],
      icon: FiDatabase,
      cta: 'Buy credits'
    }
  ]
};

export default function Pricing() {
  const [model, setModel] = useState<PricingModel>('subscription');

  return (
    <section id="pricing" className="py-24 px-6 bg-neutral-950 relative z-10 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-white mb-6">
            Pricing on your terms
          </h2>
          <p className="text-neutral-400 text-lg font-light mb-8">
            Choose the model that fits your growth. Start for free, no credit card required.
          </p>
          
          {/* Custom Toggle */}
          <div className="inline-flex bg-neutral-900 p-1.5 rounded-full border border-neutral-800 relative">
            <button
              onClick={() => setModel('usage')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                model === 'usage' ? 'bg-neutral-800 text-white shadow-sm' : 'text-neutral-400 hover:text-white'
              }`}
            >
              Usage-Based
            </button>
            <button
              onClick={() => setModel('subscription')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                model === 'subscription' ? 'bg-neutral-800 text-white shadow-sm' : 'text-neutral-400 hover:text-white'
              }`}
            >
              Subscription
            </button>
            <button
              onClick={() => setModel('credits')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                model === 'credits' ? 'bg-neutral-800 text-white shadow-sm' : 'text-neutral-400 hover:text-white'
              }`}
            >
              Credits
            </button>
          </div>
        </div>

        <div className={`grid grid-cols-1 gap-6 ${
          pricingData[model].length === 4 
            ? 'md:grid-cols-2 lg:grid-cols-4' 
            : 'md:grid-cols-3'
        }`}>
          {pricingData[model].map((tier) => (
            <div 
              key={tier.name}
              className={`relative flex flex-col p-6 rounded-2xl border transition-all duration-300 ${
                tier.popular 
                  ? 'bg-neutral-900/80 border-neutral-700 shadow-2xl shadow-neutral-900/50 z-10 scale-100 md:scale-105' 
                  : 'bg-neutral-950 border-neutral-800 hover:border-neutral-700'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  Popular
                </div>
              )}

              <div className="mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                    tier.popular ? 'bg-white text-black' : 'bg-neutral-800 text-white'
                  }`}>
                    <tier.icon size={16} />
                  </div>
                  <h3 className="text-lg font-medium text-white">{tier.name}</h3>
                </div>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-4xl font-bold text-white tracking-tight">{tier.price}</span>
                  {model !== 'credits' && tier.price !== 'Custom' && (
                    <span className="text-neutral-500 text-sm">/month</span>
                  )}
                </div>
                <p className="text-sm text-neutral-400 leading-relaxed min-h-[40px]">
                  {tier.description}
                </p>
              </div>

              <div className="border-t border-neutral-800 my-6"></div>

              <ul className="space-y-4 mb-8 flex-grow">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-neutral-300">
                    <FiCheck className={`w-5 h-5 flex-shrink-0 ${
                      tier.popular ? 'text-white' : 'text-neutral-500'
                    }`} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 rounded-full text-sm font-semibold transition-all duration-200 ${
                tier.popular
                  ? 'bg-white text-black hover:bg-neutral-200'
                  : 'bg-neutral-900 border border-neutral-700 text-white hover:bg-neutral-800 hover:border-neutral-600'
              }`}>
                {tier.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
