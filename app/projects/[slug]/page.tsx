import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projects, getProject } from "@/lib/data";
import VideoEmbed from "@/components/VideoEmbed";
import SectionReveal from "@/components/SectionReveal";
import Carousel from "@/components/Carousel";
import LiquidGlass from "@/components/LiquidGlass";
import BackgroundPatternVideo from "@/components/BackgroundPatternVideo";
import {
  Compass,
  Cpu,
  Layers,
  Trophy,
  Target,
  MessageSquare,
  Milestone,
  Calendar,
  Zap,
  Grid,
  FileText,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Download,
  BookOpen,
  CheckCircle,
  Activity,
  Briefcase,
  Tag,
  Wrench,
  Users,
  Shield,
  Clock,
  Code,
  Terminal,
  Settings,
  MousePointer,
  CreditCard,
  Tv,
  Play,
  ExternalLink
} from "lucide-react";

export function generateStaticParams() {
  return projects.filter((p) => p.case).map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const p = getProject(params.slug);
  if (!p) return {};
  return {
    title: `${p.title} — Sarang Nikhade`,
    description: p.blurb,
  };
}

// Icon mapper for project metadata
function getMetaIcon(label: string) {
  const lower = label.toLowerCase();
  if (lower.includes("role")) return <Briefcase className="w-4 h-4 text-accent" />;
  if (lower.includes("sector") || lower.includes("genre") || lower.includes("client")) return <Tag className="w-4 h-4 text-accent" />;
  if (lower.includes("platform")) return <Grid className="w-4 h-4 text-accent" />;
  if (lower.includes("year")) return <Calendar className="w-4 h-4 text-accent" />;
  if (lower.includes("status")) return <Activity className="w-4 h-4 text-accent" />;
  return <FileText className="w-4 h-4 text-accent" />;
}

// Custom icon mapper for feature lists to assign meaningful modern visual markers
function getFeatureIcon(text: string, index: number) {
  const lower = text.toLowerCase();
  if (lower.includes("multiplayer") || lower.includes("cross-platform") || lower.includes("cooperative") || lower.includes("co-op") || lower.includes("team-based")) {
    return <Users className="w-5 h-5 text-accent" />;
  }
  if (lower.includes("vr") || lower.includes("virtual reality") || lower.includes("spatial") || lower.includes("quest") || lower.includes("head tracking")) {
    return <Compass className="w-5 h-5 text-accent" />;
  }
  if (lower.includes("control") || lower.includes("input") || lower.includes("gestures") || lower.includes("flight") || lower.includes("mechanic") || lower.includes("movement")) {
    return <Zap className="w-5 h-5 text-accent" />;
  }
  if (lower.includes("ai") || lower.includes("agent") || lower.includes("conversational") || lower.includes("assisted")) {
    return <Cpu className="w-5 h-5 text-accent" />;
  }
  if (lower.includes("billing") || lower.includes("payment") || lower.includes("transaction") || lower.includes("receipt")) {
    return <CreditCard className="w-5 h-5 text-accent" />;
  }
  if (lower.includes("security") || lower.includes("trust") || lower.includes("biometric") || lower.includes("encrypted")) {
    return <Shield className="w-5 h-5 text-accent" />;
  }
  if (lower.includes("level") || lower.includes("world") || lower.includes("dungeon") || lower.includes("environment") || lower.includes("jungle") || lower.includes("wildfire")) {
    return <Grid className="w-5 h-5 text-accent" />;
  }
  if (lower.includes("outage") || lower.includes("real-time") || lower.includes("live") || lower.includes("sync") || lower.includes("notification")) {
    return <Activity className="w-5 h-5 text-accent" />;
  }
  if (lower.includes("support") || lower.includes("chat") || lower.includes("inbox") || lower.includes("channel") || lower.includes("communication")) {
    return <MessageSquare className="w-5 h-5 text-accent" />;
  }
  if (lower.includes("narrative") || lower.includes("story") || lower.includes("experience") || lower.includes("empathy")) {
    return <BookOpen className="w-5 h-5 text-accent" />;
  }

  const fallbackIcons = [
    <Sparkles className="w-5 h-5 text-accent" />,
    <Layers className="w-5 h-5 text-accent" />,
    <Settings className="w-5 h-5 text-accent" />,
    <MousePointer className="w-5 h-5 text-accent" />,
  ];
  return fallbackIcons[index % fallbackIcons.length];
}

