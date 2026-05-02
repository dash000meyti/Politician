import { NextResponse } from "next/server"
import { promises as fs } from "node:fs"
import path from "node:path"

export const runtime = "nodejs"

const DATA_FILE = path.join(process.cwd(), "data", "contact-messages.json")

async function readMessages() {
  try {
    const raw = await fs.readFile(DATA_FILE, "utf-8")
    return JSON.parse(raw)
  } catch (err) {
    if (err.code === "ENOENT") return []
    throw err
  }
}

async function writeMessages(messages) {
  await fs.mkdir(path.dirname(DATA_FILE), { recursive: true })
  await fs.writeFile(DATA_FILE, JSON.stringify(messages, null, 2), "utf-8")
}

function isValidEmail(value) {
  return typeof value === "string" && /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(value)
}

export async function POST(request) {
  let body
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 })
  }

  const { name, email, subject, message } = body ?? {}

  if (
    !name?.trim() ||
    !subject?.trim() ||
    !message?.trim() ||
    !isValidEmail(email)
  ) {
    return NextResponse.json(
      { ok: false, error: "Validation failed" },
      { status: 422 },
    )
  }

  const entry = {
    id: `m_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
    name: String(name).trim().slice(0, 200),
    email: String(email).trim().slice(0, 200),
    subject: String(subject).trim().slice(0, 300),
    body: String(message).trim().slice(0, 5000),
    locale: "fa",
    createdAt: new Date().toISOString(),
    isRead: false,
  }

  const existing = await readMessages()
  existing.push(entry)
  await writeMessages(existing)

  return NextResponse.json({ ok: true, id: entry.id }, { status: 201 })
}

export async function GET() {
  const messages = await readMessages()
  return NextResponse.json({ count: messages.length })
}
