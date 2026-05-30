import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex-1">
      {/* Hero — deep navy band */}
      <section
        className="relative overflow-hidden py-28 sm:py-36 px-4 sm:px-6 lg:px-8 text-center"
        style={{ background: "#0a1530" }}
      >
        {/* Decorative sticky-note dots */}
        <span className="absolute top-12 left-[8%] w-3 h-3 rounded-full bg-[#5645d4] opacity-90 pointer-events-none" />
        <span className="absolute top-20 right-[12%] w-2 h-2 rounded-full bg-[#dd5b00] pointer-events-none" />
        <span className="absolute top-36 left-[22%] w-2 h-2 rounded-full bg-[#f5d75e] pointer-events-none" />
        <span className="absolute bottom-16 left-[16%] w-2.5 h-2.5 rounded-full bg-[#1aae39] opacity-80 pointer-events-none" />
        <span className="absolute bottom-20 right-[20%] w-3 h-3 rounded-full bg-[#ff64c8] opacity-70 pointer-events-none" />
        <span className="absolute top-24 right-[30%] w-1.5 h-1.5 rounded-full bg-[#2a9d99] pointer-events-none" />
        <span className="absolute bottom-28 right-[8%] w-2 h-2 rounded-full bg-[#7b3ff2] opacity-80 pointer-events-none" />

        <div className="relative max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#1a2a52] border border-[#5645d4]/30 text-[#a4a097] text-xs font-medium px-4 py-1.5 rounded-full mb-8">
            <span className="w-1.5 h-1.5 bg-[#5645d4] rounded-full animate-pulse" />
            Powered by Cloudflare AI Vision
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] font-semibold text-white leading-[1.05] mb-6 tracking-[-2px]">
            Turn Any Image Into a<br />
            Perfect AI Prompt
          </h1>

          <p className="text-[#a4a097] text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
            Upload your reference image and get a detailed, production-ready prompt for{" "}
            Midjourney, Stable Diffusion, or DALL-E — in seconds.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/studio"
              className="bg-[#5645d4] hover:bg-[#4534b3] text-white font-medium px-[18px] py-[10px] rounded-[8px] text-sm transition-colors w-full sm:w-auto text-center"
            >
              Open Studio →
            </Link>
            <Link
              href="/how-it-works"
              className="border border-[#a4a097] hover:border-white text-white font-medium px-[18px] py-[10px] rounded-[8px] text-sm transition-colors w-full sm:w-auto text-center"
            >
              See How It Works
            </Link>
          </div>

          {/* Workspace mockup card */}
          <div
            className="mt-16 mx-auto max-w-3xl rounded-[12px] border border-[#e5e3df] bg-white overflow-hidden text-left"
            style={{ boxShadow: "rgba(15, 15, 15, 0.20) 0px 24px 48px -8px" }}
          >
            <div className="flex items-center gap-2 px-4 py-3 border-b border-[#e5e3df] bg-[#f6f5f4]">
              <span className="w-3 h-3 rounded-full bg-[#e5e3df]" />
              <span className="w-3 h-3 rounded-full bg-[#e5e3df]" />
              <span className="w-3 h-3 rounded-full bg-[#e5e3df]" />
              <span className="ml-3 text-xs text-[#a4a097] font-medium">PromptLens Studio</span>
            </div>
            <div className="p-6 flex flex-col sm:flex-row gap-6">
              <div className="flex-1 rounded-[8px] bg-[#f6f5f4] border border-[#e5e3df] aspect-square sm:aspect-auto sm:h-40 flex items-center justify-center">
                <svg className="w-10 h-10 text-[#c8c4be]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3 3.75h18M3 20.25h18M12 12a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" />
                </svg>
              </div>
              <div className="flex-[2] flex flex-col gap-3">
                <div className="text-xs font-semibold text-[#787671] uppercase tracking-[1px]">Generated Prompt</div>
                <div className="space-y-2">
                  <div className="h-3 rounded-full bg-[#e5e3df] w-full" />
                  <div className="h-3 rounded-full bg-[#e5e3df] w-5/6" />
                  <div className="h-3 rounded-full bg-[#e5e3df] w-4/6" />
                  <div className="h-3 rounded-full bg-[#e5e3df] w-3/4" />
                </div>
                <div className="mt-auto flex items-center gap-2">
                  <span className="text-xs bg-[#e6e0f5] text-[#391c57] font-semibold px-2 py-0.5 rounded-[6px]">Midjourney</span>
                  <span className="text-xs bg-[#d9f3e1] text-[#1aae39] font-semibold px-2 py-0.5 rounded-[6px]">DALL-E</span>
                  <span className="text-xs bg-[#dcecfa] text-[#0075de] font-semibold px-2 py-0.5 rounded-[6px]">Stable Diffusion</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features — pastel tinted cards */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-t border-[#e5e3df]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-3xl sm:text-4xl font-semibold text-[#1a1a1a] mb-3 tracking-[-0.5px]">
            Everything you need to recreate any image
          </h2>
          <p className="text-center text-[#787671] mb-14 text-base">No prompt engineering expertise required.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                tint: "bg-[#d9f3e1]",
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                ),
                title: "Lightning Fast",
                desc: "Get a detailed prompt in under 5 seconds. No waiting, no fussing.",
              },
              {
                tint: "bg-[#e6e0f5]",
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "Prompt-Engineer Quality",
                desc: "Covers style, mood, lighting, composition, color palette, and quality tags automatically.",
              },
              {
                tint: "bg-[#dcecfa]",
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
                className={`${f.tint} rounded-[12px] p-8`}
              >
                <div className="w-10 h-10 bg-white/70 rounded-[8px] flex items-center justify-center text-[#37352f] mb-5">
                  {f.icon}
                </div>
                <h3 className="text-[#37352f] font-semibold text-lg mb-2">{f.title}</h3>
                <p className="text-[#5d5b54] text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#f6f5f4]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#1a1a1a] mb-3 tracking-[-0.5px]">How It Works</h2>
          <p className="text-[#787671] mb-16 text-base">Three steps. That&apos;s it.</p>
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
                <div className="text-6xl font-bold text-[#e5e3df] mb-3 font-mono">{s.step}</div>
                <h3 className="text-[#1a1a1a] font-semibold text-base mb-2">{s.title}</h3>
                <p className="text-[#787671] text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <Link
            href="/how-it-works"
            className="inline-block mt-10 text-[#0075de] hover:text-[#005bab] text-sm font-medium transition-colors"
          >
            Learn more →
          </Link>
        </div>
      </section>

      {/* CTA banner */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#f6f5f4] rounded-[12px] px-8 py-16 text-center">
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1a1a1a] mb-4 tracking-[-0.5px]">
              Ready to get started?
            </h2>
            <p className="text-[#787671] mb-8 text-base max-w-sm mx-auto">
              Free to use. No sign-up required to try the Studio.
            </p>
            <Link
              href="/studio"
              className="bg-[#5645d4] hover:bg-[#4534b3] text-white font-medium px-[18px] py-[10px] rounded-[8px] text-sm transition-colors inline-block"
            >
              Try Studio for Free →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
