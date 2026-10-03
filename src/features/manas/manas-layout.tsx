import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

/** Dotted grid band rendered via radial-gradient. */
export function DotGrid({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <div
      aria-hidden
      className={cn("manas-dotgrid", className)}
      style={style}
    />
  )
}

/** Full-width dashed horizontal divider between sections. */
export function SectionDivider({ className }: { className?: string }) {
  return <div aria-hidden className={cn("manas-hdivider", className)} />
}

/**
 * Blueprint page shell: centered 640px column flanked by full-height
 * fixed dashed vertical rails. Monospace throughout.
 */
export function ManasLayout({ children }: { children: ReactNode }) {
  return (
    <div className="manas-root">
      <div aria-hidden className="manas-rail manas-rail-left" />
      <div aria-hidden className="manas-rail manas-rail-right" />
      <main className="manas-column">{children}</main>
    </div>
  )
}
