"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

interface AlienGuideProps {
  onComplete?: () => void
}

const guideSteps = [
  {
    id: 1,
    title: "👽 Welcome to AlienMatrix!",
    message: "Greetings, Earthling! I'm Zyx, your friendly alien guide. I'm here to show you our incredible digital universe!",
    position: "center",
    highlight: null
  },
  {
    id: 2,
    title: "🌐 Web Development",
    message: "We build stunning websites using alien technology! Next.js, React, and other Earth frameworks enhanced with our cosmic knowledge.",
    position: "left",
    highlight: "services"
  },
  {
    id: 3,
    title: "📱 Mobile Apps",
    message: "Our spacecraft-grade mobile apps work across all devices in the galaxy! React Native and Flutter powered by alien engineering.",
    position: "right",
    highlight: "mobile"
  },
  {
    id: 4,
    title: "🤖 AI & Automation",
    message: "We've mastered artificial intelligence from studying alien civilizations! Let us automate your business with cosmic precision.",
    position: "left",
    highlight: "ai"
  },
  {
    id: 5,
    title: "🚀 Ready to Launch?",
    message: "Your mission, should you choose to accept it: Contact us to start your intergalactic digital journey! The universe awaits!",
    position: "center",
    highlight: "contact"
  }
]

export function AlienGuide({ onComplete }: AlienGuideProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)

  useEffect(() => {
    // Always show guide on page reload after a short delay
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

  const handleNext = () => {
    if (currentStep < guideSteps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      handleComplete()
    }
  }

  const handleComplete = () => {
    setIsVisible(false)
    onComplete?.()
  }

  const handleSkip = () => {
    handleComplete()
  }

  const currentGuide = guideSteps[currentStep]

  if (!isVisible) return null

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Subtle overlay - only darken slightly */}
          <motion.div
            className="fixed inset-0 bg-black/20 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Prominent Skip Button - Top Right */}
          <motion.div
            className="fixed top-6 right-6 z-50"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ delay: 0.5 }}
          >
            <Button
              onClick={handleSkip}
              variant="glow"
              size="sm"
              className="bg-red-500/90 hover:bg-red-600/90 text-white border-red-400/50 shadow-lg backdrop-blur-sm"
            >
              <X className="w-4 h-4 mr-1" />
              Skip Tour
            </Button>
          </motion.div>

          {/* Alien Character - Always on right side */}
          <motion.div
            className="fixed bottom-6 right-6 z-50"
            initial={{ scale: 0, x: 100 }}
            animate={{ scale: 1, x: 0 }}
            exit={{ scale: 0, x: 100 }}
            transition={{ type: "spring", damping: 15, stiffness: 300 }}
          >
            <AlienCharacter />
          </motion.div>

          {/* Speech Bubble - Always to the left of character */}
          <motion.div
            className="fixed bottom-20 right-32 md:right-40 z-50 max-w-xs md:max-w-sm"
            initial={{ opacity: 0, x: 50, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 50, scale: 0.8 }}
            transition={{ delay: 0.3 }}
          >
            <div className="relative bg-gradient-to-br from-blue-500/90 to-blue-600/90 backdrop-blur-xl rounded-2xl p-4 md:p-6 border border-blue-400/30 shadow-2xl">
              {/* Speech bubble tail pointing to alien */}
              <div className="absolute bottom-4 -right-2 w-4 h-4 bg-gradient-to-br from-blue-500/90 to-blue-600/90 rotate-45" />
              
              <div className="relative z-10">
                <h3 className="text-white font-bold text-lg mb-2 font-display">
                  {currentGuide.title}
                </h3>
                <p className="text-white/90 text-sm leading-relaxed mb-4">
                  {currentGuide.message}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex space-x-1">
                    {guideSteps.map((_, index) => (
                      <div
                        key={index}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          index === currentStep ? "bg-white" : "bg-white/30"
                        }`}
                      />
                    ))}
                  </div>
                  
                  <div className="flex gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={handleSkip}
                      className="text-white/70 hover:text-white hover:bg-white/10"
                    >
                      Skip Tour
                    </Button>
                    <Button
                      variant="glow"
                      size="sm"
                      onClick={handleNext}
                      className="bg-white/20 hover:bg-white/30 text-white border-white/30"
                    >
                      {currentStep === guideSteps.length - 1 ? "Let's Go!" : "Next"}
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </>
      )}
    </AnimatePresence>
  )
}

// Alien Character Component - Cute cartoon style
function AlienCharacter() {
  return (
    <motion.div
      className="relative"
      animate={{
        y: [-3, 3, -3],
        rotate: [-1, 1, -1]
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <svg width="100" height="120" viewBox="0 0 100 120" className="drop-shadow-xl">
        <defs>
          <radialGradient id="alienHeadGrad" cx="50%" cy="40%">
            <stop offset="0%" stopColor="#60a5fa" />
            <stop offset="100%" stopColor="#3b82f6" />
          </radialGradient>
          <radialGradient id="alienBodyGrad" cx="50%" cy="30%">
            <stop offset="0%" stopColor="#1d4ed8" />
            <stop offset="100%" stopColor="#1e40af" />
          </radialGradient>
          <linearGradient id="eyeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e1b4b" />
            <stop offset="100%" stopColor="#312e81" />
          </linearGradient>
        </defs>
        
        {/* Head - Large round blue head */}
        <circle cx="50" cy="35" r="28" fill="url(#alienHeadGrad)" stroke="#1e40af" strokeWidth="3" />
        
        {/* Head highlight */}
        <ellipse cx="45" cy="28" rx="8" ry="6" fill="#93c5fd" opacity="0.6" />
        
        {/* Antennae */}
        <motion.path
          d="M 35 12 Q 30 5 25 8"
          stroke="#1e40af" strokeWidth="3" fill="none" strokeLinecap="round"
          animate={{ rotate: [-3, 3, -3] }}
          transition={{ duration: 3, repeat: Infinity }}
          style={{ transformOrigin: "35px 12px" }}
        />
        <motion.path
          d="M 65 12 Q 70 5 75 8"
          stroke="#1e40af" strokeWidth="3" fill="none" strokeLinecap="round"
          animate={{ rotate: [3, -3, 3] }}
          transition={{ duration: 3, repeat: Infinity }}
          style={{ transformOrigin: "65px 12px" }}
        />
        
        {/* Antennae tips */}
        <motion.circle
          cx="25" cy="8" r="4" fill="#60a5fa" stroke="#1e40af" strokeWidth="2"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.circle
          cx="75" cy="8" r="4" fill="#60a5fa" stroke="#1e40af" strokeWidth="2"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
        />
        
        {/* Large cartoon eyes */}
        <ellipse cx="42" cy="32" rx="8" ry="12" fill="url(#eyeGrad)" />
        <ellipse cx="58" cy="32" rx="8" ry="12" fill="url(#eyeGrad)" />
        
        {/* Eye highlights */}
        <ellipse cx="44" cy="29" rx="2" ry="3" fill="white" opacity="0.9" />
        <ellipse cx="60" cy="29" rx="2" ry="3" fill="white" opacity="0.9" />
        
        {/* Small cute mouth */}
        <ellipse cx="50" cy="42" rx="2" ry="1.5" fill="#1e40af" />
        
        {/* Body - Blue hoodie style */}
        <path
          d="M 30 55 Q 30 50 35 50 L 65 50 Q 70 50 70 55 L 70 85 Q 70 95 60 95 L 40 95 Q 30 95 30 85 Z"
          fill="url(#alienBodyGrad)"
          stroke="#1d4ed8"
          strokeWidth="3"
        />
        
        {/* Hoodie details */}
        <path
          d="M 45 50 Q 50 55 55 50"
          stroke="#1d4ed8" strokeWidth="2" fill="none"
        />
        <circle cx="50" cy="65" r="2" fill="#1d4ed8" />
        <circle cx="50" cy="75" r="2" fill="#1d4ed8" />
        
        {/* Arms */}
        <ellipse cx="25" cy="70" rx="6" ry="12" fill="url(#alienBodyGrad)" stroke="#1d4ed8" strokeWidth="2" />
        <motion.ellipse
          cx="75" cy="70" rx="6" ry="12" fill="url(#alienBodyGrad)" stroke="#1d4ed8" strokeWidth="2"
          animate={{ rotate: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{ transformOrigin: "75px 70px" }}
        />
        
        {/* Waving hand */}
        <motion.g
          animate={{ rotate: [-10, 10, -10] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          style={{ transformOrigin: "82px 65px" }}
        >
          <ellipse cx="82" cy="65" rx="4" ry="6" fill="#60a5fa" stroke="#1e40af" strokeWidth="2" />
          {/* Peace sign fingers */}
          <rect x="80" y="60" width="1.5" height="6" fill="#1e40af" rx="0.5" />
          <rect x="82.5" y="60" width="1.5" height="6" fill="#1e40af" rx="0.5" />
        </motion.g>
        
        {/* Legs */}
        <ellipse cx="42" cy="105" rx="5" ry="10" fill="#60a5fa" stroke="#1e40af" strokeWidth="2" />
        <ellipse cx="58" cy="105" rx="5" ry="10" fill="#60a5fa" stroke="#1e40af" strokeWidth="2" />
        
        {/* Feet */}
        <ellipse cx="42" cy="115" rx="6" ry="4" fill="#60a5fa" stroke="#1e40af" strokeWidth="2" />
        <ellipse cx="58" cy="115" rx="6" ry="4" fill="#60a5fa" stroke="#1e40af" strokeWidth="2" />
      </svg>
    </motion.div>
  )
}

