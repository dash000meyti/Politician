"use client";
import React, { cloneElement, isValidElement, memo } from "react"

import { cn } from "@/lib/utils"

const VISUAL_CLASS =
  "animate-aurora relative bg-size-[200%_auto] bg-clip-text text-transparent"

function buildGradientStyle(colors, speed) {
  return {
    backgroundImage: `linear-gradient(135deg, ${colors.join(", ")}, ${colors[0]})`,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    animationDuration: `${10 / speed}s`,
  }
}

/**
 * Inline string children: duplicated for screen readers + gradient span.
 * Single React element child: gradient styles are merged onto that element
 * (required for `background-clip: text` to hit the glyphs). Use `srText`
 * for a screen-reader summary when the child is not plain text.
 */
export const AuroraText = memo(
  ({
    children,
    className = "",
    colors = ["#FF0080", "#7928CA", "#0070F3", "#38bdf8"],
    speed = 1,
    srText,
  }) => {
    const gradientStyle = buildGradientStyle(colors, speed)

    if (isValidElement(children)) {
      const sr =
        srText ??
        (typeof children.props?.["aria-label"] === "string"
          ? children.props["aria-label"]
          : null)

      return (
        <span className={cn("relative inline-block", className)}>
          {sr ? <span className="sr-only">{sr}</span> : null}
          {cloneElement(children, {
            className: cn(children.props.className, VISUAL_CLASS),
            style: { ...children.props.style, ...gradientStyle },
          })}
        </span>
      )
    }

    return (
      <span className={cn("relative inline-block", className)}>
        <span className="sr-only">{children}</span>
        <span
          className={cn(VISUAL_CLASS)}
          style={gradientStyle}
          aria-hidden="true"
        >
          {children}
        </span>
      </span>
    )
  },
)

AuroraText.displayName = "AuroraText"
