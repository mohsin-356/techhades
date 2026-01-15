import Link from "next/link";
import { Button } from "@/components/ui/button";
import HeroBackgroundClient from "./HeroBackgroundClient";
import HeroCubeClient from "./HeroCubeClient";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-[#050714] overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none" style={{ background: "#030014" }} />
      <HeroBackgroundClient />
      <div className="relative z-10 w-full min-h-screen mx-auto max-w-[1920px]">

        <div className="relative z-20 flex flex-col justify-center px-4 sm:px-6 lg:px-12 py-24 lg:py-0 w-full lg:w-[50%] lg:absolute lg:left-0 lg:top-1/2 lg:-translate-y-1/2 h-full pointer-events-none">
          <div className="pointer-events-auto space-y-6 lg:space-y-8 animate-fadeIn">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold leading-tight text-white text-center lg:text-left">
              <span className="bg-gradient-to-r from-[#43B2F9] via-[#6467FF] to-[#43B2F9] bg-clip-text text-transparent">
                Engineer intelligence
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#43B2F9] via-[#6467FF] to-[#43B2F9] bg-clip-text text-transparent">
                beyond the human matrix
              </span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-300 leading-relaxed max-w-xl mx-auto lg:mx-0 text-center lg:text-left font-light">
              Your partner for Software, Website & App Development along with
              UI/UX Design, AI & Automation, and animations. Bring custom AI
              into your business processes.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
              <Button asChild variant="glow" size="sm" className="min-w-[190px]">
                <Link href="/contact#contact-form">Start Your Project</Link>
              </Button>
              <Button asChild variant="outline" size="sm" className="min-w-[160px]">
                <Link href="/services">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] -rotate-[14deg] bg-[linear-gradient(90deg,rgba(100,103,255,0.22),rgba(67,178,249,0.18),rgba(100,103,255,0.22))] border-y border-[rgba(100,103,255,0.25)] backdrop-blur-sm shadow-[0_0_24px_rgba(100,103,255,0.18)] z-0 lg:hidden overflow-hidden py-2 pointer-events-none">
          <div className="flex whitespace-nowrap animate-marquee">
            {[...Array(10)].map((_, i) => (
              <span key={i} className="text-4xl sm:text-5xl font-handwriting bg-gradient-to-r from-[#6467FF] via-[#43B2F9] to-[#6467FF] bg-clip-text text-transparent opacity-40 mx-8">
                Play with Matrix
              </span>
            ))}
          </div>
        </div>

        <div
          className="relative mt-10 w-full flex items-center justify-center px-0 z-10 pointer-events-auto
                     lg:mt-0 lg:absolute lg:inset-y-0 lg:right-0 lg:w-[40%] xl:w-[45%] 2xl:w-[50%] lg:h-full lg:px-0 lg:flex lg:items-center lg:justify-center
                     animate-fadeIn animate-delay-1000 animate-duration-1000 animate-ease-in-out animate-fill-forwards"
          style={{
            boxSizing: 'border-box',
          }}
        >
          <div
            className="relative w-full h-[400px] sm:h-[450px] mx-auto lg:h-full lg:w-full lg:max-w-none"
            style={{
              boxSizing: 'border-box',
              overflow: 'visible',
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div className="absolute top-[78%] left-[58%] -translate-x-1/2 -translate-y-1/2 w-[55%] h-[30%] lg:w-[55%] lg:h-[32%] z-0 pointer-events-none opacity-90 mix-blend-screen galaxy-ring" />

            <HeroCubeClient />
          </div>

          <div className="absolute left-4 bottom-24 z-20 flex flex-col items-start gap-1 lg:hidden opacity-90 pointer-events-none">
            <span className="text-[#43B2F9] text-sm font-handwriting rotate-[-5deg] ml-7 animate-pulse">
              Play with cube
            </span>

            <div className="flex items-center gap-3">
              <div className="relative w-11 h-11 shrink-0 rounded-full bg-gradient-to-b from-[#6467FF] to-[#43B2F9] shadow-[0_0_18px_rgba(100,103,255,0.45)] flex items-center justify-center animate-bounce">
                <div className="flex gap-1.5">
                  <div className="w-1.5 h-3 bg-white rounded-full animate-pulse" />
                  <div className="w-1.5 h-3 bg-white rounded-full animate-pulse delay-75" />
                </div>
                <div className="absolute inset-0 rounded-full bg-[#6467FF]/30 blur-md animate-pulse" />
              </div>

              <div className="flex flex-col items-center">
                <svg width="40" height="20" viewBox="0 0 40 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-pulse">
                  <path d="M2 10H35M35 10L28 3M35 10L28 17" stroke="#43B2F9" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>

            <span className="text-[#43B2F9] text-xs font-bold tracking-widest ml-11 mt-[-5px] shadow-[#6467FF]/50 drop-shadow-md">
              TAP to Interact
            </span>

            <div className="flex flex-col items-center ml-5 mt-2 gap-2 opacity-60">
              <div className="w-[1px] h-12 bg-gradient-to-b from-[#6467FF] to-transparent" />
              <span className="text-[9px] uppercase tracking-[0.2em] text-[#43B2F9]/80 writing-vertical-rl rotate-180">
                Scroll
              </span>
            </div>
          </div>
        </div>

      </div>

      <div className="absolute inset-x-0 bottom-0 h-[42%] pointer-events-none z-[2] galaxy-floor">
        <svg className="galaxy-floor__svg" viewBox="0 0 1200 360" preserveAspectRatio="none" aria-hidden="true">
          <g className="galaxy-floor__scroll">
            <path className="galaxy-floor__line galaxy-floor__line--1" d="M-50,300 C120,210 260,230 420,270 C580,310 740,340 950,250 C1050,205 1120,210 1250,240" />
            <path className="galaxy-floor__line galaxy-floor__line--2" d="M-80,320 C120,240 280,265 430,285 C600,305 750,295 900,270 C1040,245 1120,250 1260,265" />
            <path className="galaxy-floor__line galaxy-floor__line--3" d="M-90,340 C130,280 270,305 420,315 C600,325 740,320 910,305 C1045,292 1140,300 1270,310" />
            <path className="galaxy-floor__line galaxy-floor__line--4" d="M-120,355 C140,315 300,330 470,340 C650,352 820,348 980,332 C1100,320 1170,322 1320,330" />
          </g>
          <g className="galaxy-floor__scroll galaxy-floor__scroll--2">
            <path className="galaxy-floor__line galaxy-floor__line--1" d="M-50,300 C120,210 260,230 420,270 C580,310 740,340 950,250 C1050,205 1120,210 1250,240" />
            <path className="galaxy-floor__line galaxy-floor__line--2" d="M-80,320 C120,240 280,265 430,285 C600,305 750,295 900,270 C1040,245 1120,250 1260,265" />
            <path className="galaxy-floor__line galaxy-floor__line--3" d="M-90,340 C130,280 270,305 420,315 C600,325 740,320 910,305 C1045,292 1140,300 1270,310" />
            <path className="galaxy-floor__line galaxy-floor__line--4" d="M-120,355 C140,315 300,330 470,340 C650,352 820,348 980,332 C1100,320 1170,322 1320,330" />
          </g>

          <g className="galaxy-floor__ring">
            <ellipse className="galaxy-floor__ringLine" cx="980" cy="300" rx="120" ry="46" />
            <ellipse className="galaxy-floor__ringLine galaxy-floor__ringLine--2" cx="980" cy="300" rx="170" ry="66" />
            <ellipse className="galaxy-floor__ringLine galaxy-floor__ringLine--3" cx="980" cy="300" rx="230" ry="90" />
          </g>
        </svg>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 pointer-events-none z-[1]" />
    </section >
  );
}
