import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function DashboardPage() {
  const { userId } = await auth();
  if (!userId) redirect("/signin");

  const user = await currentUser();

  return (
    <main className="flex-1 bg-white dark:bg-[#111111] py-12 px-4 sm:px-6 lg:px-8 transition-colors">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl font-semibold text-[#1a1a1a] dark:text-[#f0f0f0] mb-1 tracking-[-0.5px]">
            Welcome back{user?.firstName ? `, ${user.firstName}` : ""}
          </h1>
          <p className="text-[#787671] dark:text-[#909090] text-sm">Here&apos;s your PromptLens overview.</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {[
            { label: "Total Prompts", value: "—", sub: "All time" },
            { label: "Saved Prompts", value: "—", sub: "In your history" },
            { label: "This Month", value: "—", sub: "Prompts generated" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-[#f6f5f4] dark:bg-[#1e1e1e] rounded-[12px] p-6"
            >
              <p className="text-[#787671] dark:text-[#909090] text-[11px] font-semibold uppercase tracking-[1px] mb-2">{stat.label}</p>
              <p className="text-3xl font-semibold text-[#1a1a1a] dark:text-[#f0f0f0] mb-1">{stat.value}</p>
              <p className="text-[#a4a097] dark:text-[#686868] text-xs">{stat.sub}</p>
            </div>
          ))}
        </div>

        {/* Quick actions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <Link
            href="/studio"
            className="bg-[#e6e0f5] dark:bg-[#221a35] rounded-[12px] p-6 transition-colors group block"
          >
            <div className="w-10 h-10 bg-white/70 dark:bg-white/10 rounded-[8px] flex items-center justify-center mb-4">
              <svg
                className="w-5 h-5 text-[#5645d4]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"
                />
              </svg>
            </div>
            <h2 className="text-[#37352f] dark:text-[#d4d4d4] font-semibold mb-1">Go to Studio</h2>
            <p className="text-[#5d5b54] dark:text-[#a0a0a0] text-sm">Upload an image and generate a new prompt.</p>
          </Link>
          <Link
            href="/history"
            className="bg-[#f6f5f4] dark:bg-[#1e1e1e] border border-[#e5e3df] dark:border-[#2e2e2e] rounded-[12px] p-6 transition-colors group block"
          >
            <div className="w-10 h-10 bg-white dark:bg-[#111111] rounded-[8px] flex items-center justify-center mb-4 border border-[#e5e3df] dark:border-[#2e2e2e]">
              <svg
                className="w-5 h-5 text-[#787671] dark:text-[#909090]"
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
            <h2 className="text-[#1a1a1a] dark:text-[#f0f0f0] font-semibold mb-1">View History</h2>
            <p className="text-[#787671] dark:text-[#909090] text-sm">Browse your previously generated prompts.</p>
          </Link>
        </div>

        {/* Recent prompts */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-[#1a1a1a] dark:text-[#f0f0f0] font-semibold">Recent Prompts</h2>
            <Link
              href="/history"
              className="text-[#0075de] hover:text-[#005bab] text-sm transition-colors"
            >
              See all →
            </Link>
          </div>
          <div className="bg-white dark:bg-[#1e1e1e] border border-[#e5e3df] dark:border-[#2e2e2e] rounded-[12px] p-12 text-center">
            <div className="w-12 h-12 bg-[#f6f5f4] dark:bg-[#171717] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-6 h-6 text-[#c8c4be] dark:text-[#3e3e3e]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35M17 11A6 6 0 111 11a6 6 0 0116 0z"
                />
              </svg>
            </div>
            <p className="text-[#a4a097] dark:text-[#686868] text-sm mb-3">No prompts yet</p>
            <Link
              href="/studio"
              className="text-[#0075de] hover:text-[#005bab] text-sm transition-colors"
            >
              Generate your first prompt →
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
