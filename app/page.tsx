"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { profile, projects, experience, skills } from "@/lib/data";
import SectionReveal from "@/components/SectionReveal";
import Marquee from "@/components/Marquee";
import ProjectCard from "@/components/ProjectCard";
import LiquidGlass from "@/components/LiquidGlass";

const HeroPortrait = dynamic(() => import("@/components/HeroPortrait"), { ssr: false });

export default function Home() {
  const featured = projects.slice(0, 4);

  return (
    <>
      {/* HERO — Marimba-inspired editorial layout */}
      <section className="relative min-h-[100svh] w-full overflow-hidden">
        {/* soft ambient backdrop */}
        <div
          aria-hidden
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(60% 50% at 80% 20%, rgb(var(--accent) / 0.10), transparent 70%), radial-gradient(40% 40% at 10% 90%, rgb(var(--bone) / 0.05), transparent 70%)",
          }}
        />

        <div className="mx-auto max-w-[1400px] px-6 md:px-10 pt-28 md:pt-32 pb-12">
          {/* top meta row */}
          <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-widest text-bone/60 mb-10 md:mb-16">
            <span>Portfolio — 2026 / vol. 02</span>
            <LiquidGlass rounded="rounded-full" intensity="soft">
              <span className="flex items-center gap-2 px-3 py-1.5 text-[11px]">
                <span className="relative flex w-1.5 h-1.5">
                  <span className="absolute inset-0 rounded-full bg-accent animate-ping opacity-60" />
                  <span className="relative w-1.5 h-1.5 rounded-full bg-accent" />
                </span>
                Available for projects
              </span>
            </LiquidGlass>
          </div>

          {/* main row: type + portrait */}
          <div className="grid grid-cols-12 gap-6 md:gap-10 items-center">
            <div className="col-span-12 md:col-span-8">
              <p className="font-mono text-xs uppercase tracking-widest text-accent mb-6">
                {profile.title}
              </p>
              <h1 className="font-display tracking-tightest leading-[0.86] text-[18vw] md:text-[10.5vw]">
                Sarang
                <br />
                <span className="italic text-bone/65">Nikhade</span>
                <span className="text-accent">.</span>
              </h1>
            </div>

            <div className="col-span-8 col-start-3 md:col-span-4 md:col-start-9 mt-8 md:mt-0">
              <div className="relative w-full aspect-[4/5] max-w-[460px] ml-auto">
                <HeroPortrait />
              </div>
            </div>
          </div>

          {/* bottom row: tagline + CTAs + scroll cue */}
          <div className="mt-16 md:mt-20 grid grid-cols-12 gap-6 md:gap-10 items-end">
            <div className="col-span-12 md:col-span-5">
              <p className="font-display text-2xl md:text-3xl leading-[1.15] tracking-tightest text-bone/90">
                {profile.tagline}
              </p>
            </div>
            <div className="col-span-12 md:col-span-5 md:col-start-7 flex flex-wrap items-center gap-3">
              <Link
                href="/projects"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-bone text-ink font-medium hover:bg-accent transition-colors"
              >
                Selected work
                <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border hairline text-bone/90 hover:text-bone hover:border-bone/50 transition-colors"
              >
                Get in touch
              </Link>
              <span className="ml-auto hidden md:flex items-center gap-2 text-xs font-mono text-bone/50">
                <span className="w-8 h-px bg-bone/40" /> Scroll
              </span>
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
