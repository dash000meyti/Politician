
import { cn } from "@/lib/utils"
import { LoaderIcon } from "lucide-react"

import {
  Item,
  ItemContent,
  ItemMedia,
  ItemTitle,
} from "@/components/ui"
import { Spinner } from "@/components/ui"

function SpinnerCustomIcon({ className, ...props }) {
  return (
    <LoaderIcon
      role="status"
      aria-label="Loading"
      className={cn("size-4 animate-spin", className)}
      {...props}
    />
  )
}

export function SpinnerDemo() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-4 [--radius:1rem]">
      <Item variant="muted">
        <ItemMedia>
          <Spinner />
        </ItemMedia>
        <ItemContent>
          <ItemTitle className="line-clamp-1">Processing payment...</ItemTitle>
        </ItemContent>
        <ItemContent className="flex-none justify-end">
          <span className="text-sm tabular-nums">$100.00</span>
        </ItemContent>
      </Item>
    </div>
  )
}

export function SpinnerDemoCustom() {
  return (
    <div className="flex items-center gap-4">
      <SpinnerCustomIcon />
    </div>
  )
}

