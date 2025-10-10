"use client";

import ServiceCard from "@/components/shared/ServiceCard";

const services = [
  { title: "Web Development", desc: "MERN, Next.js, PERN, LAMP, Django, ASP.NET, Spring Boot", icon: "🌐" },
  { title: "Mobile Apps", desc: "React Native & Flutter for iOS and Android", icon: "📱" },
  { title: "AI & Automation", desc: "Custom AI agents, LangChain chatbots, n8n workflows", icon: "🤖" },
  { title: "Social Media", desc: "Facebook, Instagram, TikTok growth & management", icon: "📈" },
  { title: "2D/3D Animation", desc: "Motion graphics, explainers, and 3D visualization", icon: "🎞️" },
  { title: "Smart Dashboards", desc: "MERN dashboards with analytics & roles", icon: "📊" },
];

export default function ServicesOverview() {
  return (
    <section className="pt-14 sm:pt-20 pb-16 sm:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pointer-events-none h-px bg-white/10 mb-10" />
        <h2 className="font-[family:var(--font-display)] text-2xl sm:text-4xl text-white mb-8">
          Core Services
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <ServiceCard key={s.title} title={s.title} desc={s.desc} icon={s.icon} />
          ))}
        </div>
      </div>
    </section>
  );
}
