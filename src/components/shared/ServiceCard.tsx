"use client";

import { useRef, useEffect } from "react";
import anime from "animejs";

export default function ServiceCard({
  title,
  desc,
  icon,
}: {
  title: string;
  desc: string;
  icon: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const sheenRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    anime({
      targets: ref.current,
      opacity: [0, 1],
      translateY: [20, 0],
      scale: [0.98, 1],
      easing: "easeOutExpo",
      duration: 700,
      delay: Math.random() * 300,
    });
  }, []);

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    const rx = (-py * 8).toFixed(2);
    const ry = (px * 8).toFixed(2);
    el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg)`;

    if (sheenRef.current) {
      const sx = (px * 24).toFixed(2);
      const sy = (py * 24).toFixed(2);
      sheenRef.current.style.transform = `translate(${sx}px, ${sy}px)`;
    }
  }

  function handleLeave() {
    const el = ref.current;
    if (!el) return;
    anime({ targets: el, rotateX: 0, rotateY: 0, duration: 600, easing: "easeOutExpo" });
    if (sheenRef.current) {
      sheenRef.current.style.transform = `translate(0px, 0px)`;
    }
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-brand/25 to-brand-2/25 hover:translate-y-[-2px] transition-[transform,box-shadow] duration-300 will-change-transform hover:shadow-[0_12px_40px_rgba(109,106,255,0.15)]"
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className="relative rounded-2xl bg-foreground/5 border border-foreground/10 backdrop-blur-md overflow-hidden">
        <div className="absolute -inset-16 rounded-full bg-gradient-to-br from-brand/20 to-brand-2/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div
          ref={sheenRef}
          className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
          style={{
            background:
              "linear-gradient(120deg, transparent 45%, rgba(255,255,255,0.08) 50%, transparent 55%)",
            filter: "blur(2px)",
          }}
        />

        <div className="relative z-10 p-5">
          <div className="mb-4">
            <div className="w-12 h-12 rounded-xl border border-foreground/10 bg-gradient-to-br from-brand/20 to-brand-2/10 flex items-center justify-center text-2xl">
              {icon}
            </div>
          </div>
          <h3 className="text-foreground text-lg font-semibold tracking-tight">{title}</h3>
          <p className="mt-1.5 text-foreground/70 text-sm leading-relaxed">{desc}</p>
        </div>
      </div>
    </div>
  );
}

