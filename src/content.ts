export type ProjectStatus = "Live" | "Beta" | "Prototype";

export interface Project {
  slug: string;
  title: string;
  status: ProjectStatus;
  pitch: string;
  stack: string[];
  github?: string;
  live?: string;
  body: string[];
}

export interface Experience {
  company: string;
  role: string;
  type: string;
  dates: string;
  detail: string;
}

export const PROFILE = {
  name: "Priyanshu Thakare",
  role: "Full-Stack Developer & AI Engineer",
  location: "Pune, India",
  avatar: "https://github.com/priyanshuthakare.png",
  bio: "I'm Priyanshu Thakare, a full-stack developer and AI engineer focused on shipping production web products that are fast, dependable, and maintainable under real usage. I work across React, Next.js, Node.js, Python, and modern cloud tooling, with hands-on delivery experience in AI automations, real-time systems, and blockchain-backed workflows.",
  cal: "https://cal.com/priyanshuthakare",
  email: "mailto:priyanshuthakare@zohomail.in",
  socials: [
    { label: "GitHub", href: "https://github.com/priyanshuthakare" },
    { label: "LinkedIn", href: "https://linkedin.com/in/priyaannsshhu" },
    { label: "X", href: "https://x.com/priyaannsshhu" },
  ],
  quote: {
    text: "The first principle is that you must not fool yourself — and you are the easiest person to fool.",
    attribution: "Richard Feynman",
  },
};

export const PROJECTS: Project[] = [
  {
    slug: "ayurchain",
    title: "Ayurchain",
    status: "Beta",
    pitch:
      "Blockchain-backed Ayurvedic supply tracking with QR verification from source to shelf.",
    stack: ["Blockchain", "Python", "AI", "Full-Stack"],
    live: "https://ayurchain-beta.vercel.app/",
    body: [
      "Ayurchain is a traceability pipeline for Ayurvedic raw materials where every transfer event is written as an immutable record and mapped to a verified lot timeline. The system pairs a Next.js frontend with API orchestration in Node.js, and pushes provenance-critical state changes to the chain as blockchain event writes. QR lookups resolve each product batch to its full historical chain of custody.",
      "The platform enforces write validation at every handoff, so distributors cannot submit incomplete transitions, and it exposes deterministic read views for auditors and buyers. The hard part was not the ledger writes — it was keeping the read path honest: event ordering is normalized at ingestion so timelines render with zero ordering gaps across multi-step transfers.",
      "In controlled internal demos, scan-to-history responses held under 450ms median latency for cached batches. The current beta is stable for demo traffic; the next milestone is hardening the ingestion layer against out-of-order events from low-connectivity field devices.",
    ],
  },
  {
    slug: "stability-os",
    title: "Stability OS",
    status: "Prototype",
    pitch:
      "Behavior-adaptive productivity OS that changes digital environments from live user signals.",
    stack: ["React", "Vite", "Capacitor", "Supabase"],
    github: "https://github.com/priyanshuthakare/System-OS",
    body: [
      "Stability OS is a behavior-regulation framework that treats app usage, session friction, and self-reported state as first-class control signals. The architecture combines a React + Vite client shell with Capacitor for cross-platform runtime behavior, and Supabase for event persistence, rule evaluation inputs, and adaptive state snapshots.",
      "The core loop ingests interaction events, evaluates intervention rules, and applies environment shifts — UI constraints, task pacing, contextual prompts — without requiring manual mode changes. The deliberate design choice was making every intervention auditable: full deterministic replay support means outcomes can be reproduced and inspected during iteration.",
      "In local scenario tests, the system processed 1,200+ interaction events per session with no dropped state transitions. As a prototype it validates the control loop; the open question is rule authoring — interventions are only as good as the heuristics behind them.",
    ],
  },
  {
    slug: "appointment-system",
    title: "Appointment System",
    status: "Live",
    pitch:
      "Real-time doctor-patient scheduling with payments, AI assistance, and dual-role portals.",
    stack: ["React", "Node.js", "PostgreSQL", "Socket.IO", "Gemini"],
    live: "https://youtu.be/L9kw-WZggKA",
    body: [
      "Appointment System is a dual-portal architecture: patients discover, book, and pay, while providers manage availability, queues, and consultation flow from a dedicated operational surface. The stack is React on the client, Node.js services for booking and payments, PostgreSQL for transactional consistency, and Socket.IO for real-time state propagation across active clients.",
      "The failure mode that drove the design is double-booking under concurrency. Slot ownership is validated server-side before payment confirmation, and slot state updates are pushed immediately to every active client. A Gemini-powered chatbot handles triage before booking, cutting average pre-booking input time by roughly 30%.",
      "In end-to-end test runs with concurrent booking simulation, the system sustained 100+ overlapping slot operations without a single double-booking conflict. Payments and booking state are kept in one Postgres transaction so a failed payment can never leave a phantom reservation.",
    ],
  },
];

export const EXPERIENCE: Experience[] = [
  {
    company: "Entrepreneurship Cell, PRMIT&R",
    role: "Vice President",
    type: "Leadership",
    dates: "08.2025 – present",
    detail:
      "Led a 45-member team running events with 500+ participants; mentored students in Python, AI, and cloud; led the contingent to a top-25 finish at NEC'25, IIT Bombay, out of 9,000 teams.",
  },
  {
    company: "Growth Magnet Studio",
    role: "AI & Automation Intern",
    type: "Internship",
    dates: "12.2024 – 02.2025",
    detail:
      "Built n8n automation workflows that moved repetitive client-pipeline work off manual effort and into repeatable, observable flows.",
  },
  {
    company: "Technominds IP Solutions",
    role: "Business Analyst Intern",
    type: "Internship",
    dates: "10.2024 – present",
    detail:
      "Analyzed IP and business data to support client decision-making on filings and strategy.",
  },
];

export const SKILLS: string[] = [
  "TypeScript",
  "JavaScript",
  "Python",
  "React",
  "Next.js",
  "Node.js",
  "PostgreSQL",
  "Supabase",
  "Redis",
  "Docker",
  "Prisma",
  "Tailwind CSS",
  "Bun",
  "Git",
];

export function getProject(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
