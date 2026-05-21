export const EASE = [0.22, 1, 0.36, 1]

/** Opacity-only reveal — avoids scroll jump from layout/anchor shifts while animating */
export const reveal = (delay = 0) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.7, delay, ease: EASE },
})

/** Optional motion with slight Y (use sparingly on short slides) */
export const revealLift = (delay = 0, y = 12) => ({
  initial: { opacity: 0, y },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: EASE },
})

export const revealScale = (delay = 0) => ({
  initial: { opacity: 0, scale: 0.96 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.8, delay, ease: EASE },
})
