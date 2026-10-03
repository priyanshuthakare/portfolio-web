import type { Metadata } from "next"

import { ManasThemeProvider } from "@/features/manas/theme-provider"
import {
  ProjectDetailPage,
  getProject,
} from "@/features/manas/project-detail"
import { PROJECTS } from "@/features/portfolio/data/projects"

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.id }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) return { title: "Project not found" }
  return {
    title: `${project.title} — Priyanshu Thakare`,
    description: project.summary,
  }
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  return (
    <ManasThemeProvider>
      <ProjectDetailPage slug={slug} />
    </ManasThemeProvider>
  )
}
