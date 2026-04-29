"use client"

import { ScrollArea } from "@/components/ui"
import { ProgressiveBlur } from "@/components/ui/magic"

export function ProgressiveBlurDemoStart() {
  return (
    <div className="bg-card relative mx-auto h-[300px] w-sm max-w-[500px] overflow-hidden rounded-xl border">
      <div className="h-full overflow-auto">
        <div className="flex flex-col gap-2 p-4">
          {Array.from({ length: 20 }).map((_, index) => (
            <div
              key={index}
              className="bg-muted text-muted-foreground flex h-12 w-full items-center justify-center rounded-md text-sm"
            >
              {index}
            </div>
          ))}
        </div>
      </div>
      <ProgressiveBlur position="bottom" height="40%" />
    </div>
  )
}

export function ProgressiveBlurDemo() {
  return (
    <div className="relative h-[400px] w-sm max-w-[500px] overflow-hidden rounded-xl border">
      <ScrollArea className="h-full">
        <div className="flex flex-col gap-2 p-4">
          {Array.from({ length: 20 }).map((_, index) => (
            <div
              key={index}
              className="bg-card flex h-20 w-full items-center justify-center rounded-xl border"
            >
              {index}
            </div>
          ))}
        </div>
      </ScrollArea>
      <ProgressiveBlur position="bottom" height="40%" />
    </div>
  )
}

export function ProgressiveBlurDemoTop() {
  return (
    <div className="relative h-[400px] w-sm max-w-[500px] overflow-hidden rounded-xl border">
      <ScrollArea className="h-full">
        <div className="flex flex-col gap-2 p-4">
          {Array.from({ length: 20 }).map((_, index) => (
            <div
              key={index}
              className="bg-card flex h-20 w-full items-center justify-center rounded-xl border"
            >
              {index}
            </div>
          ))}
        </div>
      </ScrollArea>
      <ProgressiveBlur position="top" height="30%" />
    </div>
  )
}

export function ProgressiveBlurDemoBoth() {
  return (
    <div className="relative h-[400px] w-sm max-w-[500px] overflow-hidden rounded-xl border">
      <ScrollArea className="h-full">
        <div className="flex flex-col gap-2 p-4">
          {Array.from({ length: 20 }).map((_, index) => (
            <div
              key={index}
              className="bg-card flex h-20 w-full items-center justify-center rounded-xl border"
            >
              {index}
            </div>
          ))}
        </div>
      </ScrollArea>
      <ProgressiveBlur position="both" />
    </div>
  )
}
