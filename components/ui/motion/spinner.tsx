import { cn } from "@/lib/utils"

// ─── Design ───────────────────────────────────────────────────────────────────
// Full-circle track at low opacity + a 270° arc with rounded linecaps on top.
// CSS animate-spin drives rotation. Color via currentColor, size via className.
// strokeWidth prop lets you go from hairline (1) to bold (3+).

export interface SpinnerProps extends React.ComponentProps<"svg"> {
  strokeWidth?: number
}

function Spinner({ className, strokeWidth = 2.5, ...props }: SpinnerProps) {
  const r = 9
  const cx = 12
  const circumference = 2 * Math.PI * r
  const arc = circumference * 0.75 // 270° arc

  return (
    <svg
      role="status"
      aria-label="Loading"
      viewBox="0 0 24 24"
      fill="none"
      className={cn("size-4 animate-spin", className)}
      {...props}
    >
      {/* Track */}
      <circle
        cx={cx} cy={cx} r={r}
        stroke="currentColor"
        strokeWidth={strokeWidth}
        opacity={0.15}
      />
      {/* Arc */}
      <circle
        cx={cx} cy={cx} r={r}
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeDasharray={`${arc} ${circumference}`}
        transform={`rotate(-90 ${cx} ${cx})`}
      />
    </svg>
  )
}

export { Spinner }
