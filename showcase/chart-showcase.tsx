"use client"

import {
    Bar,
    BarChart,
    Line,
    LineChart,
    Area,
    AreaChart,
    CartesianGrid,
    XAxis,
    YAxis,
} from "recharts"
import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
    ChartLegend,
    ChartLegendContent,
    type ChartConfig,
} from "@/components/ui/motion/chart"

// ─── Data ─────────────────────────────────────────────────────────────────────

const monthlyData = [
    { month: "Jan", visitors: 1860, sessions: 800 },
    { month: "Feb", visitors: 3050, sessions: 1200 },
    { month: "Mar", visitors: 2370, sessions: 950 },
    { month: "Apr", visitors: 2730, sessions: 1100 },
    { month: "May", visitors: 2090, sessions: 900 },
    { month: "Jun", visitors: 2140, sessions: 1050 },
]

const revenueData = [
    { month: "Jan", revenue: 4200 },
    { month: "Feb", revenue: 5800 },
    { month: "Mar", revenue: 5100 },
    { month: "Apr", revenue: 6700 },
    { month: "May", revenue: 6200 },
    { month: "Jun", revenue: 7400 },
]

const barConfig = {
    visitors: { label: "Visitors", color: "var(--color-chart-1)" },
    sessions: { label: "Sessions", color: "var(--color-chart-2)" },
} satisfies ChartConfig

const lineConfig = {
    visitors: { label: "Visitors", color: "var(--color-chart-1)" },
    sessions: { label: "Sessions", color: "var(--color-chart-2)" },
} satisfies ChartConfig

const areaConfig = {
    revenue: { label: "Revenue ($)", color: "var(--color-chart-3)" },
} satisfies ChartConfig

// ─── Showcase ─────────────────────────────────────────────────────────────────

export default function ChartShowcase() {
    return (
        <div>
            {/* Header */}
            <div className="mb-12">
                <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-2">
                    Klaude UI · Motion
                </p>
                <h1 className="text-3xl font-semibold tracking-tight text-foreground">
                    Chart
                </h1>
                <p className="mt-2 text-muted-foreground text-sm">
                    Container entrance ·{" "}
                    <code className="text-xs bg-muted px-1.5 py-0.5 rounded-md">fade.base</code>{" "}
                    · Data stagger via Recharts internals · Tooltip{" "}
                    <code className="text-xs bg-muted px-1.5 py-0.5 rounded-md">rounded-xl</code>
                </p>
            </div>

            {/* Bar chart */}
            <section className="mb-10">
                <h2 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-5">
                    Bar chart
                </h2>
                <ChartContainer config={barConfig}>
                    <BarChart data={monthlyData}>
                        <CartesianGrid vertical={false} strokeDasharray="3 3" />
                        <XAxis
                            dataKey="month"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                        />
                        <YAxis tickLine={false} axisLine={false} tickMargin={8} />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <ChartLegend content={<ChartLegendContent />} />
                        <Bar
                            dataKey="visitors"
                            fill="var(--color-visitors)"
                            radius={[4, 4, 0, 0]}
                            isAnimationActive
                            animationDuration={600}
                            animationEasing="ease-out"
                        />
                        <Bar
                            dataKey="sessions"
                            fill="var(--color-sessions)"
                            radius={[4, 4, 0, 0]}
                            isAnimationActive
                            animationDuration={700}
                            animationEasing="ease-out"
                        />
                    </BarChart>
                </ChartContainer>
            </section>

            {/* Line chart */}
            <section className="mb-10">
                <h2 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-5">
                    Line chart
                </h2>
                <ChartContainer config={lineConfig}>
                    <LineChart data={monthlyData}>
                        <CartesianGrid vertical={false} strokeDasharray="3 3" />
                        <XAxis
                            dataKey="month"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                        />
                        <YAxis tickLine={false} axisLine={false} tickMargin={8} />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <ChartLegend content={<ChartLegendContent />} />
                        <Line
                            type="monotone"
                            dataKey="visitors"
                            stroke="var(--color-visitors)"
                            strokeWidth={2}
                            dot={{ r: 3 }}
                            isAnimationActive
                            animationDuration={800}
                            animationEasing="ease-out"
                        />
                        <Line
                            type="monotone"
                            dataKey="sessions"
                            stroke="var(--color-sessions)"
                            strokeWidth={2}
                            dot={{ r: 3 }}
                            isAnimationActive
                            animationDuration={900}
                            animationEasing="ease-out"
                        />
                    </LineChart>
                </ChartContainer>
            </section>

            {/* Area chart */}
            <section>
                <h2 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-5">
                    Area chart
                </h2>
                <ChartContainer config={areaConfig}>
                    <AreaChart data={revenueData}>
                        <defs>
                            <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="var(--color-revenue)" stopOpacity={0.2} />
                                <stop offset="95%" stopColor="var(--color-revenue)" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid vertical={false} strokeDasharray="3 3" />
                        <XAxis
                            dataKey="month"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                        />
                        <YAxis tickLine={false} axisLine={false} tickMargin={8} />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Area
                            type="monotone"
                            dataKey="revenue"
                            stroke="var(--color-revenue)"
                            strokeWidth={2}
                            fill="url(#colorRevenue)"
                            isAnimationActive
                            animationDuration={900}
                            animationEasing="ease-out"
                        />
                    </AreaChart>
                </ChartContainer>
            </section>
        </div>
    )
}
