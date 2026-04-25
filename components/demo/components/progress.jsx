"use client"

import * as React from "react"

import { Progress } from "@/components/ui"
import { Slider, Field, FieldLabel } from "@/components/ui"

export function ProgressDemo() {
  const [value, setValue] = React.useState([50])
  const [progress, setProgress] = React.useState(0)


  React.useEffect(() => {
    const interval = setInterval(() => {
      setProgress((previousProgress) => {
        if (previousProgress >= 100) {
          clearInterval(interval)
          return previousProgress
        }

        return Math.min(previousProgress + 5, 100)
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <Field className="w-full max-w-sm">

      <Progress value={progress} />
      <FieldLabel htmlFor="progress-upload">
        <span>Value</span>
        <span className="ml-auto">{value[0]}</span>
      </FieldLabel>
      <Progress value={value[0]} />
      <Slider
        value={value}
        onValueChange={setValue}
        min={0}
        max={100}
        step={1}
      />
    </Field>
  )
}
