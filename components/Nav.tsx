"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import LiquidGlass from "@/components/LiquidGlass";
import ThemeToggle from "@/components/ThemeToggle";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-4 inset-x-0 z-50 px-4 md:px-8">
      <LiquidGlass
        rounded="rounded-full"
        intensity={scrolled ? "strong" : "medium"}
        clean={true}
        className="mx-auto max-w-[1200px] transition-all duration-500"
      >
        <div className="h-14 px-4 md:px-6 flex items-center justify-between gap-4">
          <Link
            href="/"
            className="group flex items-center gap-2.5 font-sans font-semibold text-[15px] uppercase tracking-widest text-bone transition-transform duration-300 active:scale-95"
          >
            <span className="relative flex items-center justify-center w-7 h-7 rounded-lg border hairline bg-bone/5 overflow-hidden group-hover:border-accent/40 group-hover:bg-accent/5 transition-all">
              <span className="font-display lowercase text-base text-accent group-hover:scale-110 transition-transform duration-500">s</span>
              <span className="absolute inset-0 bg-gradient-to-tr from-accent/0 via-accent/5 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </span>
            <span className="group-hover:text-accent transition-colors duration-300">Sarang</span>
          </Link>
          <nav className="flex items-center gap-1 text-sm">
            {links.map((l) => {
              const active = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`px-4 py-1.5 rounded-full transition-colors ${
                    active ? "bg-bone text-ink" : "text-bone/85 hover:text-bone"
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
            <div className="ml-2 pl-3 border-l hairline">
              <ThemeToggle />
            </div>
          </nav>
        </div>
      </LiquidGlass>
    </header>
  );
}
