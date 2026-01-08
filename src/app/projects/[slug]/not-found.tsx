import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-black/20 text-sm text-white/80">
            <span className="h-2 w-2 rounded-full bg-[#06B6D4]" />
            Case Study
          </div>

          <h1 className="mt-5 text-3xl sm:text-4xl font-bold tracking-tight">Project not found</h1>
          <p className="mt-3 text-foreground/70 leading-relaxed">
            The case study you’re looking for doesn’t exist (or the URL was typed incorrectly).
          </p>

          <div className="mt-8 flex gap-3 flex-wrap">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-gradient-to-r from-[#383bfe] to-[#06B6D4] text-white font-medium shadow-[0_0_20px_rgba(56,59,254,0.25)]"
            >
              Back to Projects
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full border border-white/10 bg-black/20 text-foreground/80 hover:text-white hover:border-[#383bfe]/40 transition-colors"
            >
              Go Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
