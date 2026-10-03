"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { PROJECTS } from "@/features/portfolio/data/projects"
import { useManasTheme } from "./theme-provider"
import { SectionDivider } from "./manas-layout"

const CAPTIONS: Record<string, string> = {
  ayurchain: "qr verification",
  "stability-os": "dashboard",
  "appointment-system": "live demo",
}

export function Projects() {
  const { playBlip } = useManasTheme()

  return (
    <section className="mt-12">
      <SectionDivider />
      <h2 className="manas-section-title mt-6 mb-6">Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-10">
        {PROJECTS.map((project) => (
          <article key={project.id}>
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
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <Link
          href="/projects"
          className="manas-btn manas-btn-dark"
          onMouseEnter={playBlip}
        >
          View all
          <ArrowUpRight size={14} />
        </Link>
      </div>
    </section>
  )
}
