import React from "react";

export default function HeroVisual() {
  return (
    <div className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center">
      <svg
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full max-w-[500px] animate-fade-in-up delay-700 opacity-0"
        style={{ animationFillMode: "forwards" }}
      >
        <defs>
          <linearGradient id="gold-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#f1da88" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="blue-grad" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#f7f6f2" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#f7f6f2" stopOpacity="0.1" />
          </linearGradient>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="10" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Central Glowing Core */}
        <circle
          cx="250"
          cy="250"
          r="60"
          fill="url(#gold-grad)"
          filter="url(#glow)"
          className="animate-pulse"
        />

        {/* Inner Ring - Rotating */}
        <g className="origin-center animate-[spin_20s_linear_infinite]">
          <circle
            cx="250"
            cy="250"
            r="100"
            stroke="url(#blue-grad)"
            strokeWidth="2"
            strokeDasharray="10 10"
            opacity="0.6"
          />
          <circle cx="350" cy="250" r="4" fill="#D4AF37" />
          <circle cx="150" cy="250" r="4" fill="#D4AF37" />
        </g>

        {/* Middle Ring - Reverse Rotating */}
        <g className="origin-center animate-[spin_30s_linear_infinite_reverse]">
          <circle
            cx="250"
            cy="250"
            r="160"
            stroke="url(#gold-grad)"
            strokeWidth="1"
            opacity="0.4"
          />
          <path
            d="M250 90 A160 160 0 0 1 410 250"
            stroke="#D4AF37"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M250 410 A160 160 0 0 1 90 250"
            stroke="#D4AF37"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </g>

        {/* Outer Orbit - Slow */}
        <g className="origin-center animate-[spin_60s_linear_infinite]">
          <circle
            cx="250"
            cy="250"
            r="220"
            stroke="white"
            strokeWidth="1"
            strokeDasharray="4 20"
            opacity="0.2"
          />
          {/* Floating Satellites */}
          <circle cx="470" cy="250" r="6" fill="#f1da88" filter="url(#glow)" />
        </g>
      </svg>
    </div>
  );
}
