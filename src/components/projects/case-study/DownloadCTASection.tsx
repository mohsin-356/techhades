import type { Project } from "@/app/projects/data/projectsData";
import DownloadPdfButton from "./DownloadPdfButton";

export default function DownloadCTASection({ project }: { project: Project }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-black/20 text-sm text-white/80">
          <span className="h-2 w-2 rounded-full bg-[#06B6D4]" />
          Download
        </div>

        <h2 className="mt-5 text-3xl font-bold tracking-tight">Want the full case study?</h2>
        <p className="mt-3 text-foreground/70 leading-relaxed">
          Download a PDF version to share with your team, stakeholders, or procurement.
        </p>

        <div className="mt-7 flex flex-wrap gap-3">
          <DownloadPdfButton project={project} />
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-full border border-white/10 bg-black/20 text-foreground/80 hover:text-white hover:border-[#383bfe]/40 transition-colors"
          >
            Start a Project
          </a>
        </div>
      </div>
    </div>
  );
}
