"use client";

import ServicePageTemplate, { ServiceConfig } from "@/app/services/ServicePageTemplate";

const mvpDevelopmentConfig: ServiceConfig = {
  slug: "mvp-development",
  badgeLabel: "MVP Development",
  heading: "MVP DEVELOPMENT SERVICES",
  tagline: "Launch fast, validate early, and iterate with confidence.",
  description:
    "Ship a focused Minimum Viable Product that proves demand before you invest in full-scale development. We help you define, design, and build an MVP that real users can test.",
  heroTags: [
    "MVP Strategy",
    "Rapid Prototyping",
    "Lean Product",
    "User Feedback Loops",
    "Feature Prioritisation",
    "Go-to-Market",
  ],
  processTitle: "Our MVP Development Process",
  processSubtitle:
    "From idea to live MVP, we focus on what matters most so you can learn from real users as early as possible.",
  steps: [
    {
      number: 1,
      title: "Idea & Problem Validation",
      desc: "Clarify the problem, target users, and value proposition. Validate assumptions before committing to build.",
    },
    {
      number: 2,
      title: "Scope & MVP Definition",
      desc: "Identify the smallest set of features that can deliver value. Define what goes into v1 and what can wait.",
    },
    {
      number: 3,
      title: "UX Flows & Prototype",
      desc: "Design key user journeys and interactive prototypes to validate flows with stakeholders and early users.",
    },
    {
      number: 4,
      title: "MVP Build",
      desc: "Develop a production-ready MVP using modern web and mobile technologies with a lean, scalable architecture.",
    },
    {
      number: 5,
      title: "Launch & Measure",
      desc: "Release the MVP to real users, instrument analytics, and gather qualitative and quantitative feedback.",
    },
    {
      number: 6,
      title: "Iterate & Roadmap",
      desc: "Use insights to refine the product, prioritise new features, and plan the roadmap beyond the MVP stage.",
    },
  ],
  projectsHeading: "Recent MVP & Early-Stage Product Projects",
  projectsDescription:
    "See how we've helped founders and teams launch MVPs quickly, validate ideas, and turn concepts into real products.",
  projectsCategoryLabel: "Web",
  ctaHeading: "Ready to Launch Your MVP?",
};

export default function MVPDevelopmentPage() {
  return <ServicePageTemplate config={mvpDevelopmentConfig} />;
}
