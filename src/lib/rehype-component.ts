import fs from "node:fs"
import path from "node:path"
import { u } from "unist-builder"
import { visit } from "unist-util-visit"

import type { UnistNode, UnistTree } from "@/types/unist"

import { formatCode } from "./format-code"

type NodeToProcess = {
  node: UnistNode
  type: "ComponentSource"
  name: string
  fileName?: string
  srcPath?: string
}

export function rehypeComponent() {
  return async (tree: UnistTree) => {
    const nodesToProcess: NodeToProcess[] = []

    visit(tree, (node: UnistNode) => {
      const { value: srcPath } =
        (getNodeAttributeByName(node, "src") as {
          name: string
          value?: string
          type?: string
        }) || {}

      if (node.name === "ComponentSource") {
        const name = getNodeAttributeByName(node, "name")?.value as string
        const fileName = getNodeAttributeByName(node, "fileName")?.value as
          | string
          | undefined

        if (name || srcPath) {
          nodesToProcess.push({
            node,
            type: "ComponentSource",
            name,
            fileName,
            srcPath,
          })
        }
      }
    })

    await Promise.all(
      nodesToProcess.map(async (item) => {
        if (item.type === "ComponentSource") {
          try {
            let src: string

            if (item.srcPath) {
              src = path.join(
                /*turbopackIgnore: true*/ process.cwd(),
                item.srcPath
              )
            } else {
              src = path.join(
                /*turbopackIgnore: true*/ process.cwd(),
                "src",
                "registry",
                "components",
                item.name,
                `${item.fileName || item.name}.tsx`
              )
            }

            const filePath = src
            const raw = fs.readFileSync(
              /*turbopackIgnore: true*/ filePath,
              "utf8"
            )
            const source = await formatCode(raw, "radix-vega")

            const title = getNodeAttributeByName(item.node, "title")
            const showLineNumbers = getNodeAttributeByName(
              item.node,
              "showLineNumbers"
            )
            const codeMeta = getNodeAttributeByName(item.node, "data-code-meta")

            item.node.children?.push(
              u("element", {
                tagName: "pre",
                properties: {},
                children: [
                  u("element", {
                    tagName: "code",
                    properties: {
                      className: [
                        `language-${path.extname(filePath).slice(1)}`,
                      ],
                    },
                    data: {
                      meta: [
                        title ? `title="${title.value}"` : "",
                        showLineNumbers ? "showLineNumbers" : "",
                      ]
                        .concat(codeMeta ? [codeMeta.value as string] : [])
                        .join(" "),
                    },
                    children: [
                      {
                        type: "text",
                        value: source,
                      },
                    ],
                  }),
                ],
              })
            )
          } catch (error) {
            console.error(error)
          }
        }
      })
    )
  }
}

function getNodeAttributeByName(node: UnistNode, name: string) {
  return node.attributes?.find((attribute) => attribute.name === name)
}
