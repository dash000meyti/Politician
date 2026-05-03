"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

import { cn } from "@/lib/utils"

export const TextReveal = ({ children, className }) => {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
  })

  if (typeof children !== "string") {
    throw new Error("TextReveal: children must be a string")
  }

  const words = children.split(" ")

  return (
    <div ref={sectionRef} className={cn("relative z-0 h-[200vh] my-[-50vh]", className)}>
      <div
        className={
          "sticky top-0 bottom-0 min-h-svh flex w-full items-center justify-center px-4 my-12"
        }>
        <span
          className={
            "flex flex-wrap p-5 text-2xl font-bold text-black/20 md:p-8 md:text-3xl lg:p-10 lg:text-4xl xl:text-5xl dark:text-white/20"
          }>
          {words.map((word, i) => {
            const start = i / words.length
            const end = start + (1 / words.length)
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </span>
      </div>
    </div>
  );
}

const Word = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1])
  return (
    <span className=" relative mx-1">
      <span className="absolute">{children}</span>
      <motion.span style={{ opacity: opacity }} className={"text-black dark:text-white"}>
      {children}
      </motion.span>
    </span>
  );
}
