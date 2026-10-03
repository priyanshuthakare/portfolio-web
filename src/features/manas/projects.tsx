"use client"

import Link from "next/link"

import { PROJECTS } from "@/features/portfolio/data/projects"
import { useManasTheme } from "./theme-provider"
import { SectionDivider } from "./manas-layout"
import { ProjectCard } from "./project-card"

export function Projects() {
  const { playBlip } = useManasTheme()

  return (
    <section className="mt-12">
      <SectionDivider />
      <h2 className="manas-section-title mt-6 mb-6">Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-10">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} />
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
