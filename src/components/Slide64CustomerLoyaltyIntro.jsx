import { motion } from 'framer-motion'
import SlideBackdrop from './SlideBackdrop'
import FloatingParticles from './FloatingParticles'
import { EASE, reveal } from './motion'

const PATH = [
  { en: 'Customer', ne: 'ग्राहक' },
  { en: 'Satisfaction', ne: 'सन्तुष्टि' },
  { en: 'Trust', ne: 'विश्वास' },
  { en: 'Emotional connection', ne: 'भावनात्मक सम्बन्ध' },
  { en: 'Loyalty', ne: 'Loyalty', highlight: true },
]

const EXAMPLES = [
  { en: 'Apple loyal users', ne: 'Apple' },
  { en: 'Starbucks regulars', ne: 'Starbucks' },
  { en: 'Nike fans', ne: 'Nike' },
  { en: 'Gaming communities', ne: 'Gaming' },
]

export default function Slide64CustomerLoyaltyIntro() {
  return (
    <motion.section
      className="slide-frame slide-focus slide64-frame loy-atmo-warm relative w-full overflow-visible rounded-sm bg-black shadow-2xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      aria-label="Slide 64: Customer loyalty intro"
    >
      <SlideBackdrop glow="top" />
      <FloatingParticles />
      <div className="loy-atmo-layer loy-atmo-warm-layer pointer-events-none absolute inset-0" aria-hidden />

      <div className="slide-inner slide-focus-layout slide64-layout relative z-10">
        <motion.p {...reveal(0)} className="slide-focus-eyebrow loy-eyebrow">
          Slide 64
        </motion.p>
        <motion.h1 {...reveal(0.1)} className="slide-focus-title slide-focus-title-xl loy-title-glow">
          CUSTOMER LOYALTY
        </motion.h1>
        <motion.p {...reveal(0.18)} className="slide-focus-subtitle font-nepali">
          ग्राहक Loyalty
        </motion.p>

        <motion.div {...reveal(0.26)} className="loy-hook mx-auto max-w-2xl">
          <p className="loy-hook-en">Why do some customers never leave certain brands?</p>
          <p className="font-nepali loy-hook-ne">किन केही ग्राहकहरूले कहिल्यै केही Brand छोड्दैनन्?</p>
        </motion.div>

        <motion.div {...reveal(0.34)} className="slide-focus-def mx-auto max-w-3xl">
          <p className="slide-focus-def-en">
            Some customers stop being simple buyers and become loyal long-term supporters.
          </p>
          <p className="font-nepali slide-focus-def-ne">
            केही ग्राहकहरू केवल buyer नभई loyal supporter बन्छन्।
          </p>
        </motion.div>

        <div className="loy-emotion-path mx-auto w-full max-w-md shrink-0">
          <div className="loy-emotion-rail" aria-hidden>
            <motion.div
              className="loy-emotion-flow"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 1.5, delay: 0.4, ease: EASE }}
              style={{ transformOrigin: 'top center' }}
            />
          </div>
          <ul className="loy-emotion-steps">
            {PATH.map((step, i) => (
              <motion.li
                key={step.en}
                className={`loy-emotion-step loy-emotion-tier-${i + 1}${
                  step.highlight ? ' loy-emotion-step-final' : ''
                }`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.44 + i * 0.11, duration: 0.65, ease: EASE }}
              >
                <span className="loy-emotion-dot" aria-hidden />
                <div>
                  <p className="loy-emotion-en">{step.en}</p>
                  <p className="font-nepali loy-emotion-ne">{step.ne}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>

        <div className="loy-example-chips mx-auto grid w-full max-w-3xl shrink-0 grid-cols-2 gap-2 sm:grid-cols-4">
          {EXAMPLES.map((ex, i) => (
            <motion.div
              key={ex.en}
              className="loy-example-chip"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 + i * 0.06, duration: 0.5, ease: EASE }}
            >
              <p className="loy-example-en">{ex.en}</p>
              <p className="font-nepali loy-example-ne">{ex.ne}</p>
            </motion.div>
          ))}
        </div>

        <motion.footer
          className="loy-finale-line mx-auto shrink-0 max-w-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 1.05, ease: EASE }}
        >
          <p className="loy-finale-en">Loyalty is built emotionally, not instantly.</p>
          <p className="font-nepali loy-finale-ne">Loyalty तुरुन्त होइन, emotionally निर्माण हुन्छ।</p>
        </motion.footer>
      </div>
    </motion.section>
  )
}
