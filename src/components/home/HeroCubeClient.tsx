"use client";

import dynamic from "next/dynamic";
import { useRef, useState } from "react";

const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-12 h-12 border-4 border-[#6467FF] border-t-transparent rounded-full animate-spin" />
    </div>
  ),
});

export default function HeroCubeClient() {
  const [isLoaded, setIsLoaded] = useState(false);
  const splineRef = useRef<any>(null);

  const handleSplineLoad = (spline: any) => {
    setIsLoaded(true);
    splineRef.current = spline;
  };

  return (
    <div className="relative w-full h-full">
      <div
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
          isLoaded ? "opacity-0" : "opacity-100"
        }`}
        aria-hidden={isLoaded}
      >
        <div className="w-12 h-12 border-4 border-[#6467FF] border-t-transparent rounded-full animate-spin" />
      </div>

      <div
        className={`relative z-10 cube-wrapper w-full h-full flex items-center justify-center m-0 p-0 transition-opacity duration-1000 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } transform translate-x-[-2%] sm:translate-x-[-5%] scale-110 sm:scale-120 lg:transform-none lg:scale-90`}
      >
        <Spline
          scene="/Blueishcube%20.spline?v=1"
          onLoad={handleSplineLoad}
          style={{
            width: "100%",
            height: "100%",
            outline: "none",
            touchAction: "none",
            pointerEvents: "auto",
            cursor: "grab",
            margin: 0,
            padding: 0,
            display: "block",
          }}
        />
      </div>
    </div>
  );
}