// Icon mapper for methods list
function getMethodIcon(label: string) {
  const lower = label.toLowerCase();
  if (lower.includes("engine") || lower.includes("multiplayer") || lower.includes("version") || lower.includes("scripting") || lower.includes("ai") || lower.includes("code")) {
    return <Code className="w-4 h-4 text-accent" />;
  }
  if (lower.includes("design") || lower.includes("system") || lower.includes("figma") || lower.includes("ui") || lower.includes("animation") || lower.includes("art")) {
    return <Layers className="w-4 h-4 text-accent" />;
  }
  if (lower.includes("research") || lower.includes("usability") || lower.includes("studies") || lower.includes("testing") || lower.includes("csat") || lower.includes("interview")) {
    return <BookOpen className="w-4 h-4 text-accent" />;
  }
  if (lower.includes("pm") || lower.includes("trello") || lower.includes("miro") || lower.includes("focus") || lower.includes("constraint") || lower.includes("scrum")) {
    return <Milestone className="w-4 h-4 text-accent" />;
  }
  return <Wrench className="w-4 h-4 text-accent" />;
}

export default function ProjectCaseStudy({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);
  if (!project || !project.case) notFound();

  const c = project.case;
  const cases = projects.filter((x) => x.case);
  const idx = cases.findIndex((x) => x.slug === project.slug);
  const prev = idx > 0 ? cases[idx - 1] : cases[cases.length - 1];
  const next = idx < cases.length - 1 ? cases[idx + 1] : cases[0];

  const isGame = project.category === "Game";

  // Visual variables mapping with dynamic light/dark modes
  // In Dark Mode: emerald-400 (green) is preserved
  // In Light Mode: text-accent (blue normal) is utilized
  const themeAccentClass = isGame ? "dark:text-emerald-400 text-accent" : "text-accent";
  const themeCardBorderClass = isGame 
    ? "dark:border-emerald-500/20 dark:hover:border-emerald-400 hover:border-accent border-accent/20" 
    : "border-bone/10 hover:border-bone/20";
  const themeGlowClass = isGame 
    ? "dark:shadow-[0_0_25px_-5px_rgba(16,185,129,0.15)] shadow-[0_0_25px_-5px_rgba(26,115,232,0.1)]" 
    : "shadow-[0_0_30px_-5px_rgba(255,255,255,0.03)]";

  return (
    <article className="relative pb-32 overflow-x-hidden isolate">
      
      {/* PREMIUM HIGH-FIDELITY ANIMATED BACKGROUND PATTERN VIDEO-LIKE LOOP */}
      <BackgroundPatternVideo isGame={isGame} />

      {/* BREADCRUMB & HEADER SECTION */}
      <header className="pt-36 md:pt-44 mx-auto max-w-[1400px] px-6 md:px-10">
        <Link 
          href="/projects" 
          className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-mute hover:text-bone transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
          <span>All Projects</span>
        </Link>

        {/* HERO SPLIT LAYOUT */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT COLUMN: SPECS PANEL */}
          <div className="lg:col-span-4 order-2 lg:order-1">
            <LiquidGlass 
              intensity="soft"
              rounded="rounded-2xl"
              className={`p-6 md:p-8 ${themeGlowClass}`}
            >
              <div className="flex items-center justify-between border-b border-bone/10 pb-4 mb-6">
                <h3 className="font-mono text-xs uppercase tracking-widest text-mute">Project Specs</h3>
                <span className={`h-2 w-2 rounded-full animate-pulse ${isGame ? "dark:bg-emerald-400 bg-accent" : "bg-bone"}`} />
              </div>

              {/* SPEC LIST */}
              <div className="space-y-5 font-sans">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-mute block mb-1">Title</span>
                  <span className="text-bone font-medium text-lg leading-tight">{project.title}</span>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-mute block mb-1">Category</span>
                    <span className="text-bone/90 text-sm inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-bone/5 border border-bone/10 font-mono text-xs uppercase">
                      {project.category}
                    </span>
                  </div>
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-mute block mb-1">Year</span>
                    <span className="text-bone/90 text-sm font-mono">{project.year}</span>
                  </div>
                </div>

                <div className="border-t border-bone/5 pt-4 space-y-4">
                  {c.meta && c.meta.map((m) => (
                    <div key={m.label} className="flex items-start gap-3">
                      <div className="p-1.5 rounded-lg bg-bone/5 border border-bone/10 mt-0.5">
                        {getMetaIcon(m.label)}
                      </div>
                      <div>
                        <span className="font-mono text-[9px] uppercase tracking-widest text-mute block">{m.label}</span>
                        <span className="text-bone/90 text-sm font-medium">{m.value}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTAS / DOWNLOADS */}
              {c.download && c.download.length > 0 && (
                <div className="mt-8 pt-6 border-t border-bone/10 space-y-3">
                  {c.download.map((d) => (
                    <a
                      key={d.href}
                      href={d.href}
                      target="_blank"
                      rel="noreferrer"
                      className={`group w-full flex items-center justify-between px-5 py-3 rounded-xl border text-sm font-medium transition-all duration-300 ${
                        isGame 
                          ? "dark:bg-emerald-500/10 dark:border-emerald-500/20 dark:hover:border-emerald-400 dark:hover:bg-emerald-500/20 dark:text-emerald-300 bg-accent/10 border-accent/20 hover:border-accent hover:bg-accent/20 text-accent"
                          : "bg-bone text-ink border-transparent hover:bg-accent hover:text-bone"
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        {isGame ? <Play className="w-4 h-4" /> : <ExternalLink className="w-4 h-4" />}
                        {d.label}
                      </span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  ))}
                </div>
              )}
            </LiquidGlass>
          </div>

          {/* RIGHT COLUMN: GIGANTIC TITLE & INTRO BLURB */}
          <div className="lg:col-span-8 order-1 lg:order-2">
            <div className="flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-widest text-accent mb-6">
              <span>01 / Case Study</span>
              <span className="text-mute">·</span>
              <span className="text-mute">{project.role}</span>
            </div>

            <h1 className="font-display tracking-tightest leading-[0.85] text-[12vw] sm:text-[9vw] lg:text-[7vw] font-semibold text-bone">
              {project.title}
              <span className={themeAccentClass}>.</span>
            </h1>

            <p className="mt-8 font-sans text-xl sm:text-2xl md:text-3xl leading-[1.35] tracking-tight text-bone/80 font-light border-l-2 border-accent/25 pl-6 md:pl-8">
              {project.blurb}
            </p>

            {/* OVERVIEW BRIEF */}
            {c.brief && (
              <SectionReveal className="mt-8">
                <h3 className="font-mono text-xs uppercase tracking-widest text-mute mb-3">Overview Brief</h3>
                <p className="text-bone/70 leading-relaxed font-sans text-base sm:text-lg max-w-4xl">
                  {c.brief}
                </p>
              </SectionReveal>
            )}
          </div>

        </div>
      </header>

      {/* HERO COVER IMAGE */}
      {c.cover && (
        <div className="mt-16 md:mt-24 mx-auto max-w-[1400px] px-6 md:px-10">
          <div className={`relative w-full aspect-[16/9] overflow-hidden rounded-2xl border ${isGame ? "dark:border-emerald-500/20 border-accent/20" : "border-bone/10"} bg-bone/5 group`}>
            <div className="absolute inset-0 bg-gradient-to-t from-ink/30 to-transparent z-10 pointer-events-none" />
            <Image
              src={c.cover}
              alt={`${project.title} Cover`}
              fill
              priority
              sizes="(max-width: 1400px) 100vw, 1400px"
              className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-[1.03]"
            />
          </div>
        </div>
      )}

      {/* INSIGHT & STRATEGIC GOAL DASHBOARD */}
      {(c.research || c.goal) && (
        <section className="mt-20 md:mt-32 mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* RESEARCH QUESTION */}
            {c.research && (
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-mute mb-6">
                    <span className="px-2 py-0.5 rounded bg-bone/5 border border-bone/10">02</span>
                    <span>Research Challenge</span>
                  </div>
                  <blockquote className="font-display italic text-2xl sm:text-3xl md:text-4xl leading-[1.25] tracking-tight text-bone/90 relative pl-4 border-l-4 border-accent">
                    “{c.research}”
                  </blockquote>
                </div>
              </div>
            )}

            {/* STRATEGIC GOAL */}
            {c.goal && (
              <div className="lg:col-span-5">
                <LiquidGlass 
                  intensity="soft"
                  rounded="rounded-2xl"
                  className={`p-6 md:p-8 h-full flex flex-col justify-between ${themeGlowClass}`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-2 p-2 rounded-xl bg-accent/10 border border-accent/20">
                        <Target className="w-5 h-5 text-accent" />
                      </div>
                      <span className="font-mono text-xs text-mute">Strategic Target</span>
                    </div>
                    <h4 className="font-display text-lg font-semibold text-bone mb-3">The Objective</h4>
                    <p className="text-bone/70 text-sm sm:text-base leading-relaxed">
                      {c.goal}
                    </p>
                  </div>
                  <div className="mt-6 flex items-center gap-2 font-mono text-[10px] text-mute border-t border-bone/5 pt-4">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Focus Area: UX Execution</span>
                  </div>
                </LiquidGlass>
              </div>
            )}

          </div>
        </section>
      )}

      {/* CORE FEATURES GRID */}
      {c.features && c.features.length > 0 && (
        <section className="mt-24 md:mt-36 mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-bone/10 pb-6 mb-12">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-mute mb-2">
                <span className="px-2 py-0.5 rounded bg-bone/5 border border-bone/10">03</span>
                <span>Product Mechanics</span>
              </div>
              <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tightest">Key Features</h2>
            </div>
            <p className="mt-2 sm:mt-0 font-mono text-[11px] uppercase tracking-widest text-mute">
              {c.features.length} Core Verticals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {c.features.map((f, i) => (
              <SectionReveal key={i}>
                <div 
                  className={`relative p-6 md:p-8 rounded-2xl border bg-bone/[0.02] transition-all duration-300 group hover:bg-bone/[0.04] ${themeCardBorderClass} ${themeGlowClass}`}
                >
                  {/* Decorative glowing back-dot */}
                  <span className={`absolute top-0 right-0 h-[80px] w-[80px] rounded-full blur-[40px] opacity-0 transition-opacity duration-500 group-hover:opacity-20 pointer-events-none ${
                    isGame ? "dark:bg-emerald-400 bg-accent" : "bg-accent"
                  }`} />
                  
                  <div className="flex items-start justify-between mb-8">
                    <div className={`p-3 rounded-xl border transition-colors duration-300 ${
                      isGame 
                        ? "dark:bg-emerald-500/5 dark:border-emerald-500/10 dark:group-hover:border-emerald-400 dark:group-hover:bg-emerald-500/10 bg-accent/5 border-accent/10 group-hover:border-accent group-hover:bg-accent/10" 
                        : "bg-bone/5 border-bone/10 group-hover:border-accent group-hover:bg-accent/5"
                    }`}>
                      {getFeatureIcon(f, i)}
                    </div>
                    <span className="font-mono text-xs text-mute group-hover:text-accent transition-colors duration-300">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <p className="font-sans text-bone/90 text-sm sm:text-base leading-relaxed tracking-tight group-hover:text-bone transition-colors duration-300">
                    {f}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </section>
      )}

      {/* TECH STACK & METHODS CARD DECK */}
      {c.methods && c.methods.length > 0 && (
        <section className="mt-24 md:mt-36 mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-bone/10 pb-6 mb-12">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-mute mb-2">
                <span className="px-2 py-0.5 rounded bg-bone/5 border border-bone/10">04</span>
                <span>Architecture</span>
              </div>
              <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tightest">Methods & Technology</h2>
            </div>
            <p className="mt-2 sm:mt-0 font-mono text-[11px] uppercase tracking-widest text-mute">
              Operational Stack
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {c.methods.map((m, i) => (
              <div 
                key={m.label} 
                className="border border-bone/10 bg-bone/[0.01] hover:bg-bone/[0.03] transition-colors rounded-2xl p-6 flex flex-col justify-between h-full group"
              >
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="p-1.5 rounded-lg bg-bone/5 border border-bone/10 group-hover:bg-accent/5 group-hover:border-accent/30 transition-colors">
                      {getMethodIcon(m.label)}
                    </div>
                    <p className="font-mono text-[10px] uppercase tracking-widest text-mute">{m.label}</p>
                  </div>
                  <p className="text-bone/90 font-medium text-base sm:text-lg pl-1">
                    {m.value}
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-1 font-mono text-[8px] text-mute uppercase tracking-widest border-t border-bone/5 pt-4">
                  <span>Stack Tier {String(i + 1).padStart(2, "0")}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* GAME WORLD / LEVELS TACTICAL DOSSIER */}
      {isGame && c.levels && c.levels.length > 0 && (
        <section className="mt-24 md:mt-36 mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-bone/10 pb-6 mb-12">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-mute mb-2">
                <span className="px-2 py-0.5 rounded bg-accent/10 dark:bg-emerald-500/10 border border-accent/20 dark:border-emerald-500/20 text-accent dark:text-emerald-400 font-bold">05</span>
                <span className="dark:text-emerald-400 text-accent">Tactical Telemetry</span>
              </div>
              <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tightest">World Index & Level Dossier</h2>
            </div>
            <p className="mt-2 sm:mt-0 font-mono text-[11px] uppercase tracking-widest dark:text-emerald-400 text-accent">
              {c.levels.length} Sectors Mapped
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {c.levels.map((l, idx) => (
              <SectionReveal key={l.name}>
                <div 
                  className="border border-accent/15 dark:border-emerald-500/15 bg-ink/[0.4] hover:bg-accent/[0.03] dark:hover:bg-emerald-500/[0.03] hover:border-accent/40 dark:hover:border-emerald-400/40 transition-all duration-300 rounded-xl p-6 h-full relative overflow-hidden group shadow-[0_0_15px_-5px_rgba(26,115,232,0.05)] dark:shadow-[0_0_15px_-5px_rgba(16,185,129,0.05)]"
                >
                  {/* Grid telemetry accents */}
                  <span className="absolute top-0 right-0 font-mono text-[9px] text-accent/30 dark:text-emerald-500/30 p-2 pointer-events-none">
                    SEC_CO-ORD: 52.{idx + 2} / -0.1{idx * 4}
                  </span>
                  
                  <div className="flex items-center gap-2.5 mb-4">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent dark:bg-emerald-400 animate-ping" />
                    <span className="h-1.5 w-1.5 rounded-full bg-accent dark:bg-emerald-400 absolute" />
                    <p className="font-mono text-[10px] text-accent dark:text-emerald-400 uppercase tracking-widest">Active Target {String(idx + 1).padStart(2, "0")}</p>
                  </div>
                  
                  <p className="font-display text-xl font-semibold tracking-tight text-bone group-hover:text-accent dark:group-hover:text-emerald-300 transition-colors">
                    {l.name}
                  </p>
                  <p className="mt-3 text-sm text-bone/60 leading-relaxed font-sans">
                    {l.note}
                  </p>

                  <div className="mt-6 border-t border-bone/5 dark:border-emerald-500/10 pt-4 flex items-center justify-between font-mono text-[9px] text-accent/40 dark:text-emerald-500/40">
                    <span>SYS_STATE: READY</span>
                    <span>SECTOR_0{idx + 1}</span>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </section>
      )}

      {/* GALLERY & IN MOTION CAROUSEL */}
      {c.gallery && c.gallery.length > 0 && (
        <section className="mt-24 md:mt-36 mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-bone/10 pb-6 mb-12">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-mute mb-2">
                <span className="px-2 py-0.5 rounded bg-bone/5 border border-bone/10">06</span>
                <span>Visual Dossier</span>
              </div>
              <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tightest">In Motion & Interfaces</h2>
            </div>
            <p className="mt-2 sm:mt-0 font-mono text-[11px] uppercase tracking-widest text-mute">
              Interactive Captures
            </p>
          </div>

          <Carousel images={c.gallery} altPrefix={`${project.title} screen`} aspect="aspect-[16/10]" />
        </section>
      )}

      {/* FOOTAGE / VIDEO EMBEDS WITH PREMIUM SCREEN BEZELS */}
      {c.videos && c.videos.length > 0 && (
        <section className="mt-24 md:mt-36 mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-bone/10 pb-6 mb-12">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-mute mb-2">
                <span className="px-2 py-0.5 rounded bg-bone/5 border border-bone/10">07</span>
                <span>Dossier Stream</span>
              </div>
              <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tightest">Real-time Gameplay Footage</h2>
            </div>
            <p className="mt-2 sm:mt-0 font-mono text-[11px] uppercase tracking-widest text-mute">
              Video Capture
            </p>
          </div>

          <div className="space-y-12 max-w-5xl mx-auto">
            {c.videos.map((v, i) => (
              <SectionReveal key={i}>
                <div className="relative group">
                  {/* Decorative telemetry monitor border */}
                  <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-bone/5 to-bone/10 blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200 pointer-events-none" />
                  
                  <div className="relative rounded-2xl border border-bone/10 bg-black overflow-hidden shadow-2xl">
                    <div className="bg-bone/5 px-4 py-2 border-b border-bone/10 flex items-center justify-between font-mono text-[9px] uppercase tracking-widest text-mute">
                      <span className="flex items-center gap-1.5">
                        <Tv className="w-3.5 h-3.5 text-accent" />
                        CAP_STREAM_0{i + 1}.MP4
                      </span>
                      <span>1080p // 60FPS</span>
                    </div>
                    <VideoEmbed src={v} title={`${project.title} — Video Stream ${i + 1}`} />
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </section>
      )}

      {/* IMPACT & OUTCOME RETROSPECTIVE */}
      {c.outcome && c.outcome.length > 0 && (
        <section className="mt-24 md:mt-36 mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-bone/10 pb-6 mb-12">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-mute mb-2">
                <span className="px-2 py-0.5 rounded bg-bone/5 border border-bone/10">08</span>
                <span>Retrospective</span>
              </div>
              <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tightest">Project Outcomes & Impact</h2>
            </div>
            <p className="mt-2 sm:mt-0 font-mono text-[11px] uppercase tracking-widest text-mute">
              Key Milestones
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {c.outcome.map((o, i) => (
              <SectionReveal key={i}>
                <div 
                  className={`p-6 rounded-2xl border bg-bone/[0.01] hover:bg-bone/[0.03] transition-all duration-300 flex gap-4 h-full relative group ${themeCardBorderClass}`}
                >
                  <div className="mt-1">
                    <div className="p-2 rounded-xl bg-accent/5 border border-accent/10 group-hover:bg-accent/10 transition-colors">
                      <CheckCircle className="w-5 h-5 text-accent" />
                    </div>
                  </div>
                  <div className="flex flex-col justify-between">
                    <div>
                      <span className="font-mono text-[10px] text-mute block mb-2 uppercase tracking-widest">
                        Milestone {String(i + 1).padStart(2, "0")}
                      </span>
                      <p className="text-bone/85 text-sm sm:text-base leading-relaxed font-sans">
                        {o}
                      </p>
                    </div>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </section>
      )}

      {/* DUAL-SPLIT NAVIGATION FOOTER */}
      <nav className="mt-36 mx-auto max-w-[1400px] px-6 md:px-10 border-t border-bone/10 pt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <Link 
            href={`/projects/${prev.slug}`} 
            className="group flex flex-col justify-between border border-bone/10 bg-bone/[0.01] hover:bg-bone/[0.03] hover:border-bone/20 p-8 rounded-2xl transition-all duration-300 h-full relative overflow-hidden"
          >
            <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-mute">
              <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
              <span>Previous Project</span>
            </div>
            <div className="mt-10">
              <span className="font-mono text-xs text-accent uppercase tracking-widest block mb-2">{prev.category}</span>
              <p className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-bone group-hover:text-accent transition-colors">
                {prev.title}
              </p>
            </div>
          </Link>

          <Link 
            href={`/projects/${next.slug}`} 
            className="group flex flex-col justify-between border border-bone/10 bg-bone/[0.01] hover:bg-bone/[0.03] hover:border-bone/20 p-8 rounded-2xl transition-all duration-300 text-right h-full relative overflow-hidden"
          >
            <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-mute self-end">
              <span>Next Project</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </div>
            <div className="mt-10">
              <span className="font-mono text-xs text-accent uppercase tracking-widest block mb-2">{next.category}</span>
              <p className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-bone group-hover:text-accent transition-colors">
                {next.title}
              </p>
            </div>
          </Link>

        </div>
      </nav>
    </article>
  );
}
