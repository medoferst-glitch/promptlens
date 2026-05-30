import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex-1 bg-neutral-950">
      {/* Hero */}
      <section className="relative overflow-hidden py-28 px-4 sm:px-6 lg:px-8 text-center">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[700px] h-[500px] bg-indigo-600/8 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-indigo-950/60 border border-indigo-800/50 text-indigo-300 text-xs font-medium px-4 py-1.5 rounded-full mb-8">
            <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-pulse" />
            Powered by Cloudflare AI Vision
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 tracking-tight">
            Turn Any Image Into a<br />
            <span className="text-indigo-400">Perfect AI Prompt</span>
          </h1>
          <p className="text-neutral-400 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Upload your reference image and get a detailed, production-ready prompt for{" "}
            Midjourney, Stable Diffusion, or DALL-E — in seconds.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/studio"
              className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-8 py-3.5 rounded-xl text-sm transition-colors w-full sm:w-auto text-center"
            >
              Open Studio →
            </Link>
            <Link
              href="/how-it-works"
              className="border border-neutral-700 hover:border-neutral-500 text-neutral-300 hover:text-white font-medium px-8 py-3.5 rounded-xl text-sm transition-colors w-full sm:w-auto text-center"
            >
              See How It Works
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-neutral-800/40">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-3xl font-bold text-white mb-3">
            Everything you need to recreate any image
          </h2>
          <p className="text-center text-neutral-500 mb-12 text-base">No prompt engineering expertise required.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                ),
                title: "Lightning Fast",
                desc: "Get a detailed prompt in under 5 seconds. No waiting, no fussing.",
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "Prompt-Engineer Quality",
                desc: "Covers style, mood, lighting, composition, color palette, and quality tags automatically.",
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                  </svg>
                ),
                title: "Works With All AI Tools",
                desc: "Optimized output for Midjourney, Stable Diffusion, DALL-E, Firefly, and more.",
              },
            ].map((f) => (
              <div
                key={f.title}
                className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 hover:border-indigo-800/50 transition-colors group"
              >
                <div className="w-10 h-10 bg-indigo-950/60 border border-indigo-800/40 rounded-xl flex items-center justify-center text-indigo-400 mb-4 group-hover:bg-indigo-950 transition-colors">
                  {f.icon}
                </div>
                <h3 className="text-white font-semibold text-base mb-2">{f.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-neutral-800/40">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">How It Works</h2>
          <p className="text-neutral-500 mb-16 text-base">Three steps. That&apos;s it.</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
            {[
              {
                step: "01",
                title: "Upload Your Image",
                desc: "Drag & drop or browse any JPG, PNG, or WebP image up to 5 MB.",
              },
              {
                step: "02",
                title: "AI Analyzes It",
                desc: "Our vision model reads every detail — subject, style, lighting, colors, and more.",
              },
              {
                step: "03",
                title: "Copy Your Prompt",
                desc: "One click copies a production-ready prompt for any AI art tool.",
              },
            ].map((s) => (
              <div key={s.step} className="flex flex-col items-center">
                <div className="text-6xl font-bold text-neutral-800 mb-3 font-mono">{s.step}</div>
                <h3 className="text-white font-semibold text-base mb-2">{s.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <Link
            href="/how-it-works"
            className="inline-block mt-10 text-indigo-400 hover:text-indigo-300 text-sm font-medium transition-colors"
          >
            Learn more →
          </Link>
        </div>
      </section>

      {/* CTA banner */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-indigo-950/40 border border-indigo-800/40 rounded-3xl px-8 py-16 text-center overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-96 h-64 bg-indigo-600/10 rounded-full blur-3xl" />
            </div>
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Ready to get started?
              </h2>
              <p className="text-neutral-400 mb-8 text-base max-w-sm mx-auto">
                Free to use. No sign-up required to try the Studio.
              </p>
              <Link
                href="/studio"
                className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-10 py-3.5 rounded-xl text-sm transition-colors inline-block"
              >
                Try Studio for Free →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
