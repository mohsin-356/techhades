"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import anime from "animejs";

type Tech = {
  name: string;
  src: string;
  glow: string; // rgba color for hover glow
};

const techs: Tech[] = [
  { name: "Next.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", glow: "rgba(255,255,255,0.35)" },
  { name: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", glow: "rgba(97,218,251,0.45)" },
  { name: "Node.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", glow: "rgba(140,200,75,0.45)" },
  { name: "Express", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", glow: "rgba(255,255,255,0.25)" },
  { name: "MongoDB", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", glow: "rgba(76,175,80,0.45)" },
  { name: "PostgreSQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", glow: "rgba(51,103,145,0.45)" },
  { name: "Django", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg", glow: "rgba(1,80,57,0.45)" },
  { name: ".NET", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg", glow: "rgba(91,45,161,0.45)" },
  { name: "Java", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", glow: "rgba(244,68,62,0.45)" },
  { name: "Spring", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg", glow: "rgba(76,175,80,0.45)" },
  { name: "Flutter", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg", glow: "rgba(0,180,255,0.45)" },
  { name: "LangChain", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", glow: "rgba(255,212,59,0.45)" },
  { name: "n8n", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", glow: "rgba(0,122,204,0.45)" },
];

export default function TechGrid() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: -9999, y: -9999 });

  useEffect(() => {
    if (!containerRef.current) return;
    const cards = containerRef.current.querySelectorAll("[data-tech-card]");
    anime({
      targets: cards,
      opacity: [0, 1],
      translateY: [16, 0],
      scale: [0.96, 1],
      easing: "easeOutExpo",
      duration: 900,
      delay: anime.stagger(60),
    });
  }, []);

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }

  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-2xl sm:text-4xl text-white mb-8">Technologies</h2>
        <div
          ref={containerRef}
          onMouseMove={onMouseMove}
          onMouseLeave={() => setMousePos({ x: -9999, y: -9999 })}
          className="relative"
        >
          <Spotlight x={mousePos.x} y={mousePos.y} />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {techs.map((t) => (
              <TechTile key={t.name} tech={t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Spotlight({ x, y }: { x: number; y: number }) {
  return (
    <div
      className="pointer-events-none absolute inset-0 -z-10"
      style={{
        background: `radial-gradient(420px circle at ${x}px ${y}px, rgba(109,106,255,0.12), transparent 40%)`,
        transition: "background-position 120ms ease-out",
      }}
    />
  );
}

function TechTile({ tech }: { tech: Tech }) {
  const ref = useRef<HTMLDivElement>(null);

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    const rx = (-py * 10).toFixed(2);
    const ry = (px * 10).toFixed(2);
    el.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(0)`;
  }

  function handleLeave() {
    const el = ref.current;
    if (!el) return;
    anime({
      targets: el,
      rotateX: 0,
      rotateY: 0,
      easing: "easeOutExpo",
      duration: 600,
    });
  }

  return (
    <div
      data-tech-card
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="relative group select-none will-change-transform"
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className="glass rounded-xl p-4 h-full flex flex-col items-center justify-center text-center border-white/10">
        <div
          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"
          style={{
            background: `radial-gradient(120px circle at 50% 20%, ${tech.glow}, transparent 70%)`,
            filter: "blur(10px)",
          }}
        />
        <div className="relative z-10">
          <div className="w-12 h-12 mx-auto mb-2 rounded-lg bg-white/5 flex items-center justify-center">
            <Image
              src={tech.src}
              alt={tech.name}
              width={32}
              height={32}
              className="object-contain"
            />
          </div>
          <div className="text-zinc-200 text-sm">{tech.name}</div>
        </div>
      </div>
    </div>
  );
}
