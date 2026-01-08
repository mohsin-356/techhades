import type { Project } from "@/app/projects/data/projectsData";

export default function ProjectQuickInfo({ project }: { project: Project }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {[
        { label: "Platform", value: project.quickInfo.platform },
        { label: "Type", value: project.quickInfo.type },
        { label: "Duration", value: project.quickInfo.duration },
        { label: "Process", value: project.quickInfo.process },
      ].map((item) => (
        <div
          key={item.label}
          className="bg-[#0B1526]/40 backdrop-blur-sm border-2 border-[#6467FF]/40 rounded-lg p-4"
        >
          <div className="text-xs text-white/70 font-semibold tracking-wide">{item.label}</div>
          <div className="mt-2 text-sm sm:text-base font-bold text-white leading-snug">{item.value}</div>
        </div>
      ))}
    </div>
  );
}
