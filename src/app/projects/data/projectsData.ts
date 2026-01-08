export interface Project {
  id: number;
  slug: string;
  title: string;
  category: string;
  client: ClientInfo;
  hero: HeroSection;
  quickInfo: QuickInfo;
  techStack: TechStackItem[];
  team: TeamInfo;
  features: Feature[];
  details: ProjectDetails;
  technologies: Technologies;
  relatedProjects: string[];
  metrics?: Metrics;
  tags: string[];
  testimonial?: Testimonial;
}

export interface ClientInfo {
  name: string;
  location: string;
  industry: string;
  website: string;
}

export interface HeroSection {
  tagline: string;
  brief: string;
  featuredImage: string;
  problem: string;
  solution: string;
}

export interface QuickInfo {
  platform: string;
  type: string;
  duration: string;
  process: string;
}

export type TechStackCategory =
  | "frontend"
  | "backend"
  | "database"
  | "infrastructure"
  | "design"
  | "mobile"
  | "testing"
  | "other";

export interface TechStackItem {
  name: string;
  icon: string;
  category: TechStackCategory;
}

export interface TeamInfo {
  size: string;
  breakdown: string[];
}

export type FeatureAlignment = "left" | "right";

export interface Feature {
  title: string;
  description: string;
  image: string;
  alignment: FeatureAlignment;
}

export interface ProjectDetails {
  aboutClient: string;
  challenge: {
    description: string;
    requirements: string[];
  };
  solution: {
    overview: string;
    technicalApproach: string[];
    implementationFeatures: ImplementationFeature[];
  };
  businessValue: {
    before: string[];
    after: string[];
  };
}

export interface ImplementationFeature {
  icon: string;
  title: string;
  description: string;
}

export interface Technologies {
  design: string[];
  development: string[];
  experience: string[];
}

export interface Metrics {
  deploymentTime?: string;
  supportTickets?: string;
  conversion?: string;
  training?: string;
  retention?: string;
  revenue?: string;
  users?: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  position: string;
}
