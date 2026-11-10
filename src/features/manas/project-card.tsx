"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import type { Project } from "@/features/portfolio/types/projects"

import { useManasTheme } from "./theme-provider"

const CAPTIONS: Record<string, string> = {
  bellwize: "churn shield",
  ayurchain: "qr verification",
  "stability-os": "3d brain heatmap",
  threepod: "procedural 3d",
  "grub-boot-loader-theme-windows": "grub2win",
}

export function ProjectCard({ project }: { project: Project }) {
  const { playBlip } = useManasTheme()

  return (
    <article>
      {/* Preview image */}
      <div
        className="relative overflow-hidden rounded-lg"
        style={{ background: "var(--manas-border)", aspectRatio: "16/10" }}
      >
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.title} preview`}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
            style={{ objectPosition: project.imagePosition ?? "center" }}
          />
        ) : (
          <span
            className="absolute top-2 left-3 text-xs"
            style={{ color: "var(--manas-muted)" }}
          >
            {CAPTIONS[project.id] ?? project.title.toLowerCase()}
          </span>
        )}
      </div>

      {/* Title + status */}
      <div className="mt-3 flex items-start justify-between gap-3">
        <h3
          className="min-w-0 text-base font-bold break-words"
          style={{ color: "var(--manas-text)" }}
        >
          {project.title}
        </h3>
        {project.status && (
          <span
            className="shrink-0 text-xs"
            style={{ color: "var(--manas-muted)" }}
          >
            {project.status}
          </span>
        )}
      </div>

      {/* Description */}
      <p className="mt-1 text-[15px]" style={{ color: "var(--manas-muted)" }}>
        {project.summary}
      </p>

      <Link
        href={`/projects/${project.id}`}
        className="mt-2 inline-flex items-center gap-1 text-sm underline-offset-2 hover:underline"
        style={{ color: "var(--manas-text)" }}
        onMouseEnter={playBlip}
      >
        View Details
        <ArrowUpRight size={14} />
      </Link>
    </article>
  )
}
