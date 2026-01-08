import type { Project, TechStackCategory, TechStackItem } from "@/app/projects/data/projectsData";

function titleCaseCategory(category: TechStackCategory): string {
  switch (category) {
    case "frontend":
      return "Frontend";
    case "backend":
      return "Backend";
    case "database":
      return "Database";
    case "infrastructure":
      return "Infrastructure";
    case "design":
      return "Design";
    case "mobile":
      return "Mobile";
    case "testing":
      return "Testing";
    default:
      return "Other";
  }
}

export default function TechStackSection({ project }: { project: Project }) {
  const grouped = project.techStack.reduce<Record<string, TechStackItem[]>>((acc, item) => {
    const key = item.category;
    acc[key] = acc[key] ?? [];
    acc[key].push(item);
    return acc;
  }, {});

  const categories = Object.keys(grouped).sort();

  return (
    <div>
      <h2 className="text-3xl font-bold">Tech Stack</h2>

      <div className="mt-8 grid md:grid-cols-2 gap-6">
        {categories.map((cat) => (
          <div key={cat} className="p-6 rounded-2xl border border-white/10 bg-white/5">
            <div className="text-sm font-semibold text-white">{titleCaseCategory(cat as TechStackCategory)}</div>
            <div className="mt-4 flex flex-wrap gap-3">
              {grouped[cat].map((t) => (
                <span
                  key={`${t.category}-${t.name}`}
                  className="px-4 py-2 rounded-full border border-[#383bfe]/30 bg-[#383bfe]/10 text-sm font-medium"
                >
                  {t.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
