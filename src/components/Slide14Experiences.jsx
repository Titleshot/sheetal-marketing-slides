import { motion } from 'framer-motion'
import SlideBackdrop from './SlideBackdrop'
import FloatingParticles from './FloatingParticles'
import { EASE, reveal } from './motion'

const EXPERIENCES = [
  { id: 'starbucks', name: 'Starbucks', mood: 'Warm café', gradient: 'from-amber-900/40 to-transparent', Icon: CafeIcon },
  { id: 'apple', name: 'Apple Store', mood: 'Minimal calm', gradient: 'from-white/10 to-transparent', Icon: StoreIcon },
  { id: 'hotel', name: 'Luxury lobby', mood: 'Grand arrival', gradient: 'from-gold-400/20 to-transparent', Icon: LobbyIcon },
  { id: 'concert', name: 'Live concert', mood: 'Shared energy', gradient: 'from-violet-500/15 to-transparent', Icon: ConcertIcon },
  { id: 'shopping', name: 'Premium retail', mood: 'Desire & delight', gradient: 'from-rose-500/12 to-transparent', Icon: ShopIcon },
]

export default function Slide14Experiences() {
  return (
    <motion.section
      className="slide-frame slide-focus slide14-frame relative w-full overflow-visible rounded-sm bg-black shadow-2xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      aria-label="Slide 14: Experiences"
    >
      <SlideBackdrop glow="wide" />
      <FloatingParticles />
      <ExperienceAtmosphere />

      <div className="slide-inner slide-focus-layout slide14-layout relative z-10">
        <motion.p {...reveal(0, 8)} className="slide-focus-eyebrow">
          Slide 14
        </motion.p>
        <motion.h1 {...reveal(0.12, 14)} className="slide-focus-title slide-focus-title-xl">
          EXPERIENCES
        </motion.h1>
        <motion.p {...reveal(0.25, 10)} className="slide-focus-subtitle font-nepali">
          अनुभवहरू
        </motion.p>

        <motion.div {...reveal(0.35, 12)} className="slide-focus-def max-w-2xl">
          <p className="slide-focus-def-en">Modern brands create memorable emotional experiences.</p>
          <p className="font-nepali slide-focus-def-ne">
            आधुनिक Brand हरूले सम्झनलायक अनुभव बनाउँछन्।
          </p>
        </motion.div>

        <motion.div
          className="mo-experience-stage relative mx-auto min-h-0 w-full max-w-5xl flex-1 overflow-hidden rounded-2xl border border-gold-400/15"
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.45, ease: EASE }}
        >
          <motion.div
            className="mo-experience-pan absolute inset-0 flex gap-3 px-3 py-3 md:gap-4 md:px-4 md:py-4"
            animate={{ x: ['0%', '-8%', '0%'] }}
            transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
          >
            {EXPERIENCES.map((exp, i) => (
              <motion.div
                key={exp.id}
                className={`mo-experience-card relative flex min-w-[7rem] flex-1 flex-col items-center justify-end overflow-hidden rounded-xl border border-white/10 bg-gradient-to-t ${exp.gradient} pb-3 pt-8 md:min-w-[8.5rem] md:pb-4 md:pt-10`}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.5 + i * 0.12, ease: EASE }}
              >
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(255,220,180,0.12)_0%,transparent_65%)]" />
                <exp.Icon className="relative mb-2 h-8 w-8 text-gold-300/90 md:h-9 md:w-9" />
                <p className="relative text-[10px] font-bold uppercase tracking-wider text-white md:text-xs">
                  {exp.name}
                </p>
                <p className="relative mt-0.5 text-[9px] text-gold-200/55 md:text-[10px]">{exp.mood}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="slide-focus-message shrink-0 max-w-3xl"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 1.35, ease: EASE }}
        >
          <p className="slide-focus-message-en">
            People may forget products.
            <br />
            But they remember experiences.
          </p>
          <p className="font-nepali slide-focus-message-ne">
            मानिसहरूले Product बिर्सन सक्छन्, तर अनुभव सम्झिरहन्छन्।
          </p>
        </motion.div>
      </div>
    </motion.section>
  )
}

function ExperienceAtmosphere() {
  return (
    <div className="pointer-events-none absolute inset-0 z-[1]" aria-hidden>
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_50%_55%,rgba(180,120,60,0.12)_0%,transparent_55%)]"
        animate={{ opacity: [0.5, 0.85, 0.5] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute left-1/2 top-1/2 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(201,162,39,0.06) 0%, transparent 50%)',
        }}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}

function CafeIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" aria-hidden>
      <path d="M8 14h12v8a4 4 0 01-4 4h-4a4 4 0 01-4-4v-8z" stroke="currentColor" strokeWidth="1.2" />
      <path d="M20 15h3a2 2 0 010 4h-3" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  )
}

function StoreIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" aria-hidden>
      <rect x="6" y="10" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.2" />
      <path d="M16 10V6M12 6h8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  )
}

function LobbyIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" aria-hidden>
      <path d="M4 24V10l12-6 12 6v14" stroke="currentColor" strokeWidth="1.2" />
      <rect x="12" y="16" width="8" height="8" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  )
}

function ConcertIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" aria-hidden>
      <path d="M8 22c2-6 6-10 8-14 2 4 6 8 8 14" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="16" cy="8" r="2" fill="currentColor" fillOpacity="0.4" />
    </svg>
  )
}

function ShopIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" aria-hidden>
      <path d="M6 12h20l-2 14H8L6 12z" stroke="currentColor" strokeWidth="1.2" />
      <path d="M10 12V8a6 6 0 0112 0v4" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  )
}
