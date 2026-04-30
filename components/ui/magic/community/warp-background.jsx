"use client";
import React, { useMemo } from "react";
import { motion } from "motion/react"

import { cn } from "@/lib/utils"

const Beam = ({
  width,
  x,
  delay,
  duration,
  hue,
  ar
}) => {
  return (
    <motion.div
      style={
        {
          "--x": `${x}`,
          "--width": `${width}`,
          "--aspect-ratio": `${ar}`,
          "--background": `linear-gradient(hsl(${hue} 80% 60%), transparent)`
        }
      }
      className={`absolute top-0 left-(--x) aspect-[1/var(--aspect-ratio)] w-(--width) [background:var(--background)]`}
      initial={{ y: "100cqmax", x: "-50%" }}
      animate={{ y: "-100%", x: "-50%" }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "linear",
      }} />
  );
}

export const WarpBackground = ({
  children,
  perspective = 100,
  className,
  beamsPerSide = 3,
  beamSize = 5,
  beamDelayMax = 3,
  beamDelayMin = 0,
  beamDuration = 3,
  gridColor = "var(--border)",
  ...props
}) => {
  const createSeed = (...values) => {
    let hash = 2166136261
    for (const value of values) {
      const text = String(value)
      for (let i = 0; i < text.length; i++) {
        hash ^= text.charCodeAt(i)
        hash = Math.imul(hash, 16777619)
      }
    }
    return hash >>> 0
  }

  const randomFromSeed = (seed) => {
    let value = seed >>> 0
    value = (value + 0x6D2B79F5) >>> 0
    let t = Math.imul(value ^ (value >>> 15), 1 | value)
    t ^= t + Math.imul(t ^ (t >>> 7), 61 | t)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }

  const generateBeams = (side) => {
    const beams = []
    const cellsPerSide = Math.floor(100 / beamSize)
    const step = cellsPerSide / beamsPerSide
    const sideSeed = createSeed(
      side,
      beamsPerSide,
      beamSize,
      beamDelayMin,
      beamDelayMax,
      beamDuration,
      perspective
    )

    for (let i = 0; i < beamsPerSide; i++) {
      const x = Math.floor(i * step)
      const delaySeed = createSeed(sideSeed, i, "delay")
      const hueSeed = createSeed(sideSeed, i, "hue")
      const arSeed = createSeed(sideSeed, i, "ar")
      const delay = randomFromSeed(delaySeed) * (beamDelayMax - beamDelayMin) + beamDelayMin
      const hue = Math.floor(randomFromSeed(hueSeed) * 360)
      const ar = Math.floor(randomFromSeed(arSeed) * 10) + 1
      beams.push({ x, delay, hue, ar })
    }

    return beams
  }

  const topBeams = useMemo(() => generateBeams("top"), [beamsPerSide, beamSize, beamDelayMax, beamDelayMin, beamDuration, perspective])
  const rightBeams = useMemo(() => generateBeams("right"), [beamsPerSide, beamSize, beamDelayMax, beamDelayMin, beamDuration, perspective])
  const bottomBeams = useMemo(() => generateBeams("bottom"), [beamsPerSide, beamSize, beamDelayMax, beamDelayMin, beamDuration, perspective])
  const leftBeams = useMemo(() => generateBeams("left"), [beamsPerSide, beamSize, beamDelayMax, beamDelayMin, beamDuration, perspective])

  return (
    <div className={cn("relative rounded border p-20", className)} {...props}>
      <div
        style={
          {
            "--perspective": `${perspective}px`,
            "--grid-color": gridColor,
            "--beam-size": `${beamSize}%`
          }
        }
        className={
          "@container-[size] pointer-events-none absolute top-0 left-0 size-full overflow-hidden [clipPath:inset(0)] perspective-(--perspective) transform-3d"
        }>
        {/* top side */}
        <div
          className="@container absolute z-20 h-[100cqmax] w-[100cqi] origin-[50%_0%] transform-[rotateX(-90deg)] bg-size-[var(--beam-size)_var(--beam-size)] [background:linear-gradient(var(--grid-color)_0_1px,transparent_1px_var(--beam-size))_50%_-0.5px_/var(--beam-size)_var(--beam-size),linear-gradient(90deg,var(--grid-color)_0_1px,transparent_1px_var(--beam-size))_50%_50%_/var(--beam-size)_var(--beam-size)] transform-3d">
          {topBeams.map((beam, index) => (
            <Beam
              key={`top-${index}`}
              width={`${beamSize}%`}
              x={`${beam.x * beamSize}%`}
              delay={beam.delay}
              duration={beamDuration}
              hue={beam.hue}
              ar={beam.ar} />
          ))}
        </div>
        {/* bottom side */}
        <div
          className="@container absolute top-full h-[100cqmax] w-[100cqi] origin-[50%_0%] transform-[rotateX(-90deg)] bg-size-[var(--beam-size)_var(--beam-size)] [background:linear-gradient(var(--grid-color)_0_1px,transparent_1px_var(--beam-size))_50%_-0.5px_/var(--beam-size)_var(--beam-size),linear-gradient(90deg,var(--grid-color)_0_1px,transparent_1px_var(--beam-size))_50%_50%_/var(--beam-size)_var(--beam-size)] transform-3d">
          {bottomBeams.map((beam, index) => (
            <Beam
              key={`bottom-${index}`}
              width={`${beamSize}%`}
              x={`${beam.x * beamSize}%`}
              delay={beam.delay}
              duration={beamDuration}
              hue={beam.hue}
              ar={beam.ar} />
          ))}
        </div>
        {/* left side */}
        <div
          className="@container absolute top-0 left-0 h-[100cqmax] w-[100cqh] origin-[0%_0%] transform-[rotate(90deg)_rotateX(-90deg)] bg-size-[var(--beam-size)_var(--beam-size)] [background:linear-gradient(var(--grid-color)_0_1px,transparent_1px_var(--beam-size))_50%_-0.5px_/var(--beam-size)_var(--beam-size),linear-gradient(90deg,var(--grid-color)_0_1px,transparent_1px_var(--beam-size))_50%_50%_/var(--beam-size)_var(--beam-size)] transform-3d">
          {leftBeams.map((beam, index) => (
            <Beam
              key={`left-${index}`}
              width={`${beamSize}%`}
              x={`${beam.x * beamSize}%`}
              delay={beam.delay}
              duration={beamDuration}
              hue={beam.hue}
              ar={beam.ar} />
          ))}
        </div>
        {/* right side */}
        <div
          className="@container absolute top-0 right-0 h-[100cqmax] w-[100cqh] origin-[100%_0%] transform-[rotate(-90deg)_rotateX(-90deg)] bg-size-[var(--beam-size)_var(--beam-size)] [background:linear-gradient(var(--grid-color)_0_1px,transparent_1px_var(--beam-size))_50%_-0.5px_/var(--beam-size)_var(--beam-size),linear-gradient(90deg,var(--grid-color)_0_1px,transparent_1px_var(--beam-size))_50%_50%_/var(--beam-size)_var(--beam-size)] transform-3d">
          {rightBeams.map((beam, index) => (
            <Beam
              key={`right-${index}`}
              width={`${beamSize}%`}
              x={`${beam.x * beamSize}%`}
              delay={beam.delay}
              duration={beamDuration}
              hue={beam.hue}
              ar={beam.ar} />
          ))}
        </div>
      </div>
      <div className="relative">{children}</div>
    </div>
  );
}
