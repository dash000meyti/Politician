"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import * as React from "react"

import { cn } from "@/lib/utils"
import { useLocale } from "@/lib/i18n/dictionary-context"

export function localized(href, locale) {
  if (!href) return `/${locale}`
  if (href.startsWith("http")) return href
  if (href === "/") return `/${locale}`
  if (href.startsWith(`/${locale}/`) || href === `/${locale}`) return href
  return `/${locale}${href.startsWith("/") ? href : `/${href}`}`
}

export function SiteLink({ href, className, activeClassName, children, ...props }) {
  const locale = useLocale()
  const pathname = usePathname()
  const fullHref = localized(href, locale)
  const isActive =
    fullHref === pathname ||
    (fullHref !== `/${locale}` && pathname?.startsWith(fullHref))
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
