import * as React from "react"

import { cn } from "@/lib/utils"

// ─── Types ────────────────────────────────────────────────────────────────────

// Spinner rotation is intentionally CSS @keyframes (animate-spin), NOT Framer Motion.
// Continuous stateless animation should not be managed by the React animation lifecycle.
// This matches the spec in STATIC.md: "CSS @keyframes rotation — not Framer Motion"

export interface SpinnerProps extends React.ComponentPropsWithoutRef<"span"> {
    size?: "sm" | "default" | "lg"
}

// ─── Component ────────────────────────────────────────────────────────────────

// Renders a circular ring: full light-gray ring (border-border) with a small
// dark arc on the top edge (border-t-foreground). Spins via animate-spin.

const sizeMap = {
    sm: { ring: "size-4", border: "border-2" },
    default: { ring: "size-6", border: "border-2" },
    lg: { ring: "size-9", border: "border-[3px]" },
} as const

const Spinner = React.forwardRef<HTMLSpanElement, SpinnerProps>(
    ({ className, size = "default", ...props }, ref) => {
        const { ring, border } = sizeMap[size]
        return (
            <span
                ref={ref}
                role="status"
                aria-label="Loading"
                className={cn(
                    "block rounded-full animate-spin",
                    border,
                    "border-border border-t-foreground",
                    ring,
                    className
                )}
                {...props}
            />
        )
    }
)
Spinner.displayName = "Spinner"

export { Spinner }
