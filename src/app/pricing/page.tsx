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
    <main className="flex-1 bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-semibold text-[#1a1a1a] mb-4 tracking-[-1px]">Simple Pricing</h1>
          <p className="text-[#787671] text-xl max-w-md mx-auto">
            Start free. Upgrade when you need more. No hidden fees.
          </p>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-20">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-[12px] p-8 border flex flex-col ${
                plan.highlight
                  ? "bg-[#f6f5f4] border-2 border-[#5645d4]"
                  : "bg-white border-[#e5e3df]"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#5645d4] text-white text-[13px] font-semibold px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              <div className="mb-6">
                <h2 className="text-[#1a1a1a] font-semibold text-xl mb-1">{plan.name}</h2>
                <p className="text-[#787671] text-sm mb-5">{plan.description}</p>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-4xl font-semibold text-[#1a1a1a]">{plan.price}</span>
                  <span className="text-[#787671] text-sm">/ {plan.period}</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-[#37352f]">
                    <svg
                      className="w-4 h-4 text-[#1aae39] shrink-0"
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
                className={`block text-center font-medium py-[10px] rounded-[8px] text-sm transition-colors ${
                  plan.highlight
                    ? "bg-[#5645d4] hover:bg-[#4534b3] text-white"
                    : "border border-[#c8c4be] hover:border-[#1a1a1a] text-[#1a1a1a]"
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        {/* Billing FAQ */}
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold text-[#1a1a1a] text-center mb-8 tracking-[-0.5px]">Billing FAQ</h2>
          <div className="space-y-0 border border-[#e5e3df] rounded-[12px] overflow-hidden">
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
            ].map((item, i, arr) => (
              <div
                key={item.q}
                className={`bg-white px-6 py-5 ${i < arr.length - 1 ? "border-b border-[#e5e3df]" : ""}`}
              >
                <h3 className="text-[#1a1a1a] font-semibold mb-2 text-sm">{item.q}</h3>
                <p className="text-[#787671] text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
