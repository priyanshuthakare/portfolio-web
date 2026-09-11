import { Panel, PanelContent } from "@/features/portfolio/components/panel"

const ID = "signature"

export function Signature() {
  return (
    <Panel id={ID}>
      <h2 className="sr-only">Signature</h2>

      <PanelContent className="py-10 text-center">
        <blockquote className="mx-auto max-w-2xl text-balance text-xl leading-relaxed text-foreground/90 italic sm:text-2xl">
          "What I cannot create, I do not understand."
        </blockquote>
        <p className="mt-3 font-mono text-sm text-muted-foreground">
          — Richard Feynman
        </p>
      </PanelContent>
    </Panel>
  )
}
