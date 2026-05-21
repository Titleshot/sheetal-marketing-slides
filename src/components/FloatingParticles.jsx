import { motion } from 'framer-motion'

const PARTICLES = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  left: `${8 + (i * 7.3) % 84}%`,
  top: `${12 + (i * 11) % 76}%`,
  size: i % 3 === 0 ? 2 : 1.5,
  delay: i * 0.35,
  duration: 4 + (i % 4),
}))

export default function FloatingParticles({ className = '' }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      {PARTICLES.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full bg-gold-400/30"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
          }}
          animate={{
            opacity: [0.15, 0.55, 0.15],
            y: [0, -12, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}
