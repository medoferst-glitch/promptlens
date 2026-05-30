export default function PrivacyPage() {
  return (
    <main className="flex-1 bg-white dark:bg-[#111111] py-20 px-4 sm:px-6 lg:px-8 transition-colors">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-semibold text-[#1a1a1a] dark:text-[#f0f0f0] mb-3 tracking-[-0.5px]">Privacy Policy</h1>
          <p className="text-[#a4a097] dark:text-[#686868] text-sm">Last updated: May 30, 2026</p>
        </div>

        <div className="space-y-10 text-sm">
          {[
            {
              id: "information-we-collect",
              title: "1. Information We Collect",
              content:
                "We collect information you provide when creating an account (name, email address) and information generated through your use of the service (generated prompts, usage statistics). Images you upload are processed transiently and are not stored on our servers unless you explicitly enable history saving in your account settings.",
            },
            {
              id: "how-we-use",
              title: "2. How We Use Your Information",
              content:
                "We use collected information to operate and improve PromptLens, communicate with you about your account, and provide customer support. We do not sell your personal information to third parties under any circumstances.",
            },
            {
              id: "image-data",
              title: "3. Image Data",
              content:
                "Images uploaded to the Studio are transmitted to Cloudflare AI for analysis and are not retained after processing. If you enable prompt history in your account settings, we store a thumbnail image and the generated prompt text only. No image data is shared with any third party other than the Cloudflare AI processing infrastructure.",
            },
            {
              id: "cookies",
              title: "4. Cookies",
              content:
                "We use essential cookies to maintain your session and authentication state. We do not use tracking, advertising, or analytics cookies. You can disable cookies in your browser settings, but some features of PromptLens may not function correctly.",
            },
            {
              id: "data-security",
              title: "5. Data Security",
              content:
                "We implement industry-standard security measures to protect your information. All data is transmitted over HTTPS. Authentication tokens are stored securely and are never exposed in client-side code.",
            },
            {
              id: "your-rights",
              title: "6. Your Rights",
              content:
                "You may request deletion of your account and all associated data at any time by contacting us. Users in the EU and California have additional rights under GDPR and CCPA respectively, including the right to access, correct, and export your data.",
            },
            {
              id: "contact",
              title: "7. Contact",
              content:
                "For privacy-related inquiries, please contact us at privacy@promptlens.ai.",
            },
          ].map((section) => (
            <section key={section.id} id={section.id} className="border-b border-[#e5e3df] dark:border-[#2e2e2e] pb-10 last:border-0">
              <h2 className="text-[#1a1a1a] dark:text-[#f0f0f0] font-semibold text-base mb-3">{section.title}</h2>
              <p className="text-[#787671] dark:text-[#909090] leading-relaxed">{section.content}</p>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
