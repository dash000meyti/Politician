import { ShowcasePage, ShowcaseSection, ShowcaseVariant } from "@/components/showcase"
import * as Demos from "@/components/demo"

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Demo", href: "/demo" },
  { label: "Components" },
]

const shadcnDocs = (slug) => `https://ui.shadcn.com/docs/components/${slug}`

const sections = [
  {
    id: "accordion",
    name: "Accordion",
    slug: "accordion",
    file: "accordion",
    description: "A vertically stacked set of interactive headings.",
    variants: [
      { name: "Start (minimal)", exportName: "AccordionDemoStart" },
      { name: "Default", exportName: "AccordionDemo" },
      { name: "Multiple disabled", exportName: "AccordionDemoMultipleDisabled" },
      { name: "RTL", exportName: "AccordionDemoRtl" },
    ],
  },
  {
    id: "alert",
    name: "Alert",
    slug: "alert",
    file: "alert",
    description: "Display a callout for user attention.",
    variants: [
      { name: "Default", exportName: "AlertDemo" },
      { name: "Destructive", exportName: "AlertDemoDestructive" },
      { name: "With action", exportName: "AlertDemoAction" },
      { name: "Custom colors", exportName: "AlertDemoCustomColors" },
    ],
  },
  {
    id: "alert-dialog",
    name: "Alert Dialog",
    slug: "alert-dialog",
    file: "alert-dialog",
    description: "A modal dialog that interrupts the user with important content and expects a response.",
    variants: [
      { name: "Default", exportName: "AlertDialogDemo" },
      { name: "Small", exportName: "AlertDialogDemoSmall" },
      { name: "Media", exportName: "AlertDialogDemoMedia" },
      { name: "Small + media", exportName: "AlertDialogDemoSmallMedia" },
      { name: "Destructive", exportName: "AlertDialogDemoDestructive" },
    ],
  },
  {
    id: "aspect-ratio",
    name: "Aspect Ratio",
    slug: "aspect-ratio",
    file: "aspect-ratio",
    description: "Displays content within a desired aspect ratio.",
    variants: [{ name: "Default", exportName: "AspectRatioDemo" }],
  },
  {
    id: "avatar",
    name: "Avatar",
    slug: "avatar",
    file: "avatar",
    description: "An image element with a fallback for representing users.",
    variants: [
      { name: "Default", exportName: "AvatarDemo" },
      { name: "Badge", exportName: "AvatarDemoBadge" },
      { name: "Badge with icon", exportName: "AvatarDemoBadgeIcon" },
      { name: "Group", exportName: "AvatarDemoGroup" },
      { name: "Group with count", exportName: "AvatarDemoGroupCount" },
      { name: "Group with icon", exportName: "AvatarDemoGroupIcon" },
      { name: "Sizes", exportName: "AvatarDemoSizes" },
    ],
  },
  {
    id: "badge",
    name: "Badge",
    slug: "badge",
    file: "badge",
    description: "Small status descriptors for UI elements.",
    variants: [
      { name: "Default", exportName: "BadgeDemo" },
      { name: "With icon", exportName: "BadgeDemoIcon" },
      { name: "Colors", exportName: "BadgeDemoColors" },
    ],
  },
  {
    id: "breadcrumb",
    name: "Breadcrumb",
    slug: "breadcrumb",
    file: "breadcrumb",
    description: "Displays the path to the current resource using a hierarchy of links.",
    variants: [
      { name: "Default", exportName: "BreadcrumbDemo" },
      { name: "Custom separator", exportName: "BreadcrumbDemoSeparator" },
      { name: "Dropdown", exportName: "BreadcrumbDemoDropdown" },
    ],
  },
  {
    id: "button",
    name: "Button",
    slug: "button",
    file: "button",
    description: "Displays a button or a component that looks like a button.",
    variants: [
      { name: "Default", exportName: "ButtonDemo" },
      { name: "Sizes", exportName: "ButtonDemoSize" },
      { name: "Variants", exportName: "ButtonDemoVariant" },
      { name: "As child", exportName: "ButtonDemoChild" },
    ],
  },
  {
    id: "button-group",
    name: "Button Group",
    slug: "button-group",
    file: "button-group",
    description: "Group multiple related buttons.",
    variants: [
      { name: "Default", exportName: "ButtonGroupDemo" },
      { name: "Orientation", exportName: "ButtonGroupDemoOrientation" },
      { name: "Nested", exportName: "ButtonGroupDemoNested" },
      { name: "Separator", exportName: "ButtonGroupDemoSeparator" },
      { name: "Sizes", exportName: "ButtonGroupDemoSize" },
    ],
  },
  {
    id: "calendar",
    name: "Calendar",
    slug: "calendar",
    file: "calendar",
    description: "A date field component for picking a date or date range.",
    variants: [
      { name: "Default", exportName: "CalendarDemo" },
      { name: "Hijri", exportName: "CalendarDemoHijri" },
      { name: "Range", exportName: "CalendarDemoRange" },
      { name: "Presets", exportName: "CalendarDemoPresets" },
      { name: "With time", exportName: "CalendarDemoTime" },
      { name: "Booked dates", exportName: "CalendarDemoBooked" },
      { name: "Custom days", exportName: "CalendarDemoCustomDays" },
      { name: "Week numbers", exportName: "CalendarDemoWeekNumbers" },
    ],
  },
  {
    id: "card",
    name: "Card",
    slug: "card",
    file: "card",
    description: "Displays a card with header, content and footer.",
    variants: [
      { name: "Default", exportName: "CardDemo" },
      { name: "Small", exportName: "CardDemoSmall" },
      { name: "With image", exportName: "CardDemoImage" },
    ],
  },
  {
    id: "carousel",
    name: "Carousel",
    slug: "carousel",
    file: "carousel",
    description: "A carousel with motion and swipe built using embla.",
    variants: [
      { name: "Default", exportName: "CarouselDemo" },
      { name: "Sizes", exportName: "CarouselDemoSize" },
      { name: "Orientation", exportName: "CarouselDemoOrientation" },
    ],
  },
  {
    id: "chart",
    name: "Chart",
    slug: "chart",
    file: "chart",
    description: "Composable charts built on top of recharts.",
    variants: [
      { name: "Default", exportName: "ChartDemo" },
      { name: "Tooltip", exportName: "ChartDemoTooltip" },
    ],
  },
  {
    id: "checkbox",
    name: "Checkbox",
    slug: "checkbox",
    file: "checkbox",
    description: "A control that allows the user to toggle between checked and not checked.",
    variants: [{ name: "Default", exportName: "CheckboxDemo" }],
  },
  {
    id: "collapsible",
    name: "Collapsible",
    slug: "collapsible",
    file: "collapsible",
    description: "An interactive component which expands/collapses a panel.",
    variants: [
      { name: "Default", exportName: "CollapsibleDemo" },
      { name: "Settings", exportName: "CollapsibleDemoSettings" },
      { name: "File tree", exportName: "CollapsibleDemoFileTree" },
    ],
  },
  {
    id: "combobox",
    name: "Combobox",
    slug: "combobox",
    file: "combobox",
    description: "Autocomplete input + popover combo for selecting from a list.",
    variants: [
      { name: "Default", exportName: "ComboboxDemo" },
      { name: "Multiple", exportName: "ComboboxDemoMultiple" },
      { name: "Clearable", exportName: "ComboboxDemoClear" },
      { name: "Groups + separator", exportName: "ComboboxDemoGroupsAndSeparator" },
      { name: "Custom items", exportName: "ComboboxDemoCustomItems" },
      { name: "Invalid", exportName: "ComboboxDemoInvalid" },
      { name: "Disabled", exportName: "ComboboxDemoDisabled" },
      { name: "Auto highlight", exportName: "ComboboxDemoAutoHighlight" },
      { name: "Popup", exportName: "ComboboxDemoPopup" },
      { name: "Input group", exportName: "ComboboxDemoInputGroup" },
    ],
  },
  {
    id: "command",
    name: "Command",
    slug: "command",
    file: "command",
    description: "Fast, composable, unstyled command menu for React.",
    variants: [
      { name: "Default", exportName: "CommandDemo" },
      { name: "Many items", exportName: "CommandDemoManyItems" },
    ],
  },
  {
    id: "context-menu",
    name: "Context Menu",
    slug: "context-menu",
    file: "context-menu",
    description: "Displays a menu to the user — such as a set of actions or functions — triggered by a button.",
    variants: [
      { name: "Default", exportName: "ContextMenuDemo" },
      { name: "Submenu", exportName: "ContextMenuDemoSubmenu" },
      { name: "With icons", exportName: "ContextMenuDemoIcons" },
      { name: "Checkbox + radio", exportName: "ContextMenuDemoCheckboxRadio" },
    ],
  },
  {
    id: "data-table",
    name: "Data Table",
    slug: "data-table",
    file: "data-table",
    description: "A powerful data table built on tanstack/table.",
    variants: [{ name: "Default", exportName: "DataTableDemo" }],
  },
  {
    id: "date-picker",
    name: "Date Picker",
    slug: "date-picker",
    file: "date-picker",
    description: "A combination of popover + calendar for picking dates.",
    variants: [{ name: "Default", exportName: "DatePickerDemo" }],
  },
  {
    id: "dialog",
    name: "Dialog",
    slug: "dialog",
    file: "dialog",
    description: "A window overlaid on either the primary window or another dialog window.",
    variants: [
      { name: "Default", exportName: "DialogDemo" },
      { name: "Sticky header/footer", exportName: "DialogDemoSticky" },
      { name: "Full content", exportName: "DialogDemoFull" },
      { name: "RTL", exportName: "DialogDemoRtl" },
    ],
  },
  {
    id: "drawer",
    name: "Drawer",
    slug: "drawer",
    file: "drawer",
    description: "A drawer component for React (vaul).",
    variants: [{ name: "Default", exportName: "DrawerDemo" }],
  },
  {
    id: "dropdown-menu",
    name: "Dropdown Menu",
    slug: "dropdown-menu",
    file: "dropdown-menu",
    description: "Displays a menu to the user — such as a set of actions or functions — triggered by a button.",
    variants: [
      { name: "Default", exportName: "DropdownMenuDemo" },
      { name: "Complex", exportName: "DropdownMenuDemoComplex" },
    ],
  },
  {
    id: "empty",
    name: "Empty",
    slug: "empty",
    file: "empty",
    description: "An empty state placeholder for lists, tables, search results, etc.",
    variants: [{ name: "Default", exportName: "EmptyDemo" }],
  },
  {
    id: "field",
    name: "Field",
    slug: "field",
    file: "field",
    description: "Form field wrapper with label, hint, and error states.",
    variants: [{ name: "Default", exportName: "FieldDemo" }],
  },
  {
    id: "hover-card",
    name: "Hover Card",
    slug: "hover-card",
    file: "hover-card",
    description: "Preview content on hover.",
    variants: [{ name: "Default", exportName: "HoverCardDemo" }],
  },
  {
    id: "input",
    name: "Input",
    slug: "input",
    file: "input",
    description: "A text input field.",
    variants: [{ name: "Default", exportName: "InputDemo" }],
  },
  {
    id: "input-group",
    name: "Input Group",
    slug: "input-group",
    file: "input-group",
    description: "An input combined with an addon (icon, button, kbd, etc.).",
    variants: [{ name: "Default", exportName: "InputGroupDemo" }],
  },
  {
    id: "input-otp",
    name: "Input OTP",
    slug: "input-otp",
    file: "input-otp",
    description: "Accessible one-time password input.",
    variants: [
      { name: "Default", exportName: "InputOTPDemo" },
      { name: "With separator", exportName: "InputOTPDemoSeparator" },
    ],
  },
  {
    id: "item",
    name: "Item",
    slug: "item",
    file: "item",
    description: "A list/menu item primitive with optional avatar/image/leading/trailing.",
    variants: [
      { name: "Default", exportName: "ItemDemo" },
      { name: "Avatar", exportName: "ItemDemoAvatar" },
      { name: "Image", exportName: "ItemDemoImage" },
    ],
  },
  {
    id: "kbd",
    name: "Kbd",
    slug: "kbd",
    file: "kbd",
    description: "Keyboard key/shortcut display.",
    variants: [
      { name: "Default", exportName: "KbdDemo" },
      { name: "Inside input group", exportName: "KbdDemoInputGroup" },
    ],
  },
  {
    id: "menubar",
    name: "Menubar",
    slug: "menubar",
    file: "menubar",
    description: "A horizontal menu bar.",
    variants: [{ name: "Default", exportName: "MenubarDemo" }],
  },
  {
    id: "native-select",
    name: "Native Select",
    slug: "native-select",
    file: "native-select",
    description: "A styled native HTML <select>.",
    variants: [{ name: "Default", exportName: "NativeSelectDemo" }],
  },
  {
    id: "navigation-menu",
    name: "Navigation Menu",
    slug: "navigation-menu",
    file: "navigation-menu",
    description: "A collection of links for navigating websites.",
    variants: [{ name: "Default", exportName: "NavigationMenuDemo" }],
  },
  {
    id: "pagination",
    name: "Pagination",
    slug: "pagination",
    file: "pagination",
    description: "Pagination with page links and previous/next.",
    variants: [{ name: "Default", exportName: "PaginationDemo" }],
  },
  {
    id: "popover",
    name: "Popover",
    slug: "popover",
    file: "popover",
    description: "Displays rich content in a portal triggered by a button.",
    variants: [{ name: "Default", exportName: "PopoverDemo" }],
  },
  {
    id: "progress",
    name: "Progress",
    slug: "progress",
    file: "progress",
    description: "Displays progress towards a known total.",
    variants: [{ name: "Default", exportName: "ProgressDemo" }],
  },
  {
    id: "radio-group",
    name: "Radio Group",
    slug: "radio-group",
    file: "radio-group",
    description: "Single-select group of radio inputs.",
    variants: [
      { name: "Default", exportName: "RadioGroupDemo" },
      { name: "With description", exportName: "RadioGroupDemoDescription" },
      { name: "Choice card", exportName: "RadioGroupDemoChoiceCard" },
      { name: "Fieldset", exportName: "RadioGroupDemoFieldset" },
      { name: "Full", exportName: "RadioGroupDemoFull" },
    ],
  },
  {
    id: "resizable",
    name: "Resizable",
    slug: "resizable",
    file: "resizable",
    description: "Resizable panel groups (react-resizable-panels).",
    variants: [{ name: "Default", exportName: "ResizableDemo" }],
  },
  {
    id: "scroll-area",
    name: "Scroll Area",
    slug: "scroll-area",
    file: "scroll-area",
    description: "Augments native scroll functionality for custom, cross-browser styling.",
    variants: [
      { name: "Default", exportName: "ScrollAreaDemo" },
      { name: "Horizontal", exportName: "ScrollAreaDemoHorizontal" },
    ],
  },
  {
    id: "select",
    name: "Select",
    slug: "select",
    file: "select",
    description: "Displays a list of options for the user to pick from.",
    variants: [{ name: "Default", exportName: "SelectDemo" }],
  },
  {
    id: "separator",
    name: "Separator",
    slug: "separator",
    file: "separator",
    description: "Visually or semantically separates content.",
    variants: [
      { name: "Default", exportName: "SeparatorDemo" },
      { name: "Vertical", exportName: "SeparatorDemoVertical" },
    ],
  },
  {
    id: "sheet",
    name: "Sheet",
    slug: "sheet",
    file: "sheet",
    description: "Extends Dialog to display content that complements the main content of the screen.",
    variants: [{ name: "Default", exportName: "SheetDemo" }],
  },
  {
    id: "sidebar",
    name: "Sidebar",
    slug: "sidebar",
    file: "sidebar",
    description: "A composable, themeable and customizable sidebar component.",
    variants: [{ name: "Default", exportName: "SidebarDemo" }],
  },
  {
    id: "skeleton",
    name: "Skeleton",
    slug: "skeleton",
    file: "skeleton",
    description: "Use to show a placeholder while content is loading.",
    variants: [
      { name: "Default", exportName: "SkeletonDemo" },
      { name: "Card", exportName: "SkeletonDemoCard" },
      { name: "Text", exportName: "SkeletonDemoText" },
      { name: "Form", exportName: "SkeletonDemoForm" },
      { name: "Table", exportName: "SkeletonDemoTable" },
    ],
  },
  {
    id: "slider",
    name: "Slider",
    slug: "slider",
    file: "slider",
    description: "An input where the user selects a value from within a given range.",
    variants: [
      { name: "Default", exportName: "SliderDemo" },
      { name: "Range", exportName: "SliderDemoRange" },
      { name: "Multiple", exportName: "SliderDemoMultiple" },
      { name: "Vertical", exportName: "SliderDemoVertical" },
      { name: "Controlled", exportName: "SliderDemoControlled" },
      { name: "Disabled", exportName: "SliderDemoDisabled" },
    ],
  },
  {
    id: "sonner",
    name: "Sonner",
    slug: "sonner",
    file: "sonner",
    description: "An opinionated toast component for React.",
    variants: [
      { name: "Default", exportName: "SonnerDemo" },
      { name: "Types", exportName: "SonnerDemoTypes" },
      { name: "Position", exportName: "SonnerDemoPosition" },
    ],
  },
  {
    id: "spinner",
    name: "Spinner",
    slug: "spinner",
    file: "spinner",
    description: "A loading spinner.",
    variants: [
      { name: "Default", exportName: "SpinnerDemo" },
      { name: "Custom", exportName: "SpinnerDemoCustom" },
    ],
  },
  {
    id: "switch",
    name: "Switch",
    slug: "switch",
    file: "switch",
    description: "A control that allows the user to toggle between two states.",
    variants: [
      { name: "Default", exportName: "SwitchDemo" },
      { name: "Card", exportName: "SwitchDemoCard" },
      { name: "Full", exportName: "SwitchDemoFull" },
    ],
  },
  {
    id: "table",
    name: "Table",
    slug: "table",
    file: "table",
    description: "A responsive table component.",
    variants: [
      { name: "Default", exportName: "TableDemo" },
      { name: "Actions", exportName: "TableDemoActions" },
    ],
  },
  {
    id: "tabs",
    name: "Tabs",
    slug: "tabs",
    file: "tabs",
    description: "A set of layered sections of content.",
    variants: [
      { name: "Default", exportName: "TabsDemo" },
      { name: "Line variant", exportName: "TabsDemoLine" },
      { name: "Vertical", exportName: "TabsDemoVertical" },
      { name: "Full", exportName: "TabsDemoFull" },
    ],
  },
  {
    id: "textarea",
    name: "Textarea",
    slug: "textarea",
    file: "textarea",
    description: "Displays a form textarea.",
    variants: [{ name: "Default", exportName: "TextareaDemo" }],
  },
  {
    id: "toggle",
    name: "Toggle",
    slug: "toggle",
    file: "toggle",
    description: "A two-state button that can be either on or off.",
    variants: [
      { name: "Default", exportName: "ToggleDemo" },
      { name: "Outline", exportName: "ToggleDemoOutline" },
    ],
  },
  {
    id: "toggle-group",
    name: "Toggle Group",
    slug: "toggle-group",
    file: "toggle-group",
    description: "A set of two-state buttons that can be toggled on or off.",
    variants: [
      { name: "Default", exportName: "ToggleGroupDemo" },
      { name: "Spacing", exportName: "ToggleGroupDemoSpacing" },
      { name: "Vertical", exportName: "ToggleGroupDemoVertical" },
      { name: "Custom", exportName: "ToggleGroupDemoCustom" },
    ],
  },
  {
    id: "tooltip",
    name: "Tooltip",
    slug: "tooltip",
    file: "tooltip",
    description: "A popup that displays information related to an element when the element is focused or hovered.",
    variants: [
      { name: "Default", exportName: "TooltipDemo" },
      { name: "Sides", exportName: "TooltipDemoSides" },
      { name: "Keyboard", exportName: "TooltipDemoKeyboard" },
    ],
  },
]

export default function DemoComponentsPage() {
  return (
    <ShowcasePage
      title="Components"
      group="components"
      crumbs={crumbs}
      description="shadcn-style primitives. Each section shows the full range of variants installed in this starter."
    >
      {sections.map((s) => (
        <ShowcaseSection
          key={s.id}
          id={s.id}
          name={s.name}
          description={s.description}
          docsUrl={shadcnDocs(s.slug)}
          sourceFile={`components/ui/${s.file}.jsx`}
        >
          {s.variants.map((v) => {
            const Comp = Demos[v.exportName]
            if (!Comp) return null
            return (
              <ShowcaseVariant
                key={v.exportName}
                name={v.name}
                exportName={v.exportName}
                sourceFile={`components/demo/components/${s.file}.jsx`}
              >
                <Comp />
              </ShowcaseVariant>
            )
          })}
        </ShowcaseSection>
      ))}
    </ShowcasePage>
  )
}
