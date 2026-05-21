import { motion } from 'framer-motion'
import SlideBackdrop from './SlideBackdrop'
import FloatingParticles from './FloatingParticles'
import { EASE, reveal } from './motion'

const PILLARS = [
  { en: 'Understanding humans', ne: 'मानिस बुझ्ने' },
  { en: 'Creating value', ne: 'value सिर्जना गर्ने' },
  { en: 'Building trust', ne: 'विश्वास निर्माण गर्ने' },
  { en: 'Designing experiences', ne: 'experience बनाउने' },
  { en: 'Improving lives', ne: 'जीवनलाई राम्रो बनाउने' },
]

export default function Slide34ModernRealization() {
  return (
    <motion.section
      className="slide-frame slide-focus slide34-frame adv-atmo-finale relative w-full overflow-visible rounded-sm bg-black shadow-2xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      aria-label="Slide 34: Modern realization of marketing"
    >
      <SlideBackdrop glow="wide" />
      <FloatingParticles />
      <div className="adv-atmo-layer adv-atmo-finale-layer pointer-events-none absolute inset-0" aria-hidden />

      <div className="slide-inner slide-focus-layout slide-layout-dense slide34-layout relative z-10">
        <motion.p {...reveal(0)} className="slide-focus-eyebrow">
          Slide 34
        </motion.p>
        <motion.h1 {...reveal(0.1)} className="slide-focus-title slide-focus-title-xl">
          THE MODERN REALIZATION OF MARKETING
        </motion.h1>
        <motion.p {...reveal(0.18)} className="slide-focus-subtitle font-nepali">
          आजको Marketing को वास्तविकता
        </motion.p>

        <motion.div
          className="adv-finale-hook mx-auto max-w-3xl shrink-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.85, delay: 0.28, ease: EASE }}
        >
          <p className="adv-finale-hook-en">
            Modern marketing is no longer just about selling products.
          </p>
          <p className="font-nepali adv-finale-hook-ne">
            आजको Marketing केवल सामान बेच्ने कुरा मात्र होइन।
          </p>
        </motion.div>

        <motion.div
          className="adv-finale-universe mx-auto shrink-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.1, delay: 0.42, ease: EASE }}
        >
          <div className="adv-finale-ring adv-finale-ring-a" aria-hidden />
          <div className="adv-finale-ring adv-finale-ring-b" aria-hidden />
          <div className="adv-finale-core-glow" aria-hidden />
          <svg viewBox="0 0 80 110" className="adv-finale-human" aria-hidden>
            <ellipse
              cx="40"
              cy="14"
              rx="12"
              ry="13"
              fill="rgba(255,255,255,0.07)"
              stroke="rgba(201,162,39,0.6)"
              strokeWidth="1.2"
            />
            <path
              d="M40 27 L40 72 M40 44 L26 60 M40 44 L54 60 M40 72 L32 96 M40 72 L48 96"
              stroke="rgba(201,162,39,0.7)"
              strokeWidth="1.4"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        </motion.div>

        <motion.div
          className="adv-finale-pillars mx-auto w-full max-w-2xl shrink-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.58, ease: EASE }}
        >
          <p className="adv-finale-it-is">It is about:</p>
          <ul className="adv-finale-pillar-list">
            {PILLARS.map((p, i) => (
              <motion.li
                key={p.en}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.68 + i * 0.1, duration: 0.55, ease: EASE }}
              >
                <span className="adv-finale-pillar-en">{p.en}</span>
                <span className="font-nepali adv-finale-pillar-ne">{p.ne}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.footer
          className="adv-finale-final mx-auto shrink-0 max-w-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.2, ease: EASE }}
        >
          <p className="adv-finale-final-en">
            Great marketing understands people before selling anything.
          </p>
          <p className="font-nepali adv-finale-final-ne">
            राम्रो Marketing ले बेच्नुभन्दा पहिले मानिसलाई बुझ्छ।
          </p>
        </motion.footer>
      </div>
    </motion.section>
  )
}
