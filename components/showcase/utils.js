import fs from "node:fs/promises"
import path from "node:path"

const ALLOWED_PREFIXES = ["components/", "app/", "lib/", "hooks/"]

export async function readSourceFile(relativePath) {
  if (!relativePath) return null
  const normalized = String(relativePath).replace(/^\.\/+/, "").replace(/\\/g, "/")
  if (!ALLOWED_PREFIXES.some((p) => normalized.startsWith(p))) return null
  if (normalized.includes("..")) return null
  const abs = path.join(/*turbopackIgnore: true*/ process.cwd(), normalized)
  try {
    return await fs.readFile(abs, "utf8")
  } catch {
    return null
  }
}

export function extractExport(source, exportName) {
  if (!source) return ""
  if (!exportName) return source
  const fnRegex = new RegExp(
    `export\\s+(?:default\\s+)?(?:async\\s+)?function\\s+${exportName}\\s*\\(`
  )
  const constRegex = new RegExp(`export\\s+const\\s+${exportName}\\s*=`)
  const matchFn = source.match(fnRegex)
  const matchConst = source.match(constRegex)
  const m = matchFn ?? matchConst
  if (!m) return source
  const start = m.index
  let i = source.indexOf("{", start)
  if (i < 0) return source.slice(start).trim()
  let depth = 0
  while (i < source.length) {
    const ch = source[i]
    if (ch === "{") depth++
    else if (ch === "}") {
      depth--
      if (depth === 0) {
        return source.slice(start, i + 1).trim()
      }
    }
    i++
  }
  return source.slice(start).trim()
}

export function buildUsageSnippet({ exportName, importPath = "@/components/demo" }) {
  if (!exportName) return ""
  return `import { ${exportName} } from "${importPath}"

export default function Example() {
  return <${exportName} />
}`
}

export function slugify(input) {
  if (!input) return ""
  return String(input)
    .toLowerCase()
    .replace(/[^a-z0-9\u0600-\u06ff]+/gi, "-")
    .replace(/^-+|-+$/g, "")
}

export function collectSections(children) {
  const list = []
  walk(children, list)
  return list
}

function walk(node, list) {
  if (node == null) return
  if (Array.isArray(node)) {
    for (const child of node) walk(child, list)
    return
  }
  if (typeof node !== "object") return
  const type = node.type
  const displayName = type?.displayName || type?.name
  if (displayName === "ShowcaseSection") {
    const id = node.props?.id || slugify(node.props?.name)
    list.push({ id, name: node.props?.name || id })
    return
  }
  if (node.props?.children) walk(node.props.children, list)
}
