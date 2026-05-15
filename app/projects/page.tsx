"use client";

import { useState } from "react";
import { projects } from "@/lib/data";
import ProjectCard from "@/components/ProjectCard";
import SectionReveal from "@/components/SectionReveal";

type Filter = "All" | "UI/UX" | "Game";

export default function ProjectsPage() {
  const [filter, setFilter] = useState<Filter>("All");
  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);
  const filters: Filter[] = ["All", "UI/UX", "Game"];

  return (
    <>
      <section className="pt-40 pb-16 mx-auto max-w-[1400px] px-6 md:px-10">
        <p className="font-mono text-xs uppercase tracking-widest text-accent mb-6">Index of work</p>
        <h1 className="font-display text-6xl md:text-[10vw] leading-[0.9] tracking-tightest">
          Projects<span className="italic text-bone/60">.</span>
        </h1>
        <p className="mt-8 max-w-xl text-bone/70">
          A working archive of shipped products, interactive systems, and explorations across UI/UX,
          game design, and VR. Click any title to view the case.
        </p>
        <div className="mt-12 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-5 py-2 rounded-full border hairline text-sm transition-colors ${
                filter === f ? "bg-bone text-ink border-bone" : "text-bone/80 hover:border-bone/50"
              }`}
            >
              {f}
              <span className="ml-2 text-xs opacity-60">
                {f === "All" ? projects.length : projects.filter((p) => p.category === f).length}
              </span>
            </button>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 md:px-10 pb-20">
        {filtered.map((p, i) => (
          <SectionReveal key={p.slug}>
            <ProjectCard project={p} index={i} />
          </SectionReveal>
        ))}
        {filtered.length === 0 && <p className="text-mute py-20 text-center">No projects in this category yet.</p>}
      </section>
    </>
  );
}
