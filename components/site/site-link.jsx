"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import * as React from "react"

import { cn } from "@/lib/utils"

export function SiteLink({ href, className, activeClassName, children, ...props }) {
  const pathname = usePathname()
  const fullHref = href?.startsWith("http") ? href : href || "/"
  const isActive =
    fullHref === pathname ||
    (fullHref !== "/" && pathname?.startsWith(fullHref))
  return (
    <Link
      href={fullHref}
      className={cn(className, isActive && activeClassName)}
      data-active={isActive ? "true" : undefined}
      {...props}
    >
      {children}
    </Link>
  )
}
