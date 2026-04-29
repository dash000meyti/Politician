# Demo System

The showcase library at [components/showcase](../components/showcase) renders
all `/demo/...` pages with a consistent, polished UX.

## High-level shape

```jsx
<ShowcasePage title group crumbs description>
  <ShowcaseSection id name description docsUrl sourceFile>
    <ShowcaseVariant name exportName sourceFile>
      <FooDemo />
    </ShowcaseVariant>
    <ShowcaseVariant …>
      <FooDemoStart />
    </ShowcaseVariant>
  </ShowcaseSection>

  <ShowcaseSection …>
    …
  </ShowcaseSection>
</ShowcasePage>
```

## What each component does

| Component | Type | Responsibility |
|-----------|------|----------------|
| `ShowcasePage` | Server | Page shell: sticky header, breadcrumbs, sidebar TOC, command palette, theme toggle, content area, back-to-top FAB. |
| `ShowcaseSection` | Server | A single component's section with anchor id, name, description, source link, docs link. |
| `ShowcaseVariant` | Server (async) | Reads the demo source from disk, slices the requested `exportName`, and forwards everything to `<VariantTabs>`. |
| `VariantTabs` | Client | radix Tabs with **Preview / Code / Usage / Props** content. Preview renders the `children` (server-rendered demo). |
| `CodeBlock` | Server | `<pre>` block with copy button. |
| `CopyButton` | Client | `navigator.clipboard.writeText` with a success state. |
| `ShowcaseToc` | Client | Sidebar TOC with `IntersectionObserver`-based scroll spy. |
| `MobileToc` | Client | Sheet wrapping the TOC for `<lg` screens. |
| `CommandPalette` | Client | Global cmdk palette (⌘K / Ctrl-K / `/`). |
| `ThemeToggle` | Client | next-themes-based light/dark toggle. |
| `BackToTop` | Client | Floating button when scrolled. |

## How code is read

`<ShowcaseVariant>` is an async Server Component. It calls
`readSourceFile(sourceFile)` (in `utils.js`) which:

- Validates the path starts with one of: `components/`, `app/`, `lib/`, `hooks/`
- Disallows `..` traversal
- Reads the file with `fs.promises.readFile`

Then `extractExport(source, exportName)` slices the function body for the
requested export. The Code tab shows that slice.

## How TOC is computed

`collectSections(children)` walks the React tree of `ShowcasePage` children,
finds elements whose `displayName === "ShowcaseSection"`, and emits
`{ id, name }` records. The TOC sidebar receives this list as a prop and
renders it client-side with scroll-spy.

## Adding a Props table

Pass a `propsTable` prop to `<ShowcaseVariant>`:

```jsx
<ShowcaseVariant
  name="Default"
  exportName="BorderBeamDemo"
  sourceFile="components/demo/magic/special-effects/border-beam.jsx"
  propsTable={[
    { name: "size", type: "number", default: "100", description: "Beam size in px" },
    { name: "duration", type: "number", default: "8", description: "Cycle duration (s)" },
  ]}
>
  <BorderBeamDemo />
</ShowcaseVariant>
```

## Empty state

If `children` resolves to no `<ShowcaseSection>`s, `ShowcasePage` automatically
renders a polite "no components installed yet" empty state.

## Manifest

`components/showcase/manifest.js` is a flat list of installed component IDs
per group. The command palette renders entries from `flatManifest()`. When
you add or remove a component, **edit this file** so the global search stays
correct.
