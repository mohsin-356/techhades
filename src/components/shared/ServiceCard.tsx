"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import anime from "animejs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { AlienwareLogo } from "@/components/ui/alienware-logo";

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
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="group relative will-change-transform"
      style={{ transformStyle: "preserve-3d" }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: Math.random() * 0.2 }}
      whileHover={{ y: -8, scale: 1.02 }}
    >
      <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-foreground/5 to-foreground/10 backdrop-blur-xl hover-glow">
        {/* Animated background gradient */}
        <div className="absolute -inset-16 rounded-full bg-gradient-to-br from-brand/20 to-brand-2/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Sheen effect */}
        <div
          ref={sheenRef}
          className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: "linear-gradient(120deg, transparent 45%, rgba(255,255,255,0.1) 50%, transparent 55%)",
            filter: "blur(1px)",
          }}
        />
        
        {/* Animated border */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-brand/50 via-brand-2/50 to-accent/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
             style={{ padding: '1px' }}>
          <div className="h-full w-full rounded-xl bg-background" />
        </div>

        <CardContent className="relative z-10 p-6">
          <div className="flex items-start justify-between mb-4">
            <motion.div 
              className="w-14 h-14 rounded-2xl border border-foreground/10 bg-gradient-to-br from-brand/20 to-brand-2/10 flex items-center justify-center text-2xl relative overflow-hidden"
              whileHover={{ rotate: 5, scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              <Sparkles className="absolute top-1 right-1 w-3 h-3 text-brand/60 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative z-10">{icon}</span>
            </motion.div>
            
            <motion.div
              className="opacity-0 group-hover:opacity-100 transition-opacity"
              whileHover={{ scale: 1.1 }}
            >
              <AlienwareLogo className="w-6 h-6 text-brand" animated />
            </motion.div>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <h3 className="text-foreground text-lg font-semibold tracking-tight font-display">{title}</h3>
              <Badge variant="glow" className="text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                New
              </Badge>
            </div>
            
            <p className="text-foreground/70 text-sm leading-relaxed">{desc}</p>
            
            <motion.div 
              className="flex gap-2 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={{ y: 10 }}
              whileInView={{ y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {['Modern', 'Fast', 'Scalable'].map((tag, index) => (
                <Badge key={tag} variant="glass" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </motion.div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

