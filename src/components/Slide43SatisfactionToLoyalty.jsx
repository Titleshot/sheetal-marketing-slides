import { motion } from 'framer-motion'
import SlideBackdrop from './SlideBackdrop'
import FloatingParticles from './FloatingParticles'
import { EASE, reveal } from './motion'

const PATH = [
  { en: 'Satisfaction', ne: 'सन्तुष्टि' },
  { en: 'Trust', ne: 'विश्वास' },
  { en: 'Emotional connection', ne: 'भावनात्मक सम्बन्ध' },
  { en: 'Repeat purchase', ne: 'फेरि किनमेल' },
  { en: 'Loyalty', ne: 'वफादारी', highlight: true },
]

const EXAMPLES = [
  { en: 'Apple ecosystem', ne: 'Apple' },
  { en: 'Starbucks regulars', ne: 'Starbucks' },
  { en: 'Netflix subscribers', ne: 'Netflix' },
  { en: 'Loyal restaurants', ne: 'Restaurant' },
]

export default function Slide43SatisfactionToLoyalty() {
  return (
    <motion.section
      className="slide-frame slide-focus slide43-frame csat-atmo-warm relative w-full overflow-visible rounded-sm bg-black shadow-2xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      aria-label="Slide 43: From satisfaction to loyalty"
    >
      <SlideBackdrop glow="wide" />
      <FloatingParticles />
      <div className="csat-atmo-layer csat-atmo-gold-layer pointer-events-none absolute inset-0" aria-hidden />

      <div className="slide-inner slide-focus-layout slide-layout-dense slide43-layout relative z-10">
        <motion.p {...reveal(0)} className="slide-focus-eyebrow">
          Slide 43
        </motion.p>
        <motion.h1 {...reveal(0.1)} className="slide-focus-title slide-focus-title-xl">
          FROM SATISFACTION TO LOYALTY
        </motion.h1>
        <motion.p {...reveal(0.18)} className="slide-focus-subtitle font-nepali">
          सन्तुष्टिबाट Loyalty सम्म
        </motion.p>

        <motion.div {...reveal(0.26)} className="slide-focus-def mx-auto max-w-3xl">
          <p className="slide-focus-def-en">
            Satisfied customers slowly become loyal supporters of a brand.
          </p>
          <p className="font-nepali slide-focus-def-ne">सन्तुष्ट ग्राहक विस्तारै loyal supporter बन्छन्।</p>
        </motion.div>

        <div className="csat-loyalty-path mx-auto w-full max-w-md shrink-0">
          <div className="csat-loyalty-rail" aria-hidden>
            <motion.div
              className="csat-loyalty-flow"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 1.4, delay: 0.38, ease: EASE }}
              style={{ transformOrigin: 'top center' }}
            />
          </div>
          <ul className="csat-loyalty-steps">
            {PATH.map((step, i) => (
              <motion.li
                key={step.en}
                className={
                  step.highlight ? 'csat-loyalty-step csat-loyalty-step-final' : 'csat-loyalty-step'
                }
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.42 + i * 0.1, duration: 0.6, ease: EASE }}
              >
                <span className="csat-loyalty-dot" aria-hidden />
                <div>
                  <p className="csat-loyalty-en">{step.en}</p>
                  <p className="font-nepali csat-loyalty-ne">{step.ne}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>

        <div className="csat-example-chips mx-auto grid w-full max-w-3xl shrink-0 grid-cols-2 gap-2 sm:grid-cols-4">
          {EXAMPLES.map((ex, i) => (
            <motion.div
              key={ex.en}
              className="csat-example-chip"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.85 + i * 0.07, duration: 0.5, ease: EASE }}
            >
              <p className="csat-example-en">{ex.en}</p>
              <p className="font-nepali csat-example-ne">{ex.ne}</p>
            </motion.div>
          ))}
        </div>

        <motion.footer
          className="csat-finale-line mx-auto shrink-0 max-w-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.1, delay: 1.1, ease: EASE }}
        >
          <p className="csat-finale-en">
            Loyal customers are more valuable than one-time buyers.
          </p>
          <p className="font-nepali csat-finale-ne">
            Loyal ग्राहकहरू एकपटक किन्ने ग्राहकभन्दा धेरै मूल्यवान हुन्छन्।
          </p>
        </motion.footer>
      </div>
    </motion.section>
  )
}
