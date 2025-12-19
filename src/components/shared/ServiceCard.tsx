"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import anime from "animejs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { AlienwareLogo } from "@/components/ui/alienware-logo";
import { LiquidGlass } from "@/components/ui/LiquidGlass";

export default function ServiceCard({
  title,
  desc,
  icon,
  color = "from-indigo-500 to-violet-500",
  tags = ["Modern", "Fast", "Scalable"],
  stats = "New"
}: {
  title: string;
  desc: string;
  icon: React.ReactNode;
  color?: string;
  tags?: string[];
  stats?: string;
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
      <LiquidGlass variant="card" className="h-full">
        <Card className="relative overflow-hidden border-none bg-transparent backdrop-blur-none hover:shadow-2xl hover:shadow-violet-500/10 transition-all duration-500">
        {/* Animated background gradient */}
        <div className={`absolute -inset-16 rounded-full bg-gradient-to-br ${color} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500`} />
        
        {/* Enhanced border glow on hover */}
        <div className="absolute inset-0 rounded-xl border-2 border-transparent bg-gradient-to-r from-indigo-500/30 via-violet-500/30 to-purple-500/30 opacity-0 group-hover:opacity-100 transition-all duration-500" 
             style={{ padding: '1px' }}>
          <div className="h-full w-full rounded-xl bg-slate-900/20 backdrop-blur-sm" />
        </div>
        
        {/* Shimmer Effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
            initial={{ x: "-100%" }}
            whileHover={{ x: "100%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </div>

        {/* Floating particles on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-violet-400 rounded-full"
              style={{
                left: `${20 + i * 25}%`,
                top: `${15 + i * 20}%`,
              }}
              animate={{
                y: [-2, 2, -2],
                opacity: [0.3, 1, 0.3],
                scale: [0.8, 1.1, 0.8],
              }}
              transition={{
                duration: 1.5 + i * 0.2,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            />
          ))}
        </div>

        <CardContent className="relative z-10 p-6">
          <div className="flex items-start justify-between mb-4">
            <motion.div 
              className={`w-16 h-16 rounded-2xl border border-indigo-400/20 bg-gradient-to-br ${color} flex items-center justify-center relative overflow-hidden shadow-lg group-hover:shadow-xl group-hover:shadow-indigo-500/20`}
              whileHover={{ rotate: 5, scale: 1.1 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <Sparkles className="absolute top-1 right-1 w-3 h-3 text-white/60 opacity-0 group-hover:opacity-100 transition-opacity" />
              <motion.div 
                className="relative z-10 text-white"
                animate={{ 
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {icon}
              </motion.div>
            </motion.div>
            
            <div className="flex flex-col items-end">
              <Badge variant="glow" className="text-xs mb-2 opacity-0 group-hover:opacity-100 transition-opacity">
                {stats}
              </Badge>
              <motion.div
                className="opacity-0 group-hover:opacity-100 transition-opacity"
                whileHover={{ scale: 1.1 }}
              >
                <AlienwareLogo className="w-5 h-5 text-indigo-400" animated />
              </motion.div>
            </div>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <motion.h3 
                className="text-foreground text-lg font-semibold tracking-tight font-display group-hover:text-indigo-300 transition-colors duration-300"
                whileHover={{ x: 2 }}
                transition={{ duration: 0.2 }}
              >
                {title}
              </motion.h3>
              <Badge variant="glow" className="text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                New
              </Badge>
            </div>
            
            <motion.p 
              className="text-foreground/70 text-sm leading-relaxed group-hover:text-foreground/90 transition-colors duration-300"
              whileHover={{ x: 1 }}
              transition={{ duration: 0.2 }}
            >
              {desc}
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-2 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={{ y: 10 }}
              whileInView={{ y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {tags.map((tag, index) => (
                <motion.div
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <Badge variant="glass" className="text-xs hover:bg-indigo-500/20 transition-colors">
                    {tag}
                  </Badge>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </CardContent>
      </Card>
      </LiquidGlass>
    </motion.div>
  );
}

