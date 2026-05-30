"use client";

import { useState, FormEvent } from "react";

type FormState = { name: string; email: string; subject: string; message: string };

const initialForm: FormState = { name: "", email: "", subject: "", message: "" };

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [form, setForm] = useState<FormState>(initialForm);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setForm(initialForm);
    } catch {
      setStatus("error");
    }
  }

  const textFields = [
    { key: "name" as const, label: "Name", type: "text", placeholder: "Your name" },
    { key: "email" as const, label: "Email", type: "email", placeholder: "you@example.com" },
    { key: "subject" as const, label: "Subject", type: "text", placeholder: "What's this about?" },
  ];

  return (
    <main className="flex-1 bg-white dark:bg-[#111111] py-20 px-4 sm:px-6 lg:px-8 transition-colors">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-semibold text-[#1a1a1a] dark:text-[#f0f0f0] mb-4 tracking-[-1px]">Contact Us</h1>
          <p className="text-[#787671] dark:text-[#909090] text-xl">We&apos;d love to hear from you.</p>
        </div>

        {status === "success" ? (
          <div className="bg-[#d9f3e1] dark:bg-[#1a2e20] border border-[#1aae39]/20 rounded-[12px] p-10 text-center">
            <div className="w-12 h-12 bg-white/70 dark:bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-[#1aae39]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-[#1a1a1a] dark:text-[#f0f0f0] font-semibold text-lg mb-2">Message sent!</h2>
            <p className="text-[#787671] dark:text-[#909090] text-sm mb-5">
              We&apos;ll get back to you within 1–2 business days.
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="text-sm text-[#0075de] hover:text-[#005bab] transition-colors"
            >
              Send another message →
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-white dark:bg-[#1e1e1e] border border-[#e5e3df] dark:border-[#2e2e2e] rounded-[12px] p-8 space-y-5"
          >
            {textFields.map(({ key, label, type, placeholder }) => (
              <div key={key}>
                <label className="block text-sm font-medium text-[#37352f] dark:text-[#d4d4d4] mb-2">{label}</label>
                <input
                  type={type}
                  placeholder={placeholder}
                  required
                  value={form[key]}
                  onChange={(e) => setForm((prev) => ({ ...prev, [key]: e.target.value }))}
                  className="w-full bg-white dark:bg-[#111111] border border-[#c8c4be] dark:border-[#3e3e3e] focus:border-[#5645d4] focus:ring-0 outline-none text-[#1a1a1a] dark:text-[#f0f0f0] text-sm px-4 py-3 rounded-[8px] placeholder:text-[#bbb8b1] dark:placeholder:text-[#555555] transition-colors h-11"
                />
              </div>
            ))}
            <div>
              <label className="block text-sm font-medium text-[#37352f] dark:text-[#d4d4d4] mb-2">Message</label>
              <textarea
                rows={5}
                placeholder="Tell us more…"
                required
                value={form.message}
                onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
                className="w-full bg-white dark:bg-[#111111] border border-[#c8c4be] dark:border-[#3e3e3e] focus:border-[#5645d4] focus:ring-0 outline-none text-[#1a1a1a] dark:text-[#f0f0f0] text-sm px-4 py-3 rounded-[8px] placeholder:text-[#bbb8b1] dark:placeholder:text-[#555555] resize-none transition-colors"
              />
            </div>
            {status === "error" && (
              <p className="text-[#e03131] text-sm">Something went wrong. Please try again.</p>
            )}
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full bg-[#5645d4] hover:bg-[#4534b3] disabled:bg-[#e5e3df] dark:disabled:bg-[#2e2e2e] disabled:text-[#bbb8b1] dark:disabled:text-[#555555] disabled:cursor-not-allowed text-white font-medium py-[10px] rounded-[8px] transition-colors text-sm"
            >
              {status === "loading" ? "Sending…" : "Send Message"}
            </button>
          </form>
        )}

        <p className="text-center text-[#a4a097] dark:text-[#686868] text-sm mt-6">
          Or email us directly at{" "}
          <a
            href="mailto:support@promptlens.ai"
            className="text-[#0075de] hover:text-[#005bab] transition-colors"
          >
            support@promptlens.ai
          </a>
        </p>
      </div>
    </main>
  );
}
