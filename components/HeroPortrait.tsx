"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

/**
 * Contained portrait card — Marimba-style.
 * If /sarang.jpg is missing, falls back to an initials plate so the hero never looks broken.
 */
export default function HeroPortrait() {
  const [scroll, setScroll] = useState(0);
  const [src, setSrc] = useState<string | null>("/sarang.jpg");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScroll(Math.min(1, window.scrollY / (window.innerHeight * 1.2)));
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const translateY = scroll * -40;
  const rotate = -2 + scroll * 1.5;

  return (
    <div
      ref={ref}
      className="relative w-full h-full"
      style={{
        transform: `translate3d(0, ${translateY}px, 0) rotate(${rotate}deg)`,
        willChange: "transform",
        transition: "transform 80ms linear",
      }}
    >
      {/* accent chip behind the card */}
      <div
        aria-hidden
        className="absolute -inset-2 rounded-[28px] -z-10"
        style={{ background: "rgb(var(--accent) / 0.18)", transform: "rotate(3deg)" }}
      />
      <div className="relative w-full h-full overflow-hidden rounded-[24px] border hairline bg-bone/5">
        {src ? (
          <Image
            src={src}
            alt="Portrait of Sarang Nikhade"
            fill
            priority
            sizes="(max-width: 768px) 80vw, 38vw"
            className="object-cover"
            style={{ filter: "contrast(1.08) brightness(0.96)" }}
            onError={() => setSrc(null)}
          />
        ) : (
          <Fallback />
        )}
        {/* film grain on portrait */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.07] mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")",
          }}
        />
      </div>

      {/* caption badge */}
      <div className="absolute -bottom-3 left-4 right-4 flex items-center justify-between">
        <span className="font-mono text-[10px] uppercase tracking-widest text-bone/70 bg-ink/70 backdrop-blur px-2 py-1 rounded-full border hairline">
          Sarang · 2026
        </span>
        <span className="w-2 h-2 rounded-full bg-accent shadow-[0_0_12px_rgb(var(--accent))]" />
      </div>
    </div>
  );
}

function Fallback() {
  return (
    <div
      className="absolute inset-0 flex items-center justify-center"
      style={{
        background:
          "radial-gradient(120% 80% at 50% 20%, rgb(var(--bone) / 0.18), rgb(var(--bone) / 0.04) 60%, transparent 100%), linear-gradient(160deg, rgb(var(--bone) / 0.06), rgb(var(--ink) / 0.5))",
      }}
    >
      <svg
        viewBox="0 0 200 260"
        className="w-3/5 h-3/5 opacity-80"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <defs>
          <linearGradient id="silh" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="rgb(var(--bone) / 0.9)" />
            <stop offset="100%" stopColor="rgb(var(--bone) / 0.35)" />
          </linearGradient>
        </defs>
        <circle cx="100" cy="86" r="42" fill="url(#silh)" />
        <path
          d="M30 260 C 30 180, 60 150, 100 150 C 140 150, 170 180, 170 260 Z"
          fill="url(#silh)"
        />
      </svg>
      <p className="absolute bottom-4 font-mono text-[10px] uppercase tracking-widest text-bone/60">
        Drop /public/sarang.jpg
      </p>
    </div>
  );
}
