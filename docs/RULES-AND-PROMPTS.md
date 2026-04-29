# Rules and Prompts

This starter ships with two complementary sets of AI guidance:

1. **Cursor rules** (`.cursor/rules/`) — automatically attached by Cursor
   based on the file you're editing.
2. **Prompt templates** (`docs/prompts/`) — copy-pasteable starter prompts
   for common tasks.

## Cursor rules

Located at [`.cursor/rules/`](../.cursor/rules):

| File | Scope | Purpose |
|------|-------|---------|
| `structure.mdc` | Always | Project folder layout and module boundaries. |
| `naming.mdc` | Always | File / component / variant naming conventions. |
| `magic-ui.mdc` | `components/ui/magic/**`, `components/demo/magic/**`, `app/demo/magic/**` | Step-by-step recipe for adding a Magic UI component. |
| `demo-component.mdc` | `components/demo/**` | Variant-file rules. |
| `demo-page.mdc` | `app/demo/**` | Page composition with `<ShowcasePage>`. |
| `shadcn.mdc` | `components/ui/**`, `components/demo/components/**`, `app/demo/components/**` | Adding shadcn primitives. |

Rules with `alwaysApply: true` are auto-attached to every conversation. Rules
with `globs` only attach when files matching the glob are open.

## Prompt templates

Located at [`docs/prompts/`](prompts):

| File | Use when… |
|------|-----------|
| `add-magic-ui-component.md` | Installing any new Magic UI component. |
| `add-shadcn-component.md` | Installing a new shadcn primitive. |
| `refactor-demo-page.md` | Migrating a legacy page to the showcase system. |
| `audit-conventions.md` | Verifying naming + structure across the repo. |

Open a Cursor chat, paste the template, fill in the placeholders, and run.

## How they work together

The Cursor rules are **defensive** — they prevent drift while you edit. The
prompt templates are **constructive** — they generate new components or
refactor existing pages. Use rules for review/edits, prompts for new work.

## AGENTS.md

The root [`AGENTS.md`](../AGENTS.md) is a hand-off doc for any AI agent that
opens the repo. It points to the rules, the prompts, and the docs in the
right order.
