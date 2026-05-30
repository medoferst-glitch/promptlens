"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth, UserButton } from "@clerk/nextjs";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/studio", label: "Studio" },
  { href: "/gallery", label: "Gallery" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/pricing", label: "Pricing" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { isSignedIn } = useAuth();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-[#e5e3df]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-[8px] bg-[#5645d4] flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 111 11a6 6 0 0116 0z" />
              </svg>
            </div>
            <span className="font-semibold text-[#1a1a1a] tracking-tight text-sm">PromptLens</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm px-3 py-2 rounded-[6px] transition-colors ${
                  pathname === link.href
                    ? "text-[#1a1a1a] font-medium bg-[#f6f5f4]"
                    : "text-[#787671] hover:text-[#1a1a1a] hover:bg-[#f6f5f4]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Auth buttons */}
          <div className="hidden md:flex items-center gap-2">
            {isSignedIn ? (
              <>
                <Link
                  href="/dashboard"
                  className="text-sm text-[#787671] hover:text-[#1a1a1a] transition-colors px-3 py-2 rounded-[6px] hover:bg-[#f6f5f4]"
                >
                  Dashboard
                </Link>
                <UserButton />
              </>
            ) : (
              <>
                <Link
                  href="/signin"
                  className="text-sm text-[#787671] hover:text-[#1a1a1a] transition-colors px-3 py-2 rounded-[6px] hover:bg-[#f6f5f4]"
                >
                  Sign In
                </Link>
                <Link
                  href="/signup"
                  className="text-sm bg-[#5645d4] hover:bg-[#4534b3] text-white px-[18px] py-[10px] rounded-[8px] transition-colors font-medium"
                >
                  Get Started
                </Link>
              </>
            )}
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-[#787671] hover:text-[#1a1a1a] p-2 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden py-3 border-t border-[#e5e3df] space-y-0.5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`block px-3 py-2.5 text-sm rounded-[8px] transition-colors ${
                  pathname === link.href
                    ? "text-[#1a1a1a] font-medium bg-[#f6f5f4]"
                    : "text-[#787671] hover:text-[#1a1a1a] hover:bg-[#f6f5f4]"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 pb-1 flex flex-col gap-2 border-t border-[#e5e3df] mt-2">
              {isSignedIn ? (
                <Link
                  href="/dashboard"
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2.5 text-sm text-[#787671] hover:text-[#1a1a1a] transition-colors rounded-[8px] hover:bg-[#f6f5f4]"
                >
                  Dashboard
                </Link>
              ) : (
                <>
                  <Link
                    href="/signin"
                    onClick={() => setOpen(false)}
                    className="block px-3 py-2.5 text-sm text-[#787671] hover:text-[#1a1a1a] transition-colors rounded-[8px] hover:bg-[#f6f5f4]"
                  >
                    Sign In
                  </Link>
                  <Link
                    href="/signup"
                    onClick={() => setOpen(false)}
                    className="block text-center text-sm bg-[#5645d4] hover:bg-[#4534b3] text-white px-4 py-2.5 rounded-[8px] transition-colors font-medium"
                  >
                    Get Started
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
