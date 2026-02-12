"use client";

import React, { useState, useEffect } from "react";

export default function ValentinePage() {
  const [noButtonPos, setNoButtonPos] = useState<{ x: number; y: number } | null>(null);
  const [isYes, setIsYes] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const moveNoButton = () => {
    const x = Math.random() * (window.innerWidth - 150);
    const y = Math.random() * (window.innerHeight - 150);
    setNoButtonPos({ x, y });
  };

  if (!mounted) return null;

  if (isYes) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-black overflow-hidden px-4">
        <div className="text-center animate-bounce">
          <h1 className="text-6xl md:text-8xl font-bold text-white drop-shadow-[0_0_35px_rgba(255,0,0,0.9)]">
            kantot ka sakin ❤️
          </h1>
          <p className="mt-6 text-xl text-red-400 font-medium tracking-widest">Pound town</p>
        </div>
      </main>
    );
  }

  return (
    <main className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-black px-4">
      {/* Red Radial Gradient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-900/40 via-black to-black opacity-80" />

      <div className="z-10 flex flex-col items-center gap-12 text-center max-w-2xl">
        {/* White to Red Gradient Text */}
        <h1 className="bg-gradient-to-b from-white via-red-200 to-red-600 bg-clip-text text-transparent text-6xl md:text-8xl font-bold tracking-tighter leading-tight drop-shadow-2xl">
          Mag sogo na tayo
        </h1>

        <div className="flex items-center justify-center gap-6 min-h-[100px]">
          {/* YES BUTTON - Red Glow */}
          <button
            onClick={() => setIsYes(true)}
            className="z-20 px-12 py-4 rounded-full bg-red-700 text-white font-bold text-2xl hover:bg-red-600 hover:scale-110 active:scale-95 transition-all duration-300 shadow-[0_0_50px_rgba(220,38,38,0.5)] border border-red-500/50"
          >
            Yes
          </button>

          {/* NO BUTTON - Glassmorphism style */}
          <button
            onMouseEnter={moveNoButton}
            onClick={moveNoButton} 
            style={
              noButtonPos
                ? {
                    position: "fixed",
                    left: `${noButtonPos.x}px`,
                    top: `${noButtonPos.y}px`,
                    transition: "all 0.2s ease-out",
                    zIndex: 50,
                  }
                : {}
            }
            className="px-10 py-4 rounded-full border border-white/10 bg-white/5 text-white/80 font-medium text-xl hover:bg-white/10 backdrop-blur-md transition-colors"
          >
            No
          </button>
        </div>
      </div>
    </main>
  );
}