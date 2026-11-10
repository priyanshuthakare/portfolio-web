export type Project = {
  /** Stable unique identifier (used as list key/anchor). */
  id: string
  title: string
  /**
   * Project period for display and sorting.
   * Use "MM.YYYY" format. Omit `end` for ongoing projects.
   */
  period: {
    /** Start date (e.g., "05.2025"). */
    start: string
    /** End date; leave undefined for "Present". */
    end?: string
  }
  /** Primary public URL (site, repository, demo, or video). */
  link: string
  /** Preview image path under /public. */
  image?: string
  /** CSS object-position used to crop the preview image. */
  imagePosition?: string
  /** Optional repository URL when the primary link is not the repository. */
  repository?: string
  /** Optional live/demo URL when the primary link is the repository. */
  liveUrl?: string
  /** Optional write-up URL. */
  postUrl?: string
  /** At-a-glance one-line project pitch shown in collapsed list. */
  summary: string
  /** Short status label for the project. */
  status?: "Live" | "Beta" | "Prototype" | "Open Source"
  /** Tags/technologies for chips or filtering. */
  skills: string[]
  /** Optional rich description; Markdown and line breaks supported. */
  description?: string
  /** Logo image URL (absolute or path under /public). */
  logo?: string
  /** Whether the project card is expanded by default in the UI. */
  isExpanded?: boolean
}
