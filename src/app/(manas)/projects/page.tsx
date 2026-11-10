import type { Metadata } from "next"

import {
  DotGrid,
  ManasLayout,
  SectionDivider,
} from "@/features/manas/manas-layout"
import { ProjectCard } from "@/features/manas/project-card"
import { ManasThemeProvider } from "@/features/manas/theme-provider"
import { PROJECTS } from "@/features/portfolio/data/projects"

export const metadata: Metadata = {
  title: "Projects",
  description: "All projects by Priyanshu Thakare.",
}

export default function ProjectsPage() {
  return (
    <ManasThemeProvider>
      <ManasLayout>
        <DotGrid className="h-[56px] sm:h-[80px]" />
        <SectionDivider />
        <h1 className="manas-section-title mt-6 mb-6">Projects</h1>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <p
          className="mt-10 mb-6 text-sm"
          style={{ color: "var(--manas-muted)" }}
        >
          For more cool projects, visit my{" "}
          <a
            href="https://github.com/priyanshuthakare"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2"
            style={{ color: "var(--manas-text)" }}
          >
            Github
          </a>
          .
        </p>
        <DotGrid className="h-[56px] sm:h-[80px]" />
      </ManasLayout>
    </ManasThemeProvider>
  )
}
