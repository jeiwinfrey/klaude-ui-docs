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
                    SVG ring · track + 270° arc ·{" "}
                    <code className="text-xs bg-muted px-1.5 py-0.5 rounded-md">strokeLinecap="round"</code>{" "}
                    · CSS{" "}
                    <code className="text-xs bg-muted px-1.5 py-0.5 rounded-md">animate-spin</code>{" "}
                    · size and color via{" "}
                    <code className="text-xs bg-muted px-1.5 py-0.5 rounded-md">className</code>
                </p>
            </div>

            {/* Sizes */}
            <section className="mb-10">
                <h2 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-5">
                    Sizes
                </h2>
                <div className="flex items-center gap-8">
                    {[
                        { label: "sm", cls: "size-4" },
                        { label: "default", cls: "size-6" },
                        { label: "lg", cls: "size-8" },
                        { label: "xl", cls: "size-12" },
                    ].map(({ label, cls }) => (
                        <div key={label} className="flex flex-col items-center gap-3">
                            <Spinner className={cls} />
                            <span className="text-xs text-muted-foreground">{label}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* Stroke widths */}
            <section className="mb-10">
                <h2 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-5">
                    Stroke weight
                </h2>
                <div className="flex items-center gap-8">
                    {[
                        { label: "hairline", sw: 1 },
                        { label: "thin", sw: 1.5 },
                        { label: "default", sw: 2.5 },
                        { label: "bold", sw: 3.5 },
                    ].map(({ label, sw }) => (
                        <div key={label} className="flex flex-col items-center gap-3">
                            <Spinner className="size-8" strokeWidth={sw} />
                            <span className="text-xs text-muted-foreground">{label}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* Colors */}
            <section className="mb-10">
                <h2 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-5">
                    Color
                </h2>
                <div className="flex items-center gap-6">
                    <Spinner className="size-6" />
                    <Spinner className="size-6 text-primary" />
                    <Spinner className="size-6 text-green-500" />
                    <Spinner className="size-6 text-amber-500" />
                    <Spinner className="size-6 text-destructive" />
                    <Spinner className="size-6 text-sky-500" />
                    <Spinner className="size-6 text-muted-foreground" />
                </div>
            </section>

            {/* In context */}
            <section>
                <h2 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-5">
                    In context
                </h2>
                <div className="flex flex-col gap-4">
                    {/* Inline with text */}
                    <div className="flex items-center gap-2.5 text-sm text-muted-foreground">
                        <Spinner className="size-4" strokeWidth={1.5} />
                        <span>Loading your data…</span>
                    </div>

                    {/* Full-width loading state */}
                    <div className="flex items-center justify-center gap-2.5 rounded-2xl border border-border bg-muted/30 py-8 text-sm text-muted-foreground">
                        <Spinner className="size-5" strokeWidth={2} />
                        <span>Processing</span>
                    </div>

                    {/* Large centred */}
                    <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-border bg-muted/30 py-14">
                        <Spinner className="size-10" strokeWidth={1.5} />
                        <span className="text-sm text-muted-foreground">Fetching results</span>
                    </div>
                </div>
            </section>
        </div>
    )
}
