"use client";

import ServiceCard from "@/components/shared/ServiceCard";
import AnimatedText from "@/components/shared/AnimatedText";

const categories = [
  { title: "Web Development", desc: "Full-stack: MERN, Next.js, PERN, LAMP, Django, ASP.NET, Spring Boot", icon: "🕸️" },
  { title: "Mobile Apps", desc: "Cross-platform apps with React Native & Flutter", icon: "📲" },
  { title: "AI & Automation", desc: "Agents, LangChain chatbots, n8n automations, scraping", icon: "🧠" },
  { title: "Social Media", desc: "FB/IG/TikTok growth with content & analytics", icon: "📣" },
  { title: "2D/3D Animation", desc: "Explainers, motion, and 3D visualizations", icon: "🎬" },
  { title: "Smart Dashboards", desc: "MERN dashboards with analytics & RBAC", icon: "🗄️" },
];

export default function ServicesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <AnimatedText as="h1" text="Services" className="text-3xl sm:text-5xl font-[family:var(--font-display)]" />
      <p className="mt-4 text-zinc-400 max-w-2xl">
        Interactive, fast, and maintainable—crafted with modern stacks and cinematic motion.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {categories.map((c) => (
          <ServiceCard key={c.title} title={c.title} desc={c.desc} icon={c.icon} />
        ))}
      </div>
    </div>
  );
}
