import { Skeleton } from "@/components/ui/motion/skeleton"

export default function SkeletonShowcase() {
    return (
        <div>
            {/* Header */}
            <div className="mb-12">
                <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-2">
                    Klaude UI · Motion
                </p>
                <h1 className="text-3xl font-semibold tracking-tight text-foreground">
                    Skeleton
                </h1>
                <p className="mt-2 text-muted-foreground text-sm">
                    Shimmer sweep · gradient glides left → right ·{" "}
                    <code className="text-xs bg-muted px-1.5 py-0.5 rounded-md">via-foreground/6</code>{" "}
                    · reduced motion: opacity pulse
                </p>
            </div>

            {/* Primitives */}
            <section className="mb-10">
                <h2 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-5">
                    Primitives
                </h2>
                <div className="flex flex-col gap-3 max-w-xs">
                    {/* Circle */}
                    <Skeleton className="size-12 rounded-full" />
                    {/* Text lines */}
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-4/5" />
                    <Skeleton className="h-4 w-3/5" />
                    {/* Block */}
                    <Skeleton className="h-32 w-full" />
                </div>
            </section>

            {/* User card skeleton */}
            <section className="mb-10">
                <h2 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-5">
                    User card
                </h2>
                <div className="flex items-start gap-4 max-w-sm rounded-2xl border border-border/40 bg-muted/20 p-5">
                    <Skeleton className="size-12 shrink-0 rounded-full" />
                    <div className="flex flex-1 flex-col gap-2.5 pt-0.5">
                        <Skeleton className="h-4 w-2/3" />
                        <Skeleton className="h-3 w-1/2" />
                        <Skeleton className="h-3 w-4/5" />
                    </div>
                </div>
            </section>

            {/* Article skeleton */}
            <section className="mb-10">
                <h2 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-5">
                    Article
                </h2>
                <div className="flex flex-col gap-4 max-w-md">
                    <Skeleton className="h-44 w-full" />
                    <Skeleton className="h-6 w-3/4" />
                    <div className="flex flex-col gap-2">
                        <Skeleton className="h-3.5 w-full" />
                        <Skeleton className="h-3.5 w-full" />
                        <Skeleton className="h-3.5 w-4/5" />
                    </div>
                    <div className="flex items-center gap-3 pt-1">
                        <Skeleton className="size-8 rounded-full" />
                        <Skeleton className="h-3.5 w-28" />
                    </div>
                </div>
            </section>

            {/* List skeleton */}
            <section>
                <h2 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-5">
                    List
                </h2>
                <div className="flex flex-col divide-y divide-border/30 rounded-2xl border border-border/40 bg-muted/20 overflow-hidden max-w-md">
                    {Array.from({ length: 4 }).map((_, i) => (
                        <div key={i} className="flex items-center gap-4 px-5 py-4">
                            <Skeleton className="size-9 shrink-0 rounded-full" />
                            <div className="flex flex-1 flex-col gap-2">
                                <Skeleton className="h-3.5 w-1/2" />
                                <Skeleton className="h-3 w-3/4" />
                            </div>
                            <Skeleton className="h-3.5 w-12 shrink-0" />
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}
