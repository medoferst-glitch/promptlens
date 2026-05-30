import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function HistoryPage() {
  const { userId } = await auth();
  if (!userId) redirect("/signin");

  return (
    <main className="flex-1 bg-white dark:bg-[#111111] py-12 px-4 sm:px-6 lg:px-8 transition-colors">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
          <div>
            <h1 className="text-3xl font-semibold text-[#1a1a1a] dark:text-[#f0f0f0] mb-1 tracking-[-0.5px]">Prompt History</h1>
            <p className="text-[#787671] dark:text-[#909090] text-sm">All your previously generated prompts.</p>
          </div>
          <Link
            href="/studio"
            className="bg-[#5645d4] hover:bg-[#4534b3] text-white font-medium text-sm px-[18px] py-[10px] rounded-[8px] transition-colors shrink-0 text-center"
          >
            + New Prompt
          </Link>
        </div>

        {/* Empty state */}
        <div className="bg-white dark:bg-[#1e1e1e] border border-[#e5e3df] dark:border-[#2e2e2e] rounded-[12px] p-20 text-center">
          <div className="w-16 h-16 bg-[#f6f5f4] dark:bg-[#171717] rounded-full flex items-center justify-center mx-auto mb-5">
            <svg
              className="w-8 h-8 text-[#c8c4be] dark:text-[#3e3e3e]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h2 className="text-[#1a1a1a] dark:text-[#f0f0f0] font-semibold text-lg mb-2">No history yet</h2>
          <p className="text-[#787671] dark:text-[#909090] text-sm mb-6 max-w-xs mx-auto">
            Your saved prompts will appear here. Head to the Studio to generate your first one.
          </p>
          <Link
            href="/studio"
            className="bg-[#5645d4] hover:bg-[#4534b3] text-white font-medium text-sm px-[18px] py-[10px] rounded-[8px] transition-colors inline-block"
          >
            Open Studio
          </Link>
        </div>
      </div>
    </main>
  );
}
