"use client";

import React from 'react';
import { getAllProjects } from "@/app/projects/utils/projects";
import ProjectCard from "@/components/projects/ProjectCard";

interface ProjectsGridProps {
  filter?: string;
  limit?: number;
  className?: string;
}

// Map service page IDs (slugs) to project categories used in projects page filters
const serviceToCategory: Record<string, string> = {
  "web-development": "Web",
  "mobile-development": "Mobile",
  "ui-ux-design": "Design",
  "ai-ml-applications": "AI/ML",
  "ecommerce": "Ecommerce",
  "game-app-design": "Game",
  "software-development": "Software",
  "aws-cloud": "Cloud",
  "ai-automation": "AI & Automation",
  "ads-social-media": "Social Media",
  "product-scope": "Web",
  "mvp-development": "Web",
};

export default function ProjectsGrid({ filter, limit, className = "" }: ProjectsGridProps) {
  const allProjects = getAllProjects();

  const normalizedFilter = filter === "AI & Automation" ? "AI" : filter;

  // Filter projects based on category
  const filteredProjects = normalizedFilter 
    ? allProjects.filter(p => 
        // If filter is a service ID, use the mapped category
        serviceToCategory[normalizedFilter]
          ? (
              serviceToCategory[normalizedFilter] === "AI & Automation"
                ? ["AI & Automation", "AI/ML", "AI"].includes(p.category)
                : p.category === serviceToCategory[normalizedFilter]
            )
          : (
              normalizedFilter === "AI"
                ? ["AI & Automation", "AI/ML", "AI"].includes(p.category)
                : p.category === normalizedFilter
            ))
    : allProjects;

  // Apply limit if specified
  const displayProjects = limit ? filteredProjects.slice(0, limit) : filteredProjects;

  return (
    <div className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-8 ${className}`}>
      {displayProjects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
