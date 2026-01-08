"use client";

import ServicePageTemplate, { ServiceConfig } from "@/app/services/ServicePageTemplate";

const productScopeConfig: ServiceConfig = {
  slug: "product-scope",
  badgeLabel: "Product Scope",
  heading: "PRODUCT SCOPE & DISCOVERY",
  tagline: "Clarify features, priorities, and success metrics before you build.",
  description:
    "Define exactly what to build before writing a single line of code. We turn ideas into a clear, prioritised product scope that aligns stakeholders and de-risks delivery.",
  heroTags: [
    "Product Discovery",
    "Feature Prioritisation",
    "User Journeys",
    "Release Roadmap",
    "Success Metrics",
    "Workshops",
  ],
  processTitle: "Our Product Scoping Process",
  processSubtitle:
    "We turn rough ideas into a clear, actionable product plan your team can execute with confidence.",
  steps: [
    { number: 1, title: "Discovery & Planning", desc: "We begin by aligning stakeholders on vision and constraints. Through collaborative discussions, we define product goals, timelines, and resources." },
    { number: 2, title: "Design & Prototyping", desc: "Our team creates user flow maps and high-fidelity mockups that reflect the user journey and validate feature requirements early." },
    { number: 3, title: "Development & Coding", desc: "We document technical specifications and architecture plans ensuring a clear, feasible and scalable development path for engineering teams." },
    { number: 4, title: "Testing & Quality Assurance", desc: "We rigorously validate requirements against business goals using acceptance criteria and stakeholder review techniques." },
    { number: 5, title: "Launch & Deployment", desc: "We deliver a comprehensive product roadmap, backlog, and release strategy for a structured and successful product launch." },
    { number: 6, title: "Post-Launch Support", desc: "We offer ongoing product strategy support, analyzing market feedback to refine the roadmap and prioritize future iterations." },
  ],
  projectsHeading: "Recent Product Strategy & Discovery Projects",
  projectsDescription:
    "Explore selected projects where we helped teams clarify scope, de-risk delivery, and launch the right features first.",
  projectsCategoryLabel: "Web",
  ctaHeading: "Ready to Define Your Product Scope?",
};

export default function ProductScopePage() {
  return <ServicePageTemplate config={productScopeConfig} />;
}
