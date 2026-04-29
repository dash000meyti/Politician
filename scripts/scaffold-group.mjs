#!/usr/bin/env node
import { writeFile, mkdir, access } from "node:fs/promises"
import { join } from "node:path"

function usage() {
  console.error("Usage: npm run scaffold:group -- <group-name>")
  console.error("  group-name: kebab-case slug (e.g. 'animations')")
  process.exit(1)
}

const args = process.argv.slice(2)
if (args.length < 1) usage()
const [group] = args
if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(group)) {
  console.error(`Invalid group name "${group}". Use kebab-case.`)
  process.exit(1)
}

const root = process.cwd()
const uiDir = join(root, "components", "ui", "magic", group)
const demoDir = join(root, "components", "demo", "magic", group)
const pageDir = join(root, "app", "demo", "magic", group)

async function fileExists(p) {
  try {
    await access(p)
    return true
  } catch {
    return false
  }
}

async function writeIfMissing(path, contents) {
  if (await fileExists(path)) {
    console.log(`· ${path} already exists`)
    return false
  }
  await writeFile(path, contents, "utf8")
  console.log(`✓ Created ${path}`)
  return true
}

const Title = group
  .split("-")
  .map((w) => w[0].toUpperCase() + w.slice(1))
  .join(" ")

const pageTemplate = `import { ShowcasePage } from "@/components/showcase"

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Demo", href: "/demo" },
  { label: "Magic UI", href: "/demo/magic" },
  { label: "${Title}" },
]

export default function DemoMagic${Title.replace(/\\s+/g, "")}Page() {
  return (
    <ShowcasePage
      title="${Title}"
      group="magic/${group}"
      crumbs={crumbs}
      description="${Title} components."
    >
      {null}
    </ShowcasePage>
  )
}
`

async function main() {
  await mkdir(uiDir, { recursive: true })
  await mkdir(demoDir, { recursive: true })
  await mkdir(pageDir, { recursive: true })

  await writeIfMissing(join(uiDir, "index.js"), "export {}\n")
  await writeIfMissing(join(demoDir, "index.js"), "export {}\n")
  await writeIfMissing(join(pageDir, "page.jsx"), pageTemplate)

  console.log(`\nDon't forget to:`)
  console.log(`  1. Add 'export * from "./${group}"' to components/ui/magic/index.js`)
  console.log(`  2. Add 'export * from "./${group}"' to components/demo/magic/index.js`)
  console.log(`  3. Add an entry for 'magic/${group}' to components/showcase/manifest.js`)
  console.log(`  4. Add a card for "${Title}" to app/demo/magic/page.jsx`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
