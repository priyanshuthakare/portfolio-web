"use client"

import { useEffect, useState } from "react"
import { Brush, CalendarDays, Eye, Mail, RotateCcw } from "lucide-react"

import { USER } from "@/features/portfolio/data/user"
import { useManasTheme } from "./theme-provider"
import { DotGrid } from "./manas-layout"
import { GithubHeatmap } from "./github-heatmap"

const ROLES = [
  "Full-Stack Developer & AI Engineer",
  "AI Automation Builder",
  "Blockchain Developer",
  "React & Next.js Engineer",
]

const SCRAMBLE_CHARS = "!<>-_\\/[]{}—=+*^?#"

function useScrambleRole(roles: string[]) {
  const [display, setDisplay] = useState(roles[0])

  useEffect(() => {
    let roleIdx = 0
    let frame: number
    let timeout: ReturnType<typeof setTimeout>

    const scrambleTo = (target: string) => {
      const start = performance.now()
      const duration = 900
      const tick = (now: number) => {
        const elapsed = now - start
        const progress = Math.min(elapsed / duration, 1)
        const revealCount = Math.floor(progress * target.length)
        let out = target.slice(0, revealCount)
        for (let i = revealCount; i < target.length; i++) {
          out += target[i] === " " ? " " : SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)]
        }
        setDisplay(out)
        if (progress < 1) {
          frame = requestAnimationFrame(tick)
        } else {
          timeout = setTimeout(() => {
            roleIdx = (roleIdx + 1) % roles.length
            scrambleTo(roles[roleIdx])
          }, 4000)
        }
      }
      frame = requestAnimationFrame(tick)
    }

    timeout = setTimeout(() => {
      roleIdx = 1 % roles.length
      scrambleTo(roles[roleIdx])
    }, 4000)

    return () => {
      cancelAnimationFrame(frame)
      clearTimeout(timeout)
    }
  }, [roles])

  return display
}

function bioParagraphs(): string[] {
  const about = USER.about
  // Split into 3 roughly equal paragraphs on sentence boundaries
  const sentences = about.match(/[^.!?]+[.!?]+/g) ?? [about]
  const per = Math.ceil(sentences.length / 3)
  const paras: string[] = []
  for (let i = 0; i < 3; i++) {
    const chunk = sentences.slice(i * per, (i + 1) * per).join(" ").trim()
    if (chunk) paras.push(chunk)
  }
  return paras
}

function decodeEmail(): string {
  try {
    return atob(USER.emailB64)
  } catch {
    return ""
  }
}

export function Hero() {
  const { cycleTheme, resetTheme, themeId, playBlip } = useManasTheme()
  const role = useScrambleRole(ROLES)
  const email = decodeEmail()
  const paras = bioParagraphs()

  const socials = [
    {
      label: "GitHub",
      href: "https://github.com/priyanshuthakare",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/priyaannsshhu",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      label: "Medium",
      href: "https://medium.com/",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42zM24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
        </svg>
      ),
    },
  ]

  return (
    <section>
      <DotGrid className="h-[120px]" />

      {/* Paintbrush + reset row */}
      <div className="flex justify-end items-center gap-2 pt-4">
        {themeId !== "default" && (
          <button
            type="button"
            onClick={() => {
              resetTheme()
              playBlip()
            }}
            onMouseEnter={playBlip}
            className="manas-pill"
            aria-label="Reset theme"
          >
            <RotateCcw size={14} />
            Reset
          </button>
        )}
        <button
          type="button"
          onClick={() => {
            cycleTheme()
            playBlip()
          }}
          onMouseEnter={playBlip}
          className="manas-btn manas-btn-light !rounded-lg"
          style={{ width: 44, height: 44, padding: 0, justifyContent: "center" }}
          aria-label="Cycle creative theme"
          title="Cycle creative theme"
        >
          <Brush size={18} />
        </button>
      </div>

      {/* Avatar + name + role */}
      <div className="flex items-start gap-4 mt-4">
        <img
          src={USER.avatar}
          alt={USER.displayName}
          width={95}
          height={95}
          className="rounded-lg shrink-0"
          style={{ border: "4px solid #fff", boxShadow: "0 4px 16px rgba(0,0,0,0.15)" }}
        />
        <div className="min-w-0">
          <h1
            className="font-bold leading-tight"
            style={{ fontSize: 40, letterSpacing: "-0.02em", color: "var(--manas-text)" }}
          >
            {USER.displayName}
          </h1>
          <p className="text-sm mt-1" style={{ color: "var(--manas-muted)" }} aria-live="polite">
            {role}
          </p>
        </div>
      </div>

      {/* View counter */}
      <div className="flex justify-end mt-2">
        <span
          className="inline-flex items-center gap-1 text-xs"
          style={{ color: "var(--manas-muted)" }}
        >
          <Eye size={14} />
          2.7K
        </span>
      </div>

      {/* Bio */}
      <div className="mt-4 space-y-4 text-sm" style={{ color: "var(--manas-text)" }}>
        {paras.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      {/* CTA buttons */}
      <div className="flex flex-wrap gap-3 mt-6">
        <a
          href={USER.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="manas-btn manas-btn-dark"
          onMouseEnter={playBlip}
        >
          <CalendarDays size={16} />
          Book a call
        </a>
        <a href={`mailto:${email}`} className="manas-btn manas-btn-light" onMouseEnter={playBlip}>
          <Mail size={16} />
          Send an email
        </a>
      </div>

      {/* Socials */}
      <p className="mt-6 text-sm" style={{ color: "var(--manas-muted)" }}>
        Here are my <strong style={{ color: "var(--manas-text)" }}>socials</strong>
      </p>
      <div className="flex flex-wrap gap-2 mt-2">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="manas-pill"
            onMouseEnter={playBlip}
          >
            {s.icon}
            {s.label}
          </a>
        ))}
      </div>

      {/* Contributions heatmap */}
      <div className="mt-6">
        <GithubHeatmap />
      </div>
    </section>
  )
}
