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

      <div className="flex items-start justify-between gap-4 py-2">
        <div>
          <p className="font-bold" style={{ fontSize: 18, color: "var(--manas-text)" }}>
            Coming soon
          </p>
          <p
            className="inline-flex items-center gap-1.5 text-sm mt-2"
            style={{ color: "var(--manas-muted)" }}
          >
            <CalendarDays size={14} />
            To be announced
          </p>
          <div className="flex flex-wrap gap-2 mt-3">
            {["Engineering", "AI", "Notes"].map((tag) => (
              <span key={tag} className="manas-pill !cursor-default">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <ArrowUpRight size={18} className="shrink-0 mt-1" style={{ color: "var(--manas-muted)" }} />
      </div>
    </section>
  )
}
