import Link from "next/link";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for trying out PromptLens",
    features: [
      "10 prompts per day",
      "Standard quality prompts",
      "Copy to clipboard",
      "All AI tool formats",
    ],
    cta: "Get Started",
    ctaHref: "/signup",
    highlight: false,
  },
  {
    name: "Pro",
    price: "$9",
    period: "per month",
    description: "For creators who need more power",
    features: [
      "Unlimited prompts",
      "Priority AI processing",
      "Save prompt history",
      "Gallery submissions",
      "Style presets",
      "Email support",
    ],
    cta: "Start Pro",
    ctaHref: "/signup",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "pricing",
    description: "For teams and high-volume users",
    features: [
      "Everything in Pro",
      "API access",
      "Custom rate limits",
      "SSO & team management",
      "Dedicated support",
      "SLA guarantee",
    ],
    cta: "Contact Us",
    ctaHref: "/contact",
    highlight: false,
  },
];

export default function PricingPage() {
  return (
    <main className="flex-1 bg-neutral-950 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">Simple Pricing</h1>
          <p className="text-neutral-400 text-xl max-w-md mx-auto">
            Start free. Upgrade when you need more. No hidden fees.
          </p>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-20">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-7 border flex flex-col ${
                plan.highlight
                  ? "bg-indigo-950/40 border-indigo-600 shadow-lg shadow-indigo-900/20"
                  : "bg-neutral-900 border-neutral-800"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-xs font-bold px-4 py-1 rounded-full tracking-wide">
                  MOST POPULAR
                </div>
              )}
              <div className="mb-6">
                <h2 className="text-white font-bold text-xl mb-1">{plan.name}</h2>
                <p className="text-neutral-500 text-sm mb-5">{plan.description}</p>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-neutral-400 text-sm">/ {plan.period}</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-neutral-300">
                    <svg
                      className="w-4 h-4 text-indigo-400 shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href={plan.ctaHref}
                className={`block text-center font-semibold py-3 rounded-xl text-sm transition-colors ${
                  plan.highlight
                    ? "bg-indigo-600 hover:bg-indigo-500 text-white"
                    : "border border-neutral-700 hover:border-neutral-500 text-neutral-300 hover:text-white"
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        {/* Billing FAQ */}
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-8">Billing FAQ</h2>
          <div className="space-y-4">
            {[
              {
                q: "Can I cancel anytime?",
                a: "Yes, cancel anytime with no penalties. Your access continues until the end of the billing period.",
              },
              {
                q: "Is a credit card required for the free plan?",
                a: "No. The free plan requires no payment information — just sign up and start generating prompts.",
              },
              {
                q: "What happens if I exceed my daily limit?",
                a: "On the free plan, prompt generation is paused until the next day. Upgrade to Pro for unlimited access.",
              },
            ].map((item) => (
              <div
                key={item.q}
                className="bg-neutral-900 border border-neutral-800 rounded-xl px-6 py-5"
              >
                <h3 className="text-white font-semibold mb-2 text-sm">{item.q}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
