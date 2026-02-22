import {
    CheckCircle2,
    AlertTriangle,
    Info,
    XCircle,
    Bell,
    Sparkles,
} from "lucide-react"
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/motion/alert"

export default function AlertShowcase() {
    return (
        <div>
            {/* Header */}
            <div className="mb-12">
                <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-2">
                    Klaude UI · Motion
                </p>
                <h1 className="text-3xl font-semibold tracking-tight text-foreground">
                    Alert
                </h1>
                <p className="mt-2 text-muted-foreground text-sm">
                    Filled tint · icon badge · 5 variants ·{" "}
                    <code className="text-xs bg-muted px-1.5 py-0.5 rounded-md">ios.snappy</code>{" "}
                    entrance
                </p>
            </div>

            {/* All variants */}
            <section className="mb-10">
                <h2 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-5">
                    Variants
                </h2>
                <div className="flex flex-col gap-3 max-w-xl">
                    <Alert variant="default" icon={<Sparkles />}>
                        <AlertTitle>What&apos;s new</AlertTitle>
                        <AlertDescription>
                            Klaude UI 1.0 is here. New components, new design language.
                        </AlertDescription>
                    </Alert>

                    <Alert variant="success" icon={<CheckCircle2 />}>
                        <AlertTitle>Saved successfully</AlertTitle>
                        <AlertDescription>
                            Your changes have been saved and deployed to production.
                        </AlertDescription>
                    </Alert>

                    <Alert variant="warning" icon={<AlertTriangle />}>
                        <AlertTitle>Storage almost full</AlertTitle>
                        <AlertDescription>
                            You&apos;ve used 92% of your storage. Consider upgrading your plan.
                        </AlertDescription>
                    </Alert>

                    <Alert variant="destructive" icon={<XCircle />}>
                        <AlertTitle>Payment failed</AlertTitle>
                        <AlertDescription>
                            We couldn&apos;t charge your card ending in 4242. Please update your
                            payment method.
                        </AlertDescription>
                    </Alert>

                    <Alert variant="info" icon={<Info />}>
                        <AlertTitle>Maintenance scheduled</AlertTitle>
                        <AlertDescription>
                            Services will be unavailable on Feb 25 from 02:00–04:00 UTC.
                        </AlertDescription>
                    </Alert>
                </div>
            </section>

            {/* Without icon */}
            <section className="mb-10">
                <h2 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-5">
                    Without icon
                </h2>
                <div className="flex flex-col gap-3 max-w-xl">
                    <Alert variant="default">
                        <AlertTitle>Heads up</AlertTitle>
                        <AlertDescription>
                            Icon is optional. The left bar is still the primary visual anchor.
                        </AlertDescription>
                    </Alert>
                    <Alert variant="warning">
                        <AlertTitle>Approaching rate limit</AlertTitle>
                        <AlertDescription>
                            You&apos;re close to your API rate limit for this window.
                        </AlertDescription>
                    </Alert>
                </div>
            </section>

            {/* Description only */}
            <section>
                <h2 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-5">
                    Notification-style
                </h2>
                <div className="flex flex-col gap-3 max-w-xl">
                    <Alert variant="info" icon={<Bell />}>
                        <AlertDescription>
                            Klaude liked your design system post.
                        </AlertDescription>
                    </Alert>
                    <Alert variant="success" icon={<CheckCircle2 />}>
                        <AlertDescription>
                            Build passed — all 142 checks successful.
                        </AlertDescription>
                    </Alert>
                </div>
            </section>
        </div>
    )
}
