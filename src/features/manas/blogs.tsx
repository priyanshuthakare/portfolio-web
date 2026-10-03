"use client"

import { ArrowUpRight, CalendarDays } from "lucide-react"

import { useManasTheme } from "./theme-provider"
import { SectionDivider } from "./manas-layout"

export function Blogs() {
  const { playBlip } = useManasTheme()

  return (
    <section className="mt-12">
      <SectionDivider />
      <h2 className="manas-section-title mt-6 mb-6">Blogs</h2>

      <div
        className="rounded-lg p-4 flex items-start justify-between gap-4"
        style={{ border: "1px solid var(--manas-border)" }}
        onMouseEnter={playBlip}
      >
        <div>
          <p className="font-bold text-sm" style={{ color: "var(--manas-text)" }}>
            Coming soon
          </p>
          <p
            className="inline-flex items-center gap-1 text-xs mt-1"
            style={{ color: "var(--manas-muted)" }}
          >
            <CalendarDays size={12} />
            To be announced
          </p>
          <div className="flex flex-wrap gap-2 mt-2">
            {["Engineering", "AI", "Notes"].map((tag) => (
              <span key={tag} className="manas-pill !cursor-default">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <ArrowUpRight size={16} className="shrink-0" style={{ color: "var(--manas-muted)" }} />
      </div>
    </section>
  )
}
