import {
  BriefcaseBusinessIcon,
  CodeXmlIcon,
  GraduationCapIcon,
  LightbulbIcon,
} from "lucide-react"

import type { Experience } from "../types/experiences"

export const EXPERIENCES: Experience[] = [
  {
    id: "aethel-labs",
    companyName: "Aethel Labs",
    positions: [
      {
        id: "1",
        title: "Founder, AI Automation Engineer",
        employmentPeriod: {
          start: "10.2025",
        },
        employmentType: "Full-time",
        icon: <CodeXmlIcon />,
        description:
          "- Build and run production agentic automation for 6+ clients across SaaS, Web3 and e-commerce, using Python, n8n, webhooks and LLM reasoning with structured outputs.\n- Cut client manual operations by 40% by automating lead processing, onboarding and reporting; maintain deployments with logging and observability.\n- Apply LangChain, RAG and fine-tuning on live client work; document every workflow for handoff.",
        skills: ["Python", "n8n", "LangChain", "RAG", "Automation"],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: true,
  },
  {
    id: "ecell-prmitr",
    companyName: "Entrepreneurship Cell, PRMIT&R",
    companyWebsite: "https://www.prmitr.in",
    positions: [
      {
        id: "1",
        title: "Vice President",
        employmentPeriod: {
          start: "08.2025",
        },
        employmentType: "Leadership",
        icon: <LightbulbIcon />,
        description:
          "- Lead a 45-member team and 8+ events a year; mentored 10+ students in Python, AI and cloud.\n- Secured top-25 position (out of 9,000 teams) at NEC'25, IIT Bombay.",
        skills: ["Leadership", "Mentoring", "Python", "AI", "Cloud"],
      },
    ],
  },
  {
    id: "growth-magnet",
    companyName: "Growth Magnet Studio",
    companyWebsite: "https://growthmagnetstudio.com",
    positions: [
      {
        id: "1",
        title: "AI & Automation Intern",
        employmentPeriod: {
          start: "12.2024",
          end: "05.2025",
        },
        employmentType: "Internship",
        icon: <CodeXmlIcon />,
        description:
          "- Shipped 8+ Python and n8n workflows for lead generation, CRM enrichment and onboarding, with LLM-based classification.\n- Cut onboarding time and manual workload by 35%.",
        skills: ["n8n", "Automation", "AI Workflows", "Integrations"],
      },
    ],
  },
  {
    id: "technominds",
    companyName: "Technominds IP Solutions",
    positions: [
      {
        id: "1",
        title: "Business Analyst Intern",
        employmentPeriod: {
          start: "11.2024",
          end: "12.2024",
        },
        employmentType: "Internship",
        icon: <BriefcaseBusinessIcon />,
        description:
          "- Built a qualified database of 50+ prospects at a 12% conversion rate and used acquisition data to shape outreach strategy.",
        skills: ["Research", "Analysis", "Client Acquisition"],
      },
    ],
  },
  {
    id: "education",
    companyName: "Education",
    companyIcon: <GraduationCapIcon strokeWidth={1.8} />,
    positions: [
      {
        id: "1",
        title:
          "B.Tech, Electronics and Telecommunication (Minor: Computer Science) — PRMIT&R, SGBAU",
        employmentPeriod: {
          start: "2023",
          end: "2027",
        },
        icon: <GraduationCapIcon />,
        description: "Expected 2027.",
        skills: ["Electronics", "Computer Science", "IoT"],
      },
    ],
  },
]
