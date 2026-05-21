import { motion } from 'framer-motion'
import SlideBackdrop from './SlideBackdrop'
import FloatingParticles from './FloatingParticles'
import { EASE, reveal } from './motion'

const LOOP = [
  { en: 'Business', ne: 'Business' },
  { en: 'Value creation', ne: 'Value सिर्जना' },
  { en: 'Customer satisfaction', ne: 'ग्राहक सन्तुष्टि' },
  { en: 'Loyalty', ne: 'Loyalty' },
  { en: 'Business growth', ne: 'Business growth', highlight: true },
]

export default function Slide59CapturingValueIntro() {
  return (
    <motion.section
      className="slide-frame slide-focus slide59-frame cap-atmo-growth relative w-full overflow-visible rounded-sm bg-black shadow-2xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      aria-label="Slide 59: Capturing value from customers"
    >
      <SlideBackdrop glow="top" />
      <FloatingParticles />
      <div className="cap-atmo-layer cap-atmo-growth-layer pointer-events-none absolute inset-0" aria-hidden />

      <div className="slide-inner slide-focus-layout slide59-layout relative z-10">
        <motion.p {...reveal(0)} className="slide-focus-eyebrow cap-eyebrow">
          Slide 59
        </motion.p>
        <motion.h1 {...reveal(0.1)} className="slide-focus-title slide-focus-title-xl cap-title-glow">
          CAPTURING VALUE FROM CUSTOMERS
        </motion.h1>
        <motion.p {...reveal(0.18)} className="slide-focus-subtitle font-nepali">
          ग्राहकबाट Value प्राप्त गर्ने प्रक्रिया
        </motion.p>

        <motion.div {...reveal(0.26)} className="cap-hook mx-auto max-w-2xl">
          <p className="cap-hook-en">How do successful businesses grow continuously?</p>
          <p className="font-nepali cap-hook-ne">सफल Business हरू लगातार कसरी बढ्छन्?</p>
        </motion.div>

        <motion.div {...reveal(0.34)} className="slide-focus-def mx-auto max-w-3xl">
          <p className="slide-focus-def-en">
            Businesses create value for customers, and in return customers create value for
            businesses.
          </p>
          <p className="font-nepali slide-focus-def-ne">
            Business ले ग्राहकलाई value दिन्छ, अनि ग्राहकले Business लाई value फर्काउँछन्।
          </p>
        </motion.div>

        <div className="cap-value-loop mx-auto w-full max-w-md shrink-0">
          <div className="cap-value-loop-rail" aria-hidden>
            <motion.div
              className="cap-value-loop-flow"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 1.6, delay: 0.42, ease: EASE }}
              style={{ transformOrigin: 'top center' }}
            />
          </div>
          <ul className="cap-value-loop-steps">
            {LOOP.map((step, i) => (
              <motion.li
                key={step.en}
                className={
                  step.highlight ? 'cap-value-step cap-value-step-final' : 'cap-value-step'
                }
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.46 + i * 0.11, duration: 0.6, ease: EASE }}
              >
                <span className="cap-value-dot" aria-hidden />
                <div>
                  <p className="cap-value-en">{step.en}</p>
                  <p className="font-nepali cap-value-ne">{step.ne}</p>
                </div>
              </motion.li>
            ))}
          </ul>
          <motion.p
            className="cap-loop-return font-nepali"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.05, duration: 0.7, ease: EASE }}
          >
            ↻ फेरि Business सम्म — continuous growth loop
          </motion.p>
        </div>

        <motion.footer
          className="cap-finale-line mx-auto shrink-0 max-w-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 1.1, ease: EASE }}
        >
          <p className="cap-finale-en">
            Strong customer relationships create long-term business growth.
          </p>
          <p className="font-nepali cap-finale-ne">
            मजबुत ग्राहक सम्बन्धले long-term Business growth ल्याउँछ।
          </p>
        </motion.footer>
      </div>
    </motion.section>
  )
}
