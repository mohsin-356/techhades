"use client";

export default function AboutPage() {
  const timeline = [
    { year: "2021", text: "Founded with a mission to fuse design and engineering." },
    { year: "2022", text: "Expanded into AI and automations, launching agent products." },
    { year: "2023", text: "Scaled dashboard solutions for B2B and enterprise clients." },
  ];

  const team = [
    { name: "Aiden", role: "Tech Lead" },
    { name: "Sophia", role: "Product Designer" },
    { name: "Noah", role: "AI Engineer" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <h1 className="text-3xl sm:text-5xl font-[family:var(--font-display)] text-foreground">About Us</h1>
      <p className="mt-4 text-foreground/70 max-w-2xl">
        We are a group of elite engineers and designers delivering premium digital products.
      </p>

      <h2 className="mt-12 text-xl sm:text-2xl text-foreground">Our Story</h2>
      <ol className="relative border-l border-foreground/10 mt-6 space-y-6">
        {timeline.map((t) => (
          <li key={t.year} className="ml-4">
            <div className="absolute w-2 h-2 rounded-full -left-1.5 mt-2 bg-brand" />
            <div className="text-sm text-foreground/60">{t.year}</div>
            <div className="text-foreground">{t.text}</div>
          </li>
        ))}
      </ol>

      <h2 className="mt-12 text-xl sm:text-2xl text-foreground">Team</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {team.map((m) => (
          <div key={m.name} className="group glass p-5 rounded-xl">
            <div className="aspect-square rounded-lg bg-gradient-to-br from-brand/25 to-brand-2/15 mb-4 group-hover:scale-[1.02] transition-transform" />
            <div className="text-foreground font-medium">{m.name}</div>
            <div className="text-xs text-foreground/60">{m.role}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
