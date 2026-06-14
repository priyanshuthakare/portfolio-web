import fs from "node:fs"
import path from "node:path"
import { visit } from "unist-util-visit"

import type { UnistNode, UnistTree } from "@/types/unist"

export function remarkComponent() {
  return async (tree: UnistTree) => {
    visit(tree, (node: UnistNode, index, parent) => {
      const { value: srcPath } =
        (getNodeAttributeByName(node, "src") as {
          name: string
          value?: string
          type?: string
        }) || {}

      if (node.name === "ComponentSource") {
        const name = getNodeAttributeByName(node, "name")?.value as string

        if (!name && !srcPath) {
          return null
        }

        try {
          const src = srcPath
            ? path.join(/*turbopackIgnore: true*/ process.cwd(), srcPath)
            : path.join(
                /*turbopackIgnore: true*/ process.cwd(),
                "src",
                "registry",
                "components",
                name,
                `${name}.tsx`
              )

          const filePath = src
          let source = fs.readFileSync(
            /*turbopackIgnore: true*/ filePath,
            "utf8"
          )

          const title = getNodeAttributeByName(node, "title")
          const showLineNumbers = getNodeAttributeByName(
            node,
            "showLineNumbers"
          )

          const codeBlock = {
            type: "code",
            meta: [
              title ? `title="${title.value}"` : "",
              showLineNumbers ? "showLineNumbers" : "",
            ].join(" "),
            lang: path.extname(filePath).slice(1),
            value: source,
          }

          if (parent && typeof index === "number") {
            parent.children.splice(index, 1, codeBlock)
          }
        } catch (error) {
          console.error(error)
        }
      }

      if (node.name === "ComponentPreview") {
        return null
      }
    })
  }
}

function getNodeAttributeByName(node: UnistNode, name: string) {
  return node.attributes?.find((attribute) => attribute.name === name)
}
