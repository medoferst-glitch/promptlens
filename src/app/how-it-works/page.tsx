import Link from "next/link";

export default function HowItWorksPage() {
  return (
    <main className="flex-1 bg-neutral-950 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">How It Works</h1>
          <p className="text-neutral-400 text-xl max-w-2xl mx-auto leading-relaxed">
            PromptLens uses a state-of-the-art vision AI to decode your image and write
            the prompt that would recreate it.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-6 mb-20">
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
            },
          ].map((s) => (
            <div
              key={s.step}
              className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-start bg-neutral-900 border border-neutral-800 rounded-2xl p-7 hover:border-indigo-800/40 transition-colors"
            >
              <div className="text-5xl font-bold text-neutral-800 shrink-0 font-mono w-14 text-center">
                {s.step}
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-bold text-white mb-2">{s.title}</h2>
                <p className="text-neutral-400 leading-relaxed mb-4 text-sm">{s.desc}</p>
                <ul className="space-y-2">
                  {s.tips.map((tip, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-neutral-400">
                      <span className="text-indigo-400 mt-0.5 shrink-0">✓</span>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Best practices */}
        <div className="bg-indigo-950/30 border border-indigo-800/30 rounded-2xl p-8 mb-16">
          <h2 className="text-xl font-bold text-white mb-5">Tips for Best Results</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              "Use high-quality, clear images when possible",
              "Images with distinct artistic styles produce the most useful prompts",
              "Avoid heavily compressed or very small images",
              "Screenshots of AI art work great as a reverse-engineering tool",
            ].map((tip, i) => (
              <div key={i} className="flex items-start gap-3 text-sm text-neutral-300">
                <span className="text-indigo-400 font-bold shrink-0 mt-0.5">→</span>
                {tip}
              </div>
            ))}
          </div>
        </div>

        {/* Tech stack */}
        <div className="text-center mb-16">
          <h2 className="text-xl font-bold text-white mb-5">Powered by</h2>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {["Cloudflare AI", "LLaVA 1.5 Vision", "Next.js 16", "React 19"].map((tech) => (
              <span
                key={tech}
                className="bg-neutral-900 border border-neutral-800 text-neutral-300 text-sm px-4 py-2 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <p className="text-neutral-500 text-sm mb-4">Still have questions?</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/faq"
              className="text-indigo-400 hover:text-indigo-300 font-medium transition-colors text-sm"
            >
              View the FAQ →
            </Link>
            <Link
              href="/studio"
              className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-6 py-2.5 rounded-xl text-sm transition-colors"
            >
              Try it now →
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
