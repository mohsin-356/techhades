import type { Project } from "@/app/projects/data/projectsData";

export default function ProjectDetailsSection({ project }: { project: Project }) {
  return (
    <div className="grid lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 space-y-8">
        <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
          <h2 className="text-2xl font-bold">Project Overview</h2>
          <p className="mt-3 text-foreground/70 leading-relaxed">{project.details.aboutClient}</p>
        </div>

        <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
          <h2 className="text-2xl font-bold">Challenge</h2>
          <p className="mt-3 text-foreground/70 leading-relaxed">{project.details.challenge.description}</p>
          <div className="mt-6 grid sm:grid-cols-2 gap-3">
            {project.details.challenge.requirements.map((req) => (
              <div key={req} className="p-3 rounded-xl border border-white/10 bg-black/20 text-sm text-foreground/80">
                {req}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-8">
        <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
          <h2 className="text-2xl font-bold">Solution</h2>
          <p className="mt-3 text-foreground/70 leading-relaxed">{project.details.solution.overview}</p>
          <div className="mt-6 space-y-3">
            {project.details.solution.technicalApproach.map((item) => (
              <div key={item} className="p-4 rounded-xl border border-white/10 bg-black/20 text-sm text-foreground/80">
                {item}
              </div>
            ))}
          </div>
        </div>

        {project.team.size || project.team.breakdown.length ? (
          <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
            <h2 className="text-2xl font-bold">Team</h2>
            {project.team.size ? <div className="mt-3 text-foreground/70">{project.team.size}</div> : null}
            {project.team.breakdown.length ? (
              <div className="mt-4 space-y-2">
                {project.team.breakdown.map((item) => (
                  <div key={item} className="text-sm text-foreground/80">
                    {item}
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        ) : null}
      </div>

      <div className="lg:col-span-3">
        <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
          <h2 className="text-2xl font-bold">Implementation Highlights</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-4">
            {project.details.solution.implementationFeatures.map((f) => (
              <div key={f.title} className="p-5 rounded-xl border border-[#06B6D4]/20 bg-[#06B6D4]/5">
                <div className="text-sm font-semibold text-white">{f.title}</div>
                <div className="mt-2 text-sm text-foreground/70">{f.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
