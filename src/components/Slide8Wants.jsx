import { motion } from 'framer-motion'
import SlideBackdrop from './SlideBackdrop'
import FloatingParticles from './FloatingParticles'
import { EASE, reveal } from './motion'

const TRANSFORMS = [
  {
    id: 'food',
    basic: { label: 'Simple food', Icon: BasicFoodIcon },
    premium: { label: 'Pizza · KFC · Premium coffee', Icon: PremiumFoodIcon },
    delay: 0.5,
  },
  {
    id: 'transport',
    basic: { label: 'Basic transport', Icon: BasicBusIcon },
    premium: { label: 'Sports bike · Luxury car', Icon: LuxuryCarIcon },
    delay: 0.85,
  },
]

export default function Slide8Wants() {
  return (
    <motion.section
      className="slide-frame slide-focus slide8-frame relative w-full overflow-visible rounded-sm bg-black shadow-2xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      aria-label="Slide 8: Wants"
    >
      <SlideBackdrop glow="wide" />
      <FloatingParticles />

      <div className="slide-inner slide-focus-layout relative z-10">
        <motion.p {...reveal(0, 8)} className="slide-focus-eyebrow">
          Slide 8
        </motion.p>
        <motion.h1 {...reveal(0.12, 14)} className="slide-focus-title slide-focus-title-xl">
          WANTS
        </motion.h1>
        <motion.p {...reveal(0.25, 10)} className="slide-focus-subtitle font-nepali">
          चाहना
        </motion.p>

        <motion.div {...reveal(0.38, 12)} className="slide-focus-def max-w-3xl">
          <p className="slide-focus-def-en">
            Wants are specific desires shaped by personality, culture, and lifestyle.
          </p>
          <p className="font-nepali slide-focus-def-ne">
            व्यक्तित्व, संस्कृति र lifestyle अनुसार बन्ने चाहनालाई Wants भनिन्छ।
          </p>
        </motion.div>

        <div className="slide8-transforms w-full max-w-4xl shrink-0 space-y-5 md:flex-1 md:min-h-0 md:space-y-5">
          {TRANSFORMS.map((row) => (
            <TransformRow key={row.id} {...row} />
          ))}
        </div>

        <motion.div
          className="slide-focus-message shrink-0"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.65, ease: EASE }}
        >
          <p className="slide-focus-message-en">
            Needs become Wants when emotions and identity are added.
          </p>
          <p className="font-nepali slide-focus-message-ne">
            भावना र पहिचान जोडिँदा Needs, Wants मा बदलिन्छ।
          </p>
        </motion.div>
      </div>
    </motion.section>
  )
}

function TransformRow({ basic, premium, delay }) {
  return (
    <div className="slide8-row grid grid-cols-1 items-stretch gap-3 md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-4">
      <motion.div
        className="slide8-panel slide8-basic flex flex-col items-center justify-center rounded-xl border border-white/10 bg-white/[0.02] px-3 py-4 md:py-5"
        initial={{ opacity: 0, x: -24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay, ease: EASE }}
      >
        <basic.Icon className="h-10 w-10 text-white/50 md:h-12 md:w-12" />
        <p className="mt-2 text-center text-[10px] font-medium uppercase tracking-wider text-white/45 md:text-xs">
          {basic.label}
        </p>
      </motion.div>

      <motion.div
        className="flex flex-col items-center py-1"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: delay + 0.25, ease: EASE }}
        aria-hidden
      >
        <motion.svg
          viewBox="0 0 48 24"
          className="h-8 w-8 rotate-90 md:h-6 md:w-12 md:rotate-0"
          fill="none"
        >
          <motion.path
            d="M4 12 H36"
            stroke="rgba(201,162,39,0.5)"
            strokeWidth="1.5"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, delay: delay + 0.35, ease: EASE }}
          />
          <motion.path
            d="M32 8 L40 12 L32 16"
            stroke="rgba(201,162,39,0.7)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: delay + 0.7 }}
          />
        </motion.svg>
        <motion.div
          className="mt-1 h-1 w-1 rounded-full bg-gold-400"
          animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.4, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: delay + 0.5 }}
        />
      </motion.div>

      <motion.div
        className="slide8-panel slide8-premium relative flex flex-col items-center justify-center overflow-hidden rounded-xl border border-gold-400/30 bg-gradient-to-br from-gold-400/[0.12] to-transparent px-3 py-4 md:py-5"
        initial={{ opacity: 0, x: 24, filter: 'blur(6px)' }}
        animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
        transition={{ duration: 0.9, delay: delay + 0.45, ease: EASE }}
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,162,39,0.15)_0%,transparent_70%)]" />
        <premium.Icon className="relative h-10 w-10 text-gold-400 md:h-12 md:w-12" />
        <p className="relative mt-2 text-center text-[10px] font-medium uppercase tracking-wider text-gold-200/80 md:text-xs">
          {premium.label}
        </p>
      </motion.div>
    </div>
  )
}

function BasicFoodIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" aria-hidden>
      <ellipse cx="16" cy="18" rx="8" ry="4" stroke="currentColor" strokeWidth="1.2" />
      <path d="M11 14h10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  )
}

function PremiumFoodIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" aria-hidden>
      <path d="M8 14h16v8a4 4 0 01-4 4h-8a4 4 0 01-4-4v-8z" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="16" cy="12" r="5" stroke="currentColor" strokeWidth="1.2" />
      <text x="16" y="14" textAnchor="middle" fill="currentColor" fontSize="6" opacity="0.8">
        ★
      </text>
    </svg>
  )
}

function BasicBusIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" aria-hidden>
      <rect x="5" y="10" width="22" height="12" rx="2" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="11" cy="24" r="2.5" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="21" cy="24" r="2.5" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  )
}

function LuxuryCarIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" aria-hidden>
      <path d="M6 18h20l-2-6H8L6 18z" stroke="currentColor" strokeWidth="1.2" fill="currentColor" fillOpacity="0.1" />
      <circle cx="10" cy="20" r="2.5" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="22" cy="20" r="2.5" stroke="currentColor" strokeWidth="1.2" />
      <path d="M14 12h4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  )
}
