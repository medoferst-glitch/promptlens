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
    <main className="flex-1 bg-neutral-950 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-neutral-400 text-xl">We&apos;d love to hear from you.</p>
        </div>

        {status === "success" ? (
          <div className="bg-green-950/40 border border-green-800/50 text-green-300 rounded-2xl p-10 text-center">
            <div className="w-12 h-12 bg-green-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-white font-semibold text-lg mb-2">Message sent!</h2>
            <p className="text-neutral-400 text-sm mb-5">
              We&apos;ll get back to you within 1–2 business days.
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors"
            >
              Send another message →
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 space-y-5"
          >
            {textFields.map(({ key, label, type, placeholder }) => (
              <div key={key}>
                <label className="block text-sm font-medium text-neutral-300 mb-2">{label}</label>
                <input
                  type={type}
                  placeholder={placeholder}
                  required
                  value={form[key]}
                  onChange={(e) => setForm((prev) => ({ ...prev, [key]: e.target.value }))}
                  className="w-full bg-neutral-950 border border-neutral-700 focus:border-indigo-500 outline-none text-white text-sm px-4 py-3 rounded-xl placeholder:text-neutral-600 transition-colors"
                />
              </div>
            ))}
            <div>
              <label className="block text-sm font-medium text-neutral-300 mb-2">Message</label>
              <textarea
                rows={5}
                placeholder="Tell us more…"
                required
                value={form.message}
                onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
                className="w-full bg-neutral-950 border border-neutral-700 focus:border-indigo-500 outline-none text-white text-sm px-4 py-3 rounded-xl placeholder:text-neutral-600 resize-none transition-colors"
              />
            </div>
            {status === "error" && (
              <p className="text-red-400 text-sm">Something went wrong. Please try again.</p>
            )}
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full bg-indigo-600 hover:bg-indigo-500 disabled:bg-indigo-900 disabled:cursor-not-allowed text-white font-semibold py-3.5 rounded-xl transition-colors text-sm"
            >
              {status === "loading" ? "Sending…" : "Send Message"}
            </button>
          </form>
        )}

        <p className="text-center text-neutral-500 text-sm mt-6">
          Or email us directly at{" "}
          <a
            href="mailto:support@promptlens.ai"
            className="text-indigo-400 hover:text-indigo-300 transition-colors"
          >
            support@promptlens.ai
          </a>
        </p>
      </div>
    </main>
  );
}
