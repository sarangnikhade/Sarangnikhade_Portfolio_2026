import Image from "next/image";
import type { Project } from "@/lib/data";

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <a
      href={project.href}
      target="_blank"
      rel="noreferrer"
      className="group block border-t hairline py-6 md:py-8"
    >
      <div className="grid grid-cols-12 gap-4 md:gap-6 items-center">
        {/* number */}
        <div className="col-span-2 md:col-span-1 font-mono text-xs text-mute">
          {String(index + 1).padStart(2, "0")}
        </div>

        {/* thumbnail */}
        <div className="col-span-3 md:col-span-2">
          <div className="relative w-full aspect-[4/5] overflow-hidden rounded-lg border hairline bg-bone/5">
            <Image
              src={project.image}
              alt={`${project.title} thumbnail`}
              fill
              sizes="(max-width: 768px) 25vw, 160px"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              style={{ filter: "grayscale(1) contrast(1.05) brightness(0.95)" }}
            />
          </div>
        </div>

        {/* title + blurb */}
        <div className="col-span-7 md:col-span-5">
          <h3 className="font-display text-2xl md:text-5xl tracking-tightest leading-[1] transition-transform duration-500 group-hover:-translate-y-0.5">
            {project.title}
          </h3>
          <p className="mt-2 md:mt-3 text-bone/65 text-sm md:text-base max-w-xl line-clamp-2">
            {project.blurb}
          </p>
        </div>

        {/* role + tools */}
        <div className="hidden md:block md:col-span-2 text-sm text-mute">
          <p className="text-bone/90">{project.role}</p>
          <p className="mt-1 text-xs">{project.tools.join(" · ")}</p>
        </div>

        {/* category */}
        <div className="hidden md:flex md:col-span-1 text-xs">
          <span className="inline-block px-2.5 py-1 rounded-full border hairline text-mute">
            {project.category}
          </span>
        </div>

        {/* year */}
        <div className="hidden md:block md:col-span-1 text-right font-mono text-sm text-mute">
          {project.year}
        </div>
      </div>

      {/* mobile meta row */}
      <div className="md:hidden mt-3 ml-[16.66%] flex items-center gap-3 text-xs text-mute">
        <span className="px-2 py-0.5 rounded-full border hairline">{project.category}</span>
        <span className="font-mono">{project.year}</span>
        <span>· {project.role}</span>
      </div>
    </a>
  );
}
