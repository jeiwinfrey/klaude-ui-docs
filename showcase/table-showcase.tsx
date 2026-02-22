import {
    Table,
    TableHeader,
    TableBody,
    TableFooter,
    TableHead,
    TableRow,
    TableCell,
    TableCaption,
} from "@/components/ui/motion/table"
import { Badge } from "@/components/ui/motion/badge"

// ─── Data ─────────────────────────────────────────────────────────────────────

const USERS = [
    { id: "USR-001", name: "Klaude Nagasawa", email: "klaude@klaude.io", role: "Owner", status: "active", joined: "Jan 2025" },
    { id: "USR-002", name: "Sam Rivera", email: "sam@klaude.io", role: "Admin", status: "active", joined: "Feb 2025" },
    { id: "USR-003", name: "Alex Chen", email: "alex@klaude.io", role: "Member", status: "inactive", joined: "Mar 2025" },
    { id: "USR-004", name: "Mia Tanaka", email: "mia@klaude.io", role: "Member", status: "pending", joined: "Apr 2025" },
    { id: "USR-005", name: "Liam Nakamura", email: "liam@klaude.io", role: "Viewer", status: "active", joined: "May 2025" },
]

const INVOICES = [
    { id: "INV-001", amount: "$240.00", status: "paid", date: "Jan 15" },
    { id: "INV-002", amount: "$1,200.00", status: "pending", date: "Feb 3" },
    { id: "INV-003", amount: "$540.00", status: "failed", date: "Feb 20" },
    { id: "INV-004", amount: "$80.00", status: "paid", date: "Mar 1" },
]

const statusVariant: Record<string, "default" | "secondary" | "destructive" | "outline"> = {
    active: "default",
    inactive: "secondary",
    pending: "outline",
    paid: "default",
    failed: "destructive",
}

// ─── Showcase ─────────────────────────────────────────────────────────────────

export default function TableShowcase() {
    return (
        <div>
            {/* Header */}
            <div className="mb-12">
                <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-2">
                    Klaude UI · Motion
                </p>
                <h1 className="text-3xl font-semibold tracking-tight text-foreground">
                    Table
                </h1>
                <p className="mt-2 text-muted-foreground text-sm">
                    Card wrapper · filled header · rows stagger in ·{" "}
                    <code className="text-xs bg-muted px-1.5 py-0.5 rounded-md">staggerChildren</code>{" "}
                    · hover highlight via{" "}
                    <code className="text-xs bg-muted px-1.5 py-0.5 rounded-md">ios.snappy</code>
                </p>
            </div>

            {/* Users table */}
            <section className="mb-10">
                <h2 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-5">
                    Users
                </h2>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>ID</TableHead>
                            <TableHead>Name</TableHead>
                            <TableHead>Email</TableHead>
                            <TableHead>Role</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Joined</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {USERS.map((user) => (
                            <TableRow key={user.id}>
                                <TableCell className="text-muted-foreground font-mono text-xs">{user.id}</TableCell>
                                <TableCell className="font-medium">{user.name}</TableCell>
                                <TableCell className="text-muted-foreground">{user.email}</TableCell>
                                <TableCell>{user.role}</TableCell>
                                <TableCell>
                                    <Badge variant={statusVariant[user.status]}>
                                        {user.status}
                                    </Badge>
                                </TableCell>
                                <TableCell className="text-muted-foreground">{user.joined}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </section>

            {/* Invoices table with footer */}
            <section>
                <h2 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-5">
                    Invoices · with footer
                </h2>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Invoice</TableHead>
                            <TableHead>Date</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead className="text-right">Amount</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {INVOICES.map((inv) => (
                            <TableRow key={inv.id}>
                                <TableCell className="font-mono text-xs text-muted-foreground">{inv.id}</TableCell>
                                <TableCell className="text-muted-foreground">{inv.date}</TableCell>
                                <TableCell>
                                    <Badge variant={statusVariant[inv.status]}>{inv.status}</Badge>
                                </TableCell>
                                <TableCell className="text-right font-medium tabular-nums">{inv.amount}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TableCell colSpan={3}>Total</TableCell>
                            <TableCell className="text-right tabular-nums">$2,060.00</TableCell>
                        </TableRow>
                    </TableFooter>
                    <TableCaption>Invoices for Q1 2025</TableCaption>
                </Table>
            </section>
        </div>
    )
}
