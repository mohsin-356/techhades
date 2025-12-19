"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import AlienLoader from "@/components/AlienLoader";
import { AnimatePresence, motion } from "framer-motion";

export function GlobalLoaderClient({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);
    const [isInitialLoad, setIsInitialLoad] = useState(true);

    // Initial Load Effect (Run once)
    useEffect(() => {
        // Initial load: show for 4 seconds
        const timer = setTimeout(() => {
            setIsLoading(false);
            setIsInitialLoad(false);
        }, 4000);

        return () => clearTimeout(timer);
    }, []);

    // Post-Navigation Effect
    useEffect(() => {
        if (isInitialLoad) return;

        // When pathname changes (navigation complete), keep loader for a bit
        // This handles the "arrival" at the new page
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000); // 2 seconds after arrival

        return () => clearTimeout(timer);
    }, [pathname, isInitialLoad]);

    // Link Interception for Pre-Navigation Loading
    useEffect(() => {
        const handleAnchorClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const anchor = target.closest("a");

            if (anchor && anchor.href) {
                // Build URL objects to compare paths
                const targetUrl = new URL(anchor.href, window.location.href);
                const currentUrl = new URL(window.location.href);

                // Check if internal link
                const isInternal = targetUrl.origin === currentUrl.origin;
                // Check if it's a new path (hash links or same page shouldn't trigger full reload)
                const isSamePath = targetUrl.pathname === currentUrl.pathname && targetUrl.search === currentUrl.search;
                const isModifiedEvent = e.metaKey || e.ctrlKey || e.shiftKey || e.altKey;

                if (isInternal && !isSamePath && !isModifiedEvent && !anchor.target) {
                    e.preventDefault(); // Stop default navigation

                    setIsLoading(true); // Show loader immediately

                    // Wait a brief moment for animation to start, then push
                    setTimeout(() => {
                        router.push(anchor.href);
                    }, 500); // 500ms delay before starting navigation
                }
            }
        };

        document.addEventListener("click", handleAnchorClick);
        return () => document.removeEventListener("click", handleAnchorClick);
    }, [router]);

    return (
        <>
            <AnimatePresence mode="wait">
                {isLoading && (
                    <motion.div
                        key="global-loader"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="fixed inset-0 z-[100]"
                    >
                        <AlienLoader />
                    </motion.div>
                )}
            </AnimatePresence>
            {children}
        </>
    );
}
