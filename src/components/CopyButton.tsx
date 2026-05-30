"use client";

import { useState } from "react";

interface CopyButtonProps {
  text: string;
  className?: string;
  label?: string;
}

export default function CopyButton({ text, className, label = "Copy prompt" }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <button onClick={copy} className={className}>
      {copied ? "Copied!" : label}
    </button>
  );
}
