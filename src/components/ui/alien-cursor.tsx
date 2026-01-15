"use client"

import { useEffect, useRef, useState } from "react"

export function AlienCursor() {
    const [isDesktop, setIsDesktop] = useState(false)

    // Mouse position
    const targetRef = useRef({ x: -100, y: -100 })
    const currentRef = useRef({ x: -100, y: -100 })

    // Smooth catch-up effect (spring physics)
    const easeRef = useRef(0.35)

    const isVisibleRef = useRef(false)
    const isTextModeRef = useRef(false)

    const arrowRef = useRef<HTMLDivElement | null>(null)
    const orbRef = useRef<HTMLDivElement | null>(null)

    const rafRef = useRef<number | null>(null)

    useEffect(() => {
        const mql = window.matchMedia("(hover: hover) and (pointer: fine) and (min-width: 769px)")
        const update = () => setIsDesktop(mql.matches)

        update()
        if (mql.addEventListener) mql.addEventListener("change", update)
        else mql.addListener(update)

        return () => {
            if (mql.removeEventListener) mql.removeEventListener("change", update)
            else mql.removeListener(update)
        }
    }, [])

    useEffect(() => {
        if (!isDesktop) {
            if (document.documentElement.dataset.alienCursor) {
                delete document.documentElement.dataset.alienCursor
            }
            return
        }

        return () => {
            if (document.documentElement.dataset.alienCursor) {
                delete document.documentElement.dataset.alienCursor
            }
        }
    }, [isDesktop])

    useEffect(() => {
        if (!isDesktop) return

        const setActive = () => {
            if (document.documentElement.dataset.alienCursor !== "on") {
                document.documentElement.dataset.alienCursor = "on"
            }
        }

        const applyOpacity = () => {
            const show = isVisibleRef.current && !isTextModeRef.current
            const opacity = show ? "1" : "0"
            if (arrowRef.current) arrowRef.current.style.opacity = opacity
            if (orbRef.current) orbRef.current.style.opacity = opacity
        }

        const tick = () => {
            const t = targetRef.current
            const c = currentRef.current
            const ease = easeRef.current

            c.x += (t.x - c.x) * ease
            c.y += (t.y - c.y) * ease

            const x = c.x
            const y = c.y

            if (arrowRef.current) {
                arrowRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`
            }
            if (orbRef.current) {
                orbRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) translateY(20%)`
            }

            rafRef.current = requestAnimationFrame(tick)
        }

        const ensureRaf = () => {
            if (rafRef.current == null) {
                rafRef.current = requestAnimationFrame(tick)
            }
        }

        const handlePointerMove = (e: PointerEvent) => {
            if (!isVisibleRef.current) {
                isVisibleRef.current = true
                setActive()
                applyOpacity()
            }

            ensureRaf()

            targetRef.current.x = e.clientX
            targetRef.current.y = e.clientY

            const target = e.target as HTMLElement | null
            if (!target) {
                if (isTextModeRef.current) {
                    isTextModeRef.current = false
                    applyOpacity()
                }
                return
            }

            const isOverText = Boolean(
                target.closest?.(
                    "input, textarea, select, [contenteditable=\"\"], [contenteditable=\"true\"], [contenteditable=\"plaintext-only\"], [role=\"textbox\"]"
                )
            )

            if (isOverText !== isTextModeRef.current) {
                isTextModeRef.current = isOverText
                setActive()
                applyOpacity()
            }
        }

        const handleMouseLeave = () => {
            if (isVisibleRef.current) {
                isVisibleRef.current = false
                applyOpacity()
            }

            if (rafRef.current != null) {
                cancelAnimationFrame(rafRef.current)
                rafRef.current = null
            }
        }

        const handleMouseEnter = () => {
            if (!isVisibleRef.current) {
                isVisibleRef.current = true
                setActive()
                applyOpacity()
            }
        }

        window.addEventListener("pointermove", handlePointerMove, { passive: true })
        document.addEventListener("mouseleave", handleMouseLeave)
        document.addEventListener("mouseenter", handleMouseEnter)

        return () => {
            window.removeEventListener("pointermove", handlePointerMove)
            document.removeEventListener("mouseleave", handleMouseLeave)
            document.removeEventListener("mouseenter", handleMouseEnter)

            if (rafRef.current != null) {
                cancelAnimationFrame(rafRef.current)
                rafRef.current = null
            }
        }
    }, [isDesktop])

    if (!isDesktop) return null

    return (
        <>
            <div
                ref={arrowRef}
                className="fixed pointer-events-none z-[10000] top-0 left-0 hidden md:block"
                style={{
                    transform: "translate3d(-100px, -100px, 0)",
                    willChange: "transform, opacity",
                    opacity: 0,
                }}
            >
                <FigmaArrowCursor />
            </div>
            <div
                ref={orbRef}
                className="fixed pointer-events-none z-[9999] top-0 left-0 hidden md:block"
                style={{
                    transform: "translate3d(-100px, -100px, 0) translateY(20%)",
                    willChange: "transform, opacity",
                    opacity: 0,
                }}
            >
                <RotatingCursorImage />
            </div>
        </>
    )
}

function RotatingCursorImage() {
    return (
        <div className="w-16 h-16 relative animate-spin" style={{ animationDuration: "8s" }}>
            <img
                src="/components/AlienMatrix_Exact.svg"
                alt="cursor"
                className="w-full h-full object-contain drop-shadow-[0_0_12px_rgba(67,178,249,0.5)]"
            />
        </div>
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
