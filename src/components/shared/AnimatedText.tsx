"use client";

import { useEffect, useRef } from "react";
import anime from "animejs";
import clsx from "clsx";

export default function AnimatedText({
  as: As = "div",
  text,
  className,
}: {
  as?: any;
  text: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const letters = ref.current.querySelectorAll(".at-char");
    anime({
      targets: letters,
      translateY: [20, 0],
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 900,
      delay: anime.stagger(18),
    });
  }, []);

  return (
    <As className={clsx("font-bold", className)} ref={ref as any}>
      {text.split(" ").map((word, wi) => (
        <span key={`w-${wi}`} className="inline-block whitespace-nowrap">
          {word.split("").map((char, ci) => (
            <span key={`c-${wi}-${ci}`} className="at-char inline-block will-change-transform">{char}</span>
          ))}
          {/* keep real space between words */} {" "}
        </span>
      ))}
    </As>
  );
}
