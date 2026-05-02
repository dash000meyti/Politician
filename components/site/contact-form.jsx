"use client"

import * as React from "react"
import { Send, Loader2 } from "lucide-react"
import { toast } from "sonner"

import {
  Button,
  Input,
  Label,
  Textarea,
} from "@/components/ui"

export function ContactForm() {
  const [pending, setPending] = React.useState(false)

  async function onSubmit(e) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const payload = Object.fromEntries(formData.entries())
    setPending(true)
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error("Request failed")
      toast.success("پیام شما با موفقیت ارسال شد.")
      e.currentTarget.reset()
    } catch (err) {
      toast.error(
        "ارسال پیام با خطا مواجه شد. لطفاً دوباره تلاش کنید.",
      )
    } finally {
      setPending(false)
    }
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="name">نام و نام خانوادگی</Label>
          <Input
            id="name"
            name="name"
            required
            placeholder="نام شما"
            autoComplete="name"
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">ایمیل</Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            placeholder="ایمیل شما"
            autoComplete="email"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="subject">موضوع</Label>
        <Input
          id="subject"
          name="subject"
          required
          placeholder="موضوع پیام"
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="message">پیام</Label>
        <Textarea
          id="message"
          name="message"
          required
          rows={6}
          placeholder="متن پیام شما..."
        />
      </div>

      <div className="flex justify-end">
        <Button
          type="submit"
          size="lg"
          disabled={pending}
          className="rounded-full"
        >
          {pending ? (
            <>
              <Loader2 className="me-2 h-4 w-4 animate-spin" />
              در حال ارسال...
            </>
          ) : (
            <>
              <Send className="me-2 h-4 w-4 rtl:rotate-180" />
              ارسال پیام
            </>
          )}
        </Button>
      </div>
    </form>
  )
}
