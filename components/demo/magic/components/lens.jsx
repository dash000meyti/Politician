"use client"

import { Lens } from "@/components/ui/magic"

export function LensDemoStart() {
  return (
    <Lens
      // zoomFactor={2}
      // lensSize={150}
      // isStatic={false}
      // ariaLabel="Zoom Area"
    >
      <img
        src="https://images.unsplash.com/photo-1736606355698-5efdb410fe93?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
    <img
      src="https://images.unsplash.com/photo-1736606355698-5efdb410fe93?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
    <img
      src="https://images.unsplash.com/photo-1736606355698-5efdb410fe93?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="image placeholder"
      width={500}
      height={500}
    />
  </Lens>
  )
}
