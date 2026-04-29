"use client"

import { useEffect, useState } from "react"

export function ShowcaseToc({ sections }) {
  const [active, setActive] = useState(sections?.[0]?.id ?? null)

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

  return (
    <nav aria-label="On this page" className="space-y-1">
      <p className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
        On this page
      </p>
      <div className="space-y-0.5 border-l border-border">
        {sections.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className={`-ml-px block truncate border-l py-1 pl-3 text-sm transition-colors ${
              active === s.id
                ? "border-foreground text-foreground"
                : "border-transparent text-muted-foreground hover:border-border hover:text-foreground"
            }`}
          >
            {s.name}
          </a>
        ))}
      </div>
    </nav>
  )
}
