"use client";

import dynamic from 'next/dynamic';
import { ChevronDown } from 'lucide-react';

const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
  loading: () => <div className="w-full h-full flex items-center justify-center"><div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" /></div>
});

export default function Hero() {
  const handleScrollDown = () => {
    if (typeof window !== 'undefined') {
      const nextSection = window.innerHeight;
      window.scrollTo({ top: nextSection, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full min-h-screen overflow-hidden flex flex-col lg:grid lg:grid-cols-2 bg-background">

      {/* ========== TEXT CONTENT (LEFT/TOP) ========== */}
      <div className="order-1 flex flex-col justify-center px-4 sm:px-6 lg:px-8 pt-24 pb-12 lg:py-0 relative z-10 bg-background/50 backdrop-blur-sm lg:bg-transparent lg:backdrop-blur-none">
        <div className="max-w-xl mx-auto lg:mx-0 lg:max-w-2xl w-full">
          <h1 className="section-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-tight text-center lg:text-left text-balance">
            We Build <span className="heading-accent">Intelligent Digital Experiences</span>
          </h1>
          <p className="mt-6 text-base sm:text-lg lg:text-xl text-foreground/85 font-sans max-w-lg mx-auto lg:mx-0 text-center lg:text-left">
            Your partner for Software, Website & App Development along with UI/UX Design, AI & Automation, and animations. Bring custom AI into your business processes, on premises or in the cloud.
          </p>

          {/* Mobile Scroll Indicator - visible only on small screens if needed, otherwise rely on the main bottom one */}
        </div>
      </div>

      {/* ========== 3D SCENE (RIGHT/BOTTOM) ========== */}
      <div className="order-2 relative flex-1 min-h-[50vh] lg:min-h-screen w-full flex items-center justify-center overflow-hidden">
        {/* 
           Visual centering hack:
           The 3D scene content is off-center (to the right).
           We make the canvas 140% wide and shift it left by 20%.
           This effectively moves the '70%' mark of the canvas to the visual center (50%) of the container.
        */}
        <div className="absolute top-0 h-full w-[140%] -left-[20%] lg:w-[150%] lg:-left-[25%] flex items-center justify-center spline-hero-container">
          <Spline
            scene={`/components/interactive_ai_website.spline?v=${Date.now()}`}
            className="w-full h-full"
          />
        </div>
      </div>

      {/* ========== SCROLL ARROW ========== */}
      <button
        onClick={handleScrollDown}
        aria-label="Scroll to next section"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 w-12 h-12 rounded-full bg-background/20 backdrop-blur-md border border-white/10 hover:bg-background/40 transition-all duration-300 flex items-center justify-center group"
      >
        <ChevronDown className="w-6 h-6 text-foreground/80 group-hover:text-foreground group-hover:translate-y-0.5 transition-transform" />
      </button>

    </section>
  );
}
