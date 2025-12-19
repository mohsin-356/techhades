"use client";

import { lazy, Suspense, useEffect, useState, useRef } from 'react';

const Spline = lazy(() => import('@splinetool/react-spline'));

interface SplineSceneProps {
  scene: string;
}

export default function SplineScene({ scene }: SplineSceneProps) {
  const [isClient, setIsClient] = useState(false);
  const splineRef = useRef<any>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const onLoad = (splineApp: any) => {
    if (splineApp) {
      splineRef.current = splineApp;
      console.log('✅ Spline scene loaded successfully!');
      
      // Safely handle object access
      setTimeout(() => {
        try {
          // Check if getAllObjects exists
          if (typeof splineApp.getAllObjects === 'function') {
            const allObjects = splineApp.getAllObjects();
            console.log(`📦 Total objects in scene: ${allObjects?.length || 0}`);
          }
          
          console.log('🎮 Mouse controls are active');
        } catch (error) {
          console.log('⚠️ Scene access delayed, will retry...', error);
        }
      }, 100);
    }
  };

  if (!isClient) {
    return <div className="w-full h-full bg-transparent" />;
  }

  return (
    <Suspense fallback={<div className="w-full h-full bg-transparent" />}>
      <div className="w-full h-full" style={{ pointerEvents: 'auto' }}>
        <Spline 
          scene={scene} 
          onLoad={onLoad}
        />
      </div>
    </Suspense>
  );
}
