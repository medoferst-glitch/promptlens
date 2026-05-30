export default function AboutPage() {
  return (
    <main className="flex-1 bg-neutral-950 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">About PromptLens</h1>
          <p className="text-neutral-400 text-xl">Built for creators, by a creator.</p>
        </div>

        <div className="space-y-6">
          <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8">
            <h2 className="text-xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-neutral-400 leading-relaxed text-sm">
              PromptLens exists to bridge the gap between visual inspiration and AI art generation.
              We believe the barrier between seeing an image you love and recreating it in an AI
              tool should be zero — not hours of manual prompt crafting.
            </p>
          </div>

          <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8">
            <h2 className="text-xl font-bold text-white mb-4">The Story</h2>
            <p className="text-neutral-400 leading-relaxed text-sm mb-4">
              It started with a simple frustration: you find a beautiful piece of AI art, but
              reverse-engineering the prompt takes forever. You try to describe it yourself, but
              the AI just doesn&apos;t get it. The vocabulary of AI art prompting is its own craft.
            </p>
            <p className="text-neutral-400 leading-relaxed text-sm">
              PromptLens automates that craft. Upload the image, and the prompt comes back —
              detailed, structured, and ready to paste.
            </p>
          </div>

          <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8">
            <h2 className="text-xl font-bold text-white mb-5">The Stack</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                "Next.js 16",
                "React 19",
                "TypeScript",
                "Tailwind CSS 4",
                "Cloudflare AI",
                "LLaVA Vision Model",
              ].map((tech) => (
                <div
                  key={tech}
                  className="bg-neutral-950 border border-neutral-700 rounded-lg px-4 py-2.5 text-sm text-neutral-300 text-center"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8">
            <h2 className="text-xl font-bold text-white mb-4">Values</h2>
            <ul className="space-y-3">
              {[
                { title: "Speed", desc: "Prompts in seconds, not minutes." },
                { title: "Quality", desc: "Every prompt is production-ready out of the box." },
                { title: "Privacy", desc: "Your images are never stored without your consent." },
                { title: "Accessibility", desc: "Free to try, always. No credit card required." },
              ].map(({ title, desc }) => (
                <li key={title} className="flex items-start gap-3 text-sm">
                  <span className="text-indigo-400 font-semibold shrink-0 mt-0.5">→</span>
                  <span>
                    <span className="text-white font-medium">{title} — </span>
                    <span className="text-neutral-400">{desc}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
