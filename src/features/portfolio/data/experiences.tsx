import {
  BriefcaseBusinessIcon,
  CodeXmlIcon,
  GraduationCapIcon,
  LightbulbIcon,
} from "lucide-react"

import type { Experience } from "../types/experiences"

export const EXPERIENCES: Experience[] = [
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
          "- Led a 45-member cross-functional team to execute entrepreneurship and tech programs for 500+ participants.\n- Mentored students in Python, AI workflows, and cloud tooling.\n- Secured top-25 position (out of 9,000 teams) at NEC'25, IIT Bombay.",
        skills: ["Leadership", "Mentoring", "Python", "AI", "Cloud"],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: true,
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
          end: "02.2025",
        },
        employmentType: "Internship",
        icon: <CodeXmlIcon />,
        description:
          "- Built and deployed AI-led automation workflows using n8n for multiple client pipelines.\n- Improved lead generation and onboarding throughput through process automation.\n- Delivered measurable operational efficiency gains with end-to-end workflow redesign.",
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
          start: "10.2024",
          end: "12.2024",
        },
        employmentType: "Internship",
        icon: <BriefcaseBusinessIcon />,
        description:
          "- Supported prospect pipeline development and client acquisition strategy.\n- Conducted lead research, qualification, and market-opportunity analysis.\n- Collaborated with cross-functional teams to prioritize growth initiatives.",
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
          "B.Tech in Electronics & Telecommunication Engineering — PRMIT&R",
        employmentPeriod: {
          start: "2021",
        },
        icon: <GraduationCapIcon />,
        description:
          "Focused on software engineering, full-stack product development, and IoT-integrated systems.",
        skills: ["Electronics", "IoT", "Software Engineering"],
      },
    ],
  },
]
