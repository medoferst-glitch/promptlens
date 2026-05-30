import Link from "next/link";

export default function HowItWorksPage() {
  return (
    <main className="flex-1 bg-white dark:bg-[#111111] py-20 px-4 sm:px-6 lg:px-8 transition-colors">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-semibold text-[#1a1a1a] dark:text-[#f0f0f0] mb-4 tracking-[-1px]">How It Works</h1>
          <p className="text-[#787671] dark:text-[#909090] text-xl max-w-2xl mx-auto leading-relaxed">
            PromptLens uses a state-of-the-art vision AI to decode your image and write
            the prompt that would recreate it.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-4 mb-20">
          {[
            {
              step: "01",
              title: "Upload Your Image",
              desc: "Drag and drop — or click to browse — any JPG, PNG, or WebP file up to 5 MB. Works with photos, digital art, illustrations, 3D renders, and screenshots.",
              tips: [
                "Higher resolution images produce richer prompts",
                "Well-lit images give more accurate color descriptions",
                "Any subject — portraits, landscapes, abstracts, architecture",
              ],
              tint: "bg-[#dcecfa] dark:bg-[#1a2535]",
            },
            {
              step: "02",
              title: "AI Vision Analysis",
              desc: "Your image is processed by LLaVA, a powerful multimodal vision model running on Cloudflare AI infrastructure. It reads the entire scene end-to-end.",
              tips: [
                "Analyzes: subject, art style, color palette, mood, and lighting",
                "Detects composition techniques and depth of field",
                "Identifies medium: photo, oil painting, 3D render, illustration, and more",
              ],
              tint: "bg-[#e6e0f5] dark:bg-[#221a35]",
            },
            {
              step: "03",
              title: "Prompt Engineering",
              desc: "The raw analysis is transformed into a structured, production-ready prompt using best practices from the AI art community — complete with quality tags and style modifiers.",
              tips: [
                "Compatible with Midjourney, DALL-E, Stable Diffusion, and Firefly",
                "Includes quality boosters, style tokens, and aspect ratio hints",
                "One click to copy — paste directly into your tool of choice",
              ],
              tint: "bg-[#d9f3e1] dark:bg-[#1a2e20]",
            },
          ].map((s) => (
            <div
              key={s.step}
              className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-start bg-white dark:bg-[#1e1e1e] border border-[#e5e3df] dark:border-[#2e2e2e] rounded-[12px] p-7"
            >
              <div className="text-5xl font-bold text-[#e5e3df] dark:text-[#2e2e2e] shrink-0 font-mono w-14 text-center">
                {s.step}
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-semibold text-[#1a1a1a] dark:text-[#f0f0f0] mb-2">{s.title}</h2>
                <p className="text-[#787671] dark:text-[#909090] leading-relaxed mb-4 text-sm">{s.desc}</p>
                <ul className="space-y-2">
                  {s.tips.map((tip, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[#787671] dark:text-[#909090]">
                      <span className="text-[#1aae39] mt-0.5 shrink-0 font-semibold">✓</span>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Best practices */}
        <div className="bg-[#e6e0f5] dark:bg-[#221a35] rounded-[12px] p-8 mb-16">
          <h2 className="text-xl font-semibold text-[#37352f] dark:text-[#d4d4d4] mb-5">Tips for Best Results</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              "Use high-quality, clear images when possible",
              "Images with distinct artistic styles produce the most useful prompts",
              "Avoid heavily compressed or very small images",
              "Screenshots of AI art work great as a reverse-engineering tool",
            ].map((tip, i) => (
              <div key={i} className="flex items-start gap-3 text-sm text-[#5d5b54] dark:text-[#a0a0a0]">
                <span className="text-[#5645d4] font-bold shrink-0 mt-0.5">→</span>
                {tip}
              </div>
            ))}
          </div>
        </div>

        {/* Tech stack */}
        <div className="text-center mb-16">
          <h2 className="text-xl font-semibold text-[#1a1a1a] dark:text-[#f0f0f0] mb-5">Powered by</h2>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {["Cloudflare AI", "LLaVA 1.5 Vision", "Next.js 16", "React 19"].map((tech) => (
              <span
                key={tech}
                className="bg-white dark:bg-[#1e1e1e] border border-[#e5e3df] dark:border-[#2e2e2e] text-[#37352f] dark:text-[#d4d4d4] text-sm px-4 py-2 rounded-full font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <p className="text-[#a4a097] dark:text-[#686868] text-sm mb-4">Still have questions?</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/faq"
              className="text-[#0075de] hover:text-[#005bab] font-medium transition-colors text-sm"
            >
              View the FAQ →
            </Link>
            <Link
              href="/studio"
              className="bg-[#5645d4] hover:bg-[#4534b3] text-white font-medium px-[18px] py-[10px] rounded-[8px] text-sm transition-colors"
            >
              Try it now →
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
