import { Alert, AlertTitle, AlertDescription } from "@/components/ui/motion/alert"
import { Terminal, AlertCircle, Info, CheckCircle2 } from "lucide-react"

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
                    Entrance fade + y translate ·{" "}
                    <code className="text-xs bg-muted px-1.5 py-0.5 rounded-md">fade.base</code> ·{" "}
                    <code className="text-xs bg-muted px-1.5 py-0.5 rounded-md">rounded-lg</code>
                </p>
            </div>

            {/* Default variant */}
            <section className="mb-10">
                <h2 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-5">
                    Default
                </h2>
                <div className="flex flex-col gap-4">
                    <Alert>
                        <Terminal className="size-4" />
                        <AlertTitle>Heads up</AlertTitle>
                        <AlertDescription>
                            You can add components to your app using the CLI.
                        </AlertDescription>
                    </Alert>

                    <Alert>
                        <Info className="size-4" />
                        <AlertTitle>New update available</AlertTitle>
                        <AlertDescription>
                            Version 2.0 is now available. Run{" "}
                            <code className="text-xs bg-muted px-1 py-0.5 rounded">npm install klaude-ui@latest</code>{" "}
                            to upgrade.
                        </AlertDescription>
                    </Alert>

                    <Alert>
                        <CheckCircle2 className="size-4" />
                        <AlertTitle>Successfully deployed</AlertTitle>
                        <AlertDescription>
                            Your application has been deployed to production.
                        </AlertDescription>
                    </Alert>
                </div>
            </section>

            {/* Destructive variant */}
            <section className="mb-10">
                <h2 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-5">
                    Destructive
                </h2>
                <div className="flex flex-col gap-4">
                    <Alert variant="destructive">
                        <AlertCircle className="size-4" />
                        <AlertTitle>Error</AlertTitle>
                        <AlertDescription>
                            Your session has expired. Please log in again.
                        </AlertDescription>
                    </Alert>

                    <Alert variant="destructive">
                        <AlertCircle className="size-4" />
                        <AlertTitle>Payment failed</AlertTitle>
                        <AlertDescription>
                            We could not process your payment. Please check your card details and try again.
                        </AlertDescription>
                    </Alert>
                </div>
            </section>

            {/* Without icon */}
            <section>
                <h2 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-5">
                    Without icon
                </h2>
                <div className="flex flex-col gap-4">
                    <Alert>
                        <AlertTitle>Notice</AlertTitle>
                        <AlertDescription>
                            This feature is currently in beta and may change without notice.
                        </AlertDescription>
                    </Alert>

                    <Alert variant="destructive">
                        <AlertTitle>Access denied</AlertTitle>
                        <AlertDescription>
                            You do not have permission to perform this action.
                        </AlertDescription>
                    </Alert>
                </div>
            </section>
        </div>
    )
}
