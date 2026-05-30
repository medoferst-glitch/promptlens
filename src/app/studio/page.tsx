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
    <main className="flex-1 bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-semibold text-[#1a1a1a] mb-3 tracking-[-0.5px]">Studio</h1>
          <p className="text-[#787671] text-lg">
            Upload an image and get a production-ready AI art prompt.
          </p>
        </div>

        {!file ? (
          <DropZone onFileSelect={handleFileSelect} />
        ) : (
          <div className="space-y-4">
            {/* Image preview */}
            <div className="rounded-[12px] overflow-hidden bg-white border border-[#e5e3df]">
              {preview && (
                <div className="w-full bg-[#f6f5f4] flex items-center justify-center p-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={preview}
                    alt="Selected"
                    className="max-h-72 w-auto rounded-[8px] object-contain"
                  />
                </div>
              )}
              <div className="flex items-center justify-between px-4 py-3 border-t border-[#e5e3df]">
                <span className="text-[#787671] text-sm truncate max-w-xs">{file.name}</span>
                <button
                  onClick={reset}
                  className="text-[#787671] hover:text-[#1a1a1a] text-sm transition-colors ml-4 shrink-0"
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
                className="w-full bg-[#5645d4] hover:bg-[#4534b3] disabled:bg-[#e5e3df] disabled:text-[#bbb8b1] disabled:cursor-not-allowed text-white font-medium py-[10px] rounded-[8px] transition-colors flex items-center justify-center gap-2 text-sm"
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
              <div className="bg-[#fde0ec] border border-[#e03131]/20 text-[#e03131] rounded-[8px] px-4 py-3 text-sm">
                {error}
              </div>
            )}

            {/* Prompt output */}
            {prompt && (
              <div className="bg-white border border-[#e5e3df] rounded-[12px] overflow-hidden">
                <div className="flex items-center justify-between px-5 py-3.5 border-b border-[#e5e3df] bg-[#f6f5f4]">
                  <span className="text-[#1a1a1a] font-semibold text-sm">Generated Prompt</span>
                  <div className="flex items-center gap-4">
                    <button
                      onClick={copyPrompt}
                      className="flex items-center gap-1.5 text-sm text-[#5645d4] hover:text-[#4534b3] font-medium transition-colors"
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
                      className="text-sm text-[#787671] hover:text-[#1a1a1a] transition-colors"
                    >
                      New image
                    </button>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-[#37352f] text-sm leading-relaxed font-mono whitespace-pre-wrap">
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
