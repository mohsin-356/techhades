"use client"

import { useEffect, useRef } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import anime from "animejs"

export function CinematicAliens() {
  const containerRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Smooth spring animations for mouse tracking
  const springX = useSpring(mouseX, { damping: 50, stiffness: 100 })
  const springY = useSpring(mouseY, { damping: 50, stiffness: 100 })

  // Transform mouse position to subtle parallax movement
  const parallaxX1 = useTransform(springX, [0, 1920], [-20, 20])
  const parallaxY1 = useTransform(springY, [0, 1080], [-15, 15])
  const parallaxX2 = useTransform(springX, [0, 1920], [-10, 10])
  const parallaxY2 = useTransform(springY, [0, 1080], [-8, 8])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  useEffect(() => {
    // Anime.js timeline for smooth, cinematic animations
    const tl = anime.timeline({
      easing: 'easeInOutQuart',
      duration: 8000,
      loop: true,
      direction: 'alternate'
    })

    // Floating animation for alien elements
    tl.add({
      targets: '.alien-float-1',
      translateY: [-30, 30],
      translateX: [-15, 15],
      rotate: [-5, 5],
      scale: [0.95, 1.05],
      duration: 12000,
      easing: 'easeInOutSine'
    }, 0)

    tl.add({
      targets: '.alien-float-2',
      translateY: [25, -25],
      translateX: [10, -10],
      rotate: [3, -3],
      scale: [1.02, 0.98],
      duration: 10000,
      easing: 'easeInOutCubic'
    }, 1000)

    tl.add({
      targets: '.alien-float-3',
      translateY: [-20, 20],
      translateX: [8, -8],
      rotate: [-2, 2],
      scale: [0.98, 1.02],
      duration: 14000,
      easing: 'easeInOutQuart'
    }, 2000)

    // Pulsing glow animation
    anime({
      targets: '.alien-glow',
      opacity: [0.1, 0.3, 0.1],
      scale: [1, 1.2, 1],
      duration: 4000,
      easing: 'easeInOutSine',
      loop: true
    })

    return () => {
      tl.pause()
    }
  }, [])

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Alien Head 1 - Top Left */}
      <motion.div
        className="alien-float-1 absolute top-[15%] left-[8%] opacity-8"
        style={{
          x: parallaxX1,
          y: parallaxY1
        }}
      >
        <AlienHeadSVG className="w-24 h-24" />
        <div className="alien-glow absolute inset-0 bg-gradient-to-r from-brand/20 to-accent/20 rounded-full blur-xl" />
      </motion.div>

      {/* UFO - Top Right */}
      <motion.div
        className="alien-float-2 absolute top-[25%] right-[12%] opacity-6"
        style={{
          x: parallaxX2,
          y: parallaxY2
        }}
      >
        <UFOSvg className="w-32 h-20" />
        <div className="alien-glow absolute inset-0 bg-gradient-to-r from-accent/15 to-brand-2/15 rounded-full blur-2xl" />
      </motion.div>

      {/* Alien Head 2 - Bottom Right */}
      <motion.div
        className="alien-float-3 absolute bottom-[20%] right-[15%] opacity-10"
        style={{
          x: parallaxX1,
          y: parallaxY1
        }}
      >
        <AlienHeadSVG className="w-20 h-20" />
        <div className="alien-glow absolute inset-0 bg-gradient-to-r from-brand-2/20 to-brand/20 rounded-full blur-xl" />
      </motion.div>

      {/* Crystal Formation - Bottom Left */}
      <motion.div
        className="alien-float-1 absolute bottom-[30%] left-[10%] opacity-7"
        style={{
          x: parallaxX2,
          y: parallaxY2
        }}
      >
        <CrystalSVG className="w-28 h-28" />
        <div className="alien-glow absolute inset-0 bg-gradient-to-r from-accent/15 to-brand/15 rounded-full blur-xl" />
      </motion.div>

      {/* Small UFO - Center */}
      <motion.div
        className="alien-float-2 absolute top-[45%] left-[70%] opacity-5"
        style={{
          x: parallaxX1,
          y: parallaxY1
        }}
      >
        <UFOSvg className="w-16 h-10" />
        <div className="alien-glow absolute inset-0 bg-gradient-to-r from-brand/10 to-accent/10 rounded-full blur-lg" />
      </motion.div>
    </div>
  )
}

