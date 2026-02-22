"use client"

import * as React from "react"
import { motion, useReducedMotion } from "motion/react"

import { cn } from "@/lib/utils"
import { ios, fade } from "@/lib/motion"

// ─── Design language ──────────────────────────────────────────────────────────
//
// • Table lives inside a rounded-2xl card (bg-muted/40, subtle border)
// • Header: filled bg-muted/60 — visually separated from body, not just a line
// • Header cells: xs + semibold + tracking-wider — data-table aesthetic
// • Body rows stagger in on mount using Framer Motion variants
// • Each row has a whileHover background highlight — ios.snappy
// • Dividers are gone — rows breathe via padding alone

// ─── Stagger variants ─────────────────────────────────────────────────────────

const bodyVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.05, delayChildren: 0.05 } },
}

// Enter transition lives inside the variant — keeps it tween-only and isolated
// from the spring used for whileHover. Spring config (stiffness/damping/mass)
// is incompatible with the tween properties (duration/ease) needed here.
const rowVariants = {
    hidden: { opacity: 0, y: 6 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.2, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
    },
}

// Context lets TableFooter signal to TableRow that it should skip the stagger
// variant chain and render statically — footer rows are structural, not content.
const TableFooterContext = React.createContext(false)

// ─── Table ────────────────────────────────────────────────────────────────────

function Table({ className, ...props }: React.ComponentProps<"table">) {
    return (
        <div
            data-slot="table-container"
            className={cn(
                "relative w-full overflow-hidden rounded-2xl border border-border/40 bg-muted/40",
                className
            )}
        >
            <div className="overflow-x-auto">
                <table
                    data-slot="table"
                    className="w-full caption-bottom text-sm"
                    {...props}
                />
            </div>
        </div>
    )
}

// ─── TableHeader ──────────────────────────────────────────────────────────────

function TableHeader({ className, ...props }: React.ComponentProps<"thead">) {
    return (
        <thead
            data-slot="table-header"
            className={cn("bg-muted/60 border-b border-border/40", className)}
            {...props}
        />
    )
}

// ─── TableBody ────────────────────────────────────────────────────────────────
// Orchestrates the row stagger on mount

function TableBody({ className, ...props }: React.ComponentProps<"tbody">) {
    const reduce = useReducedMotion()
    return (
        <motion.tbody
            data-slot="table-body"
            className={cn("divide-y divide-border/30", className)}
            variants={reduce ? undefined : bodyVariants}
            initial={reduce ? undefined : "hidden"}
            animate={reduce ? undefined : "visible"}
            {...(props as React.ComponentPropsWithoutRef<typeof motion.tbody>)}
        />
    )
}

// ─── TableFooter ──────────────────────────────────────────────────────────────

function TableFooter({ className, ...props }: React.ComponentProps<"tfoot">) {
    return (
        <TableFooterContext.Provider value={true}>
            <tfoot
                data-slot="table-footer"
                className={cn(
                    "border-t border-border/40 bg-muted/60 text-sm font-medium",
                    className
                )}
                {...props}
            />
        </TableFooterContext.Provider>
    )
}

// ─── TableRow ─────────────────────────────────────────────────────────────────
// Stagger child + whileHover background highlight

function TableRow({ className, ...props }: React.ComponentProps<"tr">) {
    const reduce = useReducedMotion()
    const isFooter = React.useContext(TableFooterContext)

    return (
        <motion.tr
            data-slot="table-row"
            className={cn(
                "group/row relative cursor-default",
                "data-[state=selected]:bg-muted/60",
                className
            )}
            // Footer rows skip the stagger variant chain entirely — they are
            // structural summary rows, not content that should cascade in.
            variants={reduce || isFooter ? undefined : rowVariants}
            // whileHover uses ios.snappy (spring). The enter transition is now
            // embedded in rowVariants.visible so it never mixes with spring config.
            transition={reduce ? { duration: 0 } : ios.snappy}
            whileHover={reduce ? undefined : { backgroundColor: "hsl(var(--muted) / 0.5)" }}
            {...(props as React.ComponentPropsWithoutRef<typeof motion.tr>)}
        />
    )
}

// ─── TableHead ────────────────────────────────────────────────────────────────

function TableHead({ className, ...props }: React.ComponentProps<"th">) {
    return (
        <th
            data-slot="table-head"
            className={cn(
                "px-4 py-2.5 text-left align-middle",
                "text-xs font-semibold tracking-wider uppercase text-muted-foreground",
                "whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
                className
            )}
            {...props}
        />
    )
}

// ─── TableCell ────────────────────────────────────────────────────────────────

function TableCell({ className, ...props }: React.ComponentProps<"td">) {
    return (
        <td
            data-slot="table-cell"
            className={cn(
                "px-4 py-3 align-middle text-sm",
                "whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
                className
            )}
            {...props}
        />
    )
}

// ─── TableCaption ─────────────────────────────────────────────────────────────

function TableCaption({ className, ...props }: React.ComponentProps<"caption">) {
    return (
        <caption
            data-slot="table-caption"
            className={cn("mb-4 mt-4 text-xs text-muted-foreground", className)}
            {...props}
        />
    )
}

export {
    Table,
    TableHeader,
    TableBody,
    TableFooter,
    TableHead,
    TableRow,
    TableCell,
    TableCaption,
}
