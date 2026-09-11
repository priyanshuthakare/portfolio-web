import { ArrowUpRightIcon } from "lucide-react"
import { addQueryParams } from "@/utils/url"
import { decodeEmail } from "@/utils/string"

import { UTM_PARAMS } from "@/config/site"
import { Button } from "@/components/base/ui/button"
import { Prose } from "@/components/ui/typography"
import { Markdown } from "@/components/markdown"
import { GitHubContributions } from "@/features/portfolio/components/github-contributions"
import {
  Panel,
  PanelContent,
  PanelHeader,
  PanelTitle,
} from "@/features/portfolio/components/panel"
import { PanelTitleCopy } from "@/features/portfolio/components/panel-title-copy"
import { Testimonials } from "@/features/portfolio/components/testimonials"
import { USER } from "@/features/portfolio/data/user"

const ID = "hello"

export function About() {
  return (
    <Panel id={ID}>
      <PanelHeader>
        <PanelTitle>
          <a href={`#${ID}`}>Hello</a>
          <PanelTitleCopy id={ID} />
        </PanelTitle>
      </PanelHeader>

      <PanelContent className="screen-line-bottom py-6">
        <Prose>
          <Markdown>{USER.about}</Markdown>
        </Prose>

        <div className="mt-4 flex flex-wrap gap-2">
          <Button
            variant="secondary"
            size="sm"
            nativeButton={false}
            render={
              <a
                href={addQueryParams(USER.bookingUrl, UTM_PARAMS)}
                target="_blank"
                rel="noopener"
              />
            }
          >
            Book a call
            <ArrowUpRightIcon />
          </Button>

          <Button
            variant="outline"
            size="sm"
            nativeButton={false}
            render={<a href={`mailto:${decodeEmail(USER.emailB64)}`} />}
          >
            Send an email
            <ArrowUpRightIcon />
          </Button>
        </div>
      </PanelContent>

      <Testimonials />
      <GitHubContributions />
    </Panel>
  )
}
