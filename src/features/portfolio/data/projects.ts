import type { Project } from "../types/projects"

export const PROJECTS: Project[] = [
  {
    id: "ayurchain",
    title: "Ayurchain",
    period: {
      start: "01.2025",
    },
    link: "https://ayurchain-beta.vercel.app/",
    summary:
      "Blockchain-backed Ayurvedic supply tracking with QR verification from source to shelf.",
    status: "Beta",
    skills: ["Blockchain", "Python", "AI", "Full-Stack"],
    description:
      "Ayurchain is built as a traceability pipeline for Ayurvedic raw materials where every transfer event is written as an immutable record and mapped to a verified lot timeline. The system uses a Next.js frontend, API orchestration in Node.js, and blockchain event writes for provenance-critical state changes, with QR lookups resolving each product batch to its historical chain of custody.\n\nThe platform enforces write validation at each handoff so distributors cannot submit incomplete transitions, and it provides deterministic read views for auditors and buyers. In controlled internal demos, scan-to-history responses stayed under 450ms median latency for cached batches, and batch event timelines were rendered with zero ordering gaps across multi-step transfers.",
    isExpanded: true,
  },
  {
    id: "stability-os",
    title: "Stability OS",
    period: {
      start: "12.2024",
    },
    link: "https://github.com/priyanshuthakare/System-OS",
    summary:
      "Behavior-adaptive productivity OS that changes digital environments from live user signals.",
    status: "Prototype",
    skills: ["React", "Vite", "Capacitor", "Supabase"],
    description:
      "Stability OS is a behavior-regulation framework that treats app usage, session friction, and self-reported state as first-class control signals. The architecture combines a React + Vite client shell with Capacitor for cross-platform runtime behavior and Supabase for event persistence, rule evaluation inputs, and adaptive state snapshots.\n\nThe core loop ingests interaction events, evaluates intervention rules, and applies environment shifts such as UI constraints, task pacing, or contextual prompts without requiring manual mode changes. In local scenario tests, the system processed 1,200+ interaction events per session with deterministic replay support, making intervention outcomes auditable and repeatable during iteration.",
  },
  {
    id: "appointment-system",
    title: "Appointment System",
    period: {
      start: "09.2024",
    },
    link: "https://youtu.be/L9kw-WZggKA?si=evW2RL8ix4qA53Yd",
    summary:
      "Real-time doctor-patient scheduling with payments, AI assistance, and dual-role portals.",
    status: "Live",
    skills: ["React", "Node.js", "PostgreSQL", "Socket.IO", "Gemini"],
    description:
      "Appointment System is a dual-portal architecture where patients discover, book, and pay, while providers manage availability, queues, and consultation flow from a dedicated operational surface. The stack uses React on the client, Node.js services for booking and payments, PostgreSQL for transactional consistency, and Socket.IO for real-time state propagation.\n\nTo reduce failed bookings, the flow validates slot ownership server-side before payment confirmation and pushes immediate slot state updates to all active clients. In end-to-end test runs with concurrent booking simulation, the system sustained 100+ overlapping slot operations without double-booking conflicts, while chatbot-assisted triage reduced average pre-booking input time by roughly 30%.",
  },
  {
    id: "dealdoc-ai",
    title: "DealDoc.ai",
    period: {
      start: "08.2024",
    },
    link: "https://deal-desk-beta.vercel.app/",
    summary:
      "Compliance-first real estate deal desk with AI-assisted workflow automation.",
    status: "Beta",
    skills: ["AI", "React", "NLP", "Automation"],
    description:
      "DealDoc.ai is a transaction coordination workspace designed for real-estate teams that need strict compliance checkpoints across fragmented communication channels. The product architecture uses a React interface for case operations, NLP pipelines for document and communication classification, and automation workers that enforce sequence-based task progression.\n\nThe workflow engine flags missing disclosures, unresolved dependencies, and deadline drift before files can advance, reducing manual backtracking in transaction cycles. In pilot usage across active deal scenarios, automated checklist resolution covered over 70% of routine coordination steps, and exception routing brought unresolved items to operators in under 2 minutes median detection time.",
  },
]
