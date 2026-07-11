"use client"

import { useId } from "react"
import type { Transition } from "motion/react"
import { motion } from "motion/react"

import { metalClickSound } from "@/lib/soundcn/metal-click"
import { cn } from "@/lib/utils"
import { useSound } from "@/hooks/soundcn/use-sound"

/**
 * Isometric "PT" monogram (Priyanshu Thakare).
 *
 * Each letter is composed of flat bars laid out in a letter grid `[a0, a1, b0, b1]`
 * (a → horizontal, b → vertical). Every bar is extruded into a shallow 3D box and
 * projected with a 30° isometric camera, then painted back-to-front so nearer
 * boxes occlude farther ones. Designed to sit on top of the FIG_001 video.
 *
 * Inspired by tailwindcss.com.
 */

// Isometric projection constants.
const S = 20 // unit scale (px per grid cell)
const COS = 0.8660254 // cos(30°)
const SIN = 0.5 // sin(30°)
const H = 0.6 // extrusion height of every bar

type Bar = [a0: number, a1: number, b0: number, b1: number]

// Letters, defined in local letter-grid coordinates (0,0 is top-left).
const P_BARS: Bar[] = [
  [0, 1, 0, 5], // stem
  [1, 4, 0, 1], // top of bowl
  [3, 4, 0, 3], // right of bowl
  [1, 3, 2, 3], // bottom of bowl
]

const T_BARS: Bar[] = [
  [0, 4, 0, 1], // top bar
  [1.5, 2.5, 1, 5], // stem
]

const P_OFFSET = 0
const T_OFFSET = 5

type ProjectedBox = {
  depth: number
  top: string
  right: string
  left: string
}

/** Project a 3D point (grid units) to 2D screen space. */
function project(u: number, v: number, z: number): [number, number] {
  return [(u - v) * COS * S, (u + v) * SIN * S - z * S]
}

/** Build an SVG path string from a list of projected points. */
function toPath(points: Array<[number, number]>): string {
  return (
    points
      .map(([x, y], i) => `${i === 0 ? "M" : "L"}${x.toFixed(2)} ${y.toFixed(2)}`)
      .join("") + "Z"
  )
}

/** Turn a single bar into the three visible faces of its extruded box. */
function boxFromBar(bar: Bar, offset: number): ProjectedBox {
  const [a0, a1, b0, b1] = bar
  const u0 = a0 + offset
  const u1 = a1 + offset
  const v0 = b0
  const v1 = b1

  const top = toPath([
    project(u0, v0, H),
    project(u1, v0, H),
    project(u1, v1, H),
    project(u0, v1, H),
  ])

  // Face pointing toward the viewer on the +u side.
  const right = toPath([
    project(u1, v0, 0),
    project(u1, v1, 0),
    project(u1, v1, H),
    project(u1, v0, H),
  ])

  // Face pointing toward the viewer on the +v side.
  const left = toPath([
    project(u0, v1, 0),
    project(u1, v1, 0),
    project(u1, v1, H),
    project(u0, v1, H),
  ])

  return { depth: u0 + v0, top, right, left }
}

export function PriyanshuMarkIsometric({ className }: { className?: string }) {
  const id = useId()
  const patternId = `pt-hatch-${id}`

  const transition: Transition = {
    type: "spring",
    mass: 0.5,
    damping: 18,
    stiffness: 200,
  }

  const [play] = useSound(metalClickSound)

  // Build every box and sort back-to-front for correct occlusion.
  const boxes = [
    ...P_BARS.map((bar) => boxFromBar(bar, P_OFFSET)),
    ...T_BARS.map((bar) => boxFromBar(bar, T_OFFSET)),
  ].sort((a, b) => a.depth - b.depth)

  return (
    <motion.svg
      className={cn(
        "h-auto w-full touch-manipulation overflow-visible drop-shadow-[0_2px_8px_rgba(0,0,0,0.55)]",
        className,
      )}
      viewBox="-105 -28 285 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      initial="normal"
      whileTap="pressed"
      onTap={() => play()}
    >
      <defs>
        <pattern
          id={patternId}
          width="8"
          height="8"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M-1 1l2 -2M0 8l8 -8M7 9l2 -2"
            stroke="rgba(255,255,255,0.35)"
            strokeWidth="1"
          />
        </pattern>
      </defs>

      <motion.g
        variants={{
          normal: { transform: "translate(0px, 0px)" },
          pressed: { transform: "translate(0px, 10px)" },
        }}
        transition={transition}
        stroke="rgba(255,255,255,0.9)"
        strokeWidth="1.25"
        strokeLinejoin="round"
      >
        {boxes.map((box, i) => (
          <g key={i}>
            {/* Side faces first, top last, so the top reads cleanly. */}
            <path d={box.right} fill="rgba(10,12,16,0.62)" />
            <path d={box.left} fill="rgba(20,24,30,0.5)" />
            <path d={box.top} fill="rgba(28,32,40,0.42)" />
            <path d={box.top} fill={`url(#${patternId})`} stroke="none" />
          </g>
        ))}
      </motion.g>
    </motion.svg>
  )
}
