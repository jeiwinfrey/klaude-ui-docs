"use client"

import * as React from "react"
import { motion, useReducedMotion } from "motion/react"

import { cn } from "@/lib/utils"
import { ios } from "@/lib/motion"

// ─── Variant config ───────────────────────────────────────────────────────────

export type AlertVariant = "default" | "destructive" | "success" | "warning" | "info"

const VARIANT: Record<
    AlertVariant,
    { iconBg: string; iconColor: string; bg: string }
> = {
    default: {
        iconBg: "bg-primary/10",
        iconColor: "text-primary",
        bg: "bg-primary/5",
    },
    destructive: {
        iconBg: "bg-destructive/10",
        iconColor: "text-destructive",
        bg: "bg-destructive/5",
    },
    success: {
        iconBg: "bg-green-500/10",
        iconColor: "text-green-600 dark:text-green-400",
        bg: "bg-green-500/5",
    },
    warning: {
        iconBg: "bg-amber-500/10",
        iconColor: "text-amber-600 dark:text-amber-400",
        bg: "bg-amber-500/5",
    },
    info: {
        iconBg: "bg-sky-500/10",
        iconColor: "text-sky-600 dark:text-sky-400",
        bg: "bg-sky-500/5",
    },
}

// ─── Types ────────────────────────────────────────────────────────────────────

export interface AlertProps extends React.ComponentPropsWithoutRef<"div"> {
    variant?: AlertVariant
    /** Icon rendered in the colored badge — any React node (e.g. a Lucide icon) */
    icon?: React.ReactNode
}

// ─── Alert ────────────────────────────────────────────────────────────────────
//
// Design language:
//   • Filled tinted background (variant-color/5) — no harsh border
//   • Icon sits in a rounded-xl badge (variant-color/10 bg)
//   • Entrance: scale 0.97 + y 6 + fade → ios.snappy (feels like iOS banner drop)

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
    ({ className, variant = "default", icon, children, ...props }, ref) => {
        const reduce = useReducedMotion()
        const v = VARIANT[variant]

        return (
            <motion.div
                ref={ref}
                data-slot="alert"
                role="alert"
                className={cn(
                    // Base shape
                    "relative flex items-start gap-3.5 overflow-hidden rounded-2xl px-4 py-3.5",
                    // Tinted fill
                    v.bg,
                    className
                )}
                initial={{ opacity: 0, y: reduce ? 0 : 6, scale: reduce ? 1 : 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={reduce ? undefined : { scale: 1.015, y: -1 }}
                whileTap={reduce ? undefined : { scale: 0.99 }}
                transition={reduce ? { duration: 0 } : ios.snappy}
                {...(props as React.ComponentPropsWithoutRef<typeof motion.div>)}
            >

                {/* Icon badge */}
                {icon && (
                    <span
                        className={cn(
                            "mt-0.5 flex shrink-0 items-center justify-center rounded-xl",
                            "size-8 [&>svg]:size-4",
                            v.iconBg,
                            v.iconColor
                        )}
                    >
                        {icon}
                    </span>
                )}

                {/* Content */}
                <div className="flex min-w-0 flex-1 flex-col gap-0.5 pl-0.5">
                    {children}
                </div>
            </motion.div>
        )
    }
)
Alert.displayName = "Alert"

// ─── AlertTitle ───────────────────────────────────────────────────────────────

const AlertTitle = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        data-slot="alert-title"
        className={cn(
            "text-sm font-semibold leading-snug tracking-tight text-foreground",
            className
        )}
        {...props}
    />
))
AlertTitle.displayName = "AlertTitle"

// ─── AlertDescription ─────────────────────────────────────────────────────────

const AlertDescription = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        data-slot="alert-description"
        className={cn(
            "text-sm leading-relaxed text-muted-foreground [&_p]:leading-relaxed",
            className
        )}
        {...props}
    />
))
AlertDescription.displayName = "AlertDescription"

export { Alert, AlertTitle, AlertDescription }
