"use client";

import React, { useEffect, useRef } from "react";

interface Star {
    x: number;
    y: number;
    z: number;
    size: number;
    opacity: number;
    speed: number;
    twinkleSpeed: number;
    rgb: string;
}

const StarfieldBackground = ({ className }: { className?: string }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const isSmallScreen = window.matchMedia?.("(max-width: 768px)")?.matches ?? window.innerWidth <= 768;
        const targetFps = isSmallScreen ? 30 : 60;
        const frameInterval = 1000 / targetFps;
        const enableGlow = !isSmallScreen;

        // Set canvas size
        let width = window.innerWidth;
        let height = window.innerHeight;
        const resizeCanvas = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            const rawDpr = window.devicePixelRatio || 1;
            const dpr = Math.min(rawDpr, isSmallScreen ? 1.5 : 2);
            canvas.width = Math.floor(width * dpr);
            canvas.height = Math.floor(height * dpr);
            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        };
        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);

        // Initial stars
        const stars: Star[] = [];
        const numStars = isSmallScreen ? 700 : 1600;
        const depth = 2000; // Z-depth

        const palette = [
            { rgb: "100, 103, 255" },
            { rgb: "67, 178, 249" },
        ];

        for (let i = 0; i < numStars; i++) {
            const color = palette[Math.floor(Math.random() * palette.length)];
            stars.push({
                x: Math.random() * width,
                y: Math.random() * height,
                z: Math.random() * depth,
                size: Math.random() * 1.5,
                opacity: Math.random(),
                speed: (Math.random() * 0.5 + 0.1) * (Math.random() < 0.5 ? 1 : -1), // Drift
                twinkleSpeed: Math.random() * 0.02 + 0.005,
                rgb: color.rgb,
            });
        }

        let animationFrameId: number;
        let lastFrameTime = 0;

        const render = (time: number) => {
            if (time - lastFrameTime < frameInterval) {
                animationFrameId = requestAnimationFrame(render);
                return;
            }
            lastFrameTime = time;

            ctx.fillStyle = "#030014"; // Deep space background
            ctx.fillRect(0, 0, width, height); // Clear screen

            const centerX = width / 2;
            const centerY = height / 2;

            stars.forEach((star) => {
                // Move stars for parallax/drift effect
                star.x += star.speed * 0.2;

                // Wrap around screen
                if (star.x < 0) star.x = width;
                if (star.x > width) star.x = 0;

                // Twinkle effect
                star.opacity += star.twinkleSpeed;
                if (star.opacity > 1 || star.opacity < 0.2) {
                    star.twinkleSpeed = -star.twinkleSpeed;
                }

                // Draw star
                const safeOpacity = Math.max(0, Math.min(1, star.opacity));

                // Occasional glow for brighter stars
                if (enableGlow && star.size > 1.2 && safeOpacity > 0.8) {
                    ctx.shadowBlur = 3;
                    ctx.shadowColor = `rgba(${star.rgb}, 0.7)`;
                } else {
                    ctx.shadowBlur = 0;
                }

                ctx.fillStyle = `rgba(${star.rgb}, ${safeOpacity})`;

                ctx.beginPath();
                ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
                ctx.fill();
            });

            // Draw a subtle nebula/galaxy gradient overlay in specific spots for texture
            // (Optional: can be done via CSS for performance, doing simple color overlay here)

            animationFrameId = requestAnimationFrame(render);
        };

        animationFrameId = requestAnimationFrame(render);

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className={`absolute inset-0 z-0 pointer-events-none ${className}`}
            style={{ background: "#030014" }}
        />
    );
};

export default StarfieldBackground;
