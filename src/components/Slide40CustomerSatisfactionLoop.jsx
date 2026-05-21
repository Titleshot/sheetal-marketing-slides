import { motion } from 'framer-motion'
import SlideBackdrop from './SlideBackdrop'
import FloatingParticles from './FloatingParticles'
import { EASE, reveal } from './motion'

const LOOP = [
  { en: 'Buy', ne: 'किन्ने' },
  { en: 'Good experience', ne: 'राम्रो अनुभव' },
  { en: 'Satisfaction', ne: 'सन्तुष्टि' },
  { en: 'Trust', ne: 'विश्वास' },
  { en: 'Return customer', ne: 'फेरि आउने ग्राहक', highlight: true },
]

export default function Slide40CustomerSatisfactionLoop() {
  return (
    <motion.section
      className="slide-frame slide-focus slide40-frame csat-atmo-warm relative w-full overflow-visible rounded-sm bg-black shadow-2xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      aria-label="Slide 40: Customer satisfaction loop"
    >
      <SlideBackdrop glow="top" />
      <FloatingParticles />
      <div className="csat-atmo-layer csat-atmo-warm-layer pointer-events-none absolute inset-0" aria-hidden />

      <div className="slide-inner slide-focus-layout slide-layout-dense slide40-layout relative z-10">
        <motion.p {...reveal(0)} className="slide-focus-eyebrow">
          Slide 40
        </motion.p>
        <motion.h1 {...reveal(0.1)} className="slide-focus-title slide-focus-title-xl">
          CUSTOMER SATISFACTION
        </motion.h1>
        <motion.p {...reveal(0.18)} className="slide-focus-subtitle font-nepali">
          ग्राहक सन्तुष्टि
        </motion.p>

        <motion.div {...reveal(0.26)} className="csat-hook mx-auto max-w-2xl">
          <p className="csat-hook-en">What makes customers come back again?</p>
          <p className="font-nepali csat-hook-ne">ग्राहक फेरि फर्किने कारण के हो?</p>
        </motion.div>

        <motion.div {...reveal(0.34)} className="slide-focus-def mx-auto max-w-3xl">
          <p className="slide-focus-def-en">
            Satisfied customers are more likely to return, trust the brand, and recommend it to
            others.
          </p>
          <p className="font-nepali slide-focus-def-ne">
            सन्तुष्ट ग्राहक फेरि फर्किने, Brand मा विश्वास गर्ने र अरूलाई सिफारिस गर्ने सम्भावना
            बढी हुन्छ।
          </p>
        </motion.div>

        <div className="csat-loop mx-auto w-full max-w-md shrink-0">
          <div className="csat-loop-rail" aria-hidden>
            <motion.div
              className="csat-loop-flow"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 1.5, delay: 0.42, ease: EASE }}
              style={{ transformOrigin: 'top center' }}
            />
          </div>
          <ul className="csat-loop-steps">
            {LOOP.map((step, i) => (
              <motion.li
                key={step.en}
                className={step.highlight ? 'csat-loop-step csat-loop-step-final' : 'csat-loop-step'}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.45 + i * 0.11, duration: 0.6, ease: EASE }}
              >
                <span className="csat-loop-dot" aria-hidden />
                <div>
                  <p className="csat-loop-en">{step.en}</p>
                  <p className="font-nepali csat-loop-ne">{step.ne}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>

        <motion.footer
          className="slide-focus-footer-line mx-auto shrink-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 1.1, ease: EASE }}
        >
          <p className="slide-focus-line-en">Satisfaction is the beginning of long-term loyalty.</p>
          <p className="font-nepali slide-focus-line-ne">सन्तुष्टि नै long-term loyalty को सुरुवात हो।</p>
        </motion.footer>
      </div>
    </motion.section>
  )
}
