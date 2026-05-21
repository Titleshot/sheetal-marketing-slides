import { motion } from 'framer-motion'
import SlideBackdrop from './SlideBackdrop'
import FloatingParticles from './FloatingParticles'
import { EASE, reveal } from './motion'

const ONCE = [
  { en: 'Buys once', ne: 'एकपटक किन्छ' },
  { en: 'Then disappears', ne: 'अनि हराउँछ' },
]

const LOYAL = [
  { en: 'Repeat purchases', ne: 'फेरि किनमेल' },
  { en: 'Subscriptions', ne: 'Subscription' },
  { en: 'Recommendations', ne: 'सिफारिस' },
  { en: 'Long-term relationship', ne: 'लामो सम्बन्ध' },
]

const EXAMPLES = [
  { en: 'Netflix', ne: 'Netflix' },
  { en: 'Apple', ne: 'Apple' },
  { en: 'Starbucks', ne: 'Starbucks' },
  { en: 'Amazon Prime', ne: 'Prime' },
]

export default function Slide60CustomerLifetimeValue() {
  return (
    <motion.section
      className="slide-frame slide-focus slide60-frame cap-atmo-clv relative w-full overflow-visible rounded-sm bg-black shadow-2xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      aria-label="Slide 60: Customer lifetime value"
    >
      <SlideBackdrop glow="wide" />
      <FloatingParticles />
      <div className="cap-atmo-layer cap-atmo-clv-layer pointer-events-none absolute inset-0" aria-hidden />

      <div className="slide-inner slide-focus-layout slide60-layout relative z-10">
        <motion.p {...reveal(0)} className="slide-focus-eyebrow cap-eyebrow">
          Slide 60
        </motion.p>
        <motion.h1 {...reveal(0.1)} className="slide-focus-title cap-title-glow">
          CUSTOMER LIFETIME VALUE (CLV)
        </motion.h1>
        <motion.p {...reveal(0.18)} className="slide-focus-subtitle font-nepali">
          ग्राहकको दीर्घकालीन मूल्य
        </motion.p>

        <motion.div {...reveal(0.26)} className="slide-focus-def mx-auto max-w-3xl">
          <p className="slide-focus-def-en">One loyal customer can create value for many years.</p>
          <p className="font-nepali slide-focus-def-ne">एउटा loyal ग्राहकले वर्षौंसम्म value दिन सक्छ।</p>
        </motion.div>

        <div className="cap-clv-split mx-auto grid w-full max-w-4xl shrink-0 gap-3 lg:grid-cols-2">
          <motion.div
            className="cap-clv-panel cap-clv-panel-once"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.36, duration: 0.65, ease: EASE }}
          >
            <p className="cap-clv-panel-title">One-time customer</p>
            <p className="font-nepali cap-clv-panel-title-ne">एकपटकको ग्राहक</p>
            <ul className="cap-clv-list">
              {ONCE.map((item) => (
                <li key={item.en}>
                  <p className="cap-clv-item-en">{item.en}</p>
                  <p className="font-nepali cap-clv-item-ne">{item.ne}</p>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="cap-clv-panel cap-clv-panel-loyal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.44, duration: 0.65, ease: EASE }}
          >
            <p className="cap-clv-panel-title">Loyal customer</p>
            <p className="font-nepali cap-clv-panel-title-ne">Loyal ग्राहक</p>
            <ul className="cap-clv-list">
              {LOYAL.map((item, i) => (
                <motion.li
                  key={item.en}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.52 + i * 0.08, duration: 0.5, ease: EASE }}
                >
                  <p className="cap-clv-item-en">{item.en}</p>
                  <p className="font-nepali cap-clv-item-ne">{item.ne}</p>
                </motion.li>
              ))}
            </ul>
            <motion.div
              className="cap-clv-stack"
              aria-hidden
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
            >
              + + +
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="cap-formula mx-auto max-w-2xl shrink-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.78, duration: 0.85, ease: EASE }}
        >
          <p className="cap-formula-en">Long-term trust = higher customer value</p>
          <p className="font-nepali cap-formula-ne">दीर्घकालीन विश्वास = धेरै ग्राहक मूल्य</p>
        </motion.div>

        <div className="cap-example-chips mx-auto grid w-full max-w-3xl shrink-0 grid-cols-2 gap-2 sm:grid-cols-4">
          {EXAMPLES.map((ex, i) => (
            <motion.div
              key={ex.en}
              className="cap-example-chip"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.88 + i * 0.06, duration: 0.5, ease: EASE }}
            >
              <p className="cap-example-en">{ex.en}</p>
              <p className="font-nepali cap-example-ne">{ex.ne}</p>
            </motion.div>
          ))}
        </div>

        <motion.footer
          className="cap-finale-line mx-auto shrink-0 max-w-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.02, ease: EASE }}
        >
          <p className="cap-finale-en">A loyal customer is often worth far more than a single purchase.</p>
          <p className="font-nepali cap-finale-ne">Loyal ग्राहक एकपटकको बिक्रीभन्दा धेरै मूल्यवान हुन्छ।</p>
        </motion.footer>
      </div>
    </motion.section>
  )
}
