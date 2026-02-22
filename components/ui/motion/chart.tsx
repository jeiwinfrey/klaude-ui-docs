"use client"

import * as React from "react"
import { motion, useReducedMotion } from "motion/react"
import * as RechartsPrimitive from "recharts"

import { cn } from "@/lib/utils"
import { ios, fade } from "@/lib/motion"

// ─── Types & context ──────────────────────────────────────────────────────────

const THEMES = { light: "", dark: ".dark" } as const

export type ChartConfig = {
    [k in string]: {
        label?: React.ReactNode
        icon?: React.ComponentType
    } & (
        | { color?: string; theme?: never }
        | { color?: never; theme: Record<keyof typeof THEMES, string> }
    )
}

type ChartContextProps = { config: ChartConfig }
const ChartContext = React.createContext<ChartContextProps | null>(null)

function useChart() {
    const context = React.useContext(ChartContext)
    if (!context) throw new Error("useChart must be used within a <ChartContainer />")
    return context
}

// ─── ChartContainer ───────────────────────────────────────────────────────────
//
// Design language:
//   • Wrapped in a bg-muted/40 card — rounded-2xl, subtle inner border
//   • Optional title + subtitle props for an Apple Charts-style header
//   • Entrance: y 10 + fade → ios.spring (feels like a dashboard card loading in)

