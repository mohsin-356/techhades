"use client";

import { useState } from "react";

const allProjects = [
  { 
    title: "AI Support Bot", 
    cat: "AI", 
    stack: ["Next.js", "LangChain"], 
    desc: "Agent that automates support workflows.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop&crop=center"
  },
  { 
    title: "SaaS Dashboard", 
    cat: "Dashboard", 
    stack: ["MERN"], 
    desc: "Analytics, roles, and billing integrations.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center"
  },
  { 
    title: "Ecommerce Web", 
    cat: "Web", 
    stack: ["Next.js"], 
    desc: "Headless storefront with animations.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&crop=center"
  },
  { 
    title: "Fitness App", 
    cat: "Mobile", 
    stack: ["React Native"], 
    desc: "iOS/Android app with offline mode.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop&crop=center"
  },
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
          <div key={p.title} className="group glass rounded-xl p-5 overflow-hidden hover:border-violet-500/40 transition-all duration-300">
            <div className="aspect-video rounded-md mb-4 overflow-hidden relative">
              <img 
                src={p.image} 
                alt={p.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="text-foreground font-semibold group-hover:text-indigo-300 transition-colors">{p.title}</div>
            <div className="text-xs text-foreground/60">{p.cat} • {p.stack.join(", ")}</div>
            <p className="text-foreground/70 text-sm mt-2 group-hover:text-foreground/90 transition-colors">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
