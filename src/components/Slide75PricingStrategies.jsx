import { motion } from 'framer-motion'
import SlideBackdrop from './SlideBackdrop'
import FloatingParticles from './FloatingParticles'
import { EASE, reveal } from './motion'

const STRATEGIES = [
  {
    en: 'Premium pricing',
    ne: 'Premium Pricing',
    descEn: 'High price for premium perception',
    descNe: 'Premium perception को लागि उच्च मूल्य',
    key: 'premium',
    example: 'Apple',
  },
  {
    en: 'Discount pricing',
    ne: 'Discount Pricing',
    descEn: 'Lower price to attract more customers',
    descNe: 'धेरै ग्राहक आकर्षित गर्न कम मूल्य',
    key: 'discount',
    example: 'Supermarkets',
  },
  {
    en: 'Penetration pricing',
    ne: 'Penetration Pricing',
    descEn: 'Low start price to enter market fast',
    descNe: 'बजार छिटो पस्न कम सुरुवाती मूल्य',
    key: 'penetration',
    example: 'Streaming',
  },
  {
    en: 'Psychological pricing',
    ne: 'Psychological Pricing',
    descEn: 'Emotional pricing tactics',
    descNe: 'भावनात्मक pricing tactics',
    key: 'psych',
    example: 'Rs. 999',
  },
]

export default function Slide75PricingStrategies() {
  return (
    <motion.section
      className="slide-frame slide-focus slide75-frame mix-atmo-strategy relative w-full overflow-visible rounded-sm bg-black shadow-2xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      aria-label="Slide 75: Pricing strategies"
    >
      <SlideBackdrop glow="wide" />
      <FloatingParticles />
      <div className="mix-atmo-layer mix-atmo-strategy-layer pointer-events-none absolute inset-0" aria-hidden />

      <div className="slide-inner slide-focus-layout slide75-layout relative z-10">
        <motion.p {...reveal(0)} className="slide-focus-eyebrow mix-eyebrow mix-eyebrow-price">
          Slide 75
        </motion.p>
        <motion.h1 {...reveal(0.1)} className="slide-focus-title mix-title-glow mix-title-price">
          PRICING STRATEGIES
        </motion.h1>
        <motion.p {...reveal(0.18)} className="slide-focus-subtitle font-nepali">
          Pricing Strategy हरू
        </motion.p>

        <motion.div {...reveal(0.26)} className="slide-focus-def mx-auto max-w-3xl">
          <p className="slide-focus-def-en">
            Businesses use different pricing strategies depending on goals and market position.
          </p>
          <p className="font-nepali slide-focus-def-ne">
            Business हरूले आफ्नो goal अनुसार फरक pricing strategy प्रयोग गर्छन्।
          </p>
        </motion.div>

        <div className="mix-strategy-grid mx-auto grid w-full max-w-4xl shrink-0 gap-2.5 sm:grid-cols-2">
          {STRATEGIES.map((s, i) => (
            <motion.div
              key={s.key}
              className={`mix-strategy-card mix-strategy-card-${s.key}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.36 + i * 0.1, duration: 0.6, ease: EASE }}
            >
              <span className="mix-strategy-num" aria-hidden>
                {i + 1}
              </span>
              <p className="mix-strategy-en">{s.en}</p>
              <p className="font-nepali mix-strategy-ne">{s.ne}</p>
              <p className="mix-strategy-desc-en">{s.descEn}</p>
              <p className="font-nepali mix-strategy-desc-ne">{s.descNe}</p>
              <p className="mix-strategy-ex">→ {s.example}</p>
            </motion.div>
          ))}
        </div>

        <motion.footer
          className="mix-finale-line mx-auto shrink-0 max-w-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, ease: EASE }}
        >
          <p className="mix-finale-en">Pricing strategy shapes customer perception and market position.</p>
          <p className="font-nepali mix-finale-ne">
            Pricing strategy ले customer perception र market position बनाउँछ।
          </p>
        </motion.footer>
      </div>
    </motion.section>
  )
}
