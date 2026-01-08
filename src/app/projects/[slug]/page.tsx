import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllProjectSlugs, getProjectBySlug, getRelatedProjects } from "../utils/projects";

import CaseStudyHero from "@/components/projects/case-study/CaseStudyHero";
import ProjectQuickInfo from "@/components/projects/case-study/ProjectQuickInfo";
import TechStackSection from "@/components/projects/case-study/TechStackSection";
import KeyFeaturesSection from "@/components/projects/case-study/KeyFeaturesSection";
import ProjectDetailsSection from "@/components/projects/case-study/ProjectDetailsSection";
import BusinessValueSection from "@/components/projects/case-study/BusinessValueSection";
import DownloadCTASection from "@/components/projects/case-study/DownloadCTASection";
import RelatedProjects from "@/components/projects/case-study/RelatedProjects";

// import LottieGrid from "@/components/LottieGrid";

export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return {
      title: "Project not found",
    };
  }

  const title = `${project.title} | Case Study`;
  const description = project.hero.brief;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [project.hero.featuredImage],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [project.hero.featuredImage],
    },
  };
}

export default function ProjectCaseStudyPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);

  if (!project) notFound();

  const related = getRelatedProjects(project, 3);

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <CaseStudyHero project={project} />

        <div className="mt-10">
          <ProjectQuickInfo project={project} />
        </div>

        <div className="mt-16">
          <TechStackSection project={project} />
        </div>

        <div className="mt-16">
          <KeyFeaturesSection project={project} />
        </div>

        <div className="mt-16">
          <ProjectDetailsSection project={project} />
        </div>

        <div className="mt-16">
          <BusinessValueSection project={project} />
        </div>

        <div className="mt-16">
          <DownloadCTASection project={project} />
        </div>

        <div className="mt-16">
          <RelatedProjects projects={related} />
        </div>
      </div>
    </div>
  );
}
