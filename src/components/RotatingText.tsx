"use client";

import { useEffect, useState } from "react";

type Props = {
  words: string[];
  interval?: number;
};

export default function RotatingText({ words, interval = 3000 }: Props) {
  const [index, setIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length);
        setIsTransitioning(false);
      }, 500); // Wait for exit animation
    }, interval);

    return () => clearInterval(timer);
  }, [words.length, interval]);

  return (
    <span className="inline-block relative min-w-[5ch] text-left">
      <span
        className={`inline-block transition-all duration-500 ease-in-out bg-clip-text text-transparent bg-gradient-to-r from-[#D4AF37] via-[#f1da88] to-[#D4AF37] ${
          isTransitioning
            ? "opacity-0 -translate-y-4 rotate-x-90"
            : "opacity-100 translate-y-0 rotate-x-0"
        }`}
        style={{
          backgroundSize: "200% auto",
          animation: "text-gradient-animation 3s linear infinite",
        }}
      >
        {words[index]}
      </span>
    </span>
  );
}
