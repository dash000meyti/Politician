"use client"

import * as React from "react"
import { Home, User2, Layers, Mail } from "lucide-react"

import { cn } from "@/lib/utils"
import { useDictionary } from "@/lib/i18n/dictionary-context"
import { Dock, DockIcon } from "@/components/ui/magic"
import { Tooltip, TooltipContent, TooltipTrigger, Separator } from "@/components/ui"
import { ThemeToggle } from "@/components/showcase/theme-toggle"
import { SiteLink } from "./site-link"
import { SocialIcon } from "./social-icon"

const ITEMS = [
  { href: "/", icon: Home, labelKey: "home" },
  { href: "/content", icon: Layers, labelKey: "content" },
  { href: "/about", icon: User2, labelKey: "about" },
  { href: "/contact", icon: Mail, labelKey: "contact" },
]

export function DockNav() {
  const dict = useDictionary()

  return (
    <div
      className={cn(
        "pointer-events-none fixed inset-x-0 bottom-3 z-30 flex justify-center px-3 sm:bottom-5",
      )}
      aria-hidden={false}
    >
      <div className="pointer-events-auto">
        <Dock
          iconSize={42}
          iconMagnification={64}
          iconDistance={120}
          className="mt-0 border-border/60 bg-background/70 shadow-2xl shadow-black/20"
        >
          {ITEMS.map((item) => {
            const Icon = item.icon
            return (
              <DockIcon key={item.href}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <SiteLink
                      href={item.href}
                      className="flex h-full w-full items-center justify-center rounded-full text-foreground/70 transition-colors hover:text-foreground"
                      activeClassName="text-foreground"
                    >
                      <Icon className="h-[55%] w-[55%]" />
                      <span className="sr-only">{dict.nav[item.labelKey]}</span>
                    </SiteLink>
                  </TooltipTrigger>
                  <TooltipContent side="top" sideOffset={6}>
                    {dict.nav[item.labelKey]}
                  </TooltipContent>
                </Tooltip>
              </DockIcon>
            )
          })}
          <Separator orientation="vertical" className="!h-6 mx-1" />
          <DockIcon>
            <ThemeToggle />
          </DockIcon>
          <DockIcon>
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-full w-full items-center justify-center rounded-full text-foreground/70 transition-colors hover:text-foreground"
                  aria-label="GitHub"
                >
                  <SocialIcon name="github" size={18} />
                </a>
              </TooltipTrigger>
              <TooltipContent side="top" sideOffset={6}>
                GitHub
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        </Dock>
      </div>
    </div>
  )
}
