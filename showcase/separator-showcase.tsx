import { Separator } from "@/components/ui/motion/separator"
import { Button } from "@/components/ui/motion/button"

export default function SeparatorShowcase() {
    return (
        <div>
            {/* Header */}
            <div className="mb-12">
                <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-2">
                    Klaude UI · Motion
                </p>
                <h1 className="text-3xl font-semibold tracking-tight text-foreground">
                    Separator
                </h1>
                <p className="mt-2 text-muted-foreground text-sm">
                    Gradient fade at edges · draw-in entrance ·{" "}
                    <code className="text-xs bg-muted px-1.5 py-0.5 rounded-md">scaleX</code>{" "}
                    from centre ·{" "}
                    <code className="text-xs bg-muted px-1.5 py-0.5 rounded-md">ios.spring</code>{" "}
                    · optional label
                </p>
            </div>

            {/* Variants */}
            <section className="mb-10">
                <h2 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-5">
                    Variants
                </h2>
                <div className="flex flex-col gap-6 max-w-md">
                    <div className="flex flex-col gap-2">
                        <span className="text-xs text-muted-foreground">gradient (default)</span>
                        <Separator />
                    </div>
                    <div className="flex flex-col gap-2">
                        <span className="text-xs text-muted-foreground">solid</span>
                        <Separator variant="default" />
                    </div>
                </div>
            </section>

            {/* With label */}
            <section className="mb-10">
                <h2 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-5">
                    With label
                </h2>
                <div className="flex flex-col gap-6 max-w-md">
                    <Separator label="or" />
                    <Separator label="continue with" />
                    <Separator label="Section" variant="default" />
                </div>
            </section>

            {/* Vertical */}
            <section className="mb-10">
                <h2 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-5">
                    Vertical
                </h2>
                <div className="flex items-center gap-4 h-10">
                    <span className="text-sm text-muted-foreground">Blog</span>
                    <Separator orientation="vertical" />
                    <span className="text-sm text-muted-foreground">Docs</span>
                    <Separator orientation="vertical" />
                    <span className="text-sm text-muted-foreground">Changelog</span>
                    <Separator orientation="vertical" />
                    <span className="text-sm text-muted-foreground">Github</span>
                </div>
            </section>

            {/* In context — login form */}
            <section>
                <h2 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-5">
                    In context
                </h2>
                <div className="flex flex-col gap-4 max-w-xs rounded-2xl border border-border/40 bg-muted/20 p-6">
                    <Button variant="outline">
                        Continue with Google
                    </Button>
                    <Button variant="outline">
                        Continue with Apple
                    </Button>
                    <Separator label="or" />
                    <Button variant="default">
                        Sign in with email
                    </Button>
                </div>
            </section>
        </div>
    )
}
