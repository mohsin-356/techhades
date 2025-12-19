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
    {
      number: 1,
      title: "Discovery & Goals Alignment",
      desc: "Understand your vision, business goals, and constraints. Align stakeholders on what success looks like.",
    },
    {
      number: 2,
      title: "User & Market Research",
      desc: "Analyse target users, market landscape, and competitors to identify opportunities and differentiation.",
    },
    {
      number: 3,
      title: "Requirements & Feature List",
      desc: "Translate insights into clear requirements, epics, and features that address real user and business needs.",
    },
    {
      number: 4,
      title: "Prioritisation & MVP Definition",
      desc: "Prioritise features into must-have, should-have, and nice-to-have. Define a focused MVP scope.",
    },
    {
      number: 5,
      title: "Roadmap & Release Planning",
      desc: "Create a realistic release roadmap with phases, milestones, and timelines for your product journey.",
    },
    {
      number: 6,
      title: "Documentation & Handover",
      desc: "Deliver structured documentation, user flows, and acceptance criteria so your team can start building.",
    },
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
