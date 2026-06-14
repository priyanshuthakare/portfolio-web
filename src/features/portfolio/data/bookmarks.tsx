import { Icons } from "@/components/icons"

import type { Bookmark } from "../types/bookmarks"

export const BOOKMARKS: Bookmark[] = [
  {
    title: "React Documentation",
    url: "https://react.dev",
    author: "React Team",
    icon: <Icons.react />,
    bookmarkedAt: "2026-01-01",
  },
  {
    title: "Next.js Documentation",
    url: "https://nextjs.org/docs",
    author: "Vercel",
    icon: <Icons.nextjs />,
    bookmarkedAt: "2026-01-01",
  },
  {
    title: "Node.js Documentation",
    url: "https://nodejs.org/en/docs",
    author: "OpenJS Foundation",
    icon: <Icons.nodejs />,
    bookmarkedAt: "2026-01-01",
  },
]
