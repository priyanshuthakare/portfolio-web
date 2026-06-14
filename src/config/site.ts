import type { Route } from "next"

import type { NavItem } from "@/types/nav"
import { USER } from "@/features/portfolio/data/user"

export const SITE_INFO = {
  name: USER.displayName,
  url: process.env.NEXT_PUBLIC_APP_URL || "https://0xpriyanshu.is-a.dev",
  ogImage: USER.ogImage,
  description: USER.bio,
  keywords: USER.keywords,
}

export const LICENSE = {
  name: "MIT License",
  url: "https://github.com/priyanshuthakare/priyanshuthakare.github.io/blob/main/LICENSE",
}

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
}

export const MAIN_NAV: NavItem<Route>[] = [
  {
    title: "Components",
    href: "/components",
  },
  {
    title: "Blocks",
    href: "/blocks",
  },
  {
    title: "Blog",
    href: "/blog",
  },
]

export const MOBILE_NAV: NavItem<Route>[] = [
  {
    title: "Home",
    href: "/",
  },
  ...MAIN_NAV,
]

export const X_HANDLE = "@priyaannsshhu"
export const GITHUB_USERNAME = "priyanshuthakare"
export const SOURCE_CODE_GITHUB_REPO =
  "priyanshuthakare/priyanshuthakare.github.io"
export const SOURCE_CODE_GITHUB_URL =
  "https://github.com/priyanshuthakare/priyanshuthakare.github.io"

export const SPONSORSHIP_URL = "https://github.com/sponsors/priyanshuthakare"

export const UTM_PARAMS = {
  utm_source: "0xpriyanshu.is-a.dev",
}
