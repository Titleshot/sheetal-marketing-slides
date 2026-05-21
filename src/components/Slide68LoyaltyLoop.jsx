import { motion } from 'framer-motion'
import SlideBackdrop from './SlideBackdrop'
import FloatingParticles from './FloatingParticles'
import { EASE, reveal } from './motion'

const LOOP = [
  { en: 'Trust', ne: 'विश्वास' },
  { en: 'Habit', ne: 'Habit' },
  { en: 'Emotional connection', ne: 'भावनात्मक सम्बन्ध' },
  { en: 'Repeat purchase', ne: 'फेरि किनमेल' },
  { en: 'Loyalty', ne: 'Loyalty' },
  { en: 'Advocacy / recommendation', ne: 'सिफारिस', highlight: true },
]

export default function Slide68LoyaltyLoop() {
  return (
    <motion.section
      className="slide-frame slide-focus slide68-frame loy-atmo-finale relative w-full overflow-visible rounded-sm bg-black shadow-2xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      aria-label="Slide 68: The loyalty loop"
    >
      <SlideBackdrop glow="wide" />
      <FloatingParticles />
      <div className="loy-atmo-layer loy-atmo-finale-layer pointer-events-none absolute inset-0" aria-hidden />

      <div className="slide-inner slide-focus-layout slide68-layout relative z-10">
        <motion.p {...reveal(0)} className="slide-focus-eyebrow loy-eyebrow">
          Slide 68
        </motion.p>
        <motion.h1 {...reveal(0.1)} className="slide-focus-title slide-focus-title-xl loy-title-glow">
          THE LOYALTY LOOP
        </motion.h1>
        <motion.p {...reveal(0.18)} className="slide-focus-subtitle font-nepali">
          Loyalty Loop
        </motion.p>

        <motion.div {...reveal(0.26)} className="slide-focus-def slide68-def mx-auto max-w-3xl">
          <p className="slide-focus-def-en">
            Loyalty grows through repeated positive emotional experiences.
          </p>
          <p className="font-nepali slide-focus-def-ne">
            Repeated positive experience बाट Loyalty बढ्दै जान्छ।
          </p>
        </motion.div>

        <div className="loy-loop-path mx-auto w-full max-w-md shrink-0">
          <div className="loy-loop-rail" aria-hidden>
            <motion.div
              className="loy-loop-flow"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 1.6, delay: 0.38, ease: EASE }}
              style={{ transformOrigin: 'top center' }}
            />
          </div>
          <ul className="loy-loop-steps">
            {LOOP.map((step, i) => (
              <motion.li
                key={step.en}
                className={step.highlight ? 'loy-loop-step loy-loop-step-final' : 'loy-loop-step'}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.42 + i * 0.1, duration: 0.6, ease: EASE }}
              >
                <span className="loy-loop-dot" aria-hidden />
                <div>
                  <p className="loy-loop-en">{step.en}</p>
                  <p className="font-nepali loy-loop-ne">{step.ne}</p>
                </div>
              </motion.li>
            ))}
          </ul>
          <motion.p
            className="loy-loop-return font-nepali"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.05, duration: 0.7, ease: EASE }}
          >
            ↻ फेरि Trust सम्म — continuous loyalty loop
          </motion.p>
        </div>

        <motion.div
          className="slide68-bottom mx-auto w-full max-w-3xl shrink-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.1, delay: 0.95, ease: EASE }}
        >
          <div className="loy-finale-line loy-finale-line-primary">
            <p className="loy-finale-en">The strongest brands become part of human behavior.</p>
            <p className="font-nepali loy-finale-ne">सफल Brand हरू मानव व्यवहारको हिस्सा बन्छन्।</p>
          </div>
          <motion.div
            className="loy-emotional-reveal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 1.12, ease: EASE }}
          >
            <p className="loy-emotional-en">
              Modern marketing succeeds when customers emotionally choose to stay.
            </p>
            <p className="font-nepali loy-emotional-ne">
              आजको Marketing तब सफल हुन्छ जब ग्राहक emotionally जोडिएर बस्न चाहन्छन्।
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}
