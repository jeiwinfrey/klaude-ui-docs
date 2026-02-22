import { Badge } from "@/components/ui/motion/badge"
import { Spinner } from "@/components/ui/motion/spinner"
import { Star, Zap, Shield, Bell, CheckCircle2 } from "lucide-react"

export default function BadgeShowcase() {
    return (
        <div>
            {/* Header */}
            <div className="mb-12">
                <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-2">
                    Klaude UI · Motion
                </p>
                <h1 className="text-3xl font-semibold tracking-tight text-foreground">
                    Badge
                </h1>
                <p className="mt-2 text-muted-foreground text-sm">
                    Mount: scale pop ·{" "}
                    <code className="text-xs bg-muted px-1.5 py-0.5 rounded-md">ios.bouncy</code>{" "}
                    · Hover: scale lift ·{" "}
                    <code className="text-xs bg-muted px-1.5 py-0.5 rounded-md">ios.snappy</code>{" "}
                    · always{" "}
                    <code className="text-xs bg-muted px-1.5 py-0.5 rounded-md">rounded-full</code>
                </p>
            </div>

            {/* Variants */}
            <section className="mb-10">
                <h2 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-5">
                    Variants
                </h2>
                <div className="flex flex-wrap gap-3 items-center">
                    <Badge variant="default">Default</Badge>
                    <Badge variant="secondary">Secondary</Badge>
                    <Badge variant="destructive">Destructive</Badge>
                    <Badge variant="outline">Outline</Badge>
                    <Badge variant="ghost">Ghost</Badge>
                    <Badge variant="link">Link</Badge>
                </div>
            </section>

            {/* With icons */}
            <section className="mb-10">
                <h2 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-5">
                    With icons
                </h2>
                <div className="flex flex-wrap gap-3 items-center">
                    <Badge><Star /> Featured</Badge>
                    <Badge variant="secondary"><Zap /> New</Badge>
                    <Badge variant="destructive"><Shield /> Blocked</Badge>
                    <Badge variant="outline"><Bell /> 3 alerts</Badge>
                    <Badge variant="ghost"><CheckCircle2 /> Done</Badge>
                </div>
            </section>

            {/* With spinner */}
            <section className="mb-10">
                <h2 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-5">
                    Loading state
                </h2>
                <div className="flex flex-wrap gap-3 items-center">
                    <Badge><Spinner className="size-3" /> Syncing</Badge>
                    <Badge variant="secondary"><Spinner className="size-3" /> Processing</Badge>
                    <Badge variant="outline"><Spinner className="size-3" /> Pending</Badge>
                    <Badge variant="destructive"><Spinner className="size-3" /> Retrying</Badge>
                </div>
            </section>

            {/* Real-world usage */}
            <section className="mb-10">
                <h2 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-5">
                    Usage examples
                </h2>
                <div className="flex flex-col gap-4">
                    {/* Status badges */}
                    <div className="flex flex-wrap gap-2 items-center">
                        <span className="text-sm text-muted-foreground mr-2">Status:</span>
                        <Badge variant="default">Active</Badge>
                        <Badge variant="outline">Pending</Badge>
                        <Badge variant="destructive">Failed</Badge>
                        <Badge variant="secondary">Draft</Badge>
                    </div>
                    {/* Count badges */}
                    <div className="flex flex-wrap gap-2 items-center">
                        <span className="text-sm text-muted-foreground mr-2">Notifications:</span>
                        <Badge>1</Badge>
                        <Badge>12</Badge>
                        <Badge variant="destructive">99+</Badge>
                    </div>
                    {/* Tag-style */}
                    <div className="flex flex-wrap gap-2 items-center">
                        <span className="text-sm text-muted-foreground mr-2">Tags:</span>
                        <Badge variant="outline">react</Badge>
                        <Badge variant="outline">typescript</Badge>
                        <Badge variant="outline">tailwind</Badge>
                        <Badge variant="outline">framer-motion</Badge>
                    </div>
                </div>
            </section>
        </div>
    )
}