function ChartContainer({
    id,
    className,
    children,
    config,
    title,
    subtitle,
    ...props
}: React.ComponentProps<"div"> & {
    config: ChartConfig
    title?: string
    subtitle?: string
    children: React.ComponentProps<typeof RechartsPrimitive.ResponsiveContainer>["children"]
}) {
    const reduce = useReducedMotion()
    const uniqueId = React.useId()
    const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`

    return (
        <ChartContext.Provider value={{ config }}>
            <motion.div
                className={cn(
                    "rounded-2xl border border-border/40 bg-muted/40 p-5",
                    className
                )}
                initial={{ opacity: 0, y: reduce ? 0 : 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={reduce ? { duration: 0 } : ios.spring}
                {...(props as React.ComponentPropsWithoutRef<typeof motion.div>)}
            >
                {/* Optional header */}
                {(title || subtitle) && (
                    <div className="mb-5">
                        {title && (
                            <p className="text-sm font-semibold tracking-tight text-foreground">
                                {title}
                            </p>
                        )}
                        {subtitle && (
                            <p className="mt-0.5 text-xs text-muted-foreground">{subtitle}</p>
                        )}
                    </div>
                )}

                {/* Chart surface */}
                <div
                    data-slot="chart"
                    data-chart={chartId}
                    className={cn(
                        "[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground",
                        "[&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/40",
                        "[&_.recharts-curve.recharts-tooltip-cursor]:stroke-border",
                        "[&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border",
                        "[&_.recharts-radial-bar-background-sector]:fill-muted",
                        "[&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted",
                        "[&_.recharts-reference-line_[stroke='#ccc']]:stroke-border",
                        "[&_.recharts-dot[stroke='#fff']]:stroke-transparent",
                        "[&_.recharts-layer]:outline-hidden",
                        "[&_.recharts-sector]:outline-hidden",
                        "[&_.recharts-sector[stroke='#fff']]:stroke-transparent",
                        "[&_.recharts-surface]:outline-hidden",
                        "flex aspect-video justify-center text-xs"
                    )}
                >
                    <ChartStyle id={chartId} config={config} />
                    <RechartsPrimitive.ResponsiveContainer>
                        {children}
                    </RechartsPrimitive.ResponsiveContainer>
                </div>
            </motion.div>
        </ChartContext.Provider>
    )
}

// ─── ChartStyle ───────────────────────────────────────────────────────────────

const ChartStyle = ({ id, config }: { id: string; config: ChartConfig }) => {
    const colorConfig = Object.entries(config).filter(
        ([, c]) => c.theme || c.color
    )
    if (!colorConfig.length) return null

    return (
        <style
            dangerouslySetInnerHTML={{
                __html: Object.entries(THEMES)
                    .map(
                        ([theme, prefix]) => `
${prefix} [data-chart=${id}] {
${colorConfig
                                .map(([key, itemConfig]) => {
                                    const color =
                                        itemConfig.theme?.[theme as keyof typeof itemConfig.theme] ||
                                        itemConfig.color
                                    return color ? `  --color-${key}: ${color};` : null
                                })
                                .join("\n")}
}
`
                    )
                    .join("\n"),
            }}
        />
    )
}

// ─── ChartTooltip ─────────────────────────────────────────────────────────────

const ChartTooltip = RechartsPrimitive.Tooltip

// Design language:
//   • Frosted glass: bg-background/85 + backdrop-blur-xl
//   • Rounded-2xl, large shadow — like a popover in iOS Stocks / Health
//   • Label small + muted above; value large + semibold below
//   • Colored rounded dot per series (not a square)

function ChartTooltipContent({
    active,
    payload,
    className,
    indicator = "dot",
    hideLabel = false,
    hideIndicator = false,
    label,
    labelFormatter,
    labelClassName,
    formatter,
    color,
    nameKey,
    labelKey,
}: React.ComponentProps<typeof RechartsPrimitive.Tooltip> &
    React.ComponentProps<"div"> & {
        hideLabel?: boolean
        hideIndicator?: boolean
        indicator?: "line" | "dot" | "dashed"
        nameKey?: string
        labelKey?: string
    }) {
    const { config } = useChart()

    const tooltipLabel = React.useMemo(() => {
        if (hideLabel || !payload?.length) return null
        const [item] = payload
        const key = `${labelKey || item?.dataKey || item?.name || "value"}`
        const itemConfig = getPayloadConfigFromPayload(config, item, key)
        const value =
            !labelKey && typeof label === "string"
                ? config[label as keyof typeof config]?.label || label
                : itemConfig?.label

        if (labelFormatter) {
            return (
                <p className={cn("text-xs text-muted-foreground", labelClassName)}>
                    {labelFormatter(value, payload)}
                </p>
            )
        }
        if (!value) return null
        return (
            <p className={cn("text-xs text-muted-foreground", labelClassName)}>
                {value}
            </p>
        )
    }, [label, labelFormatter, payload, hideLabel, labelClassName, config, labelKey])

    if (!active || !payload?.length) return null

    const nestLabel = payload.length === 1 && indicator !== "dot"

    return (
        <div
            className={cn(
                // Frosted glass card
                "border border-border/30 bg-background/85 backdrop-blur-xl",
                "rounded-2xl px-4 py-3 shadow-2xl",
                "min-w-[9rem] grid gap-2",
                className
            )}
        >
            {!nestLabel && tooltipLabel}
            <div className="grid gap-1.5">
                {payload
                    .filter((item) => item.type !== "none")
                    .map((item, index) => {
                        const key = `${nameKey || item.name || item.dataKey || "value"}`
                        const itemConfig = getPayloadConfigFromPayload(config, item, key)
                        const indicatorColor = color || item.payload.fill || item.color

                        return (
                            <div
                                key={item.dataKey}
                                className="flex items-center justify-between gap-4"
                            >
                                {formatter && item?.value !== undefined && item.name ? (
                                    formatter(item.value, item.name, item, index, item.payload)
                                ) : (
                                    <>
                                        <div className="flex items-center gap-1.5 shrink-0">
                                            {itemConfig?.icon ? (
                                                <itemConfig.icon />
                                            ) : (
                                                !hideIndicator && (
                                                    <span
                                                        className={cn(
                                                            "shrink-0 rounded-full",
                                                            indicator === "dot" && "size-2",
                                                            indicator === "line" && "h-0.5 w-4",
                                                            indicator === "dashed" && "h-0.5 w-4 border-t border-dashed border-current bg-transparent"
                                                        )}
                                                        style={{ backgroundColor: indicatorColor }}
                                                    />
                                                )
                                            )}
                                            {nestLabel && tooltipLabel}
                                            <span className="text-xs text-muted-foreground">
                                                {itemConfig?.label || item.name}
                                            </span>
                                        </div>
                                        {item.value && (
                                            <span className="text-sm font-semibold tabular-nums text-foreground">
                                                {item.value.toLocaleString()}
                                            </span>
                                        )}
                                    </>
                                )}
                            </div>
                        )
                    })}
            </div>
        </div>
    )
}

// ─── ChartLegend ─────────────────────────────────────────────────────────────

const ChartLegend = RechartsPrimitive.Legend

// Design language: pill-shaped badge items — like Apple Charts labels in iOS Health

function ChartLegendContent({
    className,
    hideIcon = false,
    payload,
    verticalAlign = "bottom",
    nameKey,
}: React.ComponentProps<"div"> &
    Pick<RechartsPrimitive.LegendProps, "payload" | "verticalAlign"> & {
        hideIcon?: boolean
        nameKey?: string
    }) {
    const { config } = useChart()
    if (!payload?.length) return null

    return (
        <div
            className={cn(
                "flex flex-wrap items-center justify-center gap-2",
                verticalAlign === "top" ? "pb-4" : "pt-4",
                className
            )}
        >
            {payload
                .filter((item) => item.type !== "none")
                .map((item) => {
                    const key = `${nameKey || item.dataKey || "value"}`
                    const itemConfig = getPayloadConfigFromPayload(config, item, key)

                    return (
                        <div
                            key={item.value}
                            className="flex items-center gap-1.5 rounded-full bg-muted/70 px-2.5 py-1 text-xs font-medium text-foreground"
                        >
                            {itemConfig?.icon && !hideIcon ? (
                                <itemConfig.icon />
                            ) : (
                                <span
                                    className="size-1.5 rounded-full shrink-0"
                                    style={{ backgroundColor: item.color }}
                                />
                            )}
                            {itemConfig?.label}
                        </div>
                    )
                })}
        </div>
    )
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function getPayloadConfigFromPayload(
    config: ChartConfig,
    payload: unknown,
    key: string
) {
    if (typeof payload !== "object" || payload === null) return undefined

    const payloadPayload =
        "payload" in payload &&
            typeof payload.payload === "object" &&
            payload.payload !== null
            ? payload.payload
            : undefined

    let configLabelKey: string = key

    if (key in payload && typeof payload[key as keyof typeof payload] === "string") {
        configLabelKey = payload[key as keyof typeof payload] as string
    } else if (
        payloadPayload &&
        key in payloadPayload &&
        typeof payloadPayload[key as keyof typeof payloadPayload] === "string"
    ) {
        configLabelKey = payloadPayload[key as keyof typeof payloadPayload] as string
    }

    return configLabelKey in config
        ? config[configLabelKey]
        : config[key as keyof typeof config]
}

export {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
    ChartLegend,
    ChartLegendContent,
    ChartStyle,
}
