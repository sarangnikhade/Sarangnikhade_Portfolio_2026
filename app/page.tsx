"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { profile, projects, experience, capabilityGroups } from "@/lib/data";
import { Download } from "lucide-react";
import SectionReveal from "@/components/SectionReveal";
import Marquee from "@/components/Marquee";
import ProjectCard from "@/components/ProjectCard";
import LiquidGlass from "@/components/LiquidGlass";

export default function Home() {
  const featured = projects.slice(0, 4);

  // High-end mouse hover parallax inputs
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Premium physics configuration: spring dampening, stiffness, and mass
  const springConfig = { damping: 25, stiffness: 120, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { currentTarget, clientX, clientY } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    
    // Normalize coordinates to -0.5 to 0.5 range
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;
    
    // Scale movement to safe maximum translation offset (28px)
    mouseX.set(x * 28);
    mouseY.set(y * 28);
  };

  const handleMouseLeave = () => {
    // Smoothly spring-back to original center when mouse departs the viewport section
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <>
      {/* HERO — full-bleed B&W portrait backdrop, Marimba-style editorial type overlay */}
      <section
        className="relative min-h-[100svh] w-full overflow-hidden isolate"
        style={{ backgroundColor: "var(--hero-bg)" }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* B&W portrait background */}
        <div aria-hidden className="absolute inset-0 -z-10">
          {/* Centered, size-reduced portrait container shifted to the right */}
          <div className="absolute left-[52%] md:left-[56%] top-0 bottom-0 w-[85vw] md:w-[48vw] -translate-x-1/2 opacity-75 md:opacity-80">
            <motion.div
              className="relative w-full h-full"
              style={{
                x: smoothX,
                y: smoothY,
              }}
            >
              <Image
                src="/SarangHerobanner.png"
                alt=""
                fill
                priority
                sizes="(max-width: 768px) 85vw, 48vw"
                className="object-cover"
                style={{
                  objectPosition: "center",
                  filter: "contrast(1.08) brightness(0.95)",
                }}
              />
            </motion.div>
          </div>
          {/* legibility gradient: cinematic center spotlight vignette */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at center, rgba(var(--hero-bg-rgb), 0.1) 0%, rgba(var(--hero-bg-rgb), 0.5) 45%, rgba(var(--hero-bg-rgb), 0.95) 85%, var(--hero-bg) 100%)",
            }}
          />
          {/* bottom fade into next section */}
          <div
            className="absolute inset-x-0 bottom-0 h-48"
            style={{ background: "linear-gradient(to bottom, transparent, var(--hero-bg))" }}
          />
          {/* accent glow */}
          <div
            className="absolute inset-0 mix-blend-overlay opacity-50"
            style={{
              background:
                "radial-gradient(50% 40% at 80% 30%, rgb(var(--accent) / 0.18), transparent 70%)",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-[1400px] px-6 md:px-10 pt-28 md:pt-32 pb-16 min-h-[100svh] flex flex-col">
          {/* top meta row */}
          <div className="flex items-center justify-end font-mono text-[11px] uppercase tracking-widest text-bone/70 mb-10 md:mb-16">
            <LiquidGlass rounded="rounded-full" intensity="medium">
              <span className="flex items-center gap-2 px-3 py-1.5 text-[11px]">
                <span className="relative flex w-1.5 h-1.5">
                  <span className="absolute inset-0 rounded-full bg-accent animate-ping opacity-60" />
                  <span className="relative w-1.5 h-1.5 rounded-full bg-accent" />
                </span>
                Available for projects
              </span>
            </LiquidGlass>
          </div>

          {/* main title block */}
          <div className="flex-1 flex flex-col justify-center max-w-4xl">
            <p className="font-mono text-xs uppercase tracking-widest text-accent mb-6">
              {profile.title}
            </p>
            <h1
              className="font-display tracking-tightest leading-[0.86] text-[18vw] md:text-[10.5vw]"
              style={{ textShadow: "0 4px 60px rgb(var(--ink) / 0.6)" }}
            >
              Sarang
              <br />
              <span className="font-cursive">Nikhade</span>
              <span className="text-accent">.</span>
            </h1>
          </div>

          {/* bottom row: tagline + CTAs */}
          <div className="mt-12 grid grid-cols-12 gap-6 md:gap-10 items-end">
            <div className="col-span-12 md:col-span-6">
              <p
                className="font-display text-2xl md:text-3xl leading-[1.15] tracking-tightest text-bone/90"
                style={{ textShadow: "0 2px 20px rgb(var(--ink) / 0.6)" }}
              >
                {profile.tagline}
              </p>
            </div>
            <div className="col-span-12 md:col-span-6 flex flex-wrap items-center gap-3 md:justify-end">
              <Link
                href="/projects"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-bone text-ink font-medium hover:bg-accent transition-colors"
              >
                Selected work
                <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
              <a
                href={profile.cvHref}
                download
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full border hairline bg-accent/10 backdrop-blur-sm text-accent hover:bg-accent hover:text-ink transition-colors"
              >
                <Download className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
                Download CV
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border hairline bg-ink/30 backdrop-blur-sm text-bone/95 hover:text-bone hover:border-bone/50 transition-colors"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <Marquee items={["Product Design", "Game UI", "VR / Spatial", "Prototyping", "Design Systems", "Unity", "Figma"]} />

      {/* ABOUT */}
      <section className="mx-auto max-w-[1400px] px-6 md:px-10 py-32 md:py-48 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-3">
          <p className="font-mono text-xs uppercase tracking-widest text-mute">01 — About</p>
        </div>
        <SectionReveal className="md:col-span-9">
          <h2 className="font-display text-4xl md:text-6xl leading-[1.05] tracking-tightest">
            Senior UX/UI designer, 8 years across mobile, web, and product.
            <span className="font-cursive"> MA in Game Development,</span> now applying interaction and systems design to game UI and VR.
          </h2>
          <p className="mt-10 max-w-2xl text-bone/70 leading-relaxed">{profile.about}</p>
          <div className="mt-10">
            <a
              href={profile.cvHref}
              download
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full border hairline bg-bone/5 hover:bg-bone hover:text-ink text-bone/90 transition-colors"
            >
              <Download className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
              <span className="text-sm font-medium">Download CV</span>
            </a>
          </div>
        </SectionReveal>
      </section>

      {/* CAPABILITIES */}
      <section className="border-y hairline">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-20 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-widest text-mute">02 — Capabilities</p>
          </div>
          <div className="md:col-span-9 space-y-10">
            {capabilityGroups.map((group) => (
              <div key={group.label} className="grid grid-cols-12 gap-6 items-start">
                <h3 className="col-span-12 sm:col-span-3 font-mono text-[11px] uppercase tracking-widest text-accent pt-2">
                  {group.label}
                </h3>
                <div className="col-span-12 sm:col-span-9 flex flex-wrap gap-2">
                  {group.items.map((s) => (
                    <LiquidGlass key={s} rounded="rounded-full" intensity="soft">
                      <span className="block px-4 py-2 text-sm text-bone/90 hover:text-accent transition-colors">
                        {s}
                      </span>
                    </LiquidGlass>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED WORK */}
      <section className="mx-auto max-w-[1400px] px-6 md:px-10 py-32 md:py-48">
        <div className="grid md:grid-cols-12 gap-10 mb-12">
          <div className="md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-widest text-mute">03 — Selected work</p>
          </div>
          <div className="md:col-span-9 flex items-end justify-between">
            <h2 className="font-display text-4xl md:text-6xl tracking-tightest">Recent projects</h2>
            <Link href="/projects" className="hidden md:inline link-underline text-sm">View all →</Link>
          </div>
        </div>
        <div>
          {featured.map((p, i) => (
            <SectionReveal key={p.slug}>
              <ProjectCard project={p} index={i} />
            </SectionReveal>
          ))}
        </div>
        <div className="mt-10 md:hidden">
          <Link href="/projects" className="link-underline text-sm">View all projects →</Link>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="border-t hairline">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-32 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-widest text-mute">04 — Trajectory</p>
          </div>
          <div className="md:col-span-9 space-y-8">
            {experience.map((e) => (
              <SectionReveal key={e.role} className="grid grid-cols-12 gap-4 border-b hairline pb-6">
                <p className="col-span-12 md:col-span-3 font-mono text-sm text-mute">{e.period}</p>
                <h3 className="col-span-12 md:col-span-4 font-display text-2xl md:text-3xl tracking-tightest">{e.role}</h3>
                <p className="col-span-12 md:col-span-5 text-bone/70">{e.note}</p>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
