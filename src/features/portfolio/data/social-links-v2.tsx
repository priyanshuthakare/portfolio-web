import { Icons } from "@/components/icons"
import type { SocialLink } from "@/features/portfolio/types/social-links-v2"

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "x",
    icon: <Icons.x />,
    title: "X",
    handle: "@priyaannsshhu",
    href: "https://x.com/priyaannsshhu",
  },
  {
    name: "github",
    icon: <Icons.github />,
    title: "GitHub",
    handle: "priyanshuthakare",
    href: "https://github.com/priyanshuthakare",
  },
  {
    name: "linkedin",
    icon: <Icons.linkedin />,
    title: "LinkedIn",
    handle: "priyaannsshhu",
    href: "https://linkedin.com/in/priyaannsshhu",
  },
]

export function getSocialLinkByName(name: string) {
  return SOCIAL_LINKS.find((link) => link.name === name)
}
