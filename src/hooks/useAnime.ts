"use client";

import { useEffect, RefObject } from "react";
import anime, { AnimeParams } from "animejs";

export function useAnime(ref: RefObject<Element | null>, params: AnimeParams, deps: React.DependencyList = []) {
  useEffect(() => {
    if (!ref.current) return;
    const animation = anime({ targets: ref.current, ...params });
    return () => {
      animation.pause();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
