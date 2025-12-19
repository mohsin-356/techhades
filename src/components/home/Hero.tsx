"use client";

import dynamic from 'next/dynamic';
import { ChevronDown } from 'lucide-react';
import { useState, useRef } from 'react';

const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin" />
    </div>
  )
});

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const splineRef = useRef<any>(null);

  const handleSplineLoad = (spline: any) => {
    setIsLoaded(true);
    splineRef.current = spline;
    if (spline) {
      try {
        // Adjust camera to show cube on left side of canvas
        setTimeout(() => {
          // Camera adjustment disabled to rely on CSS centering and prevent clipping
          /* 
          // Try to find and adjust the camera
          const camera = spline.findObjectByName?.('Camera') || 
                        spline.getObjectByName?.('Camera') ||
                        (spline.camera || null);
          
          if (camera) {
            // Move camera to the right to shift the view left (so cube appears on left)
            camera.position.x += 3;
            if (camera.updateMatrixWorld) {
              camera.updateMatrixWorld();
            }
          }
          
          // Also try to find cube objects and move them to left
          try {
            const allObjects = spline.getAllObjects?.() || [];
            allObjects.forEach((obj: any) => {
              if (obj.name && (
                obj.name.toLowerCase().includes('cube') || 
                obj.name.toLowerCase().includes('box') ||
                obj.name.toLowerCase().includes('group')
              )) {
                // Move cube objects to the left
                obj.position.x -= 2;
                if (obj.updateMatrixWorld) {
                  obj.updateMatrixWorld();
                }
              }
            });
          } catch (e) {
            // If getAllObjects doesn't work, that's okay
          }
          */
        }, 500);
      } catch (error) {
        console.log('Spline camera adjustment:', error);
      }
    }
  };

  const handleScrollDown = () => {
    const nextSection = document.querySelector('#next-section') ||
      document.body.offsetHeight;
    window.scrollTo({
      top: typeof nextSection === 'number' ? nextSection : window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section
      className="relative w-full min-h-screen"
      style={{
        background:
          'radial-gradient(circle at top left, #3a0b6f 0%, #140023 40%, #02000a 80%)',
        overflow: 'hidden',
      }}
    >
      {/* Single Container for Both Elements */}
      <div className="relative w-full min-h-screen mx-auto max-w-[1920px]">

        {/* ========== TEXT CONTENT (Absolute Left) ========== */}
        <div className="relative z-20 flex flex-col justify-center px-4 sm:px-6 lg:px-12 py-24 lg:py-0 w-full lg:w-[45%] lg:absolute lg:left-0 lg:top-1/2 lg:-translate-y-1/2 h-full pointer-events-none">
          {/* Inner content wrapper with pointer-events-auto to allow text selection/interaction */}
          <div className="pointer-events-auto space-y-6 lg:space-y-8 animate-fadeIn">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-white text-center lg:text-left">
              We Build{' '}
              <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Intelligent
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Digital Experiences
              </span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-300 leading-relaxed max-w-xl mx-auto lg:mx-0 text-center lg:text-left font-light">
              Your partner for Software, Website & App Development along with
              UI/UX Design, AI & Automation, and animations. Bring custom AI
              into your business processes, on premises or in the cloud.
            </p>
          </div>
        </div>

        {/* ========== ROTATED MARQUEE (Mobile/Tablet) ========== */}
        <div className="absolute top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] -rotate-[14deg] bg-purple-900/40 border-y border-purple-500/20 backdrop-blur-sm shadow-xl z-0 lg:hidden overflow-hidden py-2 pointer-events-none">
          <div className="flex whitespace-nowrap animate-marquee">
            {[...Array(10)].map((_, i) => (
              <span key={i} className="text-4xl sm:text-5xl font-handwriting text-white/20 mx-8">
                Play with Matrix
              </span>
            ))}
          </div>
        </div>

        {/* ========== 3D CUBE (Mobile Center, Desktop Right) ========== */}
        <div
          className="relative mt-10 w-full flex items-center justify-center px-0 z-10 pointer-events-auto
                     lg:mt-0 lg:absolute lg:inset-y-0 lg:right-0 lg:w-[60%] lg:h-full lg:px-0 lg:flex lg:items-center lg:justify-center
                     animate-fadeIn animate-delay-1000 animate-duration-1000 animate-ease-in-out animate-fill-forwards animate-iteration-count-infinite animate-infinite"
          style={{
            boxSizing: 'border-box',
          }}
        >
          {/* Cube Container - Canvas stays centered */}
          <div
            className={`relative w-full h-[400px] sm:h-[450px] mx-auto transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}
                        lg:h-full lg:w-full lg:max-w-none`} // Responsive full size
            style={{
              boxSizing: 'border-box',
              overflow: 'visible', // Ensure no clipping
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {/* Cube positioned to left within canvas using CSS transform */}
            <div className="cube-wrapper w-full h-full flex items-center justify-center m-0 p-0 transform translate-x-[-2%] sm:translate-x-[-5%] scale-125 sm:scale-135 lg:transform-none lg:scale-100">
              <Spline
                scene={`/components/interactive_ai_website.spline?v=${Date.now()}`}
                onLoad={handleSplineLoad}
                style={{
                  width: '100%',
                  height: '100%',
                  outline: 'none',
                  touchAction: 'none',
                  cursor: 'grab',
                  margin: 0,
                  padding: '20px 0',
                  display: 'block',
                }}
              />
            </div>
          </div>

          {/* Alien Interaction Tip - Mobile Only, Left Side */}
          <div className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 flex flex-col items-start gap-1 lg:hidden opacity-90 pointer-events-none">

            {/* "Play with cube" text - Handwritten style */}
            <span className="text-purple-200 text-sm font-handwriting rotate-[-5deg] ml-8 animate-pulse">
              Play with cube
            </span>

            <div className="flex items-center gap-3">
              {/* Alien Face */}
              <div className="relative w-12 h-12 shrink-0 rounded-full bg-gradient-to-b from-purple-500 to-indigo-600 shadow-[0_0_20px_rgba(168,85,247,0.6)] flex items-center justify-center animate-bounce">
                <div className="flex gap-1.5">
                  <div className="w-1.5 h-3 bg-white rounded-full animate-pulse" />
                  <div className="w-1.5 h-3 bg-white rounded-full animate-pulse delay-75" />
                </div>
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-full bg-purple-500/40 blur-md animate-pulse" />
              </div>

              {/* Arrow pointing to cube */}
              <div className="flex flex-col items-center">
                <svg width="40" height="20" viewBox="0 0 40 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-pulse">
                  <path d="M2 10H35M35 10L28 3M35 10L28 17" stroke="#d8b4fe" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>

            {/* "TAP to interact" text */}
            <span className="text-purple-300 text-xs font-bold tracking-widest ml-12 mt-[-5px] shadow-purple-500/50 drop-shadow-md">
              TAP to Interact
            </span>

            {/* Vertical Scroll Line (Connected below) */}
            <div className="flex flex-col items-center ml-5 mt-2 gap-2 opacity-60">
              <div className="w-[1px] h-12 bg-gradient-to-b from-purple-500 to-transparent" />
              <span className="text-[9px] uppercase tracking-[0.2em] text-purple-400/80 writing-vertical-rl rotate-180">
                Scroll
              </span>
            </div>
          </div>
        </div>

      </div>



      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 pointer-events-none z-0" />
    </section >
  );
}
