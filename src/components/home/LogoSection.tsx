"use client";

import { motion } from "framer-motion";

export default function LogoSection() {
  return (
    <section id="brand" className="relative overflow-hidden scroll-mt-24 md:scroll-mt-28">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-violet-700 dark:from-indigo-900 dark:via-purple-900 dark:to-violet-950" />
      <div className="absolute inset-0 mix-blend-overlay opacity-70 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.15),transparent_40%),radial-gradient(ellipse_at_bottom_right,rgba(255,255,255,0.15),transparent_40%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36 text-center">
        {/* Floating UFO */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="mx-auto w-[280px] sm:w-[320px] relative"
        >
          {/* glow */}
          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.55, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 rounded-full blur-3xl bg-cyan-400/40 dark:bg-cyan-500/30"
          />

          {/* antenna */}
          <div className="absolute -top-11 left-1/2 -translate-x-1/2 w-1 h-12 bg-gradient-to-t from-cyan-400 to-transparent dark:from-cyan-500" />
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-cyan-400 dark:bg-cyan-500 shadow-cyan-400/50 shadow-lg" />

          {/* dome */}
          <div className="relative mx-auto w-[240px] h-[110px]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-[95px] rounded-t-full border-4 border-white/30 dark:border-white/20 bg-gradient-to-b from-cyan-300/90 to-cyan-400/70 dark:from-cyan-400/70 dark:to-cyan-500/50 backdrop-blur-sm" />
            <div className="absolute top-7 left-1/2 -translate-x-1/2 flex gap-4">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 1.8, repeat: Infinity, delay: i * 0.2 }}
                  className="w-6 h-7 rounded-full border-2 border-cyan-300/50 dark:border-cyan-400/40 bg-gradient-to-b from-indigo-900/80 to-purple-900/80 dark:from-indigo-950 dark:to-purple-950"
                />
              ))}
            </div>

            {/* base */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[260px] h-[60px] rounded-full border-4 border-cyan-300/50 dark:border-cyan-400/40 bg-gradient-to-b from-indigo-700 to-purple-800 dark:from-indigo-900 dark:to-purple-950 shadow-2xl" />
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-6">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.15, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.25 }}
                  className="w-3 h-12 bg-gradient-to-b from-cyan-400/80 to-transparent dark:from-cyan-500/60 dark:to-transparent blur-sm"
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Text */}
        <div className="mt-10">
          <div className="text-7xl sm:text-8xl font-black tracking-wider text-white">TH</div>
          <div className="mt-2 text-xl sm:text-2xl font-semibold tracking-[0.3em] text-white/90 uppercase">TECH HADES</div>
          <div className="mx-auto mt-6 h-1 w-64 bg-gradient-to-r from-transparent via-white/60 to-transparent" />
        </div>
      </div>

      {/* bottom curve fade */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background/60 to-transparent" />
    </section>
  );
}
