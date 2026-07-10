import "server-only"

import { unstable_cache } from "next/cache"

type ISODateString = string

type InsightsSummary = {
  unique_visitors: number
  total_sessions: number
  total_screen_views: number
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

type OpenPanelMetrics = {
  visitors: { current: number }
  sessions: { current: number }
  pageviews: { current: number }
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
        `https://api.openpanel.dev/insights/${projectId}/metrics`,
        {
          signal: AbortSignal.timeout(5000),
          headers: {
            "openpanel-client-id": clientId,
            "openpanel-client-secret": clientSecret,
          },
        }
      )

      if (!res.ok) {
        return null
      }

      const metrics = (await res.json()) as OpenPanelMetrics

      return {
        summary: {
          unique_visitors: metrics.visitors.current,
          total_sessions: metrics.sessions.current,
          total_screen_views: metrics.pageviews.current,
        },
        series: [],
        startDate: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(),
        endDate: new Date().toISOString(),
      }
    } catch {
      return null
    }
  },
  ["openpanel-insights"],
  { revalidate: 86400 }
)
