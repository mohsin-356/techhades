"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import anime from "animejs";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const contentRef = useRef<HTMLDivElement>(null);
  const curtainRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (!contentRef.current) return;
    // Curtain reveal
    if (curtainRef.current) {
      curtainRef.current.style.transformOrigin = "left center";
      curtainRef.current.style.transform = "scaleX(1)";
      anime({
        targets: curtainRef.current,
        scaleX: [1, 0],
        easing: "easeInOutExpo",
        duration: 700,
        delay: 80,
      });
    }

    // Content fade/slide
    anime({
      targets: contentRef.current,
      opacity: [0, 1],
      translateY: [16, 0],
      easing: "easeOutExpo",
      duration: 700,
    });
  }, [pathname]);

  return (
    <div className="relative">
      <div
        ref={curtainRef}
        className="pointer-events-none fixed inset-0 z-[40] hidden"
        style={{
          background:
            "linear-gradient(90deg, rgba(10,11,28,1) 0%, rgba(25,27,62,0.96) 40%, rgba(10,11,28,0.85) 100%)",
          transform: "scaleX(0)",
        }}
      />
      <div ref={contentRef}>{children}</div>
    </div>
  );
}
