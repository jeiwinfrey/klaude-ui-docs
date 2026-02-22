"use client"

import * as React from "react"
import { motion, useReducedMotion } from "motion/react"

import { cn } from "@/lib/utils"
import { ios } from "@/lib/motion"

// ─── Design ───────────────────────────────────────────────────────────────────
//
// Default variant — gradient: fades to transparent at both ends, rendering a
// soft floating line rather than a hard edge-to-edge border. Much more premium.
//
// Motion — entrance: scaleX (horizontal) or scaleY (vertical) from 0 → 1,
// originating from the centre. The separator "draws in" on mount — ios.spring.
//
// label prop — renders a centred text label splitting the line into two halves
// (common "or" / section-divider pattern).

// ─── Types ────────────────────────────────────────────────────────────────────

export interface SeparatorProps {
    className?: string
    orientation?: "horizontal" | "vertical"
    decorative?: boolean
    /** Solid line or gradient (default) that fades at both edges */
    variant?: "default" | "gradient"
    /** Optional centred label, e.g. "or", "Section title" */
    label?: React.ReactNode
}

// ─── Gradient helper ──────────────────────────────────────────────────────────

function gradientClass(orientation: "horizontal" | "vertical", variant: "default" | "gradient") {
    if (variant === "default") return "bg-border"
    return orientation === "horizontal"
        ? "bg-gradient-to-r from-transparent via-border to-transparent"
        : "bg-gradient-to-b from-transparent via-border to-transparent"
}

// ─── Separator ────────────────────────────────────────────────────────────────

function Separator({
    className,
    orientation = "horizontal",
    decorative = true,
    variant = "gradient",
    label,
}: SeparatorProps) {
    const reduce = useReducedMotion()

    const lineClass = cn(
        "shrink-0",
        orientation === "horizontal" ? "h-px" : "w-px",
        gradientClass(orientation, variant)
    )

    const enterProps = reduce
        ? {}
        : {
            initial: orientation === "horizontal" ? { scaleX: 0 } : { scaleY: 0 },
            animate: orientation === "horizontal" ? { scaleX: 1 } : { scaleY: 1 },
            style: { transformOrigin: "center" },
            transition: ios.spring,
        }

    // ── With label: two halves flanking centred text ──────────────────────────
    if (label) {
        return (
            <div
                role={decorative ? undefined : "separator"}
                aria-orientation={decorative ? undefined : orientation}
                data-slot="separator"
                className={cn(
                    "flex items-center gap-3",
                    // Vertical: stack lines above/below label
                    orientation === "vertical" && "flex-col",
                    className
                )}
            >
                <motion.div className={cn(lineClass, "flex-1")} {...(enterProps as object)} />
                <span className="shrink-0 text-xs text-muted-foreground">{label}</span>
                <motion.div className={cn(lineClass, "flex-1")} {...(enterProps as object)} />
            </div>
        )
    }

    // ── Plain separator ────────────────────────────────────────────────────────
    return (
        <motion.div
            role={decorative ? undefined : "separator"}
            aria-orientation={decorative ? undefined : orientation}
            data-slot="separator"
            data-orientation={orientation}
            className={cn(
                lineClass,
                orientation === "horizontal" ? "w-full" : "h-full",
                className
            )}
            {...(enterProps as object)}
        />
    )
}

export { Separator }
