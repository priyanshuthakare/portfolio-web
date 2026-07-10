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

type OpenPanelMetricsResponse = {
  metrics: {
    unique_visitors: number
    total_sessions: number
    total_screen_views: number
  }
  series: Array<{
    date: ISODateString
    unique_visitors: number
    total_sessions: number
  }>
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

      const metrics = (await res.json()) as OpenPanelMetricsResponse

      const series = (metrics.series ?? []).map((item) => ({
        date: item.date,
        unique_visitors: item.unique_visitors,
        total_sessions: item.total_sessions,
      }))

      return {
        summary: {
          unique_visitors: metrics.metrics.unique_visitors,
          total_sessions: metrics.metrics.total_sessions,
          total_screen_views: metrics.metrics.total_screen_views,
        },
        series,
        startDate:
          series[0]?.date ??
          new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(),
        endDate: series[series.length - 1]?.date ?? new Date().toISOString(),
      }
    } catch {
      return null
    }
  },
  ["openpanel-insights"],
  { revalidate: 86400 }
)
