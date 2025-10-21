"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface AlienwareLogo {
  className?: string
  animated?: boolean
}

export function AlienwareLogo({ className, animated = true }: AlienwareLogo) {
  return (
    <motion.svg
      viewBox="0 0 100 100"
      className={cn("w-5 h-5", className)}
      whileHover={animated ? { 
        scale: 1.3, 
        filter: "drop-shadow(0 0 12px rgba(59, 130, 246, 0.8))"
      } : {}}
      transition={{ duration: 0.3 }}
    >
      <defs>
        <radialGradient id="alienHeadGrad" cx="50%" cy="30%">
          <stop offset="0%" stopColor="#60a5fa" />
          <stop offset="100%" stopColor="#1d4ed8" />
        </radialGradient>
      </defs>
      
      {/* Classic alien head silhouette - exactly like your image */}
      <motion.path
        d="M 50 20 
           C 65 20, 75 30, 75 45
           C 75 60, 70 70, 60 75
           C 55 77, 50 78, 50 85
           C 50 78, 45 77, 40 75
           C 30 70, 25 60, 25 45
           C 25 30, 35 20, 50 20 Z"
        fill="url(#alienHeadGrad)"
        stroke="#1e40af"
        strokeWidth="1"
        animate={animated ? {
          fill: [
            "url(#alienHeadGrad)",
            "#3b82f6",
            "url(#alienHeadGrad)"
          ]
        } : {}}
        transition={{ duration: 3, repeat: Infinity }}
      />
      
      {/* Large teardrop alien eyes - white like in your image */}
      <motion.ellipse
        cx="40"
        cy="50"
        rx="8"
        ry="12"
        fill="white"
        transform="rotate(-15 40 50)"
        animate={animated ? {
          opacity: [1, 0.8, 1]
        } : {}}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <motion.ellipse
        cx="60"
        cy="50"
        rx="8"
        ry="12"
        fill="white"
        transform="rotate(15 60 50)"
        animate={animated ? {
          opacity: [1, 0.8, 1]
        } : {}}
        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
      />
      
      {/* Subtle glow effect */}
      <motion.ellipse
        cx="50"
        cy="50"
        rx="30"
        ry="35"
        fill="none"
        stroke="rgba(59, 130, 246, 0.4)"
        strokeWidth="0.5"
        opacity="0"
        animate={animated ? {
          opacity: [0, 0.8, 0],
          scale: [1, 1.05, 1]
        } : {}}
        transition={{ duration: 4, repeat: Infinity }}
      />
    </motion.svg>
  )
}
