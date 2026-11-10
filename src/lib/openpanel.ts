import { OpenPanel } from "@openpanel/web"

const clientId = process.env.NEXT_PUBLIC_OPENPANEL_CLIENT_ID
const enabled = process.env.NEXT_PUBLIC_OPENPANEL_ENABLED === "true"

/**
 * OpenPanel is opt-in. A stale or revoked client ID otherwise fires a failed
 * /track request on every page load.
 */
export const op =
  enabled && clientId
    ? new OpenPanel({
        clientId,
        trackScreenViews: true,
        trackOutgoingLinks: true,
        trackAttributes: true,
      })
    : null
