import { motion } from 'framer-motion'
import SlideBackdrop from './SlideBackdrop'
import { EASE, reveal } from './motion'

const BRANDS = [
  {
    id: 'apple',
    name: 'Apple',
    ne: 'अनुभव र पहिचान',
    tagline: 'Minimal luxury',
    icon: AppleVisual,
    cardClass:
      'border-white/15 bg-gradient-to-b from-white/[0.06] to-transparent hover:border-white/30',
    iconClass: 'border-white/20 text-white/90',
  },
  {
    id: 'tiktok',
    name: 'TikTok',
    ne: 'ध्यान र आदत',
    tagline: 'Fast energy',
    icon: TikTokVisual,
    cardClass:
      'border-fuchsia-500/25 bg-gradient-to-br from-fuchsia-500/[0.08] to-transparent hover:border-fuchsia-400/40',
    iconClass: 'border-fuchsia-400/30 text-fuchsia-300',
  },
  {
    id: 'daraz',
    name: 'Daraz',
    ne: 'सिफारिस र सुविधा',
    tagline: 'Shopping ease',
    icon: DarazVisual,
    cardClass:
      'border-orange-500/25 bg-gradient-to-b from-orange-500/[0.08] to-transparent hover:border-orange-400/40',
    iconClass: 'border-orange-400/30 text-orange-300',
  },
  {
    id: 'pathao',
    name: 'Pathao',
    ne: 'समय र सजिलो',
    tagline: 'Speed & motion',
    icon: PathaoVisual,
    cardClass:
      'border-emerald-500/25 bg-gradient-to-b from-emerald-500/[0.08] to-transparent hover:border-emerald-400/40',
    iconClass: 'border-emerald-400/30 text-emerald-300',
  },
]

export default function Slide5Examples() {
  return (
    <motion.section
      className="slide-frame slide5-frame relative w-full overflow-visible rounded-sm bg-black shadow-2xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      aria-label="Slide 5: Real world examples"
    >
      <SlideBackdrop glow="wide" />

      <div className="slide-inner slide5-layout relative z-10 flex w-full flex-col items-center justify-center px-5 md:px-10">
        <motion.header {...reveal(0.1, 12)} className="mb-8 shrink-0 text-center md:mb-10">
          <p className="slide-eyebrow mb-2 text-xs uppercase tracking-[0.35em] text-gold-400/60 md:text-sm">
            Slide 5
          </p>
          <h2 className="slide-title text-2xl font-semibold text-white md:text-4xl">
            Real World Marketing
          </h2>
          <p className="mt-2 text-base text-white/55 md:text-lg">They study human behavior.</p>
        </motion.header>

        <div className="grid w-full max-w-4xl grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
          {BRANDS.map((brand, i) => (
            <BrandCard key={brand.id} brand={brand} index={i} />
          ))}
        </div>
      </div>
    </motion.section>
  )
}

function BrandCard({ brand, index }) {
  const Icon = brand.icon
  return (
    <motion.div
      className={`group flex flex-col items-center rounded-2xl border px-3 py-5 transition-all duration-400 md:py-6 ${brand.cardClass}`}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, delay: 0.35 + index * 0.1, ease: EASE }}
      whileHover={{ y: -5, scale: 1.03 }}
    >
      <div
        className={`flex h-14 w-14 items-center justify-center rounded-xl border md:h-20 md:w-20 ${brand.iconClass}`}
      >
        <Icon className="h-8 w-8 md:h-10 md:w-10" />
      </div>
      <p className="mt-3 text-lg font-semibold text-white md:text-xl">{brand.name}</p>
      <p className="mt-0.5 text-[10px] uppercase tracking-wider text-white/40">{brand.tagline}</p>
      <p className="font-nepali mt-2 text-xs text-gold-200/60 md:text-sm">{brand.ne}</p>
    </motion.div>
  )
}

function AppleVisual({ className }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="currentColor" aria-hidden>
      <path d="M27 20c0-3.5 2.8-5.2 3-5.3-1.6-2.3-4.1-2.6-5-2.7-2.1-.2-4.1 1.3-5.2 1.3s-2.7-1.6-4.5-1.5c-2.3.1-4.5 1.4-5.7 3.5-2.4 4.2-.6 10.4 1.7 13.8 1.1 1.7 2.5 3.6 4.3 3.5 1.7-.1 2.4-1.1 4.5-1.1s2.7 1.1 4.5 1 1.9-2.8 3-4.4zM24.5 8.5c1-.1 2.4.7 3.2 1.6-.8 1-2.1 1.7-3.3 1.6-.1-1.2.1-2.5 0.1-3.2z" opacity="0.9" />
    </svg>
  )
}

function TikTokVisual({ className }) {
  return (
    <motion.svg
      className={className}
      viewBox="0 0 40 40"
      fill="currentColor"
      aria-hidden
      animate={{ rotate: [0, 5, -5, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      <path d="M26 8v14.5a5.5 5.5 0 11-5.5-5.5V22a9 9 0 109-9V8h4l-1-4h-3z" />
    </motion.svg>
  )
}

function DarazVisual({ className }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path d="M8 12h24l-2 20H10L8 12z" />
      <path d="M14 12V8a6 6 0 0112 0v4" />
      <circle cx="16" cy="28" r="1.5" fill="currentColor" />
      <circle cx="24" cy="28" r="1.5" fill="currentColor" />
    </svg>
  )
}

function PathaoVisual({ className }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <circle cx="14" cy="28" r="5" />
      <circle cx="28" cy="28" r="5" />
      <path d="M14 28 L22 14 L28 28" strokeLinecap="round" />
      <motion.path
        d="M32 10 L36 14"
        stroke="rgba(16,185,129,0.8)"
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 0.8, repeat: Infinity }}
      />
    </svg>
  )
}
