"use client";

import { useState } from "react";

const allProjects = [
  { title: "AI Support Bot", cat: "AI", stack: ["Next.js", "LangChain"], desc: "Agent that automates support workflows." },
  { title: "SaaS Dashboard", cat: "Dashboard", stack: ["MERN"], desc: "Analytics, roles, and billing integrations." },
  { title: "Ecommerce Web", cat: "Web", stack: ["Next.js"], desc: "Headless storefront with animations." },
  { title: "Fitness App", cat: "Mobile", stack: ["React Native"], desc: "iOS/Android app with offline mode." },
];

const categories = ["All", "Web", "Mobile", "AI", "Dashboard"];

export default function ProjectsPage() {
  const [filter, setFilter] = useState("All");
  const projects = allProjects.filter((p) => filter === "All" || p.cat === filter);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <h1 className="text-3xl sm:text-5xl font-[family:var(--font-display)] text-foreground">Projects</h1>
      <div className="mt-6 flex gap-2 flex-wrap">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`px-3 py-1.5 rounded-full text-sm border border-foreground/10 ${
              filter === c ? "bg-foreground/15" : "bg-foreground/5 hover:bg-foreground/10"
            }`}
          >
            {c}
          </button>
        ))}
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {projects.map((p) => (
          <div key={p.title} className="group glass rounded-xl p-5 overflow-hidden">
            <div className="aspect-video rounded-md bg-gradient-to-br from-brand/20 to-brand-2/10 mb-4 group-hover:scale-[1.02] transition-transform" />
            <div className="text-foreground font-semibold">{p.title}</div>
            <div className="text-xs text-foreground/60">{p.cat} • {p.stack.join(", ")}</div>
            <p className="text-foreground/70 text-sm mt-2">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
