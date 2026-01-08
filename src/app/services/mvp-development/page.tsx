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
    { number: 1, title: "Discovery & Planning", desc: "We begin by validating your core hypothesis and target audience. Through collaborative discussions, we define MVP scope, timelines, and resources." },
    { number: 2, title: "Design & Prototyping", desc: "Our product team creates rapid wireframes and interactive prototypes that reflect the key user flows and validate the core value proposition." },
    { number: 3, title: "Development & Coding", desc: "We build using scalable technologies like Next.js and Node.js ensuring a fast, secure and robust MVP foundation with clean code architecture." },
    { number: 4, title: "Testing & Quality Assurance", desc: "We rigorously test core features, user feedback loops, and stability using automated and manual testing techniques for reliable early access." },
    { number: 5, title: "Launch & Deployment", desc: "We deploy with robust analytics setup, user onboarding flows, and scalable infrastructure for immediate market validation and data collection." },
    { number: 6, title: "Post-Launch Support", desc: "We offer comprehensive iteration support, analyzing user feedback to prioritize features and pivot quickly based on real market data." },
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
