"use client"
import confetti from "canvas-confetti"
import { Button } from "@/components/ui/button"

import { 
  ConfettiButton
 } from "@/components/ui"

export function ConfettiDemo() {
  return (
    <div className="relative">
      <ConfettiButton>Confetti 🎉</ConfettiButton>
    </div>
  )
}

export function ConfettiDemoAngle() {
  return (
    <div className="relative">
      <ConfettiButton
        options={{
          angle:270 
        }}
      >
        Random Confetti 🎉
      </ConfettiButton>
    </div>
  )
}

export function ConfettiDemoFireworks() {
  const handleClick = () => {
    const duration = 5 * 1000
    const animationEnd = Date.now() + duration
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 }
    const randomInRange = (min, max) =>
      Math.random() * (max - min) + min
    const interval = window.setInterval(() => {
      const timeLeft = animationEnd - Date.now()
      if (timeLeft <= 0) {
        return clearInterval(interval)
      }
      const particleCount = 50 * (timeLeft / duration)
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      })
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      })
    }, 250)
  }
  return (
    <div className="relative">
      <Button onClick={handleClick}>Trigger Fireworks</Button>
    </div>
  )
}

export function ConfettiDemoSide() {
  const handleClick = () => {
    const end = Date.now() + 3 * 1000 // 3 seconds
    const colors = ["#a786ff", "#fd8bbc", "#eca184", "#f8deb1"]
    const frame = () => {
      if (Date.now() > end) return
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        startVelocity: 60,
        origin: { x: 0, y: 0.5 },
        colors: colors,
      })
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        startVelocity: 60,
        origin: { x: 1, y: 0.5 },
        colors: colors,
      })
      requestAnimationFrame(frame)
    }
    frame()
  }
  return (
    <div className="relative">
      <Button onClick={handleClick}>Trigger Side Cannons</Button>
    </div>
  )
}

export function ConfettiDemoEmoji() {
  const handleClick = () => {
    const scalar = 2
    const unicorn = confetti.shapeFromText({ text: "🦄", scalar })
    const defaults = {
      spread: 360,
      ticks: 60,
      gravity: 0,
      decay: 0.96,
      startVelocity: 20,
      shapes: [unicorn],
      scalar,
    }
    const shoot = () => {
      confetti({
        ...defaults,
        particleCount: 30,
      })
      confetti({
        ...defaults,
        particleCount: 5,
      })
      confetti({
        ...defaults,
        particleCount: 15,
        scalar: scalar / 2,
        shapes: ["circle"],
      })
    }
    setTimeout(shoot, 0)
    setTimeout(shoot, 100)
    setTimeout(shoot, 200)
  }
  return (
    <div className="relative justify-center">
      <Button onClick={handleClick}>Trigger Emoji</Button>
    </div>
  )
}