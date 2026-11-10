"use client"

import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Clapperboard, Globe } from "lucide-react"

import { Icons } from "@/components/icons"
import { PROJECTS } from "@/features/portfolio/data/projects"
import type { Project } from "@/features/portfolio/types/projects"

import { DotGrid, ManasLayout, SectionDivider } from "./manas-layout"
import { useManasTheme } from "./theme-provider"

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
  const repository =
    project.repository ??
    (project.link.includes("github.com") ? project.link : undefined)
  const liveUrl =
    project.liveUrl ??
    (!project.link.includes("github.com") ? project.link : undefined)

  return (
    <ManasLayout>
      <DotGrid className="h-[56px] sm:h-[80px]" />

      {/* Header: back + title */}
      <div className="mt-6 flex items-center gap-2">
        <Link
          href="/projects"
          className="manas-btn manas-btn-light !rounded-md"
          style={{ padding: 4 }}
          aria-label="Back to projects"
          onMouseEnter={playBlip}
        >
          <ArrowLeft size={20} />
        </Link>
        <h1
          className="font-mono font-semibold"
          style={{
            fontSize: 18,
            letterSpacing: "-0.02em",
            color: "var(--manas-text)",
          }}
        >
          {project.title}
        </h1>
      </div>
      <SectionDivider className="mt-4" />

      {project.status && (
        <p className="mt-4 text-xs" style={{ color: "var(--manas-muted)" }}>
          {project.status}
        </p>
      )}

      {/* Hero frame */}
      <div
        className="mt-2 overflow-hidden rounded-md"
        style={{ background: "var(--manas-border)", padding: 4 }}
      >
        <div
          className="relative overflow-hidden rounded-md"
          style={{
            border: "2px solid #fff",
            background: "var(--manas-bg)",
            aspectRatio: "16/9",
          }}
        >
          {project.image ? (
            <Image
              src={project.image}
              alt={`${project.title} preview`}
              fill
              sizes="(min-width: 768px) 640px, 100vw"
              className="object-cover"
              style={{ objectPosition: project.imagePosition ?? "center" }}
            />
          ) : (
            <div className="flex h-full items-center justify-center">
              <span className="text-sm" style={{ color: "var(--manas-muted)" }}>
                {project.title}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Action buttons */}
      {(repository || liveUrl || project.postUrl) && (
        <div className="mt-6 flex flex-wrap justify-center gap-8">
          {repository && (
            <a
              href={repository}
              target="_blank"
              rel="noopener noreferrer"
              className="manas-btn manas-btn-light"
              onMouseEnter={playBlip}
            >
              <Icons.github className="size-4" />
              Github
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="manas-btn manas-btn-dark group"
              onMouseEnter={playBlip}
            >
              <Globe
                size={16}
                className="transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[180deg]"
              />
              Visit Live
            </a>
          )}
          {project.postUrl && (
            <a
              href={project.postUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="manas-btn manas-btn-light"
              onMouseEnter={playBlip}
            >
              <Clapperboard size={16} />
              Post
            </a>
          )}
        </div>
      )}

      <SectionDivider className="mt-8" />

      {/* Description */}
      <div
        className="mt-6 space-y-4 text-[15px]"
        style={{ color: "var(--manas-text)" }}
      >
        {paragraphs.map((p, i) => (
          <p key={i} style={{ whiteSpace: "pre-line" }}>
            {p}
          </p>
        ))}
      </div>

      <SectionDivider className="mt-8" />

      {/* Stack */}
      <h2
        className="mt-6 mb-4 font-mono text-lg font-semibold"
        style={{ color: "var(--manas-text)" }}
      >
        Stack used
      </h2>
      <div className="flex flex-wrap gap-2">
        {project.skills.map((skill) => {
          const href = STACK_URLS[skill]
          const chip = <span className="manas-pill">{skill}</span>
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
      <DotGrid className="mt-8 h-[56px] sm:h-[80px]" />
    </ManasLayout>
  )
}

export function ProjectDetailPage({ slug }: { slug: string }) {
  const project = getProject(slug)
  if (!project) notFound()
  return <ProjectDetail project={project} />
}
