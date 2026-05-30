"use client";

import { useState } from "react";

const faqs = [
  {
    category: "General",
    items: [
      {
        q: "What is PromptLens?",
        a: "PromptLens is an AI-powered tool that analyzes images and generates detailed prompts you can use in Midjourney, Stable Diffusion, DALL-E, and other AI art tools.",
      },
      {
        q: "Is it free to use?",
        a: "Yes — the free plan lets you generate up to 10 prompts per day with no credit card required. Paid plans unlock unlimited generations and additional features.",
      },
      {
        q: "What image formats are supported?",
        a: "We support JPG, PNG, and WebP images up to 5 MB in size.",
      },
    ],
  },
  {
    category: "Technical",
    items: [
      {
        q: "What AI model powers the analysis?",
        a: "PromptLens uses LLaVA 1.5, a state-of-the-art vision-language model, running on Cloudflare AI infrastructure for fast, secure processing.",
      },
      {
        q: "Are my images stored?",
        a: "Images uploaded to the Studio are processed transiently and are not retained after analysis. On paid plans, you can optionally save a thumbnail and generated prompt to your history.",
      },
      {
        q: "How accurate are the prompts?",
        a: "Prompts are highly accurate for art style, mood, and composition. For very abstract or highly technical images, some details may vary. The output is always a strong starting point.",
      },
    ],
  },
  {
    category: "Billing",
    items: [
      {
        q: "Can I cancel my subscription at any time?",
        a: "Yes. Cancel anytime — your access continues until the end of the current billing period, and you won't be charged again.",
      },
      {
        q: "Do you offer refunds?",
        a: "We offer a full refund within 7 days of purchase if you're not satisfied. Contact us at support@promptlens.ai.",
      },
    ],
  },
  {
    category: "Privacy",
    items: [
      {
        q: "Is my data private?",
        a: "Yes. We do not sell or share your data with third parties. Images are processed transiently and are not stored unless you opt in to history saving. See our Privacy Policy for details.",
      },
    ],
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-[#e5e3df] dark:border-[#2e2e2e] last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left gap-4 group"
      >
        <span className="text-[#1a1a1a] dark:text-[#f0f0f0] text-sm font-medium">
          {q}
        </span>
        <svg
          className={`w-4 h-4 text-[#a4a097] dark:text-[#686868] shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <p className="text-[#787671] dark:text-[#909090] text-sm leading-relaxed pb-5 pr-8">{a}</p>
      )}
    </div>
  );
}

export default function FAQPage() {
  return (
    <main className="flex-1 bg-white dark:bg-[#111111] py-20 px-4 sm:px-6 lg:px-8 transition-colors">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-semibold text-[#1a1a1a] dark:text-[#f0f0f0] mb-4 tracking-[-1px]">FAQ</h1>
          <p className="text-[#787671] dark:text-[#909090] text-xl">Answers to the most common questions.</p>
        </div>

        <div className="space-y-8">
          {faqs.map((section) => (
            <div key={section.category}>
              <p className="text-[11px] font-semibold text-[#5645d4] uppercase tracking-[1px] mb-2 px-1">
                {section.category}
              </p>
              <div className="bg-white dark:bg-[#1e1e1e] border border-[#e5e3df] dark:border-[#2e2e2e] rounded-[12px] px-6">
                {section.items.map((item) => (
                  <FAQItem key={item.q} q={item.q} a={item.a} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
