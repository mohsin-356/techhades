import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/app/projects/data/projectsData";

export default function RelatedProjects({ projects }: { projects: Project[] }) {
  if (!projects.length) return null;

  return (
    <div>
      <h2 className="text-3xl font-bold">Related Case Studies</h2>

      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <Link
            key={p.slug}
            href={`/projects/${p.slug}`}
            className="group rounded-2xl border border-white/10 bg-white/5 overflow-hidden hover:border-[#383bfe]/40 transition-colors"
          >
            <div className="relative aspect-[16/10]">
              <Image
                src={p.hero.featuredImage}
                alt={p.title}
                fill
                className="object-cover group-hover:scale-[1.03] transition-transform duration-300"
                unoptimized={/\.(gif|webp)$/i.test(p.hero.featuredImage) || p.hero.featuredImage.includes("/projectgifs/")}
              />
            </div>
            <div className="p-5">
              <div className="text-xs text-foreground/60">{p.category}</div>
              <div className="mt-2 text-lg font-semibold">{p.title}</div>
              <div className="mt-2 text-sm text-foreground/70">{p.hero.problem}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
