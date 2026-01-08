"use client";

import { createContext, useContext, useEffect, useLayoutEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

// Create a context to share the Lenis instance
const LenisContext = createContext<Lenis | null>(null);

export const useLenis = () => useContext(LenisContext);

export function SmoothScrollProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const lenisRef = useRef<Lenis | null>(null);
    const rafIdRef = useRef<number>(0);
    const pathname = usePathname();

    useLayoutEffect(() => {
        // Reduced Motion Check
        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        // Mobile Check - Lenis can be heavy on mobile
        const isMobile = window.innerWidth < 768;

        if (prefersReducedMotion || isMobile) {
            return;
        }

        // Prevent duplicate instances
        if (lenisRef.current) {
            return;
        }

        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: "vertical",
            gestureOrientation: "vertical",
            smoothWheel: true,
            touchMultiplier: 2,
            infinite: false,
        });

        lenisRef.current = lenis;

        // rAF loop with proper cleanup
        const raf = (time: number) => {
            lenis.raf(time);
            rafIdRef.current = requestAnimationFrame(raf);
        };
        rafIdRef.current = requestAnimationFrame(raf);

        return () => {
            cancelAnimationFrame(rafIdRef.current);
            lenis.destroy();
            lenisRef.current = null;
        };
    }, []);

    // Scroll to top on route change
    useEffect(() => {
        if (lenisRef.current) {
            lenisRef.current.scrollTo(0, { immediate: true });
        } else {
            // Fallback for mobile/reduced motion
            window.scrollTo(0, 0);
        }
    }, [pathname]);

    return (
        <LenisContext.Provider value={lenisRef.current}>
            {children}
        </LenisContext.Provider>
    );
}
