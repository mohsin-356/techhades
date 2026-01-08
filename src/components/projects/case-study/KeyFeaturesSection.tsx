"use client";

import Image from "next/image";
import type { Project } from "@/app/projects/data/projectsData";
import { MotionDiv } from "@/components/ui/motion";

export default function KeyFeaturesSection({ project }: { project: Project }) {
  return (
    <div>
      <h2 className="text-3xl font-bold">Key Features</h2>

      <div className="mt-10 space-y-10">
        {project.features.map((feature, idx) => (
          <MotionDiv
            key={`${feature.title}-${idx}`}
            variant={feature.alignment === "right" ? "fadeInRight" : "fadeInLeft"}
            className={`grid lg:grid-cols-2 gap-8 items-center ${feature.alignment === "right" ? "lg:grid-flow-dense" : ""}`}
          >
            <div className={feature.alignment === "right" ? "lg:col-start-2" : ""}>
              <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover"
                  unoptimized={/\.(gif|webp)$/i.test(feature.image) || feature.image.includes("/projectgifs/")}
                />
              </div>
            </div>
            <div className={feature.alignment === "right" ? "lg:col-start-1 lg:row-start-1" : ""}>
              <h3 className="text-2xl font-bold">{feature.title}</h3>
              <p className="mt-3 text-foreground/70 leading-relaxed">{feature.description}</p>
            </div>
          </MotionDiv>
        ))}
      </div>
    </div>
  );
}
