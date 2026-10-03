"use client"

import { useEffect, useState } from "react"

import { useManasTheme } from "./theme-provider"

type ContributionDay = {
  date: string
  count: number
  level: number
}

type ApiResponse = {
  contributions: ContributionDay[]
  total: { [year: string]: number }
}

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

function levelColor(level: number, themeId: string): string {
  // Green scale for default/light themes, theme-tinted for creative ones
  const dark = themeId === "midnight" || themeId === "violet" || themeId === "ember"
  if (dark) {
    return ["#1e293b", "#1d4ed8", "#2563eb", "#3b82f6", "#60a5fa"][level] ?? "#1e293b"
  }
  return ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"][level] ?? "#ebedf0"
}

export function GithubHeatmap() {
  const { playBlip, themeId } = useManasTheme()
  const [days, setDays] = useState<ContributionDay[]>([])
  const [total, setTotal] = useState<number | null>(null)
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    let cancelled = false
    fetch("https://github-contributions-api.jogruber.de/v4/priyanshuthakare?y=last")
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error("bad response"))))
      .then((data: ApiResponse) => {
        if (cancelled) return
        setDays(data.contributions ?? [])
        const totals = data.total ?? {}
        const year = Object.keys(totals).sort().pop()
        setTotal(year ? totals[year] : data.contributions.reduce((s, d) => s + d.count, 0))
      })
      .catch(() => {
        if (!cancelled) setFailed(true)
      })
    return () => {
      cancelled = true
    }
  }, [])

  if (failed || days.length === 0) {
    if (!failed) return null
    return (
      <p className="text-xs" style={{ color: "var(--manas-muted)" }}>
        Could not load contributions.
      </p>
    )
  }

  // Group into weeks (columns), 7 rows
  const weeks: ContributionDay[][] = []
  let current: ContributionDay[] = []
  // Pad first week to start on Sunday
  const firstDate = new Date(days[0].date)
  const padCount = firstDate.getDay()
  for (let i = 0; i < padCount; i++) current.push({ date: "", count: 0, level: -1 })
  for (const d of days) {
    current.push(d)
    if (current.length === 7) {
      weeks.push(current)
      current = []
    }
  }
  if (current.length > 0) {
    while (current.length < 7) current.push({ date: "", count: 0, level: -1 })
    weeks.push(current)
  }

  // Month labels: first week index where month changes
  const monthLabels: { weekIdx: number; label: string }[] = []
  let lastMonth = -1
  weeks.forEach((week, wi) => {
    const first = week.find((d) => d.date)
    if (first) {
      const m = new Date(first.date).getMonth()
      if (m !== lastMonth) {
        monthLabels.push({ weekIdx: wi, label: MONTHS[m] })
        lastMonth = m
      }
    }
  })

  const year = new Date(days[days.length - 1].date).getFullYear()

  return (
    <div>
      <p className="text-xs mb-2" style={{ color: "var(--manas-muted)" }}>
        priyanshuthakare on GitHub — {total ?? "…"} contributions in {year}
      </p>
      <div className="overflow-x-auto pb-2">
        <div className="inline-block min-w-full">
          {/* Month labels */}
          <div className="flex gap-[3px] mb-1" style={{ paddingLeft: 0 }}>
            {weeks.map((_, wi) => {
              const label = monthLabels.find((l) => l.weekIdx === wi)
              return (
                <span
                  key={wi}
                  className="text-[10px] shrink-0"
                  style={{ width: 11, color: "var(--manas-muted)" }}
                >
                  {label ? label.label : ""}
                </span>
              )
            })}
          </div>
          {/* Grid */}
          <div className="flex gap-[3px]">
            {weeks.map((week, wi) => (
              <div key={wi} className="flex flex-col gap-[3px]">
                {week.map((day, di) => (
                  <div
                    key={di}
                    title={day.date ? `${day.count} contributions on ${day.date}` : undefined}
                    onMouseEnter={day.date ? playBlip : undefined}
                    style={{
                      width: 11,
                      height: 11,
                      borderRadius: 2,
                      backgroundColor:
                        day.level < 0 ? "transparent" : levelColor(day.level, themeId),
                    }}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Legend */}
      <div
        className="flex items-center gap-1 text-[11px] mt-1"
        style={{ color: "var(--manas-muted)" }}
      >
        <span>Less</span>
        {[0, 1, 2, 3, 4].map((l) => (
          <span
            key={l}
            style={{
              width: 11,
              height: 11,
              borderRadius: 2,
              backgroundColor: levelColor(l, themeId),
              display: "inline-block",
            }}
          />
        ))}
        <span>More</span>
      </div>
    </div>
  )
}
