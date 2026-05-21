import { motion } from 'framer-motion'
import SlideBackdrop from './SlideBackdrop'
import FloatingParticles from './FloatingParticles'
import { EASE, reveal } from './motion'

const SIGNALS = [
  { en: 'Rs. 999 vs Rs. 1000', ne: '999 vs 1000' },
  { en: 'Luxury pricing', ne: 'Luxury' },
  { en: 'Limited offer', ne: 'Limited offer' },
  { en: 'Discount illusion', ne: 'Discount illusion' },
  { en: 'Premium perception', ne: 'Premium feel' },
  { en: 'Urgency pricing', ne: 'Urgency' },
]

export default function Slide76PsychologyOfPrice() {
  return (
    <motion.section
      className="slide-frame slide-focus slide76-frame mix-atmo-psych-price relative w-full overflow-visible rounded-sm bg-black shadow-2xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      aria-label="Slide 76: Psychology of price"
    >
      <SlideBackdrop glow="wide" />
      <FloatingParticles />
      <div className="mix-atmo-layer mix-atmo-psych-price-layer pointer-events-none absolute inset-0" aria-hidden />

      <div className="slide-inner slide-focus-layout slide76-layout relative z-10">
        <motion.p {...reveal(0)} className="slide-focus-eyebrow mix-eyebrow mix-eyebrow-price">
          Slide 76
        </motion.p>
        <motion.h1 {...reveal(0.1)} className="slide-focus-title mix-title-glow mix-title-price">
          THE PSYCHOLOGY OF PRICE
        </motion.h1>
        <motion.p {...reveal(0.18)} className="slide-focus-subtitle font-nepali">
          Price को Psychology
        </motion.p>

        <motion.div {...reveal(0.26)} className="slide-focus-def mx-auto max-w-3xl">
          <p className="slide-focus-def-en">Customers react emotionally to prices, not only logically.</p>
          <p className="font-nepali slide-focus-def-ne">
            ग्राहकहरूले Price लाई केवल logically होइन, emotionally पनि महसुस गर्छन्।
          </p>
        </motion.div>

        <motion.div
          className="mix-psych-price-hub mx-auto shrink-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.34, duration: 0.85, ease: EASE }}
        >
          <div className="mix-psych-price-brain">
            <div className="mix-psych-price-brain-glow" aria-hidden />
            <p className="mix-psych-price-brain-en">Price signals</p>
            <p className="font-nepali mix-psych-price-brain-ne">मूल्य संकेत</p>
            <motion.div
              className="mix-psych-price-compare"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <span className="mix-psych-price-old">Rs. 1000</span>
              <span className="mix-psych-price-arrow" aria-hidden>
                →
              </span>
              <span className="mix-psych-price-new">Rs. 999</span>
            </motion.div>
          </div>
          <div className="mix-psych-price-grid">
            {SIGNALS.map((s, i) => (
              <motion.div
                key={s.en}
                className="mix-psych-price-chip"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.42 + i * 0.07, duration: 0.55, ease: EASE }}
              >
                <motion.span
                  className="mix-psych-price-pulse"
                  aria-hidden
                  animate={{ opacity: [0.3, 0.9, 0.3] }}
                  transition={{ duration: 1.8, repeat: Infinity, delay: i * 0.2 }}
                />
                <p className="mix-psych-price-chip-en">{s.en}</p>
                <p className="font-nepali mix-psych-price-chip-ne">{s.ne}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mix-insight-box mix-insight-psych mx-auto max-w-2xl shrink-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.88, duration: 0.85, ease: EASE }}
        >
          <p className="mix-insight-en">Small pricing differences can create big psychological effects.</p>
          <p className="font-nepali mix-insight-ne">सानो Price फरकले ठूलो psychological असर गर्न सक्छ।</p>
        </motion.div>

        <motion.footer
          className="slide-focus-footer-line mx-auto shrink-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.98, ease: EASE }}
        >
          <p className="slide-focus-line-en">Modern pricing uses behavioral psychology.</p>
          <p className="font-nepali slide-focus-line-ne">आजको pricing behavioral psychology मा आधारित हुन्छ।</p>
        </motion.footer>
      </div>
    </motion.section>
  )
}
