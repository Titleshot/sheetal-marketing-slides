import { motion } from 'framer-motion'

export default function SlideBackdrop({ glow = 'center' }) {
  const glowPos =
    glow === 'top'
      ? 'ellipse_70%_45%_at_50%_28%'
      : glow === 'wide'
        ? 'ellipse_80%_55%_at_50%_50%'
        : 'ellipse_65%_50%_at_50%_42%'

  return (
    <div className="pointer-events-none absolute inset-0">
      <div
        className={`absolute inset-0 bg-[radial-gradient(${glowPos},rgba(201,162,39,0.07)_0%,transparent_68%)]`}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_100%_at_50%_50%,transparent_38%,rgba(0,0,0,0.9)_100%)]" />
      <motion.div
        className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-400/[0.04] blur-[100px] md:h-80 md:w-80"
        animate={{ opacity: [0.25, 0.5, 0.25], scale: [1, 1.06, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-400/18 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold-400/12 to-transparent" />
    </div>
  )
}
