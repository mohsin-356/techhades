"use client";

import { useEffect, useRef, useState } from "react";

export function useInView<T extends HTMLElement>(options?: IntersectionObserverInit) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setInView(entry.isIntersecting));
    }, options ?? { rootMargin: "-10% 0px", threshold: 0.15 });

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [options]);

  return { ref, inView } as const;
}
