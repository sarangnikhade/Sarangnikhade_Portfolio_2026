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
        className="mx-auto max-w-[1200px] transition-all duration-500"
      >
        <div className="h-14 px-4 md:px-6 flex items-center justify-between gap-4">
          <Link href="/" className="font-display text-xl tracking-tightest">
            Sarang<span className="text-accent">.</span>
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
