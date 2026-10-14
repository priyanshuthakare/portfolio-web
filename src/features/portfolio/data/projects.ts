import type { Project } from "../types/projects"

export const PROJECTS: Project[] = [
  {
    id: "bellwize",
    title: "BellWize",
    period: {
      start: "08.2025",
    },
    link: "https://bellwize.app",
    summary:
      "Client retention and churn-prevention SaaS that turns 100+ signals into health scores.",
    status: "Live",
    skills: ["Next.js", "TypeScript", "FastAPI", "PostgreSQL", "Supabase"],
    description:
      "BellWize is a live B2B SaaS I built and launched solo: DB schema, REST API, Google OAuth and magic-link auth, row-level security, and transactional email alerts via Resend.\n\nThe core is the Churn Shield engine, a 4-stage pipeline (ingestion, feature extraction, scoring, alerting) that turns 100+ client signals into health scores and early-warning alerts. Integrated Paddle for payments, configured custom-domain email (SPF, DKIM, DMARC) and deployed on Vercel. Owned product, GTM and outreach end to end.",
    isExpanded: true,
  },
  {
    id: "ayurchain",
    title: "AyurChain",
    period: {
      start: "01.2025",
    },
    link: "https://ayurchain-beta.vercel.app/",
    summary:
      "Privacy-preserving supply chain on Polygon. NEC 2025 finalist, rank 25 of 9,000+ teams.",
    status: "Beta",
    skills: ["Solidity", "Polygon", "Kafka", "Python", "React"],
    description:
      "AyurChain is a privacy-preserving supply-chain system architected on Polygon: smart contracts, zero-knowledge proof circuits, ML models (BERT, XGBoost), Kafka streaming, ESP32 IoT sensors and a React frontend.\n\nFinalist at NEC 2025 (IIT Bombay), ranked 25 of 9,000+ teams. Every transfer event is written as an immutable record and mapped to a verified lot timeline, with QR lookups resolving each product batch to its historical chain of custody. In controlled internal demos, scan-to-history responses stayed under 450ms median latency for cached batches.",
  },
  {
    id: "stability-os",
    title: "Stability OS",
    period: {
      start: "12.2024",
    },
    link: "https://github.com/priyanshuthakare/System-OS",
    summary:
      "Behavioral regulation Android app (live) with a custom 3D brain heatmap.",
    status: "Live",
    skills: ["Capacitor", "Supabase", "Three.js", "React"],
    description:
      "Stability OS is a shipped cross-platform mobile app with Supabase auth, a longitudinal scoring system, and a custom 3D brain heatmap rendered with Three.js.\n\nThe core loop ingests interaction events, evaluates intervention rules, and applies environment shifts such as UI constraints, task pacing, or contextual prompts without requiring manual mode changes. In local scenario tests, the system processed 1,200+ interaction events per session with deterministic replay support.",
  },
  {
    id: "threepod",
    title: "Threepod",
    period: {
      start: "01.2026",
    },
    link: "https://github.com/ThreeDpod/ThreeDpod",
    summary: "AI-native procedural 3D workspace. Pitched at Aavishkar 2026.",
    status: "Prototype",
    skills: ["React", "Three.js", "AI", "TypeScript"],
    description:
      "Threepod turns natural language into structured, editable 3D scenes: an AI-native procedural 3D workspace.\n\nPitched at Aavishkar 2026. Built around a structured scene graph so generated layouts stay editable instead of collapsing into a static mesh.",
  },
  {
    id: "grub-boot-loader-theme-windows",
    title: "Grub Boot Loader Theme Windows",
    period: {
      start: "06.2024",
    },
    link: "https://github.com/priyanshuthakare/Grub-Boot-Loader-Theme-Windows",
    summary: "Open-source GRUB theme extended with Windows (Grub2Win) support.",
    status: "Live",
    skills: ["GRUB", "Windows", "Open Source"],
    description:
      "Extended an open-source Minecraft GRUB theme with Windows (Grub2Win) support, scheduled-task automation and widescreen fixes.\n\nCovers install automation plus resolution fixes so the theme renders correctly on widescreen displays.",
  },
]
