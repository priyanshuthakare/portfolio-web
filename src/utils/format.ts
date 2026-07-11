export function formatDuration(seconds: number): string {
  const totalSeconds = Math.max(0, Math.round(seconds))

  const h = Math.floor(totalSeconds / 3600)
  const m = Math.floor((totalSeconds % 3600) / 60)
  const s = totalSeconds % 60

  const parts: string[] = []
  if (h > 0) parts.push(`${h}h`)
  if (m > 0) parts.push(`${m}m`)
  if (s > 0) parts.push(`${s}s`)

  return parts.length > 0 ? parts.join(" ") : "0s"
}
