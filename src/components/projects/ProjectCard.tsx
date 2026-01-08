"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Project } from "@/app/projects/data/projectsData";

export default function ProjectCard({ project }: { project: Project }) {
  const stackPreview = project.techStack
    .map((t) => t.name)
    .slice(0, 3)
    .join(", ");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="group"
    >
      <Link href={`/projects/${project.slug}`} className="block">
        <div className="rounded-xl backdrop-blur-md text-foreground shadow-sm overflow-hidden bg-background border border-foreground/10 hover:border-[#383bfe]/40 hover:shadow-2xl transition-shadow duration-300">
          <div className="relative h-64 overflow-hidden">
            <Image
              src={project.hero.featuredImage}
              alt={project.title}
              fill
              unoptimized={/\.(gif|webp)$/i.test(project.hero.featuredImage) || project.hero.featuredImage.includes("/projectgifs/")}
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
            <div className="text-xs text-foreground/60 mb-2">
              {project.category}
              {stackPreview ? ` • ${stackPreview}` : ""}
            </div>
            <p className="text-sm text-foreground/70">{project.hero.tagline}</p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
