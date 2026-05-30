"use client";

import { useState, useCallback } from "react";
import DropZone from "@/components/DropZone";

export default function StudioPage() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [prompt, setPrompt] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const handleFileSelect = useCallback((f: File) => {
    setFile(f);
    setPrompt(null);
    setError(null);
    setPreview((prev) => {
      if (prev) URL.revokeObjectURL(prev);
      return URL.createObjectURL(f);
    });
  }, []);

  async function generatePrompt() {
    if (!file) return;
    setLoading(true);
    setError(null);
    setPrompt(null);
    try {
      const formData = new FormData();
      formData.append("image", file);
      const res = await fetch("/api/analyze", { method: "POST", body: formData });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to analyze image");
      setPrompt(data.prompt);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  async function copyPrompt() {
    if (!prompt) return;
    await navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  function reset() {
    if (preview) URL.revokeObjectURL(preview);
    setFile(null);
    setPreview(null);
    setPrompt(null);
    setError(null);
    setCopied(false);
  }

  return (
    <main className="flex-1 bg-neutral-950 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-white mb-3">Studio</h1>
          <p className="text-neutral-400 text-lg">
            Upload an image and get a production-ready AI art prompt.
          </p>
        </div>

        {!file ? (
          <DropZone onFileSelect={handleFileSelect} />
        ) : (
          <div className="space-y-5">
            {/* Image preview */}
            <div className="rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800">
              {preview && (
                <div className="w-full bg-neutral-950 flex items-center justify-center p-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={preview}
                    alt="Selected"
                    className="max-h-72 w-auto rounded-lg object-contain"
                  />
                </div>
              )}
              <div className="flex items-center justify-between px-4 py-3 border-t border-neutral-800">
                <span className="text-neutral-400 text-sm truncate max-w-xs">{file.name}</span>
                <button
                  onClick={reset}
                  className="text-neutral-500 hover:text-white text-sm transition-colors ml-4 shrink-0"
                >
                  Change image
                </button>
              </div>
            </div>

            {/* Generate button */}
            {!prompt && (
              <button
                onClick={generatePrompt}
                disabled={loading}
                className="w-full bg-indigo-600 hover:bg-indigo-500 disabled:bg-indigo-900 disabled:cursor-not-allowed text-white font-semibold py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2 text-sm"
              >
                {loading ? (
                  <>
                    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8H4z"
                      />
                    </svg>
                    Analyzing image…
                  </>
                ) : (
                  "Generate Prompt →"
                )}
              </button>
            )}

            {/* Error */}
            {error && (
              <div className="bg-red-950/40 border border-red-800/50 text-red-300 rounded-xl px-4 py-3 text-sm">
                {error}
              </div>
            )}

            {/* Prompt output */}
            {prompt && (
              <div className="bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden">
                <div className="flex items-center justify-between px-5 py-3.5 border-b border-neutral-800">
                  <span className="text-white font-semibold text-sm">Generated Prompt</span>
                  <div className="flex items-center gap-4">
                    <button
                      onClick={copyPrompt}
                      className="flex items-center gap-1.5 text-sm text-indigo-400 hover:text-indigo-300 font-medium transition-colors"
                    >
                      {copied ? (
                        <>
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          Copied!
                        </>
                      ) : (
                        <>
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                            />
                          </svg>
                          Copy
                        </>
                      )}
                    </button>
                    <button
                      onClick={reset}
                      className="text-sm text-neutral-500 hover:text-white transition-colors"
                    >
                      New image
                    </button>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-neutral-300 text-sm leading-relaxed font-mono whitespace-pre-wrap">
                    {prompt}
                  </p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  );
}
