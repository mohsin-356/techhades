"use client"

import { motion } from "framer-motion"
import { AlienHead, UFO, AlienSymbol, CrystalFormation } from "./alien-icons"

export function AlienBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Floating alien heads */}
      <motion.div
        className="absolute top-1/4 left-[10%] opacity-10"
        animate={{
          y: [-20, 20, -20],
          x: [-10, 10, -10],
          rotate: [-5, 5, -5]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <AlienHead className="w-20 h-20" />
      </motion.div>

      <motion.div
        className="absolute top-3/4 right-[15%] opacity-8"
        animate={{
          y: [15, -15, 15],
          x: [8, -8, 8],
          rotate: [3, -3, 3]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      >
        <AlienHead className="w-16 h-16" />
      </motion.div>

      {/* Floating UFOs */}
      <motion.div
        className="absolute top-[20%] right-[20%] opacity-12"
        animate={{
          y: [-25, 25, -25],
          x: [-15, 15, -15],
          rotate: [-2, 2, -2]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      >
        <UFO className="w-24 h-14" />
      </motion.div>

      <motion.div
        className="absolute bottom-[25%] left-[20%] opacity-10"
        animate={{
          y: [20, -20, 20],
          x: [12, -12, 12],
          rotate: [1, -1, 1]
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }}
      >
        <UFO className="w-20 h-12" />
      </motion.div>

      {/* Alien symbols */}
      <motion.div
        className="absolute top-[60%] left-[5%] opacity-6"
        animate={{
          rotate: [0, 360],
          scale: [0.8, 1.2, 0.8]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <AlienSymbol className="w-16 h-16" />
      </motion.div>

      <motion.div
        className="absolute top-[10%] right-[5%] opacity-8"
        animate={{
          rotate: [360, 0],
          scale: [1, 0.7, 1]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
          delay: 5
        }}
      >
        <AlienSymbol className="w-14 h-14" />
      </motion.div>

      {/* Crystal formations */}
      <motion.div
        className="absolute bottom-[10%] right-[30%] opacity-8"
        animate={{
          y: [-8, 8, -8],
          scale: [1, 1.1, 1],
          rotate: [0, 3, -3, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      >
        <CrystalFormation className="w-18 h-18" />
      </motion.div>

      <motion.div
        className="absolute top-[40%] left-[80%] opacity-6"
        animate={{
          y: [12, -12, 12],
          scale: [0.9, 1.2, 0.9],
          rotate: [0, -5, 5, 0]
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4
        }}
      >
        <CrystalFormation className="w-16 h-16" />
      </motion.div>

      {/* Particle trails */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-brand/20 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-30, 30, -30],
            x: [-20, 20, -20],
            opacity: [0.1, 0.4, 0.1],
            scale: [0.5, 1.5, 0.5]
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  )
}
