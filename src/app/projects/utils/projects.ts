import type { Project } from "../data/projectsData"
import projectsJson from "../data/projects.json"
import { allProjects as legacyAllProjects } from "@/data/projectsData"

type ProjectsJson = {
  projects: Project[]
}

const data = projectsJson as ProjectsJson

type LegacyProject = (typeof legacyAllProjects)[number]

function legacyToCaseStudyProject(p: LegacyProject, index: number): Project {
  const stack = Array.isArray(p.stack) ? p.stack : []
  const legacyFeatures = Array.isArray(p.features) ? p.features : []

  return {
    id: index + 1000,
    slug: p.id,
    title: p.title,
    category: p.cat,
    client: {
      name: "Confidential",
      location: "",
      industry: "",
      website: "",
    },
    hero: {
      tagline: p.desc,
      brief: p.aboutProject,
      featuredImage: p.image,
      problem: p.problem,
      solution: p.solution,
    },
    quickInfo: {
      platform: p.platform || p.cat,
      type: p.domain || "Case Study",
      duration: p.duration || "",
      process: p.process || "",
    },
    techStack: stack.map((name) => ({ name, icon: "", category: "other" })),
    team: {
      size: "",
      breakdown: [],
    },
    features: legacyFeatures.map((f, i) => ({
      title: f.title,
      description: f.desc,
      image: p.image,
      alignment: i % 2 === 0 ? "left" : "right",
    })),
    details: {
      aboutClient: p.aboutProject,
      challenge: {
        description: p.problem,
        requirements: [],
      },
      solution: {
        overview: p.solution,
        technicalApproach: stack,
        implementationFeatures: legacyFeatures.map((f) => ({
          icon: "",
          title: f.title,
          description: f.desc,
        })),
      },
      businessValue: {
        before: [],
        after: [],
      },
    },
    technologies: {
      design: [],
      development: stack,
      experience: [],
    },
    relatedProjects: [],
    tags: [p.cat],
  }
}

function getLegacyCaseStudyProjects(): Project[] {
  return legacyAllProjects.map((p, i) => legacyToCaseStudyProject(p, i))
}

function getMergedProjects(): Project[] {
  const merged = new Map<string, Project>()

  for (const p of getLegacyCaseStudyProjects()) {
    merged.set(p.slug, p)
  }

  for (const p of data.projects) {
    merged.set(p.slug, p)
  }

  return Array.from(merged.values())
}

export function getAllProjects(): Project[] {
  return getLegacyCaseStudyProjects()
}

export function getProjectBySlug(slug: string): Project | undefined {
  const fromJson = data.projects.find((p) => p.slug === slug)
  if (fromJson) return fromJson
  return getLegacyCaseStudyProjects().find((p) => p.slug === slug)
}

export function getAllProjectSlugs(): string[] {
  return getMergedProjects().map((p) => p.slug)
}

export function getRelatedProjects(project: Project, max: number = 3): Project[] {
  const related = project.relatedProjects
    .map((slug) => getProjectBySlug(slug))
    .filter((p): p is Project => Boolean(p))

  if (related.length >= max) return related.slice(0, max)

  const pool = getMergedProjects()

  const fallback = pool
    .filter((p) => p.slug !== project.slug)
    .filter((p) => p.category === project.category)
    .filter((p) => !related.some((r) => r.slug === p.slug))

  return [...related, ...fallback].slice(0, max)
}

export function getAllCategories(): string[] {
  return Array.from(new Set(getLegacyCaseStudyProjects().map((p) => p.category)))
}
