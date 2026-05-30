import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function HistoryPage() {
  const { userId } = await auth();
  if (!userId) redirect("/signin");

  return (
    <main className="flex-1 bg-neutral-950 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
          <div>
            <h1 className="text-3xl font-bold text-white mb-1">Prompt History</h1>
            <p className="text-neutral-400 text-sm">All your previously generated prompts.</p>
          </div>
          <Link
            href="/studio"
            className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm px-5 py-2.5 rounded-xl transition-colors shrink-0 text-center"
          >
            + New Prompt
          </Link>
        </div>

        {/* Empty state */}
        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-20 text-center">
          <div className="w-16 h-16 bg-neutral-800 rounded-full flex items-center justify-center mx-auto mb-5">
            <svg
              className="w-8 h-8 text-neutral-600"
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
          <h2 className="text-white font-semibold text-lg mb-2">No history yet</h2>
          <p className="text-neutral-400 text-sm mb-6 max-w-xs mx-auto">
            Your saved prompts will appear here. Head to the Studio to generate your first one.
          </p>
          <Link
            href="/studio"
            className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm px-6 py-3 rounded-xl transition-colors inline-block"
          >
            Open Studio
          </Link>
        </div>
      </div>
    </main>
  );
}
