"use client"

import * as React from "react"
import { useReducedMotion } from "motion/react"

import { cn } from "@/lib/utils"

// ─── Design ───────────────────────────────────────────────────────────────────
//
// Framer Motion's repeat: Infinity restarts from the initial keyframe, so the
// loop point is always visible. CSS animations loop at the frame-paint level —
// the jump from translateX(100%) back to translateX(-100%) is instantaneous
// between frames, making the repeat completely invisible.
//
// Shimmer overlay: absolute inset-0 (same width as container).
//   translateX(-100%) → off-screen left (invisible)
//   translateX(+100%) → off-screen right (invisible)
//   loop jumps right-invisible → left-invisible → seamless.

const KEYFRAMES = `
@keyframes klaude-shimmer {
  0%   { transform: translateX(-100%); }
  100% { transform: translateX(100%);  }
}
`

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
    const reduce = useReducedMotion()

    return (
        <>
            {/* Inject keyframe once — browsers deduplicate identical <style> blocks */}
            {!reduce && <style>{KEYFRAMES}</style>}

            <div
                data-slot="skeleton"
                className={cn(
                    "relative overflow-hidden rounded-xl bg-muted/60",
                    reduce && "animate-pulse",
                    className
                )}
                {...props}
            >
                {!reduce && (
                    <div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-foreground/[0.05] to-transparent"
                        style={{ animation: "klaude-shimmer 3s linear infinite" }}
                    />
                )}
            </div>
        </>
    )
}

export { Skeleton }
