import { Button } from "@/components/ui/motion/button"
import { ArrowRight, Trash2, Plus, Search } from "lucide-react"

export default function ButtonShowcase() {
    return (
        <div>
            {/* Header */}
            <div className="mb-12">
                <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-2">
                    Klaude UI · Motion
                </p>
                <h1 className="text-3xl font-semibold tracking-tight text-foreground">
                    Button
                </h1>
                <p className="mt-2 text-muted-foreground text-sm">
                    iOS-spring press feedback ·{" "}
                    <code className="text-xs bg-muted px-1.5 py-0.5 rounded-md">ios.snappy</code>{" "}
                    · shape via{" "}
                    <code className="text-xs bg-muted px-1.5 py-0.5 rounded-md">rounded</code>{" "}
                    prop
                </p>
            </div>

            {/* Variants */}
            <section className="mb-10">
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
            <section className="mb-10">
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

            {/* Shape */}
            <section className="mb-10">
                <h2 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-5">
                    Shape
                </h2>
                <div className="flex flex-wrap gap-3 items-center">
                    <Button rounded="none">None</Button>
                    <Button rounded="md">Medium</Button>
                    <Button rounded="lg">Large (default)</Button>
                    <Button rounded="xl">XL</Button>
                    <Button rounded="full">Full</Button>
                </div>
            </section>

            {/* With icons */}
            <section className="mb-10">
                <h2 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-5">
                    With icons
                </h2>
                <div className="flex flex-wrap gap-3 items-center">
                    <Button><Search /> Search</Button>
                    <Button variant="outline">Continue <ArrowRight /></Button>
                    <Button variant="destructive"><Trash2 /> Delete</Button>
                    <Button variant="secondary" rounded="full"><Plus /> New item</Button>
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
        </div>
    )
}
