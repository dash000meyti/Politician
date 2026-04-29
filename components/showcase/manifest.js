export const manifest = [
  {
    group: "components",
    label: "Components",
    href: "/demo/components",
    items: [
      "accordion", "alert", "alert-dialog", "aspect-ratio", "avatar", "badge",
      "breadcrumb", "button", "button-group", "calendar", "card", "carousel",
      "chart", "checkbox", "collapsible", "combobox", "command", "context-menu",
      "data-table", "date-picker", "dialog", "drawer", "dropdown-menu", "empty",
      "field", "hover-card", "input", "input-group", "input-otp", "item",
      "kbd", "menubar", "native-select", "navigation-menu", "pagination",
      "popover", "progress", "radio-group", "resizable", "scroll-area",
      "select", "separator", "sheet", "sidebar", "skeleton", "slider", "sonner",
      "spinner", "switch", "table", "tabs", "textarea", "toggle", "toggle-group",
      "tooltip",
    ],
  },
  {
    group: "magic/components",
    label: "Magic UI · Components",
    href: "/demo/magic/components",
    items: [
      "marquee", "terminal", "hero-video-dialog", "bento-grid", "animated-list",
      "dock", "tweet-card", "orbiting-circles", "avatar-circles", "lens",
      "pointer", "smooth-cursor", "progressive-blur", "dotted-map",
    ],
  },
  {
    group: "magic/special-effects",
    label: "Magic UI · Special Effects",
    href: "/demo/magic/special-effects",
    items: [
      "animated-beam", "border-beam", "shine-border", "magic-card", "glare-hover",
      "meteors", "confetti", "particles", "animated-theme-toggler",
    ],
  },
  {
    group: "magic/animations",
    label: "Magic UI · Animations",
    href: "/demo/magic/animations",
    items: ["blur-fade"],
  },
  { group: "magic/text", label: "Magic UI · Text", href: "/demo/magic/text", items: [] },
  { group: "magic/device", label: "Magic UI · Device Mocks", href: "/demo/magic/device", items: [] },
  { group: "magic/buttons", label: "Magic UI · Buttons", href: "/demo/magic/buttons", items: [] },
  { group: "magic/backgrounds", label: "Magic UI · Backgrounds", href: "/demo/magic/backgrounds", items: [] },
  { group: "magic/community", label: "Magic UI · Community", href: "/demo/magic/community", items: [] },
]

export function flatManifest() {
  const list = []
  for (const g of manifest) {
    for (const id of g.items) {
      list.push({
        id,
        name: idToTitle(id),
        group: g.group,
        groupLabel: g.label,
        href: `${g.href}#${id}`,
      })
    }
  }
  return list
}

function idToTitle(id) {
  return String(id)
    .split("-")
    .map((part) => (part.length === 0 ? part : part[0].toUpperCase() + part.slice(1)))
    .join(" ")
}
