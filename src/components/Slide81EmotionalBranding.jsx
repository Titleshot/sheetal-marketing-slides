import { motion } from 'framer-motion'
import SlideBackdrop from './SlideBackdrop'
import FloatingParticles from './FloatingParticles'
import { EASE, reveal } from './motion'

const PATHWAYS = [
  { en: 'Emotional identity', ne: 'Identity' },
  { en: 'Inspiration', ne: 'प्रेरणा' },
  { en: 'Motivation', ne: 'Motivation' },
  { en: 'Belonging', ne: 'Belonging' },
  { en: 'Trust', ne: 'विश्वास' },
  { en: 'Memories', ne: 'सम्झना' },
  { en: 'Lifestyle attachment', ne: 'Lifestyle' },
]

const EXAMPLES = [
  { en: 'Nike motivation', ne: 'Nike' },
  { en: 'Apple identity', ne: 'Apple' },
  { en: 'Starbucks mood', ne: 'Starbucks' },
  { en: 'Luxury lifestyle', ne: 'Luxury' },
]

export default function Slide81EmotionalBranding() {
  return (
    <motion.section
      className="slide-frame slide-focus slide81-frame mix-atmo-emotion relative w-full overflow-visible rounded-sm bg-black shadow-2xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      aria-label="Slide 81: Emotional branding"
    >
      <SlideBackdrop glow="wide" />
      <FloatingParticles />
      <div className="mix-atmo-layer mix-atmo-emotion-layer pointer-events-none absolute inset-0" aria-hidden />

      <div className="slide-inner slide-focus-layout slide81-layout relative z-10">
        <motion.p {...reveal(0)} className="slide-focus-eyebrow mix-eyebrow mix-eyebrow-promo">
          Slide 81
        </motion.p>
        <motion.h1 {...reveal(0.1)} className="slide-focus-title mix-title-glow mix-title-promo">
          EMOTIONAL BRANDING
        </motion.h1>
        <motion.p {...reveal(0.18)} className="slide-focus-subtitle font-nepali">
          Emotional Branding
        </motion.p>

        <motion.div {...reveal(0.26)} className="slide-focus-def mx-auto max-w-3xl">
          <p className="slide-focus-def-en">
            Strong brands connect with emotions, identity, and belonging.
          </p>
          <p className="font-nepali slide-focus-def-ne">
            सफल Brand हरू emotion, identity र belonging सँग जोडिन्छन्।
          </p>
        </motion.div>

        <motion.div
          className="mix-emotion-hub mx-auto shrink-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.34, duration: 0.9, ease: EASE }}
        >
          <div className="mix-emotion-bridge">
            <motion.div
              className="mix-emotion-human"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.7, ease: EASE }}
            >
              <p className="mix-emotion-side-en">Human</p>
              <p className="font-nepali mix-emotion-side-ne">मानिस</p>
            </motion.div>
            <div className="mix-emotion-pathways" aria-hidden>
              <motion.span
                className="mix-emotion-path mix-emotion-path-a"
                animate={{ opacity: [0.25, 0.85, 0.25] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
              />
              <motion.span
                className="mix-emotion-path mix-emotion-path-b"
                animate={{ opacity: [0.2, 0.7, 0.2] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
              />
              <motion.span
                className="mix-emotion-path mix-emotion-path-c"
                animate={{ opacity: [0.15, 0.65, 0.15] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
              />
            </div>
            <motion.div
              className="mix-emotion-brand"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.44, duration: 0.7, ease: EASE }}
            >
              <div className="mix-emotion-brand-glow" aria-hidden />
              <p className="mix-emotion-side-en">Brand</p>
              <p className="font-nepali mix-emotion-side-ne">ब्रान्ड</p>
            </motion.div>
          </div>
          <div className="mix-emotion-grid">
            {PATHWAYS.map((p, i) => (
              <motion.div
                key={p.en}
                className="mix-emotion-chip"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 + i * 0.06, duration: 0.5, ease: EASE }}
              >
                <span className="mix-emotion-chip-pulse" aria-hidden />
                <p className="mix-emotion-chip-en">{p.en}</p>
                <p className="font-nepali mix-emotion-chip-ne">{p.ne}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mix-insight-box mix-insight-emotion mx-auto max-w-2xl shrink-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.88, duration: 0.85, ease: EASE }}
        >
          <p className="mix-insight-en">People emotionally connect with brands that reflect their identity.</p>
          <p className="font-nepali mix-insight-ne">
            मानिसहरू आफ्नो identity झल्काउने Brand सँग emotionally जोडिन्छन्।
          </p>
        </motion.div>

        <div className="mix-example-chips mx-auto grid w-full max-w-3xl shrink-0 grid-cols-2 gap-2 sm:grid-cols-4">
          {EXAMPLES.map((ex, i) => (
            <motion.div
              key={ex.en}
              className="mix-example-chip mix-example-chip-promo"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.95 + i * 0.06, duration: 0.5, ease: EASE }}
            >
              <p className="mix-example-en">{ex.en}</p>
              <p className="font-nepali mix-example-ne">{ex.ne}</p>
            </motion.div>
          ))}
        </div>

        <motion.footer
          className="mix-finale-line mx-auto shrink-0 max-w-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.02, ease: EASE }}
        >
          <p className="mix-finale-en">Emotional branding creates stronger long-term loyalty.</p>
          <p className="font-nepali mix-finale-ne">Emotional Branding ले अझ बलियो long-term loyalty बनाउँछ।</p>
        </motion.footer>
      </div>
    </motion.section>
  )
}
