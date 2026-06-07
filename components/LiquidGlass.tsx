"use client";

import { CSSProperties, ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  rounded?: string;
  intensity?: "soft" | "medium" | "strong";
  style?: CSSProperties;
  as?: "div" | "span" | "section";
  clean?: boolean;
};

const intensityMap = {
  soft: { blur: 14, sat: 140, opacity: 0.04 },
  medium: { blur: 24, sat: 180, opacity: 0.06 },
  strong: { blur: 36, sat: 220, opacity: 0.08 },
};

export default function LiquidGlass({
  children,
  className = "",
  rounded = "rounded-2xl",
  intensity = "medium",
  style,
  as: Tag = "div",
  clean = false,
}: Props) {
  const cfg = intensityMap[intensity];
  return (
    <Tag
      className={`relative isolate overflow-hidden ${rounded} ${className}`}
      style={{
        backgroundColor: `rgb(var(--glass-tint) / ${cfg.opacity})`,
        backdropFilter: clean
          ? `blur(${cfg.blur}px) saturate(${cfg.sat}%)`
          : `blur(${cfg.blur}px) saturate(${cfg.sat}%) url(#liquid-glass-distort)`,
        WebkitBackdropFilter: `blur(${cfg.blur}px) saturate(${cfg.sat}%)`,
        boxShadow: `
          inset 0 1px 0 rgb(var(--glass-highlight) / 0.35),
          inset 0 -1px 0 rgb(var(--glass-shadow) / 0.4),
          inset 1px 0 0 rgb(var(--glass-highlight) / 0.12),
          inset -1px 0 0 rgb(var(--glass-highlight) / 0.12),
          0 20px 60px -20px rgb(var(--glass-shadow) / 0.45)
        `,
        border: "1px solid rgb(var(--glass-highlight) / 0.14)",
        ...style,
      }}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 60% at 20% 0%, rgb(var(--glass-highlight) / 0.22), transparent 60%), radial-gradient(80% 40% at 90% 100%, rgb(var(--accent) / 0.10), transparent 70%)",
        }}
      />
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgb(var(--glass-highlight) / 0.18), transparent 30%, transparent 70%, rgb(var(--glass-highlight) / 0.10))",
          mixBlendMode: "overlay",
        }}
      />
      <span className="relative z-10 block">{children}</span>
    </Tag>
  );
}

export function LiquidGlassDefs() {
  return (
    <svg aria-hidden width="0" height="0" style={{ position: "absolute", pointerEvents: "none" }}>
      <defs>
        <filter id="liquid-glass-distort" x="0%" y="0%" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.012 0.018" numOctaves="2" seed="7" result="noise" />
          <feGaussianBlur in="noise" stdDeviation="1.2" result="softNoise" />
          <feDisplacementMap in="SourceGraphic" in2="softNoise" scale="14" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </defs>
    </svg>
  );
}
