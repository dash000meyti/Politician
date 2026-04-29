#!/usr/bin/env node
import { readdir, readFile, stat } from "node:fs/promises"
import { join, basename, extname } from "node:path"

const root = process.cwd()
const issues = []

const VALID_GROUPS = [
  "components",
  "special-effects",
  "animations",
  "text",
  "device",
  "buttons",
  "backgrounds",
  "community",
]

function ok(msg) {
  console.log(`✓ ${msg}`)
}

function fail(msg) {
  issues.push(msg)
  console.log(`✗ ${msg}`)
}

async function* walk(dir) {
  let entries
  try {
    entries = await readdir(dir, { withFileTypes: true })
  } catch {
    return
  }
  for (const entry of entries) {
    const full = join(dir, entry.name)
    if (entry.isDirectory()) {
      yield* walk(full)
    } else {
      yield full
    }
  }
}

async function exists(p) {
  try {
    await stat(p)
    return true
  } catch {
    return false
  }
}

async function checkKebabCase() {
  for (const dir of [
    join(root, "components", "ui"),
    join(root, "components", "demo"),
    join(root, "app", "demo"),
  ]) {
    for await (const file of walk(dir)) {
      if (!file.endsWith(".jsx") && !file.endsWith(".js")) continue
      const name = basename(file, extname(file))
      if (name === "index" || name === "page" || name === "layout") continue
      if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(name)) {
        fail(`Non-kebab-case file name: ${file}`)
      }
    }
  }
}

async function checkMagicGroups() {
  const uiMagic = join(root, "components", "ui", "magic")
  let entries = []
  try {
    entries = (await readdir(uiMagic, { withFileTypes: true })).filter((e) => e.isDirectory())
  } catch {
    fail(`Missing components/ui/magic directory`)
    return
  }
  for (const e of entries) {
    if (!VALID_GROUPS.includes(e.name)) {
      fail(`Invalid Magic UI group: components/ui/magic/${e.name}`)
    }
  }
  for (const g of VALID_GROUPS) {
    const indexPath = join(uiMagic, g, "index.js")
    if (!(await exists(indexPath))) {
      fail(`Missing components/ui/magic/${g}/index.js`)
    }
    const demoIdx = join(root, "components", "demo", "magic", g, "index.js")
    if (!(await exists(demoIdx))) {
      fail(`Missing components/demo/magic/${g}/index.js`)
    }
    const pagePath = join(root, "app", "demo", "magic", g, "page.jsx")
    if (!(await exists(pagePath))) {
      fail(`Missing app/demo/magic/${g}/page.jsx`)
    }
  }
}

async function checkMirroring() {
  for (const g of VALID_GROUPS) {
    const uiDir = join(root, "components", "ui", "magic", g)
    if (!(await exists(uiDir))) continue
    const demoDir = join(root, "components", "demo", "magic", g)
    const uiFiles = (await readdir(uiDir)).filter((f) => f.endsWith(".jsx"))
    for (const f of uiFiles) {
      if (!(await exists(join(demoDir, f)))) {
        fail(`Missing demo for components/ui/magic/${g}/${f} → components/demo/magic/${g}/${f}`)
      }
    }
  }
}

async function checkVariantNames() {
  const demoRoot = join(root, "components", "demo")
  const exportRe = /^[ \t]*export\s+(?:async\s+)?function\s+(\w+)\s*\(/gm
  for await (const file of walk(demoRoot)) {
    if (!file.endsWith(".jsx")) continue
    const slug = basename(file, ".jsx")
    if (slug === "index") continue
    const Pascal = slug
      .split("-")
      .map((w) => w[0].toUpperCase() + w.slice(1))
      .join("")
    const src = await readFile(file, "utf8")
    let m
    while ((m = exportRe.exec(src))) {
      const name = m[1]
      if (!/Demo/.test(name)) continue
      const lower = name.toLowerCase()
      const expectedLower = Pascal.toLowerCase()
      if (!lower.startsWith(expectedLower)) {
        fail(`${file}: variant "${name}" should start with "${Pascal}" (file slug)`)
        continue
      }
      const restLower = lower.slice(expectedLower.length)
      if (!restLower.startsWith("demo")) {
        fail(`${file}: variant "${name}" should be "${Pascal}Demo" or "${Pascal}Demo<Modifier>"`)
      }
      if (/Demo\d+$/.test(name)) {
        fail(`${file}: numbered variant "${name}" — rename to a descriptive modifier`)
      }
    }
  }
}

async function checkPagesUseShowcase() {
  const root = join(process.cwd(), "app", "demo")
  for await (const file of walk(root)) {
    if (!file.endsWith("page.jsx")) continue
    const src = await readFile(file, "utf8")
    if (file.endsWith("/demo/page.jsx") || file.endsWith("/demo/magic/page.jsx")) continue
    if (!src.includes("@/components/showcase") && src.includes("export default")) {
      fail(`Page does not import @/components/showcase: ${file}`)
    }
    if (/<\s*Spacing\b/.test(src)) {
      fail(`Page uses legacy <Spacing>: ${file}`)
    }
  }
}

async function main() {
  console.log("Running conventions audit…\n")
  await checkKebabCase()
  await checkMagicGroups()
  await checkMirroring()
  await checkVariantNames()
  await checkPagesUseShowcase()
  console.log()
  if (issues.length === 0) {
    ok("No issues found. Conventions are clean.")
    process.exit(0)
  } else {
    console.log(`\n${issues.length} issue(s) found.`)
    process.exit(1)
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
