import Link from "next/link";
import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t hairline mt-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-16 grid gap-12 md:grid-cols-12">
        <div className="md:col-span-6">
          <p className="font-display text-5xl md:text-7xl leading-[0.95] tracking-tightest">
            Let&apos;s build<br /> something good.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 mt-8 px-6 py-3 rounded-full bg-accent text-ink font-medium hover:bg-bone transition-colors"
          >
            Start a project <span aria-hidden>→</span>
          </Link>
        </div>
        <div className="md:col-span-3 text-sm space-y-3">
          <p className="text-mute uppercase tracking-widest text-xs">Contact</p>
          <a href={`mailto:${profile.email}`} className="block link-underline">{profile.email}</a>
          <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="block link-underline">{profile.phone}</a>
          <p className="text-mute">{profile.location}</p>
        </div>
        <div className="md:col-span-3 text-sm space-y-3">
          <p className="text-mute uppercase tracking-widest text-xs">Elsewhere</p>
          <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" className="block link-underline">LinkedIn</a>
          <a href={profile.socials.instagram} target="_blank" rel="noreferrer" className="block link-underline">Instagram</a>
          <a href={profile.socials.facebook} target="_blank" rel="noreferrer" className="block link-underline">Facebook</a>
        </div>
      </div>
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 pb-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-mute">
        <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <p className="font-mono">v2.0 · built with care</p>
      </div>
    </footer>
  );
}
