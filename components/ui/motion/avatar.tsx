"use client"

import * as React from "react"
import { motion, useReducedMotion } from "motion/react"
import { Avatar as AvatarPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"
import { ios } from "@/lib/motion"

// ─── Types ────────────────────────────────────────────────────────────────────

export interface AvatarProps
    extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> {
    size?: "sm" | "default" | "lg"
}

// ─── Components ───────────────────────────────────────────────────────────────

const Avatar = React.forwardRef<
    React.ElementRef<typeof AvatarPrimitive.Root>,
    AvatarProps
>(({ className, size = "default", ...props }, ref) => {
    const reduce = useReducedMotion()

    return (
        <AvatarPrimitive.Root asChild>
            <motion.span
                ref={ref}
                data-slot="avatar"
                data-size={size}
                className={cn(
                    "group/avatar relative flex size-8 shrink-0 overflow-hidden rounded-full select-none data-[size=lg]:size-10 data-[size=sm]:size-6",
                    className
                )}
                // Hover: scale lift — ios.snappy
                whileHover={reduce ? undefined : { scale: 1.05 }}
                whileTap={reduce ? undefined : { scale: 0.97 }}
                transition={reduce ? { duration: 0 } : ios.snappy}
                {...(props as React.ComponentPropsWithoutRef<typeof motion.span>)}
            />
        </AvatarPrimitive.Root>
    )
})
Avatar.displayName = "Avatar"

// Sub-components — structural, no motion needed

const AvatarImage = React.forwardRef<
    React.ElementRef<typeof AvatarPrimitive.Image>,
    React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
    <AvatarPrimitive.Image
        ref={ref}
        data-slot="avatar-image"
        className={cn("aspect-square size-full", className)}
        {...props}
    />
))
AvatarImage.displayName = "AvatarImage"

const AvatarFallback = React.forwardRef<
    React.ElementRef<typeof AvatarPrimitive.Fallback>,
    React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
    <AvatarPrimitive.Fallback
        ref={ref}
        data-slot="avatar-fallback"
        className={cn(
            "bg-muted text-muted-foreground flex size-full items-center justify-center rounded-full text-sm group-data-[size=sm]/avatar:text-xs",
            className
        )}
        {...props}
    />
))
AvatarFallback.displayName = "AvatarFallback"

const AvatarBadge = React.forwardRef<
    HTMLSpanElement,
    React.ComponentPropsWithoutRef<"span">
>(({ className, ...props }, ref) => (
    <span
        ref={ref}
        data-slot="avatar-badge"
        className={cn(
            "bg-primary text-primary-foreground ring-background absolute right-0 bottom-0 z-10 inline-flex items-center justify-center rounded-full ring-2 select-none",
            "group-data-[size=sm]/avatar:size-2 group-data-[size=sm]/avatar:[&>svg]:hidden",
            "group-data-[size=default]/avatar:size-2.5 group-data-[size=default]/avatar:[&>svg]:size-2",
            "group-data-[size=lg]/avatar:size-3 group-data-[size=lg]/avatar:[&>svg]:size-2",
            className
        )}
        {...props}
    />
))
AvatarBadge.displayName = "AvatarBadge"

const AvatarGroup = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        data-slot="avatar-group"
        className={cn(
            "*:data-[slot=avatar]:ring-background group/avatar-group flex -space-x-2 *:data-[slot=avatar]:ring-2",
            className
        )}
        {...props}
    />
))
AvatarGroup.displayName = "AvatarGroup"

const AvatarGroupCount = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        data-slot="avatar-group-count"
        className={cn(
            "bg-muted text-muted-foreground ring-background relative flex size-8 shrink-0 items-center justify-center rounded-full text-sm ring-2 group-has-data-[size=lg]/avatar-group:size-10 group-has-data-[size=sm]/avatar-group:size-6 [&>svg]:size-4 group-has-data-[size=lg]/avatar-group:[&>svg]:size-5 group-has-data-[size=sm]/avatar-group:[&>svg]:size-3",
            className
        )}
        {...props}
    />
))
AvatarGroupCount.displayName = "AvatarGroupCount"

export {
    Avatar,
    AvatarImage,
    AvatarFallback,
    AvatarBadge,
    AvatarGroup,
    AvatarGroupCount,
}
