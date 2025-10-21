"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface AlienIconProps {
  className?: string
  animated?: boolean
}

export function AlienHead({ className, animated = true }: AlienIconProps) {
  return (
    <motion.svg
      viewBox="0 0 100 100"
      className={cn("w-8 h-8", className)}
      animate={animated ? {
        rotate: [0, 5, -5, 0],
        scale: [1, 1.05, 1]
      } : {}}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {/* Alien head */}
      <motion.ellipse
        cx="50"
        cy="45"
        rx="35"
        ry="40"
        fill="url(#alienGradient)"
        stroke="rgba(109, 106, 255, 0.5)"
        strokeWidth="1"
        animate={animated ? {
          fill: [
            "url(#alienGradient)",
            "url(#alienGradient2)",
            "url(#alienGradient)"
          ]
        } : {}}
        transition={{ duration: 3, repeat: Infinity }}
      />
      
      {/* Large alien eyes */}
      <motion.ellipse
        cx="40"
        cy="40"
        rx="8"
        ry="12"
        fill="rgba(59, 130, 246, 0.8)"
        animate={animated ? {
          opacity: [0.8, 1, 0.8],
          scale: [1, 1.1, 1]
        } : {}}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <motion.ellipse
        cx="60"
        cy="40"
        rx="8"
        ry="12"
        fill="rgba(59, 130, 246, 0.8)"
        animate={animated ? {
          opacity: [0.8, 1, 0.8],
          scale: [1, 1.1, 1]
        } : {}}
        transition={{ duration: 2, repeat: Infinity, delay: 0.1 }}
      />
      
      {/* Eye pupils */}
      <circle cx="40" cy="42" r="3" fill="rgba(15, 23, 42, 0.9)" />
      <circle cx="60" cy="42" r="3" fill="rgba(15, 23, 42, 0.9)" />
      
      {/* Eye highlights */}
      <circle cx="41" cy="40" r="1" fill="rgba(255, 255, 255, 0.8)" />
      <circle cx="61" cy="40" r="1" fill="rgba(255, 255, 255, 0.8)" />
      
      {/* Small mouth */}
      <ellipse cx="50" cy="55" rx="2" ry="1" fill="rgba(59, 130, 246, 0.6)" />
      
      <defs>
        <radialGradient id="alienGradient" cx="50%" cy="30%">
          <stop offset="0%" stopColor="rgba(59, 130, 246, 0.2)" />
          <stop offset="100%" stopColor="rgba(29, 78, 216, 0.1)" />
        </radialGradient>
        <radialGradient id="alienGradient2" cx="50%" cy="30%">
          <stop offset="0%" stopColor="rgba(96, 165, 250, 0.2)" />
          <stop offset="100%" stopColor="rgba(59, 130, 246, 0.1)" />
        </radialGradient>
      </defs>
    </motion.svg>
  )
}

export function UFO({ className, animated = true }: AlienIconProps) {
  return (
    <motion.svg
      viewBox="0 0 120 80"
      className={cn("w-10 h-6", className)}
      animate={animated ? {
        y: [-2, 2, -2],
        rotate: [-1, 1, -1]
      } : {}}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {/* UFO body */}
      <ellipse
        cx="60"
        cy="35"
        rx="45"
        ry="15"
        fill="url(#ufoGradient)"
        stroke="rgba(109, 106, 255, 0.6)"
        strokeWidth="1"
      />
      
      {/* UFO dome */}
      <ellipse
        cx="60"
        cy="30"
        rx="25"
        ry="12"
        fill="url(#domeGradient)"
        stroke="rgba(59, 130, 246, 0.4)"
        strokeWidth="1"
      />
      
      {/* Lights */}
      <motion.circle
        cx="35"
        cy="42"
        r="3"
        fill="rgba(59, 130, 246, 0.8)"
        animate={animated ? {
          opacity: [0.3, 1, 0.3],
          scale: [0.8, 1.2, 0.8]
        } : {}}
        transition={{ duration: 1, repeat: Infinity, delay: 0 }}
      />
      <motion.circle
        cx="60"
        cy="45"
        r="3"
        fill="rgba(168, 85, 247, 0.8)"
        animate={animated ? {
          opacity: [0.3, 1, 0.3],
          scale: [0.8, 1.2, 0.8]
        } : {}}
        transition={{ duration: 1, repeat: Infinity, delay: 0.3 }}
      />
      <motion.circle
        cx="85"
        cy="42"
        r="3"
        fill="rgba(59, 130, 246, 0.8)"
        animate={animated ? {
          opacity: [0.3, 1, 0.3],
          scale: [0.8, 1.2, 0.8]
        } : {}}
        transition={{ duration: 1, repeat: Infinity, delay: 0.6 }}
      />
      
      {/* Beam */}
      <motion.polygon
        points="45,50 75,50 85,70 35,70"
        fill="url(#beamGradient)"
        opacity="0.3"
        animate={animated ? {
          opacity: [0.1, 0.4, 0.1]
        } : {}}
        transition={{ duration: 2, repeat: Infinity }}
      />
      
      <defs>
        <linearGradient id="ufoGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="rgba(59, 130, 246, 0.3)" />
          <stop offset="100%" stopColor="rgba(29, 78, 216, 0.2)" />
        </linearGradient>
        <radialGradient id="domeGradient" cx="50%" cy="30%">
          <stop offset="0%" stopColor="rgba(96, 165, 250, 0.2)" />
          <stop offset="100%" stopColor="rgba(59, 130, 246, 0.1)" />
        </radialGradient>
        <linearGradient id="beamGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="rgba(96, 165, 250, 0.4)" />
          <stop offset="100%" stopColor="rgba(59, 130, 246, 0.2)" />
        </linearGradient>
      </defs>
    </motion.svg>
  )
}

