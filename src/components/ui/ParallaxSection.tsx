"use client";

import { useRef, ReactNode, useMemo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface ParallaxSectionProps {
    children: ReactNode;
    className?: string;
    speed?: number;
    direction?: "vertical" | "horizontal";
    fade?: boolean;
    scale?: boolean;
    offset?: [string, string];
}

export function ParallaxSection({
    children,
    className,
    speed = 0.5,
    direction = "vertical",
    fade = false,
    scale = false,
    offset = ["start end", "end start"],
}: ParallaxSectionProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: offset as any,
    });

    // Calculate transforms - these are cheap since useTransform is optimized
    const y = useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 100}%`]);
    const x = useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 50}%`]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
    const scaleValue = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

    // Build style object only with needed properties
    const style = useMemo(() => {
        const s: Record<string, any> = {
            // GPU acceleration hint - use translate3d for compositing
            transform: "translate3d(0,0,0)",
        };

        if (direction === "vertical") {
            s.y = y;
        } else {
            s.x = x;
        }

        if (fade) {
            s.opacity = opacity;
        }

        if (scale) {
            s.scale = scaleValue;
        }

        return s;
    }, [direction, fade, scale, y, x, opacity, scaleValue]);

    return (
        <div
            ref={ref}
            className={cn("relative", className)}
            style={{ willChange: "transform" }}
        >
            <motion.div style={style} className="w-full h-full">
                {children}
            </motion.div>
        </div>
    );
}
