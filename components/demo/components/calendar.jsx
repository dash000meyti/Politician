"use client"

import * as React from "react"

import { Calendar, CalendarPersian } from "@/components/ui"


import { Vazirmatn } from "next/font/google"
const vazirmatn = Vazirmatn({ subsets: ["arabic"] })

export function CalendarDemo() {
  const [date, setDate] = React.useState(new Date())

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-lg border"
      captionLayout="dropdown"
    />
  )
}

export function CalendarHijri() {
  const [date, setDate] = React.useState(new Date())

  return (
    <div className={vazirmatn.className}>
      <CalendarPersian
        mode="single"
        defaultMonth={date}
        selected={date}
        onSelect={setDate}
        className="rounded-lg border"
      // captionLayout="dropdown"
      />
    </div>
  )
}