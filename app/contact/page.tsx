"use client";

import { useState } from "react";
import { profile } from "@/lib/data";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Project enquiry — ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section className="pt-40 pb-32 mx-auto max-w-[1400px] px-6 md:px-10 grid md:grid-cols-12 gap-12">
      <div className="md:col-span-5">
        <p className="font-mono text-xs uppercase tracking-widest text-accent mb-6">Get in touch</p>
        <h1 className="font-display text-6xl md:text-8xl leading-[0.9] tracking-tightest">
          Say<br />
          <span className="italic text-bone/60">hello</span>
          <span className="text-accent">.</span>
        </h1>
        <p className="mt-8 max-w-md text-bone/70">
          Open to senior product design and game design roles, contracts, and collaborations.
          Reply window is usually under 24 hours.
        </p>
        <div className="mt-12 space-y-4 text-sm">
          <div>
            <p className="text-mute uppercase tracking-widest text-xs mb-1">Email</p>
            <a href={`mailto:${profile.email}`} className="link-underline text-lg">{profile.email}</a>
          </div>
          <div>
            <p className="text-mute uppercase tracking-widest text-xs mb-1">Phone</p>
            <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="link-underline text-lg">{profile.phone}</a>
          </div>
          <div>
            <p className="text-mute uppercase tracking-widest text-xs mb-1">Based in</p>
            <p className="text-lg">{profile.location}</p>
          </div>
          <div className="flex gap-6 pt-4">
            <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" className="link-underline">LinkedIn</a>
          </div>
        </div>
      </div>

      <div className="md:col-span-7 md:pl-12">
        <form onSubmit={onSubmit} className="space-y-8">
          <Field label="Your name" required>
            <input
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="field-input"
              placeholder="Ada Lovelace"
            />
          </Field>
          <Field label="Email" required>
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="field-input"
              placeholder="you@studio.com"
            />
          </Field>
          <Field label="What's the project?" required>
            <textarea
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="field-input resize-none"
              placeholder="A short brief — scope, timeline, what success looks like."
            />
          </Field>
          <button
            type="submit"
            className="group inline-flex items-center gap-3 px-7 py-4 rounded-full bg-accent text-ink font-medium hover:bg-bone transition-colors"
          >
            Send message
            <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
          </button>
          {sent && (
            <p className="text-sm text-bone/60">
              Opening your mail client… if nothing happened, write to{" "}
              <a className="link-underline text-accent" href={`mailto:${profile.email}`}>{profile.email}</a>.
            </p>
          )}
        </form>
      </div>

      <style jsx>{`
        :global(.field-input) {
          width: 100%;
          background: transparent;
          border: 0;
          border-bottom: 1px solid rgba(245, 241, 234, 0.18);
          padding: 0.75rem 0;
          color: #f5f1ea;
          font-size: 1.05rem;
          outline: none;
          transition: border-color 300ms;
        }
        :global(.field-input:focus) {
          border-color: #c8ff3e;
        }
        :global(.field-input::placeholder) {
          color: rgba(245, 241, 234, 0.3);
        }
      `}</style>
    </section>
  );
}

function Field({ label, children, required }: { label: string; children: React.ReactNode; required?: boolean }) {
  return (
    <label className="block">
      <span className="block font-mono text-xs uppercase tracking-widest text-mute mb-2">
        {label} {required && <span className="text-accent">*</span>}
      </span>
      {children}
    </label>
  );
}
