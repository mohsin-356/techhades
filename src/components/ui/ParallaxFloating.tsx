"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ParallaxFloatingProps {
    children: React.ReactNode;
    className?: string;
    depth?: number; // 1 = slight float, 5 = deep float
    delay?: number;
}

export function ParallaxFloating({
    children,
    className,
    depth = 1,
    delay = 0,
}: ParallaxFloatingProps) {
    return (
        <motion.div
            className={cn("absolute", className)}
            animate={{
                y: [0, -10 * depth, 0],
                rotate: [0, 1 * depth, 0, -1 * depth, 0],
            }}
            transition={{
                duration: 5 + depth, // Deeper objects float slower
                repeat: Infinity,
                ease: "easeInOut",
                delay: delay,
            }}
        >
            {children}
        </motion.div>
    );
}
