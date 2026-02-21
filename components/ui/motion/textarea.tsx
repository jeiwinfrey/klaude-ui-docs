"use client"

import * as React from "react"
import { motion, useReducedMotion, AnimatePresence } from "motion/react"

import { cn } from "@/lib/utils"
import { ios, fade } from "@/lib/motion"

// ─── Types ────────────────────────────────────────────────────────────────────

export interface TextareaProps
    extends React.ComponentPropsWithoutRef<"textarea"> {
    /** Floating label — animates up and shrinks on focus / when content exists */
    label?: string
    /** Helper text rendered below the field */
    hint?: string
}

// ─── Component ────────────────────────────────────────────────────────────────

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
    (
        {
            className,
            label,
            hint,
            maxLength,
            value,
            defaultValue,
            onFocus,
            onBlur,
            onChange,
            disabled,
            ...props
        },
        ref
    ) => {
        const reduce = useReducedMotion()

        // Track focus and value for floating label
        const [focused, setFocused] = React.useState(false)
        const [internalValue, setInternalValue] = React.useState(
            String(defaultValue ?? "")
        )

        const isControlled = value !== undefined
        const currentValue = isControlled ? String(value) : internalValue
        const charCount = currentValue.length
        const isFloating = focused || charCount > 0

        const handleFocus = (e: React.FocusEvent<HTMLTextAreaElement>) => {
            setFocused(true)
            onFocus?.(e)
        }

        const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
            setFocused(false)
            onBlur?.(e)
        }

        const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
            if (!isControlled) setInternalValue(e.target.value)
            onChange?.(e)
        }

        return (
            <div className="flex flex-col gap-1.5">
                <div className="relative">
                    {/* ── iOS-style filled container ── */}
                    <motion.textarea
                        ref={ref}
                        data-slot="textarea"
                        className={cn(
                            // Fill background — iOS uses a filled inset look
                            "w-full rounded-2xl border border-transparent bg-muted/70",
                            "px-4 text-[15px] leading-relaxed text-foreground",
                            "placeholder:text-muted-foreground/60",
                            // Make room for floating label when present
                            label ? "pt-7 pb-3" : "py-3",
                            // Make room for char counter
                            maxLength ? "pr-14" : "pr-4",
                            // Focus ring — matches design system token
                            "outline-none focus-visible:border-ring focus-visible:ring-ring/30 focus-visible:ring-[3px]",
                            // field-sizing lets height grow with content
                            "field-sizing-content min-h-[88px]",
                            "disabled:cursor-not-allowed disabled:opacity-50",
                            // Remove CSS transition — Framer handles it
                            "transition-colors",
                            className
                        )}
                        disabled={disabled}
                        maxLength={maxLength}
                        value={isControlled ? value : internalValue}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        // Focus: very slight scale pop — ios.snappy
                        animate={
                            reduce
                                ? undefined
                                : { scale: focused ? 1.008 : 1 }
                        }
                        transition={reduce ? { duration: 0 } : ios.snappy}
                        style={{ transformOrigin: "center" }}
                        {...(props as React.ComponentPropsWithoutRef<typeof motion.textarea>)}
                    />

                    {/* ── Floating label ── */}
                    {label && (
                        <motion.label
                            className={cn(
                                "pointer-events-none absolute left-4 origin-left select-none font-normal",
                                focused ? "text-ring" : "text-muted-foreground"
                            )}
                            // Sit at textarea text baseline at rest; float up when active
                            animate={
                                reduce
                                    ? { y: isFloating ? -8 : 0 }
                                    : {
                                        y: isFloating ? -8 : 0,
                                        scale: isFloating ? 0.76 : 1,
                                        color: focused
                                            ? "var(--ring)"
                                            : isFloating
                                                ? "var(--muted-foreground)"
                                                : "var(--muted-foreground)",
                                    }
                            }
                            transition={reduce ? { duration: 0 } : ios.snappy}
                            style={{
                                top: "20px",
                                fontSize: "15px",
                            }}
                        >
                            {label}
                        </motion.label>
                    )}

                    {/* ── Character counter ── */}
                    {maxLength && (
                        <AnimatePresence>
                            {(focused || charCount > 0) && (
                                <motion.span
                                    key="char-count"
                                    className={cn(
                                        "pointer-events-none absolute bottom-3 right-4 text-xs tabular-nums",
                                        charCount >= maxLength
                                            ? "text-destructive"
                                            : charCount >= maxLength * 0.85
                                                ? "text-orange-500"
                                                : "text-muted-foreground"
                                    )}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={reduce ? { duration: 0 } : fade.base}
                                >
                                    {charCount}/{maxLength}
                                </motion.span>
                            )}
                        </AnimatePresence>
                    )}
                </div>

                {/* ── Hint text ── */}
                {hint && (
                    <p className="px-1 text-xs text-muted-foreground">{hint}</p>
                )}
            </div>
        )
    }
)
Textarea.displayName = "Textarea"

export { Textarea }
