#!/usr/bin/env node
import { readFile, writeFile, mkdir, access } from "node:fs/promises"
import { existsSync } from "node:fs"
import { join, dirname } from "node:path"

const VALID_GROUPS = new Set([
  "components",
  "special-effects",
  "animations",
  "text",
  "device",
  "buttons",
  "backgrounds",
  "community",
])

function usage() {
  console.error("Usage: npm run scaffold:demo -- <group> <component-name>")
  console.error("  group: components | special-effects | animations | text | device | buttons | backgrounds | community")
  console.error("  component-name: kebab-case (e.g. 'border-beam')")
  process.exit(1)
}

const args = process.argv.slice(2)
if (args.length < 2) usage()
const [group, name] = args
if (!VALID_GROUPS.has(group)) {
  console.error(`Invalid group "${group}".`)
  usage()
}
if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(name)) {
  console.error(`Invalid component name "${name}". Use kebab-case (e.g. "border-beam").`)
  process.exit(1)
}

const Pascal = name
  .split("-")
  .map((w) => w[0].toUpperCase() + w.slice(1))
  .join("")

const root = process.cwd()
const demoDir = join(root, "components", "demo", "magic", group)
const demoFile = join(demoDir, `${name}.jsx`)
const demoIndex = join(demoDir, "index.js")
const uiDir = join(root, "components", "ui", "magic", group)
const uiFile = join(uiDir, `${name}.jsx`)
const uiIndex = join(uiDir, "index.js")

async function ensureDir(dir) {
  await mkdir(dir, { recursive: true })
}

async function fileExists(p) {
  try {
    await access(p)
    return true
  } catch {
    return false
  }
}

const demoTemplate = `import { ${Pascal} } from "@/components/ui/magic"

export function ${Pascal}DemoStart() {
  return (
    <${Pascal} />
  )
}

export function ${Pascal}Demo() {
  return (
    <${Pascal} />
  )
}
`

async function appendIndexExport(indexPath, exportLine) {
  await ensureDir(dirname(indexPath))
  let current = ""
  if (await fileExists(indexPath)) {
    current = await readFile(indexPath, "utf8")
  }
  if (current.includes(exportLine.trim())) return false
  // Replace empty `export {}` placeholder if present
  if (current.trim() === "export {}") {
    current = ""
  }
  const next = current ? current.replace(/\s*$/, "") + "\n" + exportLine + "\n" : exportLine + "\n"
  await writeFile(indexPath, next, "utf8")
  return true
}

async function main() {
  await ensureDir(demoDir)

  if (await fileExists(demoFile)) {
    console.error(`✗ Demo file already exists: ${demoFile}`)
    process.exit(1)
  }

  await writeFile(demoFile, demoTemplate, "utf8")
  console.log(`✓ Created ${demoFile}`)

  const added = await appendIndexExport(demoIndex, `export * from './${name}'`)
  console.log(added ? `✓ Updated ${demoIndex}` : `· ${demoIndex} already had export`)

  if (!existsSync(uiFile)) {
    console.warn(
      `! Reminder: also install the UI component with\n  npx shadcn@latest add @magicui/${name}\n  and place the result at ${uiFile}`
    )
  }

  if (existsSync(uiDir) && !existsSync(uiIndex)) {
    await writeFile(uiIndex, "export {}\n", "utf8")
  }

  console.log(`\nNext steps:`)
  console.log(`  1. Add the component to components/ui/magic/${group}/${name}.jsx`)
  console.log(`  2. Add export to components/ui/magic/${group}/index.js`)
  console.log(`  3. Add a <ShowcaseSection> for "${Pascal}" to app/demo/magic/${group}/page.jsx`)
  console.log(`  4. Append "${name}" to components/showcase/manifest.js`)
  console.log(`  5. Mark "${Pascal}" as installed in docs/COMPONENT-CATALOG.md`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
