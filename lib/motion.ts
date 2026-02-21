export const ios = {
  // Default spring — most state transitions, hover effects
  // Equivalent to SwiftUI: .spring(response: 0.35, dampingFraction: 0.7)
  spring: {
    type: "spring",
    stiffness: 500,
    damping: 36,
    mass: 1,
  },

  // Snappy — micro-interactions, toggles, tab indicators, button press
  // Equivalent to SwiftUI: .spring(response: 0.25, dampingFraction: 0.8)
  snappy: {
    type: "spring",
    stiffness: 600,
    damping: 42,
    mass: 1,
  },

  // Bouncy — entrances, checkboxes, badge pops, playful elements
  // Equivalent to SwiftUI: .spring(response: 0.4, dampingFraction: 0.55)
  bouncy: {
    type: "spring",
    stiffness: 380,
    damping: 24,
    mass: 1,
  },

  // Smooth — sheets, sidebars, drawers, large-area transitions
  // Equivalent to SwiftUI: .spring(response: 0.5, dampingFraction: 0.85)
  smooth: {
    type: "spring",
    stiffness: 300,
    damping: 38,
    mass: 1,
  },
} as const

// Simple opacity fades — the only place duration is used
export const fade = {
  fast: { duration: 0.15, ease: [0.25, 0, 0, 1] },
  base: { duration: 0.22, ease: [0.25, 0, 0, 1] },
} as const