export function AlienSymbol({ className, animated = true }: AlienIconProps) {
  return (
    <motion.svg
      viewBox="0 0 100 100"
      className={cn("w-8 h-8", className)}
      animate={animated ? {
        rotate: [0, 360]
      } : {}}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      }}
    >
      {/* Outer ring */}
      <circle
        cx="50"
        cy="50"
        r="40"
        fill="none"
        stroke="url(#symbolGradient)"
        strokeWidth="2"
        strokeDasharray="5,5"
      />
      
      {/* Inner triangular pattern */}
      <motion.polygon
        points="50,25 35,65 65,65"
        fill="none"
        stroke="rgba(109, 106, 255, 0.6)"
        strokeWidth="2"
        animate={animated ? {
          rotate: [0, -360]
        } : {}}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{ transformOrigin: "50px 50px" }}
      />
      
      {/* Center dot */}
      <motion.circle
        cx="50"
        cy="50"
        r="4"
        fill="rgba(59, 130, 246, 0.8)"
        animate={animated ? {
          scale: [1, 1.5, 1],
          opacity: [0.6, 1, 0.6]
        } : {}}
        transition={{ duration: 2, repeat: Infinity }}
      />
      
      {/* Orbital dots */}
      <motion.circle
        cx="50"
        cy="30"
        r="2"
        fill="rgba(168, 85, 247, 0.8)"
        animate={animated ? {
          rotate: [0, 360]
        } : {}}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{ transformOrigin: "50px 50px" }}
      />
      
      <defs>
        <linearGradient id="symbolGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(109, 106, 255, 0.8)" />
          <stop offset="50%" stopColor="rgba(168, 85, 247, 0.6)" />
          <stop offset="100%" stopColor="rgba(34, 211, 238, 0.8)" />
        </linearGradient>
      </defs>
    </motion.svg>
  )
}

export function CrystalFormation({ className, animated = true }: AlienIconProps) {
  return (
    <motion.svg
      viewBox="0 0 100 100"
      className={cn("w-8 h-8", className)}
      animate={animated ? {
        scale: [1, 1.05, 1],
        rotate: [0, 2, -2, 0]
      } : {}}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {/* Crystal formations */}
      <motion.polygon
        points="50,20 40,50 60,50"
        fill="url(#crystalGradient1)"
        stroke="rgba(59, 130, 246, 0.5)"
        strokeWidth="1"
        animate={animated ? {
          fill: [
            "url(#crystalGradient1)",
            "url(#crystalGradient2)",
            "url(#crystalGradient1)"
          ]
        } : {}}
        transition={{ duration: 3, repeat: Infinity }}
      />
      
      <motion.polygon
        points="30,35 20,65 40,65"
        fill="url(#crystalGradient2)"
        stroke="rgba(168, 85, 247, 0.5)"
        strokeWidth="1"
        animate={animated ? {
          fill: [
            "url(#crystalGradient2)",
            "url(#crystalGradient3)",
            "url(#crystalGradient2)"
          ]
        } : {}}
        transition={{ duration: 3, repeat: Infinity, delay: 1 }}
      />
      
      <motion.polygon
        points="70,35 60,65 80,65"
        fill="url(#crystalGradient3)"
        stroke="rgba(109, 106, 255, 0.5)"
        strokeWidth="1"
        animate={animated ? {
          fill: [
            "url(#crystalGradient3)",
            "url(#crystalGradient1)",
            "url(#crystalGradient3)"
          ]
        } : {}}
        transition={{ duration: 3, repeat: Infinity, delay: 2 }}
      />
      
      <defs>
        <linearGradient id="crystalGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="rgba(96, 165, 250, 0.3)" />
          <stop offset="100%" stopColor="rgba(96, 165, 250, 0.1)" />
        </linearGradient>
        <linearGradient id="crystalGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="rgba(59, 130, 246, 0.3)" />
          <stop offset="100%" stopColor="rgba(59, 130, 246, 0.1)" />
        </linearGradient>
        <linearGradient id="crystalGradient3" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="rgba(29, 78, 216, 0.3)" />
          <stop offset="100%" stopColor="rgba(29, 78, 216, 0.1)" />
        </linearGradient>
      </defs>
    </motion.svg>
  )
}
