import Link from "next/link";
import { EXPERIENCE, PROFILE, PROJECTS, SKILLS } from "@/content";

function StatusPill({ status }: { status: string }) {
  return (
    <span className="rounded-full border border-zinc-800 bg-zinc-900 px-2.5 py-0.5 text-xs font-medium text-zinc-300">
      {status}
    </span>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xl font-semibold tracking-tight text-zinc-100">
      {children}
    </h2>
  );
}

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      {/* Hero */}
      <section className="space-y-5">
        <img
          src={PROFILE.avatar}
          alt={PROFILE.name}
          width={96}
          height={96}
          className="h-24 w-24 rounded-2xl border border-zinc-800 object-cover"
        />
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-zinc-50 sm:text-5xl">
            {PROFILE.name}
          </h1>
          <p className="mt-2 text-sm font-medium text-zinc-400">
            {PROFILE.role}
          </p>
        </div>
        <p className="leading-relaxed text-zinc-300">{PROFILE.bio}</p>
        <div className="flex flex-wrap gap-3">
          <a
            href={PROFILE.cal}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-950 transition-colors hover:bg-white"
          >
            Book a call
          </a>
          <a
            href={PROFILE.email}
            className="rounded-lg border border-zinc-800 px-4 py-2 text-sm font-medium text-zinc-200 transition-colors hover:border-zinc-600"
          >
            Send an email
          </a>
        </div>
        <p className="text-sm text-zinc-500">
          Here are my socials:{" "}
          {PROFILE.socials.map((s, i) => (
            <span key={s.label}>
              {i > 0 && " · "}
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-300 underline decoration-zinc-700 underline-offset-4 transition-colors hover:text-zinc-100"
              >
                {s.label}
              </a>
            </span>
          ))}
        </p>
      </section>

      {/* Projects */}
      <section className="mt-20 space-y-6">
        <SectionTitle>Projects</SectionTitle>
        <div className="grid gap-4 sm:grid-cols-2">
          {PROJECTS.map((p) => (
            <article
              key={p.slug}
              className="flex flex-col rounded-xl border border-zinc-800/80 bg-zinc-950 p-5 transition-colors hover:border-zinc-600"
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="font-semibold tracking-tight text-zinc-100">
                  {p.title}
                </h3>
                <StatusPill status={p.status} />
              </div>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-400">
                {p.pitch}
              </p>
              <Link
                href={`/projects/${p.slug}`}
                className="mt-4 text-sm font-medium text-zinc-200 underline decoration-zinc-700 underline-offset-4 transition-colors hover:text-zinc-100"
              >
                View Details
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="mt-20 space-y-2">
        <SectionTitle>Experience</SectionTitle>
        <div>
          {EXPERIENCE.map((e) => (
            <div
              key={`${e.company}-${e.role}`}
              className="border-b border-zinc-900 py-5 last:border-b-0"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-medium text-zinc-100">{e.company}</h3>
                <span className="text-sm text-zinc-500">{e.dates}</span>
              </div>
              <p className="mt-1 text-sm text-zinc-400">
                {e.role} · {e.type}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                {e.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="mt-20 space-y-6">
        <SectionTitle>Skills &amp; Technology</SectionTitle>
        <div className="flex flex-wrap gap-2">
          {SKILLS.map((s) => (
            <span
              key={s}
              className="rounded-full border border-zinc-800 bg-zinc-900/50 px-3 py-1 text-sm text-zinc-300"
            >
              {s}
            </span>
          ))}
        </div>
      </section>

      {/* Closing quote */}
      <section className="mt-24 text-center">
        <blockquote className="font-serif text-xl italic leading-relaxed text-zinc-300 sm:text-2xl">
          “{PROFILE.quote.text}”
        </blockquote>
        <p className="mt-4 text-sm text-zinc-500">
          — {PROFILE.quote.attribution}
        </p>
      </section>
    </main>
  );
}
