export const profile = {
  name: "Sarang Nikhade",
  title: "Sr. UI/UX & Game Designer",
  tagline: "Designing immersive, intuitive experiences across screens, worlds, and play.",
  about:
    "Senior UI/UX designer with a passion for mobile and game UI, VR, and user-centred design. I specialize in game prototyping, interaction systems, and turning ambiguous briefs into shipped, considered products.",
  email: "sarang.nikhade@outlook.com",
  phone: "+44 7586 505256",
  location: "United Kingdom",
  socials: {
    linkedin: "https://www.linkedin.com/in/sarangnikhade/",
    instagram: "https://www.instagram.com/i_am_sarangnikhade/",
    facebook: "https://www.facebook.com/sarangnikh/",
  },
};

export type Project = {
  slug: string;
  title: string;
  category: "UI/UX" | "Game";
  year: string;
  role: string;
  blurb: string;
  tools: string[];
  href: string;
  image: string;
};

export const projects: Project[] = [
  {
    slug: "synnefo-isp",
    title: "Synnefo ISP",
    category: "UI/UX",
    year: "2025",
    role: "Lead Product Designer",
    blurb: "Customer-facing portal for an internet service provider — plan management, billing, and support flows.",
    tools: ["Figma", "Design System", "Prototyping"],
    href: "https://www.figma.com/proto/FSpuIrCqBF0SyFwkzm3jwT/%F0%9F%93%B6-Synnefo-Main_Final_2025?node-id=4354-310",
    image: "https://static.wixstatic.com/media/e4d30e_f9b18c43ee684cca8a422a8f98d08cf2~mv2.png/v1/fill/w_286,h_335,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Hand%20and%20iPhone%2016%20Pro.png",
  },
  {
    slug: "facepe-payment",
    title: "FacePe Payment",
    category: "UI/UX",
    year: "2025",
    role: "Product Designer",
    blurb: "Face-authenticated payment experience focused on speed, trust, and accessibility at the point of sale.",
    tools: ["Figma", "User Research", "Motion"],
    href: "https://www.figma.com/proto/mRJizxFiSgl4XY1M3Tc8Cj/%F0%9F%98%8A-FacePe_New_2025?node-id=18-1459",
    image: "https://static.wixstatic.com/media/e4d30e_5f891200e6574edbbae7b12e9f9f726c~mv2.png/v1/crop/x_270,y_0,w_960,h_1125/fill/w_286,h_335,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Hand%20and%20iPhone%2016%20Pro_1.png",
  },
  {
    slug: "skliq",
    title: "SkliQ",
    category: "UI/UX",
    year: "2025",
    role: "Product Designer",
    blurb: "AI-assisted product surface — conversational flows, control panels, and onboarding patterns.",
    tools: ["Figma", "AI UX", "Prototyping"],
    href: "https://www.figma.com/proto/2hNbMxLSw64J47ChCBvx2k/%F0%9F%A4%96-SkliQ_2025?node-id=44-625",
    image: "https://static.wixstatic.com/media/e4d30e_23944eefa0264a33919b9de53c3d1950~mv2.png/v1/crop/x_270,y_0,w_960,h_1125/fill/w_286,h_335,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Hand%20and%20iPhone%2016%20Pro.png",
  },
  {
    slug: "wings-of-freedom",
    title: "Wings of Freedom VR",
    category: "Game",
    year: "2024",
    role: "Game & UX Designer",
    blurb: "VR flight experience exploring spatial UI, comfort-aware locomotion, and diegetic feedback.",
    tools: ["Unity", "VR", "Game UI"],
    href: "https://www.sarangnikhade.com/wings-of-freedom",
    image: "https://static.wixstatic.com/media/e4d30e_bb2df752579c44af8eb3a15ef0b7b10d~mv2.png/v1/fill/w_286,h_335,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/B1.png",
  },
  {
    slug: "eco-rescuers",
    title: "Eco-Rescuers",
    category: "Game",
    year: "2024",
    role: "Game Designer",
    blurb: "Mission-driven game built around environmental rescue mechanics and progression systems.",
    tools: ["Unity", "Level Design", "Systems"],
    href: "https://www.sarangnikhade.com/eco-rescuers",
    image: "https://static.wixstatic.com/media/e4d30e_6556a025fc2444839f4539962920542f~mv2.png/v1/crop/x_75,y_0,w_874,h_1024/fill/w_286,h_335,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/file.png",
  },
  {
    slug: "shattered-sky",
    title: "Shattered Sky",
    category: "Game",
    year: "2024",
    role: "Game Designer",
    blurb: "Aerial action prototype — combat feel, camera framing, and HUD legibility under motion.",
    tools: ["Unity", "Game Feel", "HUD"],
    href: "https://www.sarangnikhade.com/shatteredsky",
    image: "https://static.wixstatic.com/media/e4d30e_3c700ee61a4841409eb24bfb662a490e~mv2.jpg/v1/crop/x_7,y_0,w_535,h_627/fill/w_286,h_335,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/file.jpg",
  },
  {
    slug: "snow-mania",
    title: "Snow Mania",
    category: "Game",
    year: "2023",
    role: "Game Designer",
    blurb: "Arcade-style snow runner with tuned progression curves and short-session pacing.",
    tools: ["Unity", "Game Design", "Pacing"],
    href: "https://www.sarangnikhade.com/snowmania",
    image: "https://static.wixstatic.com/media/e4d30e_20f456c9fe734ba4b1629a07515dc9b2~mv2.png/v1/crop/x_538,y_0,w_750,h_879/fill/w_286,h_335,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/file.png",
  },
  {
    slug: "timetrick",
    title: "TimeTrick (Game Jam)",
    category: "Game",
    year: "2024",
    role: "Designer / Jam Team",
    blurb: "48-hour jam entry exploring a time-rewind mechanic and minimal control vocabulary.",
    tools: ["Unity", "Game Jam", "Rapid Prototyping"],
    href: "https://www.sarangnikhade.com/copy-of-4-snow-mania",
    image: "https://static.wixstatic.com/media/e4d30e_c04f5c913c4540078b4a6d9a9d83ccf1~mv2.png/v1/fill/w_286,h_335,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/file.png",
  },
];

export const experience = [
  { period: "2023 — Present", role: "Senior UI/UX Designer", note: "Product design across SaaS, fintech, and AI surfaces." },
  { period: "2017 — 2022", role: "Sr. Consultant", note: "Multi-client design consulting spanning mobile, web, and games." },
  { period: "2015 — 2017", role: "Graphics Designer", note: "Brand, motion, and multimedia foundations." },
];

export const education = [
  { period: "2024 — 2025", school: "Kingston University", degree: "M.A Game Development (Design)" },
  { period: "2011 — 2014", school: "Anitoons School of Animation", degree: "B.Sc Graphics & Multimedia" },
];

export const skills = [
  "Product Design", "UI/UX", "Game UI", "VR / Spatial UX", "Prototyping", "Wireframing",
  "User Research", "Design Systems", "Figma", "Unity", "Adobe CC", "Motion",
];
