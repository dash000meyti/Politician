import { cn } from "@/lib/utils"

export function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  /** CSS time value, e.g. `calc(var(--duration) * -0.5)` to phase-shift the loop */
  animationDelay,
  ...props
}) {
  return (
    <div
      {...props}
      className={cn(
        "group flex gap-(--gap) overflow-hidden p-2 [--duration:40s] [--gap:1rem]",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
        },
        className
      )}>
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            style={
              animationDelay != null && animationDelay !== ""
                ? { animationDelay }
                : undefined
            }
            className={cn("flex shrink-0 justify-around gap-(--gap)", {
              "animate-marquee flex-row": !vertical,
              "animate-marquee-vertical flex-col": vertical,
              "group-hover:[animation-play-state:paused]": pauseOnHover,
              "[animation-direction:reverse]": reverse,
            })}>
            {children}
          </div>
        ))}
    </div>
  );
}
