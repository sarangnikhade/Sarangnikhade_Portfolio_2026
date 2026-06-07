"use client";

import { useEffect, useState } from "react";

type Props = {
  isGame?: boolean;
};

export default function BackgroundPatternVideo({ isGame = false }: Props) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 -z-20 pointer-events-none overflow-hidden select-none" aria-hidden="true">
      {/* Base dynamic background matching current theme */}
      <div className="absolute inset-0 bg-ink transition-colors duration-500" />

      {/* Subtle Animated Dot Grid */}
      <div 
        className="absolute inset-0 opacity-[0.04] dark:opacity-[0.03] transition-opacity"
        style={{
          backgroundImage: `radial-gradient(rgb(var(--glass-highlight)) 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />

      {/* Dynamic Telemetry Grid Lines */}
      <div 
        className="absolute inset-0 opacity-[0.018] dark:opacity-[0.012] transition-opacity"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgb(var(--glass-highlight)) 1px, transparent 1px),
            linear-gradient(to bottom, rgb(var(--glass-highlight)) 1px, transparent 1px)
          `,
          backgroundSize: "112px 112px",
        }}
      />

      {/* FUTURISTIC LASER GRID SCANNER SWEEP (Sweeping Hairline) */}
      <div 
        className={`absolute inset-x-0 h-1 z-10 opacity-30 pointer-events-none animate-sweep transition-colors duration-500 ${
          isGame 
            ? "dark:bg-gradient-to-r dark:from-transparent dark:via-emerald-500/30 dark:to-transparent bg-gradient-to-r from-transparent via-accent/30 to-transparent" 
            : "bg-gradient-to-r from-transparent via-accent/20 to-transparent"
        }`}
        style={{
          boxShadow: isGame 
            ? "0 0 12px 1px rgba(16,185,129,0.15)"
            : "0 0 12px 1px rgba(var(--accent),0.1)"
        }}
      />

      {/* FLOATING AMBIENT MESH BLOBS (Green in Dark Mode, Royal Blue in Light Mode) */}
      <div className="absolute inset-0 overflow-hidden filter blur-[120px] opacity-[0.24] dark:opacity-[0.15] transition-all duration-700">
        {/* Blob 1 (Top Left) */}
        <div 
          className={`absolute w-[500px] h-[500px] rounded-full top-[-100px] left-[-150px] animate-float-slow transition-all duration-700 ${
            isGame ? "dark:bg-emerald-500/15 bg-accent/20" : "bg-accent/10"
          }`}
          style={{ animationDuration: "26s" }}
        />
        {/* Blob 2 (Bottom Right) */}
        <div 
          className="absolute w-[600px] h-[600px] rounded-full bg-bone/4 bottom-[-180px] right-[-100px] animate-float-slow transition-all duration-700"
          style={{ animationDuration: "34s", animationDelay: "-8s" }}
        />
        {/* Blob 3 (Center Right) */}
        <div 
          className={`absolute w-[400px] h-[400px] rounded-full top-[35%] right-[6%] animate-float-slow transition-all duration-700 ${
            isGame ? "dark:bg-emerald-500/8 bg-accent/12" : "bg-accent/6"
          }`}
          style={{ animationDuration: "30s", animationDelay: "-5s" }}
        />
      </div>

      {/* SCI-FI HUD & TELEMETRY SYSTEMS (Corner Ticks, Radar Rings, Coordinates) */}
      <div className="absolute inset-0 z-0 opacity-[0.25] dark:opacity-[0.15] transition-opacity">
        {/* Top Left Telemetry Coordinate Widget */}
        <div className="absolute top-28 left-6 md:left-10 font-mono text-[9px] tracking-widest text-mute flex flex-col gap-1">
          <span className="flex items-center gap-1.5 font-bold">
            <span className={`h-1.5 w-1.5 rounded-full animate-ping ${isGame ? "dark:bg-emerald-400 bg-accent" : "bg-accent"}`} />
            SYS_SCANNER_A
          </span>
          <span>LAT: 51.5074° N</span>
          <span>LONG: 0.1278° W</span>
        </div>

        {/* Top Right Radar HUD Wheel */}
        <div className="absolute top-28 right-6 md:right-10 w-20 h-20 border border-bone/5 rounded-full flex items-center justify-center animate-spin-slow">
          <div className={`w-14 h-14 border border-dashed rounded-full transition-colors ${
            isGame ? "dark:border-emerald-500/20 border-accent/20" : "border-accent/15"
          }`} />
          <div className={`absolute w-1.5 h-1.5 rounded-full top-2 left-1/2 -translate-x-1/2 ${
            isGame ? "dark:bg-emerald-400 bg-accent" : "bg-accent"
          }`} />
        </div>

        {/* Bottom Left Grid Crosshair Tick */}
        <div className="absolute bottom-20 left-6 md:left-10 flex items-center gap-2 font-mono text-[8px] tracking-wider text-mute animate-telemetry-pulse">
          <span>[T_SYS_0{isGame ? "2" : "1"}]</span>
          <div className="w-8 h-[1px] bg-bone/10" />
          <span>SYS_READY</span>
        </div>

        {/* Center-Left Floating Crosshair + */}
        <div className="absolute top-[40%] left-[15%] text-mute/30 font-light text-sm animate-telemetry-pulse" style={{ animationDelay: "-2s" }}>
          +
        </div>

        {/* Center-Right Floating Crosshair + */}
        <div className="absolute bottom-[35%] right-[20%] text-mute/30 font-light text-sm animate-telemetry-pulse" style={{ animationDelay: "-4s" }}>
          +
        </div>
      </div>

      {/* Subtle Noise Texture Overlay to add cinematic film grain */}
      <div 
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
