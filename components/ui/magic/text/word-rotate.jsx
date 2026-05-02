"use client";
import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "motion/react";

import { cn } from "@/lib/utils"

export function WordRotate({
  words,
  duration = 2500,

  motionProps = {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
    transition: { duration: 0.25, ease: "easeOut" },
  },

  className,
  style,
}) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length)
    }, duration)

    // Clean up interval on unmount
    return () => clearInterval(interval);
  }, [words, duration])

  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={words[index]}
        className={cn(
          "inline-block min-h-[1.15em] overflow-hidden py-1 align-middle",
          className,
        )}
        style={style}
        {...motionProps}
      >
        {words[index]}
      </motion.span>
    </AnimatePresence>
  );
}
