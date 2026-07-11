import "server-only"

import { unstable_cache } from "next/cache"

type ISODateString = string

type InsightsSummary = {
  unique_visitors: number
  total_sessions: number
  total_screen_views: number
  avg_session_duration: number
}

type InsightsSeriesItem = {
  date: ISODateString
  unique_visitors: number
  total_sessions: number
}

type InsightsResponse = {
  summary: InsightsSummary
  series: InsightsSeriesItem[]
  startDate: ISODateString
  endDate: ISODateString
}

export const getInsights = unstable_cache(
  async (): Promise<InsightsResponse | null> => {
    const projectId = process.env.OPENPANEL_PROJECT_ID
    const clientId = process.env.OPENPANEL_CLIENT_ID
    const clientSecret = process.env.OPENPANEL_CLIENT_SECRET

    if (!projectId || !clientId || !clientSecret) {
      return null
    }

    try {
      const res = await fetch(
        `https://api.openpanel.dev/insights/${projectId}/overview`,
        {
          signal: AbortSignal.timeout(5000),
          headers: {
            "openpanel-client-id": clientId,
            "openpanel-client-secret": clientSecret,
          },
        }
      )

      if (!res.ok) {
        const body = await res.text().catch(() => "")
        console.error(
          `[insights] OpenPanel request failed: ${res.status} ${res.statusText} ${body}`
        )
        return null
      }

      return (await res.json()) as InsightsResponse
    } catch (error) {
      console.error("[insights] OpenPanel request threw:", error)
      return null
    }
  },
  ["openpanel-insights"],
  { revalidate: 86400 }
)
