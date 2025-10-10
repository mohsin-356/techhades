"use client";

export default function Testimonials() {
  const items = [
    {
      quote: "They delivered a stunning, fast, and scalable platform.",
      name: "Ava – SaaS Founder",
    },
    {
      quote: "Our AI assistant boosted support productivity by 40%.",
      name: "Mason – Ops Lead",
    },
    {
      quote: "Beautiful animations and flawless UX across devices.",
      name: "Liam – Product Manager",
    },
  ];

  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-[family:var(--font-display)] text-2xl sm:text-4xl text-foreground mb-6">What Clients Say</h2>
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2">
          {items.map((t, i) => (
            <blockquote
              key={i}
              className="min-w-[80%] sm:min-w-[45%] lg:min-w-[32%] glass rounded-xl p-6 snap-center"
            >
              <p className="text-foreground/90 text-base">“{t.quote}”</p>
              <footer className="mt-4 text-xs text-foreground/60">{t.name}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
