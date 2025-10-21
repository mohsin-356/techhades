"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface AnimatedTextProps {
  text: string
  className?: string
  as?: React.ElementType
  delay?: number
  duration?: number
  staggerDelay?: number
}

interface AnimatedLettersProps {
  text: string
  className?: string
  as?: React.ElementType
  delay?: number
  duration?: number
  staggerDelay?: number
}

export function AnimatedText({
  text,
  className,
  as: Component = "div",
  delay = 0,
  duration = 0.8,
  staggerDelay = 0.03
}: AnimatedTextProps) {
  const words = text.split(" ")

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { 
        staggerChildren: staggerDelay, 
        delayChildren: delay * i 
      }
    })
  }

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100
      }
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100
      }
    }
  }

  return (
    <motion.div
      style={{ overflow: "hidden", display: "flex", flexWrap: "wrap" }}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={cn(className)}
    >
      {words.map((word, index) => (
        <motion.span
          variants={child}
          style={{ marginRight: "0.25em" }}
          key={index}
          className="inline-block"
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  )
}

export function AnimatedLetters({
  text,
  className,
  as: Component = "div",
  delay = 0,
  duration = 0.6,
  staggerDelay = 0.02
}: AnimatedLettersProps) {
  const letters = text.split("")

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay
      }
    }
  }

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 200
      }
    },
    hidden: {
      opacity: 0,
      y: 20,
      rotateX: -90,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 200
      }
    }
  }

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={cn("inline-block", className)}
    >
      {letters.map((letter: string, index: number) => (
        <motion.span
          variants={child}
          key={index}
          className="inline-block"
          style={{ transformOrigin: "50% 50%" }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
  )
}

export function GlitchText({
  text,
  className
}: {
  text: string
  className?: string
}) {
  return (
    <motion.div
      className={cn("relative inline-block", className)}
      whileHover="hover"
    >
      <motion.span
        variants={{
          hover: {
            x: [0, -2, 2, 0],
            transition: {
              duration: 0.3,
              repeat: 2,
              ease: "easeInOut"
            }
          }
        }}
        className="relative z-10"
      >
        {text}
      </motion.span>
      
      <motion.span
        className="absolute top-0 left-0 text-red-500 opacity-0"
        variants={{
          hover: {
            opacity: [0, 0.7, 0],
            x: [-2, 2, -2],
            transition: {
              duration: 0.3,
              repeat: 2,
              ease: "easeInOut"
            }
          }
        }}
      >
        {text}
      </motion.span>
      
      <motion.span
        className="absolute top-0 left-0 text-cyan-500 opacity-0"
        variants={{
          hover: {
            opacity: [0, 0.7, 0],
            x: [2, -2, 2],
            transition: {
              duration: 0.3,
              repeat: 2,
              ease: "easeInOut",
              delay: 0.1
            }
          }
        }}
      >
        {text}
      </motion.span>
    </motion.div>
  )
}
