"use client"

import { useEffect, useState } from "react"
import { ListTree } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useDirection,
  useSidebar,
} from "@/components/ui"

export function ShowcaseSidebar({ sections }) {
  const [active, setActive] = useState(sections?.[0]?.id ?? null)
  const direction = useDirection()
  const { isMobile, setOpenMobile } = useSidebar()

  useEffect(() => {
    if (!sections?.length) return
    const elements = sections
      .map((s) => document.getElementById(s.id))
      .filter(Boolean)

    if (!elements.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible[0]?.target?.id) {
          setActive(visible[0].target.id)
        }
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: 0 }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [sections])

  if (!sections?.length) return null

  const handleNavigate = () => {
    if (isMobile) setOpenMobile(false)
  }

  return (
    <Sidebar side={direction === "rtl" ? "right" : "left"} collapsible="offcanvas">
      <SidebarHeader>
        <div className="flex items-center gap-2 px-2 py-1.5">
          <ListTree className="text-muted-foreground size-4" />
          <span className="text-foreground text-sm font-medium">
            On this page
          </span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Sections</SidebarGroupLabel>
          <SidebarMenu>
            {sections.map((section) => (
              <SidebarMenuItem key={section.id}>
                <SidebarMenuButton
                  asChild
                  size="sm"
                  isActive={active === section.id}
                >
                  <a href={`#${section.id}`} onClick={handleNavigate}>
                    <span className="truncate">{section.name}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
