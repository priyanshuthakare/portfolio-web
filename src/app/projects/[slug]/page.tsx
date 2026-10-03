import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PROJECTS, getProject } from "@/content";

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const project = getProject((await params).slug);
  if (!project) return {};
  return {
    title: `${project.title} — Priyanshu Thakare`,
    description: project.pitch,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const project = getProject((await params).slug);
  if (!project) notFound();

  return (
    <main className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <Link
        href="/"
        className="text-sm text-zinc-500 underline decoration-zinc-800 underline-offset-4 transition-colors hover:text-zinc-300"
      >
        ← All projects
      </Link>

      <div className="mt-8 flex items-center gap-3">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl">
          {project.title}
        </h1>
        <span className="rounded-full border border-zinc-800 bg-zinc-900 px-2.5 py-0.5 text-xs font-medium text-zinc-300">
          {project.status}
        </span>
      </div>
      <p className="mt-3 text-zinc-400">{project.pitch}</p>

      <div className="mt-8 space-y-5">
        {project.body.map((paragraph, i) => (
          <p key={i} className="leading-relaxed text-zinc-300">
            {paragraph}
          </p>
        ))}
      </div>

      <div className="mt-10">
        <h2 className="text-sm font-medium uppercase tracking-wider text-zinc-500">
          Stack used
        </h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.stack.map((s) => (
            <span
              key={s}
              className="rounded-full border border-zinc-800 bg-zinc-900/50 px-3 py-1 text-sm text-zinc-300"
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-zinc-800 px-4 py-2 text-sm font-medium text-zinc-200 transition-colors hover:border-zinc-600"
          >
            GitHub
          </a>
        )}
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-950 transition-colors hover:bg-white"
          >
            {project.title === "Appointment System" ? "Watch demo" : "Visit live"}
          </a>
        )}
      </div>
    </main>
  );
}
