"use client";

import { useState } from "react";
import { MotionDiv, MotionSection } from "@/components/ui/motion";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";
import ProjectsGrid from "@/components/ProjectsGrid";

const categories = [
  { label: "All", value: "All" },
  { label: "Web Development", value: "Web" },
  { label: "Mobile Development", value: "Mobile" },
  { label: "Game App Design", value: "Game" },
  { label: "Software Development", value: "Software" },
  { label: "AI & Automation", value: "AI & Automation" },
  { label: "Ecommerce", value: "Ecommerce" },
  { label: "UI/UX Design", value: "Design" },
  { label: "AI/ML Applications", value: "AI/ML" },
];

export default function ProjectsClient({
  initialFilter = "All",
}: {
  initialFilter?: string;
}) {
  const [filter, setFilter] = useState(initialFilter);

  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#050714] via-[#0B1526] to-[#050714]">
        <div className="absolute inset-0 -z-10">
          <div className="h-full w-full bg-[radial-gradient(1000px_600px_at_50%_0%,rgba(6,182,212,0.15),transparent_60%)]" />
        </div>

        <MotionSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
          <MotionDiv variant="fadeInUp" className="text-center max-w-4xl mx-auto">
            <Badge variant="glow" className="mb-6">
              <Briefcase className="w-3 h-3 mr-1" />
              Our Portfolio
            </Badge>
            <h1 className="section-heading text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              SHOWCASING OUR <span className="heading-accent">DIGITAL CRAFT</span>
            </h1>
            <p className="text-xl text-foreground/70 mb-8">
              Explore our collection of premium digital experiences, from AI-driven platforms to high-performance web applications.
            </p>

            <div className="mt-12 flex gap-3 flex-wrap justify-center">
              {categories.map((c) => (
                <button
                  key={c.value}
                  onClick={() => setFilter(c.value)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${filter === c.value
                    ? "bg-gradient-to-r from-[#383bfe] to-[#06B6D4] text-white border-transparent shadow-[0_0_20px_rgba(56,59,254,0.35)]"
                    : "bg-[#0B1526]/50 text-foreground/70 border-white/10 hover:border-[#383bfe]/50 hover:text-white"
                    }`}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </MotionDiv>
        </MotionSection>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">

        <div className="mt-8">
          <ProjectsGrid filter={filter === "All" ? undefined : filter} />
        </div>
      </div>
    </div>
  );
}
