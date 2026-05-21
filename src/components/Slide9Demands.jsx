import { motion } from 'framer-motion'
import SlideBackdrop from './SlideBackdrop'
import FloatingParticles from './FloatingParticles'
import { EASE, reveal } from './motion'

const PURCHASES = [
  { label: 'iPhone', Icon: PhoneIcon, delay: 1.75 },
  { label: 'Food delivery', Icon: DeliveryIcon, delay: 1.95 },
  { label: 'Nike shoes', Icon: ShoeIcon, delay: 2.15 },
  { label: 'Pathao ride', Icon: RideIcon, delay: 2.35 },
]

const FORMULA_PARTS = [
  { text: 'WANT', delay: 0.55 },
  { text: '+', delay: 0.85, muted: true },
  { text: 'PURCHASING POWER', delay: 1.05, small: true },
  { text: '=', delay: 1.35, muted: true },
  { text: 'DEMAND', delay: 1.55, highlight: true },
]

export default function Slide9Demands() {
  return (
    <motion.section
      className="slide-frame slide-focus slide9-frame relative w-full overflow-visible rounded-sm bg-black shadow-2xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      aria-label="Slide 9: Demands"
    >
      <SlideBackdrop glow="center" />
      <FloatingParticles />

      <div className="slide-inner slide-focus-layout relative z-10">
        <motion.p {...reveal(0, 8)} className="slide-focus-eyebrow">
          Slide 9
        </motion.p>
        <motion.h1 {...reveal(0.12, 14)} className="slide-focus-title slide-focus-title-xl">
          DEMANDS
        </motion.h1>
        <motion.p {...reveal(0.25, 10)} className="slide-focus-subtitle font-nepali">
          माग
        </motion.p>

        <motion.div {...reveal(0.38, 12)} className="slide-focus-def max-w-2xl">
          <p className="slide-focus-def-en">Demand is a want supported by the ability to pay.</p>
          <p className="font-nepali slide-focus-def-ne">
            पैसा तिरेर किन्न सकिने Want लाई Demand भनिन्छ।
          </p>
        </motion.div>

        <div className="slide9-formula-wrap w-full max-w-3xl">
          <div className="slide9-formula flex flex-wrap items-center justify-center gap-x-2 gap-y-1 md:gap-x-3">
            {FORMULA_PARTS.map((part) => (
              <motion.span
                key={part.text + part.delay}
                className={`slide9-formula-part ${
                  part.highlight
                    ? 'slide9-formula-highlight'
                    : part.muted
                      ? 'slide9-formula-muted'
                      : part.small
                        ? 'slide9-formula-small'
                        : ''
                }`}
                initial={{ opacity: 0, y: 12, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.65, delay: part.delay, ease: EASE }}
              >
                {part.text}
              </motion.span>
            ))}
          </div>
          <motion.p
            className="mt-2 text-[10px] uppercase tracking-[0.35em] text-gold-400/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.7, duration: 0.6 }}
          >
            Desire + Money = Demand
          </motion.p>
        </div>

        <div className="slide9-purchases grid w-full max-w-3xl grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {PURCHASES.map((item) => (
            <motion.div
              key={item.label}
              className="slide9-purchase-card"
              initial={{ opacity: 0, y: 20, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: item.delay, ease: EASE }}
            >
              <div className="slide9-purchase-icon">
                <item.Icon className="h-7 w-7 md:h-8 md:w-8" />
              </div>
              <p className="slide9-purchase-label">{item.label}</p>
              <motion.div
                className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full border border-gold-400/40 bg-gold-400/20 text-[10px] text-gold-300"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: item.delay + 0.25, type: 'spring', stiffness: 260 }}
              >
                ₹
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.footer
          className="slide-focus-footer-line shrink-0"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 2.55, ease: EASE }}
        >
          <p className="slide-focus-line-en">Not every want becomes a demand.</p>
          <p className="font-nepali slide-focus-line-ne">हरेक Want, Demand बन्दैन।</p>
        </motion.footer>
      </div>
    </motion.section>
  )
}

function PhoneIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="7" y="2" width="10" height="20" rx="2" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  )
}

function DeliveryIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M3 8h12v8H3V8z" stroke="currentColor" strokeWidth="1.2" />
      <path d="M15 10h4l3 4v2h-7v-6z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
      <circle cx="7" cy="18" r="2" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="18" cy="18" r="2" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  )
}

function ShoeIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M3 14c3-1.5 7-2 12-1.5s7 0.5 9 1.5v3H3v-3z" stroke="currentColor" strokeWidth="1.2" fill="currentColor" fillOpacity="0.08" />
    </svg>
  )
}

function RideIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="7" cy="17" r="3" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="17" cy="17" r="3" stroke="currentColor" strokeWidth="1.2" />
      <path d="M7 17 L12 9 L15 12 L17 17" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M12 9 L10 17" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  )
}
