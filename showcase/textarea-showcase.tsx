"use client"

import { useState } from "react"
import { Textarea } from "@/components/ui/motion/textarea"

export default function TextareaShowcase() {
    const [bio, setBio] = useState("")
    const [message, setMessage] = useState("")

    return (
        <div>
            {/* Header */}
            <div className="mb-12">
                <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-2">
                    Klaude UI · Motion
                </p>
                <h1 className="text-3xl font-semibold tracking-tight text-foreground">
                    Textarea
                </h1>
                <p className="mt-2 text-muted-foreground text-sm">
                    Floating label · filled background ·{" "}
                    <code className="text-xs bg-muted px-1.5 py-0.5 rounded-md">ios.snappy</code>{" "}
                    · animated char counter · hint text
                </p>
            </div>

            {/* Floating label */}
            <section className="mb-10">
                <h2 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-5">
                    Floating label
                </h2>
                <div className="flex flex-col gap-4 max-w-md">
                    <Textarea label="Bio" placeholder="" rows={4} />
                    <Textarea label="Address" placeholder="" rows={3} />
                </div>
            </section>

            {/* With char counter */}
            <section className="mb-10">
                <h2 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-5">
                    With character counter
                </h2>
                <div className="flex flex-col gap-4 max-w-md">
                    <Textarea
                        label="Bio"
                        maxLength={160}
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                        hint="Shown on your public profile. Max 160 characters."
                        rows={4}
                    />
                    <Textarea
                        label="Message"
                        maxLength={280}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        hint="Twitter-style limit."
                        rows={4}
                    />
                </div>
            </section>

            {/* Without label */}
            <section className="mb-10">
                <h2 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-5">
                    Plain — no label
                </h2>
                <div className="max-w-md">
                    <Textarea
                        placeholder="Jot something down…"
                        hint="No label, just a placeholder."
                        rows={4}
                    />
                </div>
            </section>

            {/* States */}
            <section>
                <h2 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-5">
                    States
                </h2>
                <div className="flex flex-col gap-4 max-w-md">
                    <Textarea
                        label="Disabled"
                        defaultValue="You cannot edit this."
                        disabled
                        rows={3}
                    />
                    <Textarea
                        label="Invalid"
                        defaultValue="This content triggers an error."
                        aria-invalid="true"
                        hint="This field contains an error."
                        rows={3}
                    />
                </div>
            </section>
        </div>
    )
}
