import { motion } from 'framer-motion'
import SlideBackdrop from './SlideBackdrop'
import FloatingParticles from './FloatingParticles'
import { EASE, reveal } from './motion'

const SURVIVAL = [
  { label: 'Food', ne: 'खाना', Icon: FoodIcon },
  { label: 'Water', ne: 'पानी', Icon: WaterIcon },
  { label: 'Shelter', ne: 'बास', Icon: ShelterIcon },
]

const LUXURY = [
  { label: 'iPhone', Icon: PhoneLuxIcon },
  { label: 'Luxury shoes', Icon: ShoeLuxIcon },
  { label: 'Premium coffee', Icon: CoffeeLuxIcon },
  { label: 'Sports bike', Icon: BikeIcon },
]

export default function Slide6HumanDesire() {
  return (
    <motion.section
      className="slide-frame slide-focus slide6-frame relative w-full overflow-visible rounded-sm bg-black shadow-2xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      aria-label="Slide 6: Understanding human desire"
    >
      <SlideBackdrop glow="wide" />
      <FloatingParticles />

      <div className="slide-inner slide-focus-layout slide6-layout relative z-10">
        <motion.p {...reveal(0, 8)} className="slide-focus-eyebrow">
          Slide 6
        </motion.p>
        <motion.h1 {...reveal(0.15, 12)} className="slide-focus-title">
          UNDERSTANDING HUMAN DESIRE
        </motion.h1>
        <motion.p {...reveal(0.3, 10)} className="slide-focus-subtitle font-nepali">
          मानिसको चाहना बुझ्ने
        </motion.p>

        <div className="slide6-visual min-h-0 w-full flex-1">
          <div className="slide6-split grid min-h-[10rem] grid-cols-[1fr_auto_1fr] items-center gap-2 md:min-h-[12rem] md:gap-4">
            <motion.div
              className="slide6-side slide6-side-survival flex flex-col items-end gap-3 pr-1 md:gap-4 md:pr-3"
              initial={{ opacity: 0, x: -28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.45, ease: EASE }}
            >
              {SURVIVAL.map((item, i) => (
                <motion.div
                  key={item.label}
                  className="slide6-float-item flex items-center gap-2 md:gap-2.5"
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 0.85, x: 0 }}
                  transition={{ delay: 0.55 + i * 0.12, duration: 0.6, ease: EASE }}
                >
                  <div className="hidden text-right md:block">
                    <p className="text-[10px] font-medium uppercase tracking-wider text-white/50 md:text-xs">
                      {item.label}
                    </p>
                    <p className="font-nepali text-[10px] text-gold-300/50 md:text-xs">{item.ne}</p>
                  </div>
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-white/60 md:h-12 md:w-12">
                    <item.Icon className="h-5 w-5 md:h-6 md:w-6" />
                  </div>
                </motion.div>
              ))}
              <p className="mt-1 text-[9px] uppercase tracking-[0.3em] text-white/30 md:text-[10px]">
                Survival
              </p>
            </motion.div>

            <motion.div
              className="slide6-silhouette relative flex flex-col items-center justify-center px-2"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.75, ease: EASE }}
            >
              <motion.div
                className="absolute h-28 w-16 rounded-full bg-gold-400/20 blur-2xl md:h-36 md:w-20"
                animate={{ opacity: [0.35, 0.7, 0.35], scale: [1, 1.08, 1] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              />
              <svg viewBox="0 0 80 140" className="relative z-10 h-24 w-14 md:h-32 md:w-[4.5rem]" aria-hidden>
                <ellipse cx="40" cy="18" rx="14" ry="16" fill="rgba(255,255,255,0.08)" stroke="rgba(201,162,39,0.45)" strokeWidth="1.2" />
                <path
                  d="M40 34 L40 88 M40 52 L22 72 M40 52 L58 72 M40 88 L28 118 M40 88 L52 118"
                  stroke="rgba(201,162,39,0.55)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
              <motion.div
                className="mt-2 h-px w-8 bg-gradient-to-r from-transparent via-gold-400/60 to-transparent"
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              />
            </motion.div>

            <motion.div
              className="slide6-side slide6-side-luxury flex flex-col items-start gap-3 pl-1 md:gap-4 md:pl-3"
              initial={{ opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1.35, ease: EASE }}
            >
              {LUXURY.map((item, i) => (
                <motion.div
                  key={item.label}
                  className="slide6-float-item flex items-center gap-2 md:gap-2.5"
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 0.9, x: 0 }}
                  transition={{ delay: 1.45 + i * 0.1, duration: 0.65, ease: EASE }}
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-gold-400/25 bg-gold-400/[0.08] text-gold-400/90 md:h-12 md:w-12">
                    <item.Icon className="h-5 w-5 md:h-6 md:w-6" />
                  </div>
                  <p className="hidden text-left text-[10px] font-medium uppercase tracking-wider text-gold-300/70 md:block md:text-xs">
                    {item.label}
                  </p>
                </motion.div>
              ))}
              <p className="mt-1 text-[9px] uppercase tracking-[0.3em] text-gold-400/45 md:text-[10px]">
                Desire
              </p>
            </motion.div>
          </div>
        </div>

        <motion.footer
          className="slide-focus-quote-block shrink-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 2.2, ease: EASE }}
        >
          <p className="slide-focus-quote">
            &ldquo;Marketing begins when businesses understand what humans truly desire.&rdquo;
          </p>
          <p className="font-nepali slide-focus-quote-ne mt-2">
            मानिस वास्तवमा के चाहन्छ भन्ने बुझ्ने ठाउँबाट Marketing सुरु हुन्छ।
          </p>
        </motion.footer>
      </div>
    </motion.section>
  )
}

function FoodIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <ellipse cx="12" cy="14" rx="7" ry="4" stroke="currentColor" strokeWidth="1.2" />
      <path d="M8 10c0-3 2-5 4-5s4 2 4 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  )
}

function WaterIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M12 4c-4 6-7 9-7 12a7 7 0 1014 0c0-3-3-6-7-12z" stroke="currentColor" strokeWidth="1.2" fill="currentColor" fillOpacity="0.08" />
    </svg>
  )
}

function ShelterIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M4 12 L12 5 L20 12" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
      <rect x="7" y="12" width="10" height="8" stroke="currentColor" strokeWidth="1.2" fill="currentColor" fillOpacity="0.06" />
    </svg>
  )
}

function PhoneLuxIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="7" y="2" width="10" height="20" rx="2" stroke="currentColor" strokeWidth="1.2" />
      <rect x="9" y="4" width="6" height="12" rx="1" fill="currentColor" fillOpacity="0.12" />
    </svg>
  )
}

function ShoeLuxIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M3 16c4-2 8-2.5 12-2s8 0.5 9 2v2H3v-2z" stroke="currentColor" strokeWidth="1.2" fill="currentColor" fillOpacity="0.1" />
    </svg>
  )
}

function CoffeeLuxIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M5 10h11v6a4 4 0 01-4 4H9a4 4 0 01-4-4v-6z" stroke="currentColor" strokeWidth="1.2" />
      <path d="M16 11h2a2 2 0 010 4h-2" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  )
}

function BikeIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="6" cy="17" r="3" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="18" cy="17" r="3" stroke="currentColor" strokeWidth="1.2" />
      <path d="M6 17 L12 8 L15 11 L18 17 M12 8 L9 17" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  )
}
