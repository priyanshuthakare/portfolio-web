import { OpenPanel } from "@openpanel/web"

const clientId = process.env.NEXT_PUBLIC_OPENPANEL_CLIENT_ID

/**
 * OpenPanel is optional in local and preview environments. Keeping the client
 * null when the ID is missing avoids failed /track requests on every page.
 */
export const op = clientId
  ? new OpenPanel({
      clientId,
      trackScreenViews: true,
      trackOutgoingLinks: true,
      trackAttributes: true,
    })
  : null
