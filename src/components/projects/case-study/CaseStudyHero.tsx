"use client";

import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/app/projects/data/projectsData";
import { MotionDiv } from "@/components/ui/motion";
import DownloadPdfButton from "@/components/projects/case-study/DownloadPdfButton";

export default function CaseStudyHero({ project }: { project: Project }) {
  return (
    <div className="grid lg:grid-cols-12 gap-10 items-start">
      <MotionDiv variant="fadeInUp" className="lg:col-span-7">
        <Link href="/projects" className="text-[#383bfe] hover:underline mb-8 inline-block">
          ← Back to Projects
        </Link>

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-sm text-white/80">
          <span className="h-2 w-2 rounded-full bg-[#06B6D4]" />
          {project.category}
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold mt-4 tracking-tight">{project.title}</h1>

        <p className="text-lg text-foreground/70 mt-4 leading-relaxed">{project.hero.brief}</p>

        <div className="mt-8 grid sm:grid-cols-2 gap-4">
          <div className="p-5 rounded-xl border border-white/10 bg-white/5">
            <div className="text-xs text-foreground/60">Problem</div>
            <div className="mt-2 text-foreground/80 leading-relaxed">{project.hero.problem}</div>
          </div>
          <div className="p-5 rounded-xl border border-white/10 bg-white/5">
            <div className="text-xs text-foreground/60">Solution</div>
            <div className="mt-2 text-foreground/80 leading-relaxed">{project.hero.solution}</div>
          </div>
        </div>

        <div className="mt-6">
          <DownloadPdfButton project={project} />
        </div>
      </MotionDiv>

      <MotionDiv variant="fadeInRight" className="lg:col-span-5">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
          <div className="relative aspect-[16/11]">
            <Image
              src={project.hero.featuredImage}
              alt={project.title}
              fill
              className="object-cover"
              unoptimized={/\.(gif|webp)$/i.test(project.hero.featuredImage) || project.hero.featuredImage.includes("/projectgifs/")}
            />
          </div>
        </div>
      </MotionDiv>
    </div>
  );
}
