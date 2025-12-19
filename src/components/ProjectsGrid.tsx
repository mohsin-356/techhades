import React from 'react';
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { allProjects, Project } from "@/app/projects/projectsData";

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
  "ai-automation": "Ai and Automation",
  "ads-social-media": "Social Media",
  "product-scope": "Web",
  "mvp-development": "Web",
};

export default function ProjectsGrid({ filter, limit, className = "" }: ProjectsGridProps) {
  // Filter projects based on category
  const filteredProjects = filter 
    ? allProjects.filter(p => 
        // If filter is a service ID, use the mapped category
        serviceToCategory[filter] 
          ? p.cat === serviceToCategory[filter]
          : p.cat === filter)
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

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="group"
    >
      <Link href={`/projects/${project.id}`} className="block">
        <div className="rounded-xl backdrop-blur-md text-foreground shadow-sm hover:shadow-brand/10 overflow-hidden bg-background border border-foreground/10 hover:shadow-2xl transition-shadow duration-300">
          <div className="relative h-64 overflow-hidden">
            <Image 
              src={project.image} 
              alt={project.title}
              fill
              unoptimized={/\.(gif|webp)$/i.test(project.image) || project.image.includes('/projectgifs/')}
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
            <div className="text-xs text-foreground/60 mb-2">{project.cat} • {project.stack.join(", ")}</div>
            <p className="text-sm text-foreground/70">{project.desc}</p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
