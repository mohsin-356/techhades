"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import anime from "animejs";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (!ref.current) return;
    anime({
      targets: ref.current,
      opacity: [0, 1],
      translateY: [12, 0],
      easing: "easeOutQuad",
      duration: 700,
    });
  }, [pathname]);

  return <div ref={ref}>{children}</div>;
}
