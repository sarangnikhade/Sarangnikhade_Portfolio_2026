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
  },
};

export type CaseStudy = {
  cover?: string;
  research?: string;
  goal?: string;
  brief?: string;
  features?: string[];
  outcome?: string[];
  levels?: { name: string; note: string }[];
  methods?: { label: string; value: string }[];
  meta?: { label: string; value: string }[];
  gallery?: string[];
  /** YouTube video IDs (or full URLs). Rendered as embedded previews. */
  videos?: string[];
  download?: { label: string; href: string }[];
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
  case?: CaseStudy;
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
    href: "/projects/synnefo-isp",
    image: "https://static.wixstatic.com/media/e4d30e_f9b18c43ee684cca8a422a8f98d08cf2~mv2.png/v1/fill/w_400,h_400,al_c,q_88,enc_avif,quality_auto/Hand%20and%20iPhone%2016%20Pro.png",
    case: {
      cover:
        "https://static.wixstatic.com/media/e4d30e_f9b18c43ee684cca8a422a8f98d08cf2~mv2.png/v1/fill/w_1400,h_780,al_c,q_90,enc_avif,quality_auto/Hand%20and%20iPhone%2016%20Pro.png",
      brief:
        "Synnefo is a customer-facing portal for an internet service provider, built to replace a fragmented mix of call-centre flows and PDF bills. The goal: a single, glanceable surface for plan management, billing, outages, and support.",
      research:
        "How do you make an ISP feel like a modern app — fast, trustworthy, never asking customers to call a hotline to change a plan?",
      goal:
        "Make every common task — view bill, upgrade plan, report an outage, talk to support — reachable in under three taps from day one of the customer journey.",
      features: [
        "Plan management with side-by-side upgrade comparisons and proration shown up-front.",
        "Real-time billing with payment history and one-tap auto-pay.",
        "Outage map and live ETA, paired with proactive push notifications.",
        "Multi-channel support — chat, ticket, scheduled callback — kept in one inbox.",
        "Personalised home with usage cards, alerts, and next-best-actions.",
      ],
      methods: [
        { label: "Design", value: "Figma" },
        { label: "System", value: "Tokens + component library" },
        { label: "Prototype", value: "Figma · interactive flows" },
        { label: "Research", value: "Stakeholder interviews · CSAT review" },
      ],
      meta: [
        { label: "Role", value: "Lead Product Designer" },
        { label: "Sector", value: "Telecom · ISP" },
        { label: "Platform", value: "iOS · Android · Web" },
        { label: "Year", value: "2025" },
        { label: "Status", value: "Interactive prototype" },
      ],
      gallery: [
        "https://static.wixstatic.com/media/e4d30e_f9b18c43ee684cca8a422a8f98d08cf2~mv2.png/v1/fill/w_1600,h_1000,al_c,q_90,enc_avif,quality_auto/Hand%20and%20iPhone%2016%20Pro.png",
        "https://static.wixstatic.com/media/e4d30e_f9b18c43ee684cca8a422a8f98d08cf2~mv2.png/v1/crop/x_0,y_200,w_2000,h_1400/fill/w_1600,h_1000,al_c,q_90,enc_avif,quality_auto/Hand%20and%20iPhone%2016%20Pro.png",
        "https://static.wixstatic.com/media/e4d30e_f9b18c43ee684cca8a422a8f98d08cf2~mv2.png/v1/crop/x_400,y_0,w_1600,h_1200/fill/w_1600,h_1000,al_c,q_90,enc_avif,quality_auto/Hand%20and%20iPhone%2016%20Pro.png",
      ],
      videos: [],
      download: [
        {
          label: "View Figma prototype",
          href: "https://www.figma.com/proto/FSpuIrCqBF0SyFwkzm3jwT/%F0%9F%93%B6-Synnefo-Main_Final_2025?node-id=4354-310",
        },
      ],
    },
  },
  {
    slug: "facepe-payment",
    title: "FacePe Payment",
    category: "UI/UX",
    year: "2025",
    role: "Product Designer",
    blurb: "Face-authenticated payment experience focused on speed, trust, and accessibility at the point of sale.",
    tools: ["Figma", "User Research", "Motion"],
    href: "/projects/facepe-payment",
    image: "https://static.wixstatic.com/media/e4d30e_5f891200e6574edbbae7b12e9f9f726c~mv2.png/v1/crop/x_270,y_0,w_960,h_960/fill/w_400,h_400,al_c,q_88,enc_avif,quality_auto/Hand%20and%20iPhone%2016%20Pro_1.png",
    case: {
      cover:
        "https://static.wixstatic.com/media/e4d30e_5f891200e6574edbbae7b12e9f9f726c~mv2.png/v1/fill/w_1400,h_780,al_c,q_90,enc_avif,quality_auto/Hand%20and%20iPhone%2016%20Pro_1.png",
      brief:
        "FacePe is a face-authenticated payment experience designed for the point of sale — built around sub-second authorisation, clear trust signals, and accessible fallbacks for users who can't or won't use card or phone.",
      research:
        "How do you replace card-tap with a face scan without sacrificing the trust signals shoppers rely on at the till?",
      goal:
        "Deliver a confident, transparent payment flow that handles success, failure, and retry in under four seconds end-to-end — at any merchant, in any lighting.",
      features: [
        "Sub-second face authorisation with continuous visual feedback during the scan.",
        "Trust scaffolding — encrypted, biometric-stored, never shared — surfaced at every step.",
        "Accessible fallback (PIN, OTP, card-tap) reachable from every screen.",
        "Receipt and transaction history built into the same flow, not buried in a menu.",
        "Multi-merchant onboarding tuned for ten-second setup at a new till.",
      ],
      methods: [
        { label: "Design", value: "Figma" },
        { label: "Research", value: "Field studies · merchant interviews" },
        { label: "Motion", value: "Microinteraction prototyping" },
        { label: "Accessibility", value: "WCAG audit · fallback flows" },
      ],
      meta: [
        { label: "Role", value: "Product Designer" },
        { label: "Sector", value: "Fintech · Biometric" },
        { label: "Platform", value: "POS terminal + companion app" },
        { label: "Year", value: "2025" },
        { label: "Status", value: "Interactive prototype" },
      ],
      gallery: [
        "https://static.wixstatic.com/media/e4d30e_5f891200e6574edbbae7b12e9f9f726c~mv2.png/v1/fill/w_1600,h_1000,al_c,q_90,enc_avif,quality_auto/Hand%20and%20iPhone%2016%20Pro_1.png",
        "https://static.wixstatic.com/media/e4d30e_5f891200e6574edbbae7b12e9f9f726c~mv2.png/v1/crop/x_0,y_200,w_1800,h_1200/fill/w_1600,h_1000,al_c,q_90,enc_avif,quality_auto/Hand%20and%20iPhone%2016%20Pro_1.png",
        "https://static.wixstatic.com/media/e4d30e_5f891200e6574edbbae7b12e9f9f726c~mv2.png/v1/crop/x_300,y_0,w_1500,h_1200/fill/w_1600,h_1000,al_c,q_90,enc_avif,quality_auto/Hand%20and%20iPhone%2016%20Pro_1.png",
      ],
      videos: [],
      download: [
        {
          label: "View Figma prototype",
          href: "https://www.figma.com/proto/mRJizxFiSgl4XY1M3Tc8Cj/%F0%9F%98%8A-FacePe_New_2025?node-id=18-1459",
        },
      ],
    },
  },
  {
    slug: "skliq",
    title: "SkliQ",
    category: "UI/UX",
    year: "2025",
    role: "Product Designer",
    blurb: "AI-assisted product surface — conversational flows, control panels, and onboarding patterns.",
    tools: ["Figma", "AI UX", "Prototyping"],
    href: "/projects/skliq",
    image: "https://static.wixstatic.com/media/e4d30e_23944eefa0264a33919b9de53c3d1950~mv2.png/v1/crop/x_270,y_0,w_960,h_960/fill/w_400,h_400,al_c,q_88,enc_avif,quality_auto/Hand%20and%20iPhone%2016%20Pro.png",
    case: {
      cover:
        "https://static.wixstatic.com/media/e4d30e_23944eefa0264a33919b9de53c3d1950~mv2.png/v1/fill/w_1400,h_780,al_c,q_90,enc_avif,quality_auto/Hand%20and%20iPhone%2016%20Pro.png",
      brief:
        "SkliQ is an AI-assisted product surface — conversational flows, control panels, and onboarding patterns designed to make a powerful assistant feel calm, capable, and steerable.",
      research:
        "How do you give users genuine control over an AI assistant without burying them in settings, prompts, and disclaimers?",
      goal:
        "Design a single orchestration surface where users can talk, browse, and tune in the same space — without context-switching between chat and dashboards.",
      features: [
        "Unified chat + control panel layout — the same screen for conversation and configuration.",
        "Inline tools for memory, sources, and response steering, surfaced where they're needed.",
        "Onboarding that teaches by doing — no documentation walls, no empty states.",
        "Trust scaffolding — what the AI saw, what it did, what it remembered, all visible.",
        "Tunable response controls (tone, depth, format) that persist across sessions.",
      ],
      methods: [
        { label: "Design", value: "Figma" },
        { label: "Pattern Library", value: "AI UX primitives" },
        { label: "Prototype", value: "Conversation flows · branching states" },
        { label: "Research", value: "Diary studies · usability testing" },
      ],
      meta: [
        { label: "Role", value: "Product Designer" },
        { label: "Sector", value: "AI · Productivity" },
        { label: "Platform", value: "Web · Responsive" },
        { label: "Year", value: "2025" },
        { label: "Status", value: "Interactive prototype" },
      ],
      gallery: [
        "https://static.wixstatic.com/media/e4d30e_23944eefa0264a33919b9de53c3d1950~mv2.png/v1/fill/w_1600,h_1000,al_c,q_90,enc_avif,quality_auto/Hand%20and%20iPhone%2016%20Pro.png",
        "https://static.wixstatic.com/media/e4d30e_23944eefa0264a33919b9de53c3d1950~mv2.png/v1/crop/x_0,y_200,w_1800,h_1200/fill/w_1600,h_1000,al_c,q_90,enc_avif,quality_auto/Hand%20and%20iPhone%2016%20Pro.png",
        "https://static.wixstatic.com/media/e4d30e_23944eefa0264a33919b9de53c3d1950~mv2.png/v1/crop/x_300,y_0,w_1500,h_1200/fill/w_1600,h_1000,al_c,q_90,enc_avif,quality_auto/Hand%20and%20iPhone%2016%20Pro.png",
      ],
      videos: [],
      download: [
        {
          label: "View Figma prototype",
          href: "https://www.figma.com/proto/2hNbMxLSw64J47ChCBvx2k/%F0%9F%A4%96-SkliQ_2025?node-id=44-625",
        },
      ],
    },
  },
  {
    slug: "wings-of-freedom",
    title: "Wings of Freedom",
    category: "Game",
    year: "2025",
    role: "Game Designer",
    blurb:
      "A competitive asymmetric multiplayer game built in Unity 6, integrating VR and PC players in a single shared environment.",
    tools: ["Unity 6", "Netcode", "Meta Quest 3", "Figma"],
    href: "/projects/wings-of-freedom",
    image: "https://static.wixstatic.com/media/e4d30e_bb2df752579c44af8eb3a15ef0b7b10d~mv2.png/v1/fill/w_286,h_335,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/B1.png",
    case: {
      cover:
        "https://static.wixstatic.com/media/e4d30e_f818458c0a9e4ed8bfbe2eb8677d2ce6~mv2.png/v1/fill/w_1200,h_700,al_c,q_90,enc_avif,quality_auto/Screenshot%202025-01-06%20220533.png",
      research:
        "How can games benefit from a multimodal VR+PC execution model? This project explores how integrating Virtual Reality and PC players in a shared competitive environment can enhance gameplay, create unique challenges, and balance asymmetric interactions.",
      goal:
        "Create a dynamic, fast-paced asymmetric experience where the VR Bird exploits immersive flight mechanics, the PC Hunter uses precision-based tracking, and both platforms' strengths combine into an intense, replayable, strategically deep game.",
      features: [
        "Asymmetric multiplayer — distinct playstyles per role, each demanding its own strategy.",
        "VR-specific flight mechanics using head tracking and motion controllers.",
        "First-person perspective on both platforms to deepen immersion.",
        "Balanced asymmetry — unique abilities tuned against each other rather than mirrored.",
        "Cross-platform sync between VR and PC over Netcode for GameObjects.",
      ],
      outcome: [
        "Working prototype with real-time VR↔PC crossplay.",
        "One fully designed Forest level (three more documented in the GDD).",
        "Smooth VR flight + grounded hunter movement validated through playtests.",
        "Refined control, balance, and mechanics through iterative user testing.",
      ],
      methods: [
        { label: "Engine", value: "Unity 6 (2024)" },
        { label: "Multiplayer", value: "Netcode for GameObjects" },
        { label: "VR", value: "XR Interaction Toolkit · Meta Quest 3" },
        { label: "Animation", value: "Mixamo" },
        { label: "UI", value: "Figma" },
        { label: "PM", value: "Trello · Miro" },
      ],
      meta: [
        { label: "Client", value: "Kingston University, London" },
        { label: "Role", value: "Game Designer" },
        { label: "Platform", value: "VR (Meta Quest 3) + PC" },
        { label: "Year", value: "2025" },
        { label: "Genre", value: "Competitive PvP · Asymmetric" },
      ],
      gallery: [
        "https://static.wixstatic.com/media/e4d30e_f818458c0a9e4ed8bfbe2eb8677d2ce6~mv2.png/v1/fill/w_1200,h_690,al_c,q_88,enc_avif,quality_auto/Screenshot%202025-01-06%20220533.png",
        "https://static.wixstatic.com/media/e4d30e_11d1475162f8490e83e4ef773bfcae3d~mv2.png/v1/fill/w_1200,h_690,al_c,q_88,enc_avif,quality_auto/Screenshot%202025-01-06%20212905.png",
        "https://static.wixstatic.com/media/e4d30e_7130e43958b74ae9b4445f73946afbd5~mv2.png/v1/fill/w_1200,h_690,al_c,q_88,enc_avif,quality_auto/Screenshot%202025-01-06%20231328.png",
        "https://static.wixstatic.com/media/e4d30e_50c6d3d58a564c14bbe968141dc0d7d3~mv2.png/v1/fill/w_1200,h_690,al_c,q_88,enc_avif,quality_auto/Screenshot%202025-01-06%20231346.png",
        "https://static.wixstatic.com/media/8bb438_3ae04589aef4480e89a24d7283c69798~mv2_d_2869_3586_s_4_2.jpg/v1/fit/w_820,h_1030,q_90,enc_avif,quality_auto/file.jpg",
        "https://static.wixstatic.com/media/e4d30e_4655e3689b16418db4956ef47b84821d~mv2.jpg/v1/fit/w_1200,h_830,q_90,enc_avif,quality_auto/file.jpg",
        "https://static.wixstatic.com/media/e4d30e_48e880bb495b418b857fe1ac76960b4d~mv2.jpg/v1/fit/w_1200,h_830,q_90,enc_avif,quality_auto/file.jpg",
      ],
      videos: [
        "https://www.youtube.com/watch?v=MEkAHu6UWu0",
        "https://www.youtube.com/watch?v=2Gx2OAHg5Ps",
        "https://www.youtube.com/watch?v=X6PQkAyHeo0",
      ],
      download: [
        { label: "Play on itch.io", href: "https://sarangnikhade.itch.io/wings-of-freedom-vr-pc" },
        { label: "Game Design Doc (PDF)", href: "https://www.sarangnikhade.com/_files/ugd/e4d30e_f6ddfb98ebff400788f41b1f53b8d107.pdf" },
      ],
    },
  },
  {
    slug: "eco-rescuers",
    title: "Eco-Rescuers: Jungle Guardians",
    category: "Game",
    year: "2024",
    role: "Level & Environment Designer",
    blurb:
      "A cooperative multiplayer game designed to raise awareness about climate change and environmental conservation.",
    tools: ["Unreal Engine 5", "GitHub", "Trello", "Miro"],
    href: "/projects/eco-rescuers",
    image: "https://static.wixstatic.com/media/e4d30e_6556a025fc2444839f4539962920542f~mv2.png/v1/crop/x_75,y_0,w_874,h_1024/fill/w_286,h_335,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/file.png",
    case: {
      cover:
        "https://static.wixstatic.com/media/e4d30e_96ea7a5703f84df5ae84409177113927~mv2.png/v1/fill/w_1200,h_700,al_c,q_90,enc_avif,quality_auto/file.png",
      brief:
        "Set in a jungle devastated by wildfires, players work together to extinguish fires, rescue injured animals, and restore habitats within a limited time. The project aligns with the UN Sustainable Development Goals: Climate Action (13), Life on Land (15), Good Health (3), and Partnerships for the Goals (17).",
      research:
        "How can video games be used as an interactive tool to educate players about climate crises and encourage teamwork in addressing environmental challenges?",
      goal:
        "Combine environmental storytelling with real-time gameplay challenges to inspire awareness and behavioural change through immersive learning.",
      features: [
        "Cooperative multiplayer for up to four players, built around team-based interactions.",
        "Expansive jungle level with fire zones, debris, and wildlife rescue areas.",
        "Dynamic effects for fire spread, vegetation regrowth, and wildlife movement.",
        "Sustainability framing — gameplay challenges mapped to UN SDG outcomes.",
      ],
      outcome: [
        "Playable prototype with dynamic fire spread, resource management, and restoration mechanics.",
        "Immersive Wildfire level integrating sustainability challenges into engaging play.",
        "Positive playtest feedback on the balance between education and entertainment.",
        "Foundation set for future expansions into other ecological-disaster scenarios.",
      ],
      methods: [
        { label: "Engine", value: "Unreal Engine 5" },
        { label: "Version Control", value: "GitHub" },
        { label: "Level Design", value: "Terrain sculpting + interactive environments" },
        { label: "PM", value: "Trello · Miro" },
      ],
      meta: [
        { label: "Client", value: "Kingston University, London" },
        { label: "Role", value: "Level, Environment Designer & Producer" },
        { label: "Platform", value: "PC (4 players)" },
        { label: "Year", value: "2024" },
        { label: "Genre", value: "Co-op · SDG Edutainment" },
      ],
      gallery: [
        "https://static.wixstatic.com/media/e4d30e_c2a1979a678746879759d8d4f06796cd~mv2.png/v1/fill/w_1200,h_690,al_c,q_88,enc_avif,quality_auto/Screenshot%202025-03-20%20225934.png",
        "https://static.wixstatic.com/media/e4d30e_b636baa93362497d99c52c362812dd7c~mv2.png/v1/fill/w_1200,h_690,al_c,q_88,enc_avif,quality_auto/Screenshot%202025-03-20%20225823.png",
        "https://static.wixstatic.com/media/e4d30e_854d137ebd964acab8d9631ca28672c1~mv2.png/v1/fit/w_1200,h_710,q_90,enc_avif,quality_auto/In-game%20Level%20Design.png",
        "https://static.wixstatic.com/media/e4d30e_700e8534559240c5afdddfa47cacf0e6~mv2.jpg/v1/fit/w_1400,h_680,q_90,enc_avif,quality_auto/DSP-Group%2013%20-%20Level%201.jpg",
        "https://static.wixstatic.com/media/e4d30e_2c601f833ce143918fe24ef0a88a3dee~mv2.png/v1/fill/w_1200,h_690,al_c,q_88,enc_avif,quality_auto/Trello%20Board.png",
        "https://static.wixstatic.com/media/e4d30e_1482d06982f04fecb02591ee18bc6e5e~mv2.jpg/v1/fill/w_1200,h_690,al_c,q_88,enc_avif,quality_auto/Initial%20Ideas.jpg",
      ],
      videos: [
        "https://www.youtube.com/watch?v=AFTQyF19YE8",
      ],
      download: [
        { label: "Play on itch.io", href: "https://sarangnikhade.itch.io/eco-rescuers" },
      ],
    },
  },
  {
    slug: "shattered-sky",
    title: "Shattered Sky",
    category: "Game",
    year: "2025",
    role: "Level, Environment & Developer",
    blurb:
      "A narrative-driven co-op game where two players, bound by a parasite, must overcome distrust and cultural barriers while exploring alien worlds.",
    tools: ["Unity 6", "Netcode", "Figma", "Photoshop", "Cinemachine"],
    href: "/projects/shattered-sky",
    image: "https://static.wixstatic.com/media/e4d30e_3c700ee61a4841409eb24bfb662a490e~mv2.jpg/v1/crop/x_7,y_0,w_535,h_627/fill/w_286,h_335,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/file.jpg",
    case: {
      cover:
        "https://static.wixstatic.com/media/e4d30e_4f6a9723c747419e9ef313d8ed353b8a~mv2.png/v1/fill/w_1200,h_700,al_c,q_90,enc_avif,quality_auto/file.png",
      research:
        "How can asymmetric design and communication barriers in co-op games foster player empathy, emergent storytelling, and collaborative problem-solving?",
      goal:
        "Encourage cooperation through deliberate miscommunication, explore themes of trust and unity through branching narrative, and blend environmental storytelling with co-op puzzles and resource progression.",
      features: [
        "Asymmetric co-op — Drayk controls the environment; Aevi wields telekinesis.",
        "Parasite mechanic — proximity-enforced collaboration; one dies, both die.",
        "Communication barriers — distorted voice, limited telepathy, gestures only.",
        "Narrative design with dual perspectives delivering conflicting information.",
        "Multiple endings — Unity, Betrayal, or Destruction — driven by trust and decisions.",
      ],
      levels: [
        { name: "Pyroterra", note: "Lava planet with collapsing paths and heat hazards." },
        { name: "Dunestorm", note: "Shifting sands and storms obscure movement and vision." },
        { name: "Tidalor", note: "Underwater moon — oxygen-based traversal challenges." },
        { name: "Cryonix", note: "Icy puzzles using light refraction and slippery terrain." },
        { name: "Remnara", note: "Earth-like ruins with stealth, enemy AI, and aggressive fauna." },
      ],
      methods: [
        { label: "Engine", value: "Unity 6" },
        { label: "Multiplayer", value: "Netcode for GameObjects" },
        { label: "AI", value: "NavMesh + State Machines" },
        { label: "Animation", value: "Mixamo" },
        { label: "UI", value: "Figma · Photoshop" },
        { label: "Cameras / FX", value: "Cinemachine · particles · shaders" },
      ],
      meta: [
        { label: "Client", value: "Kingston University, London" },
        { label: "Role", value: "Level, Environment & Developer" },
        { label: "Platform", value: "PC" },
        { label: "Year", value: "2025" },
        { label: "Genre", value: "Co-op · Narrative" },
      ],
      gallery: [
        "https://static.wixstatic.com/media/e4d30e_3d2bb5d0fe0a471c8923bc2c52bc5f49~mv2.png/v1/fill/w_1200,h_690,al_c,q_88,enc_avif,quality_auto/Picture6.png",
        "https://static.wixstatic.com/media/e4d30e_87ecd8f94e9c4a73b78fc6ec0dbbab91~mv2.png/v1/fill/w_1200,h_690,al_c,q_88,enc_avif,quality_auto/Picture11.png",
        "https://static.wixstatic.com/media/e4d30e_4994f7cc746849bc836842fcc9f6d563~mv2.jpg/v1/fit/w_760,h_1020,q_90,enc_avif,quality_auto/file.jpg",
        "https://static.wixstatic.com/media/e4d30e_9106acd9544a47c0861e19c7c0ac574d~mv2.jpeg/v1/fit/w_1400,h_550,q_90,enc_avif,quality_auto/file.jpeg",
        "https://static.wixstatic.com/media/e4d30e_e3da586902cc4e18ad9caa11f856c9d3~mv2.png/v1/fill/w_1200,h_690,al_c,q_88,enc_avif,quality_auto/Picture8.png",
        "https://static.wixstatic.com/media/e4d30e_f16ceaecc6d14d7386e0e40c9efae204~mv2.png/v1/fill/w_1200,h_690,al_c,q_88,enc_avif,quality_auto/Picture7.png",
        "https://static.wixstatic.com/media/e4d30e_dfefdd461d984f44973cd4b71cbd6a55~mv2.png/v1/fill/w_600,h_600,al_c,q_88,enc_avif,quality_auto/Screenshot%202025-05-25%20215820.png",
        "https://static.wixstatic.com/media/e4d30e_f2156e2227104c0e9d39a61a1e5d4a07~mv2.png/v1/fill/w_600,h_600,al_c,q_88,enc_avif,quality_auto/Screenshot%202025-05-25%20215848.png",
        "https://static.wixstatic.com/media/e4d30e_ee546af0b08142e4aaebf9c49a3e59df~mv2.png/v1/fill/w_600,h_600,al_c,q_88,enc_avif,quality_auto/Screenshot%202025-05-25%20215906.png",
        "https://static.wixstatic.com/media/e4d30e_4c2c912435a2423885ba284f94cc69b2~mv2.png/v1/fill/w_600,h_600,al_c,q_88,enc_avif,quality_auto/Screenshot%202025-05-25%20215924.png",
        "https://static.wixstatic.com/media/e4d30e_426da4fd958f4669bd66090deef6be26~mv2.png/v1/fill/w_600,h_600,al_c,q_88,enc_avif,quality_auto/Screenshot%202025-05-25%20215940.png",
      ],
      videos: [
        "https://www.youtube.com/watch?v=qN8J74jxgUA",
      ],
      download: [{ label: "Play on itch.io", href: "https://sarangnikhade.itch.io/shatters-sky" }],
    },
  },
  {
    slug: "snow-mania",
    title: "Snow Mania",
    category: "Game",
    year: "2023",
    role: "Game Designer",
    blurb:
      "An arcade-style snow runner with tuned progression curves and short-session pacing — built for replayable, mobile-friendly fun.",
    tools: ["Unity", "C#", "Mobile"],
    href: "/projects/snow-mania",
    image: "https://static.wixstatic.com/media/e4d30e_20f456c9fe734ba4b1629a07515dc9b2~mv2.png/v1/crop/x_538,y_0,w_750,h_879/fill/w_286,h_335,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/file.png",
    case: {
      cover:
        "https://static.wixstatic.com/media/e4d30e_20f456c9fe734ba4b1629a07515dc9b2~mv2.png/v1/fill/w_1200,h_700,al_c,q_90,enc_avif,quality_auto/file.png",
      brief:
        "Snow Mania is an arcade-style snow runner designed for short, replayable sessions. The focus was on tuning the progression curve, ramping difficulty smoothly, and squeezing satisfying juice from a tight control set.",
      goal:
        "Deliver a snack-sized arcade experience with a one-button control language, escalating obstacle density, and a progression loop that keeps players in the 30–90 second 'one more run' window.",
      features: [
        "Single-input control language — accessible on mobile and desktop alike.",
        "Procedural obstacle pacing tuned for fair, escalating difficulty.",
        "Game-feel polish — particles, hit-stop, screen shake, and audio cues.",
        "Lightweight progression loop optimised for short sessions.",
      ],
      methods: [
        { label: "Engine", value: "Unity" },
        { label: "Scripting", value: "C#" },
        { label: "Focus", value: "Game feel · pacing · tuning" },
      ],
      meta: [
        { label: "Role", value: "Game Designer" },
        { label: "Platform", value: "Mobile / PC" },
        { label: "Year", value: "2023" },
        { label: "Genre", value: "Arcade · Endless Runner" },
      ],
      gallery: [],
      videos: [
        "https://youtu.be/b2YK_JwqsZ4",
      ],
      download: [
        { label: "Game Design Doc (PDF)", href: "https://www.sarangnikhade.com/_files/ugd/e4d30e_a3f9efeb28a94a81a10eb2e4528865af.pdf" }
      ],
    },
  },
  {
    slug: "timetrick",
    title: "TimeTrick",
    category: "Game",
    year: "2025",
    role: "Mechanics & Level Design",
    blurb:
      "A 7-day game jam puzzle-platformer where the level resets every 60 seconds with subtle, unpredictable changes each loop.",
    tools: ["Unity 6", "Game Jam", "Rapid Prototyping"],
    href: "/projects/timetrick",
    image: "https://static.wixstatic.com/media/e4d30e_c04f5c913c4540078b4a6d9a9d83ccf1~mv2.png/v1/fill/w_286,h_335,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/file.png",
    case: {
      cover:
        "https://static.wixstatic.com/media/e4d30e_c04f5c913c4540078b4a6d9a9d83ccf1~mv2.png/v1/fill/w_1200,h_700,al_c,q_90,enc_avif,quality_auto/file.png",
      brief:
        "Built for the AprilFool's Game Jam in 7 days, TimeTrick is a side-scrolling puzzle-platformer that quietly mutates between loops. Each 60-second reset changes one or two details — testing whether the player noticed.",
      research:
        "How can a subtly changing time loop be used to deceive players and challenge their memory?",
      goal:
        "Reward observation and memory through small, carefully chosen lies — small enough to feel uncanny rather than unfair.",
      features: [
        "60-second loop with subtle inter-loop mutations.",
        "Puzzle-platformer core layered with deception mechanics.",
        "Limited-time jam scope tightly constrained to a single tuned level.",
      ],
      outcome: [
        "Shipped within the 7-day jam window.",
        "Published on itch.io with playable build and feedback collection.",
      ],
      methods: [
        { label: "Engine", value: "Unity 6 (2024)" },
        { label: "Focus", value: "Mechanics · Level Design" },
        { label: "Constraint", value: "7-day jam" },
      ],
      meta: [
        { label: "Client", value: "AprilFool's Game Jam" },
        { label: "Role", value: "Mechanics, Level Design" },
        { label: "Platform", value: "PC (Single Player)" },
        { label: "Year", value: "2025" },
        { label: "Genre", value: "Puzzle-Platformer · Time Loop" },
      ],
      gallery: [
        "https://static.wixstatic.com/media/e4d30e_0a1466e5964345aeb2b6961fb5979214~mv2.png/v1/fill/w_1200,h_690,al_c,q_88,enc_avif,quality_auto/Screenshot%202025-04-12%20105847.png",
        "https://static.wixstatic.com/media/e4d30e_c04f5c913c4540078b4a6d9a9d83ccf1~mv2.png/v1/fill/w_1200,h_690,al_c,q_88,enc_avif,quality_auto/Screenshot%202025-04-12%20105903.png",
        "https://static.wixstatic.com/media/e4d30e_654faeb6bb9c4706ae7c9c0753aeed23~mv2.png/v1/fill/w_1200,h_690,al_c,q_88,enc_avif,quality_auto/Screenshot%202025-04-12%20105924.png",
        "https://static.wixstatic.com/media/e4d30e_4a01ae9061fc4cfd849f36a727585afd~mv2.png/v1/fill/w_1200,h_690,al_c,q_88,enc_avif,quality_auto/Screenshot%202025-04-12%20110109.png",
        "https://static.wixstatic.com/media/8bb438_3ae04589aef4480e89a24d7283c69798~mv2_d_2869_3586_s_4_2.jpg/v1/fit/w_820,h_1030,q_90,enc_avif,quality_auto/file.jpg",
        "https://static.wixstatic.com/media/e4d30e_4655e3689b16418db4956ef47b84821d~mv2.jpg/v1/fit/w_1200,h_830,q_90,enc_avif,quality_auto/file.jpg",
      ],
      videos: [],
      download: [{ label: "Play on itch.io", href: "https://sarangnikhade.itch.io/" }],
    },
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

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
