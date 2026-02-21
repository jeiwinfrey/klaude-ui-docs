import { Spinner } from "@/components/ui/motion/spinner"

export default function SpinnerShowcase() {
    return (
        <div>
            {/* Header */}
            <div className="mb-12">
                <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-2">
                    Klaude UI · Motion
                </p>
                <h1 className="text-3xl font-semibold tracking-tight text-foreground">
                    Spinner
                </h1>
                <p className="mt-2 text-muted-foreground text-sm">
                    CSS{" "}
                    <code className="text-xs bg-muted px-1.5 py-0.5 rounded-md">@keyframes</code>{" "}
                    rotation · circular ring ·{" "}
                    <code className="text-xs bg-muted px-1.5 py-0.5 rounded-md">border-border</code>{" "}
                    +{" "}
                    <code className="text-xs bg-muted px-1.5 py-0.5 rounded-md">border-t-foreground</code>
                </p>
            </div>

            {/* Sizes */}
            <section className="mb-10">
                <h2 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-5">
                    Sizes
                </h2>
                <div className="flex items-center gap-8">
                    <div className="flex flex-col items-center gap-3">
                        <Spinner size="sm" />
                        <span className="text-xs text-muted-foreground">sm</span>
                    </div>
                    <div className="flex flex-col items-center gap-3">
                        <Spinner size="default" />
                        <span className="text-xs text-muted-foreground">default</span>
                    </div>
                    <div className="flex flex-col items-center gap-3">
                        <Spinner size="lg" />
                        <span className="text-xs text-muted-foreground">lg</span>
                    </div>
                </div>
            </section>

            {/* In context */}
            <section className="mb-10">
                <h2 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-5">
                    In context
                </h2>
                <div className="flex flex-col gap-4">
                    {/* Inline with text */}
                    <div className="flex items-center gap-2.5 text-sm text-muted-foreground">
                        <Spinner size="sm" />
                        <span>Loading your data…</span>
                    </div>

                    {/* Full-width loading state */}
                    <div className="flex items-center justify-center gap-2.5 rounded-xl border border-border py-8 text-sm text-muted-foreground">
                        <Spinner />
                        <span>Processing</span>
                    </div>

                    {/* Large centered */}
                    <div className="flex flex-col items-center justify-center gap-4 rounded-xl border border-border py-14">
                        <Spinner size="lg" />
                        <span className="text-sm text-muted-foreground">Fetching results</span>
                    </div>
                </div>
            </section>

            {/* Custom color via className */}
            <section>
                <h2 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-5">
                    Custom color via className
                </h2>
                <p className="text-xs text-muted-foreground mb-4">
                    Override{" "}
                    <code className="bg-muted px-1 py-0.5 rounded">border-t-*</code>{" "}
                    to change the arc color.
                </p>
                <div className="flex items-center gap-6">
                    <Spinner />
                    <Spinner className="border-t-primary" />
                    <Spinner className="border-t-destructive" />
                    <Spinner className="border-t-chart-1" />
                    <Spinner className="border-t-chart-2" />
                </div>
            </section>
        </div>
    )
}
