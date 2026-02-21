import { Bell, Star, Plus } from "lucide-react"
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
                    <code className="text-xs bg-muted px-1.5 py-0.5 rounded-md">rounded-full</code>
                </p>
            </div>

            {/* Sizes */}
            <section className="mb-10">
                <h2 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-5">
                    Sizes
                </h2>
                <div className="flex items-end gap-6">
                    {(["sm", "default", "lg"] as const).map((size) => (
                        <div key={size} className="flex flex-col items-center gap-3">
                            <Avatar size={size}>
                                <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
                                <AvatarFallback>SC</AvatarFallback>
                            </Avatar>
                            <span className="text-xs text-muted-foreground">{size}</span>
                        </div>
                    ))}
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

            {/* Badge */}
            <section className="mb-10">
                <h2 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-5">
                    Badge
                </h2>

                {/* Colors */}
                <div className="flex items-end gap-6 mb-8">
                    {[
                        { label: "default", className: "" },
                        { label: "green", className: "bg-green-500" },
                        { label: "orange", className: "bg-orange-500" },
                        { label: "red", className: "bg-red-500" },
                        { label: "yellow", className: "bg-yellow-400" },
                        { label: "muted", className: "bg-muted-foreground" },
                    ].map(({ label, className }) => (
                        <div key={label} className="flex flex-col items-center gap-3">
                            <Avatar size="lg">
                                <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
                                <AvatarFallback>SC</AvatarFallback>
                                <AvatarBadge className={className || undefined} />
                            </Avatar>
                            <span className="text-xs text-muted-foreground">{label}</span>
                        </div>
                    ))}
                </div>

                {/* With icons */}
                <div className="flex items-end gap-6">
                    <div className="flex flex-col items-center gap-3">
                        <Avatar size="lg">
                            <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
                            <AvatarFallback>SC</AvatarFallback>
                            <AvatarBadge icon={<Bell />} />
                        </Avatar>
                        <span className="text-xs text-muted-foreground">bell</span>
                    </div>
                    <div className="flex flex-col items-center gap-3">
                        <Avatar size="lg">
                            <AvatarFallback>JD</AvatarFallback>
                            <AvatarBadge icon={<Star />} className="bg-yellow-400" />
                        </Avatar>
                        <span className="text-xs text-muted-foreground">star</span>
                    </div>
                    <div className="flex flex-col items-center gap-3">
                        <Avatar size="lg">
                            <AvatarFallback>AB</AvatarFallback>
                            <AvatarBadge icon={<Plus />} className="bg-green-500" />
                        </Avatar>
                        <span className="text-xs text-muted-foreground">plus</span>
                    </div>
                </div>
            </section>

            {/* Group */}
            <section className="mb-10">
                <h2 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-5">
                    Group
                </h2>
                <div className="flex flex-col gap-6">
                    {(["sm", "default", "lg"] as const).map((size) => (
                        <div key={size} className="flex items-center gap-4">
                            <span className="text-xs text-muted-foreground w-14">{size}</span>
                            <AvatarGroup>
                                {AVATARS.map(({ src, fallback, alt }) => (
                                    <Avatar key={alt} size={size}>
                                        <AvatarImage src={src} alt={alt} />
                                        <AvatarFallback>{fallback}</AvatarFallback>
                                    </Avatar>
                                ))}
                                <AvatarGroupCount>+4</AvatarGroupCount>
                            </AvatarGroup>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}
