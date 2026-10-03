"use client"

import { Volume2, VolumeX } from "lucide-react"

import { useManasTheme } from "./theme-provider"

/** Fixed bottom-right sound toggle. */
export function SoundToggle() {
  const { soundOn, toggleSound, playBlip } = useManasTheme()

  return (
    <button
      type="button"
      onClick={() => {
        toggleSound()
        playBlip()
      }}
      className="manas-btn manas-btn-light !rounded-lg"
      style={{
        position: "fixed",
        bottom: 16,
        right: 16,
        zIndex: 50,
        width: 44,
        height: 44,
        padding: 0,
        justifyContent: "center",
      }}
      aria-label={soundOn ? "Disable hover sound" : "Enable hover sound"}
      title={soundOn ? "Disable hover sound" : "Enable hover sound"}
    >
      {soundOn ? <Volume2 size={18} /> : <VolumeX size={18} />}
    </button>
  )
}
