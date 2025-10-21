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
    <section className="relative pt-10 sm:pt-10 pb-20 sm:pb-1 section-gradient-3 section-transition grid-pattern">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute left-1/2 -top-28 -translate-x-1/2 h-[520px] w-[520px] rounded-full bg-gradient-to-br from-brand/20 to-brand-2/20 blur-3xl opacity-60" />
        <div className="absolute right-[-10%] top-1/3 h-[360px] w-[360px] rounded-full bg-accent/10 blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-gradient-to-r from-brand/30 via-brand-2/20 to-transparent mb-8" />
        <h2 className="text-2xl text-foreground text-white sm:text-4xl bg-gradient-to-r from-brand to-brand-2 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(109,106,255,0.25)]">
          Core Services
        </h2>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {services.map((s) => (
            <ServiceCard key={s.title} title={s.title} desc={s.desc} icon={s.icon} />
          ))}
        </div>
      </div>
    </section>
  );
}

