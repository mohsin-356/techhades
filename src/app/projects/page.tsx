"use client";

import { useState, useEffect } from "react";
import { MotionDiv } from "@/components/ui/motion";
import ProjectsGrid from "@/components/ProjectsGrid";
import { useSearchParams } from "next/navigation";

const categories = [
  { label: "All", value: "All" },
  { label: "Web Development", value: "Web" },
  { label: "Mobile Development", value: "Mobile" },
  { label: "Game App Design", value: "Game" },
  { label: "Software Development", value: "Software" },
  { label: "AI & Automation", value: "Ai and Automation" },
  { label: "Ecommerce", value: "Ecommerce" },
  { label: "UI/UX Design", value: "Design" },
  { label: "AI/ML Applications", value: "AI/ML" },
  // { label: "AWS & Cloud", value: "Cloud" }, // temporarily hidden
  // { label: "Ads & Social Media", value: "Social Media" }, // temporarily hidden
  // { label: "Dashboard", value: "Dashboard" }, // temporarily hidden
];

// Map category names from URL to filter names
const categoryToFilter: Record<string, string> = {
  "Web": "Web",
  "Web Development": "Web",
  "Mobile": "Mobile",
  "Mobile Development": "Mobile",
  "Game": "Game",
  "Game App Design": "Game",
  "Software": "Software",
  "Software Development": "Software",
  "AI": "AI",
  "AI & Automation": "Ai and Automation",
  "Ecommerce": "Ecommerce",
  "Design": "Design",
  "UI/UX Design": "Design",
  "AI/ML": "AI/ML",
  "AI/ML Applications": "AI/ML",
  "Cloud": "Cloud",
  "AWS & Cloud": "Cloud",
  "Social Media": "Social Media",
  "Ads & Social Media": "Social Media",
  "Dashboard": "Dashboard",
};

export default function ProjectsPage() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('category');
  const [filter, setFilter] = useState(categoryParam && categoryToFilter[categoryParam] ? categoryToFilter[categoryParam] : "All");
  
  // Update filter when URL parameter changes
  useEffect(() => {
    if (categoryParam && categoryToFilter[categoryParam]) {
      setFilter(categoryToFilter[categoryParam]);
    }
  }, [categoryParam]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl sm:text-5xl font-[family:var(--font-display)] text-foreground">Projects</h1>
        <div className="mt-6 flex gap-2 flex-wrap">
          {categories.map((c) => (
            <button
              key={c.value}
              onClick={() => setFilter(c.value)}
              className={`px-3 py-1.5 rounded-full text-sm border border-foreground/10 ${
                filter === c.value ? "bg-foreground/15" : "bg-foreground/5 hover:bg-foreground/10"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
      </MotionDiv>
      
      <div className="mt-8">
        <ProjectsGrid filter={filter === "All" ? undefined : filter} />
      </div>
    </div>
  );
}
