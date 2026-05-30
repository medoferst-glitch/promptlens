import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function DashboardPage() {
  const { userId } = await auth();
  if (!userId) redirect("/signin");

  const user = await currentUser();

  return (
    <main className="flex-1 bg-neutral-950 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-white mb-1">
            Welcome back{user?.firstName ? `, ${user.firstName}` : ""}
          </h1>
          <p className="text-neutral-400 text-sm">Here&apos;s your PromptLens overview.</p>
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
              className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6"
            >
              <p className="text-neutral-500 text-xs uppercase tracking-wider mb-2">{stat.label}</p>
              <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
              <p className="text-neutral-600 text-xs">{stat.sub}</p>
            </div>
          ))}
        </div>

        {/* Quick actions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <Link
            href="/studio"
            className="bg-indigo-950/40 border border-indigo-800/40 hover:border-indigo-600 rounded-2xl p-6 transition-colors group"
          >
            <div className="w-10 h-10 bg-indigo-900/50 rounded-xl flex items-center justify-center mb-4">
              <svg
                className="w-5 h-5 text-indigo-400"
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
            <h2 className="text-white font-semibold mb-1 group-hover:text-indigo-300 transition-colors">
              Go to Studio
            </h2>
            <p className="text-neutral-400 text-sm">Upload an image and generate a new prompt.</p>
          </Link>
          <Link
            href="/history"
            className="bg-neutral-900 border border-neutral-800 hover:border-neutral-600 rounded-2xl p-6 transition-colors group"
          >
            <div className="w-10 h-10 bg-neutral-800 rounded-xl flex items-center justify-center mb-4">
              <svg
                className="w-5 h-5 text-neutral-400"
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
            <h2 className="text-white font-semibold mb-1 group-hover:text-neutral-100 transition-colors">
              View History
            </h2>
            <p className="text-neutral-400 text-sm">Browse your previously generated prompts.</p>
          </Link>
        </div>

        {/* Recent prompts */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-white font-semibold">Recent Prompts</h2>
            <Link
              href="/history"
              className="text-indigo-400 hover:text-indigo-300 text-sm transition-colors"
            >
              See all →
            </Link>
          </div>
          <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-12 text-center">
            <div className="w-12 h-12 bg-neutral-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-6 h-6 text-neutral-600"
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
            <p className="text-neutral-500 text-sm mb-3">No prompts yet</p>
            <Link
              href="/studio"
              className="text-indigo-400 hover:text-indigo-300 text-sm transition-colors"
            >
              Generate your first prompt →
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
