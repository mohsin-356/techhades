"use client"

import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export function AlienCursor() {
    const [isVisible, setIsVisible] = useState(false)
    const [isTextMode, setIsTextMode] = useState(false)

    // Mouse position
    const mouseX = useMotionValue(-100)
    const mouseY = useMotionValue(-100)

    // Smooth catch-up effect (spring physics)
    const springConfig = { damping: 25, stiffness: 300, mass: 0.5 }
    const cursorX = useSpring(mouseX, springConfig)
    const cursorY = useSpring(mouseY, springConfig)

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            // Show cursor only when moving mouse
            if (!isVisible) setIsVisible(true)

            mouseX.set(e.clientX)
            mouseY.set(e.clientY)

            const target = e.target as HTMLElement | null
            if (!target) {
                if (isTextMode) setIsTextMode(false)
                return
            }

            const isOverText = Boolean(
                target.closest?.(
                    "input, textarea, select, [contenteditable=\"\"], [contenteditable=\"true\"], [contenteditable=\"plaintext-only\"], [role=\"textbox\"]"
                )
            )

            if (isOverText !== isTextMode) setIsTextMode(isOverText)
        }

        const handleMouseLeave = () => {
            setIsVisible(false)
        }

        const handleMouseEnter = () => {
            setIsVisible(true)
        }

        window.addEventListener("mousemove", handleMouseMove)
        document.addEventListener("mouseleave", handleMouseLeave)
        document.addEventListener("mouseenter", handleMouseEnter)

        return () => {
            window.removeEventListener("mousemove", handleMouseMove)
            document.removeEventListener("mouseleave", handleMouseLeave)
            document.removeEventListener("mouseenter", handleMouseEnter)
        }
    }, [mouseX, mouseY, isVisible, isTextMode])

    // Don't render on mobile/touch devices (checking width roughly)
    const [isDesktop, setIsDesktop] = useState(false)

    useEffect(() => {
        const checkIsDesktop = () => {
            setIsDesktop(window.innerWidth > 768)
        }

        checkIsDesktop()
        window.addEventListener("resize", checkIsDesktop)
        return () => window.removeEventListener("resize", checkIsDesktop)
    }, [])

    if (!isDesktop) return null

    return (
        <>
            <motion.div
                className="fixed pointer-events-none z-[10000] top-0 left-0 hidden md:block"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: "0%",
                    translateY: "0%",
                    opacity: isVisible && !isTextMode ? 1 : 0,
                }}
            >
                <FigmaArrowCursor />
            </motion.div>
            <motion.div
                className="fixed pointer-events-none z-[9999] top-0 left-0 hidden md:block"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: "0%",
                    translateY: "20%",
                    opacity: isVisible && !isTextMode ? 1 : 0,
                }}
            >
                <RotatingCursorImage />
            </motion.div>
        </>
    )
}

function RotatingCursorImage() {
    return (
        <motion.div
            className="w-16 h-16 relative"
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        >
            <img
                src="/components/AlienMatrix_Exact.svg"
                alt="cursor"
                className="w-full h-full object-contain drop-shadow-[0_0_12px_rgba(67,178,249,0.5)]"
            />
        </motion.div>
    )
}

function FigmaArrowCursor() {
    return (
        <svg
            width="18"
            height="16"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
                filter: "drop-shadow(0 1px 2px rgba(65, 147, 241, 0.45))",
                transform: "translate(0, 0)", // Ensure tip is at 0,0
            }}
        >
            <defs>
                <linearGradient id="cursorBody" x1="0" y1="0" x2="18" y2="24" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="#78b3eeff" /> {/* White/Silver */}
                    <stop offset="0.5" stopColor="#a7c3ebff" /> {/* Metallic Grey */}
                    <stop offset="1" stopColor="#6188c0ff" /> {/* Darker Metal */}
                </linearGradient>
                <linearGradient id="cursorRim" x1="18" y1="0" x2="0" y2="24" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="#51a8f4d0" />
                    <stop offset="1" stopColor="#97caf4ff" />
                </linearGradient>
            </defs>

            {/* Simple Arrowhead shape without tail */}
            <path
                d="M2 2L9 21L12.5 13L17 13L2 2Z"
                fill="url(#cursorBody)"
                stroke="url(#cursorRim)"
                strokeWidth="1.2"
                strokeLinejoin="round"
            />
        </svg>
    )
}
