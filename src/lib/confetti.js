// Lazy-loaded confetti burst in the Irish Tools palette. Imported on demand so
// it stays out of the initial bundle until something worth celebrating happens.
export async function celebrate() {
  // Respect users who prefer reduced motion.
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  const { default: confetti } = await import('canvas-confetti')
  confetti({
    particleCount: 120,
    spread: 75,
    origin: { y: 0.6 },
    colors: ['#169b62', '#ff7a18', '#ffffff', '#0f7a4d'],
  })
}
