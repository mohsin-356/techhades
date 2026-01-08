"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface SectionDividerProps {
  variant?: "wave" | "diagonal" | "curve" | "zigzag"
  className?: string
  fromColor?: string
  toColor?: string
  animated?: boolean
}

export function SectionDivider({ 
  variant = "wave", 
  className,
  fromColor = "rgba(15, 23, 42, 1)",
  toColor = "rgba(30, 41, 59, 0.95)",
  animated = true
}: SectionDividerProps) {
  const dividerVariants = {
    wave: "M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,42.7C960,43,1056,53,1152,58.7C1248,64,1344,64,1392,64L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z",
    diagonal: "M0,0 L1440,0 L1440,64 L0,32 Z",
    curve: "M0,64 Q720,0 1440,64 L1440,0 L0,0 Z",
    zigzag: "M0,32 L72,0 L144,32 L216,0 L288,32 L360,0 L432,32 L504,0 L576,32 L648,0 L720,32 L792,0 L864,32 L936,0 L1008,32 L1080,0 L1152,32 L1224,0 L1296,32 L1368,0 L1440,32 L1440,0 L0,0 Z"
  }

  return (
    <div className={cn("relative w-full h-16 overflow-hidden", className)}>
      <motion.svg
        className="absolute bottom-0 w-full h-full"
        viewBox="0 0 1440 64"
        preserveAspectRatio="none"
        initial={animated ? { x: -100 } : false}
        animate={animated ? { x: 0 } : false}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <defs>
          <linearGradient id="dividerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={fromColor} />
            <stop offset="50%" stopColor="rgba(109, 106, 255, 0.1)" />
            <stop offset="100%" stopColor={toColor} />
          </linearGradient>
          
          {animated && (
            <linearGradient id="animatedGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(109, 106, 255, 0.2)">
                <animate
                  attributeName="stop-color"
                  values="rgba(109, 106, 255, 0.2);rgba(100, 103, 255, 0.3);rgba(67, 178, 249, 0.2);rgba(109, 106, 255, 0.2)"
                  dur="4s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="50%" stopColor="rgba(100, 103, 255, 0.3)">
                <animate
                  attributeName="stop-color"
                  values="rgba(100, 103, 255, 0.3);rgba(67, 178, 249, 0.2);rgba(109, 106, 255, 0.2);rgba(100, 103, 255, 0.3)"
                  dur="4s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="100%" stopColor="rgba(67, 178, 249, 0.2)">
                <animate
                  attributeName="stop-color"
                  values="rgba(67, 178, 249, 0.2);rgba(109, 106, 255, 0.2);rgba(100, 103, 255, 0.3);rgba(67, 178, 249, 0.2)"
                  dur="4s"
                  repeatCount="indefinite"
                />
              </stop>
            </linearGradient>
          )}
        </defs>
        
        <path
          d={dividerVariants[variant]}
          fill="url(#dividerGradient)"
          className="opacity-80"
        />
        
        {animated && (
          <path
            d={dividerVariants[variant]}
            fill="url(#animatedGradient)"
            className="opacity-60"
          />
        )}
      </motion.svg>
      
      {/* Particle overlay */}
      {animated && (
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => {
            // Use deterministic positions based on index to avoid hydration mismatch
            const positions = [
              { left: 15, top: 25 },
              { left: 35, top: 60 },
              { left: 65, top: 20 },
              { left: 80, top: 75 },
              { left: 25, top: 85 },
              { left: 90, top: 40 }
            ]
            const pos = positions[i] || { left: 50, top: 50 }
            
            return (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-brand/40 rounded-full"
                style={{
                  left: `${pos.left}%`,
                  top: `${pos.top}%`,
                }}
                animate={{
                  y: [-10, 10, -10],
                  opacity: [0.3, 1, 0.3],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: 3 + (i * 0.5), // Deterministic duration based on index
                  repeat: Infinity,
                  delay: i * 0.3, // Deterministic delay based on index
                }}
              />
            )
          })}
        </div>
      )}
    </div>
  )
}
