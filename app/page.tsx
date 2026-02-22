"use client"

import { useState } from "react"
import { motion } from "motion/react"
import { Layers, Square, TriangleAlert, Tag, CircleUser, BarChart2, Loader, AlignLeft, Table2, RectangleHorizontal, SplitSquareHorizontal } from "lucide-react"
import { cn } from "@/lib/utils"
import { ios } from "@/lib/motion"

import ButtonShowcase from "@/showcase/button-showcase"
import AlertShowcase from "@/showcase/alert-showcase"
import BadgeShowcase from "@/showcase/badge-showcase"
import AvatarShowcase from "@/showcase/avatar-showcase"
import ChartShowcase from "@/showcase/chart-showcase"
import SpinnerShowcase from "@/showcase/spinner-showcase"
import TextareaShowcase from "@/showcase/textarea-showcase"
import TableShowcase from "@/showcase/table-showcase"
import SkeletonShowcase from "@/showcase/skeleton-showcase"
import SeparatorShowcase from "@/showcase/separator-showcase"

// ─── Registry ────────────────────────────────────────────────────────────────

const COMPONENTS = [
  {
    id: "button",
    label: "Button",
    icon: Square,
    component: ButtonShowcase,
  },
  {
    id: "alert",
    label: "Alert",
    icon: TriangleAlert,
    component: AlertShowcase,
  },
  {
    id: "badge",
    label: "Badge",
    icon: Tag,
    component: BadgeShowcase,
  },
  {
    id: "avatar",
    label: "Avatar",
    icon: CircleUser,
    component: AvatarShowcase,
  },
  {
    id: "chart",
    label: "Chart",
    icon: BarChart2,
    component: ChartShowcase,
  },
  {
    id: "spinner",
    label: "Spinner",
    icon: Loader,
    component: SpinnerShowcase,
  },
  {
    id: "textarea",
    label: "Textarea",
    icon: AlignLeft,
    component: TextareaShowcase,
  },
  {
    id: "table",
    label: "Table",
    icon: Table2,
    component: TableShowcase,
  },
  {
    id: "skeleton",
    label: "Skeleton",
    icon: RectangleHorizontal,
    component: SkeletonShowcase,
  },
  {
    id: "separator",
    label: "Separator",
    icon: SplitSquareHorizontal,
    component: SeparatorShowcase,
  },
] as const

type ComponentId = (typeof COMPONENTS)[number]["id"]

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  const [active, setActive] = useState<ComponentId>("button")

  const ActiveShowcase = COMPONENTS.find((c) => c.id === active)!.component

  return (
    <div className="flex min-h-screen bg-background">

      {/* Sidebar */}
      <aside className="w-56 shrink-0 border-r border-border flex flex-col py-8 px-4">
        {/* Brand */}
        <div className="flex items-center gap-2 px-2 mb-8">
          <Layers className="size-4 text-muted-foreground" />
          <span className="text-sm font-semibold tracking-tight text-foreground">
            Klaude UI
          </span>
        </div>

        {/* Nav label */}
        <p className="text-[10px] font-semibold tracking-widest uppercase text-muted-foreground px-2 mb-2">
          Components
        </p>

        {/* Nav items */}
        <nav className="flex flex-col gap-0.5">
          {COMPONENTS.map(({ id, label, icon: Icon }) => {
            const isActive = active === id
            return (
              <button
                key={id}
                onClick={() => setActive(id)}
                className={cn(
                  "relative flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-sm transition-colors text-left",
                  isActive
                    ? "text-foreground font-medium"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {/* Sliding active bg */}
                {isActive && (
                  <motion.span
                    layoutId="nav-active-bg"
                    className="absolute inset-0 rounded-lg bg-muted"
                    transition={ios.snappy}
                  />
                )}
                <Icon className="relative size-3.5 shrink-0" />
                <span className="relative">{label}</span>
              </button>
            )
          })}
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 px-12 py-16 max-w-3xl">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={ios.spring}
        >
          <ActiveShowcase />
        </motion.div>
      </main>

    </div>
  )
}