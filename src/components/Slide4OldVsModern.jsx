import { motion } from 'framer-motion'
import { EASE, reveal } from './motion'

export default function Slide4OldVsModern() {
  return (
    <motion.section
      className="slide-frame slide4-frame relative flex w-full flex-col overflow-visible rounded-sm bg-black shadow-2xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      aria-label="Slide 4: Old vs modern marketing"
    >
      <div className="slide-inner slide4-layout flex w-full flex-col p-0">
        <motion.header
          {...reveal(0, 8)}
          className="slide4-header shrink-0 border-b border-white/[0.06] py-3 text-center md:py-4"
        >
          <p className="slide-eyebrow text-xs uppercase tracking-[0.35em] text-gold-400/60 md:text-sm">
            Slide 4
          </p>
        </motion.header>

        <div className="grid min-h-0 flex-1 grid-cols-1 md:grid-cols-2">
          <motion.div
            className="slide4-panel slide4-panel-old relative flex min-h-[14rem] flex-col items-center justify-center overflow-hidden bg-[#0a0a0c] px-6 py-8 text-center md:min-h-0"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.12, ease: EASE }}
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(90,90,100,0.12)_0%,transparent_72%)]" />
            <OldSellingVisual />
            <p className="relative z-10 mt-5 text-[10px] font-medium uppercase tracking-[0.35em] text-white/35 md:mt-6 md:text-xs">
              Old thinking
            </p>
            <p className="relative z-10 mt-3 text-2xl font-bold uppercase tracking-wide text-white/55 md:text-4xl lg:text-[2.75rem]">
              Sell Products
            </p>
            <p className="relative z-10 mt-2 text-sm text-white/40 md:text-base">Marketing = Selling</p>
          </motion.div>

          <motion.div
            className="slide4-panel slide4-panel-modern relative flex min-h-[14rem] flex-col items-center justify-center overflow-hidden border-t border-gold-400/15 bg-gradient-to-br from-gold-400/[0.1] via-gold-400/[0.04] to-black px-6 py-8 text-center md:min-h-0 md:border-l md:border-t-0"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.22, ease: EASE }}
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,162,39,0.14)_0%,transparent_68%)]" />
            <ModernPsychologyVisual />
            <p className="relative z-10 mt-5 text-[10px] font-medium uppercase tracking-[0.35em] text-gold-400/80 md:mt-6 md:text-xs">
              Modern thinking
            </p>
            <p className="relative z-10 mt-3 text-xl font-bold uppercase leading-tight tracking-wide text-gold-100 md:text-3xl lg:text-[2.5rem]">
              Understand People
            </p>
            <p className="font-nepali relative z-10 mt-2 text-sm text-gold-200/70 md:text-base">
              मानव व्यवहार बुझ्ने
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

function OldSellingVisual() {
  return (
    <svg viewBox="0 0 200 140" className="relative z-10 h-32 w-48 opacity-75 md:h-40 md:w-56" aria-hidden>
      <motion.g animate={{ x: [0, 4, 0] }} transition={{ duration: 2, repeat: Infinity }}>
        <path d="M40 90 L55 50 L75 90 Z" fill="none" stroke="rgba(255,255,255,0.22)" strokeWidth="1.5" />
        <ellipse cx="58" cy="48" rx="14" ry="10" fill="none" stroke="rgba(255,255,255,0.28)" strokeWidth="1.5" />
      </motion.g>
      <text x="95" y="55" fill="rgba(255,90,90,0.55)" fontSize="12" fontWeight="bold">
        BUY!
      </text>
      <text x="115" y="75" fill="rgba(255,90,90,0.4)" fontSize="10">
        SALE
      </text>
      <text x="130" y="95" fill="rgba(255,90,90,0.35)" fontSize="9">
        NOW!
      </text>
      <motion.path
        d="M20 100 L180 100"
        stroke="rgba(255,255,255,0.18)"
        strokeWidth="1"
        markerEnd="url(#arrowOld)"
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
      <rect x="25" y="108" width="50" height="18" rx="2" fill="none" stroke="rgba(255,255,255,0.14)" strokeWidth="1" />
      <rect x="85" y="108" width="50" height="18" rx="2" fill="none" stroke="rgba(255,255,255,0.14)" strokeWidth="1" />
      <defs>
        <marker id="arrowOld" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6" fill="rgba(255,255,255,0.35)" />
        </marker>
      </defs>
    </svg>
  )
}

function ModernPsychologyVisual() {
  return (
    <svg viewBox="0 0 200 140" className="relative z-10 h-32 w-48 md:h-40 md:w-56" aria-hidden>
      <motion.circle
        cx="100"
        cy="55"
        r="34"
        fill="none"
        stroke="rgba(201,162,39,0.4)"
        strokeWidth="1.5"
        animate={{ scale: [1, 1.06, 1], opacity: [0.5, 0.95, 0.5] }}
        transition={{ duration: 3, repeat: Infinity }}
        style={{ transformOrigin: '100px 55px' }}
      />
      <circle cx="100" cy="55" r="20" fill="rgba(201,162,39,0.08)" stroke="rgba(201,162,39,0.45)" strokeWidth="1" />
      <motion.path
        d="M70 55 Q85 35 100 55 Q115 75 130 55"
        fill="none"
        stroke="rgba(201,162,39,0.55)"
        strokeWidth="1.25"
        animate={{ pathLength: [0.4, 1, 0.4] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      />
      <circle cx="78" cy="48" r="4" fill="rgba(201,162,39,0.35)" />
      <circle cx="122" cy="48" r="4" fill="rgba(201,162,39,0.35)" />
      <circle cx="100" cy="68" r="3" fill="rgba(201,162,39,0.28)" />
      <ellipse cx="100" cy="108" rx="38" ry="12" fill="none" stroke="rgba(201,162,39,0.25)" strokeWidth="1" />
      <text x="100" y="111" textAnchor="middle" fill="rgba(201,162,39,0.5)" fontSize="9">
        emotion · trust · identity
      </text>
    </svg>
  )
}
