"use client";

import React, { useState, useEffect } from "react";

export default function ValentinePage() {
  const [noButtonPos, setNoButtonPos] = useState<{ x: number; y: number } | null>(null);
  const [isYes, setIsYes] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Sinisigurado na loaded na ang page bago paganahin ang random positions
  useEffect(() => {
    setMounted(true);
  }, []);

  const moveNoButton = () => {
    // Kinukuha ang screen size para hindi lumabas ang button sa viewport
    const x = Math.random() * (window.innerWidth - 150);
    const y = Math.random() * (window.innerHeight - 150);
    setNoButtonPos({ x, y });
  };

  if (!mounted) return null;

  if (isYes) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-black overflow-hidden px-4">
        <div className="text-center animate-bounce">
          <h1 className="text-6xl md:text-8xl font-bold text-white drop-shadow-[0_0_25px_rgba(255,51,102,0.8)]">
            Yay! See you! ❤️
          </h1>
          <p className="mt-6 text-xl text-slate-400">Best decision ever. 😉</p>
        </div>
      </main>
    );
  }

  return (
    <main className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-black px-4">
      {/* Pinalitan natin ang Particles ng simpleng animated gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-pink-900/20 via-black to-black opacity-50" />

      <div className="z-10 flex flex-col items-center gap-12 text-center max-w-2xl">
        <h1 className="bg-gradient-to-b from-white to-pink-500 bg-clip-text text-transparent text-6xl md:text-8xl font-bold tracking-tighter leading-tight drop-shadow-sm">
          Will you be my Valentine?
        </h1>

        <div className="flex items-center justify-center gap-6 min-h-[100px]">
          {/* YES BUTTON */}
          <button
            onClick={() => setIsYes(true)}
            className="z-20 px-10 py-4 rounded-full bg-pink-600 text-white font-bold text-2xl hover:bg-pink-500 hover:scale-110 active:scale-90 transition-all duration-300 shadow-[0_0_30px_rgba(219,39,119,0.4)]"
          >
            Yes
          </button>

          {/* NO BUTTON (Fixed positioning para laging tumatakas) */}
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
            className="px-10 py-4 rounded-full border border-white/20 bg-white/5 text-white font-medium text-xl hover:bg-white/10 backdrop-blur-sm transition-colors"
          >
            No
          </button>
        </div>
      </div>
    </main>
  );
}