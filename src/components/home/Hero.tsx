"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import anime from "animejs";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AnimatedText, GlitchText } from "@/components/ui/animated-text";
import { MotionDiv, MotionSection } from "@/components/ui/motion";
import { ArrowRight, Sparkles, Zap } from "lucide-react";
import { AlienHead, UFO, AlienSymbol, CrystalFormation } from "@/components/ui/alien-icons";

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
    <MotionSection
      className="relative overflow-hidden pt-28 pb-20 sm:pt-20 sm:pb-20 section-gradient-1 section-transition"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Animated background particles */}
      <div ref={bgRef} className="absolute inset-0 pointer-events-none will-change-transform" />
      
      {/* Floating alien elements */}
      <motion.div 
        className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-brand/20 to-brand-2/20 rounded-full blur-xl"
        animate={{
          y: [-20, 20, -20],
          x: [-10, 10, -10],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-accent/20 to-brand/20 rounded-full blur-xl"
        animate={{
          y: [20, -20, 20],
          x: [10, -10, 10],
          scale: [1.1, 1, 1.1]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      
      {/* Floating UFO */}
      <motion.div
        className="absolute top-32 right-1/4 opacity-40"
        animate={{
          y: [-15, 15, -15],
          x: [-5, 5, -5],
          rotate: [-2, 2, -2]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <UFO className="w-24 h-15" />
      </motion.div>
      
      {/* Alien symbols */}
      <motion.div
        className="absolute bottom-32 left-1/4 opacity-20"
        animate={{
          rotate: [0, 360],
          scale: [0.8, 1.2, 0.8]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <AlienSymbol className="w-12 h-12" />
      </motion.div>

      <div ref={contentRef} className="max-w-7xl mx-auto my-0 px-4 sm:px-6 lg:px-8 relative will-change-transform">
        <MotionDiv 
          variant="fadeInDown"
          className="flex items-center gap-3 mb-6"
        >
          <AlienHead className="w-5 h-5 text-brand" />
          <span className="inline-block text-xs font-medium uppercase tracking-widest text-brand/80 glass px-3 py-1 rounded-full">
            Extraterrestrial • Advanced • Premium
          </span>
          <UFO className="w-6 h-4 text-accent" />
        </MotionDiv>

        <GlitchText 
          text="We Build Intelligent Digital Experiences"
          className="font-display neon-text text-balance tracking-tight leading-[1.05] text-[clamp(2rem,7vw,4rem)] md:text-[clamp(2.75rem,6vw,5.5rem)] max-w-[22ch] md:max-w-[26ch] mb-6"
        />
        
        <MotionDiv 
          variant="fadeInUp"
          className="mt-6 max-w-2xl"
        >
          <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
            Websites, Mobile Apps, AI Agents, Automations, and Smart Dashboards for elite brands.
          </p>
        </MotionDiv>
        
        <MotionDiv 
          variant="fadeInUp"
          className="mt-8 flex flex-col sm:flex-row gap-4"
        >
          <Button 
            asChild 
            variant="glow" 
            size="lg"
            className="group"
          >
            <Link href="/services">
              Explore Our Services
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button 
            asChild 
            variant="glass" 
            size="lg"
          >
            <Link href="/contact">
              Get a Quote
            </Link>
          </Button>
        </MotionDiv>
        
        {/* Stats or features */}
        <MotionDiv 
          variant="fadeInUp"
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { label: "Projects", value: "150+", icon: <CrystalFormation className="w-6 h-6 mx-auto mb-2" /> },
            { label: "Clients", value: "80+", icon: <AlienHead className="w-6 h-6 mx-auto mb-2" /> },
            { label: "Countries", value: "25+", icon: <UFO className="w-8 h-5 mx-auto mb-2" /> },
            { label: "Success Rate", value: "98%", icon: <AlienSymbol className="w-6 h-6 mx-auto mb-2" /> }
          ].map((stat, index) => (
            <motion.div 
              key={stat.label}
              className="text-center glass-card p-4 rounded-xl hover-lift relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Alien glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              {stat.icon}
              <div className="text-2xl font-bold text-brand font-display">{stat.value}</div>
              <div className="text-sm text-foreground/70">{stat.label}</div>
            </motion.div>
          ))}
        </MotionDiv>
      </div>
    </MotionSection>
  );
}
