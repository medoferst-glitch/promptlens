import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-neutral-950 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4 w-fit">
              <div className="w-7 h-7 rounded-full bg-indigo-600 flex items-center justify-center">
                <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 111 11a6 6 0 0116 0z" />
                </svg>
              </div>
              <span className="font-bold text-white tracking-widest text-sm">PROMPTLENS</span>
            </Link>
            <p className="text-neutral-500 text-sm leading-relaxed">
              Turn any image into a perfect AI art prompt instantly.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-white text-xs font-semibold mb-4 uppercase tracking-widest">Product</h3>
            <ul className="space-y-2.5">
              {[
                ["Studio", "/studio"],
                ["Gallery", "/gallery"],
                ["Pricing", "/pricing"],
                ["How It Works", "/how-it-works"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-neutral-500 hover:text-white text-sm transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white text-xs font-semibold mb-4 uppercase tracking-widest">Company</h3>
            <ul className="space-y-2.5">
              {[
                ["About", "/about"],
                ["Contact", "/contact"],
                ["FAQ", "/faq"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-neutral-500 hover:text-white text-sm transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white text-xs font-semibold mb-4 uppercase tracking-widest">Legal</h3>
            <ul className="space-y-2.5">
              {[
                ["Privacy Policy", "/privacy"],
                ["Terms of Service", "/terms"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-neutral-500 hover:text-white text-sm transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-neutral-800 text-center">
          <p className="text-neutral-600 text-sm">© {year} PromptLens. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
