import { motion } from 'framer-motion'
import SlideBackdrop from './SlideBackdrop'
import FloatingParticles from './FloatingParticles'
import { EASE, reveal } from './motion'

const REWARDS = [
  { en: 'Reward points', ne: 'अंक पुरस्कार' },
  { en: 'Memberships', ne: 'सदस्यता' },
  { en: 'VIP systems', ne: 'VIP प्रणाली' },
  { en: 'Subscriptions', ne: 'सदस्यता शुल्क' },
  { en: 'Airline miles', ne: 'एयरलाइन miles' },
  { en: 'Cashback', ne: 'Cashback' },
  { en: 'Vouchers', ne: 'भाउचर' },
]

const EXAMPLES = [
  { en: 'Starbucks rewards', ne: 'Starbucks' },
  { en: 'Daraz vouchers', ne: 'Daraz' },
  { en: 'Airline miles', ne: 'एयरलाइन' },
  { en: 'Netflix', ne: 'Netflix' },
]

const FORMULA = [
  { en: 'Satisfaction', ne: 'सन्तुष्टि' },
  { en: 'Rewards', ne: 'Reward' },
  { en: 'Trust', ne: 'विश्वास' },
  { en: 'Loyalty', ne: 'Loyalty', result: true },
]

export default function Slide47LoyaltySystems() {
  return (
    <motion.section
      className="slide-frame slide-focus slide47-frame crl-atmo-loyalty relative w-full overflow-visible rounded-sm bg-black shadow-2xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      aria-label="Slide 47: Loyalty systems"
    >
      <SlideBackdrop glow="wide" />
      <FloatingParticles />
      <div className="crl-atmo-layer crl-atmo-loyalty-layer pointer-events-none absolute inset-0" aria-hidden />

      <div className="slide-inner slide-focus-layout slide-layout-dense slide47-layout relative z-10">
        <motion.p {...reveal(0)} className="slide-focus-eyebrow">
          Slide 47
        </motion.p>
        <motion.h1 {...reveal(0.1)} className="slide-focus-title">
          LOYALTY SYSTEMS
        </motion.h1>
        <motion.p {...reveal(0.18)} className="slide-focus-subtitle font-nepali">
          Loyalty प्रणालीहरू
        </motion.p>

        <motion.div {...reveal(0.26)} className="slide-focus-def mx-auto max-w-3xl">
          <p className="slide-focus-def-en">
            Businesses reward customers to encourage long-term relationships.
          </p>
          <p className="font-nepali slide-focus-def-ne">
            Business हरूले long-term relationship बनाउन ग्राहकलाई reward दिन्छन्।
          </p>
        </motion.div>

        <div className="crl-loyalty-grid mx-auto grid w-full max-w-4xl shrink-0 grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
          {REWARDS.map((r, i) => (
            <motion.div
              key={r.en}
              className="crl-loyalty-card"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.36 + i * 0.07, duration: 0.55, ease: EASE }}
            >
              <span className="crl-loyalty-spark" aria-hidden />
              <p className="crl-loyalty-card-en">{r.en}</p>
              <p className="font-nepali crl-loyalty-card-ne">{r.ne}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="crl-formula mx-auto w-full max-w-3xl shrink-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.72, duration: 0.85, ease: EASE }}
        >
          <div className="crl-formula-row">
            {FORMULA.map((part, i) => (
              <motion.div
                key={part.en}
                className="crl-formula-segment"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.78 + i * 0.1, duration: 0.5, ease: EASE }}
              >
                {i === 1 && <span className="crl-formula-op" aria-hidden>+</span>}
                {i === 2 && <span className="crl-formula-op" aria-hidden>+</span>}
                {i === 3 && <span className="crl-formula-op" aria-hidden>=</span>}
                <div className={part.result ? 'crl-formula-part crl-formula-result' : 'crl-formula-part'}>
                  <p className="crl-formula-en">{part.en}</p>
                  <p className="font-nepali crl-formula-ne">{part.ne}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="crl-example-chips mx-auto grid w-full max-w-3xl shrink-0 grid-cols-2 gap-2 sm:grid-cols-4">
          {EXAMPLES.map((ex, i) => (
            <motion.div
              key={ex.en}
              className="crl-example-chip"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.95 + i * 0.06, duration: 0.5, ease: EASE }}
            >
              <p className="crl-example-en">{ex.en}</p>
              <p className="font-nepali crl-example-ne">{ex.ne}</p>
            </motion.div>
          ))}
        </div>

        <motion.footer
          className="crl-finale-line mx-auto shrink-0 max-w-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 1.1, ease: EASE }}
        >
          <p className="crl-finale-en">
            Loyalty systems encourage customers to return again and again.
          </p>
          <p className="font-nepali crl-finale-ne">
            Loyalty system ले ग्राहकलाई बारम्बार फर्किन प्रेरित गर्छ।
          </p>
        </motion.footer>
      </div>
    </motion.section>
  )
}