// Subtle Alien Head SVG Component
function AlienHeadSVG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className}>
      <defs>
        <radialGradient id="alienGrad" cx="50%" cy="30%">
          <stop offset="0%" stopColor="rgba(109, 106, 255, 0.15)" />
          <stop offset="100%" stopColor="rgba(168, 85, 247, 0.08)" />
        </radialGradient>
      </defs>
      
      {/* Head */}
      <ellipse cx="50" cy="45" rx="30" ry="35" fill="url(#alienGrad)" stroke="rgba(109, 106, 255, 0.2)" strokeWidth="0.5" />
      
      {/* Eyes */}
      <ellipse cx="42" cy="40" rx="6" ry="10" fill="rgba(34, 211, 238, 0.3)" />
      <ellipse cx="58" cy="40" rx="6" ry="10" fill="rgba(34, 211, 238, 0.3)" />
      
      {/* Pupils */}
      <circle cx="42" cy="42" r="2" fill="rgba(15, 23, 42, 0.6)" />
      <circle cx="58" cy="42" r="2" fill="rgba(15, 23, 42, 0.6)" />
      
      {/* Highlights */}
      <circle cx="43" cy="40" r="0.8" fill="rgba(255, 255, 255, 0.4)" />
      <circle cx="59" cy="40" r="0.8" fill="rgba(255, 255, 255, 0.4)" />
    </svg>
  )
}

// Subtle UFO SVG Component
function UFOSvg({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 80" className={className}>
      <defs>
        <linearGradient id="ufoGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="rgba(168, 85, 247, 0.15)" />
          <stop offset="100%" stopColor="rgba(109, 106, 255, 0.1)" />
        </linearGradient>
      </defs>
      
      {/* UFO Body */}
      <ellipse cx="60" cy="35" rx="40" ry="12" fill="url(#ufoGrad)" stroke="rgba(109, 106, 255, 0.2)" strokeWidth="0.5" />
      
      {/* Dome */}
      <ellipse cx="60" cy="30" rx="20" ry="8" fill="rgba(34, 211, 238, 0.1)" stroke="rgba(34, 211, 238, 0.2)" strokeWidth="0.5" />
      
      {/* Lights */}
      <circle cx="40" cy="42" r="2" fill="rgba(34, 211, 238, 0.4)" />
      <circle cx="60" cy="45" r="2" fill="rgba(168, 85, 247, 0.4)" />
      <circle cx="80" cy="42" r="2" fill="rgba(34, 211, 238, 0.4)" />
    </svg>
  )
}

// Subtle Crystal Formation SVG Component
function CrystalSVG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className}>
      <defs>
        <linearGradient id="crystalGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="rgba(34, 211, 238, 0.15)" />
          <stop offset="100%" stopColor="rgba(34, 211, 238, 0.05)" />
        </linearGradient>
      </defs>
      
      {/* Crystal formations */}
      <polygon points="50,20 42,50 58,50" fill="url(#crystalGrad)" stroke="rgba(34, 211, 238, 0.2)" strokeWidth="0.5" />
      <polygon points="30,35 22,65 38,65" fill="rgba(168, 85, 247, 0.1)" stroke="rgba(168, 85, 247, 0.2)" strokeWidth="0.5" />
      <polygon points="70,35 62,65 78,65" fill="rgba(109, 106, 255, 0.1)" stroke="rgba(109, 106, 255, 0.2)" strokeWidth="0.5" />
    </svg>
  )
}
