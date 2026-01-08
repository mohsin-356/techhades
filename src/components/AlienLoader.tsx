"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const AlienLoader = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [loadingText, setLoadingText] = useState("");

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

                const randomColor = Math.random() > 0.5 ? "#43B2F9" : "#6467FF";
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

    useEffect(() => {
        const fullText = "Matrix Loading • • •";
        let i = 0;
        let intervalId: ReturnType<typeof setInterval> | undefined;
        let restartTimeoutId: ReturnType<typeof setTimeout> | undefined;

        const startTyping = () => {
            i = 0;
            setLoadingText("");

            intervalId = setInterval(() => {
                i += 1;
                setLoadingText(fullText.slice(0, i));

                if (i >= fullText.length) {
                    if (intervalId) clearInterval(intervalId);
                    restartTimeoutId = setTimeout(() => {
                        startTyping();
                    }, 800);
                }
            }, 55);
        };

        startTyping();

        return () => {
            if (intervalId) clearInterval(intervalId);
            if (restartTimeoutId) clearTimeout(restartTimeoutId);
        };
    }, []);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#050714] overflow-hidden">
            {/* Canvas Background */}
            <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-30" />

            {/* Overlay Effects */}
            <div className="absolute inset-0 z-10 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,#050714_120%)]" />
            <div className="absolute inset-0 z-10 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5" />

            {/* Content */}
            <div className="relative z-20 flex flex-col items-center justify-center px-4">
                {/* Logo Container with Glitch Effect */}
                <div className="relative group">
                    {/* Glitch layers */}
                    <div className="absolute inset-0 animate-pulse opacity-35 blur-[2px] bg-[rgba(59, 168, 236, 0.48)] rounded-full scale-110" />

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
                            className="object-contain drop-shadow-[0_0_10px_rgba(67,178,249,0.35)]"
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
                    className="mt-8 text-[#43B2F9]/80 font-mono text-sm sm:text-base tracking-[0.25em] uppercase"
                >
                    <span className="type-caret">{loadingText}</span>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 0.6 }}
                    className="mt-10 w-full max-w-5xl"
                >
                    <div className="text-center text-white/80 font-mono text-xs sm:text-sm tracking-[0.35em] uppercase">
                        We Offer Services
                    </div>
                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div className="rounded-xl border border-white/10 bg-[#0B1526]/40 px-5 py-4">
                            <div className="text-white font-semibold">Web Development</div>
                            <div className="mt-1 text-white/70 text-sm">Code from another planet 👽</div>
                            <div className="mt-3 text-[#43B2F9]/80 text-xs font-mono">Fast &amp; Secure • Scalable</div>
                        </div>
                        <div className="rounded-xl border border-white/10 bg-[#0B1526]/40 px-5 py-4">
                            <div className="text-white font-semibold">UI / UX Design</div>
                            <div className="mt-1 text-white/70 text-sm">Designs humans love</div>
                            <div className="mt-3 text-[#43B2F9]/80 text-xs font-mono">Clean • Modern • Human-Centered</div>
                        </div>
                        <div className="rounded-xl border border-white/10 bg-[#0B1526]/40 px-5 py-4">
                            <div className="text-white font-semibold">Mobile Apps</div>
                            <div className="mt-1 text-white/70 text-sm">Built beyond Earth</div>
                            <div className="mt-3 text-[#43B2F9]/80 text-xs font-mono">Android • iOS • Cross-Platform</div>
                        </div>
                        <div className="rounded-xl border border-white/10 bg-[#0B1526]/40 px-5 py-4">
                            <div className="text-white font-semibold">AI &amp; Automation</div>
                            <div className="mt-1 text-white/70 text-sm">Alien-level intelligence</div>
                            <div className="mt-3 text-[#43B2F9]/80 text-xs font-mono">Smart Systems • Real Results</div>
                        </div>
                        <div className="rounded-xl border border-white/10 bg-[#0B1526]/40 px-5 py-4">
                            <div className="text-white font-semibold">Custom Software</div>
                            <div className="mt-1 text-white/70 text-sm">Not made on Earth</div>
                            <div className="mt-3 text-[#43B2F9]/80 text-xs font-mono">Increase Productivity • Built for Your Vision</div>
                        </div>
                        <div className="rounded-xl border border-white/10 bg-[#0B1526]/40 px-5 py-4">
                            <div className="text-white font-semibold">E-Commerce Solutions</div>
                            <div className="mt-1 text-white/70 text-sm">Sell beyond Earth 🌍</div>
                            <div className="mt-3 text-[#43B2F9]/80 text-xs font-mono">Shopify • WordPress • Custom E-Commerce • Payment Gateways</div>
                        </div>
                    </div>
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

        @keyframes caretBlink {
          0%, 49% {
            border-color: rgba(67, 178, 249, 0.75);
          }
          50%, 100% {
            border-color: transparent;
          }
        }
        .type-caret {
          display: inline-block;
          padding-right: 6px;
          border-right: 2px solid rgba(67, 178, 249, 0.75);
          animation: caretBlink 1s step-end infinite;
        }
      `}</style>
        </div>
    );
};

export default AlienLoader;
