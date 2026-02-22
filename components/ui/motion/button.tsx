"use client"

import * as React from "react"
import { motion, useReducedMotion } from "motion/react"
import { Slot } from "radix-ui"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { ios } from "@/lib/motion"

// ─── Variants ────────────────────────────────────────────────────────────────

const buttonVariants = cva(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
    {
        variants: {
            variant: {
                default: "bg-primary text-primary-foreground",
                destructive:
                    "bg-destructive text-white focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
                outline:
                    "border bg-background shadow-xs dark:bg-input/30 dark:border-input",
                secondary: "bg-secondary text-secondary-foreground",
                ghost: "",
                link: "text-primary underline-offset-4 hover:underline",
            },
            size: {
                default: "h-9 px-5 py-2 has-[>svg]:px-3",
                sm: "h-8 gap-1.5 px-4 has-[>svg]:px-2.5",
                lg: "h-10 px-6 has-[>svg]:px-4",
                icon: "size-9",
            },
            rounded: {
                none: "rounded-none",
                md: "rounded-md",
                lg: "rounded-lg",
                xl: "rounded-xl",
                full: "rounded-full",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
            rounded: "lg",
        },
    }
)

// ─── Motion variants ──────────────────────────────────────────────────────────

const motionVariants = {
    rest: { scale: 1, y: 0 },
    hover: { scale: 1.03, y: -1 },
    tap: { scale: 0.95, y: 0 },
} as const

// ─── Types ────────────────────────────────────────────────────────────────────

export interface ButtonProps
    extends React.ComponentPropsWithoutRef<"button">,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean
}

// ─── Component ────────────────────────────────────────────────────────────────

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            className,
            variant = "default",
            size = "default",
            rounded = "lg",
            asChild = false,
            disabled,
            children,
            ...props
        },
        ref
    ) => {
        const reduce = useReducedMotion()

        if (asChild) {
            return (
                <Slot.Root
                    ref={ref}
                    data-slot="button"
                    data-variant={variant}
                    data-size={size}
                    className={cn(buttonVariants({ variant, size, rounded, className }))}
                    {...props}
                >
                    {children}
                </Slot.Root>
            )
        }

        return (
            <motion.button
                ref={ref}
                data-slot="button"
                data-variant={variant}
                data-size={size}
                className={cn(buttonVariants({ variant, size, rounded, className }))}
                disabled={disabled}
                // Motion
                variants={motionVariants}
                initial="rest"
                whileHover={disabled || reduce ? "rest" : "hover"}
                whileTap={disabled || reduce ? "rest" : "tap"}
                transition={reduce ? { duration: 0 } : ios.snappy}
                {...(props as React.ComponentPropsWithoutRef<typeof motion.button>)}
            >
                {children}
            </motion.button>
        )
    }
)
Button.displayName = "Button"

export { Button, buttonVariants }
