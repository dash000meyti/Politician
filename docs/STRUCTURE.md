# Folder Structure

```text
.
├── AGENTS.md                       Top-level agent guide
├── README.md
├── components.json                 shadcn + magicui registry config
├── jsconfig.json                   @/* path alias
├── next.config.mjs
├── postcss.config.mjs
├── eslint.config.mjs
│
├── app/                            Next.js App Router
│   ├── layout.js                   Root layout (ThemeProvider, Toaster, etc.)
│   ├── page.js                     Landing page
│   ├── globals.css                 Tailwind 4 + tokens
│   └── demo/
│       ├── page.jsx                /demo — showcase index
│       ├── components/
│       │   └── page.jsx            /demo/components — shadcn primitives
│       └── magic/
│           ├── page.jsx            /demo/magic — Magic UI categories
│           ├── components/page.jsx
│           ├── special-effects/page.jsx
│           ├── animations/page.jsx
│           ├── text/page.jsx
│           ├── device/page.jsx
│           ├── buttons/page.jsx
│           ├── backgrounds/page.jsx
│           └── community/page.jsx
│
├── components/
│   ├── providers.jsx               Client providers wrapper (ThemeProvider)
│   ├── ui/                         shadcn primitives (kebab-case files)
│   │   ├── index.js                barrel export
│   │   ├── button.jsx
│   │   ├── tabs.jsx
│   │   ├── …
│   │   └── magic/                  Magic UI components (mirrors 8 categories)
│   │       ├── index.js
│   │       ├── components/         e.g. marquee.jsx, terminal.jsx
│   │       ├── special-effects/    e.g. border-beam.jsx, confetti.jsx
│   │       ├── animations/         e.g. blur-fade.jsx
│   │       ├── text/               (empty — install components here)
│   │       ├── device/
│   │       ├── buttons/
│   │       ├── backgrounds/
│   │       └── community/
│   ├── demo/                       Demos for every UI component
│   │   ├── index.js                barrel export
│   │   ├── components/             one file per shadcn primitive
│   │   └── magic/
│   │       ├── components/         mirrors components/ui/magic/components/
│   │       ├── special-effects/
│   │       ├── animations/
│   │       └── …
│   └── showcase/                   Internal showcase library
│       ├── index.js
│       ├── showcase-page.jsx
│       ├── showcase-section.jsx
│       ├── showcase-variant.jsx    (server: reads source files)
│       ├── variant-tabs.jsx        (client: Preview/Code/Usage/Props)
│       ├── code-block.jsx
│       ├── copy-button.jsx
│       ├── source-link.jsx
│       ├── breadcrumbs.jsx
│       ├── showcase-toc.jsx        (sidebar TOC, scroll spy)
│       ├── mobile-toc.jsx          (Sheet for mobile)
│       ├── theme-toggle.jsx
│       ├── command-palette.jsx     (cmdk-based)
│       ├── back-to-top.jsx
│       ├── manifest.js             (flat list of installed components)
│       └── utils.js                (file reading + section walking)
│
├── docs/
│   ├── STRUCTURE.md                this file
│   ├── CONVENTIONS.md
│   ├── ADDING-COMPONENTS.md
│   ├── DEMO-SYSTEM.md
│   ├── RULES-AND-PROMPTS.md
│   ├── COMPONENT-CATALOG.md
│   └── prompts/
│       ├── add-magic-ui-component.md
│       ├── add-shadcn-component.md
│       ├── refactor-demo-page.md
│       └── audit-conventions.md
│
├── hooks/
│   └── use-mobile.js
│
├── lib/
│   └── utils.js                    cn() helper
│
├── public/
│
├── scripts/
│   ├── scaffold-demo.mjs           npm run scaffold:demo <group> <name>
│   ├── scaffold-group.mjs          npm run scaffold:group <group>
│   └── audit-conventions.mjs       npm run audit:conventions
│
└── .cursor/
    └── rules/
        ├── structure.mdc
        ├── naming.mdc
        ├── magic-ui.mdc
        ├── demo-component.mdc
        ├── demo-page.mdc
        └── shadcn.mdc
```

## Mirroring rule

For any component **`<name>`** in group **`<group>`**, three files must exist
with matching paths:

```text
components/ui/magic/<group>/<name>.jsx        ← the component
components/demo/magic/<group>/<name>.jsx      ← the demo variants
app/demo/magic/<group>/page.jsx               ← contains a <ShowcaseSection> for <name>
```

This 1:1:1 mirroring is enforced by `scripts/audit-conventions.mjs` and by the
Cursor rules in `.cursor/rules/`.
