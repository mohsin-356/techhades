"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import anime from "animejs";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MotionSection } from "@/components/ui/motion";
import { Zap, Star } from "lucide-react";
import { CrystalFormation, AlienSymbol, AlienHead, UFO } from "@/components/ui/alien-icons";

type Tech = {
  name: string;
  src: string;
  glow: string;
  category: 'development' | 'cms' | 'design' | 'animation';
};

type TechCategory = {
  title: string;
  icon: React.ReactNode;
  color: string;
  techs: Tech[];
};

const techCategories: TechCategory[] = [
  {
    title: "Development & Programming",
    icon: <CrystalFormation className="w-5 h-5" />,
    color: "from-[#6467FF] to-[#43B2F9]",
    techs: [
      { name: "Next.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", glow: "rgba(99,102,241,0.4)", category: 'development' },
      { name: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", glow: "rgba(139,92,246,0.4)", category: 'development' },
      { name: "TypeScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", glow: "rgba(167,139,250,0.4)", category: 'development' },
      { name: "Node.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", glow: "rgba(99,102,241,0.4)", category: 'development' },
      { name: "Express", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", glow: "rgba(139,92,246,0.4)", category: 'development' },
      { name: "MongoDB", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", glow: "rgba(167,139,250,0.4)", category: 'development' },
      { name: "PostgreSQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", glow: "rgba(99,102,241,0.4)", category: 'development' },
      { name: "Django", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg", glow: "rgba(139,92,246,0.4)", category: 'development' },
      { name: ".NET", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg", glow: "rgba(167,139,250,0.4)", category: 'development' },
      { name: "Java", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", glow: "rgba(99,102,241,0.4)", category: 'development' },
      { name: "Spring", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg", glow: "rgba(139,92,246,0.4)", category: 'development' },
      { name: "Flutter", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg", glow: "rgba(167,139,250,0.4)", category: 'development' },
      { name: "PHP", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", glow: "rgba(99,102,241,0.4)", category: 'development' },
      { name: "Laravel", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg", glow: "rgba(139,92,246,0.4)", category: 'development' },
      { name: "Angular", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg", glow: "rgba(167,139,250,0.4)", category: 'development' },
      { name: "Vue.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg", glow: "rgba(99,102,241,0.4)", category: 'development' },
    ]
  },
  {
    title: "CMS & E-commerce",
    icon: <AlienHead className="w-5 h-5" />,
    color: "from-[#43B2F9] to-[#6467FF]",
    techs: [
      { name: "WordPress", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg", glow: "rgba(139,92,246,0.4)", category: 'cms' },
      { name: "Shopify", src: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/shopify.svg", glow: "rgba(167,139,250,0.4)", category: 'cms' },
      { name: "Elementor", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg", glow: "rgba(196,181,253,0.4)", category: 'cms' },
    ]
  },
  {
    title: "Design & Graphics",
    icon: <UFO className="w-6 h-4" />,
    color: "from-[#6467FF] to-[#43B2F9]",
    techs: [
      { name: "Adobe Photoshop", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg", glow: "rgba(167,139,250,0.4)", category: 'design' },
      { name: "Figma", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", glow: "rgba(196,181,253,0.4)", category: 'design' },
      { name: "Canva", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg", glow: "rgba(221,214,254,0.4)", category: 'design' },
    ]
  },
  {
    title: "Animation & AI",
    icon: <AlienSymbol className="w-5 h-5" />,
    color: "from-[#43B2F9] to-[#6467FF]",
    techs: [
      { name: "CapCut", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aftereffects/aftereffects-original.svg", glow: "rgba(196,181,253,0.4)", category: 'animation' },
      { name: "TensorFlow", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg", glow: "rgba(221,214,254,0.4)", category: 'animation' },
      { name: "Hugging Face", src: "https://huggingface.co/datasets/huggingface/brand-assets/resolve/main/hf-logo.svg", glow: "rgba(167,139,250,0.4)", category: 'animation' },
      { name: "LangChain", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", glow: "rgba(196,181,253,0.4)", category: 'animation' },
      { name: "n8n", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/n8n/n8n-original.svg", glow: "rgba(221,214,254,0.4)", category: 'animation' },
    ]
  }
];

export default function TechGrid() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothMouseX = useSpring(mouseX, { damping: 20, stiffness: 300 });
  const smoothMouseY = useSpring(mouseY, { damping: 20, stiffness: 300 });

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  }

  function onMouseLeave() {
    mouseX.set(-9999);
    mouseY.set(-9999);
  }

  return (
    <MotionSection className="pt-14 sm:pt-20 pb-16 sm:pb-24 section-gradient-2 breathing-gradient dot-pattern section-overlay">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="h-px bg-gradient-to-r from-transparent via-brand/50 to-transparent mb-10"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        />

        <div className="flex items-center gap-4 mb-8">
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <CrystalFormation className="w-6 h-6 text-brand" />
          </motion.div>
          <h2 className="font-display text-2xl sm:text-4xl text-foreground">Technologies</h2>
          <Badge variant="glow" className="hidden sm:inline-flex">
            <AlienSymbol className="w-3 h-3 mr-1" />
            Alien Tech
          </Badge>
        </div>

        <div
          ref={containerRef}
          onMouseMove={onMouseMove}
          onMouseLeave={onMouseLeave}
          className="relative space-y-12"
        >
          <motion.div
            className="pointer-events-none absolute inset-0 -z-10"
            style={{
              background: `radial-gradient(600px circle at ${smoothMouseX}px ${smoothMouseY}px, rgba(99,102,241,0.12), transparent 40%)`
            }}
          />

          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.2 }}
              className="space-y-6"
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6">
                <motion.div
                  className={`p-3 rounded-xl bg-gradient-to-r ${category.color} shadow-lg`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  {category.icon}
                </motion.div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground font-display">
                    {category.title}
                  </h3>
                  <div className="h-0.5 bg-gradient-to-r from-indigo-500/50 to-transparent w-32 mt-1" />
                </div>
              </div>

              {/* Technology Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {category.techs.map((tech, index) => (
                  <TechTile key={tech.name} tech={tech} index={index} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </MotionSection>
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

function TechTile({ tech, index }: { tech: Tech; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [imgSrc, setImgSrc] = useState(tech.src);

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
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="relative group select-none will-change-transform"
      style={{ transformStyle: "preserve-3d" }}
      initial={{ opacity: 0, y: 20, scale: 0.8 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.05,
        ease: [0.22, 1, 0.36, 1]
      }}
      whileHover={{
        y: -8,
        scale: 1.05,
        transition: { duration: 0.2 }
      }}
    >
      <Card className="group relative overflow-hidden border border-[#6467FF]/20 bg-gradient-to-br from-[#6467FF]/5 via-[#43B2F9]/3 to-[#6467FF]/5 backdrop-blur-xl h-full flex flex-col items-center justify-center text-center p-4 hover-glow transition-all duration-300">
        {/* Animated background glow */}
        <motion.div
          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100"
          style={{
            background: `radial-gradient(120px circle at 50% 20%, ${tech.glow}, transparent 70%)`,
            filter: "blur(12px)",
          }}
          initial={{ scale: 0.8 }}
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.3 }}
        />

        {/* Enhanced border glow on hover */}
        <motion.div
          className="absolute inset-0 rounded-xl border-2 border-transparent bg-gradient-to-r from-[#6467FF]/30 via-[#43B2F9]/30 to-[#6467FF]/30 opacity-0 group-hover:opacity-100"
          style={{ padding: '1px' }}
          initial={{ scale: 1 }}
          whileHover={{
            scale: [1, 1.02, 1],
            opacity: [0, 1, 0.7]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="h-full w-full rounded-xl bg-slate-900/50 backdrop-blur-sm" />
        </motion.div>

        <div className="relative z-10 space-y-3">
          <motion.div
            className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-foreground/10 to-foreground/5 border border-foreground/10 flex items-center justify-center relative overflow-hidden"
            whileHover={{ rotate: [0, -5, 5, 0] }}
            transition={{ duration: 0.4 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-20"
              style={{ background: `linear-gradient(135deg, ${tech.glow}, transparent)` }}
              initial={{ scale: 0 }}
              whileHover={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            />
            <Image
              src={imgSrc}
              alt={tech.name}
              width={28}
              height={28}
              className="object-contain relative z-10 group-hover:scale-110 transition-transform duration-200"
              onError={() => {
                if (tech.name === "n8n") {
                  if (imgSrc.includes("simple-icons")) {
                    setImgSrc("https://cdn.jsdelivr.net/gh/devicons/devicon/icons/n8n/n8n-original.svg");
                  } else if (imgSrc.includes("devicons/devicon")) {
                    setImgSrc("https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/n8n.svg");
                  }
                }
              }}
            />
          </motion.div>

          <motion.div
            className="text-foreground/80 text-sm font-medium"
            initial={{ opacity: 0.7 }}
            whileHover={{ opacity: 1 }}
          >
            {tech.name}
          </motion.div>

          {/* Skill level indicator */}
          <motion.div
            className="flex justify-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity"
            initial={{ y: 10 }}
            whileHover={{ y: 0 }}
          >
            {[1, 2, 3, 4, 5].map((level) => (
              <motion.div
                key={level}
                className="w-1.5 h-1.5 rounded-full bg-brand/60"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ delay: level * 0.05 }}
              />
            ))}
          </motion.div>
        </div>
      </Card>
    </motion.div>
  );
}
