# Sarang Nikhade — Portfolio v2

Futuristic, minimal, scroll-driven portfolio built with **Next.js 14**, **React Three Fiber**, **Lenis**, and **Tailwind CSS**.

## Stack
- Next.js 14 (App Router) + TypeScript
- React Three Fiber + drei (3D hero)
- Lenis (buttery smooth scrolling)
- Tailwind CSS (dark, editorial design system)
- Framer Motion ready

## Pages
- `/` — one-page experience: 3D hero, marquee, about, capabilities, selected work, trajectory
- `/projects` — filterable index (All / UI/UX / Game)
- `/contact` — info + form (opens email client)

## Run

```bash
cd portfolio-next
npm install
npm run dev
```

Open http://localhost:3000

## Build & deploy

```bash
npm run build
npm start
```

Drop into **Vercel** for zero-config deploy — it auto-detects Next.js.

## Customise
- All content: [lib/data.ts](lib/data.ts) — profile, projects, experience, skills
- Colors / fonts: [tailwind.config.ts](tailwind.config.ts) and [app/globals.css](app/globals.css)
- 3D hero: [components/Hero3D.tsx](components/Hero3D.tsx) — swap the `MorphingShape` for any geometry or GLB
- Smooth scroll feel: tweak `duration` / `easing` in [components/SmoothScroll.tsx](components/SmoothScroll.tsx)

## Notes
- The hero uses a procedural distorted icosahedron + particle field — no asset files required.
- The contact form uses a `mailto:` handoff (no backend). Swap for a Formspree/Resend endpoint when ready.
- Old static site is preserved at [../Sarang_Portfolio](../Sarang_Portfolio).
