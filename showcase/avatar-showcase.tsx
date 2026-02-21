import {
    Avatar,
    AvatarImage,
    AvatarFallback,
    AvatarBadge,
    AvatarGroup,
    AvatarGroupCount,
} from "@/components/ui/motion/avatar"

const AVATARS = [
    { src: "https://github.com/shadcn.png", fallback: "SC", alt: "shadcn" },
    { src: "https://github.com/vercel.png", fallback: "VC", alt: "Vercel" },
    { src: "https://github.com/rauchg.png", fallback: "RG", alt: "Rauch" },
    { src: "/broken-url.png", fallback: "JD", alt: "John Doe" },
]

export default function AvatarShowcase() {
    return (
        <div>
            {/* Header */}
            <div className="mb-12">
                <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-2">
                    Klaude UI · Motion
                </p>
                <h1 className="text-3xl font-semibold tracking-tight text-foreground">
                    Avatar
                </h1>
                <p className="mt-2 text-muted-foreground text-sm">
                    Hover: scale lift ·{" "}
                    <code className="text-xs bg-muted px-1.5 py-0.5 rounded-md">ios.snappy</code>{" "}
                    · always{" "}
                    <code className="text-xs bg-muted px-1.5 py-0.5 rounded-md">rounded-full squircle</code>
                </p>
            </div>

            {/* Sizes */}
            <section className="mb-10">
                <h2 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-5">
                    Sizes
                </h2>
                <div className="flex items-end gap-4">
                    <Avatar size="sm">
                        <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
                        <AvatarFallback>SC</AvatarFallback>
                    </Avatar>
                    <Avatar size="default">
                        <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
                        <AvatarFallback>SC</AvatarFallback>
                    </Avatar>
                    <Avatar size="lg">
                        <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
                        <AvatarFallback>SC</AvatarFallback>
                    </Avatar>
                </div>
            </section>

            {/* Fallback */}
            <section className="mb-10">
                <h2 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-5">
                    Image fallback
                </h2>
                <div className="flex items-center gap-4">
                    <Avatar size="lg">
                        <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
                        <AvatarFallback>SC</AvatarFallback>
                    </Avatar>
                    <Avatar size="lg">
                        <AvatarImage src="/broken-link.png" alt="broken" />
                        <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <Avatar size="lg">
                        <AvatarFallback>AB</AvatarFallback>
                    </Avatar>
                </div>
            </section>

            {/* With badge */}
            <section className="mb-10">
                <h2 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-5">
                    With status badge
                </h2>
                <div className="flex items-center gap-6">
                    {(["sm", "default", "lg"] as const).map((size) => (
                        <Avatar key={size} size={size}>
                            <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
                            <AvatarFallback>SC</AvatarFallback>
                            <AvatarBadge />
                        </Avatar>
                    ))}
                </div>
            </section>

            {/* Group */}
            <section className="mb-10">
                <h2 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-5">
                    Group
                </h2>
                <div className="flex flex-col gap-4">
                    {(["sm", "default", "lg"] as const).map((size) => (
                        <AvatarGroup key={size}>
                            {AVATARS.slice(0, 3).map(({ src, fallback, alt }) => (
                                <Avatar key={alt} size={size}>
                                    <AvatarImage src={src} alt={alt} />
                                    <AvatarFallback>{fallback}</AvatarFallback>
                                </Avatar>
                            ))}
                            <AvatarGroupCount>+4</AvatarGroupCount>
                        </AvatarGroup>
                    ))}
                </div>
            </section>
        </div>
    )
}
