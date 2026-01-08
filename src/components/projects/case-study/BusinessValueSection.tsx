import type { Project } from "@/app/projects/data/projectsData";

export default function BusinessValueSection({ project }: { project: Project }) {
  const beforeItems = project.details.businessValue.before.length
    ? project.details.businessValue.before
    : [project.hero.problem];

  const afterItems = project.details.businessValue.after.length
    ? project.details.businessValue.after
    : [project.hero.solution];

  const hasTestimonial = Boolean(project.testimonial);

  return (
    <div className={hasTestimonial ? "grid lg:grid-cols-2 gap-8" : "grid gap-8"}>
      <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
        <h2 className="text-2xl font-bold">Business Value</h2>

        <div className="mt-6 grid sm:grid-cols-2 gap-6">
          <div>
            <div className="text-sm font-semibold text-foreground/80">Before</div>
            <div className="mt-3 space-y-2">
              {beforeItems.map((b) => (
                <div key={b} className="text-sm text-foreground/70">
                  {b}
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="text-sm font-semibold text-foreground/80">After</div>
            <div className="mt-3 space-y-2">
              {afterItems.map((a) => (
                <div key={a} className="text-sm text-foreground/70">
                  {a}
                </div>
              ))}
            </div>
          </div>
        </div>

        {project.metrics ? (
          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            {Object.entries(project.metrics).map(([key, value]) => (
              <div key={key} className="p-4 rounded-xl border border-white/10 bg-black/20">
                <div className="text-xs text-foreground/60">{key}</div>
                <div className="mt-2 text-sm font-semibold text-white">{value}</div>
              </div>
            ))}
          </div>
        ) : null}
      </div>

      {project.testimonial ? (
        <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
          <h2 className="text-2xl font-bold">Testimonial</h2>
          <div className="mt-4 text-lg text-foreground/80 leading-relaxed">“{project.testimonial.quote}”</div>
          <div className="mt-6 text-sm text-foreground/70">
            <div className="font-semibold text-white">{project.testimonial.author}</div>
            <div>{project.testimonial.position}</div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
