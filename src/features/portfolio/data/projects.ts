import type { Project } from "../types/projects"

export const PROJECTS: Project[] = [
  {
    id: "ayurchain",
    title: "Ayurchain",
    period: {
      start: "01.2025",
    },
    link: "https://ayurchain-beta.vercel.app/",
    skills: ["Blockchain", "Python", "AI", "Full-Stack"],
    description:
      "Full-stack platform tracking Ayurvedic herb supply chains with tamper-proof blockchain traceability and QR verification.",
    isExpanded: true,
  },
  {
    id: "stability-os",
    title: "Stability OS",
    period: {
      start: "12.2024",
    },
    link: "https://github.com/priyanshuthakare/System-OS",
    skills: ["React", "Vite", "Capacitor", "Supabase"],
    description:
      "Behavioral regulation operating system that adapts digital environments using real-time mental-behavioral signals.",
  },
  {
    id: "appointment-system",
    title: "Appointment System",
    period: {
      start: "09.2024",
    },
    link: "https://youtu.be/L9kw-WZggKA?si=evW2RL8ix4qA53Yd",
    skills: ["React", "Node.js", "PostgreSQL", "Socket.IO", "Gemini"],
    description:
      "Dual-portal appointment booking platform with AI chatbot support, real-time updates, and payment integration.",
  },
  {
    id: "dealdoc-ai",
    title: "DealDoc.ai",
    period: {
      start: "08.2024",
    },
    link: "https://deal-desk-beta.vercel.app/",
    skills: ["AI", "React", "NLP", "Automation"],
    description:
      "AI-powered transaction coordination platform for real estate operations with compliance-first workflow automation.",
  },
]
