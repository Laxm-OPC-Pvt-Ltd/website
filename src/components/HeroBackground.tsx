import React from "react";

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden bg-[var(--navy)]">
      {/* Deep Radial Base */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_var(--navy-light)_0%,_var(--navy)_100%)]" />

      {/* Primary Rotating Rays (Gold) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vmax] h-[150vmax] animate-[spin_60s_linear_infinite] opacity-20 pointer-events-none">
        <div
          className="w-full h-full bg-[repeating-conic-gradient(from_0deg_at_50%_50%,_transparent_0deg,_transparent_5deg,_var(--gold)_5deg,_var(--gold)_10deg,_transparent_10deg,_transparent_15deg)]"
          style={{ filter: "blur(60px)", mixBlendMode: "overlay" }}
        />
      </div>

      {/* Secondary Rotating Rays (Ivory/White - Reverse) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vmax] h-[150vmax] animate-[spin_80s_linear_infinite_reverse] opacity-10 pointer-events-none">
        <div
          className="w-full h-full bg-[repeating-conic-gradient(from_0deg_at_50%_50%,_transparent_0deg,_transparent_10deg,_var(--ivory)_10deg,_var(--ivory)_15deg,_transparent_15deg,_transparent_30deg)]"
          style={{ filter: "blur(80px)", mixBlendMode: "overlay" }}
        />
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 grid-overlay opacity-10 mix-blend-soft-light" />

      {/* Vignette / Fade to bottom */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_20%,_var(--navy)_100%)] opacity-90" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--background)] to-transparent" />
    </div>
  );
}
