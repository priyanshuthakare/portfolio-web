"use client"

import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Clapperboard, Github, Globe } from "lucide-react"

import type { Project } from "@/features/portfolio/types/projects"
import { PROJECTS } from "@/features/portfolio/data/projects"
import { useManasTheme } from "./theme-provider"
import { DotGrid, ManasLayout, SectionDivider } from "./manas-layout"

/** Official sites for stack chips. */
const STACK_URLS: Record<string, string> = {
  React: "https://react.dev",
  "Next.js": "https://nextjs.org",
  Next: "https://nextjs.org",
  TypeScript: "https://www.typescriptlang.org",
  JavaScript: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  Python: "https://www.python.org",
  "Node.js": "https://nodejs.org",
  PostgreSQL: "https://www.postgresql.org",
  Prisma: "https://www.prisma.io",
  Docker: "https://www.docker.com",
  Redis: "https://redis.io",
  Supabase: "https://supabase.com",
  Vite: "https://vite.dev",
  Capacitor: "https://capacitorjs.com",
  "Socket.IO": "https://socket.io",
  Gemini: "https://gemini.google.com",
  Tailwind: "https://tailwindcss.com",
  "Tailwind CSS": "https://tailwindcss.com",
  Bun: "https://bun.sh",
  Blockchain: "https://ethereum.org",
  AI: "https://openai.com",
  "Full-Stack": "https://react.dev",
}

export function getProject(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.id === slug)
}

export function ProjectDetail({ project }: { project: Project }) {
  const { playBlip } = useManasTheme()
  const paragraphs = (project.description ?? project.summary).split("\n\n")

  return (
    <ManasLayout>
      <DotGrid className="h-[80px]" />

      {/* Header: back + title */}
      <div className="flex items-center gap-2 mt-6">
        <Link
          href="/"
          className="manas-btn manas-btn-light !rounded-md"
          style={{ padding: 4 }}
          aria-label="Go back"
          onMouseEnter={playBlip}
        >
          <ArrowLeft size={20} />
        </Link>
        <h1
          className="font-mono font-semibold"
          style={{ fontSize: 18, letterSpacing: "-0.02em", color: "var(--manas-text)" }}
        >
          {project.id}
        </h1>
      </div>
      <SectionDivider className="mt-4" />

      {project.status && (
        <p className="text-xs mt-4" style={{ color: "var(--manas-muted)" }}>
          {project.status}
        </p>
      )}

      {/* Hero frame */}
      <div
        className="rounded-md overflow-hidden mt-2"
        style={{ background: "var(--manas-border)", padding: 4 }}
      >
        <div
          className="rounded-md overflow-hidden flex items-center justify-center"
          style={{
            border: "2px solid #fff",
            background: "var(--manas-bg)",
            aspectRatio: "16/9",
          }}
        >
          <span className="text-sm" style={{ color: "var(--manas-muted)" }}>
            {project.title}
          </span>
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex flex-wrap justify-center gap-8 mt-6 pl-8">
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="manas-btn manas-btn-light"
          onMouseEnter={playBlip}
        >
          <Github size={16} />
          Github
        </a>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="manas-btn manas-btn-dark group"
          onMouseEnter={playBlip}
        >
          <Globe
            size={16}
            className="transition-transform duration-500 group-hover:rotate-[180deg] group-hover:scale-110"
          />
          Visit Live
        </a>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="manas-btn manas-btn-light"
          onMouseEnter={playBlip}
        >
          <Clapperboard size={16} />
          Post
        </a>
      </div>

      <SectionDivider className="mt-8" />

      {/* Description */}
      <div className="mt-6 space-y-4 text-sm" style={{ color: "var(--manas-text)" }}>
        {paragraphs.map((p, i) => (
          <p key={i} style={{ whiteSpace: "pre-line" }}>
            {p}
          </p>
        ))}
      </div>

      <SectionDivider className="mt-8" />

      {/* Stack */}
      <h2 className="font-mono font-semibold text-lg mt-6 mb-4" style={{ color: "var(--manas-text)" }}>
        Stack used
      </h2>
      <div className="flex flex-wrap gap-2">
        {project.skills.map((skill) => {
          const href = STACK_URLS[skill]
          const chip = (
            <span className="manas-pill">
              {skill}
            </span>
          )
          return href ? (
            <a
              key={skill}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={playBlip}
            >
              {chip}
            </a>
          ) : (
            <span key={skill}>{chip}</span>
          )
        })}
      </div>

      <SectionDivider className="mt-8" />
      <DotGrid className="h-[80px] mt-8" />
    </ManasLayout>
  )
}

export function ProjectDetailPage({ slug }: { slug: string }) {
  const project = getProject(slug)
  if (!project) notFound()
  return <ProjectDetail project={project} />
}
