import Link from "next/link"

import {
  ArrowUpRightIcon,
  CircleFadingArrowUpIcon,
} from "lucide-react"

import { Button } from "@/components/ui"

export function ButtonDemo() {
  return (
    <div className="flex flex-wrap items-center gap-2 md:flex-row">
      <Button>Button</Button>
      <Button size="icon" aria-label="Submit">
        <ArrowUpRightIcon />
      </Button>
    </div>
  )
}

export function ButtonDemoSize() {
  return (
    <div className="flex flex-col items-start gap-8 sm:flex-row">
      <div className="flex items-start gap-2">
        <Button size="xs" variant="outline">
          Extra Small
        </Button>
        <Button size="icon-xs" aria-label="Submit" variant="outline">
          <ArrowUpRightIcon />
        </Button>
      </div>
      <div className="flex items-start gap-2">
        <Button size="sm" variant="outline">
          Small
        </Button>
        <Button size="icon-sm" aria-label="Submit" variant="outline">
          <ArrowUpRightIcon />
        </Button>
      </div>
      <div className="flex items-start gap-2">
        <Button variant="outline">Default</Button>
        <Button size="icon" aria-label="Submit" variant="outline">
          <ArrowUpRightIcon />
        </Button>
      </div>
      <div className="flex items-start gap-2">
        <Button variant="outline" size="lg">
          Large
        </Button>
        <Button size="icon-lg" aria-label="Submit" variant="outline">
          <ArrowUpRightIcon />
        </Button>
      </div>
    </div>
  )
}

export function ButtonDemoVariant() {
  return (
    <div className="flex flex-wrap items-center gap-2 md:flex-row">
      <Button>Button</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="link">Link</Button>
      <Button variant="outline" size="icon">
        <CircleFadingArrowUpIcon />
      </Button>
      <Button variant="outline" size="sm">
        <CircleFadingArrowUpIcon /> New Branch
      </Button>
      <Button variant="outline" size="icon" className="rounded-full">
        <ArrowUpRightIcon />
      </Button>
    </div>
  )
}

export function ButtonDemoChild() {
  return (
    <div className="flex flex-wrap items-center gap-2 md:flex-row">
      <Button asChild>
        <Link href="/login">Login</Link>
      </Button>
    </div>
  )
}
