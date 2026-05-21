import { motion } from 'framer-motion'
import SlideBackdrop from './SlideBackdrop'
import FloatingParticles from './FloatingParticles'
import { EASE, reveal } from './motion'

const PREMIUM = [
  { en: 'Luxury products', ne: 'Luxury' },
  { en: 'Elegant presentation', ne: 'Elegant' },
  { en: 'Exclusivity', ne: 'Exclusive' },
  { en: 'Status feeling', ne: 'Status' },
]

const AFFORDABLE = [
  { en: 'Accessibility', ne: 'Accessible' },
  { en: 'Budget-friendly', ne: 'Budget' },
  { en: 'Mass market', ne: 'Mass market' },
]

const EXAMPLES = [
  { en: 'Apple premium', ne: 'Apple' },
  { en: 'Luxury watches', ne: 'Watch' },
  { en: 'Budget stores', ne: 'Budget' },
  { en: 'Discount brands', ne: 'Discount' },
]

export default function Slide74Price() {
  return (
    <motion.section
      className="slide-frame slide-focus slide74-frame mix-atmo-price relative w-full overflow-visible rounded-sm bg-black shadow-2xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      aria-label="Slide 74: Price"
    >
      <SlideBackdrop glow="wide" />
      <FloatingParticles />
      <div className="mix-atmo-layer mix-atmo-price-layer pointer-events-none absolute inset-0" aria-hidden />

      <div className="slide-inner slide-focus-layout slide74-layout relative z-10">
        <motion.p {...reveal(0)} className="slide-focus-eyebrow mix-eyebrow mix-eyebrow-price">
          Slide 74 · Price
        </motion.p>
        <motion.h1 {...reveal(0.1)} className="slide-focus-title slide-focus-title-xl mix-title-glow mix-title-price">
          PRICE
        </motion.h1>
        <motion.p {...reveal(0.18)} className="slide-focus-subtitle font-nepali">
          मूल्य
        </motion.p>

        <motion.div {...reveal(0.26)} className="slide-focus-def mx-auto max-w-3xl">
          <p className="slide-focus-def-en">
            Price is not only money. It also communicates quality, status, and perceived value.
          </p>
          <p className="font-nepali slide-focus-def-ne">
            Price केवल पैसा मात्र होइन। यसले quality, status र value पनि देखाउँछ।
          </p>
        </motion.div>

        <div className="mix-price-split mx-auto grid w-full max-w-4xl shrink-0 gap-3 lg:grid-cols-2">
          <motion.div
            className="mix-price-panel mix-price-panel-premium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.36, duration: 0.65, ease: EASE }}
          >
            <p className="mix-price-panel-title">Premium pricing</p>
            <p className="font-nepali mix-price-panel-title-ne">Premium मूल्य</p>
            <ul className="mix-price-list">
              {PREMIUM.map((item) => (
                <li key={item.en}>
                  <p className="mix-price-item-en">{item.en}</p>
                  <p className="font-nepali mix-price-item-ne">{item.ne}</p>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="mix-price-panel mix-price-panel-budget"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.44, duration: 0.65, ease: EASE }}
          >
            <p className="mix-price-panel-title">Affordable pricing</p>
            <p className="font-nepali mix-price-panel-title-ne">सस्तो मूल्य</p>
            <ul className="mix-price-list">
              {AFFORDABLE.map((item) => (
                <li key={item.en}>
                  <p className="mix-price-item-en">{item.en}</p>
                  <p className="font-nepali mix-price-item-ne">{item.ne}</p>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          className="mix-insight-box mix-insight-price mx-auto max-w-2xl shrink-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.78, duration: 0.85, ease: EASE }}
        >
          <p className="mix-insight-en">Customers often judge value through price.</p>
          <p className="font-nepali mix-insight-ne">ग्राहकहरूले धेरैजसो Price बाट value judge गर्छन्।</p>
        </motion.div>

        <div className="mix-example-chips mx-auto grid w-full max-w-3xl shrink-0 grid-cols-2 gap-2 sm:grid-cols-4">
          {EXAMPLES.map((ex, i) => (
            <motion.div
              key={ex.en}
              className="mix-example-chip mix-example-chip-price"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.88 + i * 0.06, duration: 0.5, ease: EASE }}
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
          transition={{ delay: 0.98, ease: EASE }}
        >
          <p className="mix-finale-en">Price influences perception before experience.</p>
          <p className="font-nepali mix-finale-ne">Experience भन्दा पहिले Price ले perception बनाउँछ।</p>
        </motion.footer>
      </div>
    </motion.section>
  )
}
