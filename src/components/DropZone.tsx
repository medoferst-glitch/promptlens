"use client";

import { useRef, useState, DragEvent, ChangeEvent } from "react";

interface DropZoneProps {
  onFileSelect: (file: File) => void;
}

const ACCEPTED_TYPES = ["image/jpeg", "image/png", "image/webp"];
const MAX_SIZE_BYTES = 5 * 1024 * 1024;

export default function DropZone({ onFileSelect }: DropZoneProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function validate(file: File): string | null {
    if (!ACCEPTED_TYPES.includes(file.type)) {
      return "Only JPG, PNG, and WebP images are accepted.";
    }
    if (file.size > MAX_SIZE_BYTES) {
      return "File must be under 5 MB.";
    }
    return null;
  }

  function handleFile(file: File) {
    const err = validate(file);
    if (err) {
      setError(err);
      return;
    }
    setError(null);
    onFileSelect(file);
  }

  function onDragOver(e: DragEvent<HTMLDivElement>) {
    e.preventDefault();
    setIsDragging(true);
  }

  function onDragLeave(e: DragEvent<HTMLDivElement>) {
    e.preventDefault();
    setIsDragging(false);
  }

  function onDrop(e: DragEvent<HTMLDivElement>) {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
  }

  function onChange(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
    e.target.value = "";
  }

  return (
    <div className="flex flex-col items-center gap-2">
      <div
        role="button"
        tabIndex={0}
        onClick={() => inputRef.current?.click()}
        onKeyDown={(e) => e.key === "Enter" && inputRef.current?.click()}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
        className={[
          "flex flex-col items-center justify-center gap-3 w-full rounded-[12px]",
          "border-2 border-dashed px-8 py-14 cursor-pointer select-none",
          "transition-colors duration-150",
          isDragging
            ? "border-[#5645d4] bg-[#e6e0f5]"
            : "border-[#c8c4be] bg-[#f6f5f4] hover:border-[#5645d4] hover:bg-white",
        ].join(" ")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`w-10 h-10 ${isDragging ? "text-[#5645d4]" : "text-[#a4a097]"}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
          />
        </svg>
        <p className="text-sm text-[#37352f] text-center font-medium">
          Drop your art image here or click to upload
        </p>
        <p className="text-xs text-[#a4a097]">JPG, PNG, WebP · max 5 MB</p>
      </div>

      {error && (
        <p className="text-sm text-[#e03131] text-center">{error}</p>
      )}

      <input
        ref={inputRef}
        type="file"
        accept=".jpg,.jpeg,.png,.webp"
        className="hidden"
        onChange={onChange}
      />
    </div>
  );
}
