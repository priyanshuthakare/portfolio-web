"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

import { EXPERIENCES } from "@/features/portfolio/data/experiences"
import { useManasTheme } from "./theme-provider"
import { SectionDivider } from "./manas-layout"
import { cn } from "@/lib/utils"

const MONTH_NAMES = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"]

function formatDate(raw: string): string {
  // "MM.YYYY" -> "Mon, YYYY"; "YYYY" -> "YYYY"
  const m = raw.match(/^(\d{2})\.(\d{4})$/)
  if (m) {
    const month = MONTH_NAMES[parseInt(m[1], 10) - 1] ?? m[1]
    return `${month}, ${m[2]}`
  }
  return raw
}

function formatPeriod(start: string, end?: string): string {
  return `${formatDate(start)} - ${end ? formatDate(end) : "Present"}`
}

function initials(name: string): string {
  return name
    .split(/[\s,]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("")
}

function bullets(description?: string): string[] {
  if (!description) return []
  return description
    .split("\n")
    .map((l) => l.replace(/^-\s*/, "").trim())
    .filter(Boolean)
}

export function Experiences() {
  const { playBlip } = useManasTheme()
  const [open, setOpen] = useState<Record<string, boolean>>({})

  // Skip the "Education" entry to match the portfolio focus (keep 3 work entries)
  const entries = EXPERIENCES.filter((e) => e.id !== "education")

  return (
    <section className="mt-12">
      <SectionDivider />
      <h2 className="manas-section-title mt-6 mb-6">Experiences</h2>

      <div className="space-y-4">
        {entries.map((exp) => {
          const pos = exp.positions[0]
          if (!pos) return null
          const isOpen = !!open[exp.id]
          return (
            <div
              key={exp.id}
              className="rounded-lg p-4"
              style={{ background: "color-mix(in srgb, var(--manas-border) 45%, transparent)" }}
            >
              <button
                type="button"
                onClick={() => {
                  setOpen((p) => ({ ...p, [exp.id]: !p[exp.id] }))
                  playBlip()
                }}
                onMouseEnter={playBlip}
                className="w-full flex items-start gap-3 text-left"
                aria-expanded={isOpen}
              >
                {/* Initials logo */}
                <span
                  className="rounded-md shrink-0 flex items-center justify-center font-bold text-sm"
                  style={{
                    width: 40,
                    height: 40,
                    border: "1px solid var(--manas-border)",
                    color: "var(--manas-muted)",
                    background: "var(--manas-bg)",
                  }}
                >
                  {initials(exp.companyName)}
                </span>

                <span className="flex-1 min-w-0">
                  <span className="flex items-center gap-2 flex-wrap">
                    <span className="font-bold text-sm" style={{ color: "var(--manas-text)" }}>
                      {exp.companyName}
                    </span>
                    {pos.employmentType && (
                      <span
                        className="text-[11px] px-2 py-0.5 rounded-full"
                        style={{
                          border: "1px solid var(--manas-border)",
                          color: "var(--manas-muted)",
                        }}
                      >
                        {pos.employmentType}
                      </span>
                    )}
                  </span>
                  <span className="block text-sm mt-0.5" style={{ color: "var(--manas-muted)" }}>
                    {pos.title}
                  </span>
                </span>

                <span className="text-right shrink-0">
                  <span className="block text-xs" style={{ color: "var(--manas-muted)" }}>
                    {formatPeriod(pos.employmentPeriod.start, pos.employmentPeriod.end)}
                  </span>
                  <ChevronDown
                    size={16}
                    className={cn("ml-auto mt-1 transition-transform", isOpen && "rotate-180")}
                    style={{ color: "var(--manas-muted)" }}
                  />
                </span>
              </button>

              {isOpen && (
                <ul className="mt-3 ml-[52px] space-y-1.5 text-sm list-disc pl-4" style={{ color: "var(--manas-text)" }}>
                  {bullets(pos.description).map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}
