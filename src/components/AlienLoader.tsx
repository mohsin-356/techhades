"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const AlienLoader = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let width = (canvas.width = window.innerWidth);
        let height = (canvas.height = window.innerHeight);

        const columns = Math.floor(width / 20); // Width of column
        const drops: number[] = [];

        for (let i = 0; i < columns; i++) {
            drops[i] = Math.random() * -100; // Start at random positions above screen
        }

        const characters = "01";

        const draw = () => {
            // Semi-transparent black to create trail effect
            ctx.fillStyle = "rgba(10, 11, 28, 0.1)";
            ctx.fillRect(0, 0, width, height);

            ctx.font = "15px monospace";

            for (let i = 0; i < drops.length; i++) {
                // Random neon colors: roughly cyan to purple range
                // Cyan: #00ffff (RGB 0, 255, 255)
                // Purple: #bd00ff (RGB 189, 0, 255)
                // We'll mix them.

                const randomColor = Math.random() > 0.5 ? "#00ffff" : "#bd00ff";
                ctx.fillStyle = randomColor;

                const text = characters.charAt(Math.floor(Math.random() * characters.length));
                const x = i * 20;
                const y = drops[i] * 20;

                ctx.fillText(text, x, y);

                // Reset drop to top randomly or if it's off screen
                if (y > height && Math.random() > 0.975) {
                    drops[i] = 0;
                }

                drops[i]++;
            }
        };

        const interval = setInterval(draw, 33); // ~30FPS is fine for this style

        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            // Re-init drops if needed, or just let them fall
        };

        window.addEventListener("resize", handleResize);

        return () => {
            clearInterval(interval);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0a0b1c] overflow-hidden">
            {/* Canvas Background */}
            <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-40" />

            {/* Overlay Effects */}
            <div className="absolute inset-0 z-10 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,#0a0b1c_120%)]" />
            <div className="absolute inset-0 z-10 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5" />

            {/* Content */}
            <div className="relative z-20 flex flex-col items-center justify-center">
                {/* Logo Container with Glitch Effect */}
                <div className="relative group">
                    {/* Glitch layers */}
                    <div className="absolute inset-0 animate-pulse opacity-50 blur-sm bg-cyan-500/20 rounded-full scale-110" />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="relative w-32 h-32 md:w-48 md:h-48"
                    >
                        {/* Main Image */}
                        <Image
                            src="/components/AlienMatrix_logo.png"
                            alt="AlienMatrix Logo"
                            fill
                            className="object-contain drop-shadow-[0_0_15px_rgba(0,255,255,0.5)]"
                            priority
                        />

                        {/* Pseudo-glitch overlay (optional visual flair) */}
                        <div className="absolute inset-0 bg-transparent mix-blend-screen overflow-hidden opacity-0 animate-glitch">
                            <Image
                                src="/components/AlienMatrix_logo.png"
                                alt="Glitch"
                                fill
                                className="object-contain translate-x-1"
                            />
                        </div>
                    </motion.div>
                </div>

                {/* Loading Text */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="mt-8 text-cyan-400/80 font-mono text-sm tracking-[0.5em] uppercase"
                >
                    Loading...
                </motion.div>
            </div>

            {/* CSS for custom glitch animations if not using global styles */}
            <style jsx>{`
        @keyframes glitch {
          0% {
            opacity: 0;
            transform: translate(0);
          }
          2% {
            opacity: 1;
            transform: translate(-2px, 2px);
          }
          4% {
            opacity: 1;
            transform: translate(2px, -2px);
          }
          6% {
            opacity: 0;
            transform: translate(0);
          }
          100% {
            opacity: 0;
          }
        }
        .animate-glitch {
          animation: glitch 3s infinite linear;
        }
      `}</style>
        </div>
    );
};

export default AlienLoader;
