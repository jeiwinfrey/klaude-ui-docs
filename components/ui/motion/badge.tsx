"use client"

import * as React from "react"
import { motion, useReducedMotion } from "motion/react"
import { Slot } from "radix-ui"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { ios } from "@/lib/motion"

// ─── Variants ────────────────────────────────────────────────────────────────

const badgeVariants = cva(
    "inline-flex items-center justify-center rounded-full squircle border border-transparent px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive overflow-hidden",
    {
        variants: {
            variant: {
                default:
                    "bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
                secondary:
                    "bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
                destructive:
                    "bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
                outline:
                    "border-border text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
                ghost: "[a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
                link: "text-primary underline-offset-4 [a&]:hover:underline",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
)

// ─── Types ────────────────────────────────────────────────────────────────────

export interface BadgeProps
    extends React.ComponentPropsWithoutRef<"span">,
    VariantProps<typeof badgeVariants> {
    asChild?: boolean
}

// ─── Component ────────────────────────────────────────────────────────────────

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
    ({ className, variant = "default", asChild = false, ...props }, ref) => {
        const reduce = useReducedMotion()

        if (asChild) {
            return (
                <Slot.Root
                    ref={ref}
                    data-slot="badge"
                    data-variant={variant}
                    className={cn(badgeVariants({ variant }), className)}
                    {...props}
                />
            )
        }

        return (
            <motion.span
                ref={ref}
                data-slot="badge"
                data-variant={variant}
                className={cn(badgeVariants({ variant }), className)}
                // Mount: scale pop — ios.bouncy
                initial={{ scale: reduce ? 1 : 0.7, opacity: reduce ? 1 : 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={reduce ? { duration: 0 } : ios.bouncy}
                // Hover: subtle scale lift — ios.snappy
                whileHover={reduce ? undefined : { scale: 1.05 }}
                whileTap={reduce ? undefined : { scale: 0.97 }}
                {...(props as React.ComponentPropsWithoutRef<typeof motion.span>)}
            />
        )
    }
)
Badge.displayName = "Badge"

export { Badge, badgeVariants }
