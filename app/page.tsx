"use client";

import Image from "next/image";
import Link from "next/link";
import { profile, projects, experience, skills } from "@/lib/data";
import SectionReveal from "@/components/SectionReveal";
import Marquee from "@/components/Marquee";
import ProjectCard from "@/components/ProjectCard";
import LiquidGlass from "@/components/LiquidGlass";

export default function Home() {
  const featured = projects.slice(0, 4);

  return (
    <>
      {/* HERO — full-bleed B&W portrait backdrop, Marimba-style editorial type overlay */}
      <section className="relative min-h-[100svh] w-full overflow-hidden">
        {/* B&W portrait background */}
        <div aria-hidden className="absolute inset-0 -z-10">
          <Image
            src="/SarangHerobanner.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
            style={{
              objectPosition: "center right",
              filter: "contrast(1.08) brightness(0.9)",
            }}
          />
          {/* legibility gradient: dark left → translucent right */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(95deg, rgb(var(--ink)) 0%, rgb(var(--ink) / 0.85) 30%, rgb(var(--ink) / 0.45) 60%, rgb(var(--ink) / 0.2) 100%)",
            }}
          />
          {/* bottom fade into next section */}
          <div
            className="absolute inset-x-0 bottom-0 h-48"
            style={{ background: "linear-gradient(to bottom, transparent, rgb(var(--ink)))" }}
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
          <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-widest text-bone/70 mb-10 md:mb-16">
            <span>Portfolio — 2026 / vol. 02</span>
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
              <span className="italic text-bone/75">Nikhade</span>
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
            Eight years between pixels and play. I design interfaces that feel inevitable
            <span className="italic text-bone/60"> — and systems people actually want to come back to.</span>
          </h2>
          <p className="mt-10 max-w-2xl text-bone/70 leading-relaxed">{profile.about}</p>
        </SectionReveal>
      </section>

      {/* SKILLS */}
      <section className="border-y hairline">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-20 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-widest text-mute">02 — Capabilities</p>
          </div>
          <div className="md:col-span-9 flex flex-wrap gap-2">
            {skills.map((s) => (
              <LiquidGlass key={s} rounded="rounded-full" intensity="soft">
                <span className="block px-4 py-2 text-sm text-bone/90 hover:text-accent transition-colors">
                  {s}
                </span>
              </LiquidGlass>
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
