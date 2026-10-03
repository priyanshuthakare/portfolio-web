"use client"

import { TECH_STACK } from "@/features/portfolio/data/tech-stack"
import { useManasTheme } from "./theme-provider"
import { SectionDivider } from "./manas-layout"

export function Skills() {
  const { playBlip } = useManasTheme()

  return (
    <section className="mt-12">
      <SectionDivider />
      <h2 className="manas-section-title mt-6 mb-6">Skills &amp; Technology</h2>

      <div className="flex flex-wrap gap-2">
        {TECH_STACK.map((tech) => (
          <a
            key={tech.key}
            href={tech.href}
            target="_blank"
            rel="noopener noreferrer"
            className="manas-pill"
            onMouseEnter={playBlip}
          >
            {tech.icon}
            {tech.title}
          </a>
        ))}
      </div>
    </section>
  )
}
