import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projects, getProject } from "@/lib/data";
import VideoEmbed from "@/components/VideoEmbed";
import SectionReveal from "@/components/SectionReveal";
import Carousel from "@/components/Carousel";

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

export default function ProjectCaseStudy({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);
  if (!project || !project.case) notFound();

  const c = project.case;
  const cases = projects.filter((x) => x.case);
  const idx = cases.findIndex((x) => x.slug === project.slug);
  const prev = idx > 0 ? cases[idx - 1] : cases[cases.length - 1];
  const next = idx < cases.length - 1 ? cases[idx + 1] : cases[0];

  return (
    <article className="pb-32">
      {/* HEADER */}
      <header className="pt-36 md:pt-44 mx-auto max-w-[1400px] px-6 md:px-10">
        <Link href="/projects" className="font-mono text-xs uppercase tracking-widest text-mute hover:text-bone link-underline">
          ← All projects
        </Link>

        <div className="mt-10 flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-widest text-bone/70">
          <span className="px-3 py-1 rounded-full border hairline">{project.category}</span>
          <span>{project.year}</span>
          <span className="text-accent">·</span>
          <span>{project.role}</span>
        </div>

        <h1 className="mt-6 font-display tracking-tightest leading-[0.88] text-[14vw] md:text-[8.5vw]">
          {project.title}
          <span className="text-accent">.</span>
        </h1>

        <p className="mt-8 max-w-3xl font-display text-2xl md:text-3xl leading-[1.2] tracking-tightest text-bone/85">
          {project.blurb}
        </p>

        {c.download && c.download.length > 0 && (
          <div className="mt-10 flex flex-wrap gap-3">
            {c.download.map((d) => (
              <a
                key={d.href}
                href={d.href}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-bone text-ink font-medium hover:bg-accent transition-colors"
              >
                {d.label}
                <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            ))}
          </div>
        )}
      </header>

      {/* COVER */}
      {c.cover && (
        <div className="mt-16 md:mt-24 mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl border hairline bg-bone/5">
            <Image
              src={c.cover}
              alt={`${project.title} cover`}
              fill
              priority
              sizes="(max-width: 1400px) 100vw, 1400px"
              className="object-cover"
            />
          </div>
        </div>
      )}

      {/* META GRID */}
      {c.meta && (
        <section className="mt-20 md:mt-28 mx-auto max-w-[1400px] px-6 md:px-10 border-y hairline py-10 grid grid-cols-2 md:grid-cols-5 gap-6">
          {c.meta.map((m) => (
            <div key={m.label}>
              <p className="font-mono text-[10px] uppercase tracking-widest text-mute mb-2">{m.label}</p>
              <p className="text-bone/95 text-sm md:text-base">{m.value}</p>
            </div>
          ))}
        </section>
      )}

      {/* BRIEF */}
      {c.brief && (
        <section className="mt-20 md:mt-28 mx-auto max-w-[1400px] px-6 md:px-10 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-widest text-mute">01 — Overview</p>
          </div>
          <SectionReveal className="md:col-span-9">
            <p className="font-display text-2xl md:text-4xl leading-[1.2] tracking-tightest text-bone/90">{c.brief}</p>
          </SectionReveal>
        </section>
      )}

      {/* RESEARCH QUESTION */}
      {c.research && (
        <section className="mt-20 md:mt-28 mx-auto max-w-[1400px] px-6 md:px-10 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-widest text-mute">02 — Research</p>
          </div>
          <SectionReveal className="md:col-span-9">
            <blockquote className="font-display italic text-3xl md:text-5xl leading-[1.1] tracking-tightest text-bone/95">
              “{c.research}”
            </blockquote>
            {c.goal && <p className="mt-8 max-w-2xl text-bone/70 leading-relaxed">{c.goal}</p>}
          </SectionReveal>
        </section>
      )}

      {/* FEATURES */}
      {c.features && c.features.length > 0 && (
        <section className="mt-20 md:mt-28 mx-auto max-w-[1400px] px-6 md:px-10 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-widest text-mute">03 — Features</p>
          </div>
          <div className="md:col-span-9">
            <ul className="space-y-6">
              {c.features.map((f, i) => (
                <SectionReveal key={i}>
                  <li className="flex gap-6 border-b hairline pb-6">
                    <span className="font-mono text-xs text-accent pt-2">{String(i + 1).padStart(2, "0")}</span>
                    <p className="font-display text-xl md:text-2xl leading-snug tracking-tightest text-bone/95">{f}</p>
                  </li>
                </SectionReveal>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* METHODS */}
      {c.methods && c.methods.length > 0 && (
        <section className="mt-20 md:mt-28 mx-auto max-w-[1400px] px-6 md:px-10 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-widest text-mute">04 — Methods</p>
          </div>
          <div className="md:col-span-9 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {c.methods.map((m) => (
              <div key={m.label} className="border hairline rounded-2xl p-5">
                <p className="font-mono text-[10px] uppercase tracking-widest text-mute mb-2">{m.label}</p>
                <p className="text-bone/95">{m.value}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* LEVELS */}
      {c.levels && c.levels.length > 0 && (
        <section className="mt-20 md:mt-28 mx-auto max-w-[1400px] px-6 md:px-10 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-widest text-mute">05 — Worlds</p>
          </div>
          <div className="md:col-span-9 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {c.levels.map((l) => (
              <SectionReveal key={l.name}>
                <div className="border hairline rounded-2xl p-6 h-full">
                  <p className="font-display text-2xl tracking-tightest text-bone/95">{l.name}</p>
                  <p className="mt-2 text-sm text-bone/65">{l.note}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </section>
      )}

      {/* GALLERY — carousel for UI/UX, asymmetric grid for games */}
      {c.gallery && c.gallery.length > 0 && (
        <section className="mt-20 md:mt-28 mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="grid md:grid-cols-12 gap-10 mb-10">
            <div className="md:col-span-3">
              <p className="font-mono text-xs uppercase tracking-widest text-mute">06 — Gallery</p>
            </div>
            <div className="md:col-span-9">
              <h2 className="font-display text-4xl md:text-6xl tracking-tightest">In motion</h2>
            </div>
          </div>

          <Carousel images={c.gallery} altPrefix={`${project.title} screen`} aspect="aspect-[16/10]" />
        </section>
      )}

      {/* VIDEOS */}
      {c.videos && c.videos.length > 0 && (
        <section className="mt-20 md:mt-28 mx-auto max-w-[1400px] px-6 md:px-10 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-widest text-mute">07 — Footage</p>
          </div>
          <div className="md:col-span-9 space-y-6">
            {c.videos.map((v, i) => (
              <SectionReveal key={i}>
                <VideoEmbed src={v} title={`${project.title} — video ${i + 1}`} />
              </SectionReveal>
            ))}
          </div>
        </section>
      )}

      {/* OUTCOME */}
      {c.outcome && c.outcome.length > 0 && (
        <section className="mt-20 md:mt-28 mx-auto max-w-[1400px] px-6 md:px-10 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-widest text-mute">08 — Outcome</p>
          </div>
          <div className="md:col-span-9 space-y-4">
            {c.outcome.map((o, i) => (
              <SectionReveal key={i}>
                <div className="flex gap-4 border-b hairline pb-4">
                  <span className="font-mono text-xs text-accent pt-1.5">→</span>
                  <p className="text-bone/90 leading-relaxed">{o}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </section>
      )}

      {/* PREV/NEXT */}
      <nav className="mt-32 mx-auto max-w-[1400px] px-6 md:px-10 border-t hairline pt-10 grid grid-cols-2 gap-6">
        <Link href={`/projects/${prev.slug}`} className="group block">
          <p className="font-mono text-[10px] uppercase tracking-widest text-mute mb-2">← Previous</p>
          <p className="font-display text-2xl md:text-3xl tracking-tightest group-hover:text-accent transition-colors">{prev.title}</p>
        </Link>
        <Link href={`/projects/${next.slug}`} className="group block text-right">
          <p className="font-mono text-[10px] uppercase tracking-widest text-mute mb-2">Next →</p>
          <p className="font-display text-2xl md:text-3xl tracking-tightest group-hover:text-accent transition-colors">{next.title}</p>
        </Link>
      </nav>
    </article>
  );
}
