"use client"

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react"

export type CreativeTheme = {
  id: string
  label: string
  bg: string
  text: string
  muted: string
  border: string
  rails: string
}

export const CREATIVE_THEMES: CreativeTheme[] = [
  { id: "default", label: "Default", bg: "#ffffff", text: "#18181b", muted: "#71717a", border: "#e4e4e7", rails: "#d4d4d8" },
  { id: "rose", label: "Rose", bg: "#fcf6f9", text: "#6f2d4c", muted: "#a86d89", border: "#eedee6", rails: "#e3cbd7" },
  { id: "blue", label: "Blue", bg: "#f4f7fd", text: "#29466d", muted: "#6e89ad", border: "#dbe6f8", rails: "#c9d7ee" },
  { id: "amber", label: "Amber", bg: "#fbf5e9", text: "#75482c", muted: "#a87952", border: "#ead9b8", rails: "#dfc9a2" },
  { id: "moss", label: "Moss", bg: "#f4f7ef", text: "#3d573e", muted: "#71876a", border: "#d7e1cb", rails: "#c5d3b8" },
  { id: "midnight", label: "Midnight", bg: "#080c19", text: "#6fa7fe", muted: "#8aaddf", border: "#2b4a81", rails: "#2b4a81" },
  { id: "violet", label: "Violet", bg: "#100921", text: "#c79bfe", muted: "#b69ad6", border: "#57348f", rails: "#57348f" },
  { id: "ember", label: "Ember", bg: "#0c0700", text: "#ffb44e", muted: "#d2a063", border: "#724a13", rails: "#724a13" },
]

type ManasThemeContext = {
  theme: CreativeTheme
  themeId: string
  cycleTheme: () => void
  resetTheme: () => void
  soundOn: boolean
  toggleSound: () => void
  playBlip: () => void
}

const Ctx = createContext<ManasThemeContext | null>(null)

export function useManasTheme() {
  const ctx = useContext(Ctx)
  if (!ctx) throw new Error("useManasTheme must be used within ManasThemeProvider")
  return ctx
}

const STORAGE_KEY = "manas-creative-theme"
const SOUND_KEY = "manas-sound"

export function ManasThemeProvider({ children }: { children: ReactNode }) {
  const [themeId, setThemeId] = useState("default")
  const [soundOn, setSoundOn] = useState(false)
  const audioRef = useRef<AudioContext | null>(null)

  // Load persisted prefs
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved && CREATIVE_THEMES.some((t) => t.id === saved)) setThemeId(saved)
      setSoundOn(localStorage.getItem(SOUND_KEY) === "1")
    } catch {
      // ignore
    }
  }, [])

  // Apply theme CSS vars with ~1s transition
  useEffect(() => {
    const theme = CREATIVE_THEMES.find((t) => t.id === themeId) ?? CREATIVE_THEMES[0]
    const root = document.documentElement
    root.style.setProperty("--manas-bg", theme.bg)
    root.style.setProperty("--manas-text", theme.text)
    root.style.setProperty("--manas-muted", theme.muted)
    root.style.setProperty("--manas-border", theme.border)
    root.style.setProperty("--manas-rails", theme.rails)
    // Tell CSS to skip OS dark-mode override when a creative theme is active
    if (themeId !== "default") {
      root.setAttribute("data-theme-override", "")
    } else {
      root.removeAttribute("data-theme-override")
    }
    try {
      localStorage.setItem(STORAGE_KEY, themeId)
    } catch {
      // ignore
    }
  }, [themeId])

  const cycleTheme = useCallback(() => {
    setThemeId((prev) => {
      const idx = CREATIVE_THEMES.findIndex((t) => t.id === prev)
      return CREATIVE_THEMES[(idx + 1) % CREATIVE_THEMES.length].id
    })
  }, [])

  const resetTheme = useCallback(() => setThemeId("default"), [])

  const toggleSound = useCallback(() => {
    setSoundOn((prev) => {
      const next = !prev
      try {
        localStorage.setItem(SOUND_KEY, next ? "1" : "0")
      } catch {
        // ignore
      }
      return next
    })
  }, [])

  const playBlip = useCallback(() => {
    if (!soundOn) return
    try {
      if (!audioRef.current) {
        audioRef.current = new (window.AudioContext ||
          (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)()
      }
      const ctx = audioRef.current
      if (ctx.state === "suspended") void ctx.resume()
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()
      osc.type = "sine"
      osc.frequency.value = 660
      gain.gain.setValueAtTime(0.06, ctx.currentTime)
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.12)
      osc.connect(gain)
      gain.connect(ctx.destination)
      osc.start()
      osc.stop(ctx.currentTime + 0.12)
    } catch {
      // audio not available
    }
  }, [soundOn])

  const theme = CREATIVE_THEMES.find((t) => t.id === themeId) ?? CREATIVE_THEMES[0]

  return (
    <Ctx.Provider
      value={{ theme, themeId, cycleTheme, resetTheme, soundOn, toggleSound, playBlip }}
    >
      {children}
    </Ctx.Provider>
  )
}
