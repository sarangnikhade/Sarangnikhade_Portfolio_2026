"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

type Props = {
  images: string[];
  altPrefix?: string;
  aspect?: string;
  fit?: "cover" | "contain";
};

export default function Carousel({
  images,
  altPrefix = "Slide",
  aspect = "aspect-[16/10]",
  fit = "cover",
}: Props) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  const scrollTo = useCallback(
    (i: number) => {
      const track = trackRef.current;
      if (!track) return;
      const clamped = Math.max(0, Math.min(images.length - 1, i));
      const child = track.children[clamped] as HTMLElement | undefined;
      if (child) track.scrollTo({ left: child.offsetLeft, behavior: "smooth" });
    },
    [images.length]
  );

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const onScroll = () => {
      const w = track.clientWidth;
      const i = Math.round(track.scrollLeft / w);
      setIndex(i);
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") scrollTo(index - 1);
      if (e.key === "ArrowRight") scrollTo(index + 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, scrollTo]);

  const multi = images.length > 1;
  const atStart = index === 0;
  const atEnd = index === images.length - 1;

  return (
    <div className="relative group">
      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory overflow-x-auto scroll-smooth rounded-2xl border hairline bg-ink/40"
        style={{ scrollbarWidth: "none" }}
      >
        {images.map((src, i) => (
          <div key={i} className={`snap-start shrink-0 w-full ${aspect} relative bg-ink/60`}>
            <Image
              src={src}
              alt={`${altPrefix} ${i + 1}`}
              fill
              sizes="(max-width: 1400px) 100vw, 1400px"
              className={fit === "contain" ? "object-contain" : "object-cover"}
              priority={i === 0}
            />
          </div>
        ))}
      </div>

      {/* Arrows — always visible, disabled at edges */}
      <button
        type="button"
        aria-label="Previous slide"
        onClick={() => scrollTo(index - 1)}
        disabled={!multi || atStart}
        className="absolute left-3 md:left-5 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full border hairline bg-ink/70 backdrop-blur-md text-bone text-lg flex items-center justify-center hover:bg-ink hover:border-accent/60 hover:text-accent disabled:opacity-25 disabled:cursor-not-allowed transition-all shadow-lg"
      >
        ←
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={() => scrollTo(index + 1)}
        disabled={!multi || atEnd}
        className="absolute right-3 md:right-5 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full border hairline bg-ink/70 backdrop-blur-md text-bone text-lg flex items-center justify-center hover:bg-ink hover:border-accent/60 hover:text-accent disabled:opacity-25 disabled:cursor-not-allowed transition-all shadow-lg"
      >
        →
      </button>

      {/* Slide counter */}
      <div className="absolute top-4 right-4 font-mono text-[11px] uppercase tracking-widest text-bone bg-ink/70 backdrop-blur-md border hairline rounded-full px-3 py-1">
        {String(index + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
      </div>

      {/* Dot pagination */}
      {multi && (
        <div className="absolute left-1/2 -translate-x-1/2 bottom-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-ink/70 backdrop-blur-md border hairline">
          {images.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => scrollTo(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-6 bg-accent" : "w-1.5 bg-bone/50 hover:bg-bone/80"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
