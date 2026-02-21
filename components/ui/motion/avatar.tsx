"use client"

import * as React from "react"
import { motion, useReducedMotion } from "motion/react"
import { Avatar as AvatarPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"
import { ios } from "@/lib/motion"

// ─── Types ────────────────────────────────────────────────────────────────────

export interface AvatarProps extends React.ComponentPropsWithoutRef<"span"> {
    size?: "sm" | "default" | "lg"
}

export interface AvatarBadgeProps extends React.ComponentPropsWithoutRef<"span"> {
    icon?: React.ReactNode
}

// ─── Avatar ───────────────────────────────────────────────────────────────────
// Two-layer: outer motion.span — rounded-full for ring shape, NO overflow-hidden
//            inner Radix Root — overflow-hidden clips the image/fallback
// AvatarBadge is filtered to the outer layer so it's never clipped.

const Avatar = React.forwardRef<HTMLSpanElement, AvatarProps>(
    ({ className, size = "default", children, ...props }, ref) => {
        const reduce = useReducedMotion()

        const badgeChildren = React.Children.toArray(children).filter(
            (child) => React.isValidElement(child) && child.type === AvatarBadge
        )
        const innerChildren = React.Children.toArray(children).filter(
            (child) => !(React.isValidElement(child) && child.type === AvatarBadge)
        )

        return (
            <motion.span
                ref={ref}
                data-slot="avatar"
                data-size={size}
                className={cn(
                    // rounded-full needed for ring shape in groups — overflow-hidden is on the inner layer
                    "group/avatar relative inline-flex shrink-0 select-none rounded-full",
                    "size-8 data-[size=sm]:size-6 data-[size=lg]:size-10",
                    className
                )}
                whileHover={reduce ? undefined : { scale: 1.05 }}
                whileTap={reduce ? undefined : { scale: 0.97 }}
                transition={reduce ? { duration: 0 } : ios.snappy}
                {...(props as React.ComponentPropsWithoutRef<typeof motion.span>)}
            >
                <AvatarPrimitive.Root className="size-full overflow-hidden rounded-full">
                    {innerChildren}
                </AvatarPrimitive.Root>
                {badgeChildren}
            </motion.span>
        )
    }
)
Avatar.displayName = "Avatar"

// ─── Sub-components ───────────────────────────────────────────────────────────

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

// Badge — rendered outside overflow-hidden, always primary color
const AvatarBadge = React.forwardRef<HTMLSpanElement, AvatarBadgeProps>(
    ({ icon, className, ...props }, ref) => (
        <span
            ref={ref}
            data-slot="avatar-badge"
            className={cn(
                "absolute bottom-0 right-0 z-10 rounded-full ring-2 ring-background",
                "bg-primary text-primary-foreground",
                // Plain dot when no icon
                !icon && "size-2.5 group-data-[size=sm]/avatar:size-2 group-data-[size=lg]/avatar:size-3.5",
                // Icon badge — hidden on sm
                icon && "hidden group-data-[size=default]/avatar:inline-flex group-data-[size=lg]/avatar:inline-flex items-center justify-center",
                icon && "group-data-[size=default]/avatar:size-4 group-data-[size=lg]/avatar:size-5",
                className
            )}
            {...props}
        >
            {icon && (
                <span className="text-primary-foreground [&>svg]:size-2.5 group-data-[size=lg]/avatar:[&>svg]:size-3">
                    {icon}
                </span>
            )}
        </span>
    )
)
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
