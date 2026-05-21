import { motion } from 'framer-motion'
import SlideBackdrop from './SlideBackdrop'
import FloatingParticles from './FloatingParticles'
import { EASE, reveal } from './motion'

const EXAMPLES = [
  { en: 'Spam calls', ne: 'स्प्याम कल' },
  { en: 'Pushy salespeople', ne: 'जबर्जस्ती बिक्री' },
  { en: 'Over-aggressive ads', ne: 'आक्रामक विज्ञापन' },
  { en: 'Forced promotions', ne: 'जबर्जस्ती प्रचार' },
]

const ALERTS = ['BUY NOW!', 'LIMITED TIME', '50% OFF', 'ACT FAST', 'DON\'T MISS']

export default function Slide29SellingConcept() {
  return (
    <motion.section
      className="slide-frame slide-focus slide29-frame mo-atmo-selling relative w-full overflow-visible rounded-sm bg-black shadow-2xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      aria-label="Slide 29: Selling concept"
    >
      <SlideBackdrop glow="wide" />
      <FloatingParticles />
      <div className="mo-atmo-layer mo-atmo-selling-layer pointer-events-none absolute inset-0" aria-hidden />

      <div className="slide-inner slide-focus-layout slide-layout-dense slide29-layout relative z-10">
        <motion.p {...reveal(0)} className="slide-focus-eyebrow">
          Slide 29
        </motion.p>
        <motion.h1 {...reveal(0.1)} className="slide-focus-title slide-focus-title-xl">
          SELLING CONCEPT
        </motion.h1>
        <motion.p {...reveal(0.18)} className="slide-focus-subtitle font-nepali">
          बिक्री अवधारणा
        </motion.p>

        <motion.div {...reveal(0.26)} className="slide-focus-def mx-auto max-w-3xl">
          <p className="slide-focus-def-en">
            Customers will not buy enough unless they are aggressively persuaded.
          </p>
          <p className="font-nepali slide-focus-def-ne">
            ग्राहकलाई धेरै convince नगरेसम्म पर्याप्त बिक्री हुँदैन।
          </p>
        </motion.div>

        <div className="mo-sell-chaos mx-auto w-full max-w-md shrink-0">
          <motion.div
            className="mo-sell-megaphone"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.38, ease: EASE }}
            aria-hidden
          >
            <svg viewBox="0 0 64 48" className="h-12 w-16 text-orange-400/80 md:h-14 md:w-20">
              <path
                d="M4 24 L28 12 L28 36 Z M28 18 L52 10 L52 38 L28 30 Z"
                fill="currentColor"
                opacity="0.85"
              />
            </svg>
          </motion.div>
          <div className="mo-sell-alerts">
            {ALERTS.map((text, i) => (
              <motion.span
                key={text}
                className="mo-sell-alert"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0.4, 1, 0.5] }}
                transition={{
                  opacity: {
                    delay: 0.45 + i * 0.12,
                    duration: 1.8,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  },
                }}
                style={{ '--alert-i': i }}
              >
                {text}
              </motion.span>
            ))}
          </div>
        </div>

        <motion.div
          className="mo-philosophy-box mo-philosophy-selling mx-auto max-w-2xl shrink-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.75, delay: 0.55, ease: EASE }}
        >
          <p className="mo-philosophy-en">Push harder. Sell more.</p>
          <p className="font-nepali mo-philosophy-ne">धेरै दबाब देऊ। धेरै बेच।</p>
        </motion.div>

        <div className="mo-example-chips mx-auto grid w-full max-w-3xl shrink-0 grid-cols-2 gap-2 sm:grid-cols-4">
          {EXAMPLES.map((ex, i) => (
            <motion.div
              key={ex.en}
              className="mo-chip mo-chip-selling"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65 + i * 0.07, duration: 0.5, ease: EASE }}
            >
              <p className="mo-chip-en">{ex.en}</p>
              <p className="font-nepali mo-chip-ne">{ex.ne}</p>
            </motion.div>
          ))}
        </div>

        <motion.footer
          className="slide-focus-footer-line mx-auto shrink-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.85, delay: 0.95, ease: EASE }}
        >
          <p className="slide-focus-line-en text-orange-200/90">
            Aggressive selling may create short-term sales but weak long-term trust.
          </p>
          <p className="font-nepali slide-focus-line-ne">
            धेरै दबाबले short-term बिक्री बढ्न सक्छ, तर long-term trust घट्न सक्छ।
          </p>
        </motion.footer>
      </div>
    </motion.section>
  )
}
