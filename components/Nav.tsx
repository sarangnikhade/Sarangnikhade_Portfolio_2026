"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import LiquidGlass from "@/components/LiquidGlass";
import ThemeToggle from "@/components/ThemeToggle";
import { profile } from "@/lib/data";
import { Download } from "lucide-react";

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
            <span className="relative flex items-center justify-center w-8 h-8 rounded-lg overflow-hidden group-hover:ring-1 group-hover:ring-accent/40 transition-all duration-300">
              <Image
                src="/sn-nav-icon.svg"
                alt="SN monogram"
                width={32}
                height={32}
                className="w-full h-full group-hover:scale-110 transition-transform duration-500"
                priority
              />
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
            <a
              href={profile.cvHref}
              download
              className="ml-1 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border hairline text-bone/85 hover:text-accent hover:border-accent/40 transition-colors"
              aria-label="Download CV"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline text-xs font-mono uppercase tracking-widest">CV</span>
            </a>
            <div className="ml-2 pl-3 border-l hairline">
              <ThemeToggle />
            </div>
          </nav>
        </div>
      </LiquidGlass>
    </header>
  );
}
