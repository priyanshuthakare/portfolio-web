"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import type { Project } from "@/features/portfolio/types/projects"
import { useManasTheme } from "./theme-provider"

const CAPTIONS: Record<string, string> = {
  ayurchain: "qr verification",
  "stability-os": "dashboard",
  "appointment-system": "live demo",
}

export function ProjectCard({ project }: { project: Project }) {
  const { playBlip } = useManasTheme()

  return (
    <article>
      {/* Image placeholder */}
      <div
        className="rounded-lg relative overflow-hidden"
        style={{ background: "var(--manas-border)", aspectRatio: "16/10" }}
      >
        <span
          className="absolute top-2 left-3 text-xs"
          style={{ color: "var(--manas-muted)" }}
        >
          {CAPTIONS[project.id] ?? project.title.toLowerCase()}
        </span>
      </div>

      {/* Title + status */}
      <div className="flex items-baseline justify-between mt-3">
        <h3 className="font-bold text-base" style={{ color: "var(--manas-text)" }}>
          {project.title}
        </h3>
        {project.status && (
          <span className="text-xs" style={{ color: "var(--manas-muted)" }}>
            {project.status}
          </span>
        )}
      </div>

      {/* Description */}
      <p className="text-sm mt-1" style={{ color: "var(--manas-muted)" }}>
        {project.summary}
      </p>

      <Link
        href={`/projects/${project.id}`}
        className="inline-flex items-center gap-1 text-sm mt-2 underline-offset-2 hover:underline"
        style={{ color: "var(--manas-text)" }}
        onMouseEnter={playBlip}
      >
        View Details
        <ArrowUpRight size={14} />
      </Link>
    </article>
  )
}
