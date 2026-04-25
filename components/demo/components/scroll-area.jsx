import * as React from "react"

import { ScrollArea,ScrollBar } from "@/components/ui"
import { Separator } from "@/components/ui"

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
)
const topics = [
  "Getting Started",
  "Components",
  "Forms",
  "Navigation",
  "Overlays",
  "Feedback",
  "Data Display",
  "Utilities",
]

export function ScrollAreaDemo() {
  return (
    <ScrollArea className="h-72 w-48 rounded-md border">
      <div className="p-4">
        <h4 className="mb-4 text-sm leading-none font-medium">Tags</h4>
        {tags.map((tag) => (
          <React.Fragment key={tag}>
            <div className="text-sm">{tag}</div>
            <Separator className="my-2" />
          </React.Fragment>
        ))}
      </div>
    </ScrollArea>
  )
}

export function ScrollAreaDemoHorizontal() {
  return (
    <ScrollArea className="w-96 rounded-md border whitespace-nowrap">
      <div className="flex w-max gap-4 p-4">
        {topics.map((topic) => (
          <React.Fragment key={topic}>
            <div className="min-w-40 text-sm">{topic}</div>
            <Separator orientation="vertical" className="h-4" />
          </React.Fragment>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  )
}