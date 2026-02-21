import { Button } from "@/components/ui/motion/button"
import { ArrowRight, Trash2, Plus, Search } from "lucide-react"

export default function ButtonShowcase() {
    return (
        <main className="min-h-screen bg-background px-8 py-16 max-w-3xl mx-auto">

            {/* Header */}
            <div className="mb-12">
                <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-2">
                    Klaude UI · Motion
                </p>
                <h1 className="text-3xl font-semibold tracking-tight text-foreground">
                    Button
                </h1>
                <p className="mt-2 text-muted-foreground text-sm">
                    iOS-spring press feedback · <code className="text-xs bg-muted px-1.5 py-0.5 rounded-md">ios.snappy</code> · always{" "}
                    <code className="text-xs bg-muted px-1.5 py-0.5 rounded-md">rounded-full</code>
                </p>
            </div>

            {/* Variants */}
            <section className="mb-12">
                <h2 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-5">
                    Variants
                </h2>
                <div className="flex flex-wrap gap-3 items-center">
                    <Button variant="default">Default</Button>
                    <Button variant="destructive">Destructive</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="ghost">Ghost</Button>
                    <Button variant="link">Link</Button>
                </div>
            </section>

            {/* Sizes */}
            <section className="mb-12">
                <h2 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-5">
                    Sizes
                </h2>
                <div className="flex flex-wrap gap-3 items-center">
                    <Button size="sm">Small</Button>
                    <Button size="default">Default</Button>
                    <Button size="lg">Large</Button>
                    <Button size="icon"><Plus /></Button>
                </div>
            </section>

            {/* With icons */}
            <section className="mb-12">
                <h2 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-5">
                    With icons
                </h2>
                <div className="flex flex-wrap gap-3 items-center">
                    <Button><Search /> Search</Button>
                    <Button variant="outline">Continue <ArrowRight /></Button>
                    <Button variant="destructive"><Trash2 /> Delete</Button>
                    <Button variant="secondary"><Plus /> New item</Button>
                </div>
            </section>

            {/* Disabled */}
            <section>
                <h2 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-5">
                    Disabled · no motion
                </h2>
                <div className="flex flex-wrap gap-3 items-center">
                    <Button disabled>Default</Button>
                    <Button variant="destructive" disabled>Destructive</Button>
                    <Button variant="outline" disabled>Outline</Button>
                    <Button variant="secondary" disabled>Secondary</Button>
                    <Button variant="ghost" disabled>Ghost</Button>
                </div>
            </section>

        </main>
    )
}
