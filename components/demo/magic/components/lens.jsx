"use client"

import Image from "next/image"

import { Lens } from "@/components/ui/magic"

const PLACEHOLDER_SRC =
  "https://images.unsplash.com/photo-1736606355698-5efdb410fe93?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

export function LensDemoStart() {
  return (
    <Lens>
      <Image
        src={PLACEHOLDER_SRC}
        alt="image placeholder"
        width={500}
        height={500}
      />
    </Lens>
  )
}

export function LensDemo() {
  return (
    <Lens defaultPosition={{ x: 260, y: 150 }}>
      <Image
        src={PLACEHOLDER_SRC}
        alt="image placeholder"
        width={500}
        height={500}
      />
    </Lens>
  )
}

export function LensDemoStatic() {
  return (
    <Lens isStatic position={{ x: 260, y: 150 }}>
      <Image
        src={PLACEHOLDER_SRC}
        alt="image placeholder"
        width={500}
        height={500}
      />
    </Lens>
  )
}
