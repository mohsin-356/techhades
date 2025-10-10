"use client";

import { useRef, useEffect } from "react";
import anime from "animejs";
import Link from "next/link";
import AnimatedText from "@/components/shared/AnimatedText";

export default function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!bgRef.current) return;
    const dots = Array.from({ length: 24 })
      .map((_, i) => {
        const el = document.createElement("div");
        el.className = "w-1.5 h-1.5 rounded-full bg-cyan-300/50";
        el.style.position = "absolute";
        el.style.left = `${Math.random() * 100}%`;
        el.style.top = `${Math.random() * 100}%`;
        bgRef.current!.appendChild(el);
        return el;
      });

    const anim = anime({
      targets: dots,
      translateX: () => anime.random(-40, 40),
      translateY: () => anime.random(-40, 40),
      direction: "alternate",
      easing: "easeInOutSine",
      duration: 4000,
      delay: anime.stagger(50),
      loop: true,
      autoplay: true,
    });

    return () => {
      anim.pause();
      dots.forEach((d) => d.remove());
    };
  }, []);

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5; // -0.5..0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    const moveBgX = (-px * 20).toFixed(2);
    const moveBgY = (-py * 20).toFixed(2);
    const moveContentX = (px * 8).toFixed(2);
    const moveContentY = (py * 8).toFixed(2);
    if (bgRef.current) {
      bgRef.current.style.transform = `translate3d(${moveBgX}px, ${moveBgY}px, 0)`;
    }
    if (contentRef.current) {
      contentRef.current.style.transform = `translate3d(${moveContentX}px, ${moveContentY}px, 0)`;
    }
  }

  function handleMouseLeave() {
    if (bgRef.current) {
      anime({ targets: bgRef.current, translateX: 0, translateY: 0, duration: 600, easing: "easeOutExpo" });
    }
    if (contentRef.current) {
      anime({ targets: contentRef.current, translateX: 0, translateY: 0, duration: 600, easing: "easeOutExpo" });
    }
  }

  return (
    <section
      className="relative overflow-hidden pt-28 pb-20 sm:pt-20 sm:pb-20"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div ref={bgRef} className="absolute inset-0 pointer-events-none will-change-transform" />

      <div ref={contentRef} className="max-w-7xl mx-auto my-0 px-4 sm:px-6 lg:px-8 relative will-change-transform">
        <span className="inline-block mb-4 text-xs font-medium uppercase tracking-widest text-cyan-300/80">
          Futuristic • Animated • Premium
        </span>

        <AnimatedText
          as="h1"
          className="font-display neon-text text-balance tracking-tight leading-[1.05] text-[clamp(2rem,7vw,4rem)] md:text-[clamp(2.75rem,6vw,5.5rem)] max-w-[22ch] md:max-w-[26ch]"
          text="We Build Intelligent Digital Experiences"
        />
        <p className="mt-6 max-w-2xl text-zinc-300 text-base sm:text-lg">
          Websites, Mobile Apps, AI Agents, Automations, and Smart Dashboards for elite brands.
        </p>
        <div className="my-5 flex flex-col sm:flex-row gap-3">
          <Link href="/services" className="px-5 py-3 rounded-md bg-brand hover:bg-brand-2 transition-colors text-white text-sm font-medium">
            Explore Our Services
          </Link>
          <Link
            href="/contact"
            className="px-5 py-3 rounded-md bg-foreground/10 hover:bg-foreground/15 border border-foreground/10 transition-colors text-foreground text-sm font-medium"
          >
            Get a Quote
          </Link>
        </div>
        {/* <div className="pointer-events-none absolute inset-x-0 -bottom-px h-px bg-white/10" /> */}
      </div>
    </section>
  );
}
