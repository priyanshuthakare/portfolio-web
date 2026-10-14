import type { Metadata } from "next"

import { ManasPage } from "@/features/manas/manas-page"

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
  title: "Priyanshu Thakare — Full-Stack Developer & AI Engineer",
  description:
    "Priyanshu Thakare is a full-stack developer and AI engineer building production web products, AI workflows, and blockchain systems.",
}

export default function HomePage() {
  return <ManasPage />
}
