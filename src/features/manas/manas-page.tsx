import { ManasThemeProvider } from "./theme-provider"
import { ManasLayout } from "./manas-layout"
import { Hero } from "./hero"
import { Projects } from "./projects"
import { Experiences } from "./experiences"
import { Skills } from "./skills"
import { Blogs } from "./blogs"
import { Quote } from "./quote"
import { SoundToggle } from "./sound-toggle"

/** Full manasr.dev-style portfolio page. No footer — ends with the quote. */
export function ManasPage() {
  return (
    <ManasThemeProvider>
      <ManasLayout>
        <Hero />
        <Projects />
        <Experiences />
        <Skills />
        <Blogs />
        <Quote />
      </ManasLayout>
      <SoundToggle />
    </ManasThemeProvider>
  )
}
