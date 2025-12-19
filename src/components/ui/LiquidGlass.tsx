"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface LiquidGlassProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "navbar" | "card" | "button" | "dock";
  hover?: boolean;
}

export function LiquidGlass({ 
  children, 
  className, 
  variant = "default",
  hover = true 
}: LiquidGlassProps) {
  const variantStyles = {
    default: "rounded-2xl p-4",
    navbar: "rounded-full px-6 py-3",
    card: "rounded-3xl p-6",
    button: "rounded-full px-6 py-3",
    dock: "rounded-3xl p-4"
  };

  return (
    <div 
      className={cn(
        "liquid-glass-wrapper relative overflow-hidden",
        variantStyles[variant],
        hover && "transition-all duration-400 hover:scale-105",
        className
      )}
    >
      {/* Glass distortion effect */}
      <div className="liquid-glass-effect absolute inset-0 z-0 backdrop-blur-[3px] overflow-hidden" 
           style={{ filter: 'url(#glass-distortion)' }} 
      />
      
      {/* Tint layer */}
      <div className="liquid-glass-tint absolute inset-0 z-[1] bg-white/25 dark:bg-white/10" />
      
      {/* Shine effect */}
      <div 
        className="liquid-glass-shine absolute inset-0 z-[2] overflow-hidden"
        style={{
          boxShadow: 'inset 2px 2px 1px 0 rgba(255, 255, 255, 0.5), inset -1px -1px 1px 1px rgba(255, 255, 255, 0.3)'
        }}
      />
      
      {/* Content */}
      <div className="liquid-glass-text relative z-[3]">
        {children}
      </div>
    </div>
  );
}

// SVG Filter component to be included once in layout
export function LiquidGlassFilter() {
  return (
    <svg style={{ display: 'none' }} className="absolute">
      <filter
        id="glass-distortion"
        x="0%"
        y="0%"
        width="100%"
        height="100%"
        filterUnits="objectBoundingBox"
      >
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.01 0.01"
          numOctaves="1"
          seed="5"
          result="turbulence"
        />

        <feComponentTransfer in="turbulence" result="mapped">
          <feFuncR type="gamma" amplitude="1" exponent="10" offset="0.5" />
          <feFuncG type="gamma" amplitude="0" exponent="1" offset="0" />
          <feFuncB type="gamma" amplitude="0" exponent="1" offset="0.5" />
        </feComponentTransfer>

        <feGaussianBlur in="turbulence" stdDeviation="3" result="softMap" />

        <feSpecularLighting
          in="softMap"
          surfaceScale="5"
          specularConstant="1"
          specularExponent="100"
          lightingColor="white"
          result="specLight"
        >
          <fePointLight x="-200" y="-200" z="300" />
        </feSpecularLighting>

        <feComposite
          in="specLight"
          operator="arithmetic"
          k1="0"
          k2="1"
          k3="1"
          k4="0"
          result="litImage"
        />

        <feDisplacementMap
          in="SourceGraphic"
          in2="softMap"
          scale="150"
          xChannelSelector="R"
          yChannelSelector="G"
        />
      </filter>
    </svg>
  );
}
